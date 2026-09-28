import type { Dictionary } from '../types'

export const en = {
  meta: {
    home: {
      title: 'Screenshot Beautifier & Code Mockup Editor for Chrome | Portfolio Frame',
      description:
        'Portfolio Frame is a Chrome extension that turns screenshots and code into polished mockups: device frames, annotations, watermarks. Nothing leaves your device.',
    },
    privacy: {
      title: 'Privacy Policy — Portfolio Frame',
      description:
        "How Portfolio Frame handles data: everything is processed locally in your browser, nothing is uploaded, and license activation only talks to Dodo Payments.",
    },
  },

  nav: {
    links: {
      editor: 'Editor',
      code: 'Code',
      'twitter-snap': 'Twitter Snap',
      mockups: 'Mockups',
      annotate: 'Annotate',
      brand: 'Brand',
      pricing: 'Pricing',
      faq: 'FAQ',
    },
    cta: 'Add to Chrome',
  },

  hero: {
    eyebrow: 'A local-first screenshot & code mockup editor for Chrome',
    headlineLine1: 'Develop your screenshots',
    headlineLine2: 'like prints.',
    subhead:
      'A screenshot beautifier and device mockup generator for Chrome. Turn screenshots, code snippets and tweets into polished images without uploading anything.',
    sub: "Portfolio Frame turns a raw screenshot or a slab of code into something worth sharing, windowed, lit, annotated, and sized for wherever it's going. No account, no upload, no server in between.",
    primaryCta: "Add to Chrome, it's free",
    secondaryCta: 'See it on code ↓',
    trust: {
      setupLabel: 'Setup',
      setupValue: 'Zero. Open the extension and start.',
      storageLabel: 'Storage',
      storageValue: '100% on your device, local storage & IndexedDB.',
      serversLabel: 'Servers',
      serversValue: 'None. Your work never leaves your browser.',
    },
    stageAriaLabel:
      'A code snippet card and a browser screenshot card, arranged like proof prints on a darkroom light table',
    shippedBadge: 'Shipped v2.4',
    sheetCaption: 'Proof 03: background / screenshot / chrome',
  },

  featureRail: {
    sections: {
      editor: {
        tag: 'Dual editor',
        title: 'One canvas, two ways in',
        description:
          'Drop in a screenshot or paste a block of code. The same canvas, export controls, and sizing presets carry across both.',
        features: [
          {
            title: 'Dual editor modes',
            desc: 'Switch between an image-mockup editor and a code-snippet editor without losing your place.',
          },
          {
            title: 'High-quality exports',
            desc: 'Set export resolution and JPEG compression yourself, so nothing gets soft on the way out.',
          },
          {
            title: 'Social-ready sizing',
            desc: 'Auto, Custom, Square, Portrait, Story, Landscape, and Presentation, one click each.',
          },
        ],
      },
      code: {
        tag: 'Code screenshots',
        title: 'Code, printed properly',
        description:
          'Syntax highlighting and window chrome built for reading, not just decoration.',
        features: [
          {
            title: 'Premium syntax themes',
            desc: "Dracula, Synthwave '84, Monokai, GitHub Dark, and a Minimal Light theme, built on Prism.js.",
          },
          {
            title: 'Multi-language badges',
            desc: 'Automatic, designed language badges for JavaScript, TypeScript, Python, CSS, and Rust.',
          },
          {
            title: 'Line highlighting & gutters',
            desc: 'Call out the exact lines that matter, with toggleable line numbers.',
          },
          {
            title: 'Window styles',
            desc: 'Wrap snippets in macOS, Windows, or minimalist frames.',
          },
          {
            title: 'Glassmorphism materials',
            desc: 'Frosted-glass panels with tunable borders, shadow depth, and refraction.',
          },
        ],
      },
      'twitter-snap': {
        tag: 'Tweet cards',
        title: 'Tweets, without the screenshot',
        description:
          'Paste a tweet, get a clean styled card back. No cropped browser chrome, no cookie banner in the corner.',
        features: [
          {
            title: 'Real tweet layout',
            desc: 'Avatar, name, verified badge, handle, and timestamp, laid out the way it actually reads on X.',
          },
          {
            title: 'Light & dark themes',
            desc: "Match the card to whatever you're dropping it into: a blog post, a deck, or a dark-mode thread.",
          },
          {
            title: 'Editable stats',
            desc: 'Replies, reposts, and likes are yours to set, useful for mockups before a post even goes live.',
          },
        ],
      },
      mockups: {
        tag: 'Device & browser mockups',
        title: 'Set the scene',
        description:
          'Real device and browser frames, not flat rectangles, because context is half the story.',
        features: [
          {
            title: 'Device library',
            desc: 'Pro Display XDR, Dell UltraSharp, MacBook, iPhone 14 Pro, Apple Watch, and more.',
          },
          {
            title: 'Browser frames',
            desc: 'Light and dark shells for Chrome on Windows and Mac, and Safari.',
          },
          {
            title: 'Terminal mode',
            desc: 'A customizable terminal frame with a configurable file path in the title bar.',
          },
          {
            title: '3D tilt',
            desc: 'Adjustable X, Y, and Z-axis tilt plus zoom, for depth without gimmicks.',
          },
        ],
      },
      annotate: {
        tag: 'Annotation tools',
        title: 'Point at what matters',
        description:
          'Text, shapes, and steps layered directly on the canvas, nothing that requires a second tool.',
        features: [
          {
            title: 'Annotation tools',
            desc: 'Text, boxes, arrows, numbered steps, highlights, and a redact tool for anything sensitive.',
          },
          {
            title: 'Stickers',
            desc: 'Drop in and rotate custom stickers anywhere on the canvas.',
          },
          {
            title: 'Context badges',
            desc: 'Sleek badges on any edge, with a custom icon, emoji, or dot: "Shipped new feature" and the like.',
          },
        ],
      },
      brand: {
        tag: 'Watermarks',
        title: 'Sign your work',
        description: 'Mark it as yours, or make it hard to lift without credit.',
        features: [
          {
            title: 'Versatile watermarks',
            desc: 'Text, a handle for X, GitHub, LinkedIn, or Instagram, a custom logo, or a scannable QR code.',
          },
          {
            title: 'Tiled watermarks',
            desc: 'Repeating, angled tiles in solid, outline, or overlay styles, for work you want protected.',
          },
        ],
      },
    },
  },

  showcases: {
    common: {
      tiltLabels: { flat: 'Flat', angled: 'Angled', deep: 'Deep' },
      ariaTilt: 'Tilt',
    },
    device: {
      frameTypeLabels: { device: 'Device', browser: 'Browser', terminal: 'Terminal' },
      deviceLabels: { macbook: 'MacBook', iphone: 'iPhone', watch: 'Watch' },
      deviceFullNames: {
        macbook: 'MacBook Pro 16"',
        iphone: 'iPhone 14 Pro',
        watch: 'Apple Watch',
      },
      ariaFrameType: 'Frame type',
      ariaDevice: 'Device',
      deviceCaptionSuffix: ', one of the full device library.',
      browserCaption: 'Light & dark browser shells for Chrome and Safari.',
      terminalCaption: 'A customizable terminal frame with a configurable file path.',
    },
    codeGlass: {
      ariaGlass: 'Glass material',
      glassOff: 'Glass off',
      glassOn: 'Glass on',
      returnValue: 'shipped.',
      caption:
        'Frosted-glass panels with tunable borders, plus adjustable X/Y/Z tilt for depth without gimmicks.',
    },
    tweetSnap: {
      ariaLogoStyle: 'Logo style',
      classic: 'Classic',
      current: 'Current',
      ariaTheme: 'Theme',
      light: 'Light',
      dark: 'Dark',
      tweetBody:
        'shipped Twitter Snap today, turn any tweet into a clean, styled card. no screenshot, no cropping, no ugly UI chrome.',
      repliesLabel: 'Replies',
      repostsLabel: 'Reposts',
      likesLabel: 'Likes',
      caption: 'Twitter Snap: old bird or the current mark, light or dark, every stat editable',
    },
    annotate: {
      ariaTools: 'Annotation tools',
      tools: { box: 'Box', arrow: 'Arrow', redact: 'Redact', sticker: 'Sticker' },
      dashboardLabel: 'Dashboard',
      deployLabel: 'Deploy',
      caption:
        'Box, arrow, redact, and stickers, layered directly on the canvas, toggle a few together to see them stack.',
    },
    brand: {
      ariaWatermarkType: 'Watermark type',
      types: { text: 'Text', logo: 'Logo', qr: 'QR' },
      ariaTiled: 'Tiled protection',
      tiledOff: 'Tiled off',
      tiledOn: 'Tiled on',
      caption:
        'Watermark as a handle, a logo mark, or a scannable QR — plus a tiled, angled overlay for work you want protected.',
    },
  },

  pricing: {
    tag: 'Pricing',
    title: 'Pay once. Keep the darkroom.',
    description:
      'Frame is free to install and use. Pro unlocks the full material set, a single purchase, verified with a license key, no recurring charge.',
    free: {
      title: 'Free',
      price: '$0',
      caption: 'Everything you need to ship a clean shot',
      features: [
        'Dual editor: images and code',
        'Core syntax themes and window styles',
        '2 device & browser frames per category',
        'Full background Scene library, 3D tilt & perspective',
        'Stickers, plus text, box, and arrow annotations',
        'Local storage, no account',
      ],
      cta: 'Add to Chrome',
    },
    pro: {
      badge: 'Pro',
      title: 'Pro license',
      price: '$19',
      billing: 'One-time payment',
      caption: 'Everything in Free, plus the full studio',
      features: [
        'Rest of the device & browser mockup library',
        'Glassmorphism materials',
        'Badges and the redact tool',
        'Save custom Scenes, upload custom fonts',
        'Custom logo, handle, and QR watermarks',
        'Tiled watermark protection',
        'Batch export of every aspect ratio, zipped',
        'SVG export',
      ],
      licensePlaceholder: 'XXXX-XXXX-XXXX-XXXX',
      licenseVerified: 'Verified via Dodo Payments',
      cta: 'Get a Pro license',
    },
  },

  faq: {
    tag: 'FAQ',
    title: 'Questions, answered',
    items: [
      {
        question: 'Is my code or screenshots ever uploaded anywhere?',
        answer:
          "No. Portfolio Frame runs entirely in your browser. Snippets, canvas history, and settings are saved locally using your browser's local storage and IndexedDB. Nothing is sent to a server, and there's no account to create.",
      },
      {
        question: "What's the difference between Free and Pro?",
        answer:
          'Free covers the core editor: dual image and code modes, a few syntax themes, 2 device/browser frames per category, the full background Scene library with 3D tilt, stickers, and basic annotations. Pro adds the rest of the device library, glassmorphism materials, badges and the redact tool, saved custom Scenes and fonts, custom watermarking, batch export of every aspect ratio as a zip, and SVG export.',
      },
      {
        question: 'How do I get my Pro license key after I pay?',
        answer:
          "Checkout is handled by Dodo Payments. As soon as your payment goes through, your license key is generated automatically and emailed to you. Paste it into the extension's license screen to unlock Pro.",
      },
      {
        question: 'Can I use my license on more than one device?',
        answer:
          "Yes. Your license isn't limited to a single device or browser profile, so you can activate it wherever you use Portfolio Frame.",
      },
      {
        question: "What's your refund policy?",
        answer:
          "If you have a valid Pro license key, you're eligible for a full refund within 7 days of purchase, no questions asked. Reach out with the email you purchased with and I'll take care of it.",
      },
      {
        question: 'Will future updates cost extra?',
        answer:
          'No. Your one-time purchase includes free updates and improvements to all current Pro features.',
      },
      {
        question: 'Do you support payments from India, including UPI?',
        answer:
          "Yes. Checkout supports UPI alongside cards and other regional payment methods, and pricing automatically adjusts based on purchasing power parity, so you're charged a fair local price.",
      },
    ],
  },

  footer: {
    tagline: 'A darkroom for screenshots and code. Everything stays on your device.',
    productLabel: 'Product',
    getItLabel: 'Get it',
    proLicenseLink: 'Pro license',
    noAccountLine: 'No account. No upload. No server.',
    privacyLink: 'Privacy Policy',
  },

  compare: {
    eyebrow: 'Comparison',
    tableHeaders: { feature: 'Feature', frame: 'Frame' },
    honestLabel: 'Being honest about it',
    ctaText: "Try Frame — it's free",
    otherLabel: 'Other comparisons',
    otherLinkTemplate: (name: string) => `Frame vs ${name}`,
  },

  comparisons: {
    carbon: {
      name: 'Carbon',
      metaTitle: "Carbon Alternative: Portfolio Frame vs Carbon.now.sh",
      metaDescription:
        "Looking for a Carbon.now.sh alternative? Portfolio Frame renders code screenshots in the browser with no server round trip, plus mockups and annotations Carbon does not have.",
      h1: "Carbon alternative: Portfolio Frame vs Carbon.now.sh",
      intro:
        "If you are after a Carbon alternative, it helps to be clear about what Carbon does well: it is free, open source, and has the widest theme and language coverage of any code screenshot tool. Portfolio Frame is a Chrome extension that also renders code screenshots in your browser, then adds what Carbon does not attempt: device mockups, annotations, watermarks and a screenshot editor alongside the code one.",
      why: {
        heading: "Why people look for a Carbon alternative",
        body: [
          "Carbon does one job, code in and image out, and it does it well. The reasons people go looking past it are usually about scope rather than quality. It has no image mode, so a screenshot of the feature needs a second tool. It has no device frames, no arrows or numbered steps, and no way to redact a key or stamp a watermark before the image goes out.",
          "If all you share is code, none of that matters and Carbon is the better pick. If your release notes mix code with product shots, that is where the second tool starts to cost you.",
        ],
      },
      rows: [
        {
          feature: 'How the image is rendered',
          frame: 'Canvas compositing, in your browser',
          competitor: 'DOM rasterisation via dom-to-image, also in your browser',
        },
        {
          feature: 'Where your code lives',
          frame: 'Extension storage on your own machine',
          competitor: 'A hosted web app. Exporting stays local; saving or tweeting a snippet uploads it',
        },
        {
          feature: 'Syntax themes',
          frame: "5 curated themes (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
          competitor: '30+ themes, 100+ languages',
        },
        {
          feature: 'Device & browser mockups',
          frame: 'MacBook, iPhone, Apple Watch, browser & terminal frames',
          competitor: 'None',
        },
        {
          feature: 'Annotations',
          frame: 'Text, boxes, arrows, numbered steps, redact tool',
          competitor: 'None',
        },
        {
          feature: 'Watermarking',
          frame: 'Text, handle, logo, QR, tiled patterns',
          competitor: 'None',
        },
        {
          feature: 'Image/screenshot editing',
          frame: 'Built in, alongside the code editor',
          competitor: 'Code only — no image mode',
        },
        {
          feature: 'Tweet card mockup',
          frame: 'Built in — avatar, badge, handle, editable stats, light & dark themes',
          competitor: 'Not a documented feature',
        },
        {
          feature: 'Pricing',
          frame: 'Free, Pro is a one-time purchase',
          competitor: 'Free',
        },
      ],
      honestNote:
        "If you only need a quick code screenshot and want the widest theme selection, Carbon is hard to beat, and it costs nothing. Both tools export in your browser, so this is not a privacy trade. The real difference is method and scope: Carbon rasterises the DOM, which is quick to build and shows its limits on shadows and custom fonts, while Frame composites on canvas and adds device mockups, annotations and watermarks. Reach for Carbon for a code snippet, Frame for a full product shot.",

      sections: [
        {
          heading: "Both of them render in your browser",
          body: [
            "This page used to say Carbon sent your code to a server. That was wrong, and it is worth correcting plainly. Carbon's editor hands the DOM node straight to dom-to-image and gets a PNG or SVG back without the code leaving the page. There is a server-side renderer in the repository, but it answers only Twitter's and Slack's crawlers so link previews have something to show, and it returns 401 to everyone else.",
            "What actually differs is method. dom-to-image walks the DOM, inlines the computed styles, and rasterises the result through an SVG foreignObject. Frame composites on canvas: each layer is drawn in order onto a bitmap surface that it controls.",
            "That sounds academic until you export something with a custom font and a soft shadow. foreignObject rasterisation depends on the browser agreeing with you about how those paint at export time, and browsers do not always agree. Canvas compositing decides for itself. It was two weeks of fighting the first approach that led to the second.",
          ],
        },
        {
          heading: "Carbon is a code tool. Frame is a code and screenshot tool.",
          body: [
            "Carbon does one job and has done it since 2018. You paste code, you pick a theme, you get an image. There is no image import, no device frame, no annotation layer, because none of that is what it set out to do.",
            "Frame's two editors share one canvas, one set of export presets and one sizing system. A release note that needs a browser mockup of the feature and a syntax-highlighted snippet of the API call is one tool and one export queue rather than two.",
          ],
        },
        {
          heading: "Where Carbon is straightforwardly ahead",
          body: [
            "Theme and language coverage is not close. Carbon ships more than 30 themes and over 100 languages against Frame's five curated themes and five badged languages. If your snippet is Elixir or Haskell, Carbon has you and Frame does not.",
            "It is also open source under the MIT licence with more than 36,000 stars, which means you can read exactly how it works, self-host it, or fork it. Frame is not open source. And Carbon is free with no tiers at all, where Frame keeps device mockups, watermarking and batch export behind a one-time licence.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Choose Carbon if",
        competitorBody:
          "You only ever share code, you want the widest possible theme and language coverage, or you care about using something open source you could self-host. It is free, it is mature, and for a pure code screenshot it is excellent.",
        frameHeading: "Choose Frame if",
        frameBody:
          "You share screenshots about as often as you share code, and you are tired of one tool for snippets and another for product shots. Device frames, annotations and watermarks are the things Carbon was never trying to give you.",
      },
      faqHeading: "Questions about Carbon and Frame",
      faq: [
        {
          q: "Does Carbon upload my code to a server?",
          a: "Not when you export. That happens in your browser. It does upload if you save a snippet to your Carbon account or use the built-in tweet button, both of which are deliberate actions rather than part of exporting.",
        },
        {
          q: "Is Frame open source like Carbon is?",
          a: "No. Carbon is MIT licensed and you can read or self-host it. Frame is closed source with a free tier and a one-time licence for the rest.",
        },
        {
          q: "Can Frame match Carbon's syntax themes?",
          a: "No, and it is not trying to. Frame ships five curated themes built on Prism against Carbon's thirty-plus. If theme choice is what you are optimising for, Carbon wins that comparison outright.",
        },
        {
          q: "Can Carbon put a screenshot inside a device frame?",
          a: "No. Carbon works with code only. That is the main reason these two tools end up installed side by side rather than one replacing the other.",
        },
      ],
    },
    'ray-so': {
      name: 'Ray.so',
      metaTitle: "Ray.so Alternative: Portfolio Frame vs Ray.so",
      metaDescription:
        "Looking for a Ray.so alternative? Portfolio Frame does code screenshots plus device mockups, annotations and watermarks, offline, for a $19 one-time licence.",
      h1: "Ray.so alternative: Portfolio Frame vs Ray.so",
      intro:
        "Ray.so is the quickest way to turn a code selection into a clean, gradient-backed image, and it is free. If you are looking for a Ray.so alternative, it is usually because you need more than that one screen gives you. Portfolio Frame is a Chrome extension that does code screenshots too, then adds device mockups, annotations, watermarks and a screenshot editor, all rendered locally in your browser.",
      why: {
        heading: "Why people look for a Ray.so alternative",
        body: [
          "Ray.so is deliberately minimal: pick a gradient, pick a theme, copy. That is the whole appeal, and it is also where people hit the edge of it. There is no way to put a screenshot in a device, draw an arrow at the line you mean, or cover an API key before you publish.",
          "When the output needs to be specific rather than just tidy, you need an editor, and that is the gap people are trying to fill.",
        ],
      },
      rows: [
        {
          feature: 'How the image is rendered',
          frame: 'Canvas compositing, in your browser',
          competitor: 'DOM rasterisation via html-to-image, also in your browser',
        },
        {
          feature: 'Where your code lives',
          frame: 'Extension storage on your own machine',
          competitor: 'A hosted web app you paste into',
        },
        {
          feature: 'Syntax themes',
          frame: "5 curated themes (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
          competitor: 'A small set of polished gradient presets',
        },
        {
          feature: 'Device & browser mockups',
          frame: 'MacBook, iPhone, Apple Watch, browser & terminal frames',
          competitor: 'None',
        },
        {
          feature: 'Annotations',
          frame: 'Text, boxes, arrows, numbered steps, redact tool',
          competitor: 'None',
        },
        {
          feature: 'Watermarking',
          frame: 'Text, handle, logo, QR, tiled patterns',
          competitor: 'None',
        },
        {
          feature: 'Image/screenshot editing',
          frame: 'Built in, alongside the code editor',
          competitor: 'Code only — no image mode',
        },
        {
          feature: 'Tweet card mockup',
          frame: 'Built in — avatar, badge, handle, editable stats, light & dark themes',
          competitor: 'Not a documented feature',
        },
        {
          feature: 'Pricing',
          frame: 'Free, Pro is a one-time purchase',
          competitor: 'Free',
        },
      ],
      honestNote:
        "Ray.so is genuinely the fastest path from a code selection to a clean image, and it's free. It also renders in your browser, so neither tool ships your code somewhere to make a picture of it. Frame asks more of you upfront, being a full editor rather than a one-click generator, and gives back device mockups, annotations, watermarks and an image editor that Ray.so does not set out to provide.",

      sections: [
        {
          heading: "Ray.so also renders locally",
          body: [
            "Like Carbon, Ray.so exports in the browser. Its export button calls html-to-image on the rendered node and hands you back a PNG or SVG. Raycast publishes the whole thing on GitHub under MIT, so this is checkable rather than a claim either of us has to be trusted on.",
            "So the difference between the two is not where your code goes. It is that Ray.so rasterises the DOM where Frame composites on canvas, and that Ray.so is deliberately a one-screen tool where Frame is an editor.",
          ],
        },
        {
          heading: "One-click generator versus an editor",
          body: [
            "Ray.so is the fastest path in this entire category from a code selection to something you can paste into a thread. Pick a gradient, pick a theme, copy. There is almost nothing to learn and almost nothing to decide, which is exactly the point.",
            "Frame asks more of you. There are panels, presets, layers and export settings, because it expects you to want control over the output rather than a good default. If your honest need is a clean code image in ten seconds, that extra surface is a cost, not a feature.",
            "Where it pays off is everything Ray.so does not attempt: putting a screenshot in a MacBook frame, drawing an arrow at the thing you are talking about, redacting an API key, or stamping your handle on work before it goes out.",
          ],
        },
        {
          heading: "The Raycast context",
          body: [
            "Ray.so is one of a set of tools Raycast maintains alongside its launcher, and it benefits from that. It is free, it is fast, it is kept current, and if you already live in Raycast the workflow is a keystroke away.",
            "Frame is a solo project with a one-time licence and no launcher to plug into. It earns a place on your machine by covering a wider surface, not by being better at Ray.so's particular job.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Choose Ray.so if",
        competitorBody:
          "Speed is the whole requirement. You want a clean, good-looking code image with no configuration, it costs nothing, and you never need to put a screenshot inside a device.",
        frameHeading: "Choose Frame if",
        frameBody:
          "You need the output to be specific rather than merely tasteful: a particular device, an annotation pointing at one line, a redaction over a key, a watermark. That is editor work, and Ray.so is not an editor.",
      },
      faqHeading: "Questions about Ray.so and Frame",
      faq: [
        {
          q: "Does Ray.so send my code anywhere?",
          a: "Not to produce the image. Export runs in your browser through html-to-image, and the source is public on GitHub if you want to confirm it.",
        },
        {
          q: "Do I need Raycast to use Ray.so?",
          a: "No. It runs as an ordinary website. Having Raycast installed just makes it quicker to reach.",
        },
        {
          q: "Is Frame slower to use than Ray.so?",
          a: "For a plain code snippet, yes. Frame opens an editor rather than a single screen. The trade is control over the export and the option to do things Ray.so has no concept of.",
        },
        {
          q: "Can Ray.so annotate or frame a screenshot?",
          a: "No. It is a code image generator. Screenshots, device frames and annotations are outside its scope.",
        },
      ],
    },
    screely: {
      name: 'Screely',
      metaTitle: "Screely Alternative: Portfolio Frame vs Screely",
      metaDescription:
        "Looking for a Screely alternative? Portfolio Frame is a Chrome extension that frames screenshots and code locally, with a $19 one-time licence and no uploads. Here is how the two compare.",
      h1: "Screely alternative: Portfolio Frame vs Screely",
      intro:
        "Screely is a good, free tool for turning webpage screenshots into browser mockups, and like Portfolio Frame it processes everything locally. People looking for a Screely alternative usually need something it was not built for. Portfolio Frame is a Chrome extension that adds a code snippet editor, physical device mockups, tweet cards and watermarking, with a $19 one-time licence for the Pro features.",
      why: {
        heading: "Why people look for a Screely alternative",
        body: [
          "Screely covers capture, browser window chrome, and text, arrow and blur markup, and it costs nothing, so price and privacy are rarely the reason. The reasons are about scope. It has no code editor or syntax highlighting, its frames are window chrome rather than devices, and it has no watermarking.",
          "If you publish code as often as screenshots, or you want the shot to sit inside a MacBook or an iPhone, that is usually when people start comparing.",
        ],
      },
      rows: [
        {
          feature: 'Where screenshots are processed',
          frame: 'Locally, in your browser',
          competitor: 'Locally, in your browser',
        },
        {
          feature: 'Code snippet editor',
          frame: 'Syntax highlighting, language badges, window styles',
          competitor: 'Not a focus — built for webpage/image screenshots',
        },
        {
          feature: 'Device mockups',
          frame: 'MacBook, iPhone, Apple Watch, plus browser & terminal frames',
          competitor: 'Primarily browser window frames',
        },
        {
          feature: 'Annotation & redaction',
          frame: 'Text, boxes, arrows, numbered steps, redact tool',
          competitor: 'Text, arrows, shapes, blur tool',
        },
        {
          feature: 'Watermarking',
          frame: 'Text, handle, logo, QR, tiled patterns',
          competitor: 'Not a documented feature',
        },
        {
          feature: 'Tweet card mockup',
          frame: 'Built in — avatar, badge, handle, editable stats, light & dark themes',
          competitor: 'Not a documented feature',
        },
        {
          feature: 'Pricing',
          frame: 'Free, Pro is a one-time purchase',
          competitor: 'Free',
        },
      ],
      honestNote:
        "Screely is excellent at exactly what it's built for — polishing webpage screenshots into browser mockups — and it shares Frame's local-first, no-upload approach. Where Frame differs is the code side: syntax highlighting, language badges, and window styles built specifically for sharing code, which isn't what Screely is designed around.",

      sections: [
        {
          heading: "Screely moved, and it is now an extension too",
          body: [
            "If you have an old bookmark for screely.com, stop using it. That domain no longer belongs to the project and now serves an unrelated sports betting site. Screely lives at screely.app.",
            "The bigger change is what it became. Screely is now both a web app and a Chrome extension, and the extension captures as well as edits: visible area, a custom selection, full page, or a single element. It will also record the active tab to MP4 for up to three minutes at 720p or 1080p with audio. The extension listing shows roughly a thousand users and a 5.0 rating, updated as recently as August.",
            "That makes it the closest thing to a direct competitor Frame has, and by any measure that matters today it is the more established of the two.",
          ],
        },
        {
          heading: "Two tools that made the same architectural choice",
          body: [
            "Screely's own documentation says images are processed entirely inside the browser using canvas and are never uploaded, transmitted or stored. That is the same position Frame takes, arrived at independently.",
            "So local-first is not a differentiator between these two. Both composite on canvas, both keep your screenshots on your machine, and neither requires an account. If privacy is your reason for looking, both of them answer it.",
            "Screely goes further on one axis: it is completely free, with no signup, no watermark and no export limits. Frame has a free tier, but device mockups beyond the basics, watermarking, the redact tool and batch export sit behind a one-time licence.",
          ],
        },
        {
          heading: "Where the two genuinely diverge",
          body: [
            "Code is the clearest line. Screely has no code snippet editor, no syntax highlighting and no language badges, because it was built around webpage and app screenshots. Frame's second editor exists for exactly that, with Prism themes, line highlighting and window chrome built for reading code.",
            "Frames differ in kind rather than degree. Screely gives you macOS and Windows window chrome. Frame gives you physical device mockups, a MacBook, an iPhone, an Apple Watch, plus browser and terminal frames and 3D tilt on any of them.",
            "Frame also does tweet cards and watermarking, neither of which Screely offers. Screely does screen recording and PDF export, neither of which Frame offers. Those are real gaps on both sides, not marketing asymmetries.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Choose Screely if",
        competitorBody:
          "You want capture and editing in one place, you need to record a tab to video, or you want something free with no tiers at all. It is mature, actively maintained and costs nothing.",
        frameHeading: "Choose Frame if",
        frameBody:
          "You share code as well as screenshots, or you need physical device mockups, tweet cards or watermarking. Those are the things Screely does not set out to do.",
      },
      faqHeading: "Questions about Screely and Frame",
      faq: [
        {
          q: "Is screely.com still Screely?",
          a: "No. The project is at screely.app now. The old .com domain has changed hands and hosts something unrelated, so update any bookmarks.",
        },
        {
          q: "Is Screely really free?",
          a: "Yes. Their site states no signup, no watermark and no export limits. It is the cheaper option, and that is a fair point against Frame's paid tier.",
        },
        {
          q: "Can Screely make code screenshots?",
          a: "No. It has no syntax highlighting or code editor. If code images are a regular part of what you publish, that is the main reason to look at Frame instead.",
        },
        {
          q: "Can Frame record my screen?",
          a: "No. Frame edits still images. Screely records the active tab to MP4, which is a real capability Frame does not have.",
        },
        {
          q: "Do both keep my screenshots private?",
          a: "Yes. Both process images locally in the browser with canvas and neither uploads them. Privacy is not the axis these two differ on.",
        },
      ],
    },
    'shots-so': {
      name: 'Shots.so',
      metaTitle: "Shots.so Alternative: Portfolio Frame vs Shots.so",
      metaDescription:
        "Looking for a Shots.so alternative? Portfolio Frame gives you device mockups, code frames and annotations in one Chrome extension, with a $19 one-time licence instead of a subscription.",
      h1: "Shots.so alternative: Portfolio Frame vs Shots.so",
      intro:
        "Shots.so is a mature web app with a large device library and animated mockups, and for motion work it is the stronger tool. People searching for a Shots.so alternative tend to want code screenshots, annotation, or a way to stop paying monthly. Portfolio Frame is a Chrome extension that puts device mockups, code frames and annotations in one editor, with a $19 one-time licence instead of a subscription.",
      why: {
        heading: "Why people look for a Shots.so alternative",
        body: [
          "Shots.so is a mockup and background tool, and a very good one. What it does not do is code: there is no snippet editor and no syntax highlighting. It has no arrows, numbered steps or redaction either, so anything that needs pointing at or covering up happens somewhere else.",
          "The other reason is the bill. Shots.so is priced as a subscription, and for something you use a few times a month, paying once can make more sense.",
        ],
      },
      rows: [
        {
          feature: 'Device library',
          frame: 'MacBook, iPhone, Apple Watch, browser & terminal frames',
          competitor: 'iPhone, Android, iPad, iMac, Apple Watch, browser — a larger library',
        },
        {
          feature: 'Code snippet editor',
          frame: 'Syntax highlighting, language badges, window styles',
          competitor: 'Not a focus — general screenshot/mockup tool',
        },
        {
          feature: 'Animated / video export',
          frame: 'Tweet cards with an attached video export as MP4; no general animated export yet',
          competitor: 'Supported on paid plans',
        },
        {
          feature: 'Annotations',
          frame: 'Text, boxes, arrows, numbered steps, redact tool',
          competitor: 'Not a documented feature',
        },
        {
          feature: 'Format',
          frame: 'Chrome extension',
          competitor: 'Hosted web app',
        },
        {
          feature: 'Tweet card mockup',
          frame: 'Built in — avatar, badge, handle, editable stats, light & dark themes',
          competitor: 'Aspect-ratio presets for social, not a styled tweet card',
        },
        {
          feature: 'Pricing',
          frame: 'Free, Pro is a one-time purchase',
          competitor: 'Free tier with watermark; paid plans $8–12/month',
        },
      ],
      honestNote:
        "If you need the biggest device library or want general animated exports beyond tweet cards, Shots.so's maturity shows — it's the stronger pick if that's your priority. Frame is narrower by design: a Chrome extension for developers, pairing code screenshots with device mockups in one tool, with a one-time price instead of a subscription.",

      sections: [
        {
          heading: "A mature web app with a subscription behind it",
          body: [
            "Shots.so has years of development on it and the device library shows it: iPhone, Android, iPad, iMac, Apple Watch and browser frames, with backgrounds ranging from gradients and glass effects through Unsplash photos to AI-generated fills keyed to your image.",
            "It runs as a hosted web app rather than an extension, and it is priced as a subscription. There is a free tier, with paid plans in the region of eight and twelve dollars a month unlocking higher resolution exports, WebP, transparent video and the animated mockups it is best known for.",
            "Frame is a Chrome extension with a free tier and a single one-time payment. Over a couple of years that difference compounds, but it also buys you less: Shots.so's animation work has no equivalent in Frame.",
          ],
        },
        {
          heading: "Animation is the real gap",
          body: [
            "The thing Shots.so does that Frame simply cannot is motion. Animated mockups, video zoom effects and motion presets are its distinguishing feature, and if you are producing launch videos or animated social assets it is the obvious pick.",
            "Frame exports still images, with one narrow exception: a tweet card with an attached video can be exported as MP4. That is not a general animation feature and it would be misleading to present it as one.",
          ],
        },
        {
          heading: "What Frame brings that Shots.so does not",
          body: [
            "Code, first and foremost. Shots.so has no code snippet editor or syntax highlighting. Frame's second editor is built for it.",
            "Annotation is the other gap. Shots.so is a mockup and background tool rather than a markup tool, so there are no arrows, numbered steps or redaction. If your screenshots need to point at something, or need an API key covered before you publish, that work has to happen elsewhere.",
            "And Frame runs where your screenshots already are. An extension in the browser you are working in removes the upload-and-download round trip a hosted web app requires.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Choose Shots.so if",
        competitorBody:
          "You need animated or video mockups, or you want the largest device library available. Its maturity is real and a subscription is reasonable if you are producing this kind of asset regularly.",
        frameHeading: "Choose Frame if",
        frameBody:
          "You want code screenshots and product shots from one tool, you need annotation and redaction, or you would rather pay once than monthly for something you use a few times a month.",
      },
      faqHeading: "Questions about Shots.so and Frame",
      faq: [
        {
          q: "Is Shots.so free?",
          a: "There is a free tier, with paid plans around eight to twelve dollars a month for higher resolution exports, more formats and the animation features. Check their pricing page for current figures.",
        },
        {
          q: "Can Frame export animations?",
          a: "Not generally. A tweet card with an attached video exports as MP4, but there are no animated mockups or motion presets. Shots.so is the right tool for that.",
        },
        {
          q: "Does Shots.so handle code snippets?",
          a: "No. It is built for device mockups and backgrounds. Code images are outside its scope.",
        },
        {
          q: "Which works out cheaper?",
          a: "Frame, if you use it for more than a few months, because Pro is a single payment. Shots.so bills monthly. Whether that matters depends on whether you need the animation features Frame does not have.",
        },
      ],
    },
  },

  privacy: {
    eyebrow: 'Legal',
    title: 'Privacy Policy',
    updatedLabel: 'Last updated:',
    updatedDate: 'September 11, 2026',
    intro:
      'Portfolio Frame is a Chrome extension that turns screenshots into polished images using device mockups, backgrounds, and annotations. This page explains what data the extension handles and how.',
    sections: {
      localData: {
        heading: 'What Portfolio Frame does locally',
        body: 'All image editing happens inside your browser. Screenshots, mockups, backgrounds, and annotations are rendered and exported on your device. Portfolio Frame does not upload your images or screenshots to any server, and we do not have access to the content you create with the extension.',
      },
      storedData: {
        heading: 'Data stored locally',
        intro: "Portfolio Frame uses Chrome's local storage to save:",
        items: [
          'Your editor preferences (selected background, palette, mockup device, and similar settings)',
          "Your Pro license activation status, if you've purchased a license",
        ],
        outro:
          "This data stays on your device and syncs only if your browser's own sync settings are enabled; Portfolio Frame does not separately transmit it.",
      },
      licenseActivation: {
        heading: 'Pro license activation',
        body: "Portfolio Frame Pro is unlocked with a one-time license key issued through Dodo Payments, our payment processor. When you activate a license key, the extension sends the license key itself, plus a short device label, to Dodo Payments' servers to verify the key and register that activation. The device label is a random identifier generated and stored on your device — it is not derived from any hardware ID, account, or personal information — and it lets Dodo Payments track which of your devices have activated the license, since one license can be used on more than one device. The extension does not send your email address as part of activation. Payment details (card numbers, billing address) are handled entirely by Dodo Payments' own checkout page and are never seen by Portfolio Frame or stored by us.",
        linkIntro: "See Dodo Payments' own privacy policy for how they handle this data:",
      },
      whatWeDontDo: {
        heading: "What we don't do",
        items: [
          "We don't sell or share your data with advertisers or data brokers.",
          "We don't track your browsing activity outside of the tab you actively choose to capture with the extension.",
          "We don't use your data to build user profiles or for purposes unrelated to the extension's core function.",
        ],
      },
      permissions: {
        heading: 'Permissions',
        intro:
          'Portfolio Frame requests the following browser permissions, each used only for the stated purpose:',
        items: [
          {
            title: 'activeTab / scripting',
            desc: 'to capture the screenshot of the tab you choose to edit, and to run the on-page element picker, only when you invoke the extension',
          },
          {
            title: 'downloads',
            desc: 'to save exported images and batch export ZIP files to your chosen location',
          },
          {
            title: 'storage',
            desc: 'to remember your editor preferences and license status between sessions',
          },
          {
            title: 'unlimitedStorage',
            desc: "to hold captured screenshots and export data that can exceed Chrome's default storage limit",
          },
          {
            title: 'contextMenus',
            desc: 'to add a right-click option for starting a capture directly from the page',
          },
        ],
        outro:
          "Copying an export to your clipboard and saving files to disk use your browser's standard clipboard and file-download APIs, not a separate extension permission.",
      },
      changes: {
        heading: 'Changes to this policy',
        body: "If our data practices change, we'll update this page and, where required, disclose the change prominently within the extension itself.",
      },
      contact: {
        heading: 'Contact',
        body: 'Questions about this policy:',
      },
    },
  },

  localeSwitcher: {
    label: 'Language',
  },
} satisfies Dictionary
