(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[459],{7237:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/login",function(){return r(1442)}])},1551:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(u){i=!0,o=u}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}t.default=void 0;var a,s=(a=r(7294))&&a.__esModule?a:{default:a},i=r(1003),u=r(880),c=r(9246);var l={};function f(e,t,r,n){if(e&&i.isLocalURL(t)){e.prefetch(t,r,n).catch((function(e){0}));var o=n&&"undefined"!==typeof n.locale?n.locale:e&&e.locale;l[t+"%"+r+(o?"%"+o:"")]=!0}}var d=function(e){var t,r=!1!==e.prefetch,n=u.useRouter(),a=s.default.useMemo((function(){var t=o(i.resolveHref(n,e.href,!0),2),r=t[0],a=t[1];return{href:r,as:e.as?i.resolveHref(n,e.as):a||r}}),[n,e.href,e.as]),d=a.href,p=a.as,m=e.children,h=e.replace,v=e.shallow,g=e.scroll,y=e.locale;"string"===typeof m&&(m=s.default.createElement("a",null,m));var w=(t=s.default.Children.only(m))&&"object"===typeof t&&t.ref,x=o(c.useIntersection({rootMargin:"200px"}),2),b=x[0],j=x[1],N=s.default.useCallback((function(e){b(e),w&&("function"===typeof w?w(e):"object"===typeof w&&(w.current=e))}),[w,b]);s.default.useEffect((function(){var e=j&&r&&i.isLocalURL(d),t="undefined"!==typeof y?y:n&&n.locale,o=l[d+"%"+p+(t?"%"+t:"")];e&&!o&&f(n,d,p,{locale:t})}),[p,d,j,y,r,n]);var Z={ref:N,onClick:function(e){t.props&&"function"===typeof t.props.onClick&&t.props.onClick(e),e.defaultPrevented||function(e,t,r,n,o,a,s,u){("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&i.isLocalURL(r))&&(e.preventDefault(),t[o?"replace":"push"](r,n,{shallow:a,locale:u,scroll:s}))}(e,n,d,p,h,v,g,y)},onMouseEnter:function(e){t.props&&"function"===typeof t.props.onMouseEnter&&t.props.onMouseEnter(e),i.isLocalURL(d)&&f(n,d,p,{priority:!0})}};if(e.passHref||"a"===t.type&&!("href"in t.props)){var k="undefined"!==typeof y?y:n&&n.locale,C=n&&n.isLocaleDomain&&i.getDomainLocale(p,k,n&&n.locales,n&&n.domainLocales);Z.href=C||i.addBasePath(i.addLocale(p,k,n&&n.defaultLocale))}return s.default.cloneElement(t,Z)};t.default=d},9246:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function o(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=r){var n,o,a=[],s=!0,i=!1;try{for(r=r.call(e);!(s=(n=r.next()).done)&&(a.push(n.value),!t||a.length!==t);s=!0);}catch(u){i=!0,o=u}finally{try{s||null==r.return||r.return()}finally{if(i)throw o}}return a}}(e,t)||function(e,t){if(!e)return;if("string"===typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,r=e.rootMargin,n=e.disabled||!i,l=a.useRef(),f=o(a.useState(!1),2),d=f[0],p=f[1],m=o(a.useState(t?t.current:null),2),h=m[0],v=m[1],g=a.useCallback((function(e){l.current&&(l.current(),l.current=void 0),n||d||e&&e.tagName&&(l.current=function(e,t,r){var n=function(e){var t,r={root:e.root||null,margin:e.rootMargin||""},n=c.find((function(e){return e.root===r.root&&e.margin===r.margin}));n?t=u.get(n):(t=u.get(r),c.push(r));if(t)return t;var o=new Map,a=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),r=e.isIntersecting||e.intersectionRatio>0;t&&r&&t(r)}))}),e);return u.set(r,t={id:r,observer:a,elements:o}),t}(r),o=n.id,a=n.observer,s=n.elements;return s.set(e,t),a.observe(e),function(){if(s.delete(e),a.unobserve(e),0===s.size){a.disconnect(),u.delete(o);var t=c.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&c.splice(t,1)}}}(e,(function(e){return e&&p(e)}),{root:h,rootMargin:r}))}),[n,h,r,d]);return a.useEffect((function(){if(!i&&!d){var e=s.requestIdleCallback((function(){return p(!0)}));return function(){return s.cancelIdleCallback(e)}}}),[d]),a.useEffect((function(){t&&v(t.current)}),[t]),[g,d]};var a=r(7294),s=r(4686),i="undefined"!==typeof IntersectionObserver;var u=new Map,c=[]},746:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){return(0,n.jsxs)("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:[(0,n.jsx)("div",{children:e.logo}),(0,n.jsx)("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:e.children})]})}},8002:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){return(0,n.jsx)(n.Fragment,{children:e.status&&(0,n.jsx)("div",{className:"".concat(e.className," font-medium text-sm text-green-600"),children:e.status})})}},6027:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){return(0,n.jsx)(n.Fragment,{children:e.errors.length>0&&(0,n.jsxs)("div",{className:e.className,children:[(0,n.jsx)("div",{className:"font-medium text-red-600",children:"Whoops! Something went wrong."}),(0,n.jsx)("ul",{className:"mt-3 list-disc list-inside text-sm text-red-600",children:e.errors.map((function(e){return(0,n.jsx)("li",{children:e},e)}))})]})})}},4495:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t=e.id,r=e.type,o=e.name,a=e.value,s=e.className,i=e.onChange,u=e.autoComplete,c=e.required,l=void 0!==c&&c,f=e.autoFocus,d=void 0!==f&&f,p=e.disabled,m=void 0!==p&&p;return(0,n.jsx)("input",{id:t,type:r,name:o,value:a,onChange:i,autoComplete:u,required:l,autoFocus:d,disabled:m,className:"".concat(s," rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50")})}},5363:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){return(0,n.jsx)("label",{className:"".concat(e.className," block font-medium text-sm text-gray-700"),htmlFor:e.htmlFor,children:e.children})}},3153:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){return(0,n.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"120",height:"120",className:e.className,children:[(0,n.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,n.jsx)("path",{d:"M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z"})]})}},1458:function(e,t,r){"use strict";var n=r(5893);r(7294);t.Z=function(e){var t=e.type,r=void 0===t?"submit":t,o=e.className,a=e.children;return(0,n.jsx)("button",{type:r,className:"".concat(o," inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"),children:a})}},1407:function(e,t,r){"use strict";var n=r(5893),o=(r(7294),r(3775));t.Z=function(){return(0,n.jsx)("div",{className:"h-screen w-screen flex justify-center items-center bg-gray-100",children:(0,n.jsx)(o.Z,{})})}},7499:function(e,t,r){"use strict";var n=r(5893),o=r(9008);r(7294);t.Z=function(e){var t=e.children;return(0,n.jsxs)("div",{children:[(0,n.jsx)(o.default,{children:(0,n.jsx)("title",{children:"MyNote"})}),(0,n.jsx)("div",{className:"font-sans text-gray-900 antialiased",children:t})]})}},3775:function(e,t,r){"use strict";var n=r(5893),o=(r(7294),r(3033));t.Z=function(){return(0,n.jsx)(o.gy,{color:"#CCC",height:80,width:80})}},483:function(e,t,r){"use strict";r.d(t,{a:function(){return f}});var n=r(4051),o=r.n(n),a=r(8100),s=r(9877),i=r(7294),u=r(1163);function c(e,t,r,n,o,a,s){try{var i=e[a](s),u=i.value}catch(c){return void r(c)}i.done?t(u):Promise.resolve(u).then(n,o)}function l(e){return function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){c(a,n,o,s,i,"next",e)}function i(e){c(a,n,o,s,i,"throw",e)}s(void 0)}))}}var f=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.middleware,r=e.redirectIfAuthenticated,n=void 0===r?"/":r,c=(0,u.useRouter)(),f=(0,a.ZP)("/api/user",(function(){return s.Z.get("/api/user").then((function(e){return e.data})).catch((function(e){if(409!==e.response.status)throw e;c.push("/verify-email")}))})),d=f.data,p=f.error,m=f.mutate,h=function(){return s.Z.get("/sanctum/csrf-cookie")},v=function(){var e=l(o().mark((function e(t){var r,n,a,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setErrors,n=t.name,a=t.email,i=t.password,u=t.passwordConfirmation,e.next=3,h();case 3:r([]),s.Z.post("/register",{name:n,email:a,password:i,password_confirmation:u}).then((function(){return m()})).catch((function(e){if(422!==e.response.status)throw e;r(Object.values(e.response.data.errors).flat())}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=l(o().mark((function e(t){var r,n,a,i;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setErrors,n=t.setStatus,a=t.email,i=t.password,e.next=3,h();case 3:r([]),n(null),s.Z.post("/login",{email:a,password:i}).then((function(){return m()})).catch((function(e){if(console.log(e.response),422!==e.response.status)throw e;r(Object.values(e.response.data.errors).flat())}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=function(){var e=l(o().mark((function e(t){var r,n,a;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setErrors,n=t.setStatus,a=t.email,e.next=3,h();case 3:r([]),n(null),s.Z.post("/forgot-password",{email:a}).then((function(e){return n(e.data.status)})).catch((function(e){if(422!==e.response.status)throw e;r(Object.values(e.response.data.errors).flat())}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=l(o().mark((function e(t){var r,n,a,i,u;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.setErrors,n=t.setStatus,a=t.email,i=t.password,u=t.passwordConfirmation,e.next=3,h();case 3:r([]),n(null),s.Z.post("/reset-password",{token:c.query.token,email:a,password:i,passwordConfirmation:u}).then((function(e){return c.push("/login?reset="+window.btoa(e.data.status))})).catch((function(e){if(422!==e.response.status)throw e;r(Object.values(e.response.data.errors).flat())}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),x=function(e){var t=e.setStatus;s.Z.post("/email/verification-notification").then((function(e){return t(e.data.status)}))},b=function(){var e=l(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p){e.next=3;break}return e.next=3,s.Z.post("/logout").then((function(){return m()}));case 3:window.location.pathname="/login";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),j=function(){var e=l(o().mark((function e(){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h();case 2:s.Z.delete("/withdraw").then((function(){return m()}));case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){"guest"===t&&n&&d&&c.push(n),"auth"===t&&p&&b()}),[d,p]),{user:d,register:v,login:g,forgotPassword:y,resetPassword:w,resendEmailVerification:x,logout:b,withdraw:j}}},9877:function(e,t,r){"use strict";var n=r(9669),o=r.n(n)().create({baseURL:"https://mynote-api.euchi.jp",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json"},withCredentials:!0});t.Z=o},1442:function(e,t,r){"use strict";r.r(t);var n=r(4051),o=r.n(n),a=r(5893),s=r(3153),i=r(746),u=r(8002),c=r(6027),l=r(1458),f=r(7499),d=r(4495),p=r(5363),m=r(1664),h=r(483),v=r(7294),g=r(1163),y=r(1407);function w(e,t,r,n,o,a,s){try{var i=e[a](s),u=i.value}catch(c){return void r(c)}i.done?t(u):Promise.resolve(u).then(n,o)}t.default=function(){var e=(0,g.useRouter)(),t=(0,h.a)({middleware:"guest"}).login,r=(0,v.useState)(""),n=r[0],x=r[1],b=(0,v.useState)(""),j=b[0],N=b[1],Z=(0,v.useState)([]),k=Z[0],C=Z[1],E=(0,v.useState)(null),S=E[0],_=E[1],M=(0,v.useState)(!1),L=M[0],A=M[1],I=function(){var e,r=(e=o().mark((function e(r){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return A(!0),r.preventDefault(),e.next=4,t({setErrors:C,setStatus:_,email:n,password:j});case 4:A(!1);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,r=arguments;return new Promise((function(n,o){var a=e.apply(t,r);function s(e){w(a,n,o,s,i,"next",e)}function i(e){w(a,n,o,s,i,"throw",e)}s(void 0)}))});return function(e){return r.apply(this,arguments)}}();return(0,v.useEffect)((function(){e.query.reset&&e.query.reset.length>0&&0===k.length?_(window.atob(e.query.reset)):_(null)})),L?(0,a.jsx)(y.Z,{}):(0,a.jsx)(f.Z,{children:(0,a.jsxs)(i.Z,{logo:(0,a.jsx)("a",{children:(0,a.jsx)(s.Z,{})}),children:[(0,a.jsx)(u.Z,{className:"mb-4",status:S}),(0,a.jsx)(c.Z,{className:"mb-4",errors:k}),(0,a.jsxs)("form",{onSubmit:I,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(p.Z,{htmlFor:"email",children:"Email"}),(0,a.jsx)(d.Z,{id:"email",type:"email",value:n,className:"block mt-1 w-full",onChange:function(e){return x(e.target.value)},required:!0,autoFocus:!0})]}),(0,a.jsxs)("div",{className:"mt-4",children:[(0,a.jsx)(p.Z,{htmlFor:"password",children:"Password"}),(0,a.jsx)(d.Z,{id:"password",type:"password",value:j,className:"block mt-1 w-full",onChange:function(e){return N(e.target.value)},required:!0,autoComplete:"current-password"})]}),(0,a.jsx)("div",{className:"block mt-4",children:(0,a.jsxs)("label",{htmlFor:"remember_me",className:"inline-flex items-center",children:[(0,a.jsx)("input",{id:"remember_me",type:"checkbox",name:"remember",className:"rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"}),(0,a.jsx)("span",{className:"ml-2 text-sm text-gray-600",children:"Remember me"})]})}),(0,a.jsxs)("div",{className:"flex items-center justify-end mt-4",children:[(0,a.jsx)(m.default,{href:"/register",children:(0,a.jsx)("a",{className:"underline text-sm text-gray-600 hover:text-gray-900 mr-4",children:"Sign up"})}),(0,a.jsx)(l.Z,{className:"ml-3",children:"Login"})]})]})]})})}},1664:function(e,t,r){e.exports=r(1551)}},function(e){e.O(0,[25,774,888,179],(function(){return t=7237,e(e.s=t);var t}));var t=e.O();_N_E=t}]);