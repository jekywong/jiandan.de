(window.webpackJsonp=window.webpackJsonp||[]).push([[14,12],{287:function(t,e,n){"use strict";n.r(e);var o={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),n="",symbol=null;return e>=1e36?(n=t+Math.floor(e/1e36),symbol="Ud"):e>=1e33?(n=t+Math.floor(e/1e33),symbol="Dc"):e>=1e30?(n=t+Math.floor(e/1e30),symbol="No"):e>=1e27?(n=t+Math.floor(e/1e27),symbol="Oc"):e>=1e24?(n=t+Math.floor(e/1e24),symbol="Sp"):e>=1e21?(n=t+Math.floor(e/1e21),symbol="Sx"):e>=1e18?(n=t+Math.floor(e/1e18),symbol="Qi"):e>=1e15?(n=t+Math.floor(e/1e15),symbol="Qa"):e>=1e12?(n=t+Math.floor(e/1e12),symbol="T"):e>=1e9?(n=t+Math.floor(e/1e9),symbol="B"):e>=1e6?(n=t+Math.floor(e/1e6),symbol="M"):e>=1e3?(n=t+Math.floor(100*e/1e3)/100,symbol="K"):n=t+Math.floor(e),{value:n,symbol:symbol}}}},r=n(62),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[t._v(t._s(t.format.value)),t.format.symbol?n("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){var map={"./battery.png":290,"./bluePack.png":291,"./concrete.png":292,"./copper.png":293,"./copperPlate.png":294,"./electricEngine.png":295,"./engine.png":296,"./greenPack.png":297,"./heavyOil.png":298,"./iron.png":299,"./ironPlate.png":300,"./lightOil.png":301,"./lubricant.png":302,"./oil.png":303,"./petroleumGas.png":304,"./pistol.png":305,"./plasticBar.png":306,"./processingUnit.png":307,"./purplePack.png":308,"./redPack.png":309,"./rocket.png":310,"./rocketFuel.png":311,"./rocketPart.png":312,"./solidFuel.png":313,"./steelPlate.png":314,"./stone.png":315,"./stoneBrick.png":316,"./sulfur.png":317,"./sulfuricAcid.png":318,"./water.png":319,"./yellowPack.png":320};function o(t){var e=r(t);return n(e)}function r(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}o.keys=function(){return Object.keys(map)},o.resolve=r,t.exports=o,o.id=288},290:function(t,e,n){t.exports=n.p+"img/battery.fd416cc.png"},291:function(t,e,n){t.exports=n.p+"img/bluePack.5a298ff.png"},292:function(t,e,n){t.exports=n.p+"img/concrete.2243649.png"},293:function(t,e,n){t.exports=n.p+"img/copper.ddda1c0.png"},294:function(t,e,n){t.exports=n.p+"img/copperPlate.f9ea680.png"},295:function(t,e,n){t.exports=n.p+"img/electricEngine.0a3cbd7.png"},296:function(t,e,n){t.exports=n.p+"img/engine.766d0a4.png"},297:function(t,e,n){t.exports=n.p+"img/greenPack.feff271.png"},298:function(t,e,n){t.exports=n.p+"img/heavyOil.627beb6.png"},299:function(t,e,n){t.exports=n.p+"img/iron.261f35d.png"},300:function(t,e,n){t.exports=n.p+"img/ironPlate.17106c8.png"},301:function(t,e,n){t.exports=n.p+"img/lightOil.44633b6.png"},302:function(t,e,n){t.exports=n.p+"img/lubricant.143f90f.png"},303:function(t,e,n){t.exports=n.p+"img/oil.9aa2c29.png"},304:function(t,e,n){t.exports=n.p+"img/petroleumGas.1f79338.png"},305:function(t,e,n){t.exports=n.p+"img/pistol.8257894.png"},306:function(t,e,n){t.exports=n.p+"img/plasticBar.a7053f1.png"},307:function(t,e,n){t.exports=n.p+"img/processingUnit.5775dec.png"},308:function(t,e,n){t.exports=n.p+"img/purplePack.7b6f854.png"},309:function(t,e,n){t.exports=n.p+"img/redPack.8ee0033.png"},310:function(t,e,n){t.exports=n.p+"img/rocket.79b7113.png"},311:function(t,e,n){t.exports=n.p+"img/rocketFuel.c0784c7.png"},312:function(t,e,n){t.exports=n.p+"img/rocketPart.01a2147.png"},313:function(t,e,n){t.exports=n.p+"img/solidFuel.0aef535.png"},314:function(t,e,n){t.exports=n.p+"img/steelPlate.0b08afe.png"},315:function(t,e,n){t.exports=n.p+"img/stone.c2e6b69.png"},316:function(t,e,n){t.exports=n.p+"img/stoneBrick.ccc7b5d.png"},317:function(t,e,n){t.exports=n.p+"img/sulfur.a1eef2a.png"},318:function(t,e,n){t.exports=n.p+"img/sulfuricAcid.b6f3b55.png"},319:function(t,e,n){t.exports=n.p+"img/water.c116c40.png"},320:function(t,e,n){t.exports=n.p+"img/yellowPack.fd6ea50.png"},373:function(t,e,n){"use strict";n.r(e);var o={props:["item"]},r=n(62),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"col-12"},[o("div",{staticClass:"row gx-2 align-items-center"},[o("div",{staticClass:"col-auto"},[o("img",{attrs:{src:n(288)("./"+t.item.id+".png"),width:"18px",height:"18px",title:t.$t("itemName_"+t.item.id),alt:t.$t("itemName_"+t.item.id)}})]),t._v(" "),o("div",{staticClass:"col"},[o("span",{staticClass:"h5"},[t._v(t._s(t.$t("itemName_"+t.item.id)))])]),t._v(" "),o("div",{staticClass:"col-auto"},[o("span",{class:{"text-danger":t.item.count>=t.item.getMax(),"text-muted":t.item.count<1}},[o("FormatNumber",{attrs:{value:t.item.count}})],1),t._v(" "),o("span",{staticClass:"text-muted"},[t._v("/"),o("FormatNumber",{attrs:{value:t.item.getMax()}})],1)])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(287).default})}}]);