(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[27],{1111:function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return h}));var c=t(2),r=t(107),a=t(198),u=t.n(a),i=t(32),l=t(898),o=t(6),s=t(3),b=function(e){var n=e.channel,t=e.className,r=Object(i.h)(),a=Object(c.useCallback)((function(){(null===n||void 0===n?void 0:n.id)&&r.push(Object(o.b)(o.a.Channel,{channelId:n.id}),{channel:n,title:n.name})}),[n,r]);return Object(s.jsx)(l.a,{onClick:a,source:null===n||void 0===n?void 0:n.logos.s,caption:null===n||void 0===n?void 0:n.title,className:t})},j=t(894),d=t(896),f=function(e){var n=e.title,t=e.channels,c=e.loading,a=e.onScrollToEnd,i=e.scrollable,l=void 0===i||i,o=Object(s.jsxs)("div",{children:[Object(s.jsx)(d.a,{children:n}),Object(s.jsxs)("div",{className:"flex flex-wrap pr-2",children:[u()(t,(function(e){return Object(s.jsx)(b,{channel:e},e.id)})),c&&u()(Object(r.a)(new Array(20)),(function(e,n){return Object(s.jsx)(b,{},n)}))]})]});return l?Object(s.jsx)(j.b,{onScrollToEnd:a,children:o}):o},O=t(895),v=t(897),h=function(){var e=Object(v.a)("channels"),n=e.data,t=e.isLoading,c="\u041a\u0430\u043d\u0430\u043b\u044b";return Object(s.jsxs)(s.Fragment,{children:[Object(s.jsx)(O.a,{title:c}),Object(s.jsx)(f,{title:c,channels:null===n||void 0===n?void 0:n.channels,loading:t})]})}},894:function(e,n,t){"use strict";t.d(n,"b",(function(){return v})),t.d(n,"a",(function(){return O}));var c=t(12),r=t(60),a=t(2),u=t(55),i=t.n(u),l=t(59),o=t(108),s=function(e,n,t){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},r=n.onEnterViewport,u=n.onLeaveViewport,i=Object(a.useState)(),s=Object(l.a)(i,2),b=s[1],j=Object(a.useRef)(null),d=Object(a.useRef)(!1),f=Object(a.useRef)(!1),O=Object(a.useRef)(0),v=Object(a.useRef)(0),h=Object(a.useCallback)((function(){if(e.current&&j.current){var n=Object(o.findDOMNode)(e.current);n&&j.current.observe(n)}}),[e,j]),x=Object(a.useCallback)((function(){if(e.current&&j.current){var n=Object(o.findDOMNode)(e.current);n&&(j.current.unobserve(n),j.current.disconnect(),j.current=null)}}),[e,j]),m=Object(a.useCallback)((function(e){var n=e[0]||{},t=n.isIntersecting,a=n.intersectionRatio,i="undefined"!==typeof t?t:a>0;if(!f.current&&i)return f.current=!0,null===r||void 0===r||r(),O.current+=1,d.current=i,void b(i);f.current&&!i&&(f.current=!1,null===u||void 0===u||u(),c.disconnectOnLeave&&j.current&&j.current.disconnect(),v.current+=1,d.current=i,b(i))}),[j,c.disconnectOnLeave,r,u]),p=Object(a.useCallback)((function(){j.current||(j.current=new IntersectionObserver(m,t))}),[j,t,m]);return Object(a.useEffect)((function(){return p(),h(),function(){x()}}),[p,h,x]),{inViewport:d.current,enterCount:O.current,leaveCount:v.current}},b=t(1104);var j=function(e){var n=Object(b.a)();return Object(a.useMemo)((function(){return"".concat(e,"-").concat(n)}),[e,n])},d=t(3),f=["children","className","onScrollToEnd"],O=Object(a.createContext)({}),v=function(e){var n=e.children,t=e.className,u=e.onScrollToEnd,l=Object(r.a)(e,f),o=Object(a.useRef)(null),b=j("scrollable"),v=Object(a.useMemo)((function(){return{id:b}}),[b]);return s(o,{onEnterViewport:u}),Object(d.jsxs)("div",Object(c.a)(Object(c.a)({className:i()("overflow-y-auto h-full",t)},l),{},{id:b,children:[Object(d.jsx)(O.Provider,{value:v,children:n}),u&&Object(d.jsx)("div",{className:"h-40",ref:o})]}))}},895:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var c=t(12),r=t(899),a=t(3),u=function(e){return Object(a.jsx)(r.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},896:function(e,n,t){"use strict";t.d(n,"a",(function(){return s}));var c=t(12),r=t(60),a=t(55),u=t.n(a),i=t(253),l=t(3),o=["children","className"],s=function(e){var n=e.children,t=e.className,a=Object(r.a)(e,o);return n?Object(l.jsx)(i.a,Object(c.a)(Object(c.a)({},a),{},{className:u()("flex justify-between items-center m-1 mb-3 min-h-9",t),as:"div",children:n})):null}},897:function(e,n,t){"use strict";var c=t(107),r=t(2),a=t(938),u=t(252);n.a=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],t=arguments.length>2?arguments[2]:void 0,i=Object(r.useMemo)((function(){return new u.c}),[]),l=Object(a.a)([e].concat(Object(c.a)(n)),(function(){return i[e].apply(i,Object(c.a)(n))}),t);return l}},898:function(e,n,t){"use strict";t.d(n,"a",(function(){return v}));var c=t(12),r=t(60),a=t(55),u=t.n(a),i=t(2),l=t(920),o=t.n(l),s=t(894),b=t(3),j=function(e){var n=Object(i.useContext)(s.a).id;return Object(b.jsx)(o.a,Object(c.a)(Object(c.a)({once:!0,offset:100,scrollContainer:n&&"#".concat(n)},e),{},{placeholder:Object(b.jsx)("div",{className:"w-full h-full"})}))};var d=j,f=t(254),O=["className","wrapperClassName","source","caption","children"],v=function(e){var n=e.className,t=e.wrapperClassName,a=e.source,i=e.caption,l=e.children,o=Object(r.a)(e,O);return Object(b.jsxs)(f.a,Object(c.a)(Object(c.a)({},o),{},{className:u()("rounded-xl w-1/5 cursor-pointer",t),children:[Object(b.jsxs)(d,{className:u()("h-40 m-1 flex flex-col relative",n),children:[Object(b.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:a,alt:i}),l]}),i&&Object(b.jsx)("div",{className:"px-2",children:Object(b.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:i})})]}))}},938:function(e,n,t){"use strict";t.d(n,"a",(function(){return u}));var c=t(942),r=t(5),a=t(903);function u(e,n,t){var u=Object(r.l)(e,n,t);return Object(a.a)(u,c.a)}}}]);
//# sourceMappingURL=27.749a5164.chunk.js.map