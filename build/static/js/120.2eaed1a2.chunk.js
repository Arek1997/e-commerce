"use strict";(self.webpackChunke_commerce=self.webpackChunke_commerce||[]).push([[120],{1449:function(t,n,e){e.d(n,{_:function(){return s}});var i,r=e(168),o=e(6444),a=e(2710),s=o.ZP.section(i||(i=(0,r.Z)(["\n\t","\n"])),a._7)},9884:function(t,n,e){e.d(n,{Z:function(){return b}});var i,r,o=e(885),a=e(2791),s=e(9434),c=e(3359),l=e(9592),d=e(4452),u=e(4349),p=e(1087),f=e(168),m=e(6444),h=m.ZP.article(i||(i=(0,f.Z)(["\n\tmax-width: 350px;\n\tjustify-self: center;\n\n\t.product {\n\t\t&__body {\n\t\t\tposition: relative;\n\n\t\t\t&:hover .product__icon-actions {\n\t\t\t\topacity: 1;\n\t\t\t\tvisibility: visible;\n\t\t\t}\n\t\t}\n\n\t\t&__img {\n\t\t\twidth: 100%;\n\t\t\theight: 22rem;\n\t\t\tobject-fit: contain;\n\n\t\t\t@media (min-width: 768px) {\n\t\t\t\theight: 25rem;\n\t\t\t}\n\t\t}\n\n\t\t&__bottom {\n\t\t\tpadding-top: 2em;\n\t\t}\n\n\t\t&__title {\n\t\t\tfont-size: 1.6rem;\n\t\t\tcolor: var(--light-gray);\n\t\t\tmargin-bottom: 0.5em;\n\t\t\tcolor: hsl(210, 22%, 49%);\n\t\t}\n\n\t\t&__price {\n\t\t\tfont-size: 1.8rem;\n\t\t\tfont-weight: bold;\n\t\t\tcolor: hsl(209, 34%, 30%);\n\t\t}\n\n\t\t/* &__icon-actions {\n\t\t\tmax-width: 10rem;\n\t\t\tposition: absolute;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: center;\n\t\t\tgap: 1rem;\n\t\t\ttop: 50%;\n\t\t\tleft: 50%;\n\t\t\ttransform: translate(-50%, -50%);\n\t\t\topacity: 0;\n\t\t\tvisibility: hidden;\n\t\t\ttransition: opacity 0.3s linear, visibility 0.3s linear;\n\n\t\t\t.product__details,\n\t\t\t.product__add,\n\t\t\t.product__favourite {\n\t\t\t\tdisplay: grid;\n\t\t\t\twidth: 40px;\n\t\t\t\theight: 40px;\n\t\t\t\tfont-size: 1.8rem;\n\t\t\t\tcolor: #fff;\n\t\t\t\tbackground-color: var(--orange);\n\t\t\t\tplace-items: center;\n\t\t\t\tborder-radius: 50%;\n\t\t\t\ttransition: background-color 0.3s;\n\n\t\t\t\t&:hover {\n\t\t\t\t\tbackground-color: var(--orange-hover);\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.product__favourite {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t} */\n\t}\n"])),(function(t){return t.favourite?"var(--fail-color)":"#fff"})),g=e(5874),_=e(3912),x=m.ZP.div(r||(r=(0,f.Z)(["\n\tmax-width: 10rem;\n\tposition: absolute;\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tjustify-content: center;\n\tgap: 1rem;\n\ttop: 50%;\n\tleft: 50%;\n\ttransform: translate(-50%, -50%);\n\topacity: 0;\n\tvisibility: hidden;\n\ttransition: opacity 0.3s linear, visibility 0.3s linear;\n\n\t.product__details,\n\t.product__add,\n\t.product__favourite {\n\t\tdisplay: grid;\n\t\twidth: 40px;\n\t\theight: 40px;\n\t\tfont-size: 1.8rem;\n\t\tcolor: #fff;\n\t\tbackground-color: var(--orange);\n\t\tplace-items: center;\n\t\tborder-radius: 50%;\n\t\ttransition: background-color 0.3s;\n\n\t\t&:hover {\n\t\t\tbackground-color: var(--orange-hover);\n\t\t}\n\t}\n\n\t.product__favourite {\n\t\tcolor: ",";\n\t}\n"])),(function(t){return t.favourite?"var(--fail-color)":"#fff"})),v=e(184),j=function(t){return(0,v.jsxs)(x,{className:"product__icon-actions",favourite:t.favourite,children:[(0,v.jsx)(p.rU,{to:"../products/".concat(t.id),"aria-label":"Show product details",className:"product__details",children:(0,v.jsx)("i",{className:"fa-solid fa-magnifying-glass"})}),(0,v.jsx)("button",{"aria-label":"add product button",className:"product__add",onClick:t.onAddProduct,children:(0,v.jsx)("i",{className:"fa-solid fa-cart-shopping"})}),(0,v.jsx)("button",{"aria-label":"add to favourite button",className:"product__favourite",onClick:t.onFavourite,children:(0,v.jsx)("i",{className:"fa-solid fa-heart"})})]})},b=function(t){var n=(0,a.useState)(!1),e=(0,o.Z)(n,2),i=e[0],r=e[1],f=(0,s.I0)(),m=(0,s.v9)((function(t){return t.favProducts})).favProductsArr,x=(0,s.v9)((function(t){return t.authentication})).isLoggedIn,b={id:t.id,title:t.title,price:t.price,image:t.image,amount:1},y=function(){return m.some((function(n){return n.id===t.id}))};(0,a.useEffect)((function(){return x&&y()&&r(!0),function(){return r(!1)}}),[x]);return(0,a.useEffect)((function(){i&&!y()&&r(!1),localStorage.setItem("favProducts",JSON.stringify(m))}),[m]),(0,v.jsxs)(h,{className:"product",favourite:i,children:[(0,v.jsxs)("div",{className:"product__body",children:[(0,v.jsx)(g.LazyLoadImage,{className:"product__img",alt:t.title,src:t.image,placeholderSrc:_,width:"100%"}),(0,v.jsx)(j,{id:t.id,favourite:i,onAddProduct:function(){return f(c.U.addProduct(b))},onFavourite:function(){x?(f(i?d.k.removeProduct(b.id):d.k.addProduct(b)),r(!i)):(f(l.e.toggleOverlay()),f(u.I.showAlert({status:"warning",title:"Warning",message:"If you wanna select product as favourite you have to be logged\n\t\t\tfirstfully"})))}})]}),(0,v.jsxs)("div",{className:"product__bottom",children:[(0,v.jsx)(p.rU,{to:"../products/".concat(t.id),children:(0,v.jsx)("h3",{className:"product__title",children:t.title})}),(0,v.jsxs)("span",{className:"product__price",children:["$",t.price.toFixed(2)]})]})]})}},4120:function(t,n,e){e.r(n),e.d(n,{default:function(){return L}});var i,r,o,a=e(7326),s=e(4165),c=e(5861),l=e(885),d=e(2791),u=e(9884),p=e(1187),f=e(9434),m=function(t){var n=(0,d.useState)([]),e=(0,l.Z)(n,2),i=e[0],r=e[1],o=(0,f.v9)((function(t){return t.filter})),a=o.filterName,s=o.filterCategory,c=o.filterPrice,u=function(t){return"all"===s?t.category!==s:t.category===s};return(0,d.useEffect)((function(){if(0!==t.length){var n=t.filter((function(t){return t.title.toLowerCase().includes(a)})).filter(u).filter((function(t){return t.price<=c}));r(n)}}),[t,a,c,s]),i},h=e(7087),g=e(6048),_=e.n(g),x=e(184),v=function(t){return(0,x.jsx)(_(),{previousLabel:"prev",nextLabel:"next",pageCount:t.pageCount,onPageChange:t.handlePageClick,containerClassName:"pagination",activeClassName:"active",forcePage:t.selectedPage})},j=e(168),b=e(6444),y=b.ZP.div(i||(i=(0,j.Z)(["\n\tdisplay: grid;\n\tgrid-template-columns: repeat(auto-fit, minmax(200px, 1fr));\n\tgap: 7rem;\n"]))),w=0,N=function(){var t=(0,d.useState)(0),n=(0,l.Z)(t,2),e=n[0],i=n[1],r=(0,d.useState)([]),o=(0,l.Z)(r,2),a=o[0],f=o[1],g=(0,d.useState)(!1),_=(0,l.Z)(g,2),j=_[0],b=_[1],N=(0,d.useState)(null),k=(0,l.Z)(N,2),Z=k[0],C=k[1],P=(0,d.useState)(0),z=(0,l.Z)(P,2),F=z[0],S=z[1],I=m(a),L=function(){var t=(0,c.Z)((0,s.Z)().mark((function t(){var n,i,r;return(0,s.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return b(!0),C(null),t.prev=2,t.next=5,fetch(p.T);case 5:if((n=t.sent).ok){t.next=8;break}throw new Error("Something went wrong");case 8:return t.next=10,n.json();case 10:i=t.sent,r=i.slice(e,e+8),f(r),w=Math.ceil(i.length/8),t.next=19;break;case 16:t.prev=16,t.t0=t.catch(2),C(t.t0.message);case 19:b(!1);case 20:case"end":return t.stop()}}),t,null,[[2,16]])})));return function(){return t.apply(this,arguments)}}();(0,d.useEffect)((function(){L()}),[e]);var A=(0,x.jsx)("p",{className:"error-text",children:"Products not found"});return j?(0,x.jsx)(h.Z,{}):Z?(0,x.jsxs)("p",{className:"error-text",children:[Z.message,' Check if URL address "',p.T,'" is correct.']}):(I.length>0&&(A=(0,x.jsx)(x.Fragment,{children:I.map((function(t){return(0,x.jsx)(u.Z,{id:t.id,image:t.image,title:t.title,price:t.price},t.id)}))})),(0,x.jsxs)(y,{className:"products__list text-center",children:[A,(0,x.jsx)(v,{pageCount:w,handlePageClick:function(t){var n=t.selected;S(n),i(8*n)},selectedPage:F})]}))},k=e(5095),Z=e.n(k),C=b.ZP.div(r||(r=(0,j.Z)(["\n\tmargin-bottom: 10em;\n\taccent-color: var(--orange);\n\n\t@media (min-width: 768px) {\n\t\tposition: sticky;\n\t\ttop: 5rem;\n\t\talign-self: start;\n\t}\n\n\t.filter {\n\t\t&__form--one {\n\t\t\tmargin-bottom: 3em;\n\n\t\t\tinput {\n\t\t\t\tpadding: 0.8em;\n\t\t\t\tborder: none;\n\t\t\t\tfont-size: 1.4rem;\n\t\t\t\tbackground-color: var(--dirty-white);\n\t\t\t\toutline-color: var(--orange);\n\n\t\t\t\t@media (min-width: 1400px) {\n\t\t\t\t\tfont-size: 1.6rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__categories,\n\t\t&__options ul li,\n\t\t&__price {\n\t\t\tcolor: var(--dark-blue);\n\t\t\topacity: 0.9;\n\t\t}\n\n\t\t&__categories {\n\t\t\tfont-size: 1.4rem;\n\t\t\tletter-spacing: 1px;\n\t\t\tmargin-bottom: 1em;\n\n\t\t\t@media (min-width: 1400px) {\n\t\t\t\tfont-size: 1.6rem;\n\t\t\t}\n\t\t}\n\n\t\t&__options {\n\t\t\tborder: none;\n\t\t\tmargin-bottom: 2em;\n\n\t\t\tul {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\trow-gap: 1.5rem;\n\n\t\t\t\tli {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\talign-items: center;\n\t\t\t\t\tcolumn-gap: 1rem;\n\t\t\t\t\tpadding-left: 1em;\n\t\t\t\t\ttext-transform: uppercase;\n\t\t\t\t\tfont-weight: bold;\n\t\t\t\t\tletter-spacing: 1px;\n\t\t\t\t\tfont-size: 1.1rem;\n\n\t\t\t\t\t@media (min-width: 1400px) {\n\t\t\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t\t}\n\n\t\t\t\t\tinput,\n\t\t\t\t\tlabel {\n\t\t\t\t\t\tcursor: pointer;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__form--two {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\talign-items: flex-start;\n\t\t\tjustify-content: center;\n\n\t\t\tinput {\n\t\t\t\tmargin-bottom: 1em;\n\t\t\t}\n\n\t\t\t.filter__price {\n\t\t\t\tfont-size: 1.4rem;\n\n\t\t\t\t@media (min-width: 1400px) {\n\t\t\t\t\tfont-size: 1.6rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),P=e(790),z=function(){var t=(0,f.I0)(),n=(0,f.v9)((function(t){return t.filter})),e=n.filterName,i=n.filterCategory,r=n.filterPrice,o=Z()((function(n){t(P.w.setFilterPrice(n.target.valueAsNumber))}),50);return(0,x.jsxs)(C,{className:"filter",children:[(0,x.jsxs)("form",{className:"filter__form--one",children:[(0,x.jsx)("label",{htmlFor:"search"}),(0,x.jsx)("input",{name:"search",id:"search",type:"text",value:e,placeholder:"Search...",onChange:function(n){t(P.w.setFilterName(n.target.value))}})]}),(0,x.jsx)("h3",{className:"filter__categories",children:"Categories"}),(0,x.jsx)("fieldset",{className:"filter__options",onChange:function(n){t(P.w.setFilterCategory(n.target.value))},children:(0,x.jsxs)("ul",{children:[(0,x.jsxs)("li",{children:[(0,x.jsx)("input",{name:"option",value:"all",id:"options__all",type:"radio",defaultChecked:i.includes("all")}),(0,x.jsx)("label",{htmlFor:"options__all",children:"All"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("input",{name:"option",value:"men's clothing",id:"options__men",type:"radio",defaultChecked:i.includes("men's clothing")}),(0,x.jsx)("label",{htmlFor:"options__men",children:"Men's clothing"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("input",{name:"option",value:"women's clothing",id:"options__woman",type:"radio",defaultChecked:i.includes("women's clothing")}),(0,x.jsx)("label",{htmlFor:"options__woman",children:"Women's clothing"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("input",{name:"option",value:"jewelery",id:"options__jewelery",type:"radio",defaultChecked:i.includes("jewelery")}),(0,x.jsx)("label",{htmlFor:"options__jewelery",children:"Jewelery"})]}),(0,x.jsxs)("li",{children:[(0,x.jsx)("input",{name:"option",value:"electronics",id:"options__electronics",type:"radio",defaultChecked:i.includes("electronics")}),(0,x.jsx)("label",{htmlFor:"options__electronics",children:"Electronics"})]})]})}),(0,x.jsx)("h3",{className:"filter__categories",children:"Max price"}),(0,x.jsxs)("form",{className:"filter__form--two",children:[(0,x.jsx)("label",{htmlFor:"input_price"}),(0,x.jsx)("input",{name:"input_price",id:"input_price",type:"range",min:0,max:p.z,step:10,defaultValue:p.z,onChange:o}),(0,x.jsxs)("span",{className:"filter__price",children:["Value: $",r]})]})]})},F=b.ZP.div(o||(o=(0,j.Z)(["\n\tpadding: 4rem 0;\n\n\t@media (min-width: 576px) {\n\t\tpadding: 4rem 1.5rem;\n\t}\n\n\t@media (min-width: 768px) {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 4fr;\n\t\tcolumn-gap: 2rem;\n\t}\n\n\t@media (min-width: 992px) {\n\t\tcolumn-gap: 0;\n\t}\n"]))),S=function(){return(0,x.jsx)("section",{className:"products section",children:(0,x.jsx)(a.Z,{children:(0,x.jsxs)(F,{className:"products__container",children:[(0,x.jsx)(z,{}),(0,x.jsx)(N,{})]})})})},I=e(1449),L=function(){return(0,x.jsxs)(x.Fragment,{children:[(0,x.jsx)(I._,{children:(0,x.jsx)(a.Z,{children:(0,x.jsx)("h2",{children:"Products"})})}),(0,x.jsx)(S,{})]})}},3912:function(t,n,e){t.exports=e.p+"static/media/product-placeholder.013cd76f21371b0905a8.webp"}}]);
//# sourceMappingURL=120.2eaed1a2.chunk.js.map