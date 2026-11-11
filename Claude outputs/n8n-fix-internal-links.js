// n8n Code node: "Fix Internal Links"
// Mode: Run Once for All Items. Place it right AFTER "Build Markdown File"
// (before the GitHub "Create File" node).
//
// 1. Removes the trailing slash from portfolioframe.com/blog links
//    (the site serves /blog/x and redirects /blog/x/, which breaks indexing).
// 2. Unlinks links to blog posts that do not exist yet (Gemini sometimes invents
//    them, e.g. /blog/code-screenshot-for-linkedin, which gave a 404 in Search Console).
//    The link text stays; only the link is removed.
//
// The list of real posts comes from the live sitemap, plus the post being written now.

const SITEMAP = 'https://portfolioframe.com/blog/sitemap-0.xml';

let existing = new Set();
try {
  const xml = await this.helpers.httpRequest({ url: SITEMAP, json: false });
  for (const m of String(xml).matchAll(/portfolioframe\.com\/blog\/([a-z0-9-]+)\/?</g)) existing.add(m[1]);
} catch (e) {
  // If the sitemap can't be fetched, only fix slashes and leave links alone.
  existing = null;
}

function fixMarkdown(md, ownSlug) {
  if (typeof md !== 'string' || !md.includes('/blog/')) return md;
  const known = existing ? new Set([...existing, ownSlug].filter(Boolean)) : null;

  // absolute and relative own-blog links: drop trailing slash (not /blog/images/...)
  md = md.replace(/((?:\(|\s|"|^)(?:https:\/\/portfolioframe\.com)?\/blog\/(?!images\/)[a-z0-9-]+)\/(?=[)#?"'\s])/gm, '$1');
  md = md.replace(/\]\((?:https:\/\/portfolioframe\.com)?\/blog\/\)/g, '](https://portfolioframe.com/blog)');

  if (known) {
    md = md.replace(/\[([^\]]+)\]\((?:https:\/\/portfolioframe\.com)?\/blog\/(?!images\/)([a-z0-9-]+)\)/g,
      (all, text, slug) => (known.has(slug) ? all : text));
  }
  return md;
}

function walk(obj, ownSlug) {
  for (const k of Object.keys(obj)) {
    const v = obj[k];
    if (typeof v === 'string') obj[k] = fixMarkdown(v, ownSlug);
    else if (v && typeof v === 'object') walk(v, ownSlug);
  }
}

return $input.all().map((item) => {
  const json = JSON.parse(JSON.stringify(item.json));
  walk(json, json.slug);
  return { json };
});
