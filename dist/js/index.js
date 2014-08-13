!function(){"use strict";function a(){var a={"&":"&#38;","<":"&#60;",">":"&#62;",'"':"&#34;","'":"&#39;","/":"&#47;"},b=/&(?!#?\w+;)|<|>|"|'|\//g;return function(){return this?this.replace(b,function(b){return a[b]||b}):this}}function b(a,c,d){return("string"==typeof c?c:c.toString()).replace(a.define||g,function(b,c,e,f){return 0===c.indexOf("def.")&&(c=c.substring(4)),c in d||(":"===e?(a.defineParams&&f.replace(a.defineParams,function(a,b,e){d[c]={arg:b,text:e}}),c in d||(d[c]=f)):new Function("def","def['"+c+"']="+f)(d)),""}).replace(a.use||g,function(c,e){a.useParams&&(e=e.replace(a.useParams,function(a,b,c,e){if(d[c]&&d[c].arg&&e){var f=(c+":"+e).replace(/'|\\/g,"_");return d.__exp=d.__exp||{},d.__exp[f]=d[c].text.replace(new RegExp("(^|[^\\w$])"+d[c].arg+"([^\\w$])","g"),"$1"+e+"$2"),b+"def.__exp['"+f+"']"}}));var f=new Function("def","return "+e)(d);return f?b(a,f,d):f})}function c(a){return a.replace(/\\('|\\)/g,"$1").replace(/[\r\t\n]/g," ")}var d,e={version:"1.0.1",templateSettings:{evaluate:/\{\{([\s\S]+?(\}?)+)\}\}/g,interpolate:/\{\{=([\s\S]+?)\}\}/g,encode:/\{\{!([\s\S]+?)\}\}/g,use:/\{\{#([\s\S]+?)\}\}/g,useParams:/(^|[^\w$])def(?:\.|\[[\'\"])([\w$\.]+)(?:[\'\"]\])?\s*\:\s*([\w$\.]+|\"[^\"]+\"|\'[^\']+\'|\{[^\}]+\})/g,define:/\{\{##\s*([\w\.$]+)\s*(\:|=)([\s\S]+?)#\}\}/g,defineParams:/^\s*([\w$]+):([\s\S]+)/,conditional:/\{\{\?(\?)?\s*([\s\S]*?)\s*\}\}/g,iterate:/\{\{~\s*(?:\}\}|([\s\S]+?)\s*\:\s*([\w$]+)\s*(?:\:\s*([\w$]+))?\s*\}\})/g,varname:"it",strip:!0,append:!0,selfcontained:!1},template:void 0,compile:void 0};"undefined"!=typeof module&&module.exports?module.exports=e:"function"==typeof define&&define.amd?define(function(){return e}):(d=function(){return this||(0,eval)("this")}(),d.doT=e),String.prototype.encodeHTML=a();var f={append:{start:"'+(",end:")+'",endencode:"||'').toString().encodeHTML()+'"},split:{start:"';out+=(",end:");out+='",endencode:"||'').toString().encodeHTML();out+='"}},g=/$^/;e.template=function(d,h,i){h=h||e.templateSettings;var j,k,l=h.append?f.append:f.split,m=0,n=h.use||h.define?b(h,d,i||{}):d;n=("var out='"+(h.strip?n.replace(/(^|\r|\n)\t* +| +\t*(\r|\n|$)/g," ").replace(/\r|\n|\t|\/\*[\s\S]*?\*\//g,""):n).replace(/'|\\/g,"\\$&").replace(h.interpolate||g,function(a,b){return l.start+c(b)+l.end}).replace(h.encode||g,function(a,b){return j=!0,l.start+c(b)+l.endencode}).replace(h.conditional||g,function(a,b,d){return b?d?"';}else if("+c(d)+"){out+='":"';}else{out+='":d?"';if("+c(d)+"){out+='":"';}out+='"}).replace(h.iterate||g,function(a,b,d,e){return b?(m+=1,k=e||"i"+m,b=c(b),"';var arr"+m+"="+b+";if(arr"+m+"){var "+d+","+k+"=-1,l"+m+"=arr"+m+".length-1;while("+k+"<l"+m+"){"+d+"=arr"+m+"["+k+"+=1];out+='"):"';} } out+='"}).replace(h.evaluate||g,function(a,b){return"';"+c(b)+"out+='"})+"';return out;").replace(/\n/g,"\\n").replace(/\t/g,"\\t").replace(/\r/g,"\\r").replace(/(\s|;|\}|^|\{)out\+='';/g,"$1").replace(/\+''/g,"").replace(/(\s|;|\}|^|\{)out\+=''\+/g,"$1out+="),j&&h.selfcontained&&(n="String.prototype.encodeHTML=("+a.toString()+"());"+n);try{return new Function(h.varname,n)}catch(o){throw"undefined"!=typeof console&&console.log("Could not create a template function: "+n),o}},e.compile=function(a,b){return e.template(a,null,b)}}();var Zepto=function(){function a(a){return null==a?String(a):U[V.call(a)]||"object"}function b(b){return"function"==a(b)}function c(a){return null!=a&&a==a.window}function d(a){return null!=a&&a.nodeType==a.DOCUMENT_NODE}function e(b){return"object"==a(b)}function f(a){return e(a)&&!c(a)&&Object.getPrototypeOf(a)==Object.prototype}function g(a){return"number"==typeof a.length}function h(a){return D.call(a,function(a){return null!=a})}function i(a){return a.length>0?x.fn.concat.apply([],a):a}function j(a){return a.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}function k(a){return a in G?G[a]:G[a]=new RegExp("(^|\\s)"+a+"(\\s|$)")}function l(a,b){return"number"!=typeof b||H[j(a)]?b:b+"px"}function m(a){var b,c;return F[a]||(b=E.createElement(a),E.body.appendChild(b),c=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),"none"==c&&(c="block"),F[a]=c),F[a]}function n(a){return"children"in a?C.call(a.children):x.map(a.childNodes,function(a){return 1==a.nodeType?a:void 0})}function o(a,b,c){for(w in b)c&&(f(b[w])||Z(b[w]))?(f(b[w])&&!f(a[w])&&(a[w]={}),Z(b[w])&&!Z(a[w])&&(a[w]=[]),o(a[w],b[w],c)):b[w]!==v&&(a[w]=b[w])}function p(a,b){return null==b?x(a):x(a).filter(b)}function q(a,c,d,e){return b(c)?c.call(a,d,e):c}function r(a,b,c){null==c?a.removeAttribute(b):a.setAttribute(b,c)}function s(a,b){var c=a.className,d=c&&c.baseVal!==v;return b===v?d?c.baseVal:c:void(d?c.baseVal=b:a.className=b)}function t(a){var b;try{return a?"true"==a||("false"==a?!1:"null"==a?null:/^0/.test(a)||isNaN(b=Number(a))?/^[\[\{]/.test(a)?x.parseJSON(a):a:b):a}catch(c){return a}}function u(a,b){b(a);for(var c=0,d=a.childNodes.length;d>c;c++)u(a.childNodes[c],b)}var v,w,x,y,z,A,B=[],C=B.slice,D=B.filter,E=window.document,F={},G={},H={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},I=/^\s*<(\w+|!)[^>]*>/,J=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,K=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,L=/^(?:body|html)$/i,M=/([A-Z])/g,N=["val","css","html","text","data","width","height","offset"],O=["after","prepend","before","append"],P=E.createElement("table"),Q=E.createElement("tr"),R={tr:E.createElement("tbody"),tbody:P,thead:P,tfoot:P,td:Q,th:Q,"*":E.createElement("div")},S=/complete|loaded|interactive/,T=/^[\w-]*$/,U={},V=U.toString,W={},X=E.createElement("div"),Y={tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},Z=Array.isArray||function(a){return a instanceof Array};return W.matches=function(a,b){if(!b||!a||1!==a.nodeType)return!1;var c=a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.matchesSelector;if(c)return c.call(a,b);var d,e=a.parentNode,f=!e;return f&&(e=X).appendChild(a),d=~W.qsa(e,b).indexOf(a),f&&X.removeChild(a),d},z=function(a){return a.replace(/-+(.)?/g,function(a,b){return b?b.toUpperCase():""})},A=function(a){return D.call(a,function(b,c){return a.indexOf(b)==c})},W.fragment=function(a,b,c){var d,e,g;return J.test(a)&&(d=x(E.createElement(RegExp.$1))),d||(a.replace&&(a=a.replace(K,"<$1></$2>")),b===v&&(b=I.test(a)&&RegExp.$1),b in R||(b="*"),g=R[b],g.innerHTML=""+a,d=x.each(C.call(g.childNodes),function(){g.removeChild(this)})),f(c)&&(e=x(d),x.each(c,function(a,b){N.indexOf(a)>-1?e[a](b):e.attr(a,b)})),d},W.Z=function(a,b){return a=a||[],a.__proto__=x.fn,a.selector=b||"",a},W.isZ=function(a){return a instanceof W.Z},W.init=function(a,c){var d;if(!a)return W.Z();if("string"==typeof a)if(a=a.trim(),"<"==a[0]&&I.test(a))d=W.fragment(a,RegExp.$1,c),a=null;else{if(c!==v)return x(c).find(a);d=W.qsa(E,a)}else{if(b(a))return x(E).ready(a);if(W.isZ(a))return a;if(Z(a))d=h(a);else if(e(a))d=[a],a=null;else if(I.test(a))d=W.fragment(a.trim(),RegExp.$1,c),a=null;else{if(c!==v)return x(c).find(a);d=W.qsa(E,a)}}return W.Z(d,a)},x=function(a,b){return W.init(a,b)},x.extend=function(a){var b,c=C.call(arguments,1);return"boolean"==typeof a&&(b=a,a=c.shift()),c.forEach(function(c){o(a,c,b)}),a},W.qsa=function(a,b){var c,e="#"==b[0],f=!e&&"."==b[0],g=e||f?b.slice(1):b,h=T.test(g);return d(a)&&h&&e?(c=a.getElementById(g))?[c]:[]:1!==a.nodeType&&9!==a.nodeType?[]:C.call(h&&!e?f?a.getElementsByClassName(g):a.getElementsByTagName(b):a.querySelectorAll(b))},x.contains=function(a,b){return a!==b&&a.contains(b)},x.type=a,x.isFunction=b,x.isWindow=c,x.isArray=Z,x.isPlainObject=f,x.isEmptyObject=function(a){var b;for(b in a)return!1;return!0},x.inArray=function(a,b,c){return B.indexOf.call(b,a,c)},x.camelCase=z,x.trim=function(a){return null==a?"":String.prototype.trim.call(a)},x.uuid=0,x.support={},x.expr={},x.map=function(a,b){var c,d,e,f=[];if(g(a))for(d=0;d<a.length;d++)c=b(a[d],d),null!=c&&f.push(c);else for(e in a)c=b(a[e],e),null!=c&&f.push(c);return i(f)},x.each=function(a,b){var c,d;if(g(a)){for(c=0;c<a.length;c++)if(b.call(a[c],c,a[c])===!1)return a}else for(d in a)if(b.call(a[d],d,a[d])===!1)return a;return a},x.grep=function(a,b){return D.call(a,b)},window.JSON&&(x.parseJSON=JSON.parse),x.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){U["[object "+b+"]"]=b.toLowerCase()}),x.fn={forEach:B.forEach,reduce:B.reduce,push:B.push,sort:B.sort,indexOf:B.indexOf,concat:B.concat,map:function(a){return x(x.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return x(C.apply(this,arguments))},ready:function(a){return S.test(E.readyState)&&E.body?a(x):E.addEventListener("DOMContentLoaded",function(){a(x)},!1),this},get:function(a){return a===v?C.call(this):this[a>=0?a:a+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&&this.parentNode.removeChild(this)})},each:function(a){return B.every.call(this,function(b,c){return a.call(b,c,b)!==!1}),this},filter:function(a){return b(a)?this.not(this.not(a)):x(D.call(this,function(b){return W.matches(b,a)}))},add:function(a,b){return x(A(this.concat(x(a,b))))},is:function(a){return this.length>0&&W.matches(this[0],a)},not:function(a){var c=[];if(b(a)&&a.call!==v)this.each(function(b){a.call(this,b)||c.push(this)});else{var d="string"==typeof a?this.filter(a):g(a)&&b(a.item)?C.call(a):x(a);this.forEach(function(a){d.indexOf(a)<0&&c.push(a)})}return x(c)},has:function(a){return this.filter(function(){return e(a)?x.contains(this,a):x(this).find(a).size()})},eq:function(a){return-1===a?this.slice(a):this.slice(a,+a+1)},first:function(){var a=this[0];return a&&!e(a)?a:x(a)},last:function(){var a=this[this.length-1];return a&&!e(a)?a:x(a)},find:function(a){var b,c=this;return b=a?"object"==typeof a?x(a).filter(function(){var a=this;return B.some.call(c,function(b){return x.contains(b,a)})}):1==this.length?x(W.qsa(this[0],a)):this.map(function(){return W.qsa(this,a)}):[]},closest:function(a,b){var c=this[0],e=!1;for("object"==typeof a&&(e=x(a));c&&!(e?e.indexOf(c)>=0:W.matches(c,a));)c=c!==b&&!d(c)&&c.parentNode;return x(c)},parents:function(a){for(var b=[],c=this;c.length>0;)c=x.map(c,function(a){return(a=a.parentNode)&&!d(a)&&b.indexOf(a)<0?(b.push(a),a):void 0});return p(b,a)},parent:function(a){return p(A(this.pluck("parentNode")),a)},children:function(a){return p(this.map(function(){return n(this)}),a)},contents:function(){return this.map(function(){return C.call(this.childNodes)})},siblings:function(a){return p(this.map(function(a,b){return D.call(n(b.parentNode),function(a){return a!==b})}),a)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(a){return x.map(this,function(b){return b[a]})},show:function(){return this.each(function(){"none"==this.style.display&&(this.style.display=""),"none"==getComputedStyle(this,"").getPropertyValue("display")&&(this.style.display=m(this.nodeName))})},replaceWith:function(a){return this.before(a).remove()},wrap:function(a){var c=b(a);if(this[0]&&!c)var d=x(a).get(0),e=d.parentNode||this.length>1;return this.each(function(b){x(this).wrapAll(c?a.call(this,b):e?d.cloneNode(!0):d)})},wrapAll:function(a){if(this[0]){x(this[0]).before(a=x(a));for(var b;(b=a.children()).length;)a=b.first();x(a).append(this)}return this},wrapInner:function(a){var c=b(a);return this.each(function(b){var d=x(this),e=d.contents(),f=c?a.call(this,b):a;e.length?e.wrapAll(f):d.append(f)})},unwrap:function(){return this.parent().each(function(){x(this).replaceWith(x(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(a){return this.each(function(){var b=x(this);(a===v?"none"==b.css("display"):a)?b.show():b.hide()})},prev:function(a){return x(this.pluck("previousElementSibling")).filter(a||"*")},next:function(a){return x(this.pluck("nextElementSibling")).filter(a||"*")},html:function(a){return 0 in arguments?this.each(function(b){var c=this.innerHTML;x(this).empty().append(q(this,a,b,c))}):0 in this?this[0].innerHTML:null},text:function(a){return 0 in arguments?this.each(function(b){var c=q(this,a,b,this.textContent);this.textContent=null==c?"":""+c}):0 in this?this[0].textContent:null},attr:function(a,b){var c;return"string"==typeof a&&b===v?this.length&&1===this[0].nodeType?!(c=this[0].getAttribute(a))&&a in this[0]?this[0][a]:c:v:this.each(function(c){if(1===this.nodeType)if(e(a))for(w in a)r(this,w,a[w]);else r(this,a,q(this,b,c,this.getAttribute(a)))})},removeAttr:function(a){return this.each(function(){1===this.nodeType&&r(this,a)})},prop:function(a,b){return a=Y[a]||a,b===v?this[0]&&this[0][a]:this.each(function(c){this[a]=q(this,b,c,this[a])})},data:function(a,b){var c=this.attr("data-"+a.replace(M,"-$1").toLowerCase(),b);return null!==c?t(c):v},val:function(a){return 0 in arguments?this.each(function(b){this.value=q(this,a,b,this.value)}):this[0]&&(this[0].multiple?x(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(a){if(a)return this.each(function(b){var c=x(this),d=q(this,a,b,c.offset()),e=c.offsetParent().offset(),f={top:d.top-e.top,left:d.left-e.left};"static"==c.css("position")&&(f.position="relative"),c.css(f)});if(!this.length)return null;var b=this[0].getBoundingClientRect();return{left:b.left+window.pageXOffset,top:b.top+window.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(b,c){if(arguments.length<2){var d=this[0],e=getComputedStyle(d,"");if(!d)return;if("string"==typeof b)return d.style[z(b)]||e.getPropertyValue(b);if(Z(b)){var f={};return x.each(Z(b)?b:[b],function(a,b){f[b]=d.style[z(b)]||e.getPropertyValue(b)}),f}}var g="";if("string"==a(b))c||0===c?g=j(b)+":"+l(b,c):this.each(function(){this.style.removeProperty(j(b))});else for(w in b)b[w]||0===b[w]?g+=j(w)+":"+l(w,b[w])+";":this.each(function(){this.style.removeProperty(j(w))});return this.each(function(){this.style.cssText+=";"+g})},index:function(a){return a?this.indexOf(x(a)[0]):this.parent().children().indexOf(this[0])},hasClass:function(a){return a?B.some.call(this,function(a){return this.test(s(a))},k(a)):!1},addClass:function(a){return a?this.each(function(b){y=[];var c=s(this),d=q(this,a,b,c);d.split(/\s+/g).forEach(function(a){x(this).hasClass(a)||y.push(a)},this),y.length&&s(this,c+(c?" ":"")+y.join(" "))}):this},removeClass:function(a){return this.each(function(b){return a===v?s(this,""):(y=s(this),q(this,a,b,y).split(/\s+/g).forEach(function(a){y=y.replace(k(a)," ")}),void s(this,y.trim()))})},toggleClass:function(a,b){return a?this.each(function(c){var d=x(this),e=q(this,a,c,s(this));e.split(/\s+/g).forEach(function(a){(b===v?!d.hasClass(a):b)?d.addClass(a):d.removeClass(a)})}):this},scrollTop:function(a){if(this.length){var b="scrollTop"in this[0];return a===v?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=a}:function(){this.scrollTo(this.scrollX,a)})}},scrollLeft:function(a){if(this.length){var b="scrollLeft"in this[0];return a===v?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=a}:function(){this.scrollTo(a,this.scrollY)})}},position:function(){if(this.length){var a=this[0],b=this.offsetParent(),c=this.offset(),d=L.test(b[0].nodeName)?{top:0,left:0}:b.offset();return c.top-=parseFloat(x(a).css("margin-top"))||0,c.left-=parseFloat(x(a).css("margin-left"))||0,d.top+=parseFloat(x(b[0]).css("border-top-width"))||0,d.left+=parseFloat(x(b[0]).css("border-left-width"))||0,{top:c.top-d.top,left:c.left-d.left}}},offsetParent:function(){return this.map(function(){for(var a=this.offsetParent||E.body;a&&!L.test(a.nodeName)&&"static"==x(a).css("position");)a=a.offsetParent;return a})}},x.fn.detach=x.fn.remove,["width","height"].forEach(function(a){var b=a.replace(/./,function(a){return a[0].toUpperCase()});x.fn[a]=function(e){var f,g=this[0];return e===v?c(g)?g["inner"+b]:d(g)?g.documentElement["scroll"+b]:(f=this.offset())&&f[a]:this.each(function(b){g=x(this),g.css(a,q(this,e,b,g[a]()))})}}),O.forEach(function(b,c){var d=c%2;x.fn[b]=function(){var b,e,f=x.map(arguments,function(c){return b=a(c),"object"==b||"array"==b||null==c?c:W.fragment(c)}),g=this.length>1;return f.length<1?this:this.each(function(a,b){e=d?b:b.parentNode,b=0==c?b.nextSibling:1==c?b.firstChild:2==c?b:null;var h=E.documentElement.contains(e);f.forEach(function(a){if(g)a=a.cloneNode(!0);else if(!e)return x(a).remove();e.insertBefore(a,b),h&&u(a,function(a){null==a.nodeName||"SCRIPT"!==a.nodeName.toUpperCase()||a.type&&"text/javascript"!==a.type||a.src||window.eval.call(window,a.innerHTML)})})})},x.fn[d?b+"To":"insert"+(c?"Before":"After")]=function(a){return x(a)[b](this),this}}),W.Z.prototype=x.fn,W.uniq=A,W.deserializeValue=t,x.zepto=W,x}();window.Zepto=Zepto,void 0===window.$&&(window.$=Zepto),function(a){function b(b,d){var i=b[h],j=i&&e[i];if(void 0===d)return j||c(b);if(j){if(d in j)return j[d];var k=g(d);if(k in j)return j[k]}return f.call(a(b),d)}function c(b,c,f){var i=b[h]||(b[h]=++a.uuid),j=e[i]||(e[i]=d(b));return void 0!==c&&(j[g(c)]=f),j}function d(b){var c={};return a.each(b.attributes||i,function(b,d){0==d.name.indexOf("data-")&&(c[g(d.name.replace("data-",""))]=a.zepto.deserializeValue(d.value))}),c}var e={},f=a.fn.data,g=a.camelCase,h=a.expando="Zepto"+ +new Date,i=[];a.fn.data=function(d,e){return void 0===e?a.isPlainObject(d)?this.each(function(b,e){a.each(d,function(a,b){c(e,a,b)})}):0 in this?b(this[0],d):void 0:this.each(function(){c(this,d,e)})},a.fn.removeData=function(b){return"string"==typeof b&&(b=b.split(/\s+/)),this.each(function(){var c=this[h],d=c&&e[c];d&&a.each(b||d,function(a){delete d[b?g(this):a]})})},["remove","empty"].forEach(function(b){var c=a.fn[b];a.fn[b]=function(){var a=this.find("*");return"remove"===b&&(a=a.add(this)),a.removeData(),c.call(this)}})}(Zepto),function(a){function b(a){return a._zid||(a._zid=m++)}function c(a,c,f,g){if(c=d(c),c.ns)var h=e(c.ns);return(q[b(a)]||[]).filter(function(a){return!(!a||c.e&&a.e!=c.e||c.ns&&!h.test(a.ns)||f&&b(a.fn)!==b(f)||g&&a.sel!=g)})}function d(a){var b=(""+a).split(".");return{e:b[0],ns:b.slice(1).sort().join(" ")}}function e(a){return new RegExp("(?:^| )"+a.replace(" "," .* ?")+"(?: |$)")}function f(a,b){return a.del&&!s&&a.e in t||!!b}function g(a){return u[a]||s&&t[a]||a}function h(c,e,h,i,k,m,n){var o=b(c),p=q[o]||(q[o]=[]);e.split(/\s/).forEach(function(b){if("ready"==b)return a(document).ready(h);var e=d(b);e.fn=h,e.sel=k,e.e in u&&(h=function(b){var c=b.relatedTarget;return!c||c!==this&&!a.contains(this,c)?e.fn.apply(this,arguments):void 0}),e.del=m;var o=m||h;e.proxy=function(a){if(a=j(a),!a.isImmediatePropagationStopped()){a.data=i;var b=o.apply(c,a._args==l?[a]:[a].concat(a._args));return b===!1&&(a.preventDefault(),a.stopPropagation()),b}},e.i=p.length,p.push(e),"addEventListener"in c&&c.addEventListener(g(e.e),e.proxy,f(e,n))})}function i(a,d,e,h,i){var j=b(a);(d||"").split(/\s/).forEach(function(b){c(a,b,e,h).forEach(function(b){delete q[j][b.i],"removeEventListener"in a&&a.removeEventListener(g(b.e),b.proxy,f(b,i))})})}function j(b,c){return(c||!b.isDefaultPrevented)&&(c||(c=b),a.each(y,function(a,d){var e=c[a];b[a]=function(){return this[d]=v,e&&e.apply(c,arguments)},b[d]=w}),(c.defaultPrevented!==l?c.defaultPrevented:"returnValue"in c?c.returnValue===!1:c.getPreventDefault&&c.getPreventDefault())&&(b.isDefaultPrevented=v)),b}function k(a){var b,c={originalEvent:a};for(b in a)x.test(b)||a[b]===l||(c[b]=a[b]);return j(c,a)}var l,m=1,n=Array.prototype.slice,o=a.isFunction,p=function(a){return"string"==typeof a},q={},r={},s="onfocusin"in window,t={focus:"focusin",blur:"focusout"},u={mouseenter:"mouseover",mouseleave:"mouseout"};r.click=r.mousedown=r.mouseup=r.mousemove="MouseEvents",a.event={add:h,remove:i},a.proxy=function(c,d){if(o(c)){var e=function(){return c.apply(d,arguments)};return e._zid=b(c),e}if(p(d))return a.proxy(c[d],c);throw new TypeError("expected function")},a.fn.bind=function(a,b,c){return this.on(a,b,c)},a.fn.unbind=function(a,b){return this.off(a,b)},a.fn.one=function(a,b,c,d){return this.on(a,b,c,d,1)};var v=function(){return!0},w=function(){return!1},x=/^([A-Z]|returnValue$|layer[XY]$)/,y={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};a.fn.delegate=function(a,b,c){return this.on(b,a,c)},a.fn.undelegate=function(a,b,c){return this.off(b,a,c)},a.fn.live=function(b,c){return a(document.body).delegate(this.selector,b,c),this},a.fn.die=function(b,c){return a(document.body).undelegate(this.selector,b,c),this},a.fn.on=function(b,c,d,e,f){var g,j,m=this;return b&&!p(b)?(a.each(b,function(a,b){m.on(a,c,d,b,f)}),m):(p(c)||o(e)||e===!1||(e=d,d=c,c=l),(o(d)||d===!1)&&(e=d,d=l),e===!1&&(e=w),m.each(function(l,m){f&&(g=function(a){return i(m,a.type,e),e.apply(this,arguments)}),c&&(j=function(b){var d,f=a(b.target).closest(c,m).get(0);return f&&f!==m?(d=a.extend(k(b),{currentTarget:f,liveFired:m}),(g||e).apply(f,[d].concat(n.call(arguments,1)))):void 0}),h(m,b,e,d,c,j||g)}))},a.fn.off=function(b,c,d){var e=this;return b&&!p(b)?(a.each(b,function(a,b){e.off(a,c,b)}),e):(p(c)||o(d)||d===!1||(d=c,c=l),d===!1&&(d=w),e.each(function(){i(this,b,d,c)}))},a.fn.trigger=function(b,c){return b=p(b)||a.isPlainObject(b)?a.Event(b):j(b),b._args=c,this.each(function(){"dispatchEvent"in this?this.dispatchEvent(b):a(this).triggerHandler(b,c)})},a.fn.triggerHandler=function(b,d){var e,f;return this.each(function(g,h){e=k(p(b)?a.Event(b):b),e._args=d,e.target=h,a.each(c(h,b.type||b),function(a,b){return f=b.proxy(e),e.isImmediatePropagationStopped()?!1:void 0})}),f},"focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.trigger(b)}}),["focus","blur"].forEach(function(b){a.fn[b]=function(a){return a?this.bind(b,a):this.each(function(){try{this[b]()}catch(a){}}),this}}),a.Event=function(a,b){p(a)||(b=a,a=b.type);var c=document.createEvent(r[a]||"Events"),d=!0;if(b)for(var e in b)"bubbles"==e?d=!!b[e]:c[e]=b[e];return c.initEvent(a,d,!0),j(c)}}(Zepto),Zepto(function(a){var b=doT.compile(["{{~it.datas :q:k}}",'<div class="question-wrapper col-md-6 col-md-offset-3 hide" id="num-{{=q.num}}">','<p class="question">',"{{=q.question}}","</p>",'<div class="answer">',"{{~q.btns :v:i}}",'<button type="button" data-action="{{=v.action}}" data-target="{{=v.target}}" class="btn btn-primary btn-lg btn-block btn-choose">{{=v.text}}</button>',"{{~}}","{{?k !== 0}}",'<button type="button" class="btn btn-back btn-lg">返回</button>',"{{?}}","</div>",'<div class="ad">','<img src="{{=q.ad}}" alt="面包">',"</div>","</div>","{{~}}"].join("")),c="吃西瓜喜欢这样吃,口香糖一次吃,喝饮料时这样,喜欢这样对待塑料上的小泡泡,喜欢这样的位置,看到反光的东西第一反应是, 被蚊子咬了个包的反应是,一个人喝酸奶时,在陌生人面前与在熟悉人面前，你的表现差异大吗？,如果要买夜宵给男友，你会买什么？,你因为工作的事情而经常熬夜吗？,早餐和下午茶最喜欢？".split(","),d="A 直接用勺子挖,B 切成片,C 做成西瓜汁;A 一颗,B 两颗,C 三颗;A 拧开直接喝,B 用吸管,C 边吸边咬;A 一个个捏破,B 两个两个按破,C 直接无视;A 靠中间,B 靠窗,C 靠墙;A 扭头闪,B 想照,C 好喜欢;A 抓破,B 涂止痒水,C 掐“十”字;A 舔干净塑料纸,B 用勺子代替吸管,C 倒在杯子里喝;A 是的，很大,B 有点,C 没什么差异;A 奶黄小餐包,B 饼干,C 粥;A 有过，但不经常,B 经常,C 从不熬夜;A 奶黄小餐包,B 草莓奶油卷,C 玛格丽特饼干".split(";"),e="3,2,4;3,4,6;5,7,6;8,9,7;6,9,8;9,8,7;8,9,10;10,9,6;10,12,11;A,11,12;C,12,A;B,D,E".split(";"),f="标准硬妹子, 你是一个内心强大的女生，浑身上下透着一种霸气，让人无法直视，给人一种震慑感。过去的日子你并不是一张白纸，经历过种种坎坷与波折，追求过梦想，虽然失败了，但依然顽强地存活在世间，见的极品多了，你自然淡定，阅的风景多了，你也不会狂喜。因此当你把心态修练得十分平和的时候，你也就达到了那种“无欲则刚”的境界。作为一名硬妹子，你充满的是正能量，尽管你在最初的时候十分脆弱，需要别人保护，但渐渐地，你成为了保护别人的妹子。; 标准软妹子, 作为浪漫派的女生，你给人一种很标准软妹子的感觉。你很善良也很单纯，别人跟你一起总会感觉到很舒心，你不喜欢让人出丑，也不喜欢去逼迫别人做一些事情。你有很多的幻想，尽管那都是不切实际的，但事实上浪漫是生活的一种格调，也因如此，你让人觉得你特别不同。自然，也不忍心去伤害你。作为一个名副其实的软妹子，你有时候也会犯犯迷糊，经常不着边际，偶尔还会因为感情问题迷失方向，但那并不要紧，因为，软妹子都是会成长的，只是还没到时候。; 外软内硬, 有的软妹子，满脑子都是不切实际的想法，同样，你也有很多想法，但是显然你不是标准意义上的软妹子。因为你的想法是你所要实现的目标。尽管你的外表看起来很像软妹子，也让人想要好好地守护着，但是其实你的内心是很强大的。因为有了心中的向往，所以你会朝着这个目标奋斗，这恰恰能反映一个人内心的强大。作为一个外表看起来是软妹子，内心住着一个硬妹子的人，有时候你也会觉得有些无奈，但是慢慢地，你也习惯了这种“表里不一”。; 外硬内软, 生活中的你，给人一种很强大的感觉，不仅从你的外表，包括说话的语气，言语的逻辑，眼神的坚定中看得出来，在你一个人独处的时候，你也会让人觉得你一个人也可以过得很好。但其实，你的内心是柔软的，一个人的时候也会默默地哭，也会因为一些难过的坎而没有办法做到十分地放得开，你也想要有人在你身边守护着你……你坚信着一个人的时候，多读些好书，多多去旅游见见世面，多与不同的人交流，人总能在这之中收获到不少好东西。你是一个外硬内软的妹子，毋庸置疑。; 时硬时软, 你是一个挺性情的人哦，平时也喜欢自由的环境，自由地表达情绪，自由地做自己想做的事情。你的情绪是多变的，有时候给人一种柔弱的感觉，有的时候也给人很强势的印象。可能有一段时间你讨厌这样的自己，不能稳固如一。但慢慢地你已经接受了这样的事实，那就是，作为一个妹子，你有时候可以是软妹子，有时候也可以变身成为硬气女生。不管哪一个，都是你。不过，你也是慢慢地修炼你的内心，力求一直可以坚强、稳定，而不是耍小女人脾气。".split(";"),g={A:0,B:1,C:2,D:3,E:4},h={datas:[]};c.forEach(function(a,b){var c=d[b].split(","),f=e[b].split(","),g={num:b+1,question:a,ad:"/img/bread_"+b%8+".jpg",btns:[]},i=/\d/;f.forEach(function(a,b){g.btns.push({action:i.test(a)?"jump":"result",text:c[b],target:a})}),h.datas.push(g)}),a("#content").append(b(h)).on("click",".btn-choose",function(){var b,c,d=a(this),e=d.data("action"),h=d.data("target");"jump"===e?(b=d.closest(".question-wrapper").addClass("hide"),a("#num-"+h).removeClass("hide").find(".btn-back").data("back",b.attr("id"))):(b=d.closest(".question-wrapper").addClass("hide"),c=f[g[h]].split(","),a("#result").removeClass("hide").find(".caption").html(c[0]),a("#result").find(".desc").html(c[1]),a("#result").find(".ad img").attr("src","/img/bread_"+(new Date).getTime()%8+".jpg"),window.shareText="【软妹子测试】我居然是个 "+c[0])}).on("click",".btn-back",function(){var b=a(this),c=b.data("back");b.closest(".question-wrapper").addClass("hide"),a("#"+c).removeClass("hide")}).on("click",".btn-share",function(){a("#share").removeClass("hide")}).on("click",".btn-test-again",function(){a("#result").addClass("hide"),a("#num-1").removeClass("hide")}).on("click",".btn-start",function(){a("#num-1").removeClass("hide"),a("#start").addClass("hide")}),a("#share").on("click",function(){a(this).addClass("hide")})}),WeixinApi.ready(function(a){var b={appId:"",imgUrl:"http://182.92.193.153:4000/img/avatar.png?time=4",link:"http://182.92.193.153:4000",desc:"三分钟测出你和软妹子的直接距离！！！准到爆！！！",title:"软妹子测试"},c={ready:function(){b.desc=window.shareText||"三分钟测出你和软妹子的直接距离！！！准到爆！！！"},cancel:function(){},fail:function(){},confirm:function(){},all:function(){}};a.shareToFriend(b,c),a.shareToTimeline(b,c),a.shareToWeibo(b,c)});