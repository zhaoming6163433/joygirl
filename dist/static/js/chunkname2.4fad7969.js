(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunkname2"],{"08c3":function(t,e,s){},"2a42":function(t,e,s){t.exports=s.p+"static/img/joy-turnaround.11be0967.gif"},3909:function(t,e,s){"use strict";var a=s("08c3"),o=s.n(a);o.a},"3e34":function(t,e,s){t.exports=s.p+"static/img/joy_still_new.1ffffcb2.png"},4175:function(t,e,s){t.exports=s.p+"static/img/joy_cook_head.7a4de430.png"},5713:function(t,e,s){t.exports=s.p+"static/img/joy-back.2a669b44.png"},"8aed":function(t,e,s){"use strict";var a=s("9e37"),o=s.n(a);o.a},"9aa5":function(t,e,s){t.exports=s.p+"static/img/joy-happy.1b269350.gif"},"9e37":function(t,e,s){},ad93:function(t,e,s){"use strict";s.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"homechild"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.talkdogshow,expression:"talkdogshow"}],class:"talkdog "+t.talkdogflag},[t._v(t._s(t.tiptext))]),a("div",{staticClass:"mydog"},[a("img",{directives:[{name:"show",rawName:"v-show",value:!t.bianshen&&t.sharkhead,expression:"!bianshen&&sharkhead"}],staticClass:"imghead",class:"animated "+t.swing+" "+t.imghead,attrs:{src:t.joy_head}}),a("img",{directives:[{name:"show",rawName:"v-show",value:t.joy_angry_show,expression:"joy_angry_show"}],staticClass:"imgfootclick",attrs:{src:s("fe8f")}}),a("img",{directives:[{name:"show",rawName:"v-show",value:t.joy_happy_show,expression:"joy_happy_show"}],staticClass:"imgfootclick1",attrs:{src:s("9aa5")}}),a("img",{directives:[{name:"show",rawName:"v-show",value:t.bianshen,expression:"bianshen"}],staticClass:"bianshen",attrs:{src:s("2a42")}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.bianshen,expression:"!bianshen"}],staticClass:"dogfoot",on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.touchstartfoot(e)}}}),a("div",{directives:[{name:"show",rawName:"v-show",value:!t.bianshen,expression:"!bianshen"}],staticClass:"doghead",on:{touchstart:function(e){return e.stopPropagation(),e.preventDefault(),t.touchstarthead(e)}}}),t._m(0)]),a("div",{staticClass:"dogname"},[t._v("SNOW")]),a("div",{staticClass:"mydogprogress"},[a("ul",[a("li",[a("span",[t._v("毅力值")]),a("mt-progress",{staticClass:"progressdog",attrs:{value:60,"bar-height":10}})],1),a("li",[a("span",[t._v("耐力值")]),a("mt-progress",{staticClass:"progressdog",attrs:{value:55,"bar-height":10}})],1),a("li",[a("span",[t._v("潜力值")]),a("mt-progress",{staticClass:"progressdog",attrs:{value:50,"bar-height":10}})],1),a("li",[a("span",[t._v("活力值")]),a("mt-progress",{staticClass:"progressdog",attrs:{value:30,"bar-height":10}})],1),a("li",[a("span",[t._v("魅力值")]),a("mt-progress",{staticClass:"progressdog",attrs:{value:65,"bar-height":10}})],1)])])])},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"oval"},[a("img",{attrs:{src:s("5713")}})])}],i=(s("2338"),s("f763"),s("fb37"),s("b04f")),n=s("3e34"),r=s.n(n),c=s("4175"),h=s.n(c),u=s("0e0b"),p=s("b27f"),g=s("591a");function f(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function l(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?f(s,!0).forEach((function(e){Object(i["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):f(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}var d={name:"homechild",props:[],data:function(){return{joy_head:r.a,swing:"",imghead:"",sharkhead:!0,joy_angry_show:!1,joy_happy_show:!1,talkdogshow:!0,bianshen:!1,talkdogflag:"",textarr:["HI，我是你的专属萌宠","汪~~~","嗷呜！！","美少女变身！"],initext:"HI，我是你的专属萌宠",tiptext:"HI，我是你的专属萌宠"}},watch:{pacakgeinfo:function(t){this.showcookdog(t)}},components:{},created:function(){},computed:l({},Object(g["c"])(["pacakgeinfo"])),methods:{showcookdog:function(t){var e=this;1===t&&(this.bianshen=!0,this.initext=this.textarr[3],this.tiptext=this.textarr[3],Object(p["setTimeout"])((function(){e.bianshen=!1,e.joy_head=h.a,e.imghead="cookiedog"}),1e3))},showtalk:function(){var t=this;Object(p["setTimeout"])((function(){t.talkdogflag="talkdogflag"}),5e3),Object(p["setTimeout"])((function(){t.talkdogshow=!1}),5180)},touchstarthead:function(t){var e=this;this.joy_happy_show=!0,this.sharkhead=!1,this.tiptext=this.textarr[1],Object(p["setTimeout"])((function(){e.joy_happy_show=!1,e.tiptext=e.initext,e.sharkhead=!0}),1e3)},touchstartfoot:function(){var t=this;this.tiptext=this.textarr[2],this.joy_angry_show=!0,this.sharkhead=!1,Object(p["setTimeout"])((function(){t.tiptext=t.initext,t.joy_angry_show=!1,t.sharkhead=!0}),1e3)}},mounted:function(){var t=this;this.showcookdog(this.pacakgeinfo),u["a"].vueEvent.$off("firstanimate"),u["a"].vueEvent.$on("firstanimate",(function(){t.bianshen=!0,Object(p["setTimeout"])((function(){t.bianshen=!1}),1e3)}))}},v=d,m=(s("3909"),s("8aed"),s("6691")),b=Object(m["a"])(v,a,o,!1,null,"6744d164",null);e["default"]=b.exports},b04f:function(t,e,s){"use strict";function a(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}s.d(e,"a",(function(){return a}))},fe8f:function(t,e,s){t.exports=s.p+"static/img/joy-angry.a19dacf5.gif"}}]);