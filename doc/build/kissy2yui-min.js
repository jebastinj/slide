/*!build time : 2014-07-29 5:53:38 PM*/
KISSY.add("kg/slide/2.0.0/kissy2yui",function(a){"use strict";var b=a.config("mini")?a.Node.node:a.Node;a.augment(b,{_delegate:function(){var b=this;return a.isFunction(arguments[1])?b.delegate(arguments[0],arguments[2],arguments[1]):b.delegate.apply(b,arguments),b},indexOf:function(b){var c=this;if(a.isUndefined(b))return null;b[0]&&(b=b[0]);var d=0;return c.each(function(a,c){a[0]===b&&(d=c)}),d},size:function(){return this.length},set:function(a,b){return"innerHTML"===a?this.html(b):this.attr(a,b),this},get:function(a){var b=this,c={innerHTML:function(){return b.html()},region:function(){return{height:b.height(),width:b.width()}}};return a in c?c[a]():void 0},appendChild:function(){return this.append.apply(this,arguments),this},setStyle:function(){return this.css.apply(this,arguments),this},setStyles:function(){return this.css.apply(this,arguments),this},cloneNode:function(){return this.clone.apply(this,arguments)}}),a.Node.create=function(b){return a.Node(b)}},{requires:["node","event"]});