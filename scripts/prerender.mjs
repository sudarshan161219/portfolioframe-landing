// Runs after `vite build`. Loads src/entry-server.tsx via Vite's SSR
// pipeline (no separate SSR build needed for a route count this small),
// renders each route to a string, and writes it into a route-specific
// index.html under dist/ — real crawlable markup, not just a JS shell.
//
// Routes are generated for every (locale × page) combination: English is
// unprefixed (default locale), es/fr/de are prefixed (/es, /fr, /de). Each
// generated page gets hreflang alternates for every locale plus x-default,
// and dist/sitemap.xml is generated from the same route list so it can't
// drift out of sync with the actual locale URLs.
import { createServer } from "vite";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const SITE_URL = "https://portfolioframe.com";

// Both helpers use function replacers so a "$" in copy (e.g. "$19") is
// inserted literally instead of being read as a replacement pattern.
function replaceTag(html, pattern, value) {
  return html.replace(pattern, () => value);
}

// `pattern` captures the text before and after an attribute value.
function replaceAttr(html, pattern, value) {
  return html.replace(pattern, (_, before, after) => `${before}${value}${after}`);
}

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
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

function fileForUrl(url) {
  if (url === "/") return "index.html";
  return `${url.slice(1)}/index.html`;
}

async function main() {
  const template = fs.readFileSync(path.join(distDir, "index.html"), "utf-8");

  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: "custom",
  });

  const { render } = await vite.ssrLoadModule("/src/entry-server.tsx");
  const { COMPARISON_SLUGS } = await vite.ssrLoadModule("/src/data/comparisons.ts");
  const { LOCALES, HREFLANG_CODES } = await vite.ssrLoadModule("/src/i18n/config.ts");
  const { localizePath } = await vite.ssrLoadModule("/src/i18n/paths.ts");
  const { softwareApplication, faqPage, jsonLdScript } = await vite.ssrLoadModule(
    "/src/data/structuredData.ts",
  );

  const dictionaries = {};
  for (const locale of LOCALES) {
    const mod = await vite.ssrLoadModule(`/src/i18n/locales/${locale}.ts`);
    dictionaries[locale] = mod[locale];
  }

  // basePath is the locale-independent path ("/", "/vs/carbon", "/privacy"),
  // used to derive every locale's URL for a given logical page.
  const pages = [];
  for (const locale of LOCALES) {
    const dict = dictionaries[locale];

    pages.push({
      basePath: "/",
      locale,
      title: dict.meta.home.title,
      description: dict.meta.home.description,
      image: `${SITE_URL}/og-image.png`,
      jsonLd: [softwareApplication, faqPage(dict.faq.items)],
      inSitemap: true,
      changefreq: "weekly",
      priority: "1.0",
    });

    for (const slug of COMPARISON_SLUGS) {
      const comparison = dict.comparisons[slug];
      pages.push({
        basePath: `/vs/${slug}`,
        locale,
        title: comparison.metaTitle,
        description: comparison.metaDescription,
        image: `${SITE_URL}/og/vs-${slug}.png`,
        jsonLd: comparison.faq?.length
          ? [faqPage(comparison.faq.map((f) => ({ question: f.q, answer: f.a })))]
          : [],
        inSitemap: true,
        changefreq: "monthly",
        priority: "0.7",
      });
    }

    pages.push({
      basePath: "/privacy",
      locale,
      title: dict.meta.privacy.title,
      description: dict.meta.privacy.description,
      image: `${SITE_URL}/og-image.png`,
      jsonLd: [],
      inSitemap: false,
    });
  }

  for (const page of pages) {
    const url = localizePath(page.basePath, page.locale);
    const file = fileForUrl(url);
    const canonicalUrl = `${SITE_URL}${url}`;

    const appHtml = resolveDevAssetUrls(render(url));

    const title = escapeHtml(page.title);
    const description = escapeHtml(page.description);

    const hreflangTags = LOCALES.map((locale) => {
      const href = `${SITE_URL}${localizePath(page.basePath, locale)}`;
      return `<link rel="alternate" hreflang="${HREFLANG_CODES[locale]}" href="${href}" />`;
    });
    hreflangTags.push(
      `<link rel="alternate" hreflang="x-default" href="${SITE_URL}${page.basePath}" />`,
    );

    let html = template;
    html = replaceTag(html, /<html lang="[^"]*">/, `<html lang="${page.locale}">`);
    html = replaceTag(html, /<title>.*?<\/title>/, `<title>${title}</title>`);
    html = replaceAttr(
      html,
      /(<meta\s+name="description"\s+content=")[^"]*(")/s,
      description,
    );
    html = replaceAttr(
      html,
      /(<link\s+rel="canonical"\s+href=")[^"]*(")/s,
      canonicalUrl,
    );
    html = replaceAttr(
      html,
      /(<meta\s+property="og:url"\s+content=")[^"]*(")/s,
      canonicalUrl,
    );
    html = replaceAttr(
      html,
      /(<meta\s+property="og:title"\s+content=")[^"]*(")/s,
      title,
    );
    html = replaceAttr(
      html,
      /(<meta\s+property="og:description"\s+content=")[^"]*(")/s,
      description,
    );
    html = replaceAttr(
      html,
      /(<meta\s+property="og:image"\s+content=")[^"]*(")/s,
      page.image,
    );
    html = replaceAttr(
      html,
      /(<meta\s+name="twitter:title"\s+content=")[^"]*(")/s,
      title,
    );
    html = replaceAttr(
      html,
      /(<meta\s+name="twitter:description"\s+content=")[^"]*(")/s,
      description,
    );
    html = replaceAttr(
      html,
      /(<meta\s+name="twitter:image"\s+content=")[^"]*(")/s,
      page.image,
    );
    const headTags = [...hreflangTags, ...page.jsonLd.map(jsonLdScript)];
    html = html.replace(
      "</head>",
      () => `    ${headTags.join("\n    ")}\n  </head>`,
    );
    html = html.replace(
      '<div id="root"></div>',
      () => `<div id="root">${appHtml}</div>`,
    );

    const outPath = path.join(distDir, file);
    fs.mkdirSync(path.dirname(outPath), { recursive: true });
    fs.writeFileSync(outPath, html);
    console.log("prerendered", url, "->", file);
  }

  // Sitemap, generated from the same route list so locale URLs can't drift
  // out of sync with what's actually prerendered.
  const sitemapEntries = pages
    .filter((p) => p.inSitemap)
    .map((page) => {
      const alternates = LOCALES.map((locale) => {
        const href = `${SITE_URL}${localizePath(page.basePath, locale)}`;
        return `    <xhtml:link rel="alternate" hreflang="${HREFLANG_CODES[locale]}" href="${href}" />`;
      });
      alternates.push(
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${SITE_URL}${page.basePath}" />`,
      );
      const loc = `${SITE_URL}${localizePath(page.basePath, page.locale)}`;
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        ...alternates,
        `    <changefreq>${page.changefreq}</changefreq>`,
        `    <priority>${page.priority}</priority>`,
        "  </url>",
      ].join("\n");
    });

  const sitemap = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    ...sitemapEntries,
    "</urlset>",
    "",
  ].join("\n");

  fs.writeFileSync(path.join(distDir, "sitemap.xml"), sitemap);
  console.log("wrote sitemap.xml with", sitemapEntries.length, "urls");

  await vite.close();
}

main().catch((err) => {
  console.error("prerender failed:", err);
  process.exit(1);
});
