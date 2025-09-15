import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faFacebookF,
  faYoutube,
  faTiktok,
  faTelegramPlane,
  faSpotify,
  faApple,
  faThreads,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="border-t">
      <div className="flex flex-col items-center justify-center px-8 md:flex-row md:gap-2 md:py-3">
          <blockquote className="text-lg italic leading-relaxed text-foreground">
          Charlie Kirk nunca usou discurso de ódio. Ele usou um discurso que eles odiavam.
          </blockquote>
        </div>
      <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025. Site tributo não oficial, baseado em fontes públicas.
          </p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Charlie Kirk Socials */}
          <a
            href="https://x.com/charliekirk11"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Charlie Kirk no X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
          </a>
          <a
            href="https://instagram.com/charliekirk1776"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Charlie Kirk no Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
          </a>
          <a
            href="https://www.facebook.com/charliekirkusa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Charlie Kirk no Facebook"
          >
            <FontAwesomeIcon icon={faFacebookF} className="h-5 w-5" />
          </a>
          <a
            href="https://www.youtube.com/charliekirk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Charlie Kirk no YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
          </a>
          <a
            href="https://www.tiktok.com/@charliekirkshow"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Charlie Kirk no TikTok"
          >
            <FontAwesomeIcon icon={faTiktok} className="h-5 w-5" />
          </a>
          <a
            href="https://t.me/realcharliekirk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Charlie Kirk no Telegram"
          >
            <FontAwesomeIcon icon={faTelegramPlane} className="h-5 w-5" />
          </a>
          <a
            href="https://open.spotify.com/show/0LLIIAYfTJ0axsrOcgsE0V"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="The Charlie Kirk Show no Spotify"
          >
            <FontAwesomeIcon icon={faSpotify} className="h-5 w-5" />
          </a>
          <a
            href="https://podcasts.apple.com/us/podcast/the-charlie-kirk-show/id1460600818"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="The Charlie Kirk Show no Apple Podcasts"
          >
            <FontAwesomeIcon icon={faApple} className="h-5 w-5" />
          </a>
          <a
            href="https://www.threads.net/@charliekirk1776"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Charlie Kirk no Threads"
          >
            <FontAwesomeIcon icon={faThreads} className="h-5 w-5" />
          </a>

          {/* TPUSA Socials */}
          <a
            href="https://twitter.com/TPUSA"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Turning Point USA no X (Twitter)"
          >
            <FontAwesomeIcon icon={faXTwitter} className="h-5 w-5" />
            <span className="sr-only">TPUSA Twitter</span>
          </a>
          <a
            href="https://www.instagram.com/turningpointusa/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Turning Point USA no Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
            <span className="sr-only">TPUSA Instagram</span>
          </a>
          <a
            href="https://www.youtube.com/user/turningpointusa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary"
            aria-label="Turning Point USA no YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} className="h-5 w-5" />
            <span className="sr-only">TPUSA YouTube</span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;