import React from 'react';
import { Player } from '../Player/Player';

import './PlayersInvolved.css';

export const PlayersInvolved = props => {
  return (
    <div className='players-involved'>
      {props.players.map(player => {
        return <Player key={player.id} player={player}/>;
      })}
    </div>
  );
};
