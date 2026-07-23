import type { LandingContent } from "../types";

const es: LandingContent = {
  meta: {
    title: "Duplicate Finder — encuentra y recupera espacio de archivos duplicados en Windows",
    description:
      "Analice cualquier carpeta o unidad, compare duplicados uno junto al otro con vista previa en vivo, y muévalos de forma segura a la papelera de reciclaje. 15 € pago único, prueba gratuita de 14 días.",
  },
  nav: { howItWorks: "Cómo funciona", pricing: "Precio", faq: "Preguntas frecuentes", download: "Descargar" },
  hero: {
    eyebrow: "Para Windows · 15 € pago único · Prueba gratuita de 14 días",
    headlineLine1: "Encuentre sus archivos",
    headlineEm: "duplicados",
    sub: "Analiza cualquier carpeta o unidad, le muestra exactamente qué es idéntico uno junto al otro, y mueve los duplicados a la papelera de reciclaje — nunca una eliminación permanente.",
    ctaPrimary: "Descargar para Windows",
    ctaSecondary: "Ver cómo funciona",
    ctaNote: "Todas las funciones durante 14 días. Sin cuenta, sin tarjeta de crédito.",
    securityNote:
      "Primer inicio: Windows puede mostrar un aviso «Windows protegió su equipo» — esto es normal para desarrolladores independientes. Haga clic en «Más información» → «Ejecutar de todos modos».",
    demoMeta: "3 archivos idénticos · 158,3 KB cada uno",
    demoReclaimable: "158,3 KB recuperables",
    counterLabel: "recuperables en este análisis",
    cardKeep: "Conservar",
    cardDuplicate: "Duplicado",
    cardMarkForTrash: "marcar para la papelera",
    cardOpenFile: "Abrir archivo ↗",
    cardKeepInstead: "Conservar este en su lugar →",
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos, nada permanente hasta que usted lo decida.",
    steps: [
      {
        num: "01 — Analizar",
        title: "Elija una carpeta, una unidad o todo su PC",
        body: "Duplicate Finder procesa cada archivo para encontrar coincidencias exactas — no solo nombres o tamaños similares.",
      },
      {
        num: "02 — Comparar",
        title: "Vea ambas copias una junto a la otra",
        body: "Tamaño del archivo, fecha de modificación y una vista previa en vivo para imágenes, PDF, documentos de Word y hojas de Excel — antes de decidir nada.",
      },
      {
        num: "03 — Recuperar",
        title: "Conserve uno, elimine el resto",
        body: "Los duplicados van a la papelera de reciclaje, nunca una eliminación permanente. Puede cambiar de opinión en cualquier momento.",
      },
    ],
  },
  features: {
    eyebrow: "Qué hace",
    title: "Diseñado para encontrar duplicados de verdad, no para adivinar.",
    items: [
      {
        title: "Coincidencia byte por byte",
        body: "Cada archivo se procesa con hash, así que las copias renombradas o movidas igual se detectan — no solo archivos con nombres coincidentes.",
      },
      {
        title: "Vistas previas en vivo",
        body: "Imágenes, PDF, documentos de Word, hojas de Excel y archivos de código se muestran directamente en la vista de comparación.",
      },
      {
        title: "Seguro con la papelera de reciclaje",
        body: "Cada eliminación pasa por la papelera de reciclaje de Windows. La aplicación nunca elimina nada de forma permanente por sí misma.",
      },
      {
        title: "Analice una carpeta o una unidad completa",
        body: "Desde una sola carpeta de Descargas hasta toda su unidad C:\\, con el alcance que usted elija.",
      },
    ],
  },
  pricing: {
    amount: "15 €",
    terms: "Compra única · sin suscripción",
    list: [
      "Todas las funciones durante 14 días, gratis",
      "Sin cuenta ni tarjeta de crédito para la prueba",
      "Una licencia, suya para siempre",
    ],
    ctaPrimary: "Descargar para Windows",
    ctaSecondary: "Comprar una licencia →",
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Antes de descargar",
    items: [
      {
        q: "¿Eliminará archivos que realmente necesito?",
        a: "Solo los archivos que marque explícitamente, y solo después de haberlos comparado uno junto al otro. Las coincidencias se encuentran mediante el hash del contenido de los archivos, así que solo aparecen duplicados reales byte por byte — y cada eliminación va a la papelera de reciclaje, nunca es permanente.",
      },
      {
        q: "¿Funciona en Mac o Linux?",
        a: "Todavía no — Duplicate Finder es exclusivo de Windows por ahora.",
      },
      {
        q: "¿Qué pasa después de la prueba de 14 días?",
        a: "La aplicación bloquea el análisis hasta que introduzca una clave de licencia. Sus datos y configuración de prueba no se ven afectados — activar una clave simplemente la desbloquea de nuevo.",
      },
      {
        q: "¿Por qué Windows muestra una advertencia al instalarlo?",
        a: "Porque la aplicación aún no está firmada con un certificado de firma de código de pago — algo que la mayoría de los desarrolladores independientes omiten antes de sus primeras ventas. Windows marca así a cualquier editor no reconocido, sea o no seguro el software; no es un juicio sobre esta aplicación en particular. Haga clic en «Más información» y luego en «Ejecutar de todos modos» para continuar. El código fuente es público en GitHub si desea comprobar qué hace antes de instalarlo.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Registro de cambios",
    buy: "Comprar",
    privacy: "Privacidad",
    terms: "Términos",
  },
};

export default es;
