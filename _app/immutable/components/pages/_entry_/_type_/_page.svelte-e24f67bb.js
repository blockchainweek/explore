import{S as sl,i as rl,s as al,a as g,w as ie,N as nl,h as i,c as L,x as se,b as h,y as re,f as P,t as O,d as _e,z as ae,M as ol,o as ul,k as H,q as F,l as A,m as N,r as j,n as D,F as y,a1 as Be,C as _l,u as X,g as me,O as we,e as Ee,_ as ml,$ as hl,B as fl}from"../../../../chunks/index-5edaeb20.js";import{p as dl}from"../../../../chunks/stores-f2171350.js";import{F as cl,d as ke,a as Ie,I as pe}from"../../../../chunks/Footer-2b8c9a85.js";import{g as pl,D as vl}from"../../../../chunks/Disclaimer-d43c0e13.js";import{p as bl,f as Ve,g as ce,S as il}from"../../../../chunks/utils-468e16e8.js";import{H as $l,E as kl}from"../../../../chunks/EventTypeBadge-d2aaae66.js";function ge(r,l,f){const e=r.slice();return e[14]=l[f],e}function Le(r,l,f){const e=r.slice();return e[17]=l[f],e}function Se(r,l,f){const e=r.slice();return e[17]=l[f],e}function Fe(r,l,f){const e=r.slice();return e[4]=l[f],e}function je(r){let l,f,e,t,a=r[7].title+"",s,c,_,d,u,n,m,E,o,v,T,k,$,I,B,b,w,S,R,U,te,le,ee,Y=["events","speakers"].includes(r[4]),ue,he,x,M=r[6]!==r[5]&&Ce(r),p=r[1]&&Ue(r),V=r[4]==="events"&&Pe(),q=r[4]==="speakers"&&ze(),z=r[4]==="media-partners"&&Me(),G=r[4]==="benefits"&&Oe(),Z=r[4]==="places"&&Re(),ne=r[2],W=[];for(let C=0;C<ne.length;C+=1)W[C]=ll(ge(r,ne,C));const ve=C=>O(W[C],1,1,()=>{W[C]=null});let J=Y&&tl(r);return{c(){l=H("div"),f=H("div"),e=H("div"),t=H("h2"),s=F(a),c=F(" ("),_=F(r[6]),M&&M.c(),d=F(")"),u=g(),n=H("div"),m=H("div"),E=H("label"),o=F("Search"),p&&p.c(),v=g(),T=H("input"),k=g(),$=H("div"),I=H("table"),B=H("thead"),b=H("tr"),V&&V.c(),w=g(),q&&q.c(),S=g(),z&&z.c(),R=g(),G&&G.c(),U=g(),Z&&Z.c(),te=g(),le=H("tbody");for(let C=0;C<W.length;C+=1)W[C].c();ee=g(),J&&J.c(),this.h()},l(C){l=A(C,"DIV",{class:!0});var K=N(l);f=A(K,"DIV",{class:!0});var Q=N(f);e=A(Q,"DIV",{class:!0});var fe=N(e);t=A(fe,"H2",{class:!0});var de=N(t);s=j(de,a),c=j(de," ("),_=j(de,r[6]),M&&M.l(de),d=j(de,")"),de.forEach(i),u=L(fe),n=A(fe,"DIV",{class:!0});var He=N(n);m=A(He,"DIV",{class:!0});var be=N(m);E=A(be,"LABEL",{for:!0});var Te=N(E);o=j(Te,"Search"),p&&p.l(Te),Te.forEach(i),v=L(be),T=A(be,"INPUT",{type:!0,id:!0,class:!0}),be.forEach(i),He.forEach(i),k=L(fe),$=A(fe,"DIV",{class:!0});var Ae=N($);I=A(Ae,"TABLE",{class:!0});var $e=N(I);B=A($e,"THEAD",{});var Ne=N(B);b=A(Ne,"TR",{class:!0});var oe=N(b);V&&V.l(oe),w=L(oe),q&&q.l(oe),S=L(oe),z&&z.l(oe),R=L(oe),G&&G.l(oe),U=L(oe),Z&&Z.l(oe),oe.forEach(i),Ne.forEach(i),te=L($e),le=A($e,"TBODY",{});var ye=N(le);for(let De=0;De<W.length;De+=1)W[De].l(ye);ye.forEach(i),$e.forEach(i),Ae.forEach(i),ee=L(fe),J&&J.l(fe),fe.forEach(i),Q.forEach(i),K.forEach(i),this.h()},h(){D(t,"class","text-2xl uppercase font-bold bbw-text-color-secondary"),D(E,"for","q"),D(T,"type","text"),D(T,"id","q"),D(T,"class","w-full"),D(m,"class","filter-component"),D(n,"class","filter"),D(b,"class","text-left"),D(I,"class","w-full table-auto"),D($,"class","text-xl mt-6 bbw-text-color-base"),D(e,"class","mx-4 xl:mx-0"),D(f,"class","max-w-7xl mx-auto pt-5 md:pt-10"),D(l,"class","w-full")},m(C,K){h(C,l,K),y(l,f),y(f,e),y(e,t),y(t,s),y(t,c),y(t,_),M&&M.m(t,null),y(t,d),y(e,u),y(e,n),y(n,m),y(m,E),y(E,o),p&&p.m(E,null),y(m,v),y(m,T),Be(T,r[1]),y(e,k),y(e,$),y($,I),y(I,B),y(B,b),V&&V.m(b,null),y(b,w),q&&q.m(b,null),y(b,S),z&&z.m(b,null),y(b,R),G&&G.m(b,null),y(b,U),Z&&Z.m(b,null),y(I,te),y(I,le);for(let Q=0;Q<W.length;Q+=1)W[Q].m(le,null);y(e,ee),J&&J.m(e,null),ue=!0,he||(x=_l(T,"input",r[10]),he=!0)},p(C,K){if((!ue||K&128)&&a!==(a=C[7].title+"")&&X(s,a),(!ue||K&64)&&X(_,C[6]),C[6]!==C[5]?M?M.p(C,K):(M=Ce(C),M.c(),M.m(t,d)):M&&(M.d(1),M=null),C[1]?p?p.p(C,K):(p=Ue(C),p.c(),p.m(E,null)):p&&(p.d(1),p=null),K&2&&T.value!==C[1]&&Be(T,C[1]),C[4]==="events"?V||(V=Pe(),V.c(),V.m(b,w)):V&&(V.d(1),V=null),C[4]==="speakers"?q||(q=ze(),q.c(),q.m(b,S)):q&&(q.d(1),q=null),C[4]==="media-partners"?z||(z=Me(),z.c(),z.m(b,R)):z&&(z.d(1),z=null),C[4]==="benefits"?G||(G=Oe(),G.c(),G.m(b,U)):G&&(G.d(1),G=null),C[4]==="places"?Z||(Z=Re(),Z.c(),Z.m(b,null)):Z&&(Z.d(1),Z=null),K&413){ne=C[2];let Q;for(Q=0;Q<ne.length;Q+=1){const fe=ge(C,ne,Q);W[Q]?(W[Q].p(fe,K),P(W[Q],1)):(W[Q]=ll(fe),W[Q].c(),P(W[Q],1),W[Q].m(le,null))}for(me(),Q=ne.length;Q<W.length;Q+=1)ve(Q);_e()}K&16&&(Y=["events","speakers"].includes(C[4])),Y?J?(J.p(C,K),K&16&&P(J,1)):(J=tl(C),J.c(),P(J,1),J.m(e,null)):J&&(me(),O(J,1,1,()=>{J=null}),_e())},i(C){if(!ue){for(let K=0;K<ne.length;K+=1)P(W[K]);P(J),ue=!0}},o(C){W=W.filter(Boolean);for(let K=0;K<W.length;K+=1)O(W[K]);O(J),ue=!1},d(C){C&&i(l),M&&M.d(),p&&p.d(),V&&V.d(),q&&q.d(),z&&z.d(),G&&G.d(),Z&&Z.d(),we(W,C),J&&J.d(),he=!1,x()}}}function Ce(r){let l,f;return{c(){l=F("/"),f=F(r[5])},l(e){l=j(e,"/"),f=j(e,r[5])},m(e,t){h(e,l,t),h(e,f,t)},p(e,t){t&32&&X(f,e[5])},d(e){e&&i(l),e&&i(f)}}}function Ue(r){let l,f,e;return{c(){l=F(': "'),f=F(r[1]),e=F('"')},l(t){l=j(t,': "'),f=j(t,r[1]),e=j(t,'"')},m(t,a){h(t,l,a),h(t,f,a),h(t,e,a)},p(t,a){a&2&&X(f,t[1])},d(t){t&&i(l),t&&i(f),t&&i(e)}}}function Pe(r){let l,f,e,t,a,s,c,_,d,u,n,m,E;return{c(){l=H("th"),f=F("📅"),e=g(),t=H("th"),a=g(),s=H("th"),c=F("Name"),_=g(),d=H("th"),u=F("📍"),n=g(),m=H("th"),E=F("👥"),this.h()},l(o){l=A(o,"TH",{class:!0});var v=N(l);f=j(v,"📅"),v.forEach(i),e=L(o),t=A(o,"TH",{}),N(t).forEach(i),a=L(o),s=A(o,"TH",{});var T=N(s);c=j(T,"Name"),T.forEach(i),_=L(o),d=A(o,"TH",{class:!0});var k=N(d);u=j(k,"📍"),k.forEach(i),n=L(o),m=A(o,"TH",{class:!0});var $=N(m);E=j($,"👥"),$.forEach(i),this.h()},h(){D(l,"class","text-right pr-4"),D(d,"class","hidden md:table-cell"),D(m,"class","hidden md:table-cell")},m(o,v){h(o,l,v),y(l,f),h(o,e,v),h(o,t,v),h(o,a,v),h(o,s,v),y(s,c),h(o,_,v),h(o,d,v),y(d,u),h(o,n,v),h(o,m,v),y(m,E)},d(o){o&&i(l),o&&i(e),o&&i(t),o&&i(a),o&&i(s),o&&i(_),o&&i(d),o&&i(n),o&&i(m)}}}function ze(r){let l,f,e,t,a,s,c,_,d,u,n,m,E;return{c(){l=H("th"),f=g(),e=H("th"),t=F("Name"),a=g(),s=H("th"),c=F("🌎"),_=g(),d=H("th"),u=F("🐦"),n=g(),m=H("th"),E=F("Bio"),this.h()},l(o){l=A(o,"TH",{}),N(l).forEach(i),f=L(o),e=A(o,"TH",{});var v=N(e);t=j(v,"Name"),v.forEach(i),a=L(o),s=A(o,"TH",{});var T=N(s);c=j(T,"🌎"),T.forEach(i),_=L(o),d=A(o,"TH",{class:!0});var k=N(d);u=j(k,"🐦"),k.forEach(i),n=L(o),m=A(o,"TH",{class:!0});var $=N(m);E=j($,"Bio"),$.forEach(i),this.h()},h(){D(d,"class","hidden md:table-cell"),D(m,"class","hidden md:table-cell")},m(o,v){h(o,l,v),h(o,f,v),h(o,e,v),y(e,t),h(o,a,v),h(o,s,v),y(s,c),h(o,_,v),h(o,d,v),y(d,u),h(o,n,v),h(o,m,v),y(m,E)},d(o){o&&i(l),o&&i(f),o&&i(e),o&&i(a),o&&i(s),o&&i(_),o&&i(d),o&&i(n),o&&i(m)}}}function Me(r){let l,f,e,t,a,s,c,_,d,u;return{c(){l=H("th"),f=g(),e=H("th"),t=F("Name"),a=g(),s=H("th"),c=F("🌎"),_=g(),d=H("th"),u=F("Description"),this.h()},l(n){l=A(n,"TH",{}),N(l).forEach(i),f=L(n),e=A(n,"TH",{});var m=N(e);t=j(m,"Name"),m.forEach(i),a=L(n),s=A(n,"TH",{});var E=N(s);c=j(E,"🌎"),E.forEach(i),_=L(n),d=A(n,"TH",{class:!0});var o=N(d);u=j(o,"Description"),o.forEach(i),this.h()},h(){D(d,"class","hidden md:table-cell")},m(n,m){h(n,l,m),h(n,f,m),h(n,e,m),y(e,t),h(n,a,m),h(n,s,m),y(s,c),h(n,_,m),h(n,d,m),y(d,u)},d(n){n&&i(l),n&&i(f),n&&i(e),n&&i(a),n&&i(s),n&&i(_),n&&i(d)}}}function Oe(r){let l,f,e,t,a,s,c;return{c(){l=H("th"),f=g(),e=H("th"),t=F("Name"),a=g(),s=H("th"),c=F("Benefit")},l(_){l=A(_,"TH",{}),N(l).forEach(i),f=L(_),e=A(_,"TH",{});var d=N(e);t=j(d,"Name"),d.forEach(i),a=L(_),s=A(_,"TH",{});var u=N(s);c=j(u,"Benefit"),u.forEach(i)},m(_,d){h(_,l,d),h(_,f,d),h(_,e,d),y(e,t),h(_,a,d),h(_,s,d),y(s,c)},d(_){_&&i(l),_&&i(f),_&&i(e),_&&i(a),_&&i(s)}}}function Re(r){let l,f,e,t,a,s,c,_,d,u;return{c(){l=H("th"),f=g(),e=H("th"),t=F("Name"),a=g(),s=H("th"),c=F("👥"),_=g(),d=H("th"),u=F("Address"),this.h()},l(n){l=A(n,"TH",{}),N(l).forEach(i),f=L(n),e=A(n,"TH",{});var m=N(e);t=j(m,"Name"),m.forEach(i),a=L(n),s=A(n,"TH",{});var E=N(s);c=j(E,"👥"),E.forEach(i),_=L(n),d=A(n,"TH",{class:!0});var o=N(d);u=j(o,"Address"),o.forEach(i),this.h()},h(){D(d,"class","hidden md:table-cell")},m(n,m){h(n,l,m),h(n,f,m),h(n,e,m),y(e,t),h(n,a,m),h(n,s,m),y(s,c),h(n,_,m),h(n,d,m),y(d,u)},d(n){n&&i(l),n&&i(f),n&&i(e),n&&i(a),n&&i(s),n&&i(_),n&&i(d)}}}function We(r){let l,f=Ve(r[14])+"",e,t,a,s,c,_,d,u,n,m,E,o,v,T,k,$,I,B;c=new pe({props:{item:r[14]}});function b(p,V){return p[14].hidden?wl:El}let w=b(r),S=w(r),R=r[14].types,U=[];for(let p=0;p<R.length;p+=1)U[p]=qe(Fe(r,R,p));const te=p=>O(U[p],1,1,()=>{U[p]=null});function le(p,V){if(p[14].venues)return Dl;if(p[14].venueName)return Tl}let ee=le(r),Y=ee&&ee(r);function ue(p,V){return p[14].attendees?Bl:yl}let he=ue(r),x=he(r),M=r[14].languages&&r[14].languages.length>0&&Ye(r);return{c(){l=H("td"),e=F(f),t=g(),a=H("td"),s=H("a"),ie(c.$$.fragment),d=g(),u=H("td"),n=H("div"),S.c(),m=g(),E=H("div");for(let p=0;p<U.length;p+=1)U[p].c();o=g(),v=H("td"),Y&&Y.c(),T=g(),k=H("td"),x.c(),$=g(),I=H("td"),M&&M.c(),this.h()},l(p){l=A(p,"TD",{class:!0});var V=N(l);e=j(V,f),V.forEach(i),t=L(p),a=A(p,"TD",{class:!0});var q=N(a);s=A(q,"A",{href:!0});var z=N(s);se(c.$$.fragment,z),z.forEach(i),q.forEach(i),d=L(p),u=A(p,"TD",{class:!0});var G=N(u);n=A(G,"DIV",{class:!0});var Z=N(n);S.l(Z),Z.forEach(i),m=L(G),E=A(G,"DIV",{class:!0});var ne=N(E);for(let C=0;C<U.length;C+=1)U[C].l(ne);ne.forEach(i),G.forEach(i),o=L(p),v=A(p,"TD",{class:!0});var W=N(v);Y&&Y.l(W),W.forEach(i),T=L(p),k=A(p,"TD",{class:!0});var ve=N(k);x.l(ve),ve.forEach(i),$=L(p),I=A(p,"TD",{class:!0});var J=N(I);M&&M.l(J),J.forEach(i),this.h()},h(){D(l,"class","text-right pr-2 md:pr-4 text-base md:text-xl"),D(s,"href",_="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(a,"class","w-12 md:w-14"),D(n,"class",""),D(E,"class","gap-1 items-center ml-4 hidden md:flex"),D(u,"class","text-lg md:text-2xl flex items-center h-12"),D(v,"class","hidden md:table-cell"),D(k,"class","hidden md:table-cell"),D(I,"class","hidden md:table-cell")},m(p,V){h(p,l,V),y(l,e),h(p,t,V),h(p,a,V),y(a,s),re(c,s,null),h(p,d,V),h(p,u,V),y(u,n),S.m(n,null),y(u,m),y(u,E);for(let q=0;q<U.length;q+=1)U[q].m(E,null);h(p,o,V),h(p,v,V),Y&&Y.m(v,null),h(p,T,V),h(p,k,V),x.m(k,null),h(p,$,V),h(p,I,V),M&&M.m(I,null),B=!0},p(p,V){(!B||V&4)&&f!==(f=Ve(p[14])+"")&&X(e,f);const q={};if(V&4&&(q.item=p[14]),c.$set(q),(!B||V&132&&_!==(_="/"+p[8]+"/"+p[7].model+"/"+p[14].id))&&D(s,"href",_),w===(w=b(p))&&S?S.p(p,V):(S.d(1),S=w(p),S&&(S.c(),S.m(n,null))),V&4){R=p[14].types;let z;for(z=0;z<R.length;z+=1){const G=Fe(p,R,z);U[z]?(U[z].p(G,V),P(U[z],1)):(U[z]=qe(G),U[z].c(),P(U[z],1),U[z].m(E,null))}for(me(),z=R.length;z<U.length;z+=1)te(z);_e()}ee===(ee=le(p))&&Y?Y.p(p,V):(Y&&Y.d(1),Y=ee&&ee(p),Y&&(Y.c(),Y.m(v,null))),he===(he=ue(p))&&x?x.p(p,V):(x.d(1),x=he(p),x&&(x.c(),x.m(k,null))),p[14].languages&&p[14].languages.length>0?M?M.p(p,V):(M=Ye(p),M.c(),M.m(I,null)):M&&(M.d(1),M=null)},i(p){if(!B){P(c.$$.fragment,p);for(let V=0;V<R.length;V+=1)P(U[V]);B=!0}},o(p){O(c.$$.fragment,p),U=U.filter(Boolean);for(let V=0;V<U.length;V+=1)O(U[V]);B=!1},d(p){p&&i(l),p&&i(t),p&&i(a),ae(c),p&&i(d),p&&i(u),S.d(),we(U,p),p&&i(o),p&&i(v),Y&&Y.d(),p&&i(T),p&&i(k),x.d(),p&&i($),p&&i(I),M&&M.d()}}}function El(r){let l,f=r[14].name+"",e,t;return{c(){l=H("a"),e=F(f),this.h()},l(a){l=A(a,"A",{href:!0,class:!0});var s=N(l);e=j(s,f),s.forEach(i),this.h()},h(){D(l,"href",t="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(l,"class","text-bbw-navy hover:underline")},m(a,s){h(a,l,s),y(l,e)},p(a,s){s&4&&f!==(f=a[14].name+"")&&X(e,f),s&132&&t!==(t="/"+a[8]+"/"+a[7].model+"/"+a[14].id)&&D(l,"href",t)},d(a){a&&i(l)}}}function wl(r){let l=r[14].name+"",f,e;return{c(){f=F(l),e=F("*")},l(t){f=j(t,l),e=j(t,"*")},m(t,a){h(t,f,a),h(t,e,a)},p(t,a){a&4&&l!==(l=t[14].name+"")&&X(f,l)},d(t){t&&i(f),t&&i(e)}}}function qe(r){let l,f;return l=new kl({props:{type:r[4]}}),{c(){ie(l.$$.fragment)},l(e){se(l.$$.fragment,e)},m(e,t){re(l,e,t),f=!0},p(e,t){const a={};t&4&&(a.type=e[4]),l.$set(a)},i(e){f||(P(l.$$.fragment,e),f=!0)},o(e){O(l.$$.fragment,e),f=!1},d(e){ae(l,e)}}}function Tl(r){let l;function f(a,s){return a[14].venueUrl?Nl:a[14].venueName&&a[14].venueName!=="TBA"?Al:Hl}let e=f(r),t=e(r);return{c(){t.c(),l=Ee()},l(a){t.l(a),l=Ee()},m(a,s){t.m(a,s),h(a,l,s)},p(a,s){e===(e=f(a))&&t?t.p(a,s):(t.d(1),t=e(a),t&&(t.c(),t.m(l.parentNode,l)))},d(a){t.d(a),a&&i(l)}}}function Dl(r){let l,f=r[14].venues.map(r[11]).join(", ")+"",e;return{c(){l=new ml(!1),e=Ee(),this.h()},l(t){l=hl(t,!1),e=Ee(),this.h()},h(){l.a=e},m(t,a){l.m(f,t,a),h(t,e,a)},p(t,a){a&13&&f!==(f=t[14].venues.map(t[11]).join(", ")+"")&&l.p(f)},d(t){t&&i(e),t&&l.d()}}}function Hl(r){let l,f;return{c(){l=H("span"),f=F("TBA"),this.h()},l(e){l=A(e,"SPAN",{class:!0});var t=N(l);f=j(t,"TBA"),t.forEach(i),this.h()},h(){D(l,"class","opacity-50")},m(e,t){h(e,l,t),y(l,f)},p:fl,d(e){e&&i(l)}}}function Al(r){let l=r[14].venueName+"",f;return{c(){f=F(l)},l(e){f=j(e,l)},m(e,t){h(e,f,t)},p(e,t){t&4&&l!==(l=e[14].venueName+"")&&X(f,l)},d(e){e&&i(f)}}}function Nl(r){let l,f=r[14].venueName+"",e,t;return{c(){l=H("a"),e=F(f),this.h()},l(a){l=A(a,"A",{href:!0,class:!0});var s=N(l);e=j(s,f),s.forEach(i),this.h()},h(){D(l,"href",t=r[14].venueUrl),D(l,"class","underline hover:no-underline external")},m(a,s){h(a,l,s),y(l,e)},p(a,s){s&4&&f!==(f=a[14].venueName+"")&&X(e,f),s&4&&t!==(t=a[14].venueUrl)&&D(l,"href",t)},d(a){a&&i(l)}}}function yl(r){let l,f;return{c(){l=H("span"),f=F("TBA"),this.h()},l(e){l=A(e,"SPAN",{class:!0});var t=N(l);f=j(t,"TBA"),t.forEach(i),this.h()},h(){D(l,"class","opacity-50")},m(e,t){h(e,l,t),y(l,f)},p:fl,d(e){e&&i(l)}}}function Bl(r){let l=r[14].attendees+"",f;return{c(){f=F(l)},l(e){f=j(e,l)},m(e,t){h(e,f,t)},p(e,t){t&4&&l!==(l=e[14].attendees+"")&&X(f,l)},d(e){e&&i(f)}}}function Ye(r){let l,f=r[14].languages,e=[];for(let t=0;t<f.length;t+=1)e[t]=Ge(Se(r,f,t));return{c(){l=H("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=A(t,"DIV",{class:!0});var a=N(l);for(let s=0;s<e.length;s+=1)e[s].l(a);a.forEach(i),this.h()},h(){D(l,"class","flex gap-1")},m(t,a){h(t,l,a);for(let s=0;s<e.length;s+=1)e[s].m(l,null)},p(t,a){if(a&4){f=t[14].languages;let s;for(s=0;s<f.length;s+=1){const c=Se(t,f,s);e[s]?e[s].p(c,a):(e[s]=Ge(c),e[s].c(),e[s].m(l,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(t){t&&i(l),we(e,t)}}}function Ge(r){let l,f=ce(r[17])+"",e;return{c(){l=H("div"),e=F(f)},l(t){l=A(t,"DIV",{});var a=N(l);e=j(a,f),a.forEach(i)},m(t,a){h(t,l,a),y(l,e)},p(t,a){a&4&&f!==(f=ce(t[17])+"")&&X(e,f)},d(t){t&&i(l)}}}function Je(r){let l,f,e,t,a,s,c,_=r[14].name+"",d,u,n,m,E=(r[14].country&&r[14].country!=="xx"?ce(r[14].country,!1):"")+"",o,v,T,k,$,I,B;e=new pe({props:{item:r[14],img:"photoUrl",rounded:"rounded-full"}});let b=r[14].twitter&&Ke(r);return I=new il({props:{source:r[14].caption||""}}),{c(){l=H("td"),f=H("a"),ie(e.$$.fragment),a=g(),s=H("td"),c=H("a"),d=F(_),n=g(),m=H("td"),o=F(E),v=g(),T=H("td"),b&&b.c(),k=g(),$=H("td"),ie(I.$$.fragment),this.h()},l(w){l=A(w,"TD",{class:!0});var S=N(l);f=A(S,"A",{href:!0});var R=N(f);se(e.$$.fragment,R),R.forEach(i),S.forEach(i),a=L(w),s=A(w,"TD",{class:!0});var U=N(s);c=A(U,"A",{href:!0,class:!0});var te=N(c);d=j(te,_),te.forEach(i),U.forEach(i),n=L(w),m=A(w,"TD",{});var le=N(m);o=j(le,E),le.forEach(i),v=L(w),T=A(w,"TD",{class:!0});var ee=N(T);b&&b.l(ee),ee.forEach(i),k=L(w),$=A(w,"TD",{class:!0});var Y=N($);se(I.$$.fragment,Y),Y.forEach(i),this.h()},h(){D(f,"href",t="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(l,"class","w-12 md:w-14"),D(c,"href",u="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(c,"class","text-bbw-navy hover:underline"),D(s,"class","text-2xl h-12"),D(T,"class","hidden md:table-cell"),D($,"class","hidden md:table-cell")},m(w,S){h(w,l,S),y(l,f),re(e,f,null),h(w,a,S),h(w,s,S),y(s,c),y(c,d),h(w,n,S),h(w,m,S),y(m,o),h(w,v,S),h(w,T,S),b&&b.m(T,null),h(w,k,S),h(w,$,S),re(I,$,null),B=!0},p(w,S){const R={};S&4&&(R.item=w[14]),e.$set(R),(!B||S&132&&t!==(t="/"+w[8]+"/"+w[7].model+"/"+w[14].id))&&D(f,"href",t),(!B||S&4)&&_!==(_=w[14].name+"")&&X(d,_),(!B||S&132&&u!==(u="/"+w[8]+"/"+w[7].model+"/"+w[14].id))&&D(c,"href",u),(!B||S&4)&&E!==(E=(w[14].country&&w[14].country!=="xx"?ce(w[14].country,!1):"")+"")&&X(o,E),w[14].twitter?b?b.p(w,S):(b=Ke(w),b.c(),b.m(T,null)):b&&(b.d(1),b=null);const U={};S&4&&(U.source=w[14].caption||""),I.$set(U)},i(w){B||(P(e.$$.fragment,w),P(I.$$.fragment,w),B=!0)},o(w){O(e.$$.fragment,w),O(I.$$.fragment,w),B=!1},d(w){w&&i(l),ae(e),w&&i(a),w&&i(s),w&&i(n),w&&i(m),w&&i(v),w&&i(T),b&&b.d(),w&&i(k),w&&i($),ae(I)}}}function Ke(r){let l,f,e=r[14].twitter+"",t,a;return{c(){l=F("@"),f=H("a"),t=F(e),this.h()},l(s){l=j(s,"@"),f=A(s,"A",{href:!0,class:!0});var c=N(f);t=j(c,e),c.forEach(i),this.h()},h(){D(f,"href",a="https://twitter.com/"+r[14].twitter),D(f,"class","underline hover:no-underline")},m(s,c){h(s,l,c),h(s,f,c),y(f,t)},p(s,c){c&4&&e!==(e=s[14].twitter+"")&&X(t,e),c&4&&a!==(a="https://twitter.com/"+s[14].twitter)&&D(f,"href",a)},d(s){s&&i(l),s&&i(f)}}}function Qe(r){let l,f,e,t,a,s,c,_=r[14].name+"",d,u,n,m,E,o,v,T;e=new pe({props:{item:r[14],width:"w-16",aspect:"aspect-[16/9]"}});let k=r[14].languages&&r[14].languages.length>0&&Xe(r);return v=new il({props:{source:r[14].description}}),{c(){l=H("td"),f=H("a"),ie(e.$$.fragment),a=g(),s=H("td"),c=H("a"),d=F(_),n=g(),m=H("td"),k&&k.c(),E=g(),o=H("td"),ie(v.$$.fragment),this.h()},l($){l=A($,"TD",{class:!0});var I=N(l);f=A(I,"A",{href:!0});var B=N(f);se(e.$$.fragment,B),B.forEach(i),I.forEach(i),a=L($),s=A($,"TD",{class:!0});var b=N(s);c=A(b,"A",{href:!0,class:!0});var w=N(c);d=j(w,_),w.forEach(i),b.forEach(i),n=L($),m=A($,"TD",{});var S=N(m);k&&k.l(S),S.forEach(i),E=L($),o=A($,"TD",{class:!0});var R=N(o);se(v.$$.fragment,R),R.forEach(i),this.h()},h(){D(f,"href",t="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(l,"class","w-20"),D(c,"href",u="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(c,"class","text-bbw-navy hover:underline"),D(s,"class","text-2xl h-12"),D(o,"class","hidden md:table-cell")},m($,I){h($,l,I),y(l,f),re(e,f,null),h($,a,I),h($,s,I),y(s,c),y(c,d),h($,n,I),h($,m,I),k&&k.m(m,null),h($,E,I),h($,o,I),re(v,o,null),T=!0},p($,I){const B={};I&4&&(B.item=$[14]),e.$set(B),(!T||I&132&&t!==(t="/"+$[8]+"/"+$[7].model+"/"+$[14].id))&&D(f,"href",t),(!T||I&4)&&_!==(_=$[14].name+"")&&X(d,_),(!T||I&132&&u!==(u="/"+$[8]+"/"+$[7].model+"/"+$[14].id))&&D(c,"href",u),$[14].languages&&$[14].languages.length>0?k?k.p($,I):(k=Xe($),k.c(),k.m(m,null)):k&&(k.d(1),k=null);const b={};I&4&&(b.source=$[14].description),v.$set(b)},i($){T||(P(e.$$.fragment,$),P(v.$$.fragment,$),T=!0)},o($){O(e.$$.fragment,$),O(v.$$.fragment,$),T=!1},d($){$&&i(l),ae(e),$&&i(a),$&&i(s),$&&i(n),$&&i(m),k&&k.d(),$&&i(E),$&&i(o),ae(v)}}}function Xe(r){let l,f=r[14].languages,e=[];for(let t=0;t<f.length;t+=1)e[t]=Ze(Le(r,f,t));return{c(){l=H("div");for(let t=0;t<e.length;t+=1)e[t].c();this.h()},l(t){l=A(t,"DIV",{class:!0});var a=N(l);for(let s=0;s<e.length;s+=1)e[s].l(a);a.forEach(i),this.h()},h(){D(l,"class","flex gap-1")},m(t,a){h(t,l,a);for(let s=0;s<e.length;s+=1)e[s].m(l,null)},p(t,a){if(a&4){f=t[14].languages;let s;for(s=0;s<f.length;s+=1){const c=Le(t,f,s);e[s]?e[s].p(c,a):(e[s]=Ze(c),e[s].c(),e[s].m(l,null))}for(;s<e.length;s+=1)e[s].d(1);e.length=f.length}},d(t){t&&i(l),we(e,t)}}}function Ze(r){let l,f=ce(r[17])+"",e;return{c(){l=H("div"),e=F(f)},l(t){l=A(t,"DIV",{});var a=N(l);e=j(a,f),a.forEach(i)},m(t,a){h(t,l,a),y(l,e)},p(t,a){a&4&&f!==(f=ce(t[17])+"")&&X(e,f)},d(t){t&&i(l)}}}function xe(r){let l,f,e,t,a,s,c,_=r[14].name+"",d,u,n,m,E=r[14].slogan+"",o,v;return e=new pe({props:{item:r[14],width:"w-16",aspect:"aspect-[16/9]"}}),{c(){l=H("td"),f=H("a"),ie(e.$$.fragment),a=g(),s=H("td"),c=H("a"),d=F(_),n=g(),m=H("td"),o=F(E),this.h()},l(T){l=A(T,"TD",{class:!0});var k=N(l);f=A(k,"A",{href:!0});var $=N(f);se(e.$$.fragment,$),$.forEach(i),k.forEach(i),a=L(T),s=A(T,"TD",{class:!0});var I=N(s);c=A(I,"A",{href:!0,class:!0});var B=N(c);d=j(B,_),B.forEach(i),I.forEach(i),n=L(T),m=A(T,"TD",{class:!0});var b=N(m);o=j(b,E),b.forEach(i),this.h()},h(){D(f,"href",t="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(l,"class","w-20"),D(c,"href",u="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(c,"class","text-bbw-navy hover:underline"),D(s,"class","text-2xl h-12"),D(m,"class","h-12")},m(T,k){h(T,l,k),y(l,f),re(e,f,null),h(T,a,k),h(T,s,k),y(s,c),y(c,d),h(T,n,k),h(T,m,k),y(m,o),v=!0},p(T,k){const $={};k&4&&($.item=T[14]),e.$set($),(!v||k&132&&t!==(t="/"+T[8]+"/"+T[7].model+"/"+T[14].id))&&D(f,"href",t),(!v||k&4)&&_!==(_=T[14].name+"")&&X(d,_),(!v||k&132&&u!==(u="/"+T[8]+"/"+T[7].model+"/"+T[14].id))&&D(c,"href",u),(!v||k&4)&&E!==(E=T[14].slogan+"")&&X(o,E)},i(T){v||(P(e.$$.fragment,T),v=!0)},o(T){O(e.$$.fragment,T),v=!1},d(T){T&&i(l),ae(e),T&&i(a),T&&i(s),T&&i(n),T&&i(m)}}}function el(r){let l,f,e,t,a,s,c,_=r[14].name+"",d,u,n,m,E=r[14].capacity+"",o,v,T,k=r[14].address+"",$,I;return e=new pe({props:{item:r[14],img:"photo"}}),{c(){l=H("td"),f=H("a"),ie(e.$$.fragment),a=g(),s=H("td"),c=H("a"),d=F(_),n=g(),m=H("td"),o=F(E),v=g(),T=H("td"),$=F(k),this.h()},l(B){l=A(B,"TD",{class:!0});var b=N(l);f=A(b,"A",{href:!0});var w=N(f);se(e.$$.fragment,w),w.forEach(i),b.forEach(i),a=L(B),s=A(B,"TD",{class:!0});var S=N(s);c=A(S,"A",{href:!0,class:!0});var R=N(c);d=j(R,_),R.forEach(i),S.forEach(i),n=L(B),m=A(B,"TD",{});var U=N(m);o=j(U,E),U.forEach(i),v=L(B),T=A(B,"TD",{class:!0});var te=N(T);$=j(te,k),te.forEach(i),this.h()},h(){D(f,"href",t="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(l,"class","w-14"),D(c,"href",u="/"+r[8]+"/"+r[7].model+"/"+r[14].id),D(c,"class","text-bbw-navy hover:underline"),D(s,"class","text-2xl h-12"),D(T,"class","hidden md:table-cell")},m(B,b){h(B,l,b),y(l,f),re(e,f,null),h(B,a,b),h(B,s,b),y(s,c),y(c,d),h(B,n,b),h(B,m,b),y(m,o),h(B,v,b),h(B,T,b),y(T,$),I=!0},p(B,b){const w={};b&4&&(w.item=B[14]),e.$set(w),(!I||b&132&&t!==(t="/"+B[8]+"/"+B[7].model+"/"+B[14].id))&&D(f,"href",t),(!I||b&4)&&_!==(_=B[14].name+"")&&X(d,_),(!I||b&132&&u!==(u="/"+B[8]+"/"+B[7].model+"/"+B[14].id))&&D(c,"href",u),(!I||b&4)&&E!==(E=B[14].capacity+"")&&X(o,E),(!I||b&4)&&k!==(k=B[14].address+"")&&X($,k)},i(B){I||(P(e.$$.fragment,B),I=!0)},o(B){O(e.$$.fragment,B),I=!1},d(B){B&&i(l),ae(e),B&&i(a),B&&i(s),B&&i(n),B&&i(m),B&&i(v),B&&i(T)}}}function ll(r){let l,f,e,t,a,s,c,_,d=r[4]==="events"&&We(r),u=r[4]==="speakers"&&Je(r),n=r[4]==="media-partners"&&Qe(r),m=r[4]==="benefits"&&xe(r),E=r[4]==="places"&&el(r);return{c(){l=H("tr"),d&&d.c(),f=g(),u&&u.c(),e=g(),n&&n.c(),t=g(),m&&m.c(),a=g(),E&&E.c(),s=g(),this.h()},l(o){l=A(o,"TR",{class:!0,id:!0});var v=N(l);d&&d.l(v),f=L(v),u&&u.l(v),e=L(v),n&&n.l(v),t=L(v),m&&m.l(v),a=L(v),E&&E.l(v),s=L(v),v.forEach(i),this.h()},h(){D(l,"class","hover:bg-bbw-yellow/20 dark:hover:bg-bbw-white/10"),D(l,"id",c=r[14].id)},m(o,v){h(o,l,v),d&&d.m(l,null),y(l,f),u&&u.m(l,null),y(l,e),n&&n.m(l,null),y(l,t),m&&m.m(l,null),y(l,a),E&&E.m(l,null),y(l,s),_=!0},p(o,v){o[4]==="events"?d?(d.p(o,v),v&16&&P(d,1)):(d=We(o),d.c(),P(d,1),d.m(l,f)):d&&(me(),O(d,1,1,()=>{d=null}),_e()),o[4]==="speakers"?u?(u.p(o,v),v&16&&P(u,1)):(u=Je(o),u.c(),P(u,1),u.m(l,e)):u&&(me(),O(u,1,1,()=>{u=null}),_e()),o[4]==="media-partners"?n?(n.p(o,v),v&16&&P(n,1)):(n=Qe(o),n.c(),P(n,1),n.m(l,t)):n&&(me(),O(n,1,1,()=>{n=null}),_e()),o[4]==="benefits"?m?(m.p(o,v),v&16&&P(m,1)):(m=xe(o),m.c(),P(m,1),m.m(l,a)):m&&(me(),O(m,1,1,()=>{m=null}),_e()),o[4]==="places"?E?(E.p(o,v),v&16&&P(E,1)):(E=el(o),E.c(),P(E,1),E.m(l,s)):E&&(me(),O(E,1,1,()=>{E=null}),_e()),(!_||v&4&&c!==(c=o[14].id))&&D(l,"id",c)},i(o){_||(P(d),P(u),P(n),P(m),P(E),_=!0)},o(o){O(d),O(u),O(n),O(m),O(E),_=!1},d(o){o&&i(l),d&&d.d(),u&&u.d(),n&&n.d(),m&&m.d(),E&&E.d()}}}function tl(r){let l,f;return l=new vl({props:{type:r[4]}}),{c(){ie(l.$$.fragment)},l(e){se(l.$$.fragment,e)},m(e,t){re(l,e,t),f=!0},p(e,t){const a={};t&16&&(a.type=e[4]),l.$set(a)},i(e){f||(P(l.$$.fragment,e),f=!0)},o(e){O(l.$$.fragment,e),f=!1},d(e){ae(l,e)}}}function Il(r){var d;let l,f,e,t,a,s,c;document.title=l=((d=r[7])==null?void 0:d.title)+" | Berlin Blockchain Week 20"+r[3].params.entry,e=new $l({props:{path:!1,type:r[3].params.type}});let _=r[7]&&je(r);return s=new cl({props:{bundle:r[0].bundle}}),{c(){f=g(),ie(e.$$.fragment),t=g(),_&&_.c(),a=g(),ie(s.$$.fragment)},l(u){nl("svelte-xokhfb",document.head).forEach(i),f=L(u),se(e.$$.fragment,u),t=L(u),_&&_.l(u),a=L(u),se(s.$$.fragment,u)},m(u,n){h(u,f,n),re(e,u,n),h(u,t,n),_&&_.m(u,n),h(u,a,n),re(s,u,n),c=!0},p(u,[n]){var o;(!c||n&136)&&l!==(l=((o=u[7])==null?void 0:o.title)+" | Berlin Blockchain Week 20"+u[3].params.entry)&&(document.title=l);const m={};n&8&&(m.type=u[3].params.type),e.$set(m),u[7]?_?(_.p(u,n),n&128&&P(_,1)):(_=je(u),_.c(),P(_,1),_.m(a.parentNode,a)):_&&(me(),O(_,1,1,()=>{_=null}),_e());const E={};n&1&&(E.bundle=u[0].bundle),s.$set(E)},i(u){c||(P(e.$$.fragment,u),P(_),P(s.$$.fragment,u),c=!0)},o(u){O(e.$$.fragment,u),O(_),O(s.$$.fragment,u),c=!1},d(u){u&&i(f),ae(e,u),u&&i(t),_&&_.d(u),u&&i(a),ae(s,u)}}}function Vl(r,l,f){let e,t,a,s,c,_;ol(r,dl,k=>f(3,_=k));let{data:d}=l,u=_.params.entry,n="",m=0,E={};function o(k,$={},I=""){if(!k)return[];k=[...k],e==="events"&&(k=k.sort((b,w)=>b.date>w.date?1:-1)),e==="events"&&$.start&&$.end&&(k=k.filter(b=>b.segments.find(w=>(w.times.split("-"),Ie(new Date(w.startTime),new Date($.start))<=0&&Ie(new Date(w.endTime),new Date($.end))>=0)))),["speakers","benefits","media-partner"].includes(e)&&(k=k.sort((b,w)=>b.name.toLowerCase()>w.name.toLowerCase()?1:-1)),e==="places"&&(k=k.sort((b,w)=>b.capacity>w.capacity?-1:1));const B=b=>typeof b.replace!="function"?b:b.normalize("NFD").toLowerCase().replace(/[\u0300-\u036F]/g,"");return I?(E={},k=k.map(b=>{const w=[["name",50],["tags",30],["caption",20],["venueName"],["venueAddress"],["org"],["chains"],["description"],["twitter"],["country"]];E[b.id]=0;for(const[S,R=20]of w){let U=typeof b[S]=="array"?b[S].join(", "):b[S];typeof U=="string"&&B(U).match(new RegExp(B(I),"si"))&&(E[b.id]+=R)}return b}).filter(b=>E[b.id]>0).sort((b,w)=>E[b.id]>E[w.id]?-1:1)):f(5,m=k.filter(b=>!b.hidden).length),k}ul(async()=>{if(!ke.collections[_.params.type]){const k=Object.keys(ke.collections).find($=>ke.collections[$].model===_.params.type);k&&pl(`/${_.params.entry}/${k}`)}});function v(){n=this.value,f(1,n)}const T=k=>{const $=d.bundle.places.find(I=>I.id===k);return`<a href="/${_.params.entry}/place/${$.id}" class="underline hover:no-underline">${$.name}</a>`};return r.$$set=k=>{"data"in k&&f(0,d=k.data)},r.$$.update=()=>{r.$$.dirty&8&&f(4,e=_.params.type),r.$$.dirty&16&&f(7,t=ke.collections[e]),r.$$.dirty&17&&f(9,a=e==="speakers"?bl(d.bundle[e]):d.bundle[e]),r.$$.dirty&514&&f(2,s=o(a,{},n)),r.$$.dirty&4&&f(6,c=s.filter(k=>!k.hidden).length)},[d,n,s,_,e,m,c,t,u,a,v,T]}class Ul extends sl{constructor(l){super(),rl(this,l,Vl,Il,al,{data:0})}}export{Ul as default};