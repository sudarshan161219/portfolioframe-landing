import type { Dictionary } from '../types'

export const en = {
  meta: {
    home: {
      title: 'Screenshot & code mockup editor for Chrome | Portfolio Frame',
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
    titleTemplate: (name: string) => `Frame vs ${name}`,
    metaTitleTemplate: (name: string) =>
      `Frame vs ${name} — code screenshot & mockup tools compared`,
    tableHeaders: { feature: 'Feature', frame: 'Frame' },
    honestLabel: 'Being honest about it',
    ctaText: "Try Frame — it's free",
    otherLabel: 'Other comparisons',
    otherLinkTemplate: (name: string) => `Frame vs ${name}`,
  },

  comparisons: {
    carbon: {
      name: 'Carbon',
      intro:
        "Carbon popularized the code-screenshot format — the biggest theme and language library out there, and it's free. Here's how it compares to Frame.",
      rows: [
        {
          feature: 'Where code is rendered',
          frame: 'Locally, in your browser',
          competitor: "Sent to Carbon's server",
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
        "If you only need a quick code screenshot and want the widest theme selection, Carbon is hard to beat, and it costs nothing. Frame trades some of that theme breadth for local-only rendering, device mockups, and annotation tools — worth it if you're sharing full product shots, not just code.",
    },
    'ray-so': {
      name: 'Ray.so',
      intro:
        "Ray.so (by Raycast) is the fastest path from a code selection to a clean, gradient-backed PNG. Here's how it compares to Frame.",
      rows: [
        {
          feature: 'Where code is rendered',
          frame: 'Locally, in your browser',
          competitor: "Sent to Ray.so's server",
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
        "Ray.so is genuinely the fastest one-click tool if all you need is a clean code image, and it's free. Frame asks a little more of you upfront — it's a full editor, not a one-click generator — but adds mockups, annotations, and local-only processing that Ray.so doesn't do.",
    },
    screely: {
      name: 'Screely',
      intro:
        "Screely turns webpage screenshots into polished browser mockups, and — like Frame — keeps everything local to your device. Here's where the two actually differ.",
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
    },
    'shots-so': {
      name: 'Shots.so',
      intro:
        "Shots.so has four years of development behind it — a large device library, 3D scenes, and animated exports on paid plans. Here's how it compares to Frame.",
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
