(function(e){function n(n){for(var c,r,o=n[0],s=n[1],i=n[2],f=0,d=[];f<o.length;f++)r=o[f],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&d.push(a[r][0]),a[r]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);l&&l(n);while(d.length)d.shift()();return u.push.apply(u,i||[]),t()}function t(){for(var e,n=0;n<u.length;n++){for(var t=u[n],c=!0,r=1;r<t.length;r++){var o=t[r];0!==a[o]&&(c=!1)}c&&(u.splice(n--,1),e=s(s.s=t[0]))}return e}var c={},r={app:0},a={app:0},u=[];function o(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-1bbe9ff6":"3205edb0","chunk-200c3b76":"388a2888","chunk-015c77d5":"84f070a0","chunk-202f77c0":"f2c77de0","chunk-54c1681a":"e1b1258b","chunk-e1bc7c48":"7e3b462c","chunk-2fb89c0c":"33dd44d2","chunk-82e658c4":"492fb1d9","chunk-f240203c":"e859aead","chunk-07f29c66":"ae9dbb13","chunk-15955dcc":"4c72cbc2","chunk-1e6c298e":"904dcd69","chunk-243a8a06":"7126cb11","chunk-28349976":"bc09df78","chunk-2cb862e6":"e293beb0","chunk-3fba5f3d":"cac2aadb","chunk-487b2623":"ab3f8425","chunk-49fc3283":"a51e7b69","chunk-52671cf4":"acab76d8","chunk-a37c3a6e":"73bb3814","chunk-a4729e34":"384d5efc","chunk-b13a412c":"ea68f7f6","chunk-dc22feae":"39f9b878","chunk-20d60608":"30bde8e8","chunk-2d2308ce":"2ecaa331"}[e]+".js"}function s(n){if(c[n])return c[n].exports;var t=c[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,s),t.l=!0,t.exports}s.e=function(e){var n=[],t={"chunk-1bbe9ff6":1,"chunk-200c3b76":1,"chunk-015c77d5":1,"chunk-202f77c0":1,"chunk-54c1681a":1,"chunk-e1bc7c48":1,"chunk-2fb89c0c":1,"chunk-82e658c4":1,"chunk-f240203c":1,"chunk-07f29c66":1,"chunk-15955dcc":1,"chunk-1e6c298e":1,"chunk-243a8a06":1,"chunk-28349976":1,"chunk-2cb862e6":1,"chunk-3fba5f3d":1,"chunk-487b2623":1,"chunk-49fc3283":1,"chunk-52671cf4":1,"chunk-a37c3a6e":1,"chunk-a4729e34":1,"chunk-b13a412c":1,"chunk-dc22feae":1,"chunk-20d60608":1};r[e]?n.push(r[e]):0!==r[e]&&t[e]&&n.push(r[e]=new Promise((function(n,t){for(var c="css/"+({}[e]||e)+"."+{"chunk-1bbe9ff6":"93142513","chunk-200c3b76":"f7fe2cc8","chunk-015c77d5":"4f278641","chunk-202f77c0":"7d7347f1","chunk-54c1681a":"8261dd00","chunk-e1bc7c48":"32f6b216","chunk-2fb89c0c":"502f920f","chunk-82e658c4":"bec6ede5","chunk-f240203c":"77b75ffe","chunk-07f29c66":"055c1336","chunk-15955dcc":"0ff80fe4","chunk-1e6c298e":"45e85fc8","chunk-243a8a06":"839441b0","chunk-28349976":"7fa8f655","chunk-2cb862e6":"c98b472c","chunk-3fba5f3d":"7d3d0e5f","chunk-487b2623":"80076079","chunk-49fc3283":"1c5e18da","chunk-52671cf4":"f97de717","chunk-a37c3a6e":"b9e0dcf5","chunk-a4729e34":"abbf38b8","chunk-b13a412c":"c1553e7b","chunk-dc22feae":"bddd27c2","chunk-20d60608":"65653216","chunk-2d2308ce":"31d6cfe0"}[e]+".css",a=s.p+c,u=document.getElementsByTagName("link"),o=0;o<u.length;o++){var i=u[o],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===c||f===a))return n()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){i=d[o],f=i.getAttribute("data-href");if(f===c||f===a)return n()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=n,l.onerror=function(n){var c=n&&n.target&&n.target.src||a,u=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");u.code="CSS_CHUNK_LOAD_FAILED",u.request=c,delete r[e],l.parentNode.removeChild(l),t(u)},l.href=a;var h=document.getElementsByTagName("head")[0];h.appendChild(l)})).then((function(){r[e]=0})));var c=a[e];if(0!==c)if(c)n.push(c[2]);else{var u=new Promise((function(n,t){c=a[e]=[n,t]}));n.push(c[2]=u);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=o(e);var d=new Error;i=function(n){f.onerror=f.onload=null,clearTimeout(l);var t=a[e];if(0!==t){if(t){var c=n&&("load"===n.type?"missing":n.type),r=n&&n.target&&n.target.src;d.message="Loading chunk "+e+" failed.\n("+c+": "+r+")",d.name="ChunkLoadError",d.type=c,d.request=r,t[1](d)}a[e]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(n)},s.m=e,s.c=c,s.d=function(e,n,t){s.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,n){if(1&n&&(e=s(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(s.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var c in e)s.d(t,c,function(n){return e[n]}.bind(null,c));return t},s.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(n,"a",n),n},s.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=n,i=i.slice();for(var d=0;d<i.length;d++)n(i[d]);var l=f;u.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"2fa3":function(e,n,t){"use strict";t.d(n,"b",(function(){return s})),t.d(n,"a",(function(){return i}));var c=t("bc3a"),r=t.n(c),a=t("3d20"),u=t.n(a),o="https://mealfinder2021.herokuapp.com/api",s=r.a.create({baseURL:o,withCredentials:!0}),i=u.a.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:3e3})},4678:function(e,n,t){var c={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn-bd":"9686","./bn-bd.js":"9686","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-mx":"b5b7","./es-mx.js":"b5b7","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var n=a(e);return t(n)}function a(e){if(!t.o(c,e)){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}return c[e]}r.keys=function(){return Object.keys(c)},r.resolve=a,e.exports=r,r.id="4678"},"4cce":function(e,n,t){"use strict";t("a15b");var c=t("2fa3"),r=function(){return localStorage.getItem("token")};n["a"]={getCurrentUser:function(){return c["b"].get("/get_current_user",{headers:{Authorization:"Bearer ".concat(r())}})},getProfile:function(e){return c["b"].get("/user/".concat(e,"/profile"),{headers:{Authorization:"Bearer ".concat(r())}})},putProfile:function(e,n){return c["b"].put("/user/".concat(e,"/profile"),n,{headers:{Authorization:"Bearer ".concat(r())}})},putPreferedCategory:function(e,n){return c["b"].put("/user/".concat(e,"/preferedcategory"),{preferedCategory:n},{headers:{Authorization:"Bearer ".concat(r())}})},getFavorites:function(e,n){var t=e?"?page=".concat(e):"";return n&&n.length>1&&(t+=n.join("&")),c["b"].get("/user/favorite".concat(t),{headers:{Authorization:"Bearer ".concat(r())}})},addFavorite:function(e){return c["b"].post("/user/favorite",{id:e},{headers:{Authorization:"Bearer ".concat(r())}})},deleteFavorite:function(e){return c["b"].delete("/user/favorite/".concat(e),{headers:{Authorization:"Bearer ".concat(r())}})},likeComment:function(e){return c["b"].post("/like",{commentId:e},{headers:{Authorization:"Bearer ".concat(r())}})},disLikeComment:function(e){return c["b"].delete("/like/".concat(e),{headers:{Authorization:"Bearer ".concat(r())}})}}},"56d7":function(e,n,t){"use strict";t.r(n);t("99af"),t("4de4"),t("4160"),t("a9e3"),t("b64b"),t("d3b7"),t("ac1f"),t("25f0"),t("5319"),t("1276"),t("159b"),t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},a=[],u=(t("5c0b"),t("2877")),o={},s=Object(u["a"])(o,r,a,!1,null,null,null),i=s.exports,f=t("8c4f"),d=(t("96cf"),t("1da1")),l=t("5530"),h=t("2f62"),b=t("0e44"),m=t("4cce");c["default"].use(h["a"]);var k=new h["a"].Store({state:{currentUser:{id:-1,email:"",phone_number:"",location:"",gender:"",birthday:"",avatar:"",name:"",createdAt:"",updatedAt:""},isAuthenticated:!1,token:""},plugins:[Object(b["a"])()],mutations:{setCurrentUser:function(e,n){e.currentUser=Object(l["a"])(Object(l["a"])({},e.currentUser),n),e.token=localStorage.getItem("token"),e.isAuthenticated=!0},revokeAuthentication:function(e){e.currentUser={},e.isAuthenticated=!1,e.token="",localStorage.removeItem("token")}},actions:{fetchCurrentUser:function(e){return Object(d["a"])(regeneratorRuntime.mark((function n(){var t,c,r,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t=e.commit,n.prev=1,n.next=4,m["a"].getCurrentUser();case 4:if(c=n.sent,r=c.data,a=c.statusText,"OK"===a){n.next=9;break}throw new Error(a);case 9:return t("setCurrentUser",r),n.abrupt("return",!0);case 13:return n.prev=13,n.t0=n["catch"](1),console.error("can not fetch user information"),t("revokeAuthentication"),n.abrupt("return",!1);case 18:case"end":return n.stop()}}),n,null,[[1,13]])})))()}},modules:{}}),p=t("2fa3");c["default"].use(f["a"]);var j=function(e,n,t){"/_=_"===e.path&&(localStorage.setItem("token",e.query.token),k.dispatch("fetchCurrentUser"),t("/"),p["a"].fire({icon:"success",title:"登入成功"})),t()},_=function(e,n,t){k.state.isAuthenticated?t():t("/signin")},g=[{path:"/",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-487b2623")]).then(t.bind(null,"bb51"))}},{path:"/restaurants",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-015c77d5"),t.e("chunk-e1bc7c48"),t.e("chunk-2fb89c0c")]).then(t.bind(null,"89ad"))}},{path:"/restaurants/:id",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-a37c3a6e")]).then(t.bind(null,"ad68"))}},{path:"/map",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-015c77d5"),t.e("chunk-e1bc7c48"),t.e("chunk-82e658c4")]).then(t.bind(null,"4bb4"))}},{path:"/booking",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-b13a412c")]).then(t.bind(null,"7138"))}},{path:"/booking/success",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-2cb862e6")]).then(t.bind(null,"b9a4"))}},{path:"/coupons",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-015c77d5"),t.e("chunk-202f77c0")]).then(t.bind(null,"f329"))}},{path:"/coupons/:id",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-28349976")]).then(t.bind(null,"e5bd"))}},{path:"/signin",component:function(){return t.e("chunk-1bbe9ff6").then(t.bind(null,"54e2"))}},{path:"/signup",component:function(){return t.e("chunk-20d60608").then(t.bind(null,"5c9c"))}},{path:"/users",redirect:"/users/center",component:function(){return t.e("chunk-2d2308ce").then(t.bind(null,"ed81"))},beforeEnter:_,children:[{path:"/users/center",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-15955dcc")]).then(t.bind(null,"80d2"))},beforeEnter:_},{path:"/users/profile",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-015c77d5"),t.e("chunk-f240203c")]).then(t.bind(null,"c66d"))},beforeEnter:_},{path:"/users/history",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-dc22feae")]).then(t.bind(null,"e4bb"))},beforeEnter:_},{path:"/users/history/:id",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-49fc3283")]).then(t.bind(null,"2b83"))},beforeEnter:_},{path:"/users/purchase",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-3fba5f3d")]).then(t.bind(null,"5cbe"))},beforeEnter:_},{path:"/users/purchase/:id",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-a4729e34")]).then(t.bind(null,"43ef"))},beforeEnter:_},{path:"/users/checkout",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-07f29c66")]).then(t.bind(null,"7cb4"))},beforeEnter:_},{path:"/users/checkout/success",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-52671cf4")]).then(t.bind(null,"4625"))},beforeEnter:_},{path:"/users/favorite",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-015c77d5"),t.e("chunk-54c1681a")]).then(t.bind(null,"a09f"))},beforeEnter:_},{path:"/users/notification",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-1e6c298e")]).then(t.bind(null,"109a"))},beforeEnter:_}]},{path:"*",name:"NotFound",component:function(){return Promise.all([t.e("chunk-200c3b76"),t.e("chunk-243a8a06")]).then(t.bind(null,"9703"))},beforeEnter:j}],v=new f["a"]({routes:g}),y=v,w=t("c1df"),D=t.n(w),Y={code:"zh_TW",messages:{alpha:"{_field_} 須以英文組成",alpha_dash:"{_field_} 須以英數、斜線及底線組成",alpha_num:"{_field_} 須以英數組成",alpha_spaces:"{_field_} 須以英文及空格組成",between:"{_field_} 須介於 {min} 至 {max}之間",confirmed:" {_field_} 不一致",digits:"{_field_} 須為 {length} 位數字",dimensions:"{_field_} 圖片尺寸不正確。須為 {width} x {height} 像素",email:"{_field_} 須為有效的電子信箱",excluded:"{_field_} 的選項無效",ext:"{_field_} 須為有效的檔案",image:"{_field_} 須為圖片",oneOf:"{_field_} 的選項無效",integer:"{_field_} 須為整數",length:"{_field_} 的長度須為 {length}",max:"{_field_} 不能大於 {length} 個字元",max_value:"{_field_} 不得大於 {max}",mimes:"{_field_} 須為有效的檔案類型",min:"{_field_} 不能小於 {length} 個字元",min_value:"{_field_} 不得小於 {min}",numeric:"{_field_} 須為數字",regex:"{_field_} 的格式錯誤",required:"{_field_} 為必填",required_if:"{_field_} 為必填",size:"{_field_} 的檔案須小於 {size}KB"}},M=t("bc3a"),A=t.n(M),z=t("4eb5"),P=t.n(z),O=t("755e"),x=t("7bb1"),E=t("4c93");c["default"].config.productionTip=!1,D.a.locale("zh-tw",{months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"週日_週一_週二_週三_週四_週五_週六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),longDateFormat:{LT:"Ah點mm分",LTS:"Ah點m分s秒",L:"YYYY-MM-DD",LL:"YYYY年MMMD日",LLL:"YYYY年MMMD日Ah點mm分",LLLL:"YYYY年MMMD日ddddAh點mm分",l:"YYYY-MM-DD",ll:"YYYY年MMMD日",lll:"YYYY年MMMD日Ah點mm分",llll:"YYYY年MMMD日ddddAh點mm分"},meridiemParse:/凌晨|早上|上午|中午|下午|晚上/,meridiemHour:function(e,n){var t=e;return 12===t&&(t=0),"凌晨"===n||"早上"===n||"上午"===n?t:"下午"===n||"晚上"===n?t+12:t>=11?t:t+12},meridiem:function(e,n,t){var c=100*e+n;return c<600?"凌晨":c<900?"早上":c<1130?"上午":c<1230?"中午":c<1800?"下午":"晚上"},calendar:{sameDay:function(){return 0===this.minutes()?"[今天]Ah[點整]":"[今天]LT"},nextDay:function(){return 0===this.minutes()?"[明天]Ah[點整]":"[明天]LT"},lastDay:function(){return 0===this.minutes()?"[昨天]Ah[點整]":"[昨天]LT"},nextWeek:function(){var e=D()().startOf("week"),n=this.diff(e,"days")>=7?"[下]":"[本]";return 0===this.minutes()?n+"dddA點整":n+"dddAh點mm"},lastWeek:function(){var e=D()().startOf("week"),n=this.unix()<e.unix()?"[上]":"[本]";return 0===this.minutes()?n+"dddAh點整":n+"dddAh點mm"},sameElse:"LL"},ordinalParse:/\d{1,2}(日|月|週)/,ordinal:function(e,n){switch(n){case"d":case"D":case"DDD":return e+"日";case"M":return e+"月";case"w":case"W":return e+"週";default:return e}},relativeTime:{future:"%s内",past:"%s前",s:"幾秒",m:"1 分鐘",mm:"%d 分鐘",h:"1 小時",hh:"%d 小時",d:"1 天",dd:"%d 天",M:"1 個月",MM:"%d 个月",y:"1 年",yy:"%d 年"},week:{dow:1,doy:4}}),c["default"].filter("pickDateFormat",(function(e){return D()(e).format("M/DD")===D()().format("M/DD")?"".concat(D()().format("M/DD")," ").concat(D()().format("ddd")," (今日)"):"".concat(D()(e).format("M/DD")," ").concat(D()(e).format("ddd"))})),c["default"].filter("bookingDateFormat",(function(e){return D()(e).format("M/DD")===D()().format("M/DD")?"".concat(D()().format("YYYY/M/DD")," ").concat(D()().format("ddd")," (今日)"):"".concat(D()(e).format("YYYY/M/DD")," ").concat(D()(e).format("ddd"))})),c["default"].filter("normalDate",(function(e){return"".concat(D()(e).format("YYYY/M/DD"))})),c["default"].filter("normalDateWithoutYear",(function(e){return"".concat(D()(e).format("M/DD"))})),c["default"].filter("priceFormat",(function(e){return"$"+Number(e).toString().replace(/^(-?\d+?)((?:\d{3})+)(?=\.\d+$|$)/,(function(e,n,t){return n+t.replace(/\d{3}/g,",$&")}))})),c["default"].filter("fromNow",(function(e){return e?D()(e).fromNow():"-"})),Object.keys(E).forEach((function(e){Object(x["d"])(e,E[e])})),Object(x["d"])("password",{params:["target"],validate:function(e,n){var t=n.target;return e===t},message:"密碼與密碼確認不相同"}),Object(x["c"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),Object(x["e"])("tw",Y),c["default"].component("ValidationProvider",x["b"]),c["default"].component("ValidationObserver",x["a"]),c["default"].use(O,{load:{key:"AIzaSyCUFAw8OHDSgUFUvBetDdPGUJI8xMGLAGk",libraries:"places"},installComponents:!0}),c["default"].use(P.a),A.a.defaults.withCredentials=!0,new c["default"]({router:y,store:k,render:function(e){return e(i)}}).$mount("#app")},"5c0b":function(e,n,t){"use strict";t("9c0c")},"9c0c":function(e,n,t){}});
//# sourceMappingURL=app.d7cbea76.js.map