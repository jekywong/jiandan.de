(window.webpackJsonp=window.webpackJsonp||[]).push([[13,15,16,24],{287:function(t,e,n){"use strict";n.r(e);var r={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),n="",symbol=null;return e>=1e36?(n=t+Math.floor(10*e/1e36)/10,symbol="Ud"):e>=1e33?(n=t+Math.floor(10*e/1e33)/10,symbol="Dc"):e>=1e30?(n=t+Math.floor(10*e/1e30)/10,symbol="No"):e>=1e27?(n=t+Math.floor(10*e/1e27)/10,symbol="Oc"):e>=1e24?(n=t+Math.floor(10*e/1e24)/10,symbol="Sp"):e>=1e21?(n=t+Math.floor(10*e/1e21)/10,symbol="Sx"):e>=1e18?(n=t+Math.floor(10*e/1e18)/10,symbol="Qi"):e>=1e15?(n=t+Math.floor(10*e/1e15)/10,symbol="Qa"):e>=1e12?(n=t+Math.floor(10*e/1e12)/10,symbol="T"):e>=1e9?(n=t+Math.floor(10*e/1e9)/10,symbol="B"):e>=1e6?(n=t+Math.floor(10*e/1e6)/10,symbol="M"):e>=1e3?(n=t+Math.floor(10*e/1e3)/10,symbol="K"):n=t+Math.floor(10*e)/10,{value:n,symbol:symbol}}}},o=n(62),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?n("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){var map={"./alienEgg.png":289,"./artilleryShell.png":290,"./battery.png":291,"./bluePack.png":292,"./bullet.png":293,"./coal.png":294,"./concrete.png":295,"./copper.png":296,"./copperPlate.png":297,"./electricEngine.png":298,"./engine.png":299,"./explosive.png":300,"./grayPack.png":301,"./greenPack.png":302,"./heavyOil.png":303,"./iron.png":304,"./ironPlate.png":305,"./lightOil.png":306,"./lubricant.png":307,"./oil.png":308,"./petroleumGas.png":309,"./piercing.png":310,"./plasticBar.png":311,"./processingUnit.png":312,"./purplePack.png":313,"./redPack.png":314,"./rocket.png":315,"./rocketFuel.png":316,"./rocketPart.png":317,"./shotgunShell.png":318,"./solidFuel.png":319,"./steelPlate.png":320,"./stone.png":321,"./stoneBrick.png":322,"./sulfur.png":323,"./sulfuricAcid.png":324,"./water.png":325,"./wood.png":326,"./yellowPack.png":327};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=288},289:function(t,e,n){t.exports=n.p+"img/alienEgg.242d11c.png"},290:function(t,e,n){t.exports=n.p+"img/artilleryShell.7aa7668.png"},291:function(t,e,n){t.exports=n.p+"img/battery.fd416cc.png"},292:function(t,e,n){t.exports=n.p+"img/bluePack.5a298ff.png"},293:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADhAAAA4QFwGBwuAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAD9QTFRF/////9U5+Nsz99gy+dky99kx+Ngx788u4cAl+dkz99kx3Loj+Ngx7cwr68oq+Ngy99cx+NgyxKMWxKMW+Ngyb0s7PgAAABN0Uk5TABIjQldeaG92eIaJkcLU1uTp+D6JvnoAAABhSURBVDiN7c4pFoAwEATRCWEPW6Duf1YEE4FoBA9J2f6ize6Noz02wfS01wC13kMGyEGCAQAGCdYLrGqv8CoBYgFRgKaARoC2gPYtSLOXBNgPb//BD8y6zesE6Bev//TDCUM8FFGS1E5dAAAAAElFTkSuQmCC"},294:function(t,e,n){t.exports=n.p+"img/coal.87540e2.png"},295:function(t,e,n){t.exports=n.p+"img/concrete.2243649.png"},296:function(t,e,n){t.exports=n.p+"img/copper.ddda1c0.png"},297:function(t,e,n){t.exports=n.p+"img/copperPlate.f9ea680.png"},298:function(t,e,n){t.exports=n.p+"img/electricEngine.0a3cbd7.png"},299:function(t,e,n){t.exports=n.p+"img/engine.766d0a4.png"},300:function(t,e,n){t.exports=n.p+"img/explosive.1ed42b0.png"},301:function(t,e,n){t.exports=n.p+"img/grayPack.dc93871.png"},302:function(t,e,n){t.exports=n.p+"img/greenPack.feff271.png"},303:function(t,e,n){t.exports=n.p+"img/heavyOil.627beb6.png"},304:function(t,e,n){t.exports=n.p+"img/iron.261f35d.png"},305:function(t,e,n){t.exports=n.p+"img/ironPlate.17106c8.png"},306:function(t,e,n){t.exports=n.p+"img/lightOil.44633b6.png"},307:function(t,e,n){t.exports=n.p+"img/lubricant.143f90f.png"},308:function(t,e,n){t.exports=n.p+"img/oil.9aa2c29.png"},309:function(t,e,n){t.exports=n.p+"img/petroleumGas.1f79338.png"},310:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADhAAAA4QFwGBwuAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFpQTFRF//////8A/+M5+Ng089Ms+dcz+dcy+dgzxKMV+Ngy+dgx+Ngz8tEvxKIX3Lsj2LghxKIV+NcyxaMX38Al27sh89Iw6skr6ssq9tYx+Ngy8NEu+NgyxKMW+NgyA1jOWQAAABx0Uk5TAAEJJyktUlVsdXeIjJKam6i7wMLGxszT2eLk/kZttLEAAAB0SURBVDiN7dHRCoAgDIXh3NpYvf+7hprR8kKo4EjUZT9DUL6LgTScY7480OWu2gFmLwF5EDARQxDqADDWQTvkjHcYPQjuPQRBtk0CAGrMpgDY4hkAbB4D0F3yB1+B9fisFYAyewWAGFOKEYBJRXQCILejtQPOkBjBFtYa2wAAAABJRU5ErkJggg=="},311:function(t,e,n){t.exports=n.p+"img/plasticBar.a7053f1.png"},312:function(t,e,n){t.exports=n.p+"img/processingUnit.5775dec.png"},313:function(t,e,n){t.exports=n.p+"img/purplePack.7b6f854.png"},314:function(t,e,n){t.exports=n.p+"img/redPack.8ee0033.png"},315:function(t,e,n){t.exports=n.p+"img/rocket.5251503.png"},316:function(t,e,n){t.exports=n.p+"img/rocketFuel.c0784c7.png"},317:function(t,e,n){t.exports=n.p+"img/rocketPart.01a2147.png"},318:function(t,e,n){t.exports=n.p+"img/shotgunShell.bd55193.png"},319:function(t,e,n){t.exports=n.p+"img/solidFuel.0aef535.png"},320:function(t,e,n){t.exports=n.p+"img/steelPlate.0b08afe.png"},321:function(t,e,n){t.exports=n.p+"img/stone.c2e6b69.png"},322:function(t,e,n){t.exports=n.p+"img/stoneBrick.ccc7b5d.png"},323:function(t,e,n){t.exports=n.p+"img/sulfur.a1eef2a.png"},324:function(t,e,n){t.exports=n.p+"img/sulfuricAcid.b6f3b55.png"},325:function(t,e,n){t.exports=n.p+"img/water.c116c40.png"},326:function(t,e,n){t.exports=n.p+"img/wood.dac3aaa.png"},327:function(t,e,n){t.exports=n.p+"img/yellowPack.fd6ea50.png"},328:function(t,e,n){"use strict";n.r(e);var r={props:["value"],computed:{time:function(){var t=this.value;if(t==1/0)return"Infinity";if(t<1)return Math.ceil(1e3*t)+" ms";var e=Math.floor(t/86400),n=Math.floor(t/3600)%24;n<10&&(n="0"+n);var r=Math.floor(t/60)%60;r<10&&(r="0"+r);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("abbr_day")+" "+n+":"+r+":"+s:n+":"+r+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},o=n(62),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},381:function(t,e,n){var map={"./heavyOilBarrel.png":382,"./ironChest.png":383,"./lightOilBarrel.png":384,"./lubricantBarrel.png":385,"./oilBarrel.png":386,"./petroleumGasBarrel.png":387,"./steelChest.png":388,"./sulfuricAcidBarrel.png":389,"./waterBarrel.png":390};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=381},382:function(t,e,n){t.exports=n.p+"img/heavyOilBarrel.9a885eb.png"},383:function(t,e,n){t.exports=n.p+"img/ironChest.b485ba4.png"},384:function(t,e,n){t.exports=n.p+"img/lightOilBarrel.c7c4974.png"},385:function(t,e,n){t.exports=n.p+"img/lubricantBarrel.993384f.png"},386:function(t,e,n){t.exports=n.p+"img/oilBarrel.49fe826.png"},387:function(t,e,n){t.exports=n.p+"img/petroleumGasBarrel.c4eb34f.png"},388:function(t,e,n){t.exports=n.p+"img/steelChest.c38cf4a.png"},389:function(t,e,n){t.exports=n.p+"img/sulfuricAcidBarrel.a494fe3.png"},390:function(t,e,n){t.exports=n.p+"img/waterBarrel.254a1de.png"},406:function(t,e,n){"use strict";n.r(e);var r={props:["storage"],computed:{percent:function(){return this.storage.remainingSeconds>0?100-this.storage.remainingSeconds/this.storage.getTime()*100:0}},methods:{build:function(){this.storage.startBuilding()},cancel:function(){this.storage.cancelBuilding()}}},o=n(62),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return 1==t.storage.unlocked?r("div",{staticClass:"list-group-item"},[r("div",{staticClass:"row gx-2 align-items-center"},[r("div",{staticClass:"col-auto"},[r("img",{attrs:{src:n(381)("./"+t.storage.icon+".png"),width:"24px",height:"24px",title:t.$t("storageName_"+t.storage.name),alt:t.$t("storageName_"+t.storage.name)}})]),t._v(" "),r("div",{staticClass:"col-auto"},[r("div",{staticClass:"text-normal"},[t._v("\n                "+t._s(t.$t("storageName_"+t.storage.name))+"\n                "),r("small",{staticClass:"text-muted ms-2"},[t._v("x")]),t._v(" "),r("span",{staticClass:"text-normal"},[t._v(t._s(t.storage.count))])]),t._v(" "),r("div",[t._v(t._s(t.$t("storageDesc_"+t.storage.name)))])]),t._v(" "),r("div",{staticClass:"col"}),t._v(" "),r("div",{staticClass:"col-auto"},[r("div",{staticClass:"row gx-2 align-items-center justify-content-end"},t._l(t.storage.getCosts(),(function(e,o){return r("div",{staticClass:"col-auto"},[r("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("itemName_"+o)}},[r("img",{attrs:{src:n(288)("./"+o+".png"),width:"18px",height:"18px",alt:t.$t("itemName_"+o)}}),t._v(" "),r("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":e>t.storage.game.items[o].count,"text-normal":e<=t.storage.game.items[o].count}},[r("FormatNumber",{attrs:{value:e}})],1)])])})),0)]),t._v(" "),r("div",{staticClass:"col-auto"},[r("div",{staticClass:"text-center mb-1"},[r("span",{class:{"text-muted":0==t.storage.canBuild(),"text-normal":1==t.storage.canBuild()||"running"==t.storage.state}},[r("FormatTime",{attrs:{value:t.storage.remainingSeconds}})],1)]),t._v(" "),r("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[r("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),r("div",{staticClass:"col-auto"},["running"!=t.storage.state?r("button",{staticClass:"btn btn-primary",class:{disabled:0==t.storage.canBuild()},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[t._m(0)]):t._e(),t._v(" "),"running"==t.storage.state?r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(1)]):t._e()])])]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-plus-square"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(287).default,FormatTime:n(328).default})},419:function(t,e,n){"use strict";n.r(e);var r={props:["item"]},o=n(62),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"list-group list-group-flush"},t._l(t.item.storages,(function(t){return n("RowStorage",{key:t.id,attrs:{storage:t}})})),1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",[t._v("Storage")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RowStorage:n(406).default})}}]);