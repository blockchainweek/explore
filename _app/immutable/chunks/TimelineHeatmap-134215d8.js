import{S as pe,i as ye,s as we,k,a as z,l as D,m as E,c as X,h as b,n as p,P as he,b as M,F as y,Q as ce,f as O,g as R,t as A,d as J,O as F,q as $,r as W,p as N,u as K,B as P,w as ke,x as De,y as Ee,z as Ie,C as G,R as Z,G as Me}from"./index-5edaeb20.js";import{g as je}from"./Disclaimer-d43c0e13.js";import{t as Se,c as Ve,m as Te,a as L,f as H,b as x,I as He}from"./Footer-12905dd1.js";function ze(e,t){const r=+Se(e);return Ve(e,r+t)}function q(e,t){return ze(e,t*Te)}function ee(e,t,r){const s=e.slice();return s[20]=t[r],s[22]=r,s}function te(e,t,r){const s=e.slice();return s[23]=t[r],s}function le(e,t,r){const s=e.slice();return s[20]=t[r],s}function ne(e,t,r){const s=e.slice();return s[28]=t[r][0],s[29]=t[r][1],s}function se(e){let t,r,s=e[1].title+"",a,d,l,o,i,_,g;const h=[Oe,Xe],u=[];function c(n,m){return n[5].length>0?0:1}return l=c(e),o=u[l]=h[l](e),{c(){t=k("div"),r=k("div"),a=$(s),d=z(),o.c(),this.h()},l(n){t=D(n,"DIV",{class:!0,style:!0});var m=E(t);r=D(m,"DIV",{class:!0});var f=E(r);a=W(f,s),f.forEach(b),d=X(m),o.l(m),m.forEach(b),this.h()},h(){p(r,"class","uppercase bbw-text-color-secondary text-lg"),p(t,"class",i="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-bbw-dark dark:text-gray-200 z-50 py-2 px-4 "+(e[1]?"hidden md:block":"hidden")),N(t,"left",(e[1].event.layerX+e[2]<e[3]?e[1].event.layerX:e[1].event.layerX-e[2])+"px"),he(()=>e[12].call(t))},m(n,m){M(n,t,m),y(t,r),y(r,a),y(t,d),u[l].m(t,null),_=ce(t,e[12].bind(t)),g=!0},p(n,m){(!g||m[0]&2)&&s!==(s=n[1].title+"")&&K(a,s);let f=l;l=c(n),l===f?u[l].p(n,m):(R(),A(u[f],1,1,()=>{u[f]=null}),J(),o=u[l],o?o.p(n,m):(o=u[l]=h[l](n),o.c()),O(o,1),o.m(t,null)),(!g||m[0]&2&&i!==(i="absolute top-[81px] w-[300px] border dark:border-gray-400 bg-white dark:bg-bbw-dark dark:text-gray-200 z-50 py-2 px-4 "+(n[1]?"hidden md:block":"hidden")))&&p(t,"class",i),(!g||m[0]&14)&&N(t,"left",(n[1].event.layerX+n[2]<n[3]?n[1].event.layerX:n[1].event.layerX-n[2])+"px")},i(n){g||(O(o),g=!0)},o(n){A(o),g=!1},d(n){n&&b(t),u[l].d(),_()}}}function Xe(e){let t,r;return{c(){t=k("div"),r=$("No events"),this.h()},l(s){t=D(s,"DIV",{class:!0});var a=E(t);r=W(a,"No events"),a.forEach(b),this.h()},h(){p(t,"class","text-lg mt-4 bbw-text-color-secondary")},m(s,a){M(s,t,a),y(t,r)},p:P,i:P,o:P,d(s){s&&b(t)}}}function Oe(e){let t,r,s=e[5],a=[];for(let l=0;l<s.length;l+=1)a[l]=ie(ne(e,s,l));const d=l=>A(a[l],1,1,()=>{a[l]=null});return{c(){t=k("div");for(let l=0;l<a.length;l+=1)a[l].c();this.h()},l(l){t=D(l,"DIV",{class:!0});var o=E(t);for(let i=0;i<a.length;i+=1)a[i].l(o);o.forEach(b),this.h()},h(){p(t,"class","text-xl mt-4")},m(l,o){M(l,t,o);for(let i=0;i<a.length;i+=1)a[i].m(t,null);r=!0},p(l,o){if(o[0]&32){s=l[5];let i;for(i=0;i<s.length;i+=1){const _=ne(l,s,i);a[i]?(a[i].p(_,o),O(a[i],1)):(a[i]=ie(_),a[i].c(),O(a[i],1),a[i].m(t,null))}for(R(),i=s.length;i<a.length;i+=1)d(i);J()}},i(l){if(!r){for(let o=0;o<s.length;o+=1)O(a[o]);r=!0}},o(l){a=a.filter(Boolean);for(let o=0;o<a.length;o+=1)A(a[o]);r=!1},d(l){l&&b(t),F(a,l)}}}function re(e){let t;return{c(){t=$("*")},l(r){t=W(r,"*")},m(r,s){M(r,t,s)},d(r){r&&b(t)}}}function ae(e){let t,r=e[28].segments[e[29]].title+"",s;return{c(){t=$("- "),s=$(r)},l(a){t=W(a,"- "),s=W(a,r)},m(a,d){M(a,t,d),M(a,s,d)},p(a,d){d[0]&32&&r!==(r=a[28].segments[a[29]].title+"")&&K(s,r)},d(a){a&&b(t),a&&b(s)}}}function ie(e){let t,r,s,a,d,l=(e[28].shortname||e[28].name)+"",o,i,_,g;s=new He({props:{item:e[28],width:"h-8"}});let h=e[28].hidden&&re(),u=e[28].segments[e[29]].title&&ae(e);return{c(){t=k("div"),r=k("div"),ke(s.$$.fragment),a=z(),d=k("div"),o=$(l),h&&h.c(),i=z(),u&&u.c(),_=z(),this.h()},l(c){t=D(c,"DIV",{class:!0});var n=E(t);r=D(n,"DIV",{class:!0});var m=E(r);De(s.$$.fragment,m),m.forEach(b),a=X(n),d=D(n,"DIV",{class:!0});var f=E(d);o=W(f,l),h&&h.l(f),i=X(f),u&&u.l(f),f.forEach(b),_=X(n),n.forEach(b),this.h()},h(){p(r,"class",""),p(d,"class",""),p(t,"class","flex gap-2 items-center mb-1")},m(c,n){M(c,t,n),y(t,r),Ee(s,r,null),y(t,a),y(t,d),y(d,o),h&&h.m(d,null),y(d,i),u&&u.m(d,null),y(t,_),g=!0},p(c,n){const m={};n[0]&32&&(m.item=c[28]),s.$set(m),(!g||n[0]&32)&&l!==(l=(c[28].shortname||c[28].name)+"")&&K(o,l),c[28].hidden?h||(h=re(),h.c(),h.m(d,i)):h&&(h.d(1),h=null),c[28].segments[c[29]].title?u?u.p(c,n):(u=ae(c),u.c(),u.m(d,null)):u&&(u.d(1),u=null)},i(c){g||(O(s.$$.fragment,c),g=!0)},o(c){A(s.$$.fragment,c),g=!1},d(c){c&&b(t),Ie(s),h&&h.d(),u&&u.d()}}}function oe(e){let t,r,s,a=H(new Date(e[20]),"eee ")+"",d,l,o=H(new Date(e[20]),"d")+"",i,_,g;return{c(){t=k("div"),r=k("a"),s=k("span"),d=$(a),l=z(),i=$(o),_=z(),this.h()},l(h){t=D(h,"DIV",{class:!0,style:!0});var u=E(t);r=D(u,"A",{href:!0});var c=E(r);s=D(c,"SPAN",{class:!0});var n=E(s);d=W(n,a),n.forEach(b),l=X(c),i=W(c,o),c.forEach(b),_=X(u),u.forEach(b),this.h()},h(){p(s,"class","hidden md:inline-block"),p(r,"href","/24/day/"+H(new Date(e[20]),"yyyy-MM-dd")),p(t,"class",g="mb-1 uppercase "+(e[0]&&e[0]!==e[20]?"text-gray-400 text-lg":"text-bbw-navy text-lg")),N(t,"width",1/(e[6].length/100)+"%")},m(h,u){M(h,t,u),y(t,r),y(r,s),y(s,d),y(r,l),y(r,i),y(t,_)},p(h,u){u[0]&1&&g!==(g="mb-1 uppercase "+(h[0]&&h[0]!==h[20]?"text-gray-400 text-lg":"text-bbw-navy text-lg"))&&p(t,"class",g)},d(h){h&&b(t)}}}function de(e){let t,r,s,a,d;return{c(){t=k("div"),this.h()},l(l){t=D(l,"DIV",{id:!0,"data-events":!0,"data-score":!0,class:!0,style:!0}),E(t).forEach(b),this.h()},h(){p(t,"id",e[20]+"-"+e[23]),p(t,"data-events",r=e[4][[e[20],e[23]].join(";")].events),p(t,"data-score",s=e[4][[e[20],e[23]].join(";")].score),p(t,"class","md:hover:border md:hover:border-bbw-yellow flex-grow cursor-pointer"),N(t,"width",1/(e[7].length/50)+"%"),N(t,"background-color","rgba("+(!e[0]||e[0]===e[20]?"0, 36, 225":"115, 115, 115")+", "+e[4][[e[20],e[23]].join(";")].perc+"%)")},m(l,o){M(l,t,o),a||(d=[G(t,"click",function(){Z(e[9](e[20],e[23],e[4][[e[20],e[23]].join(";")]))&&e[9](e[20],e[23],e[4][[e[20],e[23]].join(";")]).apply(this,arguments)}),G(t,"mouseenter",function(){Z(e[8](e[20],e[23],e[4][[e[20],e[23]].join(";")]))&&e[8](e[20],e[23],e[4][[e[20],e[23]].join(";")]).apply(this,arguments)}),G(t,"mouseleave",e[10])],a=!0)},p(l,o){e=l,o[0]&16&&r!==(r=e[4][[e[20],e[23]].join(";")].events)&&p(t,"data-events",r),o[0]&16&&s!==(s=e[4][[e[20],e[23]].join(";")].score)&&p(t,"data-score",s),o[0]&17&&N(t,"background-color","rgba("+(!e[0]||e[0]===e[20]?"0, 36, 225":"115, 115, 115")+", "+e[4][[e[20],e[23]].join(";")].perc+"%)")},d(l){l&&b(t),a=!1,Me(d)}}}function fe(e){let t,r,s,a=e[7],d=[];for(let l=0;l<a.length;l+=1)d[l]=de(te(e,a,l));return{c(){t=k("div");for(let l=0;l<d.length;l+=1)d[l].c();r=z(),this.h()},l(l){t=D(l,"DIV",{class:!0,style:!0});var o=E(t);for(let i=0;i<d.length;i+=1)d[i].l(o);r=X(o),o.forEach(b),this.h()},h(){p(t,"class","h-10 flex flex-grow hover:bg-bbw-yellow/20"),p(t,"style",s="width: "+1/(e[6].length/100)+"%; "+(e[0]&&e[0]===e[20]?"border: 1px solid rgb(0, 36, 225);":e[0]?e[6].length-e[22]>1?"border-right: 1px solid silver;":"":"border-right: 1px solid rgb(0, 36, 225);"))},m(l,o){M(l,t,o);for(let i=0;i<d.length;i+=1)d[i].m(t,null);y(t,r)},p(l,o){if(o[0]&2001){a=l[7];let i;for(i=0;i<a.length;i+=1){const _=te(l,a,i);d[i]?d[i].p(_,o):(d[i]=de(_),d[i].c(),d[i].m(t,r))}for(;i<d.length;i+=1)d[i].d(1);d.length=a.length}o[0]&1&&s!==(s="width: "+1/(l[6].length/100)+"%; "+(l[0]&&l[0]===l[20]?"border: 1px solid rgb(0, 36, 225);":l[0]?l[6].length-l[22]>1?"border-right: 1px solid silver;":"":"border-right: 1px solid rgb(0, 36, 225);"))&&p(t,"style",s)},d(l){l&&b(t),F(d,l)}}}function $e(e){let t,r,s,a,d,l,o,i,_=e[1]&&se(e),g=e[6],h=[];for(let n=0;n<g.length;n+=1)h[n]=oe(le(e,g,n));let u=e[6],c=[];for(let n=0;n<u.length;n+=1)c[n]=fe(ee(e,u,n));return{c(){t=k("div"),_&&_.c(),r=z(),s=k("div");for(let n=0;n<h.length;n+=1)h[n].c();d=z(),l=k("div");for(let n=0;n<c.length;n+=1)c[n].c();this.h()},l(n){t=D(n,"DIV",{class:!0});var m=E(t);_&&_.l(m),r=X(m),s=D(m,"DIV",{class:!0});var f=E(s);for(let V=0;V<h.length;V+=1)h[V].l(f);f.forEach(b),d=X(m),l=D(m,"DIV",{class:!0});var j=E(l);for(let V=0;V<c.length;V+=1)c[V].l(j);j.forEach(b),m.forEach(b),this.h()},h(){p(s,"class","flex text-center text-gray-400 text-sm items-end h-10"),he(()=>e[13].call(s)),p(l,"class",o="w-full border "+(e[0]?"border-gray-300":"border-bbw-navy")+" flex"),p(t,"class","w-full mb-10 relative")},m(n,m){M(n,t,m),_&&_.m(t,null),y(t,r),y(t,s);for(let f=0;f<h.length;f+=1)h[f].m(s,null);a=ce(s,e[13].bind(s)),y(t,d),y(t,l);for(let f=0;f<c.length;f+=1)c[f].m(l,null);i=!0},p(n,m){if(n[1]?_?(_.p(n,m),m[0]&2&&O(_,1)):(_=se(n),_.c(),O(_,1),_.m(t,r)):_&&(R(),A(_,1,1,()=>{_=null}),J()),m[0]&65){g=n[6];let f;for(f=0;f<g.length;f+=1){const j=le(n,g,f);h[f]?h[f].p(j,m):(h[f]=oe(j),h[f].c(),h[f].m(s,null))}for(;f<h.length;f+=1)h[f].d(1);h.length=g.length}if(m[0]&2001){u=n[6];let f;for(f=0;f<u.length;f+=1){const j=ee(n,u,f);c[f]?c[f].p(j,m):(c[f]=fe(j),c[f].c(),c[f].m(l,null))}for(;f<c.length;f+=1)c[f].d(1);c.length=u.length}(!i||m[0]&1&&o!==(o="w-full border "+(n[0]?"border-gray-300":"border-bbw-navy")+" flex"))&&p(l,"class",o)},i(n){i||(O(_),i=!0)},o(n){A(_),i=!1},d(n){n&&b(t),_&&_.d(),F(h,n),a(),F(c,n)}}}const Q="2024-05-18",We="2024-05-27",B=60,Ae="09:00-18:00";function Ce(e,t,r){let s,{data:a}=t,{highlightDay:d=!1}=t;const l=a.bundle;let o,i,_=null;const g=[];let h=Q;for(;L(new Date(h),new Date(We))<=0;)g.push(H(new Date(h),"yyyy-MM-dd")),h=x(new Date(h),1);const u=[];let c="00:00";for(;!u.includes(c);)u.push(H(new Date(Q+"T"+c),"HH:mm")),c=H(q(new Date(Q+"T"+c),B),"HH:mm");const n={};for(const v of g)for(const w of u)n[[v,w].join(";")]={score:0,events:[]};function m(v,w,I,S){for(const T of g)for(const C of u){const U=new Date(`${T}T${C}`),ve=new Date(q(U,B));if(L(U,v.end)<0&&L(ve,v.start)>0){const be=I?I>3e3?3e3:I<200?200:I:0,Y=n[[T,C].join(";")];Y.score+=be||0,Y.events.push([w,S])}}}for(const v of l.events)for(let w=0;w<v.segments.length;w++){const I=v.segments[w],[S,T]=(I.times||Ae).split("-"),C={start:new Date(`${I.date}T${S}`),end:new Date(`${T<=S?H(x(new Date(I.date),1),"yyyy-MM-dd"):I.date}T${T}`)};m(C,v.id,I.ecap||v.attendees,w)}const f=Math.max(...Object.keys(n).map(v=>n[v].score));for(const v of Object.keys(n)){const w=n[v];w.perc=w.score/(f/100)}function j(v,w,I){const S=new Date(`${v}T${w}`),T=H(S,"EEEE MMMM d | HH:mm - ")+H(q(S,B),"HH:mm");return C=>{r(1,_={day:v,segment:w,data:I,event:C,title:T})}}function V(v,w,I){const S=new Date(`${v}T${w}`),T=q(S,B);je(`/${a.params.entry}/day/${v}?start=${S.toISOString()}&end=${T.toISOString()}`)}function ue(){r(1,_=null)}function _e(v){return l.events.find(w=>w.id===v)}function me(){o=this.clientWidth,r(2,o)}function ge(){i=this.clientWidth,r(3,i)}return e.$$set=v=>{"data"in v&&r(11,a=v.data),"highlightDay"in v&&r(0,d=v.highlightDay)},e.$$.update=()=>{e.$$.dirty[0]&2&&r(5,s=_?_.data.events.map(v=>[_e(v[0]),v[1]]):[])},[d,_,o,i,n,s,g,u,j,V,ue,a,me,ge]}class Fe extends pe{constructor(t){super(),ye(this,t,Ce,$e,we,{data:11,highlightDay:0},null,[-1,-1])}}export{Fe as T};