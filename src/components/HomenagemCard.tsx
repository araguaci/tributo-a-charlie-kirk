import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import FlagIcon from './FlagIcon';
import { type Homenagem } from '@/data/homenagensData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

interface HomenagemCardProps {
  homenagem: Homenagem;
}

const HomenagemCard: React.FC<HomenagemCardProps> = ({ homenagem }) => {
  return (
    <Card className="flex flex-col h-full">
      <CardHeader>
        <div className="flex items-center gap-4">
          <div className="relative">
            <FlagIcon nation={homenagem.nação} className="w-10 h-auto rounded-sm shadow" />
            <FontAwesomeIcon icon={faUserCircle} className="absolute -bottom-2 -right-2 w-5 h-5 text-muted-foreground bg-background rounded-full p-0.5" />
          </div>
          <div>
            <CardTitle className="text-lg">{homenagem.nome}</CardTitle>
            <p className="text-sm text-muted-foreground">{homenagem.nação}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground italic">"{homenagem.declaração}"</p>
      </CardContent>
    </Card>
  );
};

export default HomenagemCard;