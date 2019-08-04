import React from 'react';
import { Match } from '../Match/Match';

import './MatchesPlayed.css';

export const MatchesPlayed = props => {
  const vysledkyZapasu = props.setResults;
  console.log('matchSetResults in MatchesPlayed.js: ', vysledkyZapasu);

  return (
    <div className="matches">
      {props.matches.map((match, i) => {
        return <Match key={match.id} match={match} vysledkyZapasu={vysledkyZapasu} />;
      })}
    </div>
  );
};
