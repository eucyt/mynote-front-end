(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[742],{6192:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/forgot-password",function(){return n(7853)}])},746:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){return(0,r.jsxs)("div",{className:"min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100",children:[(0,r.jsx)("div",{children:t.logo}),(0,r.jsx)("div",{className:"w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg",children:t.children})]})}},8002:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){return(0,r.jsx)(r.Fragment,{children:t.status&&(0,r.jsx)("div",{className:"".concat(t.className," font-medium text-sm text-green-600"),children:t.status})})}},6027:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){return(0,r.jsx)(r.Fragment,{children:t.errors.length>0&&(0,r.jsxs)("div",{className:t.className,children:[(0,r.jsx)("div",{className:"font-medium text-red-600",children:"Whoops! Something went wrong."}),(0,r.jsx)("ul",{className:"mt-3 list-disc list-inside text-sm text-red-600",children:t.errors.map((function(t){return(0,r.jsx)("li",{children:t},t)}))})]})})}},4495:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){var e=t.id,n=t.type,s=t.name,a=t.value,i=t.className,o=t.onChange,u=t.autoComplete,c=t.required,l=void 0!==c&&c,d=t.autoFocus,f=void 0!==d&&d,h=t.disabled,m=void 0!==h&&h;return(0,r.jsx)("input",{id:e,type:n,name:s,value:a,onChange:o,autoComplete:u,required:l,autoFocus:f,disabled:m,className:"".concat(i," rounded-md shadow-sm border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50")})}},5363:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){return(0,r.jsx)("label",{className:"".concat(t.className," block font-medium text-sm text-gray-700"),htmlFor:t.htmlFor,children:t.children})}},3153:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"120",height:"120",className:t.className,children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z"})]})}},1458:function(t,e,n){"use strict";var r=n(5893);n(7294);e.Z=function(t){var e=t.type,n=void 0===e?"submit":e,s=t.className,a=t.children;return(0,r.jsx)("button",{type:n,className:"".concat(s," inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring ring-gray-300 disabled:opacity-25 transition ease-in-out duration-150"),children:a})}},1407:function(t,e,n){"use strict";var r=n(5893),s=(n(7294),n(3775));e.Z=function(){return(0,r.jsx)("div",{className:"h-screen w-screen flex justify-center items-center bg-gray-100",children:(0,r.jsx)(s.Z,{})})}},7499:function(t,e,n){"use strict";var r=n(5893),s=n(9008);n(7294);e.Z=function(t){var e=t.children;return(0,r.jsxs)("div",{children:[(0,r.jsx)(s.default,{children:(0,r.jsx)("title",{children:"MyNote"})}),(0,r.jsx)("div",{className:"font-sans text-gray-900 antialiased",children:e})]})}},3775:function(t,e,n){"use strict";var r=n(5893),s=(n(7294),n(3033));e.Z=function(){return(0,r.jsx)(s.gy,{color:"#CCC",height:80,width:80})}},483:function(t,e,n){"use strict";n.d(e,{a:function(){return d}});var r=n(4051),s=n.n(r),a=n(8100),i=n(9877),o=n(7294),u=n(1163);function c(t,e,n,r,s,a,i){try{var o=t[a](i),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(r,s)}function l(t){return function(){var e=this,n=arguments;return new Promise((function(r,s){var a=t.apply(e,n);function i(t){c(a,r,s,i,o,"next",t)}function o(t){c(a,r,s,i,o,"throw",t)}i(void 0)}))}}var d=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.middleware,n=t.redirectIfAuthenticated,r=void 0===n?"/":n,c=(0,u.useRouter)(),d=(0,a.ZP)("/api/user",(function(){return i.Z.get("/api/user").then((function(t){return t.data})).catch((function(t){if(409!==t.response.status)throw t;c.push("/verify-email")}))})),f=d.data,h=d.error,m=d.mutate,p=function(){return i.Z.get("/sanctum/csrf-cookie")},v=function(){var t=l(s().mark((function t(e){var n,r,a,o,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.setErrors,r=e.name,a=e.email,o=e.password,u=e.passwordConfirmation,t.next=3,p();case 3:n([]),i.Z.post("/register",{name:r,email:a,password:o,password_confirmation:u}).then((function(){return m()})).catch((function(t){if(422!==t.response.status)throw t;n(Object.values(t.response.data.errors).flat())}));case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),w=function(){var t=l(s().mark((function t(e){var n,r,a,o;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.setErrors,r=e.setStatus,a=e.email,o=e.password,t.next=3,p();case 3:n([]),r(null),i.Z.post("/login",{email:a,password:o}).then((function(){return m()})).catch((function(t){if(console.log(t.response),422!==t.response.status)throw t;n(Object.values(t.response.data.errors).flat())}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),x=function(){var t=l(s().mark((function t(e){var n,r,a;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.setErrors,r=e.setStatus,a=e.email,t.next=3,p();case 3:n([]),r(null),i.Z.post("/forgot-password",{email:a}).then((function(t){return r(t.data.status)})).catch((function(t){if(422!==t.response.status)throw t;n(Object.values(t.response.data.errors).flat())}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),g=function(){var t=l(s().mark((function t(e){var n,r,a,o,u;return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.setErrors,r=e.setStatus,a=e.email,o=e.password,u=e.passwordConfirmation,t.next=3,p();case 3:n([]),r(null),i.Z.post("/reset-password",{token:c.query.token,email:a,password:o,passwordConfirmation:u}).then((function(t){return c.push("/login?reset="+window.btoa(t.data.status))})).catch((function(t){if(422!==t.response.status)throw t;n(Object.values(t.response.data.errors).flat())}));case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),j=function(t){var e=t.setStatus;i.Z.post("/email/verification-notification").then((function(t){return e(t.data.status)}))},y=function(){var t=l(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(h){t.next=3;break}return t.next=3,i.Z.post("/logout").then((function(){return m()}));case 3:window.location.pathname="/login";case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),b=function(){var t=l(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,p();case 2:i.Z.delete("/withdraw").then((function(){return m()}));case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return(0,o.useEffect)((function(){"guest"===e&&r&&f&&c.push(r),"auth"===e&&h&&y()}),[f,h]),{user:f,register:v,login:w,forgotPassword:x,resetPassword:g,resendEmailVerification:j,logout:y,withdraw:b}}},9877:function(t,e,n){"use strict";var r=n(9669),s=n.n(r)().create({baseURL:"https://mynote-api.euchi.jp",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json"},withCredentials:!0});e.Z=s},7853:function(t,e,n){"use strict";n.r(e);var r=n(4051),s=n.n(r),a=n(5893),i=n(3153),o=n(746),u=n(8002),c=n(6027),l=n(1458),d=n(7499),f=n(4495),h=n(5363),m=n(483),p=n(7294),v=n(1407);function w(t,e,n,r,s,a,i){try{var o=t[a](i),u=o.value}catch(c){return void n(c)}o.done?e(u):Promise.resolve(u).then(r,s)}e.default=function(){var t=(0,m.a)({middleware:"guest"}).forgotPassword,e=(0,p.useState)(""),n=e[0],r=e[1],x=(0,p.useState)([]),g=x[0],j=x[1],y=(0,p.useState)(null),b=y[0],Z=y[1],N=(0,p.useState)(!1),k=N[0],C=N[1],E=function(){var e,r=(e=s().mark((function e(r){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return C(!0),r.preventDefault(),e.next=4,t({setErrors:j,setStatus:Z,email:n});case 4:C(!1);case 5:case"end":return e.stop()}}),e)})),function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function i(t){w(a,r,s,i,o,"next",t)}function o(t){w(a,r,s,i,o,"throw",t)}i(void 0)}))});return function(t){return r.apply(this,arguments)}}();return k?(0,a.jsx)(v.Z,{}):(0,a.jsx)(d.Z,{children:(0,a.jsxs)(o.Z,{logo:(0,a.jsx)(i.Z,{}),children:[(0,a.jsx)("div",{className:"mb-4 text-sm text-gray-600",children:"Forgot your password? No problem. Just let us know your email address and we will email you a password reset link that will allow you to choose a new one."}),(0,a.jsx)(u.Z,{className:"mb-4",status:b}),(0,a.jsx)(c.Z,{className:"mb-4",errors:g}),(0,a.jsxs)("form",{onSubmit:E,children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(h.Z,{htmlFor:"email",children:"Email"}),(0,a.jsx)(f.Z,{id:"email",type:"email",name:"email",value:n,className:"block mt-1 w-full",onChange:function(t){return r(t.target.value)},required:!0,autoFocus:!0})]}),(0,a.jsx)("div",{className:"flex items-center justify-end mt-4",children:(0,a.jsx)(l.Z,{children:"Email Password Reset Link"})})]})]})})}}},function(t){t.O(0,[25,774,888,179],(function(){return e=6192,t(t.s=e);var e}));var e=t.O();_N_E=e}]);