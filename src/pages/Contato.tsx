"use client";

import React from "react";
// Removido: import ContactForm from "@/components/ContactForm";
// Removido: import { Toaster } from "@/components/ui/sonner";

const Contato = () => {
  const googleFormEmbedUrl = "https://docs.google.com/forms/d/e/1FAIpQLSd6r8QZdnr_M_eHZZzSYH6F6giU2wIzczrH5TFFQzlpvx_u3w/viewform?embedded=true";

  return (
    <div className="container mx-auto max-w-2xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Entre em Contato</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Tem alguma pergunta, sugestão ou gostaria de compartilhar uma citação favorita? Use o formulário abaixo para nos enviar uma mensagem.
      </p>
      <div className="w-full">
        <iframe
          src={googleFormEmbedUrl}
          width="100%"
          height="800" // Altura ajustável conforme a necessidade do formulário
          frameBorder="0"
          marginHeight={0} // Corrigido para número
          marginWidth={0} // Corrigido para número
          className="w-full h-[800px] border-0 rounded-lg shadow-lg"
          loading="lazy"
          title="Formulário de Contato Charlie Kirk"
        >
          Carregando…
        </iframe>
      </div>
      {/* Removido: <Toaster /> */}
    </div>
  );
};

export default Contato;