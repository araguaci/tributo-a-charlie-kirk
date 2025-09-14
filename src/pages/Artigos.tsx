import { Link } from "react-router-dom";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { articles } from "../data/kirkData";

const Artigos = () => {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Artigos e Reflexões</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Explore os pensamentos e ensinamentos de Charlie Kirk sobre liderança, política e cultura.
      </p>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <Card key={article.slug} className="flex flex-col">
            <CardHeader>
              <CardTitle>{article.title}</CardTitle>
              <CardDescription>{article.summary}</CardDescription>
            </CardHeader>
            <CardContent className="flex-grow"></CardContent>
            <CardFooter>
              <Button asChild className="w-full bg-stripes-red hover:bg-stripes-red/90">
                <Link to={`/artigos/${article.slug}`}>Ler Artigo</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Artigos;