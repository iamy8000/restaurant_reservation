(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-db732800"],{"523d":function(t,e,i){"use strict";i("aef1")},8179:function(t,e,i){"use strict";i("e60e")},ab31:function(t,e,i){"use strict";i("a15b");var s=i("2fa3"),a=function(){return localStorage.getItem("token")};e["a"]={getCoupons:function(t,e){var i=t?"?page=".concat(t):"";return e&&e.length>1&&(i+=e.join("&")),s["b"].get("/coupons".concat(i),{headers:{Authorization:"Bearer ".concat(a())}})},getCoupon:function(t){return s["b"].get("/coupons/".concat(t),{headers:{Authorization:"Bearer ".concat(a())}})}}},aef1:function(t,e,i){},bc7a2:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal",class:{show:t.showModal,innerShow:t.modalContentShow}},[i("div",{staticClass:"modal-background",on:{click:t.closeModal}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-content",class:{show:t.modalContentShow}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.modalContentShow,expression:"modalContentShow"}]},[i("div",{staticClass:"top-wrapper"},[i("div",{staticClass:"close-wrapper",on:{click:t.closeModal}},[i("div",{staticClass:"icon close"})]),i("div",{staticClass:"title"},[t._v("篩選條件")]),i("div",{staticClass:"clear-wrapper"},[i("div",{staticClass:"text",on:{click:t.clearAll}},[t._v("清除")])])]),i("div",{staticClass:"filter-container"},[i("div",{staticClass:"district"},[i("div",{staticClass:"title"},[t._v("用餐地區")]),i("div",{staticClass:"item-group"},t._l(t.districts,(function(e,s){return i("label",{key:"district-"+s,staticClass:"item"},[i("div",{staticClass:"text-wrapper"},[i("div",{staticClass:"text"},[t._v(t._s(e.name))])]),i("div",{staticClass:"input-container",attrs:{for:"checkbox-district-"+s}},[i("div",{staticClass:"input-wrapper"},[i("input",{staticClass:"input",attrs:{type:"checkbox",id:"checkbox-district-"+s},domProps:{checked:t.tempDistrictsFilter.includes(e.name)},on:{click:function(i){return t.addToFilter(e.name,"district")}}}),t._m(0,!0)])])])})),0)]),i("div",{staticClass:"category"},[i("div",{staticClass:"title"},[t._v("餐廳類型")]),i("div",{staticClass:"item-group"},t._l(t.categories,(function(e,s){return i("label",{key:"category-"+s,staticClass:"item"},[i("div",{staticClass:"text-wrapper"},[i("div",{staticClass:"text"},[t._v(t._s(e.name))])]),i("div",{staticClass:"input-container",attrs:{for:"checkbox-category-"+s}},[i("div",{staticClass:"input-wrapper"},[i("input",{staticClass:"input",attrs:{type:"checkbox",id:"checkbox-category-"+s},domProps:{checked:t.tempCategoriesFilter.includes(e.name)},on:{click:function(i){return t.addToFilter(e.name,"category")}}}),t._m(1,!0)])])])})),0)]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.$route.path.includes("coupons"),expression:"!$route.path.includes('coupons')"}],staticClass:"price"},[i("div",{staticClass:"title"},[t._v("平均價格為 "+t._s(t._f("priceFormat")(t.averagePrice))+" / 人")]),i("canvas",{ref:"myChart",staticClass:"chart-canvas"}),i("div",{ref:"slider",staticClass:"slider-bar-container"},[i("vue-slider",{attrs:{interval:t.intervalNum,process:!1,tooltip:"none",max:t.sliderMax,min:t.sliderMin},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1),i("div",{staticClass:"slider-input-container"},[i("div",{staticClass:"input-wrapper"},[i("div",{staticClass:"input-content"},[i("div",{staticClass:"input-title"},[t._v("最低價格")]),i("div",{staticClass:"input-text-wrapper"},[i("div",{staticClass:"money-symbol"},[t._v("$")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderValue[0],expression:"sliderValue[0]"}],staticClass:"input-text",domProps:{value:t.sliderValue[0]},on:{input:function(e){e.target.composing||t.$set(t.sliderValue,0,e.target.value)}}})])])]),t._m(2),i("div",{staticClass:"input-wrapper"},[i("div",{staticClass:"input-content"},[i("div",{staticClass:"input-title"},[t._v("最高價格")]),i("div",{staticClass:"input-text-wrapper"},[i("div",{staticClass:"money-symbol"},[t._v("$")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderValue[1],expression:"sliderValue[1]"}],staticClass:"input-text",domProps:{value:t.sliderValue[1]},on:{input:function(e){e.target.composing||t.$set(t.sliderValue,1,e.target.value)}}}),t.sliderValue[1]===t.sliderMax?i("div",{staticClass:"plus-symbol"},[t._v("+")]):t._e()])])])])])]),i("div",{staticClass:"filter-button-wrapper"},[i("div",{staticClass:"filter-button",on:{click:t.completeEditing}},[i("div",{staticClass:"button"},[t._v("顯示結果")])])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("span",{staticClass:"icon check"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("span",{staticClass:"icon check"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-divider-wrapper"},[i("div",{staticClass:"input-divider"})])}],r=(i("99af"),i("4160"),i("caad"),i("c975"),i("d81d"),i("13d5"),i("a434"),i("a9e3"),i("d3b7"),i("2532"),i("3ca3"),i("159b"),i("ddb0"),i("2909")),c=(i("96cf"),i("1da1")),n=i("30ef"),l=i.n(n),o=i("4971"),d=i.n(o),u=(i("5421"),i("2fa3")),h=i("c4c3"),p={data:function(){return{modalContentShow:!1,districts:[],categories:[],tempCategoriesFilter:[],tempDistrictsFilter:[],prices:[],averagePrice:0,countArray:[],labelArray:[],sliderValue:[0,100],sliderMin:0,sliderMax:1e4,intervalNum:50,intervalWidth:0,barColor:[],myChart:{}}},props:{showModal:{type:Boolean},categoriesFilter:{type:Array},districtsFilter:{type:Array},priceFilter:{type:Array}},components:{VueSlider:d.a},created:function(){return Promise.all([this.fetchCategories(),this.fetchDistricts(),this.fetchPrices()]).then((function(){}))},mounted:function(){this.createChart()},watch:{showModal:function(){var t=this;setTimeout((function(){t.modalContentShow=t.showModal}),100),this.categoriesFilter&&(this.tempCategoriesFilter=this.categoriesFilter),this.districtsFilter&&(this.tempDistrictsFilter=this.districtsFilter),this.$route.path.includes("coupons")||2!==this.priceFilter.length||(this.sliderValue=this.priceFilter)},categoriesFilter:function(){this.tempCategoriesFilter=this.categoriesFilter},districtsFilter:function(){this.tempDistrictsFilter=this.districtsFilter},sliderValue:function(){this.barColor=[],this.sliderValue[0]?this.sliderValue[0]<this.sliderMin&&(this.sliderValue[0]=this.sliderMin):this.sliderValue[0]=0,this.sliderValue[1]?this.sliderValue[1]>this.sliderMax?this.sliderValue[1]=this.sliderMax:this.sliderValue[1]<this.sliderMin+this.intervalWidth&&(this.sliderValue[1]=this.sliderMin+this.intervalWidth):this.sliderValue[1]=this.sliderMax,this.sliderValue[0]=Number(this.sliderValue[0]),this.sliderValue[1]=Number(this.sliderValue[1]);for(var t=this.sliderMin;t<this.sliderMax;t+=this.intervalWidth)t>=this.sliderValue[0]&&t+this.intervalWidth<=this.sliderValue[1]?this.barColor.push("rgb(176, 176, 176)"):this.barColor.push("rgb(221, 221, 221)");this.myChart.data.datasets[0].backgroundColor=this.barColor,this.myChart.update()}},methods:{closeModal:function(){this.$emit("closeModal")},fetchDistricts:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h["a"].getDistricts();case 3:i=e.sent,s=i.data,t.districts=s.districts,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),u["a"].fire({icon:"error",title:"目前無法取得類別，請稍候"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchCategories:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h["a"].getCategories();case 3:i=e.sent,s=i.data,t.categories=s.categories,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),u["a"].fire({icon:"error",title:"目前無法取得類別，請稍候"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchPrices:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h["a"].getPrices();case 3:i=e.sent,s=i.data,t.prices=s.data,t.pricesGrouping(t.intervalNum),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0),u["a"].fire({icon:"error",title:"目前無法取得價格，請稍候"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},createChart:function(){var t=this.$refs.myChart,e={labels:this.labelArray,datasets:[{data:this.countArray,backgroundColor:this.barColor}]},i={tooltips:{enabled:!1},legend:{display:!1},scales:{yAxes:[{display:!1}],xAxes:[{gridLines:{display:!1},scaleLabel:{display:!1}}]}};this.myChart=new l.a.Bar(t,{data:e,options:i})},pricesGrouping:function(t){var e=this,i=this.prices.reduce((function(t,e){return t+e}),0)/this.prices.length;this.averagePrice=Math.ceil(i);var s=Math.sqrt(this.prices.map((function(t){return Math.pow(t-i,2)})).reduce((function(t,e){return t+e}))/this.prices.length),a=i-2*s<0?0:i-2*s;this.sliderMin=a;var r=i+2*s;this.intervalWidth=Math.ceil((r-a)/t),r=a+this.intervalWidth*t,this.sliderMax=r,this.sliderValue=[a,r];for(var c=function(t){var i=0;e.prices.forEach((function(s){s>=t&&s<t+e.intervalWidth&&(i+=1)})),e.countArray.push(i),e.labelArray.push(""),e.barColor.push("rgb(221, 221, 221)")},n=a;n<r;n+=this.intervalWidth)c(n)},addToFilter:function(t,e){switch(e){case"district":this.tempDistrictsFilter.includes(t)?this.tempDistrictsFilter.splice(this.tempDistrictsFilter.indexOf(t),1):this.tempDistrictsFilter=[].concat(Object(r["a"])(this.tempDistrictsFilter),[t]);break;case"category":this.tempCategoriesFilter.includes(t)?this.tempCategoriesFilter.splice(this.tempCategoriesFilter.indexOf(t),1):this.tempCategoriesFilter=[].concat(Object(r["a"])(this.tempCategoriesFilter),[t]);break}},completeEditing:function(){var t=[];t[0]=this.sliderValue[0],this.sliderValue[1]===this.sliderMax?t[1]=9999:t[1]=this.sliderValue[1],t[0]===this.sliderMin&&9999===t[1]&&(t=[]),this.$emit("closeModal",!0,this.tempCategoriesFilter,this.tempDistrictsFilter,t)},clearAll:function(){this.tempCategoriesFilter=[],this.tempDistrictsFilter=[],this.sliderValue=[this.sliderMin,this.sliderMax]}}},v=p,f=(i("523d"),i("2877")),m=Object(f["a"])(v,s,a,!1,null,"187eda4c",null);e["a"]=m.exports},e60e:function(t,e,i){},f329:function(t,e,i){"use strict";i.r(e);var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"coupons",class:{modalShow:t.showModal}},[i("Navbar",{staticClass:"restaurant-navbar"}),i("div",{staticClass:"coupons-searchbar-wrapper"},[i("div",{staticClass:"back-wrapper",on:{click:function(e){return t.$router.go(-1)}}},[i("div",{staticClass:"icon back"})]),i("div",{staticClass:"searchbar"},[t._e(),t._m(0)]),i("div",{staticClass:"filter-wrapper",class:{"filter-on":t.filter.length>1},on:{click:function(e){t.showModal=!t.showModal}}},[i("div",{staticClass:"icon filter"})])]),i("div",{ref:"list-container",staticClass:"list-container"},[i("div",{ref:"coupon-list",staticClass:"coupon-list"},[i("div",{staticClass:"title"},[t._v("餐券列表")]),i("div",{staticClass:"filter-button-wrapper"},[i("div",{staticClass:"filter-button",class:{"filter-on":t.districtsFilter.length>0},on:{click:function(e){t.showChangeModal=!t.showChangeModal}}},[t._v("地區")]),i("div",{staticClass:"filter-button",class:{"filter-on":t.categoriesFilter.length>0},on:{click:function(e){t.showAddModal=!t.showAddModal}}},[t._v("類型")])]),0===t.coupons.length?i("div",{ref:"restaurant-card-deck-wrapper",staticClass:"restaurant-card-deck-wrapper no-restaurant"}):t._e(),t.coupons.length>0?i("div",{ref:"restaurant-card-deck-wrapper",staticClass:"restaurant-card-deck-wrapper"},t._l(t.numOfPage,(function(e){return i("div",{key:"page-num-"+e},t._l(Math.ceil(t.coupons.slice(24*(e-1),24*e).length/t.cardPerDeck),(function(s){return i("div",{key:"deck-num-"+s,staticClass:"restaurant-card-deck"},t._l(t.coupons.slice(24*(e-1),24*e).slice((s-1)*t.cardPerDeck,s*t.cardPerDeck),(function(e,s){return i("div",{key:s,staticClass:"restaurant-card",class:{"last-card":s===t.cardPerDeck},style:"flex: "+1/t.cardPerDeck,on:{click:function(i){return t.$router.push("/coupons/"+e.id)}}},[i("div",{staticClass:"card-image-wrapper"},[t._m(1,!0),i("div",{staticClass:"card-image",style:"background: url("+e.Restaurant.picture+") no-repeat center / cover"})]),i("div",{staticClass:"rating-wrapper"},[i("svg",{staticClass:"icon star"}),i("div",{staticClass:"rating"},[i("span",{staticClass:"number"},[i("span",[t._v(t._s(e.Restaurant.rating.padEnd(3,".0")))])])])]),i("div",{staticClass:"name"},[t._v(t._s(e.description))]),i("div",{staticClass:"category-wrapper"},[e.Restaurant?i("span",{staticClass:"category"},[t._v(t._s(e.Restaurant.CategoryName))]):t._e(),i("span",{staticClass:"bullet"},[t._v("·")]),e.Restaurant?i("span",{staticClass:"district"},[t._v(t._s(e.Restaurant.DistrictName))]):t._e()]),i("div",{staticClass:"description"},[t._v(t._s(e.Restaurant.description))]),i("div",{staticClass:"price-wrapper"},[i("div",{staticClass:"price"},[t._v(t._s(t._f("priceFormat")(e.price)))]),i("div",{staticClass:"origin-price"},[t._v(t._s(t._f("priceFormat")(Number(e.price)+Math.round(100*(5-Number(e.Restaurant.rating))))))])])])})),0)})),0)})),0):t._e(),i("div",{staticClass:"load-more"},[t.coupons.length>0&&t.coupons.length%24===0?i("div",{staticClass:"load-more-button",on:{click:function(e){return t.fetchCoupons(t.filter)}}},[t._v("載入更多結果")]):t._e()])]),i("div",{ref:"footer"},[i("Footer")],1)]),i("FilterModal",{attrs:{showModal:t.showModal,categoriesFilter:t.categoriesFilter,districtsFilter:t.districtsFilter},on:{closeModal:t.closeFilter}}),i("AddCategory",{attrs:{showModal:t.showAddModal,categoriesFilter:t.categoriesFilter},on:{closeAddModal:t.completeAdding}}),i("ChangeDistrict",{attrs:{showModal:t.showChangeModal,districtsFilter:t.districtsFilter},on:{closeChangeModal:t.completeChanging}})],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"wrapper"},[i("div",{staticClass:"text"},[t._v("返回")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"heart-wrapper"},[i("div",{staticClass:"icon heart"})])}],r=(i("99af"),i("4de4"),i("d81d"),i("96cf"),i("1da1")),c=i("2909"),n=i("5530"),l=i("2fa3"),o=i("2f62"),d=i("ab31"),u=i("d178"),h=i("fd2d"),p=i("bc7a2"),v=i("033d"),f=i("9311"),m={data:function(){return{showModal:!1,scrollY:0,scrollUp:!0,divHeight:0,scrollBarHeight:0,windowWidth:window.innerWidth,cardPerDeck:1,coupons:[],numOfPage:0,filter:[""],showAddModal:!1,showChangeModal:!1,categoriesFilter:[],districtsFilter:[]}},components:{Navbar:u["a"],Footer:h["default"],FilterModal:p["a"],AddCategory:v["a"],ChangeDistrict:f["a"]},mounted:function(){var t=this;this.$refs["list-container"].addEventListener("scroll",this.onScroll,{passive:!0}),this.divHeight=this.$refs["list-container"].scrollHeight,this.scrollBarHeight=this.$refs["list-container"].clientHeight,window.addEventListener("resize",(function(){t.windowWidth=window.innerWidth})),this.defineCardDeck(),this.fetchCoupons()},watch:{windowWidth:function(){this.defineCardDeck()},filter:function(){this.coupons=[],this.numOfPage=0,this.fetchCoupons(this.filter)}},computed:Object(n["a"])({},Object(o["b"])(["currentUser","isAuthenticated"])),methods:{closeFilter:function(t,e,i){this.showModal=!1,t&&(this.categoriesFilter=e,this.districtsFilter=i,this.filter=[""].concat(Object(c["a"])(this.categoriesFilter.map((function(t){return"category="+t}))),Object(c["a"])(this.districtsFilter.map((function(t){return"district="+t})))))},onScroll:function(t){this.scrollUp=this.scrollY>this.$refs["list-container"].scrollTop,this.scrollY=this.$refs["list-container"].scrollTop},defineCardDeck:function(){this.windowWidth<768?this.cardPerDeck=1:this.windowWidth<992?this.cardPerDeck=2:this.windowWidth<1200?this.cardPerDeck=3:this.cardPerDeck=4},fetchCoupons:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function i(){var s,a,r;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return s=e.$loading.show({container:e.$refs["restaurant-card-deck-wrapper"],opacity:1,isFullPage:!1}),i.prev=1,i.next=4,d["a"].getCoupons(e.numOfPage+1,t);case 4:a=i.sent,r=a.data,e.coupons=[].concat(Object(c["a"])(e.coupons),Object(c["a"])(r.data)),e.numOfPage+=1,s.hide(),i.next=16;break;case 11:i.prev=11,i.t0=i["catch"](1),s.hide(),console.log(i.t0),l["a"].fire({icon:"error",title:"目前無法取得餐券，請稍候"});case 16:case"end":return i.stop()}}),i,null,[[1,11]])})))()},completeAdding:function(t,e){this.showAddModal=!1,t&&(this.categoriesFilter=e,this.filter=[""].concat(Object(c["a"])(this.districtsFilter.map((function(t){return"district="+t}))),Object(c["a"])(e.map((function(t){return"category="+t})))))},completeChanging:function(t,e){this.showChangeModal=!1,t&&(this.districtsFilter=e,this.filter=[""].concat(Object(c["a"])(this.categoriesFilter.map((function(t){return"category="+t}))),Object(c["a"])(e.map((function(t){return"district="+t})))))}}},C=m,g=(i("8179"),i("2877")),w=Object(g["a"])(C,s,a,!1,null,null,null);e["default"]=w.exports}}]);
//# sourceMappingURL=chunk-db732800.7b524458.js.map