import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faNewspaper, faQuoteLeft, faEnvelope, faLightbulb, faLandmark, faMicrophoneAlt, faFlagUsa } from "@fortawesome/free-solid-svg-icons";
import BrandIcon from "./BrandIcon";

const Header = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary flex items-center gap-2 ${
      isActive ? "text-primary" : "text-muted-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <BrandIcon className="h-6 w-6 text-primary" />
          <span className="font-bold sm:inline-block">
            Charlie Kirk Memorial
          </span>
        </Link>
        <nav className="flex flex-wrap items-center space-x-4 lg:space-x-6">
          <NavLink to="/" className={navLinkClass}>
            <FontAwesomeIcon icon={faHome} className="h-4 w-4" />
            <span>Home</span>
          </NavLink>
          <NavLink to="/sobre" className={navLinkClass}>
            <FontAwesomeIcon icon={faFlagUsa} className="h-4 w-4" />
            <span>Kirk</span>
          </NavLink>
          <NavLink to="/artigos" className={navLinkClass}>
            <FontAwesomeIcon icon={faNewspaper} className="h-4 w-4" />
            <span>Artigos</span>
          </NavLink>
          <NavLink to="/citacoes" className={navLinkClass}>
            <FontAwesomeIcon icon={faQuoteLeft} className="h-4 w-4" />
            <span>Citações</span>
          </NavLink>
          <NavLink to="/desmontando-mentiras" className={navLinkClass}>
            <FontAwesomeIcon icon={faLightbulb} className="h-4 w-4" />
            <span>Mentiras</span>
          </NavLink>
          <NavLink to="/memorial" className={navLinkClass}>
            <FontAwesomeIcon icon={faLandmark} className="h-4 w-4" />
            <span>Memorial</span>
          </NavLink>
          <NavLink to="/vigilia" className={navLinkClass}>
            <FontAwesomeIcon icon={faMicrophoneAlt} className="h-4 w-4" />
            <span>Vigília</span>
          </NavLink>
          <NavLink to="/contato" className={navLinkClass}>
            <FontAwesomeIcon icon={faEnvelope} className="h-4 w-4" />
            <span>Contato</span>
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;