import React from 'react';
import { Link } from 'react-router-dom';
import { quotes } from '@/data/kirkData';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const FeaturedQuotes = () => {
  const featuredQuotes = quotes.slice(0, 3); // Pegar as 3 primeiras citações

  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold text-center text-stars-blue mb-8">Citações em Destaque</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {featuredQuotes.map((quote, index) => (
          <Card key={index} className="p-6 flex flex-col justify-between hover:shadow-lg transition-shadow duration-300">
            <CardContent className="p-0">
              <blockquote className="text-lg italic leading-relaxed text-foreground">
                "{quote}"
              </blockquote>
            </CardContent>
            <p className="text-right text-sm text-muted-foreground mt-4">— Charlie Kirk</p>
          </Card>
        ))}
      </div>
      <div className="flex justify-center mt-8">
        <Link to="/citacoes">
          <Button size="lg" variant="outline">
            Ver Todas as Citações
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default FeaturedQuotes;