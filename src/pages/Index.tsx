import React from 'react';
import { Link } from 'react-router-dom';
import { quotes, articles } from '@/data/kirkData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Index = () => {
  const featuredQuotes = quotes.slice(0, 3); // Pegar as 3 primeiras citações
  const featuredArticles = articles.slice(0, 2); // Pegar os 2 primeiros artigos

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-stars-blue mb-6 leading-tight">
          Charlie Kirk: Voz da Nova Geração Conservadora
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Explore o legado, as ideias e o impacto de um dos mais influentes ativistas jovens da atualidade.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/artigos">
            <Button size="lg" className="bg-american-sunset hover:bg-american-sunset/90 text-white">
              Ver Artigos
            </Button>
          </Link>
          <Link to="/citacoes">
            <Button size="lg" variant="outline">
              Ver Citações
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Quotes Section */}
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
      </section>

      {/* Featured Articles Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-stars-blue mb-8">Artigos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Link to={`/artigos/${article.slug}`} key={article.slug}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-stars-blue">{article.title}</CardTitle>
                  <CardDescription>{article.summary}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <Button variant="link" className="p-0 h-auto">Leia Mais</Button>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>

      {/* Call to Action for About Page */}
      <section className="text-center bg-american-sunset/10 p-10 rounded-lg">
        <h2 className="text-3xl font-bold text-stars-blue mb-4">Conheça Mais Sobre Charlie Kirk</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Aprofunde-se na biografia, na trajetória e nos principais marcos da carreira de Charlie Kirk.
        </p>
        <Link to="/sobre">
          <Button size="lg" className="bg-stars-blue hover:bg-stars-blue/90 text-white">
            Sobre Charlie Kirk
          </Button>
        </Link>
      </section>
    </div>
  );
};

export default Index;