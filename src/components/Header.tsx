import { Link, NavLink } from "react-router-dom";
import { Flag } from "lucide-react";

const Header = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `text-sm font-medium transition-colors hover:text-primary ${
      isActive ? "text-primary" : "text-muted-foreground"
    }`;

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <Link to="/" className="mr-6 flex items-center space-x-2">
          <Flag className="h-6 w-6 text-stars-blue" />
          <span className="font-bold sm:inline-block">
            Homenagem a Charlie Kirk
          </span>
        </Link>
        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>
          <NavLink to="/sobre" className={navLinkClass}>
            Sobre Kirk
          </NavLink>
          <NavLink to="/artigos" className={navLinkClass}>
            Artigos
          </NavLink>
          <NavLink to="/citacoes" className={navLinkClass}>
            Citações
          </NavLink>
          <NavLink to="/contato" className={navLinkClass}>
            Contato
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;