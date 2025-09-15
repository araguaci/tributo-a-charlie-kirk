import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMicrophoneAlt, faQuoteRight, faLink } from '@fortawesome/free-solid-svg-icons';
import { vigiliaData } from "@/data/vigiliaData";

const Vigilia = () => {
  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <div className="text-center mb-12">
        <FontAwesomeIcon icon={faMicrophoneAlt} className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-4">Vigília em Homenagem a Charlie Kirk</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Falas emocionantes de autoridades e figuras públicas presentes na vigília de Charlie Kirk no Kennedy Center, destacando seu legado e impacto.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        {vigiliaData.map((item, index) => (
          <Card key={index} className="flex flex-col justify-between">
            <CardHeader>
              <CardTitle className="text-destructive">{item.tema}</CardTitle>
              <CardDescription className="text-muted-foreground">
                <FontAwesomeIcon icon={faQuoteRight} className="mr-2" />
                {item.citacao}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm font-semibold text-foreground mb-2">
                — {item.autor}
              </p>
              <p className="text-sm text-muted-foreground mb-3">
                {item.trecho}
                {item.minuto_aproximado && ` (aprox. ${item.minuto_aproximado})`}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.etiquetas.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex justify-end">
              {item.fonte_video && (
                <a
                  href={item.fonte_video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline flex items-center"
                >
                  <FontAwesomeIcon icon={faLink} className="mr-1" />
                  Ver Fonte
                </a>
              )}
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Vigilia;