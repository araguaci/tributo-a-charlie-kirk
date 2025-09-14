import React from 'react';
import { quotes } from '@/data/kirkData';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

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
              <div className="flex items-start gap-4">
                <FontAwesomeIcon icon={faQuoteLeft} className="h-6 w-6 text-muted-foreground/50 mt-1 flex-shrink-0" />
                <blockquote className="text-lg italic leading-relaxed text-foreground">
                  "{quote}"
                </blockquote>
              </div>
            </CardContent>
            <CardFooter className="p-0 pt-4 flex justify-between items-center">
              <span className="text-sm text-muted-foreground">— Charlie Kirk</span>
              <Button
                variant="ghost"
                size="icon"
                onClick={(e) => {
                  e.preventDefault();
                  const tweetText = encodeURIComponent(`"${quote}" — Charlie Kirk #CharlieKirk #Citações`);
                  window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
                }}
                aria-label="Compartilhar no X"
              >
                <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Citacoes;