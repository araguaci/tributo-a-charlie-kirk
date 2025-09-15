"use client";

import React from "react";
import ContactModalForm from "@/components/ContactModalForm"; // Importar o novo componente

const Contato = () => {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-primary">Entre em Contato</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Faça sua homenagem, pergunta, sugestão ou gostaria de compartilhar uma citação favorita? Clique no botão abaixo para abrir o formulário e nos enviar uma mensagem.
      </p>
      <div className="w-full flex justify-center"> {/* Centraliza o botão */}
        <ContactModalForm />
      </div>
    </div>
  );
};

export default Contato;