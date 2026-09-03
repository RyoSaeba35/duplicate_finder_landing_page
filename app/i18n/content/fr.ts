import type { LandingContent } from "../types";

const fr: LandingContent = {
  meta: {
    title: "Duplicate Finder — trouvez et supprimez les fichiers en double sur Windows",
    description:
      "Analysez n'importe quel dossier ou disque, comparez les doublons côte à côte avec des aperçus en direct, et déplacez-les vers la Corbeille. Scan gratuit. €15 unique pour débloquer la suppression.",
  },
  nav: { howItWorks: "Comment ça marche", pricing: "Tarifs", faq: "FAQ", download: "Télécharger" },
  hero: {
    eyebrow: "Pour Windows · Scan gratuit · €15 unique pour supprimer",
    headlineLine1: "Trouvez vos fichiers",
    headlineEm: "en double",
    sub: "Analyse n'importe quel dossier ou disque, vous montre exactement ce qui est identique côte à côte, et déplace les doublons vers la Corbeille — aucune suppression définitive.",
    ctaPrimary: "Télécharger pour Windows",
    ctaStore: "Obtenir depuis le Microsoft Store",
    ctaSecondary: "Voir comment ça marche",
    ctaNote: "Scan gratuit pour toujours. Sans compte, sans carte bancaire. €15 une fois pour débloquer la suppression.",
    securityNote:
      "Premier lancement : Windows peut afficher une alerte « Windows a protégé votre PC » — c'est normal pour les développeurs indépendants. Cliquez sur Plus d'informations → Exécuter quand même.",
    demoMeta: "3 fichiers identiques · 158,3 Ko chacun",
    demoReclaimable: "158,3 Ko récupérables",
    counterLabel: "récupérables, ce scan",
    cardKeep: "Conserver",
    cardDuplicate: "Doublon",
    cardMarkForTrash: "marquer pour la corbeille",
    cardOpenFile: "Ouvrir ↗",
    cardKeepInstead: "Conserver celui-ci →",
  },
  howItWorks: {
    eyebrow: "Comment ça marche",
    title: "Trois étapes, rien de définitif avant votre confirmation.",
    steps: [
      {
        num: "01 — Analyser",
        title: "Choisissez un dossier, un disque ou tout votre PC",
        body: "Duplicate Finder calcule l'empreinte de chaque fichier pour trouver les correspondances exactes. L'analyse parallèle sur tous les cœurs CPU reste rapide même sur les grands disques.",
      },
      {
        num: "02 — Comparer",
        title: "Voyez les deux copies côte à côte",
        body: "Taille, date de modification et aperçu en direct pour les images, PDF, Word et Excel — avant de décider quoi que ce soit. La sélection automatique par règle (garder le plus récent, le plus ancien ou le chemin le plus court) gère tout en un clic.",
      },
      {
        num: "03 — Récupérer",
        title: "Gardez-en un, supprimez le reste",
        body: "Les doublons vont dans la Corbeille, jamais une suppression définitive. Vous pouvez changer d'avis à tout moment.",
      },
    ],
  },
  features: {
    eyebrow: "Ce qu'il fait",
    title: "Conçu pour vraiment trouver les doublons, pas juste deviner.",
    items: [
      {
        title: "Comparaison octet par octet",
        body: "Chaque fichier est haché, donc les copies renommées ou déplacées sont détectées — pas seulement celles avec des noms identiques.",
      },
      {
        title: "Aperçus en direct",
        body: "Images, PDF, documents Word, feuilles Excel et fichiers de code s'affichent directement dans la vue de comparaison.",
      },
      {
        title: "Suppression via la Corbeille",
        body: "Toute suppression passe par la Corbeille de Windows. Rien n'est jamais définitivement effacé par l'application.",
      },
      {
        title: "Analyse parallèle — scans plus rapides",
        body: "Le SHA-256 s'exécute simultanément sur tous les cœurs CPU. Les grands disques sont analysés beaucoup plus rapidement.",
      },
      {
        title: "Sélection automatique par règle",
        body: "Gardez la copie la plus récente, la plus ancienne ou celle avec le chemin le plus court sur tous les groupes en un clic — sans revoir chaque groupe manuellement.",
      },
      {
        title: "Recherche, filtres et tri",
        body: "Tapez un nom de fichier ou un chemin pour filtrer instantanément des centaines de groupes. Triez par taille, nom ou date. Filtrez par extension.",
      },
      {
        title: "Export CSV",
        body: "Téléchargez un tableau complet de tous les groupes de doublons — utile pour auditer un grand disque avant de supprimer quoi que ce soit.",
      },
      {
        title: "Analyse d'un dossier ou d'un disque entier",
        body: "Du simple dossier Téléchargements à tout votre lecteur C:\\, à la portée que vous choisissez.",
      },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "Achat unique · scan gratuit pour toujours",
    list: [
      "Analysez n'importe quel dossier ou disque — gratuit, pour toujours",
      "Voyez tous les doublons avant de décider quoi que ce soit",
      "€15 une fois pour débloquer la suppression — à vie",
      "Sans abonnement, sans compte",
    ],
    ctaPrimary: "Télécharger pour Windows",
    ctaSecondary: "Acheter une licence →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Avant de télécharger",
    items: [
      {
        q: "Va-t-il supprimer des fichiers dont j'ai besoin ?",
        a: "Uniquement les fichiers que vous marquez explicitement, et seulement après les avoir comparés côte à côte. Les correspondances sont trouvées par hachage du contenu, donc seuls les vrais doublons apparaissent — et chaque suppression va dans la Corbeille, pas une suppression définitive.",
      },
      {
        q: "Fonctionne-t-il sur Mac ou Linux ?",
        a: "Pas encore — Duplicate Finder est uniquement pour Windows pour l'instant.",
      },
      {
        q: "Que se passe-t-il après les 14 jours d'essai ?",
        a: "Le scan reste gratuit — vous pouvez analyser n'importe quel dossier et voir tous vos doublons sans frais, pour toujours. La suppression est verrouillée après l'essai. Une licence à €15 unique débloque la suppression définitivement.",
      },
      {
        q: "Pourquoi Windows affiche-t-il un avertissement à l'installation ?",
        a: "Parce que l'application n'est pas encore signée avec un certificat de signature de code payant — ce que la plupart des développeurs indépendants omettent avant leurs premières ventes. Windows signale ainsi tout éditeur non reconnu. Cliquez sur « Plus d'informations » puis « Exécuter quand même ». Le code source est public sur GitHub si vous souhaitez vérifier ce que fait l'application avant de l'installer.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Journal des modifications",
    buy: "Acheter",
    privacy: "Confidentialité",
    terms: "Conditions",
  },
};

export default fr;
