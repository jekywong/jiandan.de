(window.webpackJsonp=window.webpackJsonp||[]).push([[18,9],{342:function(t,e,l){"use strict";l.r(e);var r={props:["value"],computed:{date:function(){var t="";return t+=this.value.getFullYear()+"-",t+=this.value.getMonth()+1+"-",t+=this.value.getDate()+" ",t+=this.value.getHours()+":",t+=this.value.getMinutes()+":",t+=this.value.getSeconds()}}},n=l(18),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",[t._v(t._s(t.date))])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,l){"use strict";l.r(e);l(21),l(16),l(23),l(11),l(32),l(20),l(33);var r=l(12),n=l(14);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,l)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var d={computed:v({},Object(n.d)(["currentRun","timePlayed","lastRuns"])),methods:v(v({},Object(n.c)(["showModal"])),{},{start:function(){this.showModal({type:"run",data:null})}})},o=l(18),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"h-100"},[r("div",{staticClass:"row g-4 pb-3"},[r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[t._m(0),t._v(" "),r("div",{staticClass:"card-body"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-3"},[r("div",{staticClass:"small text-muted"},[t._v("World")]),t._v(" "),r("div",[t._v(t._s(t.$t("world_"+t.currentRun.worldId)))])]),t._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"small text-muted"},[t._v("Starting Date")]),t._v(" "),r("div",[r("FormatDate",{attrs:{value:t.currentRun.startingDate}})],1)]),t._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"small text-muted"},[t._v("Time Played")]),t._v(" "),r("div",[r("FormatTime",{attrs:{value:t.timePlayed}})],1)]),t._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"small text-muted"},[t._v("Winning Time")]),t._v(" "),t.currentRun.winningTime?r("div",[r("img",{staticClass:"me-2",attrs:{src:l(206),width:"16px",height:"16px"}}),t._v(" "),r("FormatTime",{attrs:{value:t.currentRun.winningTime}})],1):t._e(),t._v(" "),t.currentRun.winningTime?t._e():r("div",[t._v("---")])])])])]),t._v(" "),r("div",{staticClass:"mt-2 text-end"},[r("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:t.start}},[t._v("\n                    Start a new Run\n                ")])])]),t._v(" "),t.lastRuns.length>0?r("div",{staticClass:"col-12"},[r("div",{staticClass:"card"},[t._m(1),t._v(" "),r("div",{staticClass:"list-group list-group-flush"},t._l(t.lastRuns,(function(e){return r("div",{staticClass:"list-group-item"},[r("div",{staticClass:"row align-items-center"},[r("div",{staticClass:"col-3"},[r("div",{staticClass:"small text-muted"},[t._v("World")]),t._v(" "),r("div",[t._v(t._s(t.$t("world_"+e.worldId)))])]),t._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"small text-muted"},[t._v("Starting Date")]),t._v(" "),r("div",[r("FormatDate",{attrs:{value:e.startingDate}})],1)]),t._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"small text-muted"},[t._v("Time Played")]),t._v(" "),r("div",[r("FormatTime",{attrs:{value:e.timePlayed}})],1)]),t._v(" "),r("div",{staticClass:"col-3"},[r("div",{staticClass:"small text-muted"},[t._v("Winning Time")]),t._v(" "),e.winningTime?r("div",[r("img",{staticClass:"me-2",attrs:{src:l(206),width:"16px",height:"16px"}}),t._v(" "),r("FormatTime",{attrs:{value:e.winningTime}})],1):t._e(),t._v(" "),e.winningTime?t._e():r("div",[t._v("---")])])])])})),0)])]):t._e()])])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card-header"},[l("span",{staticClass:"h6"},[t._v("Current Run")])])},function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("div",{staticClass:"card-header"},[l("span",{staticClass:"h6"},[t._v("Last Runs")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{FormatDate:l(342).default,FormatTime:l(123).default})}}]);