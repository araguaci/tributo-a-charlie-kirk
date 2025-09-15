import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '@/data/kirkData';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { homenagens } from "@/data/homenagensData";
import HomenagemCard from "@/components/HomenagemCard";
import FeaturedQuotes from "@/components/FeaturedQuotes";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faAddressCard, faQuoteLeft } from '@fortawesome/free-solid-svg-icons';

const Index = () => {
  const featuredArticles = articles.slice(0, 2);

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-extrabold text-primary mb-6 leading-tight">
          Charlie Kirk: Voz da Nova Geração Conservadora
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Explore o legado, as ideias e o impacto de um dos mais influentes ativistas jovens da atualidade.
        </p>
        <div className="flex justify-center space-x-4">
          <Link to="/artigos">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <FontAwesomeIcon icon={faNewspaper} className="mr-2 h-4 w-4" />
              Ver Artigos
            </Button>
          </Link>
          <Link to="/citacoes">
            <Button size="lg" variant="outline">
              <FontAwesomeIcon icon={faQuoteLeft} className="mr-2 h-4 w-4" />
              Ver Citações
            </Button>
          </Link>
        </div>
      </section>

      {/* Featured Quotes Section */}
      <FeaturedQuotes />

      {/* Featured Articles Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-primary mb-8">Artigos Recentes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featuredArticles.map((article) => (
            <Link to={`/artigos/${article.slug}`} key={article.slug}>
              <Card className="h-full flex flex-col hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-primary">{article.title}</CardTitle>
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
      <section className="text-center bg-primary/10 p-10 rounded-lg">
        <h2 className="text-3xl font-bold text-primary mb-4">Conheça Mais Sobre Charlie Kirk</h2>
        <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto">
          Aprofunde-se na biografia, na trajetória e nos principais marcos da carreira de Charlie Kirk.
        </p>
        <Link to="/sobre">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
            <FontAwesomeIcon icon={faAddressCard} className="mr-2 h-4 w-4" />
            Sobre Charlie Kirk
          </Button>
        </Link>
      </section>

      {/* Homenagens Section */}
      <section id="homenagens" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary">Homenagens de Líderes Mundiais</h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Mensagens de líderes e personalidades de todo o mundo em memória de Charlie Kirk.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-7xl items-start gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-12">
            {homenagens.map((homenagem, index) => (
              <HomenagemCard key={index} homenagem={homenagem} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;