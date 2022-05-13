"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{3153:function(e,t,n){var r=n(5893);n(7294);t.Z=function(e){return(0,r.jsxs)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"120",height:"120",className:e.className,children:[(0,r.jsx)("path",{fill:"none",d:"M0 0h24v24H0z"}),(0,r.jsx)("path",{d:"M21 18H6a1 1 0 0 0 0 2h15v2H6a3 3 0 0 1-3-3V4a2 2 0 0 1 2-2h16v16zm-5-9V7H8v2h8z"})]})}},9137:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(5893),s=n(3153),a=n(7294),o=n(2548),i=function(e){var t,n=e.align,s=void 0===n?"right":n,a=e.width,i=void 0===a?"w-48":a,c=e.contentClasses,u=void 0===c?"py-1 bg-white":c,l=e.trigger,d=e.children;switch(s){case"left":t="origin-top-left left-0";break;case"top":t="origin-top";break;default:t="origin-top-right right-0"}return(0,r.jsxs)(o.v,{as:"div",className:"relative",children:[(0,r.jsx)(o.v.Button,{children:l}),(0,r.jsx)("div",{className:"absolute z-50 mt-2 ".concat(i," rounded-md shadow-lg ").concat(t),children:(0,r.jsx)(o.v.Items,{className:"rounded-md focus:outline-none ring-1 ring-black ring-opacity-5 ".concat(u),children:d})})]})},c=n(1664),u=function(e){var t=e.active,n=void 0!==t&&t,s=e.children,a=e.href;return(0,r.jsx)(c.default,{href:a,children:(0,r.jsx)("a",{className:"inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 focus:outline-none transition duration-150 ease-in-out ".concat(n?"border-indigo-400 text-gray-900 focus:border-indigo-700":"border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:text-gray-700 focus:border-gray-300"),children:s})})},l=function(e){var t=e.onClick,n=e.children;return(0,r.jsx)("button",{onClick:t,className:"block w-full pl-3 pr-4 py-2 border-l-4 text-left text-base font-medium leading-5 focus:outline-none transition duration-150 ease-in-out border-transparent text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300",children:n})},d=function(e){var t=e.children,n=e.onClick;e.active;return(0,r.jsx)(o.v.Item,{children:function(e){var s=e.active;return(0,r.jsx)("button",{onClick:n,className:"w-full text-left block px-4 py-2 text-sm leading-5 text-gray-700 ".concat(s?"bg-gray-100":""," focus:outline-none transition duration-150 ease-in-out"),children:t})}})},f=n(483),h=n(1163),p=function(e){var t=e.user,n=(0,h.useRouter)(),o=(0,f.a)({}).logout,p=(0,a.useState)(!1),x=p[0],m=p[1];return(0,r.jsxs)("nav",{className:"bg-white border-b border-gray-100",children:[(0,r.jsx)("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:(0,r.jsxs)("div",{className:"flex justify-between h-16",children:[(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)("div",{className:"flex-shrink-0 flex items-center",children:(0,r.jsx)(c.default,{href:"/",children:(0,r.jsx)("a",{children:(0,r.jsx)(s.Z,{className:"block h-10 w-auto fill-current"})})})}),(0,r.jsx)("div",{className:"hidden space-x-8 sm:-my-px sm:ml-10 sm:flex",children:(0,r.jsx)(u,{href:"/",active:"/"===n.pathname,children:"Home"})})]}),(0,r.jsx)("div",{className:"hidden sm:flex sm:items-center sm:ml-6",children:(0,r.jsx)(i,{trigger:(0,r.jsxs)("button",{className:"flex items-center text-sm font-medium text-gray-500 hover:text-gray-700 focus:outline-none transition duration-150 ease-in-out",children:[(0,r.jsx)("div",{children:null===t||void 0===t?void 0:t.name}),(0,r.jsx)("div",{className:"ml-1",children:(0,r.jsx)("svg",{className:"fill-current h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z",clipRule:"evenodd"})})})]}),children:(0,r.jsx)(d,{onClick:o,children:"Logout"})})}),(0,r.jsx)("div",{className:"-mr-2 flex items-center sm:hidden",children:(0,r.jsx)("button",{onClick:function(){return m((function(e){return!e}))},className:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out",children:(0,r.jsx)("svg",{className:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24",children:x?(0,r.jsx)("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M6 18L18 6M6 6l12 12"}):(0,r.jsx)("path",{className:"inline-flex",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 6h16M4 12h16M4 18h16"})})})})]})}),x&&(0,r.jsx)("div",{className:"block sm:hidden",children:(0,r.jsxs)("div",{className:"pt-4 pb-1 border-t border-gray-200",children:[(0,r.jsxs)("div",{className:"flex items-center px-4",children:[(0,r.jsx)("div",{className:"flex-shrink-0",children:(0,r.jsx)("svg",{className:"h-10 w-10 fill-current text-gray-400",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,r.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"})})}),(0,r.jsxs)("div",{className:"ml-3",children:[(0,r.jsx)("div",{className:"font-medium text-base text-gray-800",children:null===t||void 0===t?void 0:t.name}),(0,r.jsx)("div",{className:"font-medium text-sm text-gray-500",children:null===t||void 0===t?void 0:t.email})]})]}),(0,r.jsx)("div",{className:"mt-3 space-y-1",children:(0,r.jsx)(l,{onClick:o,children:"Logout"})})]})})]})},x=function(e){var t=(0,f.a)({middleware:"auth"}).user;return(0,r.jsxs)("div",{className:"min-h-screen bg-gray-100",children:[(0,r.jsx)(p,{user:t}),(0,r.jsx)("main",{children:e.children})]})}},483:function(e,t,n){n.d(t,{a:function(){return d}});var r=n(4051),s=n.n(r),a=n(8100),o=n(9877),i=n(7294),c=n(1163);function u(e,t,n,r,s,a,o){try{var i=e[a](o),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,s)}function l(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function o(e){u(a,r,s,o,i,"next",e)}function i(e){u(a,r,s,o,i,"throw",e)}o(void 0)}))}}var d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.middleware,n=e.redirectIfAuthenticated,r=void 0===n?"/":n,u=(0,c.useRouter)(),d=(0,a.ZP)("/api/user",(function(){return o.Z.get("/api/user").then((function(e){return e.data})).catch((function(e){if(409!==e.response.status)throw e;u.push("/verify-email")}))})),f=d.data,h=d.error,p=d.mutate,x=function(){return o.Z.get("/sanctum/csrf-cookie")},m=function(){var e=l(s().mark((function e(t){var n,r,a,i,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,r=t.name,a=t.email,i=t.password,c=t.passwordConfirmation,e.next=3,x();case 3:n([]),o.Z.post("/register",{name:r,email:a,password:i,passwordConfirmation:c}).then((function(){return p()})).catch((function(e){if(422!==e.response.status)throw e;n(Object.values(e.response.data.errors).flat())}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=l(s().mark((function e(t){var n,r,a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,r=t.setStatus,a=t.email,i=t.password,e.next=3,x();case 3:n([]),r(null),o.Z.post("/login",{email:a,password:i}).then((function(){return p()})).catch((function(e){if(console.log(e.response),422!==e.response.status)throw e;n(Object.values(e.response.data.errors).flat())}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=l(s().mark((function e(t){var n,r,a;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,r=t.setStatus,a=t.email,e.next=3,x();case 3:n([]),r(null),o.Z.post("/forgot-password",{email:a}).then((function(e){return r(e.data.status)})).catch((function(e){if(422!==e.response.status)throw e;n(Object.values(e.response.data.errors).flat())}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=l(s().mark((function e(t){var n,r,a,i,c;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.setErrors,r=t.setStatus,a=t.email,i=t.password,c=t.passwordConfirmation,e.next=3,x();case 3:n([]),r(null),o.Z.post("/reset-password",{token:u.query.token,email:a,password:i,passwordConfirmation:c}).then((function(e){return u.push("/login?reset="+window.btoa(e.data.status))})).catch((function(e){if(422!==e.response.status)throw e;n(Object.values(e.response.data.errors).flat())}));case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),j=function(e){var t=e.setStatus;o.Z.post("/email/verification-notification").then((function(e){return t(e.data.status)}))},y=function(){var e=l(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(h){e.next=3;break}return e.next=3,o.Z.post("/logout").then((function(){return p()}));case 3:window.location.pathname="/login";case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return(0,i.useEffect)((function(){"guest"===t&&r&&f&&u.push(r),"auth"===t&&h&&y()}),[f,h]),{user:f,register:m,login:v,forgotPassword:g,resetPassword:w,resendEmailVerification:j,logout:y}}},28:function(e,t,n){n.d(t,{g:function(){return u}});var r=n(4051),s=n.n(r),a=n(9877),o=n(7294);function i(e,t,n,r,s,a,o){try{var i=e[a](o),c=i.value}catch(u){return void n(u)}i.done?t(c):Promise.resolve(c).then(r,s)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,s){var a=e.apply(t,n);function o(e){i(a,r,s,o,c,"next",e)}function c(e){i(a,r,s,o,c,"throw",e)}o(void 0)}))}}var u=function(){var e=(0,o.useState)([]),t=e[0],n=e[1],r=(0,o.useState)(),i=r[0],u=r[1],l=function(){return a.Z.get("/sanctum/csrf-cookie")},d=function(){var e=c(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return e.next=4,a.Z.post("/api/notes").then((function(e){return u(e.data)}));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=c(s().mark((function e(t,n){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/api/notes/"+t).then((function(e){return u(e.data.data)})).catch((function(e){200!==e.response.status&&n.replace("/404")}));case 2:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),h=function(){var e=c(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return e.next=4,a.Z.put("/api/notes/"+t.id,t).then();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=c(s().mark((function e(t){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l();case 2:return e.next=4,a.Z.delete("/api/notes/"+t).then();case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return{createNote:d,fetchNote:f,fetchNotes:function(){a.Z.get("/api/notes").then((function(e){return n(e.data.data)}))},updateNote:h,deleteNote:p,note:i,notes:t,setNote:u}}},9877:function(e,t,n){var r=n(9669),s=n.n(r)().create({baseURL:"https://mynote-api.euchi.jp",headers:{"X-Requested-With":"XMLHttpRequest",Accept:"application/json","Content-Type":"application/json"},withCredentials:!0});t.Z=s}}]);