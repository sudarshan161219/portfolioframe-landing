// Runs after `vite build`. Loads src/entry-server.tsx via Vite's SSR
// pipeline (no separate SSR build needed for a route count this small),
// renders each route to a string, and writes it into a route-specific
// index.html under dist/ — real crawlable markup, not just a JS shell.
import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");

function replaceTag(html, pattern, value) {
  return html.replace(pattern, value);
}

// Vite's SSR module loader (used below to render each route) resolves local
// asset imports to their dev-server paths (e.g. "/src/assets/foo.png"), not
// the hashed production paths the client build already wrote to dist/assets.
// Rewrite any that slip into the rendered HTML so the very first paint (before
// React hydrates) doesn't show a broken image.
const builtAssets = fs.readdirSync(path.join(distDir, "assets"));

function resolveDevAssetUrls(html) {
  return html.replace(
    /\/src\/[^"'\s]+\/([\w.-]+)\.(png|jpe?g|webp|svg|gif|avif)/g,
    (match, name, ext) => {
      const hashed = builtAssets.find(
        (f) => f.startsWith(`${name}-`) && f.endsWith(`.${ext}`),
      );
      if (!hashed) {
        console.warn(`prerender: could not resolve dev asset path ${match}`);
        return match;
      }
      return `/assets/${hashed}`;
    },
  );
}

async function main() {
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
  });

  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const { COMPARISONS } = await vite.ssrLoadModule("/src/data/comparisons.ts");

  const routes = [
    {
      url: "/",
      file: "index.html",
      title: "Portfolio Frame — a darkroom for screenshots and code",
      description:
        "Frame is a Chrome extension that turns raw screenshots and code into press-ready visuals. No account, no upload — everything stays on your device.",
      image: "https://portfolioframe.com/og-image.png",
    },
    ...COMPARISONS.map((c) => ({
      url: `/vs/${c.slug}`,
      file: `vs/${c.slug}/index.html`,
      title: `Frame vs ${c.name} — code screenshot & mockup tools compared`,
      description: c.intro,
      image: `https://portfolioframe.com/og/vs-${c.slug}.png`,
    })),
  ];

  for (const route of routes) {
    const appHtml = resolveDevAssetUrls(render(route.url));
    const canonicalUrl = `https://portfolioframe.com${route.url}`;

    let html = template;
    html = replaceTag(
      html,
      /<title>.*?<\/title>/,
      `<title>${route.title}</title>`,
    );
    html = replaceTag(
      html,
      /(<meta\s+name="description"\s+content=")[^"]*(")/s,
      `$1${route.description}$2`,
    );
    html = replaceTag(
      html,
      /(<link rel="canonical" href=")[^"]*(")/,
      `$1${canonicalUrl}$2`,
    );
    html = replaceTag(
      html,
      /(<meta property="og:url" content=")[^"]*(")/,
      `$1${canonicalUrl}$2`,
    );
    html = replaceTag(
      html,
      /(<meta property="og:title" content=")[^"]*(")/,
      `$1${route.title}$2`,
    );
    html = replaceTag(
      html,
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/s,
      `$1${route.description}$2`,
    );
    html = replaceTag(
      html,
      /(<meta property="og:image" content=")[^"]*(")/,
      `$1${route.image}$2`,
    );
    html = replaceTag(
      html,
      /(<meta name="twitter:title" content=")[^"]*(")/,
      `$1${route.title}$2`,
    );
    html = replaceTag(
      html,
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/s,
      `$1${route.description}$2`,
    );
    html = replaceTag(
      html,
      /(<meta name="twitter:image" content=")[^"]*(")/,
      `$1${route.image}$2`,
    );
    html = html.replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );

    const outPath = path.join(distDir, route.file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    console.log("prerendered", route.url, "->", route.file);
  }

  await vite.close();
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
