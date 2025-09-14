import React from 'react';

interface FlagIconProps {
  nation: string;
  className?: string;
}

const nationToCode: Record<string, string> = {
  "Estados Unidos": "us",
  "Argentina": "ar",
  "Itália": "it",
  "Israel": "il",
  "Hungria": "hu",
  "Reino Unido": "gb",
  "Espanha": "es",
  "Vaticano": "va",
  "Romênia": "ro",
  "Canadá": "ca",
  "França": "fr",
  "Alemanha": "de",
  "Países Baixos": "nl",
  "Brasil": "br",
  "El Salvador": "sv",
};

const FlagIcon: React.FC<FlagIconProps> = ({ nation, className }) => {
  const code = nationToCode[nation];
  if (!code) {
    return null;
  }

  const src = `https://flagcdn.com/${code}.svg`;

  return <img src={src} alt={`Bandeira de ${nation}`} className={className} />;
};

export default FlagIcon;