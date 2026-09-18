import type { Dictionary } from '../types'

export const de = {
  meta: {
    home: {
      title: 'Screenshot- & Code-Mockup-Editor für Chrome | Portfolio Frame',
      description:
        'Portfolio Frame ist eine Chrome-Erweiterung, die Screenshots und Code in Mockups verwandelt: Geräterahmen, Annotationen, Wasserzeichen. Alles bleibt lokal.',
    },
    privacy: {
      title: 'Datenschutzerklärung — Portfolio Frame',
      description:
        'Wie Portfolio Frame mit Daten umgeht: Alles wird lokal in deinem Browser verarbeitet, nichts wird hochgeladen, und die Lizenzaktivierung kommuniziert ausschließlich mit Dodo Payments.',
    },
  },

  nav: {
    links: {
      editor: 'Editor',
      code: 'Code',
      'twitter-snap': 'Twitter Snap',
      mockups: 'Mockups',
      annotate: 'Markierungen',
      brand: 'Marke',
      pricing: 'Preise',
      faq: 'FAQ',
    },
    cta: 'Zu Chrome hinzufügen',
  },

  hero: {
    eyebrow: 'Chrome-Erweiterung für Screenshot- und Code-Mockups',
    headlineLine1: 'Entwickle deine Screenshots',
    headlineLine2: 'wie Abzüge.',
    sub: 'Portfolio Frame macht aus einem rohen Screenshot oder einem Batzen Code etwas, das sich zu teilen lohnt: gerahmt, ausgeleuchtet, kommentiert und im richtigen Format für jeden Zweck. Kein Account, kein Upload, kein Server dazwischen.',
    primaryCta: 'Zu Chrome hinzufügen – kostenlos',
    secondaryCta: "Zeig's mir am Code ↓",
    trust: {
      setupLabel: 'Setup',
      setupValue: 'Null. Erweiterung öffnen und loslegen.',
      storageLabel: 'Speicher',
      storageValue: '100 % auf deinem Gerät, Local Storage & IndexedDB.',
      serversLabel: 'Server',
      serversValue: 'Keine. Deine Arbeit verlässt nie deinen Browser.',
    },
    stageAriaLabel:
      'Eine Code-Snippet-Karte und eine Browser-Screenshot-Karte, angeordnet wie Kontaktabzüge auf einem Leuchttisch in der Dunkelkammer',
    shippedBadge: 'Shipped v2.4',
    sheetCaption: 'Abzug 03: Hintergrund / Screenshot / Rahmen',
  },

  featureRail: {
    sections: {
      editor: {
        tag: 'Doppel-Editor',
        title: 'Eine Arbeitsfläche, zwei Einstiege',
        description:
          'Screenshot reinziehen oder einen Codeblock einfügen. Dieselbe Arbeitsfläche, dieselben Export-Optionen und Formatvorlagen für beides.',
        features: [
          {
            title: 'Zwei Editor-Modi',
            desc: 'Wechsle zwischen Bild-Mockup-Editor und Code-Snippet-Editor, ohne den Faden zu verlieren.',
          },
          {
            title: 'Export in Top-Qualität',
            desc: 'Bestimme Export-Auflösung und JPEG-Kompression selbst, damit beim Export nichts verwaschen rauskommt.',
          },
          {
            title: 'Fertige Formate für Social Media',
            desc: 'Auto, Custom, Quadratisch, Hochformat, Story, Querformat und Präsentation – alle nur einen Klick entfernt.',
          },
        ],
      },
      code: {
        tag: 'Code-Screenshots',
        title: 'Code, richtig gedruckt',
        description:
          'Syntax-Highlighting und Fensterrahmen, gemacht zum Lesen, nicht nur zum Zeigen.',
        features: [
          {
            title: 'Premium Syntax-Themes',
            desc: "Dracula, Synthwave '84, Monokai, GitHub Dark und ein Minimal-Light-Theme, gebaut auf Prism.js.",
          },
          {
            title: 'Badges für mehrere Sprachen',
            desc: 'Automatische, sauber gestaltete Sprach-Badges für JavaScript, TypeScript, Python, CSS und Rust.',
          },
          {
            title: 'Zeilen-Highlighting & Gutter',
            desc: 'Hebe genau die Zeilen hervor, die zählen – mit ein-/ausschaltbaren Zeilennummern.',
          },
          {
            title: 'Fensterstile',
            desc: 'Verpacke Snippets in macOS-, Windows- oder minimalistische Rahmen.',
          },
          {
            title: 'Glassmorphism-Materialien',
            desc: 'Milchglas-Panels mit einstellbaren Rändern, Schattentiefe und Lichtbrechung.',
          },
        ],
      },
      'twitter-snap': {
        tag: 'Tweet-Karten',
        title: 'Tweets, ganz ohne Screenshot',
        description:
          'Tweet einfügen, saubere gestylte Karte zurückbekommen. Kein abgeschnittener Browser-Rahmen, kein Cookie-Banner in der Ecke.',
        features: [
          {
            title: 'Echtes Tweet-Layout',
            desc: 'Avatar, Name, Verified-Badge, Handle und Zeitstempel – genauso angeordnet wie auf X.',
          },
          {
            title: 'Helle & dunkle Themes',
            desc: 'Passe die Karte an, wo sie landet: ein Blogpost, ein Deck oder ein Dark-Mode-Thread.',
          },
          {
            title: 'Bearbeitbare Statistiken',
            desc: 'Antworten, Reposts und Likes bestimmst du selbst – praktisch für Mockups, bevor ein Post überhaupt live geht.',
          },
        ],
      },
      mockups: {
        tag: 'Geräte- & Browser-Mockups',
        title: 'Die richtige Kulisse',
        description:
          'Echte Geräte- und Browser-Rahmen statt flacher Rechtecke, denn der Kontext ist die halbe Miete.',
        features: [
          {
            title: 'Geräte-Bibliothek',
            desc: 'Pro Display XDR, Dell UltraSharp, MacBook, iPhone 14 Pro, Apple Watch und mehr.',
          },
          {
            title: 'Browser-Rahmen',
            desc: 'Helle und dunkle Shells für Chrome unter Windows und Mac sowie Safari.',
          },
          {
            title: 'Terminal-Modus',
            desc: 'Ein anpassbarer Terminal-Rahmen mit konfigurierbarem Dateipfad in der Titelleiste.',
          },
          {
            title: '3D-Neigung',
            desc: 'Einstellbare Neigung auf X-, Y- und Z-Achse plus Zoom, für Tiefe ohne Spielereien.',
          },
        ],
      },
      annotate: {
        tag: 'Annotationswerkzeuge',
        title: "Zeig, worauf's ankommt",
        description:
          'Text, Formen und Schritte direkt auf der Fläche – ganz ohne ein zweites Tool.',
        features: [
          {
            title: 'Markierungs-Tools',
            desc: 'Text, Boxen, Pfeile, nummerierte Schritte, Hervorhebungen und ein Schwärzen-Tool für alles Sensible.',
          },
          {
            title: 'Sticker',
            desc: 'Platziere und drehe eigene Sticker überall auf der Fläche.',
          },
          {
            title: 'Kontext-Badges',
            desc: 'Schicke Badges an jeder Kante, mit eigenem Icon, Emoji oder Punkt: "Neues Feature live" und Ähnliches.',
          },
        ],
      },
      brand: {
        tag: 'Wasserzeichen',
        title: 'Signier deine Arbeit',
        description: "Kennzeichne sie als deine – oder mach's schwer, sie ohne Credit zu klauen.",
        features: [
          {
            title: 'Vielseitige Wasserzeichen',
            desc: 'Text, ein Handle für X, GitHub, LinkedIn oder Instagram, ein eigenes Logo oder ein scanbarer QR-Code.',
          },
          {
            title: 'Gekachelte Wasserzeichen',
            desc: 'Wiederkehrende, schräg angeordnete Kacheln in Solid-, Outline- oder Overlay-Stil, für Arbeiten, die du schützen willst.',
          },
        ],
      },
    },
  },

  showcases: {
    common: {
      tiltLabels: { flat: 'Flach', angled: 'Schräg', deep: 'Tief' },
      ariaTilt: 'Neigung',
    },
    device: {
      frameTypeLabels: { device: 'Gerät', browser: 'Browser', terminal: 'Terminal' },
      deviceLabels: { macbook: 'MacBook', iphone: 'iPhone', watch: 'Watch' },
      deviceFullNames: {
        macbook: 'MacBook Pro 16"',
        iphone: 'iPhone 14 Pro',
        watch: 'Apple Watch',
      },
      ariaFrameType: 'Rahmentyp',
      ariaDevice: 'Gerät',
      deviceCaptionSuffix: ', eines aus der vollen Geräte-Bibliothek.',
      browserCaption: 'Helle & dunkle Browser-Shells für Chrome und Safari.',
      terminalCaption: 'Ein anpassbarer Terminal-Rahmen mit konfigurierbarem Dateipfad.',
    },
    codeGlass: {
      ariaGlass: 'Glas-Material',
      glassOff: 'Glas aus',
      glassOn: 'Glas an',
      returnValue: 'fertig.',
      caption:
        'Milchglas-Panels mit einstellbaren Rändern, plus verstellbare X/Y/Z-Neigung für Tiefe ohne Spielereien.',
    },
    tweetSnap: {
      ariaLogoStyle: 'Logo-Stil',
      classic: 'Klassisch',
      current: 'Aktuell',
      ariaTheme: 'Theme',
      light: 'Hell',
      dark: 'Dunkel',
      tweetBody:
        'heute Twitter Snap geshippt: macht aus jedem Tweet eine saubere, gestylte Karte. kein Screenshot, kein Zuschneiden, kein hässlicher UI-Rahmen.',
      repliesLabel: 'Antworten',
      repostsLabel: 'Reposts',
      likesLabel: 'Likes',
      caption: 'Twitter Snap: alter Vogel oder aktuelles Logo, hell oder dunkel, jede Statistik editierbar',
    },
    annotate: {
      ariaTools: 'Markierungs-Tools',
      tools: { box: 'Box', arrow: 'Pfeil', redact: 'Schwärzen', sticker: 'Sticker' },
      dashboardLabel: 'Dashboard',
      deployLabel: 'Deploy',
      caption:
        'Box, Pfeil, Schwärzen und Sticker, direkt auf der Fläche übereinandergelegt – schalte ein paar zusammen, um zu sehen, wie sie sich stapeln.',
    },
    brand: {
      ariaWatermarkType: 'Wasserzeichen-Typ',
      types: { text: 'Text', logo: 'Logo', qr: 'QR' },
      ariaTiled: 'Gekachelter Schutz',
      tiledOff: 'Kacheln aus',
      tiledOn: 'Kacheln an',
      caption:
        'Wasserzeichen als Handle, Logo oder scanbarer QR-Code — plus ein gekacheltes, schräges Overlay für Arbeiten, die du schützen willst.',
    },
  },

  pricing: {
    tag: 'Preise',
    title: 'Einmal zahlen. Dunkelkammer behalten.',
    description:
      'Frame ist kostenlos zu installieren und zu nutzen. Pro schaltet das komplette Material-Set frei – ein einmaliger Kauf, verifiziert per Lizenzschlüssel, keine wiederkehrenden Kosten.',
    free: {
      title: 'Free',
      price: '$0',
      caption: 'Alles, was du für eine saubere Aufnahme brauchst',
      features: [
        'Dualer Editor: Bilder und Code',
        'Grundlegende Syntax-Themes und Fensterstile',
        '2 Geräte- & Browser-Rahmen pro Kategorie',
        'Volle Hintergrund-Szenenbibliothek, 3D-Neigung & Perspektive',
        'Sticker, plus Text-, Box- und Pfeil-Markierungen',
        'Lokale Speicherung, kein Account',
      ],
      cta: 'Zu Chrome hinzufügen',
    },
    pro: {
      badge: 'Pro',
      title: 'Pro-Lizenz',
      price: '$19',
      billing: 'Einmalige Zahlung',
      caption: 'Alles aus Free, plus das komplette Studio',
      features: [
        'Der Rest der Geräte- & Browser-Mockup-Bibliothek',
        'Glassmorphism-Materialien',
        'Badges und das Schwärzen-Tool',
        'Eigene Szenen speichern, eigene Schriften hochladen',
        'Eigene Logo-, Handle- und QR-Wasserzeichen',
        'Gekachelter Wasserzeichen-Schutz',
        'Batch-Export aller Seitenverhältnisse, als ZIP',
        'SVG-Export',
      ],
      licensePlaceholder: 'XXXX-XXXX-XXXX-XXXX',
      licenseVerified: 'Verifiziert über Dodo Payments',
      cta: 'Pro-Lizenz holen',
    },
  },

  faq: {
    tag: 'FAQ',
    title: 'Fragen, beantwortet',
    items: [
      {
        question: 'Werden mein Code oder meine Screenshots irgendwo hochgeladen?',
        answer:
          'Nein. Portfolio Frame läuft komplett in deinem Browser. Snippets, Bearbeitungsverlauf und Einstellungen werden lokal über den Local Storage und IndexedDB deines Browsers gespeichert. Nichts wird an einen Server gesendet, und es gibt keinen Account, den du anlegen müsstest.',
      },
      {
        question: 'Was ist der Unterschied zwischen Free und Pro?',
        answer:
          'Free deckt den Kern-Editor ab: duale Bild- und Code-Modi, ein paar Syntax-Themes, 2 Geräte-/Browser-Rahmen pro Kategorie, die volle Hintergrund-Szenenbibliothek mit 3D-Neigung, Sticker und einfache Markierungen. Pro ergänzt den Rest der Geräte-Bibliothek, Glassmorphism-Materialien, Badges und das Schwärzen-Tool, gespeicherte eigene Szenen und Schriften, individuelle Wasserzeichen, Batch-Export aller Seitenverhältnisse als ZIP und SVG-Export.',
      },
      {
        question: 'Wie bekomme ich meinen Pro-Lizenzschlüssel nach der Zahlung?',
        answer:
          "Der Checkout läuft über Dodo Payments. Sobald deine Zahlung durch ist, wird dein Lizenzschlüssel automatisch generiert und dir per E-Mail geschickt. Füg ihn im Lizenz-Bildschirm der Erweiterung ein, um Pro freizuschalten.",
      },
      {
        question: 'Kann ich meine Lizenz auf mehr als einem Gerät nutzen?',
        answer:
          'Ja. Deine Lizenz ist nicht auf ein einzelnes Gerät oder Browser-Profil beschränkt, du kannst sie also überall aktivieren, wo du Portfolio Frame nutzt.',
      },
      {
        question: 'Wie funktioniert eine Rückerstattung?',
        answer:
          'Wenn du einen gültigen Pro-Lizenzschlüssel hast, bekommst du innerhalb von 7 Tagen nach dem Kauf eine volle Rückerstattung, ohne Wenn und Aber. Schreib mir einfach mit der E-Mail-Adresse, mit der du gekauft hast, und ich kümmere mich darum.',
      },
      {
        question: 'Kosten zukünftige Updates extra?',
        answer:
          'Nein. Dein einmaliger Kauf beinhaltet kostenlose Updates und Verbesserungen für alle aktuellen Pro-Features.',
      },
      {
        question: 'Werden Zahlungen aus Indien unterstützt, inklusive UPI?',
        answer:
          'Ja. Der Checkout unterstützt UPI neben Kreditkarten und anderen regionalen Zahlungsmethoden, und die Preise passen sich automatisch an die Kaufkraftparität an, damit du einen fairen lokalen Preis zahlst.',
      },
    ],
  },

  footer: {
    tagline: 'Eine Dunkelkammer für Screenshots und Code. Alles bleibt auf deinem Gerät.',
    productLabel: 'Produkt',
    getItLabel: 'Herunterladen',
    proLicenseLink: 'Pro-Lizenz',
    noAccountLine: 'Kein Account. Kein Upload. Kein Server.',
    privacyLink: 'Datenschutzerklärung',
  },

  compare: {
    eyebrow: 'Vergleich',
    titleTemplate: (name: string) => `Frame vs. ${name}`,
    metaTitleTemplate: (name: string) =>
      `Frame vs. ${name} — Tools für Code-Screenshots & Mockups im Vergleich`,
    tableHeaders: { feature: 'Feature', frame: 'Frame' },
    honestLabel: 'Ehrlich gesagt',
    ctaText: 'Frame ausprobieren — kostenlos',
    otherLabel: 'Weitere Vergleiche',
    otherLinkTemplate: (name: string) => `Frame vs. ${name}`,
  },

  comparisons: {
    carbon: {
      name: 'Carbon',
      intro:
        'Carbon hat das Format Code-Screenshot bekannt gemacht — die größte Theme- und Sprachbibliothek überhaupt, und kostenlos noch dazu. Hier siehst du, wie es im Vergleich zu Frame abschneidet.',
      rows: [
        {
          feature: 'Wo Code gerendert wird',
          frame: 'Lokal, in deinem Browser',
          competitor: 'Wird an Carbons Server gesendet',
        },
        {
          feature: 'Syntax-Themes',
          frame: "5 handverlesene Themes (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
          competitor: '30+ Themes, 100+ Sprachen',
        },
        {
          feature: 'Geräte- & Browser-Mockups',
          frame: 'MacBook, iPhone, Apple Watch, Browser- & Terminal-Rahmen',
          competitor: 'Keine',
        },
        {
          feature: 'Markierungen',
          frame: 'Text, Boxen, Pfeile, nummerierte Schritte, Schwärzen-Tool',
          competitor: 'Keine',
        },
        {
          feature: 'Wasserzeichen',
          frame: 'Text, Handle, Logo, QR, gekachelte Muster',
          competitor: 'Keine',
        },
        {
          feature: 'Bild-/Screenshot-Bearbeitung',
          frame: 'Eingebaut, direkt neben dem Code-Editor',
          competitor: 'Nur Code — kein Bildmodus',
        },
        {
          feature: 'Tweet-Karten-Mockup',
          frame: 'Eingebaut — Avatar, Badge, Handle, editierbare Statistiken, helle & dunkle Themes',
          competitor: 'Kein dokumentiertes Feature',
        },
        {
          feature: 'Preise',
          frame: 'Free, Pro ist ein einmaliger Kauf',
          competitor: 'Kostenlos',
        },
      ],
      honestNote:
        'Wenn du nur schnell einen Code-Screenshot brauchst und die größte Theme-Auswahl willst, ist Carbon kaum zu schlagen — und kostet nichts. Frame tauscht einen Teil dieser Theme-Vielfalt gegen rein lokales Rendering, Geräte-Mockups und Markierungs-Tools ein — lohnt sich, wenn du komplette Produktaufnahmen teilst und nicht nur Code.',
    },
    'ray-so': {
      name: 'Ray.so',
      intro:
        'Ray.so (von Raycast) ist der schnellste Weg von einer Code-Auswahl zu einem sauberen PNG mit Farbverlauf-Hintergrund. Hier siehst du, wie es im Vergleich zu Frame abschneidet.',
      rows: [
        {
          feature: 'Wo Code gerendert wird',
          frame: 'Lokal, in deinem Browser',
          competitor: 'Wird an Ray.sos Server gesendet',
        },
        {
          feature: 'Syntax-Themes',
          frame: "5 handverlesene Themes (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
          competitor: 'Eine kleine Auswahl an polierten Gradient-Presets',
        },
        {
          feature: 'Geräte- & Browser-Mockups',
          frame: 'MacBook, iPhone, Apple Watch, Browser- & Terminal-Rahmen',
          competitor: 'Keine',
        },
        {
          feature: 'Markierungen',
          frame: 'Text, Boxen, Pfeile, nummerierte Schritte, Schwärzen-Tool',
          competitor: 'Keine',
        },
        {
          feature: 'Wasserzeichen',
          frame: 'Text, Handle, Logo, QR, gekachelte Muster',
          competitor: 'Keine',
        },
        {
          feature: 'Bild-/Screenshot-Bearbeitung',
          frame: 'Eingebaut, direkt neben dem Code-Editor',
          competitor: 'Nur Code — kein Bildmodus',
        },
        {
          feature: 'Tweet-Karten-Mockup',
          frame: 'Eingebaut — Avatar, Badge, Handle, editierbare Statistiken, helle & dunkle Themes',
          competitor: 'Kein dokumentiertes Feature',
        },
        {
          feature: 'Preise',
          frame: 'Free, Pro ist ein einmaliger Kauf',
          competitor: 'Kostenlos',
        },
      ],
      honestNote:
        'Ray.so ist wirklich das schnellste One-Click-Tool, wenn du nur ein sauberes Code-Bild brauchst, und es ist kostenlos. Frame verlangt am Anfang etwas mehr von dir — es ist ein vollwertiger Editor, kein One-Click-Generator — bringt dafür aber Mockups, Markierungen und rein lokale Verarbeitung mit, die Ray.so nicht bietet.',
    },
    screely: {
      name: 'Screely',
      intro:
        'Screely macht aus Webseiten-Screenshots polierte Browser-Mockups und bleibt — wie Frame — komplett lokal auf deinem Gerät. Hier unterscheiden sich die beiden wirklich.',
      rows: [
        {
          feature: 'Wo Screenshots verarbeitet werden',
          frame: 'Lokal, in deinem Browser',
          competitor: 'Lokal, in deinem Browser',
        },
        {
          feature: 'Code-Snippet-Editor',
          frame: 'Syntax-Highlighting, Sprach-Badges, Fensterstile',
          competitor: 'Kein Fokus — gebaut für Webseiten-/Bild-Screenshots',
        },
        {
          feature: 'Geräte-Mockups',
          frame: 'MacBook, iPhone, Apple Watch, plus Browser- & Terminal-Rahmen',
          competitor: 'Vor allem Browser-Fensterrahmen',
        },
        {
          feature: 'Markierung & Schwärzen',
          frame: 'Text, Boxen, Pfeile, nummerierte Schritte, Schwärzen-Tool',
          competitor: 'Text, Pfeile, Formen, Weichzeichnen-Tool',
        },
        {
          feature: 'Wasserzeichen',
          frame: 'Text, Handle, Logo, QR, gekachelte Muster',
          competitor: 'Kein dokumentiertes Feature',
        },
        {
          feature: 'Tweet-Karten-Mockup',
          frame: 'Eingebaut — Avatar, Badge, Handle, editierbare Statistiken, helle & dunkle Themes',
          competitor: 'Kein dokumentiertes Feature',
        },
        {
          feature: 'Preise',
          frame: 'Free, Pro ist ein einmaliger Kauf',
          competitor: 'Kostenlos',
        },
      ],
      honestNote:
        "Screely ist hervorragend in genau dem, wofür es gebaut wurde — Webseiten-Screenshots zu polierten Browser-Mockups zu machen — und teilt Frames local-first-Ansatz ohne Upload. Der Unterschied liegt auf der Code-Seite: Syntax-Highlighting, Sprach-Badges und Fensterstile, speziell fürs Teilen von Code gebaut — worauf Screely gar nicht ausgelegt ist.",
    },
    'shots-so': {
      name: 'Shots.so',
      intro:
        'Shots.so hat vier Jahre Entwicklung hinter sich — eine große Geräte-Bibliothek, 3D-Szenen und animierte Exporte in den bezahlten Plänen. Hier siehst du, wie es im Vergleich zu Frame abschneidet.',
      rows: [
        {
          feature: 'Geräte-Bibliothek',
          frame: 'MacBook, iPhone, Apple Watch, Browser- & Terminal-Rahmen',
          competitor: 'iPhone, Android, iPad, iMac, Apple Watch, Browser — eine größere Bibliothek',
        },
        {
          feature: 'Code-Snippet-Editor',
          frame: 'Syntax-Highlighting, Sprach-Badges, Fensterstile',
          competitor: 'Kein Fokus — allgemeines Screenshot-/Mockup-Tool',
        },
        {
          feature: 'Animierter / Video-Export',
          frame: 'Tweet-Karten mit angehängtem Video-Export als MP4; noch kein allgemeiner animierter Export',
          competitor: 'Unterstützt in bezahlten Plänen',
        },
        {
          feature: 'Markierungen',
          frame: 'Text, Boxen, Pfeile, nummerierte Schritte, Schwärzen-Tool',
          competitor: 'Kein dokumentiertes Feature',
        },
        {
          feature: 'Format',
          frame: 'Chrome-Erweiterung',
          competitor: 'Gehostete Web-App',
        },
        {
          feature: 'Tweet-Karten-Mockup',
          frame: 'Eingebaut — Avatar, Badge, Handle, editierbare Statistiken, helle & dunkle Themes',
          competitor: 'Seitenverhältnis-Presets für Social Media, keine gestylte Tweet-Karte',
        },
        {
          feature: 'Preise',
          frame: 'Free, Pro ist ein einmaliger Kauf',
          competitor: 'Kostenlose Stufe mit Wasserzeichen; bezahlte Pläne $8–12/Monat',
        },
      ],
      honestNote:
        'Wenn du die größte Geräte-Bibliothek brauchst oder allgemeine animierte Exporte über Tweet-Karten hinaus willst, merkt man Shots.so seine Reife an — die stärkere Wahl, wenn das deine Priorität ist. Frame ist bewusst schmaler geschnitten: eine Chrome-Erweiterung für Entwickler, die Code-Screenshots und Geräte-Mockups in einem Tool vereint, mit einem einmaligen Preis statt Abo.',
    },
  },

  privacy: {
    eyebrow: 'Rechtliches',
    title: 'Datenschutzerklärung',
    updatedLabel: 'Zuletzt aktualisiert:',
    updatedDate: '11. September 2026',
    intro:
      'Portfolio Frame ist eine Chrome-Erweiterung, die aus Screenshots mit Geräte-Mockups, Hintergründen und Markierungen polierte Bilder macht. Diese Seite erklärt, welche Daten die Erweiterung verarbeitet und wie.',
    sections: {
      localData: {
        heading: 'Was Portfolio Frame lokal macht',
        body: 'Die gesamte Bildbearbeitung findet in deinem Browser statt. Screenshots, Mockups, Hintergründe und Markierungen werden auf deinem Gerät gerendert und exportiert. Portfolio Frame lädt deine Bilder oder Screenshots auf keinen Server hoch, und wir haben keinen Zugriff auf die Inhalte, die du mit der Erweiterung erstellst.',
      },
      storedData: {
        heading: 'Lokal gespeicherte Daten',
        intro: 'Portfolio Frame nutzt den lokalen Speicher von Chrome, um Folgendes zu speichern:',
        items: [
          'Deine Editor-Einstellungen (gewählter Hintergrund, Palette, Mockup-Gerät und ähnliche Einstellungen)',
          'Deinen Pro-Lizenz-Aktivierungsstatus, falls du eine Lizenz gekauft hast',
        ],
        outro:
          'Diese Daten bleiben auf deinem Gerät und werden nur synchronisiert, wenn die Sync-Einstellungen deines Browsers selbst aktiviert sind; Portfolio Frame überträgt sie nicht gesondert.',
      },
      licenseActivation: {
        heading: 'Aktivierung der Pro-Lizenz',
        body: 'Portfolio Frame Pro wird mit einem einmaligen Lizenzschlüssel freigeschaltet, der über Dodo Payments, unseren Zahlungsdienstleister, ausgestellt wird. Wenn du einen Lizenzschlüssel aktivierst, sendet die Erweiterung den Lizenzschlüssel selbst sowie ein kurzes Gerätelabel an die Server von Dodo Payments, um den Schlüssel zu verifizieren und diese Aktivierung zu registrieren. Das Gerätelabel ist eine zufällig generierte Kennung, die auf deinem Gerät gespeichert wird — sie leitet sich nicht von einer Hardware-ID, einem Account oder persönlichen Informationen ab — und ermöglicht es Dodo Payments nachzuvollziehen, auf welchen deiner Geräte die Lizenz aktiviert wurde, da eine Lizenz auf mehr als einem Gerät genutzt werden kann. Die Erweiterung sendet deine E-Mail-Adresse nicht im Rahmen der Aktivierung. Zahlungsdetails (Kartennummern, Rechnungsadresse) werden vollständig über die eigene Checkout-Seite von Dodo Payments abgewickelt und werden von Portfolio Frame weder eingesehen noch von uns gespeichert.',
        linkIntro: 'Wie Dodo Payments mit diesen Daten umgeht, erfährst du in deren eigener Datenschutzerklärung:',
      },
      whatWeDontDo: {
        heading: 'Was wir nicht tun',
        items: [
          'Wir verkaufen oder teilen deine Daten nicht mit Werbetreibenden oder Datenhändlern.',
          'Wir verfolgen deine Browsing-Aktivität nicht außerhalb des Tabs, den du aktiv mit der Erweiterung erfassen möchtest.',
          'Wir nutzen deine Daten nicht, um Nutzerprofile zu erstellen, oder für Zwecke, die nichts mit der Kernfunktion der Erweiterung zu tun haben.',
        ],
      },
      permissions: {
        heading: 'Berechtigungen',
        intro:
          'Portfolio Frame fragt die folgenden Browser-Berechtigungen an, jede ausschließlich für den genannten Zweck:',
        items: [
          {
            title: 'activeTab / scripting',
            desc: 'um den Screenshot des Tabs zu erfassen, den du bearbeiten möchtest, und um den Element-Picker auf der Seite auszuführen — nur, wenn du die Erweiterung aufrufst',
          },
          {
            title: 'downloads',
            desc: 'um exportierte Bilder und Batch-Export-ZIP-Dateien an dem von dir gewählten Ort zu speichern',
          },
          {
            title: 'storage',
            desc: 'um deine Editor-Einstellungen und deinen Lizenzstatus zwischen Sitzungen zu merken',
          },
          {
            title: 'unlimitedStorage',
            desc: 'um erfasste Screenshots und Exportdaten zu speichern, die das Standard-Speicherlimit von Chrome überschreiten können',
          },
          {
            title: 'contextMenus',
            desc: 'um eine Rechtsklick-Option hinzuzufügen, mit der du eine Erfassung direkt von der Seite aus starten kannst',
          },
        ],
        outro:
          'Das Kopieren eines Exports in die Zwischenablage und das Speichern von Dateien auf der Festplatte nutzen die Standard-APIs deines Browsers für Zwischenablage und Datei-Downloads, keine separate Erweiterungs-Berechtigung.',
      },
      changes: {
        heading: 'Änderungen an dieser Richtlinie',
        body: 'Falls sich unsere Datenpraktiken ändern, aktualisieren wir diese Seite und weisen, wo erforderlich, deutlich sichtbar innerhalb der Erweiterung selbst auf die Änderung hin.',
      },
      contact: {
        heading: 'Kontakt',
        body: 'Fragen zu dieser Richtlinie:',
      },
    },
  },

  localeSwitcher: {
    label: 'Sprache',
  },
} satisfies Dictionary
