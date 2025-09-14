import React from 'react';
import { quotes } from '@/data/kirkData';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button'; // Importar o componente Button
import { Twitter } from 'lucide-react'; // Importar o ícone do Twitter

const Citacoes = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Citações Inspiradoras</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Uma coleção das frases mais impactantes e memoráveis de Charlie Kirk, que resumem sua visão sobre liberdade, conservadorismo e a cultura.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <Card key={index} className="h-full flex flex-col justify-between p-6 bg-card hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <blockquote className="text-lg italic leading-relaxed text-foreground">
                "{quote}"
              </blockquote>
            </CardContent>
            <CardFooter className="p-0 pt-4 flex justify-between items-center"> {/* Ajustado para alinhar o texto e o botão */}
              <span className="text-sm text-muted-foreground">— Charlie Kirk</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.preventDefault(); // Previne a navegação do card se ele for um link
                  const tweetText = encodeURIComponent(`"${quote}" — Charlie Kirk #CharlieKirk #Citações`);
                  window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
                }}
                aria-label="Compartilhar no X"
              >
                <Twitter className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Citacoes;