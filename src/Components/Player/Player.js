import React from 'react';

import './Player.css';

export const Player = props => {
  const picture = props.player.picture;
  const name = props.player.name;
  const nick = props.player.nick;
  const style = (name === 'John') ? {backgroundColor: '#99b433'} : {backgroundColor: '#da532c'};

  return (
    <div className="card">
      <div className="pic-title" style={style}>{name}</div>
      <img
        className="tennis-player-image"
        src={picture}
        alt="tennis player"
      />
      <div className="overlay" style={style}>
        <div className="text">
          <span>{name}</span>
          <span>A.K.A</span>
          <span>{nick}</span>
        </div>
      </div>
    </div>
  );
};
