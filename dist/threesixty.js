!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.ThreeSixty=t():e.ThreeSixty=t()}(window,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(e){t.default=class{constructor(e,t){this.container=e,this.options=Object.assign({width:300,height:300,count:0,perRow:0,speed:100,dragTolerance:10,swipeTolerance:10,draggable:!0,swipeable:!0,keys:!0,prev:!0,next:!0,inverted:!1},t),this.index=0,this.loopTimeoutId=null,this.looping=!1,this.dragOrigin=null,this.eventHandlers={container:{mousedown:e=>this.dragOrigin=e.pageX,touchstart:e=>this.dragOrigin=e.touches[0].clientX,touchend:()=>this.dragOrigin=null},prev:{mousedown:e=>{e.preventDefault(),this.play(!0)},mouseup:e=>{e.preventDefault(),this.stop()},touchstart:e=>{e.preventDefault(),this.prev()}},next:{mousedown:e=>{e.preventDefault(),this.play()},mouseup:e=>{e.preventDefault(),this.stop()},touchstart:e=>{e.preventDefault(),this.next()}},global:{mouseup:()=>this.dragOrigin=null,mousemove:e=>{this.dragOrigin&&Math.abs(this.dragOrigin-e.pageX)>this.options.dragTolerance&&(this.stop(),this.dragOrigin>e.pageX?this.prev():this.next(),this.dragOrigin=e.pageX)},touchmove:e=>{this.dragOrigin&&Math.abs(this.dragOrigin-e.touches[0].clientX)>this.options.swipeTolerance&&(this.stop(),this.dragOrigin>e.touches[0].clientX?this.prev():this.next(),this.dragOrigin=e.touches[0].clientX)},keydown:e=>{[37,39].includes(e.keyCode)&&this.play(37===e.keyCode)},keyup:e=>{[37,39].includes(e.keyCode)&&self.stop()}}},this.initContainer(),this.initEvents()}initContainer(){this.container.style.width=this.options.width+"px",this.container.style.height=this.options.height+"px",this.container.style.backgroundImage=`url("${this.options.image}")`,this.container.style.backgroundPosition="0 0",this.container.style.backgroundSize=100*this.options.perRow+"%"}initEvents(){this.options.draggable&&(this.container.addEventListener("mousedown",this.eventHandlers.container.mousedown),e.addEventListener("mouseup",this.eventHandlers.global.mouseup),e.addEventListener("mousemove",this.eventHandlers.global.mousemove)),this.options.swipeable&&(this.container.addEventListener("touchstart",this.eventHandlers.container.touchstart),this.container.addEventListener("touchend",this.eventHandlers.container.touchend),e.addEventListener("touchmove",this.eventHandlers.global.touchmove)),this.options.keys&&(e.addEventListener("keydown",this.eventHandlers.global.keydown),e.addEventListener("keyup",this.eventHandlers.global.keyup)),this.options.prev&&(this.options.prev.addEventListener("mousedown",this.eventHandlers.prev.mousedown),this.options.prev.addEventListener("mouseup",this.eventHandlers.prev.mouseup),this.options.prev.addEventListener("touchstart",this.eventHandlers.prev.touchstart)),this.options.next&&(this.options.next.addEventListener("mousedown",this.eventHandlers.next.mousedown),this.options.next.addEventListener("mouseup",this.eventHandlers.next.mouseup),this.options.next.addEventListener("touchstart",this.eventHandlers.next.touchstart))}next(){this.goto(this.options.inverted?this.index+1:this.index-1)}prev(){this.goto(this.options.inverted?this.index-1:this.index+1)}goto(e){this.index=(this.options.count+e)%this.options.count,this.update()}loop(t){t?this.prev():this.next(),this.loopTimeoutId=e.setTimeout(()=>{this.loop(t)},this.options.speed)}play(e){this.looping||(this.loop(e),this.looping=!0)}stop(){this.looping&&(e.clearTimeout(this.loopTimeoutId),this.looping=!1)}update(){this.container.style.backgroundPositionX=-this.index%this.options.perRow*this.options.width+"px",this.container.style.backgroundPositionY=-Math.floor(this.index/this.options.perRow)*this.options.height+"px"}destroy(){this.stop(),this.container.removeEventListener("mousedown",this.eventHandlers.container.mousedown),this.container.removeEventListener("touchstart",this.eventHandlers.container.touchstart),this.container.removeEventListener("touchend",this.eventHandlers.container.touchend),e.removeEventListener("mouseup",this.eventHandlers.global.mouseup),e.removeEventListener("mousemove",this.eventHandlers.global.mousemove),e.removeEventListener("touchmove",this.eventHandlers.global.touchmove),e.removeEventListener("keydown",this.eventHandlers.global.keydown),e.removeEventListener("keyup",this.eventHandlers.global.keyup),this.options.prev&&(this.options.prev.removeEventListener("mousedown",this.eventHandlers.prev.mousedown),this.options.prev.removeEventListener("mouseup",this.eventHandlers.prev.mouseup),this.options.prev.removeEventListener("touchstart",this.eventHandlers.prev.touchstart)),this.options.next&&(this.options.next.removeEventListener("mousedown",this.eventHandlers.next.mousedown),this.options.next.removeEventListener("mouseup",this.eventHandlers.next.mouseup),this.options.next.removeEventListener("touchstart",this.eventHandlers.next.touchstart)),this.container.style.width="",this.container.style.height="",this.container.style.backgroundImage="",this.container.style.backgroundPosition="",this.container.style.backgroundSize=""}}}.call(this,n(1))},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch(e){"object"==typeof window&&(n=window)}e.exports=n}]).default});