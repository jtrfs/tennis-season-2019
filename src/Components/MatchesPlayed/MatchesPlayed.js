import React from 'react';
import { Match } from '../Match/Match';

import './MatchesPlayed.css';

export const MatchesPlayed = props => {
  return (
    <div className="matches">
      {props.matches.map(match => {
        return <Match key={match.id} match={match} />;
      })}
    </div>
  );
};
