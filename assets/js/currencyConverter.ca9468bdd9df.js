!function(t){var e={};function n(s){if(e[s])return e[s].exports;var o=e[s]={i:s,l:!1,exports:{}};return t[s].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,s){n.o(t,e)||Object.defineProperty(t,e,{configurable:!1,enumerable:!0,get:s})},n.r=function(t){Object.defineProperty(t,"__esModule",{value:!0})},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=22)}([function(t,e){t.exports=jQuery},function(t,e,n){"use strict";e.a={above:function(t){return window.innerWidth+.02>t},below:function(t){return window.innerWidth<=t},mobile:414,mobileLandscape:568,tablet:768,tabletLandscape:1024,desktop:1200}},function(t,e,n){"use strict";function s(t,e,n,s,o,i,r,c){var a,l="function"==typeof t?t.options:t;if(e&&(l.render=e,l.staticRenderFns=n,l._compiled=!0),s&&(l.functional=!0),i&&(l._scopeId="data-v-"+i),r?(a=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),o&&o.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(r)},l._ssrRegister=a):o&&(a=c?function(){o.call(this,this.$root.$options.shadowRoot)}:o),a)if(l.functional){l._injectStyles=a;var u=l.render;l.render=function(t,e){return a.call(e),u(t,e)}}else{var p=l.beforeCreate;l.beforeCreate=p?[].concat(p,a):[a]}return{exports:t,options:l}}n.d(e,"a",function(){return s})},function(t,e,n){"use strict";n(11);var s=n(0),o=n.n(s),i=o()("body");function r(){navigator.userAgent.match(/mobile|tablet|ip(ad|hone|od)|android/i)?i.addClass("touchscreen"):i.removeClass("touchscreen")}e.a={diagonal:function(t,e){return Math.sqrt(Math.pow(t,2)+Math.pow(e,2))},touchscreen:function(){return i.hasClass("touchscreen")},intcomma:function t(e){var n=String(e),s=n.replace(/^(-?\d+)(\d{3})/,"$1,$2");return n==s?s:t(s)},init:function(){r(),o()(window).on("resize",r),window.addEventListener("load",function(){o()(".js-match-media-height").matchHeight()})}}},function(t,e){t.exports=Vue},,function(t,e,n){},,,function(t,e,n){"use strict";var s={name:"Spinner"},o=(n(15),n(2)),i=Object(o.a)(s,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("svg",{pre:!0,attrs:{xmlns:"http://www.w3.org/2000/svg",width:"27",height:"27",viewBox:"0 0 27 27"}},[n("path",{pre:!0,attrs:{d:"M18.696,10.5c-0.275-0.479-0.113-1.09,0.365-1.367l4.759-2.751c0.482-0.273,1.095-0.11,1.37,0.368 c0.276,0.479,0.115,1.092-0.364,1.364l-4.764,2.751C19.583,11.141,18.973,10.977,18.696,10.5z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M16.133,6.938l2.75-4.765c0.276-0.478,0.889-0.643,1.367-0.366c0.479,0.276,0.641,0.886,0.365,1.366l-2.748,4.762 C17.591,8.415,16.979,8.58,16.5,8.303C16.021,8.027,15.856,7.414,16.133,6.938z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M13.499,7.5c-0.552,0-1-0.448-1-1.001V1c0-0.554,0.448-1,1-1c0.554,0,1.003,0.447,1.003,1v5.499 C14.5,7.053,14.053,7.5,13.499,7.5z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M8.303,10.5c-0.277,0.477-0.888,0.641-1.365,0.365L2.175,8.114C1.697,7.842,1.532,7.229,1.808,6.75 c0.277-0.479,0.89-0.642,1.367-0.368l4.762,2.751C8.416,9.41,8.58,10.021,8.303,10.5z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M9.133,7.937l-2.75-4.763c-0.276-0.48-0.111-1.09,0.365-1.366c0.479-0.277,1.09-0.114,1.367,0.366l2.75,4.765 c0.274,0.476,0.112,1.088-0.367,1.364C10.021,8.581,9.409,8.415,9.133,7.937z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M6.499,14.5H1c-0.554,0-1-0.448-1-1c0-0.554,0.447-1.001,1-1.001h5.499c0.552,0,1.001,0.448,1.001,1.001 C7.5,14.052,7.052,14.5,6.499,14.5z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M8.303,16.502c0.277,0.478,0.113,1.088-0.365,1.366l-4.762,2.749c-0.478,0.273-1.091,0.112-1.368-0.366 c-0.276-0.479-0.111-1.089,0.367-1.368l4.762-2.748C7.415,15.856,8.026,16.021,8.303,16.502z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M10.866,20.062l-2.75,4.767c-0.277,0.475-0.89,0.639-1.367,0.362c-0.477-0.277-0.642-0.886-0.365-1.365l2.75-4.764 c0.277-0.477,0.888-0.638,1.366-0.365C10.978,18.974,11.141,19.585,10.866,20.062z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M13.499,19.502c0.554,0,1.003,0.448,1.003,1.002v5.498c0,0.55-0.448,0.999-1.003,0.999c-0.552,0-1-0.447-1-0.999v-5.498 C12.499,19.95,12.946,19.502,13.499,19.502z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M17.867,19.062l2.748,4.764c0.275,0.479,0.113,1.088-0.365,1.365c-0.479,0.276-1.091,0.112-1.367-0.362l-2.75-4.767 c-0.276-0.477-0.111-1.088,0.367-1.365C16.979,18.424,17.591,18.585,17.867,19.062z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M18.696,16.502c0.276-0.48,0.887-0.646,1.365-0.367l4.765,2.748c0.479,0.279,0.64,0.889,0.364,1.368 c-0.275,0.479-0.888,0.64-1.37,0.366l-4.759-2.749C18.583,17.59,18.421,16.979,18.696,16.502z"}}),t._v(" "),n("path",{pre:!0,attrs:{d:"M25.998,12.499h-5.501c-0.552,0-1.001,0.448-1.001,1.001c0,0.552,0.447,1,1.001,1h5.501c0.554,0,1.002-0.448,1.002-1 C27,12.946,26.552,12.499,25.998,12.499z"}})])},[],!1,null,"5b9d5479",null);e.a=i.exports},,function(t,e,n){var s,o,i;function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}!function(c){"use strict";o=[n(0)],void 0===(i="function"==typeof(s=function(t){var e=-1,n=-1,s=function(t){return parseFloat(t)||0},o=function(e){var n=t(e),o=null,i=[];return n.each(function(){var e=t(this),n=e.offset().top-s(e.css("margin-top")),r=i.length>0?i[i.length-1]:null;null===r?i.push(e):Math.floor(Math.abs(o-n))<=1?i[i.length-1]=r.add(e):i.push(e),o=n}),i},i=function(e){var n={byRow:!0,property:"height",target:null,remove:!1};return"object"===r(e)?t.extend(n,e):("boolean"==typeof e?n.byRow=e:"remove"===e&&(n.remove=!0),n)},c=t.fn.matchHeight=function(e){var n=i(e);if(n.remove){var s=this;return this.css(n.property,""),t.each(c._groups,function(t,e){e.elements=e.elements.not(s)}),this}return this.length<=1&&!n.target?this:(c._groups.push({elements:this,options:n}),c._apply(this,n),this)};c.version="0.7.2",c._groups=[],c._throttle=80,c._maintainScroll=!1,c._beforeUpdate=null,c._afterUpdate=null,c._rows=o,c._parse=s,c._parseOptions=i,c._apply=function(e,n){var r=i(n),a=t(e),l=[a],u=t(window).scrollTop(),p=t("html").outerHeight(!0),h=a.parents().filter(":hidden");return h.each(function(){var e=t(this);e.data("style-cache",e.attr("style"))}),h.css("display","block"),r.byRow&&!r.target&&(a.each(function(){var e=t(this),n=e.css("display");"inline-block"!==n&&"flex"!==n&&"inline-flex"!==n&&(n="block"),e.data("style-cache",e.attr("style")),e.css({display:n,"padding-top":"0","padding-bottom":"0","margin-top":"0","margin-bottom":"0","border-top-width":"0","border-bottom-width":"0",height:"100px",overflow:"hidden"})}),l=o(a),a.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||"")})),t.each(l,function(e,n){var o=t(n),i=0;if(r.target)i=r.target.outerHeight(!1);else{if(r.byRow&&o.length<=1)return void o.css(r.property,"");o.each(function(){var e=t(this),n=e.attr("style"),s=e.css("display");"inline-block"!==s&&"flex"!==s&&"inline-flex"!==s&&(s="block");var o={display:s};o[r.property]="",e.css(o),e.outerHeight(!1)>i&&(i=e.outerHeight(!1)),n?e.attr("style",n):e.css("display","")})}o.each(function(){var e=t(this),n=0;r.target&&e.is(r.target)||("border-box"!==e.css("box-sizing")&&(n+=s(e.css("border-top-width"))+s(e.css("border-bottom-width")),n+=s(e.css("padding-top"))+s(e.css("padding-bottom"))),e.css(r.property,i-n+"px"))})}),h.each(function(){var e=t(this);e.attr("style",e.data("style-cache")||null)}),c._maintainScroll&&t(window).scrollTop(u/p*t("html").outerHeight(!0)),this},c._applyDataApi=function(){var e={};t("[data-match-height], [data-mh]").each(function(){var n=t(this),s=n.attr("data-mh")||n.attr("data-match-height");e[s]=s in e?e[s].add(n):n}),t.each(e,function(){this.matchHeight(!0)})};var a=function(e){c._beforeUpdate&&c._beforeUpdate(e,c._groups),t.each(c._groups,function(){c._apply(this.elements,this.options)}),c._afterUpdate&&c._afterUpdate(e,c._groups)};c._update=function(s,o){if(o&&"resize"===o.type){var i=t(window).width();if(i===e)return;e=i}s?-1===n&&(n=setTimeout(function(){a(o),n=-1},c._throttle)):a(o)},t(c._applyDataApi);var l=t.fn.on?"on":"bind";t(window)[l]("load",function(t){c._update(!1,t)}),t(window)[l]("resize orientationchange",function(t){c._update(!0,t)})})?s.apply(e,o):s)||(t.exports=i)}()},,,,function(t,e,n){"use strict";var s=n(6);n.n(s).a},,,,,,,function(t,e,n){"use strict";n.r(e);var s=n(4),o=n.n(s),i=n(0),r=n.n(i),c=n(3),a=n(1);function l(t){return t.trim().toLowerCase()}for(var u={name:"currency-converter-select",props:{label:String,currencyPlaceholder:String,value:Object,optGroups:Array,optionHeight:{type:Number,default:50},maxOptionsVisible:{type:Number,default:5},noResultsText:String},data:function(){return{isOpen:!1,isActive:!1,selected:this.value,query:"",start:0,end:0,pointer:0,reset:!0,offsetTop:0,listWidth:"100%",composing:!1}},created:function(){this.end=this.maxOptionsVisible-1,window.addEventListener("click",this.closeList),window.addEventListener("resize",this.onResize,{passive:!0})},computed:{labelId:function(){return"label-"+this.label.toLowerCase().split(" ").join("-")},optionsFlattened:function(){for(var t=this,e=l(this.query),n=[],s=function(s){var o=t.optGroups[s],i=o.options;if(""!==e){var r=i.filter(function(t){return!(-1===l(t.code).indexOf(e))}),c=i.filter(function(t){if(-1!==l(t.name).indexOf(e))return!0;for(var n=t.hypernym.split(","),s=0;s<n.length;s++){if(0===l(n[s]).indexOf(e))return!0}return!1});i=(i=r.concat(c)).filter(function(t,e){return i.indexOf(t)==e})}for(var a=0;a<i.length;a++)i[a].className=o.name;i.length>0&&(n.push({label:o.label}),n=n.concat(i))},o=0;o<this.optGroups.length;o++)s(o);return n},isResults:function(){for(var t=0;t<this.optionsFlattened.length;t++){var e=this.optionsFlattened[t];if(!this._isOptgroup(e))return!0}return!1},inputValue:function(){if(this.isOpen)return this.query},inputPlaceholder:function(){if(this.isOpen)return this.currencyPlaceholder}},watch:{value:function(t){this.selected=t}},methods:{onMouseEnter:function(){this.isActive=!0},onMouseLeave:function(){this.isOpen||(this.isActive=!1)},shouldShowFlag:function(t){return("recent"===t.className||"popular"===t.className||"all"===t.className)&&""!==t.flag&&!1===t.obsolete},closeList:function(t){!1===this.$el.contains(t.target)&&this._close()},open:function(){this.isOpen=!0,this.reset?(this.pointer=this._getNextOption(0),this.query=""):this.reset=!0,this.listWidth=this.$refs.input.offsetWidth+"px",this.$nextTick(function(){a.a.below(a.a.mobileLandscape)&&this.$refs.label.scrollIntoView(!0)})},onInput:function(t){this.query!==t.target.value&&(this.query=t.target.value,void 0!==this.$refs.list&&(this.$refs.list.scrollTop=0),this.pointer=this._getNextOption(0))},onMousemove:function(t){var e=this.optionsFlattened[t];this._isOptgroup(e)||(this.pointer=t)},onScroll:function(){for(var t=this.$refs.list.scrollTop,e=this._bounds(),n=0;n<e.length;n++){var s=e[n];if(t>=s.start&&t<s.end){this.start=parseInt(n),this.end=parseInt(n)+(this.maxOptionsVisible-1);break}}},selectHighlighted:function(){this.selected=this.optionsFlattened[this.pointer],this._close(),this.$emit("selected",this.selected)},onEnter:function(t){!1===this.composing&&this.optionsFlattened.length&&this.selectHighlighted()},onEsc:function(){this._close(),this.$nextTick(function(){document.activeElement.blur()})},onTab:function(){this._close()},onShiftTab:function(){this._close()},onUp:function(){if(!this.composing){var t=this.pointer;if(t=this._isPointerInViewpoint()?this._getPreviousOption(this.pointer):this._getNextOption(this.start),this.pointer=t,this.pointer<this.start){this.start-=1,this.end-=1;var e=this._getBound(this.pointer);this.$refs.list.scrollTop=e.start}var n=this.optionsFlattened;0===t&&this._isOptgroup(n[t])&&(this.pointer=this._getNextOption(t))}},onDown:function(){if(!this.composing&&(this._isPointerInViewpoint()?this.pointer=this._getNextOption(this.pointer):this.pointer=this._getNextOption(this.start),this.pointer>this.end)){this.start+=1,this.end+=1;var t=this._getBound(this.pointer);this.$refs.list.scrollTop=t.end-this.optionHeight*this.maxOptionsVisible}},onResize:function(t){this.isOpen&&(this.listWidth=this.$refs.input.offsetWidth+"px")},focusInput:function(){this.open(),this.$nextTick(function(){this.$refs.query.focus()})},focusInputDontClear:function(){this.reset=!1,this.$nextTick(function(){this.$refs.query.focus()})},focusout:function(){c.a.touchscreen()&&this._close()},compositionstart:function(){this.composing=!0},compositionend:function(){this.composing=!1},_close:function(){this.isOpen=!1,this.query="",this.isActive=!1,this.start=0,this.end=this.maxOptionsVisible-1},_getNextOption:function(t){var e=this.optionsFlattened,n=t+1;return n>=e.length?t:this._isOptgroup(e[n])?this._getNextOption(n):n},_getPreviousOption:function(t){var e=this.optionsFlattened,n=t-1;return n<0?t:this._isOptgroup(e[n])?this._getPreviousOption(n):n},_isOptgroup:function(t){return!!t.label},_bounds:function(){for(var t=[],e=0,n=this.optionHeight,s=0;s<this.optionsFlattened.length;s++)t[s]={start:e,end:n},e+=this.optionHeight,n+=this.optionHeight;return t},_getBound:function(t){return this._bounds()[t]},_isPointerInViewpoint:function(){return!(this.pointer<this.start||this.pointer>this.end)}}},p=n(2),h={name:"currency-converter",components:{CurrencyConverterSelect:Object(p.a)(u,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"select",staticClass:"cc__select",class:[{"cc__select--open":t.isOpen},{"cc__select--active":t.isActive}],on:{contextmenu:t.focusInputDontClear,mouseenter:t.onMouseEnter,mouseleave:t.onMouseLeave}},[n("div",{ref:"input",staticClass:"cc__select-wrapper"},[n("label",{ref:"label",staticClass:"cc__select-label",attrs:{for:t.labelId},on:{click:t.focusInput}},[t._v(t._s(t.label))]),t._v(" "),n("div",{staticClass:"cc__select-inner-wrapper"},[n("div",{directives:[{name:"show",rawName:"v-show",value:!t.isOpen,expression:"!isOpen"}],staticClass:"cc__select-overlay",on:{click:t.focusInput}},[n("div",{staticClass:"cc__selected-flag",class:[{"flag-icon":!t.selected.obsolete},"flag-icon-"+t.selected.flag]}),t._v(" "),n("div",{staticClass:"cc__selected-display"},[n("div",{staticClass:"cc__selected-code"},[t._v(t._s(t.selected.code))]),t._v(" "),n("div",{staticClass:"cc__selected-name"},[t._v(t._s(t.selected.name))])]),t._v(" "),t._m(0)]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:t.isOpen,expression:"isOpen"}],staticClass:"cc__select-overlay",on:{click:t.focusInputDontClear}},[t._m(1),t._v(" "),n("div",{staticClass:"cc__close"},[n("i",{staticClass:"material-icons close",on:{click:function(e){return e.stopPropagation(),t.onEsc(e)}}},[t._v("close")])])]),t._v(" "),n("input",{ref:"query",attrs:{id:t.labelId,placeholder:t.inputPlaceholder,type:"text"},domProps:{value:t.inputValue},on:{input:t.onInput,keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.onUp(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.onDown(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.onTab(e)},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"tab",9,e.key,"Tab")?null:e.shiftKey?e.ctrlKey||e.altKey||e.metaKey?null:t.onShiftTab(e):null},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.onEnter(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.onEsc(e)}],focus:t.open,compositionstart:t.compositionstart,compositionend:t.compositionend,focusout:t.focusout}})])]),t._v(" "),t.isOpen?n("ul",{ref:"list",staticClass:"cc__list",style:{width:t.listWidth},attrs:{tabindex:"-1"},on:{"&scroll":function(e){return t.onScroll(e)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.onUp(e))},function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:(e.preventDefault(),t.onDown(e))},t.focusInputDontClear,function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:e.ctrlKey||e.shiftKey||e.altKey||e.metaKey?null:t.onEsc(e)}]}},[t.isResults?[t._l(t.optionsFlattened,function(e,s){return[e.label?n("li",{staticClass:"cc__optgroup",on:{mousedown:t.focusInputDontClear}},[t._v("\n                    "+t._s(e.label)+"\n                ")]):n("li",{staticClass:"cc__option",class:[{"cc__option--highlighted":s===t.pointer},"cc__option-opt-group--"+e.className,{"cc__option--obsolete":e.obsolete},{"cc__option--has-flag":t.shouldShowFlag(e)}],on:{mousemove:function(e){return t.onMousemove(s)},mousedown:t.selectHighlighted}},[t.shouldShowFlag(e)?n("span",{staticClass:"cc__option-flag flag-icon",class:["flag-icon-"+e.flag]}):t._e(),t._v(" "),n("span",{staticClass:"cc__option-name"},[n("strong",[t._v(t._s(e.code))]),t._v(" - "+t._s(e.name)+"\n                    ")])])]})]:[n("li",{staticClass:"cc__no-results"},[t._v("\n                "+t._s(t.noResultsText)+"\n            ")])]],2):t._e()])},[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cc__arrow"},[e("i",{staticClass:"material-icons more"},[this._v("expand_more")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cc__search"},[e("i",{staticClass:"material-icons"},[this._v("search")])])}],!1,null,null,null).exports,Spinner:n(9).a},props:["currencies","amountPlaceholder","defaultBase","baseLabel","defaultQuote","quoteLabel","currencyPlaceholder","recentLabel","popular","popularLabel","allLabel","obsolete","obsoleteLabel","noResultsText","convertText"],data:function(){return{amount:void 0,base:void 0,quote:void 0,recent:[],maxRecent:5,result:{amount:1,base:void 0,quote:void 0,value:0,showObsolete:!1},showSpinner:!1,showResult:!1}},created:function(){this.base=this._lookupCurrency(this.defaultBase),this.quote=this._lookupCurrency(this.defaultQuote),this.recent=JSON.parse(localStorage.getItem("recent"))||[]},computed:{optGroups:function(){for(var t=[],e=[],n=[],s=[],o=0;o<this.currencies.length;o++){var i=this.currencies[o];-1!==this.recent.indexOf(i.code)?t.push(i):-1!==this.popular.indexOf(i.code)?e.push(i):-1!==this.obsolete.indexOf(i.code)?n.push(i):s.push(i)}var r=this;return t.sort(function(t,e){var n=r.recent.indexOf(t.code),s=r.recent.indexOf(e.code);return n<s?-1:n>s?1:0}),e.sort(function(t,e){var n=r.popular.indexOf(t.code),s=r.popular.indexOf(e.code);return n<s?-1:n>s?1:0}),[{name:"recent",label:this.recentLabel,options:t},{name:"popular",label:this.popularLabel,options:e},{name:"all",label:this.allLabel,options:s},{name:"obsolete",label:this.obsoleteLabel,options:n}]}},methods:{onAmountSubmit:function(){document.activeElement.blur(),this.convert()},onAmountInput:function(){this._hideResult()},scrollAmountIntoView:function(){this.$nextTick(function(){a.a.below(a.a.mobileLandscape)&&this.$refs.amount.scrollIntoView(!0)})},onBaseSelected:function(t){this.base=t,this._newRecent(this.base.code),this._hideResult(),this.$refs.swap.focus()},swap:function(){this.base=[this.quote,this.quote=this.base][0],this._hideResult()},onQuoteSelected:function(t){this.quote=t,this._newRecent(this.quote.code),this._hideResult(),this.$refs.convert.focus()},convert:function(){var t=this;t.showSpinner=!0,t.showResult=!1,t.amount=parseFloat(t.amount)||1,r.a.ajax({method:"get",url:"https://web-services.oanda.com/rates/public/v1/daily",data:{base:t.base.code,quote:t.quote.code},success:function(e){var n=parseFloat(e.rates.avg_bid);t.result.amount=t.amount,t.result.base=t.base,t.result.quote=t.quote;t.result.value=c.a.intcomma(function(t){return Math.floor(t).toString().length>=5?t.toFixed(2):t.toPrecision(6)}(t.amount*n)),t.result.showObsolete=!(!t.result.base.obsolete&&!t.result.quote.obsolete),t.showSpinner=!1,t.showResult=!0}})},_hideResult:function(){this.showResult=!1,this.result.showObsolete=!1},_newRecent:function(t){this.recent=[t].concat(this.recent.filter(function(e){return e!==t})),this.recent=this.recent.splice(0,this.maxRecent),localStorage.setItem("recent",JSON.stringify(this.recent))},_lookupCurrency:function(t){for(var e=0;e<this.currencies.length;e++){var n=this.currencies[e];if(n.code===t)return n}}}},d=Object(p.a)(h,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"cc__widget"},[n("div",{staticClass:"cc__amount"},[n("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.amount,expression:"amount",modifiers:{trim:!0}}],ref:"amount",attrs:{type:"number",placeholder:t.amountPlaceholder},domProps:{value:t.amount},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.onAmountSubmit(e)},input:[function(e){e.target.composing||(t.amount=e.target.value.trim())},t.onAmountInput],focus:t.scrollAmountIntoView,blur:function(e){return t.$forceUpdate()}}})]),t._v(" "),n("div",{staticClass:"cc__select-group"},[n("currency-converter-select",{attrs:{value:t.base,label:t.baseLabel,currencyPlaceholder:t.currencyPlaceholder,optGroups:t.optGroups,noResultsText:t.noResultsText},on:{selected:function(e){return t.onBaseSelected(e)}}}),t._v(" "),n("div",{staticClass:"cc__swap"},[n("button",{ref:"swap",on:{click:t.swap}},[n("i",{staticClass:"material-icons swap_horiz dynamic-text-color"},[t._v("swap_horiz")]),t._v(" "),n("i",{staticClass:"material-icons swap_vert dynamic-text-color"},[t._v("swap_vert")])])]),t._v(" "),n("currency-converter-select",{attrs:{value:t.quote,label:t.quoteLabel,currencyPlaceholder:t.currencyPlaceholder,optGroups:t.optGroups,noResultsText:t.noResultsText},on:{selected:function(e){return t.onQuoteSelected(e)}}})],1),t._v(" "),n("div",{staticClass:"cc__result-area"},[n("div",{staticClass:"cc__convert"},[n("button",{ref:"convert",staticClass:"btn btn--primary btn--blue",on:{click:function(e){return t.convert()}}},[t._v(t._s(t.convertText)+"\n            ")])]),t._v(" "),t.showResult?n("div",{staticClass:"cc__result dynamic-text-color"},[n("div",{staticClass:"cc__result-amount-group"},[n("span",{staticClass:"cc__result-amount"},[t._v(t._s(t.result.amount))]),t._v(" "),n("span",{staticClass:"cc__result-base"},[t._v(t._s(t.result.base.code))]),t._v(" "),n("span",{staticClass:"cc__equal-sign"},[t._v("=")])]),t._v(" "),n("div",{staticClass:"cc__result-value-group"},[n("span",{staticClass:"cc__result-value"},[t._v(t._s(t.result.value))]),t._v(" "),n("span",{staticClass:"cc__result-quote"},[t._v(t._s(t.result.quote.code))])])]):t._e(),t._v(" "),t.showSpinner?n("div",{staticClass:"cc__spinner spinner"},[n("spinner")],1):t._e()]),t._v(" "),t.result.showObsolete?n("div",{staticClass:"cc__result-obsolete-msg"},[t._t("obsoleteMessage")],2):t._e()])},[],!1,null,null,null).exports,f=[].slice.call(document.getElementsByTagName("currency-converter")),_=0;_<f.length;_++)new o.a({el:f[_],components:{"currency-converter":d}})}]);