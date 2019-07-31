import React, { Component } from 'react';
import { Navbar } from './Components/Navbar/Navbar';
import { PlayersInvolved } from './Components/PlayersInvolved/PlayersInvolved';
import { MatchesPlayed } from './Components/MatchesPlayed/MatchesPlayed';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          id: 1,
          name: 'John',
          picture: 'tennis-player-1.png',
          nick: 'Smasher'
        },
        {
          id: 2,
          name: 'Philip',
          picture: 'tennis-player-2.png',
          nick: 'Lobster'
        }
      ],
      booking: [
        {
          name:
            'https://jdemenato.cz/reservation/tenis-milo-olomouc/reservationcalendaroverview'
        },
        { name: 'https://www.omegasport.cz/rezervace.html?typ=8&druh=1' },
        { name: 'https://sport-hodolany.isportsystem.cz/' },
        { name: 'https://tenisholice.cz/' }
      ],
      matches: [
        {
          id: 1,
          matchDate: new Date('2019-06-02'),
          matchScore: [[6, 4], [2, 0]],
          winner: 'John'
        },
        {
          id: 2,
          matchDate: new Date('2019-06-07'),
          matchScore: [[6, 4], [3, 2]],
          winner: 'John'
        },
        {
          id: 3,
          matchDate: new Date('2019-06-21'),
          matchScore: [[0, 6], [4, 6], [4, 3]],
          winner: 'Phil'
        },
        {
          id: 4,
          matchDate: new Date('2019-06-22'),
          matchScore: [[0, 6], [4, 6]],
          winner: 'Phil'
        },
        {
          id: 5,
          matchDate: new Date('2019-06-25'),
          matchScore: [[6, 3], [3, 3]],
          winner: 'John'
        },
        {
          id: 6,
          matchDate: new Date('2019-06-29'),
          matchScore: [[6, 2], [2, 6], [4, 6]],
          winner: 'Phil'
        },
        {
          id: 7,
          matchDate: new Date('2019-07-02'),
          matchScore: [[4, 6], [1, 6], [4, 6]],
          winner: 'Phil'
        },
        {
          id: 8,
          matchDate: new Date('2019-07-05'),
          matchScore: [[7, 5], [7, 5]],
          winner: 'John'
        },
        {
          id: 9,
          matchDate: new Date('2019-07-06'),
          matchScore: [[0, 6], [3, 6]],
          winner: 'Phil'
        },
        {
          id: 10,
          matchDate: new Date('2019-07-09'),
          matchScore: [[7, 5], [6, 4], [2, 0]],
          winner: 'John'
        },
        {
          id: 11,
          matchDate: new Date('2019-07-17'),
          matchScore: [[3, 6], [4, 6]],
          winner: 'Phil'
        },
        {
          id: 12,
          matchDate: new Date('2019-07-19'),
          matchScore: [[1, 6], [6, 0]],
          winner: ''
        },
        {
          id: 13,
          matchDate: new Date('2019-07-21'),
          matchScore: [[0, 6], [0, 6], [6, 1], [2, 3]],
          winner: 'Phil'
        },
        {
          id: 14,
          matchDate: new Date('2019-07-28'),
          matchScore: [[1, 6], [4, 6], [2, 2]],
          winner: 'Phil',
          notes: ''
        }
      ]
    };
  }

  render() {
    const { players, booking, matches } = this.state;
    // array kurtu, kde muzeme hrat
    const courts = booking.map(court => {
      return court.name;
    });
    // hraci: ja a Filip
    const playersInvolved = players.map(player => {
      return player;
    });
    // array vsech zapasu se vsemi udaji (id, date, score)
    const matchesPlayed = matches.map(match => {
      return match;
    });
    // array skore vsech zapasu
    const generalScore = matches.map((match, i) => {
      return match.matchScore;
    });
    console.log(generalScore);

    // array celkovych vysledku vsech zapasu
    const individualMatchScore = generalScore.map((score, i) => {
      let playerOneScore = 0;
      let playerTwoScore = 0;

      const individualSetScore = score.map((s, i) => {
        console.log(s, i + 1);
        // pokud vyhral P1, dat mu bod
        if (s[0] > s[1]) {
          playerOneScore++;
          // pokud vyhral P2, dat bod jemu
        } else if (s[0] < s[1] && s[0] !== s[1]) {
          playerTwoScore++;
        }
        return [playerOneScore, playerTwoScore];
      });
      // zobrazeni do konzole
      console.log(
        '---------------------',
        score.length,
        individualSetScore[individualSetScore.length - 1]
      );
      // vraci to skore zapasu, remizu v setu ignoruje:
      return individualSetScore[individualSetScore.length - 1];
    });

    console.log('The set score for all the matches: ', individualMatchScore);

    const mutualMatchScores = individualMatchScore.map(result => {
      let john = 0;
      let phil = 0;
      if (result[0] > result[1]) {
        john++;
      } else if (result[1] > result[0]) {
        phil++;
      }
      return [john, phil];
    });
    console.log('mutualMatchScores: ', mutualMatchScores);

    // vypocet poctu remiz
    const numOfDrawsArr = mutualMatchScores.filter(num => {
      let draws = num[0] === num[1];
      return draws;
    });
    const numOfDraws = numOfDrawsArr.length;
    console.log('pocet remiz: ', numOfDrawsArr);

    // spravny tvar slova remiza s cislicemi:
    const WordDeclination =
      numOfDraws > 4 ? 'remíz' : numOfDraws > 1 ? 'remízy' : 'remíza';

    // vypocet skore vzajemnych zapasu
    const johnPoints = mutualMatchScores.reduce((acc, val) => {
      return acc + val[0];
    }, 0);
    const philPoints = mutualMatchScores.reduce((acc, val) => {
      return acc + val[1];
    }, 0);
    const headToHead = [johnPoints, philPoints];
    console.log(headToHead);

    return (
      <div className="App">
        <Navbar
          milo={courts[0]}
          omega={courts[1]}
          hodolany={courts[2]}
          holice={courts[3]}
        />
        <main className="content">
          <section className="intro">
            <p>
              Dva amatérští badmintonisté se rozhodli, že zahájí během léta 2019
              tenisovou sezónu, a to na ještě větší amatérské úrovni.{' '}
            </p>
            <p>
              Jeden z nich se rozhodl využít pomoci trenéra, a ten druhý to
              nechal na sudičky.{' '}
            </p>
            <p>
              To, co je v jejich snaze žene vpřed
              <span className="hvezdicka">*</span>, je magické slovo{' '}
              <a href="#tabulka">TABULKA</a>.
            </p>
          </section>
          <section className="welcome">
            <blockquote className="quote">
              <p>
                If you don’t practice, you don’t deserve to win.
              </p>
              <footer>Andre Agassi</footer>
            </blockquote>
          </section>
          <section className="players-section">
            <div className="players-title">
              <span>players</span>
            </div>
            <PlayersInvolved players={playersInvolved} />
          </section>
          <section className="score-board">
            <div>head-to-head</div>
            <div className="h2hScore">
              <span>{headToHead[0]}</span>
              <span>:</span>
              <span>{headToHead[1]}</span>
            </div>
          </section>
          <section className="tabulka">
            <h1 id="tabulka" className="tabulka-heading">
              ta tabulka <i className="fas fa-file-alt" />
            </h1>

            <p className="rekapitulace">
              Počet odehraných zápasů: <span>{matchesPlayed.length}</span>, z
              toho{' '}
              <span>
                {numOfDraws} {WordDeclination}
              </span>
              .
            </p>
            <MatchesPlayed matches={matchesPlayed.reverse()} />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
