import type { Dictionary } from '../types'

export const fr = {
  meta: {
    home: {
      title: 'Portfolio Frame — une chambre noire pour tes captures d’écran et ton code',
      description:
        'Frame est une extension Chrome qui transforme captures d’écran brutes et code en visuels prêts à publier. Pas de compte, pas d’upload — tout reste sur ton appareil.',
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
  },

  hero: {
    eyebrow: 'Un studio local-first pour tes captures d’écran & ton code',
    headlineLine1: 'Développe tes captures d’écran',
    headlineLine2: 'comme des tirages photo.',
    sub: 'Portfolio Frame transforme une capture d’écran brute ou un bloc de code en quelque chose qui vaut le coup d’être partagé : encadré, éclairé, annoté, et à la bonne taille pour sa destination. Pas de compte, pas d’upload, pas de serveur entre les deux.',
    primaryCta: 'Ajouter à Chrome, c’est gratuit',
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
        tag: 'Mise en page · Source',
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
        tag: 'Frame',
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
        tag: 'Social',
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
        tag: 'Arrière-plan',
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
        tag: 'Annoter',
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
        tag: 'Marque',
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
  },

  compare: {
    eyebrow: 'Comparaison',
    titleTemplate: (name: string) => `Frame face à ${name}`,
    metaTitleTemplate: (name: string) =>
      `Frame face à ${name} — comparatif des outils de capture de code & de maquettes`,
    tableHeaders: { feature: 'Fonctionnalité', frame: 'Frame' },
    honestLabel: 'En toute honnêteté',
    ctaText: 'Essaie Frame — c’est gratuit',
    otherLabel: 'Autres comparaisons',
    otherLinkTemplate: (name: string) => `Frame face à ${name}`,
  },

  comparisons: {
    carbon: {
      name: 'Carbon',
      intro:
        'Carbon a popularisé le format de la capture d’écran de code — la plus grande bibliothèque de thèmes et de langages du marché, et c’est gratuit. Voici comment ça se compare à Frame.',
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
    },
    'ray-so': {
      name: 'Ray.so',
      intro:
        'Ray.so (par Raycast) est le chemin le plus rapide entre une sélection de code et un PNG propre avec fond en dégradé. Voici comment ça se compare à Frame.',
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
    },
    screely: {
      name: 'Screely',
      intro:
        'Screely transforme des captures d’écran de pages web en maquettes de navigateur soignées, et — comme Frame — garde tout en local sur ton appareil. Voici où les deux diffèrent vraiment.',
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
    },
    'shots-so': {
      name: 'Shots.so',
      intro:
        'Shots.so a quatre ans de développement derrière lui — une grande bibliothèque d’appareils, des scènes 3D, et des exports animés sur les forfaits payants. Voici comment ça se compare à Frame.',
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
