if(!window['googleLT_']){window['googleLT_']=(new Date()).getTime();}if (!window['google']) {
window['google'] = {};
}
if (!window['google']['loader']) {
window['google']['loader'] = {};
google.loader.ServiceBase = 'http://www.google.com/uds';
google.loader.GoogleApisBase = 'http://ajax.googleapis.com/ajax';
google.loader.ApiKey = 'notsupplied';
google.loader.KeyVerified = true;
google.loader.LoadFailure = false;
google.loader.Secure = false;
google.loader.GoogleLocale = 'www.google.com';
google.loader.ClientLocation = null;
google.loader.AdditionalParams = '';
(function() {var d=void 0,g=true,h=null,j=false,k=encodeURIComponent,l=window,m=document;function n(a,b){return a.load=b}var p="push",q="replace",r="charAt",t="indexOf",u="ServiceBase",v="name",w="getTime",x="length",y="prototype",z="setTimeout",A="loader",B="substring",C="join",D="toLowerCase";function E(a){return a in F?F[a]:F[a]=navigator.userAgent[D]()[t](a)!=-1}var F={};function G(a,b){var c=function(){};c.prototype=b[y];a.S=b[y];a.prototype=new c}
function H(a,b,c){var e=Array[y].slice.call(arguments,2)||[];return function(){var c=e.concat(Array[y].slice.call(arguments));return a.apply(b,c)}}function I(a){a=Error(a);a.toString=function(){return this.message};return a}function J(a,b){for(var c=a.split(/\./),e=l,f=0;f<c[x]-1;f++)e[c[f]]||(e[c[f]]={}),e=e[c[f]];e[c[c[x]-1]]=b}function K(a,b,c){a[b]=c}if(!L)var L=J;if(!M)var M=K;google[A].v={};L("google.loader.callbacks",google[A].v);var N={},O={};google[A].eval={};L("google.loader.eval",google[A].eval);
n(google,function(a,b,c){function e(a){var b=a.split(".");if(b[x]>2)throw I("Module: '"+a+"' not found!");else if(typeof b[1]!="undefined")f=b[0],c.packages=c.packages||[],c.packages[p](b[1])}var f=a,c=c||{};if(a instanceof Array||a&&typeof a=="object"&&typeof a[C]=="function"&&typeof a.reverse=="function")for(var i=0;i<a[x];i++)e(a[i]);else e(a);if(a=N[":"+f]){c&&!c.language&&c.locale&&(c.language=c.locale);if(c&&typeof c.callback=="string"&&(i=c.callback,i.match(/^[[\]A-Za-z0-9._]+$/)))i=l.eval(i),
c.callback=i;if((i=c&&c.callback!=h)&&!a.s(b))throw I("Module: '"+f+"' must be loaded before DOM onLoad!");else i?a.m(b,c)?l[z](c.callback,0):a.load(b,c):a.m(b,c)||a.load(b,c)}else throw I("Module: '"+f+"' not found!");});L("google.load",google.load);
google.R=function(a,b){b?(P[x]==0&&(Q(l,"load",R),!E("msie")&&!E("safari")&&!E("konqueror")&&E("mozilla")||l.opera?l.addEventListener("DOMContentLoaded",R,j):E("msie")?m.write("<script defer onreadystatechange='google.loader.domReady()' src=//:><\/script>"):(E("safari")||E("konqueror"))&&l[z](T,10)),P[p](a)):Q(l,"load",a)};L("google.setOnLoadCallback",google.R);
function Q(a,b,c){if(a.addEventListener)a.addEventListener(b,c,j);else if(a.attachEvent)a.attachEvent("on"+b,c);else{var e=a["on"+b];a["on"+b]=e!=h?aa([c,e]):c}}function aa(a){return function(){for(var b=0;b<a[x];b++)a[b]()}}var P=[];google[A].N=function(){var a=l.event.srcElement;if(a.readyState=="complete")a.onreadystatechange=h,a.parentNode.removeChild(a),R()};L("google.loader.domReady",google[A].N);var ba={loaded:g,complete:g};function T(){ba[m.readyState]?R():P[x]>0&&l[z](T,10)}
function R(){for(var a=0;a<P[x];a++)P[a]();P.length=0}google[A].d=function(a,b,c){if(c){var e;if(a=="script")e=m.createElement("script"),e.type="text/javascript",e.src=b;else if(a=="css")e=m.createElement("link"),e.type="text/css",e.href=b,e.rel="stylesheet";(a=m.getElementsByTagName("head")[0])||(a=m.body.parentNode.appendChild(m.createElement("head")));a.appendChild(e)}else a=="script"?m.write('<script src="'+b+'" type="text/javascript"><\/script>'):a=="css"&&m.write('<link href="'+b+'" type="text/css" rel="stylesheet"></link>')};
L("google.loader.writeLoadTag",google[A].d);google[A].O=function(a){O=a};L("google.loader.rfm",google[A].O);google[A].Q=function(a){for(var b in a)typeof b=="string"&&b&&b[r](0)==":"&&!N[b]&&(N[b]=new U(b[B](1),a[b]))};L("google.loader.rpl",google[A].Q);google[A].P=function(a){if((a=a.specs)&&a[x])for(var b=0;b<a[x];++b){var c=a[b];typeof c=="string"?N[":"+c]=new V(c):(c=new W(c[v],c.baseSpec,c.customSpecs),N[":"+c[v]]=c)}};L("google.loader.rm",google[A].P);google[A].loaded=function(a){N[":"+a.module].l(a)};
L("google.loader.loaded",google[A].loaded);google[A].M=function(){return"qid="+((new Date)[w]().toString(16)+Math.floor(Math.random()*1E7).toString(16))};L("google.loader.createGuidArg_",google[A].M);J("google_exportSymbol",J);J("google_exportProperty",K);google[A].b={};L("google.loader.themes",google[A].b);google[A].b.H="//www.google.com/cse/style/look/bubblegum.css";M(google[A].b,"BUBBLEGUM",google[A].b.H);google[A].b.J="//www.google.com/cse/style/look/greensky.css";M(google[A].b,"GREENSKY",google[A].b.J);
google[A].b.I="//www.google.com/cse/style/look/espresso.css";M(google[A].b,"ESPRESSO",google[A].b.I);google[A].b.L="//www.google.com/cse/style/look/shiny.css";M(google[A].b,"SHINY",google[A].b.L);google[A].b.K="//www.google.com/cse/style/look/minimalist.css";M(google[A].b,"MINIMALIST",google[A].b.K);function V(a){this.a=a;this.o=[];this.n={};this.e={};this.f={};this.j=g;this.c=-1}
V[y].g=function(a,b){var c="";b!=d&&(b.language!=d&&(c+="&hl="+k(b.language)),b.nocss!=d&&(c+="&output="+k("nocss="+b.nocss)),b.nooldnames!=d&&(c+="&nooldnames="+k(b.nooldnames)),b.packages!=d&&(c+="&packages="+k(b.packages)),b.callback!=h&&(c+="&async=2"),b.style!=d&&(c+="&style="+k(b.style)),b.noexp!=d&&(c+="&noexp=true"),b.other_params!=d&&(c+="&"+b.other_params));if(!this.j){google[this.a]&&google[this.a].JSHash&&(c+="&sig="+k(google[this.a].JSHash));var e=[],f;for(f in this.n)f[r](0)==":"&&e[p](f[B](1));
for(f in this.e)f[r](0)==":"&&this.e[f]&&e[p](f[B](1));c+="&have="+k(e[C](","))}return google[A][u]+"/?file="+this.a+"&v="+a+google[A].AdditionalParams+c};V[y].t=function(a){var b=h;a&&(b=a.packages);var c=h;if(b)if(typeof b=="string")c=[a.packages];else if(b[x]){c=[];for(a=0;a<b[x];a++)typeof b[a]=="string"&&c[p](b[a][q](/^\s*|\s*$/,"")[D]())}c||(c=["default"]);b=[];for(a=0;a<c[x];a++)this.n[":"+c[a]]||b[p](c[a]);return b};
n(V[y],function(a,b){var c=this.t(b),e=b&&b.callback!=h;if(e)var f=new X(b.callback);for(var i=[],o=c[x]-1;o>=0;o--){var s=c[o];e&&f.A(s);if(this.e[":"+s])c.splice(o,1),e&&this.f[":"+s][p](f);else i[p](s)}if(c[x]){b&&b.packages&&(b.packages=c.sort()[C](","));for(o=0;o<i[x];o++)s=i[o],this.f[":"+s]=[],e&&this.f[":"+s][p](f);if(!b&&O[":"+this.a]!=h&&O[":"+this.a].versions[":"+a]!=h&&!google[A].AdditionalParams&&this.j){c=O[":"+this.a];google[this.a]=google[this.a]||{};for(var S in c.properties)S&&S[r](0)==
":"&&(google[this.a][S[B](1)]=c.properties[S]);google[A].d("script",google[A][u]+c.path+c.js,e);c.css&&google[A].d("css",google[A][u]+c.path+c.css,e)}else(!b||!b.autoloaded)&&google[A].d("script",this.g(a,b),e);if(this.j&&(this.j=j,this.c=(new Date)[w](),this.c%100!=1))this.c=-1;for(o=0;o<i[x];o++)s=i[o],this.e[":"+s]=g}});
V[y].l=function(a){if(this.c!=-1)ca("al_"+this.a,"jl."+((new Date)[w]()-this.c),g),this.c=-1;this.o=this.o.concat(a.components);google[A][this.a]||(google[A][this.a]={});google[A][this.a].packages=this.o.slice(0);for(var b=0;b<a.components[x];b++){this.n[":"+a.components[b]]=g;this.e[":"+a.components[b]]=j;var c=this.f[":"+a.components[b]];if(c){for(var e=0;e<c[x];e++)c[e].B(a.components[b]);delete this.f[":"+a.components[b]]}}};V[y].m=function(a,b){return this.t(b)[x]==0};V[y].s=function(){return g};
function X(a){this.D=a;this.q={};this.r=0}X[y].A=function(a){this.r++;this.q[":"+a]=g};X[y].B=function(a){this.q[":"+a]&&(this.q[":"+a]=j,this.r--,this.r==0&&l[z](this.D,0))};function W(a,b,c){this.name=a;this.C=b;this.p=c;this.u=this.h=j;this.k=[];google[A].v[this[v]]=H(this.l,this)}G(W,V);n(W[y],function(a,b){var c=b&&b.callback!=h;c?(this.k[p](b.callback),b.callback="google.loader.callbacks."+this[v]):this.h=g;(!b||!b.autoloaded)&&google[A].d("script",this.g(a,b),c)});W[y].m=function(a,b){return b&&b.callback!=h?this.u:this.h};W[y].l=function(){this.u=g;for(var a=0;a<this.k[x];a++)l[z](this.k[a],0);this.k=[]};
var Y=function(a,b){return a.string?k(a.string)+"="+k(b):a.regex?b[q](/(^.*$)/,a.regex):""};W[y].g=function(a,b){return this.F(this.w(a),a,b)};
W[y].F=function(a,b,c){var e="";a.key&&(e+="&"+Y(a.key,google[A].ApiKey));a.version&&(e+="&"+Y(a.version,b));b=google[A].Secure&&a.ssl?a.ssl:a.uri;if(c!=h)for(var f in c)a.params[f]?e+="&"+Y(a.params[f],c[f]):f=="other_params"?e+="&"+c[f]:f=="base_domain"&&(b="http://"+c[f]+a.uri[B](a.uri[t]("/",7)));google[this[v]]={};b[t]("?")==-1&&e&&(e="?"+e[B](1));return b+e};W[y].s=function(a){return this.w(a).deferred};W[y].w=function(a){if(this.p)for(var b=0;b<this.p[x];++b){var c=this.p[b];if(RegExp(c.pattern).test(a))return c}return this.C};function U(a,b){this.a=a;this.i=b;this.h=j}G(U,V);n(U[y],function(a,b){this.h=g;google[A].d("script",this.g(a,b),j)});U[y].m=function(){return this.h};U[y].l=function(){};U[y].g=function(a,b){if(!this.i.versions[":"+a]){if(this.i.aliases){var c=this.i.aliases[":"+a];c&&(a=c)}if(!this.i.versions[":"+a])throw I("Module: '"+this.a+"' with version '"+a+"' not found!");}return google[A].GoogleApisBase+"/libs/"+this.a+"/"+a+"/"+this.i.versions[":"+a][b&&b.uncompressed?"uncompressed":"compressed"]};
U[y].s=function(){return j};var da=j,Z=[],ea=(new Date)[w](),ca=function(a,b,c){da||(Q(l,"unload",fa),da=g);if(c){if(!google[A].Secure&&(!google[A].Options||google[A].Options.csi===j))a=a[D]()[q](/[^a-z0-9_.]+/g,"_"),b=b[D]()[q](/[^a-z0-9_.]+/g,"_"),l[z](H($,h,"//gg.google.com/csi?s=uds&v=2&action="+k(a)+"&it="+k(b)),1E4)}else Z[p]("r"+Z[x]+"="+k(a+(b?"|"+b:""))),l[z](fa,Z[x]>5?0:15E3)},fa=function(){if(Z[x]){var a=google[A][u];a[t]("http:")==0&&(a=a[q](/^http:/,"https:"));$(a+"/stats?"+Z[C]("&")+"&nc="+(new Date)[w]()+"_"+
((new Date)[w]()-ea));Z.length=0}},$=function(a){var b=new Image,c=$.G++;$.z[c]=b;b.onload=b.onerror=function(){delete $.z[c]};b.src=a;b=h};$.z={};$.G=0;J("google.loader.recordStat",ca);J("google.loader.createImageForLogging",$);

}) ();google.loader.rm({"specs":["feeds","spreadsheets","gdata","visualization",{"name":"sharing","baseSpec":{"uri":"http://www.google.com/s2/sharing/js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{"language":{"string":"hl"}}}},"search","orkut","ads","elements",{"name":"books","baseSpec":{"uri":"http://books.google.com/books/api.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}}}},{"name":"friendconnect","baseSpec":{"uri":"http://www.google.com/friendconnect/script/friendconnect.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":false,"params":{}}},"identitytoolkit","ima",{"name":"maps","baseSpec":{"uri":"http://maps.google.com/maps?file\u003dgoogleapi","ssl":"https://maps-api-ssl.google.com/maps?file\u003dgoogleapi","key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"regex":"callback\u003d$1\u0026async\u003d2"},"language":{"string":"hl"}}},"customSpecs":[{"uri":"http://maps.googleapis.com/maps/api/js","ssl":"https://maps.googleapis.com/maps/api/js","version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"}},"pattern":"^(3|3..*)$"}]},"payments","wave","annotations_v2","earth","language",{"name":"annotations","baseSpec":{"uri":"http://www.google.com/reviews/scripts/annotations_bootstrap.js","ssl":null,"key":{"string":"key"},"version":{"string":"v"},"deferred":true,"params":{"callback":{"string":"callback"},"language":{"string":"hl"},"country":{"string":"gl"}}}},"picker"]});
google.loader.rfm({":search":{"versions":{":1":"1",":1.0":"1"},"path":"/api/search/1.0/473bb688d0c0dd605119ad983f5a4386/","js":"default+en.I.js","css":"default+en.css","properties":{":JSHash":"473bb688d0c0dd605119ad983f5a4386",":NoOldNames":false,":Version":"1.0"}},":language":{"versions":{":1":"1",":1.0":"1"},"path":"/api/language/1.0/51c9af4113895600abd654d7d66311f4/","js":"default+en.I.js","properties":{":JSHash":"51c9af4113895600abd654d7d66311f4",":Version":"1.0"}},":feeds":{"versions":{":1":"1",":1.0":"1"},"path":"/api/feeds/1.0/efe8f95c5756111c3e36c06dab50fd12/","js":"default+en.I.js","css":"default+en.css","properties":{":JSHash":"efe8f95c5756111c3e36c06dab50fd12",":Version":"1.0"}},":spreadsheets":{"versions":{":0":"1",":0.4":"1"},"path":"/api/spreadsheets/0.4/87ff7219e9f8a8164006cbf28d5e911a/","js":"default.I.js","properties":{":JSHash":"87ff7219e9f8a8164006cbf28d5e911a",":Version":"0.4"}},":ima":{"versions":{":1":"1",":1.3":"1"},"path":"/api/ima/1.3/68356b26f09ba489e53c9a1bc9b1e922/","js":"default.I.js","properties":{":JSHash":"68356b26f09ba489e53c9a1bc9b1e922",":Version":"1.3"}},":wave":{"versions":{":1":"1",":1.0":"1"},"path":"/api/wave/1.0/3b6f7573ff78da6602dda5e09c9025bf/","js":"default.I.js","properties":{":JSHash":"3b6f7573ff78da6602dda5e09c9025bf",":Version":"1.0"}},":annotations":{"versions":{":1":"1",":1.0":"1"},"path":"/api/annotations/1.0/ad1565d879cca9982c9467668024f1ac/","js":"default+en.I.js","properties":{":JSHash":"ad1565d879cca9982c9467668024f1ac",":Version":"1.0"}},":earth":{"versions":{":1":"1",":1.0":"1"},"path":"/api/earth/1.0/109c7b2bae7fe6cc34ea875176165d81/","js":"default.I.js","properties":{":JSHash":"109c7b2bae7fe6cc34ea875176165d81",":Version":"1.0"}},":picker":{"versions":{":1":"1",":1.0":"1"},"path":"/api/picker/1.0/b7e9eb7fd8c0e098a7173ce367b2b5c1/","js":"default.I.js","css":"default.css","properties":{":JSHash":"b7e9eb7fd8c0e098a7173ce367b2b5c1",":Version":"1.0"}}});
google.loader.rpl({":scriptaculous":{"versions":{":1.8.3":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.9.0":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.2":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"},":1.8.1":{"uncompressed":"scriptaculous.js","compressed":"scriptaculous.js"}},"aliases":{":1.8":"1.8.3",":1":"1.9.0",":1.9":"1.9.0"}},":yui":{"versions":{":2.6.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.9.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.7.0":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.0r4":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.2r1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":2.8.1":{"uncompressed":"build/yuiloader/yuiloader.js","compressed":"build/yuiloader/yuiloader-min.js"},":3.3.0":{"uncompressed":"build/yui/yui.js","compressed":"build/yui/yui-min.js"}},"aliases":{":3":"3.3.0",":2":"2.9.0",":2.7":"2.7.0",":2.8.2":"2.8.2r1",":2.6":"2.6.0",":2.9":"2.9.0",":2.8":"2.8.2r1",":2.8.0":"2.8.0r4",":3.3":"3.3.0"}},":swfobject":{"versions":{":2.1":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"},":2.2":{"uncompressed":"swfobject_src.js","compressed":"swfobject.js"}},"aliases":{":2":"2.2"}},":webfont":{"versions":{":1.0.2":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.1":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.0":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.19":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.6":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.18":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.5":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.17":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.4":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.16":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.3":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.9":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.21":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.12":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.22":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.13":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.14":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.15":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.10":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"},":1.0.11":{"uncompressed":"webfont_debug.js","compressed":"webfont.js"}},"aliases":{":1":"1.0.22",":1.0":"1.0.22"}},":ext-core":{"versions":{":3.1.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"},":3.0.0":{"uncompressed":"ext-core-debug.js","compressed":"ext-core.js"}},"aliases":{":3":"3.1.0",":3.0":"3.0.0",":3.1":"3.1.0"}},":mootools":{"versions":{":1.2.3":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.4":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.3.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.2.5":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.0":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.1.2":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"},":1.4.1":{"uncompressed":"mootools.js","compressed":"mootools-yui-compressed.js"}},"aliases":{":1":"1.1.2",":1.11":"1.1.1",":1.4":"1.4.1",":1.3":"1.3.2",":1.2":"1.2.5",":1.1":"1.1.2"}},":jqueryui":{"versions":{":1.6.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.9":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.15":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.14":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.7":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.13":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.8":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.12":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.11":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.5":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.10":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.6":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.0":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.7.1":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.4":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.3":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.5.2":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"},":1.8.16":{"uncompressed":"jquery-ui.js","compressed":"jquery-ui.min.js"}},"aliases":{":1.8":"1.8.16",":1.7":"1.7.3",":1.6":"1.6.0",":1":"1.8.16",":1.5":"1.5.3",":1.8.3":"1.8.4"}},":chrome-frame":{"versions":{":1.0.2":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.1":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"},":1.0.0":{"uncompressed":"CFInstall.js","compressed":"CFInstall.min.js"}},"aliases":{":1":"1.0.2",":1.0":"1.0.2"}},":dojo":{"versions":{":1.3.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.1.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.6.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.3.2":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.6.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.3":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.5.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.2.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.0":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"},":1.4.1":{"uncompressed":"dojo/dojo.xd.js.uncompressed.js","compressed":"dojo/dojo.xd.js"}},"aliases":{":1":"1.6.1",":1.6":"1.6.1",":1.5":"1.5.1",":1.4":"1.4.3",":1.3":"1.3.2",":1.2":"1.2.3",":1.1":"1.1.1"}},":prototype":{"versions":{":1.7.0.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.2":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.1.0":{"uncompressed":"prototype.js","compressed":"prototype.js"},":1.6.0.3":{"uncompressed":"prototype.js","compressed":"prototype.js"}},"aliases":{":1.7":"1.7.0.0",":1.6.1":"1.6.1.0",":1":"1.7.0.0",":1.6":"1.6.1.0",":1.7.0":"1.7.0.0",":1.6.0":"1.6.0.3"}},":jquery":{"versions":{":1.6.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.3.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.6.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.2.6":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.3":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.4":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.5.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.0":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.1":{"uncompressed":"jquery.js","compressed":"jquery.min.js"},":1.4.2":{"uncompressed":"jquery.js","compressed":"jquery.min.js"}},"aliases":{":1":"1.6.4",":1.6":"1.6.4",":1.5":"1.5.2",":1.4":"1.4.4",":1.3":"1.3.2",":1.2":"1.2.6"}}});
}
/* A JavaScript implementation of the SHA family of hashes, as defined in FIPS
 * PUB 180-2 as well as the corresponding HMAC implementation as defined in
 * FIPS PUB 198a
 *
 * Version 1.3 Copyright Brian Turek 2008-2010
 * Distributed under the BSD License
 * See http://jssha.sourceforge.net/ for more information
 *
 * Several functions taken from Paul Johnson
 */
(function(){var charSize=8,b64pad="",hexCase=0,str2binb=function(a){var b=[],mask=(1<<charSize)-1,length=a.length*charSize,i;for(i=0;i<length;i+=charSize){b[i>>5]|=(a.charCodeAt(i/charSize)&mask)<<(32-charSize-(i%32))}return b},hex2binb=function(a){var b=[],length=a.length,i,num;for(i=0;i<length;i+=2){num=parseInt(a.substr(i,2),16);if(!isNaN(num)){b[i>>3]|=num<<(24-(4*(i%8)))}else{return"INVALID HEX STRING"}}return b},binb2hex=function(a){var b=(hexCase)?"0123456789ABCDEF":"0123456789abcdef",str="",length=a.length*4,i,srcByte;for(i=0;i<length;i+=1){srcByte=a[i>>2]>>((3-(i%4))*8);str+=b.charAt((srcByte>>4)&0xF)+b.charAt(srcByte&0xF)}return str},binb2b64=function(a){var b="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"+"0123456789+/",str="",length=a.length*4,i,j,triplet;for(i=0;i<length;i+=3){triplet=(((a[i>>2]>>8*(3-i%4))&0xFF)<<16)|(((a[i+1>>2]>>8*(3-(i+1)%4))&0xFF)<<8)|((a[i+2>>2]>>8*(3-(i+2)%4))&0xFF);for(j=0;j<4;j+=1){if(i*8+j*6<=a.length*32){str+=b.charAt((triplet>>6*(3-j))&0x3F)}else{str+=b64pad}}}return str},rotl=function(x,n){return(x<<n)|(x>>>(32-n))},parity=function(x,y,z){return x^y^z},ch=function(x,y,z){return(x&y)^(~x&z)},maj=function(x,y,z){return(x&y)^(x&z)^(y&z)},safeAdd_2=function(x,y){var a=(x&0xFFFF)+(y&0xFFFF),msw=(x>>>16)+(y>>>16)+(a>>>16);return((msw&0xFFFF)<<16)|(a&0xFFFF)},safeAdd_5=function(a,b,c,d,e){var f=(a&0xFFFF)+(b&0xFFFF)+(c&0xFFFF)+(d&0xFFFF)+(e&0xFFFF),msw=(a>>>16)+(b>>>16)+(c>>>16)+(d>>>16)+(e>>>16)+(f>>>16);return((msw&0xFFFF)<<16)|(f&0xFFFF)},coreSHA1=function(f,g){var W=[],a,b,c,d,e,T,i,t,appendedMessageLength,H=[0x67452301,0xefcdab89,0x98badcfe,0x10325476,0xc3d2e1f0],K=[0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x5a827999,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x6ed9eba1,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0x8f1bbcdc,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6,0xca62c1d6];f[g>>5]|=0x80<<(24-(g%32));f[(((g+65)>>9)<<4)+15]=g;appendedMessageLength=f.length;for(i=0;i<appendedMessageLength;i+=16){a=H[0];b=H[1];c=H[2];d=H[3];e=H[4];for(t=0;t<80;t+=1){if(t<16){W[t]=f[t+i]}else{W[t]=rotl(W[t-3]^W[t-8]^W[t-14]^W[t-16],1)}if(t<20){T=safeAdd_5(rotl(a,5),ch(b,c,d),e,K[t],W[t])}else if(t<40){T=safeAdd_5(rotl(a,5),parity(b,c,d),e,K[t],W[t])}else if(t<60){T=safeAdd_5(rotl(a,5),maj(b,c,d),e,K[t],W[t])}else{T=safeAdd_5(rotl(a,5),parity(b,c,d),e,K[t],W[t])}e=d;d=c;c=rotl(b,30);b=a;a=T}H[0]=safeAdd_2(a,H[0]);H[1]=safeAdd_2(b,H[1]);H[2]=safeAdd_2(c,H[2]);H[3]=safeAdd_2(d,H[3]);H[4]=safeAdd_2(e,H[4])}return H},jsSHA=function(a,b){this.sha1=null;this.strBinLen=null;this.strToHash=null;if("HEX"===b){if(0!==(a.length%2)){return"TEXT MUST BE IN BYTE INCREMENTS"}this.strBinLen=a.length*4;this.strToHash=hex2binb(a)}else if(("ASCII"===b)||('undefined'===typeof(b))){this.strBinLen=a.length*charSize;this.strToHash=str2binb(a)}else{return"UNKNOWN TEXT INPUT TYPE"}};jsSHA.prototype={getHash:function(a){var b=null,message=this.strToHash.slice();switch(a){case"HEX":b=binb2hex;break;case"B64":b=binb2b64;break;default:return"FORMAT NOT RECOGNIZED"}if(null===this.sha1){this.sha1=coreSHA1(message,this.strBinLen)}return b(this.sha1)},getHMAC:function(a,b,c){var d,keyToUse,i,retVal,keyBinLen,keyWithIPad=[],keyWithOPad=[];switch(c){case"HEX":d=binb2hex;break;case"B64":d=binb2b64;break;default:return"FORMAT NOT RECOGNIZED"}if("HEX"===b){if(0!==(a.length%2)){return"KEY MUST BE IN BYTE INCREMENTS"}keyToUse=hex2binb(a);keyBinLen=a.length*4}else if("ASCII"===b){keyToUse=str2binb(a);keyBinLen=a.length*charSize}else{return"UNKNOWN KEY INPUT TYPE"}if(64<(keyBinLen/8)){keyToUse=coreSHA1(keyToUse,keyBinLen);keyToUse[15]&=0xFFFFFF00}else if(64>(keyBinLen/8)){keyToUse[15]&=0xFFFFFF00}for(i=0;i<=15;i+=1){keyWithIPad[i]=keyToUse[i]^0x36363636;keyWithOPad[i]=keyToUse[i]^0x5C5C5C5C}retVal=coreSHA1(keyWithIPad.concat(this.strToHash),512+this.strBinLen);retVal=coreSHA1(keyWithOPad.concat(retVal),672);return(d(retVal))}};window.jsSHA=jsSHA}());

google.load('visualization', '1', {packages:['table'], uncompressed: true});
google.load('jquery', '1.6.4');

var ui = {};

var nodes = [];

function sel_ui (ui_class) {
  var classes = {
    // TODO: Implement shorthand
    'brt': {
      title : 'Contiki Border Router',
      //procs : {
        /* Add ticks and some action buttons which will generate a query to
         * a) get the records for each node from Pachube
         * b) display further actions if records are available
         * ?) TBD: how many more steps and features we want?
         * ?) display graphs obtained from Pachube :)
         */
        'n': function(v) {

          $('.main').append('<h3>Neighbourhood Nodes:</h3>');
          $('.main').append('<div id=\"nodes\"></div>');

	  ui.node_table_data = new google.visualization.DataTable();

          var data = ui.node_table_data;

	  /*
	  data.addColumn('string', 'a string');
	  data.addColumn('number', 'a number');
	  data.addColumn('boolean', 'on/off');
	  */

	  data.addColumn('string', 'IP address');
          data.addColumn('string', 'ID hash');
	  data.addRows(v.length-1);

          $.each(v, function (i, x) { if (x.toString() !== '') {

            var h = new jsSHA(x, "ASCII");
            nodes[i] = { hash: h.getHash("HEX"), addr: x };

            data.setCell(i,0,nodes[i].addr);
            data.setCell(i,1,nodes[i].hash);
          }});

	  ui.node_table = new google.visualization.Table(document.getElementById('nodes'));
	  ui.node_table.draw(data, {showRowNumber: true, sort: 'disable'});

          $('.main').append('<div id=\"nodes-operations\"></div>');

          /*
          google.visualization.events.addListener(ui.node_table, 'select', function() {
            var rows = ui.node_table.getSelection();
            for (var e in rows) {
              alert('You selected ' + ui.node_table_data.getValue(rows[e].row, 0));
            }
          });
          */
          var s = '<input value="Submit?!" type="button" id="nodes-opb1" onclick="ui.get_nodes(ui.use_nodes)"/>';

          /* XXX: why this API doesn't do it just as simple as that ? */

          ui.get_nodes = function (callback) {
            var rows = ui.node_table.getSelection();
            var columns = ui.node_table_data.getNumberOfColumns();
            var selection = new Array(rows.length);
            for (var e in rows) {
              selection[e] = new Array(columns);
              for (var c = 0; c < (columns-1); c++) {
                selection[e][c] = ui.node_table_data.getValue(rows[e].row, c);
              }
            }
            callback(selection);
          }

          ui.use_nodes = function (selection) {
            /* TODO: this is where I need to implement the functionality! */
            for (var e in selection) alert(selection[e][0]);
          }

          $('#nodes-operations').append(s);

        },
        'r': function(v) {
          /* XXX: what can be done with the routes here? Any fancy needed? */
          $('.main').append('<h3>Available Routes:</h3>');
          $('.main').append('<div id=\"routes\"></div>');

          ui.route_table_data =  new google.visualization.DataTable();

	  var data = ui.route_table_data;

	  data.addColumn('string', 'Gateway IP address');
	  data.addColumn('string', 'Next hop IP address');
	  data.addColumn('number', 'TTL');
	  data.addRows(v.length-1);

          $.each(v, function (i, x) { if (x.toString() !== '') {

	    data.setCell(i,0,x[0]+'/'+x[1]);
	    data.setCell(i,1,x[2]);
	    data.setCell(i,2,x[3]);

          }});

	  ui.route_table = new google.visualization.Table(document.getElementById('routes'));
          ui.route_table.draw(data, {showRowNumber: true, sort: 'disable'});

        }
      //}
    }
  }
  return classes[ui_class];
};

function gen_ui (ui_class, params) {
  var use_ui = sel_ui(ui_class);

  $('head').append('<title>'+use_ui.title+'</title>');

  var $d = $('<div class="main"/>');

  $('body').append($d);

  for ( var k in params ) {

    if ( params.hasOwnProperty(k) &&
         use_ui.hasOwnProperty(k) )
    {
      use_ui[k](params[k]);
    }
  }
};
