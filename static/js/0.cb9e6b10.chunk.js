(this.webpackJsonpschnitzeljagt=this.webpackJsonpschnitzeljagt||[]).push([[0],{144:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",(function(){return i}));var r=n(17),a=(n(31),n(45)),i=function(t,e,n,i,c){var o=t.ownerDocument.defaultView;return Object(a.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:function(t){return t.startX<=50&&e()},onStart:n,onMove:function(t){var e=t.deltaX/o.innerWidth;i(e)},onEnd:function(t){var e=t.deltaX,n=o.innerWidth,a=e/n,i=t.velocityX,s=n/2,u=i>=0&&(i>.2||t.deltaX>s),h=(u?1-a:a)*n,d=0;if(h>5){var l=h/Math.abs(i);d=Math.min(l,540)}c(u,a<=0?.01:Object(r.h)(0,a,.9999),d)}})}}}]);
//# sourceMappingURL=0.cb9e6b10.chunk.js.map