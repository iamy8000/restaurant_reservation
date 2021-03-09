(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-07f29c66"],{"335c":function(t,e,a){"use strict";a("8631")},"644d":function(t,e,a){"use strict";var r=a("2fa3"),s=function(){return localStorage.getItem("token")};e["a"]={getCart:function(){return r["b"].get("/user/cart",{headers:{Authorization:"Bearer ".concat(s())}})},postCart:function(t){return r["b"].post("/user/cart",t,{headers:{Authorization:"Bearer ".concat(s())}})},deleteCart:function(t){return r["b"].delete("/user/cart/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})},addCartItem:function(t){return r["b"].post("/user/cartItem/add",{id:t},{headers:{Authorization:"Bearer ".concat(s())}})},reduceCartItem:function(t){return r["b"].post("/user/cartItem/reduce",{id:t},{headers:{Authorization:"Bearer ".concat(s())}})},postTradeInfo:function(t){return r["b"].post("/user/order",t,{headers:{Authorization:"Bearer ".concat(s())}})},getPaymentInfo:function(t){return r["b"].get("/user/payment/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})},getOrders:function(){return r["b"].get("/user/order",{headers:{Authorization:"Bearer ".concat(s())}})},getOrder:function(t){return r["b"].get("/user/order/".concat(t),{headers:{Authorization:"Bearer ".concat(s())}})}}},"7cb4":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"checkout-page"},[a("Navbar"),a("div",{staticClass:"checkout-container"},[a("div",{staticClass:"main-title"},[t._v("確認購買與選擇付款方式")]),a("div",{staticClass:"page-container"},[a("div",{staticClass:"order-card-wrapper"},[a("div",{staticClass:"order-card"},[t._m(0),a("div",{staticClass:"divider"}),a("div",{staticClass:"card-content"},[a("div",{staticClass:"item-wrapper"},[a("div",{staticClass:"text"},[t._v("商品總計")]),a("div",{staticClass:"total-price"},[t._v(t._s(t._f("priceFormat")(t.totalPrice)))])]),a("div",{staticClass:"item-wrapper"},[a("div",{staticClass:"text"},[t._v("數量總計")]),a("div",{staticClass:"total-price"},[t._v(t._s(t.totalQuantity))])]),t._e(),a("div",{staticClass:"divider"}),a("div",{staticClass:"item-wrapper summary"},[a("div",{staticClass:"text"},[t._v("結帳總金額")]),a("div",{staticClass:"total-price"},[t._v(t._s(t._f("priceFormat")(t.totalPrice)))])])])])]),a("div",{staticClass:"contact-and-submit"},[a("validation-observer",{ref:"formvalidation",scopedSlots:t._u([{key:"default",fn:function(e){var r=e.handleSubmit,s=e.invalid;return[a("form",{on:{submit:function(e){return e.preventDefault(),r(t.postTradeInfo)}}},[a("div",{staticClass:"title"},[t._v("確認購買與選擇付款方式")]),a("div",{ref:"contact-card",staticClass:"contact-card"},[a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"name"}},[t._v("購買人姓名")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userName,expression:"userName"}],staticClass:"all-input",class:s,attrs:{id:"name",type:"text",disabled:t.tradeInfo.TradeInfo},domProps:{value:t.userName},on:{input:function(e){e.target.composing||(t.userName=e.target.value)}}}),r[0]?a("span",{staticClass:"invalid-text"},[t._v(t._s(r[0].replace("name ","姓名")))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"required|email"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"email"}},[t._v("購買人電子郵件")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userEmail,expression:"userEmail"}],staticClass:"all-input",class:s,attrs:{id:"email",type:"email",disabled:t.tradeInfo.TradeInfo},domProps:{value:t.userEmail},on:{input:function(e){e.target.composing||(t.userEmail=e.target.value)}}}),r[0]?a("span",{staticClass:"invalid-text"},[t._v(t._s(r[0].replace("email ","電子郵件")))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"phone"}},[t._v("購買人手機號碼")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userPhone,expression:"userPhone"}],staticClass:"all-input",class:s,attrs:{id:"phone",type:"text",disabled:t.tradeInfo.TradeInfo},domProps:{value:t.userPhone},on:{input:function(e){e.target.composing||(t.userPhone=e.target.value)}}}),r[0]?a("span",{staticClass:"invalid-text"},[t._v(t._s(r[0].replace("phone ","手機號碼")))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"required"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"address"}},[t._v("購買人地址")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.userAddress,expression:"userAddress"}],staticClass:"all-input",class:s,attrs:{id:"address",type:"text",disabled:t.tradeInfo.TradeInfo},domProps:{value:t.userAddress},on:{input:function(e){e.target.composing||(t.userAddress=e.target.value)}}}),r[0]?a("span",{staticClass:"invalid-text"},[t._v(t._s(r[0].replace("address ","地址")))]):t._e()]}}],null,!0)})],1),a("div",{staticClass:"all-wrapper"},[a("label",{staticClass:"all-text",attrs:{for:"purpose"}},[t._v("付款方式")]),a("div",{staticClass:"button-wrapper"},t._l(t.payby,(function(e,r){return a("button",{key:"payby-"+r,staticClass:"button",class:{select:t.submitPayby===e},attrs:{disabled:t.tradeInfo.TradeInfo}},[a("span",{staticClass:"text"},[t._v(t._s(e))])])})),0)]),a("div",{staticClass:"all-wrapper"},[a("validation-provider",{attrs:{rules:"max:140"},scopedSlots:t._u([{key:"default",fn:function(e){var r=e.errors,s=e.classes;return[a("label",{staticClass:"all-text",attrs:{for:"note"}},[t._v("其他備註")]),a("textarea",{directives:[{name:"model",rawName:"v-model",value:t.userNote,expression:"userNote"}],staticClass:"all-input text-area",class:s,attrs:{id:"note",placeholder:"有任何特殊需求嗎？可以先寫在這裡喔！",disabled:t.tradeInfo.TradeInfo},domProps:{value:t.userNote},on:{input:function(e){e.target.composing||(t.userNote=e.target.value)}}}),a("div",{staticClass:"note-count"},[t._v("("+t._s(t.userNote.length)+"/140)")]),r[0]?a("span",{staticClass:"invalid-text note-error"},[t._v(t._s(r[0].replace("note ","其他備註")))]):t._e()]}}],null,!0)})],1)]),t.tradeInfo.PayGateWay?t._e():a("div",{staticClass:"submit-button-wrapper"},[a("button",{staticClass:"submit-button",class:{disabled:s},attrs:{type:"submit"}},[a("div",{staticClass:"button"},[t._v("確認購買")])]),a("div",{staticClass:"back-button",on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[a("div",{staticClass:"button"},[t._v("回上一步")])])])])]}}])}),a("form",{attrs:{name:"Spgateway",action:t.tradeInfo.PayGateWay,method:"POST"}},[a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"model",rawName:"v-model",value:t.tradeInfo.MerchantID,expression:"tradeInfo.MerchantID"}],attrs:{type:"text",name:"MerchantID"},domProps:{value:t.tradeInfo.MerchantID},on:{input:function(e){e.target.composing||t.$set(t.tradeInfo,"MerchantID",e.target.value)}}}),a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"model",rawName:"v-model",value:t.tradeInfo.TradeInfo,expression:"tradeInfo.TradeInfo"}],attrs:{type:"text",name:"TradeInfo"},domProps:{value:t.tradeInfo.TradeInfo},on:{input:function(e){e.target.composing||t.$set(t.tradeInfo,"TradeInfo",e.target.value)}}}),a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"model",rawName:"v-model",value:t.tradeInfo.TradeSha,expression:"tradeInfo.TradeSha"}],attrs:{type:"text",name:"TradeSha"},domProps:{value:t.tradeInfo.TradeSha},on:{input:function(e){e.target.composing||t.$set(t.tradeInfo,"TradeSha",e.target.value)}}}),a("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"},{name:"model",rawName:"v-model",value:t.tradeInfo.Version,expression:"tradeInfo.Version"}],attrs:{type:"text",name:"Version"},domProps:{value:t.tradeInfo.Version},on:{input:function(e){e.target.composing||t.$set(t.tradeInfo,"Version",e.target.value)}}}),a("button",{directives:[{name:"show",rawName:"v-show",value:t.tradeInfo.PayGateWay,expression:"tradeInfo.PayGateWay"}],staticClass:"spgateway-button",attrs:{id:"spgateway-button",type:"submit"}},[a("div",{staticClass:"button"},[t._v("前往付款頁面")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.tradeInfo.PayGateWay,expression:"tradeInfo.PayGateWay"}],staticClass:"stop-pay-button",on:{click:function(e){return e.preventDefault(),t.$router.go(-1)}}},[a("div",{staticClass:"button"},[t._v("回上一步")])])])],1)])]),a("div",{ref:"footer"},[a("Footer")],1)],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"header"},[a("div",{staticClass:"title"},[t._v("訂單摘要")])])}],n=(a("4160"),a("b0c0"),a("a9e3"),a("159b"),a("96cf"),a("1da1")),o=a("5530"),i=a("2fa3"),l=a("2f62"),c=a("644d"),u=a("d178"),d=a("fd2d"),v={data:function(){return{payby:["信用卡","ATM轉帳(未開放)"],submitPayby:"信用卡",cart:[],totalPrice:0,totalQuantity:0,userName:"",userEmail:"",userPhone:"",userAddress:"",userNote:"",tradeInfo:{}}},components:{Navbar:u["a"],Footer:d["default"]},created:function(){this.fetchCart(),this.currentUser&&(this.userName=this.currentUser.name,this.userPhone=this.currentUser.phone_number,this.userEmail=this.currentUser.email)},computed:Object(o["a"])({},Object(l["b"])(["currentUser","isAuthenticated"])),methods:{fetchCart:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading.show({isFullPage:!0,opacity:1}),e.prev=1,e.next=4,c["a"].getCart();case 4:r=e.sent,s=r.data,t.cart=s.data,t.calculateTotalPrice(),a.hide(),e.next=16;break;case 11:e.prev=11,e.t0=e["catch"](1),a.hide(),console.log(e.t0),i["a"].fire({icon:"error",title:"目前無法取得購物車資訊，請稍候"});case 16:case"end":return e.stop()}}),e,null,[[1,11]])})))()},calculateTotalPrice:function(){var t=this;this.totalPrice=0,this.totalQuantity=0,this.cart.forEach((function(e){e.subTotalPrice=e.quantity*Number(e.Coupon.price),t.totalPrice+=Number(e.subTotalPrice),t.totalQuantity+=Number(e.quantity)}))},postTradeInfo:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var a,r,s,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a=t.$loading.show({opacity:1,isFullPage:!0}),e.prev=1,r={totalPrice:t.totalPrice,address:t.userAddress,phone:t.userPhone,name:t.userName,email:t.userEmail},e.next=5,c["a"].postTradeInfo(r);case 5:if(s=e.sent,n=s.data,"success"===n.status){e.next=10;break}throw a.hide(),new Error(n.message);case 10:t.tradeInfo=n.tradeInfo,a.hide(),e.next=19;break;case 14:e.prev=14,e.t0=e["catch"](1),a.hide(),console.log(e.t0),i["a"].fire({icon:"error",title:"目前無法成立訂單"});case 19:case"end":return e.stop()}}),e,null,[[1,14]])})))()}}},p=v,f=(a("335c"),a("2877")),m=Object(f["a"])(p,r,s,!1,null,null,null);e["default"]=m.exports},8631:function(t,e,a){},b0c0:function(t,e,a){var r=a("83ab"),s=a("9bf2").f,n=Function.prototype,o=n.toString,i=/^\s*function ([^ (]*)/,l="name";r&&!(l in n)&&s(n,l,{configurable:!0,get:function(){try{return o.call(this).match(i)[1]}catch(t){return""}}})}}]);
//# sourceMappingURL=chunk-07f29c66.af574a7c.js.map