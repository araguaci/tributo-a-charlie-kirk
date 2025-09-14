import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '@/data/kirkData';
import { Button } from '@/components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

const ArtigoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-destructive mb-4">Artigo não encontrado</h1>
        <p className="text-lg text-muted-foreground mb-8">
          O artigo que você está procurando não existe ou foi removido.
        </p>
        <Button onClick={() => navigate('/artigos')}>
          <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-4 w-4" /> Voltar para Artigos
        </Button>
      </div>
    );
  }

  const shareUrl = window.location.href;
  const tweetText = encodeURIComponent(`${article.title} - Leia mais em: ${shareUrl} #CharlieKirk #Artigos`);

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <div className="flex justify-between items-center mb-8">
        <Button onClick={() => navigate('/artigos')} variant="outline">
          <FontAwesomeIcon icon={faChevronLeft} className="mr-2 h-4 w-4" /> Voltar para Artigos
        </Button>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => window.open(`https://twitter.com/intent/tweet?text=${tweetText}`, '_blank')}
          aria-label="Compartilhar no X"
        >
          <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
        </Button>
      </div>
      <h1 className="text-4xl font-bold text-primary mb-4">{article.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{article.summary}</p>
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArtigoDetalhe;