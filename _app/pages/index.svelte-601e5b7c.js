import{S as we,i as ke,s as Se,e as m,k as x,t as k,c as g,a as d,m as _,h as S,d as c,b as n,L as Q,g as H,J as l,j as Xe,K as U,M as tt,N as Fa,O as Wa,q as $,w as X,x as ie,y as Z,o as V,B as ee,n as rt,p as st,P as at,v as Ka,Q as ia,R as Ia,l as xt,T as Ua,U as qa,V as _e,W as Ya,X as ye,f as oe}from"../chunks/vendor-7b1c8c16.js";import{b as J}from"../chunks/paths-396f020f.js";import{F as Qa}from"../chunks/Footer-4276d0e4.js";function Xa(o){let e,a,t,s,f,r,i,h,p,E;return{c(){e=m("div"),a=m("img"),f=x(),r=m("h1"),i=k(o[0]),h=x(),p=m("p"),E=k(o[1]),this.h()},l(T){e=g(T,"DIV",{class:!0});var y=d(e);a=g(y,"IMG",{class:!0,alt:!0,src:!0}),f=_(y),r=g(y,"H1",{class:!0});var I=d(r);i=S(I,o[0]),I.forEach(c),h=_(y),p=g(y,"P",{class:!0});var A=d(p);E=S(A,o[1]),A.forEach(c),y.forEach(c),this.h()},h(){n(a,"class","rounded-2xl w-48 h-48 object-cover bg-center"),n(a,"alt",t="Portrait of "+o[0]),Q(a.src,s=o[2])||n(a,"src",s),n(r,"class","text-2xl font-bold mt-4"),n(p,"class","mt-1"),n(e,"class","")},m(T,y){H(T,e,y),l(e,a),l(e,f),l(e,r),l(r,i),l(e,h),l(e,p),l(p,E)},p(T,[y]){y&1&&t!==(t="Portrait of "+T[0])&&n(a,"alt",t),y&4&&!Q(a.src,s=T[2])&&n(a,"src",s),y&1&&Xe(i,T[0]),y&2&&Xe(E,T[1])},i:U,o:U,d(T){T&&c(e)}}}function Za(o,e,a){let{name:t}=e,{description:s}=e,{portraitSrc:f}=e;return o.$$set=r=>{"name"in r&&a(0,t=r.name),"description"in r&&a(1,s=r.description),"portraitSrc"in r&&a(2,f=r.portraitSrc)},[t,s,f]}class er extends we{constructor(e){super();ke(this,e,Za,Xa,Se,{name:0,description:1,portraitSrc:2})}}function tr(o){let e,a,t,s,f,r,i,h,p,E,T,y;return{c(){e=m("div"),a=m("img"),s=x(),f=m("div"),r=m("h4"),i=k(o[0]),h=x(),p=m("button"),E=k("+"),this.h()},l(I){e=g(I,"DIV",{class:!0});var A=d(e);a=g(A,"IMG",{class:!0,src:!0,alt:!0}),s=_(A),f=g(A,"DIV",{class:!0});var F=d(f);r=g(F,"H4",{class:!0});var B=d(r);i=S(B,o[0]),B.forEach(c),h=_(F),p=g(F,"BUTTON",{class:!0});var j=d(p);E=S(j,"+"),j.forEach(c),F.forEach(c),A.forEach(c),this.h()},h(){n(a,"class","max-h-[256px] w-full object-center object-cover rounded-2xl hover:brightness-75 cursor-pointer transition-all duration-100 ease-in-out"),Q(a.src,t=o[1])||n(a,"src",t),n(a,"alt","A team member"),n(r,"class","text font-medium font-mono"),n(p,"class","flex text-center items-center justify-center h-12 w-12 bg-theme-100 hover:bg-theme-200 text-blueberry-800 text-2xl font-bold rounded-2xl"),n(f,"class","flex flex-row h-16 items-center justify-between mt-2"),n(e,"class",o[2])},m(I,A){H(I,e,A),l(e,a),l(e,s),l(e,f),l(f,r),l(r,i),l(f,h),l(f,p),l(p,E),T||(y=[tt(a,"click",o[3]),tt(p,"click",o[3])],T=!0)},p(I,[A]){A&2&&!Q(a.src,t=I[1])&&n(a,"src",t),A&1&&Xe(i,I[0]),A&4&&n(e,"class",I[2])},i:U,o:U,d(I){I&&c(e),T=!1,Fa(y)}}}function ar(o,e,a){let{name:t}=e,{portraitSrc:s}=e,{description:f}=e,{class:r=""}=e;const{open:i}=Wa("simple-modal"),h=()=>i(er,{name:t,portraitSrc:s,description:f});return o.$$set=p=>{"name"in p&&a(0,t=p.name),"portraitSrc"in p&&a(1,s=p.portraitSrc),"description"in p&&a(4,f=p.description),"class"in p&&a(2,r=p.class)},[t,s,r,h,f]}class rr extends we{constructor(e){super();ke(this,e,ar,tr,Se,{name:0,portraitSrc:1,description:4,class:2})}}function sr(o){let e,a,t;return{c(){e=m("a"),a=m("img"),this.h()},l(s){e=g(s,"A",{href:!0,target:!0,rel:!0,class:!0});var f=d(e);a=g(f,"IMG",{alt:!0,src:!0}),f.forEach(c),this.h()},h(){n(a,"alt",o[0]),Q(a.src,t=o[1])||n(a,"src",t),n(e,"href",o[2]),n(e,"target","_blank"),n(e,"rel","noopener"),n(e,"class","w-[225px] h-[125px] flex items-center flex-row mt-2 bg-black p-8 rounded-2xl shrink-0 hover:brightness-75")},m(s,f){H(s,e,f),l(e,a)},p(s,[f]){f&1&&n(a,"alt",s[0]),f&2&&!Q(a.src,t=s[1])&&n(a,"src",t),f&4&&n(e,"href",s[2])},i:U,o:U,d(s){s&&c(e)}}}function nr(o,e,a){let{alt:t}=e,{srcLogo:s}=e,{href:f}=e;return o.$$set=r=>{"alt"in r&&a(0,t=r.alt),"srcLogo"in r&&a(1,s=r.srcLogo),"href"in r&&a(2,f=r.href)},[t,s,f]}class lr extends we{constructor(e){super();ke(this,e,nr,sr,Se,{alt:0,srcLogo:1,href:2})}}function Aa(o,e,a){const t=o.slice();return t[3]=e[a].src,t[4]=e[a].alt,t[5]=e[a].href,t}function ja(o){let e,a,t=o[1],s=[];for(let r=0;r<t.length;r+=1)s[r]=Da(Aa(o,t,r));const f=r=>V(s[r],1,1,()=>{s[r]=null});return{c(){e=m("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=g(r,"DIV",{class:!0});var i=d(e);for(let h=0;h<s.length;h+=1)s[h].l(i);i.forEach(c),this.h()},h(){n(e,"class","flex w-full space-x-4")},m(r,i){H(r,e,i);for(let h=0;h<s.length;h+=1)s[h].m(e,null);a=!0},p(r,i){if(i&2){t=r[1];let h;for(h=0;h<t.length;h+=1){const p=Aa(r,t,h);s[h]?(s[h].p(p,i),$(s[h],1)):(s[h]=Da(p),s[h].c(),$(s[h],1),s[h].m(e,null))}for(rt(),h=t.length;h<s.length;h+=1)f(h);st()}},i(r){if(!a){for(let i=0;i<t.length;i+=1)$(s[i]);a=!0}},o(r){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)V(s[i]);a=!1},d(r){r&&c(e),at(s,r)}}}function Da(o){let e,a;return e=new lr({props:{srcLogo:o[3],alt:o[4],href:o[5]}}),{c(){X(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,s){Z(e,t,s),a=!0},p(t,s){const f={};s&2&&(f.srcLogo=t[3]),s&2&&(f.alt=t[4]),s&2&&(f.href=t[5]),e.$set(f)},i(t){a||($(e.$$.fragment,t),a=!0)},o(t){V(e.$$.fragment,t),a=!1},d(t){ee(e,t)}}}function or(o){let e,a,t,s,f,r,i=o[1]&&o[1].length&&ja(o);return{c(){e=m("div"),a=m("h3"),t=k(o[0]),s=x(),i&&i.c(),this.h()},l(h){e=g(h,"DIV",{class:!0});var p=d(e);a=g(p,"H3",{class:!0});var E=d(a);t=S(E,o[0]),E.forEach(c),s=_(p),i&&i.l(p),p.forEach(c),this.h()},h(){n(a,"class","font-bold text-2xl text-black opacity-50"),n(e,"class",f=o[2]+" w-full py-8 pl-8 md:py-12 md:pl-8 overflow-auto")},m(h,p){H(h,e,p),l(e,a),l(a,t),l(e,s),i&&i.m(e,null),r=!0},p(h,[p]){(!r||p&1)&&Xe(t,h[0]),h[1]&&h[1].length?i?(i.p(h,p),p&2&&$(i,1)):(i=ja(h),i.c(),$(i,1),i.m(e,null)):i&&(rt(),V(i,1,1,()=>{i=null}),st()),(!r||p&4&&f!==(f=h[2]+" w-full py-8 pl-8 md:py-12 md:pl-8 overflow-auto"))&&n(e,"class",f)},i(h){r||($(i),r=!0)},o(h){V(i),r=!1},d(h){h&&c(e),i&&i.d()}}}function ir(o,e,a){let{title:t=""}=e,{cardsData:s=[]}=e,{bg:f}=e;return o.$$set=r=>{"title"in r&&a(0,t=r.title),"cardsData"in r&&a(1,s=r.cardsData),"bg"in r&&a(2,f=r.bg)},[t,s,f]}class cr extends we{constructor(e){super();ke(this,e,ir,or,Se,{title:0,cardsData:1,bg:2})}}function hr(o){let e;return{c(){e=m("div"),this.h()},l(a){e=g(a,"DIV",{class:!0,id:!0}),d(e).forEach(c),this.h()},h(){n(e,"class","w-full h-[400px] rounded-2xl"),n(e,"id","map-canvas")},m(a,t){H(a,e,t)},p:U,i:U,o:U,d(a){a&&c(e)}}}function fr(o,e,a){let{zoom:t=18}=e,{latlng:s={lat:38.895271,lng:-77.069702}}=e;return Ka(async()=>{let f=window.google,r=document.getElementById("map-canvas");r=new f.maps.Map(r,{zoom:t,center:s}),new f.maps.Marker({map:r,position:s,animation:f.maps.Animation.DROP})}),o.$$set=f=>{"zoom"in f&&a(0,t=f.zoom),"latlng"in f&&a(1,s=f.latlng)},[t,s]}class ur extends we{constructor(e){super();ke(this,e,fr,hr,Se,{zoom:0,latlng:1})}}function Ca(o,e,a){const t=o.slice();return t[4]=e[a].href,t[5]=e[a].text,t[6]=e[a].button,t}function $a(o,e,a){const t=o.slice();return t[4]=e[a].href,t[5]=e[a].text,t[6]=e[a].button,t}function Pa(o){let e,a=o[5]+"",t,s,f,r;return{c(){e=m("a"),t=k(a),this.h()},l(i){e=g(i,"A",{href:!0,class:!0});var h=d(e);t=S(h,a),h.forEach(c),this.h()},h(){n(e,"href",s=o[4]),n(e,"class","hover:text-theme-100")},m(i,h){H(i,e,h),l(e,t),f||(r=tt(e,"click",o[3]),f=!0)},p(i,h){h&1&&a!==(a=i[5]+"")&&Xe(t,a),h&1&&s!==(s=i[4])&&n(e,"href",s)},d(i){i&&c(e),f=!1,r()}}}function Ma(o){let e,a=!o[6]&&Pa(o);return{c(){a&&a.c(),e=xt()},l(t){a&&a.l(t),e=xt()},m(t,s){a&&a.m(t,s),H(t,e,s)},p(t,s){t[6]?a&&(a.d(1),a=null):a?a.p(t,s):(a=Pa(t),a.c(),a.m(e.parentNode,e))},d(t){a&&a.d(t),t&&c(e)}}}function Va(o){let e,a=o[5]+"",t,s,f;return{c(){e=m("a"),t=k(a),this.h()},l(r){e=g(r,"A",{href:!0,class:!0});var i=d(e);t=S(i,a),i.forEach(c),this.h()},h(){n(e,"href",s=o[4]),n(e,"class",f="block text-center py-2 px-6 text-blueberry-800 font-bold rounded-2xl w-full lg:w-auto "+o[6].class)},m(r,i){H(r,e,i),l(e,t)},p(r,i){i&1&&a!==(a=r[5]+"")&&Xe(t,a),i&1&&s!==(s=r[4])&&n(e,"href",s),i&1&&f!==(f="block text-center py-2 px-6 text-blueberry-800 font-bold rounded-2xl w-full lg:w-auto "+r[6].class)&&n(e,"class",f)},d(r){r&&c(e)}}}function Ba(o){let e,a=o[6]&&Va(o);return{c(){a&&a.c(),e=xt()},l(t){a&&a.l(t),e=xt()},m(t,s){a&&a.m(t,s),H(t,e,s)},p(t,s){t[6]?a?a.p(t,s):(a=Va(t),a.c(),a.m(e.parentNode,e)):a&&(a.d(1),a=null)},d(t){a&&a.d(t),t&&c(e)}}}function dr(o){let e,a,t,s,f,r,i,h,p,E,T,y,I;var A=o[1]?ia:Ia;function F(v){return{props:{width:"32px",class:"static lg:hidden text-white hover:text-theme-100"}}}A&&(t=new A(F()));let B=o[0],j=[];for(let v=0;v<B.length;v+=1)j[v]=Ma($a(o,B,v));let z=o[0],P=[];for(let v=0;v<z.length;v+=1)P[v]=Ba(Ca(o,z,v));return{c(){e=m("nav"),a=m("div"),t&&X(t.$$.fragment),s=x(),f=m("div"),r=m("div");for(let v=0;v<j.length;v+=1)j[v].c();i=x(),h=m("div");for(let v=0;v<P.length;v+=1)P[v].c();this.h()},l(v){e=g(v,"NAV",{class:!0});var D=d(e);a=g(D,"DIV",{});var b=d(a);t&&ie(t.$$.fragment,b),b.forEach(c),s=_(D),f=g(D,"DIV",{class:!0});var R=d(f);r=g(R,"DIV",{class:!0});var Ve=d(r);for(let W=0;W<j.length;W+=1)j[W].l(Ve);Ve.forEach(c),i=_(R),h=g(R,"DIV",{class:!0});var Be=d(h);for(let W=0;W<P.length;W+=1)P[W].l(Be);Be.forEach(c),R.forEach(c),D.forEach(c),this.h()},h(){n(r,"class","flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 space-x-0 lg:space-x-8"),n(h,"class","flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 space-x-0 lg:space-x-4 w-full"),n(f,"class",p="justify-start flex lg:flex flex-col lg:flex-row items-center mt-8 lg:mt-0 space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 "+(o[1]?"":"hidden")),n(e,"class",E="lg:h-24 px-8 lg:px-12 py-8 text-white text-lg font-black bg-blackberry-800 lg:bg-transparent w-full h-full z-10 lg:static "+(o[1]?"fixed":"static"))},m(v,D){H(v,e,D),l(e,a),t&&Z(t,a,null),l(e,s),l(e,f),l(f,r);for(let b=0;b<j.length;b+=1)j[b].m(r,null);l(f,i),l(f,h);for(let b=0;b<P.length;b+=1)P[b].m(h,null);T=!0,y||(I=tt(a,"click",o[2]),y=!0)},p(v,[D]){if(A!==(A=v[1]?ia:Ia)){if(t){rt();const b=t;V(b.$$.fragment,1,0,()=>{ee(b,1)}),st()}A?(t=new A(F()),X(t.$$.fragment),$(t.$$.fragment,1),Z(t,a,null)):t=null}if(D&9){B=v[0];let b;for(b=0;b<B.length;b+=1){const R=$a(v,B,b);j[b]?j[b].p(R,D):(j[b]=Ma(R),j[b].c(),j[b].m(r,null))}for(;b<j.length;b+=1)j[b].d(1);j.length=B.length}if(D&1){z=v[0];let b;for(b=0;b<z.length;b+=1){const R=Ca(v,z,b);P[b]?P[b].p(R,D):(P[b]=Ba(R),P[b].c(),P[b].m(h,null))}for(;b<P.length;b+=1)P[b].d(1);P.length=z.length}(!T||D&2&&p!==(p="justify-start flex lg:flex flex-col lg:flex-row items-center mt-8 lg:mt-0 space-y-8 lg:space-y-0 space-x-0 lg:space-x-8 "+(v[1]?"":"hidden")))&&n(f,"class",p),(!T||D&2&&E!==(E="lg:h-24 px-8 lg:px-12 py-8 text-white text-lg font-black bg-blackberry-800 lg:bg-transparent w-full h-full z-10 lg:static "+(v[1]?"fixed":"static")))&&n(e,"class",E)},i(v){T||(t&&$(t.$$.fragment,v),T=!0)},o(v){t&&V(t.$$.fragment,v),T=!1},d(v){v&&c(e),t&&ee(t),at(j,v),at(P,v),y=!1,I()}}}function mr(o,e,a){let{navItems:t=[]}=e,s=!1;function f(){a(1,s=!s)}function r(i){i.preventDefault(),a(1,s=!1);const h=i.currentTarget,p=new URL(h.href).hash.replace("#",""),E=document.getElementById(p);window.scrollTo({top:E.offsetTop,behavior:"smooth"})}return o.$$set=i=>{"navItems"in i&&a(0,t=i.navItems)},[t,s,f,r]}class gr extends we{constructor(e){super();ke(this,e,mr,dr,Se,{navItems:0})}}function pr(o){let e,a,t,s,f;return a=new ia({props:{width:"32px"}}),{c(){e=m("button"),X(a.$$.fragment),this.h()},l(r){e=g(r,"BUTTON",{class:!0});var i=d(e);ie(a.$$.fragment,i),i.forEach(c),this.h()},h(){n(e,"class","absolute right-0 mr-6 md:mr-8 rounded-xl bg-black hover:bg-gray-600 text-theme-100 flex items-center justify-center w-12 h-12 text-center")},m(r,i){H(r,e,i),Z(a,e,null),t=!0,s||(f=tt(e,"click",function(){Ua(o[0])&&o[0].apply(this,arguments)}),s=!0)},p(r,[i]){o=r},i(r){t||($(a.$$.fragment,r),t=!0)},o(r){V(a.$$.fragment,r),t=!1},d(r){r&&c(e),ee(a),s=!1,f()}}}function br(o,e,a){let{onClose:t}=e;return o.$$set=s=>{"onClose"in s&&a(0,t=s.onClose)},[t]}class vr extends we{constructor(e){super();ke(this,e,br,pr,Se,{onClose:0})}}var oa={gold:[{src:`${J}/sponsorlogos/eastbanc.png`,alt:"EastBanc Technologies Logo",href:"https://eastbanctech.com/"}],silver:[{src:`${J}/sponsorlogos/janestreet.png`,alt:"Jane Street Logo",href:"https://www.janestreet.com/"}],bronze:[{src:`${J}/sponsorlogos/collinsaero.png`,alt:"Collins Aerospace Logo",href:"https://www.collinsaerospace.com/"},{src:`${J}/sponsorlogos/blueridge.png`,alt:"Blue Ridge Networks Logo",href:"https://www.blueridgenetworks.com/"},{src:`${J}/sponsorlogos/alarmcom.png`,alt:"Alarm.com Logo",href:"https://alarm.com/"}]},Ra=[{name:"Pranav Mathur",description:"Pranav is the Director of HackTJ 9.0. He\u2019s a senior at TJHSST and this is his third year organizing HackTJ after competing his freshman year. Pranav loves spreading his passion for computer science and mathematics, serving as officer of both TJ\u2019s Senior Computing Team and Varsity Math Team. He is also interested in physics and economics and enjoys applying CS to solve problems in these fields. In his free time, Pranav likes to dance with TJ Namaste, play tennis, and play piano.",portraitSrc:`${J}/teamportraits/PranavMathur.JPG`},{name:"Shreya Singh",description:"Shreya is a senior at TJ and is the Assistant Director of HackTJ 9.0. She joined the HackTJ team after her sophomore year, and really looks forward to planning this year\u2019s HackTJ! She is interested in CS and chemistry and serves as the Vice President of Coding Lady Colonials. Shreya also enjoys running in her freetime and is a part of TJ\u2019s cross country and track teams. Outside of school, she enjoys playing the piano, attempting to bake, and watching TV.",portraitSrc:`${J}/teamportraits/ShreyaSingh.JPG`},{name:"Sumanth Ratna",description:"Sumanth is a senior at TJ and has been on the HackTJ team since the end of his freshman year. He is the Director of Technology of HackTJ and he leads judging. Outside of HackTJ, he works on eAbsentee is the Co-Captain of TJ Ethics Bowl, and is the President of Innovations in Concepts of Engineering, among other activities. While he loves to work on civic technology and computational biology projects, he also enjoys playing sports with his friends and listening to music.  ",portraitSrc:`${J}/teamportraits/SumanthRatna.JPG`},{name:"Shreyas Mayya",description:"Shreyas, a senior at TJ, is in his second year on the HackTJ team and excited for this year\u2019s HackTJ! He\u2019s in charge of the HackTJ Devpost and also works on internet/tech, merch/branding, and judging. Shreyas is interested in understanding and creating complex systems, both with and without computers included. Outside of HackTJ, he\u2019s a Science Olympiad co-captain, a lead Student Sysadmin, and involved with TJ\u2019s band program and Latin Honor Society, and in his free time, Shreyas enjoys playing woodwind instruments, playing badminton, and diving down random internet rabbit holes.",portraitSrc:`${J}/teamportraits/ShreyasMayya.JPG`},{name:"Samhita Vinay",description:"Samhita is a senior at TJHSST and is one of the mentors and publicity coordinators at HackTJ. She became a part of the HackTJ team after attending HackTJ in her freshman year, and enjoyed the experience since she is passionate about biology and computer science and the parallels between the two fields. Samhita is also one of the captains of the TJ Science Olympiad Team, and enjoys participating in competitions across the country. In her free time, she enjoys dancing and spending time with her family.",portraitSrc:`${J}/teamportraits/SamhitaVinay.JPG`},{name:"Anika Karparapu",description:"Anika is a senior at TJ and works on internet/tech, merch/branding, and sponsorships. She attended HackTJ her freshman year, had an amazing time, and now this is her second year on the organizing team. To pursue her interests, Anika serves as the Co-President of CyberPatriot, the Chemistry President of Women Interested in Science and Engineering (WISE), and is part of the TJ Latin cult. In her free time, you can find her running, playing with her puppy, or baking.",portraitSrc:`${J}/teamportraits/AnikaKarparapu.JPG`},{name:"Arjun Jagannathan",description:"Arjun is a senior at TJ and leads sponsorship outreach, helps organize workshops, and arranges guest speaker panels. He is in his second year on the organizing team. Arjun is passionate about business, specifically finance, and aims to explore the intersection between finance and computer science. He currently serves as the President of the Investment Club, the Vice President of the Consulting Club, and participates in other business-oriented extracurriculars. Arjun loves to play basketball and soccer, listen to music, and trade stocks in his free time. ",portraitSrc:`${J}/teamportraits/ArjunJagannathan.JPG`},{name:"Autin Mitra",description:"Autin is a senior at TJ who is working on the web redesign, and is excited to be part of the event. He\u2019s competed and enjoyed HackTJ for multiple years - ever since HackTJ 6.0. Autin hopes to be able to help put together a cohesive experience for HackTJ attendees and help the event excel. Autin likes to bike and 3d model in his free time.",portraitSrc:`${J}/teamportraits/AutinMitra.JPG`},{name:"Simrith Ranjan",description:"Simrith is a junior at TJHSST. This year is her first on the HackTJ team after competing at HackTJ as a sophomore and she is excited to plan HackTJ 9.0. She continues to find her interest in computer science, math, and business by looking for learning opportunities in her fields of interest. Outside of HackTJ, she is an active member of student government, congressional debate, MUN, and Relay for Life. She is part of the TJ track and field team and TJ field hockey. In her free time, Simrith loves to run, play field hockey, practice Bollywood dance, and binge shows on Netflix.",portraitSrc:`${J}/teamportraits/SimrithRanjan.JPG`},{name:"Taein Kim",description:"Taein is a junior at TJ, and this is his first year on the HackTJ team. He was inspired by the amount of creativity in HackTJ 7.5 and decided to join the crew; he is in charge of judging, registration, and volunteer coordination. Taein holds interest in competitive programming, machine learning, and math; outside of HackTJ, he is a member of the TJ Varsity Math Team, Senior Computer Team, and is a trumpet player in marching band. Some of his hobbies are listening to music, playing basketball, or swimming in the local RECenter.",portraitSrc:`${J}/teamportraits/TaeinKim.JPG`},{name:"Ananya Pamal",description:"Ananya is a sophomore at TJ and this is her first year on the HackTJ team. She really enjoyed competing in Hack TJ her freshman year and is excited to help organize this year\u2019s Hack TJ event! She is interested in astrophysics and cs. In her free time, Ananya enjoys dancing, reading, and baking.",portraitSrc:`${J}/teamportraits/AnanyaPamal.JPG`},{name:"Krishnan Shankar",description:"Krishnan is a sophomore at TJ, and this is his first year on the HackTJ team. He really enjoyed attending HackTJ multiple times in the past year, and he really wants to contribute to make it an awesome experience! Krishnan is very interested in programming, especially with websites, tools, games, and bots. In his free time, he likes to bike around town, swim casually, and play chess with his friends.",portraitSrc:`${J}/teamportraits/KrishnanShankar.JPG`},{name:"Lindsay Hwang",description:"Lindsay is a sophomore at TJ, and this is her first year on the HackTJ team after competing in HackTJ as a freshman. She is interested in CS and engineering, as well as math. In her free time, Lindsay enjoys running and takes part in both the TJ track and cross country teams. Outside of running, she also likes to cook, binge TV shows, and bike.",portraitSrc:`${J}/teamportraits/LindsayHwang.JPG`},{name:"Vidhi Sharma",description:"Vidhi is a sophomore at TJ, and this is her first year on the Hack TJ team after having an amazing time competing during her freshman year. She is interested in CS and biology, and loves all the connections between the two fields. She is a member of TJ HOSA, FPS, and USABO. She also partakes in the TJ basketball and theater programs. Outside of school, Vidhi loves playing the guitar and spending time outdoors.",portraitSrc:`${J}/teamportraits/VidhiSharma.JPG`},{name:"Ms. Razzino",description:"Ms. Razzino is a Math Teacher at TJ and also the faculty sponsor of HackTJ. She was the Division Manager for Math and Computer Science at TJ for 5 years and gained an understanding and appreciation for computer science during that time. She also attended TJ back in the late 1990s and fondly remembers her Foundations of CS class. When not creating tests and grading papers, Ms. Razzino enjoys baking, skiing, travelling, and spending time with family and friends.",portraitSrc:`${J}/teamportraits/MsRazzino.JPG`}];const xr="AIzaSyDmX0JhnwxUOSSKLjfxMxoFbwljPsSMi7Y";function za(o,e,a){const t=o.slice();return t[5]=e[a].description,t[6]=e[a].portraitSrc,t[7]=e[a].name,t}function Ga(o,e,a){const t=o.slice();return t[10]=e[a].bg,t[11]=e[a].cards,t[12]=e[a].title,t}function La(o){let e,a;return e=new cr({props:{bg:o[10],cardsData:o[11],title:o[12]}}),{c(){X(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,s){Z(e,t,s),a=!0},p:U,i(t){a||($(e.$$.fragment,t),a=!0)},o(t){V(e.$$.fragment,t),a=!1},d(t){ee(e,t)}}}function Oa(o){let e,a;return e=new rr({props:{description:o[5],portraitSrc:o[6],name:o[7]}}),{c(){X(e.$$.fragment)},l(t){ie(e.$$.fragment,t)},m(t,s){Z(e,t,s),a=!0},p:U,i(t){a||($(e.$$.fragment,t),a=!0)},o(t){V(e.$$.fragment,t),a=!1},d(t){ee(e,t)}}}function _r(o){let e,a,t=Ra,s=[];for(let r=0;r<t.length;r+=1)s[r]=Oa(za(o,t,r));const f=r=>V(s[r],1,1,()=>{s[r]=null});return{c(){e=m("div");for(let r=0;r<s.length;r+=1)s[r].c();this.h()},l(r){e=g(r,"DIV",{class:!0});var i=d(e);for(let h=0;h<s.length;h+=1)s[h].l(i);i.forEach(c),this.h()},h(){n(e,"class","mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8")},m(r,i){H(r,e,i);for(let h=0;h<s.length;h+=1)s[h].m(e,null);a=!0},p(r,i){if(i&0){t=Ra;let h;for(h=0;h<t.length;h+=1){const p=za(r,t,h);s[h]?(s[h].p(p,i),$(s[h],1)):(s[h]=Oa(p),s[h].c(),$(s[h],1),s[h].m(e,null))}for(rt(),h=t.length;h<s.length;h+=1)f(h);st()}},i(r){if(!a){for(let i=0;i<t.length;i+=1)$(s[i]);a=!0}},o(r){s=s.filter(Boolean);for(let i=0;i<s.length;i+=1)V(s[i]);a=!1},d(r){r&&c(e),at(s,r)}}}function yr(o){let e,a,t,s,f,r,i,h,p,E,T,y,I,A,F,B,j,z,P,v,D,b,R,Ve,Be,W,_t,ce,Te,yt,wt,Je,kt,St,Ee,ca,Tt,he,q,te,Re,Jt,G,ae,re,se,ne,nt,L,He,Et,ze,Ht,It,fe,Ge,At,jt,Le,Dt,Ct,ue,Ie,$t,Pt,Ae,Mt,lt,K,de,Oe,Vt,Bt,Y,Rt,je,zt,Gt,De,Lt,Ot,Nt,ot,O,Ne,Ft,Wt,Fe,Kt,Ut,me,it,ge,pe,N,We,qt,Yt,Ke,Qt,Xt,Ue,Zt,ea,le,ta,aa,Ce,ct,$e,ht;s=new gr({props:{navItems:o[1]}});let Pe=o[0],C=[];for(let u=0;u<Pe.length;u+=1)C[u]=La(Ga(o,Pe,u));const Na=u=>V(C[u],1,1,()=>{C[u]=null});return me=new qa({props:{unstyled:!0,classBg:"fixed top-0 left-0 w-screen h-screen flex flex-col justify-center bg-blackberry-800/[0.8] z-10",classWindowWrap:"relative m-4 max-h-full",classWindow:"rounded-2xl bg-theme-100 text-black p-6 md:p-8 max-w-xl max-h-full m-auto relative",closeButton:vr,$$slots:{default:[_r]},$$scope:{ctx:o}}}),Ce=new ur({}),$e=new Qa({props:{class:"mt-8"}}),{c(){e=m("script"),t=x(),X(s.$$.fragment),f=x(),r=m("a"),i=m("img"),p=x(),E=m("div"),T=m("div"),y=m("div"),I=m("img"),F=x(),B=m("div"),j=k(`HackTJ
				
				`),z=m("sup"),P=k("9.0"),v=x(),D=m("h3"),b=m("span"),R=k("April 16-17, Yext Rosslyn"),Ve=x(),Be=m("br"),W=k(`
				Build the next greatest thing - oh, and bring your friends along too.`),_t=x(),ce=m("div"),Te=m("a"),yt=k("Register"),wt=x(),Je=m("a"),kt=k("Schedule"),St=x(),Ee=m("img"),Tt=x(),he=m("div"),q=_e("svg"),te=_e("rect"),Re=_e("path"),Jt=x(),G=_e("svg"),ae=_e("rect"),re=_e("rect"),se=_e("rect"),ne=_e("rect"),nt=x(),L=m("section"),He=m("h1"),Et=k("Welcome to the Future Generation of "),ze=m("span"),Ht=k("Coders"),It=x(),fe=m("div"),Ge=m("p"),At=k(`Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or
			create an Amazon Alexa skill? Program a drone? Create programs using the latest machine
			learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing
			projects, attend workshops to learn new tricks, and have a fantastic time!`),jt=x(),Le=m("p"),Dt=k(`HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or
			work with your friends to make your idea come to life. HackTJ is open to any and all current
			high school students. If you're not a high school student but would like to attend, consider
			coming as a judge, mentor, or volunteer.`),Ct=x(),ue=m("div"),Ie=m("a"),$t=k("FAQ"),Pt=x(),Ae=m("a"),Mt=k("Beginner Resources"),lt=x(),K=m("section"),de=m("div"),Oe=m("h1"),Vt=k("Sponsors"),Bt=x(),Y=m("h3"),Rt=k("Interested in sponsoring? Check out our "),je=m("a"),zt=k("9.0 sponsorship packet"),Gt=k(`
			or email us at
			`),De=m("a"),Lt=k("sponsor@hacktj.org"),Ot=k(` if
			you're interested or have any questions!`),Nt=x();for(let u=0;u<C.length;u+=1)C[u].c();ot=x(),O=m("section"),Ne=m("h1"),Ft=k("Meet The Team"),Wt=x(),Fe=m("h3"),Kt=k("Hello, us!"),Ut=x(),X(me.$$.fragment),it=x(),ge=m("section"),pe=m("div"),N=m("div"),We=m("h1"),qt=k("Location"),Yt=x(),Ke=m("h3"),Qt=k("Yext Rosslyn"),Xt=x(),Ue=m("h3"),Zt=k("1101 Wilson Blvd, Arlington, VA 22209"),ea=x(),le=m("a"),ta=k("Open in Google Maps"),aa=x(),X(Ce.$$.fragment),ct=x(),X($e.$$.fragment),this.h()},l(u){const w=Ya('[data-svelte="svelte-15xtez0"]',document.head);e=g(w,"SCRIPT",{src:!0});var be=d(e);be.forEach(c),w.forEach(c),t=_(u),ie(s.$$.fragment,u),f=_(u),r=g(u,"A",{id:!0,style:!0,href:!0,target:!0});var M=d(r);i=g(M,"IMG",{src:!0,alt:!0,style:!0}),M.forEach(c),p=_(u),E=g(u,"DIV",{class:!0});var Me=d(E);T=g(Me,"DIV",{class:!0});var ft=d(T);y=g(ft,"DIV",{class:!0});var ve=d(y);I=g(ve,"IMG",{alt:!0,src:!0,class:!0}),F=_(ve),B=g(ve,"DIV",{class:!0});var ra=d(B);j=S(ra,`HackTJ
				
				`),z=g(ra,"SUP",{class:!0});var ha=d(z);P=S(ha,"9.0"),ha.forEach(c),ra.forEach(c),v=_(ve),D=g(ve,"H3",{class:!0});var Ze=d(D);b=g(Ze,"SPAN",{class:!0});var fa=d(b);R=S(fa,"April 16-17, Yext Rosslyn"),fa.forEach(c),Ve=_(Ze),Be=g(Ze,"BR",{}),W=S(Ze,`
				Build the next greatest thing - oh, and bring your friends along too.`),Ze.forEach(c),_t=_(ve),ce=g(ve,"DIV",{class:!0});var ut=d(ce);Te=g(ut,"A",{href:!0,class:!0});var ua=d(Te);yt=S(ua,"Register"),ua.forEach(c),wt=_(ut),Je=g(ut,"A",{href:!0,class:!0});var da=d(Je);kt=S(da,"Schedule"),da.forEach(c),ut.forEach(c),ve.forEach(c),St=_(ft),Ee=g(ft,"IMG",{alt:!0,src:!0,class:!0}),ft.forEach(c),Tt=_(Me),he=g(Me,"DIV",{class:!0});var dt=d(he);q=ye(dt,"svg",{class:!0,viewBox:!0,fill:!0,xmlns:!0});var sa=d(q);te=ye(sa,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(te).forEach(c),Re=ye(sa,"path",{d:!0,fill:!0}),d(Re).forEach(c),sa.forEach(c),Jt=_(dt),G=ye(dt,"svg",{class:!0,viewBox:!0,fill:!0,xmlns:!0});var et=d(G);ae=ye(et,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(ae).forEach(c),re=ye(et,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(re).forEach(c),se=ye(et,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(se).forEach(c),ne=ye(et,"rect",{x:!0,width:!0,height:!0,rx:!0,fill:!0}),d(ne).forEach(c),et.forEach(c),dt.forEach(c),Me.forEach(c),nt=_(u),L=g(u,"SECTION",{class:!0,id:!0});var qe=d(L);He=g(qe,"H1",{class:!0});var na=d(He);Et=S(na,"Welcome to the Future Generation of "),ze=g(na,"SPAN",{class:!0});var ma=d(ze);Ht=S(ma,"Coders"),ma.forEach(c),na.forEach(c),It=_(qe),fe=g(qe,"DIV",{class:!0});var mt=d(fe);Ge=g(mt,"P",{class:!0});var ga=d(Ge);At=S(ga,`Do you get excited watching your ideas come to life? Ever wanted to build the next Snapchat or
			create an Amazon Alexa skill? Program a drone? Create programs using the latest machine
			learning or virtual reality technology? Come to HackTJ to make new friends, build mind-blowing
			projects, attend workshops to learn new tricks, and have a fantastic time!`),ga.forEach(c),jt=_(mt),Le=g(mt,"P",{class:!0});var pa=d(Le);Dt=S(pa,`HackTJ is a student-run hackathon where you will have 24 hours to learn how to code and/or
			work with your friends to make your idea come to life. HackTJ is open to any and all current
			high school students. If you're not a high school student but would like to attend, consider
			coming as a judge, mentor, or volunteer.`),pa.forEach(c),mt.forEach(c),Ct=_(qe),ue=g(qe,"DIV",{class:!0});var gt=d(ue);Ie=g(gt,"A",{href:!0,class:!0});var ba=d(Ie);$t=S(ba,"FAQ"),ba.forEach(c),Pt=_(gt),Ae=g(gt,"A",{href:!0,class:!0});var va=d(Ae);Mt=S(va,"Beginner Resources"),va.forEach(c),gt.forEach(c),qe.forEach(c),lt=_(u),K=g(u,"SECTION",{class:!0,id:!0});var pt=d(K);de=g(pt,"DIV",{class:!0});var bt=d(de);Oe=g(bt,"H1",{class:!0});var xa=d(Oe);Vt=S(xa,"Sponsors"),xa.forEach(c),Bt=_(bt),Y=g(bt,"H3",{class:!0});var Ye=d(Y);Rt=S(Ye,"Interested in sponsoring? Check out our "),je=g(Ye,"A",{class:!0,href:!0});var _a=d(je);zt=S(_a,"9.0 sponsorship packet"),_a.forEach(c),Gt=S(Ye,`
			or email us at
			`),De=g(Ye,"A",{class:!0,href:!0});var ya=d(De);Lt=S(ya,"sponsor@hacktj.org"),ya.forEach(c),Ot=S(Ye,` if
			you're interested or have any questions!`),Ye.forEach(c),bt.forEach(c),Nt=_(pt);for(let la=0;la<C.length;la+=1)C[la].l(pt);pt.forEach(c),ot=_(u),O=g(u,"SECTION",{class:!0,id:!0});var Qe=d(O);Ne=g(Qe,"H1",{class:!0});var wa=d(Ne);Ft=S(wa,"Meet The Team"),wa.forEach(c),Wt=_(Qe),Fe=g(Qe,"H3",{class:!0});var ka=d(Fe);Kt=S(ka,"Hello, us!"),ka.forEach(c),Ut=_(Qe),ie(me.$$.fragment,Qe),Qe.forEach(c),it=_(u),ge=g(u,"SECTION",{class:!0,id:!0});var Sa=d(ge);pe=g(Sa,"DIV",{class:!0});var vt=d(pe);N=g(vt,"DIV",{class:!0});var xe=d(N);We=g(xe,"H1",{class:!0});var Ta=d(We);qt=S(Ta,"Location"),Ta.forEach(c),Yt=_(xe),Ke=g(xe,"H3",{class:!0});var Ja=d(Ke);Qt=S(Ja,"Yext Rosslyn"),Ja.forEach(c),Xt=_(xe),Ue=g(xe,"H3",{class:!0});var Ea=d(Ue);Zt=S(Ea,"1101 Wilson Blvd, Arlington, VA 22209"),Ea.forEach(c),ea=_(xe),le=g(xe,"A",{href:!0,target:!0,rel:!0,class:!0});var Ha=d(le);ta=S(Ha,"Open in Google Maps"),Ha.forEach(c),xe.forEach(c),aa=_(vt),ie(Ce.$$.fragment,vt),vt.forEach(c),Sa.forEach(c),ct=_(u),ie($e.$$.fragment,u),this.h()},h(){e.defer=!0,e.async=!0,Q(e.src,a="https://maps.googleapis.com/maps/api/js?key="+xr)||n(e,"src",a),Q(i.src,h="https://s3.amazonaws.com/logged-assets/trust-badge/2022/mlh-trust-badge-2022-white.svg")||n(i,"src",h),n(i,"alt","Major League Hacking 2022 Hackathon Season"),oe(i,"width","100%"),n(r,"id","mlh-trust-badge"),oe(r,"display","block"),oe(r,"max-width","100px"),oe(r,"min-width","60px"),oe(r,"position","fixed"),oe(r,"right","50px"),oe(r,"top","0"),oe(r,"width","10%"),oe(r,"z-index","10000"),n(r,"href","https://mlh.io/seasons/2022/events?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2022-season&utm_content=white"),n(r,"target","_blank"),n(I,"alt","TJHSST Dome"),Q(I.src,A=J+"/dome.svg")||n(I,"src",A),n(I,"class","block lg:hidden mb-3 w-24 h-24"),n(z,"class","text-3xl md:text-4xl font-mono align-super text-theme-100"),n(B,"class","text-white font-bold text-6xl md:text-8xl"),n(b,"class","text-theme-100 font-bold"),n(D,"class","text-white font-medium text-xl md:text-2xl w-3/4"),n(Te,"href",J+"/register"),n(Te,"class","block text-center py-3 bg-theme-100 hover:bg-theme-200 text-blueberry-800 text-xl font-bold rounded-2xl"),n(Je,"href",J+"/schedule"),n(Je,"class","block mt-2 text-center py-3 bg-spruce-100 hover:bg-spruce-200 text-blueberry-800 text-xl font-bold rounded-2xl"),n(ce,"class","inline-block mt-3 w-48"),n(y,"class","flex flex-col"),n(Ee,"alt","TJHSST Dome"),Q(Ee.src,ca=J+"/dome.svg")||n(Ee,"src",ca),n(Ee,"class","hidden lg:flex self-end max-h-full"),n(T,"class","flex justify-start lg:justify-around items-center mt-18 px-8 md:px-12 h-[calc(100%_-_8rem)]"),n(te,"x","-326"),n(te,"width","599"),n(te,"height","61"),n(te,"rx","30.5"),n(te,"fill","#FE5F55"),n(Re,"d","M321 30.5C321 13.6553 334.655 0 351.5 0H1441V61H351.5C334.655 61 321 47.3447 321 30.5V30.5Z"),n(Re,"fill","#737AB0"),n(q,"class","-mt-1 mb-2 md:mb-6"),n(q,"viewBox","0 0 1440 61"),n(q,"fill","none"),n(q,"xmlns","http://www.w3.org/2000/svg"),n(ae,"x","-323"),n(ae,"width","470"),n(ae,"height","61"),n(ae,"rx","30.5"),n(ae,"fill","#F3F7F0"),n(re,"x","195"),n(re,"width","271"),n(re,"height","61"),n(re,"rx","30.5"),n(re,"fill","#B8DBD9"),n(se,"x","514"),n(se,"width","458"),n(se,"height","61"),n(se,"rx","30.5"),n(se,"fill","#FB6376"),n(ne,"x","1020"),n(ne,"width","599"),n(ne,"height","61"),n(ne,"rx","30.5"),n(ne,"fill","#FED049"),n(G,"class","mb-6"),n(G,"viewBox","0 0 1440 61"),n(G,"fill","none"),n(G,"xmlns","http://www.w3.org/2000/svg"),n(he,"class","w-full absolute bottom-0 lg:w-auto lg:relative"),n(E,"class","h-[calc(100vh_-_8rem)] min-h-[512px]"),n(ze,"class","text-theme-100"),n(He,"class","text-4xl md:text-6xl lg:text-7xl font-black"),n(Ge,"class","flex-1"),n(Le,"class","flex-1"),n(fe,"class","flex flex-col lg:flex-row mt-4 text-lg space-y-8 lg:space-y-0 lg:space-x-8"),n(Ie,"href",J+"/faq"),n(Ie,"class","block text-center py-3 bg-theme-100 text-blueberry-800 text-xl font-bold rounded-2xl px-8 hover:bg-theme-200"),n(Ae,"href",J+"/resources"),n(Ae,"class","block text-center py-3 bg-blueberry-200 text-blueberry-800 text-xl font-bold rounded-2xl px-8 hover:bg-blueberry-300"),n(ue,"class","flex flex-col md:flex-row mt-6 space-y-3 md:space-y-0 space-x-0 md:space-x-3"),n(L,"class","mt-8 p-8 md:p-12 text-blueberry-200"),n(L,"id","about"),n(Oe,"class","text-4xl md:text-6xl font-black text-white"),n(je,"class","underline text-theme-100"),n(je,"href",J+"/sponsorship9.0.pdf"),n(De,"class","underline text-theme-100"),n(De,"href","mailto:sponsor@hacktj.org"),n(Y,"class","mt-2 text-xl md:text-2xl font-bold text-blueberry-200"),n(de,"class","p-8 md:p-12"),n(K,"class","mt-6 text-blueberry-200"),n(K,"id","sponsors"),n(Ne,"class","text-4xl md:text-6xl font-black text-white"),n(Fe,"class","mt-2 text-xl md:text-2xl font-bold text-blueberry-200"),n(O,"class","mt-6 text-blueberry-200 p-8 md:p-12"),n(O,"id","team"),n(We,"class","text-5xl md:text-7xl font-black text-white"),n(Ke,"class","text-xl font-black text-white mt-3"),n(Ue,"class","font-medium text-white mt-1"),n(le,"href","https://goo.gl/maps/DhX17rUhG27cAH9SA"),n(le,"target","_blank"),n(le,"rel","noopener noreferred"),n(le,"class","block mt-4 text-center py-3 bg-theme-100 hover:bg-theme-200 text-blueberry-800 text-xl font-bold rounded-2xl"),n(N,"class","w-full lg:w-2/3"),n(pe,"class","flex flex-col lg:flex-row items-center justify-center lg:space-x-32 space-y-6 lg:space-y-0 m-auto"),n(ge,"class","mt-6 text-blueberry-200 p-8 md:p-12"),n(ge,"id","location")},m(u,w){l(document.head,e),H(u,t,w),Z(s,u,w),H(u,f,w),H(u,r,w),l(r,i),H(u,p,w),H(u,E,w),l(E,T),l(T,y),l(y,I),l(y,F),l(y,B),l(B,j),l(B,z),l(z,P),l(y,v),l(y,D),l(D,b),l(b,R),l(D,Ve),l(D,Be),l(D,W),l(y,_t),l(y,ce),l(ce,Te),l(Te,yt),l(ce,wt),l(ce,Je),l(Je,kt),l(T,St),l(T,Ee),l(E,Tt),l(E,he),l(he,q),l(q,te),l(q,Re),l(he,Jt),l(he,G),l(G,ae),l(G,re),l(G,se),l(G,ne),H(u,nt,w),H(u,L,w),l(L,He),l(He,Et),l(He,ze),l(ze,Ht),l(L,It),l(L,fe),l(fe,Ge),l(Ge,At),l(fe,jt),l(fe,Le),l(Le,Dt),l(L,Ct),l(L,ue),l(ue,Ie),l(Ie,$t),l(ue,Pt),l(ue,Ae),l(Ae,Mt),H(u,lt,w),H(u,K,w),l(K,de),l(de,Oe),l(Oe,Vt),l(de,Bt),l(de,Y),l(Y,Rt),l(Y,je),l(je,zt),l(Y,Gt),l(Y,De),l(De,Lt),l(Y,Ot),l(K,Nt);for(let be=0;be<C.length;be+=1)C[be].m(K,null);H(u,ot,w),H(u,O,w),l(O,Ne),l(Ne,Ft),l(O,Wt),l(O,Fe),l(Fe,Kt),l(O,Ut),Z(me,O,null),H(u,it,w),H(u,ge,w),l(ge,pe),l(pe,N),l(N,We),l(We,qt),l(N,Yt),l(N,Ke),l(Ke,Qt),l(N,Xt),l(N,Ue),l(Ue,Zt),l(N,ea),l(N,le),l(le,ta),l(pe,aa),Z(Ce,pe,null),H(u,ct,w),Z($e,u,w),ht=!0},p(u,[w]){if(w&1){Pe=u[0];let M;for(M=0;M<Pe.length;M+=1){const Me=Ga(u,Pe,M);C[M]?(C[M].p(Me,w),$(C[M],1)):(C[M]=La(Me),C[M].c(),$(C[M],1),C[M].m(K,null))}for(rt(),M=Pe.length;M<C.length;M+=1)Na(M);st()}const be={};w&32768&&(be.$$scope={dirty:w,ctx:u}),me.$set(be)},i(u){if(!ht){$(s.$$.fragment,u);for(let w=0;w<Pe.length;w+=1)$(C[w]);$(me.$$.fragment,u),$(Ce.$$.fragment,u),$($e.$$.fragment,u),ht=!0}},o(u){V(s.$$.fragment,u),C=C.filter(Boolean);for(let w=0;w<C.length;w+=1)V(C[w]);V(me.$$.fragment,u),V(Ce.$$.fragment,u),V($e.$$.fragment,u),ht=!1},d(u){c(e),u&&c(t),ee(s,u),u&&c(f),u&&c(r),u&&c(p),u&&c(E),u&&c(nt),u&&c(L),u&&c(lt),u&&c(K),at(C,u),u&&c(ot),u&&c(O),ee(me),u&&c(it),u&&c(ge),ee(Ce),u&&c(ct),ee($e,u)}}}function wr(o){const e={title:"GOLD TIER",bg:"bg-[#D6B570]",cards:oa.gold},a={title:"SILVER TIER",bg:"bg-[#C9D4E5]",cards:oa.silver},t={title:"BRONZE TIER",bg:"bg-[#AF7A6D]",cards:oa.bronze},s=[e,a,t],f=[{text:"About",href:"#about"},{text:"Sponsors",href:"#sponsors"},{text:"Team",href:"#team"},{text:"Location",href:"#location"},{text:"FAQ",href:`${J}/faq`,button:{class:"bg-theme-100 hover:bg-theme-200"}},{text:"Schedule",href:`${J}/schedule`,button:{class:"bg-spruce-200 hover:bg-spruce-300"}},{text:"Resources",href:`${J}/resources`,button:{class:"bg-blueberry-200 hover:bg-blueberry-300"}}];return[s,f]}class Jr extends we{constructor(e){super();ke(this,e,wr,yr,Se,{})}}export{Jr as default};
