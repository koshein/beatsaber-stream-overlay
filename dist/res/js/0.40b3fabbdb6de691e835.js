webpackJsonp([0],{"1kS7":function(t,e){e.f=Object.getOwnPropertySymbols},Dd8w:function(t,e,a){"use strict";e.__esModule=!0;var n,s=a("woOf"),r=(n=s)&&n.__esModule?n:{default:n};e.default=r.default||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t}},NpIQ:function(t,e){e.f={}.propertyIsEnumerable},R4wc:function(t,e,a){var n=a("kM2E");n(n.S+n.F,"Object",{assign:a("To3L")})},To3L:function(t,e,a){"use strict";var n=a("lktj"),s=a("1kS7"),r=a("NpIQ"),o=a("sB3e"),i=a("MU5D"),c=Object.assign;t.exports=!c||a("S82l")(function(){var t={},e={},a=Symbol(),n="abcdefghijklmnopqrst";return t[a]=7,n.split("").forEach(function(t){e[t]=t}),7!=c({},t)[a]||Object.keys(c({},e)).join("")!=n})?function(t,e){for(var a=o(t),c=arguments.length,u=1,d=s.f,l=r.f;c>u;)for(var f,h=i(arguments[u++]),p=d?n(h).concat(d(h)):n(h),m=p.length,v=0;m>v;)l.call(h,f=p[v++])&&(a[f]=h[f]);return a}:c},V3tA:function(t,e,a){a("R4wc"),t.exports=a("FeBl").Object.assign},cnLN:function(t,e){},woOf:function(t,e,a){t.exports={default:a("V3tA"),__esModule:!0}},zIGE:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("Dd8w"),s=a.n(n),r={name:"page-overlay",title:"Beat Saber Overlay",data:function(){return{ws:null,intervalID:null,progressGradient:"",serverTimeOffset:0,data:null}},computed:{corner:function(){return this.$route.query.corner||"top-left"},cornerSideX:function(){return this.corner.includes("left")?"left":"right"},cornerSideY:function(){return this.corner.includes("top")?"top":"bottom"},host:function(){var t=this.$route.query.host||"localhost:6557";return t.includes(":")||(t+=":6557"),t},hittage:function(){return 0===this.data.performance.passedNotes?0:Math.floor(this.data.performance.hitNotes/this.data.performance.passedNotes*1e3)/10},scorePercentage:function(){return 0===this.data.performance.currentMaxScore?0:Math.floor(this.data.performance.score/this.data.performance.currentMaxScore*1e3)/10}},mounted:function(){var t=this;this.updateGradient(),this.connect(),this.intervalID=setInterval(function(){return t.updateGradient()},200)},destroyed:function(){this.disconnect(),clearInterval(this.intervalID),this.intervalID=null},methods:{now:function(){return Date.now()+this.serverTimeOffset},connect:function(){this.ws=new WebSocket("ws://"+this.host+"/socket"),this.ws.onclose=this.onClose.bind(this),this.ws.onmessage=this.onMessage.bind(this)},disconnect:function(){this.ws&&(this.ws.close(),this.ws=null)},onClose:function(){var t=this;setTimeout(function(){return t.connect()},2e3)},onMessage:function(t){var e=JSON.parse(t.data);e.time&&(this.serverTimeOffset=e.time-Date.now()),e.status&&(this.data=s()({},this.data||{},e.status))},updateGradient:function(){if(this.data&&this.data.beatmap&&"StandardLevel"===this.data.game.scene){var t=this.data.beatmap.paused?this.data.beatmap.paused-this.data.beatmap.start:this.now()-this.data.beatmap.start,e=Math.round(t/this.data.beatmap.length*1e3)/10;this.progressGradient="linear-gradient(to right, rgba(212, 38, 38, 0.7) 0, rgba(212, 38, 38, 0.7) "+e+"%, rgba(30, 24, 24, 0.7) "+e+"%, rgba(30, 24, 24, 0.7) 100%)"}else this.progressGradient="rgba(30, 24, 24, 0.7)"}}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page-overlay",class:["side-"+t.cornerSideX,"side-"+t.cornerSideY]},[t.data?[a("div",{staticClass:"map-info",style:{background:t.progressGradient}},[t.data.beatmap?[a("span",{staticClass:"name"},[t._v(t._s(t.data.beatmap.songName))]),t._v(" "),t.data.beatmap.songSubName?a("span",{staticClass:"subname"},[t._v(" "+t._s(t.data.beatmap.songSubName))]):t._e(),t._v(" "),t.data.beatmap.songAuthorName?a("span",{staticClass:"author"},[t._v(" - "+t._s(t.data.beatmap.songAuthorName))]):t._e()]:a("span",[t._v("In menu")])],2),t._v(" "),t.data.performance?a("div",{staticClass:"performance-info"},[a("span",{staticClass:"hittage"},[t._v("HIT "+t._s(t.hittage)+"%")]),t._v(" "),a("span",{staticClass:"score"},[t._v("SCORE "+t._s(t.data.performance.score)+" ("+t._s(t.scorePercentage)+"% - "+t._s(t.data.performance.rank)+")")])]):t._e()]:a("div",{staticClass:"map-info"},[t._v("\n\t\tConnecting...\n\t")])],2)},staticRenderFns:[]};var i=a("VU/8")(r,o,!1,function(t){a("cnLN")},"data-v-f7c4d15a",null);e.default=i.exports}});
//# sourceMappingURL=0.40b3fabbdb6de691e835.js.map