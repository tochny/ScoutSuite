(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[53],{638:function(e,t,n){"use strict";n.r(t);var a=n(1),r=(n(0),n(742)),i=n(739),c=n(91);t.default=function(e){var t=e.data;return t?Object(a.jsx)(i.a,{data:t,children:Object(a.jsx)(r.a,{children:Object(a.jsx)(i.c,{label:"Logging for key vault enabled",valuePath:"diagnostic_key_vault.audit_event_enabled",errorPath:"diagnostic_key_vault_audit_event_enabled",renderValue:c.c})})}):null}},736:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return u}));var a=n(0),r=n.n(a),i={path_to_issue:[],item:{}},c=r.a.createContext(i),o=r.a.createContext(""),u=r.a.createContext((function(){}))},737:function(e,t,n){"use strict";var a=n(1),r=n(0),i=n(736),c=n(91);t.a=function(e){var t=e.path,n=e.children,o=Object(r.useContext)(i.b);return Object(a.jsx)(i.b.Provider,{value:Object(c.a)(o,t),children:n})}},738:function(e,t,n){"use strict";var a=n(13),r=n(1),i=n(0),c=n(732),o=n(9),u=n.n(o),l=n(16),s=n.n(l),d=n(14),v=n.n(d),f=n(736),b=n(91),j=n(71),p=(n(740),n(723)),h=n(216),x=n.n(h),O=n(741),m=n.n(O),g=n(217),_=n(151),P=function(e){var t=e.service,n=e.finding,a=e.path,o=Object(i.useContext)(_.a),u=o.exceptions,l=o.addException,d=o.removeException,v=Object(g.b)().enqueueSnackbar,f=s()(u,[t,n],[]).includes(a);return Object(r.jsx)(c.a,{title:f?"Remove finding from exceptions list":"Add finding to exceptions list",placement:"top",arrow:!0,children:Object(r.jsx)(p.a,{size:"small",className:"exception-btn",onClick:f?function(){d(t,n,a),v("Exception removed.",{variant:"error",anchorOrigin:{vertical:"bottom",horizontal:"right"}})}:function(){l(t,n,a),v("Exception added. Don't forget to export the exceptions!",{variant:"success",anchorOrigin:{vertical:"bottom",horizontal:"right"}})},children:f?Object(r.jsx)(m.a,{}):Object(r.jsx)(x.a,{})})})},C=n(34),k=function(e){var t,n=e.label,o=e.separator,l=e.valuePath,d=e.errorPath,p=e.className,h=e.inline,x=e.tooltip,O=e.tooltipProps,m=e.renderValue,g=e.basePathOverwrite,_=Object(C.g)(),k=Object(i.useContext)(f.a),y=Object(i.useContext)(f.b),E=Object(i.useContext)(f.c),N=Object(b.a)(g||y,l),w=m(e.value||s()(k.item,N,e.value));("boolean"===typeof w&&(w=String(w)),d)?t=(v()(d)?d:[d]).map((function(e){return Object(b.a)(g||y,e)})):t=[N];var A=t.some((function(e){return k.path_to_issues.includes(e)})),z=k.level;if(Object(i.useEffect)((function(){A&&E(z)}),[z]),void 0===w||null===w)return null;var D=Object(r.jsx)(P,{service:_.service,finding:_.finding,path:"".concat(k.path,".").concat(t[0])}),R=Object(r.jsxs)("span",{className:u()(A&&u()("issue",z)),children:[w,A&&D]});return Object(r.jsx)(j.a,{className:u()(p,"partial-value",{inline:h}),label:n,separator:o,value:x?Object(r.jsx)(c.a,Object(a.a)(Object(a.a)({title:w},O),{},{children:R})):R})};k.defaultProps={label:"",separator:": ",value:null,valuePath:null,errorPath:null,inline:!1,tooltip:!1,tooltipProps:{enterDelay:1e3,placement:"top-start"},renderValue:function(e){return e}};t.a=k},739:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return c.a})),n.d(t,"c",(function(){return o.a}));var a=n(1),r=(n(0),n(736)),i=(n(91),function(e){var t=e.data,n=e.children;return console.info("PARTIAL DATA",t),Object(a.jsx)(r.a.Provider,{value:t,children:n})}),c=n(737),o=n(738)},740:function(e,t,n){},741:function(e,t,n){"use strict";var a=n(36),r=n(38);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(n(0)),c=(0,a(n(39)).default)(i.createElement("path",{d:"M19 13H5v-2h14v2z"}),"Remove");t.default=c},742:function(e,t,n){"use strict";var a=n(1);n(0),n(743);t.a=function(e){var t=e.children;return Object(a.jsxs)("div",{className:"informations-wrapper",children:[Object(a.jsx)("h4",{className:"title",children:"Informations"}),t]})}},743:function(e,t,n){}}]);
//# sourceMappingURL=53.8dab3e2b.chunk.js.map