(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{322:function(t,e,n){"use strict";n(127);var r=n(321),o=n.n(r),l=n(324),c=n.n(l);e.a={setSessionStorage:function(t,e){sessionStorage.setItem(t,e)},getSessionStorage:function(t,e){return sessionStorage.getItem(t)},delSessionStorage:function(t){sessionStorage.removeItem(t)},warningInfoTip:function(t,time){var e=2500;return time&&(e=time),Message({type:"warning",message:t,duration:e}),!1},successInfoTip:function(t,time){var e=2500;return time&&(e=time),Message({type:"success",message:t,duration:e}),!1},deepCopy:function(data){return window.JSON.parse(window.JSON.stringify(data))},loadColumnMap:function(t,e){var n=c.a.init(document.getElementById(t.eId));n.setOption(t),o()(window).resize((function(){n&&n.resize()})),e&&e(n)},formatNumber:function(t){for(var e=String(t).split(".")[0].length,n=String(t).split(".")[1],r=[],o=null;e>0;)o=e,e-=3,r.unshift(String(t).substring(e,o));return t=r.join(","),n?"".concat(t,".").concat(n):t},getAreaData:function(){return[{value:"南宁市信访局",label:"南宁市信访局",children:[{value:"南宁市信访局县级数据1",label:"南宁市信访局县级数据1"},{value:"南宁市信访局县级数据2",label:"南宁市信访局县级数据2"}]},{value:"柳州市信访局",label:"柳州市信访局",children:[{value:"柳州市信访局县级数据1",label:"柳州市信访局县级数据1"},{value:"柳州市信访局县级数据2",label:"柳州市信访局县级数据2"}]},{value:"桂林市信访局",label:"桂林市信访局",children:[{value:"桂林市信访局县级数据1",label:"桂林市信访局县级数据1"},{value:"桂林市信访局县级数据2",label:"桂林市信访局县级数据2"}]}]}}},448:function(t,e,n){"use strict";var r=n(3),o=n(22),l=n(35),c=n(181),d=n(85),f=n(11),v=n(58).f,x=n(86).f,m=n(9).f,w=n(449).trim,h=r.Number,F=h,y=h.prototype,A="Number"==l(n(128)(y)),S="trim"in String.prototype,I=function(t){var e=d(t,!1);if("string"==typeof e&&e.length>2){var n,r,o,l=(e=S?e.trim():w(e,3)).charCodeAt(0);if(43===l||45===l){if(88===(n=e.charCodeAt(2))||120===n)return NaN}else if(48===l){switch(e.charCodeAt(1)){case 66:case 98:r=2,o=49;break;case 79:case 111:r=8,o=55;break;default:return+e}for(var code,c=e.slice(2),i=0,f=c.length;i<f;i++)if((code=c.charCodeAt(i))<48||code>o)return NaN;return parseInt(c,r)}}return+e};if(!h(" 0o1")||!h("0b1")||h("+0x1")){h=function(t){var e=arguments.length<1?0:t,n=this;return n instanceof h&&(A?f((function(){y.valueOf.call(n)})):"Number"!=l(n))?c(new F(I(e)),n,h):I(e)};for(var N,k=n(7)?v(F):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),E=0;k.length>E;E++)o(F,N=k[E])&&!o(h,N)&&m(h,N,x(F,N));h.prototype=y,y.constructor=h,n(12)(r,"Number",h)}},449:function(t,e,n){var r=n(5),o=n(34),l=n(11),c=n(450),d="["+c+"]",f=RegExp("^"+d+d+"*"),v=RegExp(d+d+"*$"),x=function(t,e,n){var o={},d=l((function(){return!!c[t]()||"​"!="​"[t]()})),f=o[t]=d?e(m):c[t];n&&(o[n]=f),r(r.P+r.F*d,"String",o)},m=x.trim=function(t,e){return t=String(o(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(v,"")),t};t.exports=x},450:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},451:function(t,e,n){var content=n(855);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(33).default)("66b8dd24",content,!0,{sourceMap:!1})},854:function(t,e,n){"use strict";var r=n(451);n.n(r).a},855:function(t,e,n){(t.exports=n(32)(!1)).push([t.i,".canvas_box{text-align:center}.canvas_box .canvas{width:320px;height:200px}",""])},886:function(t,e,n){"use strict";n.r(e);n(182),n(448),n(322);var r={mounted:function(){function t(t){return Number(t.toFixed(2))}window.requestNextAnimationFrame=function(){var t=void 0,e=void 0,n=navigator.userAgent,r=0,o=this;return window.webkitRequestAnimationFrame&&(e=function(time){void 0===time&&(time=+new Date),o.callback(time)},t=window.webkitRequestAnimationFrame,window.webkitRequestAnimationFrame=function(n,element){o.callback=n,t(e,element)}),window.mozRequestAnimationFrame&&(r=n.indexOf("rv:"),-1!=n.indexOf("Gecko")&&"2.0"===n.substr(r+3,3)&&(window.mozRequestAnimationFrame=void 0)),window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||window.oRequestAnimationFrame||window.msRequestAnimationFrame||function(t,element){var e,n;window.setTimeout((function(){e=+new Date,t(e),n=+new Date,o.timeout=1e3/60-(n-e)}),o.timeout)}}();var e,n,canvas=document.getElementById("ca"),r=canvas.getContext("2d");canvas.onmousemove=function(t){e=t.pageX-canvas.offsetLeft,n=t.pageY-canvas.offsetTop},r.scale(2,2);var o={cur1:0,cur2:0,cur3:0,cur4:0,cur5:0};(new Date).getTime();function l(e){for(var n,o=e.startX||150,l=e.startY||150,c=e.radius||37,d=e.valFont||"30px bold Arial",f=e.descFont||"14px bold Arial",v=e.valFix||{x:0,y:0},x=e.descFix||{x:0,y:0},m=e.cur,w=0,h=[.02,.1,.24,.24,.1,.24,.2],F=0,i=0;i<h.length;i++)F+=h[i];n=t((2-.1*h.length)/F),r.beginPath(),r.lineWidth=1,r.arc(o,l,c,0,2*Math.PI),r.strokeStyle="#13418a",r.fillStyle="#1a1864",r.fill(),r.stroke(),r.beginPath(),r.lineWidth=2,r.arc(o,l,c+3,0,2*Math.PI),r.strokeStyle=e.strokeStyle,r.stroke();for(i=0;i<h.length;i++)w=t(m+h[i]*n),r.beginPath(),r.arc(o,l,c+10,Math.PI*m,Math.PI*w),r.stroke(),m=t(w+.1);r.font=d,r.fillStyle=e.strokeStyle,r.fillText(e.val,o+v.x,l+v.y),r.font=f,r.fillText(e.desc,o+x.x,l+x.y),r.closePath()}!function t(){r.clearRect(0,0,r.canvas.width,r.canvas.height),l({cur:o.cur1+=.005,val:3,startX:150,startY:80,radius:37,desc:"今日过期",strokeStyle:"#9746d3",valFont:"30px bold Arial",valFix:{x:-8,y:0},descFont:"14px bold Arial",descFix:{x:-28,y:20}}),l({cur:o.cur2-=.005,val:5,startX:50,startY:36,radius:25,desc:"受理黄灯",strokeStyle:"#d18733",valFont:"20px bold Arial",valFix:{x:-5,y:0},descFont:"10px bold Arial",descFix:{x:-18,y:18}}),l({cur:o.cur3+=.005,val:1,startX:250,startY:36,radius:24,desc:"办结黄灯",strokeStyle:"#d18733",valFont:"20px bold Arial",valFix:{x:-5,y:0},descFont:"10px bold Arial",descFix:{x:-18,y:18}}),l({cur:o.cur4-=.005,val:3,startX:50,startY:120,radius:25,desc:"受理红灯",strokeStyle:"#b0374b",valFont:"20px bold Arial",valFix:{x:-5,y:0},descFont:"10px bold Arial",descFix:{x:-18,y:18}}),l({cur:o.cur5+=.005,val:0,startX:250,startY:120,radius:25,desc:"办结红灯",strokeStyle:"#b0374b",valFont:"20px bold Arial",valFix:{x:-5,y:0},descFont:"10px bold Arial",descFix:{x:-18,y:18}}),void 0!==e&&void 0!==n&&function(t,e,n){r.save(),r.font="14px arial",r.textBaseline="bottom",r.fillStyle="rgba(0,0,0,0.4)";var o=r.measureText(t).width+20,l=parseInt("14px arial",10);r.fillRect(e+10,n-l,o+10,l+10),r.fillStyle="white",r.fillText(t,e+5+10,n+5),r.restore()}("颜色：xxxxx",e,n),requestNextAnimationFrame(t)}()}},o=(n(854),n(10)),component=Object(o.a)(r,(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"canvas_box"},[e("canvas",{staticClass:"canvas",attrs:{id:"ca",width:"640",height:"400"}})])}],!1,null,null,null);e.default=component.exports}}]);