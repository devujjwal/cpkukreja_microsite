/*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=c.slice,e=c.concat,f=c.push,g=c.indexOf,h={},i=h.toString,j=h.hasOwnProperty,k={},l=a.document,m="2.1.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return d.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:d.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a,b){return n.each(this,a,b)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(d.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){return!n.isArray(a)&&a-parseFloat(a)+1>=0},isPlainObject:function(a){return"object"!==n.type(a)||a.nodeType||n.isWindow(a)?!1:a.constructor&&!j.call(a.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?h[i.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=l.createElement("script"),b.text=a,l.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b,c){var d,e=0,f=a.length,g=s(a);if(c){if(g){for(;f>e;e++)if(d=b.apply(a[e],c),d===!1)break}else for(e in a)if(d=b.apply(a[e],c),d===!1)break}else if(g){for(;f>e;e++)if(d=b.call(a[e],e,a[e]),d===!1)break}else for(e in a)if(d=b.call(a[e],e,a[e]),d===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):f.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:g.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,f=0,g=a.length,h=s(a),i=[];if(h)for(;g>f;f++)d=b(a[f],f,c),null!=d&&i.push(d);else for(f in a)d=b(a[f],f,c),null!=d&&i.push(d);return e.apply([],i)},guid:1,proxy:function(a,b){var c,e,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(e=d.call(arguments,2),f=function(){return a.apply(b||this,e.concat(d.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:k}),n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(a,b){h["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:1===a.nodeType&&b?!0:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=hb(),z=hb(),A=hb(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N=M.replace("w","w#"),O="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+N+"))|)"+L+"*\\]",P=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+O+")*)|.*)\\)|)",Q=new RegExp(L+"+","g"),R=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),S=new RegExp("^"+L+"*,"+L+"*"),T=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),U=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),V=new RegExp(P),W=new RegExp("^"+N+"$"),X={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+O),PSEUDO:new RegExp("^"+P),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},Y=/^(?:input|select|textarea|button)$/i,Z=/^h\d$/i,$=/^[^{]+\{\s*\[native \w/,_=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ab=/[+~]/,bb=/'|\\/g,cb=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),db=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},eb=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(fb){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function gb(a,b,d,e){var f,h,j,k,l,o,r,s,w,x;if((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,d=d||[],k=b.nodeType,"string"!=typeof a||!a||1!==k&&9!==k&&11!==k)return d;if(!e&&p){if(11!==k&&(f=_.exec(a)))if(j=f[1]){if(9===k){if(h=b.getElementById(j),!h||!h.parentNode)return d;if(h.id===j)return d.push(h),d}else if(b.ownerDocument&&(h=b.ownerDocument.getElementById(j))&&t(b,h)&&h.id===j)return d.push(h),d}else{if(f[2])return H.apply(d,b.getElementsByTagName(a)),d;if((j=f[3])&&c.getElementsByClassName)return H.apply(d,b.getElementsByClassName(j)),d}if(c.qsa&&(!q||!q.test(a))){if(s=r=u,w=b,x=1!==k&&a,1===k&&"object"!==b.nodeName.toLowerCase()){o=g(a),(r=b.getAttribute("id"))?s=r.replace(bb,"\\$&"):b.setAttribute("id",s),s="[id='"+s+"'] ",l=o.length;while(l--)o[l]=s+rb(o[l]);w=ab.test(a)&&pb(b.parentNode)||b,x=o.join(",")}if(x)try{return H.apply(d,w.querySelectorAll(x)),d}catch(y){}finally{r||b.removeAttribute("id")}}}return i(a.replace(R,"$1"),b,d,e)}function hb(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ib(a){return a[u]=!0,a}function jb(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function kb(a,b){var c=a.split("|"),e=a.length;while(e--)d.attrHandle[c[e]]=b}function lb(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function mb(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function nb(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function ob(a){return ib(function(b){return b=+b,ib(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function pb(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=gb.support={},f=gb.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=gb.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=g.documentElement,e=g.defaultView,e&&e!==e.top&&(e.addEventListener?e.addEventListener("unload",eb,!1):e.attachEvent&&e.attachEvent("onunload",eb)),p=!f(g),c.attributes=jb(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=jb(function(a){return a.appendChild(g.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=$.test(g.getElementsByClassName),c.getById=jb(function(a){return o.appendChild(a).id=u,!g.getElementsByName||!g.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c&&c.parentNode?[c]:[]}},d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(cb,db);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=$.test(g.querySelectorAll))&&(jb(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\f]' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),jb(function(a){var b=g.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=$.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&jb(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",P)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=$.test(o.compareDocumentPosition),t=b||$.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===g||a.ownerDocument===v&&t(v,a)?-1:b===g||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,h=[a],i=[b];if(!e||!f)return a===g?-1:b===g?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return lb(a,b);c=a;while(c=c.parentNode)h.unshift(c);c=b;while(c=c.parentNode)i.unshift(c);while(h[d]===i[d])d++;return d?lb(h[d],i[d]):h[d]===v?-1:i[d]===v?1:0},g):n},gb.matches=function(a,b){return gb(a,null,null,b)},gb.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(U,"='$1']"),!(!c.matchesSelector||!p||r&&r.test(b)||q&&q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return gb(b,n,null,[a]).length>0},gb.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},gb.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},gb.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},gb.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=gb.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=gb.selectors={cacheLength:50,createPseudo:ib,match:X,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(cb,db),a[3]=(a[3]||a[4]||a[5]||"").replace(cb,db),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||gb.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&gb.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return X.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&V.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(cb,db).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=gb.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(Q," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h;if(q){if(f){while(p){l=b;while(l=l[p])if(h?l.nodeName.toLowerCase()===r:1===l.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){k=q[u]||(q[u]={}),j=k[a]||[],n=j[0]===w&&j[1],m=j[0]===w&&j[2],l=n&&q.childNodes[n];while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if(1===l.nodeType&&++m&&l===b){k[a]=[w,n,m];break}}else if(s&&(j=(b[u]||(b[u]={}))[a])&&j[0]===w)m=j[1];else while(l=++n&&l&&l[p]||(m=n=0)||o.pop())if((h?l.nodeName.toLowerCase()===r:1===l.nodeType)&&++m&&(s&&((l[u]||(l[u]={}))[a]=[w,m]),l===b))break;return m-=e,m===d||m%d===0&&m/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||gb.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ib(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ib(function(a){var b=[],c=[],d=h(a.replace(R,"$1"));return d[u]?ib(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ib(function(a){return function(b){return gb(a,b).length>0}}),contains:ib(function(a){return a=a.replace(cb,db),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ib(function(a){return W.test(a||"")||gb.error("unsupported lang: "+a),a=a.replace(cb,db).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Z.test(a.nodeName)},input:function(a){return Y.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:ob(function(){return[0]}),last:ob(function(a,b){return[b-1]}),eq:ob(function(a,b,c){return[0>c?c+b:c]}),even:ob(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:ob(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:ob(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:ob(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=mb(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=nb(b);function qb(){}qb.prototype=d.filters=d.pseudos,d.setFilters=new qb,g=gb.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){(!c||(e=S.exec(h)))&&(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=T.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(R," ")}),h=h.slice(c.length));for(g in d.filter)!(e=X[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?gb.error(a):z(a,i).slice(0)};function rb(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function sb(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(i=b[u]||(b[u]={}),(h=i[d])&&h[0]===w&&h[1]===f)return j[2]=h[2];if(i[d]=j,j[2]=a(b,c,g))return!0}}}function tb(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ub(a,b,c){for(var d=0,e=b.length;e>d;d++)gb(a,b[d],c);return c}function vb(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(!c||c(f,d,e))&&(g.push(f),j&&b.push(h));return g}function wb(a,b,c,d,e,f){return d&&!d[u]&&(d=wb(d)),e&&!e[u]&&(e=wb(e,f)),ib(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ub(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:vb(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=vb(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=vb(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function xb(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=sb(function(a){return a===b},h,!0),l=sb(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[sb(tb(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return wb(i>1&&tb(m),i>1&&rb(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(R,"$1"),c,e>i&&xb(a.slice(i,e)),f>e&&xb(a=a.slice(e)),f>e&&rb(a))}m.push(c)}return tb(m)}function yb(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,m,o,p=0,q="0",r=f&&[],s=[],t=j,u=f||e&&d.find.TAG("*",k),v=w+=null==t?1:Math.random()||.1,x=u.length;for(k&&(j=g!==n&&g);q!==x&&null!=(l=u[q]);q++){if(e&&l){m=0;while(o=a[m++])if(o(l,g,h)){i.push(l);break}k&&(w=v)}c&&((l=!o&&l)&&p--,f&&r.push(l))}if(p+=q,c&&q!==p){m=0;while(o=b[m++])o(r,s,g,h);if(f){if(p>0)while(q--)r[q]||s[q]||(s[q]=F.call(i));s=vb(s)}H.apply(i,s),k&&!f&&s.length>0&&p+b.length>1&&gb.uniqueSort(i)}return k&&(w=v,j=t),r};return c?ib(f):f}return h=gb.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=xb(b[c]),f[u]?d.push(f):e.push(f);f=A(a,yb(e,d)),f.selector=a}return f},i=gb.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(cb,db),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=X.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(cb,db),ab.test(j[0].type)&&pb(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&rb(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,ab.test(a)&&pb(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=jb(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),jb(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||kb("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&jb(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||kb("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),jb(function(a){return null==a.getAttribute("disabled")})||kb(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),gb}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=n.expr.match.needsContext,v=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,w=/^.[^:#\[\.,]*$/;function x(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(w.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return g.call(b,a)>=0!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(x(this,a||[],!1))},not:function(a){return this.pushStack(x(this,a||[],!0))},is:function(a){return!!x(this,"string"==typeof a&&u.test(a)?n(a):a||[],!1).length}});var y,z=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,A=n.fn.init=function(a,b){var c,d;if(!a)return this;if("string"==typeof a){if(c="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:z.exec(a),!c||!c[1]&&b)return!b||b.jquery?(b||y).find(a):this.constructor(b).find(a);if(c[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(c[1],b&&b.nodeType?b.ownerDocument||b:l,!0)),v.test(c[1])&&n.isPlainObject(b))for(c in b)n.isFunction(this[c])?this[c](b[c]):this.attr(c,b[c]);return this}return d=l.getElementById(c[2]),d&&d.parentNode&&(this.length=1,this[0]=d),this.context=l,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?"undefined"!=typeof y.ready?y.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};A.prototype=n.fn,y=n(l);var B=/^(?:parents|prev(?:Until|All))/,C={children:!0,contents:!0,next:!0,prev:!0};n.extend({dir:function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},sibling:function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c}}),n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=u.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.unique(f):f)},index:function(a){return a?"string"==typeof a?g.call(n(a),this[0]):g.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.unique(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function D(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return n.dir(a,"parentNode")},parentsUntil:function(a,b,c){return n.dir(a,"parentNode",c)},next:function(a){return D(a,"nextSibling")},prev:function(a){return D(a,"previousSibling")},nextAll:function(a){return n.dir(a,"nextSibling")},prevAll:function(a){return n.dir(a,"previousSibling")},nextUntil:function(a,b,c){return n.dir(a,"nextSibling",c)},prevUntil:function(a,b,c){return n.dir(a,"previousSibling",c)},siblings:function(a){return n.sibling((a.parentNode||{}).firstChild,a)},children:function(a){return n.sibling(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(C[a]||n.unique(e),B.test(a)&&e.reverse()),this.pushStack(e)}});var E=/\S+/g,F={};function G(a){var b=F[a]={};return n.each(a.match(E)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?F[a]||G(a):n.extend({},a);var b,c,d,e,f,g,h=[],i=!a.once&&[],j=function(l){for(b=a.memory&&l,c=!0,g=e||0,e=0,f=h.length,d=!0;h&&f>g;g++)if(h[g].apply(l[0],l[1])===!1&&a.stopOnFalse){b=!1;break}d=!1,h&&(i?i.length&&j(i.shift()):b?h=[]:k.disable())},k={add:function(){if(h){var c=h.length;!function g(b){n.each(b,function(b,c){var d=n.type(c);"function"===d?a.unique&&k.has(c)||h.push(c):c&&c.length&&"string"!==d&&g(c)})}(arguments),d?f=h.length:b&&(e=c,j(b))}return this},remove:function(){return h&&n.each(arguments,function(a,b){var c;while((c=n.inArray(b,h,c))>-1)h.splice(c,1),d&&(f>=c&&f--,g>=c&&g--)}),this},has:function(a){return a?n.inArray(a,h)>-1:!(!h||!h.length)},empty:function(){return h=[],f=0,this},disable:function(){return h=i=b=void 0,this},disabled:function(){return!h},lock:function(){return i=void 0,b||k.disable(),this},locked:function(){return!i},fireWith:function(a,b){return!h||c&&!i||(b=b||[],b=[a,b.slice?b.slice():b],d?i.push(b):j(b)),this},fire:function(){return k.fireWith(this,arguments),this},fired:function(){return!!c}};return k},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().done(c.resolve).fail(c.reject).progress(c.notify):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=d.call(arguments),e=c.length,f=1!==e||a&&n.isFunction(a.promise)?e:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(e){b[a]=this,c[a]=arguments.length>1?d.call(arguments):e,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(e>1)for(i=new Array(e),j=new Array(e),k=new Array(e);e>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().done(h(b,k,c)).fail(g.reject).progress(h(b,j,i)):--f;return f||g.resolveWith(k,c),g.promise()}});var H;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(H.resolveWith(l,[n]),n.fn.triggerHandler&&(n(l).triggerHandler("ready"),n(l).off("ready"))))}});function I(){l.removeEventListener("DOMContentLoaded",I,!1),a.removeEventListener("load",I,!1),n.ready()}n.ready.promise=function(b){return H||(H=n.Deferred(),"complete"===l.readyState?setTimeout(n.ready):(l.addEventListener("DOMContentLoaded",I,!1),a.addEventListener("load",I,!1))),H.promise(b)},n.ready.promise();var J=n.access=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)n.access(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f};n.acceptData=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function K(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=n.expando+K.uid++}K.uid=1,K.accepts=n.acceptData,K.prototype={key:function(a){if(!K.accepts(a))return 0;var b={},c=a[this.expando];if(!c){c=K.uid++;try{b[this.expando]={value:c},Object.defineProperties(a,b)}catch(d){b[this.expando]=c,n.extend(a,b)}}return this.cache[c]||(this.cache[c]={}),c},set:function(a,b,c){var d,e=this.key(a),f=this.cache[e];if("string"==typeof b)f[b]=c;else if(n.isEmptyObject(f))n.extend(this.cache[e],b);else for(d in b)f[d]=b[d];return f},get:function(a,b){var c=this.cache[this.key(a)];return void 0===b?c:c[b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=this.key(a),g=this.cache[f];if(void 0===b)this.cache[f]={};else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in g?d=[b,e]:(d=e,d=d in g?[d]:d.match(E)||[])),c=d.length;while(c--)delete g[d[c]]}},hasData:function(a){return!n.isEmptyObject(this.cache[a[this.expando]]||{})},discard:function(a){a[this.expando]&&delete this.cache[a[this.expando]]}};var L=new K,M=new K,N=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,O=/([A-Z])/g;function P(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(O,"-$1").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:N.test(c)?n.parseJSON(c):c}catch(e){}M.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return M.hasData(a)||L.hasData(a)},data:function(a,b,c){return M.access(a,b,c)
},removeData:function(a,b){M.remove(a,b)},_data:function(a,b,c){return L.access(a,b,c)},_removeData:function(a,b){L.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=M.get(f),1===f.nodeType&&!L.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),P(f,d,e[d])));L.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){M.set(this,a)}):J(this,function(b){var c,d=n.camelCase(a);if(f&&void 0===b){if(c=M.get(f,a),void 0!==c)return c;if(c=M.get(f,d),void 0!==c)return c;if(c=P(f,d,void 0),void 0!==c)return c}else this.each(function(){var c=M.get(this,d);M.set(this,d,b),-1!==a.indexOf("-")&&void 0!==c&&M.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){M.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=L.get(a,b),c&&(!d||n.isArray(c)?d=L.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return L.get(a,c)||L.access(a,c,{empty:n.Callbacks("once memory").add(function(){L.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=L.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var Q=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,R=["Top","Right","Bottom","Left"],S=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)},T=/^(?:checkbox|radio)$/i;!function(){var a=l.createDocumentFragment(),b=a.appendChild(l.createElement("div")),c=l.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),k.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",k.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var U="undefined";k.focusinBubbles="onfocusin"in a;var V=/^key/,W=/^(?:mouse|pointer|contextmenu)|click/,X=/^(?:focusinfocus|focusoutblur)$/,Y=/^([^.]*)(?:\.(.+)|)$/;function Z(){return!0}function $(){return!1}function _(){try{return l.activeElement}catch(a){}}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return typeof n!==U&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(E)||[""],j=b.length;while(j--)h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g,!1)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=L.hasData(a)&&L.get(a);if(r&&(i=r.events)){b=(b||"").match(E)||[""],j=b.length;while(j--)if(h=Y.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&(delete r.handle,L.remove(a,"events"))}},trigger:function(b,c,d,e){var f,g,h,i,k,m,o,p=[d||l],q=j.call(b,"type")?b.type:b,r=j.call(b,"namespace")?b.namespace.split("."):[];if(g=h=d=d||l,3!==d.nodeType&&8!==d.nodeType&&!X.test(q+n.event.triggered)&&(q.indexOf(".")>=0&&(r=q.split("."),q=r.shift(),r.sort()),k=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=e?2:3,b.namespace=r.join("."),b.namespace_re=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=d),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},e||!o.trigger||o.trigger.apply(d,c)!==!1)){if(!e&&!o.noBubble&&!n.isWindow(d)){for(i=o.delegateType||q,X.test(i+q)||(g=g.parentNode);g;g=g.parentNode)p.push(g),h=g;h===(d.ownerDocument||l)&&p.push(h.defaultView||h.parentWindow||a)}f=0;while((g=p[f++])&&!b.isPropagationStopped())b.type=f>1?i:o.bindType||q,m=(L.get(g,"events")||{})[b.type]&&L.get(g,"handle"),m&&m.apply(g,c),m=k&&g[k],m&&m.apply&&n.acceptData(g)&&(b.result=m.apply(g,c),b.result===!1&&b.preventDefault());return b.type=q,e||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!n.acceptData(d)||k&&n.isFunction(d[q])&&!n.isWindow(d)&&(h=d[k],h&&(d[k]=null),n.event.triggered=q,d[q](),n.event.triggered=void 0,h&&(d[k]=h)),b.result}},dispatch:function(a){a=n.event.fix(a);var b,c,e,f,g,h=[],i=d.call(arguments),j=(L.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())(!a.namespace_re||a.namespace_re.test(g.namespace))&&(a.handleObj=g,a.data=g.data,e=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(a.result=e)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&(!a.button||"click"!==a.type))for(;i!==this;i=i.parentNode||this)if(i.disabled!==!0||"click"!==a.type){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>=0:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,d,e,f=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||l,d=c.documentElement,e=c.body,a.pageX=b.clientX+(d&&d.scrollLeft||e&&e.scrollLeft||0)-(d&&d.clientLeft||e&&e.clientLeft||0),a.pageY=b.clientY+(d&&d.scrollTop||e&&e.scrollTop||0)-(d&&d.clientTop||e&&e.clientTop||0)),a.which||void 0===f||(a.which=1&f?1:2&f?3:4&f?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,d,e=a.type,f=a,g=this.fixHooks[e];g||(this.fixHooks[e]=g=W.test(e)?this.mouseHooks:V.test(e)?this.keyHooks:{}),d=g.props?this.props.concat(g.props):this.props,a=new n.Event(f),b=d.length;while(b--)c=d[b],a[c]=f[c];return a.target||(a.target=l),3===a.target.nodeType&&(a.target=a.target.parentNode),g.filter?g.filter(a,f):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==_()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===_()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}},simulate:function(a,b,c,d){var e=n.extend(new n.Event,c,{type:a,isSimulated:!0,originalEvent:{}});d?n.event.trigger(e,null,b):n.event.dispatch.call(b,e),e.isDefaultPrevented()&&c.preventDefault()}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c,!1)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?Z:$):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={isDefaultPrevented:$,isPropagationStopped:$,isImmediatePropagationStopped:$,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=Z,a&&a.preventDefault&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=Z,a&&a.stopPropagation&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=Z,a&&a.stopImmediatePropagation&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return(!e||e!==d&&!n.contains(d,e))&&(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),k.focusinBubbles||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a),!0)};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=L.access(d,b);e||d.addEventListener(a,c,!0),L.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=L.access(d,b)-1;e?L.access(d,b,e):(d.removeEventListener(a,c,!0),L.remove(d,b))}}}),n.fn.extend({on:function(a,b,c,d,e){var f,g;if("object"==typeof a){"string"!=typeof b&&(c=c||b,b=void 0);for(g in a)this.on(g,b,c,a[g],e);return this}if(null==c&&null==d?(d=b,c=b=void 0):null==d&&("string"==typeof b?(d=c,c=void 0):(d=c,c=b,b=void 0)),d===!1)d=$;else if(!d)return this;return 1===e&&(f=d,d=function(a){return n().off(a),f.apply(this,arguments)},d.guid=f.guid||(f.guid=n.guid++)),this.each(function(){n.event.add(this,a,d,c,b)})},one:function(a,b,c,d){return this.on(a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return(b===!1||"function"==typeof b)&&(c=b,b=void 0),c===!1&&(c=$),this.each(function(){n.event.remove(this,a,c,b)})},trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}});var ab=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,bb=/<([\w:]+)/,cb=/<|&#?\w+;/,db=/<(?:script|style|link)/i,eb=/checked\s*(?:[^=]|=\s*.checked.)/i,fb=/^$|\/(?:java|ecma)script/i,gb=/^true\/(.*)/,hb=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,ib={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ib.optgroup=ib.option,ib.tbody=ib.tfoot=ib.colgroup=ib.caption=ib.thead,ib.th=ib.td;function jb(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function kb(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function lb(a){var b=gb.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function mb(a,b){for(var c=0,d=a.length;d>c;c++)L.set(a[c],"globalEval",!b||L.get(b[c],"globalEval"))}function nb(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(L.hasData(a)&&(f=L.access(a),g=L.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}M.hasData(a)&&(h=M.access(a),i=n.extend({},h),M.set(b,i))}}function ob(a,b){var c=a.getElementsByTagName?a.getElementsByTagName(b||"*"):a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function pb(a,b){var c=b.nodeName.toLowerCase();"input"===c&&T.test(a.type)?b.checked=a.checked:("input"===c||"textarea"===c)&&(b.defaultValue=a.defaultValue)}n.extend({clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(k.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=ob(h),f=ob(a),d=0,e=f.length;e>d;d++)pb(f[d],g[d]);if(b)if(c)for(f=f||ob(a),g=g||ob(h),d=0,e=f.length;e>d;d++)nb(f[d],g[d]);else nb(a,h);return g=ob(h,"script"),g.length>0&&mb(g,!i&&ob(a,"script")),h},buildFragment:function(a,b,c,d){for(var e,f,g,h,i,j,k=b.createDocumentFragment(),l=[],m=0,o=a.length;o>m;m++)if(e=a[m],e||0===e)if("object"===n.type(e))n.merge(l,e.nodeType?[e]:e);else if(cb.test(e)){f=f||k.appendChild(b.createElement("div")),g=(bb.exec(e)||["",""])[1].toLowerCase(),h=ib[g]||ib._default,f.innerHTML=h[1]+e.replace(ab,"<$1></$2>")+h[2],j=h[0];while(j--)f=f.lastChild;n.merge(l,f.childNodes),f=k.firstChild,f.textContent=""}else l.push(b.createTextNode(e));k.textContent="",m=0;while(e=l[m++])if((!d||-1===n.inArray(e,d))&&(i=n.contains(e.ownerDocument,e),f=ob(k.appendChild(e),"script"),i&&mb(f),c)){j=0;while(e=f[j++])fb.test(e.type||"")&&c.push(e)}return k},cleanData:function(a){for(var b,c,d,e,f=n.event.special,g=0;void 0!==(c=a[g]);g++){if(n.acceptData(c)&&(e=c[L.expando],e&&(b=L.cache[e]))){if(b.events)for(d in b.events)f[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);L.cache[e]&&delete L.cache[e]}delete M.cache[c[M.expando]]}}}),n.fn.extend({text:function(a){return J(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=a)})},null,a,arguments.length)},append:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.appendChild(a)}})},prepend:function(){return this.domManip(arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=jb(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return this.domManip(arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},remove:function(a,b){for(var c,d=a?n.filter(a,this):this,e=0;null!=(c=d[e]);e++)b||1!==c.nodeType||n.cleanData(ob(c)),c.parentNode&&(b&&n.contains(c.ownerDocument,c)&&mb(ob(c,"script")),c.parentNode.removeChild(c));return this},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(ob(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return J(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!db.test(a)&&!ib[(bb.exec(a)||["",""])[1].toLowerCase()]){a=a.replace(ab,"<$1></$2>");try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(ob(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=arguments[0];return this.domManip(arguments,function(b){a=this.parentNode,n.cleanData(ob(this)),a&&a.replaceChild(b,this)}),a&&(a.length||a.nodeType)?this:this.remove()},detach:function(a){return this.remove(a,!0)},domManip:function(a,b){a=e.apply([],a);var c,d,f,g,h,i,j=0,l=this.length,m=this,o=l-1,p=a[0],q=n.isFunction(p);if(q||l>1&&"string"==typeof p&&!k.checkClone&&eb.test(p))return this.each(function(c){var d=m.eq(c);q&&(a[0]=p.call(this,c,d.html())),d.domManip(a,b)});if(l&&(c=n.buildFragment(a,this[0].ownerDocument,!1,this),d=c.firstChild,1===c.childNodes.length&&(c=d),d)){for(f=n.map(ob(c,"script"),kb),g=f.length;l>j;j++)h=c,j!==o&&(h=n.clone(h,!0,!0),g&&n.merge(f,ob(h,"script"))),b.call(this[j],h,j);if(g)for(i=f[f.length-1].ownerDocument,n.map(f,lb),j=0;g>j;j++)h=f[j],fb.test(h.type||"")&&!L.access(h,"globalEval")&&n.contains(i,h)&&(h.src?n._evalUrl&&n._evalUrl(h.src):n.globalEval(h.textContent.replace(hb,"")))}return this}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),g=e.length-1,h=0;g>=h;h++)c=h===g?this:this.clone(!0),n(e[h])[b](c),f.apply(d,c.get());return this.pushStack(d)}});var qb,rb={};function sb(b,c){var d,e=n(c.createElement(b)).appendTo(c.body),f=a.getDefaultComputedStyle&&(d=a.getDefaultComputedStyle(e[0]))?d.display:n.css(e[0],"display");return e.detach(),f}function tb(a){var b=l,c=rb[a];return c||(c=sb(a,b),"none"!==c&&c||(qb=(qb||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=qb[0].contentDocument,b.write(),b.close(),c=sb(a,b),qb.detach()),rb[a]=c),c}var ub=/^margin/,vb=new RegExp("^("+Q+")(?!px)[a-z%]+$","i"),wb=function(b){return b.ownerDocument.defaultView.opener?b.ownerDocument.defaultView.getComputedStyle(b,null):a.getComputedStyle(b,null)};function xb(a,b,c){var d,e,f,g,h=a.style;return c=c||wb(a),c&&(g=c.getPropertyValue(b)||c[b]),c&&(""!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),vb.test(g)&&ub.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function yb(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}!function(){var b,c,d=l.documentElement,e=l.createElement("div"),f=l.createElement("div");if(f.style){f.style.backgroundClip="content-box",f.cloneNode(!0).style.backgroundClip="",k.clearCloneStyle="content-box"===f.style.backgroundClip,e.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",e.appendChild(f);function g(){f.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",f.innerHTML="",d.appendChild(e);var g=a.getComputedStyle(f,null);b="1%"!==g.top,c="4px"===g.width,d.removeChild(e)}a.getComputedStyle&&n.extend(k,{pixelPosition:function(){return g(),b},boxSizingReliable:function(){return null==c&&g(),c},reliableMarginRight:function(){var b,c=f.appendChild(l.createElement("div"));return c.style.cssText=f.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",f.style.width="1px",d.appendChild(e),b=!parseFloat(a.getComputedStyle(c,null).marginRight),d.removeChild(e),f.removeChild(c),b}})}}(),n.swap=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};var zb=/^(none|table(?!-c[ea]).+)/,Ab=new RegExp("^("+Q+")(.*)$","i"),Bb=new RegExp("^([+-])=("+Q+")","i"),Cb={position:"absolute",visibility:"hidden",display:"block"},Db={letterSpacing:"0",fontWeight:"400"},Eb=["Webkit","O","Moz","ms"];function Fb(a,b){if(b in a)return b;var c=b[0].toUpperCase()+b.slice(1),d=b,e=Eb.length;while(e--)if(b=Eb[e]+c,b in a)return b;return d}function Gb(a,b,c){var d=Ab.exec(b);return d?Math.max(0,d[1]-(c||0))+(d[2]||"px"):b}function Hb(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+R[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+R[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+R[f]+"Width",!0,e))):(g+=n.css(a,"padding"+R[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+R[f]+"Width",!0,e)));return g}function Ib(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=wb(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=xb(a,b,f),(0>e||null==e)&&(e=a.style[b]),vb.test(e))return e;d=g&&(k.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Hb(a,b,c||(g?"border":"content"),d,f)+"px"}function Jb(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=L.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&S(d)&&(f[g]=L.access(d,"olddisplay",tb(d.nodeName)))):(e=S(d),"none"===c&&e||L.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=xb(a,"opacity");return""===c?"1":c}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Fb(i,h)),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=Bb.exec(c))&&(c=(e[1]+1)*e[2]+parseFloat(n.css(a,b)),f="number"),null!=c&&c===c&&("number"!==f||n.cssNumber[h]||(c+="px"),k.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Fb(a.style,h)),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=xb(a,b,d)),"normal"===e&&b in Db&&(e=Db[b]),""===c||c?(f=parseFloat(e),c===!0||n.isNumeric(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?zb.test(n.css(a,"display"))&&0===a.offsetWidth?n.swap(a,Cb,function(){return Ib(a,b,d)}):Ib(a,b,d):void 0},set:function(a,c,d){var e=d&&wb(a);return Gb(a,c,d?Hb(a,b,d,"border-box"===n.css(a,"boxSizing",!1,e),e):0)}}}),n.cssHooks.marginRight=yb(k.reliableMarginRight,function(a,b){return b?n.swap(a,{display:"inline-block"},xb,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+R[d]+b]=f[d]||f[d-2]||f[0];return e}},ub.test(a)||(n.cssHooks[a+b].set=Gb)}),n.fn.extend({css:function(a,b){return J(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=wb(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Jb(this,!0)},hide:function(){return Jb(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){S(this)?n(this).show():n(this).hide()})}});function Kb(a,b,c,d,e){return new Kb.prototype.init(a,b,c,d,e)}n.Tween=Kb,Kb.prototype={constructor:Kb,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||"swing",this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Kb.propHooks[this.prop];return a&&a.get?a.get(this):Kb.propHooks._default.get(this)},run:function(a){var b,c=Kb.propHooks[this.prop];return this.pos=b=this.options.duration?n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Kb.propHooks._default.set(this),this}},Kb.prototype.init.prototype=Kb.prototype,Kb.propHooks={_default:{get:function(a){var b;return null==a.elem[a.prop]||a.elem.style&&null!=a.elem.style[a.prop]?(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0):a.elem[a.prop]},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):a.elem.style&&(null!=a.elem.style[n.cssProps[a.prop]]||n.cssHooks[a.prop])?n.style(a.elem,a.prop,a.now+a.unit):a.elem[a.prop]=a.now}}},Kb.propHooks.scrollTop=Kb.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2}},n.fx=Kb.prototype.init,n.fx.step={};var Lb,Mb,Nb=/^(?:toggle|show|hide)$/,Ob=new RegExp("^(?:([+-])=|)("+Q+")([a-z%]*)$","i"),Pb=/queueHooks$/,Qb=[Vb],Rb={"*":[function(a,b){var c=this.createTween(a,b),d=c.cur(),e=Ob.exec(b),f=e&&e[3]||(n.cssNumber[a]?"":"px"),g=(n.cssNumber[a]||"px"!==f&&+d)&&Ob.exec(n.css(c.elem,a)),h=1,i=20;if(g&&g[3]!==f){f=f||g[3],e=e||[],g=+d||1;do h=h||".5",g/=h,n.style(c.elem,a,g+f);while(h!==(h=c.cur()/d)&&1!==h&&--i)}return e&&(g=c.start=+g||+d||0,c.unit=f,c.end=e[1]?g+(e[1]+1)*e[2]:+e[2]),c}]};function Sb(){return setTimeout(function(){Lb=void 0}),Lb=n.now()}function Tb(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=R[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ub(a,b,c){for(var d,e=(Rb[b]||[]).concat(Rb["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Vb(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&S(a),q=L.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?L.get(a,"olddisplay")||tb(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Nb.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?tb(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=L.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;L.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ub(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function Wb(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function Xb(a,b,c){var d,e,f=0,g=Qb.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Lb||Sb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{}},c),originalProperties:b,originalOptions:c,startTime:Lb||Sb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?h.resolveWith(a,[j,b]):h.rejectWith(a,[j,b]),this}}),k=j.props;for(Wb(k,j.opts.specialEasing);g>f;f++)if(d=Qb[f].call(j,a,k,j.opts))return d;return n.map(k,Ub,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(Xb,{tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.split(" ");for(var c,d=0,e=a.length;e>d;d++)c=a[d],Rb[c]=Rb[c]||[],Rb[c].unshift(b)},prefilter:function(a,b){b?Qb.unshift(a):Qb.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,(null==d.queue||d.queue===!0)&&(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(S).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=Xb(this,n.extend({},a),f);(e||L.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=L.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Pb.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));(b||!c)&&n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=L.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Tb(b,!0),a,d,e)}}),n.each({slideDown:Tb("show"),slideUp:Tb("hide"),slideToggle:Tb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Lb=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Lb=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Mb||(Mb=setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){clearInterval(Mb),Mb=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(a,b){return a=n.fx?n.fx.speeds[a]||a:a,b=b||"fx",this.queue(b,function(b,c){var d=setTimeout(b,a);c.stop=function(){clearTimeout(d)}})},function(){var a=l.createElement("input"),b=l.createElement("select"),c=b.appendChild(l.createElement("option"));a.type="checkbox",k.checkOn=""!==a.value,k.optSelected=c.selected,b.disabled=!0,k.optDisabled=!c.disabled,a=l.createElement("input"),a.value="t",a.type="radio",k.radioValue="t"===a.value}();var Yb,Zb,$b=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return J(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(a&&3!==f&&8!==f&&2!==f)return typeof a.getAttribute===U?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),d=n.attrHooks[b]||(n.expr.match.bool.test(b)?Zb:Yb)),void 0===c?d&&"get"in d&&null!==(e=d.get(a,b))?e:(e=n.find.attr(a,b),null==e?void 0:e):null!==c?d&&"set"in d&&void 0!==(e=d.set(a,c,b))?e:(a.setAttribute(b,c+""),c):void n.removeAttr(a,b))
},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(E);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)},attrHooks:{type:{set:function(a,b){if(!k.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}}}),Zb={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=$b[b]||n.find.attr;$b[b]=function(a,b,d){var e,f;return d||(f=$b[b],$b[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,$b[b]=f),e}});var _b=/^(?:input|select|textarea|button)$/i;n.fn.extend({prop:function(a,b){return J(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(a,b,c){var d,e,f,g=a.nodeType;if(a&&3!==g&&8!==g&&2!==g)return f=1!==g||!n.isXMLDoc(a),f&&(b=n.propFix[b]||b,e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){return a.hasAttribute("tabindex")||_b.test(a.nodeName)||a.href?a.tabIndex:-1}}}}),k.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var ac=/[\t\r\n\f]/g;n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h="string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):" ")){f=0;while(e=b[f++])d.indexOf(" "+e+" ")<0&&(d+=e+" ");g=n.trim(d),c.className!==g&&(c.className=g)}return this},removeClass:function(a){var b,c,d,e,f,g,h=0===arguments.length||"string"==typeof a&&a,i=0,j=this.length;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,this.className))});if(h)for(b=(a||"").match(E)||[];j>i;i++)if(c=this[i],d=1===c.nodeType&&(c.className?(" "+c.className+" ").replace(ac," "):"")){f=0;while(e=b[f++])while(d.indexOf(" "+e+" ")>=0)d=d.replace(" "+e+" "," ");g=a?n.trim(d):"",c.className!==g&&(c.className=g)}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):this.each(n.isFunction(a)?function(c){n(this).toggleClass(a.call(this,c,this.className,b),b)}:function(){if("string"===c){var b,d=0,e=n(this),f=a.match(E)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else(c===U||"boolean"===c)&&(this.className&&L.set(this,"__className__",this.className),this.className=this.className||a===!1?"":L.get(this,"__className__")||"")})},hasClass:function(a){for(var b=" "+a+" ",c=0,d=this.length;d>c;c++)if(1===this[c].nodeType&&(" "+this[c].className+" ").replace(ac," ").indexOf(b)>=0)return!0;return!1}});var bc=/\r/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(bc,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a))}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],!(!c.selected&&i!==e||(k.optDisabled?c.disabled:null!==c.getAttribute("disabled"))||c.parentNode.disabled&&n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(d.value,f)>=0)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>=0:void 0}},k.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)},bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}});var cc=n.now(),dc=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(a){var b,c;if(!a||"string"!=typeof a)return null;try{c=new DOMParser,b=c.parseFromString(a,"text/xml")}catch(d){b=void 0}return(!b||b.getElementsByTagName("parsererror").length)&&n.error("Invalid XML: "+a),b};var ec=/#.*$/,fc=/([?&])_=[^&]*/,gc=/^(.*?):[ \t]*([^\r\n]*)$/gm,hc=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,ic=/^(?:GET|HEAD)$/,jc=/^\/\//,kc=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,lc={},mc={},nc="*/".concat("*"),oc=a.location.href,pc=kc.exec(oc.toLowerCase())||[];function qc(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(E)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function rc(a,b,c,d){var e={},f=a===mc;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function sc(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function tc(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function uc(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:oc,type:"GET",isLocal:hc.test(pc[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":nc,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?sc(sc(a,n.ajaxSettings),b):sc(n.ajaxSettings,a)},ajaxPrefilter:qc(lc),ajaxTransport:qc(mc),ajax:function(a,b){"object"==typeof a&&(b=a,a=void 0),b=b||{};var c,d,e,f,g,h,i,j,k=n.ajaxSetup({},b),l=k.context||k,m=k.context&&(l.nodeType||l.jquery)?n(l):n.event,o=n.Deferred(),p=n.Callbacks("once memory"),q=k.statusCode||{},r={},s={},t=0,u="canceled",v={readyState:0,getResponseHeader:function(a){var b;if(2===t){if(!f){f={};while(b=gc.exec(e))f[b[1].toLowerCase()]=b[2]}b=f[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===t?e:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return t||(a=s[c]=s[c]||a,r[a]=b),this},overrideMimeType:function(a){return t||(k.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>t)for(b in a)q[b]=[q[b],a[b]];else v.always(a[v.status]);return this},abort:function(a){var b=a||u;return c&&c.abort(b),x(0,b),this}};if(o.promise(v).complete=p.add,v.success=v.done,v.error=v.fail,k.url=((a||k.url||oc)+"").replace(ec,"").replace(jc,pc[1]+"//"),k.type=b.method||b.type||k.method||k.type,k.dataTypes=n.trim(k.dataType||"*").toLowerCase().match(E)||[""],null==k.crossDomain&&(h=kc.exec(k.url.toLowerCase()),k.crossDomain=!(!h||h[1]===pc[1]&&h[2]===pc[2]&&(h[3]||("http:"===h[1]?"80":"443"))===(pc[3]||("http:"===pc[1]?"80":"443")))),k.data&&k.processData&&"string"!=typeof k.data&&(k.data=n.param(k.data,k.traditional)),rc(lc,k,b,v),2===t)return v;i=n.event&&k.global,i&&0===n.active++&&n.event.trigger("ajaxStart"),k.type=k.type.toUpperCase(),k.hasContent=!ic.test(k.type),d=k.url,k.hasContent||(k.data&&(d=k.url+=(dc.test(d)?"&":"?")+k.data,delete k.data),k.cache===!1&&(k.url=fc.test(d)?d.replace(fc,"$1_="+cc++):d+(dc.test(d)?"&":"?")+"_="+cc++)),k.ifModified&&(n.lastModified[d]&&v.setRequestHeader("If-Modified-Since",n.lastModified[d]),n.etag[d]&&v.setRequestHeader("If-None-Match",n.etag[d])),(k.data&&k.hasContent&&k.contentType!==!1||b.contentType)&&v.setRequestHeader("Content-Type",k.contentType),v.setRequestHeader("Accept",k.dataTypes[0]&&k.accepts[k.dataTypes[0]]?k.accepts[k.dataTypes[0]]+("*"!==k.dataTypes[0]?", "+nc+"; q=0.01":""):k.accepts["*"]);for(j in k.headers)v.setRequestHeader(j,k.headers[j]);if(k.beforeSend&&(k.beforeSend.call(l,v,k)===!1||2===t))return v.abort();u="abort";for(j in{success:1,error:1,complete:1})v[j](k[j]);if(c=rc(mc,k,b,v)){v.readyState=1,i&&m.trigger("ajaxSend",[v,k]),k.async&&k.timeout>0&&(g=setTimeout(function(){v.abort("timeout")},k.timeout));try{t=1,c.send(r,x)}catch(w){if(!(2>t))throw w;x(-1,w)}}else x(-1,"No Transport");function x(a,b,f,h){var j,r,s,u,w,x=b;2!==t&&(t=2,g&&clearTimeout(g),c=void 0,e=h||"",v.readyState=a>0?4:0,j=a>=200&&300>a||304===a,f&&(u=tc(k,v,f)),u=uc(k,u,v,j),j?(k.ifModified&&(w=v.getResponseHeader("Last-Modified"),w&&(n.lastModified[d]=w),w=v.getResponseHeader("etag"),w&&(n.etag[d]=w)),204===a||"HEAD"===k.type?x="nocontent":304===a?x="notmodified":(x=u.state,r=u.data,s=u.error,j=!s)):(s=x,(a||!x)&&(x="error",0>a&&(a=0))),v.status=a,v.statusText=(b||x)+"",j?o.resolveWith(l,[r,x,v]):o.rejectWith(l,[v,x,s]),v.statusCode(q),q=void 0,i&&m.trigger(j?"ajaxSuccess":"ajaxError",[v,k,j?r:s]),p.fireWith(l,[v,x]),i&&(m.trigger("ajaxComplete",[v,k]),--n.active||n.event.trigger("ajaxStop")))}return v},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax({url:a,type:b,dataType:e,data:c,success:d})}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return this.each(n.isFunction(a)?function(b){n(this).wrapInner(a.call(this,b))}:function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return a.offsetWidth<=0&&a.offsetHeight<=0},n.expr.filters.visible=function(a){return!n.expr.filters.hidden(a)};var vc=/%20/g,wc=/\[\]$/,xc=/\r?\n/g,yc=/^(?:submit|button|image|reset|file)$/i,zc=/^(?:input|select|textarea|keygen)/i;function Ac(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||wc.test(a)?d(a,e):Ac(a+"["+("object"==typeof e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Ac(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Ac(c,a[c],b,e);return d.join("&").replace(vc,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&zc.test(this.nodeName)&&!yc.test(a)&&(this.checked||!T.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(xc,"\r\n")}}):{name:b.name,value:c.replace(xc,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(a){}};var Bc=0,Cc={},Dc={0:200,1223:204},Ec=n.ajaxSettings.xhr();a.attachEvent&&a.attachEvent("onunload",function(){for(var a in Cc)Cc[a]()}),k.cors=!!Ec&&"withCredentials"in Ec,k.ajax=Ec=!!Ec,n.ajaxTransport(function(a){var b;return k.cors||Ec&&!a.crossDomain?{send:function(c,d){var e,f=a.xhr(),g=++Bc;if(f.open(a.type,a.url,a.async,a.username,a.password),a.xhrFields)for(e in a.xhrFields)f[e]=a.xhrFields[e];a.mimeType&&f.overrideMimeType&&f.overrideMimeType(a.mimeType),a.crossDomain||c["X-Requested-With"]||(c["X-Requested-With"]="XMLHttpRequest");for(e in c)f.setRequestHeader(e,c[e]);b=function(a){return function(){b&&(delete Cc[g],b=f.onload=f.onerror=null,"abort"===a?f.abort():"error"===a?d(f.status,f.statusText):d(Dc[f.status]||f.status,f.statusText,"string"==typeof f.responseText?{text:f.responseText}:void 0,f.getAllResponseHeaders()))}},f.onload=b(),f.onerror=b("error"),b=Cc[g]=b("abort");try{f.send(a.hasContent&&a.data||null)}catch(h){if(b)throw h}},abort:function(){b&&b()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(d,e){b=n("<script>").prop({async:!0,charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&e("error"===a.type?404:200,a.type)}),l.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Fc=[],Gc=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Fc.pop()||n.expando+"_"+cc++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Gc.test(b.url)?"url":"string"==typeof b.data&&!(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Gc.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Gc,"$1"+e):b.jsonp!==!1&&(b.url+=(dc.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Fc.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||l;var d=v.exec(a),e=!c&&[];return d?[b.createElement(d[1])]:(d=n.buildFragment([a],b,e),e&&e.length&&n(e).remove(),n.merge([],d.childNodes))};var Hc=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Hc)return Hc.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>=0&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e,dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).complete(c&&function(a,b){g.each(c,f||[a.responseText,b,a])}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};var Ic=a.document.documentElement;function Jc(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,h)),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(typeof d.getBoundingClientRect!==U&&(e=d.getBoundingClientRect()),c=Jc(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent||Ic;while(a&&!n.nodeName(a,"html")&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ic})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(b,c){var d="pageYOffset"===c;n.fn[b]=function(e){return J(this,function(b,e,f){var g=Jc(b);return void 0===f?g?g[c]:b[e]:void(g?g.scrollTo(d?a.pageXOffset:f,d?f:a.pageYOffset):b[e]=f)},b,e,arguments.length,null)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=yb(k.pixelPosition,function(a,c){return c?(c=xb(a,b),vb.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return J(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.size=function(){return this.length},n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Kc=a.jQuery,Lc=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Lc),b&&a.jQuery===n&&(a.jQuery=Kc),n},typeof b===U&&(a.jQuery=a.$=n),n});
//# sourceMappingURL=jquery.min.map

;(function(factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], factory);
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'));
    } else {
        factory(jQuery);
    }

}(function($) {
    'use strict';
    var Etcarousel = window.Etcarousel || {};

    Etcarousel = (function() {

        var instanceUid = 0;

        function Etcarousel(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="etcarousel-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="etcarousel-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'etcarousel-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unetcarouseled: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('etcarousel') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Etcarousel;

    }());

    Etcarousel.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.etcarousel-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Etcarousel.prototype.addSlide = Etcarousel.prototype.etcarouselAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-etcarousel-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Etcarousel.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Etcarousel.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Etcarousel.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Etcarousel.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).etcarousel('getEtcarousel');
                if(!target.unetcarouseled) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Etcarousel.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Etcarousel.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Etcarousel.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Etcarousel.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Etcarousel.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('etcarousel-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('etcarousel-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('etcarousel-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('etcarousel-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('etcarousel-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('etcarousel-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Etcarousel.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('etcarousel-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('etcarousel-active');

        }

    };

    Etcarousel.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.etcarousel-cloned)')
                .addClass('etcarousel-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-etcarousel-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('etcarousel-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="etcarousel-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="etcarousel-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="etcarousel-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('etcarousel-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Etcarousel.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Etcarousel.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unetcarousel') {
                            _.unetcarousel(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unetcarousel') {
                        _.unetcarousel(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Etcarousel.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Etcarousel.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Etcarousel.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.etcarousel', _.changeSlide)
                .off('mouseenter.etcarousel', $.proxy(_.interrupt, _, true))
                .off('mouseleave.etcarousel', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.etcarousel', _.keyHandler);
            }
        }

        _.$slider.off('focus.etcarousel blur.etcarousel');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.etcarousel', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.etcarousel', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.etcarousel', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.etcarousel', _.keyHandler);
            }
        }

        _.$list.off('touchstart.etcarousel mousedown.etcarousel', _.swipeHandler);
        _.$list.off('touchmove.etcarousel mousemove.etcarousel', _.swipeHandler);
        _.$list.off('touchend.etcarousel mouseup.etcarousel', _.swipeHandler);
        _.$list.off('touchcancel.etcarousel mouseleave.etcarousel', _.swipeHandler);

        _.$list.off('click.etcarousel', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.etcarousel', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.etcarousel', _.selectHandler);
        }

        $(window).off('orientationchange.etcarousel.etcarousel-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.etcarousel.etcarousel-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.etcarousel.etcarousel-' + _.instanceUid, _.setPosition);

    };

    Etcarousel.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.etcarousel', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.etcarousel', $.proxy(_.interrupt, _, false));

    };

    Etcarousel.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Etcarousel.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Etcarousel.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.etcarousel-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('etcarousel-disabled etcarousel-arrow etcarousel-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('etcarousel-disabled etcarousel-arrow etcarousel-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('etcarousel-slide etcarousel-active etcarousel-center etcarousel-visible etcarousel-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-etcarousel-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('etcarousel-slider');
        _.$slider.removeClass('etcarousel-initialized');
        _.$slider.removeClass('etcarousel-dotted');

        _.unetcarouseled = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Etcarousel.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Etcarousel.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Etcarousel.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Etcarousel.prototype.filterSlides = Etcarousel.prototype.etcarouselFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Etcarousel.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.etcarousel blur.etcarousel')
            .on('focus.etcarousel blur.etcarousel', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Etcarousel.prototype.getCurrent = Etcarousel.prototype.etcarouselCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Etcarousel.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Etcarousel.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.etcarousel-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.etcarousel-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.etcarousel-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.etcarousel-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Etcarousel.prototype.getOption = Etcarousel.prototype.etcarouselGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Etcarousel.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Etcarousel.prototype.getEtcarousel = function() {

        return this;

    };

    Etcarousel.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.etcarousel-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-etcarousel-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Etcarousel.prototype.goTo = Etcarousel.prototype.etcarouselGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Etcarousel.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('etcarousel-initialized')) {

            $(_.$slider).addClass('etcarousel-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Etcarousel.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.etcarousel-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.etcarousel-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'etcarousel-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'etcarousel-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'etcarousel-slide-control' + _.instanceUid + i,
                    'aria-controls': 'etcarousel-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Etcarousel.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.etcarousel')
               .on('click.etcarousel', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.etcarousel')
               .on('click.etcarousel', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.etcarousel', _.keyHandler);
                _.$nextArrow.on('keydown.etcarousel', _.keyHandler);
            }
        }

    };

    Etcarousel.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.etcarousel', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.etcarousel', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.etcarousel', $.proxy(_.interrupt, _, true))
                .on('mouseleave.etcarousel', $.proxy(_.interrupt, _, false));

        }

    };

    Etcarousel.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.etcarousel', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.etcarousel', $.proxy(_.interrupt, _, false));

        }

    };

    Etcarousel.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.etcarousel mousedown.etcarousel', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.etcarousel mousemove.etcarousel', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.etcarousel mouseup.etcarousel', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.etcarousel mouseleave.etcarousel', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.etcarousel', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.etcarousel', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.etcarousel', _.selectHandler);
        }

        $(window).on('orientationchange.etcarousel.etcarousel-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.etcarousel.etcarousel-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.etcarousel.etcarousel-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Etcarousel.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Etcarousel.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Etcarousel.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('etcarousel-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'etcarousel-loading' )
                        .addClass( 'etcarousel-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.etcarousel-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.etcarousel-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.etcarousel-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.etcarousel-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.etcarousel-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Etcarousel.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('etcarousel-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Etcarousel.prototype.next = Etcarousel.prototype.etcarouselNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Etcarousel.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Etcarousel.prototype.pause = Etcarousel.prototype.etcarouselPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Etcarousel.prototype.play = Etcarousel.prototype.etcarouselPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Etcarousel.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unetcarouseled ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Etcarousel.prototype.prev = Etcarousel.prototype.etcarouselPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Etcarousel.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Etcarousel.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('etcarousel-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'etcarousel-loading' )
                        .addClass( 'etcarousel-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Etcarousel.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Etcarousel.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Etcarousel.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('etcarousel-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.etcarousel', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Etcarousel.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unetcarouseled ) { _.setPosition(); }
            }, 50);
        }
    };

    Etcarousel.prototype.removeSlide = Etcarousel.prototype.etcarouselRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Etcarousel.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Etcarousel.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.etcarousel-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.etcarousel-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.etcarousel-slide').width(_.slideWidth - offset);

    };

    Etcarousel.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Etcarousel.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Etcarousel.prototype.setOption =
    Etcarousel.prototype.etcarouselSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .etcarousel("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .etcarousel("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .etcarousel("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Etcarousel.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Etcarousel.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('etcarousel-vertical');
        } else {
            _.$slider.removeClass('etcarousel-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Etcarousel.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.etcarousel-slide')
            .removeClass('etcarousel-active etcarousel-center etcarousel-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('etcarousel-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('etcarousel-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('etcarousel-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('etcarousel-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('etcarousel-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('etcarousel-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('etcarousel-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('etcarousel-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('etcarousel-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('etcarousel-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Etcarousel.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-etcarousel-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('etcarousel-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-etcarousel-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('etcarousel-cloned');
                }
                _.$slideTrack.find('.etcarousel-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Etcarousel.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Etcarousel.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.etcarousel-slide') ?
                $(event.target) :
                $(event.target).parents('.etcarousel-slide');

        var index = parseInt(targetElement.attr('data-etcarousel-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Etcarousel.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.etcarousel('getEtcarousel');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Etcarousel.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('etcarousel-loading');

    };

    Etcarousel.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Etcarousel.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Etcarousel.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Etcarousel.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Etcarousel.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Etcarousel.prototype.unfilterSlides = Etcarousel.prototype.etcarouselUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Etcarousel.prototype.unload = function() {

        var _ = this;

        $('.etcarousel-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('etcarousel-slide etcarousel-active etcarousel-visible etcarousel-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Etcarousel.prototype.unetcarousel = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unetcarousel', [_, fromBreakpoint]);
        _.destroy();

    };

    Etcarousel.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('etcarousel-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('etcarousel-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('etcarousel-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('etcarousel-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('etcarousel-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('etcarousel-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('etcarousel-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('etcarousel-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Etcarousel.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('etcarousel-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('etcarousel-active');

        }

    };

    Etcarousel.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.etcarousel = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].etcarousel = new Etcarousel(_[i], opt);
            else
                ret = _[i].etcarousel[opt].apply(_[i].etcarousel, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));

/*jquery.mb.YTPlayer 09-10-2018
 _ jquery.mb.components 
 _ email: matteo@open-lab.com 
 _ Copyright (c) 2001-2018. Matteo Bicocchi (Pupunzi); 
 _ blog: http://pupunzi.open-lab.com 
 _ Open Lab s.r.l., Florence - Italy 
 */
function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0,
    jQuery(document).trigger("YTAPIReady"))
}
function iOSversion() {
    if (/iP(hone|od|ad)/.test(navigator.platform)) {
        var a = navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/);
        return [parseInt(a[1], 10), parseInt(a[2], 10), parseInt(a[3] || 0, 10)]
    }
}
function uncamel(a) {
    return a.replace(/([A-Z])/g, function(a) {
        return "-" + a.toLowerCase()
    })
}
function setUnit(a, b) {
    return "string" != typeof a || a.match(/^[\-0-9\.]+jQuery/) ? "" + a + b : a
}
function setFilter(a, b, c) {
    var d = uncamel(b)
      , e = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    a[e + "filter"] = a[e + "filter"] || "",
    c = setUnit(c > jQuery.CSS.filters[b].max ? jQuery.CSS.filters[b].max : c, jQuery.CSS.filters[b].unit),
    a[e + "filter"] += d + "(" + c + ") ",
    delete a[b]
}
function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints
      , b = "ontouchstart"in document.createElement("div");
    return a || b ? !0 : !1
}
function isTouchSupported() {
    var a = nAgt.msMaxTouchPoints
      , b = "ontouchstart"in document.createElement("div");
    return a || b ? !0 : !1
}
var ytp = ytp || {}
  , getYTPVideoID = function(a) {
    var b, c;
    return a.indexOf("youtu.be") > 0 || a.indexOf("youtube.com/embed") > 0 ? (b = a.substr(a.lastIndexOf("/") + 1, a.length),
    c = b.indexOf("?list=") > 0 ? b.substr(b.lastIndexOf("="), b.length) : null,
    b = c ? b.substr(0, b.lastIndexOf("?")) : b) : a.indexOf("http") > -1 ? (b = a.match(/[\\?&]v=([^&#]*)/)[1],
    c = a.indexOf("list=") > 0 ? a.match(/[\\?&]list=([^&#]*)/)[1] : null) : (b = a.length > 15 ? null : a,
    c = b ? null : a),
    {
        videoID: b,
        playlistID: c
    }
};
!function(jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "3.2.7",
        build: "7318",
        author: "Matteo Bicocchi (pupunzi)",
        apiKey: "",
        defaults: {
            videoURL: null,
            containment: "body",
            ratio: "auto",
            fadeOnStartTime: 1500,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            coverImage: !1,
            loop: !0,
            addRaster: !1,
            mask: !1,
            opacity: 1,
            quality: "default",
            vol: 50,
            mute: !1,
            showControls: !0,
            anchor: "center,center",
            showAnnotations: !1,
            cc_load_policy: !1,
            showYTLogo: !0,
            useOnMobile: !0,
            mobileFallbackImage: null,
            playOnlyIfVisible: !1,
            onScreenPercentage: 30,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            optimizeDisplay: !0,
            abundance: .2,
            gaTrack: !0,
            remember_last_time: !1,
            addFilters: !1,
            onReady: function(a) {},
            onError: function(a, b) {}
        },
        controls: {
            play: "P",
            pause: "p",
            mute: "M",
            unmute: "A",
            onlyYT: "O",
            showSite: "R",
            ytLogo: "Y"
        },
        controlBar: null,
        locationProtocol: "https:",
        defaultFilters: {
            grayscale: {
                value: 0,
                unit: "%"
            },
            hue_rotate: {
                value: 0,
                unit: "deg"
            },
            invert: {
                value: 0,
                unit: "%"
            },
            opacity: {
                value: 0,
                unit: "%"
            },
            saturate: {
                value: 0,
                unit: "%"
            },
            sepia: {
                value: 0,
                unit: "%"
            },
            brightness: {
                value: 0,
                unit: "%"
            },
            contrast: {
                value: 0,
                unit: "%"
            },
            blur: {
                value: 0,
                unit: "px"
            }
        },
        buildPlayer: function(options) {
            function isIframe() {
                var a = !1;
                try {
                    self.location.href != top.location.href && (a = !0)
                } catch (b) {
                    a = !0
                }
                return a
            }
            if (ytp.YTAPIReady || "undefined" != typeof window.YT)
                setTimeout(function() {
                    jQuery(document).trigger("YTAPIReady"),
                    ytp.YTAPIReady = !0
                }, 100);
            else {
                jQuery("#YTAPI").remove();
                var tag = jQuery("<script></script>").attr({
                    src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                    id: "YTAPI"
                });
                jQuery("head").prepend(tag)
            }
            return this.each(function() {
                var YTPlayer = this
                  , $YTPlayer = jQuery(YTPlayer);
                $YTPlayer.hide(),
                YTPlayer.loop = 0,
                YTPlayer.state = 0,
                YTPlayer.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters),
                YTPlayer.filtersEnabled = !0,
                YTPlayer.id = YTPlayer.id || "YTP_" + (new Date).getTime(),
                $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "object" != typeof property && (property = {}),
                YTPlayer.opt = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaults, YTPlayer.opt, options, property),
                YTPlayer.opt.elementId = YTPlayer.id,
                0 === YTPlayer.opt.vol && (YTPlayer.opt.vol = 1,
                YTPlayer.opt.mute = !0),
                YTPlayer.opt.autoPlay && 0 == YTPlayer.opt.mute && jQuery.mbBrowser.chrome && (jQuery(document).one("mousedown.YTPstart", function() {
                    $YTPlayer.YTPPlay()
                }),
                console.info("YTPlayer info: On Webkit browsers you can not autoplay the video if the audio is on.")),
                YTPlayer.opt.loop && "boolean" == typeof YTPlayer.opt.loop && (YTPlayer.opt.loop = 9999);
                var fullScreenAvailable = document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled;
                YTPlayer.opt.realfullscreen = isIframe() || !fullScreenAvailable ? !1 : YTPlayer.opt.realfullscreen,
                YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "1" : "3",
                YTPlayer.opt.cc_load_policy = YTPlayer.opt.cc_load_policy ? "1" : "0",
                YTPlayer.opt.coverImage = YTPlayer.opt.coverImage || YTPlayer.opt.backgroundImage,
                jQuery.mbBrowser.msie && jQuery.mbBrowser.version < 9 && (YTPlayer.opt.opacity = 1),
                "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.opt.fadeOnStartTime = YTPlayer.opt.fadeOnStartTime),
                YTPlayer.opt.containment = "self" === YTPlayer.opt.containment ? $YTPlayer : jQuery(YTPlayer.opt.containment),
                YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1,
                YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio,
                YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio),
                YTPlayer.orig_containment_background = YTPlayer.opt.containment.css("background-image"),
                $YTPlayer.attr("id") || $YTPlayer.attr("id", "ytp_" + (new Date).getTime()),
                YTPlayer.playerID = "iframe_" + YTPlayer.id,
                YTPlayer.isAlone = !1,
                YTPlayer.hasFocus = !0,
                YTPlayer.videoID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1,
                YTPlayer.playlistID = YTPlayer.opt.videoURL ? getYTPVideoID(YTPlayer.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
                var start_from_last = 0;
                if (jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID) && (start_from_last = parseFloat(jQuery.mbCookie.get("YTPlayer_start_from" + YTPlayer.videoID))),
                YTPlayer.opt.remember_last_time && start_from_last && (YTPlayer.start_from_last = start_from_last,
                jQuery.mbCookie.remove("YTPlayer_start_from" + YTPlayer.videoID)),
                YTPlayer.isPlayer = $YTPlayer.is(YTPlayer.opt.containment),
                YTPlayer.isBackground = YTPlayer.opt.containment.is("body"),
                !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    YTPlayer.isPlayer && $YTPlayer.show(),
                    YTPlayer.overlay = jQuery("<div/>").css({
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: "100%"
                    }).addClass("YTPOverlay"),
                    YTPlayer.wrapper = jQuery("<div/>").attr("id", "wrapper_" + YTPlayer.id).css({
                        position: "absolute",
                        zIndex: 0,
                        minWidth: "100%",
                        minHeight: "100%",
                        left: 0,
                        top: 0,
                        overflow: "hidden",
                        opacity: 0
                    }).addClass("mbYTP_wrapper"),
                    YTPlayer.isPlayer && (YTPlayer.inlinePlayButton = jQuery("<div/>").addClass("inlinePlayButton").html(jQuery.mbYTPlayer.controls.play),
                    $YTPlayer.append(YTPlayer.inlinePlayButton),
                    YTPlayer.inlinePlayButton.on("click", function(a) {
                        $YTPlayer.YTPPlay(),
                        a.stopPropagation()
                    }),
                    YTPlayer.opt.autoPlay && YTPlayer.inlinePlayButton.hide(),
                    YTPlayer.overlay.on("click", function() {
                        $YTPlayer.YTPTogglePlay()
                    }).css({
                        cursor: "pointer"
                    }));
                    var playerBox = jQuery("<div/>").attr("id", YTPlayer.playerID).addClass("playerBox");
                    if (playerBox.css({
                        position: "absolute",
                        zIndex: 0,
                        width: "100%",
                        height: "100%",
                        top: 0,
                        left: 0,
                        overflow: "hidden",
                        opacity: 1
                    }),
                    YTPlayer.wrapper.append(playerBox),
                    playerBox.after(YTPlayer.overlay),
                    YTPlayer.isPlayer && (YTPlayer.inlineWrapper = jQuery("<div/>").addClass("inline-YTPlayer"),
                    YTPlayer.inlineWrapper.css({
                        position: "relative",
                        maxWidth: YTPlayer.opt.containment.css("width")
                    }),
                    YTPlayer.opt.containment.css({
                        position: "relative",
                        paddingBottom: "56.25%",
                        overflow: "hidden",
                        height: 0
                    }),
                    YTPlayer.opt.containment.wrap(YTPlayer.inlineWrapper)),
                    YTPlayer.opt.containment.children().not("script, style").each(function() {
                        "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                    }),
                    YTPlayer.isBackground ? (jQuery("body").css({
                        boxSizing: "border-box"
                    }),
                    YTPlayer.wrapper.css({
                        position: "fixed",
                        top: 0,
                        left: 0,
                        zIndex: 0
                    })) : "static" == YTPlayer.opt.containment.css("position") && (YTPlayer.opt.containment.css({
                        position: "relative"
                    }),
                    $YTPlayer.show()),
                    YTPlayer.opt.containment.prepend(YTPlayer.wrapper),
                    YTPlayer.isBackground || YTPlayer.overlay.on("mouseenter", function() {
                        YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.addClass("visible")
                    }).on("mouseleave", function() {
                        YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.removeClass("visible")
                    }),
                    jQuery.mbBrowser.mobile && !YTPlayer.opt.useOnMobile)
                        return YTPlayer.opt.mobileFallbackImage && (YTPlayer.wrapper.css({
                            backgroundImage: "url(" + YTPlayer.opt.mobileFallbackImage + ")",
                            backgroundPosition: "center center",
                            backgroundSize: "cover",
                            backgroundRepeat: "no-repeat",
                            opacity: 1
                        }),
                        YTPlayer.wrapper.css({
                            opacity: 1
                        })),
                        $YTPlayer;
                    jQuery.mbBrowser.mobile && YTPlayer.opt.autoPlay && YTPlayer.opt.useOnMobile && jQuery("body").one("touchstart", function() {
                        YTPlayer.player.playVideo()
                    }),
                    jQuery(document).one("YTAPIReady", function() {
                        $YTPlayer.trigger("YTAPIReady_" + YTPlayer.id),
                        ytp.YTAPIReady = !0
                    }),
                    YTPlayer.isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage),
                    $YTPlayer.one("YTAPIReady_" + YTPlayer.id, function() {
                        var a = this
                          , b = jQuery(a);
                        a.isBackground && ytp.backgroundIsInited || a.isInit || (a.isBackground && (ytp.backgroundIsInited = !0),
                        a.opt.autoPlay = "undefined" == typeof a.opt.autoPlay ? a.isBackground ? !0 : !1 : a.opt.autoPlay,
                        a.opt.vol = a.opt.vol ? a.opt.vol : 100,
                        jQuery.mbYTPlayer.getDataFromAPI(a),
                        jQuery(a).on("YTPChanged", function(c) {
                            if (!a.isInit) {
                                a.isInit = !0;
                                var d = {
                                    modestbranding: 1,
                                    autoplay: 0,
                                    controls: 0,
                                    showinfo: 0,
                                    rel: 0,
                                    enablejsapi: 1,
                                    version: 3,
                                    playerapiid: a.playerID,
                                    origin: "*",
                                    allowfullscreen: !0,
                                    wmode: "transparent",
                                    iv_load_policy: a.opt.showAnnotations,
                                    cc_load_policy: a.opt.cc_load_policy,
                                    playsinline: jQuery.mbBrowser.mobile ? 1 : 0,
                                    html5: document.createElement("video").canPlayType ? 1 : 0
                                };
                                new YT.Player(a.playerID,{
                                    playerVars: d,
                                    events: {
                                        onReady: function(c) {
                                            a.player = c.target,
                                            a.player.loadVideoById({
                                                videoId: a.videoID.toString(),
                                                suggestedQuality: a.opt.quality
                                            }),
                                            b.trigger("YTPlayerIsReady_" + a.id)
                                        },
                                        onStateChange: function(b) {
                                            if ("function" == typeof b.target.getPlayerState) {
                                                var c = b.target.getPlayerState();
                                                if (a.preventTrigger || a.isStarting)
                                                    return void (a.preventTrigger = !1);
                                                a.state = c;
                                                var d;
                                                switch (c) {
                                                case -1:
                                                    d = "YTPUnstarted";
                                                    break;
                                                case 0:
                                                    d = "YTPRealEnd";
                                                    break;
                                                case 1:
                                                    d = "YTPPlay",
                                                    a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.pause),
                                                    a.isPlayer && a.inlinePlayButton.hide(),
                                                    jQuery(document).off("mousedown.YTPstart");
                                                    break;
                                                case 2:
                                                    d = "YTPPause",
                                                    a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play),
                                                    a.isPlayer && a.inlinePlayButton.show();
                                                    break;
                                                case 3:
                                                    a.player.setPlaybackQuality(a.opt.quality),
                                                    d = "YTPBuffering",
                                                    a.controlBar.length && a.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                                    break;
                                                case 5:
                                                    d = "YTPCued"
                                                }
                                                var e = jQuery.Event(d);
                                                e.time = a.currentTime,
                                                jQuery(a).trigger(e)
                                            }
                                        },
                                        onPlaybackQualityChange: function(b) {
                                            var c = b.target.getPlaybackQuality()
                                              , d = jQuery.Event("YTPQualityChange");
                                            d.quality = c,
                                            jQuery(a).trigger(d)
                                        },
                                        onError: function(c) {
                                            switch ("function" == typeof a.opt.onError && a.opt.onError(b, c),
                                            c.data) {
                                            case 2:
                                                console.error("video ID:: " + a.videoID + ": The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.");
                                                break;
                                            case 5:
                                                console.error("video ID:: " + a.videoID + ": The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.");
                                                break;
                                            case 100:
                                                console.error("video ID:: " + a.videoID + ": The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.");
                                                break;
                                            case 101:
                                            case 150:
                                                console.error("video ID:: " + a.videoID + ": The owner of the requested video does not allow it to be played in embedded players.")
                                            }
                                            a.isList && jQuery(a).YTPPlayNext()
                                        }
                                    }
                                }),
                                b.on("YTPlayerIsReady_" + a.id, function() {
                                    return a.isReady ? this : (a.playerEl = a.player.getIframe(),
                                    jQuery(a.playerEl).unselectable(),
                                    b.optimizeDisplay(),
                                    jQuery(window).off("resize.YTP_" + a.id).on("resize.YTP_" + a.id, function() {
                                        b.optimizeDisplay()
                                    }),
                                    a.opt.remember_last_time && jQuery(window).on("unload.YTP_" + a.id, function() {
                                        var b = a.player.getCurrentTime();
                                        jQuery.mbCookie.set("YTPlayer_start_from" + a.videoID, b, 0)
                                    }),
                                    void b.YTPCheckForState())
                                })
                            }
                        }))
                    }),
                    $YTPlayer.off("YTPTime.mask"),
                    jQuery.mbYTPlayer.applyMask(YTPlayer)
                }
            })
        },
        isOnScreen: function(a, b) {
            b = b || 10;
            var c = a.wrapper
              , d = jQuery(window).scrollTop()
              , e = d + jQuery(window).height()
              , f = c.height() * b / 100
              , g = c.offset().top + f
              , h = c.offset().top + (c.height() - f);
            return e >= h && g >= d
        },
        getDataFromAPI: function(a) {
            if (a.videoData = jQuery.mbStorage.get("YTPlayer_data_" + a.videoID),
            jQuery(a).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function() {
                if (a.hasData && a.isPlayer && !a.opt.autoPlay) {
                    var b = a.opt.coverImage ? "url(" + a.opt.coverImage + ") center center" : a.orig_containment_background;
                    console.debug("1", b),
                    a.opt.containment.css({
                        background: b,
                        backgroundSize: "cover"
                    })
                }
            }),
            a.videoData)
                setTimeout(function() {
                    a.dataReceived = !0;
                    var b = jQuery.Event("YTPChanged");
                    b.time = a.currentTime,
                    b.videoId = a.videoID,
                    b.opt = a.opt,
                    jQuery(a).trigger(b);
                    var c = jQuery.Event("YTPData");
                    c.prop = {};
                    for (var d in a.videoData)
                        c.prop[d] = a.videoData[d];
                    jQuery(a).trigger(c)
                }, a.opt.fadeOnStartTime),
                a.hasData = !0;
            else if (jQuery.mbYTPlayer.apiKey)
                jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + a.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function(b) {
                    function c(b) {
                        a.videoData = {},
                        a.videoData.id = a.videoID,
                        a.videoData.channelTitle = b.channelTitle,
                        a.videoData.title = b.title,
                        a.videoData.description = b.description.length < 400 ? b.description : b.description.substring(0, 400) + " ...",
                        a.videoData.thumb_max = b.thumbnails.maxres ? b.thumbnails.maxres.url : null,
                        a.videoData.thumb_high = b.thumbnails.high ? b.thumbnails.high.url : null,
                        a.videoData.thumb_medium = b.thumbnails.medium ? b.thumbnails.medium.url : null,
                        jQuery.mbStorage.set("YTPlayer_data_" + a.videoID, a.videoData)
                    }
                    a.dataReceived = !0;
                    var d = jQuery.Event("YTPChanged");
                    d.time = a.currentTime,
                    d.videoId = a.videoID,
                    jQuery(a).trigger(d),
                    b.items[0] ? (c(b.items[0].snippet),
                    a.hasData = !0) : (a.videoData = {},
                    a.hasData = !1);
                    var e = jQuery.Event("YTPData");
                    e.prop = {};
                    for (var f in a.videoData)
                        e.prop[f] = a.videoData[f];
                    jQuery(a).trigger(e)
                });
            else {
                if (setTimeout(function() {
                    var b = jQuery.Event("YTPChanged");
                    b.time = a.currentTime,
                    b.videoId = a.videoID,
                    jQuery(a).trigger(b)
                }, 50),
                !a.opt.autoPlay) {
                    var b = a.opt.coverImage ? "url(" + a.opt.coverImage + ") center center" : a.orig_containment_background;
                    b && a.opt.containment.css({
                        background: b,
                        backgroundSize: "cover"
                    })
                }
                a.videoData = null
            }
            a.opt.ratio = "auto" == a.opt.ratio ? "16/9" : a.opt.ratio,
            a.isPlayer && !a.opt.autoPlay && (a.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(),
            jQuery(a).append(a.loading),
            a.loading.fadeIn())
        },
        removeStoredData: function() {
            jQuery.mbStorage.remove()
        },
        getVideoData: function() {
            var a = this.get(0);
            return a.videoData
        },
        getVideoID: function() {
            var a = this.get(0);
            return a.videoID || !1
        },
        getPlaylistID: function() {
            var a = this.get(0);
            return a.playlistID || !1
        },
        setVideoQuality: function(a) {
            var b = this.get(0);
            return b.player.setPlaybackQuality(a),
            this
        },
        playlist: function(a, b, c) {
            var d = this
              , e = d.get(0);
            return e.isList = !0,
            b && (a = jQuery.shuffle(a)),
            e.videoID || (e.videos = a,
            e.videoCounter = 1,
            e.videoLength = a.length,
            jQuery(e).data("property", a[0]),
            jQuery(e).YTPlayer()),
            "function" == typeof c && jQuery(e).one("YTPChanged", function() {
                c(e)
            }),
            jQuery(e).on("YTPEnd", function() {
                jQuery(e).YTPPlayNext()
            }),
            this
        },
        playNext: function() {
            var a = this.get(0);
            return a.videoCounter++,
            a.videoCounter > a.videoLength && (a.videoCounter = 1),
            jQuery(a).YTPPlayIndex(a.videoCounter),
            this
        },
        playPrev: function() {
            var a = this.get(0);
            return a.videoCounter--,
            a.videoCounter <= 0 && (a.videoCounter = a.videoLength),
            jQuery(a).YTPPlayIndex(a.videoCounter),
            this
        },
        playIndex: function(a) {
            var b = this.get(0);
            b.checkForStartAt && (clearInterval(b.checkForStartAt),
            clearInterval(b.getState)),
            b.videoCounter = a,
            b.videoCounter >= b.videoLength && (b.videoCounter = b.videoLength);
            var c = b.videos[b.videoCounter - 1];
            return jQuery(b).YTPChangeVideo(c),
            this
        },
        changeVideo: function(a) {
            var b = this
              , c = b.get(0);
            c.opt.startAt = 0,
            c.opt.stopAt = 0,
            c.opt.mask = !1,
            c.opt.mute = !0,
            c.opt.autoPlay = !0,
            c.opt.addFilters = !1,
            c.opt.coverImage = !1,
            c.hasData = !1,
            c.hasChanged = !0,
            c.player.loopTime = void 0,
            a && jQuery.extend(c.opt, a),
            console.debug("changeVideo::", c.opt),
            c.videoID = getYTPVideoID(c.opt.videoURL).videoID,
            c.opt.loop && "boolean" == typeof c.opt.loop && (c.opt.loop = 9999),
            c.wrapper.css({
                background: "none"
            }),
            jQuery(c.playerEl).CSSAnimate({
                opacity: 0
            }, c.opt.fadeOnStartTime, function() {
                jQuery.mbYTPlayer.getDataFromAPI(c),
                console.debug("YTPGetPlayer::", b.YTPGetPlayer()),
                b.YTPGetPlayer().loadVideoById({
                    videoId: c.videoID,
                    suggestedQuality: c.opt.quality
                }),
                b.YTPPause(),
                b.optimizeDisplay(),
                b.YTPCheckForState()
            });
            var d = jQuery.Event("YTPChangeVideo");
            return d.time = c.currentTime,
            jQuery(c).trigger(d),
            jQuery.mbYTPlayer.applyMask(c),
            this
        },
        getPlayer: function() {
            var a = this.get(0);
            return a.isReady ? a.player || null : null
        },
        playerDestroy: function() {
            var a = this.get(0);
            return a.isReady ? (ytp.YTAPIReady = !0,
            ytp.backgroundIsInited = !1,
            a.isInit = !1,
            a.videoID = null,
            a.isReady = !1,
            a.wrapper.remove(),
            jQuery("#controlBar_" + a.id).remove(),
            clearInterval(a.checkForStartAt),
            clearInterval(a.getState),
            this) : this
        },
        fullscreen: function(real) {
            function hideMouse() {
                YTPlayer.overlay.css({
                    cursor: "none"
                })
            }
            function RunPrefixMethod(a, b) {
                for (var c, d, e = ["webkit", "moz", "ms", "o", ""], f = 0; f < e.length && !a[c]; ) {
                    if (c = b,
                    "" == e[f] && (c = c.substr(0, 1).toLowerCase() + c.substr(1)),
                    c = e[f] + c,
                    d = typeof a[c],
                    "undefined" != d)
                        return e = [e[f]],
                        "function" == d ? a[c]() : a[c];
                    f++
                }
            }
            function launchFullscreen(a) {
                RunPrefixMethod(a, "RequestFullScreen")
            }
            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }
            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = eval(YTPlayer.opt.realfullscreen));
            var controls = jQuery("#controlBar_" + YTPlayer.id)
              , fullScreenBtn = controls.find(".mb_OnlyYT")
              , videoWrapper = YTPlayer.isPlayer ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.mbBrowser.mozilla ? "mozfullscreenchange" : jQuery.mbBrowser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function() {
                    var a = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    a ? (jQuery(YTPlayer).YTPSetVideoQuality("default"),
                    jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1,
                    fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
                    jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality),
                    videoWrapper.removeClass("YTPFullscreen"),
                    videoWrapper.CSSAnimate({
                        opacity: YTPlayer.opt.opacity
                    }, YTPlayer.opt.fadeOnStartTime),
                    videoWrapper.css({
                        zIndex: 0
                    }),
                    YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls),
                    jQuery(window).resize(),
                    jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"),
            clearTimeout(YTPlayer.hideCursor),
            YTPlayer.overlay.css({
                cursor: "auto"
            }),
            real ? cancelFullscreen() : (videoWrapper.CSSAnimate({
                opacity: YTPlayer.opt.opacity
            }, YTPlayer.opt.fadeOnStartTime),
            videoWrapper.css({
                zIndex: 0
            })),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT),
            YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function(a) {
                YTPlayer.overlay.css({
                    cursor: "auto"
                }),
                clearTimeout(YTPlayer.hideCursor),
                jQuery(a.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
            }),
            hideMouse(),
            real ? (videoWrapper.css({
                opacity: 0
            }),
            videoWrapper.addClass("YTPFullscreen"),
            launchFullscreen(videoWrapper.get(0)),
            setTimeout(function() {
                videoWrapper.CSSAnimate({
                    opacity: 1
                }, 2 * YTPlayer.opt.fadeOnStartTime),
                videoWrapper.append(controls),
                jQuery(YTPlayer).optimizeDisplay(),
                YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
            }, YTPlayer.opt.fadeOnStartTime)) : videoWrapper.css({
                zIndex: 1e4
            }).CSSAnimate({
                opacity: 1
            }, 2 * YTPlayer.opt.fadeOnStartTime),
            fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite),
            YTPlayer.isAlone = !0),
            this
        },
        toggleLoops: function() {
            var a = this.get(0)
              , b = a.opt;
            return 1 == b.loop ? b.loop = 0 : (b.startAt ? a.player.seekTo(b.startAt) : a.player.playVideo(),
            b.loop = 1),
            this
        },
        play: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            a.player.playVideo(),
            jQuery(a.playerEl).css({
                opacity: 1
            }),
            a.wrapper.css({
                backgroundImage: "none"
            }),
            a.wrapper.CSSAnimate({
                opacity: a.isAlone ? 1 : a.opt.opacity
            }, a.opt.fadeOnStartTime);
            var b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPPlayPause");
            return c.html(jQuery.mbYTPlayer.controls.pause),
            a.state = 1,
            this
        },
        togglePlay: function(a) {
            var b = this.get(0);
            return b.isReady ? (1 == b.state ? this.YTPPause() : this.YTPPlay(),
            "function" == typeof a && a(b.state),
            this) : this
        },
        stop: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            var b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPPlayPause");
            return c.html(jQuery.mbYTPlayer.controls.play),
            a.player.stopVideo(),
            this
        },
        pause: function() {
            var a = this.get(0);
            return a.isReady ? (a.player.pauseVideo(),
            a.state = 2,
            this) : this
        },
        seekTo: function(a) {
            var b = this.get(0);
            return b.isReady ? (b.player.seekTo(a, !0),
            this) : this
        },
        setVolume: function(a) {
            var b = this.get(0);
            return b.isReady ? (b.opt.vol = a,
            b.player.setVolume(b.opt.vol),
            b.volumeBar && b.volumeBar.length && b.volumeBar.updateSliderVal(a),
            this) : this
        },
        getVolume: function() {
            var a = this.get(0);
            return a.isReady ? a.player.getVolume() : this
        },
        toggleVolume: function() {
            var a = this.get(0);
            return a.isReady ? (a.isMute ? (jQuery.mbBrowser.mobile || this.YTPSetVolume(a.opt.vol),
            this.YTPUnmute()) : this.YTPMute(),
            this) : this
        },
        mute: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            if (a.isMute)
                return this;
            a.player.mute(),
            a.isMute = !0,
            a.player.setVolume(0),
            a.volumeBar && a.volumeBar.length && a.volumeBar.width() > 10 && a.volumeBar.updateSliderVal(0);
            var b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPMuteUnmute");
            c.html(jQuery.mbYTPlayer.controls.unmute),
            jQuery(a).addClass("isMuted"),
            a.volumeBar && a.volumeBar.length && a.volumeBar.addClass("muted");
            var d = jQuery.Event("YTPMuted");
            return d.time = a.currentTime,
            a.preventTrigger || jQuery(a).trigger(d),
            this
        },
        unmute: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            if (!a.isMute)
                return this;
            a.player.unMute(),
            a.isMute = !1,
            jQuery(a).YTPSetVolume(a.opt.vol),
            a.volumeBar && a.volumeBar.length && a.volumeBar.updateSliderVal(a.opt.vol > 10 ? a.opt.vol : 10);
            var b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPMuteUnmute");
            c.html(jQuery.mbYTPlayer.controls.mute),
            jQuery(a).removeClass("isMuted"),
            a.volumeBar && a.volumeBar.length && a.volumeBar.removeClass("muted");
            var d = jQuery.Event("YTPUnmuted");
            return d.time = a.currentTime,
            a.preventTrigger || jQuery(a).trigger(d),
            this
        },
        applyFilter: function(a, b) {
            var c = this
              , d = c.get(0);
            return d.isReady ? (d.filters[a].value = b,
            void (d.filtersEnabled && c.YTPEnableFilters())) : this
        },
        applyFilters: function(a) {
            var b = this
              , c = b.get(0);
            if (!c.isReady)
                return this;
            if (!c.isReady)
                return jQuery(c).on("YTPReady", function() {
                    b.YTPApplyFilters(a)
                }),
                this;
            for (var d in a)
                b.YTPApplyFilter(d, a[d]);
            b.trigger("YTPFiltersApplied")
        },
        toggleFilter: function(a, b) {
            var c = this
              , d = c.get(0);
            return d.isReady ? (d.filters[a].value ? d.filters[a].value = 0 : d.filters[a].value = b,
            d.filtersEnabled && jQuery(d).YTPEnableFilters(),
            this) : this
        },
        toggleFilters: function(a) {
            var b = this
              , c = b.get(0);
            return c.isReady ? (c.filtersEnabled ? (jQuery(c).trigger("YTPDisableFilters"),
            jQuery(c).YTPDisableFilters()) : (jQuery(c).YTPEnableFilters(),
            jQuery(c).trigger("YTPEnableFilters")),
            "function" == typeof a && a(c.filtersEnabled),
            this) : this
        },
        disableFilters: function() {
            var a = this
              , b = a.get(0);
            if (!b.isReady)
                return this;
            var c = jQuery(b.playerEl);
            return c.css("-webkit-filter", ""),
            c.css("filter", ""),
            b.filtersEnabled = !1,
            this
        },
        enableFilters: function() {
            var a = this
              , b = a.get(0);
            if (!b.isReady)
                return this;
            var c = jQuery(b.playerEl)
              , d = "";
            for (var e in b.filters)
                b.filters[e].value && (d += e.replace("_", "-") + "(" + b.filters[e].value + b.filters[e].unit + ") ");
            return c.css("-webkit-filter", d),
            c.css("filter", d),
            b.filtersEnabled = !0,
            this
        },
        removeFilter: function(a, b) {
            var c = this
              , d = c.get(0);
            if (!d.isReady)
                return this;
            if ("function" == typeof a && (b = a,
            a = null),
            a)
                c.YTPApplyFilter(a, 0),
                "function" == typeof b && b(a);
            else {
                for (var e in d.filters)
                    c.YTPApplyFilter(e, 0);
                "function" == typeof b && b(e),
                d.filters = jQuery.extend(!0, {}, jQuery.mbYTPlayer.defaultFilters)
            }
            var f = jQuery.Event("YTPFiltersApplied");
            return c.trigger(f),
            this
        },
        getFilters: function() {
            var a = this.get(0);
            return a.isReady ? a.filters : this
        },
        addMask: function(a) {
            var b = this.get(0);
            if (!b.isReady)
                return this;
            a || (a = b.actualMask);
            var c = jQuery("<img/>").attr("src", a).on("load", function() {
                b.overlay.CSSAnimate({
                    opacity: 0
                }, b.opt.fadeOnStartTime, function() {
                    b.hasMask = !0,
                    c.remove(),
                    b.overlay.css({
                        backgroundImage: "url(" + a + ")",
                        backgroundRepeat: "no-repeat",
                        backgroundPosition: "center center",
                        backgroundSize: "cover"
                    }),
                    b.overlay.CSSAnimate({
                        opacity: 1
                    }, b.opt.fadeOnStartTime)
                })
            });
            return this
        },
        removeMask: function() {
            var a = this.get(0);
            return a.isReady ? (a.overlay.CSSAnimate({
                opacity: 0
            }, a.opt.fadeOnStartTime, function() {
                a.hasMask = !1,
                a.overlay.css({
                    backgroundImage: "",
                    backgroundRepeat: "",
                    backgroundPosition: "",
                    backgroundSize: ""
                }),
                a.overlay.CSSAnimate({
                    opacity: 1
                }, a.opt.fadeOnStartTime)
            }),
            this) : this
        },
        applyMask: function(a) {
            var b = jQuery(a);
            if (!a.isReady)
                return this;
            if (b.off("YTPTime.mask"),
            a.opt.mask)
                if ("string" == typeof a.opt.mask)
                    b.YTPAddMask(a.opt.mask),
                    a.actualMask = a.opt.mask;
                else if ("object" == typeof a.opt.mask) {
                    for (var c in a.opt.mask)
                        if (a.opt.mask[c]) {
                            jQuery("<img/>").attr("src", a.opt.mask[c])
                        }
                    a.opt.mask[0] && b.YTPAddMask(a.opt.mask[0]),
                    b.on("YTPTime.mask", function(c) {
                        for (var d in a.opt.mask)
                            c.time == d && (a.opt.mask[d] ? (b.YTPAddMask(a.opt.mask[d]),
                            a.actualMask = a.opt.mask[d]) : b.YTPRemoveMask())
                    })
                }
        },
        toggleMask: function() {
            var a = this.get(0);
            if (!a.isReady)
                return this;
            var b = jQuery(a);
            return a.hasMask ? b.YTPRemoveMask() : b.YTPAddMask(),
            this
        },
        manageProgress: function() {
            var a = this.get(0)
              , b = jQuery("#controlBar_" + a.id)
              , c = b.find(".mb_YTPProgress")
              , d = b.find(".mb_YTPLoaded")
              , e = b.find(".mb_YTPseekbar")
              , f = c.outerWidth()
              , g = Math.floor(a.player.getCurrentTime())
              , h = Math.floor(a.player.getDuration())
              , i = g * f / h
              , j = 0
              , k = 100 * a.player.getVideoLoadedFraction();
            return d.css({
                left: j,
                width: k + "%"
            }),
            e.css({
                left: 0,
                width: i
            }),
            {
                totalTime: h,
                currentTime: g
            }
        },
        buildControls: function(YTPlayer) {
            if (jQuery("#controlBar_" + YTPlayer.id).remove(),
            !YTPlayer.opt.showControls)
                return void (YTPlayer.controlBar = !1);
            if (YTPlayer.opt.showYTLogo = YTPlayer.opt.showYTLogo || YTPlayer.opt.printUrl,
            !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide().on("click", function(a) {
                    a.stopPropagation()
                });
                var buttonBar = jQuery("<div/>").addClass("buttonBar")
                  , playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlayPause ytpicon").on("click", function(a) {
                    a.stopPropagation(),
                    jQuery(YTPlayer).YTPTogglePlay()
                })
                  , MuteUnmute = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").on("click", function(a) {
                    a.stopPropagation(),
                    jQuery(YTPlayer).YTPToggleVolume()
                })
                  , volumeBar = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({
                    display: "inline-block"
                });
                YTPlayer.volumeBar = volumeBar;
                var idx = jQuery("<span/>").addClass("mb_YTPTime")
                  , vURL = YTPlayer.opt.videoURL ? YTPlayer.opt.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + YTPlayer.opt.videoURL);
                var movieUrl = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function() {
                    window.open(vURL, "viewOnYT")
                })
                  , onlyVideo = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function(a) {
                    a.stopPropagation(),
                    jQuery(YTPlayer).YTPFullscreen(YTPlayer.opt.realfullscreen)
                })
                  , progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").on("click", function(a) {
                    a.stopPropagation(),
                    timeBar.css({
                        width: a.clientX - timeBar.offset().left
                    }),
                    YTPlayer.timeW = a.clientX - timeBar.offset().left,
                    YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                        width: 0
                    });
                    var b = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer["goto"] = timeBar.outerWidth() * b / progressBar.outerWidth(),
                    YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0),
                    YTPlayer.controlBar.find(".mb_YTPLoaded").css({
                        width: 0
                    })
                })
                  , loadedBar = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute")
                  , timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar),
                buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx),
                YTPlayer.opt.showYTLogo && buttonBar.append(movieUrl),
                (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo),
                YTPlayer.controlBar.append(buttonBar).append(progressBar),
                YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"),
                YTPlayer.wrapper.before(YTPlayer.controlBar)),
                volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function(a) {
                        0 == a.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(),
                        YTPlayer.player.setVolume(a.value),
                        YTPlayer.isMute || (YTPlayer.opt.vol = a.value)
                    }
                })
            }
        },
        checkForState: function() {
            var YTPlayer = this.get(0)
              , $YTPlayer = jQuery(YTPlayer);
            clearInterval(YTPlayer.getState);
            var interval = 100;
            return jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer),
            void (YTPlayer.getState = setInterval(function() {
                var $YTPlayer = jQuery(YTPlayer);
                if (YTPlayer.isReady) {
                    var prog = jQuery(YTPlayer).YTPManageProgress()
                      , stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                    if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0,
                    YTPlayer.currentTime != prog.currentTime) {
                        var YTPEvent = jQuery.Event("YTPTime");
                        YTPEvent.time = YTPlayer.currentTime,
                        jQuery(YTPlayer).trigger(YTPEvent)
                    }
                    if (YTPlayer.currentTime = prog.currentTime,
                    YTPlayer.totalTime = YTPlayer.player.getDuration(),
                    0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"),
                    YTPlayer.opt.showControls && (prog.totalTime ? YTPlayer.controlBar.find(".mb_YTPTime").html(jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime)) : YTPlayer.controlBar.find(".mb_YTPTime").html("-- : -- / -- : --")),
                    eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0,
                    YTPlayer.preventTrigger = !0,
                    YTPlayer.preventTrigger = !0,
                    $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1,
                    YTPlayer.preventTrigger = !0,
                    $YTPlayer.YTPPause())),
                    YTPlayer.opt.playOnlyIfVisible) {
                        var isOnScreen = jQuery.mbYTPlayer.isOnScreen(YTPlayer, YTPlayer.opt.onScreenPercentage);
                        isOnScreen || 1 != YTPlayer.state ? isOnScreen && !YTPlayer.isOnScreen && (YTPlayer.isOnScreen = !0,
                        YTPlayer.player.playVideo()) : (YTPlayer.isOnScreen = !1,
                        $YTPlayer.YTPPause())
                    }
                    if (YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"),
                    YTPlayer.isCompact = !0,
                    !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar.length && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"),
                    YTPlayer.isCompact = !1,
                    !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)),
                    YTPlayer.player.getPlayerState() > 0 && (parseFloat(YTPlayer.player.getDuration() - .5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                        if (YTPlayer.isEnded)
                            return;
                        if (YTPlayer.isEnded = !0,
                        setTimeout(function() {
                            YTPlayer.isEnded = !1
                        }, 1e3),
                        YTPlayer.isList) {
                            if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                                YTPlayer.player.loopTime = void 0,
                                clearInterval(YTPlayer.getState);
                                var YTPEnd = jQuery.Event("YTPEnd");
                                return YTPEnd.time = YTPlayer.currentTime,
                                void jQuery(YTPlayer).trigger(YTPEnd)
                            }
                        } else if (!YTPlayer.opt.loop || YTPlayer.opt.loop > 0 && YTPlayer.player.loopTime === YTPlayer.opt.loop - 1) {
                            YTPlayer.player.loopTime = void 0,
                            YTPlayer.state = 2;
                            var bgndURL = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                            return YTPlayer.opt.containment.css({
                                background: bgndURL,
                                backgroundSize: "cover"
                            }),
                            jQuery(YTPlayer).YTPPause(),
                            void YTPlayer.wrapper.CSSAnimate({
                                opacity: 0
                            }, YTPlayer.opt.fadeOnStartTime, function() {
                                YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                                var a = jQuery.Event("YTPEnd");
                                a.time = YTPlayer.currentTime,
                                jQuery(YTPlayer).trigger(a),
                                YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0);
                                var b = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                                YTPlayer.opt.containment.css({
                                    background: b,
                                    backgroundSize: "cover"
                                })
                            })
                        }
                        YTPlayer.player.loopTime = YTPlayer.player.loopTime ? ++YTPlayer.player.loopTime : 1,
                        YTPlayer.opt.startAt = YTPlayer.opt.startAt || 1,
                        YTPlayer.preventTrigger = !0,
                        YTPlayer.state = 2,
                        YTPlayer.player.pauseVideo(),
                        YTPlayer.player.seekTo(YTPlayer.opt.startAt, !0),
                        YTPlayer.player.playVideo()
                    }
                }
            }, interval))) : ($YTPlayer.YTPPlayerDestroy(),
            clearInterval(YTPlayer.getState),
            void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function(YTPlayer) {
            var $YTPlayer = jQuery(YTPlayer);
            if (!jQuery.contains(document, YTPlayer))
                return void $YTPlayer.YTPPlayerDestroy();
            if (jQuery.mbYTPlayer.buildControls(YTPlayer),
            YTPlayer.overlay)
                if (YTPlayer.opt.addRaster) {
                    var classN = "dot" == YTPlayer.opt.addRaster ? "raster-dot" : "raster";
                    YTPlayer.overlay.addClass(YTPlayer.isRetina ? classN + " retina" : classN)
                } else
                    YTPlayer.overlay.removeClass(function(a, b) {
                        var c = b.split(" ")
                          , d = [];
                        return jQuery.each(c, function(a, b) {
                            /raster.*/.test(b) && d.push(b)
                        }),
                        d.push("retina"),
                        d.join(" ")
                    });
            YTPlayer.preventTrigger = !0,
            YTPlayer.state = 2,
            YTPlayer.preventTrigger = !0,
            YTPlayer.player.mute(),
            YTPlayer.player.playVideo(),
            YTPlayer.isStarting = !0;
            var startAt = YTPlayer.start_from_last ? YTPlayer.start_from_last : YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 1;
            return YTPlayer.checkForStartAt = setInterval(function() {
                YTPlayer.player.seekTo(startAt, !0);
                var canPlayVideo = YTPlayer.player.getVideoLoadedFraction() >= startAt / YTPlayer.player.getDuration();
                if (YTPlayer.player.getDuration() > 0 && YTPlayer.player.getCurrentTime() >= startAt && canPlayVideo) {
                    YTPlayer.start_from_last = null,
                    clearInterval(YTPlayer.checkForStartAt),
                    "function" == typeof YTPlayer.opt.onReady && YTPlayer.opt.onReady(YTPlayer),
                    YTPlayer.isReady = !0,
                    $YTPlayer.YTPRemoveFilter(),
                    YTPlayer.opt.addFilters ? $YTPlayer.YTPApplyFilters(YTPlayer.opt.addFilters) : $YTPlayer.YTPApplyFilters(),
                    $YTPlayer.YTPEnableFilters();
                    var YTPready = jQuery.Event("YTPReady");
                    if (YTPready.time = YTPlayer.currentTime,
                    $YTPlayer.trigger(YTPready),
                    YTPlayer.state = 2,
                    $YTPlayer.YTPPause(),
                    YTPlayer.opt.mute ? $YTPlayer.YTPMute() : (YTPlayer.player.unMute(),
                    YTPlayer.opt.autoPlay && console.debug("To make the video 'auto-play' you must mute the audio according with the new vendor policy")),
                    "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) ? _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]) : "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()),
                    YTPlayer.opt.autoPlay) {
                        var YTPStart = jQuery.Event("YTPStart");
                        YTPStart.time = YTPlayer.currentTime,
                        jQuery(YTPlayer).trigger(YTPStart),
                        YTPlayer.isStarting = !1,
                        "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && jQuery("body").one("mousedown.YTPstart", function() {
                            $YTPlayer.YTPPlay()
                        }),
                        $YTPlayer.YTPPlay()
                    } else
                        YTPlayer.player.pauseVideo(),
                        setTimeout(function() {
                            YTPlayer.start_from_last && YTPlayer.player.seekTo(startAt, !0),
                            YTPlayer.isPlayer || (YTPlayer.opt.coverImage ? (YTPlayer.wrapper.css({
                                opacity: 0
                            }),
                            setTimeout(function() {
                                var a = YTPlayer.opt.coverImage ? "url(" + YTPlayer.opt.coverImage + ") center center" : YTPlayer.orig_containment_background;
                                YTPlayer.wrapper.css({
                                    background: a,
                                    backgroundSize: "cover",
                                    backgroundRepeat: "no-repeat"
                                })
                            }, YTPlayer.opt.fadeOnStartTime)) : (jQuery(YTPlayer.playerEl).CSSAnimate({
                                opacity: 1
                            }, YTPlayer.opt.fadeOnStartTime),
                            YTPlayer.wrapper.CSSAnimate({
                                opacity: YTPlayer.isAlone ? 1 : YTPlayer.opt.opacity
                            }, YTPlayer.opt.fadeOnStartTime))),
                            YTPlayer.isStarting = !1
                        }, 150),
                        YTPlayer.controlBar.length && YTPlayer.controlBar.find(".mb_YTPPlayPause").html(jQuery.mbYTPlayer.controls.play);
                    YTPlayer.isPlayer && !YTPlayer.opt.autoPlay && YTPlayer.loading && YTPlayer.loading.length && (YTPlayer.loading.html("Ready"),
                    setTimeout(function() {
                        YTPlayer.loading.fadeOut()
                    }, 100)),
                    YTPlayer.controlBar && YTPlayer.controlBar.length && YTPlayer.controlBar.slideDown(1e3)
                }
                "mac" == jQuery.mbBrowser.os.name && jQuery.mbBrowser.safari && (YTPlayer.player.playVideo(),
                startAt >= 0 && YTPlayer.player.seekTo(startAt, !0))
            }, 100),
            $YTPlayer
        },
        getTime: function() {
            var a = this.get(0);
            return jQuery.mbYTPlayer.formatTime(a.currentTime)
        },
        getTotalTime: function(a) {
            var b = this.get(0);
            return jQuery.mbYTPlayer.formatTime(b.totalTime)
        },
        formatTime: function(a) {
            var b = Math.floor(a / 60)
              , c = Math.floor(a - 60 * b);
            return (9 >= b ? "0" + b : b) + " : " + (9 >= c ? "0" + c : c)
        },
        setAnchor: function(a) {
            var b = this;
            b.optimizeDisplay(a)
        },
        getAnchor: function() {
            var a = this.get(0);
            return a.opt.anchor
        }
    },
    jQuery.fn.optimizeDisplay = function(anchor) {
        var YTPlayer = this.get(0)
          , vid = {};
        YTPlayer.opt.anchor = anchor || YTPlayer.opt.anchor,
        YTPlayer.opt.anchor = "undefined " != typeof YTPlayer.opt.anchor ? YTPlayer.opt.anchor : "center,center";
        var YTPAlign = YTPlayer.opt.anchor.split(",")
          , el = YTPlayer.wrapper
          , iframe = jQuery(YTPlayer.playerEl);
        if (YTPlayer.opt.optimizeDisplay) {
            var abundance = iframe.height() * YTPlayer.opt.abundance
              , win = {};
            win.width = el.outerWidth(),
            win.height = el.outerHeight() + abundance,
            YTPlayer.opt.ratio = "auto" === YTPlayer.opt.ratio ? 16 / 9 : YTPlayer.opt.ratio,
            YTPlayer.opt.ratio = eval(YTPlayer.opt.ratio),
            vid.width = win.width,
            vid.height = Math.ceil(vid.width / YTPlayer.opt.ratio),
            vid.marginTop = Math.ceil(-((vid.height - win.height) / 2)),
            vid.marginLeft = 0;
            var lowest = vid.height < win.height;
            lowest && (vid.height = win.height,
            vid.width = Math.ceil(vid.height * YTPlayer.opt.ratio),
            vid.marginTop = 0,
            vid.marginLeft = Math.ceil(-((vid.width - win.width) / 2)));
            for (var a in YTPAlign)
                if (YTPAlign.hasOwnProperty(a)) {
                    var al = YTPAlign[a].replace(/ /g, "");
                    switch (al) {
                    case "top":
                        vid.marginTop = lowest ? -((vid.height - win.height) / 2) : 0;
                        break;
                    case "bottom":
                        vid.marginTop = lowest ? 0 : -(vid.height - win.height);
                        break;
                    case "left":
                        vid.marginLeft = 0;
                        break;
                    case "right":
                        vid.marginLeft = lowest ? -(vid.width - win.width) : 0;
                        break;
                    default:
                        vid.width > win.width && (vid.marginLeft = -((vid.width - win.width) / 2))
                    }
                }
        } else
            vid.width = "100%",
            vid.height = "100%",
            vid.marginTop = 0,
            vid.marginLeft = 0;
        iframe.css({
            width: vid.width,
            height: vid.height,
            marginTop: vid.marginTop,
            marginLeft: vid.marginLeft,
            maxWidth: "initial"
        })
    }
    ,
    jQuery.shuffle = function(a) {
        for (var b = a.slice(), c = b.length, d = c; d--; ) {
            var e = parseInt(Math.random() * c)
              , f = b[d];
            b[d] = b[e],
            b[e] = f
        }
        return b
    }
    ,
    jQuery.fn.unselectable = function() {
        return this.each(function() {
            jQuery(this).css({
                "-moz-user-select": "none",
                "-webkit-user-select": "none",
                "user-select": "none"
            }).attr("unselectable", "on")
        })
    }
    ,
    jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer,
    jQuery.fn.YTPCheckForState = jQuery.mbYTPlayer.checkForState,
    jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer,
    jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID,
    jQuery.fn.YTPGetPlaylistID = jQuery.mbYTPlayer.getPlaylistID,
    jQuery.fn.YTPChangeVideo = jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeVideo,
    jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy,
    jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play,
    jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay,
    jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop,
    jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause,
    jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo,
    jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist,
    jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext,
    jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev,
    jQuery.fn.YTPPlayIndex = jQuery.mbYTPlayer.playIndex,
    jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute,
    jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute,
    jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume,
    jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume,
    jQuery.fn.YTPGetVolume = jQuery.mbYTPlayer.getVolume,
    jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData,
    jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen,
    jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops,
    jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality,
    jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress,
    jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter,
    jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters,
    jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter,
    jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters,
    jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter,
    jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters,
    jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters,
    jQuery.fn.YTPGetFilters = jQuery.mbYTPlayer.getFilters,
    jQuery.fn.YTPGetTime = jQuery.mbYTPlayer.getTime,
    jQuery.fn.YTPGetTotalTime = jQuery.mbYTPlayer.getTotalTime,
    jQuery.fn.YTPAddMask = jQuery.mbYTPlayer.addMask,
    jQuery.fn.YTPRemoveMask = jQuery.mbYTPlayer.removeMask,
    jQuery.fn.YTPToggleMask = jQuery.mbYTPlayer.toggleMask,
    jQuery.fn.YTPSetAnchor = jQuery.mbYTPlayer.setAnchor,
    jQuery.fn.YTPGetAnchor = jQuery.mbYTPlayer.getAnchor
}(jQuery, ytp),
jQuery.support.CSStransition = function() {
    var a = (document.body || document.documentElement).style;
    return void 0 !== a.transition || void 0 !== a.WebkitTransition || void 0 !== a.MozTransition || void 0 !== a.MsTransition || void 0 !== a.OTransition
}(),
jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {
            min: 0,
            max: 100,
            unit: "px"
        },
        brightness: {
            min: 0,
            max: 400,
            unit: "%"
        },
        contrast: {
            min: 0,
            max: 400,
            unit: "%"
        },
        grayscale: {
            min: 0,
            max: 100,
            unit: "%"
        },
        hueRotate: {
            min: 0,
            max: 360,
            unit: "deg"
        },
        invert: {
            min: 0,
            max: 100,
            unit: "%"
        },
        saturate: {
            min: 0,
            max: 400,
            unit: "%"
        },
        sepia: {
            min: 0,
            max: 100,
            unit: "%"
        }
    },
    normalizeCss: function(a) {
        var b = jQuery.extend(!0, {}, a);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-"),
        jQuery.CSS.sfx = "";
        for (var c in b) {
            if ("transform" === c && (b[jQuery.CSS.sfx + "transform"] = b[c],
            delete b[c]),
            "transform-origin" === c && (b[jQuery.CSS.sfx + "transform-origin"] = a[c],
            delete b[c]),
            "filter" !== c || jQuery.browser.mozilla || (b[jQuery.CSS.sfx + "filter"] = a[c],
            delete b[c]),
            "blur" === c && setFilter(b, "blur", a[c]),
            "brightness" === c && setFilter(b, "brightness", a[c]),
            "contrast" === c && setFilter(b, "contrast", a[c]),
            "grayscale" === c && setFilter(b, "grayscale", a[c]),
            "hueRotate" === c && setFilter(b, "hueRotate", a[c]),
            "invert" === c && setFilter(b, "invert", a[c]),
            "saturate" === c && setFilter(b, "saturate", a[c]),
            "sepia" === c && setFilter(b, "sepia", a[c]),
            "x" === c) {
                var d = jQuery.CSS.sfx + "transform";
                b[d] = b[d] || "",
                b[d] += " translateX(" + setUnit(a[c], "px") + ")",
                delete b[c]
            }
            "y" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " translateY(" + setUnit(a[c], "px") + ")",
            delete b[c]),
            "z" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " translateZ(" + setUnit(a[c], "px") + ")",
            delete b[c]),
            "rotate" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " rotate(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "rotateX" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " rotateX(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "rotateY" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " rotateY(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "rotateZ" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " rotateZ(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "scale" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " scale(" + setUnit(a[c], "") + ")",
            delete b[c]),
            "scaleX" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " scaleX(" + setUnit(a[c], "") + ")",
            delete b[c]),
            "scaleY" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " scaleY(" + setUnit(a[c], "") + ")",
            delete b[c]),
            "scaleZ" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " scaleZ(" + setUnit(a[c], "") + ")",
            delete b[c]),
            "skew" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " skew(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "skewX" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " skewX(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "skewY" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " skewY(" + setUnit(a[c], "deg") + ")",
            delete b[c]),
            "perspective" === c && (d = jQuery.CSS.sfx + "transform",
            b[d] = b[d] || "",
            b[d] += " perspective(" + setUnit(a[c], "px") + ")",
            delete b[c])
        }
        return b
    },
    getProp: function(a) {
        var b, c = [];
        for (b in a)
            0 > c.indexOf(b) && c.push(uncamel(b));
        return c.join(",")
    },
    animate: function(a, b, c, d, e) {
        return this.each(function() {
            function f() {
                g.called = !0,
                g.CSSAIsRunning = !1,
                h.off(jQuery.CSS.transitionEnd + "." + g.id),
                clearTimeout(g.timeout),
                h.css(jQuery.CSS.sfx + "transition", ""),
                "function" == typeof e && e.apply(g),
                "function" == typeof g.CSSqueue && (g.CSSqueue(),
                g.CSSqueue = null)
            }
            var g = this
              , h = jQuery(this);
            g.id = g.id || "CSSA_" + (new Date).getTime();
            var i = i || {
                type: "noEvent"
            };
            if (g.CSSAIsRunning && g.eventType == i.type && !jQuery.browser.msie && 9 >= jQuery.browser.version)
                g.CSSqueue = function() {
                    h.CSSAnimate(a, b, c, d, e)
                }
                ;
            else if (g.CSSqueue = null,
            g.eventType = i.type,
            0 !== h.length && a) {
                if (a = jQuery.normalizeCss(a),
                g.CSSAIsRunning = !0,
                "function" == typeof b && (e = b,
                b = jQuery.fx.speeds._default),
                "function" == typeof c && (d = c,
                c = 0),
                "string" == typeof c && (e = c,
                c = 0),
                "function" == typeof d && (e = d,
                d = "cubic-bezier(0.65,0.03,0.36,0.72)"),
                "string" == typeof b)
                    for (var j in jQuery.fx.speeds) {
                        if (b == j) {
                            b = jQuery.fx.speeds[j];
                            break
                        }
                        b = jQuery.fx.speeds._default
                    }
                if (b || (b = jQuery.fx.speeds._default),
                "string" == typeof e && (d = e,
                e = null),
                jQuery.support.CSStransition) {
                    var k = {
                        "default": "ease",
                        "in": "ease-in",
                        out: "ease-out",
                        "in-out": "ease-in-out",
                        snap: "cubic-bezier(0,1,.5,1)",
                        easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                        easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                        easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                        easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                        easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                        easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                        easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                        easeInOutExpo: "cubic-bezier(1,0,0,1)",
                        easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                        easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                        easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                        easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                        easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                        easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                        easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                        easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                        easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                        easeInSine: "cubic-bezier(.47,0,.745,.715)",
                        easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                        easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                        easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                        easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                        easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                    };
                    k[d] && (d = k[d]),
                    h.off(jQuery.CSS.transitionEnd + "." + g.id),
                    k = jQuery.CSS.getProp(a);
                    var l = {};
                    jQuery.extend(l, a),
                    l[jQuery.CSS.sfx + "transition-property"] = k,
                    l[jQuery.CSS.sfx + "transition-duration"] = b + "ms",
                    l[jQuery.CSS.sfx + "transition-delay"] = c + "ms",
                    l[jQuery.CSS.sfx + "transition-timing-function"] = d,
                    setTimeout(function() {
                        h.one(jQuery.CSS.transitionEnd + "." + g.id, f),
                        h.css(l)
                    }, 1),
                    g.timeout = setTimeout(function() {
                        g.called || !e ? (g.called = !1,
                        g.CSSAIsRunning = !1) : (h.css(jQuery.CSS.sfx + "transition", ""),
                        e.apply(g),
                        g.CSSAIsRunning = !1,
                        "function" == typeof g.CSSqueue && (g.CSSqueue(),
                        g.CSSqueue = null))
                    }, b + c + 10)
                } else {
                    for (k in a)
                        "transform" === k && delete a[k],
                        "filter" === k && delete a[k],
                        "transform-origin" === k && delete a[k],
                        "auto" === a[k] && delete a[k],
                        "x" === k && (i = a[k],
                        j = "left",
                        a[j] = i,
                        delete a[k]),
                        "y" === k && (i = a[k],
                        j = "top",
                        a[j] = i,
                        delete a[k]),
                        "-ms-transform" !== k && "-ms-filter" !== k || delete a[k];
                    h.delay(c).animate(a, b, e)
                }
            }
        })
    }
},
jQuery.fn.CSSAnimate = jQuery.CSS.animate,
jQuery.normalizeCss = jQuery.CSS.normalizeCss,
jQuery.fn.css3 = function(a) {
    return this.each(function() {
        var b = jQuery(this)
          , c = jQuery.normalizeCss(a);
        b.css(c)
    })
}
;
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {},
jQuery.browser.mozilla = !1,
jQuery.browser.webkit = !1,
jQuery.browser.opera = !1,
jQuery.browser.safari = !1,
jQuery.browser.chrome = !1,
jQuery.browser.androidStock = !1,
jQuery.browser.msie = !1,
jQuery.browser.edge = !1,
jQuery.browser.ua = nAgt;
var getOS = function() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"),
    -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"),
    -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"),
    /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],
    a.version = a.version.replace(/_/g, ".").substring(0, 5)),
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"),
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"),
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"),
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"),
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"),
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"),
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"),
    a.name = a.name.toLowerCase(),
    a.major_version = "Unknown",
    a.minor_version = "Unknown",
    "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]),
    a.minor_version = parseFloat(a.version.split(".")[1])),
    a
};
jQuery.browser.os = getOS(),
jQuery.browser.hasTouch = isTouchSupported(),
jQuery.browser.name = navigator.appName,
jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
    jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
    jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
    jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3
      , end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else
    -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0,
    jQuery.browser.name = "Microsoft Edge",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.chrome = !0,
    jQuery.browser.name = "Chrome",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"),
    jQuery.browser.webkit = !0,
    jQuery.browser.androidStock = !0,
    jQuery.browser.name = "androidStock",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.safari = !0,
    jQuery.browser.name = "Safari",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.safari = !0,
    jQuery.browser.name = "Safari",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0,
    jQuery.browser.name = "Firefox",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset),
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 1),
    jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
