"use strict";(self.webpackChunkecommercestore=self.webpackChunkecommercestore||[]).push([[280],{2507:function(e,t,r){var s=r(4165),c=r(5861),n=r(885),i=r(2791),a=r(4569),d=r.n(a);t.Z=function(){var e=(0,i.useState)([{}]),t=(0,n.Z)(e,2),r=t[0],a=t[1],o=localStorage.getItem("currentUser"),l=JSON.parse(o),u=JSON.parse(l);return console.log(u),(0,i.useEffect)((function(){function e(){return(e=(0,c.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d().get("/store/currentstore?id="+u._id);case 2:t=e.sent,console.log(t.data),""!=t.data&&a(t.data);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),r[0]}},4280:function(e,t,r){r.r(t),r.d(t,{default:function(){return j}});var s=r(4165),c=r(5861),n=r(885),i=r(2791),a=r(7689),d=r(1087),o=r(3463),l=r(2507),u=r(4569),h=r.n(u),p=r(184),x=function(){var e=(0,i.useState)([]),t=(0,n.Z)(e,2),r=t[0],u=t[1],x=(0,i.useState)(""),j=(0,n.Z)(x,2),f=j[0],m=j[1],g=(0,l.Z)();(0,i.useEffect)((function(){function e(){return(e=(0,c.Z)((0,s.Z)().mark((function e(){var t;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0===g._id){e.next=6;break}return e.next=3,h().get("/product/storeproducts?id="+g._id);case 3:t=e.sent,console.log(t.data),u(t.data);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[f,g]);var v=(0,a.s0)();return(0,p.jsx)("div",{children:(0,p.jsx)(o.Zb,{children:(0,p.jsxs)(o.eW,{children:[(0,p.jsx)(o.ll,{tag:"h5",children:"Products Listing"}),(0,p.jsx)(o._R,{className:"mb-2 text-muted",tag:"h6",children:"Overview of the Products"}),(0,p.jsxs)(o.iA,{className:"no-wrap mt-3 align-middle",responsive:!0,borderless:!0,children:[(0,p.jsx)("thead",{children:(0,p.jsxs)("tr",{children:[(0,p.jsx)("th",{children:"Product Title"}),(0,p.jsx)("th",{children:"Product Sizes with Stock "}),(0,p.jsx)("th",{children:"Product Detail"}),(0,p.jsx)("th",{children:"Prize"}),(0,p.jsx)("th",{children:"Total Stock"}),(0,p.jsx)("th",{children:"Actions"})]})}),(0,p.jsx)("tbody",{children:r.map((function(e,t){return(0,p.jsxs)("tr",{className:"border-top",children:[(0,p.jsx)("td",{children:(0,p.jsxs)("div",{className:"d-flex align-items-center p-2",children:[(0,p.jsx)("img",{src:e.productImage1,className:"rounded-circle",alt:"avatar",width:"45",height:"45"}),(0,p.jsx)("div",{className:"ms-3",children:(0,p.jsx)("h6",{className:"mb-0",children:e.productTitle})})]})}),(0,p.jsxs)("td",{children:[(0,p.jsxs)("span",{children:[" Small: ",e.productSizeWithStock.Small,",  "]}),(0,p.jsxs)("span",{children:[" Medium: ",e.productSizeWithStock.Medium," , "]}),(0,p.jsxs)("span",{children:[" Large: ",e.productSizeWithStock.Large,",  "]}),(0,p.jsxs)("div",{children:[" X-Large: ",e.productSizeWithStock.xLarge,"   "]})]}),(0,p.jsx)("td",{children:(0,p.jsxs)(d.rU,{className:" text-secondary py-3 link",to:"/SellerDashboard/ProductDetail".concat(e._id),children:["View Product Detail \xa0",(0,p.jsx)("i",{className:"bi bi-eye "})]})}),(0,p.jsx)("td",{children:e.productPrice}),(0,p.jsx)("td",{children:e.totalProductStock}),(0,p.jsxs)("td",{children:[(0,p.jsx)(o.zx,{className:"Approve",onClick:function(){v("/SellerDashboard/UpdateProduct".concat(e._id))},children:(0,p.jsx)("i",{class:"bi bi-pencil-square"})}),"false"==e.productFeatured?(0,p.jsx)(o.zx,{className:"Approve",onClick:(0,c.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h().put("/product/productFeaturedStatus?id="+e._id,{productFeatured:"pending"});case 2:r=t.sent,console.log(e),m(r.data);case 5:case"end":return t.stop()}}),t)}))),children:(0,p.jsx)("i",{class:"bi bi-patch-check"})}):"pending"==e.productFeatured?(0,p.jsxs)(o.zx,{className:"Wait",children:[" ",(0,p.jsx)("i",{class:"bi bi-hourglass-split"})]}):null,(0,p.jsx)(o.zx,{className:"Reject",onClick:(0,c.Z)((0,s.Z)().mark((function t(){var r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,h().delete("/product/".concat(e._id));case 2:r=t.sent,m(r.data);case 4:case"end":return t.stop()}}),t)}))),children:(0,p.jsx)("i",{class:"bi bi-trash3"})})]})]},t)}))})]})]})})})},j=function(){return(0,p.jsx)(o.X2,{children:(0,p.jsx)(o.JX,{lg:"12",children:(0,p.jsx)(x,{})})})}}}]);
//# sourceMappingURL=280.b7f86913.chunk.js.map