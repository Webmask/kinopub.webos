(this["webpackJsonpkinopub.webos"]=this["webpackJsonpkinopub.webos"]||[]).push([[16],{1113:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return v}));var c=n(13),a=n(59),l=n(32),i=n(894),r=n(253),o=n(995),u=n(936),s=n(922),d=n(950),b=n(3),j={23:"\u041c\u0443\u043b\u044c\u0442\u0444\u0438\u043b\u044c\u043c\u044b",25:"\u0410\u043d\u0438\u043c\u0435"},v=function(){var e=Object(l.j)().genreType,t=Object(l.i)().state||{},n=t.params,v=t.title,f=void 0===v?function(e){return(e?j[e]:e)||""}(e):v,O="genre-".concat(e),m=Object(d.a)("".concat(O,":filter:params"),null),h=Object(a.a)(m,2),p=h[0],x=h[1],g=Object(s.a)("items",[Object(c.a)(Object(c.a)(Object(c.a)({},n),p),{},{genre:e})]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(i.a,{title:f}),Object(b.jsx)(u.a,{title:Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(r.a,{children:f}),Object(b.jsx)(o.a,{type:"movie",storageKey:O,defaultGenre:e,onFilter:x})]}),queryResult:g})]})}},894:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var c=n(13),a=n(901),l=n(3),i=function(e){return Object(l.jsx)(a.a,Object(c.a)({defaultTitle:"Unknown",titleTemplate:"%s | Kinopub WebOS"},e))}},895:function(e,t,n){"use strict";n.d(t,"a",(function(){return O}));var c=n(13),a=n(60),l=n(2),i=n(55),r=n.n(i),o=n(59),u=n(108),s=function(e,t,n){var c=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{disconnectOnLeave:!1},a=t.onEnterViewport,i=t.onLeaveViewport,r=Object(l.useState)(),s=Object(o.a)(r,2),d=s[1],b=Object(l.useRef)(null),j=Object(l.useRef)(!1),v=Object(l.useRef)(!1),f=Object(l.useRef)(0),O=Object(l.useRef)(0),m=Object(l.useCallback)((function(){if(e.current&&b.current){var t=Object(u.findDOMNode)(e.current);t&&b.current.observe(t)}}),[e,b]),h=Object(l.useCallback)((function(){if(e.current&&b.current){var t=Object(u.findDOMNode)(e.current);t&&(b.current.unobserve(t),b.current.disconnect(),b.current=null)}}),[e,b]),p=Object(l.useCallback)((function(e){var t=e[0]||{},n=t.isIntersecting,l=t.intersectionRatio,r="undefined"!==typeof n?n:l>0;if(!v.current&&r)return v.current=!0,null===a||void 0===a||a(),f.current+=1,j.current=r,void d(r);v.current&&!r&&(v.current=!1,null===i||void 0===i||i(),c.disconnectOnLeave&&b.current&&b.current.disconnect(),O.current+=1,j.current=r,d(r))}),[b,c.disconnectOnLeave,a,i]),x=Object(l.useCallback)((function(){b.current||(b.current=new IntersectionObserver(p,n))}),[b,n,p]);return Object(l.useEffect)((function(){return x(),m(),function(){h()}}),[x,m,h]),{inViewport:j.current,enterCount:f.current,leaveCount:O.current}},d=n(994);var b=function(e){var t=Object(d.a)();return Object(l.useMemo)((function(){return"".concat(e,"-").concat(t)}),[e,t])},j=n(3),v=["children","className","onScrollToEnd"],f=Object(l.createContext)({}),O=function(e){var t=e.children,n=e.className,i=e.onScrollToEnd,o=Object(a.a)(e,v),u=Object(l.useRef)(null),d=b("scrollable"),O=Object(l.useMemo)((function(){return{id:d}}),[d]);return s(u,{onEnterViewport:i}),Object(j.jsxs)("div",Object(c.a)(Object(c.a)({className:r()("overflow-y-auto h-full",n)},o),{},{id:d,children:[Object(j.jsx)(f.Provider,{value:O,children:t}),i&&Object(j.jsx)("div",{className:"h-40",ref:u})]}))}},896:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(13),a=n(60),l=n(2),i=n(55),r=n.n(i),o=n(254),u=n(256),s=n(3),d=["children","icon","iconOnly","autoFocus","className"],b=function(e){var t=e.children,n=e.icon,i=e.iconOnly,b=void 0===i?!t:i,j=e.autoFocus,v=e.className,f=Object(a.a)(e,d),O=Object(l.useRef)(null);return Object(l.useEffect)((function(){var e;return j&&(e=requestAnimationFrame((function(){var e,t;null===(e=O.current)||void 0===e||null===(t=e.node)||void 0===t||t.focus()}))),function(){e&&cancelAnimationFrame(e)}}),[O,j]),Object(s.jsx)(u.a,Object(c.a)(Object(c.a)({},f),{},{ref:O,className:r()("text-gray-200 whitespace-nowrap cursor-pointer rounded px-2 py-1",v),role:"button",children:Object(s.jsxs)("div",{className:"flex items-center",children:[n&&Object(s.jsx)(o.a,{className:r()({"mr-2":!b}),name:n}),!b&&t]})}))}},897:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(13),a=n(60),l=n(55),i=n.n(l),r=n(253),o=n(3),u=["children","className"],s=function(e){var t=e.children,n=e.className,l=Object(a.a)(e,u);return t?Object(o.jsx)(r.a,Object(c.a)(Object(c.a)({},l),{},{className:i()("flex justify-between items-center mx-2 my-1 mb-3 min-h-9",n),as:"div",children:t})):null}},898:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(13),a=n(60),l=n(55),i=n.n(l),r=n(256),o=n(3),u=["className","wrapperClassName","source","caption","children"],s=function(e){var t=e.className,n=e.wrapperClassName,l=e.source,s=e.caption,d=e.children,b=Object(a.a)(e,u);return Object(o.jsxs)(r.a,Object(c.a)(Object(c.a)({},b),{},{className:i()("rounded-xl w-1/5 cursor-pointer",n),children:[Object(o.jsxs)("div",{className:i()("h-40 m-1 flex flex-col relative",t),children:[Object(o.jsx)("img",{loading:"lazy",className:"w-full h-full object-cover rounded-xl border-2 border-gray-300 bg-gray-300",src:l,alt:s}),d]}),s&&Object(o.jsx)("div",{className:"px-2",children:Object(o.jsx)("p",{className:"text-gray-200 text-sm text-center overflow-hidden overflow-ellipsis whitespace-nowrap",children:s})})]}))}},899:function(e,t,n){"use strict";var c=n(107),a=n(2),l=n(933),i=n(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,r=Object(a.useMemo)((function(){return new i.c}),[]),o=Object(l.a)([e].concat(Object(c.a)(t)),(function(){return r[e].apply(r,Object(c.a)(t))}),n);return o}},900:function(e,t,n){"use strict";n.d(t,"d",(function(){return a})),n.d(t,"c",(function(){return l})),n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return r}));var c=n(252);function a(e,t,n){var a,l,i,r,o=(null===e||void 0===e||null===(a=e.videos)||void 0===a?void 0:a.find((function(e){var n=e.number,a=e.watching;return t?+t===+n:a.status!==c.b.Watched})))||(null===e||void 0===e||null===(l=e.videos)||void 0===l?void 0:l[0]),u=(null===e||void 0===e||null===(i=e.seasons)||void 0===i?void 0:i.find((function(e){var t=e.number,a=e.watching;return n?+n===+t:a.status!==c.b.Watched})))||(null===e||void 0===e||null===(r=e.seasons)||void 0===r?void 0:r[0]),s=(null===u||void 0===u?void 0:u.episodes.find((function(e){var n=e.number,a=e.watching;return t?+t===+n:a.status!==c.b.Watched})))||(null===u||void 0===u?void 0:u.episodes[0]);return[o||s,u]}function l(e,t,n){var c=(null===e||void 0===e?void 0:e.title)||"";return n?"".concat(c," (s").concat((null===t||void 0===t?void 0:t.snumber)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1,")"):c}function i(e,t,n){var c=(null===t||void 0===t?void 0:t.title)||"",a="s".concat((null===t||void 0===t?void 0:t.snumber)||1,"e").concat((null===t||void 0===t?void 0:t.number)||1);return n?c?"".concat(c," (").concat(a,")"):a:c}function r(e){return(null===e||void 0===e?void 0:e.quality)?2160===e.quality?"4k":1080===e.quality||720===e.quality?"hd":"sd":null}},902:function(e,t,n){"use strict";n.d(t,"a",(function(){return l}));var c=n(925),a=n.n(c);function l(e){return a()(e)}},904:function(e,t,n){"use strict";n.d(t,"a",(function(){return R}));var c,a,l=n(27),i=n.n(l),r=n(50),o=n(59),u=n(2),s=n(32),d=n(55),b=n.n(d),j=n(252),v=n(254),f=n(898),O=n(259),m=n(255),h=n(6),p=["title","titleId"];function x(){return(x=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function g(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function y(e,t){var n=e.title,l=e.titleId,i=g(e,p);return u.createElement("svg",x({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",ref:t,"aria-labelledby":l},i),n?u.createElement("title",{id:l},n):null,c||(c=u.createElement("path",{d:"M436.714 26.001H75.287c-27.21 0-49.285 22.075-49.285 49.286v361.427c0 27.211 22.075 49.285 49.285 49.285h361.427c27.211 0 49.284-22.074 49.284-49.285V75.287c0-27.211-22.073-49.286-49.284-49.286z",fill:"#fbbf14"})),a||(a=u.createElement("path",{fill:"#273238",d:"M91.716 190.287h33.883v131.222H91.716zM241.831 321.509h-29.469v-88.714l-11.912 88.714H179.3l-12.528-86.763v86.763h-29.776V190.287h43.947c3.39 20.329 6.16 40.968 8.934 61.504l7.803-61.504h44.152v131.222zM330.544 236.8c0-8.317.31-17.25-1.438-25.055-4.414-23.102-32.24-21.458-50.311-21.458h-25.261v131.222c88.408.103 77.01 6.16 77.01-84.709zm-43.022 61.913v-85.94c12.219 0 10.576 6.47 10.576 16.428v50.622c.001 9.958 1.951 19.199-10.576 18.89zM395.949 223.656c-9.137 0-15.298 2.773-21.457 9.447v-42.816h-32.55v131.222h30.597l1.953-8.317c5.852 6.982 12.218 10.063 21.457 10.063 20.331 0 22.795-15.607 22.795-31.729v-36.963c0-17.763-.821-30.907-22.795-30.907zm-16.427 80.706c-1.642 0-3.081-.823-3.902-2.465-2.26-5.237-1.128-45.281-1.128-45.897 0-3.901-1.132-13.04 5.03-13.04 7.496 0 6.364 7.496 6.364 13.04v33.574c.001 5.546 1.644 14.788-6.364 14.788z"})))}var w,N=u.forwardRef(y),k=(n.p,["title","titleId"]);function C(){return(C=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function I(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},l=Object.keys(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(c=0;c<l.length;c++)n=l[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}function M(e,t){var n=e.title,c=e.titleId,a=I(e,k);return u.createElement("svg",C({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 16 16",fill:"#ff6600",ref:t,"aria-labelledby":c},a),n?u.createElement("title",{id:c},n):null,w||(w=u.createElement("path",{d:"M15.518 10.736A8 8 0 11.482 5.264a8 8 0 0115.036 5.472zM8.94 8.342a1 1 0 10-1.88-.684 1 1 0 001.88.684zm-2.906 2.135A2 2 0 102.275 9.11a2 2 0 003.76 1.368zM8.086 4.84A2 2 0 104.328 3.47a2 2 0 003.758 1.368zm5.639 2.052a2 2 0 10-3.76-1.368 2 2 0 003.76 1.368zm-2.053 5.638a2 2 0 10-3.758-1.368 2 2 0 003.758 1.368z"})))}var E=u.forwardRef(M),V=(n.p,n(900)),A=n(902),F=n(3),R=function(e){var t=e.item,n=e.className,c=e.wrapperClassName,a=e.showViews,l=e.noCaption,d=e.disableNavigation,p=e.episodeId,x=e.seasonId,g=e.playOnClick,y=e.children,w=Object(s.h)(),k=Object(u.useState)(!1),C=Object(o.a)(k,2),I=C[0],M=C[1],R=Object(V.b)(t),S=Object(u.useMemo)((function(){var e;return null===t||void 0===t||null===(e=t.title)||void 0===e?void 0:e.split("/")[0]}),[null===t||void 0===t?void 0:t.title]),z=Object(u.useMemo)((function(){return a&&(null===t||void 0===t?void 0:t.views)&&Object(A.a)(null===t||void 0===t?void 0:t.views)||""}),[a,null===t||void 0===t?void 0:t.views]),T=Object(O.a)("itemMedia").itemMediaAsync,P=Object(u.useCallback)(Object(r.a)(i.a.mark((function e(){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(null===t||void 0===t?void 0:t.id)||d||!I){e.next=5;break}return e.next=3,T([t.id]);case 3:n=e.sent,w.push(Object(h.b)(h.a.Video,{itemId:null===n||void 0===n?void 0:n.item.id},p&&x?{episodeId:p,seasonId:x}:{}),{item:null===n||void 0===n?void 0:n.item});case 5:case"end":return e.stop()}}),e)}))),[null===t||void 0===t?void 0:t.id,d,p,x,I,w,T]),_=Object(u.useCallback)((function(){g?P():(null===t||void 0===t?void 0:t.id)&&!d&&w.push(Object(h.b)(h.a.Item,{itemId:t.id}))}),[null===t||void 0===t?void 0:t.id,d,g,P,w]);return Object(m.a)(["Play","Red"],P),Object(F.jsxs)(f.a,{onClick:_,onFocus:function(){return M(!0)},onBlur:function(){return M(!1)},source:null===t||void 0===t?void 0:t.posters.medium,caption:l?"":S,className:b()("h-72",n),wrapperClassName:c,children:[y,(null===t||void 0===t?void 0:t.new)&&Object(F.jsx)("div",{className:"absolute bg-red-600 border-gray-300 border-t-2 border-r-2 text-gray-200 px-2 py-1 rounded-bl rounded-tr-xl top-0 right-0",children:null===t||void 0===t?void 0:t.new}),z&&Object(F.jsxs)("div",{className:"absolute top-2 right-2 h-6 pr-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:[Object(F.jsx)(v.a,{name:"visibility"}),z]}),x&&p&&Object(F.jsx)("div",{className:"absolute top-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex items-center",children:"s".concat(x,"e").concat(p)}),(R||(null===t||void 0===t?void 0:t.ac3)||(null===t||void 0===t?void 0:t.advert))&&Object(F.jsxs)("div",{className:"absolute top-2 left-2 h-6 bg-black bg-opacity-50 rounded flex items-center",children:[R&&Object(F.jsx)(v.a,{name:R}),(null===t||void 0===t?void 0:t.ac3)===j.a.True&&Object(F.jsx)(v.a,{name:"graphic_eq"}),(null===t||void 0===t?void 0:t.advert)&&Object(F.jsx)(v.a,{name:"report"})]}),((null===t||void 0===t?void 0:t.rating)>0||(null===t||void 0===t?void 0:t.imdb_rating)>0||(null===t||void 0===t?void 0:t.kinopoisk_rating)>0)&&Object(F.jsxs)("div",{className:"absolute bottom-2 left-2 right-2 h-6 px-2 text-xs text-gray-200 bg-black bg-opacity-50 rounded flex justify-between items-center",children:[Object(F.jsxs)("div",{className:"flex items-center justify-start w-1/3",children:[Object(F.jsx)(N,{className:"h-3 w-3 mr-1"}),Object(F.jsx)("span",{children:((null===t||void 0===t?void 0:t.imdb_rating)||0).toFixed(1)})]}),Object(F.jsxs)("div",{className:"flex items-center justify-center w-1/3",children:[Object(F.jsx)(E,{className:"h-3 w-3 mr-1"}),Object(F.jsx)("span",{children:((null===t||void 0===t?void 0:t.kinopoisk_rating)||0).toFixed(1)})]}),Object(F.jsxs)("div",{className:"flex items-center justify-end w-1/3",children:[Object(F.jsx)(v.a,{name:"thumb_up"}),Object(F.jsxs)("span",{children:[(null===t||void 0===t?void 0:t.rating_percentage)||0,"%"]})]})]})]})}},905:function(e,t,n){"use strict";var c=n(59),a=n(2);t.a=function(e){var t=Object(a.useState)(e),n=Object(c.a)(t,2),l=n[0],i=n[1];return Object(a.useEffect)((function(){i(e)}),[e]),[l,i]}},907:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(107),a=(n(2),n(55)),l=n.n(a),i=n(198),r=n.n(i),o=n(895),u=n(897),s=n(904),d=n(3),b=function(e){var t=e.title,n=e.items,a=e.loading,i=e.onScrollToEnd,b=e.scrollable,j=void 0===b||b,v=e.className,f=e.titleClassName,O=Object(d.jsxs)("div",{children:[Object(d.jsx)(u.a,{className:f,children:t}),Object(d.jsxs)("div",{className:l()("flex flex-wrap",v),children:[r()(n,(function(e){return Object(d.jsx)(s.a,{item:e},e.id)})),a&&r()(Object(c.a)(new Array(15)),(function(e,t){return Object(d.jsx)(s.a,{},t)}))]})]});return j?Object(d.jsx)(o.a,{onScrollToEnd:i,children:O}):O}},909:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var c=n(13),a=n(60),l=n(2),i=n(896),r=n(3),o=["defaultChecked","checked","onChange","className","children","disabled"],u=function(e){var t=e.defaultChecked,n=e.checked,u=e.onChange,s=e.className,d=e.children,b=e.disabled,j=Object(a.a)(e,o),v=Object(l.useRef)(null),f=Object(l.useCallback)((function(e){null===u||void 0===u||u(e.target.checked,e)}),[u]),O=Object(l.useCallback)((function(){var e;null===(e=v.current)||void 0===e||e.click()}),[]);return Object(r.jsxs)(i.a,{className:s,onClick:O,disabled:b,children:[Object(r.jsx)("input",Object(c.a)(Object(c.a)({type:"checkbox"},j),{},{ref:v,className:"inline-block w-4 h-4",defaultChecked:t,checked:n,onChange:f,disabled:b})),Object(r.jsx)("span",{className:"inline-block ml-2 whitespace-nowrap",children:d})]})}},912:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(13),a=n(937),l=n.n(a),i=n(3),r=l()({enterTo:"default-element",defaultElement:".spottable",selector:".spottable",overflow:!0,preserveId:!0},(function(e){return Object(i.jsx)("div",Object(c.a)({},e))}))},913:function(e,t,n){"use strict";var c=n(59),a=n(2),l=n(906),i=n.n(l),r=n(924),o=n.n(r),u=n(908),s=n.n(u);t.a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"items",l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"id",r=e.data,u=e.isLoading,d=e.isFetchingNextPage,b=e.fetchNextPage,j=Object(a.useState)(!1),v=Object(c.a)(j,2),f=v[0],O=v[1],m=Object(a.useMemo)((function(){return s()(i()(o()(null===r||void 0===r?void 0:r.pages,(function(e){return e[n]}))),l)}),[null===r||void 0===r?void 0:r.pages,n,l]),h=Object(a.useMemo)((function(){return t?t(m):m}),[m,t]),p=Object(a.useCallback)((function(){f&&(b(),O(!1))}),[f,b]);return Object(a.useEffect)((function(){O(!0)}),[m.length]),[h,u||d,p]}},922:function(e,t,n){"use strict";var c=n(13),a=n(107),l=n(2),i=n(963),r=n(252);t.a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0,o=Object(l.useMemo)((function(){return new r.c}),[]),u=Object(i.a)([e].concat(Object(a.a)(t)),(function(n){var c=n.pageParam;return o[e].apply(o,Object(a.a)(t).concat([c]))}),Object(c.a)({getNextPageParam:function(e){var t;return(null===e||void 0===e||null===(t=e.pagination)||void 0===t?void 0:t.current)+1||1}},n));return u}},923:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(59),a=n(2),l=n(896),i=n(254),r=n(253),o=n(905),u=n(1100);var s=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:500,n=arguments.length>2?arguments[2]:void 0;return Object(u.a)(e,t,n)},d=n(3),b=function(e){var t=e.open,n=e.onToggle,u=e.title,b=e.subtitle,j=e.className,v=e.children,f=e.disabled,O=Object(o.a)(t),m=Object(c.a)(O,2),h=m[0],p=m[1],x=Object(a.useCallback)((function(){if(!f){var e=!h;null===n||void 0===n||n(e),p(e)}}),[f,h,p,n]),g=s(x);return Object(d.jsxs)("div",{className:"flex flex-col w-full",children:[Object(d.jsx)(l.a,{onClick:g,className:j,disabled:f,children:Object(d.jsxs)("div",{className:"flex flex-col",children:[Object(d.jsxs)("div",{className:"flex items-center",children:[Object(d.jsx)(r.a,{children:u}),!f&&Object(d.jsx)(i.a,{name:h?"expand_less":"expand_more"})]}),!h&&b&&Object(d.jsx)(r.a,{className:"mt-2",children:b})]})}),h&&v]})}},930:function(e,t,n){"use strict";n.d(t,"a",(function(){return j}));var c=n(59),a=n(2),l=n(198),i=n.n(l),r=n(923),o=n(13),u=n(909),s=n(3),d=function(e){return Object(s.jsx)(u.a,Object(o.a)(Object(o.a)({},e),{},{type:"radio"}))},b=n(905),j=function(e){var t=e.label,n=e.options,l=e.defaultValue,o=e.value,u=e.onChange,j=e.closeOnChange,v=void 0===j||j,f=e.className,O=e.splitIn,m=e.disabled,h=Object(a.useState)(!1),p=Object(c.a)(h,2),x=p[0],g=p[1],y=Object(b.a)(o||l),w=Object(c.a)(y,2),N=w[0],k=w[1],C=Object(a.useMemo)((function(){return Array.isArray(n)?n.map((function(e,t){return"object"===typeof e?e:{title:e,value:t}})):[]}),[n]),I=Object(a.useMemo)((function(){return C.find((function(e){return e.value===N}))}),[C,N]),M=Object(a.useCallback)((function(e){k(e),null===u||void 0===u||u(e),v&&g(!1)}),[k,u,v]),E=Object(a.useCallback)((function(e){return function(t){t&&M(e.value)}}),[M]);return Object(s.jsx)(r.a,{open:x,onToggle:g,title:t,subtitle:null===I||void 0===I?void 0:I.title,className:f,disabled:m,children:Object(s.jsx)("div",{className:"flex flex-wrap",children:i()(C,(function(e){return Object(s.jsx)(d,{className:O?"w-1/".concat(O):"w-full",checked:e.value===N,onChange:E(e),children:e.title},e.value)}))})})}},931:function(e,t,n){"use strict";n.d(t,"a",(function(){return m}));var c=n(13),a=n(60),l=n(2),i=n(257),r=n.n(i),o=n(55),u=n.n(o),s=n(895),d=n(912),b=n(255),j=n(32);var v=function(e,t,n){var c=Object(j.h)(),a=Object(l.useCallback)((function(){return c.location.hash.includes(e)}),[e,c]),i=Object(l.useCallback)((function(){a()||c.push({hash:e,state:c.location.state,search:c.location.search,pathname:c.location.pathname}),null===n||void 0===n||n()}),[e,a,c,n]),r=Object(l.useCallback)((function(){a()&&c.goBack(),null===t||void 0===t||t()}),[a,c,t]);return Object(l.useEffect)((function(){var e=setTimeout((function(){a()?i():r()}),100);return function(){clearTimeout(e)}}),[a,i,r,c.location.hash]),Object(l.useMemo)((function(){return{open:i,close:r}}),[i,r])},f=n(3),O=["visible","onClose","children","className","closeButton"],m=function(e){var t=e.visible,n=e.onClose,i=e.children,o=e.className,j=e.closeButton,m=void 0===j?"Blue":j,h=Object(a.a)(e,O),p=Object(l.useMemo)((function(){return r.a.add({})}),[]),x=Object(l.useCallback)((function(){n()}),[n]),g=Object(l.useCallback)((function(){if(t)return x(),!1}),[t,x]),y=Object(l.useCallback)((function(){if(!r.a.focus(p)){var e=r.a.getCurrent();e&&e.blur(),r.a.setActiveContainer(p),setTimeout((function(){r.a.setPointerMode(!1),r.a.focus(p)}),500)}}),[p]),w=Object(l.useCallback)((function(){var e=r.a.getCurrent();requestAnimationFrame((function(){null===e||void 0===e||e.scrollIntoViewIfNeeded()}))}),[]);Object(b.a)("Back",g),Object(b.a)("ArrowUp",w),Object(b.a)("ArrowDown",w),Object(b.a)(m,g);var N=v("popup",g);return Object(l.useEffect)((function(){t?(y(),N.open()):N.close()}),[t,y,N]),Object(f.jsxs)(f.Fragment,{children:[Object(f.jsx)("div",{className:u()("fixed z-999 top-0 left-0 right-0 bottom-0 bg-black bg-opacity-50",{hidden:!t}),onClick:x}),Object(f.jsx)(d.a,Object(c.a)(Object(c.a)({},h),{},{spotlightId:p,spotlightRestrict:"self-only",spotlightDisabled:!t,className:u()("fixed z-999 bottom-0 left-0 right-0 p-4 bg-black ring",{hidden:!t},o),children:Object(f.jsx)(s.a,{className:"max-h-screen",children:i})}))]})}},936:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(59),a=n(907),l=n(913),i=n(3),r=function(e){var t=e.title,n=e.showResult,r=void 0===n||n,o=e.queryResult,u=e.processItems,s=Object(l.a)(o,u),d=Object(c.a)(s,3),b=d[0],j=d[1],v=d[2];return Object(i.jsx)(a.a,{title:t,items:b,loading:r&&j,onScrollToEnd:v})}},950:function(e,t,n){"use strict";var c=n(59),a=n(2),l=n(57),i=Object(l.a)();t.a=function(e,t){var n,l=Object(a.useState)(null!==(n=i.getItem(e))&&void 0!==n?n:t),r=Object(c.a)(l,2),o=r[0],u=r[1],s=Object(a.useCallback)((function(t,n){i.setItem(e,t,n)}),[e]);return Object(a.useEffect)((function(){var n=function(){var n;u(null!==(n=i.getItem(e))&&void 0!==n?n:t)},c=i.subscribe(n);return n(),c}),[e,t]),[o,s]}},995:function(e,t,n){"use strict";n.d(t,"a",(function(){return V}));var c=n(13),a=n(107),l=n(59),i=n(2),r=n(965),o=n.n(r),u=n(996),s=n.n(u),d=n(997),b=n.n(d),j=n(998),v=n.n(j),f=n(896),O=n(909),m=n(931),h=n(930),p=n(899),x=n(255),g=n(950),y=n(3),w={movie:"movie",serial:"movie",concert:"music",documovie:"docu",docuserial:"docu",tvshow:"tvshow"},N={title:"\u2014",value:null},k=v()(1912,(new Date).getFullYear()+1).reverse().map((function(e){return{title:"".concat(e),value:"".concat(e)}})),C=v()(1,10).reverse().map((function(e){return{title:"".concat(e,"+"),value:"".concat(e)}})),I=[{title:"0+",value:"0"},{title:"6+",value:"6"},{title:"12+",value:"12"},{title:"16+",value:"16"},{title:"18+",value:"18"}],M=[{title:"\u0414\u0430\u0442\u0430 \u043e\u0431\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u044f",value:"updated"},{title:"\u0414\u0430\u0442\u0430 \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d\u0438\u044f",value:"created"},{title:"\u0413\u043e\u0434 \u0432\u044b\u043f\u0443\u0441\u043a\u0430",value:"year"},{title:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",value:"title"},{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u041a\u0438\u043d\u043e\u043f\u0430\u0431",value:"rating"},{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u041a\u0438\u043d\u043e\u041f\u043e\u0438\u0441\u043a",value:"kinopoisk_rating"},{title:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 IMDb",value:"imdb_rating"},{title:"\u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u0430\u043c",value:"views"}],E=[{title:"\u0412\u0441\u0451 \u0432\u0440\u0435\u043c\u044f",value:null},{title:"\u0421\u0443\u0442\u043a\u0438",value:o()().add(-1,"day").unix()},{title:"\u041d\u0435\u0434\u0435\u043b\u044e",value:o()().add(-1,"week").unix()},{title:"\u041c\u0435\u0441\u044f\u0446",value:o()().add(-1,"month").unix()},{title:"\u041a\u0432\u0430\u0440\u0442\u0430\u043b",value:o()().add(-3,"month").unix()},{title:"\u0413\u043e\u0434",value:o()().add(-1,"year").unix()}],V=function(e){var t=e.type,n=e.defaultGenre,r=e.storageKey,o=e.onFilter,u=Object(i.useState)(!1),d=Object(l.a)(u,2),j=d[0],v=d[1],V=Object(p.a)("genders").data,A=Object(p.a)("countries").data,F=Object(p.a)("subtitles").data,R=Object(g.a)("".concat(r,":filter:genre"),null),S=Object(l.a)(R,2),z=S[0],T=S[1],P=Object(g.a)("".concat(r,":filter:country"),null),_=Object(l.a)(P,2),B=_[0],q=_[1],D=Object(g.a)("".concat(r,":filter:subtitle"),null),K=Object(l.a)(D,2),L=K[0],W=K[1],G=Object(g.a)("".concat(r,":filter:yearFrom"),null),H=Object(l.a)(G,2),J=H[0],U=H[1],Y=Object(g.a)("".concat(r,":filter:yearTo"),null),Q=Object(l.a)(Y,2),X=Q[0],Z=Q[1],$=Object(g.a)("".concat(r,":filter:ratingKinopoisk"),null),ee=Object(l.a)($,2),te=ee[0],ne=ee[1],ce=Object(g.a)("".concat(r,":filter:ratingIMDB"),null),ae=Object(l.a)(ce,2),le=ae[0],ie=ae[1],re=Object(g.a)("".concat(r,":filter:age"),null),oe=Object(l.a)(re,2),ue=oe[0],se=oe[1],de=Object(g.a)("".concat(r,":filter:sorting"),M[0].value),be=Object(l.a)(de,2),je=be[0],ve=be[1],fe=Object(g.a)("".concat(r,":filter:period"),E[0].value),Oe=Object(l.a)(fe,2),me=Oe[0],he=Oe[1],pe=Object(g.a)("".concat(r,":filter:sortingAsc"),!1),xe=Object(l.a)(pe,2),ge=xe[0],ye=xe[1],we=Object(g.a)("".concat(r,":filter:only4K"),!1),Ne=Object(l.a)(we,2),ke=Ne[0],Ce=Ne[1],Ie=Object(g.a)("".concat(r,":filter:onlyAC3"),!1),Me=Object(l.a)(Ie,2),Ee=Me[0],Ve=Me[1],Ae=Object(g.a)("".concat(r,":filter:skipAds"),!1),Fe=Object(l.a)(Ae,2),Re=Fe[0],Se=Fe[1],ze=Object(g.a)("".concat(r,":filter:skipErotic"),!1),Te=Object(l.a)(ze,2),Pe=Te[0],_e=Te[1],Be=Object(i.useMemo)((function(){var e,n;return null===V||void 0===V||null===(e=V.items)||void 0===e||null===(n=e.filter)||void 0===n?void 0:n.call(e,(function(e){return e.type===w[t]}))}),[V,t]),qe=Object(i.useMemo)((function(){var e;return[N].concat(Object(a.a)((null===Be||void 0===Be||null===(e=Be.map)||void 0===e?void 0:e.call(Be,(function(e){return{title:e.title,value:"".concat(e.id)}})))||[]))}),[Be]),De=Object(i.useMemo)((function(){var e,t;return[N].concat(Object(a.a)((null===A||void 0===A||null===(e=A.items)||void 0===e||null===(t=e.map)||void 0===t?void 0:t.call(e,(function(e){return{title:e.title,value:"".concat(e.id)}})))||[]))}),[A]),Ke=Object(i.useMemo)((function(){var e,t;return[N].concat(Object(a.a)((null===F||void 0===F||null===(e=F.items)||void 0===e||null===(t=e.map)||void 0===t?void 0:t.call(e,(function(e){return{title:e.title,value:e.id}})))||[]))}),[F]),Le=Object(i.useMemo)((function(){return[N].concat(Object(a.a)(k))}),[]),We=Object(i.useMemo)((function(){return[N].concat(Object(a.a)(C))}),[]),Ge=Object(i.useMemo)((function(){return[N].concat(I)}),[]),He=Object(i.useCallback)((function(){T(null),q(null),se(null),W(null),U(null),Z(null),ne(null),ie(null),ve(M[0].value),he(E[0].value),ye(!1),Ce(!1),Ve(!1),Se(!1),_e(!1)}),[T,q,se,W,U,Z,ne,ie,ve,he,ye,Ce,Ve,Se,_e]),Je=Object(i.useCallback)((function(){v(!0)}),[]),Ue=Object(i.useCallback)((function(){v(!1)}),[]),Ye=Object(i.useCallback)((function(){if(j){var e,t,n=Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)(Object(c.a)({sort:"".concat(ge?"":"-").concat(je)},z?{genre:z}:{}),B?{country:B}:{}),ue?{age:ue}:{}),Ee?{ac3:1}:{}),ke?{quality:["4"]}:{}),J||X?{year:"".concat(J||(null===(e=b()(k))||void 0===e?void 0:e.value),"-").concat(X||(null===(t=s()(k))||void 0===t?void 0:t.value))}:{}),L?{subtitles:L}:{}),Re||Pe?{force:[Re&&"advert",Pe&&"erotic"].filter(Boolean)}:{}),me||le||te?{conditions:[me&&"created>=".concat(me),le&&"imdb_rating>=".concat(le),te&&"kinopoisk_rating>=".concat(te)].filter(Boolean)}:{});null===o||void 0===o||o(n),Ue()}}),[j,z,B,J,X,L,je,ge,Re,Pe,te,le,ke,ue,Ee,me,Ue,o]),Qe=Object(i.useCallback)((function(){j&&(He(),null===o||void 0===o||o(null),Ue())}),[j,He,Ue,o]);return Object(x.a)("Red",Qe),Object(x.a)("Green",Ye),Object(x.a)("Blue",Je),Object(y.jsxs)(y.Fragment,{children:[Object(y.jsx)(f.a,{icon:"filter_list",className:"text-blue-600",onClick:Je}),Object(y.jsxs)(m.a,{visible:j,onClose:Ue,children:[Object(y.jsxs)("div",{className:"flex justify-between",children:[Object(y.jsx)(h.a,{className:"my-1",label:"\u0416\u0430\u043d\u0440",value:n||z,defaultValue:N.value,onChange:T,options:qe,splitIn:2,disabled:!!n}),Object(y.jsx)(h.a,{className:"my-1",label:"\u0421\u0442\u0440\u0430\u043d\u0430",value:B,defaultValue:N.value,onChange:q,options:De,splitIn:2})]}),Object(y.jsxs)("div",{className:"flex justify-between",children:[Object(y.jsx)(h.a,{className:"my-1",label:"\u0421\u0443\u0431\u0442\u0438\u0442\u0440\u044b",value:L,defaultValue:N.value,onChange:W,options:Ke,splitIn:3}),Object(y.jsx)(h.a,{disabled:!0,className:"my-1",label:"\u0412\u043e\u0437\u0440\u0430\u0441\u0442",value:ue,defaultValue:N.value,onChange:se,options:Ge,splitIn:6})]}),Object(y.jsxs)("div",{className:"flex justify-between",children:[Object(y.jsx)(h.a,{className:"my-1",label:"\u0413\u043e\u0434 \u0432\u044b\u0445\u043e\u0434\u0430 \u0441",value:J,defaultValue:N.value,onChange:U,options:Le,splitIn:6}),Object(y.jsx)(h.a,{className:"my-1",label:"\u0413\u043e\u0434 \u0432\u044b\u0445\u043e\u0434\u0430 \u043f\u043e",value:X,defaultValue:N.value,onChange:Z,options:Le,splitIn:6})]}),Object(y.jsxs)("div",{className:"flex justify-between",children:[Object(y.jsx)(h.a,{className:"my-1",label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 \u041a\u0438\u043d\u043e\u041f\u043e\u0438\u0441\u043a",value:te,defaultValue:N.value,onChange:ne,options:We,splitIn:5}),Object(y.jsx)(h.a,{className:"my-1",label:"\u0420\u0435\u0439\u0442\u0438\u043d\u0433 IMDb",value:le,defaultValue:N.value,onChange:ie,options:We,splitIn:5})]}),Object(y.jsxs)("div",{className:"flex justify-between",children:[Object(y.jsx)(h.a,{className:"my-1",label:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e",value:je,defaultValue:M[0].value,onChange:ve,options:M,splitIn:2}),Object(y.jsx)(h.a,{className:"my-1",label:"\u041f\u0435\u0440\u0438\u043e\u0434 \u0437\u0430",value:me,defaultValue:E[0].value,onChange:he,options:E,splitIn:3})]}),Object(y.jsxs)("div",{className:"flex justify-between",children:[Object(y.jsxs)("div",{className:"flex flex-col justify-start w-1/2",children:[Object(y.jsx)(O.a,{checked:ge,onChange:function(e){return ye(e)},children:"\u0421\u043e\u0440\u0442\u0438\u0440\u043e\u0432\u043a\u0430 \u043f\u043e \u0432\u043e\u0437\u0440\u0430\u0441\u0442\u0430\u043d\u0438\u044e"}),Object(y.jsxs)("div",{className:"flex justify-between",children:[Object(y.jsx)(O.a,{className:"w-1/2",checked:Re,onChange:function(e){return Se(e)},children:"\u0411\u0435\u0437 \u0440\u0435\u043a\u043b\u0430\u043c\u044b"}),Object(y.jsx)(O.a,{className:"w-1/2",checked:Pe,onChange:function(e){return _e(e)},children:"\u0411\u0435\u0437 \u044d\u0440\u043e\u0442\u0438\u043a\u0438"})]})]}),Object(y.jsxs)("div",{className:"flex flex-col justify-start w-1/2",children:[Object(y.jsx)(O.a,{checked:ke,onChange:function(e){return Ce(e)},children:"\u0422\u043e\u043b\u044c\u043a\u043e 4K"}),Object(y.jsx)(O.a,{checked:Ee,onChange:function(e){return Ve(e)},disabled:!0,children:"\u0422\u043e\u043b\u044c\u043a\u043e AC3"})]})]}),Object(y.jsxs)("div",{className:"flex justify-end",children:[Object(y.jsx)(f.a,{className:"text-red-600",icon:"clear",onClick:Qe,children:"\u0421\u0431\u0440\u043e\u0441\u0438\u0442\u044c"}),Object(y.jsx)(f.a,{className:"text-green-600",icon:"done",onClick:Ye,children:"\u041f\u0440\u0438\u043c\u0435\u043d\u0438\u0442\u044c"})]})]})]})}}}]);
//# sourceMappingURL=16.bdef5833.chunk.js.map