-1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
jQuery.browser.version = jQuery.browser.majorVersion,
jQuery.browser.android = /Android/i.test(nAgt),
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
jQuery.isMobile = jQuery.browser.mobile,
jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(),
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),
jQuery.mbBrowser = jQuery.browser,
jQuery.browser.versionCompare = function(a, b) {
    if ("stringstring" != typeof a + typeof b)
        return !1;
    for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); f > e; e++) {
        if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e]))
            return 1;
        if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e]))
            return -1
    }
    return 0
}
;
var nAgt = navigator.userAgent;
jQuery.browser = jQuery.browser || {},
jQuery.browser.mozilla = !1,
jQuery.browser.webkit = !1,
jQuery.browser.opera = !1,
jQuery.browser.safari = !1,
jQuery.browser.chrome = !1,
jQuery.browser.androidStock = !1,
jQuery.browser.msie = !1,
jQuery.browser.edge = !1,
jQuery.browser.ua = nAgt;
var getOS = function() {
    var a = {
        version: "Unknown version",
        name: "Unknown OS"
    };
    return -1 != navigator.appVersion.indexOf("Win") && (a.name = "Windows"),
    -1 != navigator.appVersion.indexOf("Mac") && 0 > navigator.appVersion.indexOf("Mobile") && (a.name = "Mac"),
    -1 != navigator.appVersion.indexOf("Linux") && (a.name = "Linux"),
    /Mac OS X/.test(nAgt) && !/Mobile/.test(nAgt) && (a.version = /Mac OS X (10[\.\_\d]+)/.exec(nAgt)[1],
    a.version = a.version.replace(/_/g, ".").substring(0, 5)),
    /Windows/.test(nAgt) && (a.version = "Unknown.Unknown"),
    /Windows NT 5.1/.test(nAgt) && (a.version = "5.1"),
    /Windows NT 6.0/.test(nAgt) && (a.version = "6.0"),
    /Windows NT 6.1/.test(nAgt) && (a.version = "6.1"),
    /Windows NT 6.2/.test(nAgt) && (a.version = "6.2"),
    /Windows NT 10.0/.test(nAgt) && (a.version = "10.0"),
    /Linux/.test(nAgt) && /Linux/.test(nAgt) && (a.version = "Unknown.Unknown"),
    a.name = a.name.toLowerCase(),
    a.major_version = "Unknown",
    a.minor_version = "Unknown",
    "Unknown.Unknown" != a.version && (a.major_version = parseFloat(a.version.split(".")[0]),
    a.minor_version = parseFloat(a.version.split(".")[1])),
    a
};
jQuery.browser.os = getOS(),
jQuery.browser.hasTouch = isTouchSupported(),
jQuery.browser.name = navigator.appName,
jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
var nameOffset, verOffset, ix;
if (-1 != (verOffset = nAgt.indexOf("Opera")))
    jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 6),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8));
