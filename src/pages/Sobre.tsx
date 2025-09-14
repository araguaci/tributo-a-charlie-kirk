import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";

const timelineEvents = [
  { year: 2012, title: "Fundação da Turning Point USA", description: "Criada enquanto ainda era estudante, a TPUSA hoje possui milhares de capítulos em universidades americanas." },
  { year: 2015, title: "Primeiro Debate Nacional", description: "Kirk enfrentou líderes progressistas em debates públicos, destacando-se pela eloquência e preparo." },
  { year: 2018, title: "Lançamento de 'Campus Battlefield'", description: "Livro que expõe o viés ideológico nas universidades e defende a liberdade acadêmica." },
  { year: 2020, title: "The Charlie Kirk Show alcança 1M de ouvintes", description: "O podcast diário consolida sua influência nacional." },
  { year: 2023, title: "Expansão Global da TPUSA", description: "Capítulos internacionais são criados, inspirando jovens fora dos EUA." },
];

const Sobre = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleEvent = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">O Legado de Liderança Juvenil de Charlie Kirk</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Charlie Kirk transformou sua paixão por princípios conservadores em um movimento global. Abaixo, uma linha do tempo interativa dos principais momentos de sua trajetória.
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