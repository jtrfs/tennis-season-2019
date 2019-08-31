import React, { Component } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { PlayersInvolved } from "./Components/PlayersInvolved/PlayersInvolved";
import { MatchesPlayed } from "./Components/MatchesPlayed/MatchesPlayed";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          id: 1,
          name: "John",
          picture: "tennis-player-1.png",
          nick: "Smasher"
        },
        {
          id: 2,
          name: "Philip",
          picture: "tennis-player-2.png",
          nick: "Lobster"
        }
      ],
      booking: [
        {
          name:
            "https://jdemenato.cz/reservation/tenis-milo-olomouc/reservationcalendaroverview"
        },
        { name: "https://www.omegasport.cz/rezervace.html?typ=8&druh=1" },
        { name: "https://sport-hodolany.isportsystem.cz/" },
        { name: "https://tenisholice.cz/" }
      ],
      matches: [
        {
          id: 1,
          matchDate: new Date("2019-06-02"),
          matchScore: [[6, 4], [2, 0]],
          winner: "John"
        },
        {
          id: 2,
          matchDate: new Date("2019-06-07"),
          matchScore: [[6, 4], [3, 2]],
          winner: "John"
        },
        {
          id: 3,
          matchDate: new Date("2019-06-21"),
          matchScore: [[0, 6], [4, 6], [4, 3]],
          winner: "Phil"
        },
        {
          id: 4,
          matchDate: new Date("2019-06-22"),
          matchScore: [[0, 6], [4, 6]],
          winner: "Phil"
        },
        {
          id: 5,
          matchDate: new Date("2019-06-25"),
          matchScore: [[6, 3], [3, 3]],
          winner: "John"
        },
        {
          id: 6,
          matchDate: new Date("2019-06-29"),
          matchScore: [[6, 2], [2, 6], [4, 6]],
          winner: "Phil"
        },
        {
          id: 7,
          matchDate: new Date("2019-07-02"),
          matchScore: [[4, 6], [1, 6], [4, 6]],
          winner: "Phil"
        },
        {
          id: 8,
          matchDate: new Date("2019-07-05"),
          matchScore: [[7, 5], [7, 5]],
          winner: "John"
        },
        {
          id: 9,
          matchDate: new Date("2019-07-06"),
          matchScore: [[0, 6], [3, 6]],
          winner: "Phil"
        },
        {
          id: 10,
          matchDate: new Date("2019-07-09"),
          matchScore: [[7, 5], [6, 4], [2, 0]],
          winner: "John"
        },
        {
          id: 11,
          matchDate: new Date("2019-07-17"),
          matchScore: [[3, 6], [4, 6]],
          winner: "Phil"
        },
        {
          id: 12,
          matchDate: new Date("2019-07-19"),
          matchScore: [[1, 6], [6, 0]],
          winner: ""
        },
        {
          id: 13,
          matchDate: new Date("2019-07-21"),
          matchScore: [[0, 6], [0, 6], [6, 1], [2, 3]],
          winner: "Phil"
        },
        {
          id: 14,
          matchDate: new Date("2019-07-28"),
          matchScore: [[1, 6], [4, 6], [2, 2]],
          winner: "Phil",
          notes: ""
        },
        {
          id: 15,
          matchDate: new Date("2019-08-02"),
          matchScore: [[3, 6], [5, 7]],
          winner: "Phil",
          notes:
            "Johnny stále nemůže najít formu, jeho hra je svázaná, není schopen se uvolnit. Čeká stále na kvalitní úderovou techniku, ale třeba již příště. Zatím svoji hru staví na tvrdém podání, které ho  ale nespasí, a hodinách strávených na zdi. Phil hraje to svoje, když neví, tak to prostě zalobuje na zadni čáru, kde je Johnny ztracen."
        },
        {
          id: 16,
          matchDate: new Date("2019-08-03"),
          matchScore: [[2, 6], [2, 6]],
          winner: "Phil",
          notes:
            "Dnes se Johnnymu opět nedařilo, i když se dařit mělo. Konečný stav zápasu neodpovídá vyrovnanosti a napínavosti průběhu utkání. Phil nastoupil s bolavou hlavou, ale vidina 10. bodu vzájemných zápasů mu dodala motivaci, jen motivaci, jelikož kvalitu nechali oba borci asi tam, odkud na kurt dorazili."
        },
        {
          id: 17,
          matchDate: new Date("2019-08-04"),
          matchScore: [[2, 6], [0, 6], [6, 3]],
          winner: "Phil",
          notes:
            "Tři zápasy v rychlém sledu tří dnů a výsledek pokaždé téměř shodný - Johnny opět prohrává a Filipovi roste náskok a hřebínek. Ale možná dojde konečně ke změně, jelikož si Johnny uvědomil, že nemůže hrát na body, musí hrát na techniku - co se učí, to musí umět prodat. Na kurt nepatří strach z chyb. Budeme-li parafrázovat velkého Andreho, tak jen ten, kdo trénuje, si zaslouží vyhrávat, a to je Johnny. Druhý set viděl právě avizovaný přerod v mentalitě Johnnyho, kdy se seznamoval s tímto novým přístupem, sice jasně prohrál, ale uvnitř věděl, že je to správná cesta. A to se potvrdilo ve třetím setu, kdy jasně dominoval. Bohužel z časových důvodů nebylo možné zápas dohrát, protože Phil spěchal na oběd do Lipníka. I tak se dá vyhrávat do tabulky."
        },
        {
          id: 18,
          matchDate: new Date("2019-08-07"),
          matchScore: [[0, 6], [4, 6], [3, 1]],
          winner: "Phil",
          notes:
            "No nic, už se začnu asi připravovat na další sezónu, tato mi nevyšla. První set mi klasicky utekl, ani nevím jak. Snadno. A v druhém to už už vypadalo, že bych mohl prorazit, ale zase nic. Koncovka se ukázala být slabší. V každém případě mě zase psychicky dostávaly Philovi returny, které směřovaly do oblak a pak se snesly k zadní čáře. Humus. Ale je to účinné a má to výsledky, by si jeden mohl říct. Johnny si to ale neříká, Johnny zuří ... Příště musím zvítězit já."
        },
        {
          id: 19,
          matchDate: new Date("2019-08-10"),
          matchScore: [[4, 6], [7, 6]],
          winner: "",
          notes:
            'A je to tady! Čísla mluví jasnou řečí, evidentně dochází k obratu. Dnešní remíza je předzvěstí Johnnyho dominance. Pokud zítra neztrati Phil odvahu, tak se ukáže, jestli tomu tak je. Je velká škoda, že se Johnnymu nepodařilo udržet v prvním setu stav v jeho prospěch. Hrál trpělivě a nespoléhal se na svoje první podání, ale s chladnou hlavou zkoušel jen druhé podání. Jako zázrakem utekl Phil hrobníkovi z lopaty. Druhý, a bohudík pro Phila poslední set zápasu, byl plný zvratů a napětí. V jednu chvíli měl Johnny pocit, že Phil hrál nad sítí na jeho hřišti a porušil tak pravidla - nakonec to skousnul a bojoval dál. Na konci "tajbrejkové" bitvy se začal Phil po prohraném míči rozčilovat, že ho Johnny nesportovně rozhodil výkřikem, ale všichni, kteří tomu rozumí vědí, že to patří ke hře - tudíž se Phil musí příště snažit víc a neměl by hledat příčiny neúspěchu tam, kde rozhodně nejsou. Jak říká velký Andre, ten, kdo netrénuje, si nezaslouží vyhrát.'
        },
        {
          id: 20,
          matchDate: new Date("2019-08-11"),
          matchScore: [[3, 6], [5, 7]],
          winner: "Phil",
          notes:
            "Ti, kteří dnes dorazili a sledovali tenisovou bitvu olomouckých tenisových gigantů, se nestačili divit. Už v prvním setu to vypadalo, že Johnny bude mít navrch - vždyť už vedl 2:0 a Phil si přestával věřit. Kupodivu to nevyšlo a druhý set přinesl jestě větší zvraty v utkání. Byli jsme světky i několika okamžiků, kdy se oba borci předvedli v dobrém světle. Popravdě jich bylo opravdu jen několik. Vrcholem ale bylo, když už Johnny téměř zvedal ruce vítězně nad hlavu za stavu 5:3 a 40:0 při jeho drtívém podání a Phil jako onen bájný Phoenix vstal z popela a dokázal nakonec vyhrát i v druhém setu 7:5. Zmar, zmar  a ještě jednou zmar! Začínám si myslet, že velký Andre byl tak akorát velký ňouma a lhář. Ale i tak si myslím, že se to blíží ..."
        },
        {
          id: 21,
          matchDate: new Date("2019-08-14"),
          matchScore: [[3, 6], [0, 6], [5, 7]],
          winner: "Phil",
          notes:
            'Vážení přátelé, já prostě už nemám slov ... to, co se děje na hřišti by nikdo neměl vidět; tak tam prosím nechoďte. Tenis je mi tuto sezónu sportem zakletým a prsty v tom má jistě kouzelník Phil, který svými zaklínadly (rozuměj průpovídkami) typu: "Tak vypadá tenis ..." (povedl se mu úder), "Promiň ..." (taky se mu povedl úder), "Tam nic není." (pro změnu se povedl úder mně) zcela evidentně ovlivňuje průběh celé hry. Jinak to není možné. A to nemluvím o typech úderů, které Philius požívá/zneužívá: pověstný lobing a toping (v mojí hantýrce). Stav zápasu tomu pak odpovídá. Tři prohrané sety. První mi utekl, druhý byl tragédie a ve třetím jsem vedl 5:3 a skončil na lopatě, zase tragédie. Trenéra už nechci tuto sezónu vidět.'
        },
        {
          id: 22,
          matchDate: new Date("2019-08-15"),
          courtAndTime: "kurt K4 v 11:00",
          matchScore: [[3, 6], [3, 6], [3, 1]],
          winner: "Phil",
          notes:
            "Povětrnostní podmínky, které dnes vládly na hřišti byly ideální. Teplota veskrze příjemná a sluníčko v dobré náladě. Vzhledem k tomu, že léto již odchází, tak na kurtu již nepanovala unavující vedra a pot se netvořil v hektolitrech. Johnnyho pověstné potítko zůstalo téměř suché, stejně tak jako trenýrky, které mnohdy přípomínaly plavky skokana do vody, který zrovna vylezl z bazénu. Phil byl v dobré náladě a porážka by mu tentokrát ani moc nevadila, protože dnes ráno zažil opět něco moc krásného, něco, o čem gentleman Johnny mluvit takhle veřejně rozhodně nemůže a nebude. No a o zbytku tohoto krásného skoro dopoledne snad nemá cenu ani mluvit ..."
        },
        {
          id: 23,
          matchDate: new Date("2019-08-17"),
          courtAndTime: "kurt K3 v 9:30",
          matchScore: [[5, 7], [3, 3]],
          winner: "Phil",
          notes:
            "Kluci se rozhodli, že hrát jen tenis jim nestačí a tak si po dvou měsících badmintonového půstu domluvili první badmintonové měření sil. Není třeba poskytovat zvědavé veřejnosti bližší údaje, ale můžeme prozradit, že si chlapci pěkně a vyrovnaně mákli a konstatovali, že jim to ještě celkem lítá. Po hodině na relativně čistém a rovném kurtu se vydali hrát 90 minut na červené oranici. Johnnny opět nastoupil s tím, že chce urvat výhru a málem se mu to povedlo. Vedl 5:3, ale prohrál 5:7, to se stalo v této sezóně už několikrát. Byl to ukrutně dlouhý set, který trval kolem jedné hodiny. Johnny moc dobře ví, že táhá za kratší konec, ale taky ví proč. Protivníkova taktika mu vůbec ale vůbec nehraje do karet. Způsob hry, ke kterému se Phil uchyluje by mnozí nazvali téměř jako podlý, protože míče tak akorát nadráží, odráží a vysokým obloukem vrací na zadní lajnu. Nemůžeme mu ale upřít s jakou přesností tento pinkálista hraje. Neomylně to padá Johnnymu do hřiště ze všemožných krkolomných pozic a to tak nešťastně (samozřejmě pod úhlem nějakých 78 až 85 stupňů), že ani velký Johnny není schopný to vrátit zpět. Ale jak už tu padlo asi několikrát: Tabulka je Tabulka a účel světí prostředky. Nakonec spláchli chlapci červenou antuku černou kofolou a v nedaleké restauraci to zajedli pizzou a ukončili lungem."
        },
        {
          id: 24,
          matchDate: new Date("2019-08-22"),
          courtAndTime: "kurt K3 v 12:00",
          matchScore: [[7, 5], [1, 6], [1, 4]],
          winner: "Phil",
          notes:
            'Jedno velké "Ach jo" musím vyjádřit a u toho bych i zůstal, ale nezůstanu, jelikož se na kurtech tenisového klubu TJ Milo Olomouc dějí nekalosti. Ten zápas začal skvěle, Johnny vyhrál losování, což se stalo asi teprve podruhé tuto sezónu a vzápětí vyhrál, rovněž po dlouhé době, první set. Vše mělo být jasné. Johnny od teď bude jen a jen dominovat. Ne, nedominuje, možná kdyby si šel zahrát domino, tak by se mu dařilo lépe než dnes. Je pravdou že to trochu nevydržel psychicky, protože průhledně hrající Phil se opět uchýlil k taktice "údržbář" a Johnny to prostě neustál. Johnny trénuje čistotu úderů a ne "zaháněnou či odráženou nebo kdo to dá výš". S lítostí v srdci, ale s nadějí v duši, se loučí tenisové duo, Johnny a Phil, s tenisovou sezónou 2019 a všechny naše fanoušky zveme na závěrečné líté souboje u děravé sítě na kurtu K6 již tuto sobotu v 9:30. Kdo vyhraje, vyhrál celou Tabulku, viď, Phile?'
        },
        {
          id: 25,
          matchDate: new Date("2019-08-24"),
          courtAndTime: "kurt K6 v 9:30",
          matchScore: [[0, 6], [7, 6], [6, 7]],
          winner: "Phil",
          notes:
            "V tomto týdnu, kdy vrcholí ostré až vyhrocené souboje nad tenisovou sítí v olomoucké mekce tenisu, na kurtech Mila Olomouc, tak ve stejnou dobu vrcholí zápasy mistrovství světa v badmintonu ve švýcarské Basileji. A my se ptáme, je to pouhá náhoda, a zárověň si dovolujeme opodstatněně odpovědět, že není a ani nemůže být. Prostě je to sport extra světové úrovně, tam i tady, na tom se shodují všichni zainteresovaní. Včera se odehrálo jedno z nejdelších utkání v badmintonové historii, které trvalo 2 hodiny a 6 minut, dnes se zápolení Johnnyho a Phila protáhlo podobně a ještě déle. Oba borci strávili v těžkých podmínkách pozdního léta, kdy vlhkost vzduchu dosahovala vlhkosti srovnatelné s vlhkostí britské komentátorky včerejšího vypjatého zápasu Chou vs. Wangcharoen, neskutečné 2 hodiny a 30 minut. První set můžeme opomenout, stav 0:6 byl pouhou anomálií tohoto dne. Je nutné uvést aspoň pod čarou, že Phil konečně opravdu hrál tenis. Dařilo se mu a měl opravdu navrch. Slušná práce, Phile, měl by ses ubírat touto cestou. Johnnymu se naopak nedařilo a byl tím vnitřně notně ovlivněn, ale pouze do druhého setu, kdy to teprve vše začalo. Opravdová bitva. Spousta energie, potu, nervů a dokonce i bolesti byla spotřebována a to zejména v okamžiku, kdy se Phil přetáhl raketou přes hlavu, tak neštastně a bolestivě, že mu naskočila pěkná boule v podobě menšího jelita. Zkrátka a dobře chlapci bojovali a Johnny opět bohužel neuspěl ve své snaze konečně po dlouhé době vyhrát, škoda, tentokrát to bylo blizoučko a i sám Phil tušil, že bude pokořen, ale ještě nanadešel čas vlady Johnnyho ... příští sezónu ... rok 2020 bude můj!"
        },
        {
          id: 26,
          matchDate: new Date("2019-08-31"),
          courtAndTime: "kurt K4 v 9:30",
          matchScore: [[3, 6], [1, 6], [6, 3], [5, 7]],
          winner: "Phil",
          notes:
            "Opět nám počasí přálo, byl nádherný slunný den, hráli jsme vysvlečeni do půl těla, což očividně kvitovali přihlížející beach volejbalistky, které se na nás chodily koukat v pauzách svých utkání na nedalekých hřištích plážového volejbalu. Co Johnnymu ale nepřálo, byl opět soupeř, respektive herní pojetí soupeře Phila, které se za celé 2 měsíce vůbec nezměnilo. Johnny se nemůže přizpůsobit. Dnes ale mohl, jako už několikrát před tím, aspoň remizovat. Ve čtvrtém setu už vedl 5:3 při své drtivém podáni s novou/profesionální raketou. Od tohoto okamžiku ale se přestalo dařit, pravděpodobně únavou. Na okraj jen uvedeme, že Phil párkrát narušil svou hru-nehru pěknými, s přehledem hranými míči. Johnny zazářil při výměně, kdy se mu konečně podařilo hrát správně (hlavně proto, že Phil nehrál do oblak, ale pokusil se o tenis). Dva povedené forehandy do backhandové strany, kdy se Phil ocitl mimo kurt a třetí nádherný forehand do forehandu, kdy Phil jen zoufale přihlížel z míst, kam se odkládaji hrabla a kartáče. Zlom v průběhu naší Tabulky se blíží ..."
        },
        {
          id: 27,
          matchDate: new Date("2019-09-01"),
          courtAndTime: "kurt K1 v 11:00",
          matchScore: [[0, 0]],
          winner: "to be decided",
          notes: "Johnny is the favourite, as always ..."
        }
        // {
        //   id: 26,
        //   matchDate: new Date("2019-08-17"),
        //   courtAndTime: "kurt K3 v 9:30",
        //   matchScore: [[0, 0]],
        //   winner: "to be decided",
        //   notes: "Johnny is the favourite, as always ..."
        // },
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
    // console.log('generalScore: ', generalScore);

    // array celkovych vysledku vsech zapasu
    const individualMatchScore = generalScore.map((score, i) => {
      let playerOneScore = 0;
      let playerTwoScore = 0;

      const individualSetScore = score.map((s, i) => {
        // console.log('jednotlivy set zapasu: ', s, i + 1);
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
      // console.log(
      //   '-----------',
      //   'pocet setu:',
      //   score.length,
      //   ' skore na sety:',
      //   individualSetScore[individualSetScore.length - 1]
      // );
      // vraci to skore zapasu, remizu v setu ignoruje:
      return individualSetScore[individualSetScore.length - 1];
    });

    // console.log(
    //   'individualMatchScore - jak dopadly sety: ',
    //   individualMatchScore
    // );

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
    // console.log('mutualMatchScores - jak dopadl zapas: ', mutualMatchScores);

    // vypocet poctu remiz - true or false
    const numOfDrawsArr = mutualMatchScores.filter(num => {
      let draws = num[0] === num[1];
      console.log(draws);
      return draws;
    });

    // vypocet poctu zapasu bez toho planovaneho
    const numOfMatchesReallyPlayed = matches.filter(match => {
      return match.winner !== "to be decided";
    });
    console.log("pocet zapasu bez planovaneho: ", numOfMatchesReallyPlayed);

    // remiza (cislo), ktera se nepocita - je to planovany zapas s provizornim vysledkem 0:0
    const notDraw = matchesPlayed.length - numOfMatchesReallyPlayed.length;

    const numOfDraws = numOfDrawsArr.length - notDraw;
    // console.log('pocet remiz: ', numOfDrawsArr);

    // spravny tvar slova remiza s cislicemi:
    const WordDeclination =
      numOfDraws > 4 ? "remíz" : numOfDraws > 1 ? "remízy" : "remíza";

    // vypocet skore vzajemnych zapasu
    const johnPoints = mutualMatchScores.reduce((acc, val) => {
      return acc + val[0];
    }, 0);
    const philPoints = mutualMatchScores.reduce((acc, val) => {
      return acc + val[1];
    }, 0);
    const headToHead = [johnPoints, philPoints];
    // console.log(headToHead);

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
              tenisovou sezónu, a to na ještě větší amatérské úrovni.{" "}
            </p>
            <p>
              Jeden z nich se rozhodl využít pomoci trenéra, a ten druhý to
              nechal na sudičky.{" "}
            </p>
            <p>
              To, co je v jejich snaze žene vpřed
              <span className="hvezdicka">*</span>, je magické slovo{" "}
              <a href="#tabulka">TABULKA</a>.
            </p>
          </section>
          <section className="welcome">
            <blockquote className="quote">
              <p>If you don’t practice, you don’t deserve to win.</p>
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
              Počet odehraných zápasů:{" "}
              <span>{numOfMatchesReallyPlayed.length}</span>, z toho{" "}
              <span>
                {numOfDraws} {WordDeclination}
              </span>
              .
            </p>
            <MatchesPlayed
              matches={matchesPlayed.reverse()}
              setResults={individualMatchScore}
            />
          </section>
        </main>
      </div>
    );
  }
}

export default App;
