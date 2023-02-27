(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=e(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jo="149",xn={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},li={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},uh=0,Ea=1,hh=2,Bc=1,fh=2,ss=3,Pn=0,Re=1,Cn=2,Ln=0,Ci=1,Ta=2,Aa=3,Ca=4,dh=5,Ei=100,ph=101,mh=102,La=103,Pa=104,gh=200,_h=201,xh=202,vh=203,Uc=204,kc=205,yh=206,wh=207,Mh=208,bh=209,Sh=210,Eh=0,Th=1,Ah=2,No=3,Ch=4,Lh=5,Ph=6,Rh=7,br=0,Dh=1,Ih=2,yn=0,Nh=1,Fh=2,zh=3,Oh=4,Bh=5,Gc=300,Di=301,Ii=302,Fo=303,zo=304,Sr=306,Oo=1e3,We=1001,Bo=1002,ye=1003,Ra=1004,Ur=1005,Ue=1006,Uh=1007,fs=1008,Qn=1009,kh=1010,Gh=1011,Vc=1012,Vh=1013,Xn=1014,jn=1015,ds=1016,Hh=1017,Wh=1018,Li=1020,qh=1021,qe=1023,Xh=1024,jh=1025,$n=1026,Ni=1027,Yh=1028,$h=1029,Zh=1030,Kh=1031,Jh=1033,kr=33776,Gr=33777,Vr=33778,Hr=33779,Da=35840,Ia=35841,Na=35842,Fa=35843,Qh=36196,za=37492,Oa=37496,Ba=37808,Ua=37809,ka=37810,Ga=37811,Va=37812,Ha=37813,Wa=37814,qa=37815,Xa=37816,ja=37817,Ya=37818,$a=37819,Za=37820,Ka=37821,Wr=36492,tf=36283,Ja=36284,Qa=36285,tl=36286,ti=3e3,Wt=3001,ef=3200,nf=3201,Qo=0,sf=1,Je="srgb",ps="srgb-linear",qr=7680,rf=519,el=35044,nl="300 es",Uo=1035;class In{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const i=this._listeners[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,t);t.target=null}}}const de=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Xr=Math.PI/180,il=180/Math.PI;function vs(){const s=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(de[s&255]+de[s>>8&255]+de[s>>16&255]+de[s>>24&255]+"-"+de[t&255]+de[t>>8&255]+"-"+de[t>>16&15|64]+de[t>>24&255]+"-"+de[e&63|128]+de[e>>8&255]+"-"+de[e>>16&255]+de[e>>24&255]+de[n&255]+de[n>>8&255]+de[n>>16&255]+de[n>>24&255]).toLowerCase()}function be(s,t,e){return Math.max(t,Math.min(e,s))}function of(s,t){return(s%t+t)%t}function jr(s,t,e){return(1-e)*s+e*t}function sl(s){return(s&s-1)===0&&s!==0}function ko(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function As(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Te(s,t){switch(t.constructor){case Float32Array:return s;case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class Mt{constructor(t=0,e=0){Mt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),i=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*i+t.x,this.y=r*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Pe{constructor(){Pe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(t,e,n,i,r,o,a,c,l){const u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],g=n[8],m=i[0],p=i[3],x=i[6],_=i[1],w=i[4],M=i[7],y=i[2],A=i[5],R=i[8];return r[0]=o*m+a*_+c*y,r[3]=o*p+a*w+c*A,r[6]=o*x+a*M+c*R,r[1]=l*m+u*_+f*y,r[4]=l*p+u*w+f*A,r[7]=l*x+u*M+f*R,r[2]=h*m+d*_+g*y,r[5]=h*p+d*w+g*A,r[8]=h*x+d*M+g*R,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8];return e*o*u-e*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=u*o-a*l,h=a*c-u*r,d=l*r-o*c,g=e*f+n*h+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const m=1/g;return t[0]=f*m,t[1]=(i*l-u*n)*m,t[2]=(a*n-i*o)*m,t[3]=h*m,t[4]=(u*e-i*c)*m,t[5]=(i*r-a*e)*m,t[6]=d*m,t[7]=(n*c-l*e)*m,t[8]=(o*e-n*r)*m,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+t,-i*l,i*c,-i*(-l*o+c*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Yr.makeScale(t,e)),this}rotate(t){return this.premultiply(Yr.makeRotation(-t)),this}translate(t,e){return this.premultiply(Yr.makeTranslation(t,e)),this}makeTranslation(t,e){return this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Yr=new Pe;function Hc(s){for(let t=s.length-1;t>=0;--t)if(s[t]>=65535)return!0;return!1}function ur(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function rr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const $r={[Je]:{[ps]:Zn},[ps]:{[Je]:rr}},xe={legacyMode:!0,get workingColorSpace(){return ps},set workingColorSpace(s){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(s,t,e){if(this.legacyMode||t===e||!t||!e)return s;if($r[t]&&$r[t][e]!==void 0){const n=$r[t][e];return s.r=n(s.r),s.g=n(s.g),s.b=n(s.b),s}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(s,t){return this.convert(s,this.workingColorSpace,t)},toWorkingColorSpace:function(s,t){return this.convert(s,t,this.workingColorSpace)}},Wc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ne={r:0,g:0,b:0},ke={h:0,s:0,l:0},Cs={h:0,s:0,l:0};function Zr(s,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?s+(t-s)*6*e:e<1/2?t:e<2/3?s+(t-s)*6*(2/3-e):s}function Ls(s,t){return t.r=s.r,t.g=s.g,t.b=s.b,t}let zt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,e===void 0&&n===void 0?this.set(t):this.setRGB(t,e,n)}set(t){return t&&t.isColor?this.copy(t):typeof t=="number"?this.setHex(t):typeof t=="string"&&this.setStyle(t),this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Je){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,n,i=xe.workingColorSpace){return this.r=t,this.g=e,this.b=n,xe.toWorkingColorSpace(this,i),this}setHSL(t,e,n,i=xe.workingColorSpace){if(t=of(t,1),e=be(e,0,1),n=be(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=Zr(o,r,t+1/3),this.g=Zr(o,r,t),this.b=Zr(o,r,t-1/3)}return xe.toWorkingColorSpace(this,i),this}setStyle(t,e=Je){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(t)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(r[1],10))/255,this.g=Math.min(255,parseInt(r[2],10))/255,this.b=Math.min(255,parseInt(r[3],10))/255,xe.toWorkingColorSpace(this,e),n(r[4]),this;if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(r[1],10))/100,this.g=Math.min(100,parseInt(r[2],10))/100,this.b=Math.min(100,parseInt(r[3],10))/100,xe.toWorkingColorSpace(this,e),n(r[4]),this;break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(r[1])/360,l=parseFloat(r[2])/100,u=parseFloat(r[3])/100;return n(r[4]),this.setHSL(c,l,u,e)}break}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],o=r.length;if(o===3)return this.r=parseInt(r.charAt(0)+r.charAt(0),16)/255,this.g=parseInt(r.charAt(1)+r.charAt(1),16)/255,this.b=parseInt(r.charAt(2)+r.charAt(2),16)/255,xe.toWorkingColorSpace(this,e),this;if(o===6)return this.r=parseInt(r.charAt(0)+r.charAt(1),16)/255,this.g=parseInt(r.charAt(2)+r.charAt(3),16)/255,this.b=parseInt(r.charAt(4)+r.charAt(5),16)/255,xe.toWorkingColorSpace(this,e),this}return t&&t.length>0?this.setColorName(t,e):this}setColorName(t,e=Je){const n=Wc[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Zn(t.r),this.g=Zn(t.g),this.b=Zn(t.b),this}copyLinearToSRGB(t){return this.r=rr(t.r),this.g=rr(t.g),this.b=rr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Je){return xe.fromWorkingColorSpace(Ls(this,ne),t),be(ne.r*255,0,255)<<16^be(ne.g*255,0,255)<<8^be(ne.b*255,0,255)<<0}getHexString(t=Je){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(Ls(this,ne),e);const n=ne.r,i=ne.g,r=ne.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(i-r)/f+(i<r?6:0);break;case i:c=(r-n)/f+2;break;case r:c=(n-i)/f+4;break}c/=6}return t.h=c,t.s=l,t.l=u,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(Ls(this,ne),e),t.r=ne.r,t.g=ne.g,t.b=ne.b,t}getStyle(t=Je){return xe.fromWorkingColorSpace(Ls(this,ne),t),t!==Je?`color(${t} ${ne.r} ${ne.g} ${ne.b})`:`rgb(${ne.r*255|0},${ne.g*255|0},${ne.b*255|0})`}offsetHSL(t,e,n){return this.getHSL(ke),ke.h+=t,ke.s+=e,ke.l+=n,this.setHSL(ke.h,ke.s,ke.l),this}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(ke),t.getHSL(Cs);const n=jr(ke.h,Cs.h,e),i=jr(ke.s,Cs.s,e),r=jr(ke.l,Cs.l,e);return this.setHSL(n,i,r),this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}};zt.NAMES=Wc;let ci;class qc{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ci===void 0&&(ci=ur("canvas")),ci.width=t.width,ci.height=t.height;const n=ci.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ci}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ur("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const i=n.getImageData(0,0,t.width,t.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=Zn(r[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Zn(e[n]/255)*255):e[n]=Zn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}class Xc{constructor(t=null){this.isSource=!0,this.uuid=vs(),this.data=t,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Kr(i[o].image)):r.push(Kr(i[o]))}else r=Kr(i);n.url=r}return e||(t.images[this.uuid]=n),n}}function Kr(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?qc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let af=0;class De extends In{constructor(t=De.DEFAULT_IMAGE,e=De.DEFAULT_MAPPING,n=We,i=We,r=Ue,o=fs,a=qe,c=Qn,l=De.DEFAULT_ANISOTROPY,u=ti){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:af++}),this.uuid=vs(),this.name="",this.source=new Xc(t),this.mipmaps=[],this.mapping=e,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Mt(0,0),this.repeat=new Mt(1,1),this.center=new Mt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.encoding=t.encoding,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Gc)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Oo:t.x=t.x-Math.floor(t.x);break;case We:t.x=t.x<0?0:1;break;case Bo:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Oo:t.y=t.y-Math.floor(t.y);break;case We:t.y=t.y<0?0:1;break;case Bo:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}}De.DEFAULT_IMAGE=null;De.DEFAULT_MAPPING=Gc;De.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,n=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,r;const c=t.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],g=c[9],m=c[2],p=c[6],x=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-m)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+m)<.1&&Math.abs(g+p)<.1&&Math.abs(l+d+x-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const w=(l+1)/2,M=(d+1)/2,y=(x+1)/2,A=(u+h)/4,R=(f+m)/4,v=(g+p)/4;return w>M&&w>y?w<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(w),i=A/n,r=R/n):M>y?M<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(M),n=A/i,r=v/i):y<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(y),n=R/r,i=v/r),this.set(n,i,r,e),this}let _=Math.sqrt((p-g)*(p-g)+(f-m)*(f-m)+(h-u)*(h-u));return Math.abs(_)<.001&&(_=1),this.x=(p-g)/_,this.y=(f-m)/_,this.z=(h-u)/_,this.w=Math.acos((l+d+x-1)/2),this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class ei extends In{constructor(t=1,e=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:1};this.texture=new De(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Ue,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(t,e,n=1){(this.width!==t||this.height!==e||this.depth!==n)&&(this.width=t,this.height=e,this.depth=n,this.texture.image.width=t,this.texture.image.height=e,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.viewport.copy(t.viewport),this.texture=t.texture.clone(),this.texture.isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Xc(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class jc extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class lf extends De{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=ye,this.minFilter=ye,this.wrapR=We,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}let Rn=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],f=n[i+3];const h=r[o+0],d=r[o+1],g=r[o+2],m=r[o+3];if(a===0){t[e+0]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f;return}if(a===1){t[e+0]=h,t[e+1]=d,t[e+2]=g,t[e+3]=m;return}if(f!==m||c!==h||l!==d||u!==g){let p=1-a;const x=c*h+l*d+u*g+f*m,_=x>=0?1:-1,w=1-x*x;if(w>Number.EPSILON){const y=Math.sqrt(w),A=Math.atan2(y,x*_);p=Math.sin(p*A)/y,a=Math.sin(a*A)/y}const M=a*_;if(c=c*p+h*M,l=l*p+d*M,u=u*p+g*M,f=f*p+m*M,p===1-a){const y=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=y,l*=y,u*=y,f*=y}}t[e]=c,t[e+1]=l,t[e+2]=u,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],f=r[o],h=r[o+1],d=r[o+2],g=r[o+3];return t[e]=a*g+u*f+c*d-l*h,t[e+1]=c*g+u*h+l*f-a*d,t[e+2]=l*g+u*d+a*h-c*f,t[e+3]=u*g-a*f-c*h-l*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e){const n=t._x,i=t._y,r=t._z,o=t._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),f=a(r/2),h=c(n/2),d=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"YXZ":this._x=h*u*f+l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"ZXY":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f-h*d*g;break;case"ZYX":this._x=h*u*f-l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f+h*d*g;break;case"YZX":this._x=h*u*f+l*d*g,this._y=l*d*f+h*u*g,this._z=l*u*g-h*d*f,this._w=l*u*f-h*d*g;break;case"XZY":this._x=h*u*f-l*d*g,this._y=l*d*f-h*u*g,this._z=l*u*g+h*d*f,this._w=l*u*f+h*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e!==!1&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],i=e[4],r=e[8],o=e[1],a=e[5],c=e[9],l=e[2],u=e[6],f=e[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(r-l)*d,this._z=(o-i)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(r+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-i)/d,this._x=(r+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(be(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,i=t._y,r=t._z,o=t._w,a=e._x,c=e._y,l=e._z,u=e._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-e;return this._w=d*o+e*this._w,this._x=d*n+e*this._x,this._y=d*i+e*this._y,this._z=d*r+e*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-e)*u)/l,h=Math.sin(e*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=i*f+this._y*h,this._z=r*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=Math.random(),e=Math.sqrt(1-t),n=Math.sqrt(t),i=2*Math.PI*Math.random(),r=2*Math.PI*Math.random();return this.set(e*Math.cos(i),n*Math.sin(r),n*Math.cos(r),e*Math.sin(i))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}};class V{constructor(t=0,e=0,n=0){V.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(rl.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(rl.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*i,this.y=r[1]*e+r[4]*n+r[7]*i,this.z=r[2]*e+r[5]*n+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,i=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z,c=t.w,l=c*e+o*i-a*n,u=c*n+a*e-r*i,f=c*i+r*n-o*e,h=-r*e-o*n-a*i;return this.x=l*c+h*-r+u*-a-f*-o,this.y=u*c+h*-o+f*-r-l*-a,this.z=f*c+h*-a+l*-o-u*-r,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*i,this.y=r[1]*e+r[5]*n+r[9]*i,this.z=r[2]*e+r[6]*n+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,i=t.y,r=t.z,o=e.x,a=e.y,c=e.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Jr.copy(this).projectOnVector(t),this.sub(Jr)}reflect(t){return this.sub(Jr.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(be(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=(Math.random()-.5)*2,e=Math.random()*Math.PI*2,n=Math.sqrt(1-t**2);return this.x=n*Math.cos(e),this.y=n*Math.sin(e),this.z=t,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Jr=new V,rl=new Rn;class ys{constructor(t=new V(1/0,1/0,1/0),e=new V(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.length;c<l;c+=3){const u=t[c],f=t[c+1],h=t[c+2];u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromBufferAttribute(t){let e=1/0,n=1/0,i=1/0,r=-1/0,o=-1/0,a=-1/0;for(let c=0,l=t.count;c<l;c++){const u=t.getX(c),f=t.getY(c),h=t.getZ(c);u<e&&(e=u),f<n&&(n=f),h<i&&(i=h),u>r&&(r=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(e,n,i),this.max.set(r,o,a),this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Bn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0)if(e&&n.attributes!=null&&n.attributes.position!==void 0){const r=n.attributes.position;for(let o=0,a=r.count;o<a;o++)Bn.fromBufferAttribute(r,o).applyMatrix4(t.matrixWorld),this.expandByPoint(Bn)}else n.boundingBox===null&&n.computeBoundingBox(),Qr.copy(n.boundingBox),Qr.applyMatrix4(t.matrixWorld),this.union(Qr);const i=t.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return!(t.x<this.min.x||t.x>this.max.x||t.y<this.min.y||t.y>this.max.y||t.z<this.min.z||t.z>this.max.z)}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return!(t.max.x<this.min.x||t.min.x>this.max.x||t.max.y<this.min.y||t.min.y>this.max.y||t.max.z<this.min.z||t.min.z>this.max.z)}intersectsSphere(t){return this.clampPoint(t.center,Bn),Bn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Xi),Ps.subVectors(this.max,Xi),ui.subVectors(t.a,Xi),hi.subVectors(t.b,Xi),fi.subVectors(t.c,Xi),Mn.subVectors(hi,ui),bn.subVectors(fi,hi),Un.subVectors(ui,fi);let e=[0,-Mn.z,Mn.y,0,-bn.z,bn.y,0,-Un.z,Un.y,Mn.z,0,-Mn.x,bn.z,0,-bn.x,Un.z,0,-Un.x,-Mn.y,Mn.x,0,-bn.y,bn.x,0,-Un.y,Un.x,0];return!to(e,ui,hi,fi,Ps)||(e=[1,0,0,0,1,0,0,0,1],!to(e,ui,hi,fi,Ps))?!1:(Rs.crossVectors(Mn,bn),e=[Rs.x,Rs.y,Rs.z],to(e,ui,hi,fi,Ps))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return Bn.copy(t).clamp(this.min,this.max).sub(t).length()}getBoundingSphere(t){return this.getCenter(t.center),t.radius=this.getSize(Bn).length()*.5,t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(on[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),on[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),on[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),on[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),on[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),on[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),on[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),on[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(on),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const on=[new V,new V,new V,new V,new V,new V,new V,new V],Bn=new V,Qr=new ys,ui=new V,hi=new V,fi=new V,Mn=new V,bn=new V,Un=new V,Xi=new V,Ps=new V,Rs=new V,kn=new V;function to(s,t,e,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){kn.fromArray(s,r);const a=i.x*Math.abs(kn.x)+i.y*Math.abs(kn.y)+i.z*Math.abs(kn.z),c=t.dot(kn),l=e.dot(kn),u=n.dot(kn);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const cf=new ys,ji=new V,eo=new V;class Er{constructor(t=new V,e=-1){this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):cf.setFromPoints(t).getCenter(n);let i=0;for(let r=0,o=t.length;r<o;r++)i=Math.max(i,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ji.subVectors(t,this.center);const e=ji.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ji,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(eo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ji.copy(t.center).add(eo)),this.expandByPoint(ji.copy(t.center).sub(eo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const an=new V,no=new V,Ds=new V,Sn=new V,io=new V,Is=new V,so=new V;let Yc=class{constructor(t=new V,e=new V(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.direction).multiplyScalar(t).add(this.origin)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,an)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=an.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(an.copy(this.direction).multiplyScalar(e).add(this.origin),an.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){no.copy(t).add(e).multiplyScalar(.5),Ds.copy(e).sub(t).normalize(),Sn.copy(this.origin).sub(no);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Ds),a=Sn.dot(this.direction),c=-Sn.dot(Ds),l=Sn.lengthSq(),u=Math.abs(1-o*o);let f,h,d,g;if(u>0)if(f=o*c-a,h=o*a-c,g=r*u,f>=0)if(h>=-g)if(h<=g){const m=1/u;f*=m,h*=m,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-g?(f=Math.max(0,-(-o*r+a)),h=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l):h<=g?(f=0,h=Math.min(Math.max(-r,-c),r),d=h*(h+2*c)+l):(f=Math.max(0,-(o*r+a)),h=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+h*(h+2*c)+l);else h=o>0?-r:r,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),i&&i.copy(Ds).multiplyScalar(h).add(no),d}intersectSphere(t,e){an.subVectors(t.center,this.origin);const n=an.dot(this.direction),i=an.dot(an)-n*n,r=t.radius*t.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(t.min.x-h.x)*l,i=(t.max.x-h.x)*l):(n=(t.max.x-h.x)*l,i=(t.min.x-h.x)*l),u>=0?(r=(t.min.y-h.y)*u,o=(t.max.y-h.y)*u):(r=(t.max.y-h.y)*u,o=(t.min.y-h.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),f>=0?(a=(t.min.z-h.z)*f,c=(t.max.z-h.z)*f):(a=(t.max.z-h.z)*f,c=(t.min.z-h.z)*f),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,an)!==null}intersectTriangle(t,e,n,i,r){io.subVectors(e,t),Is.subVectors(n,t),so.crossVectors(io,Is);let o=this.direction.dot(so),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Sn.subVectors(this.origin,t);const c=a*this.direction.dot(Is.crossVectors(Sn,Is));if(c<0)return null;const l=a*this.direction.dot(io.cross(Sn));if(l<0||c+l>o)return null;const u=-a*Sn.dot(so);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}};class kt{constructor(){kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(t,e,n,i,r,o,a,c,l,u,f,h,d,g,m,p){const x=this.elements;return x[0]=t,x[4]=e,x[8]=n,x[12]=i,x[1]=r,x[5]=o,x[9]=a,x[13]=c,x[2]=l,x[6]=u,x[10]=f,x[14]=h,x[3]=d,x[7]=g,x[11]=m,x[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,i=1/di.setFromMatrixColumn(t,0).length(),r=1/di.setFromMatrixColumn(t,1).length(),o=1/di.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,i=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),f=Math.sin(r);if(t.order==="XYZ"){const h=o*u,d=o*f,g=a*u,m=a*f;e[0]=c*u,e[4]=-c*f,e[8]=l,e[1]=d+g*l,e[5]=h-m*l,e[9]=-a*c,e[2]=m-h*l,e[6]=g+d*l,e[10]=o*c}else if(t.order==="YXZ"){const h=c*u,d=c*f,g=l*u,m=l*f;e[0]=h+m*a,e[4]=g*a-d,e[8]=o*l,e[1]=o*f,e[5]=o*u,e[9]=-a,e[2]=d*a-g,e[6]=m+h*a,e[10]=o*c}else if(t.order==="ZXY"){const h=c*u,d=c*f,g=l*u,m=l*f;e[0]=h-m*a,e[4]=-o*f,e[8]=g+d*a,e[1]=d+g*a,e[5]=o*u,e[9]=m-h*a,e[2]=-o*l,e[6]=a,e[10]=o*c}else if(t.order==="ZYX"){const h=o*u,d=o*f,g=a*u,m=a*f;e[0]=c*u,e[4]=g*l-d,e[8]=h*l+m,e[1]=c*f,e[5]=m*l+h,e[9]=d*l-g,e[2]=-l,e[6]=a*c,e[10]=o*c}else if(t.order==="YZX"){const h=o*c,d=o*l,g=a*c,m=a*l;e[0]=c*u,e[4]=m-h*f,e[8]=g*f+d,e[1]=f,e[5]=o*u,e[9]=-a*u,e[2]=-l*u,e[6]=d*f+g,e[10]=h-m*f}else if(t.order==="XZY"){const h=o*c,d=o*l,g=a*c,m=a*l;e[0]=c*u,e[4]=-f,e[8]=l*u,e[1]=h*f+m,e[5]=o*u,e[9]=d*f-g,e[2]=g*f-d,e[6]=a*u,e[10]=m*f+h}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(uf,t,hf)}lookAt(t,e,n){const i=this.elements;return Ae.subVectors(t,e),Ae.lengthSq()===0&&(Ae.z=1),Ae.normalize(),En.crossVectors(n,Ae),En.lengthSq()===0&&(Math.abs(n.z)===1?Ae.x+=1e-4:Ae.z+=1e-4,Ae.normalize(),En.crossVectors(n,Ae)),En.normalize(),Ns.crossVectors(Ae,En),i[0]=En.x,i[4]=Ns.x,i[8]=Ae.x,i[1]=En.y,i[5]=Ns.y,i[9]=Ae.y,i[2]=En.z,i[6]=Ns.z,i[10]=Ae.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,i=e.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],g=n[2],m=n[6],p=n[10],x=n[14],_=n[3],w=n[7],M=n[11],y=n[15],A=i[0],R=i[4],v=i[8],S=i[12],C=i[1],z=i[5],O=i[9],E=i[13],P=i[2],I=i[6],F=i[10],B=i[14],G=i[3],Y=i[7],J=i[11],lt=i[15];return r[0]=o*A+a*C+c*P+l*G,r[4]=o*R+a*z+c*I+l*Y,r[8]=o*v+a*O+c*F+l*J,r[12]=o*S+a*E+c*B+l*lt,r[1]=u*A+f*C+h*P+d*G,r[5]=u*R+f*z+h*I+d*Y,r[9]=u*v+f*O+h*F+d*J,r[13]=u*S+f*E+h*B+d*lt,r[2]=g*A+m*C+p*P+x*G,r[6]=g*R+m*z+p*I+x*Y,r[10]=g*v+m*O+p*F+x*J,r[14]=g*S+m*E+p*B+x*lt,r[3]=_*A+w*C+M*P+y*G,r[7]=_*R+w*z+M*I+y*Y,r[11]=_*v+w*O+M*F+y*J,r[15]=_*S+w*E+M*B+y*lt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],i=t[8],r=t[12],o=t[1],a=t[5],c=t[9],l=t[13],u=t[2],f=t[6],h=t[10],d=t[14],g=t[3],m=t[7],p=t[11],x=t[15];return g*(+r*c*f-i*l*f-r*a*h+n*l*h+i*a*d-n*c*d)+m*(+e*c*d-e*l*h+r*o*h-i*o*d+i*l*u-r*c*u)+p*(+e*l*f-e*a*d-r*o*f+n*o*d+r*a*u-n*l*u)+x*(-i*a*u-e*c*f+e*a*h+i*o*f-n*o*h+n*c*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],i=t[2],r=t[3],o=t[4],a=t[5],c=t[6],l=t[7],u=t[8],f=t[9],h=t[10],d=t[11],g=t[12],m=t[13],p=t[14],x=t[15],_=f*p*l-m*h*l+m*c*d-a*p*d-f*c*x+a*h*x,w=g*h*l-u*p*l-g*c*d+o*p*d+u*c*x-o*h*x,M=u*m*l-g*f*l+g*a*d-o*m*d-u*a*x+o*f*x,y=g*f*c-u*m*c-g*a*h+o*m*h+u*a*p-o*f*p,A=e*_+n*w+i*M+r*y;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return t[0]=_*R,t[1]=(m*h*r-f*p*r-m*i*d+n*p*d+f*i*x-n*h*x)*R,t[2]=(a*p*r-m*c*r+m*i*l-n*p*l-a*i*x+n*c*x)*R,t[3]=(f*c*r-a*h*r-f*i*l+n*h*l+a*i*d-n*c*d)*R,t[4]=w*R,t[5]=(u*p*r-g*h*r+g*i*d-e*p*d-u*i*x+e*h*x)*R,t[6]=(g*c*r-o*p*r-g*i*l+e*p*l+o*i*x-e*c*x)*R,t[7]=(o*h*r-u*c*r+u*i*l-e*h*l-o*i*d+e*c*d)*R,t[8]=M*R,t[9]=(g*f*r-u*m*r-g*n*d+e*m*d+u*n*x-e*f*x)*R,t[10]=(o*m*r-g*a*r+g*n*l-e*m*l-o*n*x+e*a*x)*R,t[11]=(u*a*r-o*f*r-u*n*l+e*f*l+o*n*d-e*a*d)*R,t[12]=y*R,t[13]=(u*m*i-g*f*i+g*n*h-e*m*h-u*n*p+e*f*p)*R,t[14]=(g*a*i-o*m*i-g*n*c+e*m*c+o*n*p-e*a*p)*R,t[15]=(o*f*i-u*a*i+u*n*c-e*f*c-o*n*h+e*a*h)*R,this}scale(t){const e=this.elements,n=t.x,i=t.y,r=t.z;return e[0]*=n,e[4]*=i,e[8]*=r,e[1]*=n,e[5]*=i,e[9]*=r,e[2]*=n,e[6]*=i,e[10]*=r,e[3]*=n,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),i=Math.sin(e),r=1-n,o=t.x,a=t.y,c=t.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,r,o){return this.set(1,n,r,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){const i=this.elements,r=e._x,o=e._y,a=e._z,c=e._w,l=r+r,u=o+o,f=a+a,h=r*l,d=r*u,g=r*f,m=o*u,p=o*f,x=a*f,_=c*l,w=c*u,M=c*f,y=n.x,A=n.y,R=n.z;return i[0]=(1-(m+x))*y,i[1]=(d+M)*y,i[2]=(g-w)*y,i[3]=0,i[4]=(d-M)*A,i[5]=(1-(h+x))*A,i[6]=(p+_)*A,i[7]=0,i[8]=(g+w)*R,i[9]=(p-_)*R,i[10]=(1-(h+m))*R,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){const i=this.elements;let r=di.set(i[0],i[1],i[2]).length();const o=di.set(i[4],i[5],i[6]).length(),a=di.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Ge.copy(this);const l=1/r,u=1/o,f=1/a;return Ge.elements[0]*=l,Ge.elements[1]*=l,Ge.elements[2]*=l,Ge.elements[4]*=u,Ge.elements[5]*=u,Ge.elements[6]*=u,Ge.elements[8]*=f,Ge.elements[9]*=f,Ge.elements[10]*=f,e.setFromRotationMatrix(Ge),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,i,r,o){const a=this.elements,c=2*r/(e-t),l=2*r/(n-i),u=(e+t)/(e-t),f=(n+i)/(n-i),h=-(o+r)/(o-r),d=-2*o*r/(o-r);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,n,i,r,o){const a=this.elements,c=1/(e-t),l=1/(n-i),u=1/(o-r),f=(e+t)*c,h=(n+i)*l,d=(o+r)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const di=new V,Ge=new kt,uf=new V(0,0,0),hf=new V(1,1,1),En=new V,Ns=new V,Ae=new V,ol=new kt,al=new Rn;class Tr{constructor(t=0,e=0,n=0,i=Tr.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const i=t.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],f=i[2],h=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(be(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-be(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(be(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-be(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(be(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-be(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return ol.makeRotationFromQuaternion(t),this.setFromRotationMatrix(ol,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return al.setFromEuler(this),this.setFromQuaternion(al,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tr.DEFAULT_ORDER="XYZ";class $c{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let ff=0;const ll=new V,pi=new Rn,ln=new kt,Fs=new V,Yi=new V,df=new V,pf=new Rn,cl=new V(1,0,0),ul=new V(0,1,0),hl=new V(0,0,1),mf={type:"added"},fl={type:"removed"};class ue extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ue.DEFAULT_UP.clone();const t=new V,e=new Tr,n=new Rn,i=new V(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new kt},normalMatrix:{value:new Pe}}),this.matrix=new kt,this.matrixWorld=new kt,this.matrixAutoUpdate=ue.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new $c,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.multiply(pi),this}rotateOnWorldAxis(t,e){return pi.setFromAxisAngle(t,e),this.quaternion.premultiply(pi),this}rotateX(t){return this.rotateOnAxis(cl,t)}rotateY(t){return this.rotateOnAxis(ul,t)}rotateZ(t){return this.rotateOnAxis(hl,t)}translateOnAxis(t,e){return ll.copy(t).applyQuaternion(this.quaternion),this.position.add(ll.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(cl,t)}translateY(t){return this.translateOnAxis(ul,t)}translateZ(t){return this.translateOnAxis(hl,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(ln.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Fs.copy(t):Fs.set(t,e,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Yi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ln.lookAt(Yi,Fs,this.up):ln.lookAt(Fs,Yi,this.up),this.quaternion.setFromRotationMatrix(ln),i&&(ln.extractRotation(i.matrixWorld),pi.setFromRotationMatrix(ln),this.quaternion.premultiply(pi.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.parent!==null&&t.parent.remove(t),t.parent=this,this.children.push(t),t.dispatchEvent(mf)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(fl)),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){for(let t=0;t<this.children.length;t++){const e=this.children[t];e.parent=null,e.dispatchEvent(fl)}return this.children.length=0,this}attach(t){return this.updateWorldMatrix(!0,!1),ln.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),ln.multiply(t.parent.matrixWorld)),t.applyMatrix4(ln),this.add(t),t.updateWorldMatrix(!1,!0),this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e){let n=[];this[t]===e&&n.push(this);for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectsByProperty(t,e);o.length>0&&(n=n.concat(o))}return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,t,df),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yi,pf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,i=e.length;n<i;n++){const r=e[n];(r.matrixWorldAutoUpdate===!0||t===!0)&&r.updateMatrixWorld(t)}}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),e===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++){const a=i[r];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(t)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];r(t.shapes,f)}else r(t.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(t.materials,this.material[c]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(t.animations,c))}}if(e){const a=o(t.geometries),c=o(t.materials),l=o(t.textures),u=o(t.images),f=o(t.shapes),h=o(t.skeletons),d=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const i=t.children[n];this.add(i.clone())}return this}}ue.DEFAULT_UP=new V(0,1,0);ue.DEFAULT_MATRIX_AUTO_UPDATE=!0;ue.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ve=new V,cn=new V,ro=new V,un=new V,mi=new V,gi=new V,dl=new V,oo=new V,ao=new V,lo=new V;class vn{constructor(t=new V,e=new V,n=new V){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Ve.subVectors(t,e),i.cross(Ve);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,n,i,r){Ve.subVectors(i,e),cn.subVectors(n,e),ro.subVectors(t,e);const o=Ve.dot(Ve),a=Ve.dot(cn),c=Ve.dot(ro),l=cn.dot(cn),u=cn.dot(ro),f=o*l-a*a;if(f===0)return r.set(-2,-1,-1);const h=1/f,d=(l*c-a*u)*h,g=(o*u-a*c)*h;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,un),un.x>=0&&un.y>=0&&un.x+un.y<=1}static getUV(t,e,n,i,r,o,a,c){return this.getBarycoord(t,e,n,i,un),c.set(0,0),c.addScaledVector(r,un.x),c.addScaledVector(o,un.y),c.addScaledVector(a,un.z),c}static isFrontFacing(t,e,n,i){return Ve.subVectors(n,e),cn.subVectors(t,e),Ve.cross(cn).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ve.subVectors(this.c,this.b),cn.subVectors(this.a,this.b),Ve.cross(cn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return vn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return vn.getBarycoord(t,this.a,this.b,this.c,e)}getUV(t,e,n,i,r){return vn.getUV(t,this.a,this.b,this.c,e,n,i,r)}containsPoint(t){return vn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return vn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,i=this.b,r=this.c;let o,a;mi.subVectors(i,n),gi.subVectors(r,n),oo.subVectors(t,n);const c=mi.dot(oo),l=gi.dot(oo);if(c<=0&&l<=0)return e.copy(n);ao.subVectors(t,i);const u=mi.dot(ao),f=gi.dot(ao);if(u>=0&&f<=u)return e.copy(i);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),e.copy(n).addScaledVector(mi,o);lo.subVectors(t,r);const d=mi.dot(lo),g=gi.dot(lo);if(g>=0&&d<=g)return e.copy(r);const m=d*l-c*g;if(m<=0&&l>=0&&g<=0)return a=l/(l-g),e.copy(n).addScaledVector(gi,a);const p=u*g-d*f;if(p<=0&&f-u>=0&&d-g>=0)return dl.subVectors(r,i),a=(f-u)/(f-u+(d-g)),e.copy(i).addScaledVector(dl,a);const x=1/(p+m+h);return o=m*x,a=h*x,e.copy(n).addScaledVector(mi,o).addScaledVector(gi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}let gf=0,ai=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gf++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=Ci,this.side=Pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Uc,this.blendDst=kc,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=No,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=rf,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=qr,this.stencilZFail=qr,this.stencilZPass=qr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn("THREE.Material: '"+e+"' parameter is undefined.");continue}const i=this[e];if(i===void 0){console.warn("THREE."+this.type+": '"+e+"' is not a property of this material.");continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ci&&(n.blending=this.blending),this.side!==Pn&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(n.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(e){const r=i(t.textures),o=i(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const i=e.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}};class ta extends ai{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qt=new V,zs=new Mt;class Ie{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=el,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)zs.fromBufferAttribute(this,e),zs.applyMatrix3(t),this.setXY(e,zs.x,zs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyMatrix3(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyMatrix4(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.applyNormalMatrix(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qt.fromBufferAttribute(this,e),Qt.transformDirection(t),this.setXYZ(e,Qt.x,Qt.y,Qt.z);return this}set(t,e=0){return this.array.set(t,e),this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=As(e,this.array)),e}setX(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=As(e,this.array)),e}setY(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=As(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=As(e,this.array)),e}setW(t,e){return this.normalized&&(e=Te(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,r){return t*=this.itemSize,this.normalized&&(e=Te(e,this.array),n=Te(n,this.array),i=Te(i,this.array),r=Te(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==el&&(t.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(t.updateRange=this.updateRange),t}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class Zc extends Ie{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Kc extends Ie{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class jt extends Ie{constructor(t,e,n){super(new Float32Array(t),e,n)}}let _f=0;const Be=new kt,co=new ue,_i=new V,Ce=new ys,$i=new ys,le=new V;class me extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_f++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Hc(t)?Kc:Zc)(t,1):this.index=t,this}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Pe().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Be.makeRotationFromQuaternion(t),this.applyMatrix4(Be),this}rotateX(t){return Be.makeRotationX(t),this.applyMatrix4(Be),this}rotateY(t){return Be.makeRotationY(t),this.applyMatrix4(Be),this}rotateZ(t){return Be.makeRotationZ(t),this.applyMatrix4(Be),this}translate(t,e,n){return Be.makeTranslation(t,e,n),this.applyMatrix4(Be),this}scale(t,e,n){return Be.makeScale(t,e,n),this.applyMatrix4(Be),this}lookAt(t){return co.lookAt(t),co.updateMatrix(),this.applyMatrix4(co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_i).negate(),this.translate(_i.x,_i.y,_i.z),this}setFromPoints(t){const e=[];for(let n=0,i=t.length;n<i;n++){const r=t[n];e.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new jt(e,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ys);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new V(-1/0,-1/0,-1/0),new V(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){const r=e[n];Ce.setFromBufferAttribute(r),this.morphTargetsRelative?(le.addVectors(this.boundingBox.min,Ce.min),this.boundingBox.expandByPoint(le),le.addVectors(this.boundingBox.max,Ce.max),this.boundingBox.expandByPoint(le)):(this.boundingBox.expandByPoint(Ce.min),this.boundingBox.expandByPoint(Ce.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Er);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new V,1/0);return}if(t){const n=this.boundingSphere.center;if(Ce.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];$i.setFromBufferAttribute(a),this.morphTargetsRelative?(le.addVectors(Ce.min,$i.min),Ce.expandByPoint(le),le.addVectors(Ce.max,$i.max),Ce.expandByPoint(le)):(Ce.expandByPoint($i.min),Ce.expandByPoint($i.max))}Ce.getCenter(n);let i=0;for(let r=0,o=t.count;r<o;r++)le.fromBufferAttribute(t,r),i=Math.max(i,n.distanceToSquared(le));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)le.fromBufferAttribute(a,l),c&&(_i.fromBufferAttribute(t,l),le.add(_i)),i=Math.max(i,n.distanceToSquared(le))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.array,i=e.position.array,r=e.normal.array,o=e.uv.array,a=i.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ie(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let C=0;C<a;C++)l[C]=new V,u[C]=new V;const f=new V,h=new V,d=new V,g=new Mt,m=new Mt,p=new Mt,x=new V,_=new V;function w(C,z,O){f.fromArray(i,C*3),h.fromArray(i,z*3),d.fromArray(i,O*3),g.fromArray(o,C*2),m.fromArray(o,z*2),p.fromArray(o,O*2),h.sub(f),d.sub(f),m.sub(g),p.sub(g);const E=1/(m.x*p.y-p.x*m.y);isFinite(E)&&(x.copy(h).multiplyScalar(p.y).addScaledVector(d,-m.y).multiplyScalar(E),_.copy(d).multiplyScalar(m.x).addScaledVector(h,-p.x).multiplyScalar(E),l[C].add(x),l[z].add(x),l[O].add(x),u[C].add(_),u[z].add(_),u[O].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:n.length}]);for(let C=0,z=M.length;C<z;++C){const O=M[C],E=O.start,P=O.count;for(let I=E,F=E+P;I<F;I+=3)w(n[I+0],n[I+1],n[I+2])}const y=new V,A=new V,R=new V,v=new V;function S(C){R.fromArray(r,C*3),v.copy(R);const z=l[C];y.copy(z),y.sub(R.multiplyScalar(R.dot(z))).normalize(),A.crossVectors(v,z);const E=A.dot(u[C])<0?-1:1;c[C*4]=y.x,c[C*4+1]=y.y,c[C*4+2]=y.z,c[C*4+3]=E}for(let C=0,z=M.length;C<z;++C){const O=M[C],E=O.start,P=O.count;for(let I=E,F=E+P;I<F;I+=3)S(n[I+0]),S(n[I+1]),S(n[I+2])}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ie(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const i=new V,r=new V,o=new V,a=new V,c=new V,l=new V,u=new V,f=new V;if(t)for(let h=0,d=t.count;h<d;h+=3){const g=t.getX(h+0),m=t.getX(h+1),p=t.getX(h+2);i.fromBufferAttribute(e,g),r.fromBufferAttribute(e,m),o.fromBufferAttribute(e,p),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(m,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=e.count;h<d;h+=3)i.fromBufferAttribute(e,h+0),r.fromBufferAttribute(e,h+1),o.fromBufferAttribute(e,h+2),u.subVectors(o,r),f.subVectors(i,r),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)le.fromBufferAttribute(t,e),le.normalize(),t.setXYZ(e,le.x,le.y,le.z)}toNonIndexed(){function t(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,g=0;for(let m=0,p=c.length;m<p;m++){a.isInterleavedBufferAttribute?d=c[m]*a.data.stride+a.offset:d=c[m]*u;for(let x=0;x<u;x++)h[g++]=l[d++]}return new Ie(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new me,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=t(c,n);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=t(h,n);c.push(d)}e.morphAttributes[a]=c}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(t[l]=c[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const c in n){const l=n[c];t.data.attributes[c]=l.toJSON(t.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(t.data))}u.length>0&&(i[c]=u,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const i=t.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(e))}const r=t.morphAttributes;for(const l in r){const u=[],f=r[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(e));this.morphAttributes[l]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=t.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,t.parameters!==void 0&&(this.parameters=Object.assign({},t.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const pl=new kt,xi=new Yc,uo=new Er,Zi=new V,Ki=new V,Ji=new V,ho=new V,Os=new V,Bs=new Mt,Us=new Mt,ks=new Mt,fo=new V,Gs=new V;class ee extends ue{constructor(t=new me,e=new ta){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Os.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],f=r[c];u!==0&&(ho.fromBufferAttribute(f,t),o?Os.addScaledVector(ho,u):Os.addScaledVector(ho.sub(e),u))}e.add(Os)}return this.isSkinnedMesh&&this.boneTransform(t,e),e}raycast(t,e){const n=this.geometry,i=this.material,r=this.matrixWorld;if(i===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),uo.copy(n.boundingSphere),uo.applyMatrix4(r),t.ray.intersectsSphere(uo)===!1)||(pl.copy(r).invert(),xi.copy(t.ray).applyMatrix4(pl),n.boundingBox!==null&&xi.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.attributes.uv,u=n.attributes.uv2,f=n.groups,h=n.drawRange;if(a!==null)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){const m=f[d],p=i[m.materialIndex],x=Math.max(m.start,h.start),_=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let w=x,M=_;w<M;w+=3){const y=a.getX(w),A=a.getX(w+1),R=a.getX(w+2);o=Vs(this,p,t,xi,l,u,y,A,R),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const d=Math.max(0,h.start),g=Math.min(a.count,h.start+h.count);for(let m=d,p=g;m<p;m+=3){const x=a.getX(m),_=a.getX(m+1),w=a.getX(m+2);o=Vs(this,i,t,xi,l,u,x,_,w),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}else if(c!==void 0)if(Array.isArray(i))for(let d=0,g=f.length;d<g;d++){const m=f[d],p=i[m.materialIndex],x=Math.max(m.start,h.start),_=Math.min(c.count,Math.min(m.start+m.count,h.start+h.count));for(let w=x,M=_;w<M;w+=3){const y=w,A=w+1,R=w+2;o=Vs(this,p,t,xi,l,u,y,A,R),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=m.materialIndex,e.push(o))}}else{const d=Math.max(0,h.start),g=Math.min(c.count,h.start+h.count);for(let m=d,p=g;m<p;m+=3){const x=m,_=m+1,w=m+2;o=Vs(this,i,t,xi,l,u,x,_,w),o&&(o.faceIndex=Math.floor(m/3),e.push(o))}}}}function xf(s,t,e,n,i,r,o,a){let c;if(t.side===Re?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,t.side===Pn,a),c===null)return null;Gs.copy(a),Gs.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Gs);return l<e.near||l>e.far?null:{distance:l,point:Gs.clone(),object:s}}function Vs(s,t,e,n,i,r,o,a,c){s.getVertexPosition(o,Zi),s.getVertexPosition(a,Ki),s.getVertexPosition(c,Ji);const l=xf(s,t,e,n,Zi,Ki,Ji,fo);if(l){i&&(Bs.fromBufferAttribute(i,o),Us.fromBufferAttribute(i,a),ks.fromBufferAttribute(i,c),l.uv=vn.getUV(fo,Zi,Ki,Ji,Bs,Us,ks,new Mt)),r&&(Bs.fromBufferAttribute(r,o),Us.fromBufferAttribute(r,a),ks.fromBufferAttribute(r,c),l.uv2=vn.getUV(fo,Zi,Ki,Ji,Bs,Us,ks,new Mt));const u={a:o,b:a,c,normal:new V,materialIndex:0};vn.getNormal(Zi,Ki,Ji,u.normal),l.face=u}return l}class ni extends me{constructor(t=1,e=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,i,o,2),g("x","z","y",1,-1,t,n,-e,i,o,3),g("x","y","z",1,-1,t,e,n,i,r,4),g("x","y","z",-1,-1,t,e,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new jt(l,3)),this.setAttribute("normal",new jt(u,3)),this.setAttribute("uv",new jt(f,2));function g(m,p,x,_,w,M,y,A,R,v,S){const C=M/R,z=y/v,O=M/2,E=y/2,P=A/2,I=R+1,F=v+1;let B=0,G=0;const Y=new V;for(let J=0;J<F;J++){const lt=J*z-E;for(let U=0;U<I;U++){const Q=U*C-O;Y[m]=Q*_,Y[p]=lt*w,Y[x]=P,l.push(Y.x,Y.y,Y.z),Y[m]=0,Y[p]=0,Y[x]=A>0?1:-1,u.push(Y.x,Y.y,Y.z),f.push(U/R),f.push(1-J/v),B+=1}}for(let J=0;J<v;J++)for(let lt=0;lt<R;lt++){const U=h+lt+I*J,Q=h+lt+I*(J+1),st=h+(lt+1)+I*(J+1),rt=h+(lt+1)+I*J;c.push(U,Q,rt),c.push(Q,st,rt),G+=6}a.addGroup(d,G,S),d+=G,h+=B}}static fromJSON(t){return new ni(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Fi(s){const t={};for(const e in s){t[e]={};for(const n in s[e]){const i=s[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function ve(s){const t={};for(let e=0;e<s.length;e++){const n=Fi(s[e]);for(const i in n)t[i]=n[i]}return t}function vf(s){const t=[];for(let e=0;e<s.length;e++)t.push(s[e].clone());return t}function Jc(s){return s.getRenderTarget()===null&&s.outputEncoding===Wt?Je:ps}const yf={clone:Fi,merge:ve};var wf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Mf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ii extends ai{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=wf,this.fragmentShader=Mf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Fi(t.uniforms),this.uniformsGroups=vf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class Qc extends ue{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new kt,this.projectionMatrix=new kt,this.projectionMatrixInverse=new kt}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(-e[8],-e[9],-e[10]).normalize()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class Le extends Qc{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=il*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return il*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(t,e,n,i,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,e-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-n,t,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const vi=-90,yi=1;class bf extends ue{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n;const i=new Le(vi,yi,t,e);i.layers=this.layers,i.up.set(0,1,0),i.lookAt(1,0,0),this.add(i);const r=new Le(vi,yi,t,e);r.layers=this.layers,r.up.set(0,1,0),r.lookAt(-1,0,0),this.add(r);const o=new Le(vi,yi,t,e);o.layers=this.layers,o.up.set(0,0,-1),o.lookAt(0,1,0),this.add(o);const a=new Le(vi,yi,t,e);a.layers=this.layers,a.up.set(0,0,1),a.lookAt(0,-1,0),this.add(a);const c=new Le(vi,yi,t,e);c.layers=this.layers,c.up.set(0,1,0),c.lookAt(0,0,1),this.add(c);const l=new Le(vi,yi,t,e);l.layers=this.layers,l.up.set(0,1,0),l.lookAt(0,0,-1),this.add(l)}update(t,e){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[i,r,o,a,c,l]=this.children,u=t.getRenderTarget(),f=t.toneMapping,h=t.xr.enabled;t.toneMapping=yn,t.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0),t.render(e,i),t.setRenderTarget(n,1),t.render(e,r),t.setRenderTarget(n,2),t.render(e,o),t.setRenderTarget(n,3),t.render(e,a),t.setRenderTarget(n,4),t.render(e,c),n.texture.generateMipmaps=d,t.setRenderTarget(n,5),t.render(e,l),t.setRenderTarget(u),t.toneMapping=f,t.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class tu extends De{constructor(t,e,n,i,r,o,a,c,l,u){t=t!==void 0?t:[],e=e!==void 0?e:Di,super(t,e,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Sf extends ei{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new tu(i,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Ue}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.encoding=e.encoding,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ni(5,5,5),r=new ii({name:"CubemapFromEquirect",uniforms:Fi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Re,blending:Ln});r.uniforms.tEquirect.value=e;const o=new ee(i,r),a=e.minFilter;return e.minFilter===fs&&(e.minFilter=Ue),new bf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,i){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(r)}}const po=new V,Ef=new V,Tf=new Pe;let Vn=class{constructor(t=new V(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const i=po.subVectors(n,e).cross(Ef.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(this.normal).multiplyScalar(-this.distanceToPoint(t)).add(t)}intersectLine(t,e){const n=t.delta(po),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(n).multiplyScalar(r).add(t.start)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Tf.getNormalMatrix(t),i=this.coplanarPoint(po).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}};const wi=new Er,Hs=new V;class ea{constructor(t=new Vn,e=new Vn,n=new Vn,i=new Vn,r=new Vn,o=new Vn){this.planes=[t,e,n,i,r,o]}set(t,e,n,i,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t){const e=this.planes,n=t.elements,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],d=n[9],g=n[10],m=n[11],p=n[12],x=n[13],_=n[14],w=n[15];return e[0].setComponents(a-i,f-c,m-h,w-p).normalize(),e[1].setComponents(a+i,f+c,m+h,w+p).normalize(),e[2].setComponents(a+r,f+l,m+d,w+x).normalize(),e[3].setComponents(a-r,f-l,m-d,w-x).normalize(),e[4].setComponents(a-o,f-u,m-g,w-_).normalize(),e[5].setComponents(a+o,f+u,m+g,w+_).normalize(),this}intersectsObject(t){const e=t.geometry;return e.boundingSphere===null&&e.computeBoundingSphere(),wi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSprite(t){return wi.center.set(0,0,0),wi.radius=.7071067811865476,wi.applyMatrix4(t.matrixWorld),this.intersectsSphere(wi)}intersectsSphere(t){const e=this.planes,n=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const i=e[n];if(Hs.x=i.normal.x>0?t.max.x:t.min.x,Hs.y=i.normal.y>0?t.max.y:t.min.y,Hs.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Hs)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function eu(){let s=null,t=!1,e=null,n=null;function i(r,o){e(r,o),n=s.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=s.requestAnimationFrame(i),t=!0)},stop:function(){s.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){s=r}}}function Af(s,t){const e=t.isWebGL2,n=new WeakMap;function i(l,u){const f=l.array,h=l.usage,d=s.createBuffer();s.bindBuffer(u,d),s.bufferData(u,f,h),l.onUploadCallback();let g;if(f instanceof Float32Array)g=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(e)g=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=5123;else if(f instanceof Int16Array)g=5122;else if(f instanceof Uint32Array)g=5125;else if(f instanceof Int32Array)g=5124;else if(f instanceof Int8Array)g=5120;else if(f instanceof Uint8Array)g=5121;else if(f instanceof Uint8ClampedArray)g=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function r(l,u,f){const h=u.array,d=u.updateRange;s.bindBuffer(f,l),d.count===-1?s.bufferSubData(f,0,h):(e?s.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):s.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1),u.onUploadCallback()}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(s.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,i(l,u)):f.version<l.version&&(r(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class ms extends me{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};const r=t/2,o=e/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,f=t/a,h=e/c,d=[],g=[],m=[],p=[];for(let x=0;x<u;x++){const _=x*h-o;for(let w=0;w<l;w++){const M=w*f-r;g.push(M,-_,0),m.push(0,0,1),p.push(w/a),p.push(1-x/c)}}for(let x=0;x<c;x++)for(let _=0;_<a;_++){const w=_+l*x,M=_+l*(x+1),y=_+1+l*(x+1),A=_+1+l*x;d.push(w,M,A),d.push(M,y,A)}this.setIndex(d),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(m,3)),this.setAttribute("uv",new jt(p,2))}static fromJSON(t){return new ms(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Lf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Pf=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Rf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Df=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,If=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Nf="vec3 transformed = vec3( position );",Ff=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zf=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
	float D = D_GGX( alpha, dotNH );
	return F * ( V * D );
}
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif`,Of=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Bf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,kf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Gf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Vf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Wf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,Xf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,jf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,Yf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,$f=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Zf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Kf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,td="gl_FragColor = linearToOutputTexel( gl_FragColor );",ed=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,id=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,rd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,od=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ad=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ld=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ud=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,hd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fd=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,dd=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,md=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,_d=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,xd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,vd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,yd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wd=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Md=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,bd=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Sd=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ed=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Td=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,Ad=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cd=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ld=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Pd=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,Rd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Dd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Id=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Nd=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Fd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Od=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Bd=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,Ud=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,kd=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,Gd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,Vd=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Hd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Xd=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,jd=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,Yd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,$d=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,Zd=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Kd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,Qd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ep=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,np=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,ip=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rp=`#if NUM_SPOT_LIGHT_COORDS > 0
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
  uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,op=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,ap=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,lp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,cp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,up=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,hp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fp=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,dp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,pp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,mp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,gp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,_p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,xp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,vp=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,yp=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,wp=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Mp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,bp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Sp=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,Ep=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Tp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Cp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Dp=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Ip=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Np=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,zp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Op=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Bp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Up=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,kp=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Vp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,qp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Xp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,jp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,$p=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Kp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Jp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Qp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,em=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,nm=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,im=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,sm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,rm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ct={alphamap_fragment:Cf,alphamap_pars_fragment:Lf,alphatest_fragment:Pf,alphatest_pars_fragment:Rf,aomap_fragment:Df,aomap_pars_fragment:If,begin_vertex:Nf,beginnormal_vertex:Ff,bsdfs:zf,iridescence_fragment:Of,bumpmap_pars_fragment:Bf,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:kf,clipping_planes_pars_vertex:Gf,clipping_planes_vertex:Vf,color_fragment:Hf,color_pars_fragment:Wf,color_pars_vertex:qf,color_vertex:Xf,common:jf,cube_uv_reflection_fragment:Yf,defaultnormal_vertex:$f,displacementmap_pars_vertex:Zf,displacementmap_vertex:Kf,emissivemap_fragment:Jf,emissivemap_pars_fragment:Qf,encodings_fragment:td,encodings_pars_fragment:ed,envmap_fragment:nd,envmap_common_pars_fragment:id,envmap_pars_fragment:sd,envmap_pars_vertex:rd,envmap_physical_pars_fragment:_d,envmap_vertex:od,fog_vertex:ad,fog_pars_vertex:ld,fog_fragment:cd,fog_pars_fragment:ud,gradientmap_pars_fragment:hd,lightmap_fragment:fd,lightmap_pars_fragment:dd,lights_lambert_fragment:pd,lights_lambert_pars_fragment:md,lights_pars_begin:gd,lights_toon_fragment:xd,lights_toon_pars_fragment:vd,lights_phong_fragment:yd,lights_phong_pars_fragment:wd,lights_physical_fragment:Md,lights_physical_pars_fragment:bd,lights_fragment_begin:Sd,lights_fragment_maps:Ed,lights_fragment_end:Td,logdepthbuf_fragment:Ad,logdepthbuf_pars_fragment:Cd,logdepthbuf_pars_vertex:Ld,logdepthbuf_vertex:Pd,map_fragment:Rd,map_pars_fragment:Dd,map_particle_fragment:Id,map_particle_pars_fragment:Nd,metalnessmap_fragment:Fd,metalnessmap_pars_fragment:zd,morphcolor_vertex:Od,morphnormal_vertex:Bd,morphtarget_pars_vertex:Ud,morphtarget_vertex:kd,normal_fragment_begin:Gd,normal_fragment_maps:Vd,normal_pars_fragment:Hd,normal_pars_vertex:Wd,normal_vertex:qd,normalmap_pars_fragment:Xd,clearcoat_normal_fragment_begin:jd,clearcoat_normal_fragment_maps:Yd,clearcoat_pars_fragment:$d,iridescence_pars_fragment:Zd,output_fragment:Kd,packing:Jd,premultiplied_alpha_fragment:Qd,project_vertex:tp,dithering_fragment:ep,dithering_pars_fragment:np,roughnessmap_fragment:ip,roughnessmap_pars_fragment:sp,shadowmap_pars_fragment:rp,shadowmap_pars_vertex:op,shadowmap_vertex:ap,shadowmask_pars_fragment:lp,skinbase_vertex:cp,skinning_pars_vertex:up,skinning_vertex:hp,skinnormal_vertex:fp,specularmap_fragment:dp,specularmap_pars_fragment:pp,tonemapping_fragment:mp,tonemapping_pars_fragment:gp,transmission_fragment:_p,transmission_pars_fragment:xp,uv_pars_fragment:vp,uv_pars_vertex:yp,uv_vertex:wp,uv2_pars_fragment:Mp,uv2_pars_vertex:bp,uv2_vertex:Sp,worldpos_vertex:Ep,background_vert:Tp,background_frag:Ap,backgroundCube_vert:Cp,backgroundCube_frag:Lp,cube_vert:Pp,cube_frag:Rp,depth_vert:Dp,depth_frag:Ip,distanceRGBA_vert:Np,distanceRGBA_frag:Fp,equirect_vert:zp,equirect_frag:Op,linedashed_vert:Bp,linedashed_frag:Up,meshbasic_vert:kp,meshbasic_frag:Gp,meshlambert_vert:Vp,meshlambert_frag:Hp,meshmatcap_vert:Wp,meshmatcap_frag:qp,meshnormal_vert:Xp,meshnormal_frag:jp,meshphong_vert:Yp,meshphong_frag:$p,meshphysical_vert:Zp,meshphysical_frag:Kp,meshtoon_vert:Jp,meshtoon_frag:Qp,points_vert:tm,points_frag:em,shadow_vert:nm,shadow_frag:im,sprite_vert:sm,sprite_frag:rm},ut={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new Pe},uv2Transform:{value:new Pe},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new Mt(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Mt(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new Pe}}},Qe={basic:{uniforms:ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.fog]),vertexShader:Ct.meshbasic_vert,fragmentShader:Ct.meshbasic_frag},lambert:{uniforms:ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshlambert_vert,fragmentShader:Ct.meshlambert_frag},phong:{uniforms:ve([ut.common,ut.specularmap,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,ut.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ct.meshphong_vert,fragmentShader:Ct.meshphong_frag},standard:{uniforms:ve([ut.common,ut.envmap,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.roughnessmap,ut.metalnessmap,ut.fog,ut.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag},toon:{uniforms:ve([ut.common,ut.aomap,ut.lightmap,ut.emissivemap,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.gradientmap,ut.fog,ut.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ct.meshtoon_vert,fragmentShader:Ct.meshtoon_frag},matcap:{uniforms:ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,ut.fog,{matcap:{value:null}}]),vertexShader:Ct.meshmatcap_vert,fragmentShader:Ct.meshmatcap_frag},points:{uniforms:ve([ut.points,ut.fog]),vertexShader:Ct.points_vert,fragmentShader:Ct.points_frag},dashed:{uniforms:ve([ut.common,ut.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ct.linedashed_vert,fragmentShader:Ct.linedashed_frag},depth:{uniforms:ve([ut.common,ut.displacementmap]),vertexShader:Ct.depth_vert,fragmentShader:Ct.depth_frag},normal:{uniforms:ve([ut.common,ut.bumpmap,ut.normalmap,ut.displacementmap,{opacity:{value:1}}]),vertexShader:Ct.meshnormal_vert,fragmentShader:Ct.meshnormal_frag},sprite:{uniforms:ve([ut.sprite,ut.fog]),vertexShader:Ct.sprite_vert,fragmentShader:Ct.sprite_frag},background:{uniforms:{uvTransform:{value:new Pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ct.background_vert,fragmentShader:Ct.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ct.backgroundCube_vert,fragmentShader:Ct.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ct.cube_vert,fragmentShader:Ct.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ct.equirect_vert,fragmentShader:Ct.equirect_frag},distanceRGBA:{uniforms:ve([ut.common,ut.displacementmap,{referencePosition:{value:new V},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ct.distanceRGBA_vert,fragmentShader:Ct.distanceRGBA_frag},shadow:{uniforms:ve([ut.lights,ut.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ct.shadow_vert,fragmentShader:Ct.shadow_frag}};Qe.physical={uniforms:ve([Qe.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new Mt(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new Mt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null}}]),vertexShader:Ct.meshphysical_vert,fragmentShader:Ct.meshphysical_frag};const Ws={r:0,b:0,g:0};function om(s,t,e,n,i,r,o){const a=new zt(0);let c=r===!0?0:1,l,u,f=null,h=0,d=null;function g(p,x){let _=!1,w=x.isScene===!0?x.background:null;w&&w.isTexture&&(w=(x.backgroundBlurriness>0?e:t).get(w));const M=s.xr,y=M.getSession&&M.getSession();y&&y.environmentBlendMode==="additive"&&(w=null),w===null?m(a,c):w&&w.isColor&&(m(w,1),_=!0),(s.autoClear||_)&&s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil),w&&(w.isCubeTexture||w.mapping===Sr)?(u===void 0&&(u=new ee(new ni(1,1,1),new ii({name:"BackgroundCubeMaterial",uniforms:Fi(Qe.backgroundCube.uniforms),vertexShader:Qe.backgroundCube.vertexShader,fragmentShader:Qe.backgroundCube.fragmentShader,side:Re,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,v){this.matrixWorld.copyPosition(v.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),u.material.uniforms.envMap.value=w,u.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.toneMapped=w.encoding!==Wt,(f!==w||h!==w.version||d!==s.toneMapping)&&(u.material.needsUpdate=!0,f=w,h=w.version,d=s.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):w&&w.isTexture&&(l===void 0&&(l=new ee(new ms(2,2),new ii({name:"BackgroundMaterial",uniforms:Fi(Qe.background.uniforms),vertexShader:Qe.background.vertexShader,fragmentShader:Qe.background.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=w,l.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,l.material.toneMapped=w.encoding!==Wt,w.matrixAutoUpdate===!0&&w.updateMatrix(),l.material.uniforms.uvTransform.value.copy(w.matrix),(f!==w||h!==w.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,f=w,h=w.version,d=s.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function m(p,x){p.getRGB(Ws,Jc(s)),n.buffers.color.setClear(Ws.r,Ws.g,Ws.b,x,o)}return{getClearColor:function(){return a},setClearColor:function(p,x=1){a.set(p),c=x,m(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,m(a,c)},render:g}}function am(s,t,e,n){const i=s.getParameter(34921),r=n.isWebGL2?null:t.get("OES_vertex_array_object"),o=n.isWebGL2||r!==null,a={},c=p(null);let l=c,u=!1;function f(P,I,F,B,G){let Y=!1;if(o){const J=m(B,F,I);l!==J&&(l=J,d(l.object)),Y=x(P,B,F,G),Y&&_(P,B,F,G)}else{const J=I.wireframe===!0;(l.geometry!==B.id||l.program!==F.id||l.wireframe!==J)&&(l.geometry=B.id,l.program=F.id,l.wireframe=J,Y=!0)}G!==null&&e.update(G,34963),(Y||u)&&(u=!1,v(P,I,F,B),G!==null&&s.bindBuffer(34963,e.get(G).buffer))}function h(){return n.isWebGL2?s.createVertexArray():r.createVertexArrayOES()}function d(P){return n.isWebGL2?s.bindVertexArray(P):r.bindVertexArrayOES(P)}function g(P){return n.isWebGL2?s.deleteVertexArray(P):r.deleteVertexArrayOES(P)}function m(P,I,F){const B=F.wireframe===!0;let G=a[P.id];G===void 0&&(G={},a[P.id]=G);let Y=G[I.id];Y===void 0&&(Y={},G[I.id]=Y);let J=Y[B];return J===void 0&&(J=p(h()),Y[B]=J),J}function p(P){const I=[],F=[],B=[];for(let G=0;G<i;G++)I[G]=0,F[G]=0,B[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:F,attributeDivisors:B,object:P,attributes:{},index:null}}function x(P,I,F,B){const G=l.attributes,Y=I.attributes;let J=0;const lt=F.getAttributes();for(const U in lt)if(lt[U].location>=0){const st=G[U];let rt=Y[U];if(rt===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(rt=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(rt=P.instanceColor)),st===void 0||st.attribute!==rt||rt&&st.data!==rt.data)return!0;J++}return l.attributesNum!==J||l.index!==B}function _(P,I,F,B){const G={},Y=I.attributes;let J=0;const lt=F.getAttributes();for(const U in lt)if(lt[U].location>=0){let st=Y[U];st===void 0&&(U==="instanceMatrix"&&P.instanceMatrix&&(st=P.instanceMatrix),U==="instanceColor"&&P.instanceColor&&(st=P.instanceColor));const rt={};rt.attribute=st,st&&st.data&&(rt.data=st.data),G[U]=rt,J++}l.attributes=G,l.attributesNum=J,l.index=B}function w(){const P=l.newAttributes;for(let I=0,F=P.length;I<F;I++)P[I]=0}function M(P){y(P,0)}function y(P,I){const F=l.newAttributes,B=l.enabledAttributes,G=l.attributeDivisors;F[P]=1,B[P]===0&&(s.enableVertexAttribArray(P),B[P]=1),G[P]!==I&&((n.isWebGL2?s:t.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](P,I),G[P]=I)}function A(){const P=l.newAttributes,I=l.enabledAttributes;for(let F=0,B=I.length;F<B;F++)I[F]!==P[F]&&(s.disableVertexAttribArray(F),I[F]=0)}function R(P,I,F,B,G,Y){n.isWebGL2===!0&&(F===5124||F===5125)?s.vertexAttribIPointer(P,I,F,G,Y):s.vertexAttribPointer(P,I,F,B,G,Y)}function v(P,I,F,B){if(n.isWebGL2===!1&&(P.isInstancedMesh||B.isInstancedBufferGeometry)&&t.get("ANGLE_instanced_arrays")===null)return;w();const G=B.attributes,Y=F.getAttributes(),J=I.defaultAttributeValues;for(const lt in Y){const U=Y[lt];if(U.location>=0){let Q=G[lt];if(Q===void 0&&(lt==="instanceMatrix"&&P.instanceMatrix&&(Q=P.instanceMatrix),lt==="instanceColor"&&P.instanceColor&&(Q=P.instanceColor)),Q!==void 0){const st=Q.normalized,rt=Q.itemSize,j=e.get(Q);if(j===void 0)continue;const q=j.buffer,et=j.type,ct=j.bytesPerElement;if(Q.isInterleavedBufferAttribute){const ot=Q.data,At=ot.stride,bt=Q.offset;if(ot.isInstancedInterleavedBuffer){for(let St=0;St<U.locationSize;St++)y(U.location+St,ot.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let St=0;St<U.locationSize;St++)M(U.location+St);s.bindBuffer(34962,q);for(let St=0;St<U.locationSize;St++)R(U.location+St,rt/U.locationSize,et,st,At*ct,(bt+rt/U.locationSize*St)*ct)}else{if(Q.isInstancedBufferAttribute){for(let ot=0;ot<U.locationSize;ot++)y(U.location+ot,Q.meshPerAttribute);P.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ot=0;ot<U.locationSize;ot++)M(U.location+ot);s.bindBuffer(34962,q);for(let ot=0;ot<U.locationSize;ot++)R(U.location+ot,rt/U.locationSize,et,st,rt*ct,rt/U.locationSize*ot*ct)}}else if(J!==void 0){const st=J[lt];if(st!==void 0)switch(st.length){case 2:s.vertexAttrib2fv(U.location,st);break;case 3:s.vertexAttrib3fv(U.location,st);break;case 4:s.vertexAttrib4fv(U.location,st);break;default:s.vertexAttrib1fv(U.location,st)}}}}A()}function S(){O();for(const P in a){const I=a[P];for(const F in I){const B=I[F];for(const G in B)g(B[G].object),delete B[G];delete I[F]}delete a[P]}}function C(P){if(a[P.id]===void 0)return;const I=a[P.id];for(const F in I){const B=I[F];for(const G in B)g(B[G].object),delete B[G];delete I[F]}delete a[P.id]}function z(P){for(const I in a){const F=a[I];if(F[P.id]===void 0)continue;const B=F[P.id];for(const G in B)g(B[G].object),delete B[G];delete F[P.id]}}function O(){E(),u=!0,l!==c&&(l=c,d(l.object))}function E(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:O,resetDefaultState:E,dispose:S,releaseStatesOfGeometry:C,releaseStatesOfProgram:z,initAttributes:w,enableAttribute:M,disableUnusedAttributes:A}}function lm(s,t,e,n){const i=n.isWebGL2;let r;function o(l){r=l}function a(l,u){s.drawArrays(r,l,u),e.update(u,r,1)}function c(l,u,f){if(f===0)return;let h,d;if(i)h=s,d="drawArraysInstanced";else if(h=t.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](r,l,u,f),e.update(u,r,f)}this.setMode=o,this.render=a,this.renderInstances=c}function cm(s,t,e){let n;function i(){if(n!==void 0)return n;if(t.has("EXT_texture_filter_anisotropic")===!0){const R=t.get("EXT_texture_filter_anisotropic");n=s.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function r(R){if(R==="highp"){if(s.getShaderPrecisionFormat(35633,36338).precision>0&&s.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&s.getShaderPrecisionFormat(35633,36337).precision>0&&s.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&s instanceof WebGL2RenderingContext;let a=e.precision!==void 0?e.precision:"highp";const c=r(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||t.has("WEBGL_draw_buffers"),u=e.logarithmicDepthBuffer===!0,f=s.getParameter(34930),h=s.getParameter(35660),d=s.getParameter(3379),g=s.getParameter(34076),m=s.getParameter(34921),p=s.getParameter(36347),x=s.getParameter(36348),_=s.getParameter(36349),w=h>0,M=o||t.has("OES_texture_float"),y=w&&M,A=o?s.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:i,getMaxPrecision:r,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:p,maxVaryings:x,maxFragmentUniforms:_,vertexTextures:w,floatFragmentTextures:M,floatVertexTextures:y,maxSamples:A}}function um(s){const t=this;let e=null,n=0,i=!1,r=!1;const o=new Vn,a=new Pe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const d=f.length!==0||h||n!==0||i;return i=h,n=f.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,h){e=u(f,h,0)},this.setState=function(f,h,d){const g=f.clippingPlanes,m=f.clipIntersection,p=f.clipShadows,x=s.get(f);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const _=r?0:n,w=_*4;let M=x.clippingState||null;c.value=M,M=u(g,h,w,d);for(let y=0;y!==w;++y)M[y]=e[y];x.clippingState=M,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=_}};function l(){c.value!==e&&(c.value=e,c.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(f,h,d,g){const m=f!==null?f.length:0;let p=null;if(m!==0){if(p=c.value,g!==!0||p===null){const x=d+m*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(p===null||p.length<x)&&(p=new Float32Array(x));for(let w=0,M=d;w!==m;++w,M+=4)o.copy(f[w]).applyMatrix4(_,a),o.normal.toArray(p,M),p[M+3]=o.constant}c.value=p,c.needsUpdate=!0}return t.numPlanes=m,t.numIntersection=0,p}}function hm(s){let t=new WeakMap;function e(o,a){return a===Fo?o.mapping=Di:a===zo&&(o.mapping=Ii),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Fo||a===zo)if(t.has(o)){const c=t.get(o).texture;return e(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Sf(c.height/2);return l.fromEquirectangularTexture(s,o),t.set(o,l),o.addEventListener("dispose",i),e(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=t.get(a);c!==void 0&&(t.delete(a),c.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class nu extends Qc{constructor(t=-1,e=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=i+e,c=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ti=4,ml=[.125,.215,.35,.446,.526,.582],Wn=20,mo=new nu,gl=new zt;let go=null;const Hn=(1+Math.sqrt(5))/2,Mi=1/Hn,_l=[new V(1,1,1),new V(-1,1,1),new V(1,1,-1),new V(-1,1,-1),new V(0,Hn,Mi),new V(0,Hn,-Mi),new V(Mi,0,Hn),new V(-Mi,0,Hn),new V(Hn,Mi,0),new V(-Hn,Mi,0)];class xl{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,i=100){go=this._renderer.getRenderTarget(),this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,i,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(go),t.scissorTest=!1,qs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Di||t.mapping===Ii?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),go=this._renderer.getRenderTarget();const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Ue,minFilter:Ue,generateMipmaps:!1,type:ds,format:qe,encoding:ti,depthBuffer:!1},i=vl(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=vl(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=fm(r)),this._blurMaterial=dm(r,t,e)}return i}_compileMaterial(t){const e=new ee(this._lodPlanes[0],t);this._renderer.compile(e,mo)}_sceneToCubeUV(t,e,n,i){const a=new Le(90,1,e,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(gl),u.toneMapping=yn,u.autoClear=!1;const d=new ta({name:"PMREM.Background",side:Re,depthWrite:!1,depthTest:!1}),g=new ee(new ni,d);let m=!1;const p=t.background;p?p.isColor&&(d.color.copy(p),t.background=null,m=!0):(d.color.copy(gl),m=!0);for(let x=0;x<6;x++){const _=x%3;_===0?(a.up.set(0,c[x],0),a.lookAt(l[x],0,0)):_===1?(a.up.set(0,0,c[x]),a.lookAt(0,l[x],0)):(a.up.set(0,c[x],0),a.lookAt(0,0,l[x]));const w=this._cubeSize;qs(i,_*w,x>2?w:0,w,w),u.setRenderTarget(i),m&&u.render(g,a),u.render(t,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,t.background=p}_textureToCubeUV(t,e){const n=this._renderer,i=t.mapping===Di||t.mapping===Ii;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yl());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ee(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const c=this._cubeSize;qs(e,0,0,3*c,2*c),n.setRenderTarget(e),n.render(o,mo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;for(let i=1;i<this._lodPlanes.length;i++){const r=Math.sqrt(this._sigmas[i]*this._sigmas[i]-this._sigmas[i-1]*this._sigmas[i-1]),o=_l[(i-1)%_l.length];this._blur(t,i-1,i,r,o)}e.autoClear=n}_blur(t,e,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",r),this._halfBlur(o,t,n,n,i,"longitudinal",r)}_halfBlur(t,e,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ee(this._lodPlanes[i],l),h=l.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*Wn-1),m=r/g,p=isFinite(r)?1+Math.floor(u*m):Wn;p>Wn&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);const x=[];let _=0;for(let R=0;R<Wn;++R){const v=R/m,S=Math.exp(-v*v/2);x.push(S),R===0?_+=S:R<p&&(_+=2*S)}for(let R=0;R<x.length;R++)x[R]=x[R]/_;h.envMap.value=t.texture,h.samples.value=p,h.weights.value=x,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:w}=this;h.dTheta.value=g,h.mipInt.value=w-n;const M=this._sizeLods[i],y=3*M*(i>w-Ti?i-w+Ti:0),A=4*(this._cubeSize-M);qs(e,y,A,3*M,2*M),c.setRenderTarget(e),c.render(f,mo)}}function fm(s){const t=[],e=[],n=[];let i=s;const r=s-Ti+1+ml.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);e.push(a);let c=1/a;o>s-Ti?c=ml[o-s+Ti-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,g=6,m=3,p=2,x=1,_=new Float32Array(m*g*d),w=new Float32Array(p*g*d),M=new Float32Array(x*g*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,v=A>2?0:-1,S=[R,v,0,R+2/3,v,0,R+2/3,v+1,0,R,v,0,R+2/3,v+1,0,R,v+1,0];_.set(S,m*g*A),w.set(h,p*g*A);const C=[A,A,A,A,A,A];M.set(C,x*g*A)}const y=new me;y.setAttribute("position",new Ie(_,m)),y.setAttribute("uv",new Ie(w,p)),y.setAttribute("faceIndex",new Ie(M,x)),t.push(y),i>Ti&&i--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function vl(s,t,e){const n=new ei(s,t,e);return n.texture.mapping=Sr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function qs(s,t,e,n,i){s.viewport.set(t,e,n,i),s.scissor.set(t,e,n,i)}function dm(s,t,e){const n=new Float32Array(Wn),i=new V(0,1,0);return new ii({name:"SphericalGaussianBlur",defines:{n:Wn,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function yl(){return new ii({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function wl(){return new ii({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:na(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ln,depthTest:!1,depthWrite:!1})}function na(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function pm(s){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===Fo||c===zo,u=c===Di||c===Ii;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=t.get(a);return e===null&&(e=new xl(s)),f=l?e.fromEquirectangular(a,f):e.fromCubemap(a,f),t.set(a,f),f.texture}else{if(t.has(a))return t.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&i(f)){e===null&&(e=new xl(s));const h=l?e.fromEquirectangular(a):e.fromCubemap(a);return t.set(a,h),a.addEventListener("dispose",r),h.texture}else return null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=t.get(c);l!==void 0&&(t.delete(c),l.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function mm(s){const t={};function e(n){if(t[n]!==void 0)return t[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(n){n.isWebGL2?e("EXT_color_buffer_float"):(e("WEBGL_depth_texture"),e("OES_texture_float"),e("OES_texture_half_float"),e("OES_texture_half_float_linear"),e("OES_standard_derivatives"),e("OES_element_index_uint"),e("OES_vertex_array_object"),e("ANGLE_instanced_arrays")),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture")},get:function(n){const i=e(n);return i===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function gm(s,t,e,n){const i={},r=new WeakMap;function o(f){const h=f.target;h.index!==null&&t.remove(h.index);for(const g in h.attributes)t.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete i[h.id];const d=r.get(h);d&&(t.remove(d),r.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,e.memory.geometries--}function a(f,h){return i[h.id]===!0||(h.addEventListener("dispose",o),i[h.id]=!0,e.memory.geometries++),h}function c(f){const h=f.attributes;for(const g in h)t.update(h[g],34962);const d=f.morphAttributes;for(const g in d){const m=d[g];for(let p=0,x=m.length;p<x;p++)t.update(m[p],34962)}}function l(f){const h=[],d=f.index,g=f.attributes.position;let m=0;if(d!==null){const _=d.array;m=d.version;for(let w=0,M=_.length;w<M;w+=3){const y=_[w+0],A=_[w+1],R=_[w+2];h.push(y,A,A,R,R,y)}}else{const _=g.array;m=g.version;for(let w=0,M=_.length/3-1;w<M;w+=3){const y=w+0,A=w+1,R=w+2;h.push(y,A,A,R,R,y)}}const p=new(Hc(h)?Kc:Zc)(h,1);p.version=m;const x=r.get(f);x&&t.remove(x),r.set(f,p)}function u(f){const h=r.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return r.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function _m(s,t,e,n){const i=n.isWebGL2;let r;function o(h){r=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,d){s.drawElements(r,d,a,h*c),e.update(d,r,1)}function f(h,d,g){if(g===0)return;let m,p;if(i)m=s,p="drawElementsInstanced";else if(m=t.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",m===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}m[p](r,d,a,h*c,g),e.update(d,r,g)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function xm(s){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case 4:e.triangles+=a*(r/3);break;case 1:e.lines+=a*(r/2);break;case 3:e.lines+=a*(r-1);break;case 2:e.lines+=a*r;break;case 0:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){e.frame++,e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function vm(s,t){return s[0]-t[0]}function ym(s,t){return Math.abs(t[1])-Math.abs(s[1])}function wm(s,t,e){const n={},i=new Float32Array(8),r=new WeakMap,o=new ce,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,h){const d=l.morphTargetInfluences;if(t.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,p=m!==void 0?m.length:0;let x=r.get(u);if(x===void 0||x.count!==p){let F=function(){P.dispose(),r.delete(u),u.removeEventListener("dispose",F)};var g=F;x!==void 0&&x.texture.dispose();const M=u.morphAttributes.position!==void 0,y=u.morphAttributes.normal!==void 0,A=u.morphAttributes.color!==void 0,R=u.morphAttributes.position||[],v=u.morphAttributes.normal||[],S=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),y===!0&&(C=2),A===!0&&(C=3);let z=u.attributes.position.count*C,O=1;z>t.maxTextureSize&&(O=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const E=new Float32Array(z*O*4*p),P=new jc(E,z,O,p);P.type=jn,P.needsUpdate=!0;const I=C*4;for(let B=0;B<p;B++){const G=R[B],Y=v[B],J=S[B],lt=z*O*4*B;for(let U=0;U<G.count;U++){const Q=U*I;M===!0&&(o.fromBufferAttribute(G,U),E[lt+Q+0]=o.x,E[lt+Q+1]=o.y,E[lt+Q+2]=o.z,E[lt+Q+3]=0),y===!0&&(o.fromBufferAttribute(Y,U),E[lt+Q+4]=o.x,E[lt+Q+5]=o.y,E[lt+Q+6]=o.z,E[lt+Q+7]=0),A===!0&&(o.fromBufferAttribute(J,U),E[lt+Q+8]=o.x,E[lt+Q+9]=o.y,E[lt+Q+10]=o.z,E[lt+Q+11]=J.itemSize===4?o.w:1)}}x={count:p,texture:P,size:new Mt(z,O)},r.set(u,x),u.addEventListener("dispose",F)}let _=0;for(let M=0;M<d.length;M++)_+=d[M];const w=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(s,"morphTargetBaseInfluence",w),h.getUniforms().setValue(s,"morphTargetInfluences",d),h.getUniforms().setValue(s,"morphTargetsTexture",x.texture,e),h.getUniforms().setValue(s,"morphTargetsTextureSize",x.size)}else{const m=d===void 0?0:d.length;let p=n[u.id];if(p===void 0||p.length!==m){p=[];for(let y=0;y<m;y++)p[y]=[y,0];n[u.id]=p}for(let y=0;y<m;y++){const A=p[y];A[0]=y,A[1]=d[y]}p.sort(ym);for(let y=0;y<8;y++)y<m&&p[y][1]?(a[y][0]=p[y][0],a[y][1]=p[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(vm);const x=u.morphAttributes.position,_=u.morphAttributes.normal;let w=0;for(let y=0;y<8;y++){const A=a[y],R=A[0],v=A[1];R!==Number.MAX_SAFE_INTEGER&&v?(x&&u.getAttribute("morphTarget"+y)!==x[R]&&u.setAttribute("morphTarget"+y,x[R]),_&&u.getAttribute("morphNormal"+y)!==_[R]&&u.setAttribute("morphNormal"+y,_[R]),i[y]=v,w+=v):(x&&u.hasAttribute("morphTarget"+y)===!0&&u.deleteAttribute("morphTarget"+y),_&&u.hasAttribute("morphNormal"+y)===!0&&u.deleteAttribute("morphNormal"+y),i[y]=0)}const M=u.morphTargetsRelative?1:1-w;h.getUniforms().setValue(s,"morphTargetBaseInfluence",M),h.getUniforms().setValue(s,"morphTargetInfluences",i)}}return{update:c}}function Mm(s,t,e,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,f=t.get(c,u);return i.get(f)!==l&&(t.update(f),i.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),e.update(c.instanceMatrix,34962),c.instanceColor!==null&&e.update(c.instanceColor,34962)),f}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:o}}const iu=new De,su=new jc,ru=new lf,ou=new tu,Ml=[],bl=[],Sl=new Float32Array(16),El=new Float32Array(9),Tl=new Float32Array(4);function Gi(s,t,e){const n=s[0];if(n<=0||n>0)return s;const i=t*e;let r=Ml[i];if(r===void 0&&(r=new Float32Array(i),Ml[i]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,s[o].toArray(r,a)}return r}function se(s,t){if(s.length!==t.length)return!1;for(let e=0,n=s.length;e<n;e++)if(s[e]!==t[e])return!1;return!0}function re(s,t){for(let e=0,n=t.length;e<n;e++)s[e]=t[e]}function Ar(s,t){let e=bl[t];e===void 0&&(e=new Int32Array(t),bl[t]=e);for(let n=0;n!==t;++n)e[n]=s.allocateTextureUnit();return e}function bm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1f(this.addr,t),e[0]=t)}function Sm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2fv(this.addr,t),re(e,t)}}function Em(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(s.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(se(e,t))return;s.uniform3fv(this.addr,t),re(e,t)}}function Tm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4fv(this.addr,t),re(e,t)}}function Am(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix2fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Tl.set(n),s.uniformMatrix2fv(this.addr,!1,Tl),re(e,n)}}function Cm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix3fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;El.set(n),s.uniformMatrix3fv(this.addr,!1,El),re(e,n)}}function Lm(s,t){const e=this.cache,n=t.elements;if(n===void 0){if(se(e,t))return;s.uniformMatrix4fv(this.addr,!1,t),re(e,t)}else{if(se(e,n))return;Sl.set(n),s.uniformMatrix4fv(this.addr,!1,Sl),re(e,n)}}function Pm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1i(this.addr,t),e[0]=t)}function Rm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2iv(this.addr,t),re(e,t)}}function Dm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;s.uniform3iv(this.addr,t),re(e,t)}}function Im(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4iv(this.addr,t),re(e,t)}}function Nm(s,t){const e=this.cache;e[0]!==t&&(s.uniform1ui(this.addr,t),e[0]=t)}function Fm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(s.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(se(e,t))return;s.uniform2uiv(this.addr,t),re(e,t)}}function zm(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(s.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(se(e,t))return;s.uniform3uiv(this.addr,t),re(e,t)}}function Om(s,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(s.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(se(e,t))return;s.uniform4uiv(this.addr,t),re(e,t)}}function Bm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2D(t||iu,i)}function Um(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||ru,i)}function km(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||ou,i)}function Gm(s,t,e){const n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||su,i)}function Vm(s){switch(s){case 5126:return bm;case 35664:return Sm;case 35665:return Em;case 35666:return Tm;case 35674:return Am;case 35675:return Cm;case 35676:return Lm;case 5124:case 35670:return Pm;case 35667:case 35671:return Rm;case 35668:case 35672:return Dm;case 35669:case 35673:return Im;case 5125:return Nm;case 36294:return Fm;case 36295:return zm;case 36296:return Om;case 35678:case 36198:case 36298:case 36306:case 35682:return Bm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return km;case 36289:case 36303:case 36311:case 36292:return Gm}}function Hm(s,t){s.uniform1fv(this.addr,t)}function Wm(s,t){const e=Gi(t,this.size,2);s.uniform2fv(this.addr,e)}function qm(s,t){const e=Gi(t,this.size,3);s.uniform3fv(this.addr,e)}function Xm(s,t){const e=Gi(t,this.size,4);s.uniform4fv(this.addr,e)}function jm(s,t){const e=Gi(t,this.size,4);s.uniformMatrix2fv(this.addr,!1,e)}function Ym(s,t){const e=Gi(t,this.size,9);s.uniformMatrix3fv(this.addr,!1,e)}function $m(s,t){const e=Gi(t,this.size,16);s.uniformMatrix4fv(this.addr,!1,e)}function Zm(s,t){s.uniform1iv(this.addr,t)}function Km(s,t){s.uniform2iv(this.addr,t)}function Jm(s,t){s.uniform3iv(this.addr,t)}function Qm(s,t){s.uniform4iv(this.addr,t)}function tg(s,t){s.uniform1uiv(this.addr,t)}function eg(s,t){s.uniform2uiv(this.addr,t)}function ng(s,t){s.uniform3uiv(this.addr,t)}function ig(s,t){s.uniform4uiv(this.addr,t)}function sg(s,t,e){const n=this.cache,i=t.length,r=Ar(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture2D(t[o]||iu,r[o])}function rg(s,t,e){const n=this.cache,i=t.length,r=Ar(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||ru,r[o])}function og(s,t,e){const n=this.cache,i=t.length,r=Ar(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||ou,r[o])}function ag(s,t,e){const n=this.cache,i=t.length,r=Ar(e,i);se(n,r)||(s.uniform1iv(this.addr,r),re(n,r));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||su,r[o])}function lg(s){switch(s){case 5126:return Hm;case 35664:return Wm;case 35665:return qm;case 35666:return Xm;case 35674:return jm;case 35675:return Ym;case 35676:return $m;case 5124:case 35670:return Zm;case 35667:case 35671:return Km;case 35668:case 35672:return Jm;case 35669:case 35673:return Qm;case 5125:return tg;case 36294:return eg;case 36295:return ng;case 36296:return ig;case 35678:case 36198:case 36298:case 36306:case 35682:return sg;case 35679:case 36299:case 36307:return rg;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return ag}}class cg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.setValue=Vm(e.type)}}class ug{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.size=e.size,this.setValue=lg(e.type)}}class hg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(t,e[a.id],n)}}}const _o=/(\w+)(\])?(\[|\.)?/g;function Al(s,t){s.seq.push(t),s.map[t.id]=t}function fg(s,t,e){const n=s.name,i=n.length;for(_o.lastIndex=0;;){const r=_o.exec(n),o=_o.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Al(e,l===void 0?new cg(a,s,t):new ug(a,s,t));break}else{let f=e.map[a];f===void 0&&(f=new hg(a),Al(e,f)),e=f}}}class or{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,35718);for(let i=0;i<n;++i){const r=t.getActiveUniform(e,i),o=t.getUniformLocation(e,r.name);fg(r,o,this)}}setValue(t,e,n,i){const r=this.map[e];r!==void 0&&r.setValue(t,n,i)}setOptional(t,e,n){const i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let r=0,o=e.length;r!==o;++r){const a=e[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(t,c.value,i)}}static seqWithValue(t,e){const n=[];for(let i=0,r=t.length;i!==r;++i){const o=t[i];o.id in e&&n.push(o)}return n}}function Cl(s,t,e){const n=s.createShader(t);return s.shaderSource(n,e),s.compileShader(n),n}let dg=0;function pg(s,t){const e=s.split(`
`),n=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}function mg(s){switch(s){case ti:return["Linear","( value )"];case Wt:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",s),["Linear","( value )"]}}function Ll(s,t,e){const n=s.getShaderParameter(t,35713),i=s.getShaderInfoLog(t).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+i+`

`+pg(s.getShaderSource(t),o)}else return i}function gg(s,t){const e=mg(t);return"vec4 "+s+"( vec4 value ) { return LinearTo"+e[0]+e[1]+"; }"}function _g(s,t){let e;switch(t){case Nh:e="Linear";break;case Fh:e="Reinhard";break;case zh:e="OptimizedCineon";break;case Oh:e="ACESFilmic";break;case Bh:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+s+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function xg(s){return[s.extensionDerivatives||s.envMapCubeUVHeight||s.bumpMap||s.tangentSpaceNormalMap||s.clearcoatNormalMap||s.flatShading||s.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(s.extensionFragDepth||s.logarithmicDepthBuffer)&&s.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",s.extensionDrawBuffers&&s.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(s.extensionShaderTextureLOD||s.envMap||s.transmission)&&s.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(rs).join(`
`)}function vg(s){const t=[];for(const e in s){const n=s[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function yg(s,t){const e={},n=s.getProgramParameter(t,35721);for(let i=0;i<n;i++){const r=s.getActiveAttrib(t,i),o=r.name;let a=1;r.type===35674&&(a=2),r.type===35675&&(a=3),r.type===35676&&(a=4),e[o]={type:r.type,location:s.getAttribLocation(t,o),locationSize:a}}return e}function rs(s){return s!==""}function Pl(s,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rl(s,t){return s.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Go(s){return s.replace(wg,Mg)}function Mg(s,t){const e=Ct[t];if(e===void 0)throw new Error("Can not resolve #include <"+t+">");return Go(e)}const bg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Dl(s){return s.replace(bg,Sg)}function Sg(s,t,e,n){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Il(s){let t="precision "+s.precision+` float;
precision `+s.precision+" int;";return s.precision==="highp"?t+=`
#define HIGH_PRECISION`:s.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Eg(s){let t="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Bc?t="SHADOWMAP_TYPE_PCF":s.shadowMapType===fh?t="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===ss&&(t="SHADOWMAP_TYPE_VSM"),t}function Tg(s){let t="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case Di:case Ii:t="ENVMAP_TYPE_CUBE";break;case Sr:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Ag(s){let t="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case Ii:t="ENVMAP_MODE_REFRACTION";break}return t}function Cg(s){let t="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case br:t="ENVMAP_BLENDING_MULTIPLY";break;case Dh:t="ENVMAP_BLENDING_MIX";break;case Ih:t="ENVMAP_BLENDING_ADD";break}return t}function Lg(s){const t=s.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Pg(s,t,e,n){const i=s.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const c=Eg(e),l=Tg(e),u=Ag(e),f=Cg(e),h=Lg(e),d=e.isWebGL2?"":xg(e),g=vg(r),m=i.createProgram();let p,x,_=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=[g].filter(rs).join(`
`),p.length>0&&(p+=`
`),x=[d,g].filter(rs).join(`
`),x.length>0&&(x+=`
`)):(p=[Il(e),"#define SHADER_NAME "+e.shaderName,g,e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.supportsVertexTextures?"#define VERTEX_TEXTURES":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.displacementMap&&e.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors&&e.isWebGL2?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0&&e.isWebGL2?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(rs).join(`
`),x=[d,Il(e),"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+u:"",e.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMap&&e.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",e.normalMap&&e.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",e.specularColorMap?"#define USE_SPECULARCOLORMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEENCOLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.vertexTangents?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUvs?"#define USE_UV":"",e.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+c:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.logarithmicDepthBuffer&&e.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==yn?"#define TONE_MAPPING":"",e.toneMapping!==yn?Ct.tonemapping_pars_fragment:"",e.toneMapping!==yn?_g("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ct.encodings_pars_fragment,gg("linearToOutputTexel",e.outputEncoding),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(rs).join(`
`)),o=Go(o),o=Pl(o,e),o=Rl(o,e),a=Go(a),a=Pl(a,e),a=Rl(a,e),o=Dl(o),a=Dl(a),e.isWebGL2&&e.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,x=["#define varying in",e.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const w=_+p+o,M=_+x+a,y=Cl(i,35633,w),A=Cl(i,35632,M);if(i.attachShader(m,y),i.attachShader(m,A),e.index0AttributeName!==void 0?i.bindAttribLocation(m,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m),s.debug.checkShaderErrors){const S=i.getProgramInfoLog(m).trim(),C=i.getShaderInfoLog(y).trim(),z=i.getShaderInfoLog(A).trim();let O=!0,E=!0;if(i.getProgramParameter(m,35714)===!1){O=!1;const P=Ll(i,y,"vertex"),I=Ll(i,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,35715)+`

Program Info Log: `+S+`
`+P+`
`+I)}else S!==""?console.warn("THREE.WebGLProgram: Program Info Log:",S):(C===""||z==="")&&(E=!1);E&&(this.diagnostics={runnable:O,programLog:S,vertexShader:{log:C,prefix:p},fragmentShader:{log:z,prefix:x}})}i.deleteShader(y),i.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new or(i,m)),R};let v;return this.getAttributes=function(){return v===void 0&&(v=yg(i,m)),v},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.name=e.shaderName,this.id=dg++,this.cacheKey=t,this.usedTimes=1,this.program=m,this.vertexShader=y,this.fragmentShader=A,this}let Rg=0;class Dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Ig(t),e.set(t,n)),n}}class Ig{constructor(t){this.id=Rg++,this.code=t,this.usedTimes=0}}function Ng(s,t,e,n,i,r,o){const a=new $c,c=new Dg,l=[],u=i.isWebGL2,f=i.logarithmicDepthBuffer,h=i.vertexTextures;let d=i.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v,S,C,z,O){const E=z.fog,P=O.geometry,I=v.isMeshStandardMaterial?z.environment:null,F=(v.isMeshStandardMaterial?e:t).get(v.envMap||I),B=F&&F.mapping===Sr?F.image.height:null,G=g[v.type];v.precision!==null&&(d=i.getMaxPrecision(v.precision),d!==v.precision&&console.warn("THREE.WebGLProgram.getParameters:",v.precision,"not supported, using",d,"instead."));const Y=P.morphAttributes.position||P.morphAttributes.normal||P.morphAttributes.color,J=Y!==void 0?Y.length:0;let lt=0;P.morphAttributes.position!==void 0&&(lt=1),P.morphAttributes.normal!==void 0&&(lt=2),P.morphAttributes.color!==void 0&&(lt=3);let U,Q,st,rt;if(G){const At=Qe[G];U=At.vertexShader,Q=At.fragmentShader}else U=v.vertexShader,Q=v.fragmentShader,c.update(v),st=c.getVertexShaderID(v),rt=c.getFragmentShaderID(v);const j=s.getRenderTarget(),q=v.alphaTest>0,et=v.clearcoat>0,ct=v.iridescence>0;return{isWebGL2:u,shaderID:G,shaderName:v.type,vertexShader:U,fragmentShader:Q,defines:v.defines,customVertexShaderID:st,customFragmentShaderID:rt,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:d,instancing:O.isInstancedMesh===!0,instancingColor:O.isInstancedMesh===!0&&O.instanceColor!==null,supportsVertexTextures:h,outputEncoding:j===null?s.outputEncoding:j.isXRRenderTarget===!0?j.texture.encoding:ti,map:!!v.map,matcap:!!v.matcap,envMap:!!F,envMapMode:F&&F.mapping,envMapCubeUVHeight:B,lightMap:!!v.lightMap,aoMap:!!v.aoMap,emissiveMap:!!v.emissiveMap,bumpMap:!!v.bumpMap,normalMap:!!v.normalMap,objectSpaceNormalMap:v.normalMapType===sf,tangentSpaceNormalMap:v.normalMapType===Qo,decodeVideoTexture:!!v.map&&v.map.isVideoTexture===!0&&v.map.encoding===Wt,clearcoat:et,clearcoatMap:et&&!!v.clearcoatMap,clearcoatRoughnessMap:et&&!!v.clearcoatRoughnessMap,clearcoatNormalMap:et&&!!v.clearcoatNormalMap,iridescence:ct,iridescenceMap:ct&&!!v.iridescenceMap,iridescenceThicknessMap:ct&&!!v.iridescenceThicknessMap,displacementMap:!!v.displacementMap,roughnessMap:!!v.roughnessMap,metalnessMap:!!v.metalnessMap,specularMap:!!v.specularMap,specularIntensityMap:!!v.specularIntensityMap,specularColorMap:!!v.specularColorMap,opaque:v.transparent===!1&&v.blending===Ci,alphaMap:!!v.alphaMap,alphaTest:q,gradientMap:!!v.gradientMap,sheen:v.sheen>0,sheenColorMap:!!v.sheenColorMap,sheenRoughnessMap:!!v.sheenRoughnessMap,transmission:v.transmission>0,transmissionMap:!!v.transmissionMap,thicknessMap:!!v.thicknessMap,combine:v.combine,vertexTangents:!!v.normalMap&&!!P.attributes.tangent,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!P.attributes.color&&P.attributes.color.itemSize===4,vertexUvs:!!v.map||!!v.bumpMap||!!v.normalMap||!!v.specularMap||!!v.alphaMap||!!v.emissiveMap||!!v.roughnessMap||!!v.metalnessMap||!!v.clearcoatMap||!!v.clearcoatRoughnessMap||!!v.clearcoatNormalMap||!!v.iridescenceMap||!!v.iridescenceThicknessMap||!!v.displacementMap||!!v.transmissionMap||!!v.thicknessMap||!!v.specularIntensityMap||!!v.specularColorMap||!!v.sheenColorMap||!!v.sheenRoughnessMap,uvsVertexOnly:!(v.map||v.bumpMap||v.normalMap||v.specularMap||v.alphaMap||v.emissiveMap||v.roughnessMap||v.metalnessMap||v.clearcoatNormalMap||v.iridescenceMap||v.iridescenceThicknessMap||v.transmission>0||v.transmissionMap||v.thicknessMap||v.specularIntensityMap||v.specularColorMap||v.sheen>0||v.sheenColorMap||v.sheenRoughnessMap)&&!!v.displacementMap,fog:!!E,useFog:v.fog===!0,fogExp2:E&&E.isFogExp2,flatShading:!!v.flatShading,sizeAttenuation:v.sizeAttenuation,logarithmicDepthBuffer:f,skinning:O.isSkinnedMesh===!0,morphTargets:P.morphAttributes.position!==void 0,morphNormals:P.morphAttributes.normal!==void 0,morphColors:P.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:lt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&C.length>0,shadowMapType:s.shadowMap.type,toneMapping:v.toneMapped?s.toneMapping:yn,physicallyCorrectLights:s.physicallyCorrectLights,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Cn,flipSided:v.side===Re,useDepthPacking:!!v.depthPacking,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionDerivatives:v.extensions&&v.extensions.derivatives,extensionFragDepth:v.extensions&&v.extensions.fragDepth,extensionDrawBuffers:v.extensions&&v.extensions.drawBuffers,extensionShaderTextureLOD:v.extensions&&v.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:v.customProgramCacheKey()}}function p(v){const S=[];if(v.shaderID?S.push(v.shaderID):(S.push(v.customVertexShaderID),S.push(v.customFragmentShaderID)),v.defines!==void 0)for(const C in v.defines)S.push(C),S.push(v.defines[C]);return v.isRawShaderMaterial===!1&&(x(S,v),_(S,v),S.push(s.outputEncoding)),S.push(v.customProgramCacheKey),S.join()}function x(v,S){v.push(S.precision),v.push(S.outputEncoding),v.push(S.envMapMode),v.push(S.envMapCubeUVHeight),v.push(S.combine),v.push(S.vertexUvs),v.push(S.fogExp2),v.push(S.sizeAttenuation),v.push(S.morphTargetsCount),v.push(S.morphAttributeCount),v.push(S.numDirLights),v.push(S.numPointLights),v.push(S.numSpotLights),v.push(S.numSpotLightMaps),v.push(S.numHemiLights),v.push(S.numRectAreaLights),v.push(S.numDirLightShadows),v.push(S.numPointLightShadows),v.push(S.numSpotLightShadows),v.push(S.numSpotLightShadowsWithMaps),v.push(S.shadowMapType),v.push(S.toneMapping),v.push(S.numClippingPlanes),v.push(S.numClipIntersection),v.push(S.depthPacking)}function _(v,S){a.disableAll(),S.isWebGL2&&a.enable(0),S.supportsVertexTextures&&a.enable(1),S.instancing&&a.enable(2),S.instancingColor&&a.enable(3),S.map&&a.enable(4),S.matcap&&a.enable(5),S.envMap&&a.enable(6),S.lightMap&&a.enable(7),S.aoMap&&a.enable(8),S.emissiveMap&&a.enable(9),S.bumpMap&&a.enable(10),S.normalMap&&a.enable(11),S.objectSpaceNormalMap&&a.enable(12),S.tangentSpaceNormalMap&&a.enable(13),S.clearcoat&&a.enable(14),S.clearcoatMap&&a.enable(15),S.clearcoatRoughnessMap&&a.enable(16),S.clearcoatNormalMap&&a.enable(17),S.iridescence&&a.enable(18),S.iridescenceMap&&a.enable(19),S.iridescenceThicknessMap&&a.enable(20),S.displacementMap&&a.enable(21),S.specularMap&&a.enable(22),S.roughnessMap&&a.enable(23),S.metalnessMap&&a.enable(24),S.gradientMap&&a.enable(25),S.alphaMap&&a.enable(26),S.alphaTest&&a.enable(27),S.vertexColors&&a.enable(28),S.vertexAlphas&&a.enable(29),S.vertexUvs&&a.enable(30),S.vertexTangents&&a.enable(31),S.uvsVertexOnly&&a.enable(32),v.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.skinning&&a.enable(4),S.morphTargets&&a.enable(5),S.morphNormals&&a.enable(6),S.morphColors&&a.enable(7),S.premultipliedAlpha&&a.enable(8),S.shadowMapEnabled&&a.enable(9),S.physicallyCorrectLights&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.specularIntensityMap&&a.enable(15),S.specularColorMap&&a.enable(16),S.transmission&&a.enable(17),S.transmissionMap&&a.enable(18),S.thicknessMap&&a.enable(19),S.sheen&&a.enable(20),S.sheenColorMap&&a.enable(21),S.sheenRoughnessMap&&a.enable(22),S.decodeVideoTexture&&a.enable(23),S.opaque&&a.enable(24),v.push(a.mask)}function w(v){const S=g[v.type];let C;if(S){const z=Qe[S];C=yf.clone(z.uniforms)}else C=v.uniforms;return C}function M(v,S){let C;for(let z=0,O=l.length;z<O;z++){const E=l[z];if(E.cacheKey===S){C=E,++C.usedTimes;break}}return C===void 0&&(C=new Pg(s,S,v,r),l.push(C)),C}function y(v){if(--v.usedTimes===0){const S=l.indexOf(v);l[S]=l[l.length-1],l.pop(),v.destroy()}}function A(v){c.remove(v)}function R(){c.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:w,acquireProgram:M,releaseProgram:y,releaseShaderCache:A,programs:l,dispose:R}}function Fg(){let s=new WeakMap;function t(r){let o=s.get(r);return o===void 0&&(o={},s.set(r,o)),o}function e(r){s.delete(r)}function n(r,o,a){s.get(r)[o]=a}function i(){s=new WeakMap}return{get:t,remove:e,update:n,dispose:i}}function zg(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.material.id!==t.material.id?s.material.id-t.material.id:s.z!==t.z?s.z-t.z:s.id-t.id}function Nl(s,t){return s.groupOrder!==t.groupOrder?s.groupOrder-t.groupOrder:s.renderOrder!==t.renderOrder?s.renderOrder-t.renderOrder:s.z!==t.z?t.z-s.z:s.id-t.id}function Fl(){const s=[];let t=0;const e=[],n=[],i=[];function r(){t=0,e.length=0,n.length=0,i.length=0}function o(f,h,d,g,m,p){let x=s[t];return x===void 0?(x={id:f.id,object:f,geometry:h,material:d,groupOrder:g,renderOrder:f.renderOrder,z:m,group:p},s[t]=x):(x.id=f.id,x.object=f,x.geometry=h,x.material=d,x.groupOrder=g,x.renderOrder=f.renderOrder,x.z=m,x.group=p),t++,x}function a(f,h,d,g,m,p){const x=o(f,h,d,g,m,p);d.transmission>0?n.push(x):d.transparent===!0?i.push(x):e.push(x)}function c(f,h,d,g,m,p){const x=o(f,h,d,g,m,p);d.transmission>0?n.unshift(x):d.transparent===!0?i.unshift(x):e.unshift(x)}function l(f,h){e.length>1&&e.sort(f||zg),n.length>1&&n.sort(h||Nl),i.length>1&&i.sort(h||Nl)}function u(){for(let f=t,h=s.length;f<h;f++){const d=s[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function Og(){let s=new WeakMap;function t(n,i){const r=s.get(n);let o;return r===void 0?(o=new Fl,s.set(n,[o])):i>=r.length?(o=new Fl,r.push(o)):o=r[i],o}function e(){s=new WeakMap}return{get:t,dispose:e}}function Bg(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new V,color:new zt};break;case"SpotLight":e={position:new V,direction:new V,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new V,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new V,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new V,halfWidth:new V,halfHeight:new V};break}return s[t.id]=e,e}}}function Ug(){const s={};return{get:function(t){if(s[t.id]!==void 0)return s[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"SpotLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt};break;case"PointLight":e={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Mt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[t.id]=e,e}}}let kg=0;function Gg(s,t){return(t.castShadow?2:0)-(s.castShadow?2:0)+(t.map?1:0)-(s.map?1:0)}function Vg(s,t){const e=new Bg,n=Ug(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)i.probe.push(new V);const r=new V,o=new kt,a=new kt;function c(u,f){let h=0,d=0,g=0;for(let z=0;z<9;z++)i.probe[z].set(0,0,0);let m=0,p=0,x=0,_=0,w=0,M=0,y=0,A=0,R=0,v=0;u.sort(Gg);const S=f!==!0?Math.PI:1;for(let z=0,O=u.length;z<O;z++){const E=u[z],P=E.color,I=E.intensity,F=E.distance,B=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)h+=P.r*I*S,d+=P.g*I*S,g+=P.b*I*S;else if(E.isLightProbe)for(let G=0;G<9;G++)i.probe[G].addScaledVector(E.sh.coefficients[G],I);else if(E.isDirectionalLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity*S),E.castShadow){const Y=E.shadow,J=n.get(E);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,i.directionalShadow[m]=J,i.directionalShadowMap[m]=B,i.directionalShadowMatrix[m]=E.shadow.matrix,M++}i.directional[m]=G,m++}else if(E.isSpotLight){const G=e.get(E);G.position.setFromMatrixPosition(E.matrixWorld),G.color.copy(P).multiplyScalar(I*S),G.distance=F,G.coneCos=Math.cos(E.angle),G.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),G.decay=E.decay,i.spot[x]=G;const Y=E.shadow;if(E.map&&(i.spotLightMap[R]=E.map,R++,Y.updateMatrices(E),E.castShadow&&v++),i.spotLightMatrix[x]=Y.matrix,E.castShadow){const J=n.get(E);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,i.spotShadow[x]=J,i.spotShadowMap[x]=B,A++}x++}else if(E.isRectAreaLight){const G=e.get(E);G.color.copy(P).multiplyScalar(I),G.halfWidth.set(E.width*.5,0,0),G.halfHeight.set(0,E.height*.5,0),i.rectArea[_]=G,_++}else if(E.isPointLight){const G=e.get(E);if(G.color.copy(E.color).multiplyScalar(E.intensity*S),G.distance=E.distance,G.decay=E.decay,E.castShadow){const Y=E.shadow,J=n.get(E);J.shadowBias=Y.bias,J.shadowNormalBias=Y.normalBias,J.shadowRadius=Y.radius,J.shadowMapSize=Y.mapSize,J.shadowCameraNear=Y.camera.near,J.shadowCameraFar=Y.camera.far,i.pointShadow[p]=J,i.pointShadowMap[p]=B,i.pointShadowMatrix[p]=E.shadow.matrix,y++}i.point[p]=G,p++}else if(E.isHemisphereLight){const G=e.get(E);G.skyColor.copy(E.color).multiplyScalar(I*S),G.groundColor.copy(E.groundColor).multiplyScalar(I*S),i.hemi[w]=G,w++}}_>0&&(t.isWebGL2||s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_FLOAT_1,i.rectAreaLTC2=ut.LTC_FLOAT_2):s.has("OES_texture_half_float_linear")===!0?(i.rectAreaLTC1=ut.LTC_HALF_1,i.rectAreaLTC2=ut.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=g;const C=i.hash;(C.directionalLength!==m||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==_||C.hemiLength!==w||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==A||C.numSpotMaps!==R)&&(i.directional.length=m,i.spot.length=x,i.rectArea.length=_,i.point.length=p,i.hemi.length=w,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=A,i.spotShadowMap.length=A,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=A+R-v,i.spotLightMap.length=R,i.numSpotLightShadowsWithMaps=v,C.directionalLength=m,C.pointLength=p,C.spotLength=x,C.rectAreaLength=_,C.hemiLength=w,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=A,C.numSpotMaps=R,i.version=kg++)}function l(u,f){let h=0,d=0,g=0,m=0,p=0;const x=f.matrixWorldInverse;for(let _=0,w=u.length;_<w;_++){const M=u[_];if(M.isDirectionalLight){const y=i.directional[h];y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),h++}else if(M.isSpotLight){const y=i.spot[g];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),y.direction.setFromMatrixPosition(M.matrixWorld),r.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(x),g++}else if(M.isRectAreaLight){const y=i.rectArea[m];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),a.identity(),o.copy(M.matrixWorld),o.premultiply(x),a.extractRotation(o),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),m++}else if(M.isPointLight){const y=i.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(x),d++}else if(M.isHemisphereLight){const y=i.hemi[p];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(x),p++}}}return{setup:c,setupView:l,state:i}}function zl(s,t){const e=new Vg(s,t),n=[],i=[];function r(){n.length=0,i.length=0}function o(f){n.push(f)}function a(f){i.push(f)}function c(f){e.setup(n,f)}function l(f){e.setupView(n,f)}return{init:r,state:{lightsArray:n,shadowsArray:i,lights:e},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function Hg(s,t){let e=new WeakMap;function n(r,o=0){const a=e.get(r);let c;return a===void 0?(c=new zl(s,t),e.set(r,[c])):o>=a.length?(c=new zl(s,t),a.push(c)):c=a[o],c}function i(){e=new WeakMap}return{get:n,dispose:i}}class Wg extends ai{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ef,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qg extends ai{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new V,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.referencePosition.copy(t.referencePosition),this.nearDistance=t.nearDistance,this.farDistance=t.farDistance,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Xg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Yg(s,t,e){let n=new ea;const i=new Mt,r=new Mt,o=new ce,a=new Wg({depthPacking:nf}),c=new qg,l={},u=e.maxTextureSize,f={[Pn]:Re,[Re]:Pn,[Cn]:Cn},h=new ii({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Mt},radius:{value:4}},vertexShader:Xg,fragmentShader:jg}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const g=new me;g.setAttribute("position",new Ie(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const m=new ee(g,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bc,this.render=function(M,y,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;const R=s.getRenderTarget(),v=s.getActiveCubeFace(),S=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Ln),C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);for(let z=0,O=M.length;z<O;z++){const E=M[z],P=E.shadow;if(P===void 0){console.warn("THREE.WebGLShadowMap:",E,"has no shadow.");continue}if(P.autoUpdate===!1&&P.needsUpdate===!1)continue;i.copy(P.mapSize);const I=P.getFrameExtents();if(i.multiply(I),r.copy(P.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/I.x),i.x=r.x*I.x,P.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/I.y),i.y=r.y*I.y,P.mapSize.y=r.y)),P.map===null){const B=this.type!==ss?{minFilter:ye,magFilter:ye}:{};P.map=new ei(i.x,i.y,B),P.map.texture.name=E.name+".shadowMap",P.camera.updateProjectionMatrix()}s.setRenderTarget(P.map),s.clear();const F=P.getViewportCount();for(let B=0;B<F;B++){const G=P.getViewport(B);o.set(r.x*G.x,r.y*G.y,r.x*G.z,r.y*G.w),C.viewport(o),P.updateMatrices(E,B),n=P.getFrustum(),w(y,A,P.camera,E,this.type)}P.isPointLightShadow!==!0&&this.type===ss&&x(P,A),P.needsUpdate=!1}p.needsUpdate=!1,s.setRenderTarget(R,v,S)};function x(M,y){const A=t.update(m);h.defines.VSM_SAMPLES!==M.blurSamples&&(h.defines.VSM_SAMPLES=M.blurSamples,d.defines.VSM_SAMPLES=M.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),M.mapPass===null&&(M.mapPass=new ei(i.x,i.y)),h.uniforms.shadow_pass.value=M.map.texture,h.uniforms.resolution.value=M.mapSize,h.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(y,null,A,h,m,null),d.uniforms.shadow_pass.value=M.mapPass.texture,d.uniforms.resolution.value=M.mapSize,d.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(y,null,A,d,m,null)}function _(M,y,A,R,v,S){let C=null;const z=A.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(z!==void 0)C=z;else if(C=A.isPointLight===!0?c:a,s.localClippingEnabled&&y.clipShadows===!0&&Array.isArray(y.clippingPlanes)&&y.clippingPlanes.length!==0||y.displacementMap&&y.displacementScale!==0||y.alphaMap&&y.alphaTest>0||y.map&&y.alphaTest>0){const O=C.uuid,E=y.uuid;let P=l[O];P===void 0&&(P={},l[O]=P);let I=P[E];I===void 0&&(I=C.clone(),P[E]=I),C=I}return C.visible=y.visible,C.wireframe=y.wireframe,S===ss?C.side=y.shadowSide!==null?y.shadowSide:y.side:C.side=y.shadowSide!==null?y.shadowSide:f[y.side],C.alphaMap=y.alphaMap,C.alphaTest=y.alphaTest,C.map=y.map,C.clipShadows=y.clipShadows,C.clippingPlanes=y.clippingPlanes,C.clipIntersection=y.clipIntersection,C.displacementMap=y.displacementMap,C.displacementScale=y.displacementScale,C.displacementBias=y.displacementBias,C.wireframeLinewidth=y.wireframeLinewidth,C.linewidth=y.linewidth,A.isPointLight===!0&&C.isMeshDistanceMaterial===!0&&(C.referencePosition.setFromMatrixPosition(A.matrixWorld),C.nearDistance=R,C.farDistance=v),C}function w(M,y,A,R,v){if(M.visible===!1)return;if(M.layers.test(y.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&v===ss)&&(!M.frustumCulled||n.intersectsObject(M))){M.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,M.matrixWorld);const z=t.update(M),O=M.material;if(Array.isArray(O)){const E=z.groups;for(let P=0,I=E.length;P<I;P++){const F=E[P],B=O[F.materialIndex];if(B&&B.visible){const G=_(M,B,R,A.near,A.far,v);s.renderBufferDirect(A,null,z,G,M,F)}}}else if(O.visible){const E=_(M,O,R,A.near,A.far,v);s.renderBufferDirect(A,null,z,E,M,null)}}const C=M.children;for(let z=0,O=C.length;z<O;z++)w(C[z],y,A,R,v)}}function $g(s,t,e){const n=e.isWebGL2;function i(){let k=!1;const Z=new ce;let nt=null;const mt=new ce(0,0,0,0);return{setMask:function(yt){nt!==yt&&!k&&(s.colorMask(yt,yt,yt,yt),nt=yt)},setLocked:function(yt){k=yt},setClear:function(yt,Ut,oe,fe,Nn){Nn===!0&&(yt*=fe,Ut*=fe,oe*=fe),Z.set(yt,Ut,oe,fe),mt.equals(Z)===!1&&(s.clearColor(yt,Ut,oe,fe),mt.copy(Z))},reset:function(){k=!1,nt=null,mt.set(-1,0,0,0)}}}function r(){let k=!1,Z=null,nt=null,mt=null;return{setTest:function(yt){yt?q(2929):et(2929)},setMask:function(yt){Z!==yt&&!k&&(s.depthMask(yt),Z=yt)},setFunc:function(yt){if(nt!==yt){switch(yt){case Eh:s.depthFunc(512);break;case Th:s.depthFunc(519);break;case Ah:s.depthFunc(513);break;case No:s.depthFunc(515);break;case Ch:s.depthFunc(514);break;case Lh:s.depthFunc(518);break;case Ph:s.depthFunc(516);break;case Rh:s.depthFunc(517);break;default:s.depthFunc(515)}nt=yt}},setLocked:function(yt){k=yt},setClear:function(yt){mt!==yt&&(s.clearDepth(yt),mt=yt)},reset:function(){k=!1,Z=null,nt=null,mt=null}}}function o(){let k=!1,Z=null,nt=null,mt=null,yt=null,Ut=null,oe=null,fe=null,Nn=null;return{setTest:function(qt){k||(qt?q(2960):et(2960))},setMask:function(qt){Z!==qt&&!k&&(s.stencilMask(qt),Z=qt)},setFunc:function(qt,sn,Oe){(nt!==qt||mt!==sn||yt!==Oe)&&(s.stencilFunc(qt,sn,Oe),nt=qt,mt=sn,yt=Oe)},setOp:function(qt,sn,Oe){(Ut!==qt||oe!==sn||fe!==Oe)&&(s.stencilOp(qt,sn,Oe),Ut=qt,oe=sn,fe=Oe)},setLocked:function(qt){k=qt},setClear:function(qt){Nn!==qt&&(s.clearStencil(qt),Nn=qt)},reset:function(){k=!1,Z=null,nt=null,mt=null,yt=null,Ut=null,oe=null,fe=null,Nn=null}}}const a=new i,c=new r,l=new o,u=new WeakMap,f=new WeakMap;let h={},d={},g=new WeakMap,m=[],p=null,x=!1,_=null,w=null,M=null,y=null,A=null,R=null,v=null,S=!1,C=null,z=null,O=null,E=null,P=null;const I=s.getParameter(35661);let F=!1,B=0;const G=s.getParameter(7938);G.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(G)[1]),F=B>=1):G.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),F=B>=2);let Y=null,J={};const lt=s.getParameter(3088),U=s.getParameter(2978),Q=new ce().fromArray(lt),st=new ce().fromArray(U);function rt(k,Z,nt){const mt=new Uint8Array(4),yt=s.createTexture();s.bindTexture(k,yt),s.texParameteri(k,10241,9728),s.texParameteri(k,10240,9728);for(let Ut=0;Ut<nt;Ut++)s.texImage2D(Z+Ut,0,6408,1,1,0,6408,5121,mt);return yt}const j={};j[3553]=rt(3553,3553,1),j[34067]=rt(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),q(2929),c.setFunc(No),Zt(!1),ge(Ea),q(2884),Xt(Ln);function q(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function et(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function ct(k,Z){return d[k]!==Z?(s.bindFramebuffer(k,Z),d[k]=Z,n&&(k===36009&&(d[36160]=Z),k===36160&&(d[36009]=Z)),!0):!1}function ot(k,Z){let nt=m,mt=!1;if(k)if(nt=g.get(Z),nt===void 0&&(nt=[],g.set(Z,nt)),k.isWebGLMultipleRenderTargets){const yt=k.texture;if(nt.length!==yt.length||nt[0]!==36064){for(let Ut=0,oe=yt.length;Ut<oe;Ut++)nt[Ut]=36064+Ut;nt.length=yt.length,mt=!0}}else nt[0]!==36064&&(nt[0]=36064,mt=!0);else nt[0]!==1029&&(nt[0]=1029,mt=!0);mt&&(e.isWebGL2?s.drawBuffers(nt):t.get("WEBGL_draw_buffers").drawBuffersWEBGL(nt))}function At(k){return p!==k?(s.useProgram(k),p=k,!0):!1}const bt={[Ei]:32774,[ph]:32778,[mh]:32779};if(n)bt[La]=32775,bt[Pa]=32776;else{const k=t.get("EXT_blend_minmax");k!==null&&(bt[La]=k.MIN_EXT,bt[Pa]=k.MAX_EXT)}const St={[gh]:0,[_h]:1,[xh]:768,[Uc]:770,[Sh]:776,[Mh]:774,[yh]:772,[vh]:769,[kc]:771,[bh]:775,[wh]:773};function Xt(k,Z,nt,mt,yt,Ut,oe,fe){if(k===Ln){x===!0&&(et(3042),x=!1);return}if(x===!1&&(q(3042),x=!0),k!==dh){if(k!==_||fe!==S){if((w!==Ei||A!==Ei)&&(s.blendEquation(32774),w=Ei,A=Ei),fe)switch(k){case Ci:s.blendFuncSeparate(1,771,1,771);break;case Ta:s.blendFunc(1,1);break;case Aa:s.blendFuncSeparate(0,769,0,1);break;case Ca:s.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Ci:s.blendFuncSeparate(770,771,1,771);break;case Ta:s.blendFunc(770,1);break;case Aa:s.blendFuncSeparate(0,769,0,1);break;case Ca:s.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}M=null,y=null,R=null,v=null,_=k,S=fe}return}yt=yt||Z,Ut=Ut||nt,oe=oe||mt,(Z!==w||yt!==A)&&(s.blendEquationSeparate(bt[Z],bt[yt]),w=Z,A=yt),(nt!==M||mt!==y||Ut!==R||oe!==v)&&(s.blendFuncSeparate(St[nt],St[mt],St[Ut],St[oe]),M=nt,y=mt,R=Ut,v=oe),_=k,S=!1}function he(k,Z){k.side===Cn?et(2884):q(2884);let nt=k.side===Re;Z&&(nt=!nt),Zt(nt),k.blending===Ci&&k.transparent===!1?Xt(Ln):Xt(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.premultipliedAlpha),c.setFunc(k.depthFunc),c.setTest(k.depthTest),c.setMask(k.depthWrite),a.setMask(k.colorWrite);const mt=k.stencilWrite;l.setTest(mt),mt&&(l.setMask(k.stencilWriteMask),l.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),l.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Bt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?q(32926):et(32926)}function Zt(k){C!==k&&(k?s.frontFace(2304):s.frontFace(2305),C=k)}function ge(k){k!==uh?(q(2884),k!==z&&(k===Ea?s.cullFace(1029):k===hh?s.cullFace(1028):s.cullFace(1032))):et(2884),z=k}function Yt(k){k!==O&&(F&&s.lineWidth(k),O=k)}function Bt(k,Z,nt){k?(q(32823),(E!==Z||P!==nt)&&(s.polygonOffset(Z,nt),E=Z,P=nt)):et(32823)}function ze(k){k?q(3089):et(3089)}function we(k){k===void 0&&(k=33984+I-1),Y!==k&&(s.activeTexture(k),Y=k)}function D(k,Z,nt){nt===void 0&&(Y===null?nt=33984+I-1:nt=Y);let mt=J[nt];mt===void 0&&(mt={type:void 0,texture:void 0},J[nt]=mt),(mt.type!==k||mt.texture!==Z)&&(Y!==nt&&(s.activeTexture(nt),Y=nt),s.bindTexture(k,Z||j[k]),mt.type=k,mt.texture=Z)}function T(){const k=J[Y];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function it(){try{s.compressedTexImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function at(){try{s.texSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ft(){try{s.texSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Et(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function N(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function H(){try{s.texStorage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function pt(){try{s.texStorage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function _t(){try{s.texImage2D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function dt(){try{s.texImage3D.apply(s,arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function vt(k){Q.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),Q.copy(k))}function xt(k){st.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),st.copy(k))}function Rt(k,Z){let nt=f.get(Z);nt===void 0&&(nt=new WeakMap,f.set(Z,nt));let mt=nt.get(k);mt===void 0&&(mt=s.getUniformBlockIndex(Z,k.name),nt.set(k,mt))}function Dt(k,Z){const mt=f.get(Z).get(k);u.get(Z)!==mt&&(s.uniformBlockBinding(Z,mt,k.__bindingPointIndex),u.set(Z,mt))}function Gt(){s.disable(3042),s.disable(2884),s.disable(2929),s.disable(32823),s.disable(3089),s.disable(2960),s.disable(32926),s.blendEquation(32774),s.blendFunc(1,0),s.blendFuncSeparate(1,0,1,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(513),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(519,0,4294967295),s.stencilOp(7680,7680,7680),s.clearStencil(0),s.cullFace(1029),s.frontFace(2305),s.polygonOffset(0,0),s.activeTexture(33984),s.bindFramebuffer(36160,null),n===!0&&(s.bindFramebuffer(36009,null),s.bindFramebuffer(36008,null)),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},Y=null,J={},d={},g=new WeakMap,m=[],p=null,x=!1,_=null,w=null,M=null,y=null,A=null,R=null,v=null,S=!1,C=null,z=null,O=null,E=null,P=null,Q.set(0,0,s.canvas.width,s.canvas.height),st.set(0,0,s.canvas.width,s.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:q,disable:et,bindFramebuffer:ct,drawBuffers:ot,useProgram:At,setBlending:Xt,setMaterial:he,setFlipSided:Zt,setCullFace:ge,setLineWidth:Yt,setPolygonOffset:Bt,setScissorTest:ze,activeTexture:we,bindTexture:D,unbindTexture:T,compressedTexImage2D:$,compressedTexImage3D:it,texImage2D:_t,texImage3D:dt,updateUBOMapping:Rt,uniformBlockBinding:Dt,texStorage2D:H,texStorage3D:pt,texSubImage2D:at,texSubImage3D:ft,compressedTexSubImage2D:Et,compressedTexSubImage3D:N,scissor:vt,viewport:xt,reset:Gt}}function Zg(s,t,e,n,i,r,o){const a=i.isWebGL2,c=i.maxTextures,l=i.maxCubemapSize,u=i.maxTextureSize,f=i.maxSamples,h=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let m;const p=new WeakMap;let x=!1;try{x=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(D,T){return x?new OffscreenCanvas(D,T):ur("canvas")}function w(D,T,$,it){let at=1;if((D.width>it||D.height>it)&&(at=it/Math.max(D.width,D.height)),at<1||T===!0)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap){const ft=T?ko:Math.floor,Et=ft(at*D.width),N=ft(at*D.height);m===void 0&&(m=_(Et,N));const H=$?_(Et,N):m;return H.width=Et,H.height=N,H.getContext("2d").drawImage(D,0,0,Et,N),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+D.width+"x"+D.height+") to ("+Et+"x"+N+")."),H}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+D.width+"x"+D.height+")."),D;return D}function M(D){return sl(D.width)&&sl(D.height)}function y(D){return a?!1:D.wrapS!==We||D.wrapT!==We||D.minFilter!==ye&&D.minFilter!==Ue}function A(D,T){return D.generateMipmaps&&T&&D.minFilter!==ye&&D.minFilter!==Ue}function R(D){s.generateMipmap(D)}function v(D,T,$,it,at=!1){if(a===!1)return T;if(D!==null){if(s[D]!==void 0)return s[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ft=T;return T===6403&&($===5126&&(ft=33326),$===5131&&(ft=33325),$===5121&&(ft=33321)),T===33319&&($===5126&&(ft=33328),$===5131&&(ft=33327),$===5121&&(ft=33323)),T===6408&&($===5126&&(ft=34836),$===5131&&(ft=34842),$===5121&&(ft=it===Wt&&at===!1?35907:32856),$===32819&&(ft=32854),$===32820&&(ft=32855)),(ft===33325||ft===33326||ft===33327||ft===33328||ft===34842||ft===34836)&&t.get("EXT_color_buffer_float"),ft}function S(D,T,$){return A(D,$)===!0||D.isFramebufferTexture&&D.minFilter!==ye&&D.minFilter!==Ue?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function C(D){return D===ye||D===Ra||D===Ur?9728:9729}function z(D){const T=D.target;T.removeEventListener("dispose",z),E(T),T.isVideoTexture&&g.delete(T)}function O(D){const T=D.target;T.removeEventListener("dispose",O),I(T)}function E(D){const T=n.get(D);if(T.__webglInit===void 0)return;const $=D.source,it=p.get($);if(it){const at=it[T.__cacheKey];at.usedTimes--,at.usedTimes===0&&P(D),Object.keys(it).length===0&&p.delete($)}n.remove(D)}function P(D){const T=n.get(D);s.deleteTexture(T.__webglTexture);const $=D.source,it=p.get($);delete it[T.__cacheKey],o.memory.textures--}function I(D){const T=D.texture,$=n.get(D),it=n.get(T);if(it.__webglTexture!==void 0&&(s.deleteTexture(it.__webglTexture),o.memory.textures--),D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let at=0;at<6;at++)s.deleteFramebuffer($.__webglFramebuffer[at]),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer[at]);else{if(s.deleteFramebuffer($.__webglFramebuffer),$.__webglDepthbuffer&&s.deleteRenderbuffer($.__webglDepthbuffer),$.__webglMultisampledFramebuffer&&s.deleteFramebuffer($.__webglMultisampledFramebuffer),$.__webglColorRenderbuffer)for(let at=0;at<$.__webglColorRenderbuffer.length;at++)$.__webglColorRenderbuffer[at]&&s.deleteRenderbuffer($.__webglColorRenderbuffer[at]);$.__webglDepthRenderbuffer&&s.deleteRenderbuffer($.__webglDepthRenderbuffer)}if(D.isWebGLMultipleRenderTargets)for(let at=0,ft=T.length;at<ft;at++){const Et=n.get(T[at]);Et.__webglTexture&&(s.deleteTexture(Et.__webglTexture),o.memory.textures--),n.remove(T[at])}n.remove(T),n.remove(D)}let F=0;function B(){F=0}function G(){const D=F;return D>=c&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+c),F+=1,D}function Y(D){const T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.encoding),T.join()}function J(D,T){const $=n.get(D);if(D.isVideoTexture&&ze(D),D.isRenderTargetTexture===!1&&D.version>0&&$.__version!==D.version){const it=D.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et($,D,T);return}}e.bindTexture(3553,$.__webglTexture,33984+T)}function lt(D,T){const $=n.get(D);if(D.version>0&&$.__version!==D.version){et($,D,T);return}e.bindTexture(35866,$.__webglTexture,33984+T)}function U(D,T){const $=n.get(D);if(D.version>0&&$.__version!==D.version){et($,D,T);return}e.bindTexture(32879,$.__webglTexture,33984+T)}function Q(D,T){const $=n.get(D);if(D.version>0&&$.__version!==D.version){ct($,D,T);return}e.bindTexture(34067,$.__webglTexture,33984+T)}const st={[Oo]:10497,[We]:33071,[Bo]:33648},rt={[ye]:9728,[Ra]:9984,[Ur]:9986,[Ue]:9729,[Uh]:9985,[fs]:9987};function j(D,T,$){if($?(s.texParameteri(D,10242,st[T.wrapS]),s.texParameteri(D,10243,st[T.wrapT]),(D===32879||D===35866)&&s.texParameteri(D,32882,st[T.wrapR]),s.texParameteri(D,10240,rt[T.magFilter]),s.texParameteri(D,10241,rt[T.minFilter])):(s.texParameteri(D,10242,33071),s.texParameteri(D,10243,33071),(D===32879||D===35866)&&s.texParameteri(D,32882,33071),(T.wrapS!==We||T.wrapT!==We)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),s.texParameteri(D,10240,C(T.magFilter)),s.texParameteri(D,10241,C(T.minFilter)),T.minFilter!==ye&&T.minFilter!==Ue&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),t.has("EXT_texture_filter_anisotropic")===!0){const it=t.get("EXT_texture_filter_anisotropic");if(T.magFilter===ye||T.minFilter!==Ur&&T.minFilter!==fs||T.type===jn&&t.has("OES_texture_float_linear")===!1||a===!1&&T.type===ds&&t.has("OES_texture_half_float_linear")===!1)return;(T.anisotropy>1||n.get(T).__currentAnisotropy)&&(s.texParameterf(D,it.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy)}}function q(D,T){let $=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",z));const it=T.source;let at=p.get(it);at===void 0&&(at={},p.set(it,at));const ft=Y(T);if(ft!==D.__cacheKey){at[ft]===void 0&&(at[ft]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,$=!0),at[ft].usedTimes++;const Et=at[D.__cacheKey];Et!==void 0&&(at[D.__cacheKey].usedTimes--,Et.usedTimes===0&&P(T)),D.__cacheKey=ft,D.__webglTexture=at[ft].texture}return $}function et(D,T,$){let it=3553;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=35866),T.isData3DTexture&&(it=32879);const at=q(D,T),ft=T.source;e.bindTexture(it,D.__webglTexture,33984+$);const Et=n.get(ft);if(ft.version!==Et.__version||at===!0){e.activeTexture(33984+$),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const N=y(T)&&M(T.image)===!1;let H=w(T.image,N,!1,u);H=we(T,H);const pt=M(H)||a,_t=r.convert(T.format,T.encoding);let dt=r.convert(T.type),vt=v(T.internalFormat,_t,dt,T.encoding,T.isVideoTexture);j(it,T,pt);let xt;const Rt=T.mipmaps,Dt=a&&T.isVideoTexture!==!0,Gt=Et.__version===void 0||at===!0,k=S(T,H,pt);if(T.isDepthTexture)vt=6402,a?T.type===jn?vt=36012:T.type===Xn?vt=33190:T.type===Li?vt=35056:vt=33189:T.type===jn&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),T.format===$n&&vt===6402&&T.type!==Vc&&T.type!==Xn&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),T.type=Xn,dt=r.convert(T.type)),T.format===Ni&&vt===6402&&(vt=34041,T.type!==Li&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),T.type=Li,dt=r.convert(T.type))),Gt&&(Dt?e.texStorage2D(3553,1,vt,H.width,H.height):e.texImage2D(3553,0,vt,H.width,H.height,0,_t,dt,null));else if(T.isDataTexture)if(Rt.length>0&&pt){Dt&&Gt&&e.texStorage2D(3553,k,vt,Rt[0].width,Rt[0].height);for(let Z=0,nt=Rt.length;Z<nt;Z++)xt=Rt[Z],Dt?e.texSubImage2D(3553,Z,0,0,xt.width,xt.height,_t,dt,xt.data):e.texImage2D(3553,Z,vt,xt.width,xt.height,0,_t,dt,xt.data);T.generateMipmaps=!1}else Dt?(Gt&&e.texStorage2D(3553,k,vt,H.width,H.height),e.texSubImage2D(3553,0,0,0,H.width,H.height,_t,dt,H.data)):e.texImage2D(3553,0,vt,H.width,H.height,0,_t,dt,H.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){Dt&&Gt&&e.texStorage3D(35866,k,vt,Rt[0].width,Rt[0].height,H.depth);for(let Z=0,nt=Rt.length;Z<nt;Z++)xt=Rt[Z],T.format!==qe?_t!==null?Dt?e.compressedTexSubImage3D(35866,Z,0,0,0,xt.width,xt.height,H.depth,_t,xt.data,0,0):e.compressedTexImage3D(35866,Z,vt,xt.width,xt.height,H.depth,0,xt.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?e.texSubImage3D(35866,Z,0,0,0,xt.width,xt.height,H.depth,_t,dt,xt.data):e.texImage3D(35866,Z,vt,xt.width,xt.height,H.depth,0,_t,dt,xt.data)}else{Dt&&Gt&&e.texStorage2D(3553,k,vt,Rt[0].width,Rt[0].height);for(let Z=0,nt=Rt.length;Z<nt;Z++)xt=Rt[Z],T.format!==qe?_t!==null?Dt?e.compressedTexSubImage2D(3553,Z,0,0,xt.width,xt.height,_t,xt.data):e.compressedTexImage2D(3553,Z,vt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Dt?e.texSubImage2D(3553,Z,0,0,xt.width,xt.height,_t,dt,xt.data):e.texImage2D(3553,Z,vt,xt.width,xt.height,0,_t,dt,xt.data)}else if(T.isDataArrayTexture)Dt?(Gt&&e.texStorage3D(35866,k,vt,H.width,H.height,H.depth),e.texSubImage3D(35866,0,0,0,0,H.width,H.height,H.depth,_t,dt,H.data)):e.texImage3D(35866,0,vt,H.width,H.height,H.depth,0,_t,dt,H.data);else if(T.isData3DTexture)Dt?(Gt&&e.texStorage3D(32879,k,vt,H.width,H.height,H.depth),e.texSubImage3D(32879,0,0,0,0,H.width,H.height,H.depth,_t,dt,H.data)):e.texImage3D(32879,0,vt,H.width,H.height,H.depth,0,_t,dt,H.data);else if(T.isFramebufferTexture){if(Gt)if(Dt)e.texStorage2D(3553,k,vt,H.width,H.height);else{let Z=H.width,nt=H.height;for(let mt=0;mt<k;mt++)e.texImage2D(3553,mt,vt,Z,nt,0,_t,dt,null),Z>>=1,nt>>=1}}else if(Rt.length>0&&pt){Dt&&Gt&&e.texStorage2D(3553,k,vt,Rt[0].width,Rt[0].height);for(let Z=0,nt=Rt.length;Z<nt;Z++)xt=Rt[Z],Dt?e.texSubImage2D(3553,Z,0,0,_t,dt,xt):e.texImage2D(3553,Z,vt,_t,dt,xt);T.generateMipmaps=!1}else Dt?(Gt&&e.texStorage2D(3553,k,vt,H.width,H.height),e.texSubImage2D(3553,0,0,0,_t,dt,H)):e.texImage2D(3553,0,vt,_t,dt,H);A(T,pt)&&R(it),Et.__version=ft.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ct(D,T,$){if(T.image.length!==6)return;const it=q(D,T),at=T.source;e.bindTexture(34067,D.__webglTexture,33984+$);const ft=n.get(at);if(at.version!==ft.__version||it===!0){e.activeTexture(33984+$),s.pixelStorei(37440,T.flipY),s.pixelStorei(37441,T.premultiplyAlpha),s.pixelStorei(3317,T.unpackAlignment),s.pixelStorei(37443,0);const Et=T.isCompressedTexture||T.image[0].isCompressedTexture,N=T.image[0]&&T.image[0].isDataTexture,H=[];for(let Z=0;Z<6;Z++)!Et&&!N?H[Z]=w(T.image[Z],!1,!0,l):H[Z]=N?T.image[Z].image:T.image[Z],H[Z]=we(T,H[Z]);const pt=H[0],_t=M(pt)||a,dt=r.convert(T.format,T.encoding),vt=r.convert(T.type),xt=v(T.internalFormat,dt,vt,T.encoding),Rt=a&&T.isVideoTexture!==!0,Dt=ft.__version===void 0||it===!0;let Gt=S(T,pt,_t);j(34067,T,_t);let k;if(Et){Rt&&Dt&&e.texStorage2D(34067,Gt,xt,pt.width,pt.height);for(let Z=0;Z<6;Z++){k=H[Z].mipmaps;for(let nt=0;nt<k.length;nt++){const mt=k[nt];T.format!==qe?dt!==null?Rt?e.compressedTexSubImage2D(34069+Z,nt,0,0,mt.width,mt.height,dt,mt.data):e.compressedTexImage2D(34069+Z,nt,xt,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Rt?e.texSubImage2D(34069+Z,nt,0,0,mt.width,mt.height,dt,vt,mt.data):e.texImage2D(34069+Z,nt,xt,mt.width,mt.height,0,dt,vt,mt.data)}}}else{k=T.mipmaps,Rt&&Dt&&(k.length>0&&Gt++,e.texStorage2D(34067,Gt,xt,H[0].width,H[0].height));for(let Z=0;Z<6;Z++)if(N){Rt?e.texSubImage2D(34069+Z,0,0,0,H[Z].width,H[Z].height,dt,vt,H[Z].data):e.texImage2D(34069+Z,0,xt,H[Z].width,H[Z].height,0,dt,vt,H[Z].data);for(let nt=0;nt<k.length;nt++){const yt=k[nt].image[Z].image;Rt?e.texSubImage2D(34069+Z,nt+1,0,0,yt.width,yt.height,dt,vt,yt.data):e.texImage2D(34069+Z,nt+1,xt,yt.width,yt.height,0,dt,vt,yt.data)}}else{Rt?e.texSubImage2D(34069+Z,0,0,0,dt,vt,H[Z]):e.texImage2D(34069+Z,0,xt,dt,vt,H[Z]);for(let nt=0;nt<k.length;nt++){const mt=k[nt];Rt?e.texSubImage2D(34069+Z,nt+1,0,0,dt,vt,mt.image[Z]):e.texImage2D(34069+Z,nt+1,xt,dt,vt,mt.image[Z])}}}A(T,_t)&&R(34067),ft.__version=at.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function ot(D,T,$,it,at){const ft=r.convert($.format,$.encoding),Et=r.convert($.type),N=v($.internalFormat,ft,Et,$.encoding);n.get(T).__hasExternalTextures||(at===32879||at===35866?e.texImage3D(at,0,N,T.width,T.height,T.depth,0,ft,Et,null):e.texImage2D(at,0,N,T.width,T.height,0,ft,Et,null)),e.bindFramebuffer(36160,D),Bt(T)?h.framebufferTexture2DMultisampleEXT(36160,it,at,n.get($).__webglTexture,0,Yt(T)):(at===3553||at>=34069&&at<=34074)&&s.framebufferTexture2D(36160,it,at,n.get($).__webglTexture,0),e.bindFramebuffer(36160,null)}function At(D,T,$){if(s.bindRenderbuffer(36161,D),T.depthBuffer&&!T.stencilBuffer){let it=33189;if($||Bt(T)){const at=T.depthTexture;at&&at.isDepthTexture&&(at.type===jn?it=36012:at.type===Xn&&(it=33190));const ft=Yt(T);Bt(T)?h.renderbufferStorageMultisampleEXT(36161,ft,it,T.width,T.height):s.renderbufferStorageMultisample(36161,ft,it,T.width,T.height)}else s.renderbufferStorage(36161,it,T.width,T.height);s.framebufferRenderbuffer(36160,36096,36161,D)}else if(T.depthBuffer&&T.stencilBuffer){const it=Yt(T);$&&Bt(T)===!1?s.renderbufferStorageMultisample(36161,it,35056,T.width,T.height):Bt(T)?h.renderbufferStorageMultisampleEXT(36161,it,35056,T.width,T.height):s.renderbufferStorage(36161,34041,T.width,T.height),s.framebufferRenderbuffer(36160,33306,36161,D)}else{const it=T.isWebGLMultipleRenderTargets===!0?T.texture:[T.texture];for(let at=0;at<it.length;at++){const ft=it[at],Et=r.convert(ft.format,ft.encoding),N=r.convert(ft.type),H=v(ft.internalFormat,Et,N,ft.encoding),pt=Yt(T);$&&Bt(T)===!1?s.renderbufferStorageMultisample(36161,pt,H,T.width,T.height):Bt(T)?h.renderbufferStorageMultisampleEXT(36161,pt,H,T.width,T.height):s.renderbufferStorage(36161,H,T.width,T.height)}}s.bindRenderbuffer(36161,null)}function bt(D,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(36160,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(T.depthTexture).__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),J(T.depthTexture,0);const it=n.get(T.depthTexture).__webglTexture,at=Yt(T);if(T.depthTexture.format===$n)Bt(T)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,it,0,at):s.framebufferTexture2D(36160,36096,3553,it,0);else if(T.depthTexture.format===Ni)Bt(T)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,it,0,at):s.framebufferTexture2D(36160,33306,3553,it,0);else throw new Error("Unknown depthTexture format")}function St(D){const T=n.get(D),$=D.isWebGLCubeRenderTarget===!0;if(D.depthTexture&&!T.__autoAllocateDepthBuffer){if($)throw new Error("target.depthTexture not supported in Cube render targets");bt(T.__webglFramebuffer,D)}else if($){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)e.bindFramebuffer(36160,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]=s.createRenderbuffer(),At(T.__webglDepthbuffer[it],D,!1)}else e.bindFramebuffer(36160,T.__webglFramebuffer),T.__webglDepthbuffer=s.createRenderbuffer(),At(T.__webglDepthbuffer,D,!1);e.bindFramebuffer(36160,null)}function Xt(D,T,$){const it=n.get(D);T!==void 0&&ot(it.__webglFramebuffer,D,D.texture,36064,3553),$!==void 0&&St(D)}function he(D){const T=D.texture,$=n.get(D),it=n.get(T);D.addEventListener("dispose",O),D.isWebGLMultipleRenderTargets!==!0&&(it.__webglTexture===void 0&&(it.__webglTexture=s.createTexture()),it.__version=T.version,o.memory.textures++);const at=D.isWebGLCubeRenderTarget===!0,ft=D.isWebGLMultipleRenderTargets===!0,Et=M(D)||a;if(at){$.__webglFramebuffer=[];for(let N=0;N<6;N++)$.__webglFramebuffer[N]=s.createFramebuffer()}else{if($.__webglFramebuffer=s.createFramebuffer(),ft)if(i.drawBuffers){const N=D.texture;for(let H=0,pt=N.length;H<pt;H++){const _t=n.get(N[H]);_t.__webglTexture===void 0&&(_t.__webglTexture=s.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&D.samples>0&&Bt(D)===!1){const N=ft?T:[T];$.__webglMultisampledFramebuffer=s.createFramebuffer(),$.__webglColorRenderbuffer=[],e.bindFramebuffer(36160,$.__webglMultisampledFramebuffer);for(let H=0;H<N.length;H++){const pt=N[H];$.__webglColorRenderbuffer[H]=s.createRenderbuffer(),s.bindRenderbuffer(36161,$.__webglColorRenderbuffer[H]);const _t=r.convert(pt.format,pt.encoding),dt=r.convert(pt.type),vt=v(pt.internalFormat,_t,dt,pt.encoding,D.isXRRenderTarget===!0),xt=Yt(D);s.renderbufferStorageMultisample(36161,xt,vt,D.width,D.height),s.framebufferRenderbuffer(36160,36064+H,36161,$.__webglColorRenderbuffer[H])}s.bindRenderbuffer(36161,null),D.depthBuffer&&($.__webglDepthRenderbuffer=s.createRenderbuffer(),At($.__webglDepthRenderbuffer,D,!0)),e.bindFramebuffer(36160,null)}}if(at){e.bindTexture(34067,it.__webglTexture),j(34067,T,Et);for(let N=0;N<6;N++)ot($.__webglFramebuffer[N],D,T,36064,34069+N);A(T,Et)&&R(34067),e.unbindTexture()}else if(ft){const N=D.texture;for(let H=0,pt=N.length;H<pt;H++){const _t=N[H],dt=n.get(_t);e.bindTexture(3553,dt.__webglTexture),j(3553,_t,Et),ot($.__webglFramebuffer,D,_t,36064+H,3553),A(_t,Et)&&R(3553)}e.unbindTexture()}else{let N=3553;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(a?N=D.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),e.bindTexture(N,it.__webglTexture),j(N,T,Et),ot($.__webglFramebuffer,D,T,36064,N),A(T,Et)&&R(N),e.unbindTexture()}D.depthBuffer&&St(D)}function Zt(D){const T=M(D)||a,$=D.isWebGLMultipleRenderTargets===!0?D.texture:[D.texture];for(let it=0,at=$.length;it<at;it++){const ft=$[it];if(A(ft,T)){const Et=D.isWebGLCubeRenderTarget?34067:3553,N=n.get(ft).__webglTexture;e.bindTexture(Et,N),R(Et),e.unbindTexture()}}}function ge(D){if(a&&D.samples>0&&Bt(D)===!1){const T=D.isWebGLMultipleRenderTargets?D.texture:[D.texture],$=D.width,it=D.height;let at=16384;const ft=[],Et=D.stencilBuffer?33306:36096,N=n.get(D),H=D.isWebGLMultipleRenderTargets===!0;if(H)for(let pt=0;pt<T.length;pt++)e.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+pt,36161,null),e.bindFramebuffer(36160,N.__webglFramebuffer),s.framebufferTexture2D(36009,36064+pt,3553,null,0);e.bindFramebuffer(36008,N.__webglMultisampledFramebuffer),e.bindFramebuffer(36009,N.__webglFramebuffer);for(let pt=0;pt<T.length;pt++){ft.push(36064+pt),D.depthBuffer&&ft.push(Et);const _t=N.__ignoreDepthValues!==void 0?N.__ignoreDepthValues:!1;if(_t===!1&&(D.depthBuffer&&(at|=256),D.stencilBuffer&&(at|=1024)),H&&s.framebufferRenderbuffer(36008,36064,36161,N.__webglColorRenderbuffer[pt]),_t===!0&&(s.invalidateFramebuffer(36008,[Et]),s.invalidateFramebuffer(36009,[Et])),H){const dt=n.get(T[pt]).__webglTexture;s.framebufferTexture2D(36009,36064,3553,dt,0)}s.blitFramebuffer(0,0,$,it,0,0,$,it,at,9728),d&&s.invalidateFramebuffer(36008,ft)}if(e.bindFramebuffer(36008,null),e.bindFramebuffer(36009,null),H)for(let pt=0;pt<T.length;pt++){e.bindFramebuffer(36160,N.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(36160,36064+pt,36161,N.__webglColorRenderbuffer[pt]);const _t=n.get(T[pt]).__webglTexture;e.bindFramebuffer(36160,N.__webglFramebuffer),s.framebufferTexture2D(36009,36064+pt,3553,_t,0)}e.bindFramebuffer(36009,N.__webglMultisampledFramebuffer)}}function Yt(D){return Math.min(f,D.samples)}function Bt(D){const T=n.get(D);return a&&D.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ze(D){const T=o.render.frame;g.get(D)!==T&&(g.set(D,T),D.update())}function we(D,T){const $=D.encoding,it=D.format,at=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||D.format===Uo||$!==ti&&($===Wt?a===!1?t.has("EXT_sRGB")===!0&&it===qe?(D.format=Uo,D.minFilter=Ue,D.generateMipmaps=!1):T=qc.sRGBToLinear(T):(it!==qe||at!==Qn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",$)),T}this.allocateTextureUnit=G,this.resetTextureUnits=B,this.setTexture2D=J,this.setTexture2DArray=lt,this.setTexture3D=U,this.setTextureCube=Q,this.rebindTextures=Xt,this.setupRenderTarget=he,this.updateRenderTargetMipmap=Zt,this.updateMultisampleRenderTarget=ge,this.setupDepthRenderbuffer=St,this.setupFrameBufferTexture=ot,this.useMultisampledRTT=Bt}function Kg(s,t,e){const n=e.isWebGL2;function i(r,o=null){let a;if(r===Qn)return 5121;if(r===Hh)return 32819;if(r===Wh)return 32820;if(r===kh)return 5120;if(r===Gh)return 5122;if(r===Vc)return 5123;if(r===Vh)return 5124;if(r===Xn)return 5125;if(r===jn)return 5126;if(r===ds)return n?5131:(a=t.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(r===qh)return 6406;if(r===qe)return 6408;if(r===Xh)return 6409;if(r===jh)return 6410;if(r===$n)return 6402;if(r===Ni)return 34041;if(r===Uo)return a=t.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(r===Yh)return 6403;if(r===$h)return 36244;if(r===Zh)return 33319;if(r===Kh)return 33320;if(r===Jh)return 36249;if(r===kr||r===Gr||r===Vr||r===Hr)if(o===Wt)if(a=t.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(r===kr)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Gr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Vr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Hr)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=t.get("WEBGL_compressed_texture_s3tc"),a!==null){if(r===kr)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Gr)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Vr)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Hr)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Da||r===Ia||r===Na||r===Fa)if(a=t.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(r===Da)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Ia)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Na)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Fa)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Qh)return a=t.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(r===za||r===Oa)if(a=t.get("WEBGL_compressed_texture_etc"),a!==null){if(r===za)return o===Wt?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(r===Oa)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===Ba||r===Ua||r===ka||r===Ga||r===Va||r===Ha||r===Wa||r===qa||r===Xa||r===ja||r===Ya||r===$a||r===Za||r===Ka)if(a=t.get("WEBGL_compressed_texture_astc"),a!==null){if(r===Ba)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ua)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===ka)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Ga)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Va)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Ha)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Wa)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===qa)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Xa)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===ja)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ya)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===$a)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Za)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Ka)return o===Wt?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Wr)if(a=t.get("EXT_texture_compression_bptc"),a!==null){if(r===Wr)return o===Wt?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(r===tf||r===Ja||r===Qa||r===tl)if(a=t.get("EXT_texture_compression_rgtc"),a!==null){if(r===Wr)return a.COMPRESSED_RED_RGTC1_EXT;if(r===Ja)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Qa)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===tl)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Li?n?34042:(a=t.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):s[r]!==void 0?s[r]:null}return{convert:i}}class Jg extends Le{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Xs extends ue{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qg={type:"move"};class xo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new V,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new V),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new V,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new V),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){o=!0;for(const m of t.hand.values()){const p=e.getJointPose(m,n),x=this._getHandJoint(l,m);p!==null&&(x.matrix.fromArray(p.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.jointRadius=p.radius),x.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,g=.005;l.inputState.pinching&&h>d+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&h<=d-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else c!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qg)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xs;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class t0 extends De{constructor(t,e,n,i,r,o,a,c,l,u){if(u=u!==void 0?u:$n,u!==$n&&u!==Ni)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$n&&(n=Xn),n===void 0&&u===Ni&&(n=Li),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:ye,this.minFilter=c!==void 0?c:ye,this.flipY=!1,this.generateMipmaps=!1}}class e0 extends In{constructor(t,e){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,f=null,h=null,d=null,g=null;const m=e.getContextAttributes();let p=null,x=null;const _=[],w=[],M=new Set,y=new Map,A=new Le;A.layers.enable(1),A.viewport=new ce;const R=new Le;R.layers.enable(2),R.viewport=new ce;const v=[A,R],S=new Jg;S.layers.enable(1),S.layers.enable(2);let C=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(U){let Q=_[U];return Q===void 0&&(Q=new xo,_[U]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(U){let Q=_[U];return Q===void 0&&(Q=new xo,_[U]=Q),Q.getGripSpace()},this.getHand=function(U){let Q=_[U];return Q===void 0&&(Q=new xo,_[U]=Q),Q.getHandSpace()};function O(U){const Q=w.indexOf(U.inputSource);if(Q===-1)return;const st=_[Q];st!==void 0&&st.dispatchEvent({type:U.type,data:U.inputSource})}function E(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",E),i.removeEventListener("inputsourceschange",P);for(let U=0;U<_.length;U++){const Q=w[U];Q!==null&&(w[U]=null,_[U].disconnect(Q))}C=null,z=null,t.setRenderTarget(p),d=null,h=null,f=null,i=null,x=null,lt.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(U){r=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(U){a=U,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(U){l=U},this.getBaseLayer=function(){return h!==null?h:d},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(U){if(i=U,i!==null){if(p=t.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",E),i.addEventListener("inputsourceschange",P),m.xrCompatible!==!0&&await e.makeXRCompatible(),i.renderState.layers===void 0||t.capabilities.isWebGL2===!1){const Q={antialias:i.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(i,e,Q),i.updateRenderState({baseLayer:d}),x=new ei(d.framebufferWidth,d.framebufferHeight,{format:qe,type:Qn,encoding:t.outputEncoding,stencilBuffer:m.stencil})}else{let Q=null,st=null,rt=null;m.depth&&(rt=m.stencil?35056:33190,Q=m.stencil?Ni:$n,st=m.stencil?Li:Xn);const j={colorFormat:32856,depthFormat:rt,scaleFactor:r};f=new XRWebGLBinding(i,e),h=f.createProjectionLayer(j),i.updateRenderState({layers:[h]}),x=new ei(h.textureWidth,h.textureHeight,{format:qe,type:Qn,depthTexture:new t0(h.textureWidth,h.textureHeight,st,void 0,void 0,void 0,void 0,void 0,void 0,Q),stencilBuffer:m.stencil,encoding:t.outputEncoding,samples:m.antialias?4:0});const q=t.properties.get(x);q.__ignoreDepthValues=h.ignoreDepthValues}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),lt.setContext(i),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function P(U){for(let Q=0;Q<U.removed.length;Q++){const st=U.removed[Q],rt=w.indexOf(st);rt>=0&&(w[rt]=null,_[rt].disconnect(st))}for(let Q=0;Q<U.added.length;Q++){const st=U.added[Q];let rt=w.indexOf(st);if(rt===-1){for(let q=0;q<_.length;q++)if(q>=w.length){w.push(st),rt=q;break}else if(w[q]===null){w[q]=st,rt=q;break}if(rt===-1)break}const j=_[rt];j&&j.connect(st)}}const I=new V,F=new V;function B(U,Q,st){I.setFromMatrixPosition(Q.matrixWorld),F.setFromMatrixPosition(st.matrixWorld);const rt=I.distanceTo(F),j=Q.projectionMatrix.elements,q=st.projectionMatrix.elements,et=j[14]/(j[10]-1),ct=j[14]/(j[10]+1),ot=(j[9]+1)/j[5],At=(j[9]-1)/j[5],bt=(j[8]-1)/j[0],St=(q[8]+1)/q[0],Xt=et*bt,he=et*St,Zt=rt/(-bt+St),ge=Zt*-bt;Q.matrixWorld.decompose(U.position,U.quaternion,U.scale),U.translateX(ge),U.translateZ(Zt),U.matrixWorld.compose(U.position,U.quaternion,U.scale),U.matrixWorldInverse.copy(U.matrixWorld).invert();const Yt=et+Zt,Bt=ct+Zt,ze=Xt-ge,we=he+(rt-ge),D=ot*ct/Bt*Yt,T=At*ct/Bt*Yt;U.projectionMatrix.makePerspective(ze,we,D,T,Yt,Bt)}function G(U,Q){Q===null?U.matrixWorld.copy(U.matrix):U.matrixWorld.multiplyMatrices(Q.matrixWorld,U.matrix),U.matrixWorldInverse.copy(U.matrixWorld).invert()}this.updateCamera=function(U){if(i===null)return;S.near=R.near=A.near=U.near,S.far=R.far=A.far=U.far,(C!==S.near||z!==S.far)&&(i.updateRenderState({depthNear:S.near,depthFar:S.far}),C=S.near,z=S.far);const Q=U.parent,st=S.cameras;G(S,Q);for(let j=0;j<st.length;j++)G(st[j],Q);S.matrixWorld.decompose(S.position,S.quaternion,S.scale),U.matrix.copy(S.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale);const rt=U.children;for(let j=0,q=rt.length;j<q;j++)rt[j].updateMatrixWorld(!0);st.length===2?B(S,A,R):S.projectionMatrix.copy(A.projectionMatrix)},this.getCamera=function(){return S},this.getFoveation=function(){if(!(h===null&&d===null))return c},this.setFoveation=function(U){c=U,h!==null&&(h.fixedFoveation=U),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=U)},this.getPlanes=function(){return M};let Y=null;function J(U,Q){if(u=Q.getViewerPose(l||o),g=Q,u!==null){const st=u.views;d!==null&&(t.setRenderTargetFramebuffer(x,d.framebuffer),t.setRenderTarget(x));let rt=!1;st.length!==S.cameras.length&&(S.cameras.length=0,rt=!0);for(let j=0;j<st.length;j++){const q=st[j];let et=null;if(d!==null)et=d.getViewport(q);else{const ot=f.getViewSubImage(h,q);et=ot.viewport,j===0&&(t.setRenderTargetTextures(x,ot.colorTexture,h.ignoreDepthValues?void 0:ot.depthStencilTexture),t.setRenderTarget(x))}let ct=v[j];ct===void 0&&(ct=new Le,ct.layers.enable(j),ct.viewport=new ce,v[j]=ct),ct.matrix.fromArray(q.transform.matrix),ct.projectionMatrix.fromArray(q.projectionMatrix),ct.viewport.set(et.x,et.y,et.width,et.height),j===0&&S.matrix.copy(ct.matrix),rt===!0&&S.cameras.push(ct)}}for(let st=0;st<_.length;st++){const rt=w[st],j=_[st];rt!==null&&j!==void 0&&j.update(rt,Q,l||o)}if(Y&&Y(U,Q),Q.detectedPlanes){n.dispatchEvent({type:"planesdetected",data:Q.detectedPlanes});let st=null;for(const rt of M)Q.detectedPlanes.has(rt)||(st===null&&(st=[]),st.push(rt));if(st!==null)for(const rt of st)M.delete(rt),y.delete(rt),n.dispatchEvent({type:"planeremoved",data:rt});for(const rt of Q.detectedPlanes)if(!M.has(rt))M.add(rt),y.set(rt,Q.lastChangedTime),n.dispatchEvent({type:"planeadded",data:rt});else{const j=y.get(rt);rt.lastChangedTime>j&&(y.set(rt,rt.lastChangedTime),n.dispatchEvent({type:"planechanged",data:rt}))}}g=null}const lt=new eu;lt.setAnimationLoop(J),this.setAnimationLoop=function(U){Y=U},this.dispose=function(){}}}function n0(s,t){function e(m,p){p.color.getRGB(m.fogColor.value,Jc(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,x,_,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?i(m,p):p.isMeshToonMaterial?(i(m,p),u(m,p)):p.isMeshPhongMaterial?(i(m,p),l(m,p)):p.isMeshStandardMaterial?(i(m,p),f(m,p),p.isMeshPhysicalMaterial&&h(m,p,w)):p.isMeshMatcapMaterial?(i(m,p),d(m,p)):p.isMeshDepthMaterial?i(m,p):p.isMeshDistanceMaterial?(i(m,p),g(m,p)):p.isMeshNormalMaterial?i(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?a(m,p,x,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function i(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.bumpMap&&(m.bumpMap.value=p.bumpMap,m.bumpScale.value=p.bumpScale,p.side===Re&&(m.bumpScale.value*=-1)),p.displacementMap&&(m.displacementMap.value=p.displacementMap,m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap),p.normalMap&&(m.normalMap.value=p.normalMap,m.normalScale.value.copy(p.normalScale),p.side===Re&&m.normalScale.value.negate()),p.specularMap&&(m.specularMap.value=p.specularMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=t.get(p).envMap;if(x&&(m.envMap.value=x,m.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const M=s.physicallyCorrectLights!==!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*M}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity);let _;p.map?_=p.map:p.specularMap?_=p.specularMap:p.displacementMap?_=p.displacementMap:p.normalMap?_=p.normalMap:p.bumpMap?_=p.bumpMap:p.roughnessMap?_=p.roughnessMap:p.metalnessMap?_=p.metalnessMap:p.alphaMap?_=p.alphaMap:p.emissiveMap?_=p.emissiveMap:p.clearcoatMap?_=p.clearcoatMap:p.clearcoatNormalMap?_=p.clearcoatNormalMap:p.clearcoatRoughnessMap?_=p.clearcoatRoughnessMap:p.iridescenceMap?_=p.iridescenceMap:p.iridescenceThicknessMap?_=p.iridescenceThicknessMap:p.specularIntensityMap?_=p.specularIntensityMap:p.specularColorMap?_=p.specularColorMap:p.transmissionMap?_=p.transmissionMap:p.thicknessMap?_=p.thicknessMap:p.sheenColorMap?_=p.sheenColorMap:p.sheenRoughnessMap&&(_=p.sheenRoughnessMap),_!==void 0&&(_.isWebGLRenderTarget&&(_=_.texture),_.matrixAutoUpdate===!0&&_.updateMatrix(),m.uvTransform.value.copy(_.matrix));let w;p.aoMap?w=p.aoMap:p.lightMap&&(w=p.lightMap),w!==void 0&&(w.isWebGLRenderTarget&&(w=w.texture),w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uv2Transform.value.copy(w.matrix))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,x,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=_*.5,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let w;p.map?w=p.map:p.alphaMap&&(w=p.alphaMap),w!==void 0&&(w.matrixAutoUpdate===!0&&w.updateMatrix(),m.uvTransform.value.copy(w.matrix))}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map),p.alphaMap&&(m.alphaMap.value=p.alphaMap),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),m.uvTransform.value.copy(x.matrix))}function l(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.roughness.value=p.roughness,m.metalness.value=p.metalness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap),t.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),m.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===Re&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap)}function d(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){m.referencePosition.value.copy(p.referencePosition),m.nearDistance.value=p.nearDistance,m.farDistance.value=p.farDistance}return{refreshFogUniforms:e,refreshMaterialUniforms:n}}function i0(s,t,e,n){let i={},r={},o=[];const a=e.isWebGL2?s.getParameter(35375):0;function c(_,w){const M=w.program;n.uniformBlockBinding(_,M)}function l(_,w){let M=i[_.id];M===void 0&&(g(_),M=u(_),i[_.id]=M,_.addEventListener("dispose",p));const y=w.program;n.updateUBOMapping(_,y);const A=t.render.frame;r[_.id]!==A&&(h(_),r[_.id]=A)}function u(_){const w=f();_.__bindingPointIndex=w;const M=s.createBuffer(),y=_.__size,A=_.usage;return s.bindBuffer(35345,M),s.bufferData(35345,y,A),s.bindBuffer(35345,null),s.bindBufferBase(35345,w,M),M}function f(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const w=i[_.id],M=_.uniforms,y=_.__cache;s.bindBuffer(35345,w);for(let A=0,R=M.length;A<R;A++){const v=M[A];if(d(v,A,y)===!0){const S=v.__offset,C=Array.isArray(v.value)?v.value:[v.value];let z=0;for(let O=0;O<C.length;O++){const E=C[O],P=m(E);typeof E=="number"?(v.__data[0]=E,s.bufferSubData(35345,S+z,v.__data)):E.isMatrix3?(v.__data[0]=E.elements[0],v.__data[1]=E.elements[1],v.__data[2]=E.elements[2],v.__data[3]=E.elements[0],v.__data[4]=E.elements[3],v.__data[5]=E.elements[4],v.__data[6]=E.elements[5],v.__data[7]=E.elements[0],v.__data[8]=E.elements[6],v.__data[9]=E.elements[7],v.__data[10]=E.elements[8],v.__data[11]=E.elements[0]):(E.toArray(v.__data,z),z+=P.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(35345,S,v.__data)}}s.bindBuffer(35345,null)}function d(_,w,M){const y=_.value;if(M[w]===void 0){if(typeof y=="number")M[w]=y;else{const A=Array.isArray(y)?y:[y],R=[];for(let v=0;v<A.length;v++)R.push(A[v].clone());M[w]=R}return!0}else if(typeof y=="number"){if(M[w]!==y)return M[w]=y,!0}else{const A=Array.isArray(M[w])?M[w]:[M[w]],R=Array.isArray(y)?y:[y];for(let v=0;v<A.length;v++){const S=A[v];if(S.equals(R[v])===!1)return S.copy(R[v]),!0}}return!1}function g(_){const w=_.uniforms;let M=0;const y=16;let A=0;for(let R=0,v=w.length;R<v;R++){const S=w[R],C={boundary:0,storage:0},z=Array.isArray(S.value)?S.value:[S.value];for(let O=0,E=z.length;O<E;O++){const P=z[O],I=m(P);C.boundary+=I.boundary,C.storage+=I.storage}if(S.__data=new Float32Array(C.storage/Float32Array.BYTES_PER_ELEMENT),S.__offset=M,R>0){A=M%y;const O=y-A;A!==0&&O-C.boundary<0&&(M+=y-A,S.__offset=M)}M+=C.storage}return A=M%y,A>0&&(M+=y-A),_.__size=M,_.__cache={},this}function m(_){const w={boundary:0,storage:0};return typeof _=="number"?(w.boundary=4,w.storage=4):_.isVector2?(w.boundary=8,w.storage=8):_.isVector3||_.isColor?(w.boundary=16,w.storage=12):_.isVector4?(w.boundary=16,w.storage=16):_.isMatrix3?(w.boundary=48,w.storage=48):_.isMatrix4?(w.boundary=64,w.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),w}function p(_){const w=_.target;w.removeEventListener("dispose",p);const M=o.indexOf(w.__bindingPointIndex);o.splice(M,1),s.deleteBuffer(i[w.id]),delete i[w.id],delete r[w.id]}function x(){for(const _ in i)s.deleteBuffer(i[_]);o=[],i={},r={}}return{bind:c,update:l,dispose:x}}function s0(){const s=ur("canvas");return s.style.display="block",s}function ia(s={}){this.isWebGLRenderer=!0;const t=s.canvas!==void 0?s.canvas:s0(),e=s.context!==void 0?s.context:null,n=s.depth!==void 0?s.depth:!0,i=s.stencil!==void 0?s.stencil:!0,r=s.antialias!==void 0?s.antialias:!1,o=s.premultipliedAlpha!==void 0?s.premultipliedAlpha:!0,a=s.preserveDrawingBuffer!==void 0?s.preserveDrawingBuffer:!1,c=s.powerPreference!==void 0?s.powerPreference:"default",l=s.failIfMajorPerformanceCaveat!==void 0?s.failIfMajorPerformanceCaveat:!1;let u;e!==null?u=e.getContextAttributes().alpha:u=s.alpha!==void 0?s.alpha:!1;let f=null,h=null;const d=[],g=[];this.domElement=t,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ti,this.physicallyCorrectLights=!1,this.toneMapping=yn,this.toneMappingExposure=1;const m=this;let p=!1,x=0,_=0,w=null,M=-1,y=null;const A=new ce,R=new ce;let v=null,S=t.width,C=t.height,z=1,O=null,E=null;const P=new ce(0,0,S,C),I=new ce(0,0,S,C);let F=!1;const B=new ea;let G=!1,Y=!1,J=null;const lt=new kt,U=new Mt,Q=new V,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function rt(){return w===null?z:1}let j=e;function q(L,X){for(let K=0;K<L.length;K++){const W=L[K],tt=t.getContext(W,X);if(tt!==null)return tt}return null}try{const L={alpha:!0,depth:n,stencil:i,antialias:r,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jo}`),t.addEventListener("webglcontextlost",vt,!1),t.addEventListener("webglcontextrestored",xt,!1),t.addEventListener("webglcontextcreationerror",Rt,!1),j===null){const X=["webgl2","webgl","experimental-webgl"];if(m.isWebGL1Renderer===!0&&X.shift(),j=q(X,L),j===null)throw q(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}j.getShaderPrecisionFormat===void 0&&(j.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(L){throw console.error("THREE.WebGLRenderer: "+L.message),L}let et,ct,ot,At,bt,St,Xt,he,Zt,ge,Yt,Bt,ze,we,D,T,$,it,at,ft,Et,N,H,pt;function _t(){et=new mm(j),ct=new cm(j,et,s),et.init(ct),N=new Kg(j,et,ct),ot=new $g(j,et,ct),At=new xm,bt=new Fg,St=new Zg(j,et,ot,bt,ct,N,At),Xt=new hm(m),he=new pm(m),Zt=new Af(j,ct),H=new am(j,et,Zt,ct),ge=new gm(j,Zt,At,H),Yt=new Mm(j,ge,Zt,At),at=new wm(j,ct,St),T=new um(bt),Bt=new Ng(m,Xt,he,et,ct,H,T),ze=new n0(m,bt),we=new Og,D=new Hg(et,ct),it=new om(m,Xt,he,ot,Yt,u,o),$=new Yg(m,Yt,ct),pt=new i0(j,At,ct,ot),ft=new lm(j,et,At,ct),Et=new _m(j,et,At,ct),At.programs=Bt.programs,m.capabilities=ct,m.extensions=et,m.properties=bt,m.renderLists=we,m.shadowMap=$,m.state=ot,m.info=At}_t();const dt=new e0(m,j);this.xr=dt,this.getContext=function(){return j},this.getContextAttributes=function(){return j.getContextAttributes()},this.forceContextLoss=function(){const L=et.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=et.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(L){L!==void 0&&(z=L,this.setSize(S,C,!1))},this.getSize=function(L){return L.set(S,C)},this.setSize=function(L,X,K){if(dt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}S=L,C=X,t.width=Math.floor(L*z),t.height=Math.floor(X*z),K!==!1&&(t.style.width=L+"px",t.style.height=X+"px"),this.setViewport(0,0,L,X)},this.getDrawingBufferSize=function(L){return L.set(S*z,C*z).floor()},this.setDrawingBufferSize=function(L,X,K){S=L,C=X,z=K,t.width=Math.floor(L*K),t.height=Math.floor(X*K),this.setViewport(0,0,L,X)},this.getCurrentViewport=function(L){return L.copy(A)},this.getViewport=function(L){return L.copy(P)},this.setViewport=function(L,X,K,W){L.isVector4?P.set(L.x,L.y,L.z,L.w):P.set(L,X,K,W),ot.viewport(A.copy(P).multiplyScalar(z).floor())},this.getScissor=function(L){return L.copy(I)},this.setScissor=function(L,X,K,W){L.isVector4?I.set(L.x,L.y,L.z,L.w):I.set(L,X,K,W),ot.scissor(R.copy(I).multiplyScalar(z).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(L){ot.setScissorTest(F=L)},this.setOpaqueSort=function(L){O=L},this.setTransparentSort=function(L){E=L},this.getClearColor=function(L){return L.copy(it.getClearColor())},this.setClearColor=function(){it.setClearColor.apply(it,arguments)},this.getClearAlpha=function(){return it.getClearAlpha()},this.setClearAlpha=function(){it.setClearAlpha.apply(it,arguments)},this.clear=function(L=!0,X=!0,K=!0){let W=0;L&&(W|=16384),X&&(W|=256),K&&(W|=1024),j.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",vt,!1),t.removeEventListener("webglcontextrestored",xt,!1),t.removeEventListener("webglcontextcreationerror",Rt,!1),we.dispose(),D.dispose(),bt.dispose(),Xt.dispose(),he.dispose(),Yt.dispose(),H.dispose(),pt.dispose(),Bt.dispose(),dt.dispose(),dt.removeEventListener("sessionstart",mt),dt.removeEventListener("sessionend",yt),J&&(J.dispose(),J=null),Ut.stop()};function vt(L){L.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const L=At.autoReset,X=$.enabled,K=$.autoUpdate,W=$.needsUpdate,tt=$.type;_t(),At.autoReset=L,$.enabled=X,$.autoUpdate=K,$.needsUpdate=W,$.type=tt}function Rt(L){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function Dt(L){const X=L.target;X.removeEventListener("dispose",Dt),Gt(X)}function Gt(L){k(L),bt.remove(L)}function k(L){const X=bt.get(L).programs;X!==void 0&&(X.forEach(function(K){Bt.releaseProgram(K)}),L.isShaderMaterial&&Bt.releaseShaderCache(L))}this.renderBufferDirect=function(L,X,K,W,tt,wt){X===null&&(X=st);const Tt=tt.isMesh&&tt.matrixWorld.determinant()<0,Lt=oh(L,X,K,W,tt);ot.setMaterial(W,Tt);let Pt=K.index,Ot=1;W.wireframe===!0&&(Pt=ge.getWireframeAttribute(K),Ot=2);const It=K.drawRange,Nt=K.attributes.position;let Kt=It.start*Ot,Se=(It.start+It.count)*Ot;wt!==null&&(Kt=Math.max(Kt,wt.start*Ot),Se=Math.min(Se,(wt.start+wt.count)*Ot)),Pt!==null?(Kt=Math.max(Kt,0),Se=Math.min(Se,Pt.count)):Nt!=null&&(Kt=Math.max(Kt,0),Se=Math.min(Se,Nt.count));const rn=Se-Kt;if(rn<0||rn===1/0)return;H.setup(tt,W,Lt,K,Pt);let Fn,Jt=ft;if(Pt!==null&&(Fn=Zt.get(Pt),Jt=Et,Jt.setIndex(Fn)),tt.isMesh)W.wireframe===!0?(ot.setLineWidth(W.wireframeLinewidth*rt()),Jt.setMode(1)):Jt.setMode(4);else if(tt.isLine){let Ft=W.linewidth;Ft===void 0&&(Ft=1),ot.setLineWidth(Ft*rt()),tt.isLineSegments?Jt.setMode(1):tt.isLineLoop?Jt.setMode(2):Jt.setMode(3)}else tt.isPoints?Jt.setMode(0):tt.isSprite&&Jt.setMode(4);if(tt.isInstancedMesh)Jt.renderInstances(Kt,rn,tt.count);else if(K.isInstancedBufferGeometry){const Ft=K._maxInstanceCount!==void 0?K._maxInstanceCount:1/0,Fr=Math.min(K.instanceCount,Ft);Jt.renderInstances(Kt,rn,Fr)}else Jt.render(Kt,rn)},this.compile=function(L,X){function K(W,tt,wt){W.transparent===!0&&W.side===Cn&&W.forceSinglePass===!1?(W.side=Re,W.needsUpdate=!0,Oe(W,tt,wt),W.side=Pn,W.needsUpdate=!0,Oe(W,tt,wt),W.side=Cn):Oe(W,tt,wt)}h=D.get(L),h.init(),g.push(h),L.traverseVisible(function(W){W.isLight&&W.layers.test(X.layers)&&(h.pushLight(W),W.castShadow&&h.pushShadow(W))}),h.setupLights(m.physicallyCorrectLights),L.traverse(function(W){const tt=W.material;if(tt)if(Array.isArray(tt))for(let wt=0;wt<tt.length;wt++){const Tt=tt[wt];K(Tt,L,W)}else K(tt,L,W)}),g.pop(),h=null};let Z=null;function nt(L){Z&&Z(L)}function mt(){Ut.stop()}function yt(){Ut.start()}const Ut=new eu;Ut.setAnimationLoop(nt),typeof self<"u"&&Ut.setContext(self),this.setAnimationLoop=function(L){Z=L,dt.setAnimationLoop(L),L===null?Ut.stop():Ut.start()},dt.addEventListener("sessionstart",mt),dt.addEventListener("sessionend",yt),this.render=function(L,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),dt.enabled===!0&&dt.isPresenting===!0&&(dt.cameraAutoUpdate===!0&&dt.updateCamera(X),X=dt.getCamera()),L.isScene===!0&&L.onBeforeRender(m,L,X,w),h=D.get(L,g.length),h.init(),g.push(h),lt.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),B.setFromProjectionMatrix(lt),Y=this.localClippingEnabled,G=T.init(this.clippingPlanes,Y),f=we.get(L,d.length),f.init(),d.push(f),oe(L,X,0,m.sortObjects),f.finish(),m.sortObjects===!0&&f.sort(O,E),G===!0&&T.beginShadows();const K=h.state.shadowsArray;if($.render(K,L,X),G===!0&&T.endShadows(),this.info.autoReset===!0&&this.info.reset(),it.render(f,L),h.setupLights(m.physicallyCorrectLights),X.isArrayCamera){const W=X.cameras;for(let tt=0,wt=W.length;tt<wt;tt++){const Tt=W[tt];fe(f,L,Tt,Tt.viewport)}}else fe(f,L,X);w!==null&&(St.updateMultisampleRenderTarget(w),St.updateRenderTargetMipmap(w)),L.isScene===!0&&L.onAfterRender(m,L,X),H.resetDefaultState(),M=-1,y=null,g.pop(),g.length>0?h=g[g.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function oe(L,X,K,W){if(L.visible===!1)return;if(L.layers.test(X.layers)){if(L.isGroup)K=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(X);else if(L.isLight)h.pushLight(L),L.castShadow&&h.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||B.intersectsSprite(L)){W&&Q.setFromMatrixPosition(L.matrixWorld).applyMatrix4(lt);const Tt=Yt.update(L),Lt=L.material;Lt.visible&&f.push(L,Tt,Lt,K,Q.z,null)}}else if((L.isMesh||L.isLine||L.isPoints)&&(L.isSkinnedMesh&&L.skeleton.frame!==At.render.frame&&(L.skeleton.update(),L.skeleton.frame=At.render.frame),!L.frustumCulled||B.intersectsObject(L))){W&&Q.setFromMatrixPosition(L.matrixWorld).applyMatrix4(lt);const Tt=Yt.update(L),Lt=L.material;if(Array.isArray(Lt)){const Pt=Tt.groups;for(let Ot=0,It=Pt.length;Ot<It;Ot++){const Nt=Pt[Ot],Kt=Lt[Nt.materialIndex];Kt&&Kt.visible&&f.push(L,Tt,Kt,K,Q.z,Nt)}}else Lt.visible&&f.push(L,Tt,Lt,K,Q.z,null)}}const wt=L.children;for(let Tt=0,Lt=wt.length;Tt<Lt;Tt++)oe(wt[Tt],X,K,W)}function fe(L,X,K,W){const tt=L.opaque,wt=L.transmissive,Tt=L.transparent;h.setupLightsView(K),G===!0&&T.setGlobalState(m.clippingPlanes,K),wt.length>0&&Nn(tt,X,K),W&&ot.viewport(A.copy(W)),tt.length>0&&qt(tt,X,K),wt.length>0&&qt(wt,X,K),Tt.length>0&&qt(Tt,X,K),ot.buffers.depth.setTest(!0),ot.buffers.depth.setMask(!0),ot.buffers.color.setMask(!0),ot.setPolygonOffset(!1)}function Nn(L,X,K){const W=ct.isWebGL2;J===null&&(J=new ei(1,1,{generateMipmaps:!0,type:et.has("EXT_color_buffer_half_float")?ds:Qn,minFilter:fs,samples:W&&r===!0?4:0})),m.getDrawingBufferSize(U),W?J.setSize(U.x,U.y):J.setSize(ko(U.x),ko(U.y));const tt=m.getRenderTarget();m.setRenderTarget(J),m.clear();const wt=m.toneMapping;m.toneMapping=yn,qt(L,X,K),m.toneMapping=wt,St.updateMultisampleRenderTarget(J),St.updateRenderTargetMipmap(J),m.setRenderTarget(tt)}function qt(L,X,K){const W=X.isScene===!0?X.overrideMaterial:null;for(let tt=0,wt=L.length;tt<wt;tt++){const Tt=L[tt],Lt=Tt.object,Pt=Tt.geometry,Ot=W===null?Tt.material:W,It=Tt.group;Lt.layers.test(K.layers)&&sn(Lt,X,K,Pt,Ot,It)}}function sn(L,X,K,W,tt,wt){L.onBeforeRender(m,X,K,W,tt,wt),L.modelViewMatrix.multiplyMatrices(K.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),tt.onBeforeRender(m,X,K,W,L,wt),tt.transparent===!0&&tt.side===Cn&&tt.forceSinglePass===!1?(tt.side=Re,tt.needsUpdate=!0,m.renderBufferDirect(K,X,W,tt,L,wt),tt.side=Pn,tt.needsUpdate=!0,m.renderBufferDirect(K,X,W,tt,L,wt),tt.side=Cn):m.renderBufferDirect(K,X,W,tt,L,wt),L.onAfterRender(m,X,K,W,tt,wt)}function Oe(L,X,K){X.isScene!==!0&&(X=st);const W=bt.get(L),tt=h.state.lights,wt=h.state.shadowsArray,Tt=tt.state.version,Lt=Bt.getParameters(L,tt.state,wt,X,K),Pt=Bt.getProgramCacheKey(Lt);let Ot=W.programs;W.environment=L.isMeshStandardMaterial?X.environment:null,W.fog=X.fog,W.envMap=(L.isMeshStandardMaterial?he:Xt).get(L.envMap||W.environment),Ot===void 0&&(L.addEventListener("dispose",Dt),Ot=new Map,W.programs=Ot);let It=Ot.get(Pt);if(It!==void 0){if(W.currentProgram===It&&W.lightsStateVersion===Tt)return Ma(L,Lt),It}else Lt.uniforms=Bt.getUniforms(L),L.onBuild(K,Lt,m),L.onBeforeCompile(Lt,m),It=Bt.acquireProgram(Lt,Pt),Ot.set(Pt,It),W.uniforms=Lt.uniforms;const Nt=W.uniforms;(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(Nt.clippingPlanes=T.uniform),Ma(L,Lt),W.needsLights=lh(L),W.lightsStateVersion=Tt,W.needsLights&&(Nt.ambientLightColor.value=tt.state.ambient,Nt.lightProbe.value=tt.state.probe,Nt.directionalLights.value=tt.state.directional,Nt.directionalLightShadows.value=tt.state.directionalShadow,Nt.spotLights.value=tt.state.spot,Nt.spotLightShadows.value=tt.state.spotShadow,Nt.rectAreaLights.value=tt.state.rectArea,Nt.ltc_1.value=tt.state.rectAreaLTC1,Nt.ltc_2.value=tt.state.rectAreaLTC2,Nt.pointLights.value=tt.state.point,Nt.pointLightShadows.value=tt.state.pointShadow,Nt.hemisphereLights.value=tt.state.hemi,Nt.directionalShadowMap.value=tt.state.directionalShadowMap,Nt.directionalShadowMatrix.value=tt.state.directionalShadowMatrix,Nt.spotShadowMap.value=tt.state.spotShadowMap,Nt.spotLightMatrix.value=tt.state.spotLightMatrix,Nt.spotLightMap.value=tt.state.spotLightMap,Nt.pointShadowMap.value=tt.state.pointShadowMap,Nt.pointShadowMatrix.value=tt.state.pointShadowMatrix);const Kt=It.getUniforms(),Se=or.seqWithValue(Kt.seq,Nt);return W.currentProgram=It,W.uniformsList=Se,It}function Ma(L,X){const K=bt.get(L);K.outputEncoding=X.outputEncoding,K.instancing=X.instancing,K.skinning=X.skinning,K.morphTargets=X.morphTargets,K.morphNormals=X.morphNormals,K.morphColors=X.morphColors,K.morphTargetsCount=X.morphTargetsCount,K.numClippingPlanes=X.numClippingPlanes,K.numIntersection=X.numClipIntersection,K.vertexAlphas=X.vertexAlphas,K.vertexTangents=X.vertexTangents,K.toneMapping=X.toneMapping}function oh(L,X,K,W,tt){X.isScene!==!0&&(X=st),St.resetTextureUnits();const wt=X.fog,Tt=W.isMeshStandardMaterial?X.environment:null,Lt=w===null?m.outputEncoding:w.isXRRenderTarget===!0?w.texture.encoding:ti,Pt=(W.isMeshStandardMaterial?he:Xt).get(W.envMap||Tt),Ot=W.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,It=!!W.normalMap&&!!K.attributes.tangent,Nt=!!K.morphAttributes.position,Kt=!!K.morphAttributes.normal,Se=!!K.morphAttributes.color,rn=W.toneMapped?m.toneMapping:yn,Fn=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Jt=Fn!==void 0?Fn.length:0,Ft=bt.get(W),Fr=h.state.lights;if(G===!0&&(Y===!0||L!==y)){const Ee=L===y&&W.id===M;T.setState(W,L,Ee)}let ae=!1;W.version===Ft.__version?(Ft.needsLights&&Ft.lightsStateVersion!==Fr.state.version||Ft.outputEncoding!==Lt||tt.isInstancedMesh&&Ft.instancing===!1||!tt.isInstancedMesh&&Ft.instancing===!0||tt.isSkinnedMesh&&Ft.skinning===!1||!tt.isSkinnedMesh&&Ft.skinning===!0||Ft.envMap!==Pt||W.fog===!0&&Ft.fog!==wt||Ft.numClippingPlanes!==void 0&&(Ft.numClippingPlanes!==T.numPlanes||Ft.numIntersection!==T.numIntersection)||Ft.vertexAlphas!==Ot||Ft.vertexTangents!==It||Ft.morphTargets!==Nt||Ft.morphNormals!==Kt||Ft.morphColors!==Se||Ft.toneMapping!==rn||ct.isWebGL2===!0&&Ft.morphTargetsCount!==Jt)&&(ae=!0):(ae=!0,Ft.__version=W.version);let zn=Ft.currentProgram;ae===!0&&(zn=Oe(W,X,tt));let ba=!1,qi=!1,zr=!1;const _e=zn.getUniforms(),On=Ft.uniforms;if(ot.useProgram(zn.program)&&(ba=!0,qi=!0,zr=!0),W.id!==M&&(M=W.id,qi=!0),ba||y!==L){if(_e.setValue(j,"projectionMatrix",L.projectionMatrix),ct.logarithmicDepthBuffer&&_e.setValue(j,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),y!==L&&(y=L,qi=!0,zr=!0),W.isShaderMaterial||W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshStandardMaterial||W.envMap){const Ee=_e.map.cameraPosition;Ee!==void 0&&Ee.setValue(j,Q.setFromMatrixPosition(L.matrixWorld))}(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&_e.setValue(j,"isOrthographic",L.isOrthographicCamera===!0),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial||W.isShadowMaterial||tt.isSkinnedMesh)&&_e.setValue(j,"viewMatrix",L.matrixWorldInverse)}if(tt.isSkinnedMesh){_e.setOptional(j,tt,"bindMatrix"),_e.setOptional(j,tt,"bindMatrixInverse");const Ee=tt.skeleton;Ee&&(ct.floatVertexTextures?(Ee.boneTexture===null&&Ee.computeBoneTexture(),_e.setValue(j,"boneTexture",Ee.boneTexture,St),_e.setValue(j,"boneTextureSize",Ee.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Or=K.morphAttributes;if((Or.position!==void 0||Or.normal!==void 0||Or.color!==void 0&&ct.isWebGL2===!0)&&at.update(tt,K,W,zn),(qi||Ft.receiveShadow!==tt.receiveShadow)&&(Ft.receiveShadow=tt.receiveShadow,_e.setValue(j,"receiveShadow",tt.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(On.envMap.value=Pt,On.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),qi&&(_e.setValue(j,"toneMappingExposure",m.toneMappingExposure),Ft.needsLights&&ah(On,zr),wt&&W.fog===!0&&ze.refreshFogUniforms(On,wt),ze.refreshMaterialUniforms(On,W,z,C,J),or.upload(j,Ft.uniformsList,On,St)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(or.upload(j,Ft.uniformsList,On,St),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&_e.setValue(j,"center",tt.center),_e.setValue(j,"modelViewMatrix",tt.modelViewMatrix),_e.setValue(j,"normalMatrix",tt.normalMatrix),_e.setValue(j,"modelMatrix",tt.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Ee=W.uniformsGroups;for(let Br=0,ch=Ee.length;Br<ch;Br++)if(ct.isWebGL2){const Sa=Ee[Br];pt.update(Sa,zn),pt.bind(Sa,zn)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return zn}function ah(L,X){L.ambientLightColor.needsUpdate=X,L.lightProbe.needsUpdate=X,L.directionalLights.needsUpdate=X,L.directionalLightShadows.needsUpdate=X,L.pointLights.needsUpdate=X,L.pointLightShadows.needsUpdate=X,L.spotLights.needsUpdate=X,L.spotLightShadows.needsUpdate=X,L.rectAreaLights.needsUpdate=X,L.hemisphereLights.needsUpdate=X}function lh(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return _},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(L,X,K){bt.get(L.texture).__webglTexture=X,bt.get(L.depthTexture).__webglTexture=K;const W=bt.get(L);W.__hasExternalTextures=!0,W.__hasExternalTextures&&(W.__autoAllocateDepthBuffer=K===void 0,W.__autoAllocateDepthBuffer||et.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(L,X){const K=bt.get(L);K.__webglFramebuffer=X,K.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(L,X=0,K=0){w=L,x=X,_=K;let W=!0,tt=null,wt=!1,Tt=!1;if(L){const Pt=bt.get(L);Pt.__useDefaultFramebuffer!==void 0?(ot.bindFramebuffer(36160,null),W=!1):Pt.__webglFramebuffer===void 0?St.setupRenderTarget(L):Pt.__hasExternalTextures&&St.rebindTextures(L,bt.get(L.texture).__webglTexture,bt.get(L.depthTexture).__webglTexture);const Ot=L.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(Tt=!0);const It=bt.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(tt=It[X],wt=!0):ct.isWebGL2&&L.samples>0&&St.useMultisampledRTT(L)===!1?tt=bt.get(L).__webglMultisampledFramebuffer:tt=It,A.copy(L.viewport),R.copy(L.scissor),v=L.scissorTest}else A.copy(P).multiplyScalar(z).floor(),R.copy(I).multiplyScalar(z).floor(),v=F;if(ot.bindFramebuffer(36160,tt)&&ct.drawBuffers&&W&&ot.drawBuffers(L,tt),ot.viewport(A),ot.scissor(R),ot.setScissorTest(v),wt){const Pt=bt.get(L.texture);j.framebufferTexture2D(36160,36064,34069+X,Pt.__webglTexture,K)}else if(Tt){const Pt=bt.get(L.texture),Ot=X||0;j.framebufferTextureLayer(36160,36064,Pt.__webglTexture,K||0,Ot)}M=-1},this.readRenderTargetPixels=function(L,X,K,W,tt,wt,Tt){if(!(L&&L.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Lt=bt.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&Tt!==void 0&&(Lt=Lt[Tt]),Lt){ot.bindFramebuffer(36160,Lt);try{const Pt=L.texture,Ot=Pt.format,It=Pt.type;if(Ot!==qe&&N.convert(Ot)!==j.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Nt=It===ds&&(et.has("EXT_color_buffer_half_float")||ct.isWebGL2&&et.has("EXT_color_buffer_float"));if(It!==Qn&&N.convert(It)!==j.getParameter(35738)&&!(It===jn&&(ct.isWebGL2||et.has("OES_texture_float")||et.has("WEBGL_color_buffer_float")))&&!Nt){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=L.width-W&&K>=0&&K<=L.height-tt&&j.readPixels(X,K,W,tt,N.convert(Ot),N.convert(It),wt)}finally{const Pt=w!==null?bt.get(w).__webglFramebuffer:null;ot.bindFramebuffer(36160,Pt)}}},this.copyFramebufferToTexture=function(L,X,K=0){const W=Math.pow(2,-K),tt=Math.floor(X.image.width*W),wt=Math.floor(X.image.height*W);St.setTexture2D(X,0),j.copyTexSubImage2D(3553,K,0,0,L.x,L.y,tt,wt),ot.unbindTexture()},this.copyTextureToTexture=function(L,X,K,W=0){const tt=X.image.width,wt=X.image.height,Tt=N.convert(K.format),Lt=N.convert(K.type);St.setTexture2D(K,0),j.pixelStorei(37440,K.flipY),j.pixelStorei(37441,K.premultiplyAlpha),j.pixelStorei(3317,K.unpackAlignment),X.isDataTexture?j.texSubImage2D(3553,W,L.x,L.y,tt,wt,Tt,Lt,X.image.data):X.isCompressedTexture?j.compressedTexSubImage2D(3553,W,L.x,L.y,X.mipmaps[0].width,X.mipmaps[0].height,Tt,X.mipmaps[0].data):j.texSubImage2D(3553,W,L.x,L.y,Tt,Lt,X.image),W===0&&K.generateMipmaps&&j.generateMipmap(3553),ot.unbindTexture()},this.copyTextureToTexture3D=function(L,X,K,W,tt=0){if(m.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const wt=L.max.x-L.min.x+1,Tt=L.max.y-L.min.y+1,Lt=L.max.z-L.min.z+1,Pt=N.convert(W.format),Ot=N.convert(W.type);let It;if(W.isData3DTexture)St.setTexture3D(W,0),It=32879;else if(W.isDataArrayTexture)St.setTexture2DArray(W,0),It=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}j.pixelStorei(37440,W.flipY),j.pixelStorei(37441,W.premultiplyAlpha),j.pixelStorei(3317,W.unpackAlignment);const Nt=j.getParameter(3314),Kt=j.getParameter(32878),Se=j.getParameter(3316),rn=j.getParameter(3315),Fn=j.getParameter(32877),Jt=K.isCompressedTexture?K.mipmaps[0]:K.image;j.pixelStorei(3314,Jt.width),j.pixelStorei(32878,Jt.height),j.pixelStorei(3316,L.min.x),j.pixelStorei(3315,L.min.y),j.pixelStorei(32877,L.min.z),K.isDataTexture||K.isData3DTexture?j.texSubImage3D(It,tt,X.x,X.y,X.z,wt,Tt,Lt,Pt,Ot,Jt.data):K.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),j.compressedTexSubImage3D(It,tt,X.x,X.y,X.z,wt,Tt,Lt,Pt,Jt.data)):j.texSubImage3D(It,tt,X.x,X.y,X.z,wt,Tt,Lt,Pt,Ot,Jt),j.pixelStorei(3314,Nt),j.pixelStorei(32878,Kt),j.pixelStorei(3316,Se),j.pixelStorei(3315,rn),j.pixelStorei(32877,Fn),tt===0&&W.generateMipmaps&&j.generateMipmap(It),ot.unbindTexture()},this.initTexture=function(L){L.isCubeTexture?St.setTextureCube(L,0):L.isData3DTexture?St.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?St.setTexture2DArray(L,0):St.setTexture2D(L,0),ot.unbindTexture()},this.resetState=function(){x=0,_=0,w=null,ot.reset(),H.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class r0 extends ia{}r0.prototype.isWebGL1Renderer=!0;class au extends ue{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(t){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=t}}class lu extends ai{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ol=new V,Bl=new V,Ul=new kt,vo=new Yc,js=new Er;class o0 extends ue{constructor(t=new me,e=new lu){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let i=1,r=e.count;i<r;i++)Ol.fromBufferAttribute(e,i-1),Bl.fromBufferAttribute(e,i),n[i]=n[i-1],n[i]+=Ol.distanceTo(Bl);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),js.copy(n.boundingSphere),js.applyMatrix4(i),js.radius+=r,t.ray.intersectsSphere(js)===!1)return;Ul.copy(i).invert(),vo.copy(t.ray).applyMatrix4(Ul);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new V,u=new V,f=new V,h=new V,d=this.isLineSegments?2:1,g=n.index,p=n.attributes.position;if(g!==null){const x=Math.max(0,o.start),_=Math.min(g.count,o.start+o.count);for(let w=x,M=_-1;w<M;w+=d){const y=g.getX(w),A=g.getX(w+1);if(l.fromBufferAttribute(p,y),u.fromBufferAttribute(p,A),vo.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const v=t.ray.origin.distanceTo(h);v<t.near||v>t.far||e.push({distance:v,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}else{const x=Math.max(0,o.start),_=Math.min(p.count,o.start+o.count);for(let w=x,M=_-1;w<M;w+=d){if(l.fromBufferAttribute(p,w),u.fromBufferAttribute(p,w+1),vo.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const A=t.ray.origin.distanceTo(h);A<t.near||A>t.far||e.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:w,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}const kl=new V,Gl=new V;class a0 extends o0{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let i=0,r=e.count;i<r;i+=2)kl.fromBufferAttribute(e,i),Gl.fromBufferAttribute(e,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+kl.distanceTo(Gl);t.setAttribute("lineDistance",new jt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class sa extends me{constructor(t=1,e=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],f=[],h=[],d=[];let g=0;const m=[],p=n/2;let x=0;_(),o===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(u),this.setAttribute("position",new jt(f,3)),this.setAttribute("normal",new jt(h,3)),this.setAttribute("uv",new jt(d,2));function _(){const M=new V,y=new V;let A=0;const R=(e-t)/n;for(let v=0;v<=r;v++){const S=[],C=v/r,z=C*(e-t)+t;for(let O=0;O<=i;O++){const E=O/i,P=E*c+a,I=Math.sin(P),F=Math.cos(P);y.x=z*I,y.y=-C*n+p,y.z=z*F,f.push(y.x,y.y,y.z),M.set(I,R,F).normalize(),h.push(M.x,M.y,M.z),d.push(E,1-C),S.push(g++)}m.push(S)}for(let v=0;v<i;v++)for(let S=0;S<r;S++){const C=m[S][v],z=m[S+1][v],O=m[S+1][v+1],E=m[S][v+1];u.push(C,z,E),u.push(z,O,E),A+=6}l.addGroup(x,A,0),x+=A}function w(M){const y=g,A=new Mt,R=new V;let v=0;const S=M===!0?t:e,C=M===!0?1:-1;for(let O=1;O<=i;O++)f.push(0,p*C,0),h.push(0,C,0),d.push(.5,.5),g++;const z=g;for(let O=0;O<=i;O++){const P=O/i*c+a,I=Math.cos(P),F=Math.sin(P);R.x=S*F,R.y=p*C,R.z=S*I,f.push(R.x,R.y,R.z),h.push(0,C,0),A.x=I*.5+.5,A.y=F*.5*C+.5,d.push(A.x,A.y),g++}for(let O=0;O<i;O++){const E=y+O,P=z+O;M===!0?u.push(P,P+1,E):u.push(P+1,P,E),v+=3}l.addGroup(x,v,M===!0?1:2),x+=v}}static fromJSON(t){return new sa(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}class hr extends me{constructor(t=1,e=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new V,h=new V,d=[],g=[],m=[],p=[];for(let x=0;x<=n;x++){const _=[],w=x/n;let M=0;x==0&&o==0?M=.5/e:x==n&&c==Math.PI&&(M=-.5/e);for(let y=0;y<=e;y++){const A=y/e;f.x=-t*Math.cos(i+A*r)*Math.sin(o+w*a),f.y=t*Math.cos(o+w*a),f.z=t*Math.sin(i+A*r)*Math.sin(o+w*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),m.push(h.x,h.y,h.z),p.push(A+M,1-w),_.push(l++)}u.push(_)}for(let x=0;x<n;x++)for(let _=0;_<e;_++){const w=u[x][_+1],M=u[x][_],y=u[x+1][_],A=u[x+1][_+1];(x!==0||o>0)&&d.push(w,M,A),(x!==n-1||c<Math.PI)&&d.push(M,y,A)}this.setIndex(d),this.setAttribute("position",new jt(g,3)),this.setAttribute("normal",new jt(m,3)),this.setAttribute("uv",new jt(p,2))}static fromJSON(t){return new hr(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class l0 extends ai{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new zt(16777215),this.specular=new zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Vo extends ai{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new Mt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=br,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}const Vl={enabled:!1,files:{},add:function(s,t){this.enabled!==!1&&(this.files[s]=t)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class c0{constructor(t,e,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],g=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return g}return null}}}const u0=new c0;class cu{constructor(t){this.manager=t!==void 0?t:u0,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(i,r){n.load(t,i,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}}const hn={};class h0 extends Error{constructor(t,e){super(t),this.response=e}}class f0 extends cu{constructor(t){super(t)}load(t,e,n,i){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const r=Vl.get(t);if(r!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(r),this.manager.itemEnd(t)},0),r;if(hn[t]!==void 0){hn[t].push({onLoad:e,onProgress:n,onError:i});return}hn[t]=[],hn[t].push({onLoad:e,onProgress:n,onError:i});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=hn[t],f=l.body.getReader(),h=l.headers.get("Content-Length")||l.headers.get("X-File-Size"),d=h?parseInt(h):0,g=d!==0;let m=0;const p=new ReadableStream({start(x){_();function _(){f.read().then(({done:w,value:M})=>{if(w)x.close();else{m+=M.byteLength;const y=new ProgressEvent("progress",{lengthComputable:g,loaded:m,total:d});for(let A=0,R=u.length;A<R;A++){const v=u[A];v.onProgress&&v.onProgress(y)}x.enqueue(M),_()}})}}});return new Response(p)}else throw new h0(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(g=>d.decode(g))}}}).then(l=>{Vl.add(t,l);const u=hn[t];delete hn[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=hn[t];if(u===void 0)throw this.manager.itemError(t),l;delete hn[t];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}}class uu extends ue{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),e}}class d0 extends uu{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.groundColor=new zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const yo=new kt,Hl=new V,Wl=new V;class p0{constructor(t){this.camera=t,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Mt(512,512),this.map=null,this.mapPass=null,this.matrix=new kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ea,this._frameExtents=new Mt(1,1),this._viewportCount=1,this._viewports=[new ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Hl.setFromMatrixPosition(t.matrixWorld),e.position.copy(Hl),Wl.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Wl),e.updateMatrixWorld(),yo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(yo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class m0 extends p0{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class hu extends uu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ue.DEFAULT_UP),this.updateMatrix(),this.target=new ue,this.shadow=new m0}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class ql{constructor(t=1,e=0,n=0){return this.radius=t,this.phi=e,this.theta=n,this}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(be(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class g0 extends a0{constructor(t=1){const e=[0,0,0,t,0,0,0,0,0,0,t,0,0,0,0,0,0,t],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],i=new me;i.setAttribute("position",new jt(e,3)),i.setAttribute("color",new jt(n,3));const r=new lu({vertexColors:!0,toneMapped:!1});super(i,r),this.type="AxesHelper"}setColors(t,e,n){const i=new zt,r=this.geometry.attributes.color.array;return i.set(t),i.toArray(r,0),i.toArray(r,3),i.set(e),i.toArray(r,6),i.toArray(r,9),i.set(n),i.toArray(r,12),i.toArray(r,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jo);class je{constructor(t){t===void 0&&(t=[0,0,0,0,0,0,0,0,0]),this.elements=t}identity(){const t=this.elements;t[0]=1,t[1]=0,t[2]=0,t[3]=0,t[4]=1,t[5]=0,t[6]=0,t[7]=0,t[8]=1}setZero(){const t=this.elements;t[0]=0,t[1]=0,t[2]=0,t[3]=0,t[4]=0,t[5]=0,t[6]=0,t[7]=0,t[8]=0}setTrace(t){const e=this.elements;e[0]=t.x,e[4]=t.y,e[8]=t.z}getTrace(t){t===void 0&&(t=new b);const e=this.elements;return t.x=e[0],t.y=e[4],t.z=e[8],t}vmult(t,e){e===void 0&&(e=new b);const n=this.elements,i=t.x,r=t.y,o=t.z;return e.x=n[0]*i+n[1]*r+n[2]*o,e.y=n[3]*i+n[4]*r+n[5]*o,e.z=n[6]*i+n[7]*r+n[8]*o,e}smult(t){for(let e=0;e<this.elements.length;e++)this.elements[e]*=t}mmult(t,e){e===void 0&&(e=new je);const n=this.elements,i=t.elements,r=e.elements,o=n[0],a=n[1],c=n[2],l=n[3],u=n[4],f=n[5],h=n[6],d=n[7],g=n[8],m=i[0],p=i[1],x=i[2],_=i[3],w=i[4],M=i[5],y=i[6],A=i[7],R=i[8];return r[0]=o*m+a*_+c*y,r[1]=o*p+a*w+c*A,r[2]=o*x+a*M+c*R,r[3]=l*m+u*_+f*y,r[4]=l*p+u*w+f*A,r[5]=l*x+u*M+f*R,r[6]=h*m+d*_+g*y,r[7]=h*p+d*w+g*A,r[8]=h*x+d*M+g*R,e}scale(t,e){e===void 0&&(e=new je);const n=this.elements,i=e.elements;for(let r=0;r!==3;r++)i[3*r+0]=t.x*n[3*r+0],i[3*r+1]=t.y*n[3*r+1],i[3*r+2]=t.z*n[3*r+2];return e}solve(t,e){e===void 0&&(e=new b);const n=3,i=4,r=[];let o,a;for(o=0;o<n*i;o++)r.push(0);for(o=0;o<3;o++)for(a=0;a<3;a++)r[o+i*a]=this.elements[o+3*a];r[3+4*0]=t.x,r[3+4*1]=t.y,r[3+4*2]=t.z;let c=3;const l=c;let u;const f=4;let h;do{if(o=l-c,r[o+i*o]===0){for(a=o+1;a<l;a++)if(r[o+i*a]!==0){u=f;do h=f-u,r[h+i*o]+=r[h+i*a];while(--u);break}}if(r[o+i*o]!==0)for(a=o+1;a<l;a++){const d=r[o+i*a]/r[o+i*o];u=f;do h=f-u,r[h+i*a]=h<=o?0:r[h+i*a]-r[h+i*o]*d;while(--u)}}while(--c);if(e.z=r[2*i+3]/r[2*i+2],e.y=(r[1*i+3]-r[1*i+2]*e.z)/r[1*i+1],e.x=(r[0*i+3]-r[0*i+2]*e.z-r[0*i+1]*e.y)/r[0*i+0],isNaN(e.x)||isNaN(e.y)||isNaN(e.z)||e.x===1/0||e.y===1/0||e.z===1/0)throw`Could not solve equation! Got x=[${e.toString()}], b=[${t.toString()}], A=[${this.toString()}]`;return e}e(t,e,n){if(n===void 0)return this.elements[e+3*t];this.elements[e+3*t]=n}copy(t){for(let e=0;e<t.elements.length;e++)this.elements[e]=t.elements[e];return this}toString(){let t="";const e=",";for(let n=0;n<9;n++)t+=this.elements[n]+e;return t}reverse(t){t===void 0&&(t=new je);const e=3,n=6,i=_0;let r,o;for(r=0;r<3;r++)for(o=0;o<3;o++)i[r+n*o]=this.elements[r+3*o];i[3+6*0]=1,i[3+6*1]=0,i[3+6*2]=0,i[4+6*0]=0,i[4+6*1]=1,i[4+6*2]=0,i[5+6*0]=0,i[5+6*1]=0,i[5+6*2]=1;let a=3;const c=a;let l;const u=n;let f;do{if(r=c-a,i[r+n*r]===0){for(o=r+1;o<c;o++)if(i[r+n*o]!==0){l=u;do f=u-l,i[f+n*r]+=i[f+n*o];while(--l);break}}if(i[r+n*r]!==0)for(o=r+1;o<c;o++){const h=i[r+n*o]/i[r+n*r];l=u;do f=u-l,i[f+n*o]=f<=r?0:i[f+n*o]-i[f+n*r]*h;while(--l)}}while(--a);r=2;do{o=r-1;do{const h=i[r+n*o]/i[r+n*r];l=n;do f=n-l,i[f+n*o]=i[f+n*o]-i[f+n*r]*h;while(--l)}while(o--)}while(--r);r=2;do{const h=1/i[r+n*r];l=n;do f=n-l,i[f+n*r]=i[f+n*r]*h;while(--l)}while(r--);r=2;do{o=2;do{if(f=i[e+o+n*r],isNaN(f)||f===1/0)throw`Could not reverse! A=[${this.toString()}]`;t.e(r,o,f)}while(o--)}while(r--);return t}setRotationFromQuaternion(t){const e=t.x,n=t.y,i=t.z,r=t.w,o=e+e,a=n+n,c=i+i,l=e*o,u=e*a,f=e*c,h=n*a,d=n*c,g=i*c,m=r*o,p=r*a,x=r*c,_=this.elements;return _[3*0+0]=1-(h+g),_[3*0+1]=u-x,_[3*0+2]=f+p,_[3*1+0]=u+x,_[3*1+1]=1-(l+g),_[3*1+2]=d-m,_[3*2+0]=f-p,_[3*2+1]=d+m,_[3*2+2]=1-(l+h),this}transpose(t){t===void 0&&(t=new je);const e=this.elements,n=t.elements;let i;return n[0]=e[0],n[4]=e[4],n[8]=e[8],i=e[1],n[1]=e[3],n[3]=i,i=e[2],n[2]=e[6],n[6]=i,i=e[5],n[5]=e[7],n[7]=i,t}}const _0=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];class b{constructor(t,e,n){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),this.x=t,this.y=e,this.z=n}cross(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z;return e.x=a*r-c*i,e.y=c*n-o*r,e.z=o*i-a*n,e}set(t,e,n){return this.x=t,this.y=e,this.z=n,this}setZero(){this.x=this.y=this.z=0}vadd(t,e){if(e)e.x=t.x+this.x,e.y=t.y+this.y,e.z=t.z+this.z;else return new b(this.x+t.x,this.y+t.y,this.z+t.z)}vsub(t,e){if(e)e.x=this.x-t.x,e.y=this.y-t.y,e.z=this.z-t.z;else return new b(this.x-t.x,this.y-t.y,this.z-t.z)}crossmat(){return new je([0,-this.z,this.y,this.z,0,-this.x,-this.y,this.x,0])}normalize(){const t=this.x,e=this.y,n=this.z,i=Math.sqrt(t*t+e*e+n*n);if(i>0){const r=1/i;this.x*=r,this.y*=r,this.z*=r}else this.x=0,this.y=0,this.z=0;return i}unit(t){t===void 0&&(t=new b);const e=this.x,n=this.y,i=this.z;let r=Math.sqrt(e*e+n*n+i*i);return r>0?(r=1/r,t.x=e*r,t.y=n*r,t.z=i*r):(t.x=1,t.y=0,t.z=0),t}length(){const t=this.x,e=this.y,n=this.z;return Math.sqrt(t*t+e*e+n*n)}lengthSquared(){return this.dot(this)}distanceTo(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return Math.sqrt((r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i))}distanceSquared(t){const e=this.x,n=this.y,i=this.z,r=t.x,o=t.y,a=t.z;return(r-e)*(r-e)+(o-n)*(o-n)+(a-i)*(a-i)}scale(t,e){e===void 0&&(e=new b);const n=this.x,i=this.y,r=this.z;return e.x=t*n,e.y=t*i,e.z=t*r,e}vmul(t,e){return e===void 0&&(e=new b),e.x=t.x*this.x,e.y=t.y*this.y,e.z=t.z*this.z,e}addScaledVector(t,e,n){return n===void 0&&(n=new b),n.x=this.x+t*e.x,n.y=this.y+t*e.y,n.z=this.z+t*e.z,n}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}isZero(){return this.x===0&&this.y===0&&this.z===0}negate(t){return t===void 0&&(t=new b),t.x=-this.x,t.y=-this.y,t.z=-this.z,t}tangents(t,e){const n=this.length();if(n>0){const i=x0,r=1/n;i.set(this.x*r,this.y*r,this.z*r);const o=v0;Math.abs(i.x)<.9?(o.set(1,0,0),i.cross(o,t)):(o.set(0,1,0),i.cross(o,t)),i.cross(t,e)}else t.set(1,0,0),e.set(0,1,0)}toString(){return`${this.x},${this.y},${this.z}`}toArray(){return[this.x,this.y,this.z]}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}lerp(t,e,n){const i=this.x,r=this.y,o=this.z;n.x=i+(t.x-i)*e,n.y=r+(t.y-r)*e,n.z=o+(t.z-o)*e}almostEquals(t,e){return e===void 0&&(e=1e-6),!(Math.abs(this.x-t.x)>e||Math.abs(this.y-t.y)>e||Math.abs(this.z-t.z)>e)}almostZero(t){return t===void 0&&(t=1e-6),!(Math.abs(this.x)>t||Math.abs(this.y)>t||Math.abs(this.z)>t)}isAntiparallelTo(t,e){return this.negate(Xl),Xl.almostEquals(t,e)}clone(){return new b(this.x,this.y,this.z)}}b.ZERO=new b(0,0,0);b.UNIT_X=new b(1,0,0);b.UNIT_Y=new b(0,1,0);b.UNIT_Z=new b(0,0,1);const x0=new b,v0=new b,Xl=new b;class Fe{constructor(t){t===void 0&&(t={}),this.lowerBound=new b,this.upperBound=new b,t.lowerBound&&this.lowerBound.copy(t.lowerBound),t.upperBound&&this.upperBound.copy(t.upperBound)}setFromPoints(t,e,n,i){const r=this.lowerBound,o=this.upperBound,a=n;r.copy(t[0]),a&&a.vmult(r,r),o.copy(r);for(let c=1;c<t.length;c++){let l=t[c];a&&(a.vmult(l,jl),l=jl),l.x>o.x&&(o.x=l.x),l.x<r.x&&(r.x=l.x),l.y>o.y&&(o.y=l.y),l.y<r.y&&(r.y=l.y),l.z>o.z&&(o.z=l.z),l.z<r.z&&(r.z=l.z)}return e&&(e.vadd(r,r),e.vadd(o,o)),i&&(r.x-=i,r.y-=i,r.z-=i,o.x+=i,o.y+=i,o.z+=i),this}copy(t){return this.lowerBound.copy(t.lowerBound),this.upperBound.copy(t.upperBound),this}clone(){return new Fe().copy(this)}extend(t){this.lowerBound.x=Math.min(this.lowerBound.x,t.lowerBound.x),this.upperBound.x=Math.max(this.upperBound.x,t.upperBound.x),this.lowerBound.y=Math.min(this.lowerBound.y,t.lowerBound.y),this.upperBound.y=Math.max(this.upperBound.y,t.upperBound.y),this.lowerBound.z=Math.min(this.lowerBound.z,t.lowerBound.z),this.upperBound.z=Math.max(this.upperBound.z,t.upperBound.z)}overlaps(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound,o=i.x<=n.x&&n.x<=r.x||e.x<=r.x&&r.x<=n.x,a=i.y<=n.y&&n.y<=r.y||e.y<=r.y&&r.y<=n.y,c=i.z<=n.z&&n.z<=r.z||e.z<=r.z&&r.z<=n.z;return o&&a&&c}volume(){const t=this.lowerBound,e=this.upperBound;return(e.x-t.x)*(e.y-t.y)*(e.z-t.z)}contains(t){const e=this.lowerBound,n=this.upperBound,i=t.lowerBound,r=t.upperBound;return e.x<=i.x&&n.x>=r.x&&e.y<=i.y&&n.y>=r.y&&e.z<=i.z&&n.z>=r.z}getCorners(t,e,n,i,r,o,a,c){const l=this.lowerBound,u=this.upperBound;t.copy(l),e.set(u.x,l.y,l.z),n.set(u.x,u.y,l.z),i.set(l.x,u.y,u.z),r.set(u.x,l.y,u.z),o.set(l.x,u.y,l.z),a.set(l.x,l.y,u.z),c.copy(u)}toLocalFrame(t,e){const n=Yl,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7];this.getCorners(i,r,o,a,c,l,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToLocal(d,d)}return e.setFromPoints(n)}toWorldFrame(t,e){const n=Yl,i=n[0],r=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7];this.getCorners(i,r,o,a,c,l,u,f);for(let h=0;h!==8;h++){const d=n[h];t.pointToWorld(d,d)}return e.setFromPoints(n)}overlapsRay(t){const{direction:e,from:n}=t,i=1/e.x,r=1/e.y,o=1/e.z,a=(this.lowerBound.x-n.x)*i,c=(this.upperBound.x-n.x)*i,l=(this.lowerBound.y-n.y)*r,u=(this.upperBound.y-n.y)*r,f=(this.lowerBound.z-n.z)*o,h=(this.upperBound.z-n.z)*o,d=Math.max(Math.max(Math.min(a,c),Math.min(l,u)),Math.min(f,h)),g=Math.min(Math.min(Math.max(a,c),Math.max(l,u)),Math.max(f,h));return!(g<0||d>g)}}const jl=new b,Yl=[new b,new b,new b,new b,new b,new b,new b,new b];class $l{constructor(){this.matrix=[]}get(t,e){let{index:n}=t,{index:i}=e;if(i>n){const r=i;i=n,n=r}return this.matrix[(n*(n+1)>>1)+i-1]}set(t,e,n){let{index:i}=t,{index:r}=e;if(r>i){const o=r;r=i,i=o}this.matrix[(i*(i+1)>>1)+r-1]=n?1:0}reset(){for(let t=0,e=this.matrix.length;t!==e;t++)this.matrix[t]=0}setNumObjects(t){this.matrix.length=t*(t-1)>>1}}class fu{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;return n[t]===void 0&&(n[t]=[]),n[t].includes(e)||n[t].push(e),this}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return!!(n[t]!==void 0&&n[t].includes(e))}hasAnyEventListener(t){return this._listeners===void 0?!1:this._listeners[t]!==void 0}removeEventListener(t,e){if(this._listeners===void 0)return this;const n=this._listeners;if(n[t]===void 0)return this;const i=n[t].indexOf(e);return i!==-1&&n[t].splice(i,1),this}dispatchEvent(t){if(this._listeners===void 0)return this;const n=this._listeners[t.type];if(n!==void 0){t.target=this;for(let i=0,r=n.length;i<r;i++)n[i].call(this,t)}return this}}class $t{constructor(t,e,n,i){t===void 0&&(t=0),e===void 0&&(e=0),n===void 0&&(n=0),i===void 0&&(i=1),this.x=t,this.y=e,this.z=n,this.w=i}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}toString(){return`${this.x},${this.y},${this.z},${this.w}`}toArray(){return[this.x,this.y,this.z,this.w]}setFromAxisAngle(t,e){const n=Math.sin(e*.5);return this.x=t.x*n,this.y=t.y*n,this.z=t.z*n,this.w=Math.cos(e*.5),this}toAxisAngle(t){t===void 0&&(t=new b),this.normalize();const e=2*Math.acos(this.w),n=Math.sqrt(1-this.w*this.w);return n<.001?(t.x=this.x,t.y=this.y,t.z=this.z):(t.x=this.x/n,t.y=this.y/n,t.z=this.z/n),[t,e]}setFromVectors(t,e){if(t.isAntiparallelTo(e)){const n=y0,i=w0;t.tangents(n,i),this.setFromAxisAngle(n,Math.PI)}else{const n=t.cross(e);this.x=n.x,this.y=n.y,this.z=n.z,this.w=Math.sqrt(t.length()**2*e.length()**2)+t.dot(e),this.normalize()}return this}mult(t,e){e===void 0&&(e=new $t);const n=this.x,i=this.y,r=this.z,o=this.w,a=t.x,c=t.y,l=t.z,u=t.w;return e.x=n*u+o*a+i*l-r*c,e.y=i*u+o*c+r*a-n*l,e.z=r*u+o*l+n*c-i*a,e.w=o*u-n*a-i*c-r*l,e}inverse(t){t===void 0&&(t=new $t);const e=this.x,n=this.y,i=this.z,r=this.w;this.conjugate(t);const o=1/(e*e+n*n+i*i+r*r);return t.x*=o,t.y*=o,t.z*=o,t.w*=o,t}conjugate(t){return t===void 0&&(t=new $t),t.x=-this.x,t.y=-this.y,t.z=-this.z,t.w=this.w,t}normalize(){let t=Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w);return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(t=1/t,this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}normalizeFast(){const t=(3-(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w))/2;return t===0?(this.x=0,this.y=0,this.z=0,this.w=0):(this.x*=t,this.y*=t,this.z*=t,this.w*=t),this}vmult(t,e){e===void 0&&(e=new b);const n=t.x,i=t.y,r=t.z,o=this.x,a=this.y,c=this.z,l=this.w,u=l*n+a*r-c*i,f=l*i+c*n-o*r,h=l*r+o*i-a*n,d=-o*n-a*i-c*r;return e.x=u*l+d*-o+f*-c-h*-a,e.y=f*l+d*-a+h*-o-u*-c,e.z=h*l+d*-c+u*-a-f*-o,e}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w,this}toEuler(t,e){e===void 0&&(e="YZX");let n,i,r;const o=this.x,a=this.y,c=this.z,l=this.w;switch(e){case"YZX":const u=o*a+c*l;if(u>.499&&(n=2*Math.atan2(o,l),i=Math.PI/2,r=0),u<-.499&&(n=-2*Math.atan2(o,l),i=-Math.PI/2,r=0),n===void 0){const f=o*o,h=a*a,d=c*c;n=Math.atan2(2*a*l-2*o*c,1-2*h-2*d),i=Math.asin(2*u),r=Math.atan2(2*o*l-2*a*c,1-2*f-2*d)}break;default:throw new Error(`Euler order ${e} not supported yet.`)}t.y=n,t.z=i,t.x=r}setFromEuler(t,e,n,i){i===void 0&&(i="XYZ");const r=Math.cos(t/2),o=Math.cos(e/2),a=Math.cos(n/2),c=Math.sin(t/2),l=Math.sin(e/2),u=Math.sin(n/2);return i==="XYZ"?(this.x=c*o*a+r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a-c*l*u):i==="YXZ"?(this.x=c*o*a+r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a+c*l*u):i==="ZXY"?(this.x=c*o*a-r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a-c*l*u):i==="ZYX"?(this.x=c*o*a-r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a+c*l*u):i==="YZX"?(this.x=c*o*a+r*l*u,this.y=r*l*a+c*o*u,this.z=r*o*u-c*l*a,this.w=r*o*a-c*l*u):i==="XZY"&&(this.x=c*o*a-r*l*u,this.y=r*l*a-c*o*u,this.z=r*o*u+c*l*a,this.w=r*o*a+c*l*u),this}clone(){return new $t(this.x,this.y,this.z,this.w)}slerp(t,e,n){n===void 0&&(n=new $t);const i=this.x,r=this.y,o=this.z,a=this.w;let c=t.x,l=t.y,u=t.z,f=t.w,h,d,g,m,p;return d=i*c+r*l+o*u+a*f,d<0&&(d=-d,c=-c,l=-l,u=-u,f=-f),1-d>1e-6?(h=Math.acos(d),g=Math.sin(h),m=Math.sin((1-e)*h)/g,p=Math.sin(e*h)/g):(m=1-e,p=e),n.x=m*i+p*c,n.y=m*r+p*l,n.z=m*o+p*u,n.w=m*a+p*f,n}integrate(t,e,n,i){i===void 0&&(i=new $t);const r=t.x*n.x,o=t.y*n.y,a=t.z*n.z,c=this.x,l=this.y,u=this.z,f=this.w,h=e*.5;return i.x+=h*(r*f+o*u-a*l),i.y+=h*(o*f+a*c-r*u),i.z+=h*(a*f+r*l-o*c),i.w+=h*(-r*c-o*l-a*u),i}}const y0=new b,w0=new b,M0={SPHERE:1,PLANE:2,BOX:4,COMPOUND:8,CONVEXPOLYHEDRON:16,HEIGHTFIELD:32,PARTICLE:64,CYLINDER:128,TRIMESH:256};class ht{constructor(t){t===void 0&&(t={}),this.id=ht.idCounter++,this.type=t.type||0,this.boundingSphereRadius=0,this.collisionResponse=t.collisionResponse?t.collisionResponse:!0,this.collisionFilterGroup=t.collisionFilterGroup!==void 0?t.collisionFilterGroup:1,this.collisionFilterMask=t.collisionFilterMask!==void 0?t.collisionFilterMask:-1,this.material=t.material?t.material:null,this.body=null}updateBoundingSphereRadius(){throw`computeBoundingSphereRadius() not implemented for shape type ${this.type}`}volume(){throw`volume() not implemented for shape type ${this.type}`}calculateLocalInertia(t,e){throw`calculateLocalInertia() not implemented for shape type ${this.type}`}calculateWorldAABB(t,e,n,i){throw`calculateWorldAABB() not implemented for shape type ${this.type}`}}ht.idCounter=0;ht.types=M0;let Vt=class Ho{constructor(t){t===void 0&&(t={}),this.position=new b,this.quaternion=new $t,t.position&&this.position.copy(t.position),t.quaternion&&this.quaternion.copy(t.quaternion)}pointToLocal(t,e){return Ho.pointToLocalFrame(this.position,this.quaternion,t,e)}pointToWorld(t,e){return Ho.pointToWorldFrame(this.position,this.quaternion,t,e)}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}static pointToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),n.vsub(t,i),e.conjugate(Zl),Zl.vmult(i,i),i}static pointToWorldFrame(t,e,n,i){return i===void 0&&(i=new b),e.vmult(n,i),i.vadd(t,i),i}static vectorToWorldFrame(t,e,n){return n===void 0&&(n=new b),t.vmult(e,n),n}static vectorToLocalFrame(t,e,n,i){return i===void 0&&(i=new b),e.w*=-1,e.vmult(n,i),e.w*=-1,i}};const Zl=new $t;class us extends ht{constructor(t){t===void 0&&(t={});const{vertices:e=[],faces:n=[],normals:i=[],axes:r,boundingSphereRadius:o}=t;super({type:ht.types.CONVEXPOLYHEDRON}),this.vertices=e,this.faces=n,this.faceNormals=i,this.faceNormals.length===0&&this.computeNormals(),o?this.boundingSphereRadius=o:this.updateBoundingSphereRadius(),this.worldVertices=[],this.worldVerticesNeedsUpdate=!0,this.worldFaceNormals=[],this.worldFaceNormalsNeedsUpdate=!0,this.uniqueAxes=r?r.slice():null,this.uniqueEdges=[],this.computeEdges()}computeEdges(){const t=this.faces,e=this.vertices,n=this.uniqueEdges;n.length=0;const i=new b;for(let r=0;r!==t.length;r++){const o=t[r],a=o.length;for(let c=0;c!==a;c++){const l=(c+1)%a;e[o[c]].vsub(e[o[l]],i),i.normalize();let u=!1;for(let f=0;f!==n.length;f++)if(n[f].almostEquals(i)||n[f].almostEquals(i)){u=!0;break}u||n.push(i.clone())}}}computeNormals(){this.faceNormals.length=this.faces.length;for(let t=0;t<this.faces.length;t++){for(let i=0;i<this.faces[t].length;i++)if(!this.vertices[this.faces[t][i]])throw new Error(`Vertex ${this.faces[t][i]} not found!`);const e=this.faceNormals[t]||new b;this.getFaceNormal(t,e),e.negate(e),this.faceNormals[t]=e;const n=this.vertices[this.faces[t][0]];if(e.dot(n)<0){console.error(`.faceNormals[${t}] = Vec3(${e.toString()}) looks like it points into the shape? The vertices follow. Make sure they are ordered CCW around the normal, using the right hand rule.`);for(let i=0;i<this.faces[t].length;i++)console.warn(`.vertices[${this.faces[t][i]}] = Vec3(${this.vertices[this.faces[t][i]].toString()})`)}}}getFaceNormal(t,e){const n=this.faces[t],i=this.vertices[n[0]],r=this.vertices[n[1]],o=this.vertices[n[2]];us.computeNormal(i,r,o,e)}static computeNormal(t,e,n,i){const r=new b,o=new b;e.vsub(t,o),n.vsub(e,r),r.cross(o,i),i.isZero()||i.normalize()}clipAgainstHull(t,e,n,i,r,o,a,c,l){const u=new b;let f=-1,h=-Number.MAX_VALUE;for(let g=0;g<n.faces.length;g++){u.copy(n.faceNormals[g]),r.vmult(u,u);const m=u.dot(o);m>h&&(h=m,f=g)}const d=[];for(let g=0;g<n.faces[f].length;g++){const m=n.vertices[n.faces[f][g]],p=new b;p.copy(m),r.vmult(p,p),i.vadd(p,p),d.push(p)}f>=0&&this.clipFaceAgainstHull(o,t,e,d,a,c,l)}findSeparatingAxis(t,e,n,i,r,o,a,c){const l=new b,u=new b,f=new b,h=new b,d=new b,g=new b;let m=Number.MAX_VALUE;const p=this;if(p.uniqueAxes)for(let x=0;x!==p.uniqueAxes.length;x++){n.vmult(p.uniqueAxes[x],l);const _=p.testSepAxis(l,t,e,n,i,r);if(_===!1)return!1;_<m&&(m=_,o.copy(l))}else{const x=a?a.length:p.faces.length;for(let _=0;_<x;_++){const w=a?a[_]:_;l.copy(p.faceNormals[w]),n.vmult(l,l);const M=p.testSepAxis(l,t,e,n,i,r);if(M===!1)return!1;M<m&&(m=M,o.copy(l))}}if(t.uniqueAxes)for(let x=0;x!==t.uniqueAxes.length;x++){r.vmult(t.uniqueAxes[x],u);const _=p.testSepAxis(u,t,e,n,i,r);if(_===!1)return!1;_<m&&(m=_,o.copy(u))}else{const x=c?c.length:t.faces.length;for(let _=0;_<x;_++){const w=c?c[_]:_;u.copy(t.faceNormals[w]),r.vmult(u,u);const M=p.testSepAxis(u,t,e,n,i,r);if(M===!1)return!1;M<m&&(m=M,o.copy(u))}}for(let x=0;x!==p.uniqueEdges.length;x++){n.vmult(p.uniqueEdges[x],h);for(let _=0;_!==t.uniqueEdges.length;_++)if(r.vmult(t.uniqueEdges[_],d),h.cross(d,g),!g.almostZero()){g.normalize();const w=p.testSepAxis(g,t,e,n,i,r);if(w===!1)return!1;w<m&&(m=w,o.copy(g))}}return i.vsub(e,f),f.dot(o)>0&&o.negate(o),!0}testSepAxis(t,e,n,i,r,o){const a=this;us.project(a,t,n,i,wo),us.project(e,t,r,o,Mo);const c=wo[0],l=wo[1],u=Mo[0],f=Mo[1];if(c<f||u<l)return!1;const h=c-f,d=u-l;return h<d?h:d}calculateLocalInertia(t,e){const n=new b,i=new b;this.computeLocalAABB(i,n);const r=n.x-i.x,o=n.y-i.y,a=n.z-i.z;e.x=1/12*t*(2*o*2*o+2*a*2*a),e.y=1/12*t*(2*r*2*r+2*a*2*a),e.z=1/12*t*(2*o*2*o+2*r*2*r)}getPlaneConstantOfFace(t){const e=this.faces[t],n=this.faceNormals[t],i=this.vertices[e[0]];return-n.dot(i)}clipFaceAgainstHull(t,e,n,i,r,o,a){const c=new b,l=new b,u=new b,f=new b,h=new b,d=new b,g=new b,m=new b,p=this,x=[],_=i,w=x;let M=-1,y=Number.MAX_VALUE;for(let C=0;C<p.faces.length;C++){c.copy(p.faceNormals[C]),n.vmult(c,c);const z=c.dot(t);z<y&&(y=z,M=C)}if(M<0)return;const A=p.faces[M];A.connectedFaces=[];for(let C=0;C<p.faces.length;C++)for(let z=0;z<p.faces[C].length;z++)A.indexOf(p.faces[C][z])!==-1&&C!==M&&A.connectedFaces.indexOf(C)===-1&&A.connectedFaces.push(C);const R=A.length;for(let C=0;C<R;C++){const z=p.vertices[A[C]],O=p.vertices[A[(C+1)%R]];z.vsub(O,l),u.copy(l),n.vmult(u,u),e.vadd(u,u),f.copy(this.faceNormals[M]),n.vmult(f,f),e.vadd(f,f),u.cross(f,h),h.negate(h),d.copy(z),n.vmult(d,d),e.vadd(d,d);const E=A.connectedFaces[C];g.copy(this.faceNormals[E]);const P=this.getPlaneConstantOfFace(E);m.copy(g),n.vmult(m,m);const I=P-m.dot(e);for(this.clipFaceAgainstPlane(_,w,m,I);_.length;)_.shift();for(;w.length;)_.push(w.shift())}g.copy(this.faceNormals[M]);const v=this.getPlaneConstantOfFace(M);m.copy(g),n.vmult(m,m);const S=v-m.dot(e);for(let C=0;C<_.length;C++){let z=m.dot(_[C])+S;if(z<=r&&(console.log(`clamped: depth=${z} to minDist=${r}`),z=r),z<=o){const O=_[C];if(z<=1e-6){const E={point:O,normal:m,depth:z};a.push(E)}}}}clipFaceAgainstPlane(t,e,n,i){let r,o;const a=t.length;if(a<2)return e;let c=t[t.length-1],l=t[0];r=n.dot(c)+i;for(let u=0;u<a;u++){if(l=t[u],o=n.dot(l)+i,r<0)if(o<0){const f=new b;f.copy(l),e.push(f)}else{const f=new b;c.lerp(l,r/(r-o),f),e.push(f)}else if(o<0){const f=new b;c.lerp(l,r/(r-o),f),e.push(f),e.push(l)}c=l,r=o}return e}computeWorldVertices(t,e){for(;this.worldVertices.length<this.vertices.length;)this.worldVertices.push(new b);const n=this.vertices,i=this.worldVertices;for(let r=0;r!==this.vertices.length;r++)e.vmult(n[r],i[r]),t.vadd(i[r],i[r]);this.worldVerticesNeedsUpdate=!1}computeLocalAABB(t,e){const n=this.vertices;t.set(Number.MAX_VALUE,Number.MAX_VALUE,Number.MAX_VALUE),e.set(-Number.MAX_VALUE,-Number.MAX_VALUE,-Number.MAX_VALUE);for(let i=0;i<this.vertices.length;i++){const r=n[i];r.x<t.x?t.x=r.x:r.x>e.x&&(e.x=r.x),r.y<t.y?t.y=r.y:r.y>e.y&&(e.y=r.y),r.z<t.z?t.z=r.z:r.z>e.z&&(e.z=r.z)}}computeWorldFaceNormals(t){const e=this.faceNormals.length;for(;this.worldFaceNormals.length<e;)this.worldFaceNormals.push(new b);const n=this.faceNormals,i=this.worldFaceNormals;for(let r=0;r!==e;r++)t.vmult(n[r],i[r]);this.worldFaceNormalsNeedsUpdate=!1}updateBoundingSphereRadius(){let t=0;const e=this.vertices;for(let n=0;n!==e.length;n++){const i=e[n].lengthSquared();i>t&&(t=i)}this.boundingSphereRadius=Math.sqrt(t)}calculateWorldAABB(t,e,n,i){const r=this.vertices;let o,a,c,l,u,f,h=new b;for(let d=0;d<r.length;d++){h.copy(r[d]),e.vmult(h,h),t.vadd(h,h);const g=h;(o===void 0||g.x<o)&&(o=g.x),(l===void 0||g.x>l)&&(l=g.x),(a===void 0||g.y<a)&&(a=g.y),(u===void 0||g.y>u)&&(u=g.y),(c===void 0||g.z<c)&&(c=g.z),(f===void 0||g.z>f)&&(f=g.z)}n.set(o,a,c),i.set(l,u,f)}volume(){return 4*Math.PI*this.boundingSphereRadius/3}getAveragePointLocal(t){t===void 0&&(t=new b);const e=this.vertices;for(let n=0;n<e.length;n++)t.vadd(e[n],t);return t.scale(1/e.length,t),t}transformAllPoints(t,e){const n=this.vertices.length,i=this.vertices;if(e){for(let r=0;r<n;r++){const o=i[r];e.vmult(o,o)}for(let r=0;r<this.faceNormals.length;r++){const o=this.faceNormals[r];e.vmult(o,o)}}if(t)for(let r=0;r<n;r++){const o=i[r];o.vadd(t,o)}}pointIsInside(t){const e=this.vertices,n=this.faces,i=this.faceNormals,r=null,o=new b;this.getAveragePointLocal(o);for(let a=0;a<this.faces.length;a++){let c=i[a];const l=e[n[a][0]],u=new b;t.vsub(l,u);const f=c.dot(u),h=new b;o.vsub(l,h);const d=c.dot(h);if(f<0&&d>0||f>0&&d<0)return!1}return r?1:-1}static project(t,e,n,i,r){const o=t.vertices.length,a=b0;let c=0,l=0;const u=S0,f=t.vertices;u.setZero(),Vt.vectorToLocalFrame(n,i,e,a),Vt.pointToLocalFrame(n,i,u,u);const h=u.dot(a);l=c=f[0].dot(a);for(let d=1;d<o;d++){const g=f[d].dot(a);g>c&&(c=g),g<l&&(l=g)}if(l-=h,c-=h,l>c){const d=l;l=c,c=d}r[0]=c,r[1]=l}}const wo=[],Mo=[];new b;const b0=new b,S0=new b;class Cr extends ht{constructor(t){super({type:ht.types.BOX}),this.halfExtents=t,this.convexPolyhedronRepresentation=null,this.updateConvexPolyhedronRepresentation(),this.updateBoundingSphereRadius()}updateConvexPolyhedronRepresentation(){const t=this.halfExtents.x,e=this.halfExtents.y,n=this.halfExtents.z,i=b,r=[new i(-t,-e,-n),new i(t,-e,-n),new i(t,e,-n),new i(-t,e,-n),new i(-t,-e,n),new i(t,-e,n),new i(t,e,n),new i(-t,e,n)],o=[[3,2,1,0],[4,5,6,7],[5,4,0,1],[2,3,7,6],[0,4,7,3],[1,2,6,5]],a=[new i(0,0,1),new i(0,1,0),new i(1,0,0)],c=new us({vertices:r,faces:o,axes:a});this.convexPolyhedronRepresentation=c,c.material=this.material}calculateLocalInertia(t,e){return e===void 0&&(e=new b),Cr.calculateInertia(this.halfExtents,t,e),e}static calculateInertia(t,e,n){const i=t;n.x=1/12*e*(2*i.y*2*i.y+2*i.z*2*i.z),n.y=1/12*e*(2*i.x*2*i.x+2*i.z*2*i.z),n.z=1/12*e*(2*i.y*2*i.y+2*i.x*2*i.x)}getSideNormals(t,e){const n=t,i=this.halfExtents;if(n[0].set(i.x,0,0),n[1].set(0,i.y,0),n[2].set(0,0,i.z),n[3].set(-i.x,0,0),n[4].set(0,-i.y,0),n[5].set(0,0,-i.z),e!==void 0)for(let r=0;r!==n.length;r++)e.vmult(n[r],n[r]);return n}volume(){return 8*this.halfExtents.x*this.halfExtents.y*this.halfExtents.z}updateBoundingSphereRadius(){this.boundingSphereRadius=this.halfExtents.length()}forEachWorldCorner(t,e,n){const i=this.halfExtents,r=[[i.x,i.y,i.z],[-i.x,i.y,i.z],[-i.x,-i.y,i.z],[-i.x,-i.y,-i.z],[i.x,-i.y,-i.z],[i.x,i.y,-i.z],[-i.x,i.y,-i.z],[i.x,-i.y,i.z]];for(let o=0;o<r.length;o++)Tn.set(r[o][0],r[o][1],r[o][2]),e.vmult(Tn,Tn),t.vadd(Tn,Tn),n(Tn.x,Tn.y,Tn.z)}calculateWorldAABB(t,e,n,i){const r=this.halfExtents;$e[0].set(r.x,r.y,r.z),$e[1].set(-r.x,r.y,r.z),$e[2].set(-r.x,-r.y,r.z),$e[3].set(-r.x,-r.y,-r.z),$e[4].set(r.x,-r.y,-r.z),$e[5].set(r.x,r.y,-r.z),$e[6].set(-r.x,r.y,-r.z),$e[7].set(r.x,-r.y,r.z);const o=$e[0];e.vmult(o,o),t.vadd(o,o),i.copy(o),n.copy(o);for(let a=1;a<8;a++){const c=$e[a];e.vmult(c,c),t.vadd(c,c);const l=c.x,u=c.y,f=c.z;l>i.x&&(i.x=l),u>i.y&&(i.y=u),f>i.z&&(i.z=f),l<n.x&&(n.x=l),u<n.y&&(n.y=u),f<n.z&&(n.z=f)}}}const Tn=new b,$e=[new b,new b,new b,new b,new b,new b,new b,new b],ra={DYNAMIC:1,STATIC:2,KINEMATIC:4},oa={AWAKE:0,SLEEPY:1,SLEEPING:2};class gt extends fu{constructor(t){t===void 0&&(t={}),super(),this.id=gt.idCounter++,this.index=-1,this.world=null,this.vlambda=new b,this.collisionFilterGroup=typeof t.collisionFilterGroup=="number"?t.collisionFilterGroup:1,this.collisionFilterMask=typeof t.collisionFilterMask=="number"?t.collisionFilterMask:-1,this.collisionResponse=typeof t.collisionResponse=="boolean"?t.collisionResponse:!0,this.position=new b,this.previousPosition=new b,this.interpolatedPosition=new b,this.initPosition=new b,t.position&&(this.position.copy(t.position),this.previousPosition.copy(t.position),this.interpolatedPosition.copy(t.position),this.initPosition.copy(t.position)),this.velocity=new b,t.velocity&&this.velocity.copy(t.velocity),this.initVelocity=new b,this.force=new b;const e=typeof t.mass=="number"?t.mass:0;this.mass=e,this.invMass=e>0?1/e:0,this.material=t.material||null,this.linearDamping=typeof t.linearDamping=="number"?t.linearDamping:.01,this.type=e<=0?gt.STATIC:gt.DYNAMIC,typeof t.type==typeof gt.STATIC&&(this.type=t.type),this.allowSleep=typeof t.allowSleep<"u"?t.allowSleep:!0,this.sleepState=gt.AWAKE,this.sleepSpeedLimit=typeof t.sleepSpeedLimit<"u"?t.sleepSpeedLimit:.1,this.sleepTimeLimit=typeof t.sleepTimeLimit<"u"?t.sleepTimeLimit:1,this.timeLastSleepy=0,this.wakeUpAfterNarrowphase=!1,this.torque=new b,this.quaternion=new $t,this.initQuaternion=new $t,this.previousQuaternion=new $t,this.interpolatedQuaternion=new $t,t.quaternion&&(this.quaternion.copy(t.quaternion),this.initQuaternion.copy(t.quaternion),this.previousQuaternion.copy(t.quaternion),this.interpolatedQuaternion.copy(t.quaternion)),this.angularVelocity=new b,t.angularVelocity&&this.angularVelocity.copy(t.angularVelocity),this.initAngularVelocity=new b,this.shapes=[],this.shapeOffsets=[],this.shapeOrientations=[],this.inertia=new b,this.invInertia=new b,this.invInertiaWorld=new je,this.invMassSolve=0,this.invInertiaSolve=new b,this.invInertiaWorldSolve=new je,this.fixedRotation=typeof t.fixedRotation<"u"?t.fixedRotation:!1,this.angularDamping=typeof t.angularDamping<"u"?t.angularDamping:.01,this.linearFactor=new b(1,1,1),t.linearFactor&&this.linearFactor.copy(t.linearFactor),this.angularFactor=new b(1,1,1),t.angularFactor&&this.angularFactor.copy(t.angularFactor),this.aabb=new Fe,this.aabbNeedsUpdate=!0,this.boundingRadius=0,this.wlambda=new b,this.isTrigger=Boolean(t.isTrigger),t.shape&&this.addShape(t.shape),this.updateMassProperties()}wakeUp(){const t=this.sleepState;this.sleepState=gt.AWAKE,this.wakeUpAfterNarrowphase=!1,t===gt.SLEEPING&&this.dispatchEvent(gt.wakeupEvent)}sleep(){this.sleepState=gt.SLEEPING,this.velocity.set(0,0,0),this.angularVelocity.set(0,0,0),this.wakeUpAfterNarrowphase=!1}sleepTick(t){if(this.allowSleep){const e=this.sleepState,n=this.velocity.lengthSquared()+this.angularVelocity.lengthSquared(),i=this.sleepSpeedLimit**2;e===gt.AWAKE&&n<i?(this.sleepState=gt.SLEEPY,this.timeLastSleepy=t,this.dispatchEvent(gt.sleepyEvent)):e===gt.SLEEPY&&n>i?this.wakeUp():e===gt.SLEEPY&&t-this.timeLastSleepy>this.sleepTimeLimit&&(this.sleep(),this.dispatchEvent(gt.sleepEvent))}}updateSolveMassProperties(){this.sleepState===gt.SLEEPING||this.type===gt.KINEMATIC?(this.invMassSolve=0,this.invInertiaSolve.setZero(),this.invInertiaWorldSolve.setZero()):(this.invMassSolve=this.invMass,this.invInertiaSolve.copy(this.invInertia),this.invInertiaWorldSolve.copy(this.invInertiaWorld))}pointToLocalFrame(t,e){return e===void 0&&(e=new b),t.vsub(this.position,e),this.quaternion.conjugate().vmult(e,e),e}vectorToLocalFrame(t,e){return e===void 0&&(e=new b),this.quaternion.conjugate().vmult(t,e),e}pointToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e.vadd(this.position,e),e}vectorToWorldFrame(t,e){return e===void 0&&(e=new b),this.quaternion.vmult(t,e),e}addShape(t,e,n){const i=new b,r=new $t;return e&&i.copy(e),n&&r.copy(n),this.shapes.push(t),this.shapeOffsets.push(i),this.shapeOrientations.push(r),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=this,this}removeShape(t){const e=this.shapes.indexOf(t);return e===-1?(console.warn("Shape does not belong to the body"),this):(this.shapes.splice(e,1),this.shapeOffsets.splice(e,1),this.shapeOrientations.splice(e,1),this.updateMassProperties(),this.updateBoundingRadius(),this.aabbNeedsUpdate=!0,t.body=null,this)}updateBoundingRadius(){const t=this.shapes,e=this.shapeOffsets,n=t.length;let i=0;for(let r=0;r!==n;r++){const o=t[r];o.updateBoundingSphereRadius();const a=e[r].length(),c=o.boundingSphereRadius;a+c>i&&(i=a+c)}this.boundingRadius=i}updateAABB(){const t=this.shapes,e=this.shapeOffsets,n=this.shapeOrientations,i=t.length,r=E0,o=T0,a=this.quaternion,c=this.aabb,l=A0;for(let u=0;u!==i;u++){const f=t[u];a.vmult(e[u],r),r.vadd(this.position,r),a.mult(n[u],o),f.calculateWorldAABB(r,o,l.lowerBound,l.upperBound),u===0?c.copy(l):c.extend(l)}this.aabbNeedsUpdate=!1}updateInertiaWorld(t){const e=this.invInertia;if(!(e.x===e.y&&e.y===e.z&&!t)){const n=C0,i=L0;n.setRotationFromQuaternion(this.quaternion),n.transpose(i),n.scale(e,n),n.mmult(i,this.invInertiaWorld)}}applyForce(t,e){if(e===void 0&&(e=new b),this.type!==gt.DYNAMIC)return;this.sleepState===gt.SLEEPING&&this.wakeUp();const n=R0;e.cross(t,n),this.force.vadd(t,this.force),this.torque.vadd(n,this.torque)}applyLocalForce(t,e){if(e===void 0&&(e=new b),this.type!==gt.DYNAMIC)return;const n=D0,i=I0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyForce(n,i)}applyTorque(t){this.type===gt.DYNAMIC&&(this.sleepState===gt.SLEEPING&&this.wakeUp(),this.torque.vadd(t,this.torque))}applyImpulse(t,e){if(e===void 0&&(e=new b),this.type!==gt.DYNAMIC)return;this.sleepState===gt.SLEEPING&&this.wakeUp();const n=e,i=N0;i.copy(t),i.scale(this.invMass,i),this.velocity.vadd(i,this.velocity);const r=F0;n.cross(t,r),this.invInertiaWorld.vmult(r,r),this.angularVelocity.vadd(r,this.angularVelocity)}applyLocalImpulse(t,e){if(e===void 0&&(e=new b),this.type!==gt.DYNAMIC)return;const n=z0,i=O0;this.vectorToWorldFrame(t,n),this.vectorToWorldFrame(e,i),this.applyImpulse(n,i)}updateMassProperties(){const t=B0;this.invMass=this.mass>0?1/this.mass:0;const e=this.inertia,n=this.fixedRotation;this.updateAABB(),t.set((this.aabb.upperBound.x-this.aabb.lowerBound.x)/2,(this.aabb.upperBound.y-this.aabb.lowerBound.y)/2,(this.aabb.upperBound.z-this.aabb.lowerBound.z)/2),Cr.calculateInertia(t,this.mass,e),this.invInertia.set(e.x>0&&!n?1/e.x:0,e.y>0&&!n?1/e.y:0,e.z>0&&!n?1/e.z:0),this.updateInertiaWorld(!0)}getVelocityAtWorldPoint(t,e){const n=new b;return t.vsub(this.position,n),this.angularVelocity.cross(n,e),this.velocity.vadd(e,e),e}integrate(t,e,n){if(this.previousPosition.copy(this.position),this.previousQuaternion.copy(this.quaternion),!(this.type===gt.DYNAMIC||this.type===gt.KINEMATIC)||this.sleepState===gt.SLEEPING)return;const i=this.velocity,r=this.angularVelocity,o=this.position,a=this.force,c=this.torque,l=this.quaternion,u=this.invMass,f=this.invInertiaWorld,h=this.linearFactor,d=u*t;i.x+=a.x*d*h.x,i.y+=a.y*d*h.y,i.z+=a.z*d*h.z;const g=f.elements,m=this.angularFactor,p=c.x*m.x,x=c.y*m.y,_=c.z*m.z;r.x+=t*(g[0]*p+g[1]*x+g[2]*_),r.y+=t*(g[3]*p+g[4]*x+g[5]*_),r.z+=t*(g[6]*p+g[7]*x+g[8]*_),o.x+=i.x*t,o.y+=i.y*t,o.z+=i.z*t,l.integrate(this.angularVelocity,t,this.angularFactor,l),e&&(n?l.normalizeFast():l.normalize()),this.aabbNeedsUpdate=!0,this.updateInertiaWorld()}}gt.idCounter=0;gt.COLLIDE_EVENT_NAME="collide";gt.DYNAMIC=ra.DYNAMIC;gt.STATIC=ra.STATIC;gt.KINEMATIC=ra.KINEMATIC;gt.AWAKE=oa.AWAKE;gt.SLEEPY=oa.SLEEPY;gt.SLEEPING=oa.SLEEPING;gt.wakeupEvent={type:"wakeup"};gt.sleepyEvent={type:"sleepy"};gt.sleepEvent={type:"sleep"};const E0=new b,T0=new $t,A0=new Fe,C0=new je,L0=new je,P0=new je,R0=new b,D0=new b,I0=new b,N0=new b,F0=new b,z0=new b,O0=new b,B0=new b;class U0{constructor(){this.world=null,this.useBoundingBoxes=!1,this.dirty=!0}collisionPairs(t,e,n){throw new Error("collisionPairs not implemented for this BroadPhase class!")}needBroadphaseCollision(t,e){return!(!(t.collisionFilterGroup&e.collisionFilterMask)||!(e.collisionFilterGroup&t.collisionFilterMask)||(t.type&gt.STATIC||t.sleepState===gt.SLEEPING)&&(e.type&gt.STATIC||e.sleepState===gt.SLEEPING))}intersectionTest(t,e,n,i){this.useBoundingBoxes?this.doBoundingBoxBroadphase(t,e,n,i):this.doBoundingSphereBroadphase(t,e,n,i)}doBoundingSphereBroadphase(t,e,n,i){const r=k0;e.position.vsub(t.position,r);const o=(t.boundingRadius+e.boundingRadius)**2;r.lengthSquared()<o&&(n.push(t),i.push(e))}doBoundingBoxBroadphase(t,e,n,i){t.aabbNeedsUpdate&&t.updateAABB(),e.aabbNeedsUpdate&&e.updateAABB(),t.aabb.overlaps(e.aabb)&&(n.push(t),i.push(e))}makePairsUnique(t,e){const n=G0,i=V0,r=H0,o=t.length;for(let a=0;a!==o;a++)i[a]=t[a],r[a]=e[a];t.length=0,e.length=0;for(let a=0;a!==o;a++){const c=i[a].id,l=r[a].id,u=c<l?`${c},${l}`:`${l},${c}`;n[u]=a,n.keys.push(u)}for(let a=0;a!==n.keys.length;a++){const c=n.keys.pop(),l=n[c];t.push(i[l]),e.push(r[l]),delete n[c]}}setWorld(t){}static boundingSphereCheck(t,e){const n=new b;t.position.vsub(e.position,n);const i=t.shapes[0],r=e.shapes[0];return Math.pow(i.boundingSphereRadius+r.boundingSphereRadius,2)>n.lengthSquared()}aabbQuery(t,e,n){return console.warn(".aabbQuery is not implemented in this Broadphase subclass."),[]}}const k0=new b;new b;new $t;new b;const G0={keys:[]},V0=[],H0=[];new b;new b;new b;class W0 extends U0{constructor(){super()}collisionPairs(t,e,n){const i=t.bodies,r=i.length;let o,a;for(let c=0;c!==r;c++)for(let l=0;l!==c;l++)o=i[c],a=i[l],this.needBroadphaseCollision(o,a)&&this.intersectionTest(o,a,e,n)}aabbQuery(t,e,n){n===void 0&&(n=[]);for(let i=0;i<t.bodies.length;i++){const r=t.bodies[i];r.aabbNeedsUpdate&&r.updateAABB(),r.aabb.overlaps(e)&&n.push(r)}return n}}class fr{constructor(){this.rayFromWorld=new b,this.rayToWorld=new b,this.hitNormalWorld=new b,this.hitPointWorld=new b,this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}reset(){this.rayFromWorld.setZero(),this.rayToWorld.setZero(),this.hitNormalWorld.setZero(),this.hitPointWorld.setZero(),this.hasHit=!1,this.shape=null,this.body=null,this.hitFaceIndex=-1,this.distance=-1,this.shouldStop=!1}abort(){this.shouldStop=!0}set(t,e,n,i,r,o,a){this.rayFromWorld.copy(t),this.rayToWorld.copy(e),this.hitNormalWorld.copy(n),this.hitPointWorld.copy(i),this.shape=r,this.body=o,this.distance=a}}let du,pu,mu,gu,_u,xu,vu;const aa={CLOSEST:1,ANY:2,ALL:4};du=ht.types.SPHERE;pu=ht.types.PLANE;mu=ht.types.BOX;gu=ht.types.CYLINDER;_u=ht.types.CONVEXPOLYHEDRON;xu=ht.types.HEIGHTFIELD;vu=ht.types.TRIMESH;class te{get[du](){return this._intersectSphere}get[pu](){return this._intersectPlane}get[mu](){return this._intersectBox}get[gu](){return this._intersectConvex}get[_u](){return this._intersectConvex}get[xu](){return this._intersectHeightfield}get[vu](){return this._intersectTrimesh}constructor(t,e){t===void 0&&(t=new b),e===void 0&&(e=new b),this.from=t.clone(),this.to=e.clone(),this.direction=new b,this.precision=1e-4,this.checkCollisionResponse=!0,this.skipBackfaces=!1,this.collisionFilterMask=-1,this.collisionFilterGroup=-1,this.mode=te.ANY,this.result=new fr,this.hasHit=!1,this.callback=n=>{}}intersectWorld(t,e){return this.mode=e.mode||te.ANY,this.result=e.result||new fr,this.skipBackfaces=!!e.skipBackfaces,this.collisionFilterMask=typeof e.collisionFilterMask<"u"?e.collisionFilterMask:-1,this.collisionFilterGroup=typeof e.collisionFilterGroup<"u"?e.collisionFilterGroup:-1,this.checkCollisionResponse=typeof e.checkCollisionResponse<"u"?e.checkCollisionResponse:!0,e.from&&this.from.copy(e.from),e.to&&this.to.copy(e.to),this.callback=e.callback||(()=>{}),this.hasHit=!1,this.result.reset(),this.updateDirection(),this.getAABB(Kl),bo.length=0,t.broadphase.aabbQuery(t,Kl,bo),this.intersectBodies(bo),this.hasHit}intersectBody(t,e){e&&(this.result=e,this.updateDirection());const n=this.checkCollisionResponse;if(n&&!t.collisionResponse||!(this.collisionFilterGroup&t.collisionFilterMask)||!(t.collisionFilterGroup&this.collisionFilterMask))return;const i=q0,r=X0;for(let o=0,a=t.shapes.length;o<a;o++){const c=t.shapes[o];if(!(n&&!c.collisionResponse)&&(t.quaternion.mult(t.shapeOrientations[o],r),t.quaternion.vmult(t.shapeOffsets[o],i),i.vadd(t.position,i),this.intersectShape(c,r,i,t),this.result.shouldStop))break}}intersectBodies(t,e){e&&(this.result=e,this.updateDirection());for(let n=0,i=t.length;!this.result.shouldStop&&n<i;n++)this.intersectBody(t[n])}updateDirection(){this.to.vsub(this.from,this.direction),this.direction.normalize()}intersectShape(t,e,n,i){const r=this.from;if(o_(r,this.direction,n)>t.boundingSphereRadius)return;const a=this[t.type];a&&a.call(this,t,e,n,i,t)}_intersectBox(t,e,n,i,r){return this._intersectConvex(t.convexPolyhedronRepresentation,e,n,i,r)}_intersectPlane(t,e,n,i,r){const o=this.from,a=this.to,c=this.direction,l=new b(0,0,1);e.vmult(l,l);const u=new b;o.vsub(n,u);const f=u.dot(l);a.vsub(n,u);const h=u.dot(l);if(f*h>0||o.distanceTo(a)<f)return;const d=l.dot(c);if(Math.abs(d)<this.precision)return;const g=new b,m=new b,p=new b;o.vsub(n,g);const x=-l.dot(g)/d;c.scale(x,m),o.vadd(m,p),this.reportIntersection(l,p,r,i,-1)}getAABB(t){const{lowerBound:e,upperBound:n}=t,i=this.to,r=this.from;e.x=Math.min(i.x,r.x),e.y=Math.min(i.y,r.y),e.z=Math.min(i.z,r.z),n.x=Math.max(i.x,r.x),n.y=Math.max(i.y,r.y),n.z=Math.max(i.z,r.z)}_intersectHeightfield(t,e,n,i,r){t.data,t.elementSize;const o=j0;o.from.copy(this.from),o.to.copy(this.to),Vt.pointToLocalFrame(n,e,o.from,o.from),Vt.pointToLocalFrame(n,e,o.to,o.to),o.updateDirection();const a=Y0;let c,l,u,f;c=l=0,u=f=t.data.length-1;const h=new Fe;o.getAABB(h),t.getIndexOfPosition(h.lowerBound.x,h.lowerBound.y,a,!0),c=Math.max(c,a[0]),l=Math.max(l,a[1]),t.getIndexOfPosition(h.upperBound.x,h.upperBound.y,a,!0),u=Math.min(u,a[0]+1),f=Math.min(f,a[1]+1);for(let d=c;d<u;d++)for(let g=l;g<f;g++){if(this.result.shouldStop)return;if(t.getAabbAtIndex(d,g,h),!!h.overlapsRay(o)){if(t.getConvexTrianglePillar(d,g,!1),Vt.pointToWorldFrame(n,e,t.pillarOffset,Ys),this._intersectConvex(t.pillarConvex,e,Ys,i,r,Jl),this.result.shouldStop)return;t.getConvexTrianglePillar(d,g,!0),Vt.pointToWorldFrame(n,e,t.pillarOffset,Ys),this._intersectConvex(t.pillarConvex,e,Ys,i,r,Jl)}}}_intersectSphere(t,e,n,i,r){const o=this.from,a=this.to,c=t.radius,l=(a.x-o.x)**2+(a.y-o.y)**2+(a.z-o.z)**2,u=2*((a.x-o.x)*(o.x-n.x)+(a.y-o.y)*(o.y-n.y)+(a.z-o.z)*(o.z-n.z)),f=(o.x-n.x)**2+(o.y-n.y)**2+(o.z-n.z)**2-c**2,h=u**2-4*l*f,d=$0,g=Z0;if(!(h<0))if(h===0)o.lerp(a,h,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1);else{const m=(-u-Math.sqrt(h))/(2*l),p=(-u+Math.sqrt(h))/(2*l);if(m>=0&&m<=1&&(o.lerp(a,m,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1)),this.result.shouldStop)return;p>=0&&p<=1&&(o.lerp(a,p,d),d.vsub(n,g),g.normalize(),this.reportIntersection(g,d,r,i,-1))}}_intersectConvex(t,e,n,i,r,o){const a=K0,c=Ql,l=o&&o.faceList||null,u=t.faces,f=t.vertices,h=t.faceNormals,d=this.direction,g=this.from,m=this.to,p=g.distanceTo(m),x=l?l.length:u.length,_=this.result;for(let w=0;!_.shouldStop&&w<x;w++){const M=l?l[w]:w,y=u[M],A=h[M],R=e,v=n;c.copy(f[y[0]]),R.vmult(c,c),c.vadd(v,c),c.vsub(g,c),R.vmult(A,a);const S=d.dot(a);if(Math.abs(S)<this.precision)continue;const C=a.dot(c)/S;if(!(C<0)){d.scale(C,Me),Me.vadd(g,Me),He.copy(f[y[0]]),R.vmult(He,He),v.vadd(He,He);for(let z=1;!_.shouldStop&&z<y.length-1;z++){Ze.copy(f[y[z]]),Ke.copy(f[y[z+1]]),R.vmult(Ze,Ze),R.vmult(Ke,Ke),v.vadd(Ze,Ze),v.vadd(Ke,Ke);const O=Me.distanceTo(g);!(te.pointInTriangle(Me,He,Ze,Ke)||te.pointInTriangle(Me,Ze,He,Ke))||O>p||this.reportIntersection(a,Me,r,i,M)}}}}_intersectTrimesh(t,e,n,i,r,o){const a=J0,c=s_,l=r_,u=Ql,f=Q0,h=t_,d=e_,g=i_,m=n_,p=t.indices;t.vertices;const x=this.from,_=this.to,w=this.direction;l.position.copy(n),l.quaternion.copy(e),Vt.vectorToLocalFrame(n,e,w,f),Vt.pointToLocalFrame(n,e,x,h),Vt.pointToLocalFrame(n,e,_,d),d.x*=t.scale.x,d.y*=t.scale.y,d.z*=t.scale.z,h.x*=t.scale.x,h.y*=t.scale.y,h.z*=t.scale.z,d.vsub(h,f),f.normalize();const M=h.distanceSquared(d);t.tree.rayQuery(this,l,c);for(let y=0,A=c.length;!this.result.shouldStop&&y!==A;y++){const R=c[y];t.getNormal(R,a),t.getVertex(p[R*3],He),He.vsub(h,u);const v=f.dot(a),S=a.dot(u)/v;if(S<0)continue;f.scale(S,Me),Me.vadd(h,Me),t.getVertex(p[R*3+1],Ze),t.getVertex(p[R*3+2],Ke);const C=Me.distanceSquared(h);!(te.pointInTriangle(Me,Ze,He,Ke)||te.pointInTriangle(Me,He,Ze,Ke))||C>M||(Vt.vectorToWorldFrame(e,a,m),Vt.pointToWorldFrame(n,e,Me,g),this.reportIntersection(m,g,r,i,R))}c.length=0}reportIntersection(t,e,n,i,r){const o=this.from,a=this.to,c=o.distanceTo(e),l=this.result;if(!(this.skipBackfaces&&t.dot(this.direction)>0))switch(l.hitFaceIndex=typeof r<"u"?r:-1,this.mode){case te.ALL:this.hasHit=!0,l.set(o,a,t,e,n,i,c),l.hasHit=!0,this.callback(l);break;case te.CLOSEST:(c<l.distance||!l.hasHit)&&(this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c));break;case te.ANY:this.hasHit=!0,l.hasHit=!0,l.set(o,a,t,e,n,i,c),l.shouldStop=!0;break}}static pointInTriangle(t,e,n,i){i.vsub(e,qn),n.vsub(e,Qi),t.vsub(e,So);const r=qn.dot(qn),o=qn.dot(Qi),a=qn.dot(So),c=Qi.dot(Qi),l=Qi.dot(So);let u,f;return(u=c*a-o*l)>=0&&(f=r*l-o*a)>=0&&u+f<r*c-o*o}}te.CLOSEST=aa.CLOSEST;te.ANY=aa.ANY;te.ALL=aa.ALL;const Kl=new Fe,bo=[],Qi=new b,So=new b,q0=new b,X0=new $t,Me=new b,He=new b,Ze=new b,Ke=new b;new b;new fr;const Jl={faceList:[0]},Ys=new b,j0=new te,Y0=[],$0=new b,Z0=new b,K0=new b;new b;new b;const Ql=new b,J0=new b,Q0=new b,t_=new b,e_=new b,n_=new b,i_=new b;new Fe;const s_=[],r_=new Vt,qn=new b,$s=new b;function o_(s,t,e){e.vsub(s,qn);const n=qn.dot(t);return t.scale(n,$s),$s.vadd(s,$s),e.distanceTo($s)}class a_{static defaults(t,e){t===void 0&&(t={});for(let n in e)n in t||(t[n]=e[n]);return t}}class tc{constructor(){this.spatial=new b,this.rotational=new b}multiplyElement(t){return t.spatial.dot(this.spatial)+t.rotational.dot(this.rotational)}multiplyVectors(t,e){return t.dot(this.spatial)+e.dot(this.rotational)}}class ws{constructor(t,e,n,i){n===void 0&&(n=-1e6),i===void 0&&(i=1e6),this.id=ws.idCounter++,this.minForce=n,this.maxForce=i,this.bi=t,this.bj=e,this.a=0,this.b=0,this.eps=0,this.jacobianElementA=new tc,this.jacobianElementB=new tc,this.enabled=!0,this.multiplier=0,this.setSpookParams(1e7,4,1/60)}setSpookParams(t,e,n){const i=e,r=t,o=n;this.a=4/(o*(1+4*i)),this.b=4*i/(1+4*i),this.eps=4/(o*o*r*(1+4*i))}computeB(t,e,n){const i=this.computeGW(),r=this.computeGq(),o=this.computeGiMf();return-r*t-i*e-o*n}computeGq(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.position,o=i.position;return t.spatial.dot(r)+e.spatial.dot(o)}computeGW(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.velocity,o=i.velocity,a=n.angularVelocity,c=i.angularVelocity;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGWlambda(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.vlambda,o=i.vlambda,a=n.wlambda,c=i.wlambda;return t.multiplyVectors(r,a)+e.multiplyVectors(o,c)}computeGiMf(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.force,o=n.torque,a=i.force,c=i.torque,l=n.invMassSolve,u=i.invMassSolve;return r.scale(l,ec),a.scale(u,nc),n.invInertiaWorldSolve.vmult(o,ic),i.invInertiaWorldSolve.vmult(c,sc),t.multiplyVectors(ec,ic)+e.multiplyVectors(nc,sc)}computeGiMGt(){const t=this.jacobianElementA,e=this.jacobianElementB,n=this.bi,i=this.bj,r=n.invMassSolve,o=i.invMassSolve,a=n.invInertiaWorldSolve,c=i.invInertiaWorldSolve;let l=r+o;return a.vmult(t.rotational,Zs),l+=Zs.dot(t.rotational),c.vmult(e.rotational,Zs),l+=Zs.dot(e.rotational),l}addToWlambda(t){const e=this.jacobianElementA,n=this.jacobianElementB,i=this.bi,r=this.bj,o=l_;i.vlambda.addScaledVector(i.invMassSolve*t,e.spatial,i.vlambda),r.vlambda.addScaledVector(r.invMassSolve*t,n.spatial,r.vlambda),i.invInertiaWorldSolve.vmult(e.rotational,o),i.wlambda.addScaledVector(t,o,i.wlambda),r.invInertiaWorldSolve.vmult(n.rotational,o),r.wlambda.addScaledVector(t,o,r.wlambda)}computeC(){return this.computeGiMGt()+this.eps}}ws.idCounter=0;const ec=new b,nc=new b,ic=new b,sc=new b,Zs=new b,l_=new b;class c_ extends ws{constructor(t,e,n){n===void 0&&(n=1e6),super(t,e,0,n),this.restitution=0,this.ri=new b,this.rj=new b,this.ni=new b}computeB(t){const e=this.a,n=this.b,i=this.bi,r=this.bj,o=this.ri,a=this.rj,c=u_,l=h_,u=i.velocity,f=i.angularVelocity;i.force,i.torque;const h=r.velocity,d=r.angularVelocity;r.force,r.torque;const g=f_,m=this.jacobianElementA,p=this.jacobianElementB,x=this.ni;o.cross(x,c),a.cross(x,l),x.negate(m.spatial),c.negate(m.rotational),p.spatial.copy(x),p.rotational.copy(l),g.copy(r.position),g.vadd(a,g),g.vsub(i.position,g),g.vsub(o,g);const _=x.dot(g),w=this.restitution+1,M=w*h.dot(x)-w*u.dot(x)+d.dot(l)-f.dot(c),y=this.computeGiMf();return-_*e-M*n-t*y}getImpactVelocityAlongNormal(){const t=d_,e=p_,n=m_,i=g_,r=__;return this.bi.position.vadd(this.ri,n),this.bj.position.vadd(this.rj,i),this.bi.getVelocityAtWorldPoint(n,t),this.bj.getVelocityAtWorldPoint(i,e),t.vsub(e,r),this.ni.dot(r)}}const u_=new b,h_=new b,f_=new b,d_=new b,p_=new b,m_=new b,g_=new b,__=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class rc extends ws{constructor(t,e,n){super(t,e,-n,n),this.ri=new b,this.rj=new b,this.t=new b}computeB(t){this.a;const e=this.b;this.bi,this.bj;const n=this.ri,i=this.rj,r=x_,o=v_,a=this.t;n.cross(a,r),i.cross(a,o);const c=this.jacobianElementA,l=this.jacobianElementB;a.negate(c.spatial),r.negate(c.rotational),l.spatial.copy(a),l.rotational.copy(o);const u=this.computeGW(),f=this.computeGiMf();return-u*e-t*f}}const x_=new b,v_=new b;class Ms{constructor(t,e,n){n=a_.defaults(n,{friction:.3,restitution:.3,contactEquationStiffness:1e7,contactEquationRelaxation:3,frictionEquationStiffness:1e7,frictionEquationRelaxation:3}),this.id=Ms.idCounter++,this.materials=[t,e],this.friction=n.friction,this.restitution=n.restitution,this.contactEquationStiffness=n.contactEquationStiffness,this.contactEquationRelaxation=n.contactEquationRelaxation,this.frictionEquationStiffness=n.frictionEquationStiffness,this.frictionEquationRelaxation=n.frictionEquationRelaxation}}Ms.idCounter=0;class Vi{constructor(t){t===void 0&&(t={});let e="";typeof t=="string"&&(e=t,t={}),this.name=e,this.id=Vi.idCounter++,this.friction=typeof t.friction<"u"?t.friction:-1,this.restitution=typeof t.restitution<"u"?t.restitution:-1}}Vi.idCounter=0;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new te;new b;new b;new b;new b(1,0,0),new b(0,1,0),new b(0,0,1);new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;class y_ extends ht{constructor(){super({type:ht.types.PLANE}),this.worldNormal=new b,this.worldNormalNeedsUpdate=!0,this.boundingSphereRadius=Number.MAX_VALUE}computeWorldNormal(t){const e=this.worldNormal;e.set(0,0,1),t.vmult(e,e),this.worldNormalNeedsUpdate=!1}calculateLocalInertia(t,e){return e===void 0&&(e=new b),e}volume(){return Number.MAX_VALUE}calculateWorldAABB(t,e,n,i){fn.set(0,0,1),e.vmult(fn,fn);const r=Number.MAX_VALUE;n.set(-r,-r,-r),i.set(r,r,r),fn.x===1?i.x=t.x:fn.x===-1&&(n.x=t.x),fn.y===1?i.y=t.y:fn.y===-1&&(n.y=t.y),fn.z===1?i.z=t.z:fn.z===-1&&(n.z=t.z)}updateBoundingSphereRadius(){this.boundingSphereRadius=Number.MAX_VALUE}}const fn=new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new b;new Fe;new b;new Fe;new b;new b;new b;new b;new b;new b;new b;new Fe;new b;new Vt;new Fe;class w_{constructor(){this.equations=[]}solve(t,e){return 0}addEquation(t){t.enabled&&!t.bi.isTrigger&&!t.bj.isTrigger&&this.equations.push(t)}removeEquation(t){const e=this.equations,n=e.indexOf(t);n!==-1&&e.splice(n,1)}removeAllEquations(){this.equations.length=0}}class M_ extends w_{constructor(){super(),this.iterations=10,this.tolerance=1e-7}solve(t,e){let n=0;const i=this.iterations,r=this.tolerance*this.tolerance,o=this.equations,a=o.length,c=e.bodies,l=c.length,u=t;let f,h,d,g,m,p;if(a!==0)for(let M=0;M!==l;M++)c[M].updateSolveMassProperties();const x=S_,_=E_,w=b_;x.length=a,_.length=a,w.length=a;for(let M=0;M!==a;M++){const y=o[M];w[M]=0,_[M]=y.computeB(u),x[M]=1/y.computeC()}if(a!==0){for(let A=0;A!==l;A++){const R=c[A],v=R.vlambda,S=R.wlambda;v.set(0,0,0),S.set(0,0,0)}for(n=0;n!==i;n++){g=0;for(let A=0;A!==a;A++){const R=o[A];f=_[A],h=x[A],p=w[A],m=R.computeGWlambda(),d=h*(f-m-R.eps*p),p+d<R.minForce?d=R.minForce-p:p+d>R.maxForce&&(d=R.maxForce-p),w[A]+=d,g+=d>0?d:-d,R.addToWlambda(d)}if(g*g<r)break}for(let A=0;A!==l;A++){const R=c[A],v=R.velocity,S=R.angularVelocity;R.vlambda.vmul(R.linearFactor,R.vlambda),v.vadd(R.vlambda,v),R.wlambda.vmul(R.angularFactor,R.wlambda),S.vadd(R.wlambda,S)}let M=o.length;const y=1/u;for(;M--;)o[M].multiplier=w[M]*y}return n}}const b_=[],S_=[],E_=[];gt.STATIC;class T_{constructor(){this.objects=[],this.type=Object}release(){const t=arguments.length;for(let e=0;e!==t;e++)this.objects.push(e<0||arguments.length<=e?void 0:arguments[e]);return this}get(){return this.objects.length===0?this.constructObject():this.objects.pop()}constructObject(){throw new Error("constructObject() not implemented in this Pool subclass yet!")}resize(t){const e=this.objects;for(;e.length>t;)e.pop();for(;e.length<t;)e.push(this.constructObject());return this}}class A_ extends T_{constructor(){super(...arguments),this.type=b}constructObject(){return new b}}const Ht={sphereSphere:ht.types.SPHERE,spherePlane:ht.types.SPHERE|ht.types.PLANE,boxBox:ht.types.BOX|ht.types.BOX,sphereBox:ht.types.SPHERE|ht.types.BOX,planeBox:ht.types.PLANE|ht.types.BOX,convexConvex:ht.types.CONVEXPOLYHEDRON,sphereConvex:ht.types.SPHERE|ht.types.CONVEXPOLYHEDRON,planeConvex:ht.types.PLANE|ht.types.CONVEXPOLYHEDRON,boxConvex:ht.types.BOX|ht.types.CONVEXPOLYHEDRON,sphereHeightfield:ht.types.SPHERE|ht.types.HEIGHTFIELD,boxHeightfield:ht.types.BOX|ht.types.HEIGHTFIELD,convexHeightfield:ht.types.CONVEXPOLYHEDRON|ht.types.HEIGHTFIELD,sphereParticle:ht.types.PARTICLE|ht.types.SPHERE,planeParticle:ht.types.PLANE|ht.types.PARTICLE,boxParticle:ht.types.BOX|ht.types.PARTICLE,convexParticle:ht.types.PARTICLE|ht.types.CONVEXPOLYHEDRON,cylinderCylinder:ht.types.CYLINDER,sphereCylinder:ht.types.SPHERE|ht.types.CYLINDER,planeCylinder:ht.types.PLANE|ht.types.CYLINDER,boxCylinder:ht.types.BOX|ht.types.CYLINDER,convexCylinder:ht.types.CONVEXPOLYHEDRON|ht.types.CYLINDER,heightfieldCylinder:ht.types.HEIGHTFIELD|ht.types.CYLINDER,particleCylinder:ht.types.PARTICLE|ht.types.CYLINDER,sphereTrimesh:ht.types.SPHERE|ht.types.TRIMESH,planeTrimesh:ht.types.PLANE|ht.types.TRIMESH};class C_{get[Ht.sphereSphere](){return this.sphereSphere}get[Ht.spherePlane](){return this.spherePlane}get[Ht.boxBox](){return this.boxBox}get[Ht.sphereBox](){return this.sphereBox}get[Ht.planeBox](){return this.planeBox}get[Ht.convexConvex](){return this.convexConvex}get[Ht.sphereConvex](){return this.sphereConvex}get[Ht.planeConvex](){return this.planeConvex}get[Ht.boxConvex](){return this.boxConvex}get[Ht.sphereHeightfield](){return this.sphereHeightfield}get[Ht.boxHeightfield](){return this.boxHeightfield}get[Ht.convexHeightfield](){return this.convexHeightfield}get[Ht.sphereParticle](){return this.sphereParticle}get[Ht.planeParticle](){return this.planeParticle}get[Ht.boxParticle](){return this.boxParticle}get[Ht.convexParticle](){return this.convexParticle}get[Ht.cylinderCylinder](){return this.convexConvex}get[Ht.sphereCylinder](){return this.sphereConvex}get[Ht.planeCylinder](){return this.planeConvex}get[Ht.boxCylinder](){return this.boxConvex}get[Ht.convexCylinder](){return this.convexConvex}get[Ht.heightfieldCylinder](){return this.heightfieldCylinder}get[Ht.particleCylinder](){return this.particleCylinder}get[Ht.sphereTrimesh](){return this.sphereTrimesh}get[Ht.planeTrimesh](){return this.planeTrimesh}constructor(t){this.contactPointPool=[],this.frictionEquationPool=[],this.result=[],this.frictionResult=[],this.v3pool=new A_,this.world=t,this.currentContactMaterial=t.defaultContactMaterial,this.enableFrictionReduction=!1}createContactEquation(t,e,n,i,r,o){let a;this.contactPointPool.length?(a=this.contactPointPool.pop(),a.bi=t,a.bj=e):a=new c_(t,e),a.enabled=t.collisionResponse&&e.collisionResponse&&n.collisionResponse&&i.collisionResponse;const c=this.currentContactMaterial;a.restitution=c.restitution,a.setSpookParams(c.contactEquationStiffness,c.contactEquationRelaxation,this.world.dt);const l=n.material||t.material,u=i.material||e.material;return l&&u&&l.restitution>=0&&u.restitution>=0&&(a.restitution=l.restitution*u.restitution),a.si=r||n,a.sj=o||i,a}createFrictionEquationsFromContact(t,e){const n=t.bi,i=t.bj,r=t.si,o=t.sj,a=this.world,c=this.currentContactMaterial;let l=c.friction;const u=r.material||n.material,f=o.material||i.material;if(u&&f&&u.friction>=0&&f.friction>=0&&(l=u.friction*f.friction),l>0){const h=l*(a.frictionGravity||a.gravity).length();let d=n.invMass+i.invMass;d>0&&(d=1/d);const g=this.frictionEquationPool,m=g.length?g.pop():new rc(n,i,h*d),p=g.length?g.pop():new rc(n,i,h*d);return m.bi=p.bi=n,m.bj=p.bj=i,m.minForce=p.minForce=-h*d,m.maxForce=p.maxForce=h*d,m.ri.copy(t.ri),m.rj.copy(t.rj),p.ri.copy(t.ri),p.rj.copy(t.rj),t.ni.tangents(m.t,p.t),m.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),p.setSpookParams(c.frictionEquationStiffness,c.frictionEquationRelaxation,a.dt),m.enabled=p.enabled=t.enabled,e.push(m,p),!0}return!1}createFrictionFromAverage(t){let e=this.result[this.result.length-1];if(!this.createFrictionEquationsFromContact(e,this.frictionResult)||t===1)return;const n=this.frictionResult[this.frictionResult.length-2],i=this.frictionResult[this.frictionResult.length-1];Gn.setZero(),bi.setZero(),Si.setZero();const r=e.bi;e.bj;for(let a=0;a!==t;a++)e=this.result[this.result.length-1-a],e.bi!==r?(Gn.vadd(e.ni,Gn),bi.vadd(e.ri,bi),Si.vadd(e.rj,Si)):(Gn.vsub(e.ni,Gn),bi.vadd(e.rj,bi),Si.vadd(e.ri,Si));const o=1/t;bi.scale(o,n.ri),Si.scale(o,n.rj),i.ri.copy(n.ri),i.rj.copy(n.rj),Gn.normalize(),Gn.tangents(n.t,i.t)}getContacts(t,e,n,i,r,o,a){this.contactPointPool=r,this.frictionEquationPool=a,this.result=i,this.frictionResult=o;const c=R_,l=D_,u=L_,f=P_;for(let h=0,d=t.length;h!==d;h++){const g=t[h],m=e[h];let p=null;g.material&&m.material&&(p=n.getContactMaterial(g.material,m.material)||null);const x=g.type&gt.KINEMATIC&&m.type&gt.STATIC||g.type&gt.STATIC&&m.type&gt.KINEMATIC||g.type&gt.KINEMATIC&&m.type&gt.KINEMATIC;for(let _=0;_<g.shapes.length;_++){g.quaternion.mult(g.shapeOrientations[_],c),g.quaternion.vmult(g.shapeOffsets[_],u),u.vadd(g.position,u);const w=g.shapes[_];for(let M=0;M<m.shapes.length;M++){m.quaternion.mult(m.shapeOrientations[M],l),m.quaternion.vmult(m.shapeOffsets[M],f),f.vadd(m.position,f);const y=m.shapes[M];if(!(w.collisionFilterMask&y.collisionFilterGroup&&y.collisionFilterMask&w.collisionFilterGroup)||u.distanceTo(f)>w.boundingSphereRadius+y.boundingSphereRadius)continue;let A=null;w.material&&y.material&&(A=n.getContactMaterial(w.material,y.material)||null),this.currentContactMaterial=A||p||n.defaultContactMaterial;const R=w.type|y.type,v=this[R];if(v){let S=!1;w.type<y.type?S=v.call(this,w,y,u,f,c,l,g,m,w,y,x):S=v.call(this,y,w,f,u,l,c,m,g,w,y,x),S&&x&&(n.shapeOverlapKeeper.set(w.id,y.id),n.bodyOverlapKeeper.set(g.id,m.id))}}}}}sphereSphere(t,e,n,i,r,o,a,c,l,u,f){if(f)return n.distanceSquared(i)<(t.radius+e.radius)**2;const h=this.createContactEquation(a,c,t,e,l,u);i.vsub(n,h.ni),h.ni.normalize(),h.ri.copy(h.ni),h.rj.copy(h.ni),h.ri.scale(t.radius,h.ri),h.rj.scale(-e.radius,h.rj),h.ri.vadd(n,h.ri),h.ri.vsub(a.position,h.ri),h.rj.vadd(i,h.rj),h.rj.vsub(c.position,h.rj),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}spherePlane(t,e,n,i,r,o,a,c,l,u,f){const h=this.createContactEquation(a,c,t,e,l,u);if(h.ni.set(0,0,1),o.vmult(h.ni,h.ni),h.ni.negate(h.ni),h.ni.normalize(),h.ni.scale(t.radius,h.ri),n.vsub(i,Ks),h.ni.scale(h.ni.dot(Ks),oc),Ks.vsub(oc,h.rj),-Ks.dot(h.ni)<=t.radius){if(f)return!0;const d=h.ri,g=h.rj;d.vadd(n,d),d.vsub(a.position,d),g.vadd(i,g),g.vsub(c.position,g),this.result.push(h),this.createFrictionEquationsFromContact(h,this.frictionResult)}}boxBox(t,e,n,i,r,o,a,c,l,u,f){return t.convexPolyhedronRepresentation.material=t.material,e.convexPolyhedronRepresentation.material=e.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,f)}sphereBox(t,e,n,i,r,o,a,c,l,u,f){const h=this.v3pool,d=sx;n.vsub(i,Js),e.getSideNormals(d,o);const g=t.radius;let m=!1;const p=ox,x=ax,_=lx;let w=null,M=0,y=0,A=0,R=null;for(let F=0,B=d.length;F!==B&&m===!1;F++){const G=ex;G.copy(d[F]);const Y=G.length();G.normalize();const J=Js.dot(G);if(J<Y+g&&J>0){const lt=nx,U=ix;lt.copy(d[(F+1)%3]),U.copy(d[(F+2)%3]);const Q=lt.length(),st=U.length();lt.normalize(),U.normalize();const rt=Js.dot(lt),j=Js.dot(U);if(rt<Q&&rt>-Q&&j<st&&j>-st){const q=Math.abs(J-Y-g);if((R===null||q<R)&&(R=q,y=rt,A=j,w=Y,p.copy(G),x.copy(lt),_.copy(U),M++,f))return!0}}}if(M){m=!0;const F=this.createContactEquation(a,c,t,e,l,u);p.scale(-g,F.ri),F.ni.copy(p),F.ni.negate(F.ni),p.scale(w,p),x.scale(y,x),p.vadd(x,p),_.scale(A,_),p.vadd(_,F.rj),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),F.rj.vadd(i,F.rj),F.rj.vsub(c.position,F.rj),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}let v=h.get();const S=rx;for(let F=0;F!==2&&!m;F++)for(let B=0;B!==2&&!m;B++)for(let G=0;G!==2&&!m;G++)if(v.set(0,0,0),F?v.vadd(d[0],v):v.vsub(d[0],v),B?v.vadd(d[1],v):v.vsub(d[1],v),G?v.vadd(d[2],v):v.vsub(d[2],v),i.vadd(v,S),S.vsub(n,S),S.lengthSquared()<g*g){if(f)return!0;m=!0;const Y=this.createContactEquation(a,c,t,e,l,u);Y.ri.copy(S),Y.ri.normalize(),Y.ni.copy(Y.ri),Y.ri.scale(g,Y.ri),Y.rj.copy(v),Y.ri.vadd(n,Y.ri),Y.ri.vsub(a.position,Y.ri),Y.rj.vadd(i,Y.rj),Y.rj.vsub(c.position,Y.rj),this.result.push(Y),this.createFrictionEquationsFromContact(Y,this.frictionResult)}h.release(v),v=null;const C=h.get(),z=h.get(),O=h.get(),E=h.get(),P=h.get(),I=d.length;for(let F=0;F!==I&&!m;F++)for(let B=0;B!==I&&!m;B++)if(F%3!==B%3){d[B].cross(d[F],C),C.normalize(),d[F].vadd(d[B],z),O.copy(n),O.vsub(z,O),O.vsub(i,O);const G=O.dot(C);C.scale(G,E);let Y=0;for(;Y===F%3||Y===B%3;)Y++;P.copy(n),P.vsub(E,P),P.vsub(z,P),P.vsub(i,P);const J=Math.abs(G),lt=P.length();if(J<d[Y].length()&&lt<g){if(f)return!0;m=!0;const U=this.createContactEquation(a,c,t,e,l,u);z.vadd(E,U.rj),U.rj.copy(U.rj),P.negate(U.ni),U.ni.normalize(),U.ri.copy(U.rj),U.ri.vadd(i,U.ri),U.ri.vsub(n,U.ri),U.ri.normalize(),U.ri.scale(g,U.ri),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult)}}h.release(C,z,O,E,P)}planeBox(t,e,n,i,r,o,a,c,l,u,f){return e.convexPolyhedronRepresentation.material=e.material,e.convexPolyhedronRepresentation.collisionResponse=e.collisionResponse,e.convexPolyhedronRepresentation.id=e.id,this.planeConvex(t,e.convexPolyhedronRepresentation,n,i,r,o,a,c,t,e,f)}convexConvex(t,e,n,i,r,o,a,c,l,u,f,h,d){const g=bx;if(!(n.distanceTo(i)>t.boundingSphereRadius+e.boundingSphereRadius)&&t.findSeparatingAxis(e,n,r,i,o,g,h,d)){const m=[],p=Sx;t.clipAgainstHull(n,r,e,i,o,g,-100,100,m);let x=0;for(let _=0;_!==m.length;_++){if(f)return!0;const w=this.createContactEquation(a,c,t,e,l,u),M=w.ri,y=w.rj;g.negate(w.ni),m[_].normal.negate(p),p.scale(m[_].depth,p),m[_].point.vadd(p,M),y.copy(m[_].point),M.vsub(n,M),y.vsub(i,y),M.vadd(n,M),M.vsub(a.position,M),y.vadd(i,y),y.vsub(c.position,y),this.result.push(w),x++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(w,this.frictionResult)}this.enableFrictionReduction&&x&&this.createFrictionFromAverage(x)}}sphereConvex(t,e,n,i,r,o,a,c,l,u,f){const h=this.v3pool;n.vsub(i,cx);const d=e.faceNormals,g=e.faces,m=e.vertices,p=t.radius;let x=!1;for(let _=0;_!==m.length;_++){const w=m[_],M=dx;o.vmult(w,M),i.vadd(M,M);const y=fx;if(M.vsub(n,y),y.lengthSquared()<p*p){if(f)return!0;x=!0;const A=this.createContactEquation(a,c,t,e,l,u);A.ri.copy(y),A.ri.normalize(),A.ni.copy(A.ri),A.ri.scale(p,A.ri),M.vsub(i,A.rj),A.ri.vadd(n,A.ri),A.ri.vsub(a.position,A.ri),A.rj.vadd(i,A.rj),A.rj.vsub(c.position,A.rj),this.result.push(A),this.createFrictionEquationsFromContact(A,this.frictionResult);return}}for(let _=0,w=g.length;_!==w&&x===!1;_++){const M=d[_],y=g[_],A=px;o.vmult(M,A);const R=mx;o.vmult(m[y[0]],R),R.vadd(i,R);const v=gx;A.scale(-p,v),n.vadd(v,v);const S=_x;v.vsub(R,S);const C=S.dot(A),z=xx;if(n.vsub(R,z),C<0&&z.dot(A)>0){const O=[];for(let E=0,P=y.length;E!==P;E++){const I=h.get();o.vmult(m[y[E]],I),i.vadd(I,I),O.push(I)}if(tx(O,A,n)){if(f)return!0;x=!0;const E=this.createContactEquation(a,c,t,e,l,u);A.scale(-p,E.ri),A.negate(E.ni);const P=h.get();A.scale(-C,P);const I=h.get();A.scale(-p,I),n.vsub(i,E.rj),E.rj.vadd(I,E.rj),E.rj.vadd(P,E.rj),E.rj.vadd(i,E.rj),E.rj.vsub(c.position,E.rj),E.ri.vadd(n,E.ri),E.ri.vsub(a.position,E.ri),h.release(P),h.release(I),this.result.push(E),this.createFrictionEquationsFromContact(E,this.frictionResult);for(let F=0,B=O.length;F!==B;F++)h.release(O[F]);return}else for(let E=0;E!==y.length;E++){const P=h.get(),I=h.get();o.vmult(m[y[(E+1)%y.length]],P),o.vmult(m[y[(E+2)%y.length]],I),i.vadd(P,P),i.vadd(I,I);const F=ux;I.vsub(P,F);const B=hx;F.unit(B);const G=h.get(),Y=h.get();n.vsub(P,Y);const J=Y.dot(B);B.scale(J,G),G.vadd(P,G);const lt=h.get();if(G.vsub(n,lt),J>0&&J*J<F.lengthSquared()&&lt.lengthSquared()<p*p){if(f)return!0;const U=this.createContactEquation(a,c,t,e,l,u);G.vsub(i,U.rj),G.vsub(n,U.ni),U.ni.normalize(),U.ni.scale(p,U.ri),U.rj.vadd(i,U.rj),U.rj.vsub(c.position,U.rj),U.ri.vadd(n,U.ri),U.ri.vsub(a.position,U.ri),this.result.push(U),this.createFrictionEquationsFromContact(U,this.frictionResult);for(let Q=0,st=O.length;Q!==st;Q++)h.release(O[Q]);h.release(P),h.release(I),h.release(G),h.release(lt),h.release(Y);return}h.release(P),h.release(I),h.release(G),h.release(lt),h.release(Y)}for(let E=0,P=O.length;E!==P;E++)h.release(O[E])}}}planeConvex(t,e,n,i,r,o,a,c,l,u,f){const h=vx,d=yx;d.set(0,0,1),r.vmult(d,d);let g=0;const m=wx;for(let p=0;p!==e.vertices.length;p++)if(h.copy(e.vertices[p]),o.vmult(h,h),i.vadd(h,h),h.vsub(n,m),d.dot(m)<=0){if(f)return!0;const _=this.createContactEquation(a,c,t,e,l,u),w=Mx;d.scale(d.dot(m),w),h.vsub(w,w),w.vsub(n,_.ri),_.ni.copy(d),h.vsub(i,_.rj),_.ri.vadd(n,_.ri),_.ri.vsub(a.position,_.ri),_.rj.vadd(i,_.rj),_.rj.vsub(c.position,_.rj),this.result.push(_),g++,this.enableFrictionReduction||this.createFrictionEquationsFromContact(_,this.frictionResult)}this.enableFrictionReduction&&g&&this.createFrictionFromAverage(g)}boxConvex(t,e,n,i,r,o,a,c,l,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexConvex(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,f)}sphereHeightfield(t,e,n,i,r,o,a,c,l,u,f){const h=e.data,d=t.radius,g=e.elementSize,m=zx,p=Fx;Vt.pointToLocalFrame(i,o,n,p);let x=Math.floor((p.x-d)/g)-1,_=Math.ceil((p.x+d)/g)+1,w=Math.floor((p.y-d)/g)-1,M=Math.ceil((p.y+d)/g)+1;if(_<0||M<0||x>h.length||w>h[0].length)return;x<0&&(x=0),_<0&&(_=0),w<0&&(w=0),M<0&&(M=0),x>=h.length&&(x=h.length-1),_>=h.length&&(_=h.length-1),M>=h[0].length&&(M=h[0].length-1),w>=h[0].length&&(w=h[0].length-1);const y=[];e.getRectMinMax(x,w,_,M,y);const A=y[0],R=y[1];if(p.z-d>R||p.z+d<A)return;const v=this.result;for(let S=x;S<_;S++)for(let C=w;C<M;C++){const z=v.length;let O=!1;if(e.getConvexTrianglePillar(S,C,!1),Vt.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,m,r,o,a,c,t,e,f)),f&&O||(e.getConvexTrianglePillar(S,C,!0),Vt.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(O=this.sphereConvex(t,e.pillarConvex,n,m,r,o,a,c,t,e,f)),f&&O))return!0;if(v.length-z>2)return}}boxHeightfield(t,e,n,i,r,o,a,c,l,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexHeightfield(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,f)}convexHeightfield(t,e,n,i,r,o,a,c,l,u,f){const h=e.data,d=e.elementSize,g=t.boundingSphereRadius,m=Ix,p=Nx,x=Dx;Vt.pointToLocalFrame(i,o,n,x);let _=Math.floor((x.x-g)/d)-1,w=Math.ceil((x.x+g)/d)+1,M=Math.floor((x.y-g)/d)-1,y=Math.ceil((x.y+g)/d)+1;if(w<0||y<0||_>h.length||M>h[0].length)return;_<0&&(_=0),w<0&&(w=0),M<0&&(M=0),y<0&&(y=0),_>=h.length&&(_=h.length-1),w>=h.length&&(w=h.length-1),y>=h[0].length&&(y=h[0].length-1),M>=h[0].length&&(M=h[0].length-1);const A=[];e.getRectMinMax(_,M,w,y,A);const R=A[0],v=A[1];if(!(x.z-g>v||x.z+g<R))for(let S=_;S<w;S++)for(let C=M;C<y;C++){let z=!1;if(e.getConvexTrianglePillar(S,C,!1),Vt.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.convexConvex(t,e.pillarConvex,n,m,r,o,a,c,null,null,f,p,null)),f&&z||(e.getConvexTrianglePillar(S,C,!0),Vt.pointToWorldFrame(i,o,e.pillarOffset,m),n.distanceTo(m)<e.pillarConvex.boundingSphereRadius+t.boundingSphereRadius&&(z=this.convexConvex(t,e.pillarConvex,n,m,r,o,a,c,null,null,f,p,null)),f&&z))return!0}}sphereParticle(t,e,n,i,r,o,a,c,l,u,f){const h=Cx;if(h.set(0,0,1),i.vsub(n,h),h.lengthSquared()<=t.radius*t.radius){if(f)return!0;const g=this.createContactEquation(c,a,e,t,l,u);h.normalize(),g.rj.copy(h),g.rj.scale(t.radius,g.rj),g.ni.copy(h),g.ni.negate(g.ni),g.ri.set(0,0,0),this.result.push(g),this.createFrictionEquationsFromContact(g,this.frictionResult)}}planeParticle(t,e,n,i,r,o,a,c,l,u,f){const h=Ex;h.set(0,0,1),a.quaternion.vmult(h,h);const d=Tx;if(i.vsub(a.position,d),h.dot(d)<=0){if(f)return!0;const m=this.createContactEquation(c,a,e,t,l,u);m.ni.copy(h),m.ni.negate(m.ni),m.ri.set(0,0,0);const p=Ax;h.scale(h.dot(i),p),i.vsub(p,p),m.rj.copy(p),this.result.push(m),this.createFrictionEquationsFromContact(m,this.frictionResult)}}boxParticle(t,e,n,i,r,o,a,c,l,u,f){return t.convexPolyhedronRepresentation.material=t.material,t.convexPolyhedronRepresentation.collisionResponse=t.collisionResponse,this.convexParticle(t.convexPolyhedronRepresentation,e,n,i,r,o,a,c,t,e,f)}convexParticle(t,e,n,i,r,o,a,c,l,u,f){let h=-1;const d=Px,g=Rx;let m=null;const p=Lx;if(p.copy(i),p.vsub(n,p),r.conjugate(ac),ac.vmult(p,p),t.pointIsInside(p)){t.worldVerticesNeedsUpdate&&t.computeWorldVertices(n,r),t.worldFaceNormalsNeedsUpdate&&t.computeWorldFaceNormals(r);for(let x=0,_=t.faces.length;x!==_;x++){const w=[t.worldVertices[t.faces[x][0]]],M=t.worldFaceNormals[x];i.vsub(w[0],lc);const y=-M.dot(lc);if(m===null||Math.abs(y)<Math.abs(m)){if(f)return!0;m=y,h=x,d.copy(M)}}if(h!==-1){const x=this.createContactEquation(c,a,e,t,l,u);d.scale(m,g),g.vadd(i,g),g.vsub(n,g),x.rj.copy(g),d.negate(x.ni),x.ri.set(0,0,0);const _=x.ri,w=x.rj;_.vadd(i,_),_.vsub(c.position,_),w.vadd(n,w),w.vsub(a.position,w),this.result.push(x),this.createFrictionEquationsFromContact(x,this.frictionResult)}else console.warn("Point found inside convex, but did not find penetrating face!")}}heightfieldCylinder(t,e,n,i,r,o,a,c,l,u,f){return this.convexHeightfield(e,t,i,n,o,r,c,a,l,u,f)}particleCylinder(t,e,n,i,r,o,a,c,l,u,f){return this.convexParticle(e,t,i,n,o,r,c,a,l,u,f)}sphereTrimesh(t,e,n,i,r,o,a,c,l,u,f){const h=k_,d=G_,g=V_,m=H_,p=W_,x=q_,_=$_,w=U_,M=O_,y=Z_;Vt.pointToLocalFrame(i,o,n,p);const A=t.radius;_.lowerBound.set(p.x-A,p.y-A,p.z-A),_.upperBound.set(p.x+A,p.y+A,p.z+A),e.getTrianglesInAABB(_,y);const R=B_,v=t.radius*t.radius;for(let E=0;E<y.length;E++)for(let P=0;P<3;P++)if(e.getVertex(e.indices[y[E]*3+P],R),R.vsub(p,M),M.lengthSquared()<=v){if(w.copy(R),Vt.pointToWorldFrame(i,o,w,R),R.vsub(n,M),f)return!0;let I=this.createContactEquation(a,c,t,e,l,u);I.ni.copy(M),I.ni.normalize(),I.ri.copy(I.ni),I.ri.scale(t.radius,I.ri),I.ri.vadd(n,I.ri),I.ri.vsub(a.position,I.ri),I.rj.copy(R),I.rj.vsub(c.position,I.rj),this.result.push(I),this.createFrictionEquationsFromContact(I,this.frictionResult)}for(let E=0;E<y.length;E++)for(let P=0;P<3;P++){e.getVertex(e.indices[y[E]*3+P],h),e.getVertex(e.indices[y[E]*3+(P+1)%3],d),d.vsub(h,g),p.vsub(d,x);const I=x.dot(g);p.vsub(h,x);let F=x.dot(g);if(F>0&&I<0&&(p.vsub(h,x),m.copy(g),m.normalize(),F=x.dot(m),m.scale(F,x),x.vadd(h,x),x.distanceTo(p)<t.radius)){if(f)return!0;const G=this.createContactEquation(a,c,t,e,l,u);x.vsub(p,G.ni),G.ni.normalize(),G.ni.scale(t.radius,G.ri),G.ri.vadd(n,G.ri),G.ri.vsub(a.position,G.ri),Vt.pointToWorldFrame(i,o,x,x),x.vsub(c.position,G.rj),Vt.vectorToWorldFrame(o,G.ni,G.ni),Vt.vectorToWorldFrame(o,G.ri,G.ri),this.result.push(G),this.createFrictionEquationsFromContact(G,this.frictionResult)}}const S=X_,C=j_,z=Y_,O=z_;for(let E=0,P=y.length;E!==P;E++){e.getTriangleVertices(y[E],S,C,z),e.getNormal(y[E],O),p.vsub(S,x);let I=x.dot(O);if(O.scale(I,x),p.vsub(x,x),I=x.distanceTo(p),te.pointInTriangle(x,S,C,z)&&I<t.radius){if(f)return!0;let F=this.createContactEquation(a,c,t,e,l,u);x.vsub(p,F.ni),F.ni.normalize(),F.ni.scale(t.radius,F.ri),F.ri.vadd(n,F.ri),F.ri.vsub(a.position,F.ri),Vt.pointToWorldFrame(i,o,x,x),x.vsub(c.position,F.rj),Vt.vectorToWorldFrame(o,F.ni,F.ni),Vt.vectorToWorldFrame(o,F.ri,F.ri),this.result.push(F),this.createFrictionEquationsFromContact(F,this.frictionResult)}}y.length=0}planeTrimesh(t,e,n,i,r,o,a,c,l,u,f){const h=new b,d=I_;d.set(0,0,1),r.vmult(d,d);for(let g=0;g<e.vertices.length/3;g++){e.getVertex(g,h);const m=new b;m.copy(h),Vt.pointToWorldFrame(i,o,m,h);const p=N_;if(h.vsub(n,p),d.dot(p)<=0){if(f)return!0;const _=this.createContactEquation(a,c,t,e,l,u);_.ni.copy(d);const w=F_;d.scale(p.dot(d),w),h.vsub(w,w),_.ri.copy(w),_.ri.vsub(a.position,_.ri),_.rj.copy(h),_.rj.vsub(c.position,_.rj),this.result.push(_),this.createFrictionEquationsFromContact(_,this.frictionResult)}}}}const Gn=new b,bi=new b,Si=new b,L_=new b,P_=new b,R_=new $t,D_=new $t,I_=new b,N_=new b,F_=new b,z_=new b,O_=new b;new b;const B_=new b,U_=new b,k_=new b,G_=new b,V_=new b,H_=new b,W_=new b,q_=new b,X_=new b,j_=new b,Y_=new b,$_=new Fe,Z_=[],Ks=new b,oc=new b,K_=new b,J_=new b,Q_=new b;function tx(s,t,e){let n=null;const i=s.length;for(let r=0;r!==i;r++){const o=s[r],a=K_;s[(r+1)%i].vsub(o,a);const c=J_;a.cross(t,c);const l=Q_;e.vsub(o,l);const u=c.dot(l);if(n===null||u>0&&n===!0||u<=0&&n===!1){n===null&&(n=u>0);continue}else return!1}return!0}const Js=new b,ex=new b,nx=new b,ix=new b,sx=[new b,new b,new b,new b,new b,new b],rx=new b,ox=new b,ax=new b,lx=new b,cx=new b,ux=new b,hx=new b,fx=new b,dx=new b,px=new b,mx=new b,gx=new b,_x=new b,xx=new b;new b;new b;const vx=new b,yx=new b,wx=new b,Mx=new b,bx=new b,Sx=new b,Ex=new b,Tx=new b,Ax=new b,Cx=new b,ac=new $t,Lx=new b;new b;const Px=new b,lc=new b,Rx=new b,Dx=new b,Ix=new b,Nx=[0],Fx=new b,zx=new b;class cc{constructor(){this.current=[],this.previous=[]}getKey(t,e){if(e<t){const n=e;e=t,t=n}return t<<16|e}set(t,e){const n=this.getKey(t,e),i=this.current;let r=0;for(;n>i[r];)r++;if(n!==i[r]){for(let o=i.length-1;o>=r;o--)i[o+1]=i[o];i[r]=n}}tick(){const t=this.current;this.current=this.previous,this.previous=t,this.current.length=0}getDiff(t,e){const n=this.current,i=this.previous,r=n.length,o=i.length;let a=0;for(let c=0;c<r;c++){let l=!1;const u=n[c];for(;u>i[a];)a++;l=u===i[a],l||uc(t,u)}a=0;for(let c=0;c<o;c++){let l=!1;const u=i[c];for(;u>n[a];)a++;l=n[a]===u,l||uc(e,u)}}}function uc(s,t){s.push((t&4294901760)>>16,t&65535)}const Eo=(s,t)=>s<t?`${s}-${t}`:`${t}-${s}`;class Ox{constructor(){this.data={keys:[]}}get(t,e){const n=Eo(t,e);return this.data[n]}set(t,e,n){const i=Eo(t,e);this.get(t,e)||this.data.keys.push(i),this.data[i]=n}delete(t,e){const n=Eo(t,e),i=this.data.keys.indexOf(n);i!==-1&&this.data.keys.splice(i,1),delete this.data[n]}reset(){const t=this.data,e=t.keys;for(;e.length>0;){const n=e.pop();delete t[n]}}}class Bx extends fu{constructor(t){t===void 0&&(t={}),super(),this.dt=-1,this.allowSleep=!!t.allowSleep,this.contacts=[],this.frictionEquations=[],this.quatNormalizeSkip=t.quatNormalizeSkip!==void 0?t.quatNormalizeSkip:0,this.quatNormalizeFast=t.quatNormalizeFast!==void 0?t.quatNormalizeFast:!1,this.time=0,this.stepnumber=0,this.default_dt=1/60,this.nextId=0,this.gravity=new b,t.gravity&&this.gravity.copy(t.gravity),t.frictionGravity&&(this.frictionGravity=new b,this.frictionGravity.copy(t.frictionGravity)),this.broadphase=t.broadphase!==void 0?t.broadphase:new W0,this.bodies=[],this.hasActiveBodies=!1,this.solver=t.solver!==void 0?t.solver:new M_,this.constraints=[],this.narrowphase=new C_(this),this.collisionMatrix=new $l,this.collisionMatrixPrevious=new $l,this.bodyOverlapKeeper=new cc,this.shapeOverlapKeeper=new cc,this.contactmaterials=[],this.contactMaterialTable=new Ox,this.defaultMaterial=new Vi("default"),this.defaultContactMaterial=new Ms(this.defaultMaterial,this.defaultMaterial,{friction:.3,restitution:0}),this.doProfiling=!1,this.profile={solve:0,makeContactConstraints:0,broadphase:0,integrate:0,narrowphase:0},this.accumulator=0,this.subsystems=[],this.addBodyEvent={type:"addBody",body:null},this.removeBodyEvent={type:"removeBody",body:null},this.idToBodyMap={},this.broadphase.setWorld(this)}getContactMaterial(t,e){return this.contactMaterialTable.get(t.id,e.id)}collisionMatrixTick(){const t=this.collisionMatrixPrevious;this.collisionMatrixPrevious=this.collisionMatrix,this.collisionMatrix=t,this.collisionMatrix.reset(),this.bodyOverlapKeeper.tick(),this.shapeOverlapKeeper.tick()}addConstraint(t){this.constraints.push(t)}removeConstraint(t){const e=this.constraints.indexOf(t);e!==-1&&this.constraints.splice(e,1)}rayTest(t,e,n){n instanceof fr?this.raycastClosest(t,e,{skipBackfaces:!0},n):this.raycastAll(t,e,{skipBackfaces:!0},n)}raycastAll(t,e,n,i){return n===void 0&&(n={}),n.mode=te.ALL,n.from=t,n.to=e,n.callback=i,To.intersectWorld(this,n)}raycastAny(t,e,n,i){return n===void 0&&(n={}),n.mode=te.ANY,n.from=t,n.to=e,n.result=i,To.intersectWorld(this,n)}raycastClosest(t,e,n,i){return n===void 0&&(n={}),n.mode=te.CLOSEST,n.from=t,n.to=e,n.result=i,To.intersectWorld(this,n)}addBody(t){this.bodies.includes(t)||(t.index=this.bodies.length,this.bodies.push(t),t.world=this,t.initPosition.copy(t.position),t.initVelocity.copy(t.velocity),t.timeLastSleepy=this.time,t instanceof gt&&(t.initAngularVelocity.copy(t.angularVelocity),t.initQuaternion.copy(t.quaternion)),this.collisionMatrix.setNumObjects(this.bodies.length),this.addBodyEvent.body=t,this.idToBodyMap[t.id]=t,this.dispatchEvent(this.addBodyEvent))}removeBody(t){t.world=null;const e=this.bodies.length-1,n=this.bodies,i=n.indexOf(t);if(i!==-1){n.splice(i,1);for(let r=0;r!==n.length;r++)n[r].index=r;this.collisionMatrix.setNumObjects(e),this.removeBodyEvent.body=t,delete this.idToBodyMap[t.id],this.dispatchEvent(this.removeBodyEvent)}}getBodyById(t){return this.idToBodyMap[t]}getShapeById(t){const e=this.bodies;for(let n=0;n<e.length;n++){const i=e[n].shapes;for(let r=0;r<i.length;r++){const o=i[r];if(o.id===t)return o}}return null}addContactMaterial(t){this.contactmaterials.push(t),this.contactMaterialTable.set(t.materials[0].id,t.materials[1].id,t)}removeContactMaterial(t){const e=this.contactmaterials.indexOf(t);e!==-1&&(this.contactmaterials.splice(e,1),this.contactMaterialTable.delete(t.materials[0].id,t.materials[1].id))}fixedStep(t,e){t===void 0&&(t=1/60),e===void 0&&(e=10);const n=ie.now()/1e3;if(!this.lastCallTime)this.step(t,void 0,e);else{const i=n-this.lastCallTime;this.step(t,i,e)}this.lastCallTime=n}step(t,e,n){if(n===void 0&&(n=10),e===void 0)this.internalStep(t),this.time+=t;else{this.accumulator+=e;const i=ie.now();let r=0;for(;this.accumulator>=t&&r<n&&(this.internalStep(t),this.accumulator-=t,r++,!(ie.now()-i>t*1e3)););this.accumulator=this.accumulator%t;const o=this.accumulator/t;for(let a=0;a!==this.bodies.length;a++){const c=this.bodies[a];c.previousPosition.lerp(c.position,o,c.interpolatedPosition),c.previousQuaternion.slerp(c.quaternion,o,c.interpolatedQuaternion),c.previousQuaternion.normalize()}this.time+=e}}internalStep(t){this.dt=t;const e=this.contacts,n=Hx,i=Wx,r=this.bodies.length,o=this.bodies,a=this.solver,c=this.gravity,l=this.doProfiling,u=this.profile,f=gt.DYNAMIC;let h=-1/0;const d=this.constraints,g=Vx;c.length();const m=c.x,p=c.y,x=c.z;let _=0;for(l&&(h=ie.now()),_=0;_!==r;_++){const E=o[_];if(E.type===f){const P=E.force,I=E.mass;P.x+=I*m,P.y+=I*p,P.z+=I*x}}for(let E=0,P=this.subsystems.length;E!==P;E++)this.subsystems[E].update();l&&(h=ie.now()),n.length=0,i.length=0,this.broadphase.collisionPairs(this,n,i),l&&(u.broadphase=ie.now()-h);let w=d.length;for(_=0;_!==w;_++){const E=d[_];if(!E.collideConnected)for(let P=n.length-1;P>=0;P-=1)(E.bodyA===n[P]&&E.bodyB===i[P]||E.bodyB===n[P]&&E.bodyA===i[P])&&(n.splice(P,1),i.splice(P,1))}this.collisionMatrixTick(),l&&(h=ie.now());const M=Gx,y=e.length;for(_=0;_!==y;_++)M.push(e[_]);e.length=0;const A=this.frictionEquations.length;for(_=0;_!==A;_++)g.push(this.frictionEquations[_]);for(this.frictionEquations.length=0,this.narrowphase.getContacts(n,i,this,e,M,this.frictionEquations,g),l&&(u.narrowphase=ie.now()-h),l&&(h=ie.now()),_=0;_<this.frictionEquations.length;_++)a.addEquation(this.frictionEquations[_]);const R=e.length;for(let E=0;E!==R;E++){const P=e[E],I=P.bi,F=P.bj,B=P.si,G=P.sj;let Y;if(I.material&&F.material?Y=this.getContactMaterial(I.material,F.material)||this.defaultContactMaterial:Y=this.defaultContactMaterial,Y.friction,I.material&&F.material&&(I.material.friction>=0&&F.material.friction>=0&&I.material.friction*F.material.friction,I.material.restitution>=0&&F.material.restitution>=0&&(P.restitution=I.material.restitution*F.material.restitution)),a.addEquation(P),I.allowSleep&&I.type===gt.DYNAMIC&&I.sleepState===gt.SLEEPING&&F.sleepState===gt.AWAKE&&F.type!==gt.STATIC){const J=F.velocity.lengthSquared()+F.angularVelocity.lengthSquared(),lt=F.sleepSpeedLimit**2;J>=lt*2&&(I.wakeUpAfterNarrowphase=!0)}if(F.allowSleep&&F.type===gt.DYNAMIC&&F.sleepState===gt.SLEEPING&&I.sleepState===gt.AWAKE&&I.type!==gt.STATIC){const J=I.velocity.lengthSquared()+I.angularVelocity.lengthSquared(),lt=I.sleepSpeedLimit**2;J>=lt*2&&(F.wakeUpAfterNarrowphase=!0)}this.collisionMatrix.set(I,F,!0),this.collisionMatrixPrevious.get(I,F)||(ts.body=F,ts.contact=P,I.dispatchEvent(ts),ts.body=I,F.dispatchEvent(ts)),this.bodyOverlapKeeper.set(I.id,F.id),this.shapeOverlapKeeper.set(B.id,G.id)}for(this.emitContactEvents(),l&&(u.makeContactConstraints=ie.now()-h,h=ie.now()),_=0;_!==r;_++){const E=o[_];E.wakeUpAfterNarrowphase&&(E.wakeUp(),E.wakeUpAfterNarrowphase=!1)}for(w=d.length,_=0;_!==w;_++){const E=d[_];E.update();for(let P=0,I=E.equations.length;P!==I;P++){const F=E.equations[P];a.addEquation(F)}}a.solve(t,this),l&&(u.solve=ie.now()-h),a.removeAllEquations();const v=Math.pow;for(_=0;_!==r;_++){const E=o[_];if(E.type&f){const P=v(1-E.linearDamping,t),I=E.velocity;I.scale(P,I);const F=E.angularVelocity;if(F){const B=v(1-E.angularDamping,t);F.scale(B,F)}}}this.dispatchEvent(kx),l&&(h=ie.now());const C=this.stepnumber%(this.quatNormalizeSkip+1)===0,z=this.quatNormalizeFast;for(_=0;_!==r;_++)o[_].integrate(t,C,z);this.clearForces(),this.broadphase.dirty=!0,l&&(u.integrate=ie.now()-h),this.stepnumber+=1,this.dispatchEvent(Ux);let O=!0;if(this.allowSleep)for(O=!1,_=0;_!==r;_++){const E=o[_];E.sleepTick(this.time),E.sleepState!==gt.SLEEPING&&(O=!0)}this.hasActiveBodies=O}emitContactEvents(){const t=this.hasAnyEventListener("beginContact"),e=this.hasAnyEventListener("endContact");if((t||e)&&this.bodyOverlapKeeper.getDiff(dn,pn),t){for(let r=0,o=dn.length;r<o;r+=2)es.bodyA=this.getBodyById(dn[r]),es.bodyB=this.getBodyById(dn[r+1]),this.dispatchEvent(es);es.bodyA=es.bodyB=null}if(e){for(let r=0,o=pn.length;r<o;r+=2)ns.bodyA=this.getBodyById(pn[r]),ns.bodyB=this.getBodyById(pn[r+1]),this.dispatchEvent(ns);ns.bodyA=ns.bodyB=null}dn.length=pn.length=0;const n=this.hasAnyEventListener("beginShapeContact"),i=this.hasAnyEventListener("endShapeContact");if((n||i)&&this.shapeOverlapKeeper.getDiff(dn,pn),n){for(let r=0,o=dn.length;r<o;r+=2){const a=this.getShapeById(dn[r]),c=this.getShapeById(dn[r+1]);mn.shapeA=a,mn.shapeB=c,a&&(mn.bodyA=a.body),c&&(mn.bodyB=c.body),this.dispatchEvent(mn)}mn.bodyA=mn.bodyB=mn.shapeA=mn.shapeB=null}if(i){for(let r=0,o=pn.length;r<o;r+=2){const a=this.getShapeById(pn[r]),c=this.getShapeById(pn[r+1]);gn.shapeA=a,gn.shapeB=c,a&&(gn.bodyA=a.body),c&&(gn.bodyB=c.body),this.dispatchEvent(gn)}gn.bodyA=gn.bodyB=gn.shapeA=gn.shapeB=null}}clearForces(){const t=this.bodies,e=t.length;for(let n=0;n!==e;n++){const i=t[n];i.force,i.torque,i.force.set(0,0,0),i.torque.set(0,0,0)}}}new Fe;const To=new te,ie=globalThis.performance||{};if(!ie.now){let s=Date.now();ie.timing&&ie.timing.navigationStart&&(s=ie.timing.navigationStart),ie.now=()=>Date.now()-s}new b;const Ux={type:"postStep"},kx={type:"preStep"},ts={type:gt.COLLIDE_EVENT_NAME,body:null,contact:null},Gx=[],Vx=[],Hx=[],Wx=[],dn=[],pn=[],es={type:"beginContact",bodyA:null,bodyB:null},ns={type:"endContact",bodyA:null,bodyB:null},mn={type:"beginShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null},gn={type:"endShapeContact",bodyA:null,bodyB:null,shapeA:null,shapeB:null};function qx(s,t,e){let{color:n=65280,scale:i=1,onInit:r,onUpdate:o}=e===void 0?{}:e;const a=[],c=new ta({color:n??65280,wireframe:!0}),l=new b,u=new b,f=new b,h=new $t,d=new hr(1),g=new ni(1,1,1),m=new ms(10,10,10,10);m.translate(0,0,1e-4);function p(v){const S=new me,C=[];for(let O=0;O<v.vertices.length;O++){const E=v.vertices[O];C.push(E.x,E.y,E.z)}S.setAttribute("position",new jt(C,3));const z=[];for(let O=0;O<v.faces.length;O++){const E=v.faces[O],P=E[0];for(let I=1;I<E.length-1;I++){const F=E[I],B=E[I+1];z.push(P,F,B)}}return S.setIndex(z),S.computeBoundingSphere(),S.computeVertexNormals(),S}function x(v){const S=new me,C=[],z=l,O=u,E=f;for(let P=0;P<v.indices.length/3;P++)v.getTriangleVertices(P,z,O,E),C.push(z.x,z.y,z.z),C.push(O.x,O.y,O.z),C.push(E.x,E.y,E.z);return S.setAttribute("position",new jt(C,3)),S.computeBoundingSphere(),S.computeVertexNormals(),S}function _(v){const S=new me,C=v.elementSize||1,z=v.data.flatMap((E,P)=>E.flatMap((I,F)=>[P*C,F*C,I])),O=[];for(let E=0;E<v.data.length-1;E++)for(let P=0;P<v.data[E].length-1;P++){const I=v.data[E].length,F=E*I+P;O.push(F+1,F+I,F+I+1),O.push(F+I,F+1,F)}return S.setIndex(O),S.setAttribute("position",new jt(z,3)),S.computeBoundingSphere(),S.computeVertexNormals(),S}function w(v){let S=new ee;const{SPHERE:C,BOX:z,PLANE:O,CYLINDER:E,CONVEXPOLYHEDRON:P,TRIMESH:I,HEIGHTFIELD:F}=ht.types;switch(v.type){case C:{S=new ee(d,c);break}case z:{S=new ee(g,c);break}case O:{S=new ee(m,c);break}case E:{const B=new sa(v.radiusTop,v.radiusBottom,v.height,v.numSegments);S=new ee(B,c),v.geometryId=B.id;break}case P:{const B=p(v);S=new ee(B,c),v.geometryId=B.id;break}case I:{const B=x(v);S=new ee(B,c),v.geometryId=B.id;break}case F:{const B=_(v);S=new ee(B,c),v.geometryId=B.id;break}}return s.add(S),S}function M(v,S){const{SPHERE:C,BOX:z,PLANE:O,CYLINDER:E,CONVEXPOLYHEDRON:P,TRIMESH:I,HEIGHTFIELD:F}=ht.types;switch(S.type){case C:{const{radius:B}=S;v.scale.set(B*i,B*i,B*i);break}case z:{v.scale.copy(S.halfExtents),v.scale.multiplyScalar(2*i);break}case O:break;case E:{v.scale.set(1*i,1*i,1*i);break}case P:{v.scale.set(1*i,1*i,1*i);break}case I:{v.scale.copy(S.scale).multiplyScalar(i);break}case F:{v.scale.set(1*i,1*i,1*i);break}}}function y(v,S){if(!v)return!1;const{geometry:C}=v;return C instanceof hr&&S.type===ht.types.SPHERE||C instanceof ni&&S.type===ht.types.BOX||C instanceof ms&&S.type===ht.types.PLANE||C.id===S.geometryId&&S.type===ht.types.CYLINDER||C.id===S.geometryId&&S.type===ht.types.CONVEXPOLYHEDRON||C.id===S.geometryId&&S.type===ht.types.TRIMESH||C.id===S.geometryId&&S.type===ht.types.HEIGHTFIELD}function A(v,S){let C=a[v],z=!1;return y(C,S)||(C&&s.remove(C),a[v]=C=w(S),z=!0),M(C,S),z}function R(){const v=a,S=l,C=h;let z=0;for(const O of t.bodies)for(let E=0;E!==O.shapes.length;E++){const P=O.shapes[E],I=A(z,P),F=v[z];F&&(O.quaternion.vmult(O.shapeOffsets[E],S),O.position.vadd(S,S),O.quaternion.mult(O.shapeOrientations[E],C),F.position.copy(S),F.quaternion.copy(C),I&&r instanceof Function&&r(O,F,P),!I&&o instanceof Function&&o(O,F,P)),z++}for(let O=z;O<v.length;O++){const E=v[O];E&&s.remove(E)}v.length=z}return{update:R}}const hc={type:"change"},Ao={type:"start"},fc={type:"end"};class Xx extends In{constructor(t,e){super(),this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new V,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:xn.ROTATE,MIDDLE:xn.DOLLY,RIGHT:xn.PAN},this.touches={ONE:li.ROTATE,TWO:li.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(N){N.addEventListener("keydown",we),this._domElementKeyEvents=N},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(hc),n.update(),r=i.NONE},this.update=function(){const N=new V,H=new Rn().setFromUnitVectors(t.up,new V(0,1,0)),pt=H.clone().invert(),_t=new V,dt=new Rn,vt=2*Math.PI;return function(){const Rt=n.object.position;N.copy(Rt).sub(n.target),N.applyQuaternion(H),a.setFromVector3(N),n.autoRotate&&r===i.NONE&&S(R()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Dt=n.minAzimuthAngle,Gt=n.maxAzimuthAngle;return isFinite(Dt)&&isFinite(Gt)&&(Dt<-Math.PI?Dt+=vt:Dt>Math.PI&&(Dt-=vt),Gt<-Math.PI?Gt+=vt:Gt>Math.PI&&(Gt-=vt),Dt<=Gt?a.theta=Math.max(Dt,Math.min(Gt,a.theta)):a.theta=a.theta>(Dt+Gt)/2?Math.max(Dt,a.theta):Math.min(Gt,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),N.setFromSpherical(a),N.applyQuaternion(pt),Rt.copy(n.target).add(N),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||_t.distanceToSquared(n.object.position)>o||8*(1-dt.dot(n.object.quaternion))>o?(n.dispatchEvent(hc),_t.copy(n.object.position),dt.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",$),n.domElement.removeEventListener("pointerdown",Xt),n.domElement.removeEventListener("pointercancel",ge),n.domElement.removeEventListener("wheel",ze),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",Zt),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",we)};const n=this,i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let r=i.NONE;const o=1e-6,a=new ql,c=new ql;let l=1;const u=new V;let f=!1;const h=new Mt,d=new Mt,g=new Mt,m=new Mt,p=new Mt,x=new Mt,_=new Mt,w=new Mt,M=new Mt,y=[],A={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function v(){return Math.pow(.95,n.zoomSpeed)}function S(N){c.theta-=N}function C(N){c.phi-=N}const z=function(){const N=new V;return function(pt,_t){N.setFromMatrixColumn(_t,0),N.multiplyScalar(-pt),u.add(N)}}(),O=function(){const N=new V;return function(pt,_t){n.screenSpacePanning===!0?N.setFromMatrixColumn(_t,1):(N.setFromMatrixColumn(_t,0),N.crossVectors(n.object.up,N)),N.multiplyScalar(pt),u.add(N)}}(),E=function(){const N=new V;return function(pt,_t){const dt=n.domElement;if(n.object.isPerspectiveCamera){const vt=n.object.position;N.copy(vt).sub(n.target);let xt=N.length();xt*=Math.tan(n.object.fov/2*Math.PI/180),z(2*pt*xt/dt.clientHeight,n.object.matrix),O(2*_t*xt/dt.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(z(pt*(n.object.right-n.object.left)/n.object.zoom/dt.clientWidth,n.object.matrix),O(_t*(n.object.top-n.object.bottom)/n.object.zoom/dt.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function P(N){n.object.isPerspectiveCamera?l/=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*N)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function I(N){n.object.isPerspectiveCamera?l*=N:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/N)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function F(N){h.set(N.clientX,N.clientY)}function B(N){_.set(N.clientX,N.clientY)}function G(N){m.set(N.clientX,N.clientY)}function Y(N){d.set(N.clientX,N.clientY),g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const H=n.domElement;S(2*Math.PI*g.x/H.clientHeight),C(2*Math.PI*g.y/H.clientHeight),h.copy(d),n.update()}function J(N){w.set(N.clientX,N.clientY),M.subVectors(w,_),M.y>0?P(v()):M.y<0&&I(v()),_.copy(w),n.update()}function lt(N){p.set(N.clientX,N.clientY),x.subVectors(p,m).multiplyScalar(n.panSpeed),E(x.x,x.y),m.copy(p),n.update()}function U(N){N.deltaY<0?I(v()):N.deltaY>0&&P(v()),n.update()}function Q(N){let H=!1;switch(N.code){case n.keys.UP:N.ctrlKey||N.metaKey||N.shiftKey?C(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(0,n.keyPanSpeed),H=!0;break;case n.keys.BOTTOM:N.ctrlKey||N.metaKey||N.shiftKey?C(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(0,-n.keyPanSpeed),H=!0;break;case n.keys.LEFT:N.ctrlKey||N.metaKey||N.shiftKey?S(2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(n.keyPanSpeed,0),H=!0;break;case n.keys.RIGHT:N.ctrlKey||N.metaKey||N.shiftKey?S(-2*Math.PI*n.rotateSpeed/n.domElement.clientHeight):E(-n.keyPanSpeed,0),H=!0;break}H&&(N.preventDefault(),n.update())}function st(){if(y.length===1)h.set(y[0].pageX,y[0].pageY);else{const N=.5*(y[0].pageX+y[1].pageX),H=.5*(y[0].pageY+y[1].pageY);h.set(N,H)}}function rt(){if(y.length===1)m.set(y[0].pageX,y[0].pageY);else{const N=.5*(y[0].pageX+y[1].pageX),H=.5*(y[0].pageY+y[1].pageY);m.set(N,H)}}function j(){const N=y[0].pageX-y[1].pageX,H=y[0].pageY-y[1].pageY,pt=Math.sqrt(N*N+H*H);_.set(0,pt)}function q(){n.enableZoom&&j(),n.enablePan&&rt()}function et(){n.enableZoom&&j(),n.enableRotate&&st()}function ct(N){if(y.length==1)d.set(N.pageX,N.pageY);else{const pt=Et(N),_t=.5*(N.pageX+pt.x),dt=.5*(N.pageY+pt.y);d.set(_t,dt)}g.subVectors(d,h).multiplyScalar(n.rotateSpeed);const H=n.domElement;S(2*Math.PI*g.x/H.clientHeight),C(2*Math.PI*g.y/H.clientHeight),h.copy(d)}function ot(N){if(y.length===1)p.set(N.pageX,N.pageY);else{const H=Et(N),pt=.5*(N.pageX+H.x),_t=.5*(N.pageY+H.y);p.set(pt,_t)}x.subVectors(p,m).multiplyScalar(n.panSpeed),E(x.x,x.y),m.copy(p)}function At(N){const H=Et(N),pt=N.pageX-H.x,_t=N.pageY-H.y,dt=Math.sqrt(pt*pt+_t*_t);w.set(0,dt),M.set(0,Math.pow(w.y/_.y,n.zoomSpeed)),P(M.y),_.copy(w)}function bt(N){n.enableZoom&&At(N),n.enablePan&&ot(N)}function St(N){n.enableZoom&&At(N),n.enableRotate&&ct(N)}function Xt(N){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(N.pointerId),n.domElement.addEventListener("pointermove",he),n.domElement.addEventListener("pointerup",Zt)),it(N),N.pointerType==="touch"?D(N):Yt(N))}function he(N){n.enabled!==!1&&(N.pointerType==="touch"?T(N):Bt(N))}function Zt(N){at(N),y.length===0&&(n.domElement.releasePointerCapture(N.pointerId),n.domElement.removeEventListener("pointermove",he),n.domElement.removeEventListener("pointerup",Zt)),n.dispatchEvent(fc),r=i.NONE}function ge(N){at(N)}function Yt(N){let H;switch(N.button){case 0:H=n.mouseButtons.LEFT;break;case 1:H=n.mouseButtons.MIDDLE;break;case 2:H=n.mouseButtons.RIGHT;break;default:H=-1}switch(H){case xn.DOLLY:if(n.enableZoom===!1)return;B(N),r=i.DOLLY;break;case xn.ROTATE:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enablePan===!1)return;G(N),r=i.PAN}else{if(n.enableRotate===!1)return;F(N),r=i.ROTATE}break;case xn.PAN:if(N.ctrlKey||N.metaKey||N.shiftKey){if(n.enableRotate===!1)return;F(N),r=i.ROTATE}else{if(n.enablePan===!1)return;G(N),r=i.PAN}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ao)}function Bt(N){switch(r){case i.ROTATE:if(n.enableRotate===!1)return;Y(N);break;case i.DOLLY:if(n.enableZoom===!1)return;J(N);break;case i.PAN:if(n.enablePan===!1)return;lt(N);break}}function ze(N){n.enabled===!1||n.enableZoom===!1||r!==i.NONE||(N.preventDefault(),n.dispatchEvent(Ao),U(N),n.dispatchEvent(fc))}function we(N){n.enabled===!1||n.enablePan===!1||Q(N)}function D(N){switch(ft(N),y.length){case 1:switch(n.touches.ONE){case li.ROTATE:if(n.enableRotate===!1)return;st(),r=i.TOUCH_ROTATE;break;case li.PAN:if(n.enablePan===!1)return;rt(),r=i.TOUCH_PAN;break;default:r=i.NONE}break;case 2:switch(n.touches.TWO){case li.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;q(),r=i.TOUCH_DOLLY_PAN;break;case li.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;et(),r=i.TOUCH_DOLLY_ROTATE;break;default:r=i.NONE}break;default:r=i.NONE}r!==i.NONE&&n.dispatchEvent(Ao)}function T(N){switch(ft(N),r){case i.TOUCH_ROTATE:if(n.enableRotate===!1)return;ct(N),n.update();break;case i.TOUCH_PAN:if(n.enablePan===!1)return;ot(N),n.update();break;case i.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;bt(N),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;St(N),n.update();break;default:r=i.NONE}}function $(N){n.enabled!==!1&&N.preventDefault()}function it(N){y.push(N)}function at(N){delete A[N.pointerId];for(let H=0;H<y.length;H++)if(y[H].pointerId==N.pointerId){y.splice(H,1);return}}function ft(N){let H=A[N.pointerId];H===void 0&&(H=new Mt,A[N.pointerId]=H),H.set(N.pageX,N.pageY)}function Et(N){const H=N.pointerId===y[0].pointerId?y[1]:y[0];return A[H.pointerId]}n.domElement.addEventListener("contextmenu",$),n.domElement.addEventListener("pointerdown",Xt),n.domElement.addEventListener("pointercancel",ge),n.domElement.addEventListener("wheel",ze,{passive:!1}),this.update()}}class yu extends cu{constructor(t){super(t)}load(t,e,n,i){const r=this,o=new f0(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(r.parse(a))}catch(c){i?i(c):console.error(c),r.manager.itemError(t)}},n,i)}parse(t){function e(l){const u=new DataView(l),f=32/8*3+32/8*3*3+16/8,h=u.getUint32(80,!0);if(80+32/8+h*f===u.byteLength)return!0;const g=[115,111,108,105,100];for(let m=0;m<5;m++)if(n(g,u,m))return!1;return!0}function n(l,u,f){for(let h=0,d=l.length;h<d;h++)if(l[h]!==u.getUint8(f+h))return!1;return!0}function i(l){const u=new DataView(l),f=u.getUint32(80,!0);let h,d,g,m=!1,p,x,_,w,M;for(let C=0;C<80-10;C++)u.getUint32(C,!1)==1129270351&&u.getUint8(C+4)==82&&u.getUint8(C+5)==61&&(m=!0,p=new Float32Array(f*3*3),x=u.getUint8(C+6)/255,_=u.getUint8(C+7)/255,w=u.getUint8(C+8)/255,M=u.getUint8(C+9)/255);const y=84,A=12*4+2,R=new me,v=new Float32Array(f*3*3),S=new Float32Array(f*3*3);for(let C=0;C<f;C++){const z=y+C*A,O=u.getFloat32(z,!0),E=u.getFloat32(z+4,!0),P=u.getFloat32(z+8,!0);if(m){const I=u.getUint16(z+48,!0);I&32768?(h=x,d=_,g=w):(h=(I&31)/31,d=(I>>5&31)/31,g=(I>>10&31)/31)}for(let I=1;I<=3;I++){const F=z+I*12,B=C*3*3+(I-1)*3;v[B]=u.getFloat32(F,!0),v[B+1]=u.getFloat32(F+4,!0),v[B+2]=u.getFloat32(F+8,!0),S[B]=O,S[B+1]=E,S[B+2]=P,m&&(p[B]=h,p[B+1]=d,p[B+2]=g)}}return R.setAttribute("position",new Ie(v,3)),R.setAttribute("normal",new Ie(S,3)),m&&(R.setAttribute("color",new Ie(p,3)),R.hasColors=!0,R.alpha=M),R}function r(l){const u=new me,f=/solid([\s\S]*?)endsolid/g,h=/facet([\s\S]*?)endfacet/g;let d=0;const g=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,m=new RegExp("vertex"+g+g+g,"g"),p=new RegExp("normal"+g+g+g,"g"),x=[],_=[],w=new V;let M,y=0,A=0,R=0;for(;(M=f.exec(l))!==null;){A=R;const v=M[0];for(;(M=h.exec(v))!==null;){let z=0,O=0;const E=M[0];for(;(M=p.exec(E))!==null;)w.x=parseFloat(M[1]),w.y=parseFloat(M[2]),w.z=parseFloat(M[3]),O++;for(;(M=m.exec(E))!==null;)x.push(parseFloat(M[1]),parseFloat(M[2]),parseFloat(M[3])),_.push(w.x,w.y,w.z),z++,R++;O!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+d),z!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+d),d++}const S=A,C=R-A;u.addGroup(S,C,y),y++}return u.setAttribute("position",new jt(x,3)),u.setAttribute("normal",new jt(_,3)),u}function o(l){return typeof l!="string"?new TextDecoder().decode(l):l}function a(l){if(typeof l=="string"){const u=new Uint8Array(l.length);for(let f=0;f<l.length;f++)u[f]=l.charCodeAt(f)&255;return u.buffer||u}else return l}const c=a(t);return e(c)?i(c):r(o(t))}}var hs=function(){var s=0,t=document.createElement("div");t.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",t.addEventListener("click",function(u){u.preventDefault(),n(++s%t.children.length)},!1);function e(u){return t.appendChild(u.dom),u}function n(u){for(var f=0;f<t.children.length;f++)t.children[f].style.display=f===u?"block":"none";s=u}var i=(performance||Date).now(),r=i,o=0,a=e(new hs.Panel("FPS","#0ff","#002")),c=e(new hs.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var l=e(new hs.Panel("MB","#f08","#201"));return n(0),{REVISION:16,dom:t,addPanel:e,showPanel:n,begin:function(){i=(performance||Date).now()},end:function(){o++;var u=(performance||Date).now();if(c.update(u-i,200),u>=r+1e3&&(a.update(o*1e3/(u-r),100),r=u,o=0,l)){var f=performance.memory;l.update(f.usedJSHeapSize/1048576,f.jsHeapSizeLimit/1048576)}return u},update:function(){i=this.end()},domElement:t,setMode:n}};hs.Panel=function(s,t,e){var n=1/0,i=0,r=Math.round,o=r(window.devicePixelRatio||1),a=80*o,c=48*o,l=3*o,u=2*o,f=3*o,h=15*o,d=74*o,g=30*o,m=document.createElement("canvas");m.width=a,m.height=c,m.style.cssText="width:80px;height:48px";var p=m.getContext("2d");return p.font="bold "+9*o+"px Helvetica,Arial,sans-serif",p.textBaseline="top",p.fillStyle=e,p.fillRect(0,0,a,c),p.fillStyle=t,p.fillText(s,l,u),p.fillRect(f,h,d,g),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(f,h,d,g),{dom:m,update:function(x,_){n=Math.min(n,x),i=Math.max(i,x),p.fillStyle=e,p.globalAlpha=1,p.fillRect(0,0,a,h),p.fillStyle=t,p.fillText(r(x)+" "+s+" ("+r(n)+"-"+r(i)+")",l,u),p.drawImage(m,f+o,h,d-o,g,f,h,d-o,g),p.fillRect(f+d-o,h,o,g),p.fillStyle=e,p.globalAlpha=.9,p.fillRect(f+d-o,h,o,r((1-x/_)*g))}}};const wu=hs;let la,Qs,Co;const Mu=20,bs=new ia({canvas:document.querySelector("#bg"),antialias:!0});bs.setPixelRatio(window.devicePixelRatio);bs.setSize(window.innerWidth,window.innerHeight);const Hi=new au;Hi.background=new zt(0);const zi=new Le(45,window.innerWidth/window.innerHeight,.1,1e3);zi.position.set(0,20,45);zi.lookAt(0,10,-40);const bu=new d0;bu.intensity=.35;Hi.add(bu);const Ss=new hu;Ss.intensity=.5;Ss.position.set(0,5,40);Ss.castShadow=!0;Ss.shadow.camera.zoom=2;Hi.add(Ss);const dc=new Vo,pc=new kt,jx=new zt,Yx=new yu,$x=new Xx(zi,bs.domElement);$x.update();function Ai(s,t){return Math.floor(Math.random()*(t-s+1)+s)}const Su=new Vi,Eu=new Vi,Zx=new Ms(Eu,Su,{restitution:.9}),Es=new Bx({gravity:new b(0,-2,0)});new qx(Hi,Es,{});const Tu=new gt({shape:new y_,type:gt.STATIC,material:Eu});Tu.quaternion.setFromEuler(-Math.PI/2,0,0);Es.addBody(Tu);Es.addContactMaterial(Zx);let os=[],An=Array();Yx.load("STL/DNA.STL",function(s){const t=new kt().makeRotationX(Math.PI).multiply(new kt().makeScale(.025,.025,.025)).setPosition(-.5,1,.5);s.applyMatrix4(t);for(let e=0;e<Mu;e++)dc.color=jx.setHex(3355443*Ai(1,3)),pc.makeScale(1,Ai(1,2),1),Qs=new ee(s,dc),Qs.applyMatrix4(pc),Co=new gt({mass:1,shape:new Cr(new b(.4,1,.4)),position:new b(e*2-15,Ai(5,30),Ai(-50,30)),linearDamping:.8,material:Su}),os.push(Qs),An.push(Co),Hi.add(Qs),Es.addBody(Co);Au()});la=new wu;document.body.appendChild(la.dom);function Au(){for(let s=0;s<Mu;s++)An[s].angularVelocity.set(0,Ai(0,3),0),An[s].position.y<=3?(An[s].position.y=Ai(3,50),os[s].position.copy(An[s].position),os[s].quaternion.copy(An[s].quaternion)):(os[s].position.copy(An[s].position),os[s].quaternion.copy(An[s].quaternion));Es.fixedStep(),requestAnimationFrame(Au),Kx(),la.update()}function Kx(){bs.render(Hi,zi)}window.addEventListener("resize",function(){zi.aspect=window.innerWidth/window.innerHeight,zi.updateProjectionMatrix(),bs.setSize(window.innerWidth,window.innerHeight)});function Jx(s,t){return s==null||t==null?NaN:t<s?-1:t>s?1:t>=s?0:NaN}const Qx=Math.sqrt(50),tv=Math.sqrt(10),ev=Math.sqrt(2);function dr(s,t,e){const n=(t-s)/Math.max(0,e),i=Math.floor(Math.log10(n)),r=n/Math.pow(10,i),o=r>=Qx?10:r>=tv?5:r>=ev?2:1;let a,c,l;return i<0?(l=Math.pow(10,-i)/o,a=Math.round(s*l),c=Math.round(t*l),a/l<s&&++a,c/l>t&&--c,l=-l):(l=Math.pow(10,i)*o,a=Math.round(s/l),c=Math.round(t/l),a*l<s&&++a,c*l>t&&--c),c<a&&.5<=e&&e<2?dr(s,t,e*2):[a,c,l]}function nv(s,t,e){if(t=+t,s=+s,e=+e,!(e>0))return[];if(s===t)return[s];const n=t<s,[i,r,o]=n?dr(t,s,e):dr(s,t,e);if(!(r>=i))return[];const a=r-i+1,c=new Array(a);if(n)if(o<0)for(let l=0;l<a;++l)c[l]=(r-l)/-o;else for(let l=0;l<a;++l)c[l]=(r-l)*o;else if(o<0)for(let l=0;l<a;++l)c[l]=(i+l)/-o;else for(let l=0;l<a;++l)c[l]=(i+l)*o;return c}function Wo(s,t,e){return t=+t,s=+s,e=+e,dr(s,t,e)[2]}function iv(s,t,e){t=+t,s=+s,e=+e;const n=t<s,i=n?Wo(t,s,e):Wo(s,t,e);return(n?-1:1)*(i<0?1/-i:i)}var sv={value:()=>{}};function Cu(){for(var s=0,t=arguments.length,e={},n;s<t;++s){if(!(n=arguments[s]+"")||n in e||/[\s.]/.test(n))throw new Error("illegal type: "+n);e[n]=[]}return new ar(e)}function ar(s){this._=s}function rv(s,t){return s.trim().split(/^|\s+/).map(function(e){var n="",i=e.indexOf(".");if(i>=0&&(n=e.slice(i+1),e=e.slice(0,i)),e&&!t.hasOwnProperty(e))throw new Error("unknown type: "+e);return{type:e,name:n}})}ar.prototype=Cu.prototype={constructor:ar,on:function(s,t){var e=this._,n=rv(s+"",e),i,r=-1,o=n.length;if(arguments.length<2){for(;++r<o;)if((i=(s=n[r]).type)&&(i=ov(e[i],s.name)))return i;return}if(t!=null&&typeof t!="function")throw new Error("invalid callback: "+t);for(;++r<o;)if(i=(s=n[r]).type)e[i]=mc(e[i],s.name,t);else if(t==null)for(i in e)e[i]=mc(e[i],s.name,null);return this},copy:function(){var s={},t=this._;for(var e in t)s[e]=t[e].slice();return new ar(s)},call:function(s,t){if((i=arguments.length-2)>0)for(var e=new Array(i),n=0,i,r;n<i;++n)e[n]=arguments[n+2];if(!this._.hasOwnProperty(s))throw new Error("unknown type: "+s);for(r=this._[s],n=0,i=r.length;n<i;++n)r[n].value.apply(t,e)},apply:function(s,t,e){if(!this._.hasOwnProperty(s))throw new Error("unknown type: "+s);for(var n=this._[s],i=0,r=n.length;i<r;++i)n[i].value.apply(t,e)}};function ov(s,t){for(var e=0,n=s.length,i;e<n;++e)if((i=s[e]).name===t)return i.value}function mc(s,t,e){for(var n=0,i=s.length;n<i;++n)if(s[n].name===t){s[n]=sv,s=s.slice(0,n).concat(s.slice(n+1));break}return e!=null&&s.push({name:t,value:e}),s}var qo="http://www.w3.org/1999/xhtml";const gc={svg:"http://www.w3.org/2000/svg",xhtml:qo,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"};function Lr(s){var t=s+="",e=t.indexOf(":");return e>=0&&(t=s.slice(0,e))!=="xmlns"&&(s=s.slice(e+1)),gc.hasOwnProperty(t)?{space:gc[t],local:s}:s}function av(s){return function(){var t=this.ownerDocument,e=this.namespaceURI;return e===qo&&t.documentElement.namespaceURI===qo?t.createElement(s):t.createElementNS(e,s)}}function lv(s){return function(){return this.ownerDocument.createElementNS(s.space,s.local)}}function ca(s){var t=Lr(s);return(t.local?lv:av)(t)}function cv(){}function ua(s){return s==null?cv:function(){return this.querySelector(s)}}function uv(s){typeof s!="function"&&(s=ua(s));for(var t=this._groups,e=t.length,n=new Array(e),i=0;i<e;++i)for(var r=t[i],o=r.length,a=n[i]=new Array(o),c,l,u=0;u<o;++u)(c=r[u])&&(l=s.call(c,c.__data__,u,r))&&("__data__"in c&&(l.__data__=c.__data__),a[u]=l);return new Ne(n,this._parents)}function hv(s){return s==null?[]:Array.isArray(s)?s:Array.from(s)}function fv(){return[]}function Lu(s){return s==null?fv:function(){return this.querySelectorAll(s)}}function dv(s){return function(){return hv(s.apply(this,arguments))}}function pv(s){typeof s=="function"?s=dv(s):s=Lu(s);for(var t=this._groups,e=t.length,n=[],i=[],r=0;r<e;++r)for(var o=t[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&(n.push(s.call(c,c.__data__,l,o)),i.push(c));return new Ne(n,i)}function Pu(s){return function(){return this.matches(s)}}function Ru(s){return function(t){return t.matches(s)}}var mv=Array.prototype.find;function gv(s){return function(){return mv.call(this.children,s)}}function _v(){return this.firstElementChild}function xv(s){return this.select(s==null?_v:gv(typeof s=="function"?s:Ru(s)))}var vv=Array.prototype.filter;function yv(){return Array.from(this.children)}function wv(s){return function(){return vv.call(this.children,s)}}function Mv(s){return this.selectAll(s==null?yv:wv(typeof s=="function"?s:Ru(s)))}function bv(s){typeof s!="function"&&(s=Pu(s));for(var t=this._groups,e=t.length,n=new Array(e),i=0;i<e;++i)for(var r=t[i],o=r.length,a=n[i]=[],c,l=0;l<o;++l)(c=r[l])&&s.call(c,c.__data__,l,r)&&a.push(c);return new Ne(n,this._parents)}function Du(s){return new Array(s.length)}function Sv(){return new Ne(this._enter||this._groups.map(Du),this._parents)}function pr(s,t){this.ownerDocument=s.ownerDocument,this.namespaceURI=s.namespaceURI,this._next=null,this._parent=s,this.__data__=t}pr.prototype={constructor:pr,appendChild:function(s){return this._parent.insertBefore(s,this._next)},insertBefore:function(s,t){return this._parent.insertBefore(s,t)},querySelector:function(s){return this._parent.querySelector(s)},querySelectorAll:function(s){return this._parent.querySelectorAll(s)}};function Ev(s){return function(){return s}}function Tv(s,t,e,n,i,r){for(var o=0,a,c=t.length,l=r.length;o<l;++o)(a=t[o])?(a.__data__=r[o],n[o]=a):e[o]=new pr(s,r[o]);for(;o<c;++o)(a=t[o])&&(i[o]=a)}function Av(s,t,e,n,i,r,o){var a,c,l=new Map,u=t.length,f=r.length,h=new Array(u),d;for(a=0;a<u;++a)(c=t[a])&&(h[a]=d=o.call(c,c.__data__,a,t)+"",l.has(d)?i[a]=c:l.set(d,c));for(a=0;a<f;++a)d=o.call(s,r[a],a,r)+"",(c=l.get(d))?(n[a]=c,c.__data__=r[a],l.delete(d)):e[a]=new pr(s,r[a]);for(a=0;a<u;++a)(c=t[a])&&l.get(h[a])===c&&(i[a]=c)}function Cv(s){return s.__data__}function Lv(s,t){if(!arguments.length)return Array.from(this,Cv);var e=t?Av:Tv,n=this._parents,i=this._groups;typeof s!="function"&&(s=Ev(s));for(var r=i.length,o=new Array(r),a=new Array(r),c=new Array(r),l=0;l<r;++l){var u=n[l],f=i[l],h=f.length,d=Pv(s.call(u,u&&u.__data__,l,n)),g=d.length,m=a[l]=new Array(g),p=o[l]=new Array(g),x=c[l]=new Array(h);e(u,f,m,p,x,d,t);for(var _=0,w=0,M,y;_<g;++_)if(M=m[_]){for(_>=w&&(w=_+1);!(y=p[w])&&++w<g;);M._next=y||null}}return o=new Ne(o,n),o._enter=a,o._exit=c,o}function Pv(s){return typeof s=="object"&&"length"in s?s:Array.from(s)}function Rv(){return new Ne(this._exit||this._groups.map(Du),this._parents)}function Dv(s,t,e){var n=this.enter(),i=this,r=this.exit();return typeof s=="function"?(n=s(n),n&&(n=n.selection())):n=n.append(s+""),t!=null&&(i=t(i),i&&(i=i.selection())),e==null?r.remove():e(r),n&&i?n.merge(i).order():i}function Iv(s){for(var t=s.selection?s.selection():s,e=this._groups,n=t._groups,i=e.length,r=n.length,o=Math.min(i,r),a=new Array(i),c=0;c<o;++c)for(var l=e[c],u=n[c],f=l.length,h=a[c]=new Array(f),d,g=0;g<f;++g)(d=l[g]||u[g])&&(h[g]=d);for(;c<i;++c)a[c]=e[c];return new Ne(a,this._parents)}function Nv(){for(var s=this._groups,t=-1,e=s.length;++t<e;)for(var n=s[t],i=n.length-1,r=n[i],o;--i>=0;)(o=n[i])&&(r&&o.compareDocumentPosition(r)^4&&r.parentNode.insertBefore(o,r),r=o);return this}function Fv(s){s||(s=zv);function t(f,h){return f&&h?s(f.__data__,h.__data__):!f-!h}for(var e=this._groups,n=e.length,i=new Array(n),r=0;r<n;++r){for(var o=e[r],a=o.length,c=i[r]=new Array(a),l,u=0;u<a;++u)(l=o[u])&&(c[u]=l);c.sort(t)}return new Ne(i,this._parents).order()}function zv(s,t){return s<t?-1:s>t?1:s>=t?0:NaN}function Ov(){var s=arguments[0];return arguments[0]=this,s.apply(null,arguments),this}function Bv(){return Array.from(this)}function Uv(){for(var s=this._groups,t=0,e=s.length;t<e;++t)for(var n=s[t],i=0,r=n.length;i<r;++i){var o=n[i];if(o)return o}return null}function kv(){let s=0;for(const t of this)++s;return s}function Gv(){return!this.node()}function Vv(s){for(var t=this._groups,e=0,n=t.length;e<n;++e)for(var i=t[e],r=0,o=i.length,a;r<o;++r)(a=i[r])&&s.call(a,a.__data__,r,i);return this}function Hv(s){return function(){this.removeAttribute(s)}}function Wv(s){return function(){this.removeAttributeNS(s.space,s.local)}}function qv(s,t){return function(){this.setAttribute(s,t)}}function Xv(s,t){return function(){this.setAttributeNS(s.space,s.local,t)}}function jv(s,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttribute(s):this.setAttribute(s,e)}}function Yv(s,t){return function(){var e=t.apply(this,arguments);e==null?this.removeAttributeNS(s.space,s.local):this.setAttributeNS(s.space,s.local,e)}}function $v(s,t){var e=Lr(s);if(arguments.length<2){var n=this.node();return e.local?n.getAttributeNS(e.space,e.local):n.getAttribute(e)}return this.each((t==null?e.local?Wv:Hv:typeof t=="function"?e.local?Yv:jv:e.local?Xv:qv)(e,t))}function Iu(s){return s.ownerDocument&&s.ownerDocument.defaultView||s.document&&s||s.defaultView}function Zv(s){return function(){this.style.removeProperty(s)}}function Kv(s,t,e){return function(){this.style.setProperty(s,t,e)}}function Jv(s,t,e){return function(){var n=t.apply(this,arguments);n==null?this.style.removeProperty(s):this.style.setProperty(s,n,e)}}function Qv(s,t,e){return arguments.length>1?this.each((t==null?Zv:typeof t=="function"?Jv:Kv)(s,t,e??"")):Oi(this.node(),s)}function Oi(s,t){return s.style.getPropertyValue(t)||Iu(s).getComputedStyle(s,null).getPropertyValue(t)}function ty(s){return function(){delete this[s]}}function ey(s,t){return function(){this[s]=t}}function ny(s,t){return function(){var e=t.apply(this,arguments);e==null?delete this[s]:this[s]=e}}function iy(s,t){return arguments.length>1?this.each((t==null?ty:typeof t=="function"?ny:ey)(s,t)):this.node()[s]}function Nu(s){return s.trim().split(/^|\s+/)}function ha(s){return s.classList||new Fu(s)}function Fu(s){this._node=s,this._names=Nu(s.getAttribute("class")||"")}Fu.prototype={add:function(s){var t=this._names.indexOf(s);t<0&&(this._names.push(s),this._node.setAttribute("class",this._names.join(" ")))},remove:function(s){var t=this._names.indexOf(s);t>=0&&(this._names.splice(t,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(s){return this._names.indexOf(s)>=0}};function zu(s,t){for(var e=ha(s),n=-1,i=t.length;++n<i;)e.add(t[n])}function Ou(s,t){for(var e=ha(s),n=-1,i=t.length;++n<i;)e.remove(t[n])}function sy(s){return function(){zu(this,s)}}function ry(s){return function(){Ou(this,s)}}function oy(s,t){return function(){(t.apply(this,arguments)?zu:Ou)(this,s)}}function ay(s,t){var e=Nu(s+"");if(arguments.length<2){for(var n=ha(this.node()),i=-1,r=e.length;++i<r;)if(!n.contains(e[i]))return!1;return!0}return this.each((typeof t=="function"?oy:t?sy:ry)(e,t))}function ly(){this.textContent=""}function cy(s){return function(){this.textContent=s}}function uy(s){return function(){var t=s.apply(this,arguments);this.textContent=t??""}}function hy(s){return arguments.length?this.each(s==null?ly:(typeof s=="function"?uy:cy)(s)):this.node().textContent}function fy(){this.innerHTML=""}function dy(s){return function(){this.innerHTML=s}}function py(s){return function(){var t=s.apply(this,arguments);this.innerHTML=t??""}}function my(s){return arguments.length?this.each(s==null?fy:(typeof s=="function"?py:dy)(s)):this.node().innerHTML}function gy(){this.nextSibling&&this.parentNode.appendChild(this)}function _y(){return this.each(gy)}function xy(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function vy(){return this.each(xy)}function yy(s){var t=typeof s=="function"?s:ca(s);return this.select(function(){return this.appendChild(t.apply(this,arguments))})}function wy(){return null}function My(s,t){var e=typeof s=="function"?s:ca(s),n=t==null?wy:typeof t=="function"?t:ua(t);return this.select(function(){return this.insertBefore(e.apply(this,arguments),n.apply(this,arguments)||null)})}function by(){var s=this.parentNode;s&&s.removeChild(this)}function Sy(){return this.each(by)}function Ey(){var s=this.cloneNode(!1),t=this.parentNode;return t?t.insertBefore(s,this.nextSibling):s}function Ty(){var s=this.cloneNode(!0),t=this.parentNode;return t?t.insertBefore(s,this.nextSibling):s}function Ay(s){return this.select(s?Ty:Ey)}function Cy(s){return arguments.length?this.property("__data__",s):this.node().__data__}function Ly(s){return function(t){s.call(this,t,this.__data__)}}function Py(s){return s.trim().split(/^|\s+/).map(function(t){var e="",n=t.indexOf(".");return n>=0&&(e=t.slice(n+1),t=t.slice(0,n)),{type:t,name:e}})}function Ry(s){return function(){var t=this.__on;if(t){for(var e=0,n=-1,i=t.length,r;e<i;++e)r=t[e],(!s.type||r.type===s.type)&&r.name===s.name?this.removeEventListener(r.type,r.listener,r.options):t[++n]=r;++n?t.length=n:delete this.__on}}}function Dy(s,t,e){return function(){var n=this.__on,i,r=Ly(t);if(n){for(var o=0,a=n.length;o<a;++o)if((i=n[o]).type===s.type&&i.name===s.name){this.removeEventListener(i.type,i.listener,i.options),this.addEventListener(i.type,i.listener=r,i.options=e),i.value=t;return}}this.addEventListener(s.type,r,e),i={type:s.type,name:s.name,value:t,listener:r,options:e},n?n.push(i):this.__on=[i]}}function Iy(s,t,e){var n=Py(s+""),i,r=n.length,o;if(arguments.length<2){var a=this.node().__on;if(a){for(var c=0,l=a.length,u;c<l;++c)for(i=0,u=a[c];i<r;++i)if((o=n[i]).type===u.type&&o.name===u.name)return u.value}return}for(a=t?Dy:Ry,i=0;i<r;++i)this.each(a(n[i],t,e));return this}function Bu(s,t,e){var n=Iu(s),i=n.CustomEvent;typeof i=="function"?i=new i(t,e):(i=n.document.createEvent("Event"),e?(i.initEvent(t,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(t,!1,!1)),s.dispatchEvent(i)}function Ny(s,t){return function(){return Bu(this,s,t)}}function Fy(s,t){return function(){return Bu(this,s,t.apply(this,arguments))}}function zy(s,t){return this.each((typeof t=="function"?Fy:Ny)(s,t))}function*Oy(){for(var s=this._groups,t=0,e=s.length;t<e;++t)for(var n=s[t],i=0,r=n.length,o;i<r;++i)(o=n[i])&&(yield o)}var Uu=[null];function Ne(s,t){this._groups=s,this._parents=t}function Ts(){return new Ne([[document.documentElement]],Uu)}function By(){return this}Ne.prototype=Ts.prototype={constructor:Ne,select:uv,selectAll:pv,selectChild:xv,selectChildren:Mv,filter:bv,data:Lv,enter:Sv,exit:Rv,join:Dv,merge:Iv,selection:By,order:Nv,sort:Fv,call:Ov,nodes:Bv,node:Uv,size:kv,empty:Gv,each:Vv,attr:$v,style:Qv,property:iy,classed:ay,text:hy,html:my,raise:_y,lower:vy,append:yy,insert:My,remove:Sy,clone:Ay,datum:Cy,on:Iy,dispatch:zy,[Symbol.iterator]:Oy};function Uy(s){return typeof s=="string"?new Ne([[document.querySelector(s)]],[document.documentElement]):new Ne([[s]],Uu)}function ky(s){return Uy(ca(s).call(document.documentElement))}function Pr(s,t,e){s.prototype=t.prototype=e,e.constructor=s}function fa(s,t){var e=Object.create(s.prototype);for(var n in t)e[n]=t[n];return e}function Wi(){}var si=.7,Bi=1/si,Pi="\\s*([+-]?\\d+)\\s*",gs="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)\\s*",en="\\s*([+-]?(?:\\d*\\.)?\\d+(?:[eE][+-]?\\d+)?)%\\s*",Gy=/^#([0-9a-f]{3,8})$/,Vy=new RegExp(`^rgb\\(${Pi},${Pi},${Pi}\\)$`),Hy=new RegExp(`^rgb\\(${en},${en},${en}\\)$`),Wy=new RegExp(`^rgba\\(${Pi},${Pi},${Pi},${gs}\\)$`),qy=new RegExp(`^rgba\\(${en},${en},${en},${gs}\\)$`),Xy=new RegExp(`^hsl\\(${gs},${en},${en}\\)$`),jy=new RegExp(`^hsla\\(${gs},${en},${en},${gs}\\)$`),_c={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};Pr(Wi,ri,{copy(s){return Object.assign(new this.constructor,this,s)},displayable(){return this.rgb().displayable()},hex:xc,formatHex:xc,formatHex8:Yy,formatHsl:$y,formatRgb:vc,toString:vc});function xc(){return this.rgb().formatHex()}function Yy(){return this.rgb().formatHex8()}function $y(){return Gu(this).formatHsl()}function vc(){return this.rgb().formatRgb()}function ri(s){var t,e;return s=(s+"").trim().toLowerCase(),(t=Gy.exec(s))?(e=t[1].length,t=parseInt(t[1],16),e===6?yc(t):e===3?new pe(t>>8&15|t>>4&240,t>>4&15|t&240,(t&15)<<4|t&15,1):e===8?tr(t>>24&255,t>>16&255,t>>8&255,(t&255)/255):e===4?tr(t>>12&15|t>>8&240,t>>8&15|t>>4&240,t>>4&15|t&240,((t&15)<<4|t&15)/255):null):(t=Vy.exec(s))?new pe(t[1],t[2],t[3],1):(t=Hy.exec(s))?new pe(t[1]*255/100,t[2]*255/100,t[3]*255/100,1):(t=Wy.exec(s))?tr(t[1],t[2],t[3],t[4]):(t=qy.exec(s))?tr(t[1]*255/100,t[2]*255/100,t[3]*255/100,t[4]):(t=Xy.exec(s))?bc(t[1],t[2]/100,t[3]/100,1):(t=jy.exec(s))?bc(t[1],t[2]/100,t[3]/100,t[4]):_c.hasOwnProperty(s)?yc(_c[s]):s==="transparent"?new pe(NaN,NaN,NaN,0):null}function yc(s){return new pe(s>>16&255,s>>8&255,s&255,1)}function tr(s,t,e,n){return n<=0&&(s=t=e=NaN),new pe(s,t,e,n)}function ku(s){return s instanceof Wi||(s=ri(s)),s?(s=s.rgb(),new pe(s.r,s.g,s.b,s.opacity)):new pe}function Xo(s,t,e,n){return arguments.length===1?ku(s):new pe(s,t,e,n??1)}function pe(s,t,e,n){this.r=+s,this.g=+t,this.b=+e,this.opacity=+n}Pr(pe,Xo,fa(Wi,{brighter(s){return s=s==null?Bi:Math.pow(Bi,s),new pe(this.r*s,this.g*s,this.b*s,this.opacity)},darker(s){return s=s==null?si:Math.pow(si,s),new pe(this.r*s,this.g*s,this.b*s,this.opacity)},rgb(){return this},clamp(){return new pe(Kn(this.r),Kn(this.g),Kn(this.b),mr(this.opacity))},displayable(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:wc,formatHex:wc,formatHex8:Zy,formatRgb:Mc,toString:Mc}));function wc(){return`#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}`}function Zy(){return`#${Yn(this.r)}${Yn(this.g)}${Yn(this.b)}${Yn((isNaN(this.opacity)?1:this.opacity)*255)}`}function Mc(){const s=mr(this.opacity);return`${s===1?"rgb(":"rgba("}${Kn(this.r)}, ${Kn(this.g)}, ${Kn(this.b)}${s===1?")":`, ${s})`}`}function mr(s){return isNaN(s)?1:Math.max(0,Math.min(1,s))}function Kn(s){return Math.max(0,Math.min(255,Math.round(s)||0))}function Yn(s){return s=Kn(s),(s<16?"0":"")+s.toString(16)}function bc(s,t,e,n){return n<=0?s=t=e=NaN:e<=0||e>=1?s=t=NaN:t<=0&&(s=NaN),new Xe(s,t,e,n)}function Gu(s){if(s instanceof Xe)return new Xe(s.h,s.s,s.l,s.opacity);if(s instanceof Wi||(s=ri(s)),!s)return new Xe;if(s instanceof Xe)return s;s=s.rgb();var t=s.r/255,e=s.g/255,n=s.b/255,i=Math.min(t,e,n),r=Math.max(t,e,n),o=NaN,a=r-i,c=(r+i)/2;return a?(t===r?o=(e-n)/a+(e<n)*6:e===r?o=(n-t)/a+2:o=(t-e)/a+4,a/=c<.5?r+i:2-r-i,o*=60):a=c>0&&c<1?0:o,new Xe(o,a,c,s.opacity)}function Ky(s,t,e,n){return arguments.length===1?Gu(s):new Xe(s,t,e,n??1)}function Xe(s,t,e,n){this.h=+s,this.s=+t,this.l=+e,this.opacity=+n}Pr(Xe,Ky,fa(Wi,{brighter(s){return s=s==null?Bi:Math.pow(Bi,s),new Xe(this.h,this.s,this.l*s,this.opacity)},darker(s){return s=s==null?si:Math.pow(si,s),new Xe(this.h,this.s,this.l*s,this.opacity)},rgb(){var s=this.h%360+(this.h<0)*360,t=isNaN(s)||isNaN(this.s)?0:this.s,e=this.l,n=e+(e<.5?e:1-e)*t,i=2*e-n;return new pe(Lo(s>=240?s-240:s+120,i,n),Lo(s,i,n),Lo(s<120?s+240:s-120,i,n),this.opacity)},clamp(){return new Xe(Sc(this.h),er(this.s),er(this.l),mr(this.opacity))},displayable(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl(){const s=mr(this.opacity);return`${s===1?"hsl(":"hsla("}${Sc(this.h)}, ${er(this.s)*100}%, ${er(this.l)*100}%${s===1?")":`, ${s})`}`}}));function Sc(s){return s=(s||0)%360,s<0?s+360:s}function er(s){return Math.max(0,Math.min(1,s||0))}function Lo(s,t,e){return(s<60?t+(e-t)*s/60:s<180?e:s<240?t+(e-t)*(240-s)/60:t)*255}const Jy=Math.PI/180,Qy=180/Math.PI;var Vu=-.14861,da=1.78277,pa=-.29227,Rr=-.90649,_s=1.97294,Ec=_s*Rr,Tc=_s*da,Ac=da*pa-Rr*Vu;function tw(s){if(s instanceof Jn)return new Jn(s.h,s.s,s.l,s.opacity);s instanceof pe||(s=ku(s));var t=s.r/255,e=s.g/255,n=s.b/255,i=(Ac*n+Ec*t-Tc*e)/(Ac+Ec-Tc),r=n-i,o=(_s*(e-i)-pa*r)/Rr,a=Math.sqrt(o*o+r*r)/(_s*i*(1-i)),c=a?Math.atan2(o,r)*Qy-120:NaN;return new Jn(c<0?c+360:c,a,i,s.opacity)}function Dn(s,t,e,n){return arguments.length===1?tw(s):new Jn(s,t,e,n??1)}function Jn(s,t,e,n){this.h=+s,this.s=+t,this.l=+e,this.opacity=+n}Pr(Jn,Dn,fa(Wi,{brighter(s){return s=s==null?Bi:Math.pow(Bi,s),new Jn(this.h,this.s,this.l*s,this.opacity)},darker(s){return s=s==null?si:Math.pow(si,s),new Jn(this.h,this.s,this.l*s,this.opacity)},rgb(){var s=isNaN(this.h)?0:(this.h+120)*Jy,t=+this.l,e=isNaN(this.s)?0:this.s*t*(1-t),n=Math.cos(s),i=Math.sin(s);return new pe(255*(t+e*(Vu*n+da*i)),255*(t+e*(pa*n+Rr*i)),255*(t+e*(_s*n)),this.opacity)}}));const Dr=s=>()=>s;function Hu(s,t){return function(e){return s+e*t}}function ew(s,t,e){return s=Math.pow(s,e),t=Math.pow(t,e)-s,e=1/e,function(n){return Math.pow(s+n*t,e)}}function nw(s,t){var e=t-s;return e?Hu(s,e>180||e<-180?e-360*Math.round(e/360):e):Dr(isNaN(s)?t:s)}function iw(s){return(s=+s)==1?Ri:function(t,e){return e-t?ew(t,e,s):Dr(isNaN(t)?e:t)}}function Ri(s,t){var e=t-s;return e?Hu(s,e):Dr(isNaN(s)?t:s)}const gr=function s(t){var e=iw(t);function n(i,r){var o=e((i=Xo(i)).r,(r=Xo(r)).r),a=e(i.g,r.g),c=e(i.b,r.b),l=Ri(i.opacity,r.opacity);return function(u){return i.r=o(u),i.g=a(u),i.b=c(u),i.opacity=l(u),i+""}}return n.gamma=s,n}(1);function sw(s,t){t||(t=[]);var e=s?Math.min(t.length,s.length):0,n=t.slice(),i;return function(r){for(i=0;i<e;++i)n[i]=s[i]*(1-r)+t[i]*r;return n}}function rw(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function ow(s,t){var e=t?t.length:0,n=s?Math.min(e,s.length):0,i=new Array(n),r=new Array(e),o;for(o=0;o<n;++o)i[o]=ma(s[o],t[o]);for(;o<e;++o)r[o]=t[o];return function(a){for(o=0;o<n;++o)r[o]=i[o](a);return r}}function aw(s,t){var e=new Date;return s=+s,t=+t,function(n){return e.setTime(s*(1-n)+t*n),e}}function tn(s,t){return s=+s,t=+t,function(e){return s*(1-e)+t*e}}function lw(s,t){var e={},n={},i;(s===null||typeof s!="object")&&(s={}),(t===null||typeof t!="object")&&(t={});for(i in t)i in s?e[i]=ma(s[i],t[i]):n[i]=t[i];return function(r){for(i in e)n[i]=e[i](r);return n}}var jo=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,Po=new RegExp(jo.source,"g");function cw(s){return function(){return s}}function uw(s){return function(t){return s(t)+""}}function Wu(s,t){var e=jo.lastIndex=Po.lastIndex=0,n,i,r,o=-1,a=[],c=[];for(s=s+"",t=t+"";(n=jo.exec(s))&&(i=Po.exec(t));)(r=i.index)>e&&(r=t.slice(e,r),a[o]?a[o]+=r:a[++o]=r),(n=n[0])===(i=i[0])?a[o]?a[o]+=i:a[++o]=i:(a[++o]=null,c.push({i:o,x:tn(n,i)})),e=Po.lastIndex;return e<t.length&&(r=t.slice(e),a[o]?a[o]+=r:a[++o]=r),a.length<2?c[0]?uw(c[0].x):cw(t):(t=c.length,function(l){for(var u=0,f;u<t;++u)a[(f=c[u]).i]=f.x(l);return a.join("")})}function ma(s,t){var e=typeof t,n;return t==null||e==="boolean"?Dr(t):(e==="number"?tn:e==="string"?(n=ri(t))?(t=n,gr):Wu:t instanceof ri?gr:t instanceof Date?aw:rw(t)?sw:Array.isArray(t)?ow:typeof t.valueOf!="function"&&typeof t.toString!="function"||isNaN(t)?lw:tn)(s,t)}function hw(s,t){return s=+s,t=+t,function(e){return Math.round(s*(1-e)+t*e)}}var Cc=180/Math.PI,Yo={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1};function qu(s,t,e,n,i,r){var o,a,c;return(o=Math.sqrt(s*s+t*t))&&(s/=o,t/=o),(c=s*e+t*n)&&(e-=s*c,n-=t*c),(a=Math.sqrt(e*e+n*n))&&(e/=a,n/=a,c/=a),s*n<t*e&&(s=-s,t=-t,c=-c,o=-o),{translateX:i,translateY:r,rotate:Math.atan2(t,s)*Cc,skewX:Math.atan(c)*Cc,scaleX:o,scaleY:a}}var nr;function fw(s){const t=new(typeof DOMMatrix=="function"?DOMMatrix:WebKitCSSMatrix)(s+"");return t.isIdentity?Yo:qu(t.a,t.b,t.c,t.d,t.e,t.f)}function dw(s){return s==null||(nr||(nr=document.createElementNS("http://www.w3.org/2000/svg","g")),nr.setAttribute("transform",s),!(s=nr.transform.baseVal.consolidate()))?Yo:(s=s.matrix,qu(s.a,s.b,s.c,s.d,s.e,s.f))}function Xu(s,t,e,n){function i(l){return l.length?l.pop()+" ":""}function r(l,u,f,h,d,g){if(l!==f||u!==h){var m=d.push("translate(",null,t,null,e);g.push({i:m-4,x:tn(l,f)},{i:m-2,x:tn(u,h)})}else(f||h)&&d.push("translate("+f+t+h+e)}function o(l,u,f,h){l!==u?(l-u>180?u+=360:u-l>180&&(l+=360),h.push({i:f.push(i(f)+"rotate(",null,n)-2,x:tn(l,u)})):u&&f.push(i(f)+"rotate("+u+n)}function a(l,u,f,h){l!==u?h.push({i:f.push(i(f)+"skewX(",null,n)-2,x:tn(l,u)}):u&&f.push(i(f)+"skewX("+u+n)}function c(l,u,f,h,d,g){if(l!==f||u!==h){var m=d.push(i(d)+"scale(",null,",",null,")");g.push({i:m-4,x:tn(l,f)},{i:m-2,x:tn(u,h)})}else(f!==1||h!==1)&&d.push(i(d)+"scale("+f+","+h+")")}return function(l,u){var f=[],h=[];return l=s(l),u=s(u),r(l.translateX,l.translateY,u.translateX,u.translateY,f,h),o(l.rotate,u.rotate,f,h),a(l.skewX,u.skewX,f,h),c(l.scaleX,l.scaleY,u.scaleX,u.scaleY,f,h),l=u=null,function(d){for(var g=-1,m=h.length,p;++g<m;)f[(p=h[g]).i]=p.x(d);return f.join("")}}}var pw=Xu(fw,"px, ","px)","deg)"),mw=Xu(dw,", ",")",")");function ju(s){return function t(e){e=+e;function n(i,r){var o=s((i=Dn(i)).h,(r=Dn(r)).h),a=Ri(i.s,r.s),c=Ri(i.l,r.l),l=Ri(i.opacity,r.opacity);return function(u){return i.h=o(u),i.s=a(u),i.l=c(Math.pow(u,e)),i.opacity=l(u),i+""}}return n.gamma=t,n}(1)}ju(nw);var Yu=ju(Ri),Ui=0,as=0,is=0,$u=1e3,_r,ls,xr=0,oi=0,Ir=0,xs=typeof performance=="object"&&performance.now?performance:Date,Zu=typeof window=="object"&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(s){setTimeout(s,17)};function ga(){return oi||(Zu(gw),oi=xs.now()+Ir)}function gw(){oi=0}function vr(){this._call=this._time=this._next=null}vr.prototype=Ku.prototype={constructor:vr,restart:function(s,t,e){if(typeof s!="function")throw new TypeError("callback is not a function");e=(e==null?ga():+e)+(t==null?0:+t),!this._next&&ls!==this&&(ls?ls._next=this:_r=this,ls=this),this._call=s,this._time=e,$o()},stop:function(){this._call&&(this._call=null,this._time=1/0,$o())}};function Ku(s,t,e){var n=new vr;return n.restart(s,t,e),n}function _w(){ga(),++Ui;for(var s=_r,t;s;)(t=oi-s._time)>=0&&s._call.call(void 0,t),s=s._next;--Ui}function Lc(){oi=(xr=xs.now())+Ir,Ui=as=0;try{_w()}finally{Ui=0,vw(),oi=0}}function xw(){var s=xs.now(),t=s-xr;t>$u&&(Ir-=t,xr=s)}function vw(){for(var s,t=_r,e,n=1/0;t;)t._call?(n>t._time&&(n=t._time),s=t,t=t._next):(e=t._next,t._next=null,t=s?s._next=e:_r=e);ls=s,$o(n)}function $o(s){if(!Ui){as&&(as=clearTimeout(as));var t=s-oi;t>24?(s<1/0&&(as=setTimeout(Lc,s-xs.now()-Ir)),is&&(is=clearInterval(is))):(is||(xr=xs.now(),is=setInterval(xw,$u)),Ui=1,Zu(Lc))}}function Pc(s,t,e){var n=new vr;return t=t==null?0:+t,n.restart(i=>{n.stop(),s(i+t)},t,e),n}var yw=Cu("start","end","cancel","interrupt"),ww=[],Ju=0,Rc=1,Zo=2,lr=3,Dc=4,Ko=5,cr=6;function Nr(s,t,e,n,i,r){var o=s.__transition;if(!o)s.__transition={};else if(e in o)return;Mw(s,e,{name:t,index:n,group:i,on:yw,tween:ww,time:r.time,delay:r.delay,duration:r.duration,ease:r.ease,timer:null,state:Ju})}function _a(s,t){var e=Ye(s,t);if(e.state>Ju)throw new Error("too late; already scheduled");return e}function nn(s,t){var e=Ye(s,t);if(e.state>lr)throw new Error("too late; already running");return e}function Ye(s,t){var e=s.__transition;if(!e||!(e=e[t]))throw new Error("transition not found");return e}function Mw(s,t,e){var n=s.__transition,i;n[t]=e,e.timer=Ku(r,0,e.time);function r(l){e.state=Rc,e.timer.restart(o,e.delay,e.time),e.delay<=l&&o(l-e.delay)}function o(l){var u,f,h,d;if(e.state!==Rc)return c();for(u in n)if(d=n[u],d.name===e.name){if(d.state===lr)return Pc(o);d.state===Dc?(d.state=cr,d.timer.stop(),d.on.call("interrupt",s,s.__data__,d.index,d.group),delete n[u]):+u<t&&(d.state=cr,d.timer.stop(),d.on.call("cancel",s,s.__data__,d.index,d.group),delete n[u])}if(Pc(function(){e.state===lr&&(e.state=Dc,e.timer.restart(a,e.delay,e.time),a(l))}),e.state=Zo,e.on.call("start",s,s.__data__,e.index,e.group),e.state===Zo){for(e.state=lr,i=new Array(h=e.tween.length),u=0,f=-1;u<h;++u)(d=e.tween[u].value.call(s,s.__data__,e.index,e.group))&&(i[++f]=d);i.length=f+1}}function a(l){for(var u=l<e.duration?e.ease.call(null,l/e.duration):(e.timer.restart(c),e.state=Ko,1),f=-1,h=i.length;++f<h;)i[f].call(s,u);e.state===Ko&&(e.on.call("end",s,s.__data__,e.index,e.group),c())}function c(){e.state=cr,e.timer.stop(),delete n[t];for(var l in n)return;delete s.__transition}}function bw(s,t){var e=s.__transition,n,i,r=!0,o;if(e){t=t==null?null:t+"";for(o in e){if((n=e[o]).name!==t){r=!1;continue}i=n.state>Zo&&n.state<Ko,n.state=cr,n.timer.stop(),n.on.call(i?"interrupt":"cancel",s,s.__data__,n.index,n.group),delete e[o]}r&&delete s.__transition}}function Sw(s){return this.each(function(){bw(this,s)})}function Ew(s,t){var e,n;return function(){var i=nn(this,s),r=i.tween;if(r!==e){n=e=r;for(var o=0,a=n.length;o<a;++o)if(n[o].name===t){n=n.slice(),n.splice(o,1);break}}i.tween=n}}function Tw(s,t,e){var n,i;if(typeof e!="function")throw new Error;return function(){var r=nn(this,s),o=r.tween;if(o!==n){i=(n=o).slice();for(var a={name:t,value:e},c=0,l=i.length;c<l;++c)if(i[c].name===t){i[c]=a;break}c===l&&i.push(a)}r.tween=i}}function Aw(s,t){var e=this._id;if(s+="",arguments.length<2){for(var n=Ye(this.node(),e).tween,i=0,r=n.length,o;i<r;++i)if((o=n[i]).name===s)return o.value;return null}return this.each((t==null?Ew:Tw)(e,s,t))}function xa(s,t,e){var n=s._id;return s.each(function(){var i=nn(this,n);(i.value||(i.value={}))[t]=e.apply(this,arguments)}),function(i){return Ye(i,n).value[t]}}function Qu(s,t){var e;return(typeof t=="number"?tn:t instanceof ri?gr:(e=ri(t))?(t=e,gr):Wu)(s,t)}function Cw(s){return function(){this.removeAttribute(s)}}function Lw(s){return function(){this.removeAttributeNS(s.space,s.local)}}function Pw(s,t,e){var n,i=e+"",r;return function(){var o=this.getAttribute(s);return o===i?null:o===n?r:r=t(n=o,e)}}function Rw(s,t,e){var n,i=e+"",r;return function(){var o=this.getAttributeNS(s.space,s.local);return o===i?null:o===n?r:r=t(n=o,e)}}function Dw(s,t,e){var n,i,r;return function(){var o,a=e(this),c;return a==null?void this.removeAttribute(s):(o=this.getAttribute(s),c=a+"",o===c?null:o===n&&c===i?r:(i=c,r=t(n=o,a)))}}function Iw(s,t,e){var n,i,r;return function(){var o,a=e(this),c;return a==null?void this.removeAttributeNS(s.space,s.local):(o=this.getAttributeNS(s.space,s.local),c=a+"",o===c?null:o===n&&c===i?r:(i=c,r=t(n=o,a)))}}function Nw(s,t){var e=Lr(s),n=e==="transform"?mw:Qu;return this.attrTween(s,typeof t=="function"?(e.local?Iw:Dw)(e,n,xa(this,"attr."+s,t)):t==null?(e.local?Lw:Cw)(e):(e.local?Rw:Pw)(e,n,t))}function Fw(s,t){return function(e){this.setAttribute(s,t.call(this,e))}}function zw(s,t){return function(e){this.setAttributeNS(s.space,s.local,t.call(this,e))}}function Ow(s,t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&zw(s,r)),e}return i._value=t,i}function Bw(s,t){var e,n;function i(){var r=t.apply(this,arguments);return r!==n&&(e=(n=r)&&Fw(s,r)),e}return i._value=t,i}function Uw(s,t){var e="attr."+s;if(arguments.length<2)return(e=this.tween(e))&&e._value;if(t==null)return this.tween(e,null);if(typeof t!="function")throw new Error;var n=Lr(s);return this.tween(e,(n.local?Ow:Bw)(n,t))}function kw(s,t){return function(){_a(this,s).delay=+t.apply(this,arguments)}}function Gw(s,t){return t=+t,function(){_a(this,s).delay=t}}function Vw(s){var t=this._id;return arguments.length?this.each((typeof s=="function"?kw:Gw)(t,s)):Ye(this.node(),t).delay}function Hw(s,t){return function(){nn(this,s).duration=+t.apply(this,arguments)}}function Ww(s,t){return t=+t,function(){nn(this,s).duration=t}}function qw(s){var t=this._id;return arguments.length?this.each((typeof s=="function"?Hw:Ww)(t,s)):Ye(this.node(),t).duration}function Xw(s,t){if(typeof t!="function")throw new Error;return function(){nn(this,s).ease=t}}function jw(s){var t=this._id;return arguments.length?this.each(Xw(t,s)):Ye(this.node(),t).ease}function Yw(s,t){return function(){var e=t.apply(this,arguments);if(typeof e!="function")throw new Error;nn(this,s).ease=e}}function $w(s){if(typeof s!="function")throw new Error;return this.each(Yw(this._id,s))}function Zw(s){typeof s!="function"&&(s=Pu(s));for(var t=this._groups,e=t.length,n=new Array(e),i=0;i<e;++i)for(var r=t[i],o=r.length,a=n[i]=[],c,l=0;l<o;++l)(c=r[l])&&s.call(c,c.__data__,l,r)&&a.push(c);return new wn(n,this._parents,this._name,this._id)}function Kw(s){if(s._id!==this._id)throw new Error;for(var t=this._groups,e=s._groups,n=t.length,i=e.length,r=Math.min(n,i),o=new Array(n),a=0;a<r;++a)for(var c=t[a],l=e[a],u=c.length,f=o[a]=new Array(u),h,d=0;d<u;++d)(h=c[d]||l[d])&&(f[d]=h);for(;a<n;++a)o[a]=t[a];return new wn(o,this._parents,this._name,this._id)}function Jw(s){return(s+"").trim().split(/^|\s+/).every(function(t){var e=t.indexOf(".");return e>=0&&(t=t.slice(0,e)),!t||t==="start"})}function Qw(s,t,e){var n,i,r=Jw(t)?_a:nn;return function(){var o=r(this,s),a=o.on;a!==n&&(i=(n=a).copy()).on(t,e),o.on=i}}function tM(s,t){var e=this._id;return arguments.length<2?Ye(this.node(),e).on.on(s):this.each(Qw(e,s,t))}function eM(s){return function(){var t=this.parentNode;for(var e in this.__transition)if(+e!==s)return;t&&t.removeChild(this)}}function nM(){return this.on("end.remove",eM(this._id))}function iM(s){var t=this._name,e=this._id;typeof s!="function"&&(s=ua(s));for(var n=this._groups,i=n.length,r=new Array(i),o=0;o<i;++o)for(var a=n[o],c=a.length,l=r[o]=new Array(c),u,f,h=0;h<c;++h)(u=a[h])&&(f=s.call(u,u.__data__,h,a))&&("__data__"in u&&(f.__data__=u.__data__),l[h]=f,Nr(l[h],t,e,h,l,Ye(u,e)));return new wn(r,this._parents,t,e)}function sM(s){var t=this._name,e=this._id;typeof s!="function"&&(s=Lu(s));for(var n=this._groups,i=n.length,r=[],o=[],a=0;a<i;++a)for(var c=n[a],l=c.length,u,f=0;f<l;++f)if(u=c[f]){for(var h=s.call(u,u.__data__,f,c),d,g=Ye(u,e),m=0,p=h.length;m<p;++m)(d=h[m])&&Nr(d,t,e,m,h,g);r.push(h),o.push(u)}return new wn(r,o,t,e)}var rM=Ts.prototype.constructor;function oM(){return new rM(this._groups,this._parents)}function aM(s,t){var e,n,i;return function(){var r=Oi(this,s),o=(this.style.removeProperty(s),Oi(this,s));return r===o?null:r===e&&o===n?i:i=t(e=r,n=o)}}function th(s){return function(){this.style.removeProperty(s)}}function lM(s,t,e){var n,i=e+"",r;return function(){var o=Oi(this,s);return o===i?null:o===n?r:r=t(n=o,e)}}function cM(s,t,e){var n,i,r;return function(){var o=Oi(this,s),a=e(this),c=a+"";return a==null&&(c=a=(this.style.removeProperty(s),Oi(this,s))),o===c?null:o===n&&c===i?r:(i=c,r=t(n=o,a))}}function uM(s,t){var e,n,i,r="style."+t,o="end."+r,a;return function(){var c=nn(this,s),l=c.on,u=c.value[r]==null?a||(a=th(t)):void 0;(l!==e||i!==u)&&(n=(e=l).copy()).on(o,i=u),c.on=n}}function hM(s,t,e){var n=(s+="")=="transform"?pw:Qu;return t==null?this.styleTween(s,aM(s,n)).on("end.style."+s,th(s)):typeof t=="function"?this.styleTween(s,cM(s,n,xa(this,"style."+s,t))).each(uM(this._id,s)):this.styleTween(s,lM(s,n,t),e).on("end.style."+s,null)}function fM(s,t,e){return function(n){this.style.setProperty(s,t.call(this,n),e)}}function dM(s,t,e){var n,i;function r(){var o=t.apply(this,arguments);return o!==i&&(n=(i=o)&&fM(s,o,e)),n}return r._value=t,r}function pM(s,t,e){var n="style."+(s+="");if(arguments.length<2)return(n=this.tween(n))&&n._value;if(t==null)return this.tween(n,null);if(typeof t!="function")throw new Error;return this.tween(n,dM(s,t,e??""))}function mM(s){return function(){this.textContent=s}}function gM(s){return function(){var t=s(this);this.textContent=t??""}}function _M(s){return this.tween("text",typeof s=="function"?gM(xa(this,"text",s)):mM(s==null?"":s+""))}function xM(s){return function(t){this.textContent=s.call(this,t)}}function vM(s){var t,e;function n(){var i=s.apply(this,arguments);return i!==e&&(t=(e=i)&&xM(i)),t}return n._value=s,n}function yM(s){var t="text";if(arguments.length<1)return(t=this.tween(t))&&t._value;if(s==null)return this.tween(t,null);if(typeof s!="function")throw new Error;return this.tween(t,vM(s))}function wM(){for(var s=this._name,t=this._id,e=eh(),n=this._groups,i=n.length,r=0;r<i;++r)for(var o=n[r],a=o.length,c,l=0;l<a;++l)if(c=o[l]){var u=Ye(c,t);Nr(c,s,e,l,o,{time:u.time+u.delay+u.duration,delay:0,duration:u.duration,ease:u.ease})}return new wn(n,this._parents,s,e)}function MM(){var s,t,e=this,n=e._id,i=e.size();return new Promise(function(r,o){var a={value:o},c={value:function(){--i===0&&r()}};e.each(function(){var l=nn(this,n),u=l.on;u!==s&&(t=(s=u).copy(),t._.cancel.push(a),t._.interrupt.push(a),t._.end.push(c)),l.on=t}),i===0&&r()})}var bM=0;function wn(s,t,e,n){this._groups=s,this._parents=t,this._name=e,this._id=n}function eh(){return++bM}var _n=Ts.prototype;wn.prototype={constructor:wn,select:iM,selectAll:sM,selectChild:_n.selectChild,selectChildren:_n.selectChildren,filter:Zw,merge:Kw,selection:oM,transition:wM,call:_n.call,nodes:_n.nodes,node:_n.node,size:_n.size,empty:_n.empty,each:_n.each,on:tM,attr:Nw,attrTween:Uw,style:hM,styleTween:pM,text:_M,textTween:yM,remove:nM,tween:Aw,delay:Vw,duration:qw,ease:jw,easeVarying:$w,end:MM,[Symbol.iterator]:_n[Symbol.iterator]};function SM(s){return((s*=2)<=1?s*s*s:(s-=2)*s*s+2)/2}var EM={time:null,delay:0,duration:250,ease:SM};function TM(s,t){for(var e;!(e=s.__transition)||!(e=e[t]);)if(!(s=s.parentNode))throw new Error(`transition ${t} not found`);return e}function AM(s){var t,e;s instanceof wn?(t=s._id,s=s._name):(t=eh(),(e=EM).time=ga(),s=s==null?null:s+"");for(var n=this._groups,i=n.length,r=0;r<i;++r)for(var o=n[r],a=o.length,c,l=0;l<a;++l)(c=o[l])&&Nr(c,s,t,l,o,e||TM(c,t));return new wn(n,this._parents,s,t)}Ts.prototype.interrupt=Sw;Ts.prototype.transition=AM;function CM(s){if(!s.ok)throw new Error(s.status+" "+s.statusText);if(!(s.status===204||s.status===205))return s.json()}function LM(s,t){return fetch(s,t).then(CM)}function PM(s){return Math.abs(s=Math.round(s))>=1e21?s.toLocaleString("en").replace(/,/g,""):s.toString(10)}function yr(s,t){if((e=(s=t?s.toExponential(t-1):s.toExponential()).indexOf("e"))<0)return null;var e,n=s.slice(0,e);return[n.length>1?n[0]+n.slice(2):n,+s.slice(e+1)]}function ki(s){return s=yr(Math.abs(s)),s?s[1]:NaN}function RM(s,t){return function(e,n){for(var i=e.length,r=[],o=0,a=s[0],c=0;i>0&&a>0&&(c+a+1>n&&(a=Math.max(1,n-c)),r.push(e.substring(i-=a,i+a)),!((c+=a+1)>n));)a=s[o=(o+1)%s.length];return r.reverse().join(t)}}function DM(s){return function(t){return t.replace(/[0-9]/g,function(e){return s[+e]})}}var IM=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function wr(s){if(!(t=IM.exec(s)))throw new Error("invalid format: "+s);var t;return new va({fill:t[1],align:t[2],sign:t[3],symbol:t[4],zero:t[5],width:t[6],comma:t[7],precision:t[8]&&t[8].slice(1),trim:t[9],type:t[10]})}wr.prototype=va.prototype;function va(s){this.fill=s.fill===void 0?" ":s.fill+"",this.align=s.align===void 0?">":s.align+"",this.sign=s.sign===void 0?"-":s.sign+"",this.symbol=s.symbol===void 0?"":s.symbol+"",this.zero=!!s.zero,this.width=s.width===void 0?void 0:+s.width,this.comma=!!s.comma,this.precision=s.precision===void 0?void 0:+s.precision,this.trim=!!s.trim,this.type=s.type===void 0?"":s.type+""}va.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(this.width===void 0?"":Math.max(1,this.width|0))+(this.comma?",":"")+(this.precision===void 0?"":"."+Math.max(0,this.precision|0))+(this.trim?"~":"")+this.type};function NM(s){t:for(var t=s.length,e=1,n=-1,i;e<t;++e)switch(s[e]){case".":n=i=e;break;case"0":n===0&&(n=e),i=e;break;default:if(!+s[e])break t;n>0&&(n=0);break}return n>0?s.slice(0,n)+s.slice(i+1):s}var nh;function FM(s,t){var e=yr(s,t);if(!e)return s+"";var n=e[0],i=e[1],r=i-(nh=Math.max(-8,Math.min(8,Math.floor(i/3)))*3)+1,o=n.length;return r===o?n:r>o?n+new Array(r-o+1).join("0"):r>0?n.slice(0,r)+"."+n.slice(r):"0."+new Array(1-r).join("0")+yr(s,Math.max(0,t+r-1))[0]}function Ic(s,t){var e=yr(s,t);if(!e)return s+"";var n=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+n:n.length>i+1?n.slice(0,i+1)+"."+n.slice(i+1):n+new Array(i-n.length+2).join("0")}const Nc={"%":(s,t)=>(s*100).toFixed(t),b:s=>Math.round(s).toString(2),c:s=>s+"",d:PM,e:(s,t)=>s.toExponential(t),f:(s,t)=>s.toFixed(t),g:(s,t)=>s.toPrecision(t),o:s=>Math.round(s).toString(8),p:(s,t)=>Ic(s*100,t),r:Ic,s:FM,X:s=>Math.round(s).toString(16).toUpperCase(),x:s=>Math.round(s).toString(16)};function Fc(s){return s}var zc=Array.prototype.map,Oc=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function zM(s){var t=s.grouping===void 0||s.thousands===void 0?Fc:RM(zc.call(s.grouping,Number),s.thousands+""),e=s.currency===void 0?"":s.currency[0]+"",n=s.currency===void 0?"":s.currency[1]+"",i=s.decimal===void 0?".":s.decimal+"",r=s.numerals===void 0?Fc:DM(zc.call(s.numerals,String)),o=s.percent===void 0?"%":s.percent+"",a=s.minus===void 0?"−":s.minus+"",c=s.nan===void 0?"NaN":s.nan+"";function l(f){f=wr(f);var h=f.fill,d=f.align,g=f.sign,m=f.symbol,p=f.zero,x=f.width,_=f.comma,w=f.precision,M=f.trim,y=f.type;y==="n"?(_=!0,y="g"):Nc[y]||(w===void 0&&(w=12),M=!0,y="g"),(p||h==="0"&&d==="=")&&(p=!0,h="0",d="=");var A=m==="$"?e:m==="#"&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",R=m==="$"?n:/[%p]/.test(y)?o:"",v=Nc[y],S=/[defgprs%]/.test(y);w=w===void 0?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,w)):Math.max(0,Math.min(20,w));function C(z){var O=A,E=R,P,I,F;if(y==="c")E=v(z)+E,z="";else{z=+z;var B=z<0||1/z<0;if(z=isNaN(z)?c:v(Math.abs(z),w),M&&(z=NM(z)),B&&+z==0&&g!=="+"&&(B=!1),O=(B?g==="("?g:a:g==="-"||g==="("?"":g)+O,E=(y==="s"?Oc[8+nh/3]:"")+E+(B&&g==="("?")":""),S){for(P=-1,I=z.length;++P<I;)if(F=z.charCodeAt(P),48>F||F>57){E=(F===46?i+z.slice(P+1):z.slice(P))+E,z=z.slice(0,P);break}}}_&&!p&&(z=t(z,1/0));var G=O.length+z.length+E.length,Y=G<x?new Array(x-G+1).join(h):"";switch(_&&p&&(z=t(Y+z,Y.length?x-E.length:1/0),Y=""),d){case"<":z=O+z+E+Y;break;case"=":z=O+Y+z+E;break;case"^":z=Y.slice(0,G=Y.length>>1)+O+z+E+Y.slice(G);break;default:z=Y+O+z+E;break}return r(z)}return C.toString=function(){return f+""},C}function u(f,h){var d=l((f=wr(f),f.type="f",f)),g=Math.max(-8,Math.min(8,Math.floor(ki(h)/3)))*3,m=Math.pow(10,-g),p=Oc[8+g/3];return function(x){return d(m*x)+p}}return{format:l,formatPrefix:u}}var ir,ya,ih;OM({thousands:",",grouping:[3],currency:["$",""]});function OM(s){return ir=zM(s),ya=ir.format,ih=ir.formatPrefix,ir}function BM(s){return Math.max(0,-ki(Math.abs(s)))}function UM(s,t){return Math.max(0,Math.max(-8,Math.min(8,Math.floor(ki(t)/3)))*3-ki(Math.abs(s)))}function kM(s,t){return s=Math.abs(s),t=Math.abs(t)-s,Math.max(0,ki(t)-ki(s))+1}function GM(s){var t=0,e=s.children,n=e&&e.length;if(!n)t=1;else for(;--n>=0;)t+=e[n].value;s.value=t}function VM(){return this.eachAfter(GM)}function HM(s,t){let e=-1;for(const n of this)s.call(t,n,++e,this);return this}function WM(s,t){for(var e=this,n=[e],i,r,o=-1;e=n.pop();)if(s.call(t,e,++o,this),i=e.children)for(r=i.length-1;r>=0;--r)n.push(i[r]);return this}function qM(s,t){for(var e=this,n=[e],i=[],r,o,a,c=-1;e=n.pop();)if(i.push(e),r=e.children)for(o=0,a=r.length;o<a;++o)n.push(r[o]);for(;e=i.pop();)s.call(t,e,++c,this);return this}function XM(s,t){let e=-1;for(const n of this)if(s.call(t,n,++e,this))return n}function jM(s){return this.eachAfter(function(t){for(var e=+s(t.data)||0,n=t.children,i=n&&n.length;--i>=0;)e+=n[i].value;t.value=e})}function YM(s){return this.eachBefore(function(t){t.children&&t.children.sort(s)})}function $M(s){for(var t=this,e=ZM(t,s),n=[t];t!==e;)t=t.parent,n.push(t);for(var i=n.length;s!==e;)n.splice(i,0,s),s=s.parent;return n}function ZM(s,t){if(s===t)return s;var e=s.ancestors(),n=t.ancestors(),i=null;for(s=e.pop(),t=n.pop();s===t;)i=s,s=e.pop(),t=n.pop();return i}function KM(){for(var s=this,t=[s];s=s.parent;)t.push(s);return t}function JM(){return Array.from(this)}function QM(){var s=[];return this.eachBefore(function(t){t.children||s.push(t)}),s}function tb(){var s=this,t=[];return s.each(function(e){e!==s&&t.push({source:e.parent,target:e})}),t}function*eb(){var s=this,t,e=[s],n,i,r;do for(t=e.reverse(),e=[];s=t.pop();)if(yield s,n=s.children)for(i=0,r=n.length;i<r;++i)e.push(n[i]);while(e.length)}function wa(s,t){s instanceof Map?(s=[void 0,s],t===void 0&&(t=sb)):t===void 0&&(t=ib);for(var e=new Mr(s),n,i=[e],r,o,a,c;n=i.pop();)if((o=t(n.data))&&(c=(o=Array.from(o)).length))for(n.children=o,a=c-1;a>=0;--a)i.push(r=o[a]=new Mr(o[a])),r.parent=n,r.depth=n.depth+1;return e.eachBefore(ob)}function nb(){return wa(this).eachBefore(rb)}function ib(s){return s.children}function sb(s){return Array.isArray(s)?s[1]:null}function rb(s){s.data.value!==void 0&&(s.value=s.data.value),s.data=s.data.data}function ob(s){var t=0;do s.height=t;while((s=s.parent)&&s.height<++t)}function Mr(s){this.data=s,this.depth=this.height=0,this.parent=null}Mr.prototype=wa.prototype={constructor:Mr,count:VM,each:HM,eachAfter:qM,eachBefore:WM,find:XM,sum:jM,sort:YM,path:$M,ancestors:KM,descendants:JM,leaves:QM,links:tb,copy:nb,[Symbol.iterator]:eb};function ab(s){s.x0=Math.round(s.x0),s.y0=Math.round(s.y0),s.x1=Math.round(s.x1),s.y1=Math.round(s.y1)}function lb(s,t,e,n,i){for(var r=s.children,o,a=-1,c=r.length,l=s.value&&(n-t)/s.value;++a<c;)o=r[a],o.y0=e,o.y1=i,o.x0=t,o.x1=t+=o.value*l}function cb(){var s=1,t=1,e=0,n=!1;function i(o){var a=o.height+1;return o.x0=o.y0=e,o.x1=s,o.y1=t/a,o.eachBefore(r(t,a)),n&&o.eachBefore(ab),o}function r(o,a){return function(c){c.children&&lb(c,c.x0,o*(c.depth+1)/a,c.x1,o*(c.depth+2)/a);var l=c.x0,u=c.y0,f=c.x1-e,h=c.y1-e;f<l&&(l=f=(l+f)/2),h<u&&(u=h=(u+h)/2),c.x0=l,c.y0=u,c.x1=f,c.y1=h}}return i.round=function(o){return arguments.length?(n=!!o,i):n},i.size=function(o){return arguments.length?(s=+o[0],t=+o[1],i):[s,t]},i.padding=function(o){return arguments.length?(e=+o,i):e},i}function ub(s,t){switch(arguments.length){case 0:break;case 1:{typeof s=="function"?this.interpolator(s):this.range(s);break}default:{this.domain(s),typeof t=="function"?this.interpolator(t):this.range(t);break}}return this}function sh(s){return s}function hb(s,t,e,n){var i=iv(s,t,e),r;switch(n=wr(n??",f"),n.type){case"s":{var o=Math.max(Math.abs(s),Math.abs(t));return n.precision==null&&!isNaN(r=UM(i,o))&&(n.precision=r),ih(n,o)}case"":case"e":case"g":case"p":case"r":{n.precision==null&&!isNaN(r=kM(i,Math.max(Math.abs(s),Math.abs(t))))&&(n.precision=r-(n.type==="e"));break}case"f":case"%":{n.precision==null&&!isNaN(r=BM(i))&&(n.precision=r-(n.type==="%")*2);break}}return ya(n)}function fb(s){var t=s.domain;return s.ticks=function(e){var n=t();return nv(n[0],n[n.length-1],e??10)},s.tickFormat=function(e,n){var i=t();return hb(i[0],i[i.length-1],e??10,n)},s.nice=function(e){e==null&&(e=10);var n=t(),i=0,r=n.length-1,o=n[i],a=n[r],c,l,u=10;for(a<o&&(l=o,o=a,a=l,l=i,i=r,r=l);u-- >0;){if(l=Wo(o,a,e),l===c)return n[i]=o,n[r]=a,t(n);if(l>0)o=Math.floor(o/l)*l,a=Math.ceil(a/l)*l;else if(l<0)o=Math.ceil(o*l)/l,a=Math.floor(a*l)/l;else break;c=l}return s},s}function db(){var s=0,t=1,e,n,i,r,o=sh,a=!1,c;function l(f){return f==null||isNaN(f=+f)?c:o(i===0?.5:(f=(r(f)-e)*i,a?Math.max(0,Math.min(1,f)):f))}l.domain=function(f){return arguments.length?([s,t]=f,e=r(s=+s),n=r(t=+t),i=e===n?0:1/(n-e),l):[s,t]},l.clamp=function(f){return arguments.length?(a=!!f,l):a},l.interpolator=function(f){return arguments.length?(o=f,l):o};function u(f){return function(h){var d,g;return arguments.length?([d,g]=h,o=f(d,g),l):[o(0),o(1)]}}return l.range=u(ma),l.rangeRound=u(hw),l.unknown=function(f){return arguments.length?(c=f,l):c},function(f){return r=f,e=f(s),n=f(t),i=e===n?0:1/(n-e),l}}function pb(s,t){return t.domain(s.domain()).interpolator(s.interpolator()).clamp(s.clamp()).unknown(s.unknown())}function rh(){var s=fb(db()(sh));return s.copy=function(){return pb(s,rh())},ub.apply(s,arguments)}Yu(Dn(-100,.75,.35),Dn(80,1.5,.8));Yu(Dn(260,.75,.35),Dn(80,1.5,.8));var sr=Dn();function mb(s){(s<0||s>1)&&(s-=Math.floor(s));var t=Math.abs(s-.5);return sr.h=360*s-100,sr.s=1.5-1.5*t,sr.l=.8-.9*t,sr+""}function cs(s,t,e){this.k=s,this.x=t,this.y=e}cs.prototype={constructor:cs,scale:function(s){return s===1?this:new cs(this.k*s,this.x,this.y)},translate:function(s,t){return s===0&t===0?this:new cs(this.k,this.x+this.k*s,this.y+this.k*t)},apply:function(s){return[s[0]*this.k+this.x,s[1]*this.k+this.y]},applyX:function(s){return s*this.k+this.x},applyY:function(s){return s*this.k+this.y},invert:function(s){return[(s[0]-this.x)/this.k,(s[1]-this.y)/this.k]},invertX:function(s){return(s-this.x)/this.k},invertY:function(s){return(s-this.y)/this.k},rescaleX:function(s){return s.copy().domain(s.range().map(this.invertX,this).map(s.invert,s))},rescaleY:function(s){return s.copy().domain(s.range().map(this.invertY,this).map(s.invert,s))},toString:function(){return"translate("+this.x+","+this.y+") scale("+this.k+")"}};cs.prototype;function gb(s,{path:t,id:e=Array.isArray(s)?v=>v.id:null,parentId:n=Array.isArray(s)?v=>v.parentId:null,children:i,format:r=",",value:o,sort:a=(v,S)=>Jx(v.value,S.value),label:c,title:l,link:u,linkTarget:f="_blank",width:h=640,height:d=400,margin:g=0,marginTop:m=g,marginRight:p=g,marginBottom:x=g,marginLeft:_=g,padding:w=0,round:M=!1,color:y=mb,fill:A="#ccc",fillOpacity:R=.6}={}){const v=wa(s,i);o==null?v.count():v.sum(B=>Math.max(0,o(B))),typeof r!="function"&&(r=ya(r)),a!=null&&v.sort(a),h<=500?d=h*(8/7):h<=800&&(d=h*(7/8)),cb().size([d-m-x,(v.height+1)*h/3]).round(M)(v),y!=null&&(y=rh([0,v.children.length-1],y).unknown(A),v.children.forEach((B,G)=>B.index=G));const S=ky("svg").classed("svg-content-responsive",!0).attr("viewBox",[-_,-m,h,d]).attr("width",h).attr("height",d).attr("style","max-width: 100%; height: auto;").attr("font-family","sans-serif").attr("font-size",16),C=S.selectAll("g").data(v.descendants()).join("g").attr("transform",B=>`translate(${B.y0},${B.x0})`),z=C.append("rect").attr("width",B=>B.y1-B.y0-1).attr("height",B=>I(B)).attr("fill",y?B=>{var G;return y((G=B.ancestors().reverse()[1])==null?void 0:G.index)}:A).attr("fill-opacity",R).style("cursor","pointer").on("click",P),O=C.append("text").style("user-select","none").attr("pointer-events","none").attr("x",4).attr("y",B=>Math.min(10,(B.x1-B.x0)/2)).attr("dy","0.52em").attr("fill-opacity",B=>+F(B));c!=null&&O.append("tspan").text(B=>c(B.data,B));const E=O.append("tspan").attr("fill-opacity",B=>+F(B)).attr("dx",c==null?null:3).text(B=>r(B.value));l!=null&&C.append("title").text(B=>l(B.data,B));function P(B,G){focus=focus===G?G=G.parent:G,v.each(J=>J.target={x0:(J.x0-G.x0)/(G.x1-G.x0)*d,x1:(J.x1-G.x0)/(G.x1-G.x0)*d,y0:J.y0-G.y0,y1:J.y1-G.y0});const Y=C.transition().duration(750).attr("transform",J=>`translate(${J.target.y0},${J.target.x0})`);z.transition(Y).attr("height",J=>I(J.target)),O.transition(Y).attr("fill-opacity",J=>+F(J.target)),E.transition(Y).attr("fill-opacity",J=>F(J.target)*.7)}function I(B){return B.x1-B.x0-Math.min(1,(B.x1-B.x0)/2)}function F(B){return B.y1<=h&&B.y0>=0&&B.x1-B.x0>16}return S.node()}async function _b(s){let t=await LM("knowledge.json");var e=gb(t,{value:n=>n.value,label:n=>n.name,title:(n,i)=>`${i.ancestors().reverse().map(r=>r.data.name).join(".")}
${n.title}`,parentId:"knowledge",children:n=>n.children,width:s.clientWidth});s.appendChild(e)}const xb=document.querySelector("#knowledge-graph");_b(xb);const Ro={type:"change"},Do={type:"start"},Io={type:"end"};class vb extends In{constructor(t,e){super();const n=this,i={NONE:-1,ROTATE:0,ZOOM:1,PAN:2,TOUCH_ROTATE:3,TOUCH_ZOOM_PAN:4};this.object=t,this.domElement=e,this.domElement.style.touchAction="none",this.enabled=!0,this.screen={left:0,top:0,width:0,height:0},this.rotateSpeed=1,this.zoomSpeed=1.2,this.panSpeed=.3,this.noRotate=!1,this.noZoom=!1,this.noPan=!1,this.staticMoving=!1,this.dynamicDampingFactor=.2,this.minDistance=0,this.maxDistance=1/0,this.keys=["KeyA","KeyS","KeyD"],this.mouseButtons={LEFT:xn.ROTATE,MIDDLE:xn.DOLLY,RIGHT:xn.PAN},this.target=new V;const r=1e-6,o=new V;let a=1,c=i.NONE,l=i.NONE,u=0,f=0,h=0;const d=new V,g=new Mt,m=new Mt,p=new V,x=new Mt,_=new Mt,w=new Mt,M=new Mt,y=[],A={};this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.up0=this.object.up.clone(),this.zoom0=this.object.zoom,this.handleResize=function(){const q=n.domElement.getBoundingClientRect(),et=n.domElement.ownerDocument.documentElement;n.screen.left=q.left+window.pageXOffset-et.clientLeft,n.screen.top=q.top+window.pageYOffset-et.clientTop,n.screen.width=q.width,n.screen.height=q.height};const R=function(){const q=new Mt;return function(ct,ot){return q.set((ct-n.screen.left)/n.screen.width,(ot-n.screen.top)/n.screen.height),q}}(),v=function(){const q=new Mt;return function(ct,ot){return q.set((ct-n.screen.width*.5-n.screen.left)/(n.screen.width*.5),(n.screen.height+2*(n.screen.top-ot))/n.screen.width),q}}();this.rotateCamera=function(){const q=new V,et=new Rn,ct=new V,ot=new V,At=new V,bt=new V;return function(){bt.set(m.x-g.x,m.y-g.y,0);let Xt=bt.length();Xt?(d.copy(n.object.position).sub(n.target),ct.copy(d).normalize(),ot.copy(n.object.up).normalize(),At.crossVectors(ot,ct).normalize(),ot.setLength(m.y-g.y),At.setLength(m.x-g.x),bt.copy(ot.add(At)),q.crossVectors(bt,d).normalize(),Xt*=n.rotateSpeed,et.setFromAxisAngle(q,Xt),d.applyQuaternion(et),n.object.up.applyQuaternion(et),p.copy(q),h=Xt):!n.staticMoving&&h&&(h*=Math.sqrt(1-n.dynamicDampingFactor),d.copy(n.object.position).sub(n.target),et.setFromAxisAngle(p,h),d.applyQuaternion(et),n.object.up.applyQuaternion(et)),g.copy(m)}}(),this.zoomCamera=function(){let q;c===i.TOUCH_ZOOM_PAN?(q=u/f,u=f,n.object.isPerspectiveCamera?d.multiplyScalar(q):n.object.isOrthographicCamera?(n.object.zoom/=q,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")):(q=1+(_.y-x.y)*n.zoomSpeed,q!==1&&q>0&&(n.object.isPerspectiveCamera?d.multiplyScalar(q):n.object.isOrthographicCamera?(n.object.zoom/=q,n.object.updateProjectionMatrix()):console.warn("THREE.TrackballControls: Unsupported camera type")),n.staticMoving?x.copy(_):x.y+=(_.y-x.y)*this.dynamicDampingFactor)},this.panCamera=function(){const q=new Mt,et=new V,ct=new V;return function(){if(q.copy(M).sub(w),q.lengthSq()){if(n.object.isOrthographicCamera){const At=(n.object.right-n.object.left)/n.object.zoom/n.domElement.clientWidth,bt=(n.object.top-n.object.bottom)/n.object.zoom/n.domElement.clientWidth;q.x*=At,q.y*=bt}q.multiplyScalar(d.length()*n.panSpeed),ct.copy(d).cross(n.object.up).setLength(q.x),ct.add(et.copy(n.object.up).setLength(q.y)),n.object.position.add(ct),n.target.add(ct),n.staticMoving?w.copy(M):w.add(q.subVectors(M,w).multiplyScalar(n.dynamicDampingFactor))}}}(),this.checkDistances=function(){(!n.noZoom||!n.noPan)&&(d.lengthSq()>n.maxDistance*n.maxDistance&&(n.object.position.addVectors(n.target,d.setLength(n.maxDistance)),x.copy(_)),d.lengthSq()<n.minDistance*n.minDistance&&(n.object.position.addVectors(n.target,d.setLength(n.minDistance)),x.copy(_)))},this.update=function(){d.subVectors(n.object.position,n.target),n.noRotate||n.rotateCamera(),n.noZoom||n.zoomCamera(),n.noPan||n.panCamera(),n.object.position.addVectors(n.target,d),n.object.isPerspectiveCamera?(n.checkDistances(),n.object.lookAt(n.target),o.distanceToSquared(n.object.position)>r&&(n.dispatchEvent(Ro),o.copy(n.object.position))):n.object.isOrthographicCamera?(n.object.lookAt(n.target),(o.distanceToSquared(n.object.position)>r||a!==n.object.zoom)&&(n.dispatchEvent(Ro),o.copy(n.object.position),a=n.object.zoom)):console.warn("THREE.TrackballControls: Unsupported camera type")},this.reset=function(){c=i.NONE,l=i.NONE,n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.up.copy(n.up0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),d.subVectors(n.object.position,n.target),n.object.lookAt(n.target),n.dispatchEvent(Ro),o.copy(n.object.position),a=n.object.zoom};function S(q){n.enabled!==!1&&(y.length===0&&(n.domElement.setPointerCapture(q.pointerId),n.domElement.addEventListener("pointermove",C),n.domElement.addEventListener("pointerup",z)),Q(q),q.pointerType==="touch"?Y(q):I(q))}function C(q){n.enabled!==!1&&(q.pointerType==="touch"?J(q):F(q))}function z(q){n.enabled!==!1&&(q.pointerType==="touch"?lt(q):B(),st(q),y.length===0&&(n.domElement.releasePointerCapture(q.pointerId),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",z)))}function O(q){st(q)}function E(q){n.enabled!==!1&&(window.removeEventListener("keydown",E),l===i.NONE&&(q.code===n.keys[i.ROTATE]&&!n.noRotate?l=i.ROTATE:q.code===n.keys[i.ZOOM]&&!n.noZoom?l=i.ZOOM:q.code===n.keys[i.PAN]&&!n.noPan&&(l=i.PAN)))}function P(){n.enabled!==!1&&(l=i.NONE,window.addEventListener("keydown",E))}function I(q){if(c===i.NONE)switch(q.button){case n.mouseButtons.LEFT:c=i.ROTATE;break;case n.mouseButtons.MIDDLE:c=i.ZOOM;break;case n.mouseButtons.RIGHT:c=i.PAN;break}const et=l!==i.NONE?l:c;et===i.ROTATE&&!n.noRotate?(m.copy(v(q.pageX,q.pageY)),g.copy(m)):et===i.ZOOM&&!n.noZoom?(x.copy(R(q.pageX,q.pageY)),_.copy(x)):et===i.PAN&&!n.noPan&&(w.copy(R(q.pageX,q.pageY)),M.copy(w)),n.dispatchEvent(Do)}function F(q){const et=l!==i.NONE?l:c;et===i.ROTATE&&!n.noRotate?(g.copy(m),m.copy(v(q.pageX,q.pageY))):et===i.ZOOM&&!n.noZoom?_.copy(R(q.pageX,q.pageY)):et===i.PAN&&!n.noPan&&M.copy(R(q.pageX,q.pageY))}function B(){c=i.NONE,n.dispatchEvent(Io)}function G(q){if(n.enabled!==!1&&n.noZoom!==!0){switch(q.preventDefault(),q.deltaMode){case 2:x.y-=q.deltaY*.025;break;case 1:x.y-=q.deltaY*.01;break;default:x.y-=q.deltaY*25e-5;break}n.dispatchEvent(Do),n.dispatchEvent(Io)}}function Y(q){switch(rt(q),y.length){case 1:c=i.TOUCH_ROTATE,m.copy(v(y[0].pageX,y[0].pageY)),g.copy(m);break;default:c=i.TOUCH_ZOOM_PAN;const et=y[0].pageX-y[1].pageX,ct=y[0].pageY-y[1].pageY;f=u=Math.sqrt(et*et+ct*ct);const ot=(y[0].pageX+y[1].pageX)/2,At=(y[0].pageY+y[1].pageY)/2;w.copy(R(ot,At)),M.copy(w);break}n.dispatchEvent(Do)}function J(q){switch(rt(q),y.length){case 1:g.copy(m),m.copy(v(q.pageX,q.pageY));break;default:const et=j(q),ct=q.pageX-et.x,ot=q.pageY-et.y;f=Math.sqrt(ct*ct+ot*ot);const At=(q.pageX+et.x)/2,bt=(q.pageY+et.y)/2;M.copy(R(At,bt));break}}function lt(q){switch(y.length){case 0:c=i.NONE;break;case 1:c=i.TOUCH_ROTATE,m.copy(v(q.pageX,q.pageY)),g.copy(m);break;case 2:c=i.TOUCH_ZOOM_PAN;for(let et=0;et<y.length;et++)if(y[et].pointerId!==q.pointerId){const ct=A[y[et].pointerId];m.copy(v(ct.x,ct.y)),g.copy(m);break}break}n.dispatchEvent(Io)}function U(q){n.enabled!==!1&&q.preventDefault()}function Q(q){y.push(q)}function st(q){delete A[q.pointerId];for(let et=0;et<y.length;et++)if(y[et].pointerId==q.pointerId){y.splice(et,1);return}}function rt(q){let et=A[q.pointerId];et===void 0&&(et=new Mt,A[q.pointerId]=et),et.set(q.pageX,q.pageY)}function j(q){const et=q.pointerId===y[0].pointerId?y[1]:y[0];return A[et.pointerId]}this.dispose=function(){n.domElement.removeEventListener("contextmenu",U),n.domElement.removeEventListener("pointerdown",S),n.domElement.removeEventListener("pointercancel",O),n.domElement.removeEventListener("wheel",G),n.domElement.removeEventListener("pointermove",C),n.domElement.removeEventListener("pointerup",z),window.removeEventListener("keydown",E),window.removeEventListener("keyup",P)},this.domElement.addEventListener("contextmenu",U),this.domElement.addEventListener("pointerdown",S),this.domElement.addEventListener("pointercancel",O),this.domElement.addEventListener("wheel",G,{passive:!1}),window.addEventListener("keydown",E),window.addEventListener("keyup",P),this.handleResize(),this.update()}}function yb(){const s=new wu;document.body.appendChild(s.dom);const t=new yu,e=document.createElement("canvas"),n=new ia({antialias:!0,canvas:e,alpha:!0});n.setScissorTest(!0),new g0(4);const i=[];function r(l,u){const f=document.createElement("canvas").getContext("2d");l.appendChild(f.canvas),i.push({elem:l,ctx:f,fn:u})}function o(l){const u=new au,f=45,h=2,d=.1,g=5,m=new Le(f,h,d,g);m.position.set(0,1,2),m.lookAt(0,0,0),u.add(m);const p=new vb(m,l);p.noZoom=!1,p.noPan=!1;{const w=new hu(16777215,1);w.position.set(-1,2,4),m.add(w)}return{scene:u,camera:m,controls:p}}const a={duck:l=>{const u=.01818181818181818,{scene:f,camera:h,controls:d}=o(l);return t.load("STL/DuckGear.stl",function(g){const m=new kt().makeRotationY(Math.PI/4).makeRotationZ(Math.PI/4).makeRotationX(Math.PI/4).multiply(new kt().makeScale(u,u,u)).setPosition(-.9,.5,-.75);g.applyMatrix4(m);const p=g,x=new l0({color:"red"}),_=new ee(p,x);f.add(_)}),(g,m)=>{h.aspect=m.width/m.height,h.updateProjectionMatrix(),d.handleResize(),d.update(),n.render(f,h)}},EEG:l=>{const u=.01818181818181818,{scene:f,camera:h,controls:d}=o(l);return t.load("STL/EEGboard_housing_v3.STL",function(g){const m=new kt().makeRotationY(Math.PI/4).makeRotationZ(Math.PI/4).makeRotationX(Math.PI/4).multiply(new kt().makeScale(u,u,u)).setPosition(-.3,.4,-.3);g.applyMatrix4(m);const p=g,x=new Vo({color:"grey"}),_=new ee(p,x);f.add(_)}),(g,m)=>{h.aspect=m.width/m.height,h.updateProjectionMatrix(),d.handleResize(),d.update(),n.render(f,h)}},leaf:l=>{const u=.01818181818181818,{scene:f,camera:h,controls:d}=o(l);return t.load("STL/SampleLeafEmboss.STL",function(g){const m=new kt().makeRotationY(Math.PI/4).makeRotationZ(Math.PI/4).makeRotationX(Math.PI/4).multiply(new kt().makeScale(u,u,u)).setPosition(-1.9,1.2,-1.3);g.applyMatrix4(m);const p=g,x=new Vo({color:"grey"}),_=new ee(p,x);f.add(_)}),(g,m)=>{h.aspect=m.width/m.height,h.updateProjectionMatrix(),d.handleResize(),d.update(),n.render(f,h)}}};document.querySelectorAll("[data-diagram]").forEach(l=>{const u=l.dataset.diagram,f=a[u],h=f(l);r(l,h)});function c(l){s.update(),l*=.001;for(const{elem:u,fn:f,ctx:h}of i){const d=u.getBoundingClientRect(),{left:g,right:m,top:p,bottom:x,width:_,height:w}=d,M=n.domElement;x<0||p>window.innerHeight||m<0||g>window.innerWidth||((M.width<_||M.height<w)&&n.setSize(_,w,!1),(h.canvas.width!==_||h.canvas.height!==w)&&(h.canvas.width=_,h.canvas.height=w),n.setScissor(0,0,_,w),n.setViewport(0,0,_,w),f(l,d),h.globalCompositeOperation="copy",h.drawImage(M,0,M.height-w,_,w,0,0,_,w))}requestAnimationFrame(c)}requestAnimationFrame(c)}yb();
