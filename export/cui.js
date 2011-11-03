// lib/handlebars/base.js
var Handlebars={};Handlebars.VERSION="1.0.beta.2",Handlebars.helpers={},Handlebars.partials={},Handlebars.registerHelper=function(a,b,c){c&&(b.not=c),this.helpers[a]=b},Handlebars.registerPartial=function(a,b){this.partials[a]=b},Handlebars.registerHelper("helperMissing",function(a){if(arguments.length===2)return undefined;throw new Error("Could not find property '"+a+"'")}),Handlebars.registerHelper("blockHelperMissing",function(a,b){var c=b.inverse||function(){},d=b.fn,e="",f=Object.prototype.toString.call(a);f==="[object Function]"&&(a=a());if(a===!0)return d(this);if(a===!1||a==null)return c(this);if(f==="[object Array]"){if(a.length>0)for(var g=0,h=a.length;g<h;g++)e+=d(a[g]);else e=c(this);return e}return d(a)}),Handlebars.registerHelper("each",function(a,b){var c=b.fn,d=b.inverse,e="";if(a&&a.length>0)for(var f=0,g=a.length;f<g;f++)e+=c(a[f]);else e=d(this);return e}),Handlebars.registerHelper("if",function(a,b){return!a||Handlebars.Utils.isEmpty(a)?b.inverse(this):b.fn(this)}),Handlebars.registerHelper("unless",function(a,b){var c=b.fn,d=b.inverse;return b.fn=d,b.inverse=c,Handlebars.helpers["if"].call(this,a,b)}),Handlebars.registerHelper("with",function(a,b){return b.fn(a)}),Handlebars.registerHelper("log",function(a){Handlebars.log(a)});var handlebars=function(){var a={trace:function(){},yy:{},symbols_:{error:2,root:3,program:4,EOF:5,statements:6,simpleInverse:7,statement:8,openInverse:9,closeBlock:10,openBlock:11,mustache:12,partial:13,CONTENT:14,COMMENT:15,OPEN_BLOCK:16,inMustache:17,CLOSE:18,OPEN_INVERSE:19,OPEN_ENDBLOCK:20,path:21,OPEN:22,OPEN_UNESCAPED:23,OPEN_PARTIAL:24,params:25,hash:26,param:27,STRING:28,INTEGER:29,BOOLEAN:30,hashSegments:31,hashSegment:32,ID:33,EQUALS:34,pathSegments:35,SEP:36,$accept:0,$end:1},terminals_:{2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"OPEN_PARTIAL",28:"STRING",29:"INTEGER",30:"BOOLEAN",33:"ID",34:"EQUALS",36:"SEP"},productions_:[0,[3,2],[4,3],[4,1],[4,0],[6,1],[6,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,3],[13,4],[7,2],[17,3],[17,2],[17,2],[17,1],[25,2],[25,1],[27,1],[27,1],[27,1],[27,1],[26,1],[31,2],[31,1],[32,3],[32,3],[32,3],[32,3],[21,1],[35,3],[35,1]],performAction:function d(a,b,c,d,e,f,g){var h=f.length-1;switch(e){case 1:return f[h-1];case 2:this.$=new d.ProgramNode(f[h-2],f[h]);break;case 3:this.$=new d.ProgramNode(f[h]);break;case 4:this.$=new d.ProgramNode([]);break;case 5:this.$=[f[h]];break;case 6:f[h-1].push(f[h]),this.$=f[h-1];break;case 7:this.$=new d.InverseNode(f[h-2],f[h-1],f[h]);break;case 8:this.$=new d.BlockNode(f[h-2],f[h-1],f[h]);break;case 9:this.$=f[h];break;case 10:this.$=f[h];break;case 11:this.$=new d.ContentNode(f[h]);break;case 12:this.$=new d.CommentNode(f[h]);break;case 13:this.$=new d.MustacheNode(f[h-1][0],f[h-1][1]);break;case 14:this.$=new d.MustacheNode(f[h-1][0],f[h-1][1]);break;case 15:this.$=f[h-1];break;case 16:this.$=new d.MustacheNode(f[h-1][0],f[h-1][1]);break;case 17:this.$=new d.MustacheNode(f[h-1][0],f[h-1][1],!0);break;case 18:this.$=new d.PartialNode(f[h-1]);break;case 19:this.$=new d.PartialNode(f[h-2],f[h-1]);break;case 20:break;case 21:this.$=[[f[h-2]].concat(f[h-1]),f[h]];break;case 22:this.$=[[f[h-1]].concat(f[h]),null];break;case 23:this.$=[[f[h-1]],f[h]];break;case 24:this.$=[[f[h]],null];break;case 25:f[h-1].push(f[h]),this.$=f[h-1];break;case 26:this.$=[f[h]];break;case 27:this.$=f[h];break;case 28:this.$=new d.StringNode(f[h]);break;case 29:this.$=new d.IntegerNode(f[h]);break;case 30:this.$=new d.BooleanNode(f[h]);break;case 31:this.$=new d.HashNode(f[h]);break;case 32:f[h-1].push(f[h]),this.$=f[h-1];break;case 33:this.$=[f[h]];break;case 34:this.$=[f[h-2],f[h]];break;case 35:this.$=[f[h-2],new d.StringNode(f[h])];break;case 36:this.$=[f[h-2],new d.IntegerNode(f[h])];break;case 37:this.$=[f[h-2],new d.BooleanNode(f[h])];break;case 38:this.$=new d.IdNode(f[h]);break;case 39:f[h-2].push(f[h]),this.$=f[h-2];break;case 40:this.$=[f[h]]}},table:[{3:1,4:2,5:[2,4],6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{1:[3]},{5:[1,16]},{5:[2,3],7:17,8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,19],20:[2,3],22:[1,13],23:[1,14],24:[1,15]},{5:[2,5],14:[2,5],15:[2,5],16:[2,5],19:[2,5],20:[2,5],22:[2,5],23:[2,5],24:[2,5]},{4:20,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{4:21,6:3,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],24:[1,15]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],24:[2,9]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],24:[2,10]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],24:[2,11]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],24:[2,12]},{17:22,21:23,33:[1,25],35:24},{17:26,21:23,33:[1,25],35:24},{17:27,21:23,33:[1,25],35:24},{17:28,21:23,33:[1,25],35:24},{21:29,33:[1,25],35:24},{1:[2,1]},{6:30,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],24:[1,15]},{5:[2,6],14:[2,6],15:[2,6],16:[2,6],19:[2,6],20:[2,6],22:[2,6],23:[2,6],24:[2,6]},{17:22,18:[1,31],21:23,33:[1,25],35:24},{10:32,20:[1,33]},{10:34,20:[1,33]},{18:[1,35]},{18:[2,24],21:40,25:36,26:37,27:38,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,38],28:[2,38],29:[2,38],30:[2,38],33:[2,38],36:[1,46]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],36:[2,40]},{18:[1,47]},{18:[1,48]},{18:[1,49]},{18:[1,50],21:51,33:[1,25],35:24},{5:[2,2],8:18,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,2],22:[1,13],23:[1,14],24:[1,15]},{14:[2,20],15:[2,20],16:[2,20],19:[2,20],22:[2,20],23:[2,20],24:[2,20]},{5:[2,7],14:[2,7],15:[2,7],16:[2,7],19:[2,7],20:[2,7],22:[2,7],23:[2,7],24:[2,7]},{21:52,33:[1,25],35:24},{5:[2,8],14:[2,8],15:[2,8],16:[2,8],19:[2,8],20:[2,8],22:[2,8],23:[2,8],24:[2,8]},{14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],24:[2,14]},{18:[2,22],21:40,26:53,27:54,28:[1,41],29:[1,42],30:[1,43],31:39,32:44,33:[1,45],35:24},{18:[2,23]},{18:[2,26],28:[2,26],29:[2,26],30:[2,26],33:[2,26]},{18:[2,31],32:55,33:[1,56]},{18:[2,27],28:[2,27],29:[2,27],30:[2,27],33:[2,27]},{18:[2,28],28:[2,28],29:[2,28],30:[2,28],33:[2,28]},{18:[2,29],28:[2,29],29:[2,29],30:[2,29],33:[2,29]},{18:[2,30],28:[2,30],29:[2,30],30:[2,30],33:[2,30]},{18:[2,33],33:[2,33]},{18:[2,40],28:[2,40],29:[2,40],30:[2,40],33:[2,40],34:[1,57],36:[2,40]},{33:[1,58]},{14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],24:[2,13]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],24:[2,16]},{5:[2,17],14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],24:[2,17]},{5:[2,18],14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],24:[2,18]},{18:[1,59]},{18:[1,60]},{18:[2,21]},{18:[2,25],28:[2,25],29:[2,25],30:[2,25],33:[2,25]},{18:[2,32],33:[2,32]},{34:[1,57]},{21:61,28:[1,62],29:[1,63],30:[1,64],33:[1,25],35:24},{18:[2,39],28:[2,39],29:[2,39],30:[2,39],33:[2,39],36:[2,39]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],24:[2,19]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],24:[2,15]},{18:[2,34],33:[2,34]},{18:[2,35],33:[2,35]},{18:[2,36],33:[2,36]},{18:[2,37],33:[2,37]}],defaultActions:{16:[2,1],37:[2,23],53:[2,21]},parseError:function(a,b){throw new Error(a)},parse:function f(a){function n(a){c.length=c.length-2*a,d.length=d.length-a,e.length=e.length-a}function o(){var a;return a=b.lexer.lex()||1,typeof a!="number"&&(a=b.symbols_[a]||a),a}var b=this,c=[0],d=[null],e=[],f=this.table,g="",h=0,i=0,j=0,k=2,l=1;this.lexer.setInput(a),this.lexer.yy=this.yy,this.yy.lexer=this.lexer,typeof this.lexer.yylloc=="undefined"&&(this.lexer.yylloc={});var m=this.lexer.yylloc;e.push(m),typeof this.yy.parseError=="function"&&(this.parseError=this.yy.parseError);var p,q,r,s,t,u,v={},w,x,y,z;for(;;){r=c[c.length-1],this.defaultActions[r]?s=this.defaultActions[r]:(p==null&&(p=o()),s=f[r]&&f[r][p]);if(typeof s=="undefined"||!s.length||!s[0]){if(!j){z=[];for(w in f[r])this.terminals_[w]&&w>2&&z.push("'"+this.terminals_[w]+"'");var A="";this.lexer.showPosition?A="Parse error on line "+(h+1)+":\n"+this.lexer.showPosition()+"\nExpecting "+z.join(", ")+", got '"+this.terminals_[p]+"'":A="Parse error on line "+(h+1)+": Unexpected "+(p==1?"end of input":"'"+(this.terminals_[p]||p)+"'"),this.parseError(A,{text:this.lexer.match,token:this.terminals_[p]||p,line:this.lexer.yylineno,loc:m,expected:z})}if(j==3){if(p==l)throw new Error(A||"Parsing halted.");i=this.lexer.yyleng,g=this.lexer.yytext,h=this.lexer.yylineno,m=this.lexer.yylloc,p=o()}for(;;){if(k.toString()in f[r])break;if(r==0)throw new Error(A||"Parsing halted.");n(1),r=c[c.length-1]}q=p,p=k,r=c[c.length-1],s=f[r]&&f[r][k],j=3}if(s[0]instanceof Array&&s.length>1)throw new Error("Parse Error: multiple actions possible at state: "+r+", token: "+p);switch(s[0]){case 1:c.push(p),d.push(this.lexer.yytext),e.push(this.lexer.yylloc),c.push(s[1]),p=null,q?(p=q,q=null):(i=this.lexer.yyleng,g=this.lexer.yytext,h=this.lexer.yylineno,m=this.lexer.yylloc,j>0&&j--);break;case 2:x=this.productions_[s[1]][1],v.$=d[d.length-x],v._$={first_line:e[e.length-(x||1)].first_line,last_line:e[e.length-1].last_line,first_column:e[e.length-(x||1)].first_column,last_column:e[e.length-1].last_column},u=this.performAction.call(v,g,i,h,this.yy,s[1],d,e);if(typeof u!="undefined")return u;x&&(c=c.slice(0,-1*x*2),d=d.slice(0,-1*x),e=e.slice(0,-1*x)),c.push(this.productions_[s[1]][0]),d.push(v.$),e.push(v._$),y=f[c[c.length-2]][c[c.length-1]],c.push(y);break;case 3:return!0}}return!0}},b=function(){var a={EOF:1,parseError:function b(a,b){if(this.yy.parseError)this.yy.parseError(a,b);else throw new Error(a)},setInput:function(a){return this._input=a,this._more=this._less=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this},input:function(){var a=this._input[0];this.yytext+=a,this.yyleng++,this.match+=a,this.matched+=a;var b=a.match(/\n/);return b&&this.yylineno++,this._input=this._input.slice(1),a},unput:function(a){return this._input=a+this._input,this},more:function(){return this._more=!0,this},pastInput:function(){var a=this.matched.substr(0,this.matched.length-this.match.length);return(a.length>20?"...":"")+a.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var a=this.match;return a.length<20&&(a+=this._input.substr(0,20-a.length)),(a.substr(0,20)+(a.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var a=this.pastInput(),b=(new Array(a.length+1)).join("-");return a+this.upcomingInput()+"\n"+b+"^"},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var a,b,c,d;this._more||(this.yytext="",this.match="");var e=this._currentRules();for(var f=0;f<e.length;f++){b=this._input.match(this.rules[e[f]]);if(b){d=b[0].match(/\n.*/g),d&&(this.yylineno+=d.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:d?d[d.length-1].length-1:this.yylloc.last_column+b[0].length},this.yytext+=b[0],this.match+=b[0],this.matches=b,this.yyleng=this.yytext.length,this._more=!1,this._input=this._input.slice(b[0].length),this.matched+=b[0],a=this.performAction.call(this,this.yy,this,e[f],this.conditionStack[this.conditionStack.length-1]);if(a)return a;return}}if(this._input==="")return this.EOF;this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var a=this.next();return typeof a!="undefined"?a:this.lex()},begin:function(a){this.conditionStack.push(a)},popState:function(){return this.conditionStack.pop()},_currentRules:function(){return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules}};return a.performAction=function(a,b,c,d){var e=d;switch(c){case 0:this.begin("mu");if(b.yytext)return 14;break;case 1:return 14;case 2:return 24;case 3:return 16;case 4:return 20;case 5:return 19;case 6:return 19;case 7:return 23;case 8:return 23;case 9:return b.yytext=b.yytext.substr(3,b.yyleng-5),this.begin("INITIAL"),15;case 10:return 22;case 11:return 34;case 12:return 33;case 13:return 33;case 14:return 36;case 15:break;case 16:return this.begin("INITIAL"),18;case 17:return this.begin("INITIAL"),18;case 18:return b.yytext=b.yytext.substr(1,b.yyleng-2).replace(/\\"/g,'"'),28;case 19:return 30;case 20:return 30;case 21:return 29;case 22:return 33;case 23:return b.yytext=b.yytext.substr(1,b.yyleng-2),33;case 24:return"INVALID";case 25:return 5}},a.rules=[/^[^\x00]*?(?=(\{\{))/,/^[^\x00]+/,/^\{\{>/,/^\{\{#/,/^\{\{\//,/^\{\{\^/,/^\{\{\s*else\b/,/^\{\{\{/,/^\{\{&/,/^\{\{![\s\S]*?\}\}/,/^\{\{/,/^=/,/^\.(?=[} ])/,/^\.\./,/^[/.]/,/^\s+/,/^\}\}\}/,/^\}\}/,/^"(\\["]|[^"])*"/,/^true(?=[}\s])/,/^false(?=[}\s])/,/^[0-9]+(?=[}\s])/,/^[a-zA-Z0-9_$-]+(?=[=}\s/.])/,/^\[.*\]/,/^./,/^$/],a.conditions={mu:{rules:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25],inclusive:!1},INITIAL:{rules:[0,1,25],inclusive:!0}},a}();return a.lexer=b,a}();typeof require!="undefined"&&typeof exports!="undefined"&&(exports.parser=handlebars,exports.parse=function(){return handlebars.parse.apply(handlebars,arguments)},exports.main=function a(a){if(!a[1])throw new Error("Usage: "+a[0]+" FILE");if(typeof process!="undefined")var b=require("fs").readFileSync(require("path").join(process.cwd(),a[1]),"utf8");else var c=require("file").path(require("file").cwd()),b=c.join(a[1]).read({charset:"utf-8"});return exports.parser.parse(b)},typeof module!="undefined"&&require.main===module&&exports.main(typeof process!="undefined"?process.argv.slice(1):require("system").args)),Handlebars.Parser=handlebars,Handlebars.parse=function(a){return Handlebars.Parser.yy=Handlebars.AST,Handlebars.Parser.parse(a)},Handlebars.print=function(a){return(new Handlebars.PrintVisitor).accept(a)},Handlebars.logger={DEBUG:0,INFO:1,WARN:2,ERROR:3,level:3,log:function(a,b){}},Handlebars.log=function(a,b){Handlebars.logger.log(a,b)},function(){Handlebars.AST={},Handlebars.AST.ProgramNode=function(a,b){this.type="program",this.statements=a,b&&(this.inverse=new Handlebars.AST.ProgramNode(b))},Handlebars.AST.MustacheNode=function(a,b,c){this.type="mustache",this.id=a[0],this.params=a.slice(1),this.hash=b,this.escaped=!c},Handlebars.AST.PartialNode=function(a,b){this.type="partial",this.id=a,this.context=b};var a=function(a,b){if(a.original!==b.original)throw new Handlebars.Exception(a.original+" doesn't match "+b.original)};Handlebars.AST.BlockNode=function(b,c,d){a(b.id,d),this.type="block",this.mustache=b,this.program=c},Handlebars.AST.InverseNode=function(b,c,d){a(b.id,d),this.type="inverse",this.mustache=b,this.program=c},Handlebars.AST.ContentNode=function(a){this.type="content",this.string=a},Handlebars.AST.HashNode=function(a){this.type="hash",this.pairs=a},Handlebars.AST.IdNode=function(a){this.type="ID",this.original=a.join(".");var b=[],c=0;for(var d=0,e=a.length;d<e;d++){var f=a[d];f===".."?c++:f==="."||f==="this"?this.isScoped=!0:b.push(f)}this.parts=b,this.string=b.join("."),this.depth=c,this.isSimple=b.length===1&&c===0},Handlebars.AST.StringNode=function(a){this.type="STRING",this.string=a},Handlebars.AST.IntegerNode=function(a){this.type="INTEGER",this.integer=a},Handlebars.AST.BooleanNode=function(a){this.type="BOOLEAN",this.bool=a},Handlebars.AST.CommentNode=function(a){this.type="comment",this.comment=a}}(),Handlebars.Exception=function(a){var b=Error.prototype.constructor.apply(this,arguments);for(var c in b)b.hasOwnProperty(c)&&(this[c]=b[c])},Handlebars.Exception.prototype=new Error,Handlebars.SafeString=function(a){this.string=a},Handlebars.SafeString.prototype.toString=function(){return this.string.toString()},function(){var a={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;","`":"&#x60;"},b=/&(?!\w+;)|[<>"'`]/g,c=/[&<>"'`]/,d=function(b){return a[b]||"&amp;"};Handlebars.Utils={escapeExpression:function(a){return a instanceof Handlebars.SafeString?a.toString():a==null||a===!1?"":c.test(a)?a.replace(b,d):a},isEmpty:function(a){return typeof a=="undefined"?!0:a===null?!0:a===!1?!0:Object.prototype.toString.call(a)==="[object Array]"&&a.length===0?!0:!1}}}(),Handlebars.Compiler=function(){},Handlebars.JavaScriptCompiler=function(){},function(a,b){a.OPCODE_MAP={appendContent:1,getContext:2,lookupWithHelpers:3,lookup:4,append:5,invokeMustache:6,appendEscaped:7,pushString:8,truthyOrFallback:9,functionOrFallback:10,invokeProgram:11,invokePartial:12,push:13,assignToHash:15,pushStringParam:16},a.MULTI_PARAM_OPCODES={appendContent:1,getContext:1,lookupWithHelpers:2,lookup:1,invokeMustache:3,pushString:1,truthyOrFallback:1,functionOrFallback:1,invokeProgram:3,invokePartial:1,push:1,assignToHash:1,pushStringParam:1},a.DISASSEMBLE_MAP={};for(var c in a.OPCODE_MAP){var d=a.OPCODE_MAP[c];a.DISASSEMBLE_MAP[d]=c}a.multiParamSize=function(b){return a.MULTI_PARAM_OPCODES[a.DISASSEMBLE_MAP[b]]},a.prototype={compiler:a,disassemble:function(){var b=this.opcodes,c,d,e=[],f,g,h;for(var i=0,j=b.length;i<j;i++){c=b[i];if(c==="DECLARE")g=b[++i],h=b[++i],e.push("DECLARE "+g+" = "+h);else{f=a.DISASSEMBLE_MAP[c];var k=a.multiParamSize(c),l=[];for(var m=0;m<k;m++)d=b[++i],typeof d=="string"&&(d='"'+d.replace("\n","\\n")+'"'),l.push(d);f=f+" "+l.join(" "),e.push(f)}}return e.join("\n")},guid:0,compile:function(a,b){this.children=[],this.depths={list:[]},this.options=b;var c=this.options.knownHelpers;this.options.knownHelpers={helperMissing:!0,blockHelperMissing:!0,each:!0,"if":!0,unless:!0,"with":!0,log:!0};if(c)for(var d in c)this.options.knownHelpers[d]=c[d];return this.program(a)},accept:function(a){return this[a.type](a)},program:function(a){var b=a.statements,c;this.opcodes=[];for(var d=0,e=b.length;d<e;d++)c=b[d],this[c.type](c);return this.isSimple=e===1,this.depths.list=this.depths.list.sort(function(a,b){return a-b}),this},compileProgram:function(a){var b=(new this.compiler).compile(a,this.options),c=this.guid++;this.usePartial=this.usePartial||b.usePartial,this.children[c]=b;for(var d=0,e=b.depths.list.length;d<e;d++){depth=b.depths.list[d];if(depth<2)continue;this.addDepth(depth-1)}return c},block:function(a){var b=a.mustache,c,d,e,f,g=this.setupStackForMustache(b),h=this.compileProgram(a.program);a.program.inverse&&(f=this.compileProgram(a.program.inverse),this.declare("inverse",f)),this.opcode("invokeProgram",h,g.length,!!b.hash),this.declare("inverse",null),this.opcode("append")},inverse:function(a){var b=this.setupStackForMustache(a.mustache),c=this.compileProgram(a.program);this.declare("inverse",c),this.opcode("invokeProgram",null,b.length,!!a.mustache.hash),this.opcode("append")},hash:function(a){var b=a.pairs,c,d;this.opcode("push","{}");for(var e=0,f=b.length;e<f;e++)c=b[e],d=c[1],this.accept(d),this.opcode("assignToHash",c[0])},partial:function(a){var b=a.id;this.usePartial=!0,a.context?this.ID(a.context):this.opcode("push","depth0"),this.opcode("invokePartial",b.original),this.opcode("append")},content:function(a){this.opcode("appendContent",a.string)},mustache:function(a){var b=this.setupStackForMustache(a);this.opcode("invokeMustache",b.length,a.id.original,!!a.hash),a.escaped?this.opcode("appendEscaped"):this.opcode("append")},ID:function(a){this.addDepth(a.depth),this.opcode("getContext",a.depth),this.opcode("lookupWithHelpers",a.parts[0]||null,a.isScoped||!1);for(var b=1,c=a.parts.length;b<c;b++)this.opcode("lookup",a.parts[b])},STRING:function(a){this.opcode("pushString",a.string)},INTEGER:function(a){this.opcode("push",a.integer)},BOOLEAN:function(a){this.opcode("push",a.bool)},comment:function(){},pushParams:function(a){var b=a.length,c;while(b--)c=a[b],this.options.stringParams?(c.depth&&this.addDepth(c.depth),this.opcode("getContext",c.depth||0),this.opcode("pushStringParam",c.string)):this[c.type](c)},opcode:function(b,c,d,e){this.opcodes.push(a.OPCODE_MAP[b]),c!==undefined&&this.opcodes.push(c),d!==undefined&&this.opcodes.push(d),e!==undefined&&this.opcodes.push(e)},declare:function(a,b){this.opcodes.push("DECLARE"),this.opcodes.push(a),this.opcodes.push(b)},addDepth:function(a){if(a===0)return;this.depths[a]||(this.depths[a]=!0,this.depths.list.push(a))},setupStackForMustache:function(a){var b=a.params;return this.pushParams(b),a.hash&&this.hash(a.hash),this.ID(a.id),b}},b.prototype={nameLookup:function(a,c,d){return/^[0-9]+$/.test(c)?a+"["+c+"]":b.isValidJavaScriptVariableName(c)?a+"."+c:a+"['"+c+"']"},appendToBuffer:function(a){return this.environment.isSimple?"return "+a+";":"buffer += "+a+";"},initializeBuffer:function(){return this.quotedString("")},namespace:"Handlebars",compile:function(a,b,c,d){this.environment=a,this.options=b||{},this.name=this.environment.name,this.isChild=!!c,this.context=c||{programs:[],aliases:{self:"this"},registers:{list:[]}},this.preamble(),this.stackSlot=0,this.stackVars=[],this.compileChildren(a,b);var e=a.opcodes,f;this.i=0;for(h=e.length;this.i<h;this.i++)f=this.nextOpcode(0),f[0]==="DECLARE"?(this.i=this.i+2,this[f[1]]=f[2]):(this.i=this.i+f[1].length,this[f[0]].apply(this,f[1]));return this.createFunctionContext(d)},nextOpcode:function(b){var c=this.environment.opcodes,d=c[this.i+b],e,f,g,h;if(d==="DECLARE")return e=c[this.i+1],f=c[this.i+2],["DECLARE",e,f];e=a.DISASSEMBLE_MAP[d],g=a.multiParamSize(d),h=[];for(var i=0;i<g;i++)h.push(c[this.i+i+1+b]);return[e,h]},eat:function(a){this.i=this.i+a.length},preamble:function(){var a=[];if(!this.isChild){var b=this.namespace,c="helpers = helpers || "+b+".helpers;";this.environment.usePartial&&(c=c+" partials = partials || "+b+".partials;"),a.push(c)}else a.push("");this.environment.isSimple?a.push(""):a.push(", buffer = "+this.initializeBuffer()),this.lastContext=0,this.source=a},createFunctionContext:function(a){var b=this.stackVars;this.isChild||(b=b.concat(this.context.registers.list)),b.length>0&&(this.source[1]=this.source[1]+", "+b.join(", "));if(!this.isChild){var c=[];for(var d in this.context.aliases)this.source[1]=this.source[1]+", "+d+"="+this.context.aliases[d]}this.source[1]&&(this.source[1]="var "+this.source[1].substring(2)+";"),this.isChild||(this.source[1]+="\n"+this.context.programs.join("\n")+"\n"),this.environment.isSimple||this.source.push("return buffer;");var e=this.isChild?["depth0","data"]:["Handlebars","depth0","helpers","partials","data"];for(var f=0,g=this.environment.depths.list.length;f<g;f++)e.push("depth"+this.environment.depths.list[f]);if(a)return e.push(this.source.join("\n  ")),Function.apply(this,e);var h="function "+(this.name||"")+"("+e.join(",")+") {\n  "+this.source.join("\n  ")+"}";return Handlebars.log(Handlebars.logger.DEBUG,h+"\n\n"),h},appendContent:function(a){this.source.push(this.appendToBuffer(this.quotedString(a)))},append:function(){var a=this.popStack();this.source.push("if("+a+" || "+a+" === 0) { "+this.appendToBuffer(a)+" }"),this.environment.isSimple&&this.source.push("else { "+this.appendToBuffer("''")+" }")},appendEscaped:function(){var a=this.nextOpcode(1),b="";this.context.aliases.escapeExpression="this.escapeExpression",a[0]==="appendContent"&&(b=" + "+this.quotedString(a[1][0]),this.eat(a)),this.source.push(this.appendToBuffer("escapeExpression("+this.popStack()+")"+b))},getContext:function(a){this.lastContext!==a&&(this.lastContext=a)},lookupWithHelpers:function(a,b){if(a){var c=this.nextStack();this.usingKnownHelper=!1;var d;!b&&this.options.knownHelpers[a]?(d=c+" = "+this.nameLookup("helpers",a,"helper"),this.usingKnownHelper=!0):b||this.options.knownHelpersOnly?d=c+" = "+this.nameLookup("depth"+this.lastContext,a,"context"):d=c+" = "+this.nameLookup("helpers",a,"helper")+" || "+this.nameLookup("depth"+this.lastContext,a,"context"),d+=";",this.source.push(d)}else this.pushStack("depth"+this.lastContext)},lookup:function(a){var b=this.topStack();this.source.push(b+" = ("+b+" === null || "+b+" === undefined || "+b+" === false ? "+b+" : "+this.nameLookup(b,a,"context")+");")},pushStringParam:function(a){this.pushStack("depth"+this.lastContext),this.pushString(a)},pushString:function(a){this.pushStack(this.quotedString(a))},push:function(a){this.pushStack(a)},invokeMustache:function(a,b,c){this.populateParams(a,this.quotedString(b),"{}",null,c,function(a,b,c){this.usingKnownHelper||(this.context.aliases.helperMissing="helpers.helperMissing",this.context.aliases.undef="void 0",this.source.push("else if("+c+"=== undef) { "+a+" = helperMissing.call("+b+"); }"),a!==c&&this.source.push("else { "+a+" = "+c+"; }"))})},invokeProgram:function(a,b,c){var d=this.programExpression(this.inverse),e=this.programExpression(a);this.populateParams(b,null,e,d,c,function(a,b,c){this.usingKnownHelper||(this.context.aliases.blockHelperMissing="helpers.blockHelperMissing",this.source.push("else { "+a+" = blockHelperMissing.call("+b+"); }"))})},populateParams:function(a,b,c,d,e,f){var g=e||this.options.stringParams||d||this.options.data,h=this.popStack(),i,j=[],k,l,m;g?(this.register("tmp1",c),m="tmp1"):m="{ hash: {} }";if(g){var n=e?this.popStack():"{}";this.source.push("tmp1.hash = "+n+";")}this.options.stringParams&&this.source.push("tmp1.contexts = [];");for(var o=0;o<a;o++)k=this.popStack(),j.push(k),this.options.stringParams&&this.source.push("tmp1.contexts.push("+this.popStack()+");");d&&(this.source.push("tmp1.fn = tmp1;"),this.source.push("tmp1.inverse = "+d+";")),this.options.data&&this.source.push("tmp1.data = data;"),j.push(m),this.populateCall(j,h,b||h,f)},populateCall:function(a,b,c,d){var e=["depth0"].concat(a).join(", "),f=["depth0"].concat(c).concat(a).join(", "),g=this.nextStack();this.usingKnownHelper?this.source.push(g+" = "+b+".call("+e+");"):(this.context.aliases.functionType='"function"',this.source.push("if(typeof "+b+" === functionType) { "+g+" = "+b+".call("+e+"); }")),d.call(this,g,f,b),this.usingKnownHelper=!1},invokePartial:function(a){this.pushStack("self.invokePartial("+this.nameLookup("partials",a,"partial")+", '"+a+"', "+this.popStack()+", helpers, partials);")},assignToHash:function(a){var b=this.popStack(),c=this.topStack();this.source.push(c+"['"+a+"'] = "+b+";")},compiler:b,compileChildren:function(a,b){var c=a.children,d,e;for(var f=0,g=c.length;f<g;f++){d=c[f],e=new this.compiler,this.context.programs.push("");var h=this.context.programs.length;d.index=h,d.name="program"+h,this.context.programs[h]=e.compile(d,b,this.context)}},programExpression:function(a){if(a==null)return"self.noop";var b=this.environment.children[a],c=b.depths.list,d=[b.index,b.name,"data"];for(var e=0,f=c.length;e<f;e++)depth=c[e],depth===1?d.push("depth0"):d.push("depth"+(depth-1));return c.length===0?"self.program("+d.join(", ")+")":(d.shift(),"self.programWithDepth("+d.join(", ")+")")},register:function(a,b){this.useRegister(a),this.source.push(a+" = "+b+";")},useRegister:function(a){this.context.registers[a]||(this.context.registers[a]=!0,this.context.registers.list.push(a))},pushStack:function(a){return this.source.push(this.nextStack()+" = "+a+";"),"stack"+this.stackSlot},nextStack:function(){return this.stackSlot++,this.stackSlot>this.stackVars.length&&this.stackVars.push("stack"+this.stackSlot),"stack"+this.stackSlot},popStack:function(){return"stack"+this.stackSlot--},topStack:function(){return"stack"+this.stackSlot},quotedString:function(a){return'"'+a.replace(/\\/g,"\\\\").replace(/"/g,'\\"').replace(/\n/g,"\\n").replace(/\r/g,"\\r")+'"'}};var e="break case catch continue default delete do else finally for function if in instanceof new return switch this throw try typeof var void while with null true false".split(" "),f=b.RESERVED_WORDS={};for(var g=0,h=e.length;g<h;g++)f[e[g]]=!0;b.isValidJavaScriptVariableName=function(a){return!b.RESERVED_WORDS[a]&&/^[a-zA-Z_$][0-9a-zA-Z_$]+$/.test(a)?!0:!1}}(Handlebars.Compiler,Handlebars.JavaScriptCompiler),Handlebars.precompile=function(a,b){b=b||{};var c=Handlebars.parse(a),d=(new Handlebars.Compiler).compile(c,b);return(new Handlebars.JavaScriptCompiler).compile(d,b)},Handlebars.compile=function(a,b){function d(){var c=Handlebars.parse(a),d=(new Handlebars.Compiler).compile(c,b),e=(new Handlebars.JavaScriptCompiler).compile(d,b,undefined,!0);return Handlebars.template(e)}b=b||{};var c;return function(a,b){return c||(c=d()),c.call(this,a,b)}},Handlebars.VM={template:function(a){var b={escapeExpression:Handlebars.Utils.escapeExpression,invokePartial:Handlebars.VM.invokePartial,programs:[],program:function(a,b,c){var d=this.programs[a];return c?Handlebars.VM.program(b,c):d?d:(d=this.programs[a]=Handlebars.VM.program(b),d)},programWithDepth:Handlebars.VM.programWithDepth,noop:Handlebars.VM.noop};return function(c,d){return d=d||{},a.call(b,Handlebars,c,d.helpers,d.partials,d.data)}},programWithDepth:function(a,b,c){var d=Array.prototype.slice.call(arguments,2);return function(c,e){return e=e||{},a.apply(this,[c,e.data||b].concat(d))}},program:function(a,b){return function(c,d){return d=d||{},a(c,d.data||b)}},noop:function(){return""},invokePartial:function(a,b,c,d,e){if(a===undefined)throw new Handlebars.Exception("The partial "+b+" could not be found");if(a instanceof Function)return a(c,{helpers:d,partials:e});if(!Handlebars.compile)throw new Handlebars.Exception("The partial "+b+" could not be compiled when running in vm mode");return e[b]=Handlebars.compile(a),e[b](c,{helpers:d,partials:e})}},Handlebars.template=Handlebars.VM.template;
/* lib_ui/lib_ui.js */
function sel_ui (ui_class) {
  var classes = {
    // TODO: Implement shorthand
    'border_router': {
      template :'<h3>Neighbors:</h3>'
               +'<ul class="neighbors_list">'
               +'  {{#each neighbors}}'
               +'  {{{list_neighbors this}}}'
               +'  {{/each}}'
               +'</ul>'
               +'<h3>Routes:</h3>'
               +'<ul class="routes_list">'
               +'  {{#each routes}}'
               +'  {{{list_routes this}}}'
               +'  {{/each}}'
               +'</ul>'
               ,
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
  var template = Handlebars.compile(use_ui.template);

  var h = document.getElementsByTagName('head').item(0);
  var t = document.createElement('title');
  t.appendChild(document.createTextNode(use_ui.title));
  h.appendChild(t);

  /* It's a bit odd, but doesn't look like we need JSON! */
  // document.writeln(template(JSON.stringify(context)));
  document.writeln(template(context));
};
