import React from 'react';

import './Match.css';

export const Match = props => {
  const options = {
    weekday: 'short',
    month: 'short',
    day: 'numeric'
  };
  const matchDate = props.match.matchDate.toLocaleDateString('en-GB', options);
  const match = props.match.matchScore;
  const matchNumber = props.match.id;
  const note = props.match.notes;
  const winner = props.match.winner;
  // style podle hrace
  const style =
    winner === 'John'
      ? { backgroundColor: '#dce9af', color: '#000' }
      : winner === 'Phil'
      ? { backgroundColor: '#FFBCB8', color: '#000' }
      : { backgroundColor: '#e6e6e6', color: '#000' };

  const set = match.map((set, i) => {
    return (
      <React.Fragment key={i}>
        <p>
          {set[0]}:{set[1]}
        </p>
        <div>/</div>
      </React.Fragment>
    );
  });

  const clickToShowHideScore = e => {
    // console.log(e.target.classList.toggle("active"));
    const accordion = e.target;
    const panel = e.target.nextElementSibling;
    const children = panel.childNodes;
    const note = panel.childNodes[children.length - 1];
    const target = e.target;
    console.log('target je :', target);
    console.log('note :', note);
    console.log('panel :', panel);
    // prepina class active
    e.target.classList.toggle('active');
    // prepina zobrazeni - block/none, a vraci barvu pozadi
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
      if (winner === 'John') {
        e.target.style.backgroundColor = '#dce9af';
        e.target.style.color = '#000';
      } else if (winner === 'Phil') {
        e.target.style.backgroundColor = '#FFBCB8';
        e.target.style.color = '#000';
      } else {
        e.target.style.backgroundColor = '#e6e6e6';
        e.target.style.color = '#000';
      }
    } else {
      panel.style.display = 'block';
      accordion.style.borderBottomLeftRadius = 0;
      accordion.style.borderBottomRightRadius = 0;
    }
    // nezobrazi prazdnou poznamku
    if (note.textContent === '') {
      note.style.display = 'none';
    }
    console.log(
      'obsahuje class active? ',
      e.target.classList.contains('active')
    );
  };

  const mouseIn = e => {
    if (winner === 'John') {
      e.target.style.backgroundColor = '#457821';
      e.target.style.color = '#fff';
    } else if (winner === 'Phil') {
      e.target.style.backgroundColor = '#8b0000';
      e.target.style.color = '#fff';
    } else {
      e.target.style.backgroundColor = '#8c8c8c';
      e.target.style.color = '#fff';
    }
  };
  const mouseOut = e => {
    if (
      props.match.winner === 'John' &&
      !e.target.classList.contains('active')
    ) {
      e.target.style.backgroundColor = '#dce9af';
      e.target.style.color = '#000';
    } else if (
      props.match.winner === 'Phil' &&
      !e.target.classList.contains('active')
    ) {
      e.target.style.backgroundColor = '#FFBCB8';
      e.target.style.color = '#000';
    } else if (
      props.match.winner === '' &&
      !e.target.classList.contains('active')
    ) {
      e.target.style.backgroundColor = '#e6e6e6';
      e.target.style.color = '#000';
    }
  };

  return (
    <div className="match-entry">
      <div
        className="accordion"
        style={style}
        onClick={clickToShowHideScore}
        onMouseOut={mouseOut}
        onMouseEnter={mouseIn}
      >
        {matchDate} - {matchNumber}. zápas
        {winner !== '' ? ` vyhrává ${winner}` : ' končí remízou'}
      </div>
      <div className="panel">
        {set}
        <span>{note}</span>
      </div>
    </div>
  );
};
