(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{369:function(t,e,n){"use strict";n.r(e);n(19),n(16),n(23),n(12),n(30),n(20),n(31);var r=n(9),c=n(15);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["assetId"],methods:l(l({},Object(c.c)(["setSelectedAssetId"])),{},{select:function(){this.setSelectedAssetId(this.assetId)}})},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("button",{staticClass:"position-relative btn btn-light py-2",attrs:{type:"button",title:t.$t("name_"+t.assetId)},on:{click:function(e){return t.select()}}},[e("img",{attrs:{src:n(308)("./".concat(t.assetId,".png")),width:"16px",height:"16px"}})])])}),[],!1,null,null,null);e.default=component.exports},370:function(t,e,n){"use strict";n.r(e);n(19),n(16),n(23),n(12),n(30),n(20),n(31);var r=n(9),c=n(15);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["recipe"],computed:l(l(l({},Object(c.d)(["assignmentCount"])),Object(c.b)(["recipePercent","machineAvailable"])),{},{percent:function(){return this.recipePercent(this.recipe.id)},available:function(){return this.machineAvailable(this.recipe.machineId)},diff:function(){return this.recipe.machineCount-this.recipe.currentCount}}),methods:l(l({},Object(c.c)(["recipeAssign","recipeUnassign","recipeWait"])),{},{assign:function(t){this.available<=0||this.recipeAssign({id:this.recipe.id,count:t})},unassign:function(t){this.recipe.machineCount<=0||this.recipeUnassign({id:this.recipe.id,count:t})}})},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[e("div",{staticClass:"col-auto pe-3"},[e("div",{staticClass:"text-center mb-1"},[e("span",[e("FormatTime",{attrs:{value:t.recipe.remainingSeconds}})],1)]),t._v(" "),e("div",{staticClass:"progress",staticStyle:{width:"50px",height:"3px"}},[e("div",{staticClass:"progress-bar",style:"width:"+t.percent+"%;",attrs:{role:"progressbar","aria-valuenow":t.percent,"aria-valuemin":"0","aria-valuemax":"100"}})])]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.available<=0},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.assign(t.available)}}},[t._v("All")]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.available<t.assignmentCount},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.assign(t.assignmentCount)}}},[t._v("+"+t._s(t.assignmentCount))])])]),t._v(" "),e("div",{staticClass:"col-auto text-center",staticStyle:{width:"36px"}},[e("span",[e("FormatNumber",{class:{"text-muted":t.recipe.currentCount<=0},attrs:{value:t.recipe.currentCount}}),t._v(" "),0!=t.diff?e("small",{class:{"text-success":t.diff>0,"text-danger":t.diff<0}},[t.diff>0?e("span",[t._v("+")]):t._e(),t._v(t._s(t.diff))]):t._e()],1)]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.recipe.machineCount<t.assignmentCount},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.unassign(t.assignmentCount)}}},[t._v("-"+t._s(t.assignmentCount))]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.recipe.machineCount<=0},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.unassign(t.recipe.machineCount)}}},[t._v("None")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatTime:n(124).default,FormatNumber:n(307).default})},375:function(t,e,n){"use strict";n.r(e);n(19),n(16),n(23),n(12),n(30),n(20),n(31);var r=n(9),c=n(15);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["item"],computed:l(l(l({},Object(c.d)(["assignmentCount"])),Object(c.b)(["storageAvailable","itemMax"])),{},{available:function(){return this.storageAvailable(this.item.storageId)}}),methods:l(l({},Object(c.c)(["itemAssign","itemUnassign"])),{},{canUnassign:function(t){var e=!0;return(this.item.storageCount<t||this.item.count>this.itemMax(this.item.id)-this.item.stackSize*t)&&(e=!1),e},assign:function(t){this.available<=0||this.itemAssign({id:this.item.id,count:t})},unassign:function(t){this.canUnassign(t)&&this.itemUnassign({id:this.item.id,count:t})}})},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[e("div",{staticClass:"col-auto"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.available<=0},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.assign(t.available)}}},[t._v("All")]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:t.available<t.assignmentCount},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.assign(t.assignmentCount)}}},[t._v("+"+t._s(t.assignmentCount))])])]),t._v(" "),e("div",{staticClass:"col-auto text-center",staticStyle:{width:"36px"}},[e("span",[e("FormatNumber",{class:{"text-muted":t.item.storageCount<=0},attrs:{value:t.item.storageCount}})],1)]),t._v(" "),e("div",{staticClass:"col-auto"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:!t.canUnassign(t.assignmentCount)},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.unassign(t.assignmentCount)}}},[t._v("-"+t._s(t.assignmentCount))]),t._v(" "),e("button",{staticClass:"btn btn-outline-primary px-0",class:{disabled:!t.canUnassign(t.item.storageCount)},staticStyle:{width:"36px"},attrs:{type:"button"},on:{click:function(e){return t.unassign(t.item.storageCount)}}},[t._v("None")])])])])])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatNumber:n(307).default})},385:function(t,e,n){"use strict";n.r(e);n(19),n(16),n(23),n(12),n(30),n(20),n(31);var r=n(9),c=n(15);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["recipeId","inputId"],computed:l(l({},Object(c.d)(["items","recipes"])),{},{recipe:function(){return this.recipes[this.recipeId]},min:function(){return this.recipe.inputs[this.inputId]},max:function(){return this.recipe.inputs[this.inputId]*this.recipe.currentCount},current:function(){return this.recipe.machineInputs[this.inputId]}})},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row g-2 align-items-center"},[e("BtnAsset",{staticClass:"col",attrs:{assetId:t.inputId}}),t._v(" "),e("div",{staticClass:"col-3 text-end"},[t._m(0),t._v(" "),e("FormatNumber",{attrs:{value:t.min}})],1),t._v(" "),e("div",{staticClass:"col-3 text-end"},[t._m(1),t._v(" "),e("FormatNumber",{attrs:{value:t.max}})],1),t._v(" "),e("div",{staticClass:"col-3 text-end"},[t._m(2),t._v(" "),e("FormatNumber",{class:{"text-danger":t.current<t.min,"text-warning":t.current>=t.min&&t.current<t.max,"text-success":t.current>=t.max},attrs:{value:t.current}})],1)],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"small lh-1"},[t("span",{staticClass:"text-muted"},[this._v("min")])])},function(){var t=this._self._c;return t("div",{staticClass:"small lh-1"},[t("span",{staticClass:"text-muted"},[this._v("max")])])},function(){var t=this._self._c;return t("div",{staticClass:"small lh-1"},[t("span",{staticClass:"text-muted"},[this._v("current")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BtnAsset:n(369).default,FormatNumber:n(307).default})},386:function(t,e,n){"use strict";n.r(e);n(19),n(16),n(23),n(12),n(30),n(20),n(31);var r=n(9),c=n(15);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={props:["recipeId","outputId","coeff"],computed:l(l({},Object(c.d)(["recipes"])),{},{recipe:function(){return this.recipes[this.recipeId]},outputProd:function(){var t=null;for(var e in this.recipe.output){t=e;break}return this.recipe.activeCount*this.recipe.output[t]}})},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"row g-2 align-items-center"},[e("BtnAsset",{staticClass:"col",attrs:{assetId:t.outputId}}),t._v(" "),e("div",{staticClass:"col-3 text-end"},[t._m(0),t._v(" "),e("FormatNumber",{attrs:{value:100*t.coeff}}),t._v("%\n        ")],1),t._v(" "),e("div",{staticClass:"col-3 text-end"},[t._m(1),t._v(" "),e("FormatNumber",{attrs:{value:t.coeff*t.outputProd}})],1)],1)])}),[function(){var t=this._self._c;return t("div",{staticClass:"small lh-1"},[t("span",{staticClass:"text-muted"},[this._v("percentage")])])},function(){var t=this._self._c;return t("div",{staticClass:"small lh-1"},[t("span",{staticClass:"text-muted"},[this._v("count")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{BtnAsset:n(369).default,FormatNumber:n(307).default})},395:function(t,e,n){"use strict";n.r(e);n(19),n(16),n(23),n(12),n(30),n(20),n(31);var r=n(9),c=n(15);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function l(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:l(l(l({},Object(c.d)(["manuals","recipes","currentTech","storages"])),Object(c.b)(["selectedAsset","checkAssets","itemMax","itemProd","itemRawProd","itemRawConsum","recipeInputs","recipeOutput","totalLabs","itemConsumers"])),{},{max:function(){return this.itemMax(this.selectedAsset.id)},prod:function(){return this.itemProd(this.selectedAsset.id)},rawProd:function(){return this.itemRawProd(this.selectedAsset.id)},manual:function(){for(var t in this.manuals){var e=this.manuals[t];if(e.output[this.selectedAsset.id])return e}return null},recipe:function(){for(var t in this.recipes){var e=this.recipes[t];if(e.output[this.selectedAsset.id])return e}return null},inputs:function(){return this.recipeInputs(this.recipe.id)},output:function(){return this.recipeOutput(this.recipe.id)},recipeUnlocked:function(){return this.checkAssets(this.recipe.reqs)},storageUnlocked:function(){if(!this.selectedAsset.storageId)return!1;var t=this.storages[this.selectedAsset.storageId];return this.checkAssets(t.reqs)},consumers:function(){return this.itemConsumers(this.selectedAsset.id)}})},v=n(18),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"card"},[e("div",{staticClass:"card-header"},[e("div",{staticClass:"row g-2 align-items-center"},[e("div",{staticClass:"col-auto"},[e("img",{attrs:{src:n(308)("./".concat(t.selectedAsset.id,".png")),width:"24px",height:"24px"}})]),t._v(" "),e("div",{staticClass:"col-auto"},[e("span",{staticClass:"h6"},[t._v(t._s(t.$t("name_"+t.selectedAsset.id)))])])])]),t._v(" "),e("div",{staticClass:"list-group list-group-flush"},[t.manual?e("GroupManual",{staticClass:"list-group-item",attrs:{manual:t.manual}}):t._e(),t._v(" "),t.recipeUnlocked&&t.recipe.inputs?e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row g-3"},[t._m(0),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row g-2"},t._l(t.recipe.inputs,(function(n,r){return e("MachineInput",{key:r,staticClass:"col-12",attrs:{recipeId:t.recipe.id,inputId:r}})})),1)])])]):t._e(),t._v(" "),t.recipeUnlocked?e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row g-3"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row gx-2 align-items-center"},[t._m(1),t._v(" "),e("div",{staticClass:"col-auto"},[t.recipe.machineCount>0&&t.recipe.activeCount==t.recipe.machineCount?e("span",{staticClass:"text-success"},[e("FormatNumber",{attrs:{value:t.recipe.activeCount}})],1):t._e(),t._v(" "),t.recipe.machineCount>0&&t.recipe.activeCount!=t.recipe.machineCount?e("span",{staticClass:"text-danger"},[t._m(2),t._v(" "),e("FormatNumber",{attrs:{value:t.recipe.activeCount}})],1):t._e(),t._v(" "),t.recipe.machineCount<=0?e("span",{staticClass:"text-muted"},[e("FormatNumber",{attrs:{value:t.recipe.activeCount}})],1):t._e(),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("/ "),e("FormatNumber",{attrs:{value:t.recipe.currentCount}})],1)])])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[e("BtnAsset",{staticClass:"col",attrs:{assetId:t.recipe.machineId}}),t._v(" "),e("BlockAssignment",{staticClass:"col-auto",attrs:{recipe:t.recipe}})],1)])])]):t._e(),t._v(" "),t.recipeUnlocked?e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row g-3"},[e("div",{staticClass:"col-12"},[e("div",{staticClass:"row gx-2 align-items-center"},[t._m(3),t._v(" "),e("div",{staticClass:"col-auto"},[t._l(t.recipe.output,(function(n,r){return e("FormatNumber",{key:r,attrs:{value:n*t.recipe.activeCount}})})),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("/ "+t._s(t.recipe.time)+"s")])],2)])]),t._v(" "),t.consumers&&t.consumers.length>0?e("div",{staticClass:"col-12"},[e("div",{staticClass:"row g-2"},t._l(t.consumers,(function(n){return e("MachineOutput",{key:n.id,staticClass:"col-12",attrs:{recipeId:t.recipe.id,outputId:n.assetId,coeff:n.coeff}})})),1)]):t._e()])]):t._e(),t._v(" "),t.storageUnlocked?e("div",{staticClass:"list-group-item"},[e("div",{staticClass:"row g-3"},[t._m(4),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row gx-2 align-items-center"},[t._m(5),t._v(" "),e("div",{staticClass:"col-auto"},[e("span",{staticClass:"text-normal"},[e("FormatNumber",{class:{"text-muted":t.selectedAsset.count<=0},attrs:{value:t.selectedAsset.count}})],1),t._v(" "),e("span",{staticClass:"text-muted"},[t._v("/"),e("FormatNumber",{class:{"text-danger":t.selectedAsset.count>=t.max},attrs:{value:t.max}})],1)])])]),t._v(" "),e("div",{staticClass:"col-12"},[e("div",{staticClass:"row gx-2 align-items-center justify-content-end"},[e("BtnAsset",{staticClass:"col",attrs:{assetId:t.selectedAsset.storageId}}),t._v(" "),e("BlockStorageAssignment",{staticClass:"col-auto",attrs:{item:t.selectedAsset}})],1)])])]):t._e()],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("span",{staticClass:"text-muted fw-bold"},[this._v("Inputs")])])},function(){var t=this._self._c;return t("div",{staticClass:"col"},[t("span",{staticClass:"text-muted fw-bold"},[this._v("Machine")])])},function(){var t=this._self._c;return t("small",{staticClass:"me-1"},[t("i",{staticClass:"fas fa-fw fa-exclamation-triangle"})])},function(){var t=this._self._c;return t("div",{staticClass:"col"},[t("span",{staticClass:"text-muted fw-bold"},[this._v("Outputs")])])},function(){var t=this._self._c;return t("div",{staticClass:"col-12"},[t("span",{staticClass:"text-muted fw-bold"},[this._v("Storage")])])},function(){var t=this._self._c;return t("div",{staticClass:"col"},[t("span",{staticClass:"text-muted"},[this._v("Current Count")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{GroupManual:n(374).default,MachineInput:n(385).default,FormatNumber:n(307).default,BtnAsset:n(369).default,BlockAssignment:n(370).default,MachineOutput:n(386).default,BlockStorageAssignment:n(375).default})}}]);