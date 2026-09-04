import type { LandingContent } from "../types";

const pt: LandingContent = {
  meta: {
    title: "Duplicate Finder — encontre e remova arquivos duplicados no Windows",
    description:
      "Digitalize qualquer pasta ou unidade, compare duplicatas lado a lado com pré-visualizações ao vivo e mova-as para a Lixeira com segurança. Digitalização gratuita. €15 pagamento único para desbloquear a exclusão.",
  },
  nav: { howItWorks: "Como funciona", pricing: "Preços", faq: "FAQ", download: "Baixar" },
  hero: {
    eyebrow: "14 dias de teste gratuito · Para Windows · €15 pagamento único para eliminar",
    headlineLine1: "Encontre seus arquivos",
    headlineEm: "duplicados",
    sub: "Verifica qualquer pasta ou unidade, mostra exatamente o que é idêntico lado a lado, e move os duplicados para o Lixo — nunca uma eliminação permanente. Experimenta a eliminação gratuitamente por 14 dias, sem necessidade de conta.",
    ctaPrimary: "Baixar para Windows",
    ctaStore: "Obter na Microsoft Store",
    ctaSecondary: "Ver como funciona",
    ctaNote: "14 dias de teste gratuito · Sem conta · Sem cartão de crédito · €15 uma vez para desbloquear para sempre",
    securityNote:
      "Primeiro acesso: o Windows pode exibir um aviso \"O Windows protegeu seu computador\" — isso é normal para desenvolvedores independentes. Clique em Mais informações → Executar mesmo assim.",
    demoMeta: "3 arquivos idênticos · 158,3 KB cada",
    demoReclaimable: "158,3 KB recuperáveis",
    counterLabel: "recuperáveis, esta digitalização",
    cardKeep: "Manter",
    cardDuplicate: "Duplicata",
    cardMarkForTrash: "marcar para lixeira",
    cardOpenFile: "Abrir arquivo ↗",
    cardKeepInstead: "Manter este em vez disso →",
  },
  howItWorks: {
    eyebrow: "Como funciona",
    title: "Três etapas, nada permanente até você confirmar.",
    steps: [
      {
        num: "01 — Digitalizar",
        title: "Escolha uma pasta, uma unidade ou todo o seu PC",
        body: "O Duplicate Finder aplica hash em cada arquivo para encontrar correspondências exatas — não apenas nomes ou tamanhos semelhantes. O hash paralelo em todos os núcleos de CPU mantém a velocidade mesmo em unidades grandes.",
      },
      {
        num: "02 — Comparar",
        title: "Veja ambas as cópias lado a lado",
        body: "Tamanho do arquivo, data de modificação e pré-visualização ao vivo para imagens, PDFs, documentos Word e planilhas Excel — antes de decidir qualquer coisa. A seleção automática por regra (manter o mais recente, o mais antigo ou o caminho mais curto) cuida de tudo de uma vez.",
      },
      {
        num: "03 — Recuperar",
        title: "Mantenha um, mova o resto",
        body: "As duplicatas vão para a Lixeira, nunca uma exclusão permanente. Mude de ideia a qualquer momento.",
      },
    ],
  },
  features: {
    eyebrow: "O que ele faz",
    title: "Criado para realmente encontrar duplicatas, não adivinhar.",
    items: [
      {
        title: "Comparação byte a byte",
        body: "Cada arquivo recebe um hash, então cópias renomeadas ou relocadas também são detectadas — não apenas arquivos com nomes idênticos.",
      },
      {
        title: "Pré-visualizações ao vivo",
        body: "Imagens, PDFs, documentos Word, planilhas Excel e arquivos de código são renderizados diretamente na visualização de comparação.",
      },
      {
        title: "Seguro com a Lixeira",
        body: "Cada exclusão passa pela Lixeira do Windows. O aplicativo nunca remove nada permanentemente.",
      },
      {
        title: "Hash paralelo — digitalizações mais rápidas",
        body: "O SHA-256 é executado simultaneamente em todos os núcleos de CPU. Unidades grandes que antes levavam minutos terminam significativamente mais rápido.",
      },
      {
        title: "Seleção automática por regra",
        body: "Mantenha a cópia mais recente, a mais antiga ou a de caminho mais curto em todos os grupos de duplicatas com um clique — sem precisar revisar cada grupo manualmente.",
      },
      {
        title: "Pesquisar, filtrar e ordenar",
        body: "Digite um nome de arquivo ou caminho para filtrar centenas de grupos de duplicatas instantaneamente. Ordene por tamanho, nome ou data. Filtre por extensão de arquivo.",
      },
      {
        title: "Exportar relatório CSV",
        body: "Baixe uma planilha completa com todos os grupos de duplicatas — útil para auditar unidades grandes antes de excluir qualquer coisa.",
      },
      {
        title: "Digitalizar uma pasta ou uma unidade inteira",
        body: "De uma pasta de Downloads a toda a unidade C:\\, no escopo que você escolher.",
      },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "Compra única · digitalização gratuita para sempre",
    list: [
      "Digitalize qualquer pasta ou unidade — gratuito, para sempre",
      "Veja todas as duplicatas antes de decidir qualquer coisa",
      "€15 uma vez para desbloquear a exclusão — seu para sempre",
      "Sem assinatura, sem conta necessária",
    ],
    ctaPrimary: "Baixar para Windows",
    ctaSecondary: "Comprar uma licença →",
  },
  faq: {
    eyebrow: "FAQ",
    title: "Antes de baixar",
    items: [
      {
        q: "Ele excluirá arquivos que realmente preciso?",
        a: "Apenas os arquivos que você marcar explicitamente, e somente após tê-los comparado lado a lado. As correspondências são encontradas aplicando hash no conteúdo do arquivo, portanto apenas duplicatas verdadeiras byte a byte aparecem — e cada exclusão vai para a Lixeira, não é uma remoção permanente.",
      },
      {
        q: "Funciona no Mac ou Linux?",
        a: "Ainda não — o Duplicate Finder é apenas para Windows por enquanto.",
      },
      {
        q: "O que acontece após o período de avaliação de 14 dias?",
        a: "A digitalização continua gratuita — você pode digitalizar qualquer pasta e ver todas as suas duplicatas sem custo, para sempre. A exclusão fica bloqueada após o período de avaliação. Uma licença única de €15 desbloqueia a exclusão permanentemente.",
      },
      {
        q: "Por que o Windows exibe um aviso durante a instalação?",
        a: "Porque o aplicativo ainda não está assinado com um certificado de assinatura de código pago — algo que a maioria dos desenvolvedores independentes ignora antes de suas primeiras vendas. O Windows sinaliza qualquer editor não reconhecido dessa forma. Clique em \"Mais informações\" e depois em \"Executar mesmo assim\". O código-fonte é público no GitHub se você quiser verificar o que o aplicativo faz antes de instalar.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Histórico de alterações",
    buy: "Comprar",
    privacy: "Privacidade",
    terms: "Termos",
  },
};

export default pt;
