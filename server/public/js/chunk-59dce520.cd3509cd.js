(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-59dce520"],{8142:function(t,e,i){"use strict";i("8b62")},"8b62":function(t,e,i){},9652:function(t,e,i){"use strict";i("b2f3")},b2f3:function(t,e,i){},b726:function(t,e,i){t.exports=i.p+"img/ramen.13ddfed9.svg"},bc7a2:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal",class:{show:t.showModal,innerShow:t.modalContentShow}},[i("div",{staticClass:"modal-background",on:{click:t.closeModal}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-content",class:{show:t.modalContentShow}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.modalContentShow,expression:"modalContentShow"}]},[i("div",{staticClass:"top-wrapper"},[i("div",{staticClass:"close-wrapper",on:{click:t.closeModal}},[i("div",{staticClass:"icon close"})]),i("div",{staticClass:"title"},[t._v("篩選條件")]),i("div",{staticClass:"clear-wrapper"},[i("div",{staticClass:"text",on:{click:t.clearAll}},[t._v("清除")])])]),i("div",{staticClass:"filter-container"},[i("div",{staticClass:"district"},[i("div",{staticClass:"title"},[t._v("用餐地區")]),i("div",{staticClass:"item-group"},t._l(t.districts,(function(e,s){return i("label",{key:"district-"+s,staticClass:"item"},[i("div",{staticClass:"text-wrapper"},[i("div",{staticClass:"text"},[t._v(t._s(e.name))])]),i("div",{staticClass:"input-container",attrs:{for:"checkbox-district-"+s}},[i("div",{staticClass:"input-wrapper"},[i("input",{staticClass:"input",attrs:{type:"checkbox",id:"checkbox-district-"+s},domProps:{checked:t.tempDistrictsFilter.includes(e.name)},on:{click:function(i){return t.addToFilter(e.name,"district")}}}),t._m(0,!0)])])])})),0)]),i("div",{staticClass:"category"},[i("div",{staticClass:"title"},[t._v("餐廳類型")]),i("div",{staticClass:"item-group"},t._l(t.categories,(function(e,s){return i("label",{key:"category-"+s,staticClass:"item"},[i("div",{staticClass:"text-wrapper"},[i("div",{staticClass:"text"},[t._v(t._s(e.name))])]),i("div",{staticClass:"input-container",attrs:{for:"checkbox-category-"+s}},[i("div",{staticClass:"input-wrapper"},[i("input",{staticClass:"input",attrs:{type:"checkbox",id:"checkbox-category-"+s},domProps:{checked:t.tempCategoriesFilter.includes(e.name)},on:{click:function(i){return t.addToFilter(e.name,"category")}}}),t._m(1,!0)])])])})),0)]),i("div",{directives:[{name:"show",rawName:"v-show",value:!t.$route.path.includes("coupons"),expression:"!$route.path.includes('coupons')"}],staticClass:"price"},[i("div",{staticClass:"title"},[t._v("平均價格為 "+t._s(t._f("priceFormat")(t.averagePrice))+" / 人")]),i("canvas",{ref:"myChart",staticClass:"chart-canvas"}),i("div",{ref:"slider",staticClass:"slider-bar-container"},[i("vue-slider",{attrs:{interval:t.intervalNum,process:!1,tooltip:"none",max:t.sliderMax,min:t.sliderMin},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1),i("div",{staticClass:"slider-input-container"},[i("div",{staticClass:"input-wrapper"},[i("div",{staticClass:"input-content"},[i("div",{staticClass:"input-title"},[t._v("最低價格")]),i("div",{staticClass:"input-text-wrapper"},[i("div",{staticClass:"money-symbol"},[t._v("$")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderValue[0],expression:"sliderValue[0]"}],staticClass:"input-text",domProps:{value:t.sliderValue[0]},on:{input:function(e){e.target.composing||t.$set(t.sliderValue,0,e.target.value)}}})])])]),t._m(2),i("div",{staticClass:"input-wrapper"},[i("div",{staticClass:"input-content"},[i("div",{staticClass:"input-title"},[t._v("最高價格")]),i("div",{staticClass:"input-text-wrapper"},[i("div",{staticClass:"money-symbol"},[t._v("$")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderValue[1],expression:"sliderValue[1]"}],staticClass:"input-text",domProps:{value:t.sliderValue[1]},on:{input:function(e){e.target.composing||t.$set(t.sliderValue,1,e.target.value)}}}),t.sliderValue[1]===t.sliderMax?i("div",{staticClass:"plus-symbol"},[t._v("+")]):t._e()])])])])])]),i("div",{staticClass:"filter-button-wrapper"},[i("div",{staticClass:"filter-button",on:{click:t.completeEditing}},[i("div",{staticClass:"button"},[t._v("顯示結果")])])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("span",{staticClass:"icon check"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("span",[i("span",{staticClass:"icon check"})])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-divider-wrapper"},[i("div",{staticClass:"input-divider"})])}],r=(i("99af"),i("4160"),i("caad"),i("c975"),i("d81d"),i("13d5"),i("a434"),i("a9e3"),i("d3b7"),i("2532"),i("3ca3"),i("159b"),i("ddb0"),i("2909")),l=(i("96cf"),i("1da1")),n=i("30ef"),c=i.n(n),o=i("4971"),d=i.n(o),u=(i("5421"),i("2fa3")),h=i("c4c3"),p={data:function(){return{modalContentShow:!1,districts:[],categories:[],tempCategoriesFilter:[],tempDistrictsFilter:[],prices:[],averagePrice:0,countArray:[],labelArray:[],sliderValue:[0,100],sliderMin:0,sliderMax:1e4,intervalNum:50,intervalWidth:0,barColor:[],myChart:{}}},props:{showModal:{type:Boolean},categoriesFilter:{type:Array},districtsFilter:{type:Array},priceFilter:{type:Array}},components:{VueSlider:d.a},created:function(){return Promise.all([this.fetchCategories(),this.fetchDistricts(),this.fetchPrices()]).then((function(){}))},mounted:function(){this.createChart()},watch:{showModal:function(){var t=this;setTimeout((function(){t.modalContentShow=t.showModal}),100),this.categoriesFilter&&(this.tempCategoriesFilter=this.categoriesFilter),this.districtsFilter&&(this.tempDistrictsFilter=this.districtsFilter),this.$route.path.includes("coupons")||2!==this.priceFilter.length||(this.sliderValue=this.priceFilter)},categoriesFilter:function(){this.tempCategoriesFilter=this.categoriesFilter},districtsFilter:function(){this.tempDistrictsFilter=this.districtsFilter},sliderValue:function(){this.barColor=[],this.sliderValue[0]?this.sliderValue[0]<this.sliderMin&&(this.sliderValue[0]=this.sliderMin):this.sliderValue[0]=0,this.sliderValue[1]?this.sliderValue[1]>this.sliderMax?this.sliderValue[1]=this.sliderMax:this.sliderValue[1]<this.sliderMin+this.intervalWidth&&(this.sliderValue[1]=this.sliderMin+this.intervalWidth):this.sliderValue[1]=this.sliderMax,this.sliderValue[0]=Number(this.sliderValue[0]),this.sliderValue[1]=Number(this.sliderValue[1]);for(var t=this.sliderMin;t<this.sliderMax;t+=this.intervalWidth)t>=this.sliderValue[0]&&t+this.intervalWidth<=this.sliderValue[1]?this.barColor.push("rgb(176, 176, 176)"):this.barColor.push("rgb(221, 221, 221)");this.myChart.data.datasets[0].backgroundColor=this.barColor,this.myChart.update()}},methods:{closeModal:function(){this.$emit("closeModal")},fetchDistricts:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h["a"].getDistricts();case 3:i=e.sent,s=i.data,t.districts=s.districts,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),u["a"].fire({icon:"error",title:"目前無法取得類別，請稍候"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchCategories:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h["a"].getCategories();case 3:i=e.sent,s=i.data,t.categories=s.categories,e.next=12;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0),u["a"].fire({icon:"error",title:"目前無法取得類別，請稍候"});case 12:case"end":return e.stop()}}),e,null,[[0,8]])})))()},fetchPrices:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h["a"].getPrices();case 3:i=e.sent,s=i.data,t.prices=s.data,t.pricesGrouping(t.intervalNum),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0),u["a"].fire({icon:"error",title:"目前無法取得價格，請稍候"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},createChart:function(){var t=this.$refs.myChart,e={labels:this.labelArray,datasets:[{data:this.countArray,backgroundColor:this.barColor}]},i={tooltips:{enabled:!1},legend:{display:!1},scales:{yAxes:[{display:!1}],xAxes:[{gridLines:{display:!1},scaleLabel:{display:!1}}]}};this.myChart=new c.a.Bar(t,{data:e,options:i})},pricesGrouping:function(t){var e=this,i=this.prices.reduce((function(t,e){return t+e}),0)/this.prices.length;this.averagePrice=Math.ceil(i);var s=Math.sqrt(this.prices.map((function(t){return Math.pow(t-i,2)})).reduce((function(t,e){return t+e}))/this.prices.length),a=i-2*s<0?0:i-2*s;this.sliderMin=a;var r=i+2*s;this.intervalWidth=Math.ceil((r-a)/t),r=a+this.intervalWidth*t,this.sliderMax=r,this.sliderValue=[a,r];for(var l=function(t){var i=0;e.prices.forEach((function(s){s>=t&&s<t+e.intervalWidth&&(i+=1)})),e.countArray.push(i),e.labelArray.push(""),e.barColor.push("rgb(221, 221, 221)")},n=a;n<r;n+=this.intervalWidth)l(n)},addToFilter:function(t,e){switch(e){case"district":this.tempDistrictsFilter.includes(t)?this.tempDistrictsFilter.splice(this.tempDistrictsFilter.indexOf(t),1):this.tempDistrictsFilter=[].concat(Object(r["a"])(this.tempDistrictsFilter),[t]);break;case"category":this.tempCategoriesFilter.includes(t)?this.tempCategoriesFilter.splice(this.tempCategoriesFilter.indexOf(t),1):this.tempCategoriesFilter=[].concat(Object(r["a"])(this.tempCategoriesFilter),[t]);break}},completeEditing:function(){var t=[];t[0]=this.sliderValue[0],this.sliderValue[1]===this.sliderMax?t[1]=9999:t[1]=this.sliderValue[1],t[0]===this.sliderMin&&9999===t[1]&&(t=[]),this.$emit("closeModal",!0,this.tempCategoriesFilter,this.tempDistrictsFilter,t)},clearAll:function(){this.tempCategoriesFilter=[],this.tempDistrictsFilter=[],this.sliderValue=[this.sliderMin,this.sliderMax]}}},v=p,m=(i("8142"),i("2877")),C=Object(m["a"])(v,s,a,!1,null,"6f41f169",null);e["a"]=C.exports},bf99:function(t,e,i){"use strict";var s=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal",class:{show:t.showModal,innerShow:t.modalContentShow}},[i("div",{staticClass:"modal-background",on:{click:t.closeModal}}),i("div",{directives:[{name:"show",rawName:"v-show",value:t.showModal,expression:"showModal"}],staticClass:"modal-content",class:{show:t.modalContentShow}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.modalContentShow,expression:"modalContentShow"}],staticClass:"modal-container"},[i("div",{staticClass:"top-wrapper"},[i("div",{staticClass:"close-wrapper",on:{click:function(e){return e.stopPropagation(),t.closeModal(e)}}},[i("div",{staticClass:"icon close"})]),i("div",{staticClass:"title"},[t._v(" 選擇價格區間 "),i("div",{staticClass:"clear-all",on:{click:function(e){t.sliderValue=[t.sliderMin,t.sliderMax]}}},[t._v("清除全部")])])]),i("div",{staticClass:"filter-container"},[i("div",{staticClass:"price"},[i("div",{staticClass:"title"},[t._v("平均價格為 "+t._s(t._f("priceFormat")(t.averagePrice))+" / 人")]),i("canvas",{ref:"myChart",staticClass:"chart-canvas"}),i("div",{ref:"slider",staticClass:"slider-bar-container"},[i("vue-slider",{attrs:{interval:t.intervalNum,process:!1,tooltip:"none",max:t.sliderMax,min:t.sliderMin},model:{value:t.sliderValue,callback:function(e){t.sliderValue=e},expression:"sliderValue"}})],1),i("div",{staticClass:"slider-input-container"},[i("div",{staticClass:"input-wrapper"},[i("div",{staticClass:"input-content"},[i("div",{staticClass:"input-title"},[t._v("最低價格")]),i("div",{staticClass:"input-text-wrapper"},[i("div",{staticClass:"money-symbol"},[t._v("$")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderValue[0],expression:"sliderValue[0]"}],staticClass:"input-text",domProps:{value:t.sliderValue[0]},on:{input:function(e){e.target.composing||t.$set(t.sliderValue,0,e.target.value)}}})])])]),t._m(0),i("div",{staticClass:"input-wrapper"},[i("div",{staticClass:"input-content"},[i("div",{staticClass:"input-title"},[t._v("最高價格")]),i("div",{staticClass:"input-text-wrapper"},[i("div",{staticClass:"money-symbol"},[t._v("$")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.sliderValue[1],expression:"sliderValue[1]"}],staticClass:"input-text",domProps:{value:t.sliderValue[1]},on:{input:function(e){e.target.composing||t.$set(t.sliderValue,1,e.target.value)}}}),t.sliderValue[1]===t.sliderMax?i("div",{staticClass:"plus-symbol"},[t._v("+")]):t._e()])])])])])]),i("div",{staticClass:"filter-button-wrapper"},[i("div",{staticClass:"filter-button",on:{click:t.completePricing}},[i("div",{staticClass:"button"},[t._v("完成")])])])])])])},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-divider-wrapper"},[i("div",{staticClass:"input-divider"})])}],r=(i("4160"),i("d81d"),i("13d5"),i("a9e3"),i("159b"),i("96cf"),i("1da1")),l=i("30ef"),n=i.n(l),c=i("4971"),o=i.n(c),d=(i("5421"),i("2fa3")),u=i("c4c3"),h={data:function(){return{modalContentShow:!1,prices:[],averagePrice:0,countArray:[],labelArray:[],sliderValue:[0,100],sliderMin:0,sliderMax:1e4,intervalNum:50,intervalWidth:0,barColor:[],myChart:{}}},components:{VueSlider:o.a},props:{showModal:{type:Boolean},priceFilter:{type:Array}},created:function(){this.fetchPrices()},mounted:function(){this.createChart()},watch:{showModal:function(){var t=this;setTimeout((function(){t.modalContentShow=t.showModal}),100),2===this.priceFilter.length&&(this.sliderValue=this.priceFilter)},sliderValue:function(){this.barColor=[],this.sliderValue[0]?this.sliderValue[0]<this.sliderMin&&(this.sliderValue[0]=this.sliderMin):this.sliderValue[0]=0,this.sliderValue[1]?this.sliderValue[1]>this.sliderMax?this.sliderValue[1]=this.sliderMax:this.sliderValue[1]<this.sliderMin+this.intervalWidth&&(this.sliderValue[1]=this.sliderMin+this.intervalWidth):this.sliderValue[1]=this.sliderMax,this.sliderValue[0]=Number(this.sliderValue[0]),this.sliderValue[1]=Number(this.sliderValue[1]);for(var t=this.sliderMin;t<this.sliderMax;t+=this.intervalWidth)t>=this.sliderValue[0]&&t+this.intervalWidth<=this.sliderValue[1]?this.barColor.push("rgb(176, 176, 176)"):this.barColor.push("rgb(221, 221, 221)");this.myChart.data.datasets[0].backgroundColor=this.barColor,this.myChart.update()}},methods:{createChart:function(){var t=this.$refs.myChart,e={labels:this.labelArray,datasets:[{data:this.countArray,backgroundColor:this.barColor}]},i={tooltips:{enabled:!1},legend:{display:!1},scales:{yAxes:[{display:!1}],xAxes:[{gridLines:{display:!1},scaleLabel:{display:!1}}]}};this.myChart=new n.a.Bar(t,{data:e,options:i})},pricesGrouping:function(t){var e=this,i=this.prices.reduce((function(t,e){return t+e}),0)/this.prices.length;this.averagePrice=Math.ceil(i);var s=Math.sqrt(this.prices.map((function(t){return Math.pow(t-i,2)})).reduce((function(t,e){return t+e}))/this.prices.length),a=i-2*s<0?0:i-2*s;this.sliderMin=a;var r=i+2*s;this.intervalWidth=Math.ceil((r-a)/t),r=a+this.intervalWidth*t,this.sliderMax=r,this.sliderValue=[a,r];for(var l=function(t){var i=0;e.prices.forEach((function(s){s>=t&&s<t+e.intervalWidth&&(i+=1)})),e.countArray.push(i),e.labelArray.push(""),e.barColor.push("rgb(221, 221, 221)")},n=a;n<r;n+=this.intervalWidth)l(n)},closeModal:function(){this.$emit("closePriceModal")},fetchPrices:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var i,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u["a"].getPrices();case 3:i=e.sent,s=i.data,t.prices=s.data,t.pricesGrouping(t.intervalNum),e.next=13;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0),d["a"].fire({icon:"error",title:"目前無法取得價格，請稍候"});case 13:case"end":return e.stop()}}),e,null,[[0,9]])})))()},completePricing:function(){var t=[];t[0]=this.sliderValue[0],this.sliderValue[1]===this.sliderMax?t[1]=9999:t[1]=this.sliderValue[1],t[0]===this.sliderMin&&9999===t[1]&&(t=[]),this.$emit("closePriceModal",!0,t)}}},p=h,v=(i("9652"),i("2877")),m=Object(v["a"])(p,s,a,!1,null,"a547f2c4",null);e["a"]=m.exports}}]);
//# sourceMappingURL=chunk-59dce520.cd3509cd.js.map