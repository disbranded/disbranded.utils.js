if(!disbranded){var disbranded={}}disbranded.ImageLoader=function(d){var s=[];var a={};var o=0;var v=false;var z=false;var l=0;var t=0;var A=null;var b=null;var c=null;var h=null;var p=null;var r=null;var u=null;var f=function(){return o++};var k=function(C){return Object.prototype.toString.apply(C)==="[object Array]"};var y=function(D,F,E){if(D&&typeof D==="string"){if(F&&typeof F==="string"){if(a[F]!==undefined){m(a[F].src,F)}}else{F="__auto_unique_id-"+f()}t+=1;var C={img:new Image(),src:D,id:F,complete:false};s[E](C);a[C.id]=C}};var m=function(F){var E=/__auto_unique_id-/;for(var D=0,C=s.length;D<C;D++){if(F===s[D].id||(s[D].src===F&&E.test(s[D].id))){s[D].img.src="";s.splice(D,1);delete a[s[D].id];t-=1;break}}};var w=function(E,G,F){if(k(E)){for(var D=0,C=E.length;D<C;D++){y(E[D].src,E[D].id,F)}}else{y(E,G,F)}};var j=function(E){if(k(E)){for(var D=0,C=E.length;D<C;D++){m(E[D])}}else{m(E)}};var e=function(C){i(this,"abort")};var x=function(){i(this,"error")};var n=function(C){i(this,"load")};var i=function(E,D){var H;var F;for(var G=0,C=s.length;G<C;G++){if(E===s[G].img){H=s[G];F=G;break}}if(H===undefined){return}l+=1;switch(D){case"abort":if(e){e(H.id,F)}break;case"error":if(r){r(H.id,F)}break;case"load":H.complete=true;if(h){h(l,t)}if(b){b(E,H.id,F)}break}if(l===t){v=false;z=true;if(c){c()}}};var B=function(D){D=(typeof D==="object")?D:{};if(k(D.images)){w(D.images,null,"push")}if(D.onStart){g("start",D.onStart)}if(D.onChildComplete){g("childComplete",D.onChildComplete)}if(D.onComplete){g("complete",D.onComplete)}if(D.onProgress){g("progress",D.onProgress)}if(D.onAbort){g("abort",D.onAbort)}if(D.onError){g("error",D.onError)}if(D.onCancel){g("cancel",D.onCancel)}if(A){A()}l=0;for(var E=0,C=s.length;E<C;E++){if(s[E].complete){l+=1}else{s[E].img.onabort=e;s[E].img.onerror=x;s[E].img.onload=n;s[E].img.src=s[E].src}}v=l>0;z=l==0};var q=function(){for(var D=0,C=s.length;D<C;D++){if(!s[D].complete){s[D].img.src=""}}if(u){u()}};var g=function(D,C){if(typeof C!=="function"&&C!==null){return}switch(D){case"start":A=C;break;case"childComplete":b=C;break;case"complete":c=C;break;case"progress":h=C;break;case"abort":p=C;break;case"error":r=C;break;case"cancel":u=C;break;default:break}};if(typeof d!=="undefined"&&k(d.images)){B(d)}return{push:function(C,D){w(C,D,"push");return this},add:function(C,D){return this.push(C,D)},unshift:function(C,D){w(C,D,"unshift");return this},remove:function(C){j(C);return this},length:function(){return t},completeLength:function(){return l},loading:function(){return v},complete:function(){return z},load:function(C){B(C);return this},cancel:function(){q();return this},getImageById:function(D){if(a.hasOwnProperty(D)){var C=a[D];return{img:C.img,src:C.src,id:C.id,complete:C.complete}}return null},getImageByIndex:function(C){if(s.hasOwnProperty(C)){var D=s[C];return{img:D.img,src:D.src,id:D.id,complete:D.complete}}return null},setCallback:function(D,C){g(D,C);return this}}};disbranded.ImageLoader.load=function(a){return new disbranded.ImageLoader(a)};