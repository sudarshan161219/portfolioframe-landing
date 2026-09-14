import type { Dictionary } from '../types'

export const es = {
  meta: {
    home: {
      title: 'Portfolio Frame — un cuarto oscuro para capturas y código',
      description:
        'Frame es una extensión de Chrome que convierte capturas de pantalla y código en bruto en imágenes listas para publicar. Sin cuenta, sin subir nada: todo se queda en tu dispositivo.',
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
    eyebrow: 'Un estudio 100% local para capturas y código',
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
        tag: 'Diseño · Fuente',
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
        tag: 'Frame',
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
        tag: 'Social',
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
        tag: 'Fondo',
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
        tag: 'Anotar',
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
        tag: 'Marca',
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
          feature: 'Dónde se procesa el código',
          frame: 'Localmente, en tu navegador',
          competitor: 'Se envía al servidor de Carbon',
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
        'Si solo necesitas una captura de código rápida y quieres la mayor variedad de temas, Carbon es difícil de superar, y no cuesta nada. Frame cambia parte de esa variedad de temas por procesamiento 100% local, maquetas de dispositivos y herramientas de anotación, algo que vale la pena si compartes capturas completas de producto, no solo código.',
    },
    'ray-so': {
      name: 'Ray.so',
      intro:
        'Ray.so (de Raycast) es el camino más rápido para convertir una selección de código en un PNG limpio con fondo degradado. Así se compara con Frame.',
      rows: [
        {
          feature: 'Dónde se procesa el código',
          frame: 'Localmente, en tu navegador',
          competitor: 'Se envía al servidor de Ray.so',
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
        'Ray.so es de verdad la herramienta de un clic más rápida si lo único que necesitas es una imagen de código limpia, y es gratis. Frame te pide un poco más de entrada, es un editor completo, no un generador de un clic, pero añade maquetas, anotaciones y procesamiento 100% local que Ray.so no ofrece.',
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
