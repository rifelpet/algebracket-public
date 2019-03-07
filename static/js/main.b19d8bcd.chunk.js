(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{100:function(e,t,a){e.exports=a(250)},112:function(e,t,a){},248:function(e,t,a){},250:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(24),i=a.n(r),o=a(21),l=a(16),c=a(17),d=a(22),m=a(20),p=a(23),u=a(8),h=Object(u.createStandardAction)("bracketmeta/UPDATE").map(function(e){return{payload:{highestGamesPlayed:e.highestGamesPlayed,totalGames:e.totalGames,totalScore:e.totalScore}}}),f={update:h},v=Object(u.createStandardAction)("seed/SET").map(function(e){return{payload:{region:e.region,seed:e.seed,team:e.team}}}),g={set:v},b=a(91),y=a.n(b),E=Object(u.createStandardAction)("sliders/ADD").map(function(e){return{payload:{id:e.id||y()(),name:e.name||"New Stat",value:e.value}}}),w=Object(u.createStandardAction)("sliders/UPDATE")(),O={add:E,update:w},j=(a(112),a(30)),S=a(92),N=a.n(S),k=new Set(["Rank","Region","Name","Games Won"]),T={"3PFGP":"Team 3-Point Field Goal Percentage.",AP:"Percentage of team's field goals that were assisted.",ASM:"Difference between a team's offense rating and defense rating. The Scoring Margin after 100 possessions.",AT:"Number of assists per turnover a team has.",DR:"Estimate of points a team allowed their opponents to score per 100 possessions. This stat is ranked inversely- the lowest value is ranked the highest.",EFGP:"Team's Total Field Goal percentage adjusted for the fact that a 3-point field goal is worth more than a 2-point field goal.",FGP:"Team Field Goal Percentage.",FTFGA:"Free Throws made per Field Goal Attempt. Shows how effective a team is at getting fouled and making their free throws. A higher free throw rate mean's a team plays more aggressively and to draw contact in the paint and get fouled.",FTP:"Team's Free Throw shooting percentage.",OFTFGA:"Opponent's Free Throws made per Field Goal Attempt. Shows a team's ability to avoid fouling their opponent. A low opponent's free throw rate means that a team is good at not fouling their opponent. This stat is ranked inversely- the lowest value is ranked the highest.",OPG:" Average points a team's opponent scores per game. This stat is ranked inversely- the lowest value is ranked the highest.",OR:"Estimate of points scored by a team per 100 possessions. Offensive Rating is different than points per game in that it eliminates the influence of a team's pace. A slow paced team will have less possessions per game and less opportunity to score, resulting in a lower points per game stat. However, if this team scores on almost every possession, they will have a high offensive rating.",ORP:"Percentage of available offensive rebounds a team grabs during a game. Offensive rebounds are important because they keep a possession alive and allow a team to get more chances at scoring.",OTP:"Estimate of turnovers a team forces their opponents to have per 100 defensive possessions.",OTSP:" Opponent's combined shooting efficiency that takes into account 3 pointers, 2 point field goals, and free throws. A measure of how good a team is at making their opponent's miss. This stat is ranked inversely- the lowest value is ranked the highest.",P:"Estimate of the number of possessions a team has per 40 minute game. Ranked by fastest paced teams. If you prefer slow paced teams, do not use this slider.",PG:"Average points a team scores per game.",RP:"Percentage of available rebounds a team grabs during a game.",S:"Team's position in the bracket. 1 seeds have the 'easiest' path to the final four. This stat is ranked inversely- the lowest value is ranked the highest.",SS:"Strength of Schedule. A ranking of the team's opponents. A team who plays harder opponents will have a higher strength of schedule.",TM:"Difference between the number of times a team loses the ball vs times their opponent loses the ball.",TP:"Estimate of turnovers a team commits per 100 offensive possessions. This stat is ranked inversely- the lowest value is ranked the highest.",TSP:"Team's combined shooting efficiency that takes into account 3 pointers, 2 point field goals, and free throws.",WP:"Team's Wins / Total Games prior to the tournament. An undefeated team would have a win percentage of 100%."};function A(e){if(!(e in T))throw new Error("Could not find description for statID "+e);return T[e]}var P=[[1,16],[8,9],[5,12],[4,13],[6,11],[3,14],[7,10],[2,15],[1,16,8,9],[5,12,4,13],[6,11,3,14],[7,10,2,15],[1,16,8,9,5,12,4,13],[6,11,3,14,7,10,2,15],[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]];var G=function(){function e(){Object(l.a)(this,e),this.dataCache=void 0,this.dataCache={}}return Object(c.a)(e,[{key:"getYear",value:function(e,t,a){var n=this;console.log("Fetching",e,t);var s=e+t;if(this.dataCache[s])return this.dataCache[s];N.a.get("data/"+t+"/"+e+".csv").then(function(e){var t=e.data;n.dataCache[s]=n.parseData(t),a(n.dataCache[s])}).catch(function(e){console.log(e)})}},{key:"parseData",value:function(e){for(var t=e.trim().split("\n"),a=t[0].trim().split(","),n=[],s=0,r=-1,i=0,o=1;o<t.length;o++){for(var l=t[o].split(","),c=0,d=-1,m="",p=0,u={},h=0;h<a.length;h++){switch(a[h]){case"Rank":c=parseInt(l[h],10);break;case"Region":d=parseInt(l[h],10);break;case"Name":m=l[h];break;case"Games Won":p=parseInt(l[h],10);break;default:u[a[h]]=+l[h]}}var f={gamesWon:p,name:m,rank:c,stats:u};f.gamesWon>0&&(s+=f.gamesWon,i+=Math.pow(2,f.gamesWon)-1),f.gamesWon>r&&(r=f.gamesWon);var v={region:d,seed:f.stats.Seed,team:f};n.push(v)}var g=Object(j.a)(a).filter(function(e){return!k.has(e)}),b=new Set(g.map(function(e){return{name:e,id:(t=e,t.replace(/%/,"P").replace(/[ a-z%.\/]/g,"")),value:0};var t}));return console.log("%j",{highestGamesPlayed:r,seeds:n,sliders:Array.from(b),totalGames:s,totalScore:i}),{highestGamesPlayed:r,seeds:n,sliders:Array.from(b),totalGames:s,totalScore:i}}}]),e}(),W=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return void 0===this.props.name||void 0===this.props.stats.Seed?s.a.createElement("span",null):this.props.stats.winPct?s.a.createElement("span",{className:this.props.class},this.props.stats.Seed,". ",this.props.name," ",this.props.stats.winPct,"%"):s.a.createElement("span",{className:this.props.class},this.props.stats.Seed,". ",this.props.name)}},{key:"getScore",value:function(e){var t=this,a=0;return Object.keys(e).forEach(function(n){var s=e[n];a+=s*t.props.stats[n]}),console.log(this.props.name,a),a}}]),t}(s.a.Component),C=W,F=function(){function e(t,a,n){Object(l.a)(this,e),this.sliders=void 0,this.seeds=void 0,this.scores=void 0,this.seedCount=void 0,this.sliders=t,this.seeds=a.sort(function(e,t){return e.seed<t.seed?-1:e.seed>t.seed?1:0}),this.scores=[],this.seedCount=n;var s=!0,r=!1,i=void 0;try{for(var o,c=this.seeds[Symbol.iterator]();!(s=(o=c.next()).done);s=!0){var d=o.value;this.scores.push(this.getScore(d))}}catch(m){r=!0,i=m}finally{try{s||null==c.return||c.return()}finally{if(r)throw i}}}return Object(c.a)(e,[{key:"getWinner",value:function(e){if(this.seeds.length!==this.seedCount)return null;var t=P[e-1],a=0,n=null,r=!0,i=!1,o=void 0;try{for(var l,c=t[Symbol.iterator]();!(r=(l=c.next()).done);r=!0){var d=l.value,m=this.scores[d];m>a&&(a=m,n=this.seeds[d-1].team)}}catch(p){i=!0,o=p}finally{try{r||null==c.return||c.return()}finally{if(i)throw o}}return null!==n&&0!==a?s.a.createElement(C,n):null}},{key:"getScore",value:function(e){var t=0,a=!0,n=!1,s=void 0;try{for(var r,i=this.sliders[Symbol.iterator]();!(a=(r=i.next()).done);a=!0){var o=r.value,l=e.team.stats[o.name];"Seed"===o.name?t+=(this.seedCount-l)*o.value/this.seedCount:t+=o.value*l}}catch(c){n=!0,s=c}finally{try{a||null==i.return||i.return()}finally{if(n)throw s}}return t}}]),e}(),x=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=new F(this.props.sliders,this.props.seeds,16),t=this.props.location.indexOf("left")>-1?"fl":"fr",a=this.props.location.indexOf("left")>-1?"fr":"fl";return s.a.createElement("div",{className:t+" round5-topwrap"},s.a.createElement("div",{className:a+" round5-top",id:this.props.name+"game15"},e.getWinner(15)),s.a.createElement("div",{className:t+" round4-topwrap"},s.a.createElement("div",{className:a+" round4-top",id:this.props.name+"game13"},e.getWinner(13)),s.a.createElement("div",{className:t+" round3-topwrap"},s.a.createElement("div",{className:a+" round3-top",id:this.props.name+"game9"},e.getWinner(9)),s.a.createElement("div",{className:t+" round2-topwrap"},s.a.createElement("div",{className:a+" round2-top",id:this.props.name+"game1"},e.getWinner(1)),s.a.createElement("div",{className:t+" round1-top",id:this.props.name+"seed1"},this.getSeed(1)),s.a.createElement("div",{className:t+" round1-bottom",id:this.props.name+"seed16"},this.getSeed(16))),s.a.createElement("div",{className:t+" round2-bottomwrap"},s.a.createElement("div",{className:a+" round2-bottom",id:this.props.name+"game2"},e.getWinner(2)),s.a.createElement("div",{className:t+" round1-top",id:this.props.name+"seed8"},this.getSeed(8)),s.a.createElement("div",{className:t+" round1-bottom",id:this.props.name+"seed9"},this.getSeed(9)))),s.a.createElement("div",{className:t+" round3-bottomwrap"},s.a.createElement("div",{className:a+" round3-bottom",id:this.props.name+"game10"},e.getWinner(10)),s.a.createElement("div",{className:t+" round2-topwrap"},s.a.createElement("div",{className:a+" round2-top",id:this.props.name+"game3"},e.getWinner(3)),s.a.createElement("div",{className:a+" round1-top",id:this.props.name+"seed5"},this.getSeed(5)),s.a.createElement("div",{className:t+" round1-bottom",id:this.props.name+"seed12"},this.getSeed(12))),s.a.createElement("div",{className:t+" round2-bottomwrap"},s.a.createElement("div",{className:a+" round2-bottom",id:this.props.name+"game4"},e.getWinner(4)),s.a.createElement("div",{className:t+" round1-top",id:this.props.name+"seed4"},this.getSeed(4)),s.a.createElement("div",{className:t+" round1-bottom",id:this.props.name+"seed13"},this.getSeed(13))))),s.a.createElement("div",{className:t+" round4-bottomwrap"},s.a.createElement("div",{className:a+" round4-bottom",id:this.props.name+"game14"},e.getWinner(14)),s.a.createElement("div",{className:t+" round3-topwrap"},s.a.createElement("div",{className:a+" round3-top",id:this.props.name+"game11"},e.getWinner(11)),s.a.createElement("div",{className:t+" round2-topwrap"},s.a.createElement("div",{className:a+" round2-top",id:this.props.name+"game5"},e.getWinner(5)),s.a.createElement("div",{className:t+" round1-top",id:this.props.name+"seed6"},this.getSeed(6)),s.a.createElement("div",{className:t+" round1-bottom",id:this.props.name+"seed11"},this.getSeed(11))),s.a.createElement("div",{className:t+" round2-bottomwrap"},s.a.createElement("div",{className:a+" round2-bottom",id:this.props.name+"game6"},e.getWinner(6)),s.a.createElement("div",{className:t+" round1-top",id:this.props.name+"seed3"},this.getSeed(3)),s.a.createElement("div",{className:t+" round1-bottom",id:this.props.name+"seed14"},this.getSeed(14)))),s.a.createElement("div",{className:t+" round3-bottomwrap"},s.a.createElement("div",{className:a+" round3-bottom",id:this.props.name+"game12"},e.getWinner(12)),s.a.createElement("div",{className:t+" round2-topwrap"},s.a.createElement("div",{className:a+" round2-top",id:this.props.name+"game7"},e.getWinner(7)),s.a.createElement("div",{className:t+" round1-top",id:this.props.name+"seed7"},this.getSeed(7)),s.a.createElement("div",{className:t+" round1-bottom",id:this.props.name+"seed10"},this.getSeed(10))),s.a.createElement("div",{className:t+" round2-bottomwrap"},s.a.createElement("div",{className:a+" round2-bottom",id:this.props.name+"game8"},e.getWinner(8)),s.a.createElement("div",{className:t+" round1-top",id:this.props.name+"seed2"},this.getSeed(2)),s.a.createElement("div",{className:t+" round1-bottom",id:this.props.name+"seed15"},this.getSeed(15))))))}},{key:"getSeed",value:function(e){return this.props.seeds&&this.props.seeds[e-1]?s.a.createElement(W,this.props.seeds[e-1].team):null}}]),t}(s.a.Component),R=Object(o.b)(function(e){return{sliders:e.sliders.sliders}})(x),D=a(93),I=a.n(D),Y=a(94),M=a.n(Y),B=a(45),J=a.n(B),U=a(55),z=a.n(U),H=a(56),V=a.n(H),q=a(46),K=a(31),L=a.n(K),Q=Object(u.createStandardAction)("selections/SETYEAR").map(function(e){return{payload:{year:e.year}}}),X=Object(u.createStandardAction)("selections/SETACTIVITY").map(function(e){return{payload:{activity:e.activity}}}),Z={setActivity:X,setYear:Q},$=[{id:"cbbm",name:"NCAA Men's Bball"},{id:"cbbw",name:"NCAA Women's Bball"}],_=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props,t=e.setYear,a=e.setActivity,n=e.classes,r=[],i=(new Date).getFullYear();i>=2010;i--)r.push(s.a.createElement("option",{key:i},i));var o=[];return $.forEach(function(e){return o.push(s.a.createElement("option",{key:e.id,value:e.id},e.name))}),s.a.createElement(I.a,{className:n.card},s.a.createElement("div",{className:n.details},s.a.createElement(M.a,{className:n.content},s.a.createElement(L.a,{paragraph:!0},s.a.createElement(z.a,{htmlFor:"year-native-helper"},"Year"),s.a.createElement(V.a,{value:this.props.selections.year,onChange:t,input:s.a.createElement(J.a,{name:"year",id:"year-native-helper"})},r)),s.a.createElement(L.a,{paragraph:!0},s.a.createElement(z.a,{htmlFor:"activity-native-helper"},"Activity"),s.a.createElement(V.a,{value:this.props.selections.activity,onChange:a,input:s.a.createElement(J.a,{name:"activity",id:"activity-native-helper"})},o)))))}}]),t}(n.Component),ee=Object(o.b)(function(e){return{selections:e.selections.selections}},{setActivity:function(e){return Z.setActivity({activity:e.currentTarget.value})},setYear:function(e){return Z.setYear({year:parseInt(e.currentTarget.value,10)})}})(Object(q.withStyles)(function(e){return{card:{display:"flex",left:"401px",position:"relative",top:"120px",width:"278px"},content:{flex:"1 0 auto"},cover:{width:151},details:{alignItems:"flex-start",display:"flex"}}},{withTheme:!0})(_)),te=a(35),ae=a.n(te),ne=a(98),se=a.n(ne),re=a(95),ie=a.n(re),oe=a(96),le=a.n(oe),ce=a(97),de=a.n(ce),me=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(a=Object(d.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).onChange=function(e,t){return a.props.updateSlider(a.props.slider.id,t)},a}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.slider;return s.a.createElement(ie.a,null,s.a.createElement(le.a,{title:A(e.id),enterDelay:400},s.a.createElement(L.a,{id:"label-"+e.id,align:"left",inline:!0},e.name)),s.a.createElement("div",{className:"slider-wrapper"},s.a.createElement(L.a,{id:"val-"+e.id,inline:!0},e.value),s.a.createElement(de.a,{onChange:this.onChange,value:e.value,min:0,max:10,step:1,"aria-labelledby":"label-"+e.id})))}}]),t}(s.a.Component),pe=Object(o.b)(function(e){return{sliders:e.sliders.sliders}},{updateSlider:function(e,t){return O.update({id:e,value:t})}})(me),ue=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){for(var e=this.props.sliders,t=[],a=Math.ceil(this.props.sliders.length/3),n=0,r=e.length;n<r;n+=a){var i=e.slice(n,n+a);t[n/a]=i.map(function(e){return s.a.createElement(pe,{slider:e,key:e.id})})}var o=this.props.classes;return s.a.createElement(ae.a,{container:!0,className:o.root,spacing:16},s.a.createElement(ae.a,{item:!0,xs:12},s.a.createElement(ae.a,{container:!0,justify:"center",spacing:16},[0,1,2].map(function(e){return s.a.createElement(ae.a,{key:e,item:!0},s.a.createElement(se.a,null,t[e]))}))))}}]),t}(s.a.Component),he=Object(o.b)(function(e){return{sliders:e.sliders.sliders}})(Object(q.withStyles)(function(e){return{control:{padding:2*e.spacing.unit},paper:{height:140,width:160},root:{flexGrow:1}}})(ue)),fe=function(e){function t(){return Object(l.a)(this,t),Object(d.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;(new G).getYear(this.props.selections.year,this.props.selections.activity,function(t){console.log(t),t.sliders.forEach(function(t){e.props.addSlider(t.name,t.id,t.value)}),e.props.updateMeta(t.totalGames,t.totalScore,t.highestGamesPlayed),t.seeds.forEach(function(t){e.props.setSeed(t.region,t.seed,t.team)})})}},{key:"render",value:function(){return s.a.createElement("div",{id:"body-container",className:"App"},s.a.createElement(ee,null),s.a.createElement("div",{className:"bracket-container"},s.a.createElement("div",{className:"tournament32-wrap ltor fl"},s.a.createElement("div",{className:"round6-top winner6 fr championship-left",id:"leftgame"}),s.a.createElement(R,{name:"south",location:"topleft",seeds:this.props.seeds.filter(function(e){return 0===e.region})}),s.a.createElement(R,{name:"east",location:"bottomleft",seeds:this.props.seeds.filter(function(e){return 1===e.region})})),s.a.createElement("div",{className:"tournament32-wrap rtol fr"},s.a.createElement("div",{className:"round6-top winner6 fl championship-right",id:"rightgame"}),s.a.createElement(R,{name:"west",location:"topright",seeds:this.props.seeds.filter(function(e){return 2===e.region})}),s.a.createElement(R,{name:"midwest",location:"bottomright",seeds:this.props.seeds.filter(function(e){return 3===e.region})})),s.a.createElement(he,null)))}}]),t}(n.Component),ve=Object(o.b)(function(e){return{meta:e.meta.meta,seeds:e.seeds.seeds,selections:e.selections.selections,sliders:e.sliders.sliders}},{addSlider:function(e,t,a){return O.add({name:e,id:t,value:a})},setSeed:function(e,t,a){return g.set({region:e,seed:t,team:a})},updateMeta:function(e,t,a){return f.update({totalGames:e,totalScore:t,highestGamesPlayed:a})}})(fe),ge=(a(248),a(18)),be=a(99),ye=Object(ge.combineReducers)({meta:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{totalGames:0,totalScore:0,highestGamesPlayed:0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(u.getType)(h):return t.payload;default:return e}}}),Ee=a(25),we=Object(ge.combineReducers)({seeds:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(u.getType)(v):var a=!1,n=!0,s=!1,r=void 0;try{for(var i,o=e[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;a=a||l.region===t.payload.region&&l.seed===t.payload.seed}}catch(c){s=!0,r=c}finally{try{n||null==o.return||o.return()}finally{if(s)throw r}}return a?e.map(function(e){return e.seed===t.payload.seed&&e.region===t.payload.region?Object(Ee.a)({},e,{team:t.payload.team}):e}):[].concat(Object(j.a)(e),[t.payload]);default:return e}}}),Oe=Object(ge.combineReducers)({selections:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{year:2019,activity:"cbbm"},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(u.getType)(X):case Object(u.getType)(Q):return Object(Ee.a)({},e,t.payload);default:return e}}}),je=Object(ge.combineReducers)({sliders:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Object(u.getType)(E):return[].concat(Object(j.a)(e),[t.payload]);case Object(u.getType)(w):return e.map(function(e){return e.id===t.payload.id?Object(Ee.a)({},e,{value:t.payload.value}):e});default:return e}}}),Se=Object(ge.combineReducers)({meta:ye,seeds:we,selections:Oe,sliders:je});var Ne,ke=Object(ge.createStore)(Se,Ne,Object(be.composeWithDevTools)());i.a.render(s.a.createElement(o.a,{store:ke},s.a.createElement(ve,null)),document.getElementById("root"))}},[[100,2,1]]]);
//# sourceMappingURL=main.b19d8bcd.chunk.js.map