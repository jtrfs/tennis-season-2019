(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(2),l=t.n(c),o=(t(14),t(3)),s=t(4),i=t(6),m=t(5),h=t(7),u=(t(15),function(e){return r.a.createElement("div",{className:"nav"},r.a.createElement("ul",null,r.a.createElement("li",{className:"rezervace"},r.a.createElement("a",{href:e.milo,target:"_blank",rel:"noopener noreferrer"},"MILO")),r.a.createElement("li",{className:"rezervace"},r.a.createElement("a",{href:e.omega,target:"_blank",rel:"noopener noreferrer"},"OMEGA")),r.a.createElement("li",{className:"rezervace"},r.a.createElement("a",{href:e.hodolany,target:"_blank",rel:"noopener noreferrer"},"HODOLANY")),r.a.createElement("li",{className:"rezervace"},r.a.createElement("a",{href:e.holice,target:"_blank",rel:"noopener noreferrer"},"HOLICE"))))}),d=(t(16),function(e){var a=e.player.picture,t=e.player.name,n=e.player.nick,c="John"===t?{backgroundColor:"#99b433"}:{backgroundColor:"#da532c"};return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"pic-title",style:c},t),r.a.createElement("img",{className:"tennis-player-image",src:a,alt:"tennis player"}),r.a.createElement("div",{className:"overlay",style:c},r.a.createElement("div",{className:"text"},r.a.createElement("span",null,t),r.a.createElement("span",null,"A.K.A"),r.a.createElement("span",null,n))))}),p=(t(17),function(e){return r.a.createElement("div",{className:"players-involved"},e.players.map(function(e){return r.a.createElement(d,{key:e.id,player:e})}))}),g=(t(18),function(e){var a=e.match.matchDate.toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric"}),t=e.match.matchScore,n=e.match.id,c=e.match.notes,l=e.match.winner,o="John"===l?{backgroundColor:"#dce9af",color:"#000"}:"Phil"===l?{backgroundColor:"#FFBCB8",color:"#000"}:{backgroundColor:"#e6e6e6",color:"#000"},s=t.map(function(e,a){return r.a.createElement(r.a.Fragment,{key:a},r.a.createElement("p",null,e[0],":",e[1]),r.a.createElement("div",null,"/"))});return r.a.createElement("div",{className:"match-entry"},r.a.createElement("button",{className:"accordion",style:o,onClick:function(e){var a=e.target.nextElementSibling,t=a.childNodes,n=a.childNodes[t.length-1],r=e.target;console.log("target je :",r),console.log("note :",n),console.log("panel :",a),e.target.classList.toggle("active"),"block"===a.style.display?a.style.display="none":a.style.display="block",""===n.textContent&&(n.style.display="none"),console.log("obsahuje class active? ",e.target.classList.contains("active"))},onMouseOut:function(a){"John"!==e.match.winner||a.target.classList.contains("active")?"Phil"!==e.match.winner||a.target.classList.contains("active")?""!==e.match.winner||a.target.classList.contains("active")||(a.target.style.backgroundColor="#e6e6e6",a.target.style.color="#000"):(a.target.style.backgroundColor="#FFBCB8",a.target.style.color="#000"):(a.target.style.backgroundColor="#dce9af",a.target.style.color="#000")},onMouseEnter:function(a){"John"===e.match.winner?(a.target.style.backgroundColor="#457821",a.target.style.color="#fff"):"Phil"===e.match.winner?(a.target.style.backgroundColor="#8b0000",a.target.style.color="#fff"):""===e.match.winner&&(a.target.style.backgroundColor="#8c8c8c",a.target.style.color="#fff")}},a," - ",n,". z\xe1pas",""!==l?" vyhr\xe1v\xe1 ".concat(l):" kon\u010d\xed rem\xedzou"),r.a.createElement("div",{className:"panel"},s,r.a.createElement("span",null,c)))}),v=(t(19),function(e){return r.a.createElement("div",{className:"matches"},e.matches.map(function(e){return r.a.createElement(g,{key:e.id,match:e})}))}),E=(t(20),function(e){function a(){var e;return Object(o.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={players:[{id:1,name:"John",picture:"tennis-player-1.png",nick:"Smasher"},{id:2,name:"Philip",picture:"tennis-player-2.png",nick:"Lobster"}],booking:[{name:"https://jdemenato.cz/reservation/tenis-milo-olomouc/reservationcalendaroverview"},{name:"https://www.omegasport.cz/rezervace.html?typ=8&druh=1"},{name:"https://sport-hodolany.isportsystem.cz/"},{name:"https://tenisholice.cz/"}],matches:[{id:1,matchDate:new Date("2019-06-02"),matchScore:[[6,4],[2,0]],winner:"John"},{id:2,matchDate:new Date("2019-06-07"),matchScore:[[6,4],[3,2]],winner:"John"},{id:3,matchDate:new Date("2019-06-21"),matchScore:[[0,6],[4,6],[4,3]],winner:"Phil"},{id:4,matchDate:new Date("2019-06-22"),matchScore:[[0,6],[4,6]],winner:"Phil"},{id:5,matchDate:new Date("2019-06-25"),matchScore:[[6,3],[3,3]],winner:"John"},{id:6,matchDate:new Date("2019-06-29"),matchScore:[[6,2],[2,6],[4,6]],winner:"Phil"},{id:7,matchDate:new Date("2019-07-02"),matchScore:[[4,6],[1,6],[4,6]],winner:"Phil"},{id:8,matchDate:new Date("2019-07-05"),matchScore:[[7,5],[7,5]],winner:"John"},{id:9,matchDate:new Date("2019-07-06"),matchScore:[[0,6],[3,6]],winner:"Phil"},{id:10,matchDate:new Date("2019-07-09"),matchScore:[[7,5],[6,4],[2,0]],winner:"John"},{id:11,matchDate:new Date("2019-07-17"),matchScore:[[3,6],[4,6]],winner:"Phil"},{id:12,matchDate:new Date("2019-07-19"),matchScore:[[1,6],[6,0]],winner:""},{id:13,matchDate:new Date("2019-07-21"),matchScore:[[0,6],[0,6],[6,1],[2,3]],winner:"Phil"},{id:14,matchDate:new Date("2019-07-28"),matchScore:[[1,6],[4,6],[2,2]],winner:"Phil",notes:""}]},e}return Object(h.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.players,t=e.booking,n=e.matches,c=t.map(function(e){return e.name}),l=a.map(function(e){return e}),o=n.map(function(e){return e}),s=n.map(function(e,a){return e.matchScore});console.log(s);var i=s.map(function(e,a){var t=0,n=0,r=e.map(function(e,a){return console.log(e,a+1),e[0]>e[1]?t++:e[0]<e[1]&&e[0]!==e[1]&&n++,[t,n]});return console.log("---------------------",e.length,r[r.length-1]),r[r.length-1]});console.log("The set score for all the matches: ",i);var m=i.map(function(e){var a=0,t=0;return e[0]>e[1]?a++:e[1]>e[0]&&t++,[a,t]});console.log("mutualMatchScores: ",m);var h=m.filter(function(e){return e[0]===e[1]}),d=h.length;console.log("pocet remiz: ",h);var g=d>4?"rem\xedz":d>1?"rem\xedzy":"rem\xedza",E=[m.reduce(function(e,a){return e+a[0]},0),m.reduce(function(e,a){return e+a[1]},0)];return console.log(E),r.a.createElement("div",{className:"App"},r.a.createElement(u,{milo:c[0],omega:c[1],hodolany:c[2],holice:c[3]}),r.a.createElement("main",{className:"content"},r.a.createElement("section",{className:"intro"},r.a.createElement("p",null,"Dva amat\xe9r\u0161t\xed badmintonist\xe9 se rozhodli, \u017ee zah\xe1j\xed b\u011bhem l\xe9ta 2019 tenisovou sez\xf3nu, a to na je\u0161t\u011b v\u011bt\u0161\xed amat\xe9rsk\xe9 \xfarovni."," "),r.a.createElement("p",null,"Jeden z nich se rozhodl vyu\u017e\xedt pomoci tren\xe9ra, a ten druh\xfd to nechal na sudi\u010dky."," "),r.a.createElement("p",null,"To, co je v jejich snaze \u017eene vp\u0159ed",r.a.createElement("span",{className:"hvezdicka"},"*"),", je magick\xe9 slovo"," ",r.a.createElement("a",{href:"#tabulka"},"TABULKA"),".")),r.a.createElement("section",{className:"welcome"},r.a.createElement("h3",null,"V\xedtej na str\xe1nk\xe1ch jejich spole\u010dn\xe9ho sportovn\xedho sna\u017een\xed.")),r.a.createElement("section",{className:"players-section"},r.a.createElement("div",{className:"players-title"},r.a.createElement("span",null,"players")),r.a.createElement(p,{players:l})),r.a.createElement("section",{className:"score-board"},r.a.createElement("div",null,"head-to-head"),r.a.createElement("div",{className:"h2hScore"},r.a.createElement("span",null,E[0]),r.a.createElement("span",null,":"),r.a.createElement("span",null,E[1]))),r.a.createElement("section",{className:"tabulka"},r.a.createElement("h1",{id:"tabulka",className:"tabulka-heading"},"ta tabulka ",r.a.createElement("i",{class:"fas fa-file-alt"})),r.a.createElement("p",{className:"rekapitulace"},"Po\u010det odehran\xfdch z\xe1pas\u016f: ",r.a.createElement("span",null,o.length),", z toho"," ",r.a.createElement("span",null,d," ",g),"."),r.a.createElement(v,{matches:o.reverse()}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.0ac60520.chunk.js.map