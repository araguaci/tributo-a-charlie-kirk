import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const timelineEvents = [
  { year: 1993, title: "Nascimento", description: "14 de outubro de 1993: Charles James Kirk nasce em Arlington Heights, Illinois, subúrbio de Chicago, em uma família cristã conservadora. Sua educação inicial no Wheeling High School desperta interesse pela política." },
  { year: 2010, title: "Primeira Experiência Política", description: "Durante o ensino médio, Kirk voluntaria-se na campanha bem-sucedida do senador republicano Mark Kirk (sem parentesco) para o Senado dos EUA, marcando seu engajamento precoce no ativismo conservador." },
  { year: 2012, title: "Fundação da Turning Point USA (TPUSA)", description: "Aos 18 anos, Kirk co-funda a TPUSA com Bill Montgomery, enquanto estuda brevemente no Harper College (deixa após um semestre para focar no ativismo). A organização visa engajar jovens conservadores em campi universitários, crescendo para milhares de capítulos. No mesmo ano, na Convenção Nacional Republicana, convence o doador Foster Friess a financiar a TPUSA." },
  { year: 2015, title: "Primeiro Debate Nacional Significativo", description: "Kirk participa de seus primeiros debates públicos nacionais contra líderes progressistas, destacando-se pela eloquência em fóruns universitários e eventos conservadores. Isso inicia suas turnês 'Prove Me Wrong', que se popularizam como ferramenta de engajamento juvenil." },
  { year: 2016, title: "Apoio à Campanha de Trump e Primeiro Livro", description: "Kirk apoia ativamente Donald Trump, auxiliando na campanha com arranjos de mídia para Donald Trump Jr. Endereça a Convenção Nacional Republicana e co-escreve Time for a Turning Point: Setting a Course Toward Free Markets and Limited Government for Future Generations. Em outubro, participa de evento pró-Trump na Fox News ao lado da família Trump." },
  { year: 2018, title: "Lançamento de Campus Battlefield e Ativismo Pós-Parkland", description: "Publica Campus Battlefield: How Conservatives Can WIN the Battle on Campus and Why It Matters (com prefácio de Donald Trump Jr.), expondo viés ideológico em universidades. Após o tiroteio em Parkland, fala pela National Rifle Association (NRA) na Flórida, defendendo guardas armados e detectores de metais." },
  { year: 2019, title: "Grau Honorário e Criação da Turning Point Action", description: "Maio de 2019: Recebe título honorário de Doutor em Humanidades da Liberty University. Anuncia a Turning Point Action, uma entidade 501(c)(4) para targeting democratas, e adquire Students for Trump em julho, visando recrutar 1 milhão de estudantes para a reeleição de Trump em 2020." },
  { year: 2019, title: "Fundação do Falkirk Center", description: "Novembro de 2019: Co-funda o Falkirk Center for Faith and Liberty com Jerry Falwell Jr. na Liberty University, um think tank de direita focado em fé e liberdade." },
  { year: 2020, title: "The MAGA Doctrine e Desinformação sobre COVID-19", description: "Março de 2020: Lança The MAGA Doctrine: The Only Ideas That Will Win the Future. Espalha teorias conspiratórias sobre COVID-19 no Twitter, resultando em suspensão temporária da plataforma." },
  { year: 2020, title: "Lançamento do The Charlie Kirk Show", description: "Outubro de 2020: Inicia o podcast diário The Charlie Kirk Show na Salem Media Group, que rapidamente atinge mais de 500 mil ouvintes mensais (crescendo para 1 milhão em 2020-2021, consolidando sua influência nacional)." },
  { year: 2020, title: "Investigação Financeira da TPUSA", description: "ProPublica revela irregularidades financeiras na TPUSA, incluindo salário de Kirk subindo para US$ 325 mil e compra de condomínio de US$ 855 mil. Receita da organização chega a US$ 39,2 milhões." },
  { year: 2021, title: "Envolvimento nos Eventos de 6 de Janeiro", description: "Janeiro de 2021: Tuita sobre envio de ônibus de apoiadores a Washington, D.C., para protesto (clarificado como 350 estudantes em sete ônibus), ligado aos eventos do Capitólio." },
  { year: 2021, title: "Casamento", description: "Maio de 2021: Casa-se com Erika Frantzve (ex-Miss Arizona USA 2012), podcaster e empresária, que se torna Erika Kirk." },
  { year: 2021, title: "Turning Point Faith e Turning Point Academy", description: "Após fim do Falkirk Center, co-funda Turning Point Faith com Rob McCoy para mobilizar comunidades religiosas. Anuncia Turning Point Academy, uma escola online (parceria termina em 2022 devido a backlash)." },
  { year: 2022, title: "Nascimento do Primeiro Filho e The College Scam", description: "Nasce sua primeira filha. Publica The College Scam: How America's Universities Are Bankrupting and Brainwashing Away the Future of America's Youth. Em dezembro, lança o Mount Vernon Project para purgar o Comitê Nacional Republicano de não-conservadores." },
  { year: 2023, title: "Expansão Global da TPUSA", description: "A TPUSA cria capítulos internacionais, expandindo influência para fora dos EUA, inspirando jovens em Europa, América Latina e Ásia, alinhado ao foco de Kirk em ativismo global conservador." },
  { year: 2024, title: "Nascimento do Segundo Filho", description: "Maio de 2024: Nasce seu segundo filho, um menino." },
  { year: 2024, title: "Novo Livro e Envolvimento Eleitoral", description: "Junho de 2024: Publica livro adicional (detalhes emergentes em fontes recentes). Participa de turnês em campi para mobilizar eleitores jovens pró-Trump na eleição de 2024." },
  { year: 2024, title: "Contribuição para Vitória de Trump", description: "Novembro de 2024: A TPUSA, sob liderança de Kirk, mobiliza juventude conservadora, creditada por impulsionar a vitória de Trump em 2024, com turnês como 'You're Being Brainwashed'." },
  { year: 2025, title: "Comentários sobre Políticas de Trump", description: "Janeiro de 2025: Comenta ordens executivas de Trump, como proibição a tropas transgênero, reforçando sua posição como conselheiro MAGA." },
  { year: 2025, title: "Falecimento", description: "10 de setembro de 2025: Kirk é assassinado aos 31 anos durante discurso na Utah Valley University, em Orem, Utah, vítima de tiroteio. Sua morte gera homenagens globais, incluindo medalha póstuma da Liberdade Presidencial por Trump e propostas de estátua no Capitólio." },
];