else if (-1 != (verOffset = nAgt.indexOf("OPR")))
    jQuery.browser.opera = !0,
    jQuery.browser.name = "Opera",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 4);
else if (-1 != (verOffset = nAgt.indexOf("MSIE")))
    jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5);
else if (-1 != nAgt.indexOf("Trident")) {
    jQuery.browser.msie = !0,
    jQuery.browser.name = "Microsoft Internet Explorer";
    var start = nAgt.indexOf("rv:") + 3
      , end = start + 4;
    jQuery.browser.fullVersion = nAgt.substring(start, end)
} else
    -1 != (verOffset = nAgt.indexOf("Edge")) ? (jQuery.browser.edge = !0,
    jQuery.browser.name = "Microsoft Edge",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 5)) : -1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.chrome = !0,
    jQuery.browser.name = "Chrome",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 < nAgt.indexOf("mozilla/5.0") && -1 < nAgt.indexOf("android ") && -1 < nAgt.indexOf("applewebkit") && !(-1 < nAgt.indexOf("chrome")) ? (verOffset = nAgt.indexOf("Chrome"),
    jQuery.browser.webkit = !0,
    jQuery.browser.androidStock = !0,
    jQuery.browser.name = "androidStock",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.safari = !0,
    jQuery.browser.name = "Safari",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0,
    jQuery.browser.safari = !0,
    jQuery.browser.name = "Safari",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 7),
    -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0,
    jQuery.browser.name = "Firefox",
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset),
    jQuery.browser.fullVersion = nAgt.substring(verOffset + 1),
    jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
