import React from 'react';
import { Link } from 'react-router-dom';
import { articles } from '@/data/kirkData';
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { faNewspaper } from '@fortawesome/free-solid-svg-icons';

const Artigos = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Artigos e Análises</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Explore uma coleção de artigos e análises aprofundadas sobre a vida, o legado e as ideias de Charlie Kirk.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <Link to={`/artigos/${article.slug}`} key={article.slug}>
            <Card className="h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-stars-blue flex items-center gap-3">
                  <FontAwesomeIcon icon={faNewspaper} className="h-5 w-5 text-american-sunset" />
                  <span>{article.title}</span>
                </CardTitle>
                <CardDescription>{article.summary}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                {/* Conteúdo adicional ou imagem pode ser adicionado aqui */}
              </CardContent>
              <CardFooter className="p-6 pt-0 flex justify-end">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={(e) => {
                    e.preventDefault(); // Previne a navegação do card
                    const shareUrl = `${window.location.origin}/artigos/${article.slug}`;
                    const tweetText = encodeURIComponent(`${article.title} - Leia mais em: ${shareUrl} #CharlieKirk #Artigos`);
                    window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank');
                  }}
                  aria-label="Compartilhar no X"
                >
                  <FontAwesomeIcon icon={faXTwitter} className="h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Artigos;