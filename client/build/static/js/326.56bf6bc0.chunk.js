"use strict";(self.webpackChunkecommercestore=self.webpackChunkecommercestore||[]).push([[326],{3280:function(e,s,t){t.r(s),t.d(s,{default:function(){return u}});var r=t(4165),n=t(5861),c=t(885),a=t(3463),i=t(4569),l=t.n(i),d=t(2791),o=t(184),h=function(){var e=(0,d.useState)([]),s=(0,c.Z)(e,2),t=s[0],i=s[1],h=(0,d.useState)(""),u=(0,c.Z)(h,2),x=u[0],j=u[1];return(0,d.useEffect)((function(){function e(){return(e=(0,n.Z)((0,r.Z)().mark((function e(){var s;return(0,r.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,l().get("/store/allstores");case 2:s=e.sent,console.log(s.data),i(s.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[x]),(0,o.jsx)(o.Fragment,{children:(0,o.jsx)(a.Zb,{children:(0,o.jsxs)(a.eW,{children:[(0,o.jsx)(a.ll,{tag:"h5",children:" Rejected Stores Listing"}),(0,o.jsx)(a._R,{className:"mb-2 text-muted",tag:"h6",children:"Overview of the Orders"}),(0,o.jsxs)(a.iA,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[(0,o.jsx)("thead",{children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{children:"Store Detail"}),(0,o.jsx)("th",{children:"Store Address"}),(0,o.jsx)("th",{children:"Owner CNIC"}),(0,o.jsx)("th",{children:"Store NTN"}),(0,o.jsx)("th",{children:"Actions"})]})}),(0,o.jsx)("tbody",{children:t.map((function(e,s){return"block"==e.storeStatus?(0,o.jsxs)("tr",{className:"border-top",children:[(0,o.jsx)("td",{children:(0,o.jsxs)("div",{className:"d-flex align-items-center p-2",children:[(0,o.jsx)("img",{src:e.storeLogo,className:"rounded-circle",alt:"avatar",width:"45",height:"45"}),(0,o.jsxs)("div",{className:"ms-3",children:[(0,o.jsx)("h6",{className:"mb-0",children:e.storeName}),(0,o.jsx)("div",{className:"text-muted",children:e.storePhoneNo}),(0,o.jsx)("span",{className:"text-muted",children:e.storeEmailmail})]})]})}),(0,o.jsx)("td",{children:e.storeAddress}),(0,o.jsx)("td",{children:e.storeOwnerCnic}),(0,o.jsx)("td",{children:e.storeNTN}),(0,o.jsx)("td",{children:(0,o.jsx)(a.zx,{className:"Approve",onClick:(0,n.Z)((0,r.Z)().mark((function s(){var t;return(0,r.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,l().put("/store/storeStatus/".concat(e._id),{storeStatus:"approve"});case 2:t=s.sent,j(t.data);case 4:case"end":return s.stop()}}),s)}))),children:(0,o.jsx)("i",{class:"bi bi-check-circle"})})})]},s):null}))})]})]})})})},u=function(){return(0,o.jsx)(a.X2,{children:(0,o.jsx)(a.JX,{lg:"12",children:(0,o.jsx)(h,{})})})}}}]);
//# sourceMappingURL=326.56bf6bc0.chunk.js.map