-1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
-1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)),
jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10),
isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion),
jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)),
jQuery.browser.version = jQuery.browser.majorVersion,
jQuery.browser.android = /Android/i.test(nAgt),
jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt),
jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt),
jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt),
jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt),
jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt),
jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle,
jQuery.isMobile = jQuery.browser.mobile,
jQuery.isTablet = jQuery.browser.mobile && 765 < jQuery(window).width(),
jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt),
jQuery.mbBrowser = jQuery.browser,
jQuery.browser.versionCompare = function(a, b) {
    if ("stringstring" != typeof a + typeof b)
        return !1;
    for (var c = a.split("."), d = b.split("."), e = 0, f = Math.max(c.length, d.length); f > e; e++) {
        if (c[e] && !d[e] && 0 < parseInt(c[e]) || parseInt(c[e]) > parseInt(d[e]))
            return 1;
        if (d[e] && !c[e] && 0 < parseInt(d[e]) || parseInt(c[e]) < parseInt(d[e]))
            return -1
    }
    return 0
}
,
function(a) {
    a.simpleSlider = {
        defaults: {
            initialval: 0,
            scale: 100,
            orientation: "h",
            readonly: !1,
            callback: !1
        },
        events: {
            start: a.browser.mobile ? "touchstart" : "mousedown",
            end: a.browser.mobile ? "touchend" : "mouseup",
            move: a.browser.mobile ? "touchmove" : "mousemove"
        },
        init: function(b) {
            return this.each(function() {
                var c = this
                  , d = a(c);
                d.addClass("simpleSlider"),
                c.opt = {},
                a.extend(c.opt, a.simpleSlider.defaults, b),
                a.extend(c.opt, d.data());
                var e = "h" == c.opt.orientation ? "horizontal" : "vertical";
                e = a("<div/>").addClass("level").addClass(e),
                d.prepend(e),
                c.level = e,
                d.css({
                    cursor: "default"
                }),
                "auto" == c.opt.scale && (c.opt.scale = a(c).outerWidth()),
                d.updateSliderVal(),
                c.opt.readonly || (d.on(a.simpleSlider.events.start, function(b) {
                    a.browser.mobile && (b = b.changedTouches[0]),
                    c.canSlide = !0,
                    d.updateSliderVal(b),
                    "h" == c.opt.orientation ? d.css({
                        cursor: "col-resize"
                    }) : d.css({
                        cursor: "row-resize"
                    }),
                    a.browser.mobile || (b.preventDefault(),
                    b.stopPropagation())
                }),
                a(document).on(a.simpleSlider.events.move, function(b) {
                    a.browser.mobile && (b = b.changedTouches[0]),
                    c.canSlide && (a(document).css({
                        cursor: "default"
                    }),
                    d.updateSliderVal(b),
                    a.browser.mobile || (b.preventDefault(),
                    b.stopPropagation()))
                }).on(a.simpleSlider.events.end, function() {
                    a(document).css({
                        cursor: "auto"
                    }),
                    c.canSlide = !1,
                    d.css({
                        cursor: "auto"
                    })
                }))
            })
        },
        updateSliderVal: function(b) {
            var c = this.get(0);
            if (c.opt) {
                c.opt.initialval = "number" == typeof c.opt.initialval ? c.opt.initialval : c.opt.initialval(c);
                var d = a(c).outerWidth()
                  , e = a(c).outerHeight();
                c.x = "object" == typeof b ? b.clientX + document.body.scrollLeft - this.offset().left : "number" == typeof b ? b * d / c.opt.scale : c.opt.initialval * d / c.opt.scale,
                c.y = "object" == typeof b ? b.clientY + document.body.scrollTop - this.offset().top : "number" == typeof b ? (c.opt.scale - c.opt.initialval - b) * e / c.opt.scale : c.opt.initialval * e / c.opt.scale,
                c.y = this.outerHeight() - c.y,
                c.scaleX = c.x * c.opt.scale / d,
                c.scaleY = c.y * c.opt.scale / e,
                c.outOfRangeX = c.scaleX > c.opt.scale ? c.scaleX - c.opt.scale : 0 > c.scaleX ? c.scaleX : 0,
                c.outOfRangeY = c.scaleY > c.opt.scale ? c.scaleY - c.opt.scale : 0 > c.scaleY ? c.scaleY : 0,
                c.outOfRange = "h" == c.opt.orientation ? c.outOfRangeX : c.outOfRangeY,
                c.value = "undefined" != typeof b ? "h" == c.opt.orientation ? c.x >= this.outerWidth() ? c.opt.scale : 0 >= c.x ? 0 : c.scaleX : c.y >= this.outerHeight() ? c.opt.scale : 0 >= c.y ? 0 : c.scaleY : "h" == c.opt.orientation ? c.scaleX : c.scaleY,
                "h" == c.opt.orientation ? c.level.width(Math.floor(100 * c.x / d) + "%") : c.level.height(Math.floor(100 * c.y / e)),
                "function" == typeof c.opt.callback && c.opt.callback(c)
            }
        }
    },
    a.fn.simpleSlider = a.simpleSlider.init,
    a.fn.updateSliderVal = a.simpleSlider.updateSliderVal
}(jQuery),
function(a) {
    a.mbCookie = {
        set: function(a, b, c, d) {
            "object" == typeof b && (b = JSON.stringify(b)),
            d = d ? "; domain=" + d : "";
            var e = new Date
              , f = "";
            c > 0 && (e.setTime(e.getTime() + 864e5 * c),
            f = "; expires=" + e.toGMTString()),
            document.cookie = a + "=" + b + f + "; path=/" + d
        },
        get: function(a) {
            a += "=";
            for (var b = document.cookie.split(";"), c = 0; c < b.length; c++) {
                for (var d = b[c]; " " == d.charAt(0); )
                    d = d.substring(1, d.length);
                if (0 == d.indexOf(a))
                    try {
                        return JSON.parse(d.substring(a.length, d.length))
                    } catch (e) {
                        return d.substring(a.length, d.length)
                    }
            }
            return null
        },
        remove: function(b) {
            a.mbCookie.set(b, "", -1)
        }
    },
    a.mbStorage = {
        set: function(a, b) {
            "object" == typeof b && (b = JSON.stringify(b)),
            localStorage.setItem(a, b)
        },
        get: function(a) {
            if (!localStorage[a])
                return null;
            try {
                return JSON.parse(localStorage[a])
            } catch (b) {
                return localStorage[a]
            }
        },
        remove: function(a) {
            a ? localStorage.removeItem(a) : localStorage.clear()
        }
    }
}(jQuery);