const Sobre = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleEvent = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Linha do Tempo Cronológica</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Uma cronologia detalhada dos principais eventos na vida e carreira de Charlie Kirk, desde seu nascimento até seu falecimento, destacando sua ascensão como uma das vozes mais proeminentes do conservadorismo.
      </p>
      <div className="relative">
        <div className="absolute left-4 md:left-1/2 h-full w-0.5 bg-border -translate-x-1/2"></div>
        {timelineEvents.map((event, index) => (
          <div key={index} className="relative md:flex md:justify-between md:items-center w-full mb-8" onClick={() => toggleEvent(index)} style={{ cursor: 'pointer' }}>
            {/* Left side for desktop */}
            <div className={`hidden md:block md:w-5/12 ${index % 2 === 0 ? 'order-1' : 'order-3'}`}>
              {index % 2 === 0 && (
                <Card className={`transition-all duration-300 ${openIndex === index ? 'shadow-lg' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-stars-blue">{event.title}</CardTitle>
                  </CardHeader>
                  {openIndex === index && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                  )}
                </Card>
              )}
            </div>
            
            {/* Year circle */}
            <div className="absolute md:relative z-10 flex items-center justify-center order-2 bg-background left-4 md:left-auto -translate-x-1/2 md:translate-x-0">
              <div className="w-8 h-8 rounded-full bg-stars-blue text-white flex items-center justify-center font-bold text-sm">
                {event.year}
              </div>
            </div>

            {/* Right side for desktop / Main content for mobile */}
            <div className={`w-full pl-12 md:pl-0 md:w-5/12 ${index % 2 === 0 ? 'order-3' : 'order-1'}`}>
              {/* Mobile Card */}
              <div className="md:hidden">
                <Card className={`transition-all duration-300 ${openIndex === index ? 'shadow-lg' : ''}`}>
                  <CardHeader>
                    <CardTitle className="text-lg font-semibold text-stars-blue">{event.title}</CardTitle>
                  </CardHeader>
                  {openIndex === index && (
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{event.description}</p>
                    </CardContent>
                  )}
                </Card>
              </div>
              {/* Desktop Card (Right) */}
              <div className="hidden md:block">
                {index % 2 !== 0 && (
                  <Card className={`transition-all duration-300 ${openIndex === index ? 'shadow-lg' : ''}`}>
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold text-stars-blue">{event.title}</CardTitle>
                    </CardHeader>
                    {openIndex === index && (
                      <CardContent>
                        <p className="text-sm text-muted-foreground">{event.description}</p>
                      </CardContent>
                    )}
                  </Card>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <p className="text-center text-xs text-muted-foreground mt-12">
        © 2025 Homenagem a Charlie Kirk. Site não oficial, baseado em fontes públicas.
      </p>
    </div>
  );
};

export default Sobre;