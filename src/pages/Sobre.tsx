import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const timelineEvents = [
  { year: 1993, title: "Nascimento", description: "Charlie Kirk nasceu em Arlington Heights, Illinois." },
  { year: 2012, title: "Fundação da Turning Point USA", description: "Aos 18 anos, Kirk funda a TPUSA para organizar estudantes conservadores em campi universitários." },
  { year: 2016, title: "The Charlie Kirk Show", description: "Lança seu podcast diário, que rapidamente se torna um dos programas conservadores mais populares." },
  { year: 2019, title: "Publicação de 'Campus Battlefield'", description: "Escreve o livro detalhando como a esquerda domina as universidades americanas e como os conservadores podem revidar." },
  { year: 2020, title: "Expansão Nacional", description: "A TPUSA atinge um alcance significativo, com presença em mais de 2.500 campi e milhões de seguidores online." },
  { year: 2025, title: "Falecimento", description: "Charlie Kirk falece em 10 de setembro de 2025, deixando um legado duradouro de ativismo e inspiração." },
];

const Sobre = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleEvent = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">O Legado de um Visionário</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Uma linha do tempo interativa destacando os marcos da vida e carreira de Charlie Kirk.
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
    </div>
  );
};

export default Sobre;