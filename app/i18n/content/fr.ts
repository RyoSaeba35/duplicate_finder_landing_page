import type { LandingContent } from "../types";

const fr: LandingContent = {
  meta: {
    title: "Duplicate Finder — trouvez et récupérez l'espace de vos fichiers en double sur Windows",
    description:
      "Analysez n'importe quel dossier ou disque, comparez les doublons côte à côte avec un aperçu en direct, et déplacez-les en toute sécurité vers la corbeille. 15 € en une fois, essai gratuit de 14 jours.",
  },
  nav: { howItWorks: "Fonctionnement", pricing: "Tarif", faq: "FAQ", download: "Télécharger" },
  hero: {
    eyebrow: "Pour Windows · 15 € en une fois · Essai gratuit de 14 jours",
    headlineLine1: "Trouvez vos fichiers en",
    headlineEm: "double",
    sub: "Analyse n'importe quel dossier ou disque, vous montre exactement ce qui est identique côte à côte, et déplace les doublons vers la corbeille — jamais de suppression définitive.",
    ctaPrimary: "Télécharger pour Windows",
    ctaSecondary: "Voir comment ça marche",
    ctaNote: "Toutes les fonctionnalités pendant 14 jours. Sans compte, sans carte bancaire.",
    securityNote:
      "Premier lancement : Windows peut afficher un message « Windows a protégé votre ordinateur » — c'est normal pour les développeurs indépendants. Cliquez sur « Plus d'infos » → « Exécuter quand même ».",
    demoMeta: "3 fichiers identiques · 158,3 Ko chacun",
    demoReclaimable: "158,3 Ko récupérables",
    counterLabel: "récupérables sur cette analyse",
    cardKeep: "Conserver",
    cardDuplicate: "Doublon",
    cardMarkForTrash: "marquer pour la corbeille",
    cardOpenFile: "Ouvrir le fichier ↗",
    cardKeepInstead: "Conserver celui-ci à la place →",
  },
  howItWorks: {
    eyebrow: "Fonctionnement",
    title: "Trois étapes, rien n'est définitif tant que vous ne le décidez pas.",
    steps: [
      {
        num: "01 — Analyser",
        title: "Choisissez un dossier, un disque, ou tout votre PC",
        body: "Duplicate Finder hache chaque fichier pour trouver des correspondances exactes — pas seulement des noms ou des tailles similaires.",
      },
      {
        num: "02 — Comparer",
        title: "Visualisez les deux copies côte à côte",
        body: "Taille du fichier, date de modification, et un aperçu en direct pour les images, PDF, documents Word et feuilles Excel — avant toute décision.",
      },
      {
        num: "03 — Récupérer",
        title: "Gardez-en un, supprimez le reste",
        body: "Les doublons vont dans la corbeille, jamais de suppression définitive. Vous pouvez toujours changer d'avis.",
      },
    ],
  },
  features: {
    eyebrow: "Fonctionnalités",
    title: "Conçu pour vraiment trouver les doublons, pas pour deviner.",
    items: [
      {
        title: "Correspondance octet par octet",
        body: "Chaque fichier est haché, donc les copies renommées ou déplacées sont quand même détectées — pas seulement les fichiers avec des noms identiques.",
      },
      {
        title: "Aperçus en direct",
        body: "Images, PDF, documents Word, feuilles Excel et fichiers de code s'affichent directement dans la vue de comparaison.",
      },
      {
        title: "Sécurisé par la corbeille",
        body: "Chaque suppression passe par la corbeille de Windows. Rien n'est jamais supprimé définitivement par l'application elle-même.",
      },
      {
        title: "Analysez un dossier ou un disque entier",
        body: "D'un simple dossier Téléchargements jusqu'à tout votre disque C:\\, selon la portée que vous choisissez.",
      },
    ],
  },
  pricing: {
    amount: "15 €",
    terms: "Achat unique · sans abonnement",
    list: [
      "Toutes les fonctionnalités pendant 14 jours, gratuitement",
      "Aucun compte ni carte bancaire pour l'essai",
      "Une licence, à vous pour toujours",
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
        a: "Seulement les fichiers que vous marquez explicitement, et seulement après les avoir comparés côte à côte. Les correspondances sont trouvées en hachant le contenu des fichiers, donc seuls les vrais doublons octet par octet apparaissent — et chaque suppression va dans la corbeille, jamais définitive.",
      },
      {
        q: "Fonctionne-t-il sur Mac ou Linux ?",
        a: "Pas encore — Duplicate Finder est uniquement disponible sur Windows pour le moment.",
      },
      {
        q: "Que se passe-t-il après l'essai de 14 jours ?",
        a: "L'application bloque l'analyse jusqu'à ce que vous saisissiez une clé de licence. Vos données et paramètres d'essai ne sont pas affectés — activer une clé débloque simplement l'application à nouveau.",
      },
      {
        q: "Pourquoi Windows affiche-t-il un avertissement à l'installation ?",
        a: "Parce que l'application n'est pas encore signée avec un certificat payant — une étape que la plupart des développeurs indépendants sautent avant leurs premières ventes. Windows affiche ce message pour tout éditeur non reconnu, que le logiciel soit sûr ou non ; ce n'est pas un jugement sur cette application en particulier. Cliquez sur « Plus d'infos » puis « Exécuter quand même » pour continuer. Le code source est public sur GitHub si vous souhaitez vérifier ce qu'elle fait avant d'installer.",
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
