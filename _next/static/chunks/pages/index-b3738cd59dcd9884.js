(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5301:function(t,n,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return e(5970)}])},28:function(t,n,e){"use strict";e.d(n,{g:function(){return i}});var r=e(4051),u=e.n(r),o=e(9877);e(7294);function a(t,n,e,r,u,o,a){try{var c=t[o](a),i=c.value}catch(s){return void e(s)}c.done?n(i):Promise.resolve(i).then(r,u)}function c(t){return function(){var n=this,e=arguments;return new Promise((function(r,u){var o=t.apply(n,e);function c(t){a(o,r,u,c,i,"next",t)}function i(t){a(o,r,u,c,i,"throw",t)}c(void 0)}))}}var i=function(){var t=function(){return o.Z.get("/sanctum/csrf-cookie")},n=function(){var n=c(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:return n.next=4,o.Z.post("/api/notes").then((function(t){return e(t.data)}));case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),e=function(){var t=c(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",o.Z.get("/api/notes").then((function(t){return n(t.data.data)})));case 1:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),r=function(){var t=c(u().mark((function t(n,e,r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,o.Z.get("/api/notes/"+e).then((function(t){return n(t.data.data)})).catch((function(t){200!==t.response.status&&r.replace("/404")}));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(n,e,r){return t.apply(this,arguments)}}(),a=function(){var n=c(u().mark((function n(e,r){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:return n.next=4,o.Z.put("/api/notes/"+e,r);case 4:case"end":return n.stop()}}),n)})));return function(t,e){return n.apply(this,arguments)}}(),i=function(){var n=c(u().mark((function n(e){return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t();case 2:return n.next=4,o.Z.delete("/api/notes/"+e).then();case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}();return{createNote:n,fetchNote:r,fetchNotes:e,updateNote:a,deleteNote:i}}},5970:function(t,n,e){"use strict";e.r(n);var r=e(5893),u=e(9137),o=e(9008),a=e(7294),c=e(28),i=e(1163),s=e(1664),f=e(1407);n.default=function(){var t=(0,c.g)(),n=t.fetchNotes,e=t.createNote,d=(0,i.useRouter)(),p=(0,a.useState)([]),h=p[0],l=p[1],v=(0,a.useState)(),w=v[0],x=v[1],m=(0,a.useState)(!0),N=m[0],g=m[1];return(0,a.useEffect)((function(){n(l).then((function(){return g(!1)}))}),[]),(0,a.useEffect)((function(){w&&d.push("/notes/"+w.id)}),[w]),N?(0,r.jsx)(f.Z,{}):(0,r.jsxs)(u.Z,{children:[(0,r.jsx)(o.default,{children:(0,r.jsx)("title",{children:"MyNote - Notes"})}),(0,r.jsxs)("div",{className:"m-2 sm:m-6 max-w-7xl p-6 overflow-hidden shadow-sm rounded-lg bg-white border border-gray-200",children:[(0,r.jsx)("button",{className:"p-3 m-6 rounded transition duration-500 hover:opacity-50 border border-gray-200 bg-gray-100",onClick:function(){g(!0),e(x)},children:"create new note"}),(0,r.jsx)("div",{className:"grid md:grid-cols-2 lg:grid-cols-3 mt-6",children:h.map((function(t){return(0,r.jsx)(s.default,{href:"/notes/"+t.id,children:(0,r.jsx)("div",{className:"p-7 mx-6 mb-6 rounded overflow-hidden shadow-lg transition duration-500 hover:opacity-50 cursor-pointer border border-gray-200 h-32",children:(0,r.jsx)("p",{className:"overflow-hidden h-full line-clamp-3",children:t.title})})},"note"+t.id)}))})]})]})}}},function(t){t.O(0,[25,82,972,774,888,179],(function(){return n=5301,t(t.s=n);var n}));var n=t.O();_N_E=n}]);