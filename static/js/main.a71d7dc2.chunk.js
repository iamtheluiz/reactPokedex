(this.webpackJsonppokedex=this.webpackJsonppokedex||[]).push([[0],{26:function(e,t,n){e.exports=n.p+"static/media/arrow-left.713fe29d.svg"},29:function(e,t,n){e.exports=n.p+"static/media/logo.25bf045c.svg"},30:function(e,t){e.exports={grass:"#9bcc50",poison:"#b97fc9",fire:"#fd7d24",flying:"#3dc7ef",water:"#4592c4",bug:"#729f3f",normal:"#a4acaf",electric:"#eed535",ground:"#f7de3f",fairy:"#fdb9e9",fighting:"#d56723",psychic:"#f366b9",steel:"#9eb7b8",ice:"#51c4e7",ghost:"#7b62a3",rock:"#a38c21",dragon:"#53a4cf",dark:"#707070"}},31:function(e,t,n){e.exports=n(70)},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},48:function(e,t,n){},67:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(25),o=n.n(r),l=(n(36),n(11)),i=n(4),s=(n(37),n(26)),m=n.n(s);n(38);function u(e){return c.a.createElement("div",{id:"mainMenu"},c.a.createElement("a",{href:e.href},c.a.createElement("img",{src:m.a,alt:"Back"})))}n(39);var p=n(8),f=n.n(p);function d(e){return c.a.createElement(l.b,{to:e.href,className:"IndexItem",style:{backgroundColor:e.color}},c.a.createElement("strong",null,e.title),c.a.createElement("img",{src:f.a,alt:"Pokedex Icon"}))}function E(){return c.a.createElement("div",{id:"Index"},c.a.createElement(u,null),c.a.createElement("h1",{className:"title"},"Pokemon!"),c.a.createElement("div",{id:"items"},c.a.createElement(d,{href:"/pokedex",title:"Pokedex",color:"#4bc1a7"}),c.a.createElement(d,{href:"/pokedex",title:"Pokedex",color:"#4bc1a7"}),c.a.createElement(d,{href:"/pokedex",title:"Pokedex",color:"#4bc1a7"}),c.a.createElement(d,{href:"/pokedex",title:"Pokedex",color:"#4bc1a7"})))}var k=n(29),h=n.n(k);n(48);var b=function(){return c.a.createElement("div",{id:"NotFound"},c.a.createElement("header",{className:"App-header"},c.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),c.a.createElement("h1",null,"Error 404: Not Found!"),c.a.createElement("p",null,"This page doesn't exist!"),c.a.createElement("a",{className:"App-link",href:"/"},"Go back to home")))},g=n(5),x=n.n(g),v=n(15),y=n(9),j=n(6),w=n(10),O=n.n(w),N=n(30),P=n.n(N);n(67);function I(e){var t=Object(a.useState)(e.index.toString().split("").length),n=Object(j.a)(t,2),r=n[0],o=n[1],l=Object(a.useState)([{type:{name:""}}]),i=Object(j.a)(l,2),s=i[0],m=i[1];function u(){return(u=Object(y.a)(x.a.mark((function t(){var n,a;return x.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,O.a.get(e.info);case 2:n=t.sent,a=n.data,m(a.types.reverse());case 5:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(a.useEffect)((function(){for(var t="",n=r;n<3;n++)t+="0";t+=e.index,o(t),function(){u.apply(this,arguments)}()}),[]),c.a.createElement("div",{className:"pokeCard",style:{backgroundColor:P.a[s[0].type.name]}},c.a.createElement("strong",null,e.name),c.a.createElement("p",null,"#",r),s.map((function(e){return c.a.createElement("span",{key:e.type.name,className:"pokeType"},e.type.name)})),c.a.createElement("img",{src:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/".concat(r,".png"),alt:"Pokemon"}))}n(68);function S(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)("https://pokeapi.co/api/v2/pokemon/?limit=20&offset=0"),l=Object(j.a)(o,2),i=l[0],s=l[1];function m(){return u.apply(this,arguments)}function u(){return(u=Object(y.a)(x.a.mark((function e(){var t,a,c,o;return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get(i);case 2:t=e.sent,a=t.data,c=a.next,o=a.results,r([].concat(Object(v.a)(n),Object(v.a)(o))),s(c);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return Object(a.useEffect)((function(){m()}),[]),c.a.createElement("div",{id:"pokeList"},n.map((function(e,t){return c.a.createElement(I,{key:t,index:t+1,name:e.name,info:e.url})})),null!==i?c.a.createElement("button",{onClick:function(){m()}},"More!"):c.a.createElement("p",null,"End!"))}n(69);function C(){return c.a.createElement("div",{id:"Pokedex"},c.a.createElement(u,null),c.a.createElement("h1",{className:"title"},"Hello Pokedex!"),c.a.createElement(S,null))}function A(){return c.a.createElement(l.a,null,c.a.createElement(i.c,null,c.a.createElement(i.a,{path:"/",exact:!0,component:E}),c.a.createElement(i.a,{path:"/pokedex",component:C}),c.a.createElement(i.a,{path:"*",component:b})))}Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement((function(){return c.a.createElement("div",{className:"container"},c.a.createElement("img",{id:"pokeballIcon",src:f.a,alt:"Pokeball Icon"}),c.a.createElement(A,null))}),null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,n){e.exports=n.p+"static/media/pokeball.b674ae77.jpg"}},[[31,1,2]]]);
//# sourceMappingURL=main.a71d7dc2.chunk.js.map