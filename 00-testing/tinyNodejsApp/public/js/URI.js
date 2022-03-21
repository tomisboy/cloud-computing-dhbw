/*! URI.js v1.18.7 http://medialize.github.io/URI.js/ */
/* build contains: URI.js, URITemplate.js */
/*
 URI.js - Mutating URLs

 Version: 1.18.7

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

 URI.js - Mutating URLs
 URI Template Support - http://tools.ietf.org/html/rfc6570

 Version: 1.18.7

 Author: Rodney Rehm
 Web: http://medialize.github.io/URI.js/

 Licensed under
   MIT License http://www.opensource.org/licenses/mit-license

*/
(function(l,x){"object"===typeof module&&module.exports?module.exports=x(require("./punycode"),require("./IPv6"),require("./SecondLevelDomains")):"function"===typeof define&&define.amd?define(["./punycode","./IPv6","./SecondLevelDomains"],x):l.URI=x(l.punycode,l.IPv6,l.SecondLevelDomains,l)})(this,function(l,x,h,q){function d(a,b){var c=1<=arguments.length,m=2<=arguments.length;if(!(this instanceof d))return c?m?new d(a,b):new d(a):new d;if(void 0===a){if(c)throw new TypeError("undefined is not a valid argument for URI");
a="undefined"!==typeof location?location.href+"":""}if(null===a&&c)throw new TypeError("null is not a valid argument for URI");this.href(a);return void 0!==b?this.absoluteTo(b):this}function z(a){return a.replace(/([.*+?^=!:${}()|[\]\/\\])/g,"\\$1")}function A(a){return void 0===a?"Undefined":String(Object.prototype.toString.call(a)).slice(8,-1)}function t(a){return"Array"===A(a)}function f(a,b){var c={},d,y;if("RegExp"===A(b))c=null;else if(t(b))for(d=0,y=b.length;d<y;d++)c[b[d]]=!0;else c[b]=!0;
d=0;for(y=a.length;d<y;d++)if(c&&void 0!==c[a[d]]||!c&&b.test(a[d]))a.splice(d,1),y--,d--;return a}function g(a,b){var c,d;if(t(b)){c=0;for(d=b.length;c<d;c++)if(!g(a,b[c]))return!1;return!0}var y=A(b);c=0;for(d=a.length;c<d;c++)if("RegExp"===y){if("string"===typeof a[c]&&a[c].match(b))return!0}else if(a[c]===b)return!0;return!1}function u(a,b){if(!t(a)||!t(b)||a.length!==b.length)return!1;a.sort();b.sort();for(var c=0,d=a.length;c<d;c++)if(a[c]!==b[c])return!1;return!0}function B(a){return a.replace(/^\/+|\/+$/g,
"")}function E(a){return escape(a)}function w(a){return encodeURIComponent(a).replace(/[!'()*]/g,E).replace(/\*/g,"%2A")}function p(a){return function(b,c){if(void 0===b)return this._parts[a]||"";this._parts[a]=b||null;this.build(!c);return this}}function k(a,b){return function(c,d){if(void 0===c)return this._parts[a]||"";null!==c&&(c+="",c.charAt(0)===b&&(c=c.substring(1)));this._parts[a]=c;this.build(!d);return this}}var v=q&&q.URI;d.version="1.18.7";var e=d.prototype,n=Object.prototype.hasOwnProperty;
d._parts=function(){return{protocol:null,username:null,password:null,hostname:null,urn:null,port:null,path:null,query:null,fragment:null,duplicateQueryParameters:d.duplicateQueryParameters,escapeQuerySpace:d.escapeQuerySpace}};d.duplicateQueryParameters=!1;d.escapeQuerySpace=!0;d.protocol_expression=/^[a-z][a-z0-9.+-]*$/i;d.idn_expression=/[^a-z0-9\.-]/i;d.punycode_expression=/(xn--)/i;d.ip4_expression=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/;d.ip6_expression=/^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/;
d.find_uri_expression=/\b((?:[a-z][\w-]+:(?:\/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u2018\u2019]))/ig;d.findUri={start:/\b(?:([a-z][a-z0-9.+-]*:\/\/)|www\.)/gi,end:/[\s\r\n]|$/,trim:/[`!()\[\]{};:'".,<>?\u00ab\u00bb\u201c\u201d\u201e\u2018\u2019]+$/,parens:/(\([^\)]*\)|\[[^\]]*\]|\{[^}]*\}|<[^>]*>)/g};d.defaultPorts={http:"80",https:"443",ftp:"21",
gopher:"70",ws:"80",wss:"443"};d.invalid_hostname_characters=/[^a-zA-Z0-9\.-]/;d.domAttributes={a:"href",blockquote:"cite",link:"href",base:"href",script:"src",form:"action",img:"src",area:"href",iframe:"src",embed:"src",source:"src",track:"src",input:"src",audio:"src",video:"src"};d.getDomAttribute=function(a){if(a&&a.nodeName){var b=a.nodeName.toLowerCase();if("input"!==b||"image"===a.type)return d.domAttributes[b]}};d.encode=w;d.decode=decodeURIComponent;d.iso8859=function(){d.encode=escape;d.decode=
unescape};d.unicode=function(){d.encode=w;d.decode=decodeURIComponent};d.characters={pathname:{encode:{expression:/%(24|26|2B|2C|3B|3D|3A|40)/ig,map:{"%24":"$","%26":"&","%2B":"+","%2C":",","%3B":";","%3D":"=","%3A":":","%40":"@"}},decode:{expression:/[\/\?#]/g,map:{"/":"%2F","?":"%3F","#":"%23"}}},reserved:{encode:{expression:/%(21|23|24|26|27|28|29|2A|2B|2C|2F|3A|3B|3D|3F|40|5B|5D)/ig,map:{"%3A":":","%2F":"/","%3F":"?","%23":"#","%5B":"[","%5D":"]","%40":"@","%21":"!","%24":"$","%26":"&","%27":"'",
"%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"="}}},urnpath:{encode:{expression:/%(21|24|27|28|29|2A|2B|2C|3B|3D|40)/ig,map:{"%21":"!","%24":"$","%27":"'","%28":"(","%29":")","%2A":"*","%2B":"+","%2C":",","%3B":";","%3D":"=","%40":"@"}},decode:{expression:/[\/\?#:]/g,map:{"/":"%2F","?":"%3F","#":"%23",":":"%3A"}}}};d.encodeQuery=function(a,b){var c=d.encode(a+"");void 0===b&&(b=d.escapeQuerySpace);return b?c.replace(/%20/g,"+"):c};d.decodeQuery=function(a,b){a+="";void 0===b&&
(b=d.escapeQuerySpace);try{return d.decode(b?a.replace(/\+/g,"%20"):a)}catch(c){return a}};var r={encode:"encode",decode:"decode"},C,D=function(a,b){return function(c){try{return d[b](c+"").replace(d.characters[a][b].expression,function(c){return d.characters[a][b].map[c]})}catch(m){return c}}};for(C in r)d[C+"PathSegment"]=D("pathname",r[C]),d[C+"UrnPathSegment"]=D("urnpath",r[C]);r=function(a,b,c){return function(m){var y;y=c?function(a){return d[b](d[c](a))}:d[b];m=(m+"").split(a);for(var e=0,
f=m.length;e<f;e++)m[e]=y(m[e]);return m.join(a)}};d.decodePath=r("/","decodePathSegment");d.decodeUrnPath=r(":","decodeUrnPathSegment");d.recodePath=r("/","encodePathSegment","decode");d.recodeUrnPath=r(":","encodeUrnPathSegment","decode");d.encodeReserved=D("reserved","encode");d.parse=function(a,b){var c;b||(b={});c=a.indexOf("#");-1<c&&(b.fragment=a.substring(c+1)||null,a=a.substring(0,c));c=a.indexOf("?");-1<c&&(b.query=a.substring(c+1)||null,a=a.substring(0,c));"//"===a.substring(0,2)?(b.protocol=
null,a=a.substring(2),a=d.parseAuthority(a,b)):(c=a.indexOf(":"),-1<c&&(b.protocol=a.substring(0,c)||null,b.protocol&&!b.protocol.match(d.protocol_expression)?b.protocol=void 0:"//"===a.substring(c+1,c+3)?(a=a.substring(c+3),a=d.parseAuthority(a,b)):(a=a.substring(c+1),b.urn=!0)));b.path=a;return b};d.parseHost=function(a,b){a=a.replace(/\\/g,"/");var c=a.indexOf("/"),d;-1===c&&(c=a.length);if("["===a.charAt(0))d=a.indexOf("]"),b.hostname=a.substring(1,d)||null,b.port=a.substring(d+2,c)||null,"/"===
b.port&&(b.port=null);else{var y=a.indexOf(":");d=a.indexOf("/");y=a.indexOf(":",y+1);-1!==y&&(-1===d||y<d)?(b.hostname=a.substring(0,c)||null,b.port=null):(d=a.substring(0,c).split(":"),b.hostname=d[0]||null,b.port=d[1]||null)}b.hostname&&"/"!==a.substring(c).charAt(0)&&(c++,a="/"+a);return a.substring(c)||"/"};d.parseAuthority=function(a,b){a=d.parseUserinfo(a,b);return d.parseHost(a,b)};d.parseUserinfo=function(a,b){var c=a.indexOf("/"),m=a.lastIndexOf("@",-1<c?c:a.length-1);-1<m&&(-1===c||m<c)?
(c=a.substring(0,m).split(":"),b.username=c[0]?d.decode(c[0]):null,c.shift(),b.password=c[0]?d.decode(c.join(":")):null,a=a.substring(m+1)):(b.username=null,b.password=null);return a};d.parseQuery=function(a,b){if(!a)return{};a=a.replace(/&+/g,"&").replace(/^\?*&*|&+$/g,"");if(!a)return{};for(var c={},m=a.split("&"),y=m.length,e,f,g=0;g<y;g++)if(e=m[g].split("="),f=d.decodeQuery(e.shift(),b),e=e.length?d.decodeQuery(e.join("="),b):null,n.call(c,f)){if("string"===typeof c[f]||null===c[f])c[f]=[c[f]];
c[f].push(e)}else c[f]=e;return c};d.build=function(a){var b="";a.protocol&&(b+=a.protocol+":");a.urn||!b&&!a.hostname||(b+="//");b+=d.buildAuthority(a)||"";"string"===typeof a.path&&("/"!==a.path.charAt(0)&&"string"===typeof a.hostname&&(b+="/"),b+=a.path);"string"===typeof a.query&&a.query&&(b+="?"+a.query);"string"===typeof a.fragment&&a.fragment&&(b+="#"+a.fragment);return b};d.buildHost=function(a){var b="";if(a.hostname)b=d.ip6_expression.test(a.hostname)?b+("["+a.hostname+"]"):b+a.hostname;
else return"";a.port&&(b+=":"+a.port);return b};d.buildAuthority=function(a){return d.buildUserinfo(a)+d.buildHost(a)};d.buildUserinfo=function(a){var b="";a.username&&(b+=d.encode(a.username));a.password&&(b+=":"+d.encode(a.password));b&&(b+="@");return b};d.buildQuery=function(a,b,c){var m="",e,f,g,h;for(f in a)if(n.call(a,f)&&f)if(t(a[f]))for(e={},g=0,h=a[f].length;g<h;g++)void 0!==a[f][g]&&void 0===e[a[f][g]+""]&&(m+="&"+d.buildQueryParameter(f,a[f][g],c),!0!==b&&(e[a[f][g]+""]=!0));else void 0!==
a[f]&&(m+="&"+d.buildQueryParameter(f,a[f],c));return m.substring(1)};d.buildQueryParameter=function(a,b,c){return d.encodeQuery(a,c)+(null!==b?"="+d.encodeQuery(b,c):"")};d.addQuery=function(a,b,c){if("object"===typeof b)for(var m in b)n.call(b,m)&&d.addQuery(a,m,b[m]);else if("string"===typeof b)void 0===a[b]?a[b]=c:("string"===typeof a[b]&&(a[b]=[a[b]]),t(c)||(c=[c]),a[b]=(a[b]||[]).concat(c));else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");};d.removeQuery=
function(a,b,c){var m;if(t(b))for(c=0,m=b.length;c<m;c++)a[b[c]]=void 0;else if("RegExp"===A(b))for(m in a)b.test(m)&&(a[m]=void 0);else if("object"===typeof b)for(m in b)n.call(b,m)&&d.removeQuery(a,m,b[m]);else if("string"===typeof b)void 0!==c?"RegExp"===A(c)?!t(a[b])&&c.test(a[b])?a[b]=void 0:a[b]=f(a[b],c):a[b]!==String(c)||t(c)&&1!==c.length?t(a[b])&&(a[b]=f(a[b],c)):a[b]=void 0:a[b]=void 0;else throw new TypeError("URI.removeQuery() accepts an object, string, RegExp as the first parameter");
};d.hasQuery=function(a,b,c,m){switch(A(b)){case "String":break;case "RegExp":for(var e in a)if(n.call(a,e)&&b.test(e)&&(void 0===c||d.hasQuery(a,e,c)))return!0;return!1;case "Object":for(var f in b)if(n.call(b,f)&&!d.hasQuery(a,f,b[f]))return!1;return!0;default:throw new TypeError("URI.hasQuery() accepts a string, regular expression or object as the name parameter");}switch(A(c)){case "Undefined":return b in a;case "Boolean":return a=!(t(a[b])?!a[b].length:!a[b]),c===a;case "Function":return!!c(a[b],
b,a);case "Array":return t(a[b])?(m?g:u)(a[b],c):!1;case "RegExp":return t(a[b])?m?g(a[b],c):!1:!(!a[b]||!a[b].match(c));case "Number":c=String(c);case "String":return t(a[b])?m?g(a[b],c):!1:a[b]===c;default:throw new TypeError("URI.hasQuery() accepts undefined, boolean, string, number, RegExp, Function as the value parameter");}};d.joinPaths=function(){for(var a=[],b=[],c=0,m=0;m<arguments.length;m++){var e=new d(arguments[m]);a.push(e);for(var e=e.segment(),f=0;f<e.length;f++)"string"===typeof e[f]&&
b.push(e[f]),e[f]&&c++}if(!b.length||!c)return new d("");b=(new d("")).segment(b);""!==a[0].path()&&"/"!==a[0].path().slice(0,1)||b.path("/"+b.path());return b.normalize()};d.commonPath=function(a,b){var c=Math.min(a.length,b.length),d;for(d=0;d<c;d++)if(a.charAt(d)!==b.charAt(d)){d--;break}if(1>d)return a.charAt(0)===b.charAt(0)&&"/"===a.charAt(0)?"/":"";if("/"!==a.charAt(d)||"/"!==b.charAt(d))d=a.substring(0,d).lastIndexOf("/");return a.substring(0,d+1)};d.withinString=function(a,b,c){c||(c={});
var m=c.start||d.findUri.start,e=c.end||d.findUri.end,f=c.trim||d.findUri.trim,g=c.parens||d.findUri.parens,h=/[a-z0-9-]=["']?$/i;for(m.lastIndex=0;;){var n=m.exec(a);if(!n)break;var u=n.index;if(c.ignoreHtml){var k=a.slice(Math.max(u-3,0),u);if(k&&h.test(k))continue}for(var p=u+a.slice(u).search(e),k=a.slice(u,p),p=-1;;){var l=g.exec(k);if(!l)break;p=Math.max(p,l.index+l[0].length)}k=-1<p?k.slice(0,p)+k.slice(p).replace(f,""):k.replace(f,"");k.length<=n[0].length||c.ignore&&c.ignore.test(k)||(p=
u+k.length,n=b(k,u,p,a),void 0===n?m.lastIndex=p:(n=String(n),a=a.slice(0,u)+n+a.slice(p),m.lastIndex=u+n.length))}m.lastIndex=0;return a};d.ensureValidHostname=function(a){if(a.match(d.invalid_hostname_characters)){if(!l)throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-] and Punycode.js is not available');if(l.toASCII(a).match(d.invalid_hostname_characters))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');}};d.noConflict=function(a){if(a)return a=
{URI:this.noConflict()},q.URITemplate&&"function"===typeof q.URITemplate.noConflict&&(a.URITemplate=q.URITemplate.noConflict()),q.IPv6&&"function"===typeof q.IPv6.noConflict&&(a.IPv6=q.IPv6.noConflict()),q.SecondLevelDomains&&"function"===typeof q.SecondLevelDomains.noConflict&&(a.SecondLevelDomains=q.SecondLevelDomains.noConflict()),a;q.URI===this&&(q.URI=v);return this};e.build=function(a){if(!0===a)this._deferred_build=!0;else if(void 0===a||this._deferred_build)this._string=d.build(this._parts),
this._deferred_build=!1;return this};e.clone=function(){return new d(this)};e.valueOf=e.toString=function(){return this.build(!1)._string};e.protocol=p("protocol");e.username=p("username");e.password=p("password");e.hostname=p("hostname");e.port=p("port");e.query=k("query","?");e.fragment=k("fragment","#");e.search=function(a,b){var c=this.query(a,b);return"string"===typeof c&&c.length?"?"+c:c};e.hash=function(a,b){var c=this.fragment(a,b);return"string"===typeof c&&c.length?"#"+c:c};e.pathname=function(a,
b){if(void 0===a||!0===a){var c=this._parts.path||(this._parts.hostname?"/":"");return a?(this._parts.urn?d.decodeUrnPath:d.decodePath)(c):c}this._parts.path=this._parts.urn?a?d.recodeUrnPath(a):"":a?d.recodePath(a):"/";this.build(!b);return this};e.path=e.pathname;e.href=function(a,b){var c;if(void 0===a)return this.toString();this._string="";this._parts=d._parts();var e=a instanceof d,f="object"===typeof a&&(a.hostname||a.path||a.pathname);a.nodeName&&(f=d.getDomAttribute(a),a=a[f]||"",f=!1);!e&&
f&&void 0!==a.pathname&&(a=a.toString());if("string"===typeof a||a instanceof String)this._parts=d.parse(String(a),this._parts);else if(e||f)for(c in e=e?a._parts:a,e)n.call(this._parts,c)&&(this._parts[c]=e[c]);else throw new TypeError("invalid input");this.build(!b);return this};e.is=function(a){var b=!1,c=!1,e=!1,f=!1,g=!1,k=!1,p=!1,n=!this._parts.urn;this._parts.hostname&&(n=!1,c=d.ip4_expression.test(this._parts.hostname),e=d.ip6_expression.test(this._parts.hostname),b=c||e,g=(f=!b)&&h&&h.has(this._parts.hostname),
k=f&&d.idn_expression.test(this._parts.hostname),p=f&&d.punycode_expression.test(this._parts.hostname));switch(a.toLowerCase()){case "relative":return n;case "absolute":return!n;case "domain":case "name":return f;case "sld":return g;case "ip":return b;case "ip4":case "ipv4":case "inet4":return c;case "ip6":case "ipv6":case "inet6":return e;case "idn":return k;case "url":return!this._parts.urn;case "urn":return!!this._parts.urn;case "punycode":return p}return null};var F=e.protocol,G=e.port,H=e.hostname;
e.protocol=function(a,b){if(void 0!==a&&a&&(a=a.replace(/:(\/\/)?$/,""),!a.match(d.protocol_expression)))throw new TypeError('Protocol "'+a+"\" contains characters other than [A-Z0-9.+-] or doesn't start with [A-Z]");return F.call(this,a,b)};e.scheme=e.protocol;e.port=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a&&(0===a&&(a=null),a&&(a+="",":"===a.charAt(0)&&(a=a.substring(1)),a.match(/[^0-9]/))))throw new TypeError('Port "'+a+'" contains characters other than [0-9]');
return G.call(this,a,b)};e.hostname=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0!==a){var c={};if("/"!==d.parseHost(a,c))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');a=c.hostname}return H.call(this,a,b)};e.origin=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var c=this.protocol();return this.authority()?(c?c+"://":"")+this.authority():""}c=d(a);this.protocol(c.protocol()).authority(c.authority()).build(!b);return this};
e.host=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildHost(this._parts):"";if("/"!==d.parseHost(a,this._parts))throw new TypeError('Hostname "'+a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};e.authority=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a)return this._parts.hostname?d.buildAuthority(this._parts):"";if("/"!==d.parseAuthority(a,this._parts))throw new TypeError('Hostname "'+
a+'" contains characters other than [A-Z0-9.-]');this.build(!b);return this};e.userinfo=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){var c=d.buildUserinfo(this._parts);return c?c.substring(0,c.length-1):c}"@"!==a[a.length-1]&&(a+="@");d.parseUserinfo(a,this._parts);this.build(!b);return this};e.resource=function(a,b){var c;if(void 0===a)return this.path()+this.search()+this.hash();c=d.parse(a);this._parts.path=c.path;this._parts.query=c.query;this._parts.fragment=c.fragment;
this.build(!b);return this};e.subdomain=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.length-this.domain().length-1;return this._parts.hostname.substring(0,c)||""}c=this._parts.hostname.length-this.domain().length;c=this._parts.hostname.substring(0,c);c=new RegExp("^"+z(c));a&&"."!==a.charAt(a.length-1)&&(a+=".");a&&d.ensureValidHostname(a);this._parts.hostname=this._parts.hostname.replace(c,a);
this.build(!b);return this};e.domain=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.match(/\./g);if(c&&2>c.length)return this._parts.hostname;c=this._parts.hostname.length-this.tld(b).length-1;c=this._parts.hostname.lastIndexOf(".",c-1)+1;return this._parts.hostname.substring(c)||""}if(!a)throw new TypeError("cannot set domain empty");d.ensureValidHostname(a);
!this._parts.hostname||this.is("IP")?this._parts.hostname=a:(c=new RegExp(z(this.domain())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a));this.build(!b);return this};e.tld=function(a,b){if(this._parts.urn)return void 0===a?"":this;"boolean"===typeof a&&(b=a,a=void 0);if(void 0===a){if(!this._parts.hostname||this.is("IP"))return"";var c=this._parts.hostname.lastIndexOf("."),c=this._parts.hostname.substring(c+1);return!0!==b&&h&&h.list[c.toLowerCase()]?h.get(this._parts.hostname)||c:c}if(a)if(a.match(/[^a-zA-Z0-9-]/))if(h&&
h.is(a))c=new RegExp(z(this.tld())+"$"),this._parts.hostname=this._parts.hostname.replace(c,a);else throw new TypeError('TLD "'+a+'" contains characters other than [A-Z0-9]');else{if(!this._parts.hostname||this.is("IP"))throw new ReferenceError("cannot set TLD on non-domain host");c=new RegExp(z(this.tld())+"$");this._parts.hostname=this._parts.hostname.replace(c,a)}else throw new TypeError("cannot set TLD empty");this.build(!b);return this};e.directory=function(a,b){if(this._parts.urn)return void 0===
a?"":this;if(void 0===a||!0===a){if(!this._parts.path&&!this._parts.hostname)return"";if("/"===this._parts.path)return"/";var c=this._parts.path.length-this.filename().length-1,c=this._parts.path.substring(0,c)||(this._parts.hostname?"/":"");return a?d.decodePath(c):c}c=this._parts.path.length-this.filename().length;c=this._parts.path.substring(0,c);c=new RegExp("^"+z(c));this.is("relative")||(a||(a="/"),"/"!==a.charAt(0)&&(a="/"+a));a&&"/"!==a.charAt(a.length-1)&&(a+="/");a=d.recodePath(a);this._parts.path=
this._parts.path.replace(c,a);this.build(!b);return this};e.filename=function(a,b){if(this._parts.urn)return void 0===a?"":this;if("string"!==typeof a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this._parts.path.lastIndexOf("/"),c=this._parts.path.substring(c+1);return a?d.decodePathSegment(c):c}c=!1;"/"===a.charAt(0)&&(a=a.substring(1));a.match(/\.?\//)&&(c=!0);var e=new RegExp(z(this.filename())+"$");a=d.recodePath(a);this._parts.path=this._parts.path.replace(e,a);c?this.normalizePath(b):
this.build(!b);return this};e.suffix=function(a,b){if(this._parts.urn)return void 0===a?"":this;if(void 0===a||!0===a){if(!this._parts.path||"/"===this._parts.path)return"";var c=this.filename(),e=c.lastIndexOf(".");if(-1===e)return"";c=c.substring(e+1);c=/^[a-z0-9%]+$/i.test(c)?c:"";return a?d.decodePathSegment(c):c}"."===a.charAt(0)&&(a=a.substring(1));if(c=this.suffix())e=a?new RegExp(z(c)+"$"):new RegExp(z("."+c)+"$");else{if(!a)return this;this._parts.path+="."+d.recodePath(a)}e&&(a=d.recodePath(a),
this._parts.path=this._parts.path.replace(e,a));this.build(!b);return this};e.segment=function(a,b,c){var d=this._parts.urn?":":"/",e=this.path(),f="/"===e.substring(0,1),e=e.split(d);void 0!==a&&"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0!==a&&"number"!==typeof a)throw Error('Bad segment "'+a+'", must be 0-based integer');f&&e.shift();0>a&&(a=Math.max(e.length+a,0));if(void 0===b)return void 0===a?e:e[a];if(null===a||void 0===e[a])if(t(b)){e=[];a=0;for(var g=b.length;a<g;a++)if(b[a].length||
e.length&&e[e.length-1].length)e.length&&!e[e.length-1].length&&e.pop(),e.push(B(b[a]))}else{if(b||"string"===typeof b)b=B(b),""===e[e.length-1]?e[e.length-1]=b:e.push(b)}else b?e[a]=B(b):e.splice(a,1);f&&e.unshift("");return this.path(e.join(d),c)};e.segmentCoded=function(a,b,c){var e,f;"number"!==typeof a&&(c=b,b=a,a=void 0);if(void 0===b){a=this.segment(a,b,c);if(t(a))for(e=0,f=a.length;e<f;e++)a[e]=d.decode(a[e]);else a=void 0!==a?d.decode(a):void 0;return a}if(t(b))for(e=0,f=b.length;e<f;e++)b[e]=
d.encode(b[e]);else b="string"===typeof b||b instanceof String?d.encode(b):b;return this.segment(a,b,c)};var I=e.query;e.query=function(a,b){if(!0===a)return d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("function"===typeof a){var c=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace),e=a.call(this,c);this._parts.query=d.buildQuery(e||c,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);this.build(!b);return this}return void 0!==a&&"string"!==typeof a?(this._parts.query=
d.buildQuery(a,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace),this.build(!b),this):I.call(this,a,b)};e.setQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);if("string"===typeof a||a instanceof String)e[a]=void 0!==b?b:null;else if("object"===typeof a)for(var f in a)n.call(a,f)&&(e[f]=a[f]);else throw new TypeError("URI.addQuery() accepts an object, string as the name parameter");this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,
this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.addQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.addQuery(e,a,void 0===b?null:b);this._parts.query=d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.removeQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);d.removeQuery(e,a,b);this._parts.query=
d.buildQuery(e,this._parts.duplicateQueryParameters,this._parts.escapeQuerySpace);"string"!==typeof a&&(c=b);this.build(!c);return this};e.hasQuery=function(a,b,c){var e=d.parseQuery(this._parts.query,this._parts.escapeQuerySpace);return d.hasQuery(e,a,b,c)};e.setSearch=e.setQuery;e.addSearch=e.addQuery;e.removeSearch=e.removeQuery;e.hasSearch=e.hasQuery;e.normalize=function(){return this._parts.urn?this.normalizeProtocol(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build():this.normalizeProtocol(!1).normalizeHostname(!1).normalizePort(!1).normalizePath(!1).normalizeQuery(!1).normalizeFragment(!1).build()};
e.normalizeProtocol=function(a){"string"===typeof this._parts.protocol&&(this._parts.protocol=this._parts.protocol.toLowerCase(),this.build(!a));return this};e.normalizeHostname=function(a){this._parts.hostname&&(this.is("IDN")&&l?this._parts.hostname=l.toASCII(this._parts.hostname):this.is("IPv6")&&x&&(this._parts.hostname=x.best(this._parts.hostname)),this._parts.hostname=this._parts.hostname.toLowerCase(),this.build(!a));return this};e.normalizePort=function(a){"string"===typeof this._parts.protocol&&
this._parts.port===d.defaultPorts[this._parts.protocol]&&(this._parts.port=null,this.build(!a));return this};e.normalizePath=function(a){var b=this._parts.path;if(!b)return this;if(this._parts.urn)return this._parts.path=d.recodeUrnPath(this._parts.path),this.build(!a),this;if("/"===this._parts.path)return this;var b=d.recodePath(b),c,e="",f,g;"/"!==b.charAt(0)&&(c=!0,b="/"+b);if("/.."===b.slice(-3)||"/."===b.slice(-2))b+="/";b=b.replace(/(\/(\.\/)+)|(\/\.$)/g,"/").replace(/\/{2,}/g,"/");c&&(e=b.substring(1).match(/^(\.\.\/)+/)||
"")&&(e=e[0]);for(;;){f=b.search(/\/\.\.(\/|$)/);if(-1===f)break;else if(0===f){b=b.substring(3);continue}g=b.substring(0,f).lastIndexOf("/");-1===g&&(g=f);b=b.substring(0,g)+b.substring(f+3)}c&&this.is("relative")&&(b=e+b.substring(1));this._parts.path=b;this.build(!a);return this};e.normalizePathname=e.normalizePath;e.normalizeQuery=function(a){"string"===typeof this._parts.query&&(this._parts.query.length?this.query(d.parseQuery(this._parts.query,this._parts.escapeQuerySpace)):this._parts.query=
null,this.build(!a));return this};e.normalizeFragment=function(a){this._parts.fragment||(this._parts.fragment=null,this.build(!a));return this};e.normalizeSearch=e.normalizeQuery;e.normalizeHash=e.normalizeFragment;e.iso8859=function(){var a=d.encode,b=d.decode;d.encode=escape;d.decode=decodeURIComponent;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};e.unicode=function(){var a=d.encode,b=d.decode;d.encode=w;d.decode=unescape;try{this.normalize()}finally{d.encode=a,d.decode=b}return this};
e.readable=function(){var a=this.clone();a.username("").password("").normalize();var b="";a._parts.protocol&&(b+=a._parts.protocol+"://");a._parts.hostname&&(a.is("punycode")&&l?(b+=l.toUnicode(a._parts.hostname),a._parts.port&&(b+=":"+a._parts.port)):b+=a.host());a._parts.hostname&&a._parts.path&&"/"!==a._parts.path.charAt(0)&&(b+="/");b+=a.path(!0);if(a._parts.query){for(var c="",e=0,f=a._parts.query.split("&"),g=f.length;e<g;e++){var k=(f[e]||"").split("="),c=c+("&"+d.decodeQuery(k[0],this._parts.escapeQuerySpace).replace(/&/g,
"%26"));void 0!==k[1]&&(c+="="+d.decodeQuery(k[1],this._parts.escapeQuerySpace).replace(/&/g,"%26"))}b+="?"+c.substring(1)}return b+=d.decodeQuery(a.hash(),!0)};e.absoluteTo=function(a){var b=this.clone(),c=["protocol","username","password","hostname","port"],e,f;if(this._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a instanceof d||(a=new d(a));b._parts.protocol||(b._parts.protocol=a._parts.protocol);if(this._parts.hostname)return b;for(e=0;f=c[e];e++)b._parts[f]=
a._parts[f];b._parts.path?(".."===b._parts.path.substring(-2)&&(b._parts.path+="/"),"/"!==b.path().charAt(0)&&(c=(c=a.directory())?c:0===a.path().indexOf("/")?"/":"",b._parts.path=(c?c+"/":"")+b._parts.path,b.normalizePath())):(b._parts.path=a._parts.path,b._parts.query||(b._parts.query=a._parts.query));b.build();return b};e.relativeTo=function(a){var b=this.clone().normalize(),c,e,f;if(b._parts.urn)throw Error("URNs do not have any generally defined hierarchical components");a=(new d(a)).normalize();
c=b._parts;e=a._parts;f=b.path();a=a.path();if("/"!==f.charAt(0))throw Error("URI is already relative");if("/"!==a.charAt(0))throw Error("Cannot calculate a URI relative to another relative URI");c.protocol===e.protocol&&(c.protocol=null);if(c.username===e.username&&c.password===e.password&&null===c.protocol&&null===c.username&&null===c.password&&c.hostname===e.hostname&&c.port===e.port)c.hostname=null,c.port=null;else return b.build();if(f===a)return c.path="",b.build();f=d.commonPath(f,a);if(!f)return b.build();
e=e.path.substring(f.length).replace(/[^\/]*$/,"").replace(/.*?\//g,"../");c.path=e+c.path.substring(f.length)||"./";return b.build()};e.equals=function(a){var b=this.clone(),c=new d(a),e;a={};var f,g;b.normalize();c.normalize();if(b.toString()===c.toString())return!0;f=b.query();e=c.query();b.query("");c.query("");if(b.toString()!==c.toString()||f.length!==e.length)return!1;b=d.parseQuery(f,this._parts.escapeQuerySpace);e=d.parseQuery(e,this._parts.escapeQuerySpace);for(g in b)if(n.call(b,g)){if(!t(b[g])){if(b[g]!==
e[g])return!1}else if(!u(b[g],e[g]))return!1;a[g]=!0}for(g in e)if(n.call(e,g)&&!a[g])return!1;return!0};e.duplicateQueryParameters=function(a){this._parts.duplicateQueryParameters=!!a;return this};e.escapeQuerySpace=function(a){this._parts.escapeQuerySpace=!!a;return this};return d});
(function(l,x){"object"===typeof module&&module.exports?module.exports=x(require("./URI")):"function"===typeof define&&define.amd?define(["./URI"],x):l.URITemplate=x(l.URI,l)})(this,function(l,x){function h(d){if(h._cache[d])return h._cache[d];if(!(this instanceof h))return new h(d);this.expression=d;h._cache[d]=this;return this}function q(d){this.data=d;this.cache={}}var d=x&&x.URITemplate,z=Object.prototype.hasOwnProperty,A=h.prototype,t={"":{prefix:"",separator:",",named:!1,empty_name_separator:!1,
encode:"encode"},"+":{prefix:"",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},"#":{prefix:"#",separator:",",named:!1,empty_name_separator:!1,encode:"encodeReserved"},".":{prefix:".",separator:".",named:!1,empty_name_separator:!1,encode:"encode"},"/":{prefix:"/",separator:"/",named:!1,empty_name_separator:!1,encode:"encode"},";":{prefix:";",separator:";",named:!0,empty_name_separator:!1,encode:"encode"},"?":{prefix:"?",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"},
"&":{prefix:"&",separator:"&",named:!0,empty_name_separator:!0,encode:"encode"}};h._cache={};h.EXPRESSION_PATTERN=/\{([^a-zA-Z0-9%_]?)([^\}]+)(\}|$)/g;h.VARIABLE_PATTERN=/^([^*:.](?:\.?[^*:.])*)((\*)|:(\d+))?$/;h.VARIABLE_NAME_PATTERN=/[^a-zA-Z0-9%_.]/;h.LITERAL_PATTERN=/[<>{}"`^| \\]/;h.expand=function(d,g){var f=t[d.operator],l=f.named?"Named":"Unnamed",q=d.variables,w=[],p,k,v;for(v=0;k=q[v];v++)if(p=g.get(k.name),p.val.length){if(1<p.type&&k.maxlength)throw Error('Invalid expression: Prefix modifier not applicable to variable "'+
k.name+'"');w.push(h["expand"+l](p,f,k.explode,k.explode&&f.separator||",",k.maxlength,k.name))}else p.type&&w.push("");return w.length?f.prefix+w.join(f.separator):""};h.expandNamed=function(d,g,h,B,t,w){var f="",k=g.encode;g=g.empty_name_separator;var u=!d[k].length,e=2===d.type?"":l[k](w),n,r,q;r=0;for(q=d.val.length;r<q;r++)t?(n=l[k](d.val[r][1].substring(0,t)),2===d.type&&(e=l[k](d.val[r][0].substring(0,t)))):u?(n=l[k](d.val[r][1]),2===d.type?(e=l[k](d.val[r][0]),d[k].push([e,n])):d[k].push([void 0,
n])):(n=d[k][r][1],2===d.type&&(e=d[k][r][0])),f&&(f+=B),h?f+=e+(g||n?"=":"")+n:(r||(f+=l[k](w)+(g||n?"=":"")),2===d.type&&(f+=e+","),f+=n);return f};h.expandUnnamed=function(d,g,h,t,q){var f="",p=g.encode;g=g.empty_name_separator;var k=!d[p].length,u,e,n,r;n=0;for(r=d.val.length;n<r;n++)q?e=l[p](d.val[n][1].substring(0,q)):k?(e=l[p](d.val[n][1]),d[p].push([2===d.type?l[p](d.val[n][0]):void 0,e])):e=d[p][n][1],f&&(f+=t),2===d.type&&(u=q?l[p](d.val[n][0].substring(0,q)):d[p][n][0],f+=u,f=h?f+(g||e?
"=":""):f+","),f+=e;return f};h.noConflict=function(){x.URITemplate===h&&(x.URITemplate=d);return h};A.expand=function(d){var f="";this.parts&&this.parts.length||this.parse();d instanceof q||(d=new q(d));for(var u=0,l=this.parts.length;u<l;u++)f+="string"===typeof this.parts[u]?this.parts[u]:h.expand(this.parts[u],d);return f};A.parse=function(){var d=this.expression,g=h.EXPRESSION_PATTERN,u=h.VARIABLE_PATTERN,l=h.VARIABLE_NAME_PATTERN,q=h.LITERAL_PATTERN,w=[],p=0,k,v,e,n=function(d){if(d.match(q))throw Error('Invalid Literal "'+
d+'"');return d};for(g.lastIndex=0;;){v=g.exec(d);if(null===v){w.push(n(d.substring(p)));break}else w.push(n(d.substring(p,v.index))),p=v.index+v[0].length;if(!t[v[1]])throw Error('Unknown Operator "'+v[1]+'" in "'+v[0]+'"');if(!v[3])throw Error('Unclosed Expression "'+v[0]+'"');k=v[2].split(",");for(var r=0,x=k.length;r<x;r++){e=k[r].match(u);if(null===e)throw Error('Invalid Variable "'+k[r]+'" in "'+v[0]+'"');if(e[1].match(l))throw Error('Invalid Variable Name "'+e[1]+'" in "'+v[0]+'"');k[r]={name:e[1],
explode:!!e[3],maxlength:e[4]&&parseInt(e[4],10)}}if(!k.length)throw Error('Expression Missing Variable(s) "'+v[0]+'"');w.push({expression:v[0],operator:v[1],variables:k})}w.length||w.push(n(d));this.parts=w;return this};q.prototype.get=function(d){var f=this.data,h={type:0,val:[],encode:[],encodeReserved:[]},l;if(void 0!==this.cache[d])return this.cache[d];this.cache[d]=h;f="[object Function]"===String(Object.prototype.toString.call(f))?f(d):"[object Function]"===String(Object.prototype.toString.call(f[d]))?
f[d](d):f[d];if(void 0!==f&&null!==f)if("[object Array]"===String(Object.prototype.toString.call(f))){l=0;for(d=f.length;l<d;l++)void 0!==f[l]&&null!==f[l]&&h.val.push([void 0,String(f[l])]);h.val.length&&(h.type=3)}else if("[object Object]"===String(Object.prototype.toString.call(f))){for(l in f)z.call(f,l)&&void 0!==f[l]&&null!==f[l]&&h.val.push([l,String(f[l])]);h.val.length&&(h.type=2)}else h.type=1,h.val.push([void 0,String(f)]);return h};l.expand=function(d,g){var f=(new h(d)).expand(g);return new l(f)};
return h});
