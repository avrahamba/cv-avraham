(function(t){function e(e){for(var a,s,i=e[0],c=e[1],l=e[2],u=0,m=[];u<i.length;u++)s=i[u],Object.prototype.hasOwnProperty.call(o,s)&&o[s]&&m.push(o[s][0]),o[s]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);p&&p(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,s=1;s<n.length;s++){var c=n[s];0!==o[c]&&(a=!1)}a&&(r.splice(e--,1),t=i(i.s=n[0]))}return t}var a={},o={app:0},r=[];function s(t){return i.p+"js/"+({about:"about"}[t]||t)+"."+{about:"d6557832"}[t]+".js"}function i(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(t){var e=[],n=o[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,a){n=o[t]=[e,a]}));e.push(n[2]=a);var r,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=s(t);var l=new Error;r=function(e){c.onerror=c.onload=null,clearTimeout(u);var n=o[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+a+": "+r+")",l.name="ChunkLoadError",l.type=a,l.request=r,n[1](l)}o[t]=void 0}};var u=setTimeout((function(){r({type:"timeout",target:c})}),12e4);c.onerror=c.onload=r,document.head.appendChild(c)}return Promise.all(e)},i.m=t,i.c=a,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)i.d(n,a,function(e){return t[e]}.bind(null,a));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i.oe=function(t){throw console.error(t),t};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"090e":function(t,e,n){t.exports=n.p+"img/twitter.d77e8f32.svg"},"23d3":function(t,e,n){t.exports=n.p+"img/github.bf271dbd.svg"},"2b9b":function(t,e,n){t.exports=n.p+"img/appsus.d3b539c0.png"},"30bb":function(t,e,n){t.exports=n.p+"img/gmail.fe60a8e1.svg"},"38d6":function(t,e,n){t.exports=n.p+"img/jello.27fb75f0.png"},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},r=[],s=n("2877"),i={},c=Object(s["a"])(i,o,r,!1,null,null,null),l=c.exports,u=n("9483");Object(u["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});n("d3b7");var p=n("8c4f"),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home"},[n("nav-bar",{class:t.scroll}),n("home-cmp",{staticClass:"container",attrs:{id:"home"}}),n("div",{staticClass:"about container",attrs:{id:"about"}},[n("what-offer"),n("about-me")],1),n("projects-cmp",{staticClass:"container",attrs:{id:"projects"}}),n("contact-cmp",{staticClass:"container",attrs:{id:"contact"}}),n("footer-cmp")],1)},f=[],d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},g=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"about-me"},[n("h3",[t._v(" About Me ")]),n("p",[t._v(" A programmer from Israel. Passionate about learning and building new things, "),n("br"),t._v(" I specialize in creating beautiful pixel-perfect single page applications and getting things done. ")]),n("p",[t._v(" Graduate of the Coding Academy - an intensive (640 hours) and selective coding bootcamp that qualifies Web developers. ")])])}],v={},h=v,b=Object(s["a"])(h,d,g,!1,null,null,null),_=b.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"contact-cmp"},[n("h3",[t._v(" Contact Me ")]),n("form",{ref:"contactForm",staticClass:"contact-form",on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"name",attrs:{type:"text",placeholder:"Name",name:"name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"email",attrs:{type:"email",placeholder:"Email",name:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.subject,expression:"subject"}],staticClass:"subject",attrs:{type:"text",placeholder:"Subject",name:"subject"},domProps:{value:t.subject},on:{input:function(e){e.target.composing||(t.subject=e.target.value)}}}),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.message,expression:"message"}],attrs:{cols:"30",rows:"10",placeholder:"Message",name:"message"},domProps:{value:t.message},on:{input:function(e){e.target.composing||(t.message=e.target.value)}}}),n("button",[t._v("Send")])])])},j=[],C=(n("bc3a"),n("3d20")),y=n.n(C),x={data:function(){return{name:"",email:"",subject:"",message:""}},methods:{onSubmit:function(){var t=new FormData(this.$refs.contactForm);this.ajax(t,this.success,this.error)},success:function(){y.a.fire("Thank You!","","success")},error:function(){y.a.fire({icon:"error",title:"Oops...",text:"Something went wrong!"})},ajax:function(t,e,n){var a=new XMLHttpRequest;a.open("POST","https://formspree.io/moqkwrde"),a.setRequestHeader("Accept","application/json"),a.onreadystatechange=function(){a.readyState===XMLHttpRequest.DONE&&(200===a.status?e(a.response,a.responseType):n(a.status,a.response,a.responseType))},a.send(t)}}},S=x,E=Object(s["a"])(S,w,j,!1,null,null,null),k=E.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"home-cmp"},[t._m(0),n("img",{attrs:{src:t.img,alt:""}})])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"txt"},[n("h2",[t._v(" Hey, I am ")]),n("h1",[t._v(" Avaraham Ben-Arosh ")]),n("h2",[t._v(" Fullstack / Front End Developer ")]),n("p",[t._v(" Passionate about solving problems and overcoming challenges, with experience in building single page applications using the latest web technologies. ")])])}],L=n("d277"),A=n.n(L),$={data:function(){return{img:A.a}}},D=$,M=Object(s["a"])(D,O,P,!1,null,null,null),T=M.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"projects-cmp"},t._l(t.projectsData,(function(t){return n("project-cmp",{key:t.title,attrs:{projectData:t}})})),1)},N=[],q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"project-cmp"},[n("a",{attrs:{href:t.projectData.link}},[n("img",{attrs:{src:t.projectData.img}}),n("div",{staticClass:"container-img"},[n("h3",[t._v(t._s(t.projectData.title))]),n("p",[t._v(t._s(t.projectData.tagLine))]),n("ul",{staticClass:"tecnologys"},t._l(t.projectData.tecnologyList,(function(e){return n("li",{key:e,staticClass:"tecnology"},[t._v(" "+t._s(e)+" ")])})),0)])])])},H=[],I={props:{projectData:Object}},J=I,R=Object(s["a"])(J,q,H,!1,null,null,null),B=R.exports,V=n("9b5f"),W=n.n(V),z=n("38d6"),X=n.n(z),Y=n("2b9b"),G=n.n(Y),U=n("d645"),K=n.n(U),Q=n("ef9a"),Z=n.n(Q),tt={data:function(){return{projectsData:[{title:"Ta-Shma",img:W.a,link:"tashma",tecnologyList:["C#","WPF","sqlite","VSTO","PHP","SQL","OOP"],tagLine:"A modular database, which I designed and implemented myself for about 3 years"},{title:"Jello",img:X.a,link:"https://jello-app.herokuapp.com",tecnologyList:["VUE","SCSS","NODE.JS","mongoose"],tagLine:"Realization of Trello"},{title:"Appsus",img:G.a,link:"https://avrahamba.github.io/appsus/",tecnologyList:["VUE","SCSS","API"],tagLine:"Realization of Google Keep and Front-End Email"},{title:"Meme-generator",img:K.a,link:"https://avrahamba.github.io/Meme-generator/",tecnologyList:["HTML","CSS","Vanilla JavaScript","Canvas"]},{title:"Misterbitcoin",img:Z.a,link:"https://avrahamba.github.io/mister-bitcoin-angular/",tecnologyList:["React/Angular","SCSS","PWA"],tagLine:"Front-End Bitcoin wallet"}]}},components:{projectCmp:B}},et=tt,nt=Object(s["a"])(et,F,N,!1,null,null,null),at=nt.exports,ot=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},rt=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("section",{staticClass:"what-offer"},[a("h3",[t._v("What I offer")]),a("div",{staticClass:"offer"},[a("img",{attrs:{src:n("6d50")}}),a("div",{staticClass:"txt"},[t._v(" Efficient, fast, clean and effective code ")])]),a("div",{staticClass:"offer"},[a("img",{attrs:{src:n("7420")}}),a("div",{staticClass:"txt"},[t._v(" Simple, clean, modern and intuitive design ")])]),a("div",{staticClass:"offer"},[a("img",{attrs:{src:n("92bd")}}),a("div",{staticClass:"txt"},[t._v(" Specializes in C# WPF and JS Vue frameworks ")])]),a("div",{staticClass:"offer"},[a("img",{attrs:{src:n("ea4a")}}),a("div",{staticClass:"txt"},[t._v(" Facing challenges ")])])])}],st={},it=st,ct=Object(s["a"])(it,ot,rt,!1,null,null,null),lt=ct.exports,ut=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},pt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"nav-bar"},[n("h2",{staticClass:"logo"},[t._v("Avraham")]),n("ul",{staticClass:"link-ul"},[n("a",{attrs:{href:"#home"}},[n("li",{staticClass:"link-li"},[t._v(" home ")])]),n("a",{attrs:{href:"#about"}},[n("li",{staticClass:"link-li"},[t._v(" about ")])]),n("a",{attrs:{href:"#projects"}},[n("li",{staticClass:"link-li"},[t._v(" projects ")])]),n("a",{attrs:{href:"#contact"}},[n("li",{staticClass:"link-li"},[t._v(" contact ")])])])])}],mt={},ft=mt,dt=Object(s["a"])(ft,ut,pt,!1,null,null,null),gt=dt.exports,vt=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},ht=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",[a("div",{staticClass:"icons"},[a("a",{attrs:{href:"https://github.com/avrahamba/"}},[a("img",{attrs:{src:n("23d3"),alt:""}})]),a("a",{attrs:{href:"https://twitter.com/avrahamba"}},[a("img",{attrs:{src:n("090e"),alt:""}})]),a("a",{attrs:{href:"https://www.linkedin.com/in/avraham-ben-arosh-547942b2/"}},[a("img",{attrs:{src:n("6add"),alt:""}})]),a("a",{attrs:{href:"mailto:b.a.avraham@gmail.com"}},[a("img",{attrs:{src:n("30bb"),alt:""}})])]),a("div",{staticClass:"txt"},[t._v(" website desgined by me. © "),a("br"),t._v(" Copyright 2020 by Avraham Ben-Arosh. ")])])}],bt={},_t=bt,wt=Object(s["a"])(_t,vt,ht,!1,null,null,null),jt=wt.exports,Ct={name:"Home",data:function(){return{scrollPosition:!1}},methods:{handleScroll:function(){this.scrollPosition=!!window.scrollY}},created:function(){window.addEventListener("scroll",this.handleScroll),window.addEventListener("hashchange",(function(){window.scrollTo(window.scrollX,window.scrollY-105)}))},destroyed:function(){window.removeEventListener("scroll",this.handleScroll)},computed:{scroll:function(){return{scroll:this.scrollPosition}}},components:{homeCmp:T,projectsCmp:at,aboutMe:_,contactCmp:k,whatOffer:lt,navBar:gt,footerCmp:jt}},yt=Ct,xt=Object(s["a"])(yt,m,f,!1,null,null,null),St=xt.exports;a["a"].use(p["a"]);var Et=[{path:"/",name:"Home",component:St},{path:"/tashma",name:"tashma",component:function(){return n.e("about").then(n.bind(null,"1018"))}}],kt=new p["a"]({mode:"history",base:"/",routes:Et}),Ot=kt,Pt=n("2f62");a["a"].use(Pt["a"]);var Lt=new Pt["a"].Store({state:{},mutations:{},actions:{},modules:{}});n("eb0e");a["a"].config.productionTip=!1,new a["a"]({router:Ot,store:Lt,render:function(t){return t(l)}}).$mount("#app")},"6add":function(t,e,n){t.exports=n.p+"img/linkedin.97dd8b87.svg"},"6d50":function(t,e,n){t.exports=n.p+"img/code.ce1dd31d.svg"},7420:function(t,e,n){t.exports=n.p+"img/write.ab47d415.svg"},"92bd":function(t,e,n){t.exports=n.p+"img/code2.9d0f9901.svg"},"9b5f":function(t,e,n){t.exports=n.p+"img/tashma1.1cee5787.png"},d277:function(t,e,n){t.exports=n.p+"img/avraham.eb456ac4.jpg"},d645:function(t,e,n){t.exports=n.p+"img/memegen.a62599d5.png"},ea4a:function(t,e,n){t.exports=n.p+"img/tasks.1d56e5c1.svg"},eb0e:function(t,e,n){},ef9a:function(t,e,n){t.exports=n.p+"img/misterbitcoin.e2ac1bdb.png"}});
//# sourceMappingURL=app.a0b3c022.js.map