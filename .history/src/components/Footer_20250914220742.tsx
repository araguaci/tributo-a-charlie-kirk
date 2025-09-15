import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <blockquote class="text-lg italic leading-relaxed text-foreground">
          Charlie Kirk nunca usou discurso de ódio. Ele usou um discurso que eles odiavam.
          </blockquote>
        </div>
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025. Site tributo não oficial, baseado em fontes públicas.
          </p>
        </div>
        <div className="flex items-center space-x-2">
          <a
            href="https://x.com/charliekirk11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
            <span className="sr-only">Twitter</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;