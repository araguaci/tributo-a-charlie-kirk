import { useParams, Link } from "react-router-dom";
import { articles } from "../data/kirkData";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import NotFound from "./NotFound";

const ArtigoDetalhe = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="container mx-auto max-w-3xl py-12 px-4">
      <Button asChild variant="ghost" className="mb-8">
        <Link to="/artigos">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Voltar para Artigos
        </Link>
      </Button>
      <article className="prose lg:prose-xl dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold text-stars-blue mb-4">{article.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>
    </div>
  );
};

export default ArtigoDetalhe;