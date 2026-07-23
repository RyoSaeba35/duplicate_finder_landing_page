import type { LandingContent } from "../types";

const pt: LandingContent = {
  meta: {
    title: "Duplicate Finder — encontre e recupere espaço de arquivos duplicados no Windows",
    description:
      "Analise qualquer pasta ou unidade, compare duplicatas lado a lado com pré-visualização ao vivo, e mova-as com segurança para a lixeira. €15 pagamento único, teste grátis de 14 dias.",
  },
  nav: { howItWorks: "Como funciona", pricing: "Preço", faq: "Perguntas frequentes", download: "Baixar" },
  hero: {
    eyebrow: "Para Windows · €15 pagamento único · Teste grátis de 14 dias",
    headlineLine1: "Encontre seus arquivos",
    headlineEm: "duplicados",
    sub: "Analisa qualquer pasta ou unidade, mostra exatamente o que é idêntico lado a lado, e move duplicatas para a lixeira — nunca uma exclusão permanente.",
    ctaPrimary: "Baixar para Windows",
    ctaSecondary: "Ver como funciona",
    ctaNote: "Todos os recursos por 14 dias. Sem conta, sem cartão de crédito.",
    securityNote:
      "Primeira execução: o Windows pode exibir um aviso \"O Windows protegeu o computador\" — isso é normal para desenvolvedores independentes. Clique em \"Mais informações\" → \"Executar assim mesmo\".",
    demoMeta: "3 arquivos idênticos · 158,3 KB cada",
    demoReclaimable: "158,3 KB recuperáveis",
    counterLabel: "recuperáveis nesta análise",
    cardKeep: "Manter",
    cardDuplicate: "Duplicata",
    cardMarkForTrash: "marcar para a lixeira",
    cardOpenFile: "Abrir arquivo ↗",
    cardKeepInstead: "Manter este em vez disso →",
  },
  howItWorks: {
    eyebrow: "Como funciona",
    title: "Três passos, nada é permanente até você decidir.",
    steps: [
      {
        num: "01 — Analisar",
        title: "Escolha uma pasta, uma unidade ou todo o seu PC",
        body: "O Duplicate Finder processa cada arquivo para encontrar correspondências exatas — não apenas nomes ou tamanhos semelhantes.",
      },
      {
        num: "02 — Comparar",
        title: "Veja as duas cópias lado a lado",
        body: "Tamanho do arquivo, data de modificação e uma pré-visualização ao vivo para imagens, PDFs, documentos Word e planilhas Excel — antes de decidir qualquer coisa.",
      },
      {
        num: "03 — Recuperar",
        title: "Mantenha um, exclua o resto",
        body: "As duplicatas vão para a lixeira, nunca uma exclusão permanente. Você pode mudar de ideia a qualquer momento.",
      },
    ],
  },
  features: {
    eyebrow: "O que ele faz",
    title: "Criado para realmente encontrar duplicatas, não adivinhar.",
    items: [
      {
        title: "Correspondência byte a byte",
        body: "Cada arquivo é processado com hash, então cópias renomeadas ou movidas ainda são detectadas — não apenas arquivos com nomes correspondentes.",
      },
      {
        title: "Pré-visualizações ao vivo",
        body: "Imagens, PDFs, documentos Word, planilhas Excel e arquivos de código são exibidos diretamente na visualização de comparação.",
      },
      {
        title: "Seguro com a lixeira",
        body: "Cada exclusão passa pela lixeira do próprio Windows. O aplicativo nunca remove nada permanentemente por conta própria.",
      },
      {
        title: "Analise uma pasta ou uma unidade inteira",
        body: "De uma única pasta de Downloads até toda a sua unidade C:\\, no escopo que você escolher.",
      },
    ],
  },
  pricing: {
    amount: "€15",
    terms: "Compra única · sem assinatura",
    list: [
      "Todos os recursos por 14 dias, grátis",
      "Sem conta ou cartão de crédito para o teste",
      "Uma licença, sua para sempre",
    ],
    ctaPrimary: "Baixar para Windows",
    ctaSecondary: "Comprar uma licença →",
  },
  faq: {
    eyebrow: "Perguntas frequentes",
    title: "Antes de baixar",
    items: [
      {
        q: "Ele vai excluir arquivos que eu realmente preciso?",
        a: "Somente arquivos que você marcar explicitamente, e somente depois de compará-los lado a lado. As correspondências são encontradas processando o conteúdo dos arquivos com hash, então apenas duplicatas reais, byte a byte, aparecem — e cada exclusão vai para a lixeira, nunca é uma remoção permanente.",
      },
      {
        q: "Funciona no Mac ou Linux?",
        a: "Ainda não — o Duplicate Finder é exclusivo para Windows por enquanto.",
      },
      {
        q: "O que acontece após o teste de 14 dias?",
        a: "O aplicativo bloqueia a análise até que você insira uma chave de licença. Seus dados e configurações do teste não são afetados — ativar uma chave apenas desbloqueia o aplicativo novamente.",
      },
      {
        q: "Por que o Windows exibe um aviso ao instalar?",
        a: "Porque o aplicativo ainda não está assinado com um certificado de assinatura de código pago — uma etapa que a maioria dos desenvolvedores independentes pula antes das primeiras vendas. O Windows sinaliza assim qualquer editor não reconhecido, seja o software seguro ou não; não é um julgamento sobre este aplicativo em particular. Clique em \"Mais informações\" e depois em \"Executar assim mesmo\" para continuar. O código-fonte é público no GitHub, caso queira verificar o que ele faz antes de instalar.",
      },
    ],
  },
  footer: {
    copyright: "Duplicate Finder.",
    changelog: "Registro de alterações",
    buy: "Comprar",
    privacy: "Privacidade",
    terms: "Termos",
  },
};

export default pt;
