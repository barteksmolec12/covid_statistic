(this.webpackJsonpcovidapp=this.webpackJsonpcovidapp||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),i=a(2),l=a.n(i),r=(a(12),a(3)),s=a(4),c=a(6),u=a(5),m=(a(13),a(14),a(15),a(16),function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"options"},o.a.createElement("div",{class:"form-row align-items-center"},o.a.createElement("div",{class:"col-auto my-1"},o.a.createElement("select",{class:"custom-select mr-sm-2",id:"inlineFormCustomSelect",onChange:function(){return e.method(document.getElementById("inlineFormCustomSelect").value)}},o.a.createElement("option",{selected:!0},"Wybierz wojew\xf3dztwo ..."),o.a.createElement("option",{value:"malopolskie"},"Ma\u0142opolskie"),o.a.createElement("option",{value:"slaskie"},"\u015al\u0105skie"),o.a.createElement("option",{value:"dolnoslaskie"},"Dolno\u015bl\u0105skie"),o.a.createElement("option",{value:"kujawsko-pomorskie"},"Kujawsko-pomorskie"),o.a.createElement("option",{value:"lubelskie"},"Lubelskie"),o.a.createElement("option",{value:"lubuskie"},"Lubuskie"),o.a.createElement("option",{value:"lodzkie"},"\u0141odzkie"),o.a.createElement("option",{value:"mazowieckie"},"Mazowieckie"),o.a.createElement("option",{value:"opolskie"},"Opolskie"),o.a.createElement("option",{value:"podkarpackie"},"Podkarpackie"),o.a.createElement("option",{value:"pomorskie"},"Pomorskie"),o.a.createElement("option",{value:"swietokrzyskie"},"\u015awi\u0119tokrzyskie"),o.a.createElement("option",{value:"warminsko-mazurskie"},"Warmi\u0144sko-mazurskie"),o.a.createElement("option",{value:"wielkopolskie"},"Wielkopolskie"),o.a.createElement("option",{value:"zachodniopomorskie"},"Zachodniopomorskie"))))))}),d=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{marginBottom:25}},o.a.createElement("h1",{style:{fontSize:30}},"Zara\u017cenia: "),o.a.createElement("h2",{style:{fontSize:30,display:"inline",fontWeight:"bold"}},e.inf," "),o.a.createElement("h2",{style:{fontSize:25,display:"inline",color:"grey"}},"(dzi\u015b ",o.a.createElement("h2",{style:{fontSize:25,display:"inline",color:"red"}},e.newCases),")")),o.a.createElement("div",{style:{marginBottom:25}},o.a.createElement("h1",{style:{fontSize:30}},"Zgony: "),o.a.createElement("h2",{style:{fontSize:30,display:"inline",fontWeight:"bold"}},e.dec," "),o.a.createElement("h2",{style:{fontSize:25,display:"inline",color:"grey"}},"(dzi\u015b ",o.a.createElement("h2",{style:{fontSize:25,display:"inline",color:"red"}},e.newDeath),")")),o.a.createElement("h1",{style:{fontSize:30}},"Ozdrowienia: ",o.a.createElement("h2",{style:{color:"green"}},o.a.createElement("b",null,e.healthy))))},p=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",{style:{fontSize:25}},"Zara\u017ceni: ",o.a.createElement("h2",{style:{fontSize:25}},e.ill)),o.a.createElement("h1",{style:{fontSize:25}},"Zgony: ",o.a.createElement("h2",{style:{fontSize:25}},e.dead)))},h=function(e){Object(c.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(r.a)(this,a);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(e=t.call.apply(t,[this].concat(o))).state={covid:{infected:null,deceased:null,infectedByRegion:[],sourceUrl:"https://www.gov.pl/web/koronawirus/wykaz-zarazen-koronawirusem-sars-cov-2",lastUpdatedAtApify:"2020-05-03T13:50:00.000Z",readMe:"https://apify.com/vaclavrut/covid-pl"},visible:!1,dead:0,ill:0,healtyCount:0,allCountries:{countrydata:[{info:{ourid:126,title:"Poland",code:"PL",source:"https://thevirustracker.com/poland-coronavirus-information-pl"},total_cases:15047,total_recovered:54,total_unresolved:0,total_deaths:755,total_new_cases_today:0,total_new_deaths_today:0,total_active_cases:9108,total_serious_cases:160,total_danger_rank:33}],stat:"ok"}},e.getValueName=function(t){console.log("get name");var a=0,n=0;e.state.covid.infectedByRegion.filter((function(e){return e.region==t})).map((function(e){return a=e.deceasedCount})),e.state.covid.infectedByRegion.filter((function(e){return e.region==t})).map((function(e){return n=e.infectedCount}));e.setState({dead:a,ill:n,visible:!0})},e}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;console.log("mount"),fetch("https://api.apify.com/v2/key-value-stores/3Po6TV7wTht4vIEid/records/LATEST?disableRedirect=true").then((function(e){return e.json()})).then((function(t){return e.setState({covid:t})})),fetch("https://api.thevirustracker.com/free-api?countryTotal=PL").then((function(e){return e.json()})).then((function(t){return e.setState({allCountries:t})}))}},{key:"render",value:function(){var e=0,t=0,a=0;this.state.allCountries.countrydata.map((function(t){return e=t.total_recovered})),this.state.allCountries.countrydata.map((function(e){return t=e.total_new_cases_today})),this.state.allCountries.countrydata.map((function(e){return a=e.total_new_deaths_today}));return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"general"},o.a.createElement("div",{className:"title"}," ",o.a.createElement("h1",{style:{fontSize:20}},"COVID-19 in POLAND")),o.a.createElement(d,{inf:this.state.covid.infected,dec:this.state.covid.deceased,healthy:e,newCases:t,newDeath:a})),o.a.createElement("h4",null,"Podzia\u0142 na wojew\xf3dztwa"),o.a.createElement(m,{method:this.getValueName,visible:this.state.visible}),o.a.createElement("div",{className:"partialss"},this.state.visible?o.a.createElement(p,{dead:this.state.dead,ill:this.state.ill}):null),o.a.createElement("footer",null,"Copyright \xa9 Smolec Bart\u0142omiej"))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.22418074.chunk.js.map