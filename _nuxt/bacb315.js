(window.webpackJsonp=window.webpackJsonp||[]).push([[18,10,11,12,15,16,19],Array(287).concat([function(t,e,n){var map={"./alienEgg.png":289,"./artilleryShell.png":291,"./artilleryTurret.png":292,"./assembler.png":293,"./automation1.png":294,"./automation2.png":295,"./automation3.png":296,"./barrel.png":297,"./battery.png":298,"./batteryTech.png":299,"./bluePack.png":300,"./blueScience.png":301,"./boiler.png":302,"./bullet.png":303,"./bulletPiercing.png":304,"./chemicalPlant.png":305,"./chest.png":306,"./coal.png":307,"./combatShotgun.png":308,"./concrete.png":309,"./concreteTech.png":310,"./copper.png":311,"./copperCable.png":312,"./copperPlate.png":313,"./drill.png":314,"./drill1.png":315,"./electricEngine.png":316,"./electricEngineTech.png":317,"./electronicCircuit.png":318,"./electronics.png":319,"./engine.png":320,"./engineTech.png":321,"./explosive.png":322,"./explosiveRocket.png":323,"./explosives.png":324,"./fluidHandling.png":325,"./furnace.png":326,"./grayPack.png":327,"./grayScience.png":328,"./greenPack.png":329,"./greenScience.png":330,"./heavyOil.png":331,"./iron.png":332,"./ironGearWheel.png":333,"./ironPlate.png":334,"./lab.png":335,"./lightOil.png":336,"./lubricant.png":337,"./lubricantTech.png":338,"./material1.png":339,"./material2.png":340,"./military1.png":341,"./military2.png":342,"./military3.png":343,"./military4.png":344,"./offshorePump.png":345,"./oil.png":346,"./oilRefinery.png":347,"./oilTech1.png":348,"./oilTech2.png":349,"./petroleumGas.png":350,"./piercingShell.png":351,"./pipe.png":352,"./pistol.png":353,"./plasticBar.png":354,"./plastics.png":355,"./processingUnit.png":356,"./pumpjack.png":357,"./purplePack.png":358,"./purpleScience.png":359,"./redPack.png":360,"./robotics1.png":361,"./rocket.png":362,"./rocketFuel.png":363,"./rocketFuelTech.png":364,"./rocketLauncher.png":365,"./rocketPart.png":366,"./rocketSilo.png":367,"./rocketTech.png":368,"./rocketry1.png":369,"./rocketry2.png":370,"./shotgun.png":371,"./shotgunShell.png":372,"./solidFuel.png":373,"./steam.png":374,"./steelPlate.png":375,"./steelTech.png":376,"./stone.png":377,"./stoneBrick.png":378,"./submachine.png":379,"./sulfur.png":380,"./sulfurTech.png":381,"./sulfuricAcid.png":382,"./water.png":383,"./yellowPack.png":384,"./yellowScience.png":385};function c(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}c.keys=function(){return Object.keys(map)},c.resolve=o,t.exports=c,c.id=287},function(t,e,n){"use strict";n.r(e);var c={props:["value"],computed:{format:function(){var t="";this.value<0&&(t="-");var e=Math.abs(this.value),n="",symbol=null;return e>=1e36?(n=t+Math.floor(100*e/1e36)/100,symbol="Ud"):e>=1e33?(n=t+Math.floor(100*e/1e33)/100,symbol="Dc"):e>=1e30?(n=t+Math.floor(100*e/1e30)/100,symbol="No"):e>=1e27?(n=t+Math.floor(100*e/1e27)/100,symbol="Oc"):e>=1e24?(n=t+Math.floor(100*e/1e24)/100,symbol="Sp"):e>=1e21?(n=t+Math.floor(100*e/1e21)/100,symbol="Sx"):e>=1e18?(n=t+Math.floor(100*e/1e18)/100,symbol="Qi"):e>=1e15?(n=t+Math.floor(100*e/1e15)/100,symbol="Qa"):e>=1e12?(n=t+Math.floor(100*e/1e12)/100,symbol="T"):e>=1e9?(n=t+Math.floor(100*e/1e9)/100,symbol="B"):e>=1e6?(n=t+Math.floor(100*e/1e6)/100,symbol="M"):e>=1e3?(n=t+Math.floor(100*e/1e3)/100,symbol="K"):n=t+Math.floor(100*e)/100,{value:n,symbol:symbol}}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"text-nowrap"},[t._v(t._s(t.format.value)),t.format.symbol?n("small",{staticClass:"opacity-75"},[t._v(" "+t._s(t.format.symbol))]):t._e()])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){t.exports=n.p+"img/alienEgg.242d11c.png"},function(t,e,n){"use strict";n.r(e);var c={props:["value"],computed:{time:function(){var t=this.value;if(t==1/0)return"Infinity";if(t<1)return Math.ceil(1e3*t)+" ms";var e=Math.floor(t/86400),n=Math.floor(t/3600)%24;n<10&&(n="0"+n);var c=Math.floor(t/60)%60;c<10&&(c="0"+c);var s=Math.floor(t%60);return s<10&&(s="0"+s),t=e>0?e+this.$t("abbr_day")+" "+n+":"+c+":"+s:n+":"+c+":"+s},years:function(){return Math.floor(4*this.value/365)},days:function(){return Math.floor(4*this.value-365*this.years)}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.time))])}),[],!1,null,null,null);e.default=component.exports},function(t,e,n){t.exports=n.p+"img/artilleryShell.7aa7668.png"},function(t,e,n){t.exports=n.p+"img/artilleryTurret.93faff8.png"},function(t,e,n){t.exports=n.p+"img/assembler.076c108.png"},function(t,e,n){t.exports=n.p+"img/automation1.b2f0c97.png"},function(t,e,n){t.exports=n.p+"img/automation2.c1a285e.png"},function(t,e,n){t.exports=n.p+"img/automation3.c4f9ad0.png"},function(t,e,n){t.exports=n.p+"img/barrel.4abf293.png"},function(t,e,n){t.exports=n.p+"img/battery.79e2386.png"},function(t,e,n){t.exports=n.p+"img/batteryTech.83f5eb2.png"},function(t,e,n){t.exports=n.p+"img/bluePack.ccf778f.png"},function(t,e,n){t.exports=n.p+"img/blueScience.77a7ad2.png"},function(t,e,n){t.exports=n.p+"img/boiler.fa8fcd7.png"},function(t,e,n){t.exports=n.p+"img/bullet.48bc2dd.png"},function(t,e,n){t.exports=n.p+"img/bulletPiercing.11166e9.png"},function(t,e,n){t.exports=n.p+"img/chemicalPlant.8de0fc7.png"},function(t,e,n){t.exports=n.p+"img/chest.b485ba4.png"},function(t,e,n){t.exports=n.p+"img/coal.87540e2.png"},function(t,e,n){t.exports=n.p+"img/combatShotgun.0cf6992.png"},function(t,e,n){t.exports=n.p+"img/concrete.9f198a1.png"},function(t,e,n){t.exports=n.p+"img/concreteTech.9a5afaf.png"},function(t,e,n){t.exports=n.p+"img/copper.ba78ef7.png"},function(t,e,n){t.exports=n.p+"img/copperCable.12b427e.png"},function(t,e,n){t.exports=n.p+"img/copperPlate.409eaf6.png"},function(t,e,n){t.exports=n.p+"img/drill.9b5c064.png"},function(t,e,n){t.exports=n.p+"img/drill1.9b5c064.png"},function(t,e,n){t.exports=n.p+"img/electricEngine.28acd0a.png"},function(t,e,n){t.exports=n.p+"img/electricEngineTech.450d0a6.png"},function(t,e,n){t.exports=n.p+"img/electronicCircuit.77a6ad8.png"},function(t,e,n){t.exports=n.p+"img/electronics.a0fd2d8.png"},function(t,e,n){t.exports=n.p+"img/engine.850c291.png"},function(t,e,n){t.exports=n.p+"img/engineTech.4b5c64f.png"},function(t,e,n){t.exports=n.p+"img/explosive.1ed42b0.png"},function(t,e,n){t.exports=n.p+"img/explosiveRocket.6814079.png"},function(t,e,n){t.exports=n.p+"img/explosives.d934ab4.png"},function(t,e,n){t.exports=n.p+"img/fluidHandling.a9c5202.png"},function(t,e,n){t.exports=n.p+"img/furnace.1c1aaf4.png"},function(t,e,n){t.exports=n.p+"img/grayPack.dc93871.png"},function(t,e,n){t.exports=n.p+"img/grayScience.ddbba16.png"},function(t,e,n){t.exports=n.p+"img/greenPack.90409aa.png"},function(t,e,n){t.exports=n.p+"img/greenScience.af00183.png"},function(t,e,n){t.exports=n.p+"img/heavyOil.9598796.png"},function(t,e,n){t.exports=n.p+"img/iron.2bd47dc.png"},function(t,e,n){t.exports=n.p+"img/ironGearWheel.92fa6c1.png"},function(t,e,n){t.exports=n.p+"img/ironPlate.e2a058f.png"},function(t,e,n){t.exports=n.p+"img/lab.b8c5fdf.png"},function(t,e,n){t.exports=n.p+"img/lightOil.a8daaa0.png"},function(t,e,n){t.exports=n.p+"img/lubricant.5701e37.png"},function(t,e,n){t.exports=n.p+"img/lubricantTech.36f0e13.png"},function(t,e,n){t.exports=n.p+"img/material1.4259d7b.png"},function(t,e,n){t.exports=n.p+"img/material2.e07f506.png"},function(t,e,n){t.exports=n.p+"img/military1.b6943ee.png"},function(t,e,n){t.exports=n.p+"img/military2.b6943ee.png"},function(t,e,n){t.exports=n.p+"img/military3.b6943ee.png"},function(t,e,n){t.exports=n.p+"img/military4.b6943ee.png"},function(t,e,n){t.exports=n.p+"img/offshorePump.3e01ce4.png"},function(t,e,n){t.exports=n.p+"img/oil.40f1f38.png"},function(t,e,n){t.exports=n.p+"img/oilRefinery.015cfe0.png"},function(t,e,n){t.exports=n.p+"img/oilTech1.609ebd9.png"},function(t,e,n){t.exports=n.p+"img/oilTech2.f2482b5.png"},function(t,e,n){t.exports=n.p+"img/petroleumGas.4e73764.png"},function(t,e,n){t.exports=n.p+"img/piercingShell.e8a34a1.png"},function(t,e,n){t.exports=n.p+"img/pipe.7a72a3f.png"},function(t,e,n){t.exports=n.p+"img/pistol.4f99b04.png"},function(t,e,n){t.exports=n.p+"img/plasticBar.1108372.png"},function(t,e,n){t.exports=n.p+"img/plastics.a91bb84.png"},function(t,e,n){t.exports=n.p+"img/processingUnit.697ab99.png"},function(t,e,n){t.exports=n.p+"img/pumpjack.cb6479b.png"},function(t,e,n){t.exports=n.p+"img/purplePack.3d0e787.png"},function(t,e,n){t.exports=n.p+"img/purpleScience.420cdb0.png"},function(t,e,n){t.exports=n.p+"img/redPack.7bc31b5.png"},function(t,e,n){t.exports=n.p+"img/robotics1.d53c6dc.png"},function(t,e,n){t.exports=n.p+"img/rocket.5251503.png"},function(t,e,n){t.exports=n.p+"img/rocketFuel.5d055a8.png"},function(t,e,n){t.exports=n.p+"img/rocketFuelTech.3e32d9c.png"},function(t,e,n){t.exports=n.p+"img/rocketLauncher.7244ee0.png"},function(t,e,n){t.exports=n.p+"img/rocketPart.b3dd1b6.png"},function(t,e,n){t.exports=n.p+"img/rocketSilo.ba2ee20.png"},function(t,e,n){t.exports=n.p+"img/rocketTech.f5fd560.png"},function(t,e,n){t.exports=n.p+"img/rocketry1.6cce34a.png"},function(t,e,n){t.exports=n.p+"img/rocketry2.e3bd728.png"},function(t,e,n){t.exports=n.p+"img/shotgun.318d9fe.png"},function(t,e,n){t.exports=n.p+"img/shotgunShell.8211bc3.png"},function(t,e,n){t.exports=n.p+"img/solidFuel.01ad2a9.png"},function(t,e,n){t.exports=n.p+"img/steam.0a2ce5f.png"},function(t,e,n){t.exports=n.p+"img/steelPlate.f8442a1.png"},function(t,e,n){t.exports=n.p+"img/steelTech.b832745.png"},function(t,e,n){t.exports=n.p+"img/stone.1212ec8.png"},function(t,e,n){t.exports=n.p+"img/stoneBrick.b7ee581.png"},function(t,e,n){t.exports=n.p+"img/submachine.f4aa87a.png"},function(t,e,n){t.exports=n.p+"img/sulfur.4b1f03d.png"},function(t,e,n){t.exports=n.p+"img/sulfurTech.1883e51.png"},function(t,e,n){t.exports=n.p+"img/sulfuricAcid.8193d89.png"},function(t,e,n){t.exports=n.p+"img/water.fae14ff.png"},function(t,e,n){t.exports=n.p+"img/yellowPack.cce0247.png"},function(t,e,n){t.exports=n.p+"img/yellowScience.80059d4.png"},function(t,e,n){"use strict";n.r(e);var c={props:["tech"],computed:{percent:function(){return this.tech.remainingSeconds>0?100-this.tech.remainingSeconds/this.tech.getTime()*100:0}},methods:{build:function(){this.tech.startBuilding()},cancel:function(){this.tech.cancelBuilding()}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return 1==t.tech.unlocked?c("div",{staticClass:"list-group-item",class:{"border border-primary":"running"==t.tech.state}},[c("div",{staticClass:"row gx-2 align-items-center"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(287)("./"+t.tech.id+".png"),width:"24px",height:"24px",title:t.$t("name_"+t.tech.id),alt:t.$t("name_"+t.tech.id)}})]),t._v(" "),c("div",{staticClass:"col"},[c("span",{staticClass:"text-normal"},[t._v(t._s(t.$t("name_"+t.tech.id)))]),t._v(" "),c("small",{staticClass:"ms-2 text-muted"},[t._v(t._s(t.$t("desc_"+t.tech.id)))])]),t._v(" "),t.tech.count>0&&1==t.tech.game.options.researchedTechs?c("div",{staticClass:"col-auto"},[t._m(0)]):t._e()]),t._v(" "),t.tech.count<1?c("div",[c("div",{staticClass:"row gx-3 align-items-center justify-content-end"},[t._l(t.tech.getCosts(),(function(e,o){return"running"!=t.tech.state?c("div",{staticClass:"col-auto"},[c("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("name_"+o)}},[c("img",{attrs:{src:n(287)("./"+o+".png"),width:"24px",height:"24px",alt:t.$t("name_"+o)}}),t._v(" "),c("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":e>t.tech.game.items[o].count,"text-normal":e<=t.tech.game.items[o].count}},[c("FormatNumber",{attrs:{value:e}})],1)])]):t._e()})),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",{class:{"text-muted":0==t.tech.canBuild(),"text-normal":1==t.tech.canBuild()||"running"==t.tech.state}},[c("FormatTime",{attrs:{value:t.tech.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},["running"!=t.tech.state?c("button",{staticClass:"btn btn-primary",class:{disabled:0==t.tech.canBuild()},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[t._m(1)]):t._e(),t._v(" "),"running"==t.tech.state?c("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(2)]):t._e()])],2)]):t._e()]):t._e()}),[function(){var t=this.$createElement,e=this._self._c||t;return e("button",{staticClass:"btn btn-primary disabled",attrs:{type:"button"}},[e("span",{staticClass:"text-success"},[e("i",{staticClass:"fas fa-fw fa-check"})])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-plus-square"})])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(288).default,FormatTime:n(290).default})},function(t,e,n){"use strict";n.r(e);var c={props:["buildable"],computed:{percent:function(){return this.buildable.remainingSeconds>0?100-this.buildable.remainingSeconds/this.buildable.getTime()*100:0}},methods:{build:function(){this.buildable.startBuilding()},cancel:function(){this.buildable.cancelBuilding()}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,c=t._self._c||e;return c("div",{staticClass:"col-12"},[c("div",{staticClass:"card"},[c("div",{staticClass:"card-header"},[c("div",{staticClass:"row gx-2"},[c("div",{staticClass:"col-auto"},[c("img",{attrs:{src:n(287)("./"+t.buildable.icon+".png"),width:"18px",height:"18px",title:t.$t("name_"+t.buildable.name),alt:t.$t("name_"+t.buildable.name)}})]),t._v(" "),c("div",{staticClass:"col"},[c("span",[t._v(t._s(t.$t("name_"+t.buildable.name)))]),t._v(" "),c("small",{staticClass:"ms-2 text-muted"},[t._v(t._s(t.$t("desc_"+t.buildable.name)))])]),t._v(" "),c("div",{staticClass:"col-auto"},[c("small",{staticClass:"text-muted"},[t._v("x")]),t._v(" "),c("span",[t._v(t._s(t.buildable.count))])])])]),t._v(" "),c("div",{staticClass:"card-body"},[c("div",{staticClass:"row gx-3 align-items-center justify-content-end"},[t._l(t.buildable.getCosts(),(function(e,o){return c("div",{staticClass:"col-auto"},[c("div",{staticClass:"position-relative rounded d-flex align-items-center justify-content-center",staticStyle:{width:"28px",height:"28px"},attrs:{title:t.$t("name_"+o)}},[c("img",{attrs:{src:n(287)("./"+o+".png"),width:"24px",height:"24px",alt:t.$t("name_"+o)}}),t._v(" "),c("span",{staticClass:"position-absolute bottom-0 end-0 fw-bold fs-medium text-shadow",class:{"text-danger":e>t.buildable.game.bases[o].count,"text-normal":e<=t.buildable.game.bases[o].count}},[c("FormatNumber",{attrs:{value:e}})],1)])])})),t._v(" "),c("div",{staticClass:"col-auto"},[c("div",{staticClass:"text-center mb-1"},[c("span",{class:{"text-muted":0==t.buildable.canBuild(),"text-normal":1==t.buildable.canBuild()||"running"==t.buildable.state}},[c("FormatTime",{attrs:{value:t.buildable.remainingSeconds}})],1)]),t._v(" "),c("div",{staticClass:"progress",staticStyle:{width:"70px",height:"3px"}},[c("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),c("div",{staticClass:"col-auto"},["running"!=t.buildable.state?c("button",{staticClass:"btn btn-primary",class:{disabled:0==t.buildable.canBuild()},attrs:{type:"button"},on:{click:function(e){return t.build()}}},[c("span",[c("i",{staticClass:"fas fa-fw",class:{"fa-plus-square":"storage"!=t.buildable.type,"fa-level-up-alt":"storage"==t.buildable.type}})])]):t._e(),t._v(" "),"running"==t.buildable.state?c("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(e){return t.cancel()}}},[t._m(0)]):t._e()])],2)])])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"fas fa-fw fa-times-circle"})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(288).default,FormatTime:n(290).default})},,,,,,,,,function(t,e,n){"use strict";n.r(e);n(14),n(34);var c={props:["lab"],computed:{techs:function(){var t=[];return this.lab.techs.forEach((function(e){e.count<1&&t.push(e)})),t}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"list-group list-group-flush"},[t.techs.length<=0?n("div",{staticClass:"list-group-item text-center"},[n("span",[t._v('No more research available - check the "Tutorial"')])]):t._e(),t._v(" "),t._l(t.techs,(function(t){return n("RowTech",{key:t.id,attrs:{tech:t}})}))],2)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",[t._v("Available Researches")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RowTech:n(386).default})},function(t,e,n){"use strict";n.r(e);n(14),n(34);var c={props:["lab"],computed:{techs:function(){var t=[];return this.lab.techs.forEach((function(e){e.count>0&&t.push(e)})),t}}},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-12"},[n("div",{staticClass:"card"},[t._m(0),t._v(" "),n("div",{staticClass:"list-group list-group-flush"},t._l(t.techs,(function(t){return n("RowTech",{key:t.id,attrs:{tech:t}})})),1)])])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card-header"},[n("div",{staticClass:"row gx-2"},[n("div",{staticClass:"col"},[n("span",[t._v("Researched Techs")])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{RowTech:n(386).default})},,,,,,,,,,function(t,e,n){"use strict";n.r(e);var c={props:["lab"]},o=n(62),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col scrollbar"},[n("div",{staticClass:"row g-3"},[n("CardBuildable",{attrs:{buildable:t.lab}}),t._v(" "),1==t.lab.game.techs.automation1.unlocked?n("CardAvailableTechs",{attrs:{lab:t.lab}}):t._e(),t._v(" "),t.lab.game.techs.automation1.count>0&&1==t.lab.game.options.researchedTechs?n("CardDoneTechs",{attrs:{lab:t.lab}}):t._e()],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{CardBuildable:n(387).default,CardAvailableTechs:n(396).default,CardDoneTechs:n(397).default})}])]);