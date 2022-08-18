/*!
* CookieConsent 3.0.0-rc.4
* https://github.com/orestbida/cookieconsent
* Author Orest Bida
* Released under the MIT License
*/
var e,t;e=this,t=function(e){'use strict';const t='opt-in',a='opt-out',n='show--consent',r='show--preferences',o='disable--interaction',i='data-category',c='div',s='button',l='consentModal',_='preferencesModal',d=e=>'function'==typeof e,f=e=>JSON.parse(JSON.stringify(e)),p=(e,t)=>{window.dispatchEvent(new CustomEvent(e,{detail:f(t)}))},m=(e,t)=>{const a={cookie:v.o.t};if(t){const a={modalName:t};return e===v.l.i?d(v._.i)&&v._.i(a):d(v._.p)&&v._.p(a),p(e,a)}e===v.l.m?d(v._.m)&&v._.m(f(a)):e===v.l.u?d(v._.u)&&v._.u(f(a)):e===v.l.v&&(a.changedCategories=v.o.g,a.changedServices=v.o.h,d(v._.v)&&v._.v(f(a))),p(e,a)};class u{constructor(){this.C=!1,this.k={mode:t,revision:0,autoShow:!0,autoClearCookies:!0,manageScriptTags:!0,hideFromBots:!0,cookie:{name:'cc_cookie',expiresAfterDays:182,domain:'',path:'/',sameSite:'Lax'}},this.o={M:null,S:'',T:{},A:null,t:null,B:null,D:null,H:null,N:'',V:!0,j:!1,F:!1,I:!1,O:!1,P:!1,J:[],G:!1,R:!0,g:[],U:!1,L:'',q:!1,K:[],W:[],X:[],Y:[],Z:!1,$:!1,ee:!1,te:[],ae:[],ne:[],re:{},oe:{},ie:{},h:{},ce:{},se:[],le:[]},this._e={de:0,fe:0,pe:0,me:0,ue:0,ve:0,ge:0,be:0,he:0,ye:0,we:0,Ce:0,ke:0,Me:0,xe:0,Se:0,Te:0,Ae:0,Be:0,De:0,He:0,Ne:0,Ve:0,je:0,Ee:0,Fe:0,Ie:0,Oe:0,Pe:0,Je:{},Ge:{}},this._={m:0,u:0,v:0,i:0,p:0},this.l={m:'cc:onFirstConsent',u:'cc:onConsent',v:'cc:onChange',i:'cc:onModalShow',p:'cc:onModalHide'}}}const v=new u,g=(e,t)=>-1!==e.indexOf(t),b=e=>{const t=document.createElement(e);return e===s&&h(t,'type',e),t},h=(e,t,a)=>{e.setAttribute(t,a)},y=(e,t)=>{e.appendChild(t)},w=(e,t,a,n)=>{e.addEventListener(t,a,!0===n&&{passive:!0})},C=e=>{if('object'==typeof e)return Object.keys(e)},k=(e,t)=>{e.classList.add(t)},M=(e,t)=>{e.classList.remove(t)},x=()=>{const e=v.k.cookie.expiresAfterDays;return d(e)?e(v.o.L):e},S=(e,t)=>e.filter((e=>!g(t,e))).concat(t.filter((t=>!g(e,t)))),T=e=>{var t='custom';return e.accepted.length===v.o.K.length?t='all':e.accepted.length===v.o.X.length&&(t='necessary'),t},A=()=>{v.o.L=T(D())},B=(e,t)=>{const a='accept-',n=l('show-preferencesModal'),r=l('show-consentModal'),o=l(a+'all'),i=l(a+'necessary'),c=l(a+'custom');for(var s=0;s<n.length;s++)h(n[s],'aria-haspopup','dialog'),w(n[s],'click',(e=>{e.preventDefault(),t.showPreferences()}));for(s=0;s<r.length;s++)h(r[s],'aria-haspopup','dialog'),w(r[s],'click',(e=>{e.preventDefault(),t.show(!0)}));for(s=0;s<o.length;s++)w(o[s],'click',(e=>{_(e,'all')}));for(s=0;s<c.length;s++)w(c[s],'click',(e=>{_(e)}));for(s=0;s<i.length;s++)w(i[s],'click',(e=>{_(e,[])}));function l(t){return(e||document).querySelectorAll('[data-cc="'+t+'"]')}function _(e,a){e.preventDefault(),t.acceptCategory(a),t.hidePreferences(),t.hide()}},D=()=>{const e=v.o.K.filter((e=>!g(v.o.W,e)));return{accepted:v.o.W,rejected:e}},H=()=>{const e=['[href]',s,'input','details','[tabindex="0"]'].join(':not([tabindex="-1"]), '),t=(t,a)=>{const n=t&&t.querySelectorAll(e);a[0]=n[0],a[1]=n[n.length-1]};t(v._e.Be,v.o.ae),v.o.j&&t(v._e.ve,v.o.te)},N=e=>{var t=v.o.oe;if(v.o.K.forEach((e=>{(v.o.h[e]||v.o.oe[e]||[]).forEach((t=>{const a=v.o.re[e][t];!a.enabled&&g(v.o.oe[e],t)&&d(a.onAccept)?(a.enabled=!0,a.onAccept()):a.enabled&&!g(v.o.oe[e],t)&&d(a.onAccept)&&(a.enabled=!1,a.onReject())}))})),v.k.manageScriptTags){var a=v.o.se,n=e||v.o.t.categories||[],r=(e,a)=>{if(a<e.length){var o=e[a],c=v.o.le[a],s=c.Re,l=c.Ue,_=g(n,s),d=!!l&&g(t[s],l);if(!c.Le){var f=!l&&!c.qe&&_,p=l&&!c.qe&&d,m=!l&&c.qe&&!_&&g(v.o.g,s),u=l&&c.qe&&!d&&g(v.o.h[s]||[],l);if(f||m||p||u){c.Le=!0,o.removeAttribute('type'),o.removeAttribute(i);var y=o.getAttribute('data-src');y&&o.removeAttribute('data-src');var w=b('script');if(w.textContent=o.innerHTML,((e,t)=>{for(var a=t.attributes,n=a.length,r=0;r<n;r++){var o=a[r].nodeName;h(e,o,t[o]||t.getAttribute(o))}})(w,o),y?w.src=y:y=o.src,y&&(w.onload=w.onerror=()=>{w.onload=w.onerror=null,r(e,++a)}),o.parentNode.replaceChild(w,o),y)return}}r(e,++a)}};r(a,0)}},V=e=>{const t=v.o.M.guiOptions,a=t&&t.consentModal,n=t&&t.preferencesModal,r=(e,t,a,n,r,o)=>{var i=a&&a.layout,c=a&&a.position,s=a&&!0===a.flipButtons,l=a&&!1===a.equalWeightButtons,_=i&&i.split(' ')||[],d=c&&c.split(' ')||[],f=_[0],p=_[1],m=d[0],u='pm--'===n?d[0]:d[1],b=f,h=t[f];h||(h=t[r],b=r);var y=g(h.ze,p)&&p,w=g(h.Ke,m)?m:h.Qe,C=g(h.We,u)?u:h.Xe;e.className=o,k(e,n+b),y&&k(e,n+y),w&&k(e,n+w),C&&k(e,n+C),s&&k(e,n+'flip');const x='btn--secondary',S=o+'__';'cm'===o?(v._e.xe&&M(v._e.xe,S+x),v._e.Ae&&M(v._e.Ae,S+x),l&&(v._e.xe&&k(v._e.xe,S+x),v._e.Ae&&k(v._e.Ae,S+x))):(v._e.Oe&&M(v._e.Oe,S+x),l&&v._e.Oe&&k(v._e.Oe,S+x))};if(0===e&&v.o.j){const e=['middle','top','bottom'],t=['left','center','right'],n={box:{ze:['wide','inline'],Ke:e,We:t,Qe:'bottom',Xe:'right'},cloud:{ze:['inline'],Ke:e,We:t,Qe:'bottom',Xe:'center'},bar:{ze:['inline'],Ke:e.slice(1),We:[],Qe:'bottom',Xe:''}};r(v._e.ve,n,a,'cm--','box','cm')}if(1===e){const e={box:{ze:[],Ke:[],We:[],Qe:'',Xe:''},bar:{ze:['wide'],Ke:[],We:['left','right'],Qe:'',Xe:'left'}};r(v._e.Be,e,n,'pm--','box','pm')}},j=e=>{var t=v.o.A&&v.o.A.consentModal;if(t){!0===v.o.M.disablePageInteraction&&k(v._e.fe,o);var a=t.acceptAllBtn,n=t.acceptNecessaryBtn,r=t.showPreferencesBtn,i=t.closeIconLabel,l=t.footer;if(!v._e.me){v._e.me=b(c),v._e.ve=b(c),v._e.ge=b(c),v._e.be=b(c),v._e.we=b(c),k(v._e.me,'cm-wrapper'),k(v._e.ve,'cm'),k(v._e.ge,'cm__body'),k(v._e.be,'cm__texts'),k(v._e.we,'cm__btns'),h(v._e.ve,'role','dialog'),h(v._e.ve,'aria-modal','true'),h(v._e.ve,'aria-hidden','false'),h(v._e.ve,'aria-labelledby','cm__title'),h(v._e.ve,'aria-describedby','cm__desc'),v._e.ve.style.visibility='hidden';const t='box',o=v.o.M.guiOptions,l=o&&o.consentModal,_=(l&&l.layout||t).split(' ')[0]===t;i&&_&&(v._e.Ae||(v._e.Ae=b(s),v._e.Ae.className='cm__btn cm__btn--close',w(v._e.Ae,'click',(()=>{e.hide(),e.acceptCategory([])})),y(v._e.ge,v._e.Ae)),h(v._e.Ae,'aria-label',i)),y(v._e.ge,v._e.be),(a||n||r)&&y(v._e.ge,v._e.we),y(v._e.ve,v._e.ge),y(v._e.me,v._e.ve),y(v._e.pe,v._e.me)}var _=t.title;_&&(v._e.he||(v._e.he=b(c),v._e.he.className=v._e.he.id='cm__title',h(v._e.he,'role','heading'),h(v._e.he,'aria-level','2'),y(v._e.be,v._e.he)),v._e.he.innerHTML=_);var d=t.description;if(d&&(v.o.G&&(d=d.replace('{{revisionMessage}}',v.o.R?'':t.revisionMessage||'')),v._e.ye||(v._e.ye=b(c),v._e.ye.className=v._e.ye.id='cm__desc',y(v._e.be,v._e.ye)),v._e.ye.innerHTML=d),a&&(v._e.Me||(v._e.Me=b(s),k(v._e.Me,'cm__btn'),w(v._e.Me,'click',(()=>{e.hide(),e.acceptCategory('all')}))),v._e.Me.innerHTML=a),n&&(v._e.xe||(v._e.xe=b(s),k(v._e.xe,'cm__btn'),w(v._e.xe,'click',(()=>{e.hide(),e.acceptCategory([])}))),v._e.xe.innerHTML=n),r&&(v._e.Se||(v._e.Se=b(s),v._e.Se.className='cm__btn cm__btn--secondary',w(v._e.Se,'click',e.showPreferences)),v._e.Se.innerHTML=r),!v._e.ke&&r&&(v._e.ke=b(c),k(v._e.ke,'cm__btn-group'),y(v._e.ke,v._e.Se),y(v._e.we,v._e.ke)),v._e.Ce||(v._e.Ce=b(c),k(v._e.Ce,'cm__btn-group'),n&&y(v._e.Ce,v._e.xe),a&&y(v._e.Ce,v._e.Me),(a||n)&&y(v._e.ge,v._e.Ce),y(v._e.we,v._e.Ce)),l){if(!v._e.Te){var f=b(c),p=b(c);v._e.Te=b(c),k(f,'cm__footer'),k(p,'cm__links'),k(v._e.Te,'cm__link-group'),y(p,v._e.Te),y(f,p),y(v._e.ve,f)}v._e.Te.innerHTML=l}v.o.j=!0,V(0)}},E=e=>{var t=v.o.A&&v.o.A.preferencesModal;if(t){var a=t.title,n=t.closeIconLabel,r=t.acceptAllBtn,o=t.acceptNecessaryBtn,i=t.savePreferencesBtn,l=t.sections;if(v._e.ue)v._e.je=b(c),k(v._e.je,'pm__body');else{v._e.ue=b(c),k(v._e.ue,'pm-wrapper'),v._e.Be=b(c),v._e.Be.style.visibility='hidden',k(v._e.Be,'pm'),h(v._e.Be,'role','dialog'),h(v._e.Be,'aria-hidden',!0),h(v._e.Be,'aria-modal',!0),w(v._e.fe,'keydown',(t=>{27===t.keyCode&&e.hidePreferences()})),v._e.De=b(c),k(v._e.De,'pm__header'),v._e.He=b(c),k(v._e.He,'pm__title'),h(v._e.He,'role','heading'),v._e.Ne=b(s),k(v._e.Ne,'pm__close-btn'),h(v._e.Ne,'aria-label',t.closeIconLabel||''),w(v._e.Ne,'click',e.hidePreferences),v._e.Ve=b(c),k(v._e.Ve,'pm__body'),v._e.Fe=b(c),k(v._e.Fe,'pm__footer');var _=b(c);k(_,'pm__btns');var d=b(c),f=b(c);k(d,'pm__btn-group'),k(f,'pm__btn-group'),y(v._e.Fe,f),y(v._e.Fe,d),y(v._e.De,v._e.He),y(v._e.De,v._e.Ne),y(v._e.Be,v._e.De),y(v._e.Be,v._e.Ve),y(v._e.Be,v._e.Fe),y(v._e.ue,v._e.Be),y(v._e.pe,v._e.ue)}a&&(v._e.He.innerHTML=a,n&&h(v._e.Ne,'aria-label',n)),l&&l.forEach((e=>{var a=e.title,n=e.description,r=e.linkedCategory,o=r&&v.o.q[r],i=e.cookieTable,l=i&&i.body,_=l&&l.length>0,d=!!o,f=d&&v.o.re[r]||!1,p=f&&C(f)||[],m=d&&(!!n||!!_||C(f).length>0),u=b(c);if(k(u,'pm__section'),m||n){var g=b(c);k(g,'pm__section-desc-wrapper')}if(m&&p.length>0){var x=b(c);k(x,'pm__section-services'),p.forEach((e=>{var t=f[e].label||e,a=b(c),n=b(c),i=b(c),s=b('span'),l=b(c);k(a,'pm__service'),k(l,'pm__service-title'),k(s,'gg-code-slash'),k(n,'pm__service-header'),k(i,'pm__service-icon');var _=F(t,e,o,0,!0,r);l.innerHTML=t,y(i,s),y(n,i),y(n,l),y(a,n),y(a,_),y(x,a)})),y(g,x)}if(a){var S=b(c),T=b(d?s:c);if(k(S,'pm__section-title-wrapper'),k(T,'pm__section-title'),T.innerHTML=a,y(S,T),d){var A=b('span');k(A,'pm__section-arrow'),y(S,A),u.className+='--toggle';var B=F(a,r,o);if(p.length>0){var D=b('span');k(D,'pm__badge'),k(D,'pm__service-counter'),h(D,'aria-hidden',!0),h(D,'data-servicecounter',p.length);var H=t.serviceCounterLabel;H&&'string'==typeof H&&h(D,'data-counterlabel',H),y(T,D)}if(m){k(u,'pm__section--expandable');var N=r+'-desc';h(T,'aria-expanded',!1),h(T,'aria-controls',N)}y(S,B)}else h(T,'role','heading'),h(T,'aria-level','3');y(u,S)}if(n){var V=b(c);k(V,'pm__section-desc'),V.innerHTML=n,y(g,V)}if(m&&(h(g,'aria-hidden','true'),g.id=N,((e,t,a)=>{w(T,'click',(()=>{t.classList.contains('is-expanded')?(M(t,'is-expanded'),h(a,'aria-expanded','false'),h(e,'aria-hidden','true')):(k(t,'is-expanded'),h(a,'aria-expanded','true'),h(e,'aria-hidden','false'))}),!1)})(g,u,T),_)){var j=b('table'),E=b('thead'),I=b('tbody');k(j,'pm__section-table'),k(E,'pm__table-head'),k(I,'pm__table-body');var O=i.headers,P=C(O),J=v._e.de.createDocumentFragment(),G=b('tr');h(G,'role','row');for(var R=0;R<P.length;R++){var U=O[P[R]],L=b('th');L.id='cc__row-'+U,h(L,'role','columnheader'),h(L,'scope','col'),k(L,'pm__table-th'),L.innerHTML=U,y(J,L)}y(G,J),y(E,G);var q=v._e.de.createDocumentFragment();for(R=0;R<l.length;R++){var z=l[R],K=b('tr');h(K,'role','row'),k(K,'pm__table-tr');for(var Q=0;Q<P.length;Q++){var W=P[Q],X=O[W],Y=z[W],Z=b('td'),$=b(c);k(Z,'pm__table-td'),h(Z,'data-column',X),h(Z,'headers','cc__row-'+X),$.insertAdjacentHTML('beforeend',Y),y(Z,$),y(K,Z)}y(q,K)}y(I,q),y(j,E),y(j,I),y(g,j)}(m||n)&&y(u,g),y(v._e.Ve,u),v._e.je?y(v._e.je,u):y(v._e.Ve,u)})),(r||o)&&(o&&(v._e.Oe||(v._e.Oe=b(s),k(v._e.Oe,'pm__btn'),y(d,v._e.Oe),w(v._e.Oe,'click',(()=>{p([])}))),v._e.Oe.innerHTML=o),r&&(v._e.Ie||(v._e.Ie=b(s),k(v._e.Ie,'pm__btn'),y(d,v._e.Ie),w(v._e.Ie,'click',(()=>{p('all')}))),v._e.Ie.innerHTML=r)),i&&(v._e.Pe||(v._e.Pe=b(s),v._e.Pe.className='pm__btn pm__btn--secondary',y(f,v._e.Pe),w(v._e.Pe,'click',(()=>{p()}))),v._e.Pe.innerHTML=i),v._e.je&&(v._e.Be.replaceChild(v._e.je,v._e.Ve),v._e.Ve=v._e.je),V(1)}function p(t){e.acceptCategory(t),e.hidePreferences(),e.hide()}};function F(e,t,a,n,r,o){var c=b('label'),s=b('input'),l=b('span'),_=b('span'),d=b('span'),f=b('span');if(s.type='checkbox',k(c,'section__toggle-wrapper'),k(s,'section__toggle'),k(d,'toggle__icon-on'),k(f,'toggle__icon-off'),k(l,'toggle__icon'),k(_,'toggle__label'),h(l,'aria-hidden','true'),r?(k(c,'toggle-service'),k(s,'toggle-service'),h(s,i,o),v._e.Ge[o][t]=s):v._e.Je[t]=s,r?(e=>{w(s,'change',(()=>{var t=v._e.Ge[e],a=v._e.Je[e];for(var n in v.o.ie[e]=[],t){const a=t[n];a.checked&&v.o.ie[e].push(a.value)}v.o.ie[e].length>0?a.checked=!0:a.checked=!1}))})(o):(e=>{w(s,'click',(()=>{var t=v._e.Ge[e];if(v.o.ie[e]=[],s.checked)for(var a in t)t[a].checked=!0;else for(a in t)t[a].checked=!1}))})(t),s.value=t,_.textContent=e,y(l,f),y(l,d),v.o.V)(a.enabled||a.readOnly)&&(s.checked=!0);else if(r){var p=v.o.oe[o];p&&g(p,t)&&(s.checked=!0)}else g(v.o.t.categories,t)&&(s.checked=!0);return a.readOnly&&(s.disabled=!0),y(c,s),y(c,l),y(c,_),c}const I=e=>{const t=C(v.o.T);return g(t,e)?e:g(t,v.o.S)?v.o.S:t[0]},O=async e=>{let t=v.o.S;if(e&&(t=I(e)),v.o.A=v.o.T[t],!v.o.A)return!1;if('string'==typeof v.o.A){const e=await(async e=>{try{const t=await fetch(e,{method:'GET'});return!!t.ok&&await t.json()}catch(e){return!1}})(v.o.A);if(!e)return!1;v.o.A=e,v.o.T[t]=e}else v.o.A=v.o.T[t];return v.o.S=t,!0},P=(e,t,a)=>{var n=encodeURIComponent(t),r=a?(()=>{const e=v.o.H?new Date-v.o.H:0;return 864e5*x()-e})():864e5*x(),o=new Date;o.setTime(o.getTime()+r);var i=e+'='+(n||'')+(0!==r?'; expires='+o.toUTCString():'')+'; Path='+v.k.cookie.path+';';i+=' SameSite='+v.k.cookie.sameSite+';',g(window.location.hostname,'.')&&(i+=' Domain='+v.k.cookie.domain+';'),'https:'===window.location.protocol&&(i+=' Secure;'),document.cookie=i,JSON.parse(decodeURIComponent(n))},J=e=>{let t;try{t=JSON.parse(decodeURIComponent(e))}catch(e){t={}}return t},G=(e,t,a)=>{const n=a||v.k.cookie.domain,r=t||v.k.cookie.path,o='www.'===n.slice(0,4),i=o&&n.substring(4),c=(e,t)=>{document.cookie=e+'=; path='+r+(t?'; domain=.'+t:'')+'; expires=Thu, 01 Jan 1970 00:00:01 GMT;'};e.forEach((e=>{c(e),c(e,n),o&&c(e,i)}))},R=(e,t)=>{let a=document.cookie.match('(^|;)\\s*'+e+'\\s*=\\s*([^;]+)');return a=a?t?a.pop():e:'',a},U=e=>{const t=document.cookie.split(/;\s*/);let a=[];for(var n=0;n<t.length;n++){let r=t[n].split('=')[0];if(e)try{e.test(r)&&a.push(r)}catch(e){}else a.push(r)}return a},L=()=>{v.k.cookie.domain=window.location.hostname;const e=document;v._e.de=e,v._e.fe=e.documentElement},q=e=>{e.dispatchEvent(new Event('change'))},z=(e,n)=>{var r=e||void 0,o=n||[],i=!1,c=[];if(r)if('object'==typeof r&&'number'==typeof r.length)for(var s=0;s<r.length;s++)g(v.o.K,r[s])&&c.push(r[s]);else'string'==typeof r&&('all'===r?c=v.o.K.slice():g(v.o.K,r)&&c.push(r));else c=(()=>{var e=v._e.Je,t=[];for(var a in e)e[a].checked&&t.push(e[a].value);return t})(),i=!0;if(o.length>=1)for(s=0;s<o.length;s++)c=c.filter((e=>e!==o[s]));for(s=0;s<v.o.X.length;s++)g(c,v.o.X[s])||c.push(v.o.X[s]);v.o.W=c,A(),i||(v.o.ie={}),v.o.ce=f(v.o.oe),v.o.K.forEach((e=>{var t=v._e.Ge[e];if(0===C(t).length)return;const a=v.o.re[e],n=C(a);if(v.o.oe[e]=[],g(v.o.X,e))n.forEach((t=>{v.o.oe[e].push(t)}));else if('all'===v.o.L)i&&v.o.ie[e]&&v.o.ie[e].length>0?v.o.ie[e].forEach((t=>{v.o.oe[e].push(t)})):n.forEach((t=>{v.o.oe[e].push(t)}));else if('necessary'===v.o.L)v.o.oe[e]=[];else if(i&&v.o.ie[e]&&v.o.ie[e].length>0)v.o.ie[e].forEach((t=>{v.o.oe[e].push(t)}));else for(let a in t){const n=t[a];n.checked&&v.o.oe[e].push(n.value)}})),(()=>{v.k.mode===a&&v.o.V?v.o.g=S(v.o.Y,v.o.W):v.o.g=S(v.o.W,v.o.t.categories||[]);var e=v.o.g.length>0,n=!1;v.o.K.forEach((e=>{v.o.h[e]=S(v.o.oe[e],v.o.ce[e]||[]),v.o.h[e].length>0&&(n=!0)}));var r=v._e.Je;for(var o in r)g(v.o.W,o)?r[o].checked=!0:r[o].checked=!1;v.o.K.forEach((e=>{var t=v._e.Ge[e],a=v.o.oe[e];for(var n in t){const e=t[n];g(a,n)?e.checked=!0:e.checked=!1}})),v.o.D||(v.o.D=new Date),v.o.N||(v.o.N=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,(e=>(e^window.crypto.getRandomValues(new Uint8Array(1))[0]&15>>e/4).toString(16)))),v.o.t={categories:f(v.o.W),revision:v.k.revision,data:v.o.B,consentTimestamp:v.o.D.toISOString(),consentId:v.o.N,services:f(v.o.oe)};var i=!1;(v.o.V||e||n)&&(v.o.V&&(v.o.V=!1,i=!0),A(),v.o.H?v.o.H=new Date:v.o.H=v.o.D,v.o.t.lastConsentTimestamp=v.o.H.toISOString(),P(v.k.cookie.name,JSON.stringify(v.o.t)),v.k.autoClearCookies&&(i||!v.o.V&&e)&&(e=>{var t='';v.o.U=!1;var a,n=U(),r=e?v.o.K:v.o.g;r=r.filter((e=>{var t=v.o.q[e];return!!t&&!t.readOnly&&!!t.autoClear}));for(var o=0;o<r.length;o++){var i=r[o],c=v.o.q[i].autoClear,s=c&&c.cookies||[],l=g(v.o.g,i),_=!g(v.o.W,i),d=l&&_;if(e&&_||!e&&d){var f=s.length;!0===c.reloadPage&&d&&(v.o.U=!0);for(var p=0;p<f;p++){var m=[],u=s[p].name,b=!!u&&'string'!=typeof u,h=s[p].domain||null,y=s[p].path||!1;if(h&&(t=h),b)for(var w=0;w<n.length;w++)u.test(n[w])&&m.push(n[w]);else{var C=(a=u,n.indexOf(a));C>-1&&m.push(n[C])}m.length>0&&G(m,y,t)}}}})(i),N()),i&&(m(v.l.m),m(v.l.u),v.k.mode===t)||((e||n)&&m(v.l.v),v.o.U&&window.location.reload())})()},K=(e,t,a)=>{let n=[];const r=e=>{if('string'==typeof e){let t=R(e);''!==t&&n.push(t)}else n=n.concat(U(e))};if(Array.isArray(e))for(var o=0;o<e.length;o++)r(e[o]);else r(e);G(n,t,a)},Q=e=>{e&&!v.o.j&&(j(Z),H(),B(v._e.ve,Z)),v.o.j&&(k(v._e.fe,n),h(v._e.ve,'aria-hidden','false'),v.o.F=!0,setTimeout((()=>{v.o.$=v._e.de.activeElement,v.o.J=v.o.te}),200),m(v.l.i,l))},W=()=>{v.o.j&&v.o.F&&(M(v._e.fe,n),h(v._e.ve,'aria-hidden','true'),v.o.F=!1,setTimeout((()=>{v.o.$.focus(),v.o.J=[]}),200),m(v.l.p,l))},X=()=>{v.o.I||(k(v._e.fe,r),h(v._e.Be,'aria-hidden','false'),v.o.I=!0,setTimeout((()=>{v.o.P=!0}),1),setTimeout((()=>{v.o.F?v.o.ee=v._e.de.activeElement:v.o.$=v._e.de.activeElement,0!==v.o.ae.length&&(v.o.ae[0].focus(),v.o.J=v.o.ae)}),200),m(v.l.i,_))},Y=()=>{v.o.I&&(M(v._e.fe,r),v.o.I=!1,h(v._e.Be,'aria-hidden','true'),setTimeout((()=>{v.o.P=!1}),1),v.o.F?(v.o.ee&&v.o.ee.focus(),v.o.J=v.o.te):(v.o.$&&v.o.$.focus(),v.o.J=[]),v.o.O=!1,m(v.l.p,_))},Z={show:Q,hide:W,showPreferences:X,hidePreferences:Y,acceptCategory:z},$=(e,t)=>{var a=J(R(t||v.k.cookie.name,!0));return e?a[e]:a};e.acceptCategory=z,e.acceptService=(e,t)=>{if(!e||!t||'string'!=typeof t||!g(v.o.K,t))return!1;const a=v._e.Ge[t]||{};if(v.o.ie[t]=[],'string'==typeof e)if('all'===e)for(var n in a)a[n].checked=!0,q(a[n]);else for(n in a)a[n].checked=e===n,q(a[n]);else if('object'==typeof e&&Array.isArray(e))for(n in a)g(e,n)?a[n].checked=!0:a[n].checked=!1,q(a[n]);z()},e.acceptedCategory=e=>{var a;return a=v.o.V&&v.k.mode!==t?v.o.Y:D().accepted||[],g(a,e)},e.acceptedService=(e,t)=>g(v.o.oe[t]||[],e),e.eraseCookies=K,e.getConfig=e=>e?v.k[e]||v.o.M[e]:{...v.k,...v.o.M,cookie:{...v.k.cookie}},e.getCookie=$,e.getUserPreferences=()=>{var e,t=!v.o.V&&D();return{acceptType:v.o.L,acceptedCategories:v.o.V?[]:t.accepted,rejectedCategories:v.o.V?[]:t.rejected,acceptedServices:v.o.V?{}:v.o.oe,rejectedServices:v.o.V?{}:(e={},v.o.K.forEach((t=>{e[t]=S(v.o.oe[t]||[],C(v.o.re[t])||[])})),e)}},e.hide=W,e.hidePreferences=Y,e.loadScript=(e,t)=>{let a=document.querySelector('script[src="'+e+'"]');return new Promise(((n,r)=>{if(a)return n(!0);a=b('script'),Array.isArray(t)&&t.forEach((e=>{h(a,e.name,e.value)})),a.onload=()=>n(!0),a.onerror=()=>{a.remove(),r(!1)},a.src=e,y(document.head,a)}))},e.reset=e=>{if(!v.C)return;v.C=!1,!0===e&&K(v.k.cookie.name,v.k.cookie.path,v.k.cookie.domain),v._e.pe&&v._e.pe.remove(),M(v._e.fe,o),M(v._e.fe,r),M(v._e.fe,n);const t=new u;v.o=t.o,v._e=t._e,v.k=t.k,v._=t._,v.l=t.l},e.run=async e=>{if(!v._e.pe){if((e=>{L(),v.C=!0,v.o.M=e,v.o.T=e.language.translations,v.o.q=v.o.M.categories,'boolean'==typeof e.autoShow&&(v.k.autoShow=e.autoShow);var t=e.cookie;if(t&&'object'==typeof t){var n=t.name,r=t.domain,o=t.path,c=t.sameSite,s=t.expiresAfterDays;n&&(v.k.cookie.name=n),r&&(v.k.cookie.domain=r),o&&(v.k.cookie.path=o),c&&(v.k.cookie.sameSite=c),s&&(v.k.cookie.expiresAfterDays=s)}v._.m=e.onFirstConsent,v._.u=e.onConsent,v._.v=e.onChange,v._.p=e.onModalHide,v._.i=e.onModalShow;var l=e.mode,_=e.revision,d=e.autoClearCookies,f=e.manageScriptTags,p=e.hideFromBots;l===a&&(v.k.mode=l),'number'==typeof _&&(_>-1&&(v.k.revision=_),v.o.G=!0),'boolean'==typeof d&&(v.k.autoClearCookies=d),'boolean'==typeof f&&(v.k.manageScriptTags=f),!1===p&&(v.k.hideFromBots=!1),!0===v.k.hideFromBots&&(v.o.Z=navigator&&(navigator.userAgent&&/bot|crawl|spider|slurp|teoma/i.test(navigator.userAgent)||navigator.webdriver)),v.k.autoClearCookies,v.o.G,v.k.manageScriptTags;var m=v.o.M.language.default;m&&(v.o.S=m),v.o.S=function(){const e=v.o.M.language.autoDetect;if(e){if('browser'===e)return I(navigator.language.slice(0,2).toLowerCase());if('document'===e)return I(v._e.de.documentElement.lang)}return I(v.o.M.language.default)}(),v.o.A=v.o.T[v.o.S],v.o.S,v.o.K=C(v.o.q),v.o.K.forEach((e=>{const t=v.o.q[e].services||{},a=t&&!!(n=t)&&'object'==typeof n&&!Array.isArray(n)&&C(t)||[];var n;v.o.re[e]={},v.o.oe[e]=[],v._e.Ge[e]={},0!==a.length&&a.forEach((a=>{const n=t[a];n.enabled=!1,v.o.re[e][a]=n}))}));for(var u=0;u<v.o.K.length;u++)!0===v.o.q[v.o.K[u]].readOnly&&v.o.X.push(v.o.K[u]);v.k.manageScriptTags&&(v.o.se=v._e.de.querySelectorAll('script[data-category]'),v.o.le=[],v.o.se.forEach((e=>{let t=e.getAttribute(i),a=e.dataset.service||'',n=!1;if(t&&'!'===t.charAt(0)&&(t=t.slice(1),n=!0),'!'===a.charAt(0)&&(a=a.slice(1),n=!0),g(v.o.K,t)&&(v.o.le.push({Le:!1,qe:n,Re:t,Ue:a}),a)){const e=v.o.re[t];e[a]||(e[a]={enabled:!1})}})))})(e),v.o.Z)return;v.o.t=J(R(v.k.cookie.name,!0)),v.o.N=v.o.t.consentId;var t=void 0!==v.o.N;v.o.D=v.o.t.consentTimestamp,v.o.D&&(v.o.D=new Date(v.o.D)),v.o.H=v.o.t.lastConsentTimestamp,v.o.H&&(v.o.H=new Date(v.o.H));var n=v.o.t.data;if(v.o.B=void 0!==n?n:null,v.o.G&&t&&v.o.t.revision!==v.k.revision&&(v.o.R=!1),v.o.j=v.o.V=!(t&&v.o.R&&v.o.D&&v.o.H&&v.o.N),v.o.V,v.o.V?v.k.mode===a&&v.o.K.forEach((e=>{if(v.o.q[e].enabled){v.o.Y.push(e);const a=v.o.re[e]||{};for(var t in a)v.o.oe[e].push(t)}})):(v.o.W=v.o.t.categories,v.o.L=T(D()),v.o.oe=v.o.t.services||{}),!await O(null))return;r=Z,v._e.pe=b(c),v._e.pe.id='cc-main',v._e.pe.style.position='fixed',v._e.pe.style.zIndex='1000000',v.o.j&&j(r),E(r),y(v.o.M.root||v._e.de.body,v._e.pe),H(),B(null,Z),v.k.autoShow&&v.o.j&&Q(),setTimeout((()=>{k(v._e.pe,'c--anim')}),100),(e=>{var t=!1,a=!1;w(v._e.fe,'keydown',(e=>{if('Tab'===e.key){if(v.o.J.length>=1){const n=v._e.de.activeElement;e.shiftKey?n===v.o.J[0]&&(v.o.J[1].focus(),e.preventDefault()):n===v.o.J[1]&&(v.o.J[0].focus(),e.preventDefault()),a||v.o.O||(a=!0,!t&&e.preventDefault(),e.shiftKey?v.o.J[1].focus():v.o.J[0].focus())}!a&&(t=!0)}})),w(v._e.pe,'click',(t=>{v.o.P?v._e.Be.contains(t.target)?v.o.O=!0:(e.hidePreferences(0),v.o.O=!1):v.o.F&&v._e.ve.contains(t.target)&&(v.o.O=!0)}),!0)})({hidePreferences:Y}),v.o.V?v.k.mode===a&&(v.k.mode,v.o.Y,N(v.o.Y)):(N(),m(v.l.u))}var r},e.setCookieData=e=>{var t=e.value,a=!1;if('update'===e.mode){v.o.B=$('data');var n=typeof v.o.B==typeof t;if(n&&'object'==typeof v.o.B)for(var r in!v.o.B&&(v.o.B={}),t)v.o.B[r]!==t[r]&&(v.o.B[r]=t[r],a=!0);else!n&&v.o.B||v.o.B===t||(v.o.B=t,a=!0)}else v.o.B=t,a=!0;return a&&(v.o.t.data=v.o.B,P(v.k.cookie.name,JSON.stringify(v.o.t),!0)),a},e.setLanguage=async(e,t)=>{var a=I(e);return!(e!==a||a===v.o.S&&!0!==t||!await O(a)||(v.o.S=a,v.o.j&&(j(Z),B(v._e.ge,Z)),E(Z),0))},e.show=Q,e.showPreferences=X,e.validConsent=()=>!v.o.V,e.validCookie=e=>''!==R(e,!0),Object.defineProperty(e,'__esModule',{value:!0})},'object'==typeof exports&&'undefined'!=typeof module?t(exports):'function'==typeof define&&define.amd?define(['exports'],t):t((e='undefined'!=typeof globalThis?globalThis:e||self).CookieConsent={});
