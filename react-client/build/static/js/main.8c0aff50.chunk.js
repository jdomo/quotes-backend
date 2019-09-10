(window["webpackJsonpreact-client"]=window["webpackJsonpreact-client"]||[]).push([[0],{171:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(61),c=a.n(o),l=(a(71),a(13)),s=a(14),i=a(17),u=a(15),m=a(18),p=(a(72),a(73),a(11)),d=a(3),b=function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",null,r.a.createElement("div",{className:"nav-wrapper"},r.a.createElement(d.b,{to:"/"},r.a.createElement("i",{className:"left far fa-eye"})),r.a.createElement(d.b,{to:"/",className:"brand-logo center title main-title"},"Watch Your Tone"),r.a.createElement("ul",{id:"nav-mobile",className:"right hide-on-med-and-down"},r.a.createElement("li",null,r.a.createElement(d.b,{to:"/"},"Home")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/register"},"Register")),r.a.createElement("li",null,r.a.createElement(d.b,{to:"/login"},"Login"))))))},f=a(64),h=function(e){var t={labels:e.quoteData.map(function(e){return e.name}),datasets:[{label:"match %",backgroundColor:"rgba(255,255,255,0.2)",borderColor:"rgba(255,99,132,1)",color:"rgba(255,255,255)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:e.quoteData.map(function(e){return e.score})}]};return console.log(e.quoteData,"<--props in Chart.js"),r.a.createElement(f.a,{data:t,width:50,height:25,options:{maintainAspectRatio:!0,legend:{labels:{fontColor:"rgba(255,255,255)"}},scales:{xAxes:[{barThickness:60,ticks:{fontColor:"rgba(255,255,255)"}}],yAxes:[{ticks:{fontColor:"rgba(255,255,255)",beginAtZero:!0,suggestedMax:1}}]}}})},g=function(e){var t=e.location.state.quoteAnalysis.map(function(e,t){return r.a.createElement("li",{key:t,className:"results-item"},"".concat(e.name),r.a.createElement("br",null),r.a.createElement("span",{id:"results-number"},"".concat(Math.floor(100*e.score),"% ")),"match",r.a.createElement("br",null),r.a.createElement("br",null))});return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("h3",{id:"results-quote"},'"'.concat(e.location.state.quote,'"')),r.a.createElement("div",{id:"results-div"},r.a.createElement("p",{id:"results-header"},"Results"),r.a.createElement("ul",{id:"results-list"},t.length?t:"No tone detected. Try a longer quote - no jibberish.")),t.length&&r.a.createElement("div",{id:"chart-div"},r.a.createElement(h,{quoteData:e.location.state.quoteAnalysis})),r.a.createElement(d.b,{to:"/"},r.a.createElement("input",{type:"submit",className:"submit-btn btn",value:"back"}))))},v=a(9),E=a.n(v),y=a(16),O=a(10),w=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={submitted:!1,quote:"",quoteAnalysis:[]},a.handleOnChange=function(e){a.setState(Object(O.a)({},e.target.name,e.target.value))},a.handleOnSubmit=function(){var e=Object(y.a)(E.a.mark(function e(t){var n,r,o;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.state.quote.includes('"')||a.state.quote.includes("'")){for(n=a.state.quote;n.includes('"')||n.includes("'");)n=(n=n.replace('"',"")).replace("'","");a.setState({quote:n})}return e.next=4,fetch("/api/quotes/analyze",{method:"POST",body:JSON.stringify({quote:a.state.quote}),headers:{"Content-Type":"application/json"}});case 4:return r=e.sent,e.next=7,r.json();case 7:o=e.sent,a.setState({submitted:!0,quoteAnalysis:o.data});case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,this.state.submitted&&r.a.createElement(p.a,{to:{pathname:"/result",state:{quote:this.state.quote,quoteAnalysis:this.state.quoteAnalysis}}}),r.a.createElement("form",{onSubmit:this.handleOnSubmit},r.a.createElement("i",{className:"fas fa-arrow-down"}),r.a.createElement("input",{type:"text",id:"input-quote",autoComplete:"off",value:this.state.quote,name:"quote",onChange:this.handleOnChange}),r.a.createElement("input",{type:"submit",className:"submit-btn btn",value:"analyze"})))}}]),t}(n.Component),j=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(i.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("p",{id:"instructions"},"Input your quote here!"),r.a.createElement(w,null)))}}]),t}(n.Component),q=a(30);function k(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function C(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?k(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):k(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var x=function(){var e=Object(n.useState)({email:"",password:"",passwordCheck:"",logged:!1}),t=Object(q.a)(e,2),a=t[0],o=t[1],c=function(e){o(C({},a,Object(O.a)({},e.target.name,e.target.value)))},l=function(){var e=Object(y.a)(E.a.mark(function e(t){var n,r,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),a.password===a.passwordCheck){e.next=5;break}console.log("passwords don't match"),e.next=20;break;case 5:return n={email:a.email,password:a.password},e.prev=6,e.next=9,fetch("/api/users",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 9:return r=e.sent,e.next=12,r.json();case 12:c=e.sent,console.log(c,"<--- parsed user response containing JWT"),o(C({},a,{logged:!0})),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(6),console.log("Register User Error: ",e.t0);case 20:case"end":return e.stop()}},e,null,[[6,17]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,a.logged&&r.a.createElement(p.a,{to:"/"}),r.a.createElement("h4",null,"Register"),r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form center-align",id:"register-form",onSubmit:l},r.a.createElement("input",{type:"email",placeholder:"email",name:"email",value:a.email,onChange:c,required:!0}),r.a.createElement("input",{type:"password",placeholder:"password",name:"password",value:a.password,onChange:c,required:!0}),r.a.createElement("input",{type:"password",placeholder:"re-type password",name:"passwordCheck",value:a.passwordCheck,onChange:c,required:!0}),r.a.createElement("input",{type:"submit",className:"submit-btn btn",value:"Create Account"}))))};function N(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),a.push.apply(a,n)}return a}function S(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?N(a,!0).forEach(function(t){Object(O.a)(e,t,a[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):N(a).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))})}return e}var P=function(){var e=Object(n.useState)({email:"",password:"",logged:!1}),t=Object(q.a)(e,2),a=t[0],o=t[1],c=function(e){o(S({},a,Object(O.a)({},e.target.name,e.target.value)))},l=function(){var e=Object(y.a)(E.a.mark(function e(t){var n,r,c;return E.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n={email:a.email,password:a.password},e.prev=2,e.next=5,fetch("/api/users/login",{method:"POST",body:JSON.stringify(n),headers:{"Content-Type":"application/json"}});case 5:return r=e.sent,e.next=8,r.json();case 8:c=e.sent,console.log(c,"<--- parsed login response containing JWT"),o(S({},a,{logged:!0})),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("Register User Error: ",e.t0);case 16:case"end":return e.stop()}},e,null,[[2,13]])}));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(n.Fragment,null,a.logged&&r.a.createElement(p.a,{to:"/"}),r.a.createElement("h4",null,"Log In"),r.a.createElement("div",{className:"container"},r.a.createElement("form",{className:"form center-align",id:"register-form",onSubmit:l},r.a.createElement("input",{type:"email",placeholder:"email",name:"email",value:a.email,onChange:c,required:!0}),r.a.createElement("input",{type:"password",placeholder:"password",name:"password",value:a.password,onChange:c,required:!0}),r.a.createElement("input",{type:"submit",className:"submit-btn btn",value:"Log In"}))))},D=function(){return r.a.createElement("div",null,"Where do you think you're going?")},A=function(e){function t(){return Object(l.a)(this,t),Object(i.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("main",null,r.a.createElement(b,null),r.a.createElement(p.d,null,r.a.createElement(p.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(j,e)}}),r.a.createElement(p.b,{exact:!0,path:"/result",render:function(e){return r.a.createElement(g,e)}}),r.a.createElement(p.b,{exact:!0,path:"/login",component:P}),r.a.createElement(p.b,{exact:!0,path:"/register",component:x}),r.a.createElement(p.b,{component:D})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(d.a,null,r.a.createElement(A,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},66:function(e,t,a){e.exports=a(171)},71:function(e,t,a){},72:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},73:function(e,t,a){}},[[66,1,2]]]);
//# sourceMappingURL=main.8c0aff50.chunk.js.map