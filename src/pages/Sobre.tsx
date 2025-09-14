import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBullhorn, faUniversity, faHandshake, faCalendarAlt, faStar } from '@fortawesome/free-solid-svg-icons';

const timelineData = [
    { year: "2010", title: "Voluntariado na campanha de Mark Kirk", description: "Voluntariou para a campanha bem-sucedida do senador dos EUA Mark Kirk, demonstrando interesse precoce em política.", icon: faHandshake },
    { year: "2011", title: "Ensaio para o Breitbart News", description: "Escreveu um ensaio alegando viés liberal em livros didáticos do ensino médio, que lhe rendeu uma aparição na Fox Business.", icon: faBullhorn },
    { year: "2012", title: "Fundação da TPUSA", description: "Aos 18 anos, após ser rejeitado por West Point e abandonar a faculdade, co-fundou a Turning Point USA para rivalizar com grupos liberais em campi.", icon: faUniversity },
    { year: "2012", title: "Primeiro Financiamento", description: "Conheceu e persuadiu Foster Friess, um doador republicano, a financiar a organização, iniciando sua ascensão.", icon: faHandshake },
    { year: "2016", title: "Alinhamento com Trump", description: "Kirk tornou-se assistente de campanha de Donald Trump Jr., cimentando seu apoio e influência no movimento MAGA.", icon: faHandshake },
    { year: "2016", title: "Lançamento do Professor Watchlist", description: "A TPUSA lançou sua controversa 'lista de observação' para expor o que considerava viés liberal na academia.", icon: faBullhorn },
    { year: "2019", title: "Lançamento da Turning Point Action", description: "Fundou o braço de ativismo político da TPUSA para mobilizar eleitores e intensificar a influência política.", icon: faBullhorn },
    { year: "2020", title: "Lançamento do Podcast", description: "Começou a apresentar 'The Charlie Kirk Show', um programa de rádio diário que rapidamente alcançou milhões de downloads.", icon: faBullhorn },
    { year: "2021", title: "Lançamento do School Board Watchlist", description: "Expandiu a estratégia de 'watchlists' para o sistema de ensino K-12, visando conselhos escolares.", icon: faBullhorn },
    { year: "2024", title: "Influência Eleitoral", description: "A TPUSA foi creditada por impulsionar o apoio da Geração Z a Trump, contribuindo para a vitória no Arizona.", icon: faStar },
    { year: "2025", title: "Morte", description: "Charlie Kirk é baleado e morto enquanto falava em um evento da TPUSA na Universidade do Vale de Utah.", icon: faStar },
];

const Sobre = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Sobre Charlie Kirk</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Conheça a trajetória, os princípios e o impacto de Charlie Kirk, uma das vozes mais influentes do conservadorismo jovem nos Estados Unidos.
      </p>

      <div className="flex justify-center mb-12">
        <img
          src="/CharlieKirk.jpg"
          alt="Charlie Kirk"
          className="rounded-lg shadow-lg max-w-full h-auto md:max-w-md lg:max-w-lg"
        />
      </div>

      <div className="grid grid-cols-1 gap-8 mb-12">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-american-sunset flex items-center gap-3">
              <FontAwesomeIcon icon={faBullhorn} className="h-6 w-6" />
              <span>O Catalisador do Ativismo Juvenil</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground leading-relaxed space-y-4">
            <p>
              A trajetória de Charlie Kirk como figura pública começou com convicções juvenis e experiências pessoais que se tornaram centrais em sua narrativa. Nascido em 1993, em Illinois, Kirk foi rejeitado pela academia militar de West Point e frequentou a faculdade por apenas um semestre antes de se dedicar ao ativismo em tempo integral.
            </p>
            <p>
              Ele transformou a falta de um diploma em um ponto de orgulho, argumentando que as universidades eram "elitistas e fora de contato" e um "golpe patrocinado pelo governo". Essa narrativa ressoou com jovens céticos em relação à educação tradicional, permitindo que Kirk se posicionasse como um representante autêntico da "maioria do país".
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-american-sunset flex items-center gap-3">
              <FontAwesomeIcon icon={faUniversity} className="h-6 w-6" />
              <span>A Construção da Turning Point USA (TPUSA)</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground leading-relaxed space-y-4">
            <p>
              A TPUSA foi fundada em 2012 por Kirk, com 18 anos, para "identificar, educar, treinar e organizar estudantes para promover os princípios de liberdade, livre mercado e governo limitado". Nascida na garagem de seus pais, a organização rapidamente se tornou uma operação de mídia bem financiada, atraindo "megadonors" conservadores.
            </p>
            <p>
              Com uma receita que atingiu 39,2 milhões de dólares em 2020, a TPUSA expandiu-se para mais de 3.500 campi, solidificando-se como a "força dominante no conservadorismo universitário" e a maior organização juvenil de direita nos EUA.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-american-sunset flex items-center gap-3">
              <FontAwesomeIcon icon={faHandshake} className="h-6 w-6" />
              <span>O Alinhamento com o Movimento Trump</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground leading-relaxed space-y-4">
            <p>
              2016 foi um ponto de virada. Embora com ressalvas iniciais, a TPUSA apoiou entusiasticamente Donald Trump. Kirk tornou-se um aliado central, servindo como assistente de campanha de Donald Trump Jr. e usando sua plataforma para endossar as alegações de Trump sobre a eleição de 2020.
            </p>
            <p>
              A sinergia entre os dois era evidente, ambos mestres na comunicação online. Kirk mobilizou apoiadores para o evento de 6 de janeiro de 2021, e sua influência se solidificou ainda mais após a eleição de 2024, com um papel na transição presidencial.
            </p>
          </CardContent>
        </Card>
      </div>

      <Separator className="my-12 bg-border/50" />

      <h2 className="text-3xl font-bold text-center mb-16 text-stars-blue">Linha do Tempo da Ascensão</h2>
      
      <div className="relative wrap overflow-hidden p-2 md:p-10 h-full">
        <div className="absolute border-opacity-20 border-muted-foreground/40 h-full border-2" style={{ left: '50%' }}></div>
        
        {timelineData.map((item, index) => (
          <div key={index} className={`mb-8 flex justify-between items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
            <div className="order-1 w-5/12 hidden md:block"></div>
            <div className="z-20 flex items-center order-1 bg-stars-blue shadow-xl w-24 h-8 rounded-full">
              <h1 className="mx-auto font-semibold text-md text-white">{item.year}</h1>
            </div>
            <div className="order-1 bg-card rounded-lg shadow-xl w-full md:w-5/12 px-6 py-4">
              <h3 className="font-bold text-american-sunset text-lg mb-2 flex items-center gap-2">
                <FontAwesomeIcon icon={item.icon} className="h-4 w-4" />
                <span>{item.title}</span>
              </h3>
              <p className="text-sm leading-snug tracking-wide text-muted-foreground">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sobre;