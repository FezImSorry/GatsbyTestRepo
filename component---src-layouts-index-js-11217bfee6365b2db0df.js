webpackJsonp([0x67ef26645b2a,60335399758886],{108:function(e,t){e.exports={data:{site:{siteMetadata:{title:"Pandas Eating Lots"}}},layoutContext:{}}},209:function(e,t,r){(function(o){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},i=r(5),s=(n(i),r(212)),l=n(s),u=r(108),c=n(u);t.default=function(e){return o.createElement(l.default,a({},e,c.default))},e.exports=t.default}).call(t,r(20))},105:function(e,t,r){"use strict";function o(e){return e&&"object"==typeof e&&"default"in e?e.default:e}function n(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=r.noWarn,n=void 0!==o&&o,a=r.createElement,i=void 0===a||a,s=function(t){function r(){var e,o,a;W(this,r);for(var i=arguments.length,s=Array(i),l=0;l<i;l++)s[l]=arguments[l];return e=o=K(this,t.call.apply(t,[this].concat(s))),o.warned=n,o.state={theme:{}},o.setTheme=function(e){return o.setState({theme:e})},a=e,K(o,a)}return H(r,t),r.prototype.componentWillMount=function(){!this.context[z];var e=this.props.theme;this.context[z]?this.setTheme(e?e:this.context[z].getState()):this.setTheme(e||{})},r.prototype.componentWillReceiveProps=function(e){this.props.theme!==e.theme&&this.setTheme(e.theme)},r.prototype.componentDidMount=function(){this.context[z]&&!this.props.theme&&(this.subscriptionId=this.context[z].subscribe(this.setTheme))},r.prototype.componentWillUnmount=function(){this.subscriptionId&&this.context[z].unsubscribe(this.subscriptionId)},r.prototype.render=function(){return i?j.createElement(e,B({},this.props,this.state)):e.call(this,B({},this.props,this.state),this.context)},r}(j.Component),l=(t={},t[z]=U.object,t),u=null;return Object.defineProperty(s,"contextTypes",{enumerable:!0,configurable:!0,set:function(e){u=e},get:function(){return u?B({},l,u):l}}),s}function a(e){var t=Y.call(e);return"[object Function]"===t||"function"==typeof e&&"[object RegExp]"!==t||"undefined"!=typeof window&&(e===window.setTimeout||e===window.alert||e===window.confirm||e===window.prompt)}function i(e){return J(e)===!0&&"[object Object]"===Object.prototype.toString.call(e)}function s(e){function t(){return s}function r(e){s=e;for(var t=Object.keys(a),r=0,o=t.length;r<o;r++)a[t[r]]&&a[t[r]](e)}function o(e){if("function"!=typeof e)throw new Error("listener must be a function.");var t=i;return a[t]=e,i+=1,t}function n(e){a[e]=void 0}var a={},i=1,s=e;return{getState:t,setState:r,subscribe:o,unsubscribe:n}}function l(e){var t=[],r=[];return e.toString().split(" ").forEach(function(e){if(void 0===F.styleSheet.registered[e.substring(4)])t.push(e);else{var o=u(e);r.push(o)}}),{glamorlessClassName:t,glamorStyles:r}}function u(e){var t;return t={},t["data-"+e]="",t}function c(e){var t=e.styles,r=e.props,o=e.cssOverrides,n=e.cssProp,a=e.context,i=e.displayName,s=p([].concat(t,[r.className,o,n]),r,a),l=s.mappedArgs,u=s.nonGlamorClassNames,c=!1,d=c?{label:i}:null,f=F.css.apply(void 0,[d].concat(l)).toString(),h=u.join(" ").trim();return(f+" "+h).trim()}function p(e,t,r){for(var o=void 0,n=[],a=[],i=0;i<e.length;i++){for(o=e[i];"function"==typeof o;)o=o(t,r);if("string"==typeof o){var s=l(o),u=s.glamorStyles,c=s.glamorlessClassName;n.push.apply(n,u),a.push.apply(a,c)}else if(Array.isArray(o)){var d=p(o,t,r);n.push.apply(n,d.mappedArgs),a.push.apply(a,d.nonGlamorClassNames)}else n.push(o)}return{mappedArgs:n,nonGlamorClassNames:a}}function d(e){function t(o){function a(e){return t(o,B({},s,e))}function i(){function i(e,t,r){if(!p)return!0;var o=!0;return r&&(p(r.props,e,r.context,t)||(o=!1)),o}for(var s=arguments.length,d=Array(s),m=0;m<s;m++)d[m]=arguments[m];var b=n(function(t,r){t=f(b.propsToApply,{},t,r);var o=i(t,r,this.previous);p&&(this.previous={props:t,context:r});var n=e(t,b),a=n.toForward,s=n.cssOverrides,l=n.cssProp;return this.className=o?c({styles:b.styles,props:t,cssOverrides:s,cssProp:l,context:r,displayName:b.displayName}):this.className,j.createElement(b.comp,B({ref:"innerRef"in a?void 0:t.innerRef},a,{className:this.className}))},{noWarn:!0,createElement:!1});return Object.assign(b,r({comp:o,styles:d,rootEl:l,filterProps:h,forwardProps:y,displayName:u,propsToApply:C}),{isGlamorousComponent:!0,propsAreCssOverrides:v,withComponent:function(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},o=b.forwardProps,n=b.filterProps,a=V(b,["forwardProps","filterProps"]);return t(B({},a,{comp:e,rootEl:g(e)}),B({forwardProps:o,filterProps:n},r))()},withProps:function(){for(var e=arguments.length,r=Array(e),o=0;o<e;o++)r[o]=arguments[o];return t(b,{withProps:r})()},withConfig:a}),b}var s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=s.rootEl,u=s.displayName,p=s.shouldClassNameUpdate,d=s.filterProps,h=void 0===d?[]:d,m=s.forwardProps,y=void 0===m?[]:m,b=s.propsAreCssOverrides,v=void 0===b?o.propsAreCssOverrides:b,C=s.withProps;return Object.assign(i,{withConfig:a}),i}function r(e){var t=e.comp,r=e.styles,o=e.rootEl,n=e.filterProps,a=e.forwardProps,i=e.displayName,s=e.propsToApply,l=t.comp?t.comp:t,u=t.propsToApply?[].concat(t.propsToApply,h(s)):h(s);return{styles:m(t.styles,r),comp:l,rootEl:o||g(t),forwardProps:m(t.forwardProps,a),filterProps:m(t.filterProps,n),displayName:i||"glamorous("+y(t)+")",propsToApply:u}}return t}function f(e,t,r,o){return e.forEach(function(e){return"function"==typeof e?Object.assign(t,e(Object.assign({},t,r),o)):Array.isArray(e)?Object.assign(t,f(e,t,r,o)):Object.assign(t,e)}),Object.assign(t,r)}function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return Array.isArray(e)?e:[e]}function m(e,t){return e?e.concat(t):t}function g(e){return e.rootEl?e.rootEl:e.comp||e}function y(e){return"string"==typeof e?e:e.displayName||e.name||"unknown"}function b(e,t){var r=t&&t.cache?t.cache:Q,o=t&&t.serializer?t.serializer:P,n=t&&t.strategy?t.strategy:k;return n(e,{cache:r,serializer:o})}function v(e){return null==e||"number"==typeof e||"boolean"==typeof e}function C(e,t,r,o){var n=v(o)?o:r(o),a=t.get(n);return"undefined"==typeof a&&(a=e.call(this,o),t.set(n,a)),a}function x(e,t,r){var o=Array.prototype.slice.call(arguments,3),n=r(o),a=t.get(n);return"undefined"==typeof a&&(a=e.apply(this,o),t.set(n,a)),a}function w(e,t,r,o,n){return r.bind(t,e,o,n)}function k(e,t){var r=1===e.length?C:x;return w(e,this,r,t.cache.create(),t.serializer)}function O(e,t){var r=x;return w(e,this,r,t.cache.create(),t.serializer)}function T(e,t){var r=C;return w(e,this,r,t.cache.create(),t.serializer)}function P(){return JSON.stringify(arguments)}function S(){this.cache=Object.create(null)}function E(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function M(e,t){return t={exports:{}},e(t,t.exports),t.exports}function A(e,t){var r=t.propsAreCssOverrides,o=t.rootEl,n=t.filterProps,a=t.forwardProps,i=e.css,s=e.innerRef,l=(e.theme,e.className,e.glam,V(e,["css","innerRef","theme","className","glam"]));void 0!==s&&a.indexOf("innerRef")!==-1&&(l.innerRef=s);var u={toForward:{},cssProp:i,cssOverrides:{}};return r||"string"==typeof o||0!==n.length?Object.keys(l).reduce(function(e,t){return n.indexOf(t)!==-1?e:(a.indexOf(t)!==-1||St(o,t)?e.toForward[t]=l[t]:r&&(e.cssOverrides[t]=l[t]),e)},u):(u.toForward=l,u)}function D(e){return e.slice(0,1).toUpperCase()+e.slice(1)}var j=o(r(5)),F=r(48),L=["a","abbr","acronym","address","applet","area","article","aside","audio","b","base","basefont","bdi","bdo","bgsound","big","blink","blockquote","body","br","button","canvas","caption","center","cite","code","col","colgroup","command","content","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","element","em","embed","fieldset","figcaption","figure","font","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","image","img","input","ins","isindex","kbd","keygen","label","legend","li","link","listing","main","map","mark","marquee","math","menu","menuitem","meta","meter","multicol","nav","nextid","nobr","noembed","noframes","noscript","object","ol","optgroup","option","output","p","param","picture","plaintext","pre","progress","q","rb","rbc","rp","rt","rtc","ruby","s","samp","script","section","select","shadow","slot","small","source","spacer","span","strike","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","tt","u","ul","var","video","wbr","xmp"],R=["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","animation","audio","canvas","circle","clipPath","color-profile","cursor","defs","desc","discard","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","handler","hatch","hatchpath","hkern","iframe","image","line","linearGradient","listener","marker","mask","mesh","meshgradient","meshpatch","meshrow","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","prefetch","radialGradient","rect","script","set","solidColor","solidcolor","stop","style","svg","switch","symbol","tbreak","text","textArea","textPath","title","tref","tspan","unknown","use","video","view","vkern"],N=L.concat(R).filter(function(e,t,r){return r.indexOf(e)===t}),z="__glamorous__",I=!1,U=void 0;if(I){if(j.PropTypes||(U=function(){return U},["array","bool","func","number","object","string","symbol","any","arrayOf","element","instanceOf","node","objectOf","oneOf","oneOfType","shape","exact"].forEach(function(e){U[e]=U})),!j.Children){var q={map:function(e,t,r){return null==e?null:(e=q.toArray(e),r&&r!==e&&(t=t.bind(r)),e.map(t))},forEach:function(e,t,r){return null==e?null:(e=q.toArray(e),r&&r!==e&&(t=t.bind(r)),void e.forEach(t))},count:function(e){return e&&e.length||0},only:function(e){if(e=q.toArray(e),1!==e.length)throw new Error("Children.only() expects only one child.");return e[0]},toArray:function(e){return null==e?[]:[].concat(e)}};j.Children=q}}else if(parseFloat(j.version.slice(0,4))>=15.5)try{U=r(7)}catch(e){}U=U||j.PropTypes;var _,G,W=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},B=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&(e[o]=r[o])}return e},H=function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)},V=function(e,t){var r={};for(var o in e)t.indexOf(o)>=0||Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},K=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},X=a,Y=Object.prototype.toString,J=function(e){return null!=e&&"object"==typeof e&&Array.isArray(e)===!1},Z=function(e){var t,r;return i(e)!==!1&&(t=e.constructor,"function"==typeof t&&(r=t.prototype,i(r)!==!1&&r.hasOwnProperty("isPrototypeOf")!==!1))},$=function(e){function t(){var r,o,n;W(this,t);for(var a=arguments.length,i=Array(a),s=0;s<a;s++)i[s]=arguments[s];return r=o=K(this,e.call.apply(e,[this].concat(i))),o.setOuterTheme=function(e){o.outerTheme=e,void 0!==o.broadcast&&o.publishTheme()},n=r,K(o,n)}return H(t,e),t.prototype.getTheme=function(e){var t=e||this.props.theme;if(X(t)){var r=t(this.outerTheme);if(!Z(r))throw new Error("[ThemeProvider] Please return an object from your theme function, i.e. theme={() => ({})}!");return r}return B({},this.outerTheme,t)},t.prototype.getChildContext=function(){var e;return e={},e[z]=this.broadcast,e},t.prototype.publishTheme=function(e){this.broadcast.setState(this.getTheme(e))},t.prototype.componentDidMount=function(){this.context[z]&&(this.subscriptionId=this.context[z].subscribe(this.setOuterTheme))},t.prototype.componentWillMount=function(){this.context[z]&&this.setOuterTheme(this.context[z].getState()),this.broadcast=s(this.getTheme(this.props.theme))},t.prototype.componentWillReceiveProps=function(e){this.props.theme!==e.theme&&this.publishTheme(e.theme)},t.prototype.componentWillUnmount=function(){this.subscriptionId&&this.context[z].unsubscribe(this.subscriptionId)},t.prototype.render=function(){return this.props.children?j.Children.only(this.props.children):null},t}(j.Component);$.childContextTypes=(_={},_[z]=U.object.isRequired,_),$.contextTypes=(G={},G[z]=U.object,G),S.prototype.has=function(e){return e in this.cache},S.prototype.get=function(e){return this.cache[e]},S.prototype.set=function(e,t){this.cache[e]=t};var Q={create:function(){return new S}},ee=b,te={variadic:O,monadic:T};ee.strategies=te;var re=["coords","download","href","name","rel","shape","target","type"],oe=["title"],ne=["alt","height","name","width"],ae=["alt","coords","download","href","rel","shape","target","type"],ie=["controls","loop","muted","preload","src"],se=["href","target"],le=["size"],ue=["dir"],ce=["cite"],pe=["disabled","form","name","type","value"],de=["height","width"],fe=["span","width"],he=["span","width"],me=["value"],ge=["cite"],ye=["open"],be=["title"],ve=["open"],Ce=["height","src","type","width"],xe=["disabled","form","name"],we=["size"],ke=["accept","action","method","name","target"],Oe=["name","scrolling","src"],Te=["cols","rows"],Pe=["profile"],Se=["size","width"],Ee=["manifest"],Me=["height","name","sandbox","scrolling","src","width"],Ae=["alt","height","name","sizes","src","width"],De=["accept","alt","autoCapitalize","autoCorrect","autoSave","checked","defaultChecked","defaultValue","disabled","form","height","list","max","min","multiple","name","onChange","pattern","placeholder","required","results","size","src","step","title","type","value","width"],je=["cite"],Fe=["challenge","disabled","form","name"],Le=["form"],Re=["type","value"],Ne=["color","href","integrity","media","nonce","rel","scope","sizes","target","title","type"],ze=["name"],Ie=["content","name"],Ue=["high","low","max","min","optimum","value"],qe=["data","form","height","name","type","width"],_e=["reversed","start","type"],Ge=["disabled","label"],We=["disabled","label","selected","value"],Be=["form","name"],He=["name","type","value"],Ve=["width"],Ke=["max","value"],Xe=["cite"],Ye=["async","defer","integrity","nonce","src","type"],Je=["defaultValue","disabled","form","multiple","name","onChange","required","size","value"],Ze=["name"],$e=["media","sizes","src","type"],Qe=["media","nonce","title","type"],et=["summary","width"],tt=["headers","height","scope","width"],rt=["autoCapitalize","autoCorrect","cols","defaultValue","disabled","form","name","onChange","placeholder","required","rows","value","wrap"],ot=["headers","height","scope","width"],nt=["default","kind","label","src"],at=["type"],it=["controls","height","loop","muted","playsInline","poster","preload","src","width"],st=["accentHeight","accumulate","additive","alignmentBaseline","allowReorder","alphabetic","amplitude","arabicForm","ascent","attributeName","attributeType","autoReverse","azimuth","baseFrequency","baseProfile","baselineShift","bbox","begin","bias","by","calcMode","capHeight","clip","clipPath","clipPathUnits","clipRule","color","colorInterpolation","colorInterpolationFilters","colorProfile","colorRendering","contentScriptType","contentStyleType","cursor","cx","cy","d","decelerate","descent","diffuseConstant","direction","display","divisor","dominantBaseline","dur","dx","dy","edgeMode","elevation","enableBackground","end","exponent","externalResourcesRequired","fill","fillOpacity","fillRule","filter","filterRes","filterUnits","floodColor","floodOpacity","focusable","fontFamily","fontSize","fontSizeAdjust","fontStretch","fontStyle","fontVariant","fontWeight","format","from","fx","fy","g1","g2","glyphName","glyphOrientationHorizontal","glyphOrientationVertical","glyphRef","gradientTransform","gradientUnits","hanging","height","horizAdvX","horizOriginX","ideographic","imageRendering","in","in2","intercept","k","k1","k2","k3","k4","kernelMatrix","kernelUnitLength","kerning","keyPoints","keySplines","keyTimes","lengthAdjust","letterSpacing","lightingColor","limitingConeAngle","local","markerEnd","markerHeight","markerMid","markerStart","markerUnits","markerWidth","mask","maskContentUnits","maskUnits","mathematical","mode","numOctaves","offset","opacity","operator","order","orient","orientation","origin","overflow","overlinePosition","overlineThickness","paintOrder","panose1","pathLength","patternContentUnits","patternTransform","patternUnits","pointerEvents","points","pointsAtX","pointsAtY","pointsAtZ","preserveAlpha","preserveAspectRatio","primitiveUnits","r","radius","refX","refY","renderingIntent","repeatCount","repeatDur","requiredExtensions","requiredFeatures","restart","result","rotate","rx","ry","scale","seed","shapeRendering","slope","spacing","specularConstant","specularExponent","speed","spreadMethod","startOffset","stdDeviation","stemh","stemv","stitchTiles","stopColor","stopOpacity","strikethroughPosition","strikethroughThickness","string","stroke","strokeDasharray","strokeDashoffset","strokeLinecap","strokeLinejoin","strokeMiterlimit","strokeOpacity","strokeWidth","surfaceScale","systemLanguage","tableValues","targetX","targetY","textAnchor","textDecoration","textLength","textRendering","to","transform","u1","u2","underlinePosition","underlineThickness","unicode","unicodeBidi","unicodeRange","unitsPerEm","vAlphabetic","vHanging","vIdeographic","vMathematical","values","vectorEffect","version","vertAdvY","vertOriginX","vertOriginY","viewBox","viewTarget","visibility","width","widths","wordSpacing","writingMode","x","x1","x2","xChannelSelector","xHeight","xlinkActuate","xlinkArcrole","xlinkHref","xlinkRole","xlinkShow","xlinkTitle","xlinkType","xmlBase","xmlLang","xmlSpace","xmlns","xmlnsXlink","y","y1","y2","yChannelSelector","z","zoomAndPan"],lt={html:["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","math","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rb","rp","rt","rtc","ruby","s","samp","script","section","select","slot","small","source","span","strong","style","sub","summary","sup","svg","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr"],svg:["a","altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","script","set","stop","style","svg","switch","symbol","text","textPath","title","tref","tspan","use","view","vkern"]},ut={a:re,abbr:oe,applet:ne,area:ae,audio:ie,base:se,basefont:le,bdo:ue,blockquote:ce,button:pe,canvas:de,col:fe,colgroup:he,data:me,del:ge,details:ye,dfn:be,dialog:ve,embed:Ce,fieldset:xe,font:we,form:ke,frame:Oe,frameset:Te,head:Pe,hr:Se,html:Ee,iframe:Me,img:Ae,input:De,ins:je,keygen:Fe,label:Le,li:Re,link:Ne,map:ze,meta:Ie,meter:Ue,object:qe,ol:_e,optgroup:Ge,option:We,output:Be,param:He,pre:Ve,progress:Ke,q:Xe,script:Ye,select:Je,slot:Ze,source:$e,style:Qe,table:et,td:tt,textarea:rt,th:ot,track:nt,ul:at,video:it,svg:st,elements:lt,"*":["about","acceptCharset","accessKey","allowFullScreen","allowTransparency","autoComplete","autoFocus","autoPlay","capture","cellPadding","cellSpacing","charSet","classID","className","colSpan","contentEditable","contextMenu","crossOrigin","dangerouslySetInnerHTML","datatype","dateTime","dir","draggable","encType","formAction","formEncType","formMethod","formNoValidate","formTarget","frameBorder","hidden","hrefLang","htmlFor","httpEquiv","icon","id","inlist","inputMode","is","itemID","itemProp","itemRef","itemScope","itemType","keyParams","keyType","lang","marginHeight","marginWidth","maxLength","mediaGroup","minLength","noValidate","prefix","property","radioGroup","readOnly","resource","role","rowSpan","scoped","seamless","security","spellCheck","srcDoc","srcLang","srcSet","style","suppressContentEditableWarning","tabIndex","title","typeof","unselectable","useMap","vocab","wmode"]},ct=Object.freeze({a:re,abbr:oe,applet:ne,area:ae,audio:ie,base:se,basefont:le,bdo:ue,blockquote:ce,button:pe,canvas:de,col:fe,colgroup:he,data:me,del:ge,details:ye,dfn:be,dialog:ve,embed:Ce,fieldset:xe,font:we,form:ke,frame:Oe,frameset:Te,head:Pe,hr:Se,html:Ee,iframe:Me,img:Ae,input:De,ins:je,keygen:Fe,label:Le,li:Re,link:Ne,map:ze,meta:Ie,meter:Ue,object:qe,ol:_e,optgroup:Ge,option:We,output:Be,param:He,pre:Ve,progress:Ke,q:Xe,script:Ye,select:Je,slot:Ze,source:$e,style:Qe,table:et,td:tt,textarea:rt,th:ot,track:nt,ul:at,video:it,svg:st,elements:lt,default:ut}),pt=ct&&ut||ct,dt=M(function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.default=pt,e.exports=pt}),ft=E(dt),ht=["children","dangerouslySetInnerHTML","key","ref","autoFocus","defaultValue","valueLink","defaultChecked","checkedLink","innerHTML","suppressContentEditableWarning","onFocusIn","onFocusOut","className","onCopy","onCut","onPaste","onCompositionEnd","onCompositionStart","onCompositionUpdate","onKeyDown","onKeyPress","onKeyUp","onFocus","onBlur","onChange","onInput","onInvalid","onSubmit","onClick","onContextMenu","onDoubleClick","onDrag","onDragEnd","onDragEnter","onDragExit","onDragLeave","onDragOver","onDragStart","onDrop","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onSelect","onTouchCancel","onTouchEnd","onTouchMove","onTouchStart","onScroll","onWheel","onAbort","onCanPlay","onCanPlayThrough","onDurationChange","onEmptied","onEncrypted","onEnded","onError","onLoadedData","onLoadedMetadata","onLoadStart","onPause","onPlay","onPlaying","onProgress","onRateChange","onSeeked","onSeeking","onStalled","onSuspend","onTimeUpdate","onVolumeChange","onWaiting","onLoad","onAnimationStart","onAnimationEnd","onAnimationIteration","onTransitionEnd","onCopyCapture","onCutCapture","onPasteCapture","onCompositionEndCapture","onCompositionStartCapture","onCompositionUpdateCapture","onKeyDownCapture","onKeyPressCapture","onKeyUpCapture","onFocusCapture","onBlurCapture","onChangeCapture","onInputCapture","onSubmitCapture","onClickCapture","onContextMenuCapture","onDoubleClickCapture","onDragCapture","onDragEndCapture","onDragEnterCapture","onDragExitCapture","onDragLeaveCapture","onDragOverCapture","onDragStartCapture","onDropCapture","onMouseDownCapture","onMouseEnterCapture","onMouseLeaveCapture","onMouseMoveCapture","onMouseOutCapture","onMouseOverCapture","onMouseUpCapture","onSelectCapture","onTouchCancelCapture","onTouchEndCapture","onTouchMoveCapture","onTouchStartCapture","onScrollCapture","onWheelCapture","onAbortCapture","onCanPlayCapture","onCanPlayThroughCapture","onDurationChangeCapture","onEmptiedCapture","onEncryptedCapture","onEndedCapture","onErrorCapture","onLoadedDataCapture","onLoadedMetadataCapture","onLoadStartCapture","onPauseCapture","onPlayCapture","onPlayingCapture","onProgressCapture","onRateChangeCapture","onSeekedCapture","onSeekingCapture","onStalledCapture","onSuspendCapture","onTimeUpdateCapture","onVolumeChangeCapture","onWaitingCapture","onLoadCapture","onAnimationStartCapture","onAnimationEndCapture","onAnimationIterationCapture","onTransitionEndCapture"];I&&ht.push("autocomplete","autofocus","class","for","onDblClick","onSearch","slot","srcset");var mt=ft["*"],gt=ft.elements.svg,yt=ft.elements.html,bt=["color","height","width"],vt=":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD",Ct=vt+"\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040",xt=RegExp.prototype.test.bind(new RegExp("^(data|aria)-["+Ct+"]*$")),wt=function(e){return"svg"===e||yt.indexOf(e)===-1&&gt.indexOf(e)!==-1},kt=function(e,t){var r=void 0;return r=wt(t)?ft.svg:ft[t]||[],mt.indexOf(e)!==-1||r.indexOf(e)!==-1},Ot=function(e){return bt.indexOf(e)!==-1},Tt=function(e){return ht.indexOf(e)!==-1},Pt=function(e,t){return"string"!=typeof e||(kt(t,e)||Tt(t)||xt(t.toLowerCase()))&&(!Ot(t)||wt(e))},St=ee(Pt),Et=d(A);Object.assign(Et,N.reduce(function(e,t){return e[t]=Et(t),e},{})),Object.assign(Et,N.reduce(function(e,t){var r=D(t);return e[r]=Et[t](),e[r].displayName="glamorous."+r,e[r].propsAreCssOverrides=!0,e},{})),Et.default=Et;var Mt=Object.freeze({default:Et,ThemeProvider:$,withTheme:n}),At=Et;Object.assign(At,Object.keys(Mt).reduce(function(e,t){return"default"!==t&&(e[t]=Mt[t]),e},{})),e.exports=At},212:function(e,t,r){(function(e){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0,t.query=void 0;var n=r(5),a=(o(n),r(105)),i=o(a),s=r(48),l=r(164),u=o(l),c=r(57),p=(0,s.css)({float:"right"});t.default=function(t){var r=t.children,o=t.data;return e.createElement(i.default.Div,{margin:"0 auto",maxWidth:700,padding:(0,c.rhythm)(2),paddingTop:(0,c.rhythm)(1.5)},e.createElement(u.default,{to:"/"},e.createElement(i.default.H3,{marginBottom:(0,c.rhythm)(2),display:"inline-block",fontStyle:"normal"},o.site.siteMetadata.title)),e.createElement(u.default,{className:p,to:"/about/"},"About"),r())};t.query="** extracted graphql fragment **"}).call(t,r(20))}});
//# sourceMappingURL=component---src-layouts-index-js-11217bfee6365b2db0df.js.map