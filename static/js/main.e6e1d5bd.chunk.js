(this["webpackJsonpwarm-up"]=this["webpackJsonpwarm-up"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return k}));var n=a(1),i=a(2),r=a(4),c=a(3),s=a(0),l=a.n(s),o=a(6),d=a.n(o);function u(e){var t=e.intentos,a=e.resetHandler;return l.a.createElement("header",null,l.a.createElement("div",{className:"title"},"Memory Game"),l.a.createElement("div",{className:"board"},"Intentos: ",t,l.a.createElement("div",{className:"reset-button"},l.a.createElement("button",{className:"reset",onClick:a},"Reset Game"))))}var h=a(7),m=a.n(h),f=function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).cardClick=function(e){e.preventDefault(),i.props.onClick(i.props.index)},i}return Object(i.a)(a,[{key:"render",value:function(){var e=this.props,t=e.children,a=e.color;return l.a.createElement("div",{onClick:this.cardClick,className:"card ".concat(a)},t)}}]),a}(l.a.Component);var p=function(e){var t=e.card,a=e.handleClick,n=e.index,i=t.icon,r=t.isFlipped;return l.a.createElement("div",{className:"card-container"},l.a.createElement(m.a,{isFlipped:r,flipDirection:"horizontal"},l.a.createElement(f,{color:"card-back",index:n,onClick:a},l.a.createElement("i",{className:"fas fa-question-circle"})),l.a.createElement(f,{color:"card-front",index:n,onClick:a},l.a.createElement("i",{className:"fas ".concat(i)}))))},v=["fa-ambulance","fa-anchor","fa-angle-double-down","fa-assistive-listening-systems","fa-bahai","fa-band-aid","fa-bicycle","fa-bomb","fa-bug","fa-cat","fa-child","fa-dumbbell"],k=(a(13),a(14),function(e){Object(r.a)(a,e);var t=Object(c.a)(a);function a(e){var i;return Object(n.a)(this,a),(i=t.call(this,e)).state={intentos:0,previousCard:null},i.aciertos=0,i.lockClick=!1,i.cards=i.getGridElements(),i}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"main"},l.a.createElement(u,{intentos:this.state.intentos,resetHandler:this.resetGame.bind(this)}),l.a.createElement("div",{className:"card-grid"},this.cards.map((function(t,a){return l.a.createElement(p,{key:a,index:a,handleClick:e.handleClick.bind(e),card:t,handleCardEvent:e.handleCardEvent})}))))}},{key:"resetGame",value:function(){this.cards=this.getGridElements(),this.setState({intentos:0,previousCard:null})}},{key:"handleClick",value:function(e){var t=this;if(console.log("lockClick: ",this.lockClick),!this.lockClick)if(this.lockClick||this.state.previousCard){this.lockClick=!0;var a=this.state.previousCard,n=this.cards[e];this.setState((function(e){return{intentos:e.intentos+1}})),n.isFlipped=!0,a.id===n.id?(console.log("coincidencia"),this.lockClick=!1,this.setState({previousCard:null}),this.aciertos++,10===this.aciertos&&setTimeout((function(){alert("Ganaste en ".concat(t.state.intentos," intentos!")),t.resetGame()}),1e3)):setTimeout((function(){n.isFlipped=!1,a.isFlipped=!1,t.lockClick=!1,t.setState({previousCard:null})}),1e3)}else console.log("entro"),this.cards[e].isFlipped=!0,this.setState({previousCard:this.cards[e]})}},{key:"getGridElements",value:function(){for(var e,t,a=[],n=0;n<10;n++)a.push({id:n,icon:v[n],isFlipped:!1,resolved:!1}),a.push({id:n,icon:v[n],isFlipped:!1,resolved:!1});for(var i=a.length-1;i>0;i--)e=Math.floor(Math.random()*(i+1)),t=a[i],a[i]=a[e],a[e]=t;for(var r=a.length-1;r>0;r--)e=Math.floor(Math.random()*(r+1)),t=a[r],a[r]=a[e],a[e]=t;return a}}]),a}(l.a.Component));d.a.render(l.a.createElement(k,null),document.querySelector("#root"))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.e6e1d5bd.chunk.js.map