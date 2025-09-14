import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { articles } from '@/data/kirkData';
import { Button } from '@/components/ui/button';
import { ChevronLeft } from 'lucide-react';

const ArtigoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="container mx-auto max-w-4xl py-12 px-4 text-center">
        <h1 className="text-3xl font-bold text-red-500 mb-4">Artigo não encontrado</h1>
        <p className="text-lg text-muted-foreground mb-8">
          O artigo que você está procurando não existe ou foi removido.
        </p>
        <Button onClick={() => navigate('/artigos')}>
          <ChevronLeft className="mr-2 h-4 w-4" /> Voltar para Artigos
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <Button onClick={() => navigate('/artigos')} variant="outline" className="mb-8">
        <ChevronLeft className="mr-2 h-4 w-4" /> Voltar para Artigos
      </Button>
      <h1 className="text-4xl font-bold text-stars-blue mb-4">{article.title}</h1>
      <p className="text-lg text-muted-foreground mb-8">{article.summary}</p>
      <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />
    </div>
  );
};

export default ArtigoDetalhe;