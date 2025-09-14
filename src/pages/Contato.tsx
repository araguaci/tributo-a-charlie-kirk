import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const Contato = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Obrigado pela sua mensagem! Este é um formulário de demonstração.");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="container mx-auto max-w-2xl py-12 px-4">
      <Card>
        <CardHeader className="text-center">
          <CardTitle className="text-3xl text-stars-blue">Deixe sua Mensagem</CardTitle>
          <CardDescription>
            Compartilhe uma memória ou pensamento em homenagem a Charlie Kirk.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Mensagem</Label>
              <Textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required rows={5} />
            </div>
            <Button type="submit" className="w-full bg-stars-blue hover:bg-stars-blue/90">
              Enviar Homenagem
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contato;