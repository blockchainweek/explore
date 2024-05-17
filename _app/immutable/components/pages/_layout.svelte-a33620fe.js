import{S as le,i as re,s as se,k as _,l as g,m as h,h as f,n as a,b as k,C as F,B as H,D as j,a as B,q as x,E as A,c as D,r as E,F as u,e as ge,g as Be,t as O,d as De,f as P,G as Ie,H as ze,I as ie,J as ae,K as ce,L as fe,w as ke,x as xe,y as Ee,z as $e,M as Ve}from"../../chunks/index-5edaeb20.js";import{p as Se}from"../../chunks/stores-f2171350.js";function Me(c){let e,t,n,o,l;return{c(){e=j("svg"),t=j("path"),n=B(),o=_("span"),l=x("Solar mode"),this.h()},l(r){e=A(r,"svg",{id:!0,class:!0,fill:!0,viewBox:!0,xmlns:!0});var i=h(e);t=A(i,"path",{d:!0,"fill-rule":!0,"clip-rule":!0}),h(t).forEach(f),i.forEach(f),n=D(r),o=g(r,"SPAN",{class:!0});var s=h(o);l=E(s,"Solar mode"),s.forEach(f),this.h()},h(){a(t,"d","M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"),a(t,"fill-rule","evenodd"),a(t,"clip-rule","evenodd"),a(e,"id","theme-toggle-light-icon"),a(e,"class","w-5 h-5"),a(e,"fill","currentColor"),a(e,"viewBox","0 0 20 20"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(o,"class","px-2")},m(r,i){k(r,e,i),u(e,t),k(r,n,i),k(r,o,i),u(o,l)},d(r){r&&f(e),r&&f(n),r&&f(o)}}}function Oe(c){let e,t,n,o,l;return{c(){e=j("svg"),t=j("path"),n=B(),o=_("span"),l=x("Lunar mode"),this.h()},l(r){e=A(r,"svg",{id:!0,class:!0,fill:!0,viewBox:!0,xmlns:!0});var i=h(e);t=A(i,"path",{d:!0}),h(t).forEach(f),i.forEach(f),n=D(r),o=g(r,"SPAN",{class:!0});var s=h(o);l=E(s,"Lunar mode"),s.forEach(f),this.h()},h(){a(t,"d","M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"),a(e,"id","theme-toggle-dark-icon"),a(e,"class","w-5 h-5"),a(e,"fill","currentColor"),a(e,"viewBox","0 0 20 20"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(o,"class","px-2")},m(r,i){k(r,e,i),u(e,t),k(r,n,i),k(r,o,i),u(o,l)},d(r){r&&f(e),r&&f(n),r&&f(o)}}}function Pe(c){let e,t,n;function o(i,s){return i[0]?Oe:Me}let l=o(c),r=l(c);return{c(){e=_("button"),r.c(),this.h()},l(i){e=g(i,"BUTTON",{class:!0});var s=h(e);r.l(s),s.forEach(f),this.h()},h(){a(e,"class","flex items-center text-white py-1 px-2 rounded-full hover:bg-bbw-yellow/20 dark:hover:bg-bbw-white/10")},m(i,s){k(i,e,s),r.m(e,null),t||(n=F(e,"click",c[1]),t=!0)},p(i,[s]){l!==(l=o(i))&&(r.d(1),r=l(i),r&&(r.c(),r.m(e,null)))},i:H,o:H,d(i){i&&f(e),r.d(),t=!1,n()}}}function je(c,e,t){let n=!1;function o(){t(0,n=!n),document.body.classList.toggle("dark",n)}return[n,o]}class Ae extends le{constructor(e){super(),re(this,e,je,Pe,se,{})}}var oe={},Ce={get exports(){return oe},set exports(c){oe=c}};(function(c,e){var t=function(n){this.opt=n||{},this.favicon=this.opt.favicon||"/favicon.ico",this.timeout=this.opt.timeout||0,this.logError=this.opt.logError||!1};t.prototype.ping=function(n,o){var l,r,i;typeof Promise<"u"&&(l=new Promise(function(p,y){r=p,i=y}));var s=this;s.wasSuccess=!1,s.img=new Image,s.img.onload=m,s.img.onerror=b;var v,d=new Date;function m(p){s.wasSuccess=!0,w.call(s,p)}function b(p){s.wasSuccess=!1,w.call(s,p)}s.timeout&&(v=setTimeout(function(){w.call(s,void 0)},s.timeout));function w(){v&&clearTimeout(v);var p=new Date-d;if(o){if(typeof o=="function")return this.wasSuccess?(l&&r(p),o(null,p)):(s.logError&&console.error("error loading resource"),l&&i(p),o("error",p));throw new Error("Callback is not a function.")}else{if(l)return this.wasSuccess?r(p):i(p);throw new Error("Promise is not supported by your browser. Use callback instead.")}}return s.img.src=n+s.favicon+"?"+ +new Date,l},c.exports&&(c.exports=t)})(Ce);var Te=oe,We=Te;const Le=c=>({}),we=c=>({}),Ne=c=>({}),be=c=>({});function Ue(c){let e;const t=c[4].offline,n=ie(t,c,c[3],we),o=n||Ye();return{c(){o&&o.c()},l(l){o&&o.l(l)},m(l,r){o&&o.m(l,r),e=!0},p(l,r){n&&n.p&&(!e||r&8)&&ae(n,t,l,l[3],e?fe(t,l[3],r,Le):ce(l[3]),we)},i(l){e||(P(o,l),e=!0)},o(l){O(o,l),e=!1},d(l){o&&o.d(l)}}}function Re(c){let e;const t=c[4].online,n=ie(t,c,c[3],be),o=n||Fe();return{c(){o&&o.c()},l(l){o&&o.l(l)},m(l,r){o&&o.m(l,r),e=!0},p(l,r){n&&n.p&&(!e||r&8)&&ae(n,t,l,l[3],e?fe(t,l[3],r,Ne):ce(l[3]),be)},i(l){e||(P(o,l),e=!0)},o(l){O(o,l),e=!1},d(l){o&&o.d(l)}}}function Ye(c){let e;return{c(){e=x("You're offline")},l(t){e=E(t,"You're offline")},m(t,n){k(t,e,n)},d(t){t&&f(e)}}}function Fe(c){let e;return{c(){e=x("You're online")},l(t){e=E(t,"You're online")},m(t,n){k(t,e,n)},d(t){t&&f(e)}}}function He(c){let e,t,n,o,l,r;const i=[Re,Ue],s=[];function v(d,m){return d[0]?0:1}return e=v(c),t=s[e]=i[e](c),{c(){t.c(),n=ge()},l(d){t.l(d),n=ge()},m(d,m){s[e].m(d,m),k(d,n,m),o=!0,l||(r=[F(window,"online",c[1]),F(window,"offline",c[1]),F(window,"load",c[1])],l=!0)},p(d,[m]){let b=e;e=v(d),e===b?s[e].p(d,m):(Be(),O(s[b],1,1,()=>{s[b]=null}),De(),t=s[e],t?t.p(d,m):(t=s[e]=i[e](d),t.c()),P(t,1),t.m(n.parentNode,n))},i(d){o||(P(t),o=!0)},o(d){O(t),o=!1},d(d){s[e].d(d),d&&f(n),l=!1,Ie(r)}}}function Je(c,e,t){let n,{$$slots:o={},$$scope:l}=e;const r=ze();let{pingUrl:i="https://google.com"}=e;const s=()=>{new We().ping(i,d=>{d||!navigator.onLine?t(0,n=!1):t(0,n=!0),r("detectedCondition",{online:n})})};return c.$$set=v=>{"pingUrl"in v&&t(2,i=v.pingUrl),"$$scope"in v&&t(3,l=v.$$scope)},t(0,n=navigator.onLine||!1),[n,s,i,l,o]}class qe extends le{constructor(e){super(),re(this,e,Je,He,se,{pingUrl:2})}}const Ge=qe;function Ke(c){let e,t;return e=new Ge({props:{pingUrl:"https://x.gwei.cz/",$$slots:{offline:[Xe],online:[Qe]},$$scope:{ctx:c}}}),e.$on("detectedCondition",c[1]),{c(){ke(e.$$.fragment)},l(n){xe(e.$$.fragment,n)},m(n,o){Ee(e,n,o),t=!0},p(n,o){const l={};o&16&&(l.$$scope={dirty:o,ctx:n}),e.$set(l)},i(n){t||(P(e.$$.fragment,n),t=!0)},o(n){O(e.$$.fragment,n),t=!1},d(n){$e(e,n)}}}function Qe(c){let e,t,n,o,l,r,i;return{c(){e=_("span"),t=_("div"),n=j("svg"),o=j("circle"),l=B(),r=_("div"),i=x("Online"),this.h()},l(s){e=g(s,"SPAN",{slot:!0,class:!0});var v=h(e);t=g(v,"DIV",{});var d=h(t);n=A(d,"svg",{class:!0,viewBox:!0,xmlns:!0});var m=h(n);o=A(m,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),h(o).forEach(f),m.forEach(f),d.forEach(f),l=D(v),r=g(v,"DIV",{});var b=h(r);i=E(b,"Online"),b.forEach(f),v.forEach(f),this.h()},h(){a(o,"cx","50"),a(o,"cy","50"),a(o,"r","50"),a(o,"fill","rgb(255 222 89)"),a(n,"class","w-2"),a(n,"viewBox","0 0 100 100"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(e,"slot","online"),a(e,"class","flex gap-2 items-center text-bbw-yellow")},m(s,v){k(s,e,v),u(e,t),u(t,n),u(n,o),u(e,l),u(e,r),u(r,i)},p:H,d(s){s&&f(e)}}}function Xe(c){let e,t,n,o,l,r,i;return{c(){e=_("span"),t=_("div"),n=j("svg"),o=j("circle"),l=B(),r=_("div"),i=x("Offline"),this.h()},l(s){e=g(s,"SPAN",{slot:!0,class:!0});var v=h(e);t=g(v,"DIV",{});var d=h(t);n=A(d,"svg",{class:!0,viewBox:!0,xmlns:!0});var m=h(n);o=A(m,"circle",{cx:!0,cy:!0,r:!0,fill:!0}),h(o).forEach(f),m.forEach(f),d.forEach(f),l=D(v),r=g(v,"DIV",{});var b=h(r);i=E(b,"Offline"),b.forEach(f),v.forEach(f),this.h()},h(){a(o,"cx","50"),a(o,"cy","50"),a(o,"r","50"),a(o,"fill","rgb(252 165 165)"),a(n,"class","w-2"),a(n,"viewBox","0 0 100 100"),a(n,"xmlns","http://www.w3.org/2000/svg"),a(e,"slot","offline"),a(e,"class","flex gap-2 items-center text-red-300")},m(s,v){k(s,e,v),u(e,t),u(t,n),u(n,o),u(e,l),u(e,r),u(r,i)},p:H,d(s){s&&f(e)}}}function ye(c){let e,t,n,o,l,r,i,s,v,d,m,b,w,p,y,V,C,T,J,q,G,S,W,K,I,Q,X,L,Z,z,ee;return{c(){e=_("div"),t=_("div"),n=_("h1"),o=_("a"),l=x("Berlin Blockchain Week 2024"),r=B(),i=_("div"),s=x("May 18-27, 2024"),v=B(),d=_("div"),m=_("div"),b=_("div"),w=_("p"),p=x(`Berlin Blockchain Week is a decentralized community-organized initiative. There is no
						single owner. It is an agnostic movement based on the premise that self-organization is
						the backbone of the ecosystem. We invite projects, individuals and anyone interested in
						fruitful and educational discussions to join us in Berlin in May.`),y=_("br"),V=_("br"),C=x(`
						We are committed to reduce the noise from the market and focus on education, in order to
						push mass adoption by providing first-hand information about the industry.`),T=_("br"),J=_("br"),q=x(`
						Our concept is simple: keep it educational, try to be as cost-friendly for the community
						as you can (bearing in mind, we all need to pay bills - so not all events are free!) and
						to create a welcoming and inclusive environment, so interested parties at anyknowledge level
						feel comfortable to join.`),G=B(),S=_("div"),W=_("div"),K=x(`🐦
							`),I=_("a"),Q=x("Follow us on Twitter"),X=B(),L=_("div"),Z=x(`💬
							`),z=_("a"),ee=x("Join our Matrix space"),this.h()},l($){e=g($,"DIV",{class:!0});var N=h(e);t=g(N,"DIV",{class:!0});var U=h(t);n=g(U,"H1",{class:!0});var ue=h(n);o=g(ue,"A",{href:!0});var de=h(o);l=E(de,"Berlin Blockchain Week 2024"),de.forEach(f),ue.forEach(f),r=D(U),i=g(U,"DIV",{class:!0});var pe=h(i);s=E(pe,"May 18-27, 2024"),pe.forEach(f),U.forEach(f),N.forEach(f),v=D($),d=g($,"DIV",{class:!0});var ve=h(d);m=g(ve,"DIV",{class:!0});var me=h(m);b=g(me,"DIV",{class:!0});var R=h(b);w=g(R,"P",{});var M=h(w);p=E(M,`Berlin Blockchain Week is a decentralized community-organized initiative. There is no
						single owner. It is an agnostic movement based on the premise that self-organization is
						the backbone of the ecosystem. We invite projects, individuals and anyone interested in
						fruitful and educational discussions to join us in Berlin in May.`),y=g(M,"BR",{}),V=g(M,"BR",{}),C=E(M,`
						We are committed to reduce the noise from the market and focus on education, in order to
						push mass adoption by providing first-hand information about the industry.`),T=g(M,"BR",{}),J=g(M,"BR",{}),q=E(M,`
						Our concept is simple: keep it educational, try to be as cost-friendly for the community
						as you can (bearing in mind, we all need to pay bills - so not all events are free!) and
						to create a welcoming and inclusive environment, so interested parties at anyknowledge level
						feel comfortable to join.`),M.forEach(f),G=D(R),S=g(R,"DIV",{class:!0});var Y=h(S);W=g(Y,"DIV",{});var te=h(W);K=E(te,`🐦
							`),I=g(te,"A",{href:!0,class:!0,target:!0,rel:!0});var he=h(I);Q=E(he,"Follow us on Twitter"),he.forEach(f),te.forEach(f),X=D(Y),L=g(Y,"DIV",{});var ne=h(L);Z=E(ne,`💬
							`),z=g(ne,"A",{href:!0,class:!0,target:!0,rel:!0});var _e=h(z);ee=E(_e,"Join our Matrix space"),_e.forEach(f),ne.forEach(f),Y.forEach(f),R.forEach(f),me.forEach(f),ve.forEach(f),this.h()},h(){a(o,"href","/"),a(n,"class","text-4xl font-bold text-bbw-white"),a(i,"class","text-2xl text-bbw-yellow"),a(t,"class","max-w-7xl mx-auto pt-10 pb-6"),a(e,"class","px-6 xl:px-0"),a(I,"href","https://twitter.com/BerBlockWeek"),a(I,"class","underline hover:no-underline"),a(I,"target","_blank"),a(I,"rel","noreferrer"),a(z,"href","https://matrix.to/#/%23blockchainweek:dod.ngo"),a(z,"class","underline hover:no-underline"),a(z,"target","_blank"),a(z,"rel","noreferrer"),a(S,"class","pt-4 text-xl flex flex-wrap gap-4"),a(b,"class","p-5 text-lg"),a(m,"class","max-w-7xl mx-auto bg-bbw-navy/10 text-bbw-navy dark:text-gray-300 rounded-lg"),a(d,"class","bg-white dark:bg-bbw-dark px-6 xl:px-0 pt-6 pb-4")},m($,N){k($,e,N),u(e,t),u(t,n),u(n,o),u(o,l),u(t,r),u(t,i),u(i,s),k($,v,N),k($,d,N),u(d,m),u(m,b),u(b,w),u(w,p),u(w,y),u(w,V),u(w,C),u(w,T),u(w,J),u(w,q),u(b,G),u(b,S),u(S,W),u(W,K),u(W,I),u(I,Q),u(S,X),u(S,L),u(L,Z),u(L,z),u(z,ee)},d($){$&&f(e),$&&f(v),$&&f(d)}}}function Ze(c){let e,t,n,o,l,r,i,s,v,d=typeof window<"u"&&Ke(c);l=new Ae({});let m=c[0]&&ye();const b=c[3].default,w=ie(b,c,c[4],null);return{c(){e=_("div"),t=_("div"),n=_("div"),d&&d.c(),o=B(),ke(l.$$.fragment),r=B(),m&&m.c(),i=B(),s=_("div"),w&&w.c(),this.h()},l(p){e=g(p,"DIV",{class:!0});var y=h(e);t=g(y,"DIV",{class:!0});var V=h(t);n=g(V,"DIV",{class:!0});var C=h(n);d&&d.l(C),C.forEach(f),o=D(V),xe(l.$$.fragment,V),V.forEach(f),r=D(y),m&&m.l(y),y.forEach(f),i=D(p),s=g(p,"DIV",{class:!0});var T=h(s);w&&w.l(T),T.forEach(f),this.h()},h(){a(n,"class","my-auto"),a(t,"class","flex gap-4 max-w-7xl items-center justify-end p-2 m-auto h-[50px] -mb-[30px] text-white"),a(e,"class","w-full h-full bg-bbw-navy"),a(s,"class","page-body")},m(p,y){k(p,e,y),u(e,t),u(t,n),d&&d.m(n,null),u(t,o),Ee(l,t,null),u(e,r),m&&m.m(e,null),k(p,i,y),k(p,s,y),w&&w.m(s,null),v=!0},p(p,[y]){typeof window<"u"&&d.p(p,y),p[0]?m||(m=ye(),m.c(),m.m(e,null)):m&&(m.d(1),m=null),w&&w.p&&(!v||y&16)&&ae(w,b,p,p[4],v?fe(b,p[4],y,null):ce(p[4]),null)},i(p){v||(P(d),P(l.$$.fragment,p),P(w,p),v=!0)},o(p){O(d),O(l.$$.fragment,p),O(w,p),v=!1},d(p){p&&f(e),d&&d.d(),$e(l),m&&m.d(),p&&f(i),p&&f(s),w&&w.d(p)}}}function et(c,e,t){let n,o;Ve(c,Se,s=>t(2,o=s));let{$$slots:l={},$$scope:r}=e;const i=s=>{console.log("event details: ",s)};return c.$$set=s=>{"$$scope"in s&&t(4,r=s.$$scope)},c.$$.update=()=>{c.$$.dirty&4&&t(0,n=!o.params.type&&!o.params.date&&!["/[entry]/schedule","/[entry]/for-speakers","/[entry]/for-sponsors"].includes(o.route.id))},[n,i,o,l,r]}class ot extends le{constructor(e){super(),re(this,e,et,Ze,se,{})}}export{ot as default};