"use client";

import React from "react";
import ContactForm from "@/components/ContactForm";
import { Toaster } from "@/components/ui/sonner";

const Contato = () => {
  return (
    <div className="container mx-auto max-w-2xl py-12 px-4">
      <h1 className="text-4xl font-bold text-center mb-8 text-stars-blue">Entre em Contato</h1>
      <p className="text-center text-lg text-muted-foreground mb-12">
        Tem alguma pergunta, sugestão ou gostaria de compartilhar uma citação favorita? Use o formulário abaixo para nos enviar uma mensagem.
      </p>
      <ContactForm />
      <Toaster />
    </div>
  );
};

export default Contato;