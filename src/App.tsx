import { useState } from 'react'

const NAV_HREF = '#prototipo'

function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-[#1E2D26] bg-[#07100C]/90 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono-data text-[#1AE87C] text-sm font-600 tracking-widest uppercase">
            Flux<span className="text-[#F0F5F2]">Core</span>
          </span>
        </div>
        <a
          href={NAV_HREF}
          className="font-mono-data text-xs tracking-wider uppercase px-4 py-2 border border-[#1AE87C] text-[#1AE87C] hover:bg-[#1AE87C] hover:text-[#07100C] transition-all duration-200 font-500"
        >
          Acesse o Protótipo
        </a>
      </div>
    </header>
  )
}

function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center pt-24 pb-20 px-6 relative overflow-hidden">
      {/* Grid background decoration */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(#1AE87C 1px, transparent 1px), linear-gradient(90deg, #1AE87C 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      {/* Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1AE87C] opacity-[0.04] rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="max-w-4xl">
          <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase mb-6 flex items-center gap-3">
            <span className="w-8 h-px bg-[#1AE87C]" />
            ERP para pequenos negócios
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-700 text-[#F0F5F2] leading-[1.05] mb-6">
            O único ERP que une estoque e financeiro para{' '}
            <em className="text-[#1AE87C] not-italic">prever o futuro</em> do
            seu negócio.
          </h1>

          <p className="text-lg md:text-xl text-[#8BA898] max-w-2xl leading-relaxed mb-10 font-300">
            FluxCore integra estoque, fluxo de caixa e previsão em um só lugar
            — feito para donos de pequenos negócios que não podem se dar ao
            luxo de serem pegos de surpresa pelo caixa.
          </p>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              id="prototipo"
              href="#oferta"
              className="inline-flex items-center gap-3 bg-[#1AE87C] text-[#07100C] font-600 px-8 py-4 text-sm tracking-wide uppercase font-mono-data hover:bg-[#22F58A] transition-colors duration-200 group"
            >
              Acesse o Protótipo
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </a>
            <span className="text-[#8BA898] text-sm font-mono-data">
              Sem custo · Acesso antecipado
            </span>
          </div>
        </div>

        {/* Metric strip */}
        <div className="mt-20 grid grid-cols-3 md:grid-cols-3 gap-px bg-[#1E2D26]">
          {[
            { value: '100%', label: 'Integração automática' },
            { value: '0 ₀', label: 'Planilhas manuais' },
            { value: '∞', label: 'Meses de previsão' },
          ].map((m) => (
            <div key={m.label} className="bg-[#07100C] px-6 py-5">
              <div className="font-display text-3xl text-[#1AE87C] font-700 mb-1">
                {m.value}
              </div>
              <div className="font-mono-data text-[10px] text-[#8BA898] uppercase tracking-widest">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Opening() {
  return (
    <section className="py-24 px-6 border-t border-[#1E2D26]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase flex items-center gap-3">
            <span>01</span>
            <span className="w-8 h-px bg-[#1AE87C]" />
            O Problema
          </div>
        </div>
        <div>
          <p className="font-display text-2xl md:text-3xl text-[#F0F5F2] leading-snug mb-6 font-400">
            Todo mês, milhares de pequenos empresários brasileiros descobrem
            tarde demais que o caixa não vai fechar.{' '}
            <em className="text-[#8BA898]">
              Não por falta de vendas — mas por falta de visibilidade.
            </em>
          </p>
          <p className="text-[#8BA898] text-base leading-relaxed mb-4">
            Estoque de um lado, financeiro de outro, cada um em uma planilha
            diferente. Quando os dois não conversam, o resultado é sempre o
            mesmo: retrabalho, decisões no escuro e aquela sensação de estar
            sempre correndo atrás do prejuízo.
          </p>
          <p className="text-[#8BA898] text-base leading-relaxed">
            O FluxCore nasceu para resolver exatamente isso. Não é mais um
            sistema para registrar números — é um ERP que integra estoque e
            financeiro automaticamente e projeta o seu caixa dos próximos
            meses, para que você tome decisões com antecedência, não com
            desespero.
          </p>
        </div>
      </div>
    </section>
  )
}

const PAINS = [
  'Você já se pegou fechando o mês sem saber, ao certo, se sobrou ou faltou dinheiro.',
  'Aquela sensação de ter que "adivinhar" se vai dar pra pagar o fornecedor esse mês.',
  'Todo dia a mesma frustração de conferir estoque de um lado e caixa de outro, sem os dois baterem.',
  'Você já precificou um produto "no olho", só olhando o concorrente, sem saber se estava mesmo lucrando.',
  'Já foi surpreendido por uma conta que "surgiu do nada" porque ninguém viu o problema chegando.',
]

function PainSection() {
  return (
    <section className="py-24 px-6 bg-[#0D1A14]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase flex items-center gap-3">
            <span>02</span>
            <span className="w-8 h-px bg-[#1AE87C]" />
            Você já viveu isso?
          </div>
        </div>

        <p className="font-display text-2xl md:text-3xl text-[#F0F5F2] mb-12 max-w-2xl font-400 leading-snug">
          Se você toca um pequeno negócio sozinho (ou quase sozinho),
          provavelmente já viveu isso:
        </p>

        <div className="space-y-px">
          {PAINS.map((pain, i) => (
            <div
              key={i}
              className="flex gap-6 items-start bg-[#07100C] border border-[#1E2D26] px-6 py-5 hover:border-[#1AE87C]/30 transition-colors duration-200 group"
            >
              <span className="font-mono-data text-[#1AE87C]/40 text-xs mt-1 shrink-0 group-hover:text-[#1AE87C] transition-colors duration-200">
                {String(i + 1).padStart(2, '0')}
              </span>
              <p className="text-[#8BA898] text-base leading-relaxed group-hover:text-[#F0F5F2] transition-colors duration-200">
                {pain}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-[#8BA898] text-sm border-l-2 border-[#1AE87C] pl-4 max-w-xl">
          Nenhuma dessas situações é falta de competência sua. É falta de uma
          ferramenta que realmente converse com a forma como seu negócio
          funciona.
        </p>
      </div>
    </section>
  )
}

function Solution() {
  return (
    <section className="py-24 px-6 border-t border-[#1E2D26]">
      <div className="max-w-6xl mx-auto grid md:grid-cols-[1fr_2fr] gap-12 items-start">
        <div>
          <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase flex items-center gap-3">
            <span>03</span>
            <span className="w-8 h-px bg-[#1AE87C]" />
            A Solução
          </div>
        </div>
        <div>
          <h2 className="font-display text-3xl md:text-4xl font-700 text-[#F0F5F2] mb-6 leading-tight">
            Estoque sai → lançamento financeiro entra.{' '}
            <em className="text-[#1AE87C] not-italic">Automático.</em>
          </h2>
          <p className="text-[#8BA898] text-base leading-relaxed mb-6">
            O FluxCore resolve isso com um mecanismo simples, mas que
            praticamente nenhuma solução acessível no mercado oferece: a saída
            de um produto do estoque já gera, automaticamente, o lançamento
            financeiro correspondente. Sem planilha dupla, sem conciliação
            manual, sem "esquecer de lançar".
          </p>
          <p className="text-[#8BA898] text-base leading-relaxed">
            E não para por aí: com base no seu histórico de movimentações, o
            FluxCore projeta seu fluxo de caixa para os próximos meses,
            alertando quando o saldo futuro tende a ficar apertado — antes que
            isso vire um problema real.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#1E2D26]">
            {[
              {
                icon: '⇄',
                title: 'Integração automática',
                desc: 'Estoque e financeiro falam a mesma língua, sem intervenção manual.',
              },
              {
                icon: '◎',
                title: 'Previsão de caixa',
                desc: 'Saldo projetado para os próximos meses, atualizado em tempo real.',
              },
            ].map((f) => (
              <div key={f.title} className="bg-[#07100C] p-6">
                <span className="text-[#1AE87C] text-2xl mb-3 block font-mono-data">
                  {f.icon}
                </span>
                <h3 className="font-display text-lg font-700 text-[#F0F5F2] mb-2">
                  {f.title}
                </h3>
                <p className="text-[#8BA898] text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

const BENEFITS = [
  {
    n: '01',
    title: 'Visibilidade total do seu caixa',
    desc: 'Saiba exatamente quanto você tem, sem precisar abrir três planilhas diferentes.',
  },
  {
    n: '02',
    title: 'Estoque e financeiro conversando sozinhos',
    desc: 'Nunca mais perca tempo conciliando manualmente o que saiu do estoque com o que entrou no caixa.',
  },
  {
    n: '03',
    title: 'Previsão dos próximos meses',
    desc: 'Antecipe um mês fraco com semanas de antecedência, não no dia em que o boleto vence.',
  },
  {
    n: '04',
    title: 'Feito pro seu porte de negócio',
    desc: 'Nada de pagar por (ou se perder em) recursos que só fazem sentido pra empresas grandes.',
  },
  {
    n: '05',
    title: 'Interface pensada pra quem não é da tecnologia',
    desc: 'Comece a usar sem precisar de treinamento longo ou suporte técnico especializado.',
  },
  {
    n: '06',
    title: 'Base tecnológica sólida',
    desc: 'Construído com tecnologias usadas por sistemas corporativos reais, pensado pra crescer junto com o seu negócio.',
  },
]

function Benefits() {
  return (
    <section className="py-24 px-6 bg-[#0D1A14]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase flex items-center gap-3">
            <span>04</span>
            <span className="w-8 h-px bg-[#1AE87C]" />
            Por que o FluxCore
          </div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-700 text-[#F0F5F2] mb-12 max-w-2xl leading-tight">
          Benefícios reais, não funcionalidades de catálogo.
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1E2D26]">
          {BENEFITS.map((b) => (
            <div
              key={b.n}
              className="bg-[#0D1A14] p-8 hover:bg-[#142119] transition-colors duration-200 group"
            >
              <div className="font-mono-data text-[#1AE87C]/30 text-xs mb-4 group-hover:text-[#1AE87C] transition-colors duration-200">
                {b.n}
              </div>
              <h3 className="font-display text-xl font-700 text-[#F0F5F2] mb-3 leading-snug">
                {b.title}
              </h3>
              <p className="text-[#8BA898] text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function MockScreens() {
  const screens = [
    {
      label: 'Dashboard — saldo de caixa consolidado',
      src: '/screenshots/dashboard.png',
    },
    {
      label: 'Estoque — cadastro de produtos',
      src: '/screenshots/estoque.png',
    },
    {
      label: 'Lançamento financeiro — integrado ao estoque',
      src: '/screenshots/financeiro.png',
    },
    {
      label: 'Fluxo de vendas',
      src: '/screenshots/vendas.png',
    },
  ]

  return (
    <section className="py-24 px-6 border-t border-[#1E2D26]">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-3 mb-4">
          <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase flex items-center gap-3">
            <span>05</span>
            <span className="w-8 h-px bg-[#1AE87C]" />
            Veja em ação
          </div>
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-700 text-[#F0F5F2] mb-12 max-w-2xl leading-tight">
          Um sistema funcional em evolução — não só um mockup de tela.
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {screens.map((s) => (
            <div key={s.label} className="border border-[#1E2D26] hover:border-[#1AE87C]/40 transition-colors duration-300 overflow-hidden group">
              {/* "Titlebar" */}
              <div className="flex items-center gap-2 px-4 py-3 bg-[#0D1A14] border-b border-[#1E2D26]">
                <span className="w-2 h-2 rounded-full bg-[#1E2D26]" />
                <span className="w-2 h-2 rounded-full bg-[#1E2D26]" />
                <span className="w-2 h-2 rounded-full bg-[#1E2D26]" />
                <span className="font-mono-data text-[#8BA898] text-[9px] ml-2 uppercase tracking-widest">FluxCore</span>
              </div>
              <div className="bg-[#07100C]">
                <img src={s.src} alt={s.label} className="w-full h-64 object-cover block" />
              </div>
              <div className="px-4 py-3 bg-[#0D1A14] border-t border-[#1E2D26]">
                <p className="font-mono-data text-[#8BA898] text-[10px] uppercase tracking-wider">{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-4 text-[#8BA898]/60 text-xs font-mono-data text-center">
          Dados ilustrativos para fins de demonstração.
        </p>

        <div className="mt-8 border-l-2 border-[#1AE87C] pl-5 max-w-2xl">
          <p className="text-[#8BA898] text-sm leading-relaxed">
            Por trás do projeto: o FluxCore já tem seu ambiente de
            desenvolvimento completo validado, com integração real entre os
            módulos de estoque e financeiro rodando de ponta a ponta — não é
            só um mockup de tela, é um sistema funcional em evolução.
          </p>
        </div>
      </div>
    </section>
  )
}

function Offer() {
  const items = [
    'Cadastro de clientes, fornecedores e produtos',
    'Módulo financeiro completo (contas a pagar e a receber)',
    'Estoque integrado automaticamente ao financeiro',
    'Dashboard de fluxo de caixa consolidado',
    'Previsão de saldo para os próximos meses',
  ]

  return (
    <section id="oferta" className="py-24 px-6 bg-[#0D1A14]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase flex items-center gap-3 mb-12">
          <span>06</span>
          <span className="w-8 h-px bg-[#1AE87C]" />
          O que você encontra no protótipo
        </div>

        <div className="grid md:grid-cols-[1fr_1fr] gap-12 items-start">
          <div>
            <div className="space-y-3">
              {items.map((item) => (
                <div key={item} className="flex items-start gap-4 py-4 border-b border-[#1E2D26]">
                  <span className="text-[#1AE87C] font-mono-data text-sm shrink-0 mt-0.5">✓</span>
                  <span className="text-[#F0F5F2] text-base">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-[#1AE87C]/30 p-8">
            <div className="font-mono-data text-[#1AE87C] text-xs uppercase tracking-widest mb-2">Acesso</div>
            <div className="font-display text-4xl font-700 text-[#F0F5F2] mb-2">Gratuito</div>
            <p className="text-[#8BA898] text-sm mb-6">
              durante a fase de protótipo
            </p>
            <p className="text-[#8BA898] text-sm leading-relaxed mb-8">
              Estamos priorizando validação e feedback nesta fase — não há
              cobrança nem compromisso para conhecer e testar o sistema.
            </p>
            <a
              href="#prototipo"
              className="w-full flex items-center justify-center gap-3 bg-[#1AE87C] text-[#07100C] font-600 px-8 py-4 text-sm tracking-wide uppercase font-mono-data hover:bg-[#22F58A] transition-colors duration-200"
            >
              Acesse o Protótipo →
            </a>
            <p className="text-center text-[#8BA898]/60 text-xs font-mono-data mt-4">
              Sem custo · Sem compromisso · Sem instalação
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

const OBJECTIONS = [
  {
    q: '"Mas isso não é só mais um ERP igual aos outros?"',
    a: 'Não. A maioria dos ERPs acessíveis (como Bling, Omie e Conta Azul) só registra dados — eles não avisam quando seu caixa vai ficar apertado, e não conectam estoque com financeiro automaticamente. Já os ERPs robustos (SAP, Totvs) resolvem isso, mas custam e pesam demais pra um pequeno negócio. O FluxCore é o meio-termo que faltava.',
  },
  {
    q: '"Já uso planilha, funciona bem pra mim."',
    a: 'Funciona até o dia em que ela não avisa a tempo. O FluxCore faz o que a planilha não faz sozinha: cruza os dados e projeta o futuro, sem que você precise lembrar de atualizar nada manualmente.',
  },
  {
    q: '"Não tenho tempo pra aprender outro sistema."',
    a: 'Foi pensado exatamente pra isso — pra ser simples o bastante pra alguém sem tempo (nem paciência) para treinamentos longos.',
  },
  {
    q: '"Meu negócio é pequeno demais pra precisar de um ERP."',
    a: 'Na verdade, é o contrário: quanto menor a margem de erro no caixa, mais um pequeno negócio precisa de visibilidade. O FluxCore foi desenhado justamente pra esse porte — não pra empresas grandes.',
  },
  {
    q: '"E quanto vai custar?"',
    a: 'Ainda estamos validando o produto com o mercado. Por enquanto, o acesso ao protótipo é gratuito — e quem entra agora ajuda a moldar o que o FluxCore vai se tornar.',
  },
]

function Objections() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-24 px-6 border-t border-[#1E2D26]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase flex items-center gap-3 mb-4">
          <span>07</span>
          <span className="w-8 h-px bg-[#1AE87C]" />
          Dúvidas comuns
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-700 text-[#F0F5F2] mb-12 max-w-2xl leading-tight">
          Respostas diretas para as objeções mais comuns.
        </h2>

        <div className="space-y-px">
          {OBJECTIONS.map((o, i) => (
            <div
              key={i}
              className="border border-[#1E2D26] hover:border-[#1AE87C]/30 transition-colors duration-200"
            >
              <button
                className="w-full flex justify-between items-start px-6 py-5 text-left gap-6"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display text-lg text-[#F0F5F2] font-400 leading-snug">
                  {o.q}
                </span>
                <span className="font-mono-data text-[#1AE87C] shrink-0 mt-1 transition-transform duration-200" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>
                  +
                </span>
              </button>
              {open === i && (
                <div className="px-6 pb-6">
                  <p className="text-[#8BA898] text-base leading-relaxed border-t border-[#1E2D26] pt-4">
                    {o.a}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAQ_ITEMS = [
  {
    q: 'O FluxCore já pode ser usado no meu negócio hoje?',
    a: 'O FluxCore está em fase de protótipo. Você já pode acessar e testar as funcionalidades principais — estamos coletando feedback antes do lançamento comercial completo.',
  },
  {
    q: 'Serve para qualquer tipo de pequeno negócio?',
    a: 'Foi pensado principalmente para comércios e prestadores de serviço que lidam com estoque e controle financeiro no dia a dia.',
  },
  {
    q: 'Preciso instalar algum programa?',
    a: 'Não. O acesso é feito direto pelo navegador, sem instalação.',
  },
  {
    q: 'Quanto vai custar quando sair da fase de protótipo?',
    a: 'Ainda estamos definindo o modelo de preços com base no feedback dessa fase inicial.',
  },
  {
    q: 'Meus dados ficam seguros?',
    a: 'Sim. O sistema segue boas práticas de segurança (senhas protegidas, comunicação criptografada) e princípios de proteção de dados desde a concepção do projeto.',
  },
  {
    q: 'Como faço para acessar o protótipo?',
    a: 'É só clicar no botão "Acesse o protótipo" nesta página.',
  },
]

function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="py-24 px-6 bg-[#0D1A14]">
      <div className="max-w-6xl mx-auto">
        <div className="font-mono-data text-[#1AE87C] text-xs tracking-widest uppercase flex items-center gap-3 mb-4">
          <span>08</span>
          <span className="w-8 h-px bg-[#1AE87C]" />
          FAQ
        </div>
        <h2 className="font-display text-3xl md:text-4xl font-700 text-[#F0F5F2] mb-12 max-w-xl leading-tight">
          Perguntas frequentes.
        </h2>

        <div className="grid md:grid-cols-2 gap-px bg-[#1E2D26]">
          {FAQ_ITEMS.map((f, i) => (
            <div key={i} className="bg-[#0D1A14] p-6">
              <button
                className="w-full flex justify-between items-start text-left gap-4 group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-display text-base text-[#F0F5F2] font-400 group-hover:text-[#1AE87C] transition-colors duration-200">
                  {f.q}
                </span>
                <span className="font-mono-data text-[#1AE87C] shrink-0 transition-transform duration-200" style={{ transform: open === i ? 'rotate(45deg)' : 'none' }}>
                  +
                </span>
              </button>
              {open === i && (
                <p className="text-[#8BA898] text-sm leading-relaxed mt-4 border-t border-[#1E2D26] pt-4">
                  {f.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Guarantee() {
  return (
    <section className="py-16 px-6 border-t border-[#1E2D26]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start gap-8">
        <div className="shrink-0">
          <div className="w-16 h-16 border-2 border-[#1AE87C]/40 flex items-center justify-center">
            <span className="font-mono-data text-[#1AE87C] text-2xl">○</span>
          </div>
        </div>
        <div>
          <h3 className="font-display text-2xl font-700 text-[#F0F5F2] mb-3">
            Zero risco, zero custo, zero compromisso.
          </h3>
          <p className="text-[#8BA898] text-base leading-relaxed max-w-2xl">
            Você não assume nenhum custo nem compromisso ao acessar o protótipo
            do FluxCore. O produto ainda está em fase de validação, e todo o
            processo é pensado para que você conheça a ferramenta sem risco — o
            único "custo" é alguns minutos do seu tempo, e o retorno é enxergar
            como sua gestão financeira poderia funcionar de forma diferente.
          </p>
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section className="py-32 px-6 bg-[#0D1A14] relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'linear-gradient(#1AE87C 1px, transparent 1px), linear-gradient(90deg, #1AE87C 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-[#1AE87C] opacity-[0.05] rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative text-center">
        <h2 className="font-display text-4xl md:text-6xl font-700 text-[#F0F5F2] mb-6 leading-tight max-w-3xl mx-auto">
          Seu negócio não precisa continuar sendo administrado{' '}
          <em className="text-[#1AE87C] not-italic">no escuro.</em>
        </h2>
        <p className="text-[#8BA898] text-lg max-w-xl mx-auto mb-10 leading-relaxed">
          Enquanto planilhas separadas e cálculos manuais só mostram o passado,
          o FluxCore te ajuda a enxergar o que vem pela frente — e a decidir
          com segurança, não com esperança.
        </p>
        <a
          href="#prototipo"
          className="inline-flex items-center gap-3 bg-[#1AE87C] text-[#07100C] font-600 px-10 py-5 text-base tracking-wide uppercase font-mono-data hover:bg-[#22F58A] transition-colors duration-200 group"
        >
          Acesse o Protótipo
          <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
        </a>

        <div className="mt-16 max-w-2xl mx-auto border-t border-[#1E2D26] pt-10">
          <p className="text-[#8BA898] text-sm leading-relaxed">
            <span className="text-[#1AE87C] font-mono-data">P.S.</span> — O
            FluxCore não é só mais um ERP. É a integração entre estoque,
            financeiro e previsão que faltava para o pequeno negócio parar de
            ser surpreendido pelo caixa. O protótipo já está de pé,
            funcionando, e pronto para você conhecer de perto.
          </p>
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-[#1E2D26]">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="font-mono-data text-[#1AE87C] text-sm font-600 tracking-widest uppercase">
          Flux<span className="text-[#8BA898]">Core</span>
        </span>
        <p className="font-mono-data text-[#8BA898]/50 text-xs uppercase tracking-widest">
          ERP para pequenos negócios · Equipe NewCode
        </p>
      </div>
    </footer>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#07100C]">
      <Nav />
      <main>
        <Hero />
        <Opening />
        <PainSection />
        <Solution />
        <Benefits />
        <MockScreens />
        <Offer />
        <Objections />
        <Guarantee />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  )
}
