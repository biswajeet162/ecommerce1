import './polyfills.server.mjs';
import{c as u}from"./chunk-YKBJMKVP.mjs";import{B as n,C as i,D as o,E as c,d as a,ha as f,i as l,ia as g,j as p,ja as M,ma as s}from"./chunk-NKL6DVTV.mjs";var P=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",loadChildren:()=>import("./chunk-VOZGVWGP.mjs").then(e=>e.HomepageModule)},{path:"products",loadChildren:()=>import("./chunk-3R2DAFR5.mjs").then(e=>e.ProductModule)},{path:"cart",loadChildren:()=>import("./chunk-56XHNPHH.mjs").then(e=>e.CartModule)},{path:"checkout",loadChildren:()=>import("./chunk-W6WF2CFF.mjs").then(e=>e.CheckoutModule)},{path:"user",loadChildren:()=>import("./chunk-2TN7ZN7Z.mjs").then(e=>e.UserModule)},{path:"**",redirectTo:"/home"}],x=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=p({type:e});static \u0275inj=a({imports:[s.forRoot(P),s]})}return e})();var C=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-header"]],decls:29,vars:0,consts:[["id","header"],["href","home"],["src","/assets/logo.png","alt","",1,"logo"],["id","search-bar"],["type","text","placeholder","Search..."],["type","submit"],[1,"fa-solid","fa-magnifying-glass"],["id","nav-container"],["id","nav-bar"],["href","login",1,"icon-link"],[1,"fa-solid","fa-user"],["href","seller",1,"icon-link"],["href","cart",1,"icon-link"],[1,"fa-solid","fa-cart-shopping"],["href","option",1,"icon-link"],[1,"fa-regular","fa-grip-dots-vertical"]],template:function(t,O){t&1&&(n(0,"section",0)(1,"a",1),o(2,"img",2),i(),n(3,"div",3),o(4,"input",4),n(5,"button",5),o(6,"i",6),i()(),n(7,"div",7)(8,"ul",8)(9,"li")(10,"a",9),o(11,"i",10),n(12,"span"),c(13,"\xA0Login"),i()()(),n(14,"li")(15,"a",11),o(16,"i",10),n(17,"span"),c(18,"\xA0Seller"),i()()(),n(19,"li")(20,"a",12),o(21,"i",13),n(22,"span"),c(23,"\xA0Cart"),i()()(),n(24,"li")(25,"a",14),o(26,"i",15),n(27,"span"),c(28,"\xA0. . ."),i()()()()()())},styles:['#header[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:space-between;background-color:#e0e4e6;box-shadow:0 5px 20px #0c080830;position:sticky;z-index:999;top:0;left:0;padding:10px 20px}.logo[_ngcontent-%COMP%]{padding:10px 20px}#search-bar[_ngcontent-%COMP%]{flex:1;display:flex;align-items:center;margin:0 20px}#search-bar[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:100%;padding:8px 12px;border:1px solid #ccc;border-radius:4px 0 0 4px;font-size:16px}#search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:8px 12px;border:1px solid #ccc;border-left:none;border-radius:0 4px 4px 0;background-color:#088178;color:#fff;cursor:pointer;font-size:16px}#search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover{background-color:#066a5b}#nav-container[_ngcontent-%COMP%], #nav-bar[_ngcontent-%COMP%]{display:flex;align-items:center}#nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{list-style:none;padding:0 15px;position:relative}#nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;font-size:16px;font-weight:600;color:#1a1a1a;transition:.3s ease;display:flex;align-items:center}#nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover, #nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:#088178}#nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]:after, #nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover:after{content:"";width:30%;height:3px;position:absolute;background-color:#088178;bottom:-1px;left:23px}@media (max-width: 768px){#header[_ngcontent-%COMP%]{flex-direction:column;align-items:flex-start;padding:10px}.logo[_ngcontent-%COMP%]{padding:5px 10px;font-size:14px}#nav-container[_ngcontent-%COMP%]{width:100%;display:flex;justify-content:space-between;padding:5px 0}#nav-bar[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:14px}#search-bar[_ngcontent-%COMP%]{width:100%;margin:10px 0}#search-bar[_ngcontent-%COMP%]   input[type=text][_ngcontent-%COMP%]{width:100%;padding:10px}#search-bar[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{padding:10px;font-size:14px}}']})}return e})();var m=(()=>{class e{title="ecommerce-frontend";static \u0275fac=function(t){return new(t||e)};static \u0275cmp=l({type:e,selectors:[["app-root"]],decls:2,vars:0,template:function(t,O){t&1&&o(0,"app-header")(1,"router-outlet")},dependencies:[M,C]})}return e})();var h=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=p({type:e,bootstrap:[m]});static \u0275inj=a({providers:[g()],imports:[f,x]})}return e})();var v=(()=>{class e{static \u0275fac=function(t){return new(t||e)};static \u0275mod=p({type:e,bootstrap:[m]});static \u0275inj=a({imports:[h,u]})}return e})();export{v as a};
