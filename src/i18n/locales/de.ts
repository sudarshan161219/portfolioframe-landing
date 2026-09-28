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
    subhead:
      "Ein Screenshot-Verschönerer und Geräte-Mockup-Generator für Chrome. Verwandle Screenshots, Code-Snippets und Tweets in polierte Bilder, ohne etwas hochzuladen.",
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
    tableHeaders: { feature: 'Feature', frame: 'Frame' },
    honestLabel: 'Ehrlich gesagt',
    ctaText: 'Frame ausprobieren — kostenlos',
    otherLabel: 'Weitere Vergleiche',
    otherLinkTemplate: (name: string) => `Frame vs. ${name}`,
  },

  comparisons: {
    carbon: {
      name: 'Carbon',
      metaTitle: "Carbon-Alternative: Portfolio Frame vs. Carbon.now.sh",
      metaDescription:
        "Auf der Suche nach einer Carbon.now.sh-Alternative? Portfolio Frame rendert Code-Screenshots im Browser, ohne Server, plus Mockups und Markierungen.",
      h1: "Carbon-Alternative: Portfolio Frame vs. Carbon.now.sh",
      intro:
        "Wenn du eine Carbon-Alternative suchst, lohnt sich ein klarer Blick darauf, was Carbon gut macht: Es ist kostenlos, Open Source und hat die breiteste Theme- und Sprachabdeckung aller Code-Screenshot-Tools. Portfolio Frame ist eine Chrome-Erweiterung, die Code-Screenshots ebenfalls in deinem Browser rendert und dazu liefert, was Carbon gar nicht versucht: Geräte-Mockups, Markierungen, Wasserzeichen und einen Screenshot-Editor neben dem für Code.",
      why: {
        heading: "Warum Leute eine Carbon-Alternative suchen",
        body: [
          "Carbon macht eine Sache, Code rein und Bild raus, und das gut. Die Gründe, weiterzusuchen, haben meist mit dem Umfang zu tun, nicht mit der Qualität. Es gibt keinen Bildmodus, ein Screenshot des Features braucht also ein zweites Tool. Es gibt keine Geräterahmen, keine Pfeile oder nummerierten Schritte und keine Möglichkeit, einen Key zu schwärzen oder ein Wasserzeichen zu setzen, bevor das Bild rausgeht.",
          "Wenn du nur Code teilst, spielt das alles keine Rolle, und Carbon ist die bessere Wahl. Wenn deine Release-Notes Code und Produktaufnahmen mischen, fängt das zweite Tool an, dich etwas zu kosten.",
        ],
      },
      rows: [
        {
          feature: 'Wie das Bild gerendert wird',
          frame: 'Canvas-Compositing, in deinem Browser',
          competitor: 'DOM-Rasterisierung per dom-to-image, ebenfalls in deinem Browser',
        },
        {
          feature: 'Wo dein Code liegt',
          frame: 'Im Extension-Speicher auf deinem eigenen Rechner',
          competitor: 'Eine gehostete Web-App. Der Export bleibt lokal; ein gespeicherter oder getweeteter Snippet wird hochgeladen',
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
        'Wenn du nur schnell einen Code-Screenshot brauchst und die größte Theme-Auswahl willst, ist Carbon kaum zu schlagen, und es kostet nichts. Beide Tools exportieren in deinem Browser, hier gibst du also keine Privatsphäre auf. Der Unterschied liegt in Methode und Umfang: Carbon rasterisiert das DOM, was schnell gebaut ist und bei Schatten und eigenen Schriften an Grenzen stößt, während Frame auf Canvas komponiert und Geräte-Mockups, Markierungen und Wasserzeichen mitbringt. Nimm Carbon für einen Code-Ausschnitt und Frame für eine komplette Produktaufnahme.',
      sections: [
        {
          heading: "Beide rendern in deinem Browser",
          body: [
            "Auf dieser Seite stand früher, Carbon schicke deinen Code an einen Server. Das war falsch, und es gehört klar richtiggestellt. Carbons Editor übergibt den DOM-Knoten direkt an dom-to-image und bekommt ein PNG oder SVG zurück, ohne dass der Code die Seite verlässt. Im Repository gibt es zwar einen serverseitigen Renderer, aber der antwortet nur den Crawlern von Twitter und Slack, damit Link-Vorschauen etwas anzuzeigen haben, und gibt allen anderen ein 401 zurück.",
            "Was sich tatsächlich unterscheidet, ist die Methode. dom-to-image läuft durch das DOM, bettet die berechneten Styles ein und rastert das Ergebnis über ein SVG-foreignObject. Frame komponiert auf Canvas: jede Ebene wird der Reihe nach auf eine Bitmap-Fläche gezeichnet, die es selbst kontrolliert.",
            "Das klingt akademisch, bis du etwas mit eigener Schrift und weichem Schatten exportierst. Die foreignObject-Rasterung hängt davon ab, dass der Browser beim Export deiner Meinung ist, wie so etwas gezeichnet wird, und Browser sind das nicht immer. Canvas-Compositing entscheidet das selbst. Es waren zwei Wochen Kampf mit dem ersten Ansatz, die zum zweiten geführt haben.",
          ],
        },
        {
          heading: "Carbon ist ein Code-Tool. Frame macht Code und Screenshots.",
          body: [
            "Carbon macht eine Sache, und das seit 2018. Du fügst Code ein, wählst ein Theme, bekommst ein Bild. Kein Bildimport, kein Geräterahmen, keine Annotationsebene, weil nichts davon jemals sein Ziel war.",
            "Frames zwei Editoren teilen sich ein Canvas, einen Satz Export-Presets und ein Größensystem. Eine Release-Notiz, die ein Browser-Mockup des Features und einen hervorgehobenen Ausschnitt des API-Aufrufs braucht, ist damit ein Tool und eine Export-Warteschlange statt zwei.",
          ],
        },
        {
          heading: "Wo Carbon klar vorn liegt",
          body: [
            "Bei Themes und Sprachen ist es nicht knapp. Carbon bringt über 30 Themes und mehr als 100 Sprachen mit, gegen fünf kuratierte Themes und fünf Sprach-Badges bei Frame. Wenn dein Ausschnitt Elixir oder Haskell ist, deckt Carbon dich ab und Frame nicht.",
            "Außerdem ist es Open Source unter MIT-Lizenz mit über 36.000 Sternen, du kannst also genau nachlesen, wie es funktioniert, es selbst hosten oder forken. Frame ist nicht Open Source. Und Carbon ist komplett kostenlos ohne Stufen, während Frame Geräte-Mockups, Wasserzeichen und Batch-Export hinter einem einmaligen Kauf hält.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Nimm Carbon, wenn",
        competitorBody:
          "du ausschließlich Code teilst, die größtmögliche Auswahl an Themes und Sprachen willst, oder dir wichtig ist, etwas Quelloffenes zu nutzen, das du selbst hosten könntest. Es ist kostenlos, ausgereift und für einen reinen Code-Screenshot ausgezeichnet.",
        frameHeading: "Nimm Frame, wenn",
        frameBody:
          "du Screenshots ungefähr so oft teilst wie Code und keine Lust mehr auf ein Tool für Snippets und ein zweites für Produktaufnahmen hast. Geräterahmen, Annotationen und Wasserzeichen sind genau das, was Carbon dir nie geben wollte.",
      },
      faqHeading: "Fragen zu Carbon und Frame",
      faq: [
        {
          q: "Lädt Carbon meinen Code auf einen Server?",
          a: "Beim Export nicht, das passiert in deinem Browser. Schon aber, wenn du ein Snippet in deinem Carbon-Konto speicherst oder den eingebauten Tweet-Button nutzt. Beides sind bewusste Aktionen und nicht Teil des Exports.",
        },
        {
          q: "Ist Frame Open Source wie Carbon?",
          a: "Nein. Carbon steht unter MIT-Lizenz, du kannst es lesen und selbst hosten. Frame ist Closed Source, mit einer kostenlosen Stufe und einer einmaligen Lizenz für den Rest.",
        },
        {
          q: "Kann Frame mit Carbons Syntax-Themes mithalten?",
          a: "Nein, und das versucht es auch nicht. Frame liefert fünf kuratierte Themes auf Prism-Basis gegen über dreißig bei Carbon. Wenn du auf Theme-Auswahl optimierst, gewinnt Carbon diesen Vergleich eindeutig.",
        },
        {
          q: "Kann Carbon einen Screenshot in einen Geräterahmen setzen?",
          a: "Nein. Carbon arbeitet nur mit Code. Das ist der Hauptgrund, warum diese beiden Tools eher nebeneinander installiert sind, als dass eines das andere ersetzt.",
        },
      ],
    },
    'ray-so': {
      name: 'Ray.so',
      metaTitle: "Ray.so-Alternative: Portfolio Frame vs. Ray.so",
      metaDescription:
        "Auf der Suche nach einer Ray.so-Alternative? Portfolio Frame macht Code-Screenshots, Geräte-Mockups, Markierungen und Wasserzeichen, offline, einmalig $19.",
      h1: "Ray.so-Alternative: Portfolio Frame vs. Ray.so",
      intro:
        "Ray.so ist der schnellste Weg von einer Code-Auswahl zu einem sauberen Bild mit Farbverlauf, und es ist kostenlos. Wer eine Ray.so-Alternative sucht, braucht meist mehr, als dieser eine Bildschirm hergibt. Portfolio Frame ist eine Chrome-Erweiterung, die ebenfalls Code-Screenshots macht und dazu Geräte-Mockups, Markierungen, Wasserzeichen und einen Screenshot-Editor mitbringt, alles lokal in deinem Browser gerendert.",
      why: {
        heading: "Warum Leute eine Ray.so-Alternative suchen",
        body: [
          "Ray.so ist bewusst minimal: Farbverlauf wählen, Theme wählen, kopieren. Genau das macht es attraktiv, und genau dort stößt man an seine Grenze. Es gibt keine Möglichkeit, einen Screenshot in ein Gerät zu setzen, einen Pfeil auf die entscheidende Zeile zu zeichnen oder einen API-Key vor dem Veröffentlichen abzudecken.",
          "Wenn das Ergebnis konkret sein muss und nicht nur ordentlich, braucht es einen Editor, und genau diese Lücke wollen die Leute schließen.",
        ],
      },
      rows: [
        {
          feature: 'Wie das Bild gerendert wird',
          frame: 'Canvas-Compositing, in deinem Browser',
          competitor: 'DOM-Rasterisierung per html-to-image, ebenfalls in deinem Browser',
        },
        {
          feature: 'Wo dein Code liegt',
          frame: 'Im Extension-Speicher auf deinem eigenen Rechner',
          competitor: 'Eine gehostete Web-App, in die du deinen Code einfügst',
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
        'Ray.so ist wirklich der schnellste Weg von einer Code-Auswahl zu einem sauberen Bild, und es ist kostenlos. Auch Ray.so rendert in deinem Browser, keines der beiden Tools schickt deinen Code irgendwohin, um ein Bild daraus zu machen. Frame verlangt am Anfang etwas mehr von dir, weil es ein vollwertiger Editor und kein One-Click-Generator ist, und gibt dir dafür Geräte-Mockups, Markierungen, Wasserzeichen und einen Bildeditor, den Ray.so gar nicht abdecken will.',
      sections: [
        {
          heading: "Ray.so rendert ebenfalls lokal",
          body: [
            "Wie Carbon exportiert Ray.so im Browser. Der Export-Button ruft html-to-image auf dem gerenderten Knoten auf und gibt dir ein PNG oder SVG zurück. Raycast veröffentlicht das Ganze auf GitHub unter MIT-Lizenz, das ist also überprüfbar und keine Behauptung, der man glauben muss.",
            "Der Unterschied zwischen beiden liegt also nicht darin, wohin dein Code geht. Er liegt darin, dass Ray.so das DOM rastert, während Frame auf Canvas komponiert, und dass Ray.so bewusst ein Ein-Bildschirm-Tool ist, während Frame ein Editor ist.",
          ],
        },
        {
          heading: "Ein-Klick-Generator gegen Editor",
          body: [
            "Ray.so ist in dieser ganzen Kategorie der schnellste Weg von einer Code-Auswahl zu etwas, das du in einen Thread einfügen kannst. Farbverlauf wählen, Theme wählen, kopieren. Es gibt fast nichts zu lernen und fast nichts zu entscheiden, und genau darum geht es.",
            "Frame verlangt mehr von dir. Es gibt Panels, Presets, Ebenen und Export-Einstellungen, weil es davon ausgeht, dass du das Ergebnis kontrollieren willst statt einen guten Standard hinzunehmen. Wenn dein ehrlicher Bedarf ein sauberes Code-Bild in zehn Sekunden ist, ist diese zusätzliche Oberfläche ein Preis und kein Vorteil.",
            "Sie zahlt sich dort aus, wo Ray.so gar nicht erst antritt: einen Screenshot in einen MacBook-Rahmen setzen, einen Pfeil auf genau die Stelle zeichnen, über die du sprichst, einen API-Key abdecken, oder Arbeit mit deinem Handle zeichnen, bevor sie rausgeht.",
          ],
        },
        {
          heading: "Der Raycast-Kontext",
          body: [
            "Ray.so gehört zu einer Reihe von Tools, die Raycast neben seinem Launcher pflegt, und das hilft ihm. Es ist kostenlos, schnell, aktuell gehalten, und wenn du ohnehin in Raycast lebst, ist der Weg dorthin ein Tastendruck.",
            "Frame ist ein Soloprojekt mit einmaliger Lizenz und ohne Launcher, an den es sich hängen könnte. Es verdient sich seinen Platz, indem es mehr abdeckt, nicht indem es Ray.sos konkrete Aufgabe besser erledigt.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Nimm Ray.so, wenn",
        competitorBody:
          "Tempo die ganze Anforderung ist. Du willst ein sauberes, gut aussehendes Code-Bild ohne Konfiguration, es kostet nichts, und du musst nie einen Screenshot in ein Gerät setzen.",
        frameHeading: "Nimm Frame, wenn",
        frameBody:
          "das Ergebnis konkret sein muss und nicht nur geschmackvoll: ein bestimmtes Gerät, eine Annotation auf eine Zeile, eine Abdeckung über einem Key, ein Wasserzeichen. Das ist Editor-Arbeit, und Ray.so ist kein Editor.",
      },
      faqHeading: "Fragen zu Ray.so und Frame",
      faq: [
        {
          q: "Schickt Ray.so meinen Code irgendwohin?",
          a: "Nicht, um das Bild zu erzeugen. Der Export läuft über html-to-image in deinem Browser, und der Quellcode liegt öffentlich auf GitHub, falls du das prüfen willst.",
        },
        {
          q: "Brauche ich Raycast, um Ray.so zu nutzen?",
          a: "Nein. Es läuft als ganz normale Website. Ein installiertes Raycast macht den Weg dorthin nur kürzer.",
        },
        {
          q: "Ist Frame langsamer in der Nutzung als Ray.so?",
          a: "Für einen einfachen Code-Ausschnitt ja. Frame öffnet einen Editor statt eines einzelnen Bildschirms. Dafür bekommst du Kontrolle über den Export und Dinge, die Ray.so gar nicht kennt.",
        },
        {
          q: "Kann Ray.so einen Screenshot annotieren oder rahmen?",
          a: "Nein. Es ist ein Generator für Code-Bilder. Screenshots, Geräterahmen und Annotationen liegen außerhalb seines Umfangs.",
        },
      ],
    },
    screely: {
      name: 'Screely',
      metaTitle: "Screely-Alternative: Portfolio Frame vs. Screely",
      metaDescription:
        "Auf der Suche nach einer Screely-Alternative? Portfolio Frame rahmt Screenshots und Code lokal in Chrome, ohne Uploads, mit einmaliger Lizenz für $19.",
      h1: "Screely-Alternative: Portfolio Frame vs. Screely",
      intro:
        "Screely ist ein gutes, kostenloses Tool, um Webseiten-Screenshots in Browser-Mockups zu verwandeln, und verarbeitet wie Portfolio Frame alles lokal. Wer eine Screely-Alternative sucht, braucht meist etwas, wofür es nicht gebaut wurde. Portfolio Frame ist eine Chrome-Erweiterung mit Code-Snippet-Editor, physischen Geräte-Mockups, Tweet-Karten und Wasserzeichen, und einer einmaligen Lizenz für $19 für die Pro-Funktionen.",
      why: {
        heading: "Warum Leute eine Screely-Alternative suchen",
        body: [
          "Screely deckt Aufnahme, Browser-Fensterrahmen und Markierungen mit Text, Pfeilen und Weichzeichner ab und kostet nichts, Preis und Privatsphäre sind also selten der Grund. Die Gründe liegen im Umfang. Es gibt keinen Code-Editor und kein Syntax-Highlighting, die Rahmen sind Fenster statt Geräte, und Wasserzeichen fehlen.",
          "Wenn du Code so oft veröffentlichst wie Screenshots, oder die Aufnahme in einem MacBook oder iPhone sitzen soll, fangen die meisten an zu vergleichen.",
        ],
      },
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
      sections: [
        {
          heading: "Screely ist umgezogen und jetzt auch eine Extension",
          body: [
            "Falls du ein altes Lesezeichen auf screely.com hast, benutze es nicht mehr. Diese Domain gehört nicht mehr zum Projekt und beherbergt heute eine völlig unbeteiligte Sportwetten-Seite. Screely liegt auf screely.app.",
            "Die größere Änderung ist, was daraus geworden ist. Screely ist inzwischen sowohl Web-App als auch Chrome-Extension, und die Extension nimmt auf, statt nur zu bearbeiten: sichtbarer Bereich, eigene Auswahl, ganze Seite oder ein einzelnes Element. Sie zeichnet außerdem den aktiven Tab bis zu drei Minuten als MP4 in 720p oder 1080p mit Ton auf. Der Store-Eintrag zeigt rund tausend Nutzer und eine 5,0-Bewertung, zuletzt aktualisiert im August.",
            "Damit ist es der direkteste Konkurrent, den Frame hat, und nach allen heute relevanten Maßstäben das etabliertere der beiden.",
          ],
        },
        {
          heading: "Zwei Tools mit derselben Architekturentscheidung",
          body: [
            "Screelys eigene Dokumentation sagt, Bilder würden vollständig im Browser per Canvas verarbeitet und niemals hochgeladen, übertragen oder gespeichert. Das ist dieselbe Haltung wie bei Frame, unabhängig voneinander eingenommen.",
            "Local-first ist zwischen diesen beiden also kein Unterscheidungsmerkmal. Beide komponieren auf Canvas, beide lassen deine Screenshots auf deinem Rechner, und keines verlangt ein Konto. Wenn Privatsphäre dein Grund zum Suchen ist, beantworten das beide.",
            "In einem Punkt geht Screely weiter: es ist vollständig kostenlos, ohne Registrierung, ohne Wasserzeichen und ohne Export-Limits. Frame hat eine kostenlose Stufe, aber Geräte-Mockups über die Basis hinaus, Wasserzeichen, das Redact-Werkzeug und der Batch-Export liegen hinter einer einmaligen Lizenz.",
          ],
        },
        {
          heading: "Wo sie sich wirklich unterscheiden",
          body: [
            "Code ist die klarste Linie. Screely hat keinen Snippet-Editor, kein Syntax-Highlighting und keine Sprach-Badges, weil es um Webseiten- und App-Screenshots herum gebaut wurde. Frames zweiter Editor existiert genau dafür, mit Prism-Themes, Zeilenhervorhebung und Fensterrahmen, die zum Lesen von Code gemacht sind.",
            "Rahmen unterscheiden sich in der Art, nicht im Umfang. Screely gibt dir macOS- und Windows-Fensterrahmen. Frame gibt dir physische Geräte-Mockups, ein MacBook, ein iPhone, eine Apple Watch, dazu Browser- und Terminal-Rahmen und 3D-Neigung auf allen davon.",
            "Frame macht außerdem Tweet-Karten und Wasserzeichen, beides bietet Screely nicht. Screely macht Bildschirmaufnahme und PDF-Export, beides bietet Frame nicht. Das sind echte Lücken auf beiden Seiten, keine Marketing-Asymmetrien.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Nimm Screely, wenn",
        competitorBody:
          "du Aufnahme und Bearbeitung an einem Ort willst, einen Tab als Video aufzeichnen musst, oder etwas Kostenloses ganz ohne Stufen bevorzugst. Es ist ausgereift, wird aktiv gepflegt und kostet nichts.",
        frameHeading: "Nimm Frame, wenn",
        frameBody:
          "du Code genauso teilst wie Screenshots, oder physische Geräte-Mockups, Tweet-Karten oder Wasserzeichen brauchst. Das sind die Dinge, die Screely sich gar nicht vornimmt.",
      },
      faqHeading: "Fragen zu Screely und Frame",
      faq: [
        {
          q: "Ist screely.com noch Screely?",
          a: "Nein. Das Projekt liegt jetzt auf screely.app. Die alte .com-Domain hat den Besitzer gewechselt und beherbergt etwas Unbeteiligtes, aktualisiere also deine Lesezeichen.",
        },
        {
          q: "Ist Screely wirklich kostenlos?",
          a: "Ja. Ihre Seite nennt keine Registrierung, kein Wasserzeichen und keine Export-Limits. Es ist die günstigere Option, und das ist ein fairer Punkt gegen Frames Bezahlstufe.",
        },
        {
          q: "Kann Screely Code-Screenshots machen?",
          a: "Nein. Es hat weder Syntax-Highlighting noch einen Code-Editor. Wenn Code-Bilder regelmäßig Teil dessen sind, was du veröffentlichst, ist das der Hauptgrund, sich Frame anzusehen.",
        },
        {
          q: "Kann Frame meinen Bildschirm aufzeichnen?",
          a: "Nein. Frame bearbeitet Standbilder. Screely zeichnet den aktiven Tab als MP4 auf, eine echte Fähigkeit, die Frame nicht hat.",
        },
        {
          q: "Halten beide meine Screenshots privat?",
          a: "Ja. Beide verarbeiten Bilder lokal im Browser per Canvas und keines lädt sie hoch. Privatsphäre ist nicht die Achse, auf der sich diese beiden unterscheiden.",
        },
      ],
    },
    'shots-so': {
      name: 'Shots.so',
      metaTitle: "Shots.so-Alternative: Portfolio Frame vs. Shots.so",
      metaDescription:
        "Auf der Suche nach einer Shots.so-Alternative? Portfolio Frame vereint Geräte-Mockups, Code-Rahmen und Markierungen in Chrome, einmalig $19 statt Abo.",
      h1: "Shots.so-Alternative: Portfolio Frame vs. Shots.so",
      intro:
        "Shots.so ist eine ausgereifte Web-App mit großer Gerätebibliothek und animierten Mockups, und für alles mit Bewegung ist es das stärkere Tool. Wer eine Shots.so-Alternative sucht, will meist Code-Screenshots, Markierungen oder einfach nicht mehr monatlich zahlen. Portfolio Frame ist eine Chrome-Erweiterung, die Geräte-Mockups, Code-Rahmen und Markierungen in einem Editor vereint, mit einmaliger Lizenz für $19 statt Abo.",
      why: {
        heading: "Warum Leute eine Shots.so-Alternative suchen",
        body: [
          "Shots.so ist ein Tool für Mockups und Hintergründe, und ein sehr gutes. Was es nicht macht, ist Code: kein Snippet-Editor, kein Syntax-Highlighting. Auch Pfeile, nummerierte Schritte oder Schwärzen fehlen, alles, worauf gezeigt oder was verdeckt werden muss, passiert also woanders.",
          "Der andere Grund ist die Rechnung. Shots.so läuft als Abo, und für etwas, das du ein paar Mal im Monat nutzt, ist eine einmalige Zahlung oft sinnvoller.",
        ],
      },
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
      sections: [
        {
          heading: "Eine ausgereifte Web-App mit Abo dahinter",
          body: [
            "Shots.so hat Jahre an Entwicklung hinter sich, und die Gerätebibliothek zeigt das: iPhone, Android, iPad, iMac, Apple Watch und Browser-Rahmen, mit Hintergründen von Farbverläufen und Glaseffekten über Unsplash-Fotos bis zu KI-generierten Füllungen nach den Farben deines Bildes.",
            "Es läuft als gehostete Web-App statt als Extension und wird als Abo abgerechnet. Es gibt eine kostenlose Stufe, die Bezahlpläne liegen bei etwa acht und zwölf Dollar im Monat und schalten höher aufgelöste Exporte, WebP, transparentes Video und die animierten Mockups frei, für die es bekannt ist.",
            "Frame ist eine Chrome-Extension mit kostenloser Stufe und einer einzigen Zahlung. Über ein paar Jahre summiert sich dieser Unterschied, aber du kaufst auch weniger: Shots.sos Animationsarbeit hat in Frame kein Gegenstück.",
          ],
        },
        {
          heading: "Animation ist die echte Lücke",
          body: [
            "Was Shots.so kann und Frame schlicht nicht, ist Bewegung. Animierte Mockups, Video-Zoom-Effekte und Bewegungs-Presets sind sein Alleinstellungsmerkmal, und wenn du Launch-Videos oder animierte Social-Assets produzierst, ist es die naheliegende Wahl.",
            "Frame exportiert Standbilder, mit einer einzigen engen Ausnahme: eine Tweet-Karte mit angehängtem Video lässt sich als MP4 exportieren. Das ist keine allgemeine Animationsfunktion, und es wäre irreführend, sie als solche darzustellen.",
          ],
        },
        {
          heading: "Was Frame mitbringt und Shots.so nicht",
          body: [
            "Code, in erster Linie. Shots.so hat weder Snippet-Editor noch Syntax-Highlighting. Frames zweiter Editor ist genau dafür gebaut.",
            "Annotation ist die zweite Lücke. Shots.so ist ein Mockup- und Hintergrund-Tool, kein Markup-Tool, also gibt es keine Pfeile, keine nummerierten Schritte, kein Abdecken. Wenn deine Screenshots auf etwas zeigen sollen oder ein API-Key vor der Veröffentlichung verdeckt werden muss, passiert diese Arbeit woanders.",
            "Und Frame läuft dort, wo deine Screenshots ohnehin schon sind. Eine Extension in dem Browser, in dem du arbeitest, spart den Hin- und Rückweg aus Hochladen und Herunterladen, den eine gehostete Web-App verlangt.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Nimm Shots.so, wenn",
        competitorBody:
          "du animierte oder Video-Mockups brauchst, oder die größte verfügbare Gerätebibliothek willst. Seine Reife ist real, und ein Abo ist vertretbar, wenn du solche Assets regelmäßig produzierst.",
        frameHeading: "Nimm Frame, wenn",
        frameBody:
          "du Code-Screenshots und Produktaufnahmen aus einem Tool willst, Annotation und Abdecken brauchst, oder lieber einmal zahlst als monatlich für etwas, das du ein paar Mal im Monat benutzt.",
      },
      faqHeading: "Fragen zu Shots.so und Frame",
      faq: [
        {
          q: "Ist Shots.so kostenlos?",
          a: "Es gibt eine kostenlose Stufe, die Bezahlpläne liegen bei etwa acht bis zwölf Dollar im Monat für höher aufgelöste Exporte, mehr Formate und die Animationsfunktionen. Aktuelle Zahlen stehen auf ihrer Preisseite.",
        },
        {
          q: "Kann Frame Animationen exportieren?",
          a: "Allgemein nicht. Eine Tweet-Karte mit angehängtem Video wird als MP4 exportiert, aber es gibt keine animierten Mockups und keine Bewegungs-Presets. Dafür ist Shots.so das richtige Tool.",
        },
        {
          q: "Kommt Shots.so mit Code-Snippets zurecht?",
          a: "Nein. Es ist für Geräte-Mockups und Hintergründe gebaut. Code-Bilder liegen außerhalb seines Umfangs.",
        },
        {
          q: "Was ist am Ende günstiger?",
          a: "Frame, wenn du es länger als ein paar Monate nutzt, weil Pro eine einmalige Zahlung ist. Shots.so rechnet monatlich ab. Ob das zählt, hängt davon ab, ob du die Animationsfunktionen brauchst, die Frame nicht hat.",
        },
      ],
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
