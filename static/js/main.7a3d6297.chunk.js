(this["webpackJsonp3ottobre.it"]=this["webpackJsonp3ottobre.it"]||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/marco.c71ccbdb.png"},function(e,t,a){e.exports=a.p+"static/media/melania.5a681849.png"},function(e,t,a){e.exports=a(16)},,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),i=a(7),l=a.n(i),c=a(1),r=a(2),o=a(4),m=a(3),u=a(5),d=a(8),h=a.n(d),p=a(9),v=a.n(p),b=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"level container"},s.a.createElement("div",{className:"level-left"},s.a.createElement("div",{className:"level-item"},s.a.createElement("p",{className:"title is-size-1-desktop is-size-4-mobile"},s.a.createElement("span",null,"#savethedate")))),s.a.createElement("div",{className:"level-right"},s.a.createElement("div",{className:"level-item"},s.a.createElement("figure",{className:"image is-96x96"},s.a.createElement("img",{className:"is-rounded",src:h.a,alt:"marco"})),s.a.createElement("figure",{className:"image is-96x96"},s.a.createElement("img",{className:"is-rounded",src:v.a,alt:"melania"}))))))}}]),t}(s.a.Component);function E(e){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"tile is-parent is-3"},s.a.createElement("article",{className:"tile is-child box notification has-text-centered is-danger "},s.a.createElement("div",{className:"box has-background-warning"},s.a.createElement("p",{className:"title"}," ",e.time," "),s.a.createElement("p",{className:"subtitle is-size-5 is-size-6-touch"}," ",e.label," ")))))}var f=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(o.a)(this,Object(m.a)(t).call(this,e))).state={deadline:a.props.deadline},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;this.timerID=setInterval((function(){return e.tick()}),1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerID)}},{key:"tick",value:function(){var e=Date.parse(this.state.deadline)-Date.parse(new Date);this.setState({seconds:Math.floor(e/1e3%60),minutes:Math.floor(e/1e3/60%60),hours:Math.floor(e/36e5%24),days:Math.floor(e/864e5)})}},{key:"render",value:function(){return s.a.createElement(s.a.Fragment,null,s.a.createElement("div",{className:"container"},s.a.createElement("div",{className:"tile is-ancestor"},s.a.createElement(E,{time:this.state.days,label:"Days"}),s.a.createElement(E,{time:this.state.hours,label:"Hours"}),s.a.createElement(E,{time:this.state.minutes,label:"Minutes"}),s.a.createElement(E,{time:this.state.seconds,label:"Seconds"}))))}}]),t}(s.a.Component),g=(a(15),function(e){function t(e){var a;Object(c.a)(this,t),a=Object(o.a)(this,Object(m.a)(t).call(this,e));var n=new Date(2021,8,17,10,30,0,0),s=Date.parse(n)-Date.parse(new Date);return a.state={deadline:n,show:s>=0},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"render",value:function(){return s.a.createElement("section",{className:"section"},s.a.createElement(b,null),s.a.createElement("p",{className:"subtitle is-size-3-desktop is-size-4-mobile has-text-centered "},s.a.createElement("p",null,"coming soon...")),this.state.show&&s.a.createElement(f,{deadline:this.state.deadline}))}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[10,1,2]]]);
//# sourceMappingURL=main.7a3d6297.chunk.js.map