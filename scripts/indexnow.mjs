// Pings IndexNow with every URL in dist/sitemap.xml. IndexNow is a shared
// endpoint: one submission reaches Bing, Yandex, Seznam and Naver, and Bing's
// index is what Yahoo, DuckDuckGo and ChatGPT search read from. Typical
// turnaround is minutes rather than the days a sitemap crawl takes.
//
// Ownership is proven by KEY being served as plain text at
// https://portfolioframe.com/<KEY>.txt — that file lives in public/, so it
// ships with every build. Rotating the key means renaming that file too.
//
// Usage: node scripts/indexnow.mjs          (submit every sitemap URL)
//        node scripts/indexnow.mjs <url>... (submit only the URLs given)
//
// Run it after a deploy has gone live. Submitting a URL that 404s or that
// still serves the old content is worse than not submitting at all.
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_URL = "https://portfolioframe.com";
const HOST = new URL(SITE_URL).host;
const KEY = "3f5aab68f9e1568128ff627df2818a3a";
const ENDPOINT = "https://api.indexnow.org/indexnow";

function urlsFromSitemap() {
  const sitemapPath = path.resolve(__dirname, "..", "dist", "sitemap.xml");
  if (!fs.existsSync(sitemapPath)) {
    throw new Error(
      `no sitemap at ${sitemapPath} — run "npm run build" first, or pass URLs as arguments`,
    );
  }
  const xml = fs.readFileSync(sitemapPath, "utf-8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim());
}

async function assertKeyFileIsLive() {
  const keyUrl = `${SITE_URL}/${KEY}.txt`;
  const res = await fetch(keyUrl);
  if (!res.ok) {
    throw new Error(
      `key file not reachable at ${keyUrl} (HTTP ${res.status}) — deploy public/${KEY}.txt before submitting`,
    );
  }
  const body = (await res.text()).trim();
  if (body !== KEY) {
    throw new Error(`key file at ${keyUrl} contains "${body}", expected "${KEY}"`);
  }
}

async function main() {
  const args = process.argv.slice(2);
  const urlList = args.length > 0 ? args : urlsFromSitemap();

  const foreign = urlList.filter((u) => new URL(u).host !== HOST);
  if (foreign.length > 0) {
    throw new Error(`refusing to submit URLs outside ${HOST}: ${foreign.join(", ")}`);
  }

  await assertKeyFileIsLive();

  // IndexNow caps a single submission at 10,000 URLs; chunk anyway so this
  // keeps working as the locale/page matrix grows.
  const CHUNK = 1000;
  for (let i = 0; i < urlList.length; i += CHUNK) {
    const chunk = urlList.slice(i, i + CHUNK);
    const res = await fetch(ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json; charset=utf-8" },
      body: JSON.stringify({
        host: HOST,
        key: KEY,
        keyLocation: `${SITE_URL}/${KEY}.txt`,
        urlList: chunk,
      }),
    });

    // 200 accepted, 202 accepted but key still being validated. Anything else
    // is a real failure worth surfacing: 403 means the key file didn't check
    // out, 422 means a URL didn't belong to the host.
    if (res.status !== 200 && res.status !== 202) {
      const detail = await res.text().catch(() => "");
      throw new Error(`IndexNow returned ${res.status} ${res.statusText} ${detail}`.trim());
    }
    console.log(`IndexNow accepted ${chunk.length} url(s) — HTTP ${res.status}`);
  }

  console.log(`submitted ${urlList.length} url(s) for ${HOST}`);
}

main().catch((err) => {
  console.error("indexnow failed:", err.message);
  process.exit(1);
});
