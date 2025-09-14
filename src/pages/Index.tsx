import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div>
      <section className="relative h-[60vh] flex items-center justify-center text-center text-white bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/placeholder.svg')" }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative z-10 p-4">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Inspirando Gerações: O Legado de Charlie Kirk
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">
            Celebrando a vida e o impacto de um líder que dedicou sua voz à liberdade, ao conservadorismo e à próxima geração.
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <img src="/placeholder.svg" alt="Charlie Kirk" className="w-32 h-32 rounded-full mx-auto mb-6 border-4 border-stars-blue" />
          <h2 className="text-3xl font-bold text-stars-blue mb-4">Charlie Kirk (1993 – 2025)</h2>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Nascido em 1993, Charlie Kirk emergiu como uma das vozes conservadoras mais influentes de sua geração. Em 2012, fundou a Turning Point USA, uma organização sem fins lucrativos que rapidamente se tornou um movimento nacional para jovens ativistas. Através de seu podcast, "The Charlie Kirk Show", e de inúmeros discursos em campi universitários, ele defendeu incansavelmente a liberdade de expressão, os valores cristãos e o excepcionalismo americano. Charlie faleceu em 10 de setembro de 2025, mas seu legado de inspirar jovens a se envolverem e lutarem por suas crenças continua vivo.
          </p>
          <Button asChild size="lg" className="bg-stripes-red hover:bg-stripes-red/90">
            <Link to="/artigos">Explore Seus Ensinamentos</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;