import type { LandingContent } from "../types";

const es: LandingContent = {
  meta: {
    title: "Duplicate Finder — encuentra y elimina archivos duplicados en Windows",
    description:
      "Escanea cualquier carpeta o unidad, compara duplicados lado a lado con vistas previas en vivo, y muévelos a la Papelera de reciclaje. Escaneo gratuito. €15 pago único para desbloquear la eliminación.",
  },
  nav: { howItWorks: "Cómo funciona", pricing: "Precios", faq: "FAQ", download: "Descargar" },
  hero: {
    eyebrow: "Para Windows · Escaneo gratuito · €15 pago único para eliminar",
    headlineLine1: "Encuentra tus archivos",
    headlineEm: "duplicados",
    sub: "Escanea cualquier carpeta o unidad, te muestra exactamente qué es idéntico lado a lado, y mueve los duplicados a la Papelera de reciclaje — nunca una eliminación permanente.",
    ctaPrimary: "Descargar para Windows",
    ctaStore: "Obtener desde Microsoft Store",
    ctaSecondary: "Ver cómo funciona",
    ctaNote: "Escaneo gratuito para siempre. Sin cuenta, sin tarjeta de crédito. €15 una vez para desbloquear la eliminación.",
    securityNote:
      "Primer inicio: Windows puede mostrar una advertencia \"Windows protegió tu PC\" — esto es normal para desarrolladores independientes. Haz clic en Más información → Ejecutar de todas formas.",
    demoMeta: "3 archivos idénticos · 158,3 KB cada uno",
    demoReclaimable: "158,3 KB recuperables",
    counterLabel: "recuperables, este escaneo",
    cardKeep: "Conservar",
    cardDuplicate: "Duplicado",
    cardMarkForTrash: "marcar para papelera",
    cardOpenFile: "Abrir archivo ↗",
    cardKeepInstead: "Conservar este en su lugar →",
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos, nada permanente hasta que lo confirmes.",
    steps: [
      {
        num: "01 — Escanear",
        title: "Elige una carpeta, una unidad o todo tu PC",
        body: "Duplicate Finder aplica hash a cada archivo para encontrar coincidencias exactas — no solo nombres o tamaños similares. El hashing paralelo en todos los núcleos de CPU lo mantiene rápido incluso en unidades grandes.",
      },
      {
        num: "02 — Comparar",
        title: "Ve ambas copias lado a lado",
        body: "Tamaño de archivo, fecha de modificación y vista previa en vivo para imágenes, PDFs, documentos Word y hojas Excel — antes de decidir nada. La selección automática por regla (conservar el más nuevo, más antiguo o ruta más corta) lo gestiona todo de un clic.",
      },
      {
        num: "03 — Recuperar",
        title: "Conserva uno, elimina el resto",
        body: "Los duplicados van a la Papelera de reciclaje, nunca una eliminación permanente. Puedes cambiar de opinión en cualquier momento.",
      },
    ],
  },
  features: {
    eyebrow: "Qué hace",
    title: "Diseñado para encontrar duplicados de verdad, no adivinar.",
    items: [
      {
        title: "Comparación byte a byte",
        body: "Cada archivo recibe un hash, por lo que las copias renombradas o reubicadas también se detectan — no solo archivos con nombres idénticos.",
      },
      {
        title: "Vistas previas en vivo",
        body: "Imágenes, PDFs, documentos Word, hojas Excel y archivos de código se renderizan directamente en la vista de comparación.",
      },
      {
        title: "Seguro con la Papelera de reciclaje",
        body: "Cada eliminación pasa por la Papelera de reciclaje de Windows. La aplicación nunca elimina nada de forma permanente.",
      },
      {
        title: "Hashing paralelo — escaneos más rápidos",
        body: "SHA-256 se ejecuta simultáneamente en todos los núcleos de CPU. Las unidades grandes que antes tardaban minutos terminan significativamente más rápido.",
      },
      {
        title: "Selección automática por regla",
        body: "Conserva la copia más nueva, más antigua o la de ruta más corta en todos los grupos duplicados de un clic — sin revisar cada grupo manualmente.",
      },
      {
        title: "Buscar, filtrar y ordenar",
        body: "Escribe un nombre de archivo o ruta para filtrar cientos de grupos al instante. Ordena por tamaño, nombre o fecha. Filtra por extensión de archivo.",
      },
      {
        title: "Exportar informe CSV",
        body: "Descarga una hoja de cálculo completa de todos los grupos duplicados — útil para auditar unidades grandes antes de eliminar nada.",
      },
      {
        title: "Escanea una carpeta o una unidad completa",
        body: "Desde una carpeta de Descargas hasta toda la unidad C:\\, en el ámbito que elijas.",
      },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "Pago único · escaneo gratuito para siempre",
    list: [
      "Escanea cualquier carpeta o unidad — gratis, para siempre",
      "Ve todos los duplicados antes de decidir nada",
      "€15 una vez para desbloquear la eliminación — tuyo para siempre",
      "Sin suscripción, sin cuenta requerida",
    ],
    ctaPrimary: "Descargar para Windows",
    ctaSecondary: "Comprar una licencia →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Antes de descargar",
    items: [
      {
        q: "¿Eliminará archivos que realmente necesito?",
        a: "Solo los archivos que marques explícitamente, y solo después de haberlos comparado lado a lado. Las coincidencias se encuentran aplicando hash al contenido del archivo, por lo que solo aparecen duplicados verdaderos byte a byte — y cada eliminación va a la Papelera de reciclaje, no es una eliminación permanente.",
      },
      {
        q: "¿Funciona en Mac o Linux?",
        a: "Aún no — Duplicate Finder es solo para Windows por ahora.",
      },
      {
        q: "¿Qué pasa después del período de prueba de 14 días?",
        a: "El escaneo sigue siendo gratuito — puedes escanear cualquier carpeta y ver todos tus duplicados sin costo, para siempre. La eliminación se bloquea después del período de prueba. Una licencia de €15 única desbloquea la eliminación de forma permanente.",
      },
      {
        q: "¿Por qué Windows muestra una advertencia al instalar?",
        a: "Porque la aplicación aún no está firmada con un certificado de firma de código de pago — algo que la mayoría de los desarrolladores independientes omiten antes de sus primeras ventas. Windows marca así a cualquier editor no reconocido. Haz clic en \"Más información\" y luego en \"Ejecutar de todas formas\". El código fuente es público en GitHub si deseas verificar qué hace la aplicación antes de instalarla.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Historial de cambios",
    buy: "Comprar",
    privacy: "Privacidad",
    terms: "Términos",
  },
};

export default es;
