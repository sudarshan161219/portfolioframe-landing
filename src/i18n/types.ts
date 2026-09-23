// Shared shape every locale dictionary must satisfy. `en.ts` is the source
// of truth; es/fr/de are typed `satisfies Dictionary` so a missing key is a
// compile error instead of a silent fallback to English.

export type NavSectionId =
  | 'editor'
  | 'code'
  | 'twitter-snap'
  | 'mockups'
  | 'annotate'
  | 'brand'
  | 'pricing'
  | 'faq'

export type FeatureRailSectionId =
  | 'editor'
  | 'code'
  | 'twitter-snap'
  | 'mockups'
  | 'annotate'
  | 'brand'

export type ComparisonSlug = 'carbon' | 'ray-so' | 'screely' | 'shots-so'

export interface Feature {
  title: string
  desc: string
}

export interface FeatureRailSection {
  tag: string
  title: string
  description: string
  features: Feature[]
}

export interface ComparisonRow {
  feature: string
  frame: string
  competitor: string
}

export interface ComparisonSection {
  heading: string
  body: string[]
}

export interface ComparisonVerdict {
  competitorHeading: string
  competitorBody: string
  frameHeading: string
  frameBody: string
}

export interface ComparisonFaq {
  q: string
  a: string
}

export interface Comparison {
  name: string
  intro: string
  rows: ComparisonRow[]
  honestNote: string
  // Long-form blocks below the table. Optional on purpose: a locale that has
  // not been translated yet renders the short version instead of failing the
  // build, so English can ship ahead of es/fr/de.
  sections?: ComparisonSection[]
  verdict?: ComparisonVerdict
  faqHeading?: string
  faq?: ComparisonFaq[]
}

export interface Dictionary {
  meta: {
    home: { title: string; description: string }
    privacy: { title: string; description: string }
  }

  nav: {
    links: Record<NavSectionId, string>
    cta: string
  }

  hero: {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    sub: string
    primaryCta: string
    secondaryCta: string
    trust: {
      setupLabel: string
      setupValue: string
      storageLabel: string
      storageValue: string
      serversLabel: string
      serversValue: string
    }
    stageAriaLabel: string
    shippedBadge: string
    sheetCaption: string
  }

  featureRail: {
    sections: Record<FeatureRailSectionId, FeatureRailSection>
  }

  showcases: {
    common: {
      tiltLabels: { flat: string; angled: string; deep: string }
      ariaTilt: string
    }
    device: {
      frameTypeLabels: { device: string; browser: string; terminal: string }
      deviceLabels: { macbook: string; iphone: string; watch: string }
      deviceFullNames: { macbook: string; iphone: string; watch: string }
      ariaFrameType: string
      ariaDevice: string
      deviceCaptionSuffix: string
      browserCaption: string
      terminalCaption: string
    }
    codeGlass: {
      ariaGlass: string
      glassOff: string
      glassOn: string
      returnValue: string
      caption: string
    }
    tweetSnap: {
      ariaLogoStyle: string
      classic: string
      current: string
      ariaTheme: string
      light: string
      dark: string
      tweetBody: string
      repliesLabel: string
      repostsLabel: string
      likesLabel: string
      caption: string
    }
    annotate: {
      ariaTools: string
      tools: { box: string; arrow: string; redact: string; sticker: string }
      dashboardLabel: string
      deployLabel: string
      caption: string
    }
    brand: {
      ariaWatermarkType: string
      types: { text: string; logo: string; qr: string }
      ariaTiled: string
      tiledOff: string
      tiledOn: string
      caption: string
    }
  }

  pricing: {
    tag: string
    title: string
    description: string
    free: {
      title: string
      price: string
      caption: string
      features: string[]
      cta: string
    }
    pro: {
      badge: string
      title: string
      price: string
      billing: string
      caption: string
      features: string[]
      licensePlaceholder: string
      licenseVerified: string
      cta: string
    }
  }

  faq: {
    tag: string
    title: string
    items: { question: string; answer: string }[]
  }

  footer: {
    tagline: string
    productLabel: string
    getItLabel: string
    proLicenseLink: string
    noAccountLine: string
    privacyLink: string
  }

  compare: {
    eyebrow: string
    titleTemplate: (name: string) => string
    metaTitleTemplate: (name: string) => string
    tableHeaders: { feature: string; frame: string }
    honestLabel: string
    ctaText: string
    otherLabel: string
    otherLinkTemplate: (name: string) => string
  }

  comparisons: Record<ComparisonSlug, Comparison>

  privacy: {
    eyebrow: string
    title: string
    updatedLabel: string
    updatedDate: string
    intro: string
    sections: {
      localData: { heading: string; body: string }
      storedData: {
        heading: string
        intro: string
        items: string[]
        outro: string
      }
      licenseActivation: {
        heading: string
        body: string
        linkIntro: string
      }
      whatWeDontDo: { heading: string; items: string[] }
      permissions: {
        heading: string
        intro: string
        items: { title: string; desc: string }[]
        outro: string
      }
      changes: { heading: string; body: string }
      contact: { heading: string; body: string }
    }
  }

  localeSwitcher: {
    label: string
  }
}
