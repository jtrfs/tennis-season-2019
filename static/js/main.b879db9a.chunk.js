(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,function(e,a,t){e.exports=t(21)},,,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(2),l=t.n(r),c=(t(14),t(3)),s=t(4),i=t(6),m=t(5),d=t(7),h=(t(15),function(e){return o.a.createElement("div",{className:"nav"},o.a.createElement("ul",null,o.a.createElement("li",{className:"rezervace"},o.a.createElement("a",{href:e.milo,target:"_blank",rel:"noopener noreferrer"},"MILO")),o.a.createElement("li",{className:"rezervace"},o.a.createElement("a",{href:e.omega,target:"_blank",rel:"noopener noreferrer"},"OMEGA")),o.a.createElement("li",{className:"rezervace"},o.a.createElement("a",{href:e.hodolany,target:"_blank",rel:"noopener noreferrer"},"HODOLANY")),o.a.createElement("li",{className:"rezervace"},o.a.createElement("a",{href:e.holice,target:"_blank",rel:"noopener noreferrer"},"HOLICE"))))}),u=(t(16),function(e){var a=e.player.picture,t=e.player.name,n=e.player.nick,r="John"===t?{backgroundColor:"#99b433"}:{backgroundColor:"#da532c"};return o.a.createElement("div",{className:"card"},o.a.createElement("div",{className:"pic-title",style:r},t),o.a.createElement("img",{className:"tennis-player-image",src:a,alt:"tennis player"}),o.a.createElement("div",{className:"overlay",style:r},o.a.createElement("div",{className:"text"},o.a.createElement("span",null,t),o.a.createElement("span",null,"A.K.A"),o.a.createElement("span",null,n))))}),v=(t(17),function(e){return o.a.createElement("div",{className:"players-involved"},e.players.map(function(e){return o.a.createElement(u,{key:e.id,player:e})}))}),p=(t(18),function(e){var a=e.match.matchDate.toLocaleDateString("en-GB",{weekday:"short",month:"short",day:"numeric"}),t=e.match.matchScore,n=e.match.id,r=e.match.notes,l=e.match.winner,c=e.vysledkyZapasu,s=c[n-1][0],i=c[n-1][1],m="".concat(s,":").concat(i),d="".concat(i,":").concat(s),h=e.match.courtAndTime,u="John"===l?{backgroundColor:"#dce9af",color:"#000"}:"Phil"===l?{backgroundColor:"#FFBCB8",color:"#000"}:"to be decided"===l?{backgroundColor:"#347B98",color:"rgba(255, 217, 0, 0.9)"}:{backgroundColor:"#e6e6e6",color:"#000"},v=t.map(function(e,a){return o.a.createElement(o.a.Fragment,{key:a},o.a.createElement("p",null,e[0],":",e[1]),o.a.createElement("div",null,"/"))});return o.a.createElement("div",{className:"match-entry"},o.a.createElement("div",{className:"accordion",style:u,onClick:function(e){e.stopPropagation();var a=e.target,t=e.target.nextElementSibling,n=t.childNodes,o=t.childNodes[n.length-1],r=e.target;console.log("target je :",r),console.log("note :",o),console.log("panel :",t),e.target.classList.toggle("active"),"block"===t.style.display?(t.style.display="none","John"===l?(e.target.style.backgroundColor="#dce9af",e.target.style.color="#000"):"Phil"===l?(e.target.style.backgroundColor="#FFBCB8",e.target.style.color="#000"):"to be decided"===l?(e.target.style.backgroundColor="#347B98",e.target.style.color="rgba(255, 217, 0, 0.9)"):(e.target.style.backgroundColor="#e6e6e6",e.target.style.color="#000")):(t.style.display="block",a.style.borderBottomLeftRadius=0,a.style.borderBottomRightRadius=0),""===o.textContent&&(o.style.display="none"),"to be decided"===l&&(t.children[0].style.color="#222"),console.log("obsahuje class active? ",e.target.classList.contains("active"))},onMouseOut:function(a){"John"!==e.match.winner||a.target.classList.contains("active")?"Phil"!==e.match.winner||a.target.classList.contains("active")?""!==e.match.winner||a.target.classList.contains("active")||(a.target.style.backgroundColor="#e6e6e6",a.target.style.color="#000"):(a.target.style.backgroundColor="#FFBCB8",a.target.style.color="#000"):(a.target.style.backgroundColor="#dce9af",a.target.style.color="#000")},onMouseEnter:function(e){"John"===l?(e.target.style.backgroundColor="#457821",e.target.style.color="#fff"):"Phil"===l?(e.target.style.backgroundColor="#8b0000",e.target.style.color="#fff"):"to be decided"===l?(e.target.style.backgroundColor="#347B98",e.target.style.color="rgba(255, 217, 0, 0.9)"):(e.target.style.backgroundColor="#8c8c8c",e.target.style.color="#fff")}},a," - ",n,". z\xe1pas",o.a.createElement("span",{className:"winning-side"},"John"===l?o.a.createElement("span",null,o.a.createElement("span",null," vyhr\xe1v\xe1 ".concat(l))," ",o.a.createElement("span",{className:"result"},"".concat(m))):"Phil"===l?o.a.createElement("span",null,o.a.createElement("span",null," vyhr\xe1v\xe1 ".concat(l))," ",o.a.createElement("span",{className:"result"},"".concat(d))):"to be decided"===l?o.a.createElement("span",{className:"to-be-decided"},o.a.createElement("span",null," se bude hr\xe1t na: ",o.a.createElement("span",{className:"plannedMatch"},"".concat(h)))," "):o.a.createElement("span",null,o.a.createElement("span",null," kon\u010d\xed rem\xedzou")," ",o.a.createElement("span",{className:"result"},"".concat(m))))),o.a.createElement("div",{className:"panel"},v,o.a.createElement("span",{className:"note"},r)))}),k=(t(19),function(e){var a=e.setResults;return o.a.createElement("div",{className:"matches"},e.matches.map(function(e,t){return o.a.createElement(p,{key:e.id,match:e,vysledkyZapasu:a})}))}),y=(t(20),function(e){function a(){var e;return Object(c.a)(this,a),(e=Object(i.a)(this,Object(m.a)(a).call(this))).state={players:[{id:1,name:"John",picture:"tennis-player-1.png",nick:"Smasher"},{id:2,name:"Philip",picture:"tennis-player-2.png",nick:"Lobster"}],booking:[{name:"https://jdemenato.cz/reservation/tenis-milo-olomouc/reservationcalendaroverview"},{name:"https://www.omegasport.cz/rezervace.html?typ=8&druh=1"},{name:"https://sport-hodolany.isportsystem.cz/"},{name:"https://tenisholice.cz/"}],matches:[{id:1,matchDate:new Date("2019-06-02"),matchScore:[[6,4],[2,0]],winner:"John"},{id:2,matchDate:new Date("2019-06-07"),matchScore:[[6,4],[3,2]],winner:"John"},{id:3,matchDate:new Date("2019-06-21"),matchScore:[[0,6],[4,6],[4,3]],winner:"Phil"},{id:4,matchDate:new Date("2019-06-22"),matchScore:[[0,6],[4,6]],winner:"Phil"},{id:5,matchDate:new Date("2019-06-25"),matchScore:[[6,3],[3,3]],winner:"John"},{id:6,matchDate:new Date("2019-06-29"),matchScore:[[6,2],[2,6],[4,6]],winner:"Phil"},{id:7,matchDate:new Date("2019-07-02"),matchScore:[[4,6],[1,6],[4,6]],winner:"Phil"},{id:8,matchDate:new Date("2019-07-05"),matchScore:[[7,5],[7,5]],winner:"John"},{id:9,matchDate:new Date("2019-07-06"),matchScore:[[0,6],[3,6]],winner:"Phil"},{id:10,matchDate:new Date("2019-07-09"),matchScore:[[7,5],[6,4],[2,0]],winner:"John"},{id:11,matchDate:new Date("2019-07-17"),matchScore:[[3,6],[4,6]],winner:"Phil"},{id:12,matchDate:new Date("2019-07-19"),matchScore:[[1,6],[6,0]],winner:""},{id:13,matchDate:new Date("2019-07-21"),matchScore:[[0,6],[0,6],[6,1],[2,3]],winner:"Phil"},{id:14,matchDate:new Date("2019-07-28"),matchScore:[[1,6],[4,6],[2,2]],winner:"Phil",notes:""},{id:15,matchDate:new Date("2019-08-02"),matchScore:[[3,6],[5,7]],winner:"Phil",notes:"Johnny st\xe1le nem\u016f\u017ee naj\xedt formu, jeho hra je sv\xe1zan\xe1, nen\xed schopen se uvolnit. \u010cek\xe1 st\xe1le na kvalitn\xed \xfaderovou techniku, ale t\u0159eba ji\u017e p\u0159\xed\u0161t\u011b. Zat\xedm svoji hru stav\xed na tvrd\xe9m pod\xe1n\xed, kter\xe9 ho  ale nespas\xed, a hodin\xe1ch str\xe1ven\xfdch na zdi. Phil hraje to svoje, kdy\u017e nev\xed, tak to prost\u011b zalobuje na zadni \u010d\xe1ru, kde je Johnny ztracen."},{id:16,matchDate:new Date("2019-08-03"),matchScore:[[2,6],[2,6]],winner:"Phil",notes:"Dnes se Johnnymu op\u011bt neda\u0159ilo, i kdy\u017e se da\u0159it m\u011blo. Kone\u010dn\xfd stav z\xe1pasu neodpov\xedd\xe1 vyrovnanosti a nap\xednavosti pr\u016fb\u011bhu utk\xe1n\xed. Phil nastoupil s bolavou hlavou, ale vidina 10. bodu vz\xe1jemn\xfdch z\xe1pas\u016f mu dodala motivaci, jen motivaci, jeliko\u017e kvalitu nechali oba borci asi tam, odkud na kurt dorazili."},{id:17,matchDate:new Date("2019-08-04"),matchScore:[[2,6],[0,6],[6,3]],winner:"Phil",notes:"T\u0159i z\xe1pasy v rychl\xe9m sledu t\u0159\xed dn\u016f a v\xfdsledek poka\u017ed\xe9 t\xe9m\u011b\u0159 shodn\xfd - Johnny op\u011bt prohr\xe1v\xe1 a Filipovi roste n\xe1skok a h\u0159eb\xednek. Ale mo\u017en\xe1 dojde kone\u010dn\u011b ke zm\u011bn\u011b, jeliko\u017e si Johnny uv\u011bdomil, \u017ee nem\u016f\u017ee hr\xe1t na body, mus\xed hr\xe1t na techniku - co se u\u010d\xed, to mus\xed um\u011bt prodat. Na kurt nepat\u0159\xed strach z chyb. Budeme-li parafr\xe1zovat velk\xe9ho Andreho, tak jen ten, kdo tr\xe9nuje, si zaslou\u017e\xed vyhr\xe1vat, a to je Johnny. Druh\xfd set vid\u011bl pr\xe1v\u011b avizovan\xfd p\u0159erod v mentalit\u011b Johnnyho, kdy se seznamoval s t\xedmto nov\xfdm p\u0159\xedstupem, sice jasn\u011b prohr\xe1l, ale uvnit\u0159 v\u011bd\u011bl, \u017ee je to spr\xe1vn\xe1 cesta. A to se potvrdilo ve t\u0159et\xedm setu, kdy jasn\u011b dominoval. Bohu\u017eel s \u010dasov\xfdch d\u016fvod\u016f nebylo mo\u017en\xe9 z\xe1pas dohr\xe1t, proto\u017ee Phil sp\u011bchal na ob\u011bd do Lipn\xedka. I tak se d\xe1 vyhr\xe1vat do tabulky."},{id:18,matchDate:new Date("2019-08-07"),matchScore:[[0,6],[4,6],[3,1]],winner:"Phil",notes:"No nic, u\u017e se za\u010dnu asi p\u0159ipravovat na dal\u0161\xed sez\xf3nu, tato mi nevy\u0161la. Prvn\xed set mi klasicky utekl, ani nev\xedm jak. Snadno. A v druh\xe9m to u\u017e u\u017e vypadalo, \u017ee bych mohl prorazit, ale zase nic. Koncovka se uk\xe1zala b\xfdt slab\u0161\xed. V ka\u017ed\xe9m p\u0159\xedpad\u011b m\u011b zase psychicky dost\xe1valy Philovi returny, kter\xe9 sm\u011b\u0159ovaly do oblak a pak se snesly k zadn\xed \u010d\xe1\u0159e. Humus. Ale je to \xfa\u010dinn\xe9 a m\xe1 to v\xfdsledky, by si jeden mohl \u0159\xedct. Johnny si to ale ne\u0159\xedk\xe1, Johnny zu\u0159\xed ... P\u0159\xed\u0161t\u011b mus\xedm zv\xedt\u011bzit j\xe1."},{id:19,matchDate:new Date("2019-08-10"),matchScore:[[4,6],[7,6]],winner:"",notes:'A je to tady! \u010c\xedsla mluv\xed jasnou \u0159e\u010d\xed, evidentn\u011b doch\xe1z\xed k obratu. Dne\u0161n\xed rem\xedza je p\u0159edzv\u011bst\xed Johnnyho dominance. Pokud z\xedtra neztrati Phil odvahu, tak se uk\xe1\u017ee, jestli tomu tak je. Je velk\xe1 \u0161koda, \u017ee se Johnnymu nepoda\u0159ilo udr\u017eet v prvn\xedm setu stav v jeho prosp\u011bch. Hr\xe1l trp\u011bliv\u011b a nespol\xe9hal se na svoje prvn\xed pod\xe1n\xed, ale s chladnou hlavou zkou\u0161el jen druh\xe9 pod\xe1n\xed. Jako z\xe1zrakem utekl Phil hrobn\xedkovi z lopaty. Druh\xfd, a bohud\xedk pro Phila posledn\xed set z\xe1pasu, byl pln\xfd zvrat\u016f a nap\u011bt\xed. V jednu chv\xedli m\u011bl Johnny pocit, \u017ee Phil hr\xe1l nad s\xedt\xed na jeho h\u0159i\u0161ti a poru\u0161il tak pravidla - nakonec to skousnul a bojoval d\xe1l. Na konci "tajbrejkov\xe9" bitvy se za\u010dal Phil po prohran\xe9m m\xed\u010di roz\u010dilovat, \u017ee ho Johnny nesportovn\u011b rozhodil v\xfdk\u0159ikem, ale v\u0161ichni, kte\u0159\xed tomu rozum\xed v\u011bd\xed, \u017ee to pat\u0159\xed ke h\u0159e - tud\xed\u017e se Phil mus\xed p\u0159\xed\u0161t\u011b sna\u017eit v\xedc a nem\u011bl by hledat p\u0159\xed\u010diny ne\xfasp\u011bchu tam, kde rozhodn\u011b nejsou. Jak \u0159\xedk\xe1 velk\xfd Andre, ten, kdo netr\xe9nuje, si nezaslou\u017e\xed vyhr\xe1t.'},{id:20,matchDate:new Date("2019-08-11"),matchScore:[[3,6],[5,7]],winner:"Phil",notes:"Ti, kte\u0159\xed dnes dorazili a sledovali tenisovou bitvu olomouck\xfdch tenisov\xfdch gigant\u016f, se nesta\u010dili divit. U\u017e v prvn\xedm setu to vypadalo, \u017ee Johnny bude m\xedt navrch - v\u017edy\u0165 u\u017e vedl 2:0 a Phil si p\u0159est\xe1val v\u011b\u0159it. Kupodivu to nevy\u0161lo a druh\xfd set p\u0159inesl jest\u011b v\u011bt\u0161\xed zvraty v utk\xe1n\xed. Byli jsme sv\u011btky i n\u011bkolika okam\u017eik\u016f, kdy se oba borci p\u0159edvedli v dobr\xe9m sv\u011btle. Popravd\u011b jich bylo opravdu jen n\u011bkolik. Vrcholem ale bylo, kdy\u017e u\u017e Johnny t\xe9m\u011b\u0159 zvedal ruce v\xedt\u011bzn\u011b nad hlavu za stavu 5:3 a 40:0 p\u0159i jeho drt\xedv\xe9m pod\xe1n\xed a Phil jako onen b\xe1jn\xfd Phoenix vstal z popela a dok\xe1zal nakonec vyhr\xe1t i v druh\xe9m setu 7:5. Zmar, zmar  a je\u0161t\u011b jednou zmar! Za\u010d\xedn\xe1m si myslet, \u017ee velk\xfd Andre byl tak akor\xe1t velk\xfd \u0148ouma a lh\xe1\u0159. Ale i tak si mysl\xedm, \u017ee se to bl\xed\u017e\xed ..."},{id:21,matchDate:new Date("2019-08-14"),matchScore:[[3,6],[0,6],[5,7]],winner:"Phil",notes:'V\xe1\u017een\xed p\u0159\xe1tel\xe9, j\xe1 prost\u011b u\u017e nem\xe1m slov ... to, co se d\u011bje na h\u0159i\u0161ti by nikdo nem\u011bl vid\u011bt; tak tam pros\xedm necho\u010fte. Tenis je mi tuto sez\xf3nu sportem zaklet\xfdm a prsty v tom m\xe1 jist\u011b kouzeln\xedk Phil, kter\xfd sv\xfdmi zakl\xednadly (rozum\u011bj pr\u016fpov\xeddkami) typu: "Tak vypad\xe1 tenis ..." (povedl se mu \xfader), "Promi\u0148 ..." (taky se mu povedl \xfader), "Tam nic nen\xed." (pro zm\u011bnu se povedl \xfader mn\u011b) zcela evidentn\u011b ovliv\u0148uje pr\u016fb\u011bh cel\xe9 hry. Jinak to nen\xed mo\u017en\xe9. A to nemluv\xedm o typech \xfader\u016f, kter\xe9 Philius po\u017e\xedv\xe1/zneu\u017e\xedv\xe1: pov\u011bstn\xfd lobing a toping (v moj\xed hant\xfdrce). Stav z\xe1pasu tomu pak odpov\xedd\xe1. T\u0159i prohran\xe9 sety. Prvn\xed mi utekl, druh\xfd byl trag\xe9die a ve t\u0159et\xedm jsem vedl 5:3 a skon\u010dil na lopat\u011b, zase trag\xe9die. Tren\xe9ra u\u017e nechci tuto sez\xf3nu vid\u011bt.'},{id:22,matchDate:new Date("2019-08-15"),courtAndTime:"kurt K4 v 11:00",matchScore:[[3,6],[3,6],[3,1]],winner:"Phil",notes:"Pov\u011btrnostn\xed podm\xednky, kter\xe9 dnes vl\xe1dly na h\u0159i\u0161ti byly ide\xe1ln\xed. Teplota veskrze p\u0159\xedjemn\xe1 a slun\xed\u010dko v dobr\xe9 n\xe1lad\u011b. Vzhledem k tomu, \u017ee l\xe9to ji\u017e odch\xe1z\xed, tak na kurtu ji\u017e nepanovala unavuj\xedc\xed vedra a pot se netvo\u0159il v hektolitrech. Johnnyho pov\u011bstn\xe9 pot\xedtko z\u016fstalo t\xe9m\u011b\u0159 such\xe9, stejn\u011b tak jako tren\xfdrky, kter\xe9 mnohdy p\u0159\xedpom\xednaly plavky skokana do vody, kter\xfd zrovna vylezl z baz\xe9nu. Phil byl v dobr\xe9 n\xe1lad\u011b a por\xe1\u017eka by mu tentokr\xe1t ani moc nevadila, proto\u017ee dnes r\xe1no za\u017eil op\u011bt n\u011bco moc kr\xe1sn\xe9ho, n\u011bco, o \u010dem gentleman Johnny mluvit takhle ve\u0159ejn\u011b rozhodn\u011b nem\u016f\u017ee a nebude. No a o zbytku tohoto kr\xe1sn\xe9ho skoro dopoledne snad nem\xe1 cenu ani mluvit ..."},{id:23,matchDate:new Date("2019-08-17"),courtAndTime:"kurt K3 v 9:30",matchScore:[[0,0]],winner:"to be decided",notes:"Johnny is the favourite, as always ..."}]},e}return Object(d.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this.state,a=e.players,t=e.booking,n=e.matches,r=t.map(function(e){return e.name}),l=a.map(function(e){return e}),c=n.map(function(e){return e}),s=n.map(function(e,a){return e.matchScore}).map(function(e,a){var t=0,n=0,o=e.map(function(e,a){return e[0]>e[1]?t++:e[0]<e[1]&&e[0]!==e[1]&&n++,[t,n]});return o[o.length-1]}),i=s.map(function(e){var a=0,t=0;return e[0]>e[1]?a++:e[1]>e[0]&&t++,[a,t]}),m=i.filter(function(e){var a=e[0]===e[1];return console.log(a),a}),d=n.filter(function(e){return"to be decided"!==e.winner});console.log("pocet zapasu bez planovaneho: ",d);var u=c.length-d.length,p=m.length-u,y=p>4?"rem\xedz":p>1?"rem\xedzy":"rem\xedza",b=[i.reduce(function(e,a){return e+a[0]},0),i.reduce(function(e,a){return e+a[1]},0)];return o.a.createElement("div",{className:"App"},o.a.createElement(h,{milo:r[0],omega:r[1],hodolany:r[2],holice:r[3]}),o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"intro"},o.a.createElement("p",null,"Dva amat\xe9r\u0161t\xed badmintonist\xe9 se rozhodli, \u017ee zah\xe1j\xed b\u011bhem l\xe9ta 2019 tenisovou sez\xf3nu, a to na je\u0161t\u011b v\u011bt\u0161\xed amat\xe9rsk\xe9 \xfarovni."," "),o.a.createElement("p",null,"Jeden z nich se rozhodl vyu\u017e\xedt pomoci tren\xe9ra, a ten druh\xfd to nechal na sudi\u010dky."," "),o.a.createElement("p",null,"To, co je v jejich snaze \u017eene vp\u0159ed",o.a.createElement("span",{className:"hvezdicka"},"*"),", je magick\xe9 slovo"," ",o.a.createElement("a",{href:"#tabulka"},"TABULKA"),".")),o.a.createElement("section",{className:"welcome"},o.a.createElement("blockquote",{className:"quote"},o.a.createElement("p",null,"If you don\u2019t practice, you don\u2019t deserve to win."),o.a.createElement("footer",null,"Andre Agassi"))),o.a.createElement("section",{className:"players-section"},o.a.createElement("div",{className:"players-title"},o.a.createElement("span",null,"players")),o.a.createElement(v,{players:l})),o.a.createElement("section",{className:"score-board"},o.a.createElement("div",null,"head-to-head"),o.a.createElement("div",{className:"h2hScore"},o.a.createElement("span",null,b[0]),o.a.createElement("span",null,":"),o.a.createElement("span",null,b[1]))),o.a.createElement("section",{className:"tabulka"},o.a.createElement("h1",{id:"tabulka",className:"tabulka-heading"},"ta tabulka ",o.a.createElement("i",{className:"fas fa-file-alt"})),o.a.createElement("p",{className:"rekapitulace"},"Po\u010det odehran\xfdch z\xe1pas\u016f:"," ",o.a.createElement("span",null,d.length),", z toho"," ",o.a.createElement("span",null,p," ",y),"."),o.a.createElement(k,{matches:c.reverse(),setResults:s}))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(y,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[8,1,2]]]);
//# sourceMappingURL=main.b879db9a.chunk.js.map