(window.webpackJsonp=window.webpackJsonp||[]).push([[19,11,14,16,17,20],{287:function(t,e,n){"use strict";n.r(e);var c={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),n="",symbol=null;return e>=1e36?(n=t+Math.floor(100*e/1e36)/100,symbol="Ud"):e>=1e33?(n=t+Math.floor(100*e/1e33)/100,symbol="Dc"):e>=1e30?(n=t+Math.floor(100*e/1e30)/100,symbol="No"):e>=1e27?(n=t+Math.floor(100*e/1e27)/100,symbol="Oc"):e>=1e24?(n=t+Math.floor(100*e/1e24)/100,symbol="Sp"):e>=1e21?(n=t+Math.floor(100*e/1e21)/100,symbol="Sx"):e>=1e18?(n=t+Math.floor(100*e/1e18)/100,symbol="Qi"):e>=1e15?(n=t+Math.floor(100*e/1e15)/100,symbol="Qa"):e>=1e12?(n=t+Math.floor(100*e/1e12)/100,symbol="T"):e>=1e9?(n=t+Math.floor(100*e/1e9)/100,symbol="B"):e>=1e6?(n=t+Math.floor(100*e/1e6)/100,symbol="M"):e>=1e3?(n=t+Math.floor(100*e/1e3)/100,symbol="K"):n=t+Math.floor(100*e)/100,{value:n,symbol:symbol}}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?n("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},288:function(t,e,n){var map={"./alienEgg.png":290,"./artilleryShell.png":291,"./battery.png":292,"./bluePack.png":293,"./bullet.png":294,"./coal.png":295,"./concrete.png":296,"./copper.png":297,"./copperPlate.png":298,"./electricEngine.png":299,"./engine.png":300,"./explosive.png":301,"./grayPack.png":302,"./greenPack.png":303,"./heavyOil.png":304,"./iron.png":305,"./ironPlate.png":306,"./lightOil.png":307,"./lubricant.png":308,"./oil.png":309,"./petroleumGas.png":310,"./piercing.png":311,"./plasticBar.png":312,"./processingUnit.png":313,"./purplePack.png":314,"./redPack.png":315,"./rocket.png":316,"./rocketFuel.png":317,"./rocketPart.png":318,"./shotgunShell.png":319,"./solidFuel.png":320,"./steelPlate.png":321,"./stone.png":322,"./stoneBrick.png":323,"./sulfur.png":324,"./sulfuricAcid.png":325,"./water.png":326,"./wood.png":327,"./yellowPack.png":328};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=288},289:function(t,e,n){"use strict";n.r(e);var c={props:["value"],computed:{time:function(){var t=this.value;if(t==1/0)return"Infinity";if(t<1)return Math.ceil(1e3*t)+" ms";var e=Math.floor(t/86400),n=Math.floor(t/3600)%24;n<10&&(n="0"+n);var c=Math.floor(t/60)%60;c<10&&(c="0"+c);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("abbr_day")+" "+n+":"+c+":"+s:n+":"+c+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},290:function(t,e,n){t.exports=n.p+"img/alienEgg.242d11c.png"},291:function(t,e,n){t.exports=n.p+"img/artilleryShell.2015ca3.png"},292:function(t,e,n){t.exports=n.p+"img/battery.fd416cc.png"},293:function(t,e,n){t.exports=n.p+"img/bluePack.5a298ff.png"},294:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADhAAAA4QFwGBwuAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAD9QTFRF/////9U5+Nsz99gy+dky99kx+Ngx788u4cAl+dkz99kx3Loj+Ngx7cwr68oq+Ngy99cx+NgyxKMWxKMW+Ngyb0s7PgAAABN0Uk5TABIjQldeaG92eIaJkcLU1uTp+D6JvnoAAABhSURBVDiN7c4pFoAwEATRCWEPW6Duf1YEE4FoBA9J2f6ize6Noz02wfS01wC13kMGyEGCAQAGCdYLrGqv8CoBYgFRgKaARoC2gPYtSLOXBNgPb//BD8y6zesE6Bev//TDCUM8FFGS1E5dAAAAAElFTkSuQmCC"},295:function(t,e,n){t.exports=n.p+"img/coal.5b79c0b.png"},296:function(t,e,n){t.exports=n.p+"img/concrete.2243649.png"},297:function(t,e,n){t.exports=n.p+"img/copper.ddda1c0.png"},298:function(t,e,n){t.exports=n.p+"img/copperPlate.f9ea680.png"},299:function(t,e,n){t.exports=n.p+"img/electricEngine.0a3cbd7.png"},300:function(t,e,n){t.exports=n.p+"img/engine.766d0a4.png"},301:function(t,e,n){t.exports=n.p+"img/explosive.6b3aa77.png"},302:function(t,e,n){t.exports=n.p+"img/grayPack.74b6ba3.png"},303:function(t,e,n){t.exports=n.p+"img/greenPack.feff271.png"},304:function(t,e,n){t.exports=n.p+"img/heavyOil.627beb6.png"},305:function(t,e,n){t.exports=n.p+"img/iron.261f35d.png"},306:function(t,e,n){t.exports=n.p+"img/ironPlate.17106c8.png"},307:function(t,e,n){t.exports=n.p+"img/lightOil.44633b6.png"},308:function(t,e,n){t.exports=n.p+"img/lubricant.143f90f.png"},309:function(t,e,n){t.exports=n.p+"img/oil.9aa2c29.png"},310:function(t,e,n){t.exports=n.p+"img/petroleumGas.1f79338.png"},311:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAAA3NCSVQICAjb4U/gAAAACXBIWXMAAADhAAAA4QFwGBwuAAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAFpQTFRF//////8A/+M5+Ng089Ms+dcz+dcy+dgzxKMV+Ngy+dgx+Ngz8tEvxKIX3Lsj2LghxKIV+NcyxaMX38Al27sh89Iw6skr6ssq9tYx+Ngy8NEu+NgyxKMW+NgyA1jOWQAAABx0Uk5TAAEJJyktUlVsdXeIjJKam6i7wMLGxszT2eLk/kZttLEAAAB0SURBVDiN7dHRCoAgDIXh3NpYvf+7hprR8kKo4EjUZT9DUL6LgTScY7480OWu2gFmLwF5EDARQxDqADDWQTvkjHcYPQjuPQRBtk0CAGrMpgDY4hkAbB4D0F3yB1+B9fisFYAyewWAGFOKEYBJRXQCILejtQPOkBjBFtYa2wAAAABJRU5ErkJggg=="},312:function(t,e,n){t.exports=n.p+"img/plasticBar.a7053f1.png"},313:function(t,e,n){t.exports=n.p+"img/processingUnit.5775dec.png"},314:function(t,e,n){t.exports=n.p+"img/purplePack.7b6f854.png"},315:function(t,e,n){t.exports=n.p+"img/redPack.8ee0033.png"},316:function(t,e,n){t.exports=n.p+"img/rocket.8c40abf.png"},317:function(t,e,n){t.exports=n.p+"img/rocketFuel.c0784c7.png"},318:function(t,e,n){t.exports=n.p+"img/rocketPart.01a2147.png"},319:function(t,e,n){t.exports=n.p+"img/shotgunShell.bd55193.png"},320:function(t,e,n){t.exports=n.p+"img/solidFuel.0aef535.png"},321:function(t,e,n){t.exports=n.p+"img/steelPlate.0b08afe.png"},322:function(t,e,n){t.exports=n.p+"img/stone.c2e6b69.png"},323:function(t,e,n){t.exports=n.p+"img/stoneBrick.ccc7b5d.png"},324:function(t,e,n){t.exports=n.p+"img/sulfur.a1eef2a.png"},325:function(t,e,n){t.exports=n.p+"img/sulfuricAcid.b6f3b55.png"},326:function(t,e,n){t.exports=n.p+"img/water.c116c40.png"},327:function(t,e,n){t.exports=n.p+"img/wood.dac3aaa.png"},328:function(t,e,n){t.exports=n.p+"img/yellowPack.fd6ea50.png"},330:function(t,e,n){var map={"./lab.png":331};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=330},331:function(t,e,n){t.exports=n.p+"img/lab.a03fad6.png"},332:function(t,e,n){var map={"./alienTech.png":333,"./automation1.png":334,"./automation2.png":335,"./automation3.png":336,"./batteryTech.png":337,"./blueScience.png":338,"./concreteTech.png":339,"./electricEngineTech.png":340,"./electronics.png":341,"./engineTech.png":342,"./explosives.png":343,"./fluidHandling.png":344,"./grayScience.png":345,"./greenScience.png":346,"./lubricantTech.png":347,"./material1.png":348,"./material2.png":349,"./military1.png":350,"./military2.png":351,"./military3.png":352,"./military4.png":353,"./oilTech1.png":354,"./oilTech2.png":355,"./plastics.png":356,"./purpleScience.png":357,"./robotics1.png":358,"./robotics2.png":359,"./rocketFuelTech.png":360,"./rocketTech.png":361,"./rocketry.png":362,"./steelTech.png":363,"./sulfurTech.png":364,"./yellowScience.png":365};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=332},333:function(t,e,n){t.exports=n.p+"img/alienTech.abc1079.png"},334:function(t,e,n){t.exports=n.p+"img/automation1.b2f0c97.png"},335:function(t,e,n){t.exports=n.p+"img/automation2.c1a285e.png"},336:function(t,e,n){t.exports=n.p+"img/automation3.c4f9ad0.png"},337:function(t,e,n){t.exports=n.p+"img/batteryTech.83f5eb2.png"},338:function(t,e,n){t.exports=n.p+"img/blueScience.77a7ad2.png"},339:function(t,e,n){t.exports=n.p+"img/concreteTech.9a5afaf.png"},340:function(t,e,n){t.exports=n.p+"img/electricEngineTech.450d0a6.png"},341:function(t,e,n){t.exports=n.p+"img/electronics.a0fd2d8.png"},342:function(t,e,n){t.exports=n.p+"img/engineTech.4b5c64f.png"},343:function(t,e,n){t.exports=n.p+"img/explosives.d934ab4.png"},344:function(t,e,n){t.exports=n.p+"img/fluidHandling.a9c5202.png"},345:function(t,e,n){t.exports=n.p+"img/grayScience.ddbba16.png"},346:function(t,e,n){t.exports=n.p+"img/greenScience.af00183.png"},347:function(t,e,n){t.exports=n.p+"img/lubricantTech.36f0e13.png"},348:function(t,e,n){t.exports=n.p+"img/material1.4259d7b.png"},349:function(t,e,n){t.exports=n.p+"img/material2.e07f506.png"},350:function(t,e,n){t.exports=n.p+"img/military1.b6943ee.png"},351:function(t,e,n){t.exports=n.p+"img/military2.b6943ee.png"},352:function(t,e,n){t.exports=n.p+"img/military3.b6943ee.png"},353:function(t,e,n){t.exports=n.p+"img/military4.b6943ee.png"},354:function(t,e,n){t.exports=n.p+"img/oilTech1.609ebd9.png"},355:function(t,e,n){t.exports=n.p+"img/oilTech2.f2482b5.png"},356:function(t,e,n){t.exports=n.p+"img/plastics.a91bb84.png"},357:function(t,e,n){t.exports=n.p+"img/purpleScience.420cdb0.png"},358:function(t,e,n){t.exports=n.p+"img/robotics1.d53c6dc.png"},359:function(t,e,n){t.exports=n.p+"img/robotics2.15b247f.png"},360:function(t,e,n){t.exports=n.p+"img/rocketFuelTech.3e32d9c.png"},361:function(t,e,n){t.exports=n.p+"img/rocketTech.f5fd560.png"},362:function(t,e,n){t.exports=n.p+"img/rocketry.6cce34a.png"},363:function(t,e,n){t.exports=n.p+"img/steelTech.b832745.png"},364:function(t,e,n){t.exports=n.p+"img/sulfurTech.1883e51.png"},365:function(t,e,n){t.exports=n.p+"img/yellowScience.80059d4.png"},378:function(t,e,n){"use strict";n.r(e);var c={props:["tech"],computed:{percent:function(){return this.tech.remainingSeconds>0?100-this.tech.remainingSeconds/this.tech.getTime()*100:0}},methods:{build:function(){this.tech.startBuilding()},cancel:function(){this.tech.cancelBuilding()}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return 1==t.tech.unlocked&&(t.tech.count<1||t.tech.count>0&&1==t.tech.game.options.researchedTechs)?c("div",{staticClass:"list-group-item"},[c("div",{staticClass:"row gx-2 align-items-center"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(332)("./"+t.tech.id+".png"),width:"24px",height:"24px",title:t.$t("techName_"+t.tech.id),alt:t.$t("techName_"+t.tech.id)}})]),t._v(" "),c("div",{staticClass:"col"},[c("span",{staticClass:"text-normal"},[t._v(t._s(t.$t("techName_"+t.tech.id)))]),t._v(" "),c("small",{staticClass:"ms-2 text-muted"},[t._v(t._s(t.$t("techDesk_"+t.tech.id)))])])]),t._v(" "),t.tech.count>0&&1==t.tech.game.options.researchedTechs?c("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[t._m(0)]):t._e(),t._v(" "),t.tech.count<1?c("div",[c("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[t._l(t.tech.getCosts(),(function(e,o){return c("div",{staticClass:"col-auto"},[c("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("itemName_"+o)}},[c("img",{attrs:{src:n(288)("./"+o+".png"),width:"24px",height:"24px",alt:t.$t("itemName_"+o)}}),t._v(" "),c("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow text-normal",class:{"text-danger":e>t.tech.game.items[o].count,"text-normal":e<=t.tech.game.items[o].count}},[c("FormatNumber",{attrs:{value:e}})],1)])])})),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",{class:{"text-muted":0==t.tech.canBuild(),"text-normal":1==t.tech.canBuild()||"running"==t.tech.state}},[c("FormatTime",{attrs:{value:t.tech.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},["running"!=t.tech.state?c("button",{staticClass:"btn btn-primary",class:{disabled:0==t.tech.canBuild()},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[t._m(1)]):t._e(),t._v(" "),"running"==t.tech.state?c("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(2)]):t._e()])],2)]):t._e()]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"col-auto"},[e("button",{staticClass:"btn btn-primary disabled",attrs:{type:"button"}},[e("span",{staticClass:"text-success"},[e("i",{staticClass:"fas fa-fw fa-check"})])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-plus-square"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(287).default,FormatTime:n(289).default})},381:function(t,e,n){"use strict";n.r(e);var c={props:["lab"],computed:{percent:function(){return this.lab.remainingSeconds>0?100-this.lab.remainingSeconds/this.lab.getTime()*100:0}},methods:{build:function(){this.lab.startBuilding()},cancel:function(){this.lab.cancelBuilding()}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"col-12"},[c("div",{staticClass:"card"},[c("div",{staticClass:"card-header"},[c("div",{staticClass:"row gx-2"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(330)("./"+t.lab.id+".png"),width:"18px",height:"18px",title:t.$t("labName_"+t.lab.id),alt:t.$t("labName_"+t.lab.id)}})]),t._v(" "),c("div",{staticClass:"col"},[c("span",[t._v(t._s(t.$t("labName_"+t.lab.id)))]),t._v(" "),c("small",{staticClass:"ms-2 text-muted"},[t._v(t._s(t.$t("labDesc_"+t.lab.id)))])]),t._v(" "),c("div",{staticClass:"col-auto"},[c("small",{staticClass:"text-muted"},[t._v("x")]),t._v(" "),c("span",[t._v(t._s(t.lab.count))])])])]),t._v(" "),c("div",{staticClass:"card-body"},[c("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[t._l(t.lab.getCosts(),(function(e,o){return c("div",{staticClass:"col-auto"},[c("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("itemName_"+o)}},[c("img",{attrs:{src:n(288)("./"+o+".png"),width:"24px",height:"24px",alt:t.$t("itemName_"+o)}}),t._v(" "),c("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":e>t.lab.game.items[o].count,"text-normal":e<=t.lab.game.items[o].count}},[c("FormatNumber",{attrs:{value:e}})],1)])])})),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",{class:{"text-muted":0==t.lab.canBuild(),"text-normal":1==t.lab.canBuild()||"running"==t.lab.state}},[c("FormatTime",{attrs:{value:t.lab.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},["running"!=t.lab.state?c("button",{staticClass:"btn btn-primary",class:{disabled:0==t.lab.canBuild()},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[t._m(0)]):t._e(),t._v(" "),"running"==t.lab.state?c("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(1)]):t._e()])],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-plus-square"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(287).default,FormatTime:n(289).default})},382:function(t,e,n){"use strict";n.r(e);var c={props:["lab"]},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"list-group list-group-flush"},t._l(t.lab.techs,(function(t){return n("RowTech",{key:t.id,attrs:{tech:t}})})),1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",[t._v("Researches")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RowTech:n(378).default})},419:function(t,e,n){"use strict";n.r(e);var c={props:["lab"]},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col scrollbar"},[n("div",{staticClass:"row g-3"},[n("CardLab",{attrs:{lab:t.lab}}),t._v(" "),1==t.lab.game.techs.automation1.unlocked?n("CardTechs",{attrs:{lab:t.lab}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardLab:n(381).default,CardTechs:n(382).default})}}]);