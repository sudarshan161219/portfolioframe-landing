export type ComparisonRow = {
  feature: string
  frame: string
  competitor: string
}

export type Comparison = {
  slug: string
  name: string
  intro: string
  rows: ComparisonRow[]
  honestNote: string
}

export const COMPARISONS: Comparison[] = [
  {
    slug: 'carbon',
    name: 'Carbon',
    intro:
      "Carbon popularized the code-screenshot format — the biggest theme and language library out there, and it's free. Here's how it compares to Frame.",
    rows: [
      { feature: 'Where code is rendered', frame: 'Locally, in your browser', competitor: "Sent to Carbon's server" },
      {
        feature: 'Syntax themes',
        frame: "5 curated themes (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
        competitor: '30+ themes, 100+ languages',
      },
      { feature: 'Device & browser mockups', frame: 'MacBook, iPhone, Apple Watch, browser & terminal frames', competitor: 'None' },
      { feature: 'Annotations', frame: 'Text, boxes, arrows, numbered steps, redact tool', competitor: 'None' },
      { feature: 'Watermarking', frame: 'Text, handle, logo, QR, tiled patterns', competitor: 'None' },
      { feature: 'Image/screenshot editing', frame: 'Built in, alongside the code editor', competitor: 'Code only — no image mode' },
      { feature: 'Tweet card mockup', frame: 'Built in — avatar, badge, handle, editable stats, light & dark themes', competitor: 'Not a documented feature' },
      { feature: 'Pricing', frame: 'Free, Pro is a one-time purchase', competitor: 'Free' },
    ],
    honestNote:
      "If you only need a quick code screenshot and want the widest theme selection, Carbon is hard to beat, and it costs nothing. Frame trades some of that theme breadth for local-only rendering, device mockups, and annotation tools — worth it if you're sharing full product shots, not just code.",
  },
  {
    slug: 'ray-so',
    name: 'Ray.so',
    intro:
      "Ray.so (by Raycast) is the fastest path from a code selection to a clean, gradient-backed PNG. Here's how it compares to Frame.",
    rows: [
      { feature: 'Where code is rendered', frame: 'Locally, in your browser', competitor: "Sent to Ray.so's server" },
      { feature: 'Syntax themes', frame: "5 curated themes (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)", competitor: 'A small set of polished gradient presets' },
      { feature: 'Device & browser mockups', frame: 'MacBook, iPhone, Apple Watch, browser & terminal frames', competitor: 'None' },
      { feature: 'Annotations', frame: 'Text, boxes, arrows, numbered steps, redact tool', competitor: 'None' },
      { feature: 'Watermarking', frame: 'Text, handle, logo, QR, tiled patterns', competitor: 'None' },
      { feature: 'Image/screenshot editing', frame: 'Built in, alongside the code editor', competitor: 'Code only — no image mode' },
      { feature: 'Tweet card mockup', frame: 'Built in — avatar, badge, handle, editable stats, light & dark themes', competitor: 'Not a documented feature' },
      { feature: 'Pricing', frame: 'Free, Pro is a one-time purchase', competitor: 'Free' },
    ],
    honestNote:
      "Ray.so is genuinely the fastest one-click tool if all you need is a clean code image, and it's free. Frame asks a little more of you upfront — it's a full editor, not a one-click generator — but adds mockups, annotations, and local-only processing that Ray.so doesn't do.",
  },
  {
    slug: 'screely',
    name: 'Screely',
    intro:
      'Screely turns webpage screenshots into polished browser mockups, and — like Frame — keeps everything local to your device. Here\'s where the two actually differ.',
    rows: [
      { feature: 'Where screenshots are processed', frame: 'Locally, in your browser', competitor: 'Locally, in your browser' },
      { feature: 'Code snippet editor', frame: 'Syntax highlighting, language badges, window styles', competitor: 'Not a focus — built for webpage/image screenshots' },
      { feature: 'Device mockups', frame: 'MacBook, iPhone, Apple Watch, plus browser & terminal frames', competitor: 'Primarily browser window frames' },
      { feature: 'Annotation & redaction', frame: 'Text, boxes, arrows, numbered steps, redact tool', competitor: 'Text, arrows, shapes, blur tool' },
      { feature: 'Watermarking', frame: 'Text, handle, logo, QR, tiled patterns', competitor: 'Not a documented feature' },
      { feature: 'Tweet card mockup', frame: 'Built in — avatar, badge, handle, editable stats, light & dark themes', competitor: 'Not a documented feature' },
      { feature: 'Pricing', frame: 'Free, Pro is a one-time purchase', competitor: 'Free' },
    ],
    honestNote:
      "Screely is excellent at exactly what it's built for — polishing webpage screenshots into browser mockups — and it shares Frame's local-first, no-upload approach. Where Frame differs is the code side: syntax highlighting, language badges, and window styles built specifically for sharing code, which isn't what Screely is designed around.",
  },
  {
    slug: 'shots-so',
    name: 'Shots.so',
    intro:
      "Shots.so has four years of development behind it — a large device library, 3D scenes, and animated exports on paid plans. Here's how it compares to Frame.",
    rows: [
      { feature: 'Device library', frame: 'MacBook, iPhone, Apple Watch, browser & terminal frames', competitor: 'iPhone, Android, iPad, iMac, Apple Watch, browser — a larger library' },
      { feature: 'Code snippet editor', frame: 'Syntax highlighting, language badges, window styles', competitor: 'Not a focus — general screenshot/mockup tool' },
      { feature: 'Animated / video export', frame: 'Tweet cards with an attached video export as MP4; no general animated export yet', competitor: 'Supported on paid plans' },
      { feature: 'Annotations', frame: 'Text, boxes, arrows, numbered steps, redact tool', competitor: 'Not a documented feature' },
      { feature: 'Format', frame: 'Chrome extension', competitor: 'Hosted web app' },
      { feature: 'Tweet card mockup', frame: 'Built in — avatar, badge, handle, editable stats, light & dark themes', competitor: 'Aspect-ratio presets for social, not a styled tweet card' },
      { feature: 'Pricing', frame: 'Free, Pro is a one-time purchase', competitor: 'Free tier with watermark; paid plans $8–12/month' },
    ],
    honestNote:
      "If you need the biggest device library or want general animated exports beyond tweet cards, Shots.so's maturity shows — it's the stronger pick if that's your priority. Frame is narrower by design: a Chrome extension for developers, pairing code screenshots with device mockups in one tool, with a one-time price instead of a subscription.",
  },
]
