import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { memorialData } from "@/data/memorialData";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPodcast, faVideo, faBook, faFilePdf, faLandmark, faLink } from '@fortawesome/free-solid-svg-icons';

const Memorial = () => {
  const renderLinks = (links: { nome: string; url: string }[]) => (
    <ul className="space-y-3">
      {links.map((link, index) => (
        <li key={index} className="flex items-start">
          <FontAwesomeIcon icon={faLink} className="h-4 w-4 text-primary mr-3 mt-1" />
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:text-primary hover:underline transition-colors"
          >
            {link.nome}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="container mx-auto max-w-5xl py-12 px-4">
      <div className="text-center mb-12">
        <FontAwesomeIcon icon={faLandmark} className="h-12 w-12 text-primary mx-auto mb-4" />
        <h1 className="text-4xl font-bold text-primary mb-4">Memorial Charlie Kirk</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Um espaço dedicado à memória, legado e impacto de Charlie Kirk, reunindo suas ideias, conquistas, debates marcantes, homenagens e o movimento que inspirou gerações. Navegue pelos principais momentos de sua trajetória e compartilhe sua homenagem.
        </p>
      </div>

      <Tabs defaultValue="podcasts" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 h-auto">
          <TabsTrigger value="podcasts" className="py-2">
            <FontAwesomeIcon icon={faPodcast} className="mr-2" /> Podcasts & Debates
          </TabsTrigger>
          <TabsTrigger value="videos" className="py-2">
            <FontAwesomeIcon icon={faVideo} className="mr-2" /> Vídeos & Docs
          </TabsTrigger>
          <TabsTrigger value="livros" className="py-2">
            <FontAwesomeIcon icon={faBook} className="mr-2" /> Livros & Publicações
          </TabsTrigger>
          <TabsTrigger value="pdfs" className="py-2">
            <FontAwesomeIcon icon={faFilePdf} className="mr-2" /> PDFs & Slides
          </TabsTrigger>
        </TabsList>

        <TabsContent value="podcasts">
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Podcasts & Debates</CardTitle>
            </CardHeader>
            <CardContent>{renderLinks(memorialData.podcasts)}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="videos">
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Vídeos & Documentários</CardTitle>
            </CardHeader>
            <CardContent>{renderLinks(memorialData.videos)}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="livros">
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">Livros & Publicações</CardTitle>
            </CardHeader>
            <CardContent>{renderLinks(memorialData.livros)}</CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="pdfs">
          <Card>
            <CardHeader>
              <CardTitle className="text-destructive">PDFs & Slides</CardTitle>
            </CardHeader>
            <CardContent>{renderLinks(memorialData.pdfs_slides)}</CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Memorial;