"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const ContactModalForm = () => {
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd6r8QZdnr_M_eHZZzSYH6F6giU2wIzczrH5TFFQzlpvx_u3w/viewform?embedded=true";

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full max-w-xs mx-auto bg-primary hover:bg-primary/90">
          Abrir Formulário de Contato
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] p-0"> {/* Ajuste o max-w para o tamanho do iframe */}
        <DialogHeader className="p-6 pb-0">
          <DialogTitle>Entre em Contato</DialogTitle>
          <DialogDescription>
            Preencha o formulário abaixo para nos enviar uma mensagem.
          </DialogDescription>
        </DialogHeader>
        <div className="w-full h-[600px] sm:h-[800px] overflow-hidden rounded-b-lg"> {/* Altura ajustável para o iframe */}
          <iframe
            src={googleFormEmbedUrl}
            width="100%"
            height="100%"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full h-full border-0"
            loading="lazy"
            title="Formulário de Contato Charlie Kirk"
          >
            Carregando…
          </iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModalForm;