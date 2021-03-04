(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07f29c66"],{"335c":function(t,e,a){"use strict";a("8631")},"644d":function(t,e,a){"use strict";var r=a("2fa3"),s=function(){return localStorage.getItem("token")};e["a"]={getCart:function(){return r["b"].get("/cart",{headers:{Authorization:"Bearer ".concat(s())}})},postCart:function(t){return r["b"].post("/cart",t,{headers:{Authorization:"Bearer ".concat(s())}})},deleteCart:function(t){return r["b"].delete("/cart/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})},addCartItem:function(t){return r["b"].post("/cartItem/".concat(t,"/add"),{headers:{Authorization:"Bearer ".concat(s())}})},reduceCartItem:function(t){return r["b"].post("/cartItem/".concat(t,"/reduce"),{headers:{Authorization:"Bearer ".concat(s())}})},postOrder:function(t){return r["b"].post("/order",t,{headers:{Authorization:"Bearer ".concat(s())}})},getOrders:function(){return r["b"].get("/order",{headers:{Authorization:"Bearer ".concat(s())}})},getOrder:function(t){return r["b"].get("/order/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})}}},"7cb4":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout-page"},[a("Navbar"),a("div",{staticClass:"checkout-container"},[a("div",{staticClass:"main-title"},[t._v("確認購買與選擇付款方式")]),a("div",{staticClass:"page-container"},[a("div",{staticClass:"order-card-wrapper"},[a("div",{staticClass:"order-card"},[t._m(0),a("div",{staticClass:"divider"}),a("div",{staticClass:"card-content"},[a("div",{staticClass:"item-wrapper"},[a("div",{staticClass:"text"},[t._v("商品總計")]),a("div",{staticClass:"total-price"},[t._v(t._s(t._f("priceFormat")(t.totalPrice)))])]),a("div",{staticClass:"item-wrapper"},[a("div",{staticClass:"text"},[t._v("數量總計")]),a("div",{staticClass:"total-price"},[t._v(t._s(t.totalQuantity))])]),t._e(),a("div",{staticClass:"divider"}),a("div",{staticClass:"item-wrapper summary"},[a("div",{staticClass:"text"},[t._v("結帳總金額")]),a("div",{staticClass:"total-price"},[t._v(t._s(t._f("priceFormat")(t.totalPrice)))])])])])]),a("div",{staticClass:"contact-and-submit"},[a("validation-observer",{ref:"formvalidation",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.invalid;return[a("div",{staticClass:"title"},[t._v("確認購買與選擇付款方式")]),a("div",{staticClass:"contact-card"},[a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"name"}},[t._v("購買人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"all-input",class:s,attrs:{id:"name",type:"text"},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),r[0]?a("span",{staticClass:"invalid-text"},[t._v(t._s(r[0].replace("name ","姓名")))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"email"}},[t._v("購買人電子郵件")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"all-input",class:s,attrs:{id:"email",type:"email"},domProps:{value:t.userEmail},on:{input:function(e){e.target.composing||(t.userEmail=e.target.value)}}}),r[0]?a("span",{staticClass:"invalid-text"},[t._v(t._s(r[0].replace("email ","電子郵件")))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"phone"}},[t._v("購買人手機號碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],staticClass:"all-input",class:s,attrs:{id:"phone",type:"text"},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}}),r[0]?a("span",{staticClass:"invalid-text"},[t._v(t._s(r[0].replace("phone ","手機號碼")))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"address"}},[t._v("購買人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userAddress,expression:"userAddress"}],staticClass:"all-input",class:s,attrs:{id:"address",type:"text"},domProps:{value:t.userAddress},on:{input:function(e){e.target.composing||(t.userAddress=e.target.value)}}}),r[0]?a("span",{staticClass:"invalid-text"},[t._v(t._s(r[0].replace("address ","地址")))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"all-wrapper"},[a("label",{staticClass:"all-text",attrs:{for:"purpose"}},[t._v("付款方式")]),a("div",{staticClass:"button-wrapper"},t._l(t.payby,(function(e,r){return a("button",{key:"payby-"+r,staticClass:"button",class:{select:t.submitPayby===e}},[a("span",{staticClass:"text"},[t._v(t._s(e))])])})),0)]),a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"max:140"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"note"}},[t._v("其他備註")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userNote,expression:"userNote"}],staticClass:"all-input text-area",class:s,attrs:{id:"note",placeholder:"有任何特殊需求嗎？可以先寫在這裡喔！"},domProps:{value:t.userNote},on:{input:function(e){e.target.composing||(t.userNote=e.target.value)}}}),a("div",{staticClass:"note-count"},[t._v("("+t._s(t.userNote.length)+"/140)")]),r[0]?a("span",{staticClass:"invalid-text note-error"},[t._v(t._s(r[0].replace("note ","其他備註")))]):t._e()]}}],null,!0)})],1)]),a("div",{staticClass:"submit-button-wrapper"},[a("button",{staticClass:"submit-button",class:{disabled:r},attrs:{type:"submit",disabled:r},on:{click:function(e){return e.preventDefault(),t.postOrder(e)}}},[a("div",{staticClass:"button"},[t._v("確認購買")])]),a("div",{staticClass:"back-button",on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[a("div",{staticClass:"button"},[t._v("回上一步")])])])]}}])})],1)])]),a("div",{ref:"footer"},[a("Footer")],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v("訂單摘要")])])}],i=(a("4160"),a("b0c0"),a("a9e3"),a("159b"),a("96cf"),a("1da1")),n=a("5530"),o=a("2fa3"),c=a("2f62"),l=a("644d"),u=a("d178"),d=a("fd2d"),v={data:function(){return{payby:["信用卡","ATM轉帳(未開放)"],submitPayby:"信用卡",cart:[],totalPrice:0,totalQuantity:0,userName:"",userEmail:"",userPhone:"",userAddress:"",userNote:""}},components:{Navbar:u["a"],Footer:d["default"]},created:function(){this.fetchCart(),this.currentUser&&(this.userName=this.currentUser.name,this.userPhone=this.currentUser.phone_number,this.userEmail=this.currentUser.email)},computed:Object(n["a"])({},Object(c["b"])(["currentUser","isAuthenticated"])),methods:{fetchCart:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l["a"].getCart();case 3:a=e.sent,r=a.data,t.cart=r.data,t.calculateTotalPrice(),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0),o["a"].fire({icon:"error",title:"目前無法取得購物車資訊，請稍候"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},calculateTotalPrice:function(){var t=this;this.totalPrice=0,this.totalQuantity=0,this.cart.forEach((function(e){e.subTotalPrice=e.quantity*Number(e.Coupon.price),t.totalPrice+=Number(e.subTotalPrice),t.totalQuantity+=Number(e.quantity)}))},postOrder:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a={totalPrice:t.totalPrice,address:t.userAddress,phone:t.userPhone,name:t.userName,email:t.userEmail},e.next=4,l["a"].postOrder(a);case 4:if(r=e.sent,s=r.data,"success"===s.status){e.next=8;break}throw new Error(s.message);case 8:window.location.assign(s.tradeInfo.PayGateWay),o["a"].fire({icon:"success",title:"訂單已成立"}),e.next=16;break;case 12:e.prev=12,e.t0=e["catch"](0),console.log(e.t0),o["a"].fire({icon:"error",title:"目前無法成立訂單"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})))()}}},p=v,m=(a("335c"),a("2877")),f=Object(m["a"])(p,r,s,!1,null,null,null);e["default"]=f.exports},8631:function(t,e,a){},b0c0:function(t,e,a){var r=a("83ab"),s=a("9bf2").f,i=Function.prototype,n=i.toString,o=/^\s*function ([^ (]*)/,c="name";r&&!(c in i)&&s(i,c,{configurable:!0,get:function(){try{return n.call(this).match(o)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-07f29c66.ae9dbb13.js.map