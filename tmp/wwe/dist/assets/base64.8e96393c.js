const r={_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",encode:function(t){var e,o,a,h,n,d,C,i="",c=0;for(t=r._utf8_encode(t);c<t.length;)h=(e=t.charCodeAt(c++))>>2,n=(3&e)<<4|(o=t.charCodeAt(c++))>>4,d=(15&o)<<2|(a=t.charCodeAt(c++))>>6,C=63&a,isNaN(o)?d=C=64:isNaN(a)&&(C=64),i=i+this._keyStr.charAt(h)+this._keyStr.charAt(n)+this._keyStr.charAt(d)+this._keyStr.charAt(C);return i},decode:function(t){var e,o,a,h,n,d,C="",i=0;for(t=t.replace(/[^A-Za-z0-9\+\/\=]/g,"");i<t.length;)e=this._keyStr.indexOf(t.charAt(i++))<<2|(h=this._keyStr.indexOf(t.charAt(i++)))>>4,o=(15&h)<<4|(n=this._keyStr.indexOf(t.charAt(i++)))>>2,a=(3&n)<<6|(d=this._keyStr.indexOf(t.charAt(i++))),C+=String.fromCharCode(e),64!=n&&(C+=String.fromCharCode(o)),64!=d&&(C+=String.fromCharCode(a));return C=r._utf8_decode(C)},_utf8_encode:function(r){var t="";r=r.replace(/\r\n/g,"\n");for(var e=0;e<r.length;e++){var o=r.charCodeAt(e);o<128?t+=String.fromCharCode(o):o>127&&o<2048?(t+=String.fromCharCode(o>>6|192),t+=String.fromCharCode(63&o|128)):(t+=String.fromCharCode(o>>12|224),t+=String.fromCharCode(o>>6&63|128),t+=String.fromCharCode(63&o|128))}return t},_utf8_decode:function(r){var t,e,o,a="",h=0;for(t=e=0;h<r.length;)(t=r.charCodeAt(h))<128?(a+=String.fromCharCode(t),h++):t>191&&t<224?(e=r.charCodeAt(h+1),a+=String.fromCharCode((31&t)<<6|63&e),h+=2):(e=r.charCodeAt(h+1),o=r.charCodeAt(h+2),a+=String.fromCharCode((15&t)<<12|(63&e)<<6|63&o),h+=3);return a}};export{r as B};
