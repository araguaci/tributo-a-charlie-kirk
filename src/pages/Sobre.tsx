import React from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Sobre = () => {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Sobre Charlie Kirk</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Conheça a trajetória, os princípios e o impacto de Charlie Kirk, uma das vozes mais influentes do conservadorismo jovem nos Estados Unidos.
      </p>

      {/* Imagem de Charlie Kirk */}
      <div className="flex justify-center mb-12">
        <img
          src="/CharlieKirk.jpg"
          alt="Charlie Kirk"
          className="rounded-lg shadow-lg max-w-full h-auto md:max-w-md lg:max-w-lg"
        />
      </div>

      <div className="grid grid-cols-1 gap-8">
        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-american-sunset">Quem é Charlie Kirk?</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground leading-relaxed">
            <p className="mb-4">
              Charlie Kirk é um ativista, autor e comentarista político americano, mais conhecido como o fundador e CEO da Turning Point USA (TPUSA). Nascido em 1993, Kirk emergiu como uma figura proeminente no movimento conservador, defendendo princípios de governo limitado, livre mercado e liberdade individual.
            </p>
            <p className="mb-4">
              Desde cedo, Kirk demonstrou um forte interesse em política e ativismo. Ele fundou a TPUSA em 2012, com o objetivo de identificar, educar, treinar e organizar estudantes para promover esses princípios em campi universitários e escolas secundárias em todo o país.
            </p>
            <p>
              Sua organização cresceu exponencialmente, tornando-se uma das maiores e mais influentes forças no ativismo jovem conservador, com capítulos em centenas de instituições de ensino.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-american-sunset">A Fundação da Turning Point USA</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground leading-relaxed">
            <p className="mb-4">
              A Turning Point USA foi criada por Charlie Kirk com a missão de combater o que ele via como a hegemonia ideológica progressista nas universidades americanas. A organização se concentra em capacitar jovens conservadores a se tornarem vozes eficazes em seus campi e comunidades.
            </p>
            <p className="mb-4">
              Através de eventos, conferências, programas de liderança e uma forte presença online, a TPUSA se tornou um centro para o debate de ideias e a mobilização de estudantes em torno de causas conservadoras. Kirk é frequentemente elogiado por sua capacidade de se conectar com uma audiência jovem e por sua abordagem direta e sem rodeios aos problemas políticos e culturais.
            </p>
            <p>
              Ele também é o apresentador do popular podcast "The Charlie Kirk Show", onde discute notícias, política e cultura de uma perspectiva conservadora, alcançando milhões de ouvintes diariamente.
            </p>
          </CardContent>
        </Card>

        <Card className="p-6">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold text-american-sunset">Legado e Impacto</CardTitle>
          </CardHeader>
          <CardContent className="text-lg text-foreground leading-relaxed">
            <p className="mb-4">
              O legado de Charlie Kirk é marcado por sua dedicação em moldar a próxima geração de líderes conservadores. Ele inspirou inúmeros jovens a se engajarem na política, a defenderem suas convicções e a questionarem o status quo.
            </p>
            <p className="mb-4">
              Seu trabalho com a TPUSA e sua presença na mídia o estabeleceram como uma figura central no movimento conservador, influenciando discussões sobre liberdade de expressão, valores tradicionais e o futuro da América. Kirk continua a ser uma voz poderosa e, por vezes, controversa, no cenário político contemporâneo.
            </p>
            <p>
              Sua visão de empoderar jovens para a defesa de princípios conservadores ressoa com muitos e garante que suas ideias continuarão a ser debatidas e a influenciar o discurso público.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Sobre;