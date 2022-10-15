"use strict";(()=>{function m(){}function j(t){return t()}function I(){return Object.create(null)}function g(t){t.forEach(j)}function x(t){return typeof t=="function"}function G(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function W(t){return Object.keys(t).length===0}function T(t){return t&&x(t.destroy)?t.destroy:m}var U=!1;function it(){U=!0}function st(){U=!1}function y(t,e){t.appendChild(e)}function F(t,e,n){t.insertBefore(e,n||null)}function b(t){t.parentNode.removeChild(t)}function V(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function w(t){return document.createElement(t)}function $(t){return document.createTextNode(t)}function D(){return $(" ")}function X(){return $("")}function v(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function p(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function rt(t){return Array.from(t.childNodes)}function R(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function q(t,e,n){t.classList[n?"add":"remove"](e)}var L;function E(t){L=t}var k=[];var z=[],A=[],H=[],ot=Promise.resolve(),M=!1;function ct(){M||(M=!0,ot.then(Y))}function N(t){A.push(t)}var C=new Set,S=0;function Y(){let t=L;do{for(;S<k.length;){let e=k[S];S++,E(e),lt(e.$$)}for(E(null),k.length=0,S=0;z.length;)z.pop()();for(let e=0;e<A.length;e+=1){let n=A[e];C.has(n)||(C.add(n),n())}A.length=0}while(k.length);for(;H.length;)H.pop()();M=!1,C.clear(),E(t)}function lt(t){if(t.fragment!==null){t.update(),g(t.before_update);let e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}var ut=new Set;function ft(t,e){t&&t.i&&(ut.delete(t),t.i(e))}var wt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function at(t,e,n,i){let{fragment:c,after_update:_}=t.$$;c&&c.m(e,n),i||N(()=>{let s=t.$$.on_mount.map(j).filter(x);t.$$.on_destroy?t.$$.on_destroy.push(...s):g(s),t.$$.on_mount=[]}),_.forEach(N)}function K(t,e){let n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function dt(t,e){t.$$.dirty[0]===-1&&(k.push(t),ct(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function J(t,e,n,i,c,_,s,l=[-1]){let d=L;E(t);let r=t.$$={fragment:null,ctx:[],props:_,update:m,not_equal:c,bound:I(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(d?d.$$.context:[])),callbacks:I(),dirty:l,skip_bound:!1,root:e.target||d.$$.root};s&&s(r.root);let f=!1;if(r.ctx=n?n(t,e.props||{},(o,h,...u)=>{let a=u.length?u[0]:h;return r.ctx&&c(r.ctx[o],r.ctx[o]=a)&&(!r.skip_bound&&r.bound[o]&&r.bound[o](a),f&&dt(t,o)),h}):[],r.update(),f=!0,g(r.before_update),r.fragment=i?i(r.ctx):!1,e.target){if(e.hydrate){it();let o=rt(e.target);r.fragment&&r.fragment.l(o),o.forEach(b)}else r.fragment&&r.fragment.c();e.intro&&ft(t.$$.fragment),at(t,e.target,e.anchor,e.customElement),st(),Y()}E(d)}var _t;typeof HTMLElement=="function"&&(_t=class extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"})}connectedCallback(){let{on_mount:t}=this.$$;this.$$.on_disconnect=t.map(j).filter(x);for(let e in this.$$.slotted)this.appendChild(this.$$.slotted[e])}attributeChangedCallback(t,e,n){this[t]=n}disconnectedCallback(){g(this.$$.on_disconnect)}$destroy(){K(this,1),this.$destroy=m}$on(t,e){if(!x(e))return m;let n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{let i=n.indexOf(e);i!==-1&&n.splice(i,1)}}$set(t){this.$$set&&!W(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}});var O=class{$destroy(){K(this,1),this.$destroy=m}$on(e,n){if(!x(n))return m;let i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(n),()=>{let c=i.indexOf(n);c!==-1&&i.splice(c,1)}}$set(e){this.$$set&&!W(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}};function Q(t,e,n){let i=t.slice();return i[11]=e[n],i[13]=n,i}function Z(t){let e,n,i,c,_,s,l,d,r=t[0],f=[];for(let o=0;o<r.length;o+=1)f[o]=tt(Q(t,r,o));return{c(){e=w("div"),n=w("div"),i=w("input"),_=D();for(let o=0;o<f.length;o+=1)f[o].c();p(i,"class","search__field"),p(i,"type","search"),p(i,"placeholder","Search composers by last name"),p(n,"class","search"),p(e,"class","search-wrapper")},m(o,h){F(o,e,h),y(e,n),y(n,i),y(n,_);for(let u=0;u<f.length;u+=1)f[u].m(n,null);l||(d=[v(i,"input",t[6]),T(c=mt.call(null,i)),T(s=yt.call(null,n,t[4])),v(e,"keydown",t[5])],l=!0)},p(o,h){if(h&133){r=o[0];let u;for(u=0;u<r.length;u+=1){let a=Q(o,r,u);f[u]?f[u].p(a,h):(f[u]=tt(a),f[u].c(),f[u].m(n,null))}for(;u<f.length;u+=1)f[u].d(1);f.length=r.length}},d(o){o&&b(e),V(f,o),l=!1,g(d)}}}function tt(t){let e,n,i=t[11].lastName+"",c,_,s=t[11].firstName+"",l,d,r,f,o;function h(){return t[8](t[13])}return{c(){e=w("a"),n=w("div"),c=$(i),_=$(", "),l=$(s),d=D(),p(n,"class","search__result"),q(n,"search__result_selected",t[2]===t[13]),p(e,"href",r="/composer/"+t[11].slug)},m(u,a){F(u,e,a),y(e,n),y(n,c),y(n,_),y(n,l),y(e,d),f||(o=v(e,"mouseenter",h),f=!0)},p(u,a){t=u,a&1&&i!==(i=t[11].lastName+"")&&R(c,i),a&1&&s!==(s=t[11].firstName+"")&&R(l,s),a&4&&q(n,"search__result_selected",t[2]===t[13]),a&1&&r!==(r="/composer/"+t[11].slug)&&p(e,"href",r)},d(u){u&&b(e),f=!1,o()}}}function ht(t){let e,n,i,c,_,s=t[1]&&Z(t);return{c(){e=w("div"),e.innerHTML='<img src="/static/img/search-icon.svg" alt="Search"/>',n=D(),s&&s.c(),i=X(),p(e,"class","search-button")},m(l,d){F(l,e,d),F(l,n,d),s&&s.m(l,d),F(l,i,d),c||(_=[v(e,"click",t[3]),v(e,"keypress",t[3])],c=!0)},p(l,[d]){l[1]?s?s.p(l,d):(s=Z(l),s.c(),s.m(i.parentNode,i)):s&&(s.d(1),s=null)},i:m,o:m,d(l){l&&b(e),l&&b(n),s&&s.d(l),l&&b(i),c=!1,g(_)}}}async function pt(t){try{let e=await fetch(`/api/search?q=${t}`);return e.ok?await e.json():[]}catch(e){return console.log(e),[]}}function mt(t){t.focus()}function yt(t,e){let n=i=>t&&!t.contains(i.target)&&!i.defaultPrevented&&e();return document.addEventListener("click",n,!0),{destroy(){document.removeEventListener("click",n,!0)}}}function gt(t,e,n){"use strict";let i=[],c=[void 0,void 0],_=!1,s=0;async function l(){c[0]!==void 0?(n(0,i=await pt(c[0])),c[1]!==void 0?(c[0]=c[1],c[1]=void 0,await l()):c[0]=void 0):n(0,i=[])}function d(){n(1,_=!0)}function r(){n(0,i=[]),n(1,_=!1)}function f(a){a.code==="ArrowUp"&&i.length>0?n(2,s=s>0?s-1:i.length-1):a.code==="ArrowDown"?n(2,s=s<i.length-1?s+1:n(2,s=0)):a.code==="Escape"?r():a.code==="Enter"&&i.length>0&&(location.pathname=`/composer/${i[s].slug}`)}function o(a){let P=a.target.value||void 0;c[0]===void 0?(c[0]=P,l()):c[1]=P}function h(a){n(2,s=a)}return[i,_,s,d,r,f,o,h,a=>h(a)]}var B=class extends O{constructor(e){super(),J(this,e,gt,ht,G,{})}},et=B;var nt=document.getElementById("searchBlock"),bt=nt?new et({target:nt}):void 0,xt=bt;})();