(this.webpackJsonpcrysistear=this.webpackJsonpcrysistear||[]).push([[0],{174:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(49),i=n.n(r),c=(n(58),n(13)),l=n(23),s=n.n(l),d=n(50),u=n(51),h=n(52),v=n.n(h),f=function(){var e=Object(d.a)(s.a.mark((function e(t,n){var o,a,r,i,c;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v.a.get("https://raw.githubusercontent.com/tokyo-metropolitan-gov/covid19/master/data/daily_positive_detail.json");case 3:o=e.sent,a=o.data,console.log(a),r=a.data,i=r.map((function(e){return e.diagnosed_date})),c=r.map((function(e){return e.count})),console.log(i,c),t({labels:i,datasets:[{label:"COVID-19 in TOKYO",backgroundColor:"rgba(255,99,132,0.2)",borderColor:"rgba(255,99,132,1)",borderWidth:1,hoverBackgroundColor:"rgba(255,99,132,0.4)",hoverBorderColor:"rgba(255,99,132,1)",data:c}]}),n({date:a.date,count:c.slice(-1)[0]}),e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),console.error(e.t0);case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t,n){return e.apply(this,arguments)}}();var g=function(){var e=Object(o.useState)({}),t=Object(c.a)(e,2),n=t[0],r=t[1],i=Object(o.useState)({date:"",count:null}),l=Object(c.a)(i,2),s=l[0],d=l[1],h=Object(o.useState)(0),v=Object(c.a)(h,2),g=v[0],p=v[1];return Object(o.useEffect)((function(){f(r,d)}),[]),a.a.createElement(a.a.Fragment,null,a.a.createElement("h2",{style:{position:"fixed",width:"100vw",textAlign:"center",color:"black",fontSize:"5vh"}},s.date.split(" ")[0].replace("/","\u5e74 ").replace("/","\u6708")+"\u65e5"),a.a.createElement("h1",{style:{position:"fixed",width:"100vw",textAlign:"center",color:"crimson",fontSize:"10vh",top:"8vh"}},a.a.createElement("a",{style:{fontSize:"5vh",color:"black"}},"\u611f\u67d3\u8005 "),s.count,a.a.createElement("a",{style:{fontSize:"5vh",color:"black"}}," \u4eba")),a.a.createElement("div",{style:{width:"".concat(100+g/100*700,"vw"),height:"50vh",overflowX:"scroll",overflowY:"hidden",paddingTop:"30vh"}},a.a.createElement(u.Bar,{data:n,width:window.innerWidth+(1+g/100*7),redraw:!0,height:.5*window.innerHeight,options:{responsive:!0,maintainAspectRatio:!1}})),a.a.createElement("div",{style:{position:"fixed",width:"100vw",textAlign:"center",marginTop:"5vh"}},a.a.createElement("input",{type:"range",id:"dataRange",name:"dataRange",min:"0",max:"100",value:g,step:"1",onChange:function(e){return p(parseInt(e.target.value))}}),a.a.createElement("label",{htmlFor:"dataRange"},"Range")))},p=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function w(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(g,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/crysistear",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/crysistear","/service-worker.js");p?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):w(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):w(t,e)}))}}()},53:function(e,t,n){e.exports=n(174)},58:function(e,t,n){}},[[53,1,2]]]);
//# sourceMappingURL=main.af2ab8f7.chunk.js.map