import type { Dictionary } from '../types'

export const fr = {
  meta: {
    home: {
      title: 'Éditeur de mockups captures et code | Portfolio Frame',
      description:
        'Portfolio Frame est une extension Chrome qui transforme captures d’écran et code en mockups : cadres d’appareils, annotations, filigranes. Tout reste local.',
    },
    privacy: {
      title: 'Politique de confidentialité — Portfolio Frame',
      description:
        'Comment Portfolio Frame gère tes données : tout est traité localement dans ton navigateur, rien n’est uploadé, et l’activation de licence ne communique qu’avec Dodo Payments.',
    },
  },

  nav: {
    links: {
      editor: 'Éditeur',
      code: 'Code',
      'twitter-snap': 'Twitter Snap',
      mockups: 'Maquettes',
      annotate: 'Annoter',
      brand: 'Marque',
      pricing: 'Tarifs',
      faq: 'FAQ',
    },
    cta: 'Ajouter à Chrome',
    ctaFirefox: 'Ajouter à Firefox',
  },

  hero: {
    eyebrow: 'Extension Chrome pour mockups de captures d’écran et code',
    headlineLine1: 'Développe tes captures d’écran',
    headlineLine2: 'comme des tirages photo.',
    subhead:
      "Un outil pour embellir tes captures d’écran et un générateur de maquettes d’appareils pour Chrome. Transforme captures d’écran, extraits de code et tweets en images soignées sans rien uploader.",
    sub: 'Portfolio Frame transforme une capture d’écran brute ou un bloc de code en quelque chose qui vaut le coup d’être partagé : encadré, éclairé, annoté, et à la bonne taille pour sa destination. Pas de compte, pas d’upload, pas de serveur entre les deux.',
    primaryCta: 'Ajouter à Chrome, c’est gratuit',
    webCta: "Essaie-le sur le web",
    firefoxCta: 'Obtenir pour Firefox',
    secondaryCta: 'Voir avec du code ↓',
    trust: {
      setupLabel: 'Installation',
      setupValue: 'Zéro. Ouvre l’extension et c’est parti.',
      storageLabel: 'Stockage',
      storageValue: '100 % sur ton appareil, stockage local & IndexedDB.',
      serversLabel: 'Serveurs',
      serversValue: 'Aucun. Ton travail ne quitte jamais ton navigateur.',
    },
    stageAriaLabel:
      'Une carte d’extrait de code et une carte de capture d’écran de navigateur, disposées comme des tirages de contrôle sur une table lumineuse de chambre noire',
    shippedBadge: 'Livré en v2.4',
    sheetCaption: 'Planche 03 : fond / capture / habillage',
  },

  featureRail: {
    sections: {
      editor: {
        tag: 'Double éditeur',
        title: 'Un seul canevas, deux points d’entrée',
        description:
          'Dépose une capture d’écran ou colle un bloc de code. Le même canevas, les mêmes réglages d’export et les mêmes formats prédéfinis s’appliquent aux deux.',
        features: [
          {
            title: 'Deux modes d’édition',
            desc: 'Bascule entre l’éditeur de maquettes d’image et l’éditeur d’extraits de code sans perdre le fil.',
          },
          {
            title: 'Exports haute qualité',
            desc: 'Choisis toi-même la résolution d’export et la compression JPEG, pour que rien ne devienne flou à la sortie.',
          },
          {
            title: 'Formats prêts pour les réseaux',
            desc: 'Auto, personnalisé, carré, portrait, story, paysage et présentation, en un clic chacun.',
          },
        ],
      },
      code: {
        tag: 'Captures de code',
        title: 'Le code, imprimé comme il faut',
        description:
          'Coloration syntaxique et habillage de fenêtre pensés pour la lecture, pas juste pour la déco.',
        features: [
          {
            title: 'Thèmes de syntaxe premium',
            desc: "Dracula, Synthwave '84, Monokai, GitHub Dark, et un thème Minimal Light, construits sur Prism.js.",
          },
          {
            title: 'Badges multi-langages',
            desc: 'Des badges de langage automatiques et soignés pour JavaScript, TypeScript, Python, CSS et Rust.',
          },
          {
            title: 'Surlignage de lignes & gouttières',
            desc: 'Mets en avant les lignes qui comptent vraiment, avec des numéros de ligne activables.',
          },
          {
            title: 'Styles de fenêtre',
            desc: 'Habille tes extraits avec des cadres macOS, Windows, ou minimalistes.',
          },
          {
            title: 'Matériaux glassmorphism',
            desc: 'Des panneaux en verre dépoli avec bordures, profondeur d’ombre et réfraction réglables.',
          },
        ],
      },
      'twitter-snap': {
        tag: 'Cartes de tweets',
        title: 'Des tweets, sans la capture d’écran',
        description:
          'Colle un tweet, récupère une carte propre et stylée. Pas d’habillage de navigateur mal cadré, pas de bannière de cookies dans le coin.',
        features: [
          {
            title: 'Une vraie mise en page de tweet',
            desc: 'Avatar, nom, badge vérifié, pseudo et horodatage, disposés exactement comme sur X.',
          },
          {
            title: 'Thèmes clair & sombre',
            desc: 'Adapte la carte à l’endroit où tu la déposes : un article de blog, une présentation, ou un thread en mode sombre.',
          },
          {
            title: 'Statistiques modifiables',
            desc: 'Réponses, reposts et likes sont à régler comme tu veux, pratique pour des maquettes avant même qu’un post soit publié.',
          },
        ],
      },
      mockups: {
        tag: 'Mockups appareils et navigateurs',
        title: 'Plante le décor',
        description:
          'De vrais cadres d’appareils et de navigateurs, pas de simples rectangles plats, parce que le contexte, c’est la moitié de l’histoire.',
        features: [
          {
            title: 'Bibliothèque d’appareils',
            desc: 'Pro Display XDR, Dell UltraSharp, MacBook, iPhone 14 Pro, Apple Watch, et bien d’autres.',
          },
          {
            title: 'Cadres de navigateur',
            desc: 'Habillages clairs et sombres pour Chrome sur Windows et Mac, et pour Safari.',
          },
          {
            title: 'Mode terminal',
            desc: 'Un cadre de terminal personnalisable, avec un chemin de fichier configurable dans la barre de titre.',
          },
          {
            title: 'Inclinaison 3D',
            desc: 'Inclinaison réglable sur les axes X, Y et Z, plus le zoom, pour de la profondeur sans artifice.',
          },
        ],
      },
      annotate: {
        tag: 'Outils d’annotation',
        title: 'Montre ce qui compte',
        description:
          'Texte, formes et étapes superposés directement sur le canevas, sans avoir besoin d’un second outil.',
        features: [
          {
            title: 'Outils d’annotation',
            desc: 'Texte, cadres, flèches, étapes numérotées, surlignages, et un outil de masquage pour tout ce qui est sensible.',
          },
          {
            title: 'Stickers',
            desc: 'Dépose et fais pivoter des stickers personnalisés n’importe où sur le canevas.',
          },
          {
            title: 'Badges de contexte',
            desc: 'Des badges épurés sur n’importe quel bord, avec une icône personnalisée, un emoji ou un point : « Nouvelle fonctionnalité livrée » et autres.',
          },
        ],
      },
      brand: {
        tag: 'Filigranes',
        title: 'Signe ton travail',
        description: 'Marque-le comme étant à toi, ou rends-le difficile à réutiliser sans créditer la source.',
        features: [
          {
            title: 'Filigranes polyvalents',
            desc: 'Du texte, un pseudo pour X, GitHub, LinkedIn ou Instagram, un logo personnalisé, ou un QR code scannable.',
          },
          {
            title: 'Filigranes en mosaïque',
            desc: 'Des motifs répétés et inclinés, en plein, en contour, ou en superposition, pour protéger le travail qui le mérite.',
          },
        ],
      },
    },
  },

  showcases: {
    common: {
      tiltLabels: { flat: 'Plat', angled: 'Incliné', deep: 'Profond' },
      ariaTilt: 'Inclinaison',
    },
    device: {
      frameTypeLabels: { device: 'Appareil', browser: 'Navigateur', terminal: 'Terminal' },
      deviceLabels: { macbook: 'MacBook', iphone: 'iPhone', watch: 'Montre' },
      deviceFullNames: {
        macbook: 'MacBook Pro 16"',
        iphone: 'iPhone 14 Pro',
        watch: 'Apple Watch',
      },
      ariaFrameType: 'Type de cadre',
      ariaDevice: 'Appareil',
      deviceCaptionSuffix: ', un des appareils de la bibliothèque complète.',
      browserCaption: 'Habillages clairs et sombres pour Chrome et Safari.',
      terminalCaption: 'Un cadre de terminal personnalisable, avec un chemin de fichier configurable.',
    },
    codeGlass: {
      ariaGlass: 'Matériau verre',
      glassOff: 'Verre désactivé',
      glassOn: 'Verre activé',
      returnValue: 'livré.',
      caption:
        'Des panneaux en verre dépoli avec bordures réglables, plus une inclinaison X/Y/Z ajustable pour de la profondeur sans artifice.',
    },
    tweetSnap: {
      ariaLogoStyle: 'Style de logo',
      classic: 'Classique',
      current: 'Actuel',
      ariaTheme: 'Thème',
      light: 'Clair',
      dark: 'Sombre',
      tweetBody:
        'shippé Twitter Snap aujourd’hui : transforme n’importe quel tweet en une carte propre et stylée. pas de capture d’écran, pas de recadrage, pas d’interface moche.',
      repliesLabel: 'Réponses',
      repostsLabel: 'Republications',
      likesLabel: 'J’aime',
      caption: 'Twitter Snap : l’ancien oiseau ou le logo actuel, clair ou sombre, chaque statistique modifiable',
    },
    annotate: {
      ariaTools: 'Outils d’annotation',
      tools: { box: 'Cadre', arrow: 'Flèche', redact: 'Masquer', sticker: 'Sticker' },
      dashboardLabel: 'Tableau de bord',
      deployLabel: 'Déployer',
      caption:
        'Cadre, flèche, masquage et stickers, superposés directement sur le canevas ; active-en plusieurs à la fois pour les voir s’empiler.',
    },
    brand: {
      ariaWatermarkType: 'Type de filigrane',
      types: { text: 'Texte', logo: 'Logo', qr: 'QR' },
      ariaTiled: 'Protection en mosaïque',
      tiledOff: 'Mosaïque désactivée',
      tiledOn: 'Mosaïque activée',
      caption:
        'Filigrane sous forme de pseudo, de logo, ou de QR code scannable — plus une superposition en mosaïque inclinée pour le travail que tu veux protéger.',
    },
  },

  pricing: {
    tag: 'Tarifs',
    title: 'Paie une fois. Garde la chambre noire.',
    description:
      'Frame est gratuit à installer et à utiliser. Pro débloque tous les matériaux, en un seul achat, vérifié par une clé de licence, sans prélèvement récurrent.',
    free: {
      title: 'Gratuit',
      price: '$0',
      caption: 'Tout ce qu’il faut pour livrer un visuel propre',
      features: [
        'Éditeur double : images et code',
        'Thèmes de syntaxe essentiels et styles de fenêtre',
        '2 cadres d’appareil & de navigateur par catégorie',
        'Bibliothèque complète de scènes d’arrière-plan, inclinaison 3D & perspective',
        'Stickers, plus annotations texte, cadre et flèche',
        'Stockage local, sans compte',
      ],
      cta: 'Ajouter à Chrome',
    },
    pro: {
      badge: 'Pro',
      title: 'Licence Pro',
      price: '$19',
      billing: 'Paiement unique',
      caption: 'Tout ce qu’offre la version gratuite, plus le studio complet',
      features: [
        'Le reste de la bibliothèque de maquettes d’appareils et de navigateurs',
        'Matériaux glassmorphism',
        'Badges et outil de masquage',
        'Enregistre des scènes personnalisées, importe tes propres polices',
        'Filigranes personnalisés : logo, pseudo et QR code',
        'Protection par filigrane en mosaïque',
        'Export groupé de tous les formats, en ZIP',
        'Export SVG',
      ],
      licensePlaceholder: 'XXXX-XXXX-XXXX-XXXX',
      licenseVerified: 'Vérifiée via Dodo Payments',
      cta: 'Obtenir une licence Pro',
    },
  },

  reviews: {
    tag: "Avis",
    title: "Des avis, sans retouche.",
    description:
      "Les avis écrits sur le Chrome Web Store, recopiés mot pour mot.",
    ratingSummary: (average: string, count: number) =>
      `${average} sur 5 d’après ${count} notes sur le Chrome Web Store`,
    starsLabel: (rating: number) => `${rating} étoiles sur 5`,
    storeLink: "Les lire sur le Chrome Web Store ↗",
  },

  faq: {
    tag: 'FAQ',
    title: 'Des réponses à tes questions',
    items: [
      {
        question: 'Mon code ou mes captures d’écran sont-ils un jour uploadés quelque part ?',
        answer:
          'Non. Portfolio Frame tourne entièrement dans ton navigateur. Les extraits, l’historique du canevas et les réglages sont enregistrés localement via le stockage local et IndexedDB de ton navigateur. Rien n’est envoyé à un serveur, et il n’y a aucun compte à créer.',
      },
      {
        question: 'Quelle est la différence entre Gratuit et Pro ?',
        answer:
          'La version gratuite couvre l’éditeur de base : modes image et code, quelques thèmes de syntaxe, 2 cadres d’appareil/navigateur par catégorie, la bibliothèque complète de scènes d’arrière-plan avec inclinaison 3D, les stickers et les annotations basiques. Pro ajoute le reste de la bibliothèque d’appareils, les matériaux glassmorphism, les badges et l’outil de masquage, l’enregistrement de scènes et polices personnalisées, le filigrane personnalisé, l’export groupé de tous les formats en ZIP, et l’export SVG.',
      },
      {
        question: 'Comment je récupère ma clé de licence Pro après le paiement ?',
        answer:
          'Le paiement est géré par Dodo Payments. Dès que ton paiement est validé, ta clé de licence est générée automatiquement et t’est envoyée par email. Colle-la dans l’écran de licence de l’extension pour débloquer Pro.',
      },
      {
        question: 'Puis-je utiliser ma licence sur plusieurs appareils ?',
        answer:
          'Oui. Ta licence n’est pas limitée à un seul appareil ou profil de navigateur, tu peux donc l’activer partout où tu utilises Portfolio Frame.',
      },
      {
        question: 'Quelle est la politique de remboursement ?',
        answer:
          'Si tu as une clé de licence Pro valide, tu peux te faire rembourser intégralement dans les 7 jours suivant l’achat, sans justification. Écris-moi avec l’adresse email utilisée pour l’achat, et je m’en occupe.',
      },
      {
        question: 'Les futures mises à jour seront-elles payantes ?',
        answer:
          'Non. Ton achat unique inclut les mises à jour et améliorations gratuites de toutes les fonctionnalités Pro actuelles.',
      },
      {
        question: 'Les paiements depuis l’Inde sont-ils pris en charge, UPI compris ?',
        answer:
          'Oui. Le paiement accepte UPI en plus des cartes et d’autres moyens de paiement régionaux, et les prix s’ajustent automatiquement selon la parité de pouvoir d’achat, pour que tu paies un prix local juste.',
      },
    ],
  },

  footer: {
    tagline: 'Une chambre noire pour tes captures d’écran et ton code. Tout reste sur ton appareil.',
    productLabel: 'Produit',
    getItLabel: 'Obtenir',
    proLicenseLink: 'Licence Pro',
    noAccountLine: 'Pas de compte. Pas d’upload. Pas de serveur.',
    privacyLink: 'Politique de confidentialité',
    compareLabel: "Alternatives",
    compareLinkTemplate: (name: string) => `Alternative à ${name}`,
  },

  compare: {
    eyebrow: 'Comparaison',
    tableHeaders: { feature: 'Fonctionnalité', frame: 'Frame' },
    honestLabel: 'En toute honnêteté',
    ctaText: 'Essaie Frame — c’est gratuit',
    otherLabel: 'Autres comparaisons',
    otherLinkTemplate: (name: string) => `Frame face à ${name}`,
  },

  comparisons: {
    carbon: {
      name: 'Carbon',
      metaTitle: "Alternative à Carbon : Portfolio Frame face à Carbon.now.sh",
      metaDescription:
        "Une alternative à Carbon.now.sh ? Portfolio Frame génère tes captures de code dans le navigateur, sans serveur, avec maquettes et annotations en plus.",
      h1: "Alternative à Carbon : Portfolio Frame face à Carbon.now.sh",
      intro:
        "Si tu cherches une alternative à Carbon, autant être clair sur ce que Carbon fait bien : il est gratuit, open source, et offre la plus large couverture de thèmes et de langages de tous les outils de capture de code. Portfolio Frame est une extension Chrome qui fait aussi le rendu des captures de code dans ton navigateur, puis ajoute ce que Carbon ne tente pas : maquettes d’appareils, annotations, filigranes et un éditeur de captures à côté de celui pour le code.",
      why: {
        heading: "Pourquoi les gens cherchent une alternative à Carbon",
        body: [
          "Carbon fait une seule chose, du code en entrée et une image en sortie, et il la fait bien. Les raisons de regarder ailleurs tiennent en général à la portée, pas à la qualité. Il n’a pas de mode image, donc une capture de la fonctionnalité demande un deuxième outil. Pas de cadres d’appareils, pas de flèches ni d’étapes numérotées, et aucun moyen de masquer une clé ou d’apposer un filigrane avant publication.",
          "Si tu ne partages que du code, rien de tout cela ne compte et Carbon est le meilleur choix. Si tes notes de version mélangent code et visuels produit, c’est là que le deuxième outil commence à te coûter.",
        ],
      },
      rows: [
        {
          feature: 'Comment l’image est rendue',
          frame: 'Composition sur canvas, dans ton navigateur',
          competitor: 'Rastérisation du DOM via dom-to-image, dans ton navigateur aussi',
        },
        {
          feature: 'Où vit ton code',
          frame: 'Le stockage de l’extension, sur ta machine',
          competitor: 'Une app web hébergée. L’export reste local ; enregistrer ou tweeter un snippet l’envoie',
        },
        {
          feature: 'Thèmes de syntaxe',
          frame: "5 thèmes sélectionnés (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
          competitor: '30+ thèmes, 100+ langages',
        },
        {
          feature: 'Maquettes d’appareils & de navigateurs',
          frame: 'Cadres MacBook, iPhone, Apple Watch, navigateur & terminal',
          competitor: 'Aucune',
        },
        {
          feature: 'Annotations',
          frame: 'Texte, cadres, flèches, étapes numérotées, outil de masquage',
          competitor: 'Aucune',
        },
        {
          feature: 'Filigrane',
          frame: 'Texte, pseudo, logo, QR code, motifs en mosaïque',
          competitor: 'Aucun',
        },
        {
          feature: 'Édition d’image/capture d’écran',
          frame: 'Intégrée, aux côtés de l’éditeur de code',
          competitor: 'Code uniquement — pas de mode image',
        },
        {
          feature: 'Maquette de carte tweet',
          frame: 'Intégrée — avatar, badge, pseudo, statistiques modifiables, thèmes clair & sombre',
          competitor: 'Fonctionnalité non documentée',
        },
        {
          feature: 'Tarifs',
          frame: 'Gratuit, Pro en achat unique',
          competitor: 'Gratuit',
        },
      ],
      honestNote:
        'Si tu as juste besoin d’une capture de code rapide et que tu veux le plus grand choix de thèmes, Carbon est difficile à battre, et ça ne coûte rien. Les deux outils exportent dans ton navigateur : il n’y a donc pas de compromis sur la confidentialité ici. La vraie différence tient à la méthode et à la portée. Carbon rastérise le DOM, ce qui est rapide à construire et montre ses limites sur les ombres et les polices personnalisées, tandis que Frame compose sur canvas et ajoute maquettes d’appareils, annotations et filigranes. Prends Carbon pour un extrait de code, Frame pour un visuel produit complet.',
      sections: [
        {
          heading: "Les deux effectuent le rendu dans ton navigateur",
          body: [
            "Cette page affirmait auparavant que Carbon envoyait ton code à un serveur. C’était faux, et il vaut mieux le corriger franchement. L’éditeur de Carbon passe le nœud du DOM directement à dom-to-image et récupère un PNG ou un SVG sans que le code quitte la page. Il existe bien un moteur de rendu côté serveur dans le dépôt, mais il ne répond qu’aux robots de Twitter et de Slack pour que les aperçus de liens aient quelque chose à afficher, et il renvoie un 401 à tous les autres.",
            "Ce qui diffère réellement, c’est la méthode. dom-to-image parcourt le DOM, intègre les styles calculés et rastérise le résultat via un foreignObject SVG. Frame compose sur canvas : chaque couche est dessinée dans l’ordre sur une surface bitmap qu’il contrôle lui-même.",
            "Cela paraît théorique jusqu’au jour où tu exportes quelque chose avec une police personnalisée et une ombre douce. La rastérisation par foreignObject dépend de l’accord du navigateur sur la façon dont ces éléments se peignent au moment de l’export, et les navigateurs ne sont pas toujours d’accord. La composition sur canvas en décide elle-même. Ce sont deux semaines de lutte avec la première approche qui ont mené à la seconde.",
          ],
        },
        {
          heading: "Carbon est un outil de code. Frame fait le code et les captures.",
          body: [
            "Carbon fait une seule chose, et il la fait depuis 2018. Tu colles du code, tu choisis un thème, tu obtiens une image. Pas d’import d’image, pas de cadre d’appareil, pas de calque d’annotation, parce que rien de tout cela n’était son objectif.",
            "Les deux éditeurs de Frame partagent un même canvas, un même jeu de préréglages d’export et un même système de dimensions. Une note de version qui demande une maquette de navigateur de la fonctionnalité et un extrait coloré de l’appel d’API, c’est un seul outil et une seule file d’export au lieu de deux.",
          ],
        },
        {
          heading: "Là où Carbon est nettement devant",
          body: [
            "Sur les thèmes et les langages, ce n’est pas serré. Carbon propose plus de 30 thèmes et plus de 100 langages, contre cinq thèmes sélectionnés et cinq langages badgés pour Frame. Si ton extrait est en Elixir ou en Haskell, Carbon te couvre et Frame non.",
            "Il est aussi open source sous licence MIT avec plus de 36 000 étoiles, donc tu peux lire exactement son fonctionnement, l’héberger toi-même ou le forker. Frame n’est pas open source. Et Carbon est gratuit sans aucun palier, là où Frame garde les maquettes d’appareils, les filigranes et l’export par lots derrière un achat unique.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Choisis Carbon si",
        competitorBody:
          "Tu ne partages que du code, tu veux la plus large couverture possible de thèmes et de langages, ou tu tiens à utiliser un projet open source que tu pourrais héberger toi-même. C’est gratuit, c’est mature, et pour une capture de code pure c’est excellent.",
        frameHeading: "Choisis Frame si",
        frameBody:
          "Tu partages des captures à peu près aussi souvent que du code, et tu en as assez d’un outil pour les extraits et d’un autre pour les visuels produit. Les cadres d’appareils, les annotations et les filigranes sont précisément ce que Carbon n’a jamais cherché à te donner.",
      },
      faqHeading: "Questions sur Carbon et Frame",
      faq: [
        {
          q: "Est-ce que Carbon envoie mon code sur un serveur ?",
          a: "Pas à l’export : cela se passe dans ton navigateur. En revanche oui, si tu enregistres un extrait sur ton compte Carbon ou si tu utilises le bouton tweet intégré, deux actions délibérées qui ne font pas partie de l’export.",
        },
        {
          q: "Frame est-il open source comme Carbon ?",
          a: "Non. Carbon est sous licence MIT et tu peux le lire ou l’héberger toi-même. Frame est à code fermé, avec une offre gratuite et une licence à paiement unique pour le reste.",
        },
        {
          q: "Frame peut-il rivaliser avec les thèmes de Carbon ?",
          a: "Non, et ce n’est pas son objectif. Frame propose cinq thèmes sélectionnés basés sur Prism contre plus de trente chez Carbon. Si c’est le choix de thèmes que tu optimises, Carbon gagne cette comparaison sans discussion.",
        },
        {
          q: "Carbon peut-il placer une capture dans un cadre d’appareil ?",
          a: "Non. Carbon ne traite que du code. C’est la raison principale pour laquelle ces deux outils finissent installés côte à côte plutôt que l’un remplaçant l’autre.",
        },
      ],
    },
    'ray-so': {
      name: 'Ray.so',
      metaTitle: "Alternative à Ray.so : Portfolio Frame face à Ray.so",
      metaDescription:
        "Une alternative à Ray.so ? Portfolio Frame fait captures de code, maquettes d’appareils, annotations et filigranes, hors ligne, pour $19 en achat unique.",
      h1: "Alternative à Ray.so : Portfolio Frame face à Ray.so",
      intro:
        "Ray.so est le moyen le plus rapide de transformer une sélection de code en image propre sur fond dégradé, et c’est gratuit. Si tu cherches une alternative à Ray.so, c’est en général parce qu’il te faut plus que ce que cet écran unique propose. Portfolio Frame est une extension Chrome qui fait aussi des captures de code, et ajoute maquettes d’appareils, annotations, filigranes et un éditeur de captures, le tout rendu localement dans ton navigateur.",
      why: {
        heading: "Pourquoi les gens cherchent une alternative à Ray.so",
        body: [
          "Ray.so est minimaliste par choix : tu choisis un dégradé, un thème, tu copies. C’est tout son intérêt, et c’est aussi là que l’on bute sur ses limites. Impossible de placer une capture dans un appareil, de tracer une flèche vers la ligne qui compte ou de masquer une clé d’API avant de publier.",
          "Quand le rendu doit être précis et pas seulement soigné, il faut un éditeur, et c’est ce manque que l’on cherche à combler.",
        ],
      },
      rows: [
        {
          feature: 'Comment l’image est rendue',
          frame: 'Composition sur canvas, dans ton navigateur',
          competitor: 'Rastérisation du DOM via html-to-image, dans ton navigateur aussi',
        },
        {
          feature: 'Où vit ton code',
          frame: 'Le stockage de l’extension, sur ta machine',
          competitor: 'Une app web hébergée dans laquelle tu colles ton code',
        },
        {
          feature: 'Thèmes de syntaxe',
          frame: "5 thèmes sélectionnés (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
          competitor: 'Une petite sélection de préréglages en dégradé soignés',
        },
        {
          feature: 'Maquettes d’appareils & de navigateurs',
          frame: 'Cadres MacBook, iPhone, Apple Watch, navigateur & terminal',
          competitor: 'Aucune',
        },
        {
          feature: 'Annotations',
          frame: 'Texte, cadres, flèches, étapes numérotées, outil de masquage',
          competitor: 'Aucune',
        },
        {
          feature: 'Filigrane',
          frame: 'Texte, pseudo, logo, QR code, motifs en mosaïque',
          competitor: 'Aucun',
        },
        {
          feature: 'Édition d’image/capture d’écran',
          frame: 'Intégrée, aux côtés de l’éditeur de code',
          competitor: 'Code uniquement — pas de mode image',
        },
        {
          feature: 'Maquette de carte tweet',
          frame: 'Intégrée — avatar, badge, pseudo, statistiques modifiables, thèmes clair & sombre',
          competitor: 'Fonctionnalité non documentée',
        },
        {
          feature: 'Tarifs',
          frame: 'Gratuit, Pro en achat unique',
          competitor: 'Gratuit',
        },
      ],
      honestNote:
        'Ray.so est vraiment le chemin le plus rapide entre une sélection de code et une image propre, et c’est gratuit. Il rend lui aussi dans ton navigateur : aucun des deux n’envoie ton code ailleurs pour en faire une image. Frame te demande un peu plus d’efforts au départ, puisque c’est un éditeur complet et non un générateur en un clic, et te rend en échange des maquettes d’appareils, des annotations, des filigranes et un éditeur d’images que Ray.so ne cherche pas à couvrir.',
      sections: [
        {
          heading: "Ray.so aussi fait son rendu en local",
          body: [
            "Comme Carbon, Ray.so exporte dans le navigateur. Son bouton d’export appelle html-to-image sur le nœud rendu et te renvoie un PNG ou un SVG. Raycast publie l’ensemble sur GitHub sous licence MIT, donc c’est vérifiable plutôt qu’une affirmation qu’il faudrait croire sur parole.",
            "La différence entre les deux ne tient donc pas à la destination de ton code. Elle tient au fait que Ray.so rastérise le DOM là où Frame compose sur canvas, et que Ray.so est délibérément un outil à un seul écran là où Frame est un éditeur.",
          ],
        },
        {
          heading: "Générateur en un clic contre éditeur",
          body: [
            "Ray.so est le chemin le plus rapide de toute la catégorie entre une sélection de code et quelque chose que tu peux coller dans un fil. Tu choisis un dégradé, un thème, tu copies. Il n’y a presque rien à apprendre et presque rien à décider, et c’est exactement l’intérêt.",
            "Frame te demande davantage. Il y a des panneaux, des préréglages, des calques et des réglages d’export, parce qu’il part du principe que tu veux maîtriser le rendu plutôt qu’accepter un bon réglage par défaut. Si ton besoin réel est une image de code propre en dix secondes, toute cette surface supplémentaire est un coût, pas un avantage.",
            "Là où elle rapporte, c’est sur tout ce que Ray.so ne tente pas : mettre une capture dans un cadre de MacBook, tracer une flèche vers ce dont tu parles, masquer une clé d’API, ou apposer ton identité sur un travail avant de le publier.",
          ],
        },
        {
          heading: "Le contexte Raycast",
          body: [
            "Ray.so fait partie d’un ensemble d’outils que Raycast maintient à côté de son lanceur, et il en profite. C’est gratuit, c’est rapide, c’est tenu à jour, et si tu vis déjà dans Raycast le flux est à une frappe de distance.",
            "Frame est un projet solo avec une licence à paiement unique et aucun lanceur auquel se brancher. Il gagne sa place sur ta machine en couvrant un périmètre plus large, pas en étant meilleur sur le travail précis de Ray.so.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Choisis Ray.so si",
        competitorBody:
          "La vitesse est le seul critère. Tu veux une image de code propre et élégante sans rien configurer, ça ne coûte rien, et tu n’as jamais besoin de placer une capture dans un appareil.",
        frameHeading: "Choisis Frame si",
        frameBody:
          "Tu as besoin d’un rendu précis et pas seulement joli : un appareil donné, une annotation qui pointe une ligne, un masquage sur une clé, un filigrane. C’est du travail d’éditeur, et Ray.so n’est pas un éditeur.",
      },
      faqHeading: "Questions sur Ray.so et Frame",
      faq: [
        {
          q: "Est-ce que Ray.so envoie mon code quelque part ?",
          a: "Pas pour produire l’image. L’export s’exécute dans ton navigateur via html-to-image, et le code source est public sur GitHub si tu veux le vérifier.",
        },
        {
          q: "Faut-il Raycast pour utiliser Ray.so ?",
          a: "Non. Il fonctionne comme un site web ordinaire. Avoir Raycast installé rend simplement l’accès plus rapide.",
        },
        {
          q: "Frame est-il plus lent à utiliser que Ray.so ?",
          a: "Pour un simple extrait de code, oui. Frame ouvre un éditeur plutôt qu’un écran unique. En échange, tu maîtrises l’export et tu peux faire des choses que Ray.so n’envisage pas.",
        },
        {
          q: "Ray.so peut-il annoter ou encadrer une capture ?",
          a: "Non. C’est un générateur d’images de code. Les captures, les cadres d’appareils et les annotations sortent de son périmètre.",
        },
      ],
    },
    screely: {
      name: 'Screely',
      metaTitle: "Alternative à Screely : Portfolio Frame face à Screely",
      metaDescription:
        "Une alternative à Screely ? Portfolio Frame encadre captures d’écran et code en local dans Chrome, sans upload, avec une licence unique à $19.",
      h1: "Alternative à Screely : Portfolio Frame face à Screely",
      intro:
        "Screely est un bon outil gratuit pour transformer des captures de pages web en maquettes de navigateur et, comme Portfolio Frame, il traite tout en local. Ceux qui cherchent une alternative à Screely ont généralement besoin de quelque chose pour lequel il n’a pas été conçu. Portfolio Frame est une extension Chrome qui ajoute un éditeur d’extraits de code, des maquettes d’appareils physiques, des cartes de tweet et des filigranes, avec une licence unique à $19 pour les fonctions Pro.",
      why: {
        heading: "Pourquoi les gens cherchent une alternative à Screely",
        body: [
          "Screely couvre la capture, les fenêtres de navigateur et le marquage par texte, flèches et flou, et il ne coûte rien : le prix et la confidentialité sont donc rarement la raison. Les raisons tiennent à la portée. Il n’a ni éditeur de code ni coloration syntaxique, ses cadres sont des fenêtres et non des appareils, et il ne propose pas de filigrane.",
          "Si tu publies du code aussi souvent que des captures, ou si tu veux que le visuel s’affiche dans un MacBook ou un iPhone, c’est en général là que l’on commence à comparer.",
        ],
      },
      rows: [
        {
          feature: 'Où les captures d’écran sont traitées',
          frame: 'Localement, dans ton navigateur',
          competitor: 'Localement, dans ton navigateur',
        },
        {
          feature: 'Éditeur d’extraits de code',
          frame: 'Coloration syntaxique, badges de langage, styles de fenêtre',
          competitor: 'Pas une priorité — conçu pour les captures de pages web/images',
        },
        {
          feature: 'Maquettes d’appareils',
          frame: 'MacBook, iPhone, Apple Watch, plus cadres navigateur & terminal',
          competitor: 'Principalement des cadres de fenêtre de navigateur',
        },
        {
          feature: 'Annotation & masquage',
          frame: 'Texte, cadres, flèches, étapes numérotées, outil de masquage',
          competitor: 'Texte, flèches, formes, outil de flou',
        },
        {
          feature: 'Filigrane',
          frame: 'Texte, pseudo, logo, QR code, motifs en mosaïque',
          competitor: 'Fonctionnalité non documentée',
        },
        {
          feature: 'Maquette de carte tweet',
          frame: 'Intégrée — avatar, badge, pseudo, statistiques modifiables, thèmes clair & sombre',
          competitor: 'Fonctionnalité non documentée',
        },
        {
          feature: 'Tarifs',
          frame: 'Gratuit, Pro en achat unique',
          competitor: 'Gratuit',
        },
      ],
      honestNote:
        'Screely excelle exactement dans ce pour quoi il est conçu — transformer des captures de pages web en maquettes de navigateur soignées — et partage l’approche local-first, sans upload, de Frame. Là où Frame se distingue, c’est côté code : coloration syntaxique, badges de langage et styles de fenêtre pensés spécifiquement pour partager du code, ce qui n’est pas l’objectif de Screely.',
      sections: [
        {
          heading: "Screely a déménagé, et c’est aussi une extension maintenant",
          body: [
            "Si tu as un vieux favori vers screely.com, arrête de l’utiliser. Ce domaine n’appartient plus au projet et héberge aujourd’hui un site de paris sportifs sans aucun rapport. Screely est sur screely.app.",
            "Le changement le plus important, c’est ce qu’il est devenu. Screely est désormais à la fois une application web et une extension Chrome, et l’extension capture en plus d’éditer : zone visible, sélection personnalisée, page entière ou un seul élément. Elle enregistre aussi l’onglet actif en MP4 jusqu’à trois minutes, en 720p ou 1080p avec le son. Sa fiche indique environ un millier d’utilisateurs et une note de 5,0, avec une mise à jour aussi récente qu’août.",
            "Cela en fait le concurrent le plus direct de Frame et, sur tous les critères qui comptent aujourd’hui, le plus installé des deux.",
          ],
        },
        {
          heading: "Deux outils qui ont fait le même choix d’architecture",
          body: [
            "La documentation de Screely indique que les images sont traitées entièrement dans le navigateur avec canvas et ne sont jamais envoyées, transmises ni stockées. C’est la position que tient Frame, adoptée de son côté.",
            "Le local n’est donc pas un facteur de différenciation entre ces deux-là. Les deux composent sur canvas, les deux gardent tes captures sur ta machine, et aucun n’exige de compte. Si c’est la confidentialité qui t’amène ici, les deux y répondent.",
            "Screely va plus loin sur un point : il est entièrement gratuit, sans inscription, sans filigrane et sans limite d’export. Frame a une offre gratuite, mais les maquettes d’appareils au-delà de l’essentiel, les filigranes, l’outil de masquage et l’export par lots sont derrière une licence à paiement unique.",
          ],
        },
        {
          heading: "Là où ils divergent vraiment",
          body: [
            "Le code est la ligne la plus nette. Screely n’a pas d’éditeur d’extraits, pas de coloration syntaxique et pas de badges de langage, parce qu’il a été bâti autour des captures de pages web et d’applications. Le second éditeur de Frame existe exactement pour ça, avec les thèmes Prism, la mise en évidence de lignes et des fenêtres pensées pour lire du code.",
            "Les cadres diffèrent par nature, pas par quantité. Screely te donne des fenêtres macOS et Windows. Frame te donne des maquettes d’appareils physiques, un MacBook, un iPhone, une Apple Watch, plus des cadres de navigateur et de terminal, et une inclinaison 3D sur chacun d’eux.",
            "Frame fait aussi des cartes de tweet et des filigranes, que Screely ne propose pas. Screely fait de l’enregistrement d’écran et de l’export PDF, que Frame ne propose pas. Ce sont de vraies lacunes des deux côtés, pas des asymétries marketing.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Choisis Screely si",
        competitorBody:
          "Tu veux capturer et éditer au même endroit, tu as besoin d’enregistrer un onglet en vidéo, ou tu préfères quelque chose de gratuit sans aucun palier. C’est mature, activement maintenu, et ça ne coûte rien.",
        frameHeading: "Choisis Frame si",
        frameBody:
          "Tu partages du code autant que des captures, ou tu as besoin de maquettes d’appareils physiques, de cartes de tweet ou de filigranes. Ce sont les choses que Screely ne cherche pas à faire.",
      },
      faqHeading: "Questions sur Screely et Frame",
      faq: [
        {
          q: "screely.com, c’est toujours Screely ?",
          a: "Non. Le projet est sur screely.app désormais. L’ancien domaine .com a changé de mains et héberge autre chose, donc mets tes favoris à jour.",
        },
        {
          q: "Screely est-il vraiment gratuit ?",
          a: "Oui. Leur site annonce aucune inscription, aucun filigrane et aucune limite d’export. C’est l’option la moins chère, et c’est un point légitime contre l’offre payante de Frame.",
        },
        {
          q: "Screely peut-il faire des captures de code ?",
          a: "Non. Il n’a ni coloration syntaxique ni éditeur de code. Si les images de code font partie de ce que tu publies régulièrement, c’est la raison principale de regarder Frame.",
        },
        {
          q: "Frame peut-il enregistrer mon écran ?",
          a: "Non. Frame édite des images fixes. Screely enregistre l’onglet actif en MP4, une capacité réelle que Frame n’a pas.",
        },
        {
          q: "Les deux gardent-ils mes captures privées ?",
          a: "Oui. Les deux traitent les images localement dans le navigateur avec canvas et aucun ne les envoie. Ce n’est pas l’axe sur lequel ils diffèrent.",
        },
      ],
    },
    'shots-so': {
      name: 'Shots.so',
      metaTitle: "Alternative à Shots.so : Portfolio Frame face à Shots.so",
      metaDescription:
        "Une alternative à Shots.so ? Portfolio Frame réunit maquettes d’appareils, cadres de code et annotations dans Chrome, pour $19 une fois, sans abonnement.",
      h1: "Alternative à Shots.so : Portfolio Frame face à Shots.so",
      intro:
        "Shots.so est une application web mature, avec une grande bibliothèque d’appareils et des maquettes animées, et pour tout ce qui bouge c’est l’outil le plus solide. Ceux qui cherchent une alternative à Shots.so veulent en général des captures de code, des annotations, ou arrêter de payer tous les mois. Portfolio Frame est une extension Chrome qui réunit maquettes d’appareils, cadres de code et annotations dans un seul éditeur, avec une licence unique à $19 plutôt qu’un abonnement.",
      why: {
        heading: "Pourquoi les gens cherchent une alternative à Shots.so",
        body: [
          "Shots.so est un outil de maquettes et d’arrière-plans, et un très bon. Ce qu’il ne fait pas, c’est le code : pas d’éditeur d’extraits, pas de coloration syntaxique. Pas de flèches, d’étapes numérotées ni de masquage non plus, donc tout ce qu’il faut pointer ou cacher se fait ailleurs.",
          "L’autre raison, c’est la facture. Shots.so fonctionne par abonnement, et pour un outil que tu utilises quelques fois par mois, payer une seule fois peut avoir plus de sens.",
        ],
      },
      rows: [
        {
          feature: 'Bibliothèque d’appareils',
          frame: 'Cadres MacBook, iPhone, Apple Watch, navigateur & terminal',
          competitor: 'iPhone, Android, iPad, iMac, Apple Watch, navigateur — une bibliothèque plus large',
        },
        {
          feature: 'Éditeur d’extraits de code',
          frame: 'Coloration syntaxique, badges de langage, styles de fenêtre',
          competitor: 'Pas une priorité — outil généraliste de capture/maquette',
        },
        {
          feature: 'Export animé / vidéo',
          frame: 'Cartes tweet avec export vidéo MP4 associé ; pas encore d’export animé général',
          competitor: 'Disponible sur les forfaits payants',
        },
        {
          feature: 'Annotations',
          frame: 'Texte, cadres, flèches, étapes numérotées, outil de masquage',
          competitor: 'Fonctionnalité non documentée',
        },
        {
          feature: 'Format',
          frame: 'Extension Chrome',
          competitor: 'Application web hébergée',
        },
        {
          feature: 'Maquette de carte tweet',
          frame: 'Intégrée — avatar, badge, pseudo, statistiques modifiables, thèmes clair & sombre',
          competitor: 'Préréglages de format pour les réseaux sociaux, pas une carte tweet stylée',
        },
        {
          feature: 'Tarifs',
          frame: 'Gratuit, Pro en achat unique',
          competitor: 'Forfait gratuit avec filigrane ; forfaits payants de 8 à 12 $/mois',
        },
      ],
      honestNote:
        'Si tu as besoin de la plus grande bibliothèque d’appareils ou que tu veux des exports animés généraux au-delà des cartes tweet, la maturité de Shots.so se voit — c’est le meilleur choix si c’est ta priorité. Frame est plus ciblé par conception : une extension Chrome pour développeurs, qui associe captures de code et maquettes d’appareils dans un seul outil, avec un prix unique plutôt qu’un abonnement.',
      sections: [
        {
          heading: "Une application web mature avec un abonnement derrière",
          body: [
            "Shots.so a des années de développement derrière lui et sa bibliothèque d’appareils le montre : iPhone, Android, iPad, iMac, Apple Watch et cadres de navigateur, avec des arrière-plans qui vont des dégradés et effets de verre aux photos Unsplash et aux remplissages générés par IA à partir des couleurs de ton image.",
            "Il fonctionne comme une application web hébergée plutôt qu’une extension, et il est facturé à l’abonnement. Il existe une offre gratuite, les offres payantes tournant autour de huit et douze dollars par mois pour des exports en plus haute résolution, le WebP, la vidéo transparente et les maquettes animées pour lesquelles il est connu.",
            "Frame est une extension Chrome avec une offre gratuite et un paiement unique. Sur deux ans l’écart se creuse, mais tu achètes aussi moins : le travail d’animation de Shots.so n’a pas d’équivalent dans Frame.",
          ],
        },
        {
          heading: "L’animation est la vraie lacune",
          body: [
            "Ce que Shots.so fait et que Frame ne peut tout simplement pas faire, c’est le mouvement. Maquettes animées, effets de zoom vidéo et préréglages de mouvement sont sa marque de fabrique, et si tu produis des vidéos de lancement ou des visuels sociaux animés, c’est le choix évident.",
            "Frame exporte des images fixes, avec une seule exception étroite : une carte de tweet accompagnée d’une vidéo s’exporte en MP4. Ce n’est pas une fonction d’animation générale et il serait trompeur de la présenter comme telle.",
          ],
        },
        {
          heading: "Ce que Frame apporte et que Shots.so n’a pas",
          body: [
            "Le code, avant tout. Shots.so n’a ni éditeur d’extraits ni coloration syntaxique. Le second éditeur de Frame est fait pour ça.",
            "L’annotation est l’autre manque. Shots.so est un outil de maquettes et d’arrière-plans, pas de marquage : pas de flèches, pas d’étapes numérotées, pas de masquage. Si tes captures doivent pointer quelque chose, ou couvrir une clé d’API avant publication, ce travail doit se faire ailleurs.",
            "Et Frame s’exécute là où sont déjà tes captures. Une extension dans le navigateur où tu travailles supprime l’aller-retour d’envoi et de téléchargement qu’impose une application web hébergée.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Choisis Shots.so si",
        competitorBody:
          "Tu as besoin de maquettes animées ou vidéo, ou tu veux la plus grande bibliothèque d’appareils disponible. Sa maturité est réelle et un abonnement se justifie si tu produis ce type de visuels régulièrement.",
        frameHeading: "Choisis Frame si",
        frameBody:
          "Tu veux des captures de code et des visuels produit depuis un seul outil, tu as besoin d’annotation et de masquage, ou tu préfères payer une fois plutôt que tous les mois pour quelque chose que tu utilises quelques fois par mois.",
      },
      faqHeading: "Questions sur Shots.so et Frame",
      faq: [
        {
          q: "Shots.so est-il gratuit ?",
          a: "Il y a une offre gratuite, et les offres payantes tournent autour de huit à douze dollars par mois pour des exports en plus haute résolution, davantage de formats et les fonctions d’animation. Consulte leur page de tarifs pour les chiffres à jour.",
        },
        {
          q: "Frame peut-il exporter des animations ?",
          a: "Pas de façon générale. Une carte de tweet avec vidéo jointe s’exporte en MP4, mais il n’y a ni maquettes animées ni préréglages de mouvement. Shots.so est le bon outil pour ça.",
        },
        {
          q: "Shots.so gère-t-il les extraits de code ?",
          a: "Non. Il est conçu pour les maquettes d’appareils et les arrière-plans. Les images de code sortent de son périmètre.",
        },
        {
          q: "Lequel revient le moins cher ?",
          a: "Frame, si tu l’utilises plus de quelques mois, parce que Pro est un paiement unique. Shots.so facture au mois. Que cela compte ou non dépend de ton besoin des fonctions d’animation que Frame n’a pas.",
        },
      ],
    },
  },

  privacy: {
    eyebrow: 'Légal',
    title: 'Politique de confidentialité',
    updatedLabel: 'Dernière mise à jour :',
    updatedDate: '11 septembre 2026',
    intro:
      'Portfolio Frame est une extension Chrome qui transforme des captures d’écran en visuels soignés grâce à des maquettes d’appareils, des arrière-plans et des annotations. Cette page explique quelles données l’extension traite, et comment.',
    sections: {
      localData: {
        heading: 'Ce que Portfolio Frame fait localement',
        body: 'Toute l’édition d’image se fait dans ton navigateur. Captures d’écran, maquettes, arrière-plans et annotations sont générés et exportés sur ton appareil. Portfolio Frame n’upload jamais tes images ou captures d’écran vers un serveur, et nous n’avons aucun accès au contenu que tu crées avec l’extension.',
      },
      storedData: {
        heading: 'Données stockées localement',
        intro: 'Portfolio Frame utilise le stockage local de Chrome pour enregistrer :',
        items: [
          'Tes préférences d’éditeur (arrière-plan sélectionné, palette, appareil de maquette, et réglages similaires)',
          'Le statut d’activation de ta licence Pro, si tu as acheté une licence',
        ],
        outro:
          'Ces données restent sur ton appareil et ne se synchronisent que si les réglages de synchronisation de ton navigateur sont activés ; Portfolio Frame ne les transmet séparément d’aucune façon.',
      },
      licenseActivation: {
        heading: 'Activation de la licence Pro',
        body: 'Portfolio Frame Pro se débloque avec une clé de licence à usage unique, délivrée via Dodo Payments, notre prestataire de paiement. Quand tu actives une clé de licence, l’extension envoie la clé elle-même, ainsi qu’un court identifiant d’appareil, aux serveurs de Dodo Payments pour vérifier la clé et enregistrer cette activation. Cet identifiant d’appareil est généré aléatoirement et stocké sur ton appareil — il n’est dérivé d’aucun identifiant matériel, compte, ou information personnelle — et il permet à Dodo Payments de savoir quels appareils ont activé la licence, puisqu’une licence peut être utilisée sur plusieurs appareils. L’extension n’envoie pas ton adresse email dans le cadre de l’activation. Les détails de paiement (numéros de carte, adresse de facturation) sont gérés entièrement par la page de paiement de Dodo Payments, et ne sont jamais vus par Portfolio Frame, ni stockés par nous.',
        linkIntro: 'Consulte la politique de confidentialité de Dodo Payments pour savoir comment ils traitent ces données :',
      },
      whatWeDontDo: {
        heading: 'Ce que nous ne faisons pas',
        items: [
          'Nous ne vendons ni ne partageons tes données avec des annonceurs ou des courtiers en données.',
          'Nous ne suivons pas ton activité de navigation en dehors de l’onglet que tu choisis activement de capturer avec l’extension.',
          'Nous n’utilisons pas tes données pour construire des profils utilisateurs, ni à des fins sans rapport avec la fonction principale de l’extension.',
        ],
      },
      permissions: {
        heading: 'Autorisations',
        intro:
          'Portfolio Frame demande les autorisations de navigateur suivantes, chacune utilisée uniquement dans le but indiqué :',
        items: [
          {
            title: 'activeTab / scripting',
            desc: 'pour capturer la capture d’écran de l’onglet que tu choisis d’éditer, et pour exécuter le sélecteur d’élément sur la page, uniquement quand tu invoques l’extension',
          },
          {
            title: 'downloads',
            desc: 'pour enregistrer les images exportées et les fichiers ZIP d’export groupé à l’emplacement de ton choix',
          },
          {
            title: 'storage',
            desc: 'pour se souvenir de tes préférences d’éditeur et de ton statut de licence d’une session à l’autre',
          },
          {
            title: 'unlimitedStorage',
            desc: 'pour stocker les captures d’écran et les données d’export qui peuvent dépasser la limite de stockage par défaut de Chrome',
          },
          {
            title: 'contextMenus',
            desc: 'pour ajouter une option au clic droit permettant de démarrer une capture directement depuis la page',
          },
        ],
        outro:
          'Copier un export dans ton presse-papiers et enregistrer des fichiers sur le disque utilisent les API standard de presse-papiers et de téléchargement de ton navigateur, pas une autorisation d’extension distincte.',
      },
      changes: {
        heading: 'Modifications de cette politique',
        body: 'Si nos pratiques en matière de données changent, nous mettrons à jour cette page et, si nécessaire, nous signalerons clairement le changement directement dans l’extension.',
      },
      contact: {
        heading: 'Contact',
        body: 'Des questions sur cette politique :',
      },
    },
  },

  localeSwitcher: {
    label: 'Langue',
  },
} satisfies Dictionary
