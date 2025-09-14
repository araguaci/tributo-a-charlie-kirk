import { Card, CardContent } from "@/components/ui/card";
import { quotes } from "../data/kirkData";
import { Twitter } from "lucide-react";

const Citacoes = () => {
  const createTwitterLink = (quote: string) => {
    const text = encodeURIComponent(`"${quote}" - Charlie Kirk`);
    return `https://twitter.com/intent/tweet?text=${text}`;
  };

  return (
    <div className="container mx-auto max-w-6xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Palavras de Inspiração</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Uma coleção de citações famosas de Charlie Kirk. Clique para compartilhar.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {quotes.map((quote, index) => (
          <Card key={index} className="flex flex-col justify-between group">
            <CardContent className="p-6">
              <blockquote className="text-lg font-medium">
                “{quote}”
              </blockquote>
            </CardContent>
            <a
              href={createTwitterLink(quote)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center p-4 bg-liberty-sky/10 text-liberty-sky opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <Twitter className="h-5 w-5 mr-2" />
              Compartilhar no X
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Citacoes;