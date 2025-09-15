import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { mentirasData } from '@/data/mentirasData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const DesmontandoMentiras = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">
        <FontAwesomeIcon icon={faLightbulb} className="mr-3 h-8 w-8 text-accent" />
        Desmontando Mentiras
      </h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Desmontando mentiras propagadas por jornalistas que usaram suas cadeiras em rede nacional para manchar a reputação de alguém com quem não conseguem contrapor ou dialogar.
      </p>

      <Card className="mb-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-destructive">Alegações e Fatos</CardTitle>
          <CardDescription>Clique em cada alegação para ver o fato correspondente.</CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible className="w-full">
            {mentirasData.map((item, index) => (
              <AccordionItem value={`item-${index}`} key={index}>
                <AccordionTrigger className="text-lg font-medium text-primary hover:no-underline text-left">
                  {item.alegacao}
                </AccordionTrigger>
                <AccordionContent className="text-base text-foreground leading-relaxed p-4 bg-muted/30 rounded-b-md">
                  {item.fato}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </CardContent>
      </Card>
    </div>
  );
};

export default DesmontandoMentiras;