import type { Dictionary } from '../types'

export const es = {
  meta: {
    home: {
      title: 'Editor de mockups de capturas y código | Portfolio Frame',
      description:
        'Portfolio Frame es una extensión de Chrome que convierte capturas y código en mockups pulidos: marcos de dispositivo, anotaciones y marcas de agua. Todo local.',
    },
    privacy: {
      title: 'Política de Privacidad — Portfolio Frame',
      description:
        'Cómo maneja los datos Portfolio Frame: todo se procesa localmente en tu navegador, no se sube nada, y la activación de la licencia solo se comunica con Dodo Payments.',
    },
  },

  nav: {
    links: {
      editor: 'Editor',
      code: 'Código',
      'twitter-snap': 'Twitter Snap',
      mockups: 'Maquetas',
      annotate: 'Anotar',
      brand: 'Marca',
      pricing: 'Precios',
      faq: 'FAQ',
    },
    cta: 'Añadir a Chrome',
  },

  hero: {
    eyebrow: 'Extensión de Chrome para mockups de capturas y código',
    headlineLine1: 'Revela tus capturas',
    headlineLine2: 'como copias.',
    sub: 'Portfolio Frame convierte una captura en bruto o un bloque de código en algo que vale la pena compartir: enmarcado, iluminado, anotado y con el tamaño justo para donde vaya. Sin cuenta, sin subir nada, sin servidor de por medio.',
    primaryCta: 'Añadir a Chrome, es gratis',
    secondaryCta: 'Míralo con código ↓',
    trust: {
      setupLabel: 'Instalación',
      setupValue: 'Cero. Abre la extensión y empieza.',
      storageLabel: 'Almacenamiento',
      storageValue: '100% en tu dispositivo, local storage e IndexedDB.',
      serversLabel: 'Servidores',
      serversValue: 'Ninguno. Tu trabajo nunca sale de tu navegador.',
    },
    stageAriaLabel:
      'Una tarjeta de fragmento de código y una tarjeta de captura de navegador, dispuestas como copias de prueba sobre una mesa de luz de cuarto oscuro',
    shippedBadge: 'Lanzado v2.4',
    sheetCaption: 'Prueba 03: fondo / captura / marco',
  },

  featureRail: {
    sections: {
      editor: {
        tag: 'Editor doble',
        title: 'Un lienzo, dos puntos de entrada',
        description:
          'Arrastra una captura o pega un bloque de código. El mismo lienzo, los mismos controles de exportación y los mismos ajustes de tamaño valen para ambos.',
        features: [
          {
            title: 'Dos modos de edición',
            desc: 'Cambia entre el editor de maquetas de imagen y el editor de fragmentos de código sin perder el hilo.',
          },
          {
            title: 'Exportaciones de alta calidad',
            desc: 'Ajusta tú mismo la resolución de exportación y la compresión JPEG, para que nada pierda nitidez al salir.',
          },
          {
            title: 'Tamaños listos para redes',
            desc: 'Auto, Personalizado, Cuadrado, Retrato, Historia, Horizontal y Presentación, cada uno con un clic.',
          },
        ],
      },
      code: {
        tag: 'Capturas de código',
        title: 'Código, impreso como se debe',
        description:
          'Resaltado de sintaxis y marcos de ventana pensados para leerse, no solo para decorar.',
        features: [
          {
            title: 'Temas de sintaxis premium',
            desc: "Dracula, Synthwave '84, Monokai, GitHub Dark, y un tema Minimal Light, construidos sobre Prism.js.",
          },
          {
            title: 'Insignias multilingües',
            desc: 'Insignias de lenguaje automáticas y con buen diseño para JavaScript, TypeScript, Python, CSS y Rust.',
          },
          {
            title: 'Resaltado de líneas y numeración',
            desc: 'Destaca exactamente las líneas que importan, con números de línea que puedes activar o desactivar.',
          },
          {
            title: 'Estilos de ventana',
            desc: 'Envuelve tus fragmentos en marcos de macOS, Windows o minimalistas.',
          },
          {
            title: 'Materiales glassmorphism',
            desc: 'Paneles de vidrio esmerilado con bordes, profundidad de sombra y refracción ajustables.',
          },
        ],
      },
      'twitter-snap': {
        tag: 'Tarjetas de tuits',
        title: 'Tweets, sin necesidad de captura',
        description:
          'Pega un tweet y recibe una tarjeta limpia y con estilo. Sin bordes de navegador recortados, sin banner de cookies en la esquina.',
        features: [
          {
            title: 'Diseño real de tweet',
            desc: 'Avatar, nombre, insignia de verificación, usuario y fecha, dispuestos tal como se ven de verdad en X.',
          },
          {
            title: 'Temas claro y oscuro',
            desc: 'Haz que la tarjeta combine con donde la vayas a usar: una entrada de blog, una presentación o un hilo en modo oscuro.',
          },
          {
            title: 'Estadísticas editables',
            desc: 'Respuestas, reposts y me gusta los defines tú, ideal para maquetas antes de que la publicación sea real.',
          },
        ],
      },
      mockups: {
        tag: 'Mockups de dispositivo y navegador',
        title: 'Crea el escenario',
        description:
          'Marcos reales de dispositivos y navegadores, no simples rectángulos planos, porque el contexto es la mitad de la historia.',
        features: [
          {
            title: 'Biblioteca de dispositivos',
            desc: 'Pro Display XDR, Dell UltraSharp, MacBook, iPhone 14 Pro, Apple Watch y más.',
          },
          {
            title: 'Marcos de navegador',
            desc: 'Marcos claros y oscuros para Chrome en Windows y Mac, y para Safari.',
          },
          {
            title: 'Modo terminal',
            desc: 'Un marco de terminal personalizable con una ruta de archivo configurable en la barra de título.',
          },
          {
            title: 'Inclinación 3D',
            desc: 'Inclinación ajustable en los ejes X, Y y Z, más zoom, para dar profundidad sin trucos baratos.',
          },
        ],
      },
      annotate: {
        tag: 'Herramientas de anotación',
        title: 'Señala lo que importa',
        description:
          'Texto, formas y pasos superpuestos directamente en el lienzo, nada que requiera una segunda herramienta.',
        features: [
          {
            title: 'Herramientas de anotación',
            desc: 'Texto, recuadros, flechas, pasos numerados, resaltados y una herramienta de censura para lo sensible.',
          },
          {
            title: 'Stickers',
            desc: 'Añade y rota stickers personalizados en cualquier parte del lienzo.',
          },
          {
            title: 'Insignias de contexto',
            desc: 'Insignias elegantes en cualquier borde, con icono personalizado, emoji o punto: "Nueva función lanzada" y cosas por el estilo.',
          },
        ],
      },
      brand: {
        tag: 'Marcas de agua',
        title: 'Firma tu trabajo',
        description: 'Márcalo como tuyo, o haz que sea difícil de robar sin dar crédito.',
        features: [
          {
            title: 'Marcas de agua versátiles',
            desc: 'Texto, un usuario de X, GitHub, LinkedIn o Instagram, un logo personalizado, o un código QR escaneable.',
          },
          {
            title: 'Marcas de agua en mosaico',
            desc: 'Patrones repetidos e inclinados en estilo sólido, contorno o superposición, para el trabajo que quieres proteger.',
          },
        ],
      },
    },
  },

  showcases: {
    common: {
      tiltLabels: { flat: 'Plano', angled: 'Inclinado', deep: 'Profundo' },
      ariaTilt: 'Inclinación',
    },
    device: {
      frameTypeLabels: { device: 'Dispositivo', browser: 'Navegador', terminal: 'Terminal' },
      deviceLabels: { macbook: 'MacBook', iphone: 'iPhone', watch: 'Watch' },
      deviceFullNames: {
        macbook: 'MacBook Pro 16"',
        iphone: 'iPhone 14 Pro',
        watch: 'Apple Watch',
      },
      ariaFrameType: 'Tipo de marco',
      ariaDevice: 'Dispositivo',
      deviceCaptionSuffix: ', uno de toda la biblioteca de dispositivos.',
      browserCaption: 'Marcos de navegador claros y oscuros para Chrome y Safari.',
      terminalCaption: 'Un marco de terminal personalizable con una ruta de archivo configurable.',
    },
    codeGlass: {
      ariaGlass: 'Material de vidrio',
      glassOff: 'Vidrio desactivado',
      glassOn: 'Vidrio activado',
      returnValue: 'listo.',
      caption:
        'Paneles de vidrio esmerilado con bordes ajustables, más inclinación X/Y/Z para dar profundidad sin trucos baratos.',
    },
    tweetSnap: {
      ariaLogoStyle: 'Estilo de logo',
      classic: 'Clásico',
      current: 'Actual',
      ariaTheme: 'Tema',
      light: 'Claro',
      dark: 'Oscuro',
      tweetBody:
        'hoy lancé Twitter Snap: convierte cualquier tweet en una tarjeta limpia y con estilo. sin captura, sin recortes, sin interfaz fea de por medio.',
      repliesLabel: 'Respuestas',
      repostsLabel: 'Reposts',
      likesLabel: 'Me gusta',
      caption: 'Twitter Snap: el pájaro clásico o la marca actual, claro u oscuro, cada estadística editable',
    },
    annotate: {
      ariaTools: 'Herramientas de anotación',
      tools: { box: 'Recuadro', arrow: 'Flecha', redact: 'Censura', sticker: 'Sticker' },
      dashboardLabel: 'Dashboard',
      deployLabel: 'Deploy',
      caption:
        'Recuadro, flecha, censura y stickers, superpuestos directamente en el lienzo: activa varios a la vez para verlos combinarse.',
    },
    brand: {
      ariaWatermarkType: 'Tipo de marca de agua',
      types: { text: 'Texto', logo: 'Logo', qr: 'QR' },
      ariaTiled: 'Protección en mosaico',
      tiledOff: 'Mosaico desactivado',
      tiledOn: 'Mosaico activado',
      caption:
        'Marca de agua como usuario, logo o QR escaneable, además de una superposición en mosaico e inclinada para el trabajo que quieres proteger.',
    },
  },

  pricing: {
    tag: 'Precios',
    title: 'Paga una vez. Quédate con el cuarto oscuro.',
    description:
      'Frame es gratis para instalar y usar. Pro desbloquea todo el set de materiales: una sola compra, verificada con una clave de licencia, sin cobros recurrentes.',
    free: {
      title: 'Gratis',
      price: '$0',
      caption: 'Todo lo que necesitas para publicar una captura impecable',
      features: [
        'Editor dual: imágenes y código',
        'Temas de sintaxis esenciales y estilos de ventana',
        '2 marcos de dispositivo y navegador por categoría',
        'Biblioteca completa de escenas de fondo, inclinación 3D y perspectiva',
        'Stickers, además de anotaciones de texto, recuadro y flecha',
        'Almacenamiento local, sin cuenta',
      ],
      cta: 'Añadir a Chrome',
    },
    pro: {
      badge: 'Pro',
      title: 'Licencia Pro',
      price: '$19',
      billing: 'Pago único',
      caption: 'Todo lo de Gratis, más el estudio completo',
      features: [
        'El resto de la biblioteca de maquetas de dispositivos y navegadores',
        'Materiales glassmorphism',
        'Insignias y la herramienta de censura',
        'Guarda escenas personalizadas, sube tus propias fuentes',
        'Marcas de agua personalizadas con logo, usuario y QR',
        'Protección con marca de agua en mosaico',
        'Exportación por lotes de todos los formatos, en un ZIP',
        'Exportación SVG',
      ],
      licensePlaceholder: 'XXXX-XXXX-XXXX-XXXX',
      licenseVerified: 'Verificado con Dodo Payments',
      cta: 'Consigue una licencia Pro',
    },
  },

  faq: {
    tag: 'FAQ',
    title: 'Preguntas, respondidas',
    items: [
      {
        question: '¿Mi código o mis capturas se suben a algún sitio?',
        answer:
          'No. Portfolio Frame funciona por completo en tu navegador. Los fragmentos, el historial del lienzo y los ajustes se guardan localmente usando el local storage e IndexedDB de tu navegador. Nada se envía a un servidor, y no hay ninguna cuenta que crear.',
      },
      {
        question: '¿Cuál es la diferencia entre Gratis y Pro?',
        answer:
          'Gratis cubre el editor principal: modos dual de imagen y código, algunos temas de sintaxis, 2 marcos de dispositivo/navegador por categoría, la biblioteca completa de escenas de fondo con inclinación 3D, stickers y anotaciones básicas. Pro añade el resto de la biblioteca de dispositivos, materiales glassmorphism, insignias y la herramienta de censura, escenas y fuentes personalizadas guardadas, marcas de agua personalizadas, exportación por lotes de todos los formatos en un ZIP, y exportación SVG.',
      },
      {
        question: '¿Cómo consigo mi clave de licencia Pro después de pagar?',
        answer:
          'El pago lo gestiona Dodo Payments. En cuanto se procesa tu pago, tu clave de licencia se genera automáticamente y te la enviamos por correo. Pégala en la pantalla de licencia de la extensión para desbloquear Pro.',
      },
      {
        question: '¿Puedo usar mi licencia en más de un dispositivo?',
        answer:
          'Sí. Tu licencia no está limitada a un solo dispositivo o perfil de navegador, así que puedes activarla donde sea que uses Portfolio Frame.',
      },
      {
        question: '¿Cuál es la política de reembolsos?',
        answer:
          'Si tienes una clave de licencia Pro válida, tienes derecho a un reembolso completo dentro de los 7 días posteriores a la compra, sin preguntas. Escríbeme con el correo con el que compraste y yo me encargo.',
      },
      {
        question: '¿Las futuras actualizaciones tendrán algún costo extra?',
        answer:
          'No. Tu compra única incluye actualizaciones y mejoras gratuitas para todas las funciones Pro actuales.',
      },
      {
        question: '¿Aceptan pagos desde India, incluyendo UPI?',
        answer:
          'Sí. El proceso de pago admite UPI junto con tarjetas y otros métodos de pago regionales, y el precio se ajusta automáticamente según la paridad de poder adquisitivo, para que pagues un precio justo según tu región.',
      },
    ],
  },

  footer: {
    tagline: 'Un cuarto oscuro para capturas y código. Todo se queda en tu dispositivo.',
    productLabel: 'Producto',
    getItLabel: 'Consíguelo',
    proLicenseLink: 'Licencia Pro',
    noAccountLine: 'Sin cuenta. Sin subidas. Sin servidor.',
    privacyLink: 'Política de Privacidad',
  },

  compare: {
    eyebrow: 'Comparativa',
    titleTemplate: (name: string) => `Frame frente a ${name}`,
    metaTitleTemplate: (name: string) =>
      `Frame frente a ${name} — herramientas de capturas de código y maquetas comparadas`,
    tableHeaders: { feature: 'Característica', frame: 'Frame' },
    honestLabel: 'Siendo honestos',
    ctaText: 'Prueba Frame — es gratis',
    otherLabel: 'Otras comparativas',
    otherLinkTemplate: (name: string) => `Frame frente a ${name}`,
  },

  comparisons: {
    carbon: {
      name: 'Carbon',
      intro:
        'Carbon popularizó el formato de captura de código: la biblioteca de temas y lenguajes más grande que existe, y encima es gratis. Así se compara con Frame.',
      rows: [
        {
          feature: 'Cómo se renderiza la imagen',
          frame: 'Composición en canvas, en tu navegador',
          competitor: 'Rasterización del DOM con dom-to-image, también en tu navegador',
        },
        {
          feature: 'Dónde vive tu código',
          frame: 'Almacenamiento de la extensión, en tu propio equipo',
          competitor: 'Una app web alojada. Exportar es local; guardar o tuitear un snippet lo sube',
        },
        {
          feature: 'Temas de sintaxis',
          frame: "5 temas seleccionados (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
          competitor: '30+ temas, 100+ lenguajes',
        },
        {
          feature: 'Maquetas de dispositivos y navegadores',
          frame: 'MacBook, iPhone, Apple Watch, marcos de navegador y terminal',
          competitor: 'Ninguna',
        },
        {
          feature: 'Anotaciones',
          frame: 'Texto, recuadros, flechas, pasos numerados, herramienta de censura',
          competitor: 'Ninguna',
        },
        {
          feature: 'Marca de agua',
          frame: 'Texto, usuario, logo, QR, patrones en mosaico',
          competitor: 'Ninguna',
        },
        {
          feature: 'Edición de imágenes/capturas',
          frame: 'Incluida, junto al editor de código',
          competitor: 'Solo código — sin modo de imagen',
        },
        {
          feature: 'Maqueta de tarjeta de tweet',
          frame: 'Incluida — avatar, insignia, usuario, estadísticas editables, temas claro y oscuro',
          competitor: 'No es una función documentada',
        },
        {
          feature: 'Precio',
          frame: 'Gratis, Pro es una compra única',
          competitor: 'Gratis',
        },
      ],
      honestNote:
        'Si solo necesitas una captura de código rápida y quieres la mayor variedad de temas, Carbon es difícil de superar, y no cuesta nada. Las dos herramientas exportan en tu navegador, así que aquí no hay una cesión de privacidad. La diferencia real está en el método y el alcance: Carbon rasteriza el DOM, algo rápido de construir que enseña sus límites con sombras y fuentes propias, mientras que Frame compone en canvas y añade maquetas de dispositivos, anotaciones y marcas de agua. Usa Carbon para un fragmento de código y Frame para una captura de producto completa.',
      sections: [
        {
          heading: "Los dos renderizan en tu navegador",
          body: [
            "Esta página decía antes que Carbon enviaba tu código a un servidor. Era falso, y conviene corregirlo sin rodeos. El editor de Carbon pasa el nodo del DOM directamente a dom-to-image y recibe un PNG o un SVG sin que el código salga de la página. En el repositorio hay un renderizador de servidor, pero solo atiende a los rastreadores de Twitter y Slack para que las vistas previas de enlaces tengan algo que mostrar, y devuelve un 401 a todos los demás.",
            "Lo que de verdad cambia es el método. dom-to-image recorre el DOM, incrusta los estilos calculados y rasteriza el resultado a través de un foreignObject de SVG. Frame compone en canvas: cada capa se dibuja en orden sobre una superficie de mapa de bits que controla él mismo.",
            "Suena académico hasta que exportas algo con una tipografía propia y una sombra suave. La rasterización con foreignObject depende de que el navegador coincida contigo en cómo se pintan esas cosas al exportar, y los navegadores no siempre coinciden. La composición en canvas lo decide por su cuenta. Fueron dos semanas peleando con el primer enfoque las que llevaron al segundo.",
          ],
        },
        {
          heading: "Carbon es una herramienta de código. Frame es de código y de capturas.",
          body: [
            "Carbon hace una sola cosa y la hace desde 2018. Pegas código, eliges un tema, obtienes una imagen. No hay importación de imágenes, ni marcos de dispositivo, ni capa de anotaciones, porque nada de eso es lo que se propuso hacer.",
            "Los dos editores de Frame comparten un mismo lienzo, un mismo juego de ajustes de exportación y un mismo sistema de tamaños. Una nota de versión que necesita una maqueta de navegador de la función y un fragmento resaltado de la llamada a la API es una sola herramienta y una sola cola de exportación, en lugar de dos.",
          ],
        },
        {
          heading: "Donde Carbon va claramente por delante",
          body: [
            "En temas y lenguajes no hay comparación. Carbon trae más de 30 temas y más de 100 lenguajes frente a los cinco temas seleccionados y los cinco lenguajes con distintivo de Frame. Si tu fragmento es de Elixir o de Haskell, Carbon te cubre y Frame no.",
            "Además es de código abierto con licencia MIT y más de 36.000 estrellas, así que puedes leer exactamente cómo funciona, alojarlo tú mismo o bifurcarlo. Frame no es de código abierto. Y Carbon es gratis sin ningún tipo de plan, mientras que Frame deja las maquetas de dispositivo, las marcas de agua y la exportación por lotes detrás de un pago único.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Elige Carbon si",
        competitorBody:
          "Solo compartes código, quieres la mayor variedad posible de temas y lenguajes, o te importa usar algo de código abierto que podrías alojar tú mismo. Es gratis, es maduro y para una captura de código pura es excelente.",
        frameHeading: "Elige Frame si",
        frameBody:
          "Compartes capturas más o menos tan a menudo como código y estás cansado de usar una herramienta para fragmentos y otra para imágenes de producto. Los marcos de dispositivo, las anotaciones y las marcas de agua son justo lo que Carbon nunca intentó darte.",
      },
      faqHeading: "Preguntas sobre Carbon y Frame",
      faq: [
        {
          q: "¿Carbon sube mi código a un servidor?",
          a: "Al exportar no. Eso ocurre en tu navegador. Sí lo sube si guardas un fragmento en tu cuenta de Carbon o usas el botón de tuitear integrado, y las dos cosas son acciones deliberadas, no parte de exportar.",
        },
        {
          q: "¿Frame es de código abierto como Carbon?",
          a: "No. Carbon tiene licencia MIT y puedes leerlo o alojarlo tú mismo. Frame es de código cerrado, con un plan gratuito y una licencia de pago único para el resto.",
        },
        {
          q: "¿Frame puede igualar los temas de sintaxis de Carbon?",
          a: "No, y no lo pretende. Frame trae cinco temas seleccionados sobre Prism frente a los más de treinta de Carbon. Si lo que optimizas es la variedad de temas, Carbon gana esa comparación sin discusión.",
        },
        {
          q: "¿Carbon puede meter una captura dentro de un marco de dispositivo?",
          a: "No. Carbon trabaja solo con código. Esa es la razón principal por la que estas dos herramientas acaban instaladas a la vez en lugar de sustituirse la una a la otra.",
        },
      ],
    },
    'ray-so': {
      name: 'Ray.so',
      intro:
        'Ray.so (de Raycast) es el camino más rápido para convertir una selección de código en un PNG limpio con fondo degradado. Así se compara con Frame.',
      rows: [
        {
          feature: 'Cómo se renderiza la imagen',
          frame: 'Composición en canvas, en tu navegador',
          competitor: 'Rasterización del DOM con html-to-image, también en tu navegador',
        },
        {
          feature: 'Dónde vive tu código',
          frame: 'Almacenamiento de la extensión, en tu propio equipo',
          competitor: 'Una app web alojada donde pegas el código',
        },
        {
          feature: 'Temas de sintaxis',
          frame: "5 temas seleccionados (Dracula, Synthwave '84, Monokai, GitHub Dark, Minimal Light)",
          competitor: 'Un pequeño conjunto de degradados predefinidos y pulidos',
        },
        {
          feature: 'Maquetas de dispositivos y navegadores',
          frame: 'MacBook, iPhone, Apple Watch, marcos de navegador y terminal',
          competitor: 'Ninguna',
        },
        {
          feature: 'Anotaciones',
          frame: 'Texto, recuadros, flechas, pasos numerados, herramienta de censura',
          competitor: 'Ninguna',
        },
        {
          feature: 'Marca de agua',
          frame: 'Texto, usuario, logo, QR, patrones en mosaico',
          competitor: 'Ninguna',
        },
        {
          feature: 'Edición de imágenes/capturas',
          frame: 'Incluida, junto al editor de código',
          competitor: 'Solo código — sin modo de imagen',
        },
        {
          feature: 'Maqueta de tarjeta de tweet',
          frame: 'Incluida — avatar, insignia, usuario, estadísticas editables, temas claro y oscuro',
          competitor: 'No es una función documentada',
        },
        {
          feature: 'Precio',
          frame: 'Gratis, Pro es una compra única',
          competitor: 'Gratis',
        },
      ],
      honestNote:
        'Ray.so es de verdad el camino más rápido entre una selección de código y una imagen limpia, y es gratis. También renderiza en tu navegador, así que ninguna de las dos manda tu código a otro sitio para convertirlo en imagen. Frame te pide algo más de entrada, porque es un editor completo y no un generador de un clic, y a cambio te da maquetas de dispositivos, anotaciones, marcas de agua y un editor de imágenes que Ray.so no pretende cubrir.',
      sections: [
        {
          heading: "Ray.so también renderiza en local",
          body: [
            "Igual que Carbon, Ray.so exporta en el navegador. Su botón de exportar llama a html-to-image sobre el nodo renderizado y te devuelve un PNG o un SVG. Raycast publica todo el proyecto en GitHub con licencia MIT, así que esto se puede comprobar en lugar de tener que fiarte de ninguno de los dos.",
            "Por tanto, la diferencia entre ambos no está en adónde va tu código. Está en que Ray.so rasteriza el DOM mientras Frame compone en canvas, y en que Ray.so es deliberadamente una herramienta de una sola pantalla mientras Frame es un editor.",
          ],
        },
        {
          heading: "Generador de un clic frente a editor",
          body: [
            "Ray.so es el camino más rápido de toda esta categoría entre una selección de código y algo que puedes pegar en un hilo. Eliges un degradado, eliges un tema, copias. No hay casi nada que aprender ni casi nada que decidir, y ese es precisamente el objetivo.",
            "Frame te pide más. Hay paneles, ajustes, capas y opciones de exportación, porque da por hecho que quieres controlar el resultado en lugar de aceptar un buen valor por defecto. Si lo que necesitas de verdad es una imagen de código limpia en diez segundos, toda esa superficie extra es un coste, no una ventaja.",
            "Donde compensa es en todo lo que Ray.so no intenta: meter una captura en un marco de MacBook, dibujar una flecha señalando aquello de lo que hablas, tapar una clave de API o estampar tu identidad en un trabajo antes de publicarlo.",
          ],
        },
        {
          heading: "El contexto de Raycast",
          body: [
            "Ray.so es una de las herramientas que Raycast mantiene junto a su lanzador, y eso le beneficia. Es gratis, es rápido, se mantiene al día y, si ya vives dentro de Raycast, lo tienes a una pulsación de distancia.",
            "Frame es un proyecto en solitario con una licencia de pago único y sin ningún lanzador al que engancharse. Se gana un sitio en tu equipo cubriendo más terreno, no siendo mejor en el trabajo concreto de Ray.so.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Elige Ray.so si",
        competitorBody:
          "La rapidez es todo el requisito. Quieres una imagen de código limpia y con buen aspecto sin configurar nada, no cuesta nada y nunca necesitas meter una captura dentro de un dispositivo.",
        frameHeading: "Elige Frame si",
        frameBody:
          "Necesitas que el resultado sea concreto y no solo bonito: un dispositivo determinado, una anotación señalando una línea, una censura sobre una clave, una marca de agua. Eso es trabajo de editor, y Ray.so no es un editor.",
      },
      faqHeading: "Preguntas sobre Ray.so y Frame",
      faq: [
        {
          q: "¿Ray.so envía mi código a algún sitio?",
          a: "No para generar la imagen. La exportación se ejecuta en tu navegador con html-to-image, y el código fuente es público en GitHub si quieres confirmarlo.",
        },
        {
          q: "¿Necesito Raycast para usar Ray.so?",
          a: "No. Funciona como una web normal. Tener Raycast instalado solo hace que llegues antes.",
        },
        {
          q: "¿Frame es más lento de usar que Ray.so?",
          a: "Para un fragmento de código simple, sí. Frame abre un editor en lugar de una sola pantalla. A cambio obtienes control sobre la exportación y la opción de hacer cosas que Ray.so ni contempla.",
        },
        {
          q: "¿Ray.so puede anotar o enmarcar una captura?",
          a: "No. Es un generador de imágenes de código. Las capturas, los marcos de dispositivo y las anotaciones quedan fuera de su alcance.",
        },
      ],
    },
    screely: {
      name: 'Screely',
      intro:
        'Screely convierte capturas de páginas web en maquetas de navegador pulidas y, al igual que Frame, mantiene todo local en tu dispositivo. Aquí es donde realmente se diferencian.',
      rows: [
        {
          feature: 'Dónde se procesan las capturas',
          frame: 'Localmente, en tu navegador',
          competitor: 'Localmente, en tu navegador',
        },
        {
          feature: 'Editor de fragmentos de código',
          frame: 'Resaltado de sintaxis, insignias de lenguaje, estilos de ventana',
          competitor: 'No es su enfoque — está pensado para capturas de páginas web/imágenes',
        },
        {
          feature: 'Maquetas de dispositivos',
          frame: 'MacBook, iPhone, Apple Watch, además de marcos de navegador y terminal',
          competitor: 'Principalmente marcos de ventana de navegador',
        },
        {
          feature: 'Anotación y censura',
          frame: 'Texto, recuadros, flechas, pasos numerados, herramienta de censura',
          competitor: 'Texto, flechas, formas, herramienta de desenfoque',
        },
        {
          feature: 'Marca de agua',
          frame: 'Texto, usuario, logo, QR, patrones en mosaico',
          competitor: 'No es una función documentada',
        },
        {
          feature: 'Maqueta de tarjeta de tweet',
          frame: 'Incluida — avatar, insignia, usuario, estadísticas editables, temas claro y oscuro',
          competitor: 'No es una función documentada',
        },
        {
          feature: 'Precio',
          frame: 'Gratis, Pro es una compra única',
          competitor: 'Gratis',
        },
      ],
      honestNote:
        'Screely es excelente en exactamente aquello para lo que fue creado: pulir capturas de páginas web hasta convertirlas en maquetas de navegador, y comparte con Frame ese enfoque local y sin subidas. Donde Frame se diferencia es en el lado del código: resaltado de sintaxis, insignias de lenguaje y estilos de ventana pensados específicamente para compartir código, que no es para lo que Screely fue diseñado.',
      sections: [
        {
          heading: "Screely se mudó, y ahora también es una extensión",
          body: [
            "Si tienes un marcador antiguo de screely.com, deja de usarlo. Ese dominio ya no pertenece al proyecto y hoy aloja un sitio de apuestas deportivas sin relación alguna. Screely está en screely.app.",
            "El cambio de fondo es en qué se ha convertido. Screely es ahora una aplicación web y también una extensión de Chrome, y la extensión captura además de editar: área visible, selección personalizada, página completa o un único elemento. También graba la pestaña activa en MP4 durante hasta tres minutos a 720p o 1080p con audio. Su ficha en la tienda muestra unos mil usuarios y una valoración de 5.0, con una actualización tan reciente como agosto.",
            "Eso lo convierte en lo más parecido a un competidor directo que tiene Frame y, por cualquier medida que cuente hoy, en el más asentado de los dos.",
          ],
        },
        {
          heading: "Dos herramientas que tomaron la misma decisión de arquitectura",
          body: [
            "La documentación de Screely dice que las imágenes se procesan por completo dentro del navegador usando canvas y que nunca se suben, transmiten ni almacenan. Es la misma postura que toma Frame, a la que se llegó por separado.",
            "Así que ser local no es un factor diferencial entre estos dos. Los dos componen en canvas, los dos dejan tus capturas en tu equipo y ninguno exige una cuenta. Si tu motivo para buscar es la privacidad, los dos te responden.",
            "Screely va más lejos en un aspecto: es completamente gratis, sin registro, sin marca de agua y sin límites de exportación. Frame tiene un plan gratuito, pero las maquetas de dispositivo más allá de lo básico, las marcas de agua, la herramienta de censura y la exportación por lotes están detrás de una licencia de pago único.",
          ],
        },
        {
          heading: "Dónde se separan de verdad",
          body: [
            "El código es la línea más clara. Screely no tiene editor de fragmentos, ni resaltado de sintaxis, ni distintivos de lenguaje, porque se construyó en torno a capturas de webs y de aplicaciones. El segundo editor de Frame existe justo para eso, con temas de Prism, resaltado de líneas y ventanas pensadas para leer código.",
            "Los marcos difieren en tipo, no en cantidad. Screely te da ventanas de macOS y de Windows. Frame te da maquetas de dispositivos físicos, un MacBook, un iPhone, un Apple Watch, además de marcos de navegador y de terminal, y inclinación 3D sobre cualquiera de ellos.",
            "Frame hace también tarjetas de tuit y marcas de agua, y Screely no ofrece ninguna de las dos. Screely graba pantalla y exporta a PDF, y Frame no hace ninguna de las dos. Son carencias reales en ambos lados, no asimetrías de marketing.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Elige Screely si",
        competitorBody:
          "Quieres capturar y editar en el mismo sitio, necesitas grabar una pestaña en vídeo, o prefieres algo gratis y sin planes de ningún tipo. Es maduro, se mantiene al día y no cuesta nada.",
        frameHeading: "Elige Frame si",
        frameBody:
          "Compartes código además de capturas, o necesitas maquetas de dispositivos físicos, tarjetas de tuit o marcas de agua. Eso es lo que Screely no se propone hacer.",
      },
      faqHeading: "Preguntas sobre Screely y Frame",
      faq: [
        {
          q: "¿screely.com sigue siendo Screely?",
          a: "No. El proyecto está ahora en screely.app. El antiguo dominio .com ha cambiado de manos y aloja algo sin relación, así que actualiza tus marcadores.",
        },
        {
          q: "¿Screely es gratis de verdad?",
          a: "Sí. Su web dice sin registro, sin marca de agua y sin límites de exportación. Es la opción más barata, y ese es un punto justo en contra del plan de pago de Frame.",
        },
        {
          q: "¿Screely puede hacer capturas de código?",
          a: "No. No tiene resaltado de sintaxis ni editor de código. Si las imágenes de código son parte habitual de lo que publicas, ese es el motivo principal para mirar Frame.",
        },
        {
          q: "¿Frame puede grabar mi pantalla?",
          a: "No. Frame edita imágenes fijas. Screely graba la pestaña activa en MP4, que es una capacidad real que Frame no tiene.",
        },
        {
          q: "¿Los dos mantienen privadas mis capturas?",
          a: "Sí. Los dos procesan las imágenes en local en el navegador con canvas y ninguno las sube. La privacidad no es el eje en el que se diferencian.",
        },
      ],
    },
    'shots-so': {
      name: 'Shots.so',
      intro:
        'Shots.so lleva cuatro años de desarrollo detrás — una gran biblioteca de dispositivos, escenas 3D y exportaciones animadas en los planes de pago. Así se compara con Frame.',
      rows: [
        {
          feature: 'Biblioteca de dispositivos',
          frame: 'MacBook, iPhone, Apple Watch, marcos de navegador y terminal',
          competitor: 'iPhone, Android, iPad, iMac, Apple Watch, navegador — una biblioteca más grande',
        },
        {
          feature: 'Editor de fragmentos de código',
          frame: 'Resaltado de sintaxis, insignias de lenguaje, estilos de ventana',
          competitor: 'No es su enfoque — es una herramienta general de capturas/maquetas',
        },
        {
          feature: 'Exportación animada / video',
          frame: 'Tarjetas de tweet con exportación de video adjunta en MP4; todavía sin exportación animada general',
          competitor: 'Compatible en los planes de pago',
        },
        {
          feature: 'Anotaciones',
          frame: 'Texto, recuadros, flechas, pasos numerados, herramienta de censura',
          competitor: 'No es una función documentada',
        },
        {
          feature: 'Formato',
          frame: 'Extensión de Chrome',
          competitor: 'Aplicación web alojada',
        },
        {
          feature: 'Maqueta de tarjeta de tweet',
          frame: 'Incluida — avatar, insignia, usuario, estadísticas editables, temas claro y oscuro',
          competitor: 'Formatos predefinidos para redes sociales, no una tarjeta de tweet con estilo',
        },
        {
          feature: 'Precio',
          frame: 'Gratis, Pro es una compra única',
          competitor: 'Plan gratuito con marca de agua; planes de pago de $8–12/mes',
        },
      ],
      honestNote:
        'Si necesitas la biblioteca de dispositivos más grande o quieres exportaciones animadas generales más allá de las tarjetas de tweet, se nota la madurez de Shots.so, es la mejor opción si esa es tu prioridad. Frame es más específico por diseño: una extensión de Chrome para desarrolladores que combina capturas de código con maquetas de dispositivos en una sola herramienta, con un precio único en lugar de una suscripción.',
      sections: [
        {
          heading: "Una aplicación web madura con una suscripción detrás",
          body: [
            "Shots.so lleva años de desarrollo encima y su catálogo de dispositivos lo demuestra: iPhone, Android, iPad, iMac, Apple Watch y marcos de navegador, con fondos que van de degradados y efectos de cristal a fotos de Unsplash y rellenos generados por IA a partir de los colores de tu imagen.",
            "Funciona como aplicación web alojada, no como extensión, y su precio es una suscripción. Hay un plan gratuito, y los de pago rondan los ocho y los doce dólares al mes, con exportaciones de mayor resolución, WebP, vídeo transparente y las maquetas animadas por las que se le conoce.",
            "Frame es una extensión de Chrome con un plan gratuito y un único pago. A lo largo de un par de años esa diferencia se acumula, pero también compras menos: el trabajo de animación de Shots.so no tiene equivalente en Frame.",
          ],
        },
        {
          heading: "La animación es la carencia real",
          body: [
            "Lo que Shots.so hace y Frame sencillamente no puede hacer es movimiento. Las maquetas animadas, los efectos de zoom en vídeo y los ajustes de movimiento son su rasgo distintivo, y si produces vídeos de lanzamiento o piezas sociales animadas es la elección evidente.",
            "Frame exporta imágenes fijas, con una única excepción estrecha: una tarjeta de tuit con un vídeo adjunto se puede exportar como MP4. Eso no es una función general de animación y presentarlo como tal sería engañoso.",
          ],
        },
        {
          heading: "Lo que aporta Frame y Shots.so no",
          body: [
            "Código, antes que nada. Shots.so no tiene editor de fragmentos ni resaltado de sintaxis. El segundo editor de Frame está hecho para eso.",
            "La anotación es la otra carencia. Shots.so es una herramienta de maquetas y fondos, no de marcado, así que no hay flechas, ni pasos numerados, ni censura. Si tus capturas necesitan señalar algo, o tapar una clave de API antes de publicar, ese trabajo tiene que ocurrir en otro sitio.",
            "Y Frame se ejecuta donde ya están tus capturas. Una extensión en el navegador en el que estás trabajando elimina el viaje de ida y vuelta de subir y descargar que exige una aplicación web alojada.",
          ],
        },
      ],
      verdict: {
        competitorHeading: "Elige Shots.so si",
        competitorBody:
          "Necesitas maquetas animadas o en vídeo, o quieres el catálogo de dispositivos más amplio disponible. Su madurez es real y una suscripción es razonable si produces este tipo de piezas con regularidad.",
        frameHeading: "Elige Frame si",
        frameBody:
          "Quieres capturas de código e imágenes de producto desde una sola herramienta, necesitas anotación y censura, o prefieres pagar una vez antes que cada mes por algo que usas unas pocas veces al mes.",
      },
      faqHeading: "Preguntas sobre Shots.so y Frame",
      faq: [
        {
          q: "¿Shots.so es gratis?",
          a: "Hay un plan gratuito, y los de pago rondan los ocho a doce dólares al mes por exportaciones de mayor resolución, más formatos y las funciones de animación. Consulta su página de precios para ver las cifras actuales.",
        },
        {
          q: "¿Frame puede exportar animaciones?",
          a: "En general no. Una tarjeta de tuit con vídeo adjunto se exporta como MP4, pero no hay maquetas animadas ni ajustes de movimiento. Shots.so es la herramienta adecuada para eso.",
        },
        {
          q: "¿Shots.so maneja fragmentos de código?",
          a: "No. Está hecho para maquetas de dispositivo y fondos. Las imágenes de código quedan fuera de su alcance.",
        },
        {
          q: "¿Cuál sale más barato?",
          a: "Frame, si lo usas más de unos meses, porque Pro es un pago único. Shots.so cobra cada mes. Que eso importe depende de si necesitas las funciones de animación que Frame no tiene.",
        },
      ],
    },
  },

  privacy: {
    eyebrow: 'Legal',
    title: 'Política de Privacidad',
    updatedLabel: 'Última actualización:',
    updatedDate: '11 de septiembre de 2026',
    intro:
      'Portfolio Frame es una extensión de Chrome que convierte capturas de pantalla en imágenes pulidas usando maquetas de dispositivos, fondos y anotaciones. Esta página explica qué datos maneja la extensión y cómo.',
    sections: {
      localData: {
        heading: 'Qué hace Portfolio Frame de forma local',
        body: 'Toda la edición de imágenes ocurre dentro de tu navegador. Las capturas, maquetas, fondos y anotaciones se procesan y exportan en tu dispositivo. Portfolio Frame no sube tus imágenes ni capturas a ningún servidor, y no tenemos acceso al contenido que creas con la extensión.',
      },
      storedData: {
        heading: 'Datos almacenados localmente',
        intro: 'Portfolio Frame usa el local storage de Chrome para guardar:',
        items: [
          'Tus preferencias del editor (fondo seleccionado, paleta, dispositivo de maqueta y ajustes similares)',
          'El estado de activación de tu licencia Pro, si has comprado una licencia',
        ],
        outro:
          'Estos datos se quedan en tu dispositivo y solo se sincronizan si tienes activada la sincronización propia de tu navegador; Portfolio Frame no los transmite por su cuenta.',
      },
      licenseActivation: {
        heading: 'Activación de la licencia Pro',
        body: 'Portfolio Frame Pro se desbloquea con una clave de licencia de pago único emitida a través de Dodo Payments, nuestro procesador de pagos. Cuando activas una clave de licencia, la extensión envía la propia clave de licencia, junto con una breve etiqueta de dispositivo, a los servidores de Dodo Payments para verificar la clave y registrar esa activación. La etiqueta de dispositivo es un identificador aleatorio generado y almacenado en tu dispositivo — no se deriva de ningún ID de hardware, cuenta o información personal — y permite que Dodo Payments haga seguimiento de en cuáles de tus dispositivos se ha activado la licencia, ya que una misma licencia puede usarse en más de un dispositivo. La extensión no envía tu dirección de correo electrónico como parte de la activación. Los datos de pago (números de tarjeta, dirección de facturación) los gestiona por completo la propia página de pago de Dodo Payments, y Portfolio Frame nunca los ve ni los almacena.',
        linkIntro: 'Consulta la propia política de privacidad de Dodo Payments para saber cómo manejan estos datos:',
      },
      whatWeDontDo: {
        heading: 'Lo que no hacemos',
        items: [
          'No vendemos ni compartimos tus datos con anunciantes ni con intermediarios de datos.',
          'No rastreamos tu actividad de navegación fuera de la pestaña que eliges activamente capturar con la extensión.',
          'No usamos tus datos para crear perfiles de usuario ni para fines ajenos a la función principal de la extensión.',
        ],
      },
      permissions: {
        heading: 'Permisos',
        intro:
          'Portfolio Frame solicita los siguientes permisos del navegador, cada uno usado únicamente para el propósito indicado:',
        items: [
          {
            title: 'activeTab / scripting',
            desc: 'para capturar la pestaña que elijas editar y para ejecutar el selector de elementos en la página, solo cuando invocas la extensión',
          },
          {
            title: 'downloads',
            desc: 'para guardar las imágenes exportadas y los archivos ZIP de exportación por lotes en la ubicación que elijas',
          },
          {
            title: 'storage',
            desc: 'para recordar tus preferencias del editor y el estado de tu licencia entre sesiones',
          },
          {
            title: 'unlimitedStorage',
            desc: 'para almacenar capturas y datos de exportación que pueden superar el límite de almacenamiento predeterminado de Chrome',
          },
          {
            title: 'contextMenus',
            desc: 'para añadir una opción en el clic derecho que permita iniciar una captura directamente desde la página',
          },
        ],
        outro:
          'Copiar una exportación al portapapeles y guardar archivos en el disco usan las API estándar de portapapeles y descarga de archivos de tu navegador, no un permiso independiente de la extensión.',
      },
      changes: {
        heading: 'Cambios en esta política',
        body: 'Si nuestras prácticas de datos cambian, actualizaremos esta página y, cuando sea necesario, lo indicaremos de forma visible dentro de la propia extensión.',
      },
      contact: {
        heading: 'Contacto',
        body: 'Preguntas sobre esta política:',
      },
    },
  },

  localeSwitcher: {
    label: 'Idioma',
  },
} satisfies Dictionary
