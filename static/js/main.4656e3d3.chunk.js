(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{27:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){},36:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(1),a=c.n(n),s=c(20),r=c.n(s),d=c(18),l=c(12),j=c(11),o=c(7),u=c(2),h=[{id:1,title:"SUPER ACTION 80 SERIE II ALTO",price:3e3,img_url:"https://www.selmer.fr/media/cache/sylius_shop_product_original/67/e6/4c634f873ff31e88d51303c2750f.png"},{id:2,title:"AXOS ALTO",price:1875,img_url:"https://www.selmer.fr/media/cache/sylius_shop_product_original/4f/3c/b9beff80616a5a4b15d3450033c2.png"},{id:3,title:"REFERENCE ALTO",price:4e3,img_url:"https://www.selmer.fr/media/cache/sylius_shop_product_original/91/25/4a5f843f74dc37f0b93125eb22c0.png"},{id:4,title:"SUPER ACTION 80 SERIES II SOPRANO",price:2800,img_url:"https://www.selmer.fr/media/cache/sylius_shop_product_original/0d/fe/51b11499ce12fe4a4771d567eef1.png"},{id:5,title:"SERIES III SOPRANO",price:5200,img_url:"https://www.selmer.fr/media/cache/sylius_shop_product_original/a3/bc/b05f60c500de36e8a9c40c60a6aa.png"},{id:6,title:"SERIES III TENOR",price:6400,img_url:"https://www.selmer.fr/media/cache/sylius_shop_product_original/a9/6c/0d810324b6c2a861c59c3b1d3a3f.png"},{id:7,title:"REFERENCE 36 TENOR",price:6800,img_url:"https://www.selmer.fr/media/cache/sylius_shop_product_original/c2/42/54c05eb9afcc898665fc21efe93b.png"}],b=(c(27),function(){return Object(i.jsx)("div",{className:"home",children:Object(i.jsxs)("div",{className:"hero",children:[Object(i.jsxs)("h2",{children:["Premium",Object(i.jsx)("span",{children:"Saxophones"})]}),Object(i.jsx)(o.b,{to:"/shop",children:"Discover Now"})]})})});var p=function(e){return Object(i.jsxs)("div",{className:"product-card",children:[Object(i.jsx)("img",{src:e.item.img_url,alt:""}),Object(i.jsx)("span",{className:"item-title",children:e.item.title}),Object(i.jsxs)("div",{className:"",children:[Object(i.jsx)("button",{onClick:function(){return e.handleAddToCart(e.item.id)},children:"Add to Cart"}),Object(i.jsxs)("span",{className:"item-price",children:["\u20ac ",e.item.price," -"]})]})]})},O=(c(33),function(e){return Object(i.jsx)("div",{className:"shop",children:Object(i.jsx)("div",{className:"item-container",children:e.products.map((function(t){return Object(i.jsx)(p,{item:t,handleAddToCart:e.handleAddToCart})}))})})}),m=c.p+"static/media/logo.ddedb5ef.svg",f=c.p+"static/media/cart.6b737eb4.svg",x=function(e){return Object(i.jsxs)("nav",{children:[Object(i.jsxs)("div",{className:"logo",children:[Object(i.jsx)("img",{src:m,alt:""}),Object(i.jsxs)("h1",{children:["SAX",Object(i.jsx)("span",{children:"SHOP"})]})]}),Object(i.jsxs)("div",{className:"nav-links",children:[Object(i.jsx)(o.b,{to:"/shopping-cart/",children:" HOME "}),Object(i.jsx)(o.b,{to:"/shopping-cart/shop",children:" SHOP "}),Object(i.jsxs)(o.b,{to:"/shopping-cart/cart",id:"cart-icon",children:[Object(i.jsx)("img",{src:f,alt:""}),Object(i.jsx)("span",{children:e.cartSize})]})]})]})},g=(c(34),c.p+"static/media/trash-2.b0974411.svg");var v=function(e){var t=Object(n.useState)(0),c=Object(j.a)(t,2),a=c[0],s=c[1];return Object(n.useEffect)((function(){var t=e.cartItems.reduce((function(e,t){return e+t.price*t.quantity}),0);s(t)}),[e.cartItems]),Object(i.jsxs)("div",{className:"cart",children:[Object(i.jsx)("h2",{children:"Cart"}),e.cartItems.map((function(t){return Object(i.jsxs)("div",{className:"cart-item",children:[Object(i.jsx)("img",{src:t.img_url,alt:"",className:"item-image"}),Object(i.jsx)("span",{className:"item-title",children:t.title}),Object(i.jsxs)("div",{className:"quantity-wrapper",children:[Object(i.jsx)("button",{onClick:function(){return e.handleQuantityChange("increment",t.id)},children:"+"}),Object(i.jsx)("span",{children:t.quantity}),Object(i.jsx)("button",{onClick:function(){return e.handleQuantityChange("decrement",t.id)},disabled:1===t.quantity,children:"-"})]}),Object(i.jsxs)("span",{className:"total-price",children:["\u20ac ",t.quantity*t.price]}),Object(i.jsx)("img",{onClick:function(){return e.handleRemoveFromCart(t.id)},src:g,alt:"",className:"trash"})]})})),Object(i.jsxs)("div",{className:"general-total",children:[Object(i.jsx)("button",{children:"PROCEED TO CHECKOUT"}),Object(i.jsxs)("span",{children:["TOTAL: ",Object(i.jsxs)("span",{id:"amount",children:["\u20ac ",a]})]})]})]})};c(35);var _=function(){var e=Object(n.useState)([]),t=Object(j.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(j.a)(s,2),p=r[0],m=r[1];Object(n.useEffect)((function(){m(h)}),[]);var f=function(e){var t=c.findIndex((function(t){return t.id===e}));if(t>-1){var i=Object(l.a)(c);i[t].quantity++,a(i)}else{var n=p.find((function(t){return t.id===e})),s=Object(d.a)(Object(d.a)({},n),{},{quantity:1});a([].concat(Object(l.a)(c),[s]))}},g=function(e){var t=Object(l.a)(c),i=t.findIndex((function(t){return t.id===e}));t.splice(i,1),a(t)},_=function(e,t){var i=Object(l.a)(c),n=i.findIndex((function(e){return e.id===t}));"increment"===e?i[n].quantity++:i[n].quantity--,a(i)};return Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(o.a,{basename:"/",children:[Object(i.jsx)(x,{cartSize:c.length}),Object(i.jsxs)(u.c,{children:[Object(i.jsx)(u.a,{exact:!0,path:"/shopping-cart/",component:b}),Object(i.jsx)(u.a,{exact:!0,path:"/shopping-cart/shop",render:function(){return Object(i.jsx)(O,{products:p,handleAddToCart:f})}}),Object(i.jsx)(u.a,{exact:!0,path:"/shopping-cart/cart",render:function(){return Object(i.jsx)(v,{cartItems:c,handleRemoveFromCart:g,handleQuantityChange:_})}})]})]})})};r.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(_,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.4656e3d3.chunk.js.map