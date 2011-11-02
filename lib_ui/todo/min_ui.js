// lib/handlebars/base.js
var Handlebars={};Handlebars.VERSION="1.0.beta.2",Handlebars.helpers={},Handlebars.partials={},Handlebars.registerHelper=function(a,b,c){c&&(b.not=c),this.helpers[a]=b},Handlebars.registerPartial=function(a,b){this.partials[a]=b},Handlebars.registerHelper("helperMissing",function(a){if(arguments.length===2)return undefined;throw new Error("Could not find property '"+a+"'")}),Handlebars.registerHelper("blockHelperMissing",function(a,b){var c=b.inverse||function(){},d=b.fn,e="",f=Object.prototype.toString.call(a);f==="[object Function]"&&(a=a());if(a===!0)return d(this);if(a===!1||a==null)return c(this);if(f==="[object Array]"){if(a.length>0)for(var g=0,h=a.length;g<h;g++)e+=d(a[g]);else e=c(this);return e}return d(a)}),Handlebars.registerHelper("each",function(a,b){var c=b.fn,d=b.inverse,e="";if(a&&a.length>0)for(var f=0,g=a.length;f<g;f++)e+=c(a[f]);else e=d(this);return e}),Handlebars.registerHelper("if",function(a,b){return!a||Handlebars.Utils.isEmpty(a)?b.inverse(this):b.fn(this)}),Handlebars.registerHelper("unless",function(a,b){var c=b.fn,d=b.inverse;return b.fn=d,b.inverse=c,Handlebars.helpers["if"].call(this,a,b)}),Handlebars.registerHelper("with",function(a,b){return b.fn(a)}),Handlebars.registerHelper("log",function(a){Handlebars.log(a)}),Handlebars.Exception=function(a){var b=Error.prototype.constructor.apply(this,arguments);for(var c in b)b.hasOwnProperty(c)&&(this[c]=b[c])},Handlebars.Exception.prototype=new Error,Handlebars.SafeString=function(a){this.string=a},Handlebars.SafeString.prototype.toString=function(){return this.string.toString()},function(){var a={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},b=/&(?!\w+;)|[<>"'`]/g,c=/[&<>"'`]/,d=function(b){return a[b]||"&amp;"};Handlebars.Utils={escapeExpression:function(a){return a instanceof Handlebars.SafeString?a.toString():a==null||a===!1?"":c.test(a)?a.replace(b,d):a},isEmpty:function(a){return typeof a=="undefined"?!0:a===null?!0:a===!1?!0:Object.prototype.toString.call(a)==="[object Array]"&&a.length===0?!0:!1}}}(),Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(a,b,c){var d=this.programs[a];return c?Handlebars.VM.program(b,c):d?d:(d=this.programs[a]=Handlebars.VM.program(b),d)},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(c,d){return d=d||{},a.call(b,Handlebars,c,d.helpers,d.partials,d.data)}},programWithDepth:function(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(c,e){return e=e||{},a.apply(this,[c,e.data||b].concat(d))}},program:function(a,b){return function(c,d){return d=d||{},a(c,d.data||b)}},noop:function(){return""},invokePartial:function(a,b,c,d,e){if(a===undefined)throw new Handlebars.Exception("The partial "+b+" could not be found");if(a instanceof Function)return a(c,{helpers:d,partials:e});if(!Handlebars.compile)throw new Handlebars.Exception("The partial "+b+" could not be compiled when running in vm mode");return e[b]=Handlebars.compile(a),e[b](c,{helpers:d,partials:e})}},Handlebars.template=Handlebars.VM.template;

function sel_ui (ui_class) {
  var classes = {
    'border_router': {
      title : 'Contiki Border Router',
      helpers : {
        'list_neighbors': function() { return function(v) { if (v.toString() !== '')
          return '<li><pre>'+v+'</pre></li>'; }},
        'list_routes': function() { return function(v) { if (v.toString() !== '')
          return '<li><pre>'+v[0]+'/'+v[1]+' via '+v[2]+' ('+v[3]+'s)</pre></li>'; }}
      }
    }
  }
  return classes[ui_class];
};

function gen_ui (ui_class, context) {
  var use_ui = sel_ui(ui_class);
  var helper;
  for ( helper in use_ui.helpers ) {
    Handlebars.registerHelper(helper, use_ui.helpers[helper]());
  }
  var template = (function(){var a=Handlebars.template,b=Handlebars.templates=Handlebars.templates||{};b["test.html"]=a(function(a,b,c,d,e){function n(a,b){var d="",e,f;d+="\n  ",e=a,f=c.list_neighbors||a.list_neighbors,typeof f===k?e=f.call(a,e,{hash:{}}):f===m?e=l.call(a,"list_neighbors",e,{hash:{}}):e=f;if(e||e===0)d+=e;return d+="\n  ",d}function o(a,b){var d="",e,f;d+="\n  ",e=a,f=c.list_routes||a.list_routes,typeof f===k?e=f.call(a,e,{hash:{}}):f===m?e=l.call(a,"list_routes",e,{hash:{}}):e=f;if(e||e===0)d+=e;return d+="\n  ",d}c=c||a.helpers;var f="",g,h,i,j=this,k="function",l=c.helperMissing,m=void 0;f+='<h3>Neighbors:</h3>\n<ul class="neighbors_list">\n  ',g=c.neighbors||b.neighbors,h=c.each,i=j.program(1,n,e),i.hash={},i.fn=i,i.inverse=j.noop,g=h.call(b,g,i);if(g||g===0)f+=g;f+='\n</ul>\n<h3>Routes:</h3>\n<ul class="routes_list">\n  ',g=c.routes||b.routes,h=c.each,i=j.program(3,o,e),i.hash={},i.fn=i,i.inverse=j.noop,g=h.call(b,g,i);if(g||g===0)f+=g;return f+="\n</ul>\n",f})})();

  var h = document.getElementsByTagName('head').item(0);
  var t = document.createElement('title');
  t.appendChild(document.createTextNode(use_ui.title));
  h.appendChild(t);

  document.writeln(template(context));
};

