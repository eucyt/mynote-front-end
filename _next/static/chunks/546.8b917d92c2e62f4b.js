(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[546],{6874:function(e,t,n){"use strict";n.r(t),n.d(t,{MarkdownEditor:function(){return i}});var r=n(5893),u=n(7294),a=n(1634),o=(n(5603),n(28)),c=n(1163),i=function(){var e=(0,u.useState)(""),t=e[0],n=e[1],i=(0,c.useRouter)(),s=(0,o.g)(),f=s.fetchNote,l=s.deleteNote,d=s.updateNote,p=(0,u.useState)(),h=p[0],b=p[1],v=(0,u.useState)(""),x=v[0],m=v[1],N=(0,u.useState)(""),y=N[0],g=N[1];return(0,u.useEffect)((function(){i.isReady&&f(b,Number(i.query.id),i)}),[i.query]),(0,u.useEffect)((function(){h&&(m(h.title),g(h.body))}),[h]),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"relative h-10",children:[(0,r.jsx)("label",{className:"text-xl pl-2 absolute bottom-0 inline-block",children:"Title"}),(0,r.jsx)("button",{className:"px-2 py-1 absolute right-0 rounded transition duration-500 hover:bg-red-400 border border-red-200 bg-red-100",onClick:function(){l(Number(i.query.id)).then((function(){i.push("/")}))},children:"Delete"})]}),(0,r.jsx)("input",{type:"text",className:"mb-6 w-full rounded border border-gray-200",value:x,onChange:function(e){return m(e.target.value)}}),(0,r.jsx)("label",{className:"text-xl ml-2",children:"Body"}),(0,r.jsx)(a.ZP,{value:y,onChange:function(e){n(""),g(e)}}),(0,r.jsx)("button",{className:"px-2 py-1 rounded transition duration-500 hover:bg-blue-400 border border-blue-200 bg-blue-100",onClick:function(){n("\u4fdd\u5b58\u4e2d\u3067\u3059..."),d(Number(i.query.id),{title:x,body:y}).then((function(){return n("\u4fdd\u5b58\u4e2d\u3057\u307e\u3057\u305f!")}))},children:"Save"}),(0,r.jsx)("p",{className:"mt-2",children:t})]})};t.default=i},28:function(e,t,n){"use strict";n.d(t,{g:function(){return i}});var r=n(4051),u=n.n(r),a=n(9877);n(7294);function o(e,t,n,r,u,a,o){try{var c=e[a](o),i=c.value}catch(s){return void n(s)}c.done?t(i):Promise.resolve(i).then(r,u)}function c(e){return function(){var t=this,n=arguments;return new Promise((function(r,u){var a=e.apply(t,n);function c(e){o(a,r,u,c,i,"next",e)}function i(e){o(a,r,u,c,i,"throw",e)}c(void 0)}))}}var i=function(){var e=function(){return a.Z.get("/sanctum/csrf-cookie")},t=function(){var t=c(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.next=4,a.Z.post("/api/notes").then((function(e){return n(e.data)}));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),n=function(){var e=c(u().mark((function e(t,n,r){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.Z.get("/api/notes/"+n).then((function(e){return t(e.data.data)})).catch((function(e){200!==e.response.status&&r.replace("/404")}));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}(),r=function(){var t=c(u().mark((function t(n,r){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.next=4,a.Z.put("/api/notes/"+n,r);case 4:case"end":return t.stop()}}),t)})));return function(e,n){return t.apply(this,arguments)}}(),o=function(){var t=c(u().mark((function t(n){return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e();case 2:return t.next=4,a.Z.delete("/api/notes/"+n).then();case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return{createNote:t,fetchNote:n,fetchNotes:function(e){return a.Z.get("/api/notes").then((function(t){return e(t.data.data)}))},updateNote:r,deleteNote:o}}},2562:function(){}}]);