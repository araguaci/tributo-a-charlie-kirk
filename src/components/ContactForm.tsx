"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "O nome deve ter pelo menos 2 caracteres.",
  }),
  email: z.string().email({
    message: "Por favor, insira um e-mail válido.",
  }),
  message: z.string().min(10, {
    message: "A mensagem deve ter pelo menos 10 caracteres.",
  }).max(500, {
    message: "A mensagem não pode exceder 500 caracteres.",
  }),
});

type ContactFormValues = z.infer<typeof formSchema>;

const ContactForm = () => {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = (values: ContactFormValues) => {
    toast.success("Mensagem enviada com sucesso!", {
      description: "Agradecemos o seu contato. Responderemos em breve.",
    });
    form.reset();
  };

  return (
    <form
      onSubmit={form.handleSubmit(onSubmit)}
      action="https://formspree.io/f/mkgwoggg"
      method="POST"
      className="space-y-6"
    >
      <div>
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          {...form.register("name")}
          className="mt-1"
        />
        {form.formState.errors.name && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...form.register("email")}
          className="mt-1"
        />
        {form.formState.errors.email && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
        )}
      </div>
      <div>
        <Label htmlFor="message">Mensagem</Label>
        <Textarea
          id="message"
          {...form.register("message")}
          rows={5}
          className="mt-1"
        />
        {form.formState.errors.message && (
          <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
        )}
      </div>
      <Button type="submit" className="w-full bg-stars-blue hover:bg-stars-blue/90">
        Enviar Mensagem
      </Button>
    </form>
  );
};

export default ContactForm;