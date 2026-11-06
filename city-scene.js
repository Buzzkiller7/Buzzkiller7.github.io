(()=>{var Yc=0,gl=1,Zc=2;var Hi=1,Jc=2,bs=3,Ei=0,ln=1,un=2,Gi=0,Es=1,_l=2,xl=3,yl=4,$c=5;var Vi=100,Kc=101,jc=102,Qc=103,eh=104,th=200,nh=201,ih=202,sh=203,vl=204,Ml=205,rh=206,oh=207,ah=208,lh=209,ch=210,hh=211,uh=212,dh=213,fh=214,to=0,no=1,io=2,ls=3,so=4,ro=5,oo=6,ao=7,Sl=0,ph=1,mh=2,Vn=0,bl=1,El=2,wl=3,mr=4,Tl=5,Al=6,Rl=7;var Cl=300,Wi=301,ws=302,Bo=303,zo=304,lo=1e3,Bn=1001,co=1002,Yt=1003,gh=1004;var gr=1005;var on=1006,ko=1007;var ri=1008;var dn=1009,Il=1010,Pl=1011,Ts=1012,Ho=1013,Dn=1014,Nn=1015,Un=1016,Go=1017,Vo=1018,Xi=1020,Ll=35902,Dl=35899,Nl=1021,Ul=1022,Fn=1023,ei=1026,oi=1027,Fl=1028,Wo=1029,wi=1030,Xo=1031;var qo=1033,_r=33776,xr=33777,yr=33778,vr=33779,Yo=35840,Zo=35841,Jo=35842,$o=35843,Ko=36196,jo=37492,Qo=37496,ea=37488,ta=37489,Mr=37490,na=37491,ia=37808,sa=37809,ra=37810,oa=37811,aa=37812,la=37813,ca=37814,ha=37815,ua=37816,da=37817,fa=37818,pa=37819,ma=37820,ga=37821,_a=36492,xa=36494,ya=36495,va=36283,Ma=36284,Sr=36285,Sa=36286;var ks=2300,ho=2301,Qr=2302,il=2303,sl=2400,rl=2401,ol=2402;var _h=3200;var ba=0,xh=1,ai="",en="srgb",Hs="srgb-linear",Gs="linear",Et="srgb";var eo=7680;var yh=519,vh=512,Mh=513,Sh=514,Ol=515,bh=516,Eh=517,Bl=518,zl=519,wh=35044;var kl="300 es",yn=2e3,cs=2001;function Au(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Ru(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Vs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Th(){let i=Vs("canvas");return i.style.display="block",i}var fc={},hs=null;function Hl(...i){let e="THREE."+i.shift();hs?hs("log",e,...i):console.log(e,...i)}function Ah(i){let e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function et(...i){i=Ah(i);let e="THREE."+i.shift();if(hs)hs("warn",e,...i);else{let t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function nt(...i){i=Ah(i);let e="THREE."+i.shift();if(hs)hs("error",e,...i);else{let t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Us(...i){let e=i.join(" ");e in fc||(fc[e]=!0,et(...i))}function Rh(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}var Ch={[to]:to,[io]:oo,[so]:so,[ls]:ro,[no]:no,[oo]:io,[ao]:ao,[ro]:ls},zn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let s=n[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}},jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],pc=1234567,Fs=Math.PI/180,us=180/Math.PI;function qi(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(jt[i&255]+jt[i>>8&255]+jt[i>>16&255]+jt[i>>24&255]+"-"+jt[e&255]+jt[e>>8&255]+"-"+jt[e>>16&15|64]+jt[e>>24&255]+"-"+jt[t&63|128]+jt[t>>8&255]+"-"+jt[t>>16&255]+jt[t>>24&255]+jt[n&255]+jt[n>>8&255]+jt[n>>16&255]+jt[n>>24&255]).toLowerCase()}function ft(i,e,t){return Math.max(e,Math.min(t,i))}function Gl(i,e){return(i%e+e)%e}function Cu(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Iu(i,e,t){return i!==e?(t-i)/(e-i):0}function Os(i,e,t){return(1-t)*i+t*e}function Pu(i,e,t,n){return Os(i,e,1-Math.exp(-t*n))}function Lu(i,e=1){return e-Math.abs(Gl(i,e*2)-e)}function Du(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Nu(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function Uu(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Fu(i,e){return i+Math.random()*(e-i)}function Ou(i){return i*(.5-Math.random())}function Bu(i){i!==void 0&&(pc=i);let e=pc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zu(i){return i*Fs}function ku(i){return i*us}function Hu(i){return i>0&&Number.isInteger(i)&&2**Math.round(Math.log2(i))===i}function Gu(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function Vl(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Vu(i,e,t,n,s){let r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),h=o((e+n)/2),f=r((e-n)/2),u=o((e-n)/2),d=r((n-e)/2),m=o((n-e)/2);switch(s){case"XYX":i.set(a*h,c*f,c*u,a*l);break;case"YZY":i.set(c*u,a*h,c*f,a*l);break;case"ZXZ":i.set(c*f,c*u,a*h,a*l);break;case"XZX":i.set(a*h,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*h,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*h,a*l);break;default:et("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Wl(i){switch(i.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Ih(i,e){if(e.constructor===Float32Array)return i;let t=Wl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(i/t,-1)}function Ph(i,e){if(e.constructor===Float32Array)return i;let t=Wl(e);if(t===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(i*t)}var Ut={DEG2RAD:Fs,RAD2DEG:us,generateUUID:qi,clamp:ft,euclideanModulo:Gl,mapLinear:Cu,inverseLerp:Iu,lerp:Os,damp:Pu,pingpong:Lu,smoothstep:Du,smootherstep:Nu,randInt:Uu,randFloat:Fu,randFloatSpread:Ou,seededRandom:Bu,degToRad:zu,radToDeg:ku,isPowerOfTwo:Hu,ceilPowerOfTwo:Gu,floorPowerOfTwo:Vl,setQuaternionFromProperEuler:Vu,normalize:Ph,denormalize:Ih},$l=class $l{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};$l.prototype.isVector2=!0;var Le=$l,kn=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let c=n[s+0],l=n[s+1],h=n[s+2],f=n[s+3],u=r[o+0],d=r[o+1],m=r[o+2],M=r[o+3];if(f!==M||c!==u||l!==d||h!==m){let p=c*u+l*d+h*m+f*M;p<0&&(u=-u,d=-d,m=-m,M=-M,p=-p);let g=1-a;if(p<.9995){let y=Math.acos(p),E=Math.sin(y);g=Math.sin(g*y)/E,a=Math.sin(a*y)/E,c=c*g+u*a,l=l*g+d*a,h=h*g+m*a,f=f*g+M*a}else{c=c*g+u*a,l=l*g+d*a,h=h*g+m*a,f=f*g+M*a;let y=1/Math.sqrt(c*c+l*l+h*h+f*f);c*=y,l*=y,h*=y,f*=y}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,s,r,o){let a=n[s],c=n[s+1],l=n[s+2],h=n[s+3],f=r[o],u=r[o+1],d=r[o+2],m=r[o+3];return e[t]=a*m+h*f+c*d-l*u,e[t+1]=c*m+h*u+l*f-a*d,e[t+2]=l*m+h*d+a*u-c*f,e[t+3]=h*m-a*f-c*u-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),h=a(s/2),f=a(r/2),u=c(n/2),d=c(s/2),m=c(r/2);switch(o){case"XYZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"YXZ":this._x=u*h*f+l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"ZXY":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f-u*d*m;break;case"ZYX":this._x=u*h*f-l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f+u*d*m;break;case"YZX":this._x=u*h*f+l*d*m,this._y=l*d*f+u*h*m,this._z=l*h*m-u*d*f,this._w=l*h*f-u*d*m;break;case"XZY":this._x=u*h*f-l*d*m,this._y=l*d*f-u*h*m,this._z=l*h*m+u*d*f,this._w=l*h*f+u*d*m;break;default:et("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],h=t[6],f=t[10],u=n+a+f;if(u>0){let d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(h-c)*d,this._y=(r-l)*d,this._z=(o-s)*d}else if(n>a&&n>f){let d=2*Math.sqrt(1+n-a-f);this._w=(h-c)/d,this._x=.25*d,this._y=(s+o)/d,this._z=(r+l)/d}else if(a>f){let d=2*Math.sqrt(1+a-n-f);this._w=(r-l)/d,this._x=(s+o)/d,this._y=.25*d,this._z=(c+h)/d}else{let d=2*Math.sqrt(1+f-n-a);this._w=(o-s)/d,this._x=(r+l)/d,this._y=(c+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ft(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,h=t._w;return this._x=n*h+o*a+s*l-r*c,this._y=s*h+o*c+r*a-n*l,this._z=r*h+o*l+n*c-s*a,this._w=o*h-n*a-s*c-r*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,s=-s,r=-r,o=-o,a=-a);let c=1-t;if(a<.9995){let l=Math.acos(a),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+s*t,this._z=this._z*c+r*t,this._w=this._w*c+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Kl=class Kl{constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(mc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(mc.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*s-a*n),h=2*(a*t-r*s),f=2*(r*n-o*t);return this.x=t+c*l+o*f-a*h,this.y=n+c*h+a*l-r*f,this.z=s+c*f+r*h-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=s*c-r*a,this.y=r*o-n*c,this.z=n*a-s*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Na.copy(this).projectOnVector(e),this.sub(Na)}reflect(e){return this.sub(Na.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ft(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Kl.prototype.isVector3=!0;var F=Kl,Na=new F,mc=new kn,jl=class jl{constructor(e,t,n,s,r,o,a,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l)}set(e,t,n,s,r,o,a,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=c,h[6]=n,h[7]=o,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],h=n[4],f=n[7],u=n[2],d=n[5],m=n[8],M=s[0],p=s[3],g=s[6],y=s[1],E=s[4],x=s[7],T=s[2],w=s[5],_=s[8];return r[0]=o*M+a*y+c*T,r[3]=o*p+a*E+c*w,r[6]=o*g+a*x+c*_,r[1]=l*M+h*y+f*T,r[4]=l*p+h*E+f*w,r[7]=l*g+h*x+f*_,r[2]=u*M+d*y+m*T,r[5]=u*p+d*E+m*w,r[8]=u*g+d*x+m*_,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8];return t*o*h-t*a*l-n*r*h+n*a*c+s*r*l-s*o*c}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=h*o-a*l,u=a*c-h*r,d=l*r-o*c,m=t*f+n*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let M=1/m;return e[0]=f*M,e[1]=(s*l-h*n)*M,e[2]=(a*n-s*o)*M,e[3]=u*M,e[4]=(h*t-s*c)*M,e[5]=(s*r-a*t)*M,e[6]=d*M,e[7]=(n*c-l*t)*M,e[8]=(o*t-n*r)*M,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){let c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-s*l,s*c,-s*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return Us("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Ua.makeScale(e,t)),this}rotate(e){return Us("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Ua.makeRotation(-e)),this}translate(e,t){return Us("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Ua.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}};jl.prototype.isMatrix3=!0;var st=jl,Ua=new st,gc=new st().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_c=new st().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Wu(){let i={enabled:!0,workingColorSpace:Hs,spaces:{},convert:function(s,r,o){return this.enabled===!1||r===o||!r||!o||(this.spaces[r].transfer===Et&&(s.r=Qn(s.r),s.g=Qn(s.g),s.b=Qn(s.b)),this.spaces[r].primaries!==this.spaces[o].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Et&&(s.r=as(s.r),s.g=as(s.g),s.b=as(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ai?Gs:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,o){return s.copy(this.spaces[o].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Hs]:{primaries:e,whitePoint:n,transfer:Gs,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:en},outputColorSpaceConfig:{drawingBufferColorSpace:en}},[en]:{primaries:e,whitePoint:n,transfer:Et,toXYZ:gc,fromXYZ:_c,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:en}}}),i}var _t=Wu();function Qn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function as(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Zi,uo=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{Zi===void 0&&(Zi=Vs("canvas")),Zi.width=e.width,Zi.height=e.height;let s=Zi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=Zi}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Vs("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Qn(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Qn(t[n]/255)*255):t[n]=Qn(t[n]);return{data:t,width:e.width,height:e.height}}else return et("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Xu=0,ds=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Xu++}),this.uuid=qi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width||0,t.height||0,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Fa(s[o].image)):r.push(Fa(s[o]))}else r=Fa(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function Fa(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?uo.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(et("Texture: Unable to serialize Texture."),{})}var qu=0,Oa=new F,an=class i extends zn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Bn,s=Bn,r=on,o=ri,a=Fn,c=dn,l=i.DEFAULT_ANISOTROPY,h=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:qu++}),this.uuid=qi(),this.name="",this.source=new ds(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Le(0,0),this.repeat=new Le(1,1),this.center=new Le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new st,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Oa).x}get height(){return this.source.getSize(Oa).y}get depth(){return this.source.getSize(Oa).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){et(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Cl)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case lo:e.x=e.x-Math.floor(e.x);break;case Bn:e.x=e.x<0?0:1;break;case co:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case lo:e.y=e.y-Math.floor(e.y);break;case Bn:e.y=e.y<0?0:1;break;case co:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Cl;an.DEFAULT_ANISOTROPY=1;var Ql=class Ql{constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,c=e.elements,l=c[0],h=c[4],f=c[8],u=c[1],d=c[5],m=c[9],M=c[2],p=c[6],g=c[10];if(Math.abs(h-u)<.01&&Math.abs(f-M)<.01&&Math.abs(m-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(f+M)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(l+1)/2,x=(d+1)/2,T=(g+1)/2,w=(h+u)/4,_=(f+M)/4,S=(m+p)/4;return E>x&&E>T?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=w/n,r=_/n):x>T?x<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(x),n=w/s,r=S/s):T<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(T),n=_/r,s=S/r),this.set(n,s,r,t),this}let y=Math.sqrt((p-m)*(p-m)+(f-M)*(f-M)+(u-h)*(u-h));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(f-M)/y,this.z=(u-h)/y,this.w=Math.acos((l+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ft(this.x,e.x,t.x),this.y=ft(this.y,e.y,t.y),this.z=ft(this.z,e.z,t.z),this.w=ft(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ft(this.x,e,t),this.y=ft(this.y,e,t),this.z=ft(this.z,e,t),this.w=ft(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ft(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ql.prototype.isVector4=!0;var Dt=Ql,fo=class extends zn{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:on,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t),this.textures=[];let s=n.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:e,height:t,depth:n.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:on,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(t.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let s=Object.assign({},e.textures[t].image);this.textures[t].source=new ds(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},mn=class extends fo{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ws=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var po=class extends an{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Yt,this.minFilter=Yt,this.wrapR=Bn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Oo=class Oo{constructor(e,t,n,s,r,o,a,c,l,h,f,u,d,m,M,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,c,l,h,f,u,d,m,M,p)}set(e,t,n,s,r,o,a,c,l,h,f,u,d,m,M,p){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=s,g[1]=r,g[5]=o,g[9]=a,g[13]=c,g[2]=l,g[6]=h,g[10]=f,g[14]=u,g[3]=d,g[7]=m,g[11]=M,g[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oo().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,n=e.elements,s=1/Ji.setFromMatrixColumn(e,0).length(),r=1/Ji.setFromMatrixColumn(e,1).length(),o=1/Ji.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),f=Math.sin(r);if(e.order==="XYZ"){let u=o*h,d=o*f,m=a*h,M=a*f;t[0]=c*h,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=u-M*l,t[9]=-a*c,t[2]=M-u*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){let u=c*h,d=c*f,m=l*h,M=l*f;t[0]=u+M*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=M+u*a,t[10]=o*c}else if(e.order==="ZXY"){let u=c*h,d=c*f,m=l*h,M=l*f;t[0]=u-M*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=M-u*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){let u=o*h,d=o*f,m=a*h,M=a*f;t[0]=c*h,t[4]=m*l-d,t[8]=u*l+M,t[1]=c*f,t[5]=M*l+u,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){let u=o*c,d=o*l,m=a*c,M=a*l;t[0]=c*h,t[4]=M-u*f,t[8]=m*f+d,t[1]=f,t[5]=o*h,t[9]=-a*h,t[2]=-l*h,t[6]=d*f+m,t[10]=u-M*f}else if(e.order==="XZY"){let u=o*c,d=o*l,m=a*c,M=a*l;t[0]=c*h,t[4]=-f,t[8]=l*h,t[1]=u*f+M,t[5]=o*h,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*h,t[10]=M*f+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Yu,e,Zu)}lookAt(e,t,n){let s=this.elements;return fn.subVectors(e,t),fn.lengthSq()===0&&(fn.z=1),fn.normalize(),ui.crossVectors(n,fn),ui.lengthSq()===0&&(Math.abs(n.z)===1?fn.x+=1e-4:fn.z+=1e-4,fn.normalize(),ui.crossVectors(n,fn)),ui.normalize(),Cr.crossVectors(fn,ui),s[0]=ui.x,s[4]=Cr.x,s[8]=fn.x,s[1]=ui.y,s[5]=Cr.y,s[9]=fn.y,s[2]=ui.z,s[6]=Cr.z,s[10]=fn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],h=n[1],f=n[5],u=n[9],d=n[13],m=n[2],M=n[6],p=n[10],g=n[14],y=n[3],E=n[7],x=n[11],T=n[15],w=s[0],_=s[4],S=s[8],I=s[12],C=s[1],O=s[5],U=s[9],q=s[13],B=s[2],J=s[6],H=s[10],z=s[14],he=s[3],Y=s[7],Q=s[11],ce=s[15];return r[0]=o*w+a*C+c*B+l*he,r[4]=o*_+a*O+c*J+l*Y,r[8]=o*S+a*U+c*H+l*Q,r[12]=o*I+a*q+c*z+l*ce,r[1]=h*w+f*C+u*B+d*he,r[5]=h*_+f*O+u*J+d*Y,r[9]=h*S+f*U+u*H+d*Q,r[13]=h*I+f*q+u*z+d*ce,r[2]=m*w+M*C+p*B+g*he,r[6]=m*_+M*O+p*J+g*Y,r[10]=m*S+M*U+p*H+g*Q,r[14]=m*I+M*q+p*z+g*ce,r[3]=y*w+E*C+x*B+T*he,r[7]=y*_+E*O+x*J+T*Y,r[11]=y*S+E*U+x*H+T*Q,r[15]=y*I+E*q+x*z+T*ce,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],h=e[2],f=e[6],u=e[10],d=e[14],m=e[3],M=e[7],p=e[11],g=e[15],y=c*d-l*u,E=a*d-l*f,x=a*u-c*f,T=o*d-l*h,w=o*u-c*h,_=o*f-a*h;return t*(M*y-p*E+g*x)-n*(m*y-p*T+g*w)+s*(m*E-M*T+g*_)-r*(m*x-M*w+p*_)}determinantAffine(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],o=e[5],a=e[9],c=e[2],l=e[6],h=e[10];return t*(o*h-a*l)-n*(r*h-a*c)+s*(r*l-o*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],h=e[8],f=e[9],u=e[10],d=e[11],m=e[12],M=e[13],p=e[14],g=e[15],y=t*a-n*o,E=t*c-s*o,x=t*l-r*o,T=n*c-s*a,w=n*l-r*a,_=s*l-r*c,S=h*M-f*m,I=h*p-u*m,C=h*g-d*m,O=f*p-u*M,U=f*g-d*M,q=u*g-d*p,B=y*q-E*U+x*O+T*C-w*I+_*S;if(B===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let J=1/B;return e[0]=(a*q-c*U+l*O)*J,e[1]=(s*U-n*q-r*O)*J,e[2]=(M*_-p*w+g*T)*J,e[3]=(u*w-f*_-d*T)*J,e[4]=(c*C-o*q-l*I)*J,e[5]=(t*q-s*C+r*I)*J,e[6]=(p*x-m*_-g*E)*J,e[7]=(h*_-u*x+d*E)*J,e[8]=(o*U-a*C+l*S)*J,e[9]=(n*C-t*U-r*S)*J,e[10]=(m*w-M*x+g*y)*J,e[11]=(f*x-h*w-d*y)*J,e[12]=(a*I-o*O-c*S)*J,e[13]=(t*O-n*I+s*S)*J,e[14]=(M*E-m*T-p*y)*J,e[15]=(h*T-f*E+u*y)*J,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,h=r*a;return this.set(l*o+n,l*a-s*c,l*c+s*a,0,l*a+s*c,h*a+n,h*c-s*o,0,l*c-s*a,h*c+s*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,h=o+o,f=a+a,u=r*l,d=r*h,m=r*f,M=o*h,p=o*f,g=a*f,y=c*l,E=c*h,x=c*f,T=n.x,w=n.y,_=n.z;return s[0]=(1-(M+g))*T,s[1]=(d+x)*T,s[2]=(m-E)*T,s[3]=0,s[4]=(d-x)*w,s[5]=(1-(u+g))*w,s[6]=(p+y)*w,s[7]=0,s[8]=(m+E)*_,s[9]=(p-y)*_,s[10]=(1-(u+M))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let o=Ji.set(s[0],s[1],s[2]).length(),a=Ji.set(s[4],s[5],s[6]).length(),c=Ji.set(s[8],s[9],s[10]).length();r<0&&(o=-o),wn.copy(this);let l=1/o,h=1/a,f=1/c;return wn.elements[0]*=l,wn.elements[1]*=l,wn.elements[2]*=l,wn.elements[4]*=h,wn.elements[5]*=h,wn.elements[6]*=h,wn.elements[8]*=f,wn.elements[9]*=f,wn.elements[10]*=f,t.setFromRotationMatrix(wn),n.x=o,n.y=a,n.z=c,this}makePerspective(e,t,n,s,r,o,a=yn,c=!1){let l=this.elements,h=2*r/(t-e),f=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s),m,M;if(c)m=r/(o-r),M=o*r/(o-r);else if(a===yn)m=-(o+r)/(o-r),M=-2*o*r/(o-r);else if(a===cs)m=-o/(o-r),M=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=f,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=yn,c=!1){let l=this.elements,h=2/(t-e),f=2/(n-s),u=-(t+e)/(t-e),d=-(n+s)/(n-s),m,M;if(c)m=1/(o-r),M=o/(o-r);else if(a===yn)m=-2/(o-r),M=-(o+r)/(o-r);else if(a===cs)m=-1/(o-r),M=-r/(o-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=f,l[9]=0,l[13]=d,l[2]=0,l[6]=0,l[10]=m,l[14]=M,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}};Oo.prototype.isMatrix4=!0;var It=Oo,Ji=new F,wn=new It,Yu=new F(0,0,0),Zu=new F(1,1,1),ui=new F,Cr=new F,fn=new F,xc=new It,yc=new kn,ti=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],o=s[4],a=s[8],c=s[1],l=s[5],h=s[9],f=s[2],u=s[6],d=s[10];switch(t){case"XYZ":this._y=Math.asin(ft(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-ft(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,r),this._z=0);break;case"ZXY":this._x=Math.asin(ft(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-ft(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(ft(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-f,r)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ft(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,d),this._y=0);break;default:et("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return xc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return yc.setFromEuler(this),this.setFromQuaternion(yc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};ti.DEFAULT_ORDER="XYZ";var fs=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Ju=0,vc=new F,$i=new kn,Zn=new It,Ir=new F,Is=new F,$u=new F,Ku=new kn,Mc=new F(1,0,0),Sc=new F(0,1,0),bc=new F(0,0,1),Ec={type:"added"},ju={type:"removed"},Ki={type:"childadded",child:null},Ba={type:"childremoved",child:null},kt=class i extends zn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ju++}),this.uuid=qi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new F,t=new ti,n=new kn,s=new F(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new It},normalMatrix:{value:new st}}),this.matrix=new It,this.matrixWorld=new It,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new fs,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.multiply($i),this}rotateOnWorldAxis(e,t){return $i.setFromAxisAngle(e,t),this.quaternion.premultiply($i),this}rotateX(e){return this.rotateOnAxis(Mc,e)}rotateY(e){return this.rotateOnAxis(Sc,e)}rotateZ(e){return this.rotateOnAxis(bc,e)}translateOnAxis(e,t){return vc.copy(e).applyQuaternion(this.quaternion),this.position.add(vc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mc,e)}translateY(e){return this.translateOnAxis(Sc,e)}translateZ(e){return this.translateOnAxis(bc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ir.copy(e):Ir.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),Is.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Is,Ir,this.up):Zn.lookAt(Ir,Is,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),$i.setFromRotationMatrix(Zn),this.quaternion.premultiply($i.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(nt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ec),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null):nt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(ju),Ba.child=e,this.dispatchEvent(Ba),Ba.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Zn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Zn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ec),Ki.child=e,this.dispatchEvent(Ki),Ki.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,e,$u),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Is,Ku,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){let r=this.children;for(let o=0,a=r.length;o<a;o++)r[o].updateWorldMatrix(!1,!0,n)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(a=>({...a})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let c=a.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let f=c[l];r(e.shapes,f)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){let c=this.animations[a];s.animations.push(r(e.animations,c))}}if(t){let a=o(e.geometries),c=o(e.materials),l=o(e.textures),h=o(e.images),f=o(e.shapes),u=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),h.length>0&&(n.images=h),f.length>0&&(n.shapes=f),u.length>0&&(n.skeletons=u),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=s,n;function o(a){let c=[];for(let l in a){let h=a[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};kt.DEFAULT_UP=new F(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xt=class extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qu={type:"move"},ps=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new xt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new xt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new xt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null,a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(let M of e.hand.values()){let p=t.getJointPose(M,n),g=this._getHandJoint(l,M);p!==null&&(g.matrix.fromArray(p.transform.matrix),g.matrix.decompose(g.position,g.quaternion,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=p.radius),g.visible=p!==null}let h=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],u=h.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&u>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.quaternion,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qu)))}return a!==null&&(a.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new xt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},Lh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},di={h:0,s:0,l:0},Pr={h:0,s:0,l:0};function za(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var ht=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=en){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,_t.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=_t.workingColorSpace){return this.r=e,this.g=t,this.b=n,_t.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=_t.workingColorSpace){if(e=Gl(e,1),t=ft(t,0,1),n=ft(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=za(o,r,e+1/3),this.g=za(o,r,e),this.b=za(o,r,e-1/3)}return _t.colorSpaceToWorking(this,s),this}setStyle(e,t=en){function n(r){r!==void 0&&parseFloat(r)<1&&et("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,t);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:et("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);et("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=en){let n=Lh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):et("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qn(e.r),this.g=Qn(e.g),this.b=Qn(e.b),this}copyLinearToSRGB(e){return this.r=as(e.r),this.g=as(e.g),this.b=as(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=en){return _t.workingToColorSpace(Qt.copy(this),e),Math.round(ft(Qt.r*255,0,255))*65536+Math.round(ft(Qt.g*255,0,255))*256+Math.round(ft(Qt.b*255,0,255))}getHexString(e=en){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=_t.workingColorSpace){_t.workingToColorSpace(Qt.copy(this),t);let n=Qt.r,s=Qt.g,r=Qt.b,o=Math.max(n,s,r),a=Math.min(n,s,r),c,l,h=(a+o)/2;if(a===o)c=0,l=0;else{let f=o-a;switch(l=h<=.5?f/(o+a):f/(2-o-a),o){case n:c=(s-r)/f+(s<r?6:0);break;case s:c=(r-n)/f+2;break;case r:c=(n-s)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=_t.workingColorSpace){return _t.workingToColorSpace(Qt.copy(this),t),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=en){_t.workingToColorSpace(Qt.copy(this),e);let t=Qt.r,n=Qt.g,s=Qt.b;return e!==en?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(di),this.setHSL(di.h+e,di.s+t,di.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(di),e.getHSL(Pr);let n=Os(di.h,Pr.h,t),s=Os(di.s,Pr.s,t),r=Os(di.l,Pr.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Qt=new ht;ht.NAMES=Lh;var Xs=class extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ti,this.environmentIntensity=1,this.environmentRotation=new ti,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Tn=new F,Jn=new F,ka=new F,$n=new F,ji=new F,Qi=new F,wc=new F,Ha=new F,Ga=new F,Va=new F,Wa=new Dt,Xa=new Dt,qa=new Dt,gi=class i{constructor(e=new F,t=new F,n=new F){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),Tn.subVectors(e,t),s.cross(Tn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){Tn.subVectors(s,t),Jn.subVectors(n,t),ka.subVectors(e,t);let o=Tn.dot(Tn),a=Tn.dot(Jn),c=Tn.dot(ka),l=Jn.dot(Jn),h=Jn.dot(ka),f=o*l-a*a;if(f===0)return r.set(0,0,0),null;let u=1/f,d=(l*c-a*h)*u,m=(o*h-a*c)*u;return r.set(1-d-m,m,d)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,$n)===null?!1:$n.x>=0&&$n.y>=0&&$n.x+$n.y<=1}static getInterpolation(e,t,n,s,r,o,a,c){return this.getBarycoord(e,t,n,s,$n)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,$n.x),c.addScaledVector(o,$n.y),c.addScaledVector(a,$n.z),c)}static getInterpolatedAttribute(e,t,n,s,r,o){return Wa.setScalar(0),Xa.setScalar(0),qa.setScalar(0),Wa.fromBufferAttribute(e,t),Xa.fromBufferAttribute(e,n),qa.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Wa,r.x),o.addScaledVector(Xa,r.y),o.addScaledVector(qa,r.z),o}static isFrontFacing(e,t,n,s){return Tn.subVectors(n,t),Jn.subVectors(e,t),Tn.cross(Jn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Tn.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),Tn.cross(Jn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,o,a;ji.subVectors(s,n),Qi.subVectors(r,n),Ha.subVectors(e,n);let c=ji.dot(Ha),l=Qi.dot(Ha);if(c<=0&&l<=0)return t.copy(n);Ga.subVectors(e,s);let h=ji.dot(Ga),f=Qi.dot(Ga);if(h>=0&&f<=h)return t.copy(s);let u=c*f-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return o=c/(c-h),t.copy(n).addScaledVector(ji,o);Va.subVectors(e,r);let d=ji.dot(Va),m=Qi.dot(Va);if(m>=0&&d<=m)return t.copy(r);let M=d*l-c*m;if(M<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(Qi,a);let p=h*m-d*f;if(p<=0&&f-h>=0&&d-m>=0)return wc.subVectors(r,s),a=(f-h)/(f-h+(d-m)),t.copy(s).addScaledVector(wc,a);let g=1/(p+M+u);return o=M*g,a=u*g,t.copy(n).addScaledVector(ji,o).addScaledVector(Qi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Cn=class{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(An.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(An.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=An.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,An):An.fromBufferAttribute(r,o),An.applyMatrix4(e.matrixWorld),this.expandByPoint(An);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Lr.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Lr.copy(n.boundingBox)),Lr.applyMatrix4(e.matrixWorld),this.union(Lr)}let s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,An),An.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ps),Dr.subVectors(this.max,Ps),es.subVectors(e.a,Ps),ts.subVectors(e.b,Ps),ns.subVectors(e.c,Ps),fi.subVectors(ts,es),pi.subVectors(ns,ts),Ii.subVectors(es,ns);let t=[0,-fi.z,fi.y,0,-pi.z,pi.y,0,-Ii.z,Ii.y,fi.z,0,-fi.x,pi.z,0,-pi.x,Ii.z,0,-Ii.x,-fi.y,fi.x,0,-pi.y,pi.x,0,-Ii.y,Ii.x,0];return!Ya(t,es,ts,ns,Dr)||(t=[1,0,0,0,1,0,0,0,1],!Ya(t,es,ts,ns,Dr))?!1:(Nr.crossVectors(fi,pi),t=[Nr.x,Nr.y,Nr.z],Ya(t,es,ts,ns,Dr))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,An).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(An).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Kn=[new F,new F,new F,new F,new F,new F,new F,new F],An=new F,Lr=new Cn,es=new F,ts=new F,ns=new F,fi=new F,pi=new F,Ii=new F,Ps=new F,Dr=new F,Nr=new F,Pi=new F;function Ya(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Pi.fromArray(i,r);let a=s.x*Math.abs(Pi.x)+s.y*Math.abs(Pi.y)+s.z*Math.abs(Pi.z),c=e.dot(Pi),l=t.dot(Pi),h=n.dot(Pi);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>a)return!1}return!0}var Gt=new F,Ur=new Le,ed=0,vn=class extends zn{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ed++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=wh,this.updateRanges=[],this.gpuType=Nn,this.version=0,this._normalizationScale=e!==void 0?Wl(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ur.fromBufferAttribute(this,t),Ur.applyMatrix3(e),this.setXY(t,Ur.x,Ur.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=this._denormalize(n)),n}setComponent(e,t,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=this._denormalize(t)),t}setX(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=this._denormalize(t)),t}setY(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=this._denormalize(t)),t}setZ(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=this._denormalize(t)),t}setW(e,t){return this.normalized&&(t=this._normalize(t)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=this._normalize(t),n=this._normalize(n),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let t=this._normalizationScale;return t!==void 0?Math.max(e/t,-1):Ih(e,this.array)}_normalize(e){let t=this._normalizationScale;return t!==void 0?Math.round(e*t):Ph(e,this.array)}};var qs=class extends vn{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Ys=class extends vn{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends vn{constructor(e,t,n){super(new Float32Array(e),t,n)}},td=new Cn,Ls=new F,Za=new F,Ui=class{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):td.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ls.subVectors(e,this.center);let t=Ls.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Ls,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Za.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ls.copy(e.center).add(Za)),this.expandByPoint(Ls.copy(e.center).sub(Za))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},nd=0,xn=new It,Ja=new kt,is=new F,pn=new Cn,Ds=new Cn,qt=new F,Bt=class i extends zn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:nd++}),this.uuid=qi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Au(e)?Ys:qs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new st().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xn.makeRotationFromQuaternion(e),this.applyMatrix4(xn),this}rotateX(e){return xn.makeRotationX(e),this.applyMatrix4(xn),this}rotateY(e){return xn.makeRotationY(e),this.applyMatrix4(xn),this}rotateZ(e){return xn.makeRotationZ(e),this.applyMatrix4(xn),this}translate(e,t,n){return xn.makeTranslation(e,t,n),this.applyMatrix4(xn),this}scale(e,t,n){return xn.makeScale(e,t,n),this.applyMatrix4(xn),this}lookAt(e){return Ja.lookAt(e),Ja.updateMatrix(),this.applyMatrix4(Ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(is).negate(),this.translate(is.x,is.y,is.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let s=0,r=e.length;s<r;s++){let o=e[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let s=0;s<n;s++){let r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&et("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Cn);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];pn.setFromBufferAttribute(r),this.morphTargetsRelative?(qt.addVectors(this.boundingBox.min,pn.min),this.boundingBox.expandByPoint(qt),qt.addVectors(this.boundingBox.max,pn.max),this.boundingBox.expandByPoint(qt)):(this.boundingBox.expandByPoint(pn.min),this.boundingBox.expandByPoint(pn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&nt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ui);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){nt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let n=this.boundingSphere.center;if(pn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){let a=t[r];Ds.setFromBufferAttribute(a),this.morphTargetsRelative?(qt.addVectors(pn.min,Ds.min),pn.expandByPoint(qt),qt.addVectors(pn.max,Ds.max),pn.expandByPoint(qt)):(pn.expandByPoint(Ds.min),pn.expandByPoint(Ds.max))}pn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)qt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(qt));if(t)for(let r=0,o=t.length;r<o;r++){let a=t[r],c=this.morphTargetsRelative;for(let l=0,h=a.count;l<h;l++)qt.fromBufferAttribute(a,l),c&&(is.fromBufferAttribute(e,l),qt.add(is)),s=Math.max(s,n.distanceToSquared(qt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&nt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){nt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv,o=this.getAttribute("tangent");(o===void 0||o.count!==n.count)&&(o=new vn(new Float32Array(4*n.count),4),this.setAttribute("tangent",o));let a=[],c=[],l=new Uint8Array(n.count);for(let I=0;I<n.count;I++)a[I]=new F,c[I]=new F;let h=new F,f=new F,u=new F,d=new Le,m=new Le,M=new Le,p=new F,g=new F;function y(I,C,O){l[I]=l[C]=l[O]=1,h.fromBufferAttribute(n,I),f.fromBufferAttribute(n,C),u.fromBufferAttribute(n,O),d.fromBufferAttribute(r,I),m.fromBufferAttribute(r,C),M.fromBufferAttribute(r,O),f.sub(h),u.sub(h),m.sub(d),M.sub(d);let U=1/(m.x*M.y-M.x*m.y);isFinite(U)&&(p.copy(f).multiplyScalar(M.y).addScaledVector(u,-m.y).multiplyScalar(U),g.copy(u).multiplyScalar(m.x).addScaledVector(f,-M.x).multiplyScalar(U),a[I].add(p),a[C].add(p),a[O].add(p),c[I].add(g),c[C].add(g),c[O].add(g))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let I=0,C=E.length;I<C;++I){let O=E[I],U=O.start,q=O.count;for(let B=U,J=U+q;B<J;B+=3)y(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let x=new F,T=new F,w=new F,_=new F;function S(I){w.fromBufferAttribute(s,I),_.copy(w);let C=a[I];x.copy(C),x.sub(w.multiplyScalar(w.dot(C))).normalize(),T.crossVectors(_,C);let U=T.dot(c[I])<0?-1:1;o.setXYZW(I,x.x,x.y,x.z,U)}for(let I=0,C=n.count;I<C;++I)l[I]&&S(I);this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new vn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let u=0,d=n.count;u<d;u++)n.setXYZ(u,0,0,0);let s=new F,r=new F,o=new F,a=new F,c=new F,l=new F,h=new F,f=new F;if(e)for(let u=0,d=e.count;u<d;u+=3){let m=e.getX(u+0),M=e.getX(u+1),p=e.getX(u+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,M),o.fromBufferAttribute(t,p),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,M),l.fromBufferAttribute(n,p),a.add(h),c.add(h),l.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(M,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let u=0,d=t.count;u<d;u+=3)s.fromBufferAttribute(t,u+0),r.fromBufferAttribute(t,u+1),o.fromBufferAttribute(t,u+2),h.subVectors(o,r),f.subVectors(s,r),h.cross(f),n.setXYZ(u+0,h.x,h.y,h.z),n.setXYZ(u+1,h.x,h.y,h.z),n.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)qt.fromBufferAttribute(e,t),qt.normalize(),e.setXYZ(t,qt.x,qt.y,qt.z)}toNonIndexed(){function e(a,c){let l=a.array,h=a.itemSize,f=a.normalized,u=new l.constructor(c.length*h),d=0,m=0;for(let M=0,p=c.length;M<p;M++){a.isInterleavedBufferAttribute?d=c[M]*a.data.stride+a.offset:d=c[M]*h;for(let g=0;g<h;g++)u[m++]=l[d++]}return new vn(u,h,f)}if(this.index===null)return et("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let a in s){let c=s[a],l=e(c,n);t.setAttribute(a,l)}let r=this.morphAttributes;for(let a in r){let c=[],l=r[a];for(let h=0,f=l.length;h<f;h++){let u=l[h],d=e(u,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,c=o.length;a<c;a++){let l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let c in n){let l=n[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let f=0,u=l.length;f<u;f++){let d=l[f];h.push(d.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],f=r[l];for(let u=0,d=f.length;u<d;u++)h.push(f[u].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let l=0,h=o.length;l<h;l++){let f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var $a=new F,id=new F,sd=new st,Rn=class{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=$a.subVectors(n,t).cross(id.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){let s=e.delta($a),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let o=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(o<0||o>1)?null:t.copy(e.start).addScaledVector(s,o)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||sd.getNormalMatrix(e),s=this.coplanarPoint($a).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},rd=0,ni=class extends zn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:rd++}),this.uuid=qi(),this.name="",this.type="Material",this.blending=Es,this.side=Ei,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vl,this.blendDst=Ml,this.blendEquation=Vi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ht(0,0,0),this.blendAlpha=0,this.depthFunc=ls,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=eo,this.stencilZFail=eo,this.stencilZPass=eo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){et(`Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){et(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(n.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(n.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let o=[];for(let a in r){let c=r[a];delete c.metadata,o.push(c)}return o}if(t){let r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ht().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new Rn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Le().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Le().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=t[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var jn=new F,Ka=new F,Fr=new F,Or=new F,ms=class{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,jn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=jn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(jn.copy(this.origin).addScaledVector(this.direction,t),jn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Ka.copy(e).add(t).multiplyScalar(.5),Fr.copy(t).sub(e).normalize(),Or.copy(this.origin).sub(Ka);let r=e.distanceTo(t)*.5,o=-this.direction.dot(Fr),a=Or.dot(this.direction),c=-Or.dot(Fr),l=Or.lengthSq(),h=Math.abs(1-o*o),f,u,d,m;if(h>0)if(f=o*c-a,u=o*a-c,m=r*h,f>=0)if(u>=-m)if(u<=m){let M=1/h;f*=M,u*=M,d=f*(f+o*u+2*a)+u*(o*f+u+2*c)+l}else u=r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u=-r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;else u<=-m?(f=Math.max(0,-(-o*r+a)),u=f>0?-r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l):u<=m?(f=0,u=Math.min(Math.max(-r,-c),r),d=u*(u+2*c)+l):(f=Math.max(0,-(o*r+a)),u=f>0?r:Math.min(Math.max(-r,-c),r),d=-f*f+u*(u+2*c)+l);else u=o>0?-r:r,f=Math.max(0,-(o*u+a)),d=-f*f+u*(u+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,f),s&&s.copy(Ka).addScaledVector(Fr,u),d}intersectSphere(e,t){if(e.radius<0)return null;jn.subVectors(e.center,this.origin);let n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=e.radius*e.radius;if(s>r)return null;let o=Math.sqrt(r-s),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,c,l=1/this.direction.x,h=1/this.direction.y,f=1/this.direction.z,u=this.origin;return l>=0?(n=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(n=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,o=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,o=(e.min.y-u.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),f>=0?(a=(e.min.z-u.z)*f,c=(e.max.z-u.z)*f):(a=(e.max.z-u.z)*f,c=(e.min.z-u.z)*f),n>c||a>s)||((a>n||n!==n)&&(n=a),(c<s||s!==s)&&(s=c),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,jn)!==null}intersectTriangle(e,t,n,s,r){let o=this.origin,a=this.direction,c=a.x,l=a.y,h=a.z,f=e.x-o.x,u=e.y-o.y,d=e.z-o.z,m=t.x-o.x,M=t.y-o.y,p=t.z-o.z,g=n.x-o.x,y=n.y-o.y,E=n.z-o.z,x=Math.abs(c),T=Math.abs(l),w=Math.abs(h),_,S,I,C,O,U,q,B,J,H,z,he;if(x>=T&&x>=w?(I=c,U=f,J=m,he=g,c>=0?(_=l,S=h,C=u,O=d,q=M,B=p,H=y,z=E):(_=h,S=l,C=d,O=u,q=p,B=M,H=E,z=y)):T>=w?(I=l,U=u,J=M,he=y,l>=0?(_=h,S=c,C=d,O=f,q=p,B=m,H=E,z=g):(_=c,S=h,C=f,O=d,q=m,B=p,H=g,z=E)):(I=h,U=d,J=p,he=E,h>=0?(_=c,S=l,C=f,O=u,q=m,B=M,H=g,z=y):(_=l,S=c,C=u,O=f,q=M,B=m,H=y,z=g)),I===0)return null;let Y=_/I,Q=S/I,ce=1/I,Ae=C-Y*U,ke=O-Q*U,P=q-Y*J,D=B-Q*J,X=H-Y*he,ue=z-Q*he,ie=X*D-ue*P,_e=Ae*ue-ke*X,Be=P*ke-D*Ae;if(s){if(ie<0||_e<0||Be<0)return null}else if((ie<0||_e<0||Be<0)&&(ie>0||_e>0||Be>0))return null;let pe=ie+_e+Be;if(pe===0)return null;let ye=ce*(ie*U+_e*J+Be*he);return(pe>0?ye<0:ye>0)?null:this.at(ye/pe,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ht(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.combine=Sl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Tc=new It,Li=new ms,Br=new Ui,Ac=new F,zr=new F,kr=new F,Hr=new F,ja=new F,Gr=new F,Rc=new F,Vr=new F,Xe=class extends kt{constructor(e=new Bt,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let a=this.morphTargetInfluences;if(r&&a){Gr.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=a[c],f=r[c];h!==0&&(ja.fromBufferAttribute(f,e),o?Gr.addScaledVector(ja,h):Gr.addScaledVector(ja.sub(t),h))}t.add(Gr)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(r),Li.copy(e.ray).recast(e.near),!(Br.containsPoint(Li.origin)===!1&&(Li.intersectSphere(Br,Ac)===null||Li.origin.distanceToSquared(Ac)>(e.far-e.near)**2))&&(Tc.copy(r).invert(),Li.copy(e.ray).applyMatrix4(Tc),!(n.boundingBox!==null&&Li.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Li)))}_computeIntersections(e,t,n){let s,r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,f=r.attributes.normal,u=r.groups,d=r.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),E=Math.min(a.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,T=E;x<T;x+=3){let w=a.getX(x),_=a.getX(x+1),S=a.getX(x+2);s=Wr(this,g,e,n,l,h,f,w,_,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),M=Math.min(a.count,d.start+d.count);for(let p=m,g=M;p<g;p+=3){let y=a.getX(p),E=a.getX(p+1),x=a.getX(p+2);s=Wr(this,o,e,n,l,h,f,y,E,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}else if(c!==void 0)if(Array.isArray(o))for(let m=0,M=u.length;m<M;m++){let p=u[m],g=o[p.materialIndex],y=Math.max(p.start,d.start),E=Math.min(c.count,Math.min(p.start+p.count,d.start+d.count));for(let x=y,T=E;x<T;x+=3){let w=x,_=x+1,S=x+2;s=Wr(this,g,e,n,l,h,f,w,_,S),s&&(s.faceIndex=Math.floor(x/3),s.face.materialIndex=p.materialIndex,t.push(s))}}else{let m=Math.max(0,d.start),M=Math.min(c.count,d.start+d.count);for(let p=m,g=M;p<g;p+=3){let y=p,E=p+1,x=p+2;s=Wr(this,o,e,n,l,h,f,y,E,x),s&&(s.faceIndex=Math.floor(p/3),t.push(s))}}}};function od(i,e,t,n,s,r,o,a){let c;if(e.side===ln?c=n.intersectTriangle(o,r,s,!0,a):c=n.intersectTriangle(s,r,o,e.side===Ei,a),c===null)return null;Vr.copy(a),Vr.applyMatrix4(i.matrixWorld);let l=t.ray.origin.distanceTo(Vr);return l<t.near||l>t.far?null:{distance:l,point:Vr.clone(),object:i}}function Wr(i,e,t,n,s,r,o,a,c,l){i.getVertexPosition(a,zr),i.getVertexPosition(c,kr),i.getVertexPosition(l,Hr);let h=od(i,e,t,n,zr,kr,Hr,Rc);if(h){let f=new F;gi.getBarycoord(Rc,zr,kr,Hr,f),s&&(h.uv=gi.getInterpolatedAttribute(s,a,c,l,f,new Le)),r&&(h.uv1=gi.getInterpolatedAttribute(r,a,c,l,f,new Le)),o&&(h.normal=gi.getInterpolatedAttribute(o,a,c,l,f,new F),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let u={a,b:c,c:l,normal:new F,materialIndex:0};gi.getNormal(zr,kr,Hr,u.normal),h.face=u,h.barycoord=f}return h}var mo=class extends an{constructor(e=null,t=1,n=1,s,r,o,a,c,l=Yt,h=Yt,f,u){super(null,o,a,c,l,h,s,r,f,u),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Di=new Ui,ad=new Le(.5,.5),Xr=new F,_i=class{constructor(e=new Rn,t=new Rn,n=new Rn,s=new Rn,r=new Rn,o=new Rn){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yn,n=!1){let s=this.planes,r=e.elements,o=r[0],a=r[1],c=r[2],l=r[3],h=r[4],f=r[5],u=r[6],d=r[7],m=r[8],M=r[9],p=r[10],g=r[11],y=r[12],E=r[13],x=r[14],T=r[15];if(s[0].setComponents(l-o,d-h,g-m,T-y).normalize(),s[1].setComponents(l+o,d+h,g+m,T+y).normalize(),s[2].setComponents(l+a,d+f,g+M,T+E).normalize(),s[3].setComponents(l-a,d-f,g-M,T-E).normalize(),n)s[4].setComponents(c,u,p,x).normalize(),s[5].setComponents(l-c,d-u,g-p,T-x).normalize();else if(s[4].setComponents(l-c,d-u,g-p,T-x).normalize(),t===yn)s[5].setComponents(l+c,d+u,g+p,T+x).normalize();else if(t===cs)s[5].setComponents(c,u,p,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Di.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Di.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Di)}intersectsSprite(e){Di.center.set(0,0,0);let t=ad.distanceTo(e.center);return Di.radius=.7071067811865476+t,Di.applyMatrix4(e.matrixWorld),this.intersectsSphere(Di)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(Xr.x=s.normal.x>0?e.max.x:e.min.x,Xr.y=s.normal.y>0?e.max.y:e.min.y,Xr.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Xr)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Cc=new It,go=class i{constructor(){this.coordinateSystem=yn,this._frustums=[],this._count=0}setFromArrayCamera(e){let t=e.cameras,n=this._frustums;for(let s=0;s<t.length;s++){let r=t[s];Cc.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),n[s]===void 0&&(n[s]=new _i),n[s].setFromProjectionMatrix(Cc,r.coordinateSystem,r.reversedDepth)}return this._count=t.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsObject(e))return!0;return!1}intersectsSprite(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsSphere(e))return!0;return!1}intersectsBox(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].intersectsBox(e))return!0;return!1}containsPoint(e){let t=this._frustums;for(let n=0;n<this._count;n++)if(t[n].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let t=this._frustums,n=e._frustums;for(let s=0;s<e._count;s++)t[s]===void 0&&(t[s]=new _i),t[s].copy(n[s]);return this._count=e._count,this}clone(){return new i().copy(this)}};var gs=class extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ht(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ic=new It,al=new ms,qr=new Ui,Yr=new F,Zs=class extends kt{constructor(e=new Bt,t=new gs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere),qr.applyMatrix4(s),qr.radius+=r,e.ray.intersectsSphere(qr)===!1)return;Ic.copy(s).invert(),al.copy(e.ray).applyMatrix4(Ic);let a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){let u=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=u,M=d;m<M;m++){let p=l.getX(m);Yr.fromBufferAttribute(f,p),Pc(Yr,p,c,s,e,t,this)}}else{let u=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=u,M=d;m<M;m++)Yr.fromBufferAttribute(f,m),Pc(Yr,m,c,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){let a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}};function Pc(i,e,t,n,s,r,o){let a=al.distanceSqToPoint(i);if(a<t){let c=new F;al.closestPointToPoint(i,c),c.applyMatrix4(n);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Js=class extends an{constructor(e=[],t=Wi,n,s,r,o,a,c,l,h){super(e,t,n,s,r,o,a,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},$s=class extends an{constructor(e,t,n,s,r,o,a,c,l){super(e,t,n,s,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var ii=class extends an{constructor(e,t,n=Dn,s,r,o,a=Yt,c=Yt,l,h=ei,f=1){if(h!==ei&&h!==oi)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:f};super(u,s,r,o,a,c,h,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new ds(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Ks=class extends ii{constructor(e,t=Dn,n=Wi,s,r,o=Yt,a=Yt,c,l=ei){let h={width:e,height:e,depth:1},f=[h,h,h,h,h,h];super(e,e,t,n,s,r,o,a,c,l),this.image=f,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},js=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},In=class i extends Bt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};let a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);let c=[],l=[],h=[],f=[],u=0,d=0;m("z","y","x",-1,-1,n,t,e,o,r,0),m("z","y","x",1,-1,n,t,-e,o,r,1),m("x","z","y",1,1,e,n,t,s,o,2),m("x","z","y",1,-1,e,n,-t,s,o,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2));function m(M,p,g,y,E,x,T,w,_,S,I){let C=x/_,O=T/S,U=x/2,q=T/2,B=w/2,J=_+1,H=S+1,z=0,he=0,Y=new F;for(let Q=0;Q<H;Q++){let ce=Q*O-q;for(let Ae=0;Ae<J;Ae++){let ke=Ae*C-U;Y[M]=ke*y,Y[p]=ce*E,Y[g]=B,l.push(Y.x,Y.y,Y.z),Y[M]=0,Y[p]=0,Y[g]=w>0?1:-1,h.push(Y.x,Y.y,Y.z),f.push(Ae/_),f.push(1-Q/S),z+=1}}for(let Q=0;Q<S;Q++)for(let ce=0;ce<_;ce++){let Ae=u+ce+J*Q,ke=u+ce+J*(Q+1),P=u+(ce+1)+J*(Q+1),D=u+(ce+1)+J*Q;c.push(Ae,ke,D),c.push(ke,P,D),he+=6}a.addGroup(d,he,I),d+=he,u+=z}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Fi=class i extends Bt{constructor(e=1,t=1,n=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:s,heightSegments:r},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let o=[],a=[],c=[],l=[],h=t/2,f=Math.PI/2*e,u=t,d=2*f+u,m=n*2+r,M=s+1,p=new F,g=new F;for(let y=0;y<=m;y++){let E=0,x=0,T=0,w=0;if(y<=n){let I=y/n,C=I*Math.PI/2;x=-h-e*Math.cos(C),T=e*Math.sin(C),w=-e*Math.cos(C),E=I*f}else if(y<=n+r){let I=(y-n)/r;x=-h+I*t,T=e,w=0,E=f+I*u}else{let I=(y-n-r)/n,C=I*Math.PI/2;x=h+e*Math.sin(C),T=e*Math.cos(C),w=e*Math.sin(C),E=f+u+I*f}let _=Math.max(0,Math.min(1,E/d)),S=0;y===0?S=.5/s:y===m&&(S=-.5/s);for(let I=0;I<=s;I++){let C=I/s,O=C*Math.PI*2,U=Math.sin(O),q=Math.cos(O);g.x=-T*q,g.y=x,g.z=T*U,a.push(g.x,g.y,g.z),p.set(-T*q,w,T*U),p.normalize(),c.push(p.x,p.y,p.z),l.push(C+S,_)}if(y>0){let I=(y-1)*M;for(let C=0;C<s;C++){let O=I+C,U=I+C+1,q=y*M+C,B=y*M+C+1;o.push(O,U,q),o.push(U,B,q)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},_s=class i extends Bt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],o=[],a=[],c=[],l=new F,h=new Le;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let f=0,u=3;f<=t;f++,u+=3){let d=n+f/t*s;l.x=e*Math.cos(d),l.y=e*Math.sin(d),o.push(l.x,l.y,l.z),a.push(0,0,1),h.x=(o[u]/e+1)/2,h.y=(o[u+1]/e+1)/2,c.push(h.x,h.y)}for(let f=1;f<=t;f++)r.push(f,f+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},xi=class i extends Bt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};let l=this;s=Math.floor(s),r=Math.floor(r);let h=[],f=[],u=[],d=[],m=0,M=[],p=n/2,g=0;y(),o===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(d,2));function y(){let x=new F,T=new F,w=0,_=(t-e)/n;for(let S=0;S<=r;S++){let I=[],C=S/r,O=C*(t-e)+e;for(let U=0;U<=s;U++){let q=U/s,B=q*c+a,J=Math.sin(B),H=Math.cos(B);T.x=O*J,T.y=-C*n+p,T.z=O*H,f.push(T.x,T.y,T.z),x.set(J,_,H).normalize(),u.push(x.x,x.y,x.z),d.push(q,1-C),I.push(m++)}M.push(I)}for(let S=0;S<s;S++)for(let I=0;I<r;I++){let C=M[I][S],O=M[I+1][S],U=M[I+1][S+1],q=M[I][S+1];(e>0||I!==0)&&(h.push(C,O,q),w+=3),(t>0||I!==r-1)&&(h.push(O,U,q),w+=3)}l.addGroup(g,w,0),g+=w}function E(x){let T=m,w=new Le,_=new F,S=0,I=x===!0?e:t,C=x===!0?1:-1;for(let U=1;U<=s;U++)f.push(0,p*C,0),u.push(0,C,0),d.push(.5,.5),m++;let O=m;for(let U=0;U<=s;U++){let B=U/s*c+a,J=Math.cos(B),H=Math.sin(B);_.x=I*H,_.y=p*C,_.z=I*J,f.push(_.x,_.y,_.z),u.push(0,C,0),w.x=J*.5+.5,w.y=H*.5*C+.5,d.push(w.x,w.y),m++}for(let U=0;U<s;U++){let q=T+U,B=O+U;x===!0?h.push(B,B+1,q):h.push(B+1,B,q),S+=3}l.addGroup(g,S,x===!0?1:2),g+=S}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Oi=class i extends xi{constructor(e=1,t=1,n=32,s=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,s,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},_o=class i extends Bt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],o=[];a(s),l(n),h(),this.setAttribute("position",new lt(r,3)),this.setAttribute("normal",new lt(r.slice(),3)),this.setAttribute("uv",new lt(o,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let E=new F,x=new F,T=new F;for(let w=0;w<t.length;w+=3)d(t[w+0],E),d(t[w+1],x),d(t[w+2],T),c(E,x,T,y)}function c(y,E,x,T){let w=T+1,_=[];for(let S=0;S<=w;S++){_[S]=[];let I=y.clone().lerp(x,S/w),C=E.clone().lerp(x,S/w),O=w-S;for(let U=0;U<=O;U++)U===0&&S===w?_[S][U]=I:_[S][U]=I.clone().lerp(C,U/O)}for(let S=0;S<w;S++)for(let I=0;I<2*(w-S)-1;I++){let C=Math.floor(I/2);I%2===0?(u(_[S][C+1]),u(_[S+1][C]),u(_[S][C])):(u(_[S][C+1]),u(_[S+1][C+1]),u(_[S+1][C]))}}function l(y){let E=new F;for(let x=0;x<r.length;x+=3)E.x=r[x+0],E.y=r[x+1],E.z=r[x+2],E.normalize().multiplyScalar(y),r[x+0]=E.x,r[x+1]=E.y,r[x+2]=E.z}function h(){let y=new F;for(let E=0;E<r.length;E+=3){y.x=r[E+0],y.y=r[E+1],y.z=r[E+2];let x=p(y)/2/Math.PI+.5,T=g(y)/Math.PI+.5;o.push(x,1-T)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){let E=o[y+0],x=o[y+2],T=o[y+4],w=Math.max(E,x,T),_=Math.min(E,x,T);w>.9&&_<.1&&(E<.2&&(o[y+0]+=1),x<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function u(y){r.push(y.x,y.y,y.z)}function d(y,E){let x=y*3;E.x=e[x+0],E.y=e[x+1],E.z=e[x+2]}function m(){let y=new F,E=new F,x=new F,T=new F,w=new Le,_=new Le,S=new Le;for(let I=0,C=0;I<r.length;I+=9,C+=6){y.set(r[I+0],r[I+1],r[I+2]),E.set(r[I+3],r[I+4],r[I+5]),x.set(r[I+6],r[I+7],r[I+8]),w.set(o[C+0],o[C+1]),_.set(o[C+2],o[C+3]),S.set(o[C+4],o[C+5]),T.copy(y).add(E).add(x).divideScalar(3);let O=p(T);M(w,C+0,y,O),M(_,C+2,E,O),M(S,C+4,x,O)}}function M(y,E,x,T){T<0&&y.x===1&&(o[E]=y.x-1),x.x===0&&x.z===0&&(o[E]=T/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.detail)}};var gn=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){et("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),s=0,r=n.length,o;t?o=t:o=e*n[r-1];let a=0,c=r-1,l;for(;a<=c;)if(s=Math.floor(a+(c-a)/2),l=n[s]-o,l<0)a=s+1;else if(l>0)c=s-1;else{c=s;break}if(s=c,n[s]===o)return s/(r-1);let h=n[s],u=n[s+1]-h,d=(o-h)/u;return(s+d)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let o=this.getPoint(s),a=this.getPoint(r),c=t||(o.isVector2?new Le:new F);return c.copy(a).sub(o).normalize(),c}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new F,s=[],r=[],o=[],a=new F,c=new It;for(let d=0;d<=e;d++){let m=d/e;s[d]=this.getTangentAt(m,new F)}r[0]=new F,o[0]=new F;let l=Number.MAX_VALUE,h=Math.abs(s[0].x),f=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=l&&(l=h,n.set(1,0,0)),f<=l&&(l=f,n.set(0,1,0)),u<=l&&n.set(0,0,1),a.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],a),o[0].crossVectors(s[0],r[0]);for(let d=1;d<=e;d++){if(r[d]=r[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(s[d-1],s[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ft(s[d-1].dot(s[d]),-1,1));r[d].applyMatrix4(c.makeRotationAxis(a,m))}o[d].crossVectors(s[d],r[d])}if(t===!0){let d=Math.acos(ft(r[0].dot(r[e]),-1,1));d/=e,s[0].dot(a.crossVectors(r[0],r[e]))>0&&(d=-d);for(let m=1;m<=e;m++)r[m].applyMatrix4(c.makeRotationAxis(s[m],d*m)),o[m].crossVectors(s[m],r[m])}return{tangents:s,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this.cacheArcLengths=null,this}},xs=class extends gn{constructor(e=0,t=0,n=1,s=1,r=0,o=Math.PI*2,a=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=c}getPoint(e,t=new Le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(o?r=0:r=s),this.aClockwise===!0&&!o&&(r===s?r=-s:r=r-s);let a=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(a),l=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),f=Math.sin(this.aRotation),u=c-this.aX,d=l-this.aY;c=u*h-d*f+this.aX,l=u*f+d*h+this.aY}return n.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},xo=class extends xs{constructor(e,t,n,s,r,o){super(e,t,n,n,s,r,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Xl(){let i=0,e=0,t=0,n=0;function s(r,o,a,c){i=r,e=a,t=-3*r+3*o-2*a-c,n=2*r-2*o+a+c}return{initCatmullRom:function(r,o,a,c,l){s(o,a,l*(a-r),l*(c-o))},initNonuniformCatmullRom:function(r,o,a,c,l,h,f){let u=(o-r)/l-(a-r)/(l+h)+(a-o)/h,d=(a-o)/h-(c-o)/(h+f)+(c-a)/f;u*=h,d*=h,s(o,a,u,d)},calc:function(r){let o=r*r,a=o*r;return i+e*r+t*o+n*a}}}var Lc=new F,Dc=new F,Qa=new Xl,el=new Xl,tl=new Xl,hn=class extends gn{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new F){let n=t,s=this.points,r=s.length,o=(r-(this.closed?0:1))*e,a=Math.floor(o),c=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:c===0&&a===r-1&&(a=r-2,c=1);let l,h;this.closed||a>0?l=s[(a-1)%r]:(Dc.subVectors(s[0],s[1]).add(s[0]),l=Dc);let f=s[a%r],u=s[(a+1)%r];if(this.closed||a+2<r?h=s[(a+2)%r]:(Lc.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Lc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(l.distanceToSquared(f),d),M=Math.pow(f.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(h),d);M<1e-4&&(M=1),m<1e-4&&(m=M),p<1e-4&&(p=M),Qa.initNonuniformCatmullRom(l.x,f.x,u.x,h.x,m,M,p),el.initNonuniformCatmullRom(l.y,f.y,u.y,h.y,m,M,p),tl.initNonuniformCatmullRom(l.z,f.z,u.z,h.z,m,M,p)}else this.curveType==="catmullrom"&&(Qa.initCatmullRom(l.x,f.x,u.x,h.x,this.tension),el.initCatmullRom(l.y,f.y,u.y,h.y,this.tension),tl.initCatmullRom(l.z,f.z,u.z,h.z,this.tension));return n.set(Qa.calc(c),el.calc(c),tl.calc(c)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new F().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Nc(i,e,t,n,s){let r=(n-e)*.5,o=(s-t)*.5,a=i*i,c=i*a;return(2*t-2*n+r+o)*c+(-3*t+3*n-2*r-o)*a+r*i+t}function ld(i,e){let t=1-i;return t*t*e}function cd(i,e){return 2*(1-i)*i*e}function hd(i,e){return i*i*e}function Bs(i,e,t,n){return ld(i,e)+cd(i,t)+hd(i,n)}function ud(i,e){let t=1-i;return t*t*t*e}function dd(i,e){let t=1-i;return 3*t*t*i*e}function fd(i,e){return 3*(1-i)*i*i*e}function pd(i,e){return i*i*i*e}function zs(i,e,t,n,s){return ud(i,e)+dd(i,t)+fd(i,n)+pd(i,s)}var Qs=class extends gn{constructor(e=new Le,t=new Le,n=new Le,s=new Le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},yo=class extends gn{constructor(e=new F,t=new F,n=new F,s=new F){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(zs(e,s.x,r.x,o.x,a.x),zs(e,s.y,r.y,o.y,a.y),zs(e,s.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},er=class extends gn{constructor(e=new Le,t=new Le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},vo=class extends gn{constructor(e=new F,t=new F){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new F){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new F){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tr=class extends gn{constructor(e=new Le,t=new Le,n=new Le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Le){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(e,s.x,r.x,o.x),Bs(e,s.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},nr=class extends gn{constructor(e=new F,t=new F,n=new F){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new F){let n=t,s=this.v0,r=this.v1,o=this.v2;return n.set(Bs(e,s.x,r.x,o.x),Bs(e,s.y,r.y,o.y),Bs(e,s.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ir=class extends gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Le){let n=t,s=this.points,r=(s.length-1)*e,o=Math.floor(r),a=r-o,c=s[o===0?o:o-1],l=s[o],h=s[o>s.length-2?s.length-1:o+1],f=s[o>s.length-3?s.length-1:o+2];return n.set(Nc(a,c.x,l.x,h.x,f.x),Nc(a,c.y,l.y,h.y,f.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new Le().fromArray(s))}return this}},Mo=Object.freeze({__proto__:null,ArcCurve:xo,CatmullRomCurve3:hn,CubicBezierCurve:Qs,CubicBezierCurve3:yo,EllipseCurve:xs,LineCurve:er,LineCurve3:vo,QuadraticBezierCurve:tr,QuadraticBezierCurve3:nr,SplineCurve:ir}),So=class extends gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1,this.cacheLengths=null}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Mo[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let o=s[r]-n,a=this.curves[r],c=a.getLength(),l=c===0?0:1-o/c;return a.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let o=r[s],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,c=o.getPoints(a);for(let l=0;l<c.length;l++){let h=c[l];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this.cacheLengths=null,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new Mo[s.type]().fromJSON(s))}return this.cacheLengths=null,this}},sr=class extends So{constructor(e){super(),this.type="Path",this.currentPoint=new Le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new er(this.currentPoint.clone(),new Le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new tr(this.currentPoint.clone(),new Le(e,t),new Le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,o){let a=new Qs(this.currentPoint.clone(),new Le(e,t),new Le(n,s),new Le(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new ir(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,o){let a=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+a,t+c,n,s,r,o),this}absarc(e,t,n,s,r,o){return this.absellipse(e,t,n,n,s,r,o),this}ellipse(e,t,n,s,r,o,a,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,n,s,r,o,a,c),this}absellipse(e,t,n,s,r,o,a,c){let l=new xs(e,t,n,s,r,o,a,c);if(this.curves.length>0){let f=l.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},yi=class extends sr{constructor(e){super(e),this.uuid=qi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,s=this.holes.length;n<s;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let s=this.holes[t];e.holes.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let s=e.holes[t];this.holes.push(new sr().fromJSON(s))}return this}};function md(i,e,t=2){let n=e&&e.length,s=n?e[0]*t:i.length,r=Dh(i,0,s,t,!0),o=[];if(!r||r.next===r.prev)return o;let a,c,l;if(n&&(r=vd(i,e,r,t)),i.length>80*t){a=i[0],c=i[1];let h=a,f=c;for(let u=t;u<s;u+=t){let d=i[u],m=i[u+1];d<a&&(a=d),m<c&&(c=m),d>h&&(h=d),m>f&&(f=m)}l=Math.max(h-a,f-c),l=l!==0?32767/l:0}return rr(r,o,t,a,c,l,0),o}function Dh(i,e,t,n,s){let r;if(s===Pd(i,e,t,n)>0)for(let o=e;o<t;o+=n)r=Uc(o/n|0,i[o],i[o+1],r);else for(let o=t-n;o>=e;o-=n)r=Uc(o/n|0,i[o],i[o+1],r);return r&&ys(r,r.next)&&(ar(r),r=r.next),r}function Bi(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(ys(t,t.next)||Ot(t.prev,t,t.next)===0)){if(ar(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function rr(i,e,t,n,s,r,o){if(!i)return;!o&&r&&wd(i,n,s,r);let a=i;for(;i.prev!==i.next;){let c=i.prev,l=i.next;if(r?_d(i,n,s,r):gd(i)){e.push(c.i,i.i,l.i),ar(i),i=l.next,a=l.next;continue}if(i=l,i===a){o?o===1?(i=xd(Bi(i),e),rr(i,e,t,n,s,r,2)):o===2&&yd(i,e,t,n,s,r):rr(Bi(i),e,t,n,s,r,1);break}}}function gd(i){let e=i.prev,t=i,n=i.next;if(Ot(e,t,n)>=0)return!1;let s=e.x,r=t.x,o=n.x,a=e.y,c=t.y,l=n.y,h=Math.min(s,r,o),f=Math.min(a,c,l),u=Math.max(s,r,o),d=Math.max(a,c,l),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=u&&m.y>=f&&m.y<=d&&Ns(s,a,r,c,o,l,m.x,m.y)&&Ot(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function _d(i,e,t,n){let s=i.prev,r=i,o=i.next;if(Ot(s,r,o)>=0)return!1;let a=s.x,c=r.x,l=o.x,h=s.y,f=r.y,u=o.y,d=Math.min(a,c,l),m=Math.min(h,f,u),M=Math.max(a,c,l),p=Math.max(h,f,u),g=ll(d,m,e,t,n),y=ll(M,p,e,t,n),E=i.prevZ,x=i.nextZ;for(;E&&E.z>=g&&x&&x.z<=y;){if(E.x>=d&&E.x<=M&&E.y>=m&&E.y<=p&&E!==s&&E!==o&&Ns(a,h,c,f,l,u,E.x,E.y)&&Ot(E.prev,E,E.next)>=0||(E=E.prevZ,x.x>=d&&x.x<=M&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Ns(a,h,c,f,l,u,x.x,x.y)&&Ot(x.prev,x,x.next)>=0))return!1;x=x.nextZ}for(;E&&E.z>=g;){if(E.x>=d&&E.x<=M&&E.y>=m&&E.y<=p&&E!==s&&E!==o&&Ns(a,h,c,f,l,u,E.x,E.y)&&Ot(E.prev,E,E.next)>=0)return!1;E=E.prevZ}for(;x&&x.z<=y;){if(x.x>=d&&x.x<=M&&x.y>=m&&x.y<=p&&x!==s&&x!==o&&Ns(a,h,c,f,l,u,x.x,x.y)&&Ot(x.prev,x,x.next)>=0)return!1;x=x.nextZ}return!0}function xd(i,e){let t=i;do{let n=t.prev,s=t.next.next;!ys(n,s)&&Uh(n,t,t.next,s)&&or(n,s)&&or(s,n)&&(e.push(n.i,t.i,s.i),ar(t),ar(t.next),t=i=s),t=t.next}while(t!==i);return Bi(t)}function yd(i,e,t,n,s,r){let o=i;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&Rd(o,a)){let c=Fh(o,a);o=Bi(o,o.next),c=Bi(c,c.next),rr(o,e,t,n,s,r,0),rr(c,e,t,n,s,r,0);return}a=a.next}o=o.next}while(o!==i)}function vd(i,e,t,n){let s=[];for(let r=0,o=e.length;r<o;r++){let a=e[r]*n,c=r<o-1?e[r+1]*n:i.length,l=Dh(i,a,c,n,!1);l===l.next&&(l.steiner=!0),s.push(Ad(l))}s.sort(Md);for(let r=0;r<s.length;r++)t=Sd(s[r],t);return t}function Md(i,e){let t=i.x-e.x;if(t===0&&(t=i.y-e.y,t===0)){let n=(i.next.y-i.y)/(i.next.x-i.x),s=(e.next.y-e.y)/(e.next.x-e.x);t=n-s}return t}function Sd(i,e){let t=bd(i,e);if(!t)return e;let n=Fh(t,i);return Bi(n,n.next),Bi(t,t.next)}function bd(i,e){let t=e,n=i.x,s=i.y,r=-1/0,o;if(ys(i,t))return t;do{if(ys(i,t.next))return t.next;if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){let f=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(f<=n&&f>r&&(r=f,o=t.x<t.next.x?t:t.next,f===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,c=o.x,l=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=c&&n!==t.x&&Nh(s<l?n:r,s,c,l,s<l?r:n,s,t.x,t.y)){let f=Math.abs(s-t.y)/(n-t.x);or(t,i)&&(f<h||f===h&&(t.x>o.x||t.x===o.x&&Ed(o,t)))&&(o=t,h=f)}t=t.next}while(t!==a);return o}function Ed(i,e){return Ot(i.prev,i,e.prev)<0&&Ot(e.next,i,i.next)<0}function wd(i,e,t,n){let s=i;do s.z===0&&(s.z=ll(s.x,s.y,e,t,n)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==i);s.prevZ.nextZ=null,s.prevZ=null,Td(s)}function Td(i){let e,t=1;do{let n=i,s;i=null;let r=null;for(e=0;n;){e++;let o=n,a=0;for(let l=0;l<t&&(a++,o=o.nextZ,!!o);l++);let c=t;for(;a>0||c>0&&o;)a!==0&&(c===0||!o||n.z<=o.z)?(s=n,n=n.nextZ,a--):(s=o,o=o.nextZ,c--),r?r.nextZ=s:i=s,s.prevZ=r,r=s;n=o}r.nextZ=null,t*=2}while(e>1);return i}function ll(i,e,t,n,s){return i=(i-t)*s|0,e=(e-n)*s|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function Ad(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Nh(i,e,t,n,s,r,o,a){return(s-o)*(e-a)>=(i-o)*(r-a)&&(i-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(r-a)>=(s-o)*(n-a)}function Ns(i,e,t,n,s,r,o,a){return!(i===o&&e===a)&&Nh(i,e,t,n,s,r,o,a)}function Rd(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!Cd(i,e)&&(or(i,e)&&or(e,i)&&Id(i,e)&&(Ot(i.prev,i,e.prev)||Ot(i,e.prev,e))||ys(i,e)&&Ot(i.prev,i,i.next)>0&&Ot(e.prev,e,e.next)>0)}function Ot(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function ys(i,e){return i.x===e.x&&i.y===e.y}function Uh(i,e,t,n){let s=Jr(Ot(i,e,t)),r=Jr(Ot(i,e,n)),o=Jr(Ot(t,n,i)),a=Jr(Ot(t,n,e));return!!(s!==r&&o!==a||s===0&&Zr(i,t,e)||r===0&&Zr(i,n,e)||o===0&&Zr(t,i,n)||a===0&&Zr(t,e,n))}function Zr(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Jr(i){return i>0?1:i<0?-1:0}function Cd(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&Uh(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function or(i,e){return Ot(i.prev,i,i.next)<0?Ot(i,e,i.next)>=0&&Ot(i,i.prev,e)>=0:Ot(i,e,i.prev)<0||Ot(i,i.next,e)<0}function Id(i,e){let t=i,n=!1,s=(i.x+e.x)/2,r=(i.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function Fh(i,e){let t=cl(i.i,i.x,i.y),n=cl(e.i,e.x,e.y),s=i.next,r=e.prev;return i.next=e,e.prev=i,t.next=s,s.prev=t,n.next=t,t.prev=n,r.next=n,n.prev=r,n}function Uc(i,e,t,n){let s=cl(i,e,t);return n?(s.next=n.next,s.prev=n,n.next.prev=s,n.next=s):(s.prev=s,s.next=s),s}function ar(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function cl(i,e,t){return{i,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function Pd(i,e,t,n){let s=0;for(let r=e,o=t-n;r<t;r+=n)s+=(i[o]-i[r])*(i[r+1]+i[o+1]),o=r;return s}var hl=class{static triangulate(e,t,n=2){return md(e,t,n)}},Ni=class i{static area(e){let t=e.length,n=0;for(let s=t-1,r=0;r<t;s=r++)n+=e[s].x*e[r].y-e[r].x*e[s].y;return n*.5}static isClockWise(e){return i.area(e)<0}static triangulateShape(e,t){let n=[],s=[],r=[];Fc(e),Oc(n,e);let o=e.length;t.forEach(Fc);for(let c=0;c<t.length;c++)s.push(o),o+=t[c].length,Oc(n,t[c]);let a=hl.triangulate(n,s);for(let c=0;c<a.length;c+=3)r.push(a.slice(c,c+3));return r}};function Fc(i){let e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Oc(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}var zi=class i extends Bt{constructor(e=new yi([new Le(.5,.5),new Le(-.5,.5),new Le(-.5,-.5),new Le(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let n=this,s=[],r=[];for(let a=0,c=e.length;a<c;a++){let l=e[a];o(l)}this.setAttribute("position",new lt(s,3)),this.setAttribute("uv",new lt(r,2)),this.computeVertexNormals();function o(a){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,f=t.depth!==void 0?t.depth:1,u=t.bevelEnabled!==void 0?t.bevelEnabled:!0,d=t.bevelThickness!==void 0?t.bevelThickness:.2,m=t.bevelSize!==void 0?t.bevelSize:d-.1,M=t.bevelOffset!==void 0?t.bevelOffset:0,p=t.bevelSegments!==void 0?t.bevelSegments:3,g=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:Ld,E,x=!1,T,w,_,S;if(g){E=g.getSpacedPoints(h),x=!0,u=!1;let j=g.isCatmullRomCurve3?g.closed:!1;T=g.computeFrenetFrames(h,j),w=new F,_=new F,S=new F}u||(p=0,d=0,m=0,M=0);let I=a.extractPoints(l),C=I.shape,O=I.holes;if(!Ni.isClockWise(C)){C=C.reverse();for(let j=0,be=O.length;j<be;j++){let Se=O[j];Ni.isClockWise(Se)&&(O[j]=Se.reverse())}}function q(j){let Se=10000000000000001e-36,Ue=j[0];for(let Ce=1;Ce<=j.length;Ce++){let tt=Ce%j.length,Ve=j[tt],Qe=Ve.x-Ue.x,it=Ve.y-Ue.y,dt=Qe*Qe+it*it,G=Math.max(Math.abs(Ve.x),Math.abs(Ve.y),Math.abs(Ue.x),Math.abs(Ue.y)),ct=Se*G*G;if(dt<=ct){j.splice(tt,1),Ce--;continue}Ue=Ve}}q(C),O.forEach(q);let B=O.length,J=C;for(let j=0;j<B;j++){let be=O[j];C=C.concat(be)}function H(j,be,Se){return be||nt("ExtrudeGeometry: vec does not exist"),j.clone().addScaledVector(be,Se)}let z=C.length;function he(j,be,Se){let Ue,Ce,tt,Ve=j.x-be.x,Qe=j.y-be.y,it=Se.x-j.x,dt=Se.y-j.y,G=Ve*Ve+Qe*Qe,ct=Ve*dt-Qe*it;if(Math.abs(ct)>Number.EPSILON){let ot=Math.sqrt(G),at=Math.sqrt(it*it+dt*dt),Ie=be.x-Qe/ot,wt=be.y+Ve/ot,We=Se.x-dt/at,Je=Se.y+it/at,R=((We-Ie)*dt-(Je-wt)*it)/(Ve*dt-Qe*it);Ue=Ie+Ve*R-j.x,Ce=wt+Qe*R-j.y;let v=Ue*Ue+Ce*Ce;if(v<=2)return new Le(Ue,Ce);tt=Math.sqrt(v/2)}else{let ot=!1;Ve>Number.EPSILON?it>Number.EPSILON&&(ot=!0):Ve<-Number.EPSILON?it<-Number.EPSILON&&(ot=!0):Math.sign(Qe)===Math.sign(dt)&&(ot=!0),ot?(Ue=-Qe,Ce=Ve,tt=Math.sqrt(G)):(Ue=Ve,Ce=Qe,tt=Math.sqrt(G/2))}return new Le(Ue/tt,Ce/tt)}let Y=[];for(let j=0,be=J.length,Se=be-1,Ue=j+1;j<be;j++,Se++,Ue++)Se===be&&(Se=0),Ue===be&&(Ue=0),Y[j]=he(J[j],J[Se],J[Ue]);let Q=[],ce,Ae=Y.concat();for(let j=0,be=B;j<be;j++){let Se=O[j];ce=[];for(let Ue=0,Ce=Se.length,tt=Ce-1,Ve=Ue+1;Ue<Ce;Ue++,tt++,Ve++)tt===Ce&&(tt=0),Ve===Ce&&(Ve=0),ce[Ue]=he(Se[Ue],Se[tt],Se[Ve]);Q.push(ce),Ae=Ae.concat(ce)}let ke;if(p===0)ke=Ni.triangulateShape(J,O);else{let j=[],be=[];for(let Se=0;Se<p;Se++){let Ue=Se/p,Ce=d*Math.cos(Ue*Math.PI/2),tt=m*Math.sin(Ue*Math.PI/2)+M;for(let Ve=0,Qe=J.length;Ve<Qe;Ve++){let it=H(J[Ve],Y[Ve],tt);_e(it.x,it.y,-Ce),Ue===0&&j.push(it)}for(let Ve=0,Qe=B;Ve<Qe;Ve++){let it=O[Ve];ce=Q[Ve];let dt=[];for(let G=0,ct=it.length;G<ct;G++){let ot=H(it[G],ce[G],tt);_e(ot.x,ot.y,-Ce),Ue===0&&dt.push(ot)}Ue===0&&be.push(dt)}}ke=Ni.triangulateShape(j,be)}let P=ke.length,D=m+M;for(let j=0;j<z;j++){let be=u?H(C[j],Ae[j],D):C[j];x?(_.copy(T.normals[0]).multiplyScalar(be.x),w.copy(T.binormals[0]).multiplyScalar(be.y),S.copy(E[0]).add(_).add(w),_e(S.x,S.y,S.z)):_e(be.x,be.y,0)}for(let j=1;j<=h;j++)for(let be=0;be<z;be++){let Se=u?H(C[be],Ae[be],D):C[be];x?(_.copy(T.normals[j]).multiplyScalar(Se.x),w.copy(T.binormals[j]).multiplyScalar(Se.y),S.copy(E[j]).add(_).add(w),_e(S.x,S.y,S.z)):_e(Se.x,Se.y,f/h*j)}for(let j=p-1;j>=0;j--){let be=j/p,Se=d*Math.cos(be*Math.PI/2),Ue=m*Math.sin(be*Math.PI/2)+M;for(let Ce=0,tt=J.length;Ce<tt;Ce++){let Ve=H(J[Ce],Y[Ce],Ue);_e(Ve.x,Ve.y,f+Se)}for(let Ce=0,tt=O.length;Ce<tt;Ce++){let Ve=O[Ce];ce=Q[Ce];for(let Qe=0,it=Ve.length;Qe<it;Qe++){let dt=H(Ve[Qe],ce[Qe],Ue);x?_e(dt.x,dt.y+E[h-1].y,E[h-1].x+Se):_e(dt.x,dt.y,f+Se)}}}X(),ue();function X(){let j=s.length/3;if(u){let be=0,Se=z*be;for(let Ue=0;Ue<P;Ue++){let Ce=ke[Ue];Be(Ce[2]+Se,Ce[1]+Se,Ce[0]+Se)}be=h+p*2,Se=z*be;for(let Ue=0;Ue<P;Ue++){let Ce=ke[Ue];Be(Ce[0]+Se,Ce[1]+Se,Ce[2]+Se)}}else{for(let be=0;be<P;be++){let Se=ke[be];Be(Se[2],Se[1],Se[0])}for(let be=0;be<P;be++){let Se=ke[be];Be(Se[0]+z*h,Se[1]+z*h,Se[2]+z*h)}}n.addGroup(j,s.length/3-j,0)}function ue(){let j=s.length/3,be=0;ie(J,be),be+=J.length;for(let Se=0,Ue=O.length;Se<Ue;Se++){let Ce=O[Se];ie(Ce,be),be+=Ce.length}n.addGroup(j,s.length/3-j,1)}function ie(j,be){let Se=j.length;for(;--Se>=0;){let Ue=Se,Ce=Se-1;Ce<0&&(Ce=j.length-1);for(let tt=0,Ve=h+p*2;tt<Ve;tt++){let Qe=z*tt,it=z*(tt+1),dt=be+Ue+Qe,G=be+Ce+Qe,ct=be+Ce+it,ot=be+Ue+it;pe(dt,G,ct,ot)}}}function _e(j,be,Se){c.push(j),c.push(be),c.push(Se)}function Be(j,be,Se){ye(j),ye(be),ye(Se);let Ue=s.length/3,Ce=y.generateTopUV(n,s,Ue-3,Ue-2,Ue-1);Ee(Ce[0]),Ee(Ce[1]),Ee(Ce[2])}function pe(j,be,Se,Ue){ye(j),ye(be),ye(Ue),ye(be),ye(Se),ye(Ue);let Ce=s.length/3,tt=y.generateSideWallUV(n,s,Ce-6,Ce-3,Ce-2,Ce-1);Ee(tt[0]),Ee(tt[1]),Ee(tt[3]),Ee(tt[1]),Ee(tt[2]),Ee(tt[3])}function ye(j){s.push(c[j*3+0]),s.push(c[j*3+1]),s.push(c[j*3+2])}function Ee(j){r.push(j.x),r.push(j.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return Dd(t,n,e)}static fromJSON(e,t){let n=[];for(let r=0,o=e.shapes.length;r<o;r++){let a=t[e.shapes[r]];n.push(a)}let s=e.options.extrudePath;return s!==void 0&&(e.options.extrudePath=new Mo[s.type]().fromJSON(s)),new i(n,e.options)}},Ld={generateTopUV:function(i,e,t,n,s){let r=e[t*3],o=e[t*3+1],a=e[n*3],c=e[n*3+1],l=e[s*3],h=e[s*3+1];return[new Le(r,o),new Le(a,c),new Le(l,h)]},generateSideWallUV:function(i,e,t,n,s,r){let o=e[t*3],a=e[t*3+1],c=e[t*3+2],l=e[n*3],h=e[n*3+1],f=e[n*3+2],u=e[s*3],d=e[s*3+1],m=e[s*3+2],M=e[r*3],p=e[r*3+1],g=e[r*3+2];return Math.abs(a-h)<Math.abs(o-l)?[new Le(o,1-c),new Le(l,1-f),new Le(u,1-m),new Le(M,1-g)]:[new Le(a,1-c),new Le(h,1-f),new Le(d,1-m),new Le(p,1-g)]}};function Dd(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,s=i.length;n<s;n++){let r=i[n];t.shapes.push(r.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Pn=class i extends _o{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Hn=class i extends Bt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(s),l=a+1,h=c+1,f=e/a,u=t/c,d=[],m=[],M=[],p=[];for(let g=0;g<h;g++){let y=g*u-o;for(let E=0;E<l;E++){let x=E*f-r;m.push(x,-y,0),M.push(0,0,1),p.push(E/a),p.push(1-g/c)}}for(let g=0;g<c;g++)for(let y=0;y<a;y++){let E=y+l*g,x=y+l*(g+1),T=y+1+l*(g+1),w=y+1+l*g;d.push(E,x,w),d.push(x,T,w)}this.setIndex(d),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(M,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},ki=class i extends Bt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);let a=[],c=[],l=[],h=[],f=e,u=(t-e)/s,d=new F,m=new Le;for(let M=0;M<=s;M++){for(let p=0;p<=n;p++){let g=r+p/n*o;d.x=f*Math.cos(g),d.y=f*Math.sin(g),c.push(d.x,d.y,d.z),l.push(0,0,1),m.x=(d.x/t+1)/2,m.y=(d.y/t+1)/2,h.push(m.x,m.y)}f+=u}for(let M=0;M<s;M++){let p=M*(n+1);for(let g=0;g<n;g++){let y=g+p,E=y,x=y+n+1,T=y+n+2,w=y+1;a.push(E,x,w),a.push(x,T,w)}}this.setIndex(a),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var Nt=class i extends Bt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let c=Math.min(o+a,Math.PI),l=0,h=[],f=new F,u=new F,d=[],m=[],M=[],p=[];for(let g=0;g<=n;g++){let y=[],E=g/n,x=o+E*a,T=e*Math.cos(x),w=Math.sqrt(e*e-T*T),_=0;g===0&&o===0?_=.5/t:g===n&&c===Math.PI&&(_=-.5/t);for(let S=0;S<=t;S++){let I=S/t,C=s+I*r;f.x=-w*Math.cos(C),f.y=T,f.z=w*Math.sin(C),m.push(f.x,f.y,f.z),u.copy(f).normalize(),M.push(u.x,u.y,u.z),p.push(I+_,1-E),y.push(l++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let E=h[g][y+1],x=h[g][y],T=h[g+1][y],w=h[g+1][y+1];(g!==0||o>0)&&d.push(E,x,w),(g!==n-1||c<Math.PI)&&d.push(x,T,w)}this.setIndex(d),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(M,3)),this.setAttribute("uv",new lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var si=class i extends Bt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2,o=0,a=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r,thetaStart:o,thetaLength:a},n=Math.floor(n),s=Math.floor(s);let c=[],l=[],h=[],f=[],u=new F,d=new F,m=new F;for(let M=0;M<=n;M++){let p=o+M/n*a;for(let g=0;g<=s;g++){let y=g/s*r;d.x=(e+t*Math.cos(p))*Math.cos(y),d.y=(e+t*Math.cos(p))*Math.sin(y),d.z=t*Math.sin(p),l.push(d.x,d.y,d.z),u.x=e*Math.cos(y),u.y=e*Math.sin(y),m.subVectors(d,u).normalize(),h.push(m.x,m.y,m.z),f.push(g/s),f.push(M/n)}}for(let M=1;M<=n;M++)for(let p=1;p<=s;p++){let g=(s+1)*M+p-1,y=(s+1)*(M-1)+p-1,E=(s+1)*(M-1)+p,x=(s+1)*M+p;c.push(g,y,x),c.push(y,E,x)}this.setIndex(c),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(f,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ln=class i extends Bt{constructor(e=new nr(new F(-1,-1,0),new F(-1,1,0),new F(1,1,0)),t=64,n=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:s,closed:r};let o=e.computeFrenetFrames(t,r);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new F,c=new F,l=new Le,h=new F,f=[],u=[],d=[],m=[];M(),this.setIndex(m),this.setAttribute("position",new lt(f,3)),this.setAttribute("normal",new lt(u,3)),this.setAttribute("uv",new lt(d,2));function M(){for(let E=0;E<t;E++)p(E);p(r===!1?t:0),y(),g()}function p(E){h=e.getPointAt(E/t,h);let x=o.normals[E],T=o.binormals[E];for(let w=0;w<=s;w++){let _=w/s*Math.PI*2,S=Math.sin(_),I=-Math.cos(_);c.x=I*x.x+S*T.x,c.y=I*x.y+S*T.y,c.z=I*x.z+S*T.z,c.normalize(),u.push(c.x,c.y,c.z),a.x=h.x+n*c.x,a.y=h.y+n*c.y,a.z=h.z+n*c.z,f.push(a.x,a.y,a.z)}}function g(){for(let E=1;E<=t;E++)for(let x=1;x<=s;x++){let T=(s+1)*(E-1)+(x-1),w=(s+1)*E+(x-1),_=(s+1)*E+x,S=(s+1)*(E-1)+x;m.push(T,w,S),m.push(w,_,S)}}function y(){for(let E=0;E<=t;E++)for(let x=0;x<=s;x++)l.x=E/t,l.y=x/s,d.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new i(new Mo[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Yi(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];if(Bc(s))s.isRenderTargetTexture?(et("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(Bc(s[0])){let r=[];for(let o=0,a=s.length;o<a;o++)r[o]=s[o].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function nn(i){let e={};for(let t=0;t<i.length;t++){let n=Yi(i[t]);for(let s in n)e[s]=n[s]}return e}function Bc(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Nd(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function ql(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:_t.workingColorSpace}var Oh={clone:Yi,merge:nn},Ud=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Fd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Gn=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ud,this.fragmentShader=Fd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Yi(e.uniforms),this.uniformsGroups=Nd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let n in e.uniforms){let s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new ht().setHex(s.value);break;case"v2":this.uniforms[n].value=new Le().fromArray(s.value);break;case"v3":this.uniforms[n].value=new F().fromArray(s.value);break;case"v4":this.uniforms[n].value=new Dt().fromArray(s.value);break;case"m3":this.uniforms[n].value=new st().fromArray(s.value);break;case"m4":this.uniforms[n].value=new It().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},bo=class extends Gn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vi=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ht(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ht(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ba,this.normalScale=new Le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ti,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Eo=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_h,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},wo=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function ss(i,e){return!i||i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function $r(i){return i!==void 0&&i.inTangents!==void 0&&i.outTangents!==void 0}var Mi=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){let a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},To=class extends Mi{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sl,endingEnd:sl}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,o=e+1,a=s[r],c=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case rl:r=e,a=2*t-n;break;case ol:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case rl:o=e,c=2*n-t;break;case ol:o=1,c=n+s[1]-s[0];break;default:o=e-1,c=t}let l=(n-t)*.5,h=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this._offsetPrev,f=this._offsetNext,u=this._weightPrev,d=this._weightNext,m=(n-t)/(s-t),M=m*m,p=M*m,g=-u*p+2*u*M-u*m,y=(1+u)*p+(-1.5-2*u)*M+(-.5+u)*m+1,E=(-1-d)*p+(1.5+d)*M+.5*m,x=d*p-d*M;for(let T=0;T!==a;++T)r[T]=g*o[h+T]+y*o[l+T]+E*o[c+T]+x*o[f+T];return r}},Ao=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=(n-t)/(s-t),f=1-h;for(let u=0;u!==a;++u)r[u]=o[l+u]*f+o[c+u]*h;return r}},Ro=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},Co=class extends Mi{interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,h=this.inTangents,f=this.outTangents;if(!h||!f){let m=(n-t)/(s-t),M=1-m;for(let p=0;p!==a;++p)r[p]=o[l+p]*M+o[c+p]*m;return r}let u=a*2,d=e-1;for(let m=0;m!==a;++m){let M=o[l+m],p=o[c+m],g=d*u+m*2,y=f[g],E=f[g+1],x=e*u+m*2,T=h[x],w=h[x+1],_=Bd(n,t,y,T,s);r[m]=Bh(_,M,E,w,p)}return r}};function Bh(i,e,t,n,s){let r=1-i;return r*r*r*e+3*r*r*i*t+3*r*i*i*n+i*i*i*s}function Od(i,e,t,n,s){let r=1-i;return 3*r*r*(t-e)+6*r*i*(n-t)+3*i*i*(s-n)}function Bd(i,e,t,n,s){let r=(i-e)/(s-e);for(let o=0;o<8;o++){let a=Bh(r,e,t,n,s)-i;if(Math.abs(a)<1e-10)break;let c=Od(r,e,t,n,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-a/c))}return r}var _n=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s),$r(e.settings)&&(n.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ro(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Ao(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new To(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Co(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ks:t=this.InterpolantFactoryMethodDiscrete;break;case ho:t=this.InterpolantFactoryMethodLinear;break;case Qr:t=this.InterpolantFactoryMethodSmooth;break;case il:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return et("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ks;case this.InterpolantFactoryMethodLinear:return ho;case this.InterpolantFactoryMethodSmooth:return Qr;case this.InterpolantFactoryMethodBezier:return il}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e;$r(this.settings)&&(zc(this.settings.inTangents,e),zc(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e;$r(this.settings)&&(kc(this.settings.inTangents,e),kc(this.settings.outTangents,e))}return this}trim(e,t){let n=this.times,s=n.length,r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);let a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(nt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(nt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){let c=n[a];if(typeof c=="number"&&isNaN(c)){nt("KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){nt("KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(s!==void 0&&Ru(s))for(let a=0,c=s.length;a!==c;++a){let l=s[a];if(isNaN(l)){nt("KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===Qr,r=e.length-1,o=1;for(let a=1;a<r;++a){let c=!1,l=e[a],h=e[a+1];if(l!==h&&(a!==1||l!==e[0]))if(s)c=!0;else{let f=a*n,u=f-n,d=f+n;for(let m=0;m!==n;++m){let M=t[f+m];if(M!==t[u+m]||M!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];let f=a*n,u=o*n;for(let d=0;d!==n;++d)t[u+d]=t[f+d]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,$r(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};function zc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]+=e}function kc(i,e){for(let t=0,n=i.length;t!==n;t+=2)i[t]*=e}_n.prototype.ValueTypeName="";_n.prototype.TimeBufferType=Float32Array;_n.prototype.ValueBufferType=Float32Array;_n.prototype.DefaultInterpolation=ho;var Si=class extends _n{constructor(e,t,n){super(e,t,n)}};Si.prototype.ValueTypeName="bool";Si.prototype.ValueBufferType=Array;Si.prototype.DefaultInterpolation=ks;Si.prototype.InterpolantFactoryMethodLinear=void 0;Si.prototype.InterpolantFactoryMethodSmooth=void 0;var Io=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Io.prototype.ValueTypeName="color";var Po=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Po.prototype.ValueTypeName="number";var Lo=class extends Mi{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(s-t),l=e*a;for(let h=l+a;l!==h;l+=4)kn.slerpFlat(r,0,o,l-a,o,l,c);return r}},lr=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}InterpolantFactoryMethodLinear(e){return new Lo(this.times,this.values,this.getValueSize(),e)}};lr.prototype.ValueTypeName="quaternion";lr.prototype.InterpolantFactoryMethodSmooth=void 0;var bi=class extends _n{constructor(e,t,n){super(e,t,n)}};bi.prototype.ValueTypeName="string";bi.prototype.ValueBufferType=Array;bi.prototype.DefaultInterpolation=ks;bi.prototype.InterpolantFactoryMethodLinear=void 0;bi.prototype.InterpolantFactoryMethodSmooth=void 0;var Do=class extends _n{constructor(e,t,n,s){super(e,t,n,s)}};Do.prototype.ValueTypeName="vector";var No=class{constructor(e,t,n){let s=this,r=!1,o=0,a=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,f){return l.push(h,f),this},this.removeHandler=function(h){let f=l.indexOf(h);return f!==-1&&l.splice(f,2),this},this.getHandler=function(h){for(let f=0,u=l.length;f<u;f+=2){let d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},zh=new No,Uo=class{constructor(e){this.manager=e!==void 0?e:zh,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Uo.DEFAULT_MATERIAL_NAME="__DEFAULT";var vs=class extends kt{static registerNode(e){this.prototype._lightNode=e}constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ht(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},cr=class extends vs{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ht(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},nl=new It,Hc=new F,Gc=new F,hr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Le(512,512),this.mapType=dn,this.map=null,this.mapPass=null,this.matrix=new It,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new _i,this._frameExtents=new Le(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Hc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Hc),Gc.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Gc),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){nl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(nl,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,o=s?s.z/r.x:1,a=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===cs||e.reversedDepth?t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,1,0,0,0,0,1):t.set(.5*o,0,0,.5*o+c,0,.5*a,0,.5*a+l,0,0,.5,.5,0,0,0,1),t.multiply(nl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Kr=new F,jr=new kn,On=new F,ur=class extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new It,this.projectionMatrix=new It,this.projectionMatrixInverse=new It,this.coordinateSystem=yn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Kr,jr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,jr,On.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Kr,jr,On),On.x===1&&On.y===1&&On.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Kr,jr,On.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},mi=new F,Vc=new Le,Wc=new Le,tn=class extends ur{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Fs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Fs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){mi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(mi.x,mi.y).multiplyScalar(-e/mi.z),mi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(mi.x,mi.y).multiplyScalar(-e/mi.z)}getViewSize(e,t){return this.getViewBounds(e,Vc,Wc),t.subVectors(Wc,Vc)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Fs*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,o=this.view;if(this.view!==null&&this.view.enabled){let c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*s/c,t-=o.offsetY*n/l,s*=o.width/c,n*=o.height/l}let a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var ul=class extends hr{constructor(){super(new tn(90,1,.5,500)),this.isPointLightShadow=!0}},dr=class extends vs{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new ul}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},fr=class extends ur{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,o=n+e,a=s+t,c=s-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=h*this.view.offsetY,c=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},dl=class extends hr{constructor(){super(new fr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Ms=class extends vs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new dl}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var rs=-90,os=1,Ss=class extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new tn(rs,os,e,t);s.layers=this.layers,this.add(s);let r=new tn(rs,os,e,t);r.layers=this.layers,this.add(r);let o=new tn(rs,os,e,t);o.layers=this.layers,this.add(o);let a=new tn(rs,os,e,t);a.layers=this.layers,this.add(a);let c=new tn(rs,os,e,t);c.layers=this.layers,this.add(c);let l=new tn(rs,os,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,c]=t;for(let l of t)this.remove(l);if(e===yn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===cs)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,o,a,c,l,h]=this.children,f=e.getRenderTarget(),u=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let M=n.texture.mipmapsAutoUpdate;n.texture.mipmapsAutoUpdate=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,2,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,3,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.mipmapsAutoUpdate=M,e.setRenderTarget(n,5,s),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(f,u,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Fo=class extends tn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}};var Yl="\\[\\]\\.:\\/",zd=new RegExp("["+Yl+"]","g"),Zl="[^"+Yl+"]",kd="[^"+Yl.replace("\\.","")+"]",Hd=/((?:WC+[\/:])*)/.source.replace("WC",Zl),Gd=/(WCOD+)?/.source.replace("WCOD",kd),Vd=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Zl),Wd=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Zl),Xd=new RegExp("^"+Hd+Gd+Vd+Wd+"$"),qd=["material","materials","bones","map"],fl=class{constructor(e,t,n){let s=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Lt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(zd,"")}static parseTrackName(e){let t=Xd.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);qd.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let o=0;o<r.length;o++){let a=r[o];if(a.name===t||a.uuid===t)return a;let c=n(a.children);if(c)return c}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){et("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){nt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){nt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){nt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){nt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){nt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){nt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let o=e[s];if(o===void 0){let l=t.nodeName;nt("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){nt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Lt.Composite=fl;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var G0=new Float32Array(1);var Xc=new It,pr=class{constructor(e,t,n=0,s=1/0){this.ray=new ms(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new fs,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):nt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Xc.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Xc),this}intersectObject(e,t=!0,n=[]){return pl(e,this,n,t),n.sort(qc),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)pl(e[s],this,n,t);return n.sort(qc),n}};function qc(i,e){return i.distance-e.distance}function pl(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){let r=i.children;for(let o=0,a=r.length;o<a;o++)pl(r[o],e,t,!0)}}var ec=class ec{constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){let r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}};ec.prototype.isMatrix2=!0;var ml=ec;function Jl(i,e,t,n){let s=Yd(n);switch(t){case Nl:return i*e;case Fl:return i*e/s.components*s.byteLength;case Wo:return i*e/s.components*s.byteLength;case wi:return i*e*2/s.components*s.byteLength;case Xo:return i*e*2/s.components*s.byteLength;case Ul:return i*e*3/s.components*s.byteLength;case Fn:return i*e*4/s.components*s.byteLength;case qo:return i*e*4/s.components*s.byteLength;case _r:case xr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case yr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Zo:case $o:return Math.max(i,16)*Math.max(e,8)/4;case Yo:case Jo:return Math.max(i,8)*Math.max(e,8)/2;case Ko:case jo:case ea:case ta:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Qo:case Mr:case na:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ia:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case sa:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case ra:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case oa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case aa:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case la:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case ca:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case ha:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case ua:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case da:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case fa:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case pa:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case ma:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case ga:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _a:case xa:case ya:return Math.ceil(i/4)*Math.ceil(e/4)*16;case va:case Ma:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Sr:case Sa:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Yd(i){switch(i){case dn:case Il:return{byteLength:1,components:1};case Ts:case Pl:case Un:return{byteLength:2,components:1};case Go:case Vo:return{byteLength:2,components:4};case Dn:case Ho:case Nn:return{byteLength:4,components:1};case Ll:case Dl:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?et("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187");function au(){let i=null,e=!1,t=null,n=null;function s(r,o){n=i.requestAnimationFrame(s),t(r,o)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function tf(i){let e=new WeakMap;function t(a,c){let l=a.array,h=a.usage,f=l.byteLength,u=i.createBuffer();i.bindBuffer(c,u),i.bufferData(c,l,h),a.onUploadCallback();let d;if(l instanceof Float32Array)d=i.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)d=i.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(l instanceof Int16Array)d=i.SHORT;else if(l instanceof Uint32Array)d=i.UNSIGNED_INT;else if(l instanceof Int32Array)d=i.INT;else if(l instanceof Int8Array)d=i.BYTE;else if(l instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:d,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,c,l){let h=c.array,f=c.updateRanges;if(i.bindBuffer(l,a),f.length===0)i.bufferSubData(l,0,h);else{f.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<f.length;d++){let m=f[u],M=f[d];M.start<=m.start+m.count+1?m.count=Math.max(m.count,M.start+M.count-m.start):(++u,f[u]=M)}f.length=u+1;for(let d=0,m=f.length;d<m;d++){let M=f[d];i.bufferSubData(l,M.start*h.BYTES_PER_ELEMENT,h,M.start,M.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);let c=e.get(a);c&&(i.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:s,remove:r,update:o}}var nf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,rf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,of=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,af=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,lf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,cf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,hf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,df=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,ff=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,mf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,gf=`#ifdef USE_IRIDESCENCE
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
#endif`,_f=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xf=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Mf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Sf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,bf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Ef=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,wf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Tf=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Af=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Rf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Cf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,If=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Pf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Lf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Df=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Nf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Uf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,Ff=`#ifdef USE_ENVMAP
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
#endif`,Of=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Bf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,zf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Hf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Gf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Vf=`#ifdef USE_GRADIENTMAP
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
}`,Wf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xf=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qf=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yf=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif
#include <lightprobes_pars_fragment>`,Zf=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,Jf=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$f=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Kf=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jf=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Qf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ep=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
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
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
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
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,tp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,np=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ip=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sp=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,rp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,op=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,hp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,up=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,dp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,fp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gp=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,_p=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,xp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Mp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Sp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ep=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Tp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ap=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Rp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Cp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Pp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Lp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Dp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Np=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Up=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Fp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Op=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Bp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,zp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,kp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
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
#endif`,Hp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Gp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Vp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Wp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Xp=`#ifdef USE_SKINNING
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
#endif`,qp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Yp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$p=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Kp=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,jp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Qp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,nm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,im=`uniform sampler2D t2D;
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
	#include <colorspace_fragment>
}`,sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rm=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,om=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,am=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,cm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,hm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,um=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,dm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_m=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,xm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Mm=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Sm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Em=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,wm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Am=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,Cm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,Pm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ut={alphahash_fragment:nf,alphahash_pars_fragment:sf,alphamap_fragment:rf,alphamap_pars_fragment:of,alphatest_fragment:af,alphatest_pars_fragment:lf,aomap_fragment:cf,aomap_pars_fragment:hf,batching_pars_vertex:uf,batching_vertex:df,begin_vertex:ff,beginnormal_vertex:pf,bsdfs:mf,iridescence_fragment:gf,bumpmap_pars_fragment:_f,clipping_planes_fragment:xf,clipping_planes_pars_fragment:yf,clipping_planes_pars_vertex:vf,clipping_planes_vertex:Mf,color_fragment:Sf,color_pars_fragment:bf,color_pars_vertex:Ef,color_vertex:wf,common:Tf,defaultnormal_vertex:Af,displacementmap_pars_vertex:Rf,displacementmap_vertex:Cf,emissivemap_fragment:If,emissivemap_pars_fragment:Pf,colorspace_fragment:Lf,colorspace_pars_fragment:Df,envmap_fragment:Nf,envmap_common_pars_fragment:Uf,envmap_pars_fragment:Ff,envmap_pars_vertex:Of,envmap_physical_pars_fragment:Zf,envmap_vertex:Bf,fog_vertex:zf,fog_pars_vertex:kf,fog_fragment:Hf,fog_pars_fragment:Gf,gradientmap_pars_fragment:Vf,lightmap_pars_fragment:Wf,lights_lambert_fragment:Xf,lights_lambert_pars_fragment:qf,lights_pars_begin:Yf,lights_toon_fragment:Jf,lights_toon_pars_fragment:$f,lights_phong_fragment:Kf,lights_phong_pars_fragment:jf,lights_physical_fragment:Qf,lights_physical_pars_fragment:ep,lights_fragment_begin:tp,lights_fragment_maps:np,lights_fragment_end:ip,lightprobes_pars_fragment:sp,logdepthbuf_fragment:rp,logdepthbuf_pars_fragment:op,logdepthbuf_pars_vertex:ap,logdepthbuf_vertex:lp,map_fragment:cp,map_pars_fragment:hp,map_particle_fragment:up,map_particle_pars_fragment:dp,metalnessmap_fragment:fp,metalnessmap_pars_fragment:pp,morphinstance_vertex:mp,morphcolor_vertex:gp,morphnormal_vertex:_p,morphtarget_pars_vertex:xp,morphtarget_vertex:yp,normal_fragment_begin:vp,normal_fragment_maps:Mp,normal_pars_fragment:Sp,normal_pars_vertex:bp,normal_vertex:Ep,normalmap_pars_fragment:wp,clearcoat_normal_fragment_begin:Tp,clearcoat_normal_fragment_maps:Ap,clearcoat_pars_fragment:Rp,iridescence_pars_fragment:Cp,opaque_fragment:Ip,packing:Pp,premultiplied_alpha_fragment:Lp,project_vertex:Dp,dithering_fragment:Np,dithering_pars_fragment:Up,roughnessmap_fragment:Fp,roughnessmap_pars_fragment:Op,shadowmap_pars_fragment:Bp,shadowmap_pars_vertex:zp,shadowmap_vertex:kp,shadowmask_pars_fragment:Hp,skinbase_vertex:Gp,skinning_pars_vertex:Vp,skinning_vertex:Wp,skinnormal_vertex:Xp,specularmap_fragment:qp,specularmap_pars_fragment:Yp,tonemapping_fragment:Zp,tonemapping_pars_fragment:Jp,transmission_fragment:$p,transmission_pars_fragment:Kp,uv_pars_fragment:jp,uv_pars_vertex:Qp,uv_vertex:em,worldpos_vertex:tm,background_vert:nm,background_frag:im,backgroundCube_vert:sm,backgroundCube_frag:rm,cube_vert:om,cube_frag:am,depth_vert:lm,depth_frag:cm,distance_vert:hm,distance_frag:um,equirect_vert:dm,equirect_frag:fm,linedashed_vert:pm,linedashed_frag:mm,meshbasic_vert:gm,meshbasic_frag:_m,meshlambert_vert:xm,meshlambert_frag:ym,meshmatcap_vert:vm,meshmatcap_frag:Mm,meshnormal_vert:Sm,meshnormal_frag:bm,meshphong_vert:Em,meshphong_frag:wm,meshphysical_vert:Tm,meshphysical_frag:Am,meshtoon_vert:Rm,meshtoon_frag:Cm,points_vert:Im,points_frag:Pm,shadow_vert:Lm,shadow_frag:Dm,sprite_vert:Nm,sprite_frag:Um},ze={common:{diffuse:{value:new ht(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new st}},envmap:{envMap:{value:null},envMapRotation:{value:new st},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new st}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new st}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new st},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new st},normalScale:{value:new Le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new st},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new st}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new st}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new st}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ht(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ht(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0},uvTransform:{value:new st}},sprite:{diffuse:{value:new ht(16777215)},opacity:{value:1},center:{value:new Le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new st},alphaMap:{value:null},alphaMapTransform:{value:new st},alphaTest:{value:0}}},Xn={basic:{uniforms:nn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:ut.meshbasic_vert,fragmentShader:ut.meshbasic_frag},lambert:{uniforms:nn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ht(0)},envMapIntensity:{value:1}}]),vertexShader:ut.meshlambert_vert,fragmentShader:ut.meshlambert_frag},phong:{uniforms:nn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new ht(0)},specular:{value:new ht(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ut.meshphong_vert,fragmentShader:ut.meshphong_frag},standard:{uniforms:nn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new ht(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag},toon:{uniforms:nn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new ht(0)}}]),vertexShader:ut.meshtoon_vert,fragmentShader:ut.meshtoon_frag},matcap:{uniforms:nn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:ut.meshmatcap_vert,fragmentShader:ut.meshmatcap_frag},points:{uniforms:nn([ze.points,ze.fog]),vertexShader:ut.points_vert,fragmentShader:ut.points_frag},dashed:{uniforms:nn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ut.linedashed_vert,fragmentShader:ut.linedashed_frag},depth:{uniforms:nn([ze.common,ze.displacementmap]),vertexShader:ut.depth_vert,fragmentShader:ut.depth_frag},normal:{uniforms:nn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:ut.meshnormal_vert,fragmentShader:ut.meshnormal_frag},sprite:{uniforms:nn([ze.sprite,ze.fog]),vertexShader:ut.sprite_vert,fragmentShader:ut.sprite_frag},background:{uniforms:{uvTransform:{value:new st},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ut.background_vert,fragmentShader:ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new st}},vertexShader:ut.backgroundCube_vert,fragmentShader:ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ut.cube_vert,fragmentShader:ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ut.equirect_vert,fragmentShader:ut.equirect_frag},distance:{uniforms:nn([ze.common,ze.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ut.distance_vert,fragmentShader:ut.distance_frag},shadow:{uniforms:nn([ze.lights,ze.fog,{color:{value:new ht(0)},opacity:{value:1}}]),vertexShader:ut.shadow_vert,fragmentShader:ut.shadow_frag}};Xn.physical={uniforms:nn([Xn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new st},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new st},clearcoatNormalScale:{value:new Le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new st},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new st},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new st},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new st},sheen:{value:0},sheenColor:{value:new ht(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new st},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new st},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new st},transmissionSamplerSize:{value:new Le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new st},attenuationDistance:{value:0},attenuationColor:{value:new ht(0)},specularColor:{value:new ht(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new st},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new st},anisotropyVector:{value:new Le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new st}}]),vertexShader:ut.meshphysical_vert,fragmentShader:ut.meshphysical_frag};var Ea={r:0,b:0,g:0},Fm=new It,lu=new st;lu.set(-1,0,0,0,1,0,0,0,1);function Om(i,e,t,n,s,r){let o=new ht(0),a=s===!0?0:1,c,l,h=null,f=0,u=null;function d(y){let E=y.isScene===!0?y.background:null;if(E&&E.isTexture){let x=y.backgroundBlurriness>0;E=e.get(E,x)}return E}function m(y){let E=!1,x=d(y);x===null?p(o,a):x&&x.isColor&&(p(x,1),E=!0);let T=i.xr.getEnvironmentBlendMode();T==="additive"?t.buffers.color.setClear(0,0,0,1,r):T==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function M(y,E){let x=d(E);x&&x.isCubeTexture?(l===void 0&&(l=new Xe(new In(1,1,1),new Gn({name:"BackgroundCubeMaterial",uniforms:Yi(Xn.backgroundCube.uniforms),vertexShader:Xn.backgroundCube.vertexShader,fragmentShader:Xn.backgroundCube.fragmentShader,side:ln,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(T,w,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=x,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Fm.makeRotationFromEuler(E.backgroundRotation)).transpose(),x.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(lu),l.material.toneMapped=_t.getTransfer(x.colorSpace)!==Et,(h!==x||f!==x.version||u!==i.toneMapping)&&(l.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),l.layers.enableAll(),y.unshift(l,l.geometry,l.material,0,0,null)):x&&x.isTexture&&(c===void 0&&(c=new Xe(new Hn(2,2),new Gn({name:"BackgroundMaterial",uniforms:Yi(Xn.background.uniforms),vertexShader:Xn.background.vertexShader,fragmentShader:Xn.background.fragmentShader,side:Ei,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=x,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=_t.getTransfer(x.colorSpace)!==Et,x.matrixAutoUpdate===!0&&x.updateMatrix(),c.material.uniforms.uvTransform.value.copy(x.matrix),(h!==x||f!==x.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,h=x,f=x.version,u=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function p(y,E){y.getRGB(Ea,ql(i)),t.buffers.color.setClear(Ea.r,Ea.g,Ea.b,E,r)}function g(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(y,E=1){o.set(y),a=E,p(o,a)},getClearAlpha:function(){return a},setClearAlpha:function(y){a=y,p(o,a)},render:m,addToRenderList:M,dispose:g}}function Bm(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=u(null),r=s,o=!1;function a(O,U,q,B,J){let H=!1,z=f(O,B,q,U);r!==z&&(r=z,l(r.object)),H=d(O,B,q,J),H&&m(O,B,q,J),J!==null&&e.update(J,i.ELEMENT_ARRAY_BUFFER),(H||o)&&(o=!1,x(O,U,q,B),J!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(J).buffer))}function c(){return i.createVertexArray()}function l(O){return i.bindVertexArray(O)}function h(O){return i.deleteVertexArray(O)}function f(O,U,q,B){let J=B.wireframe===!0,H=n[U.id];H===void 0&&(H={},n[U.id]=H);let z=O.isInstancedMesh===!0?O.id:0,he=H[z];he===void 0&&(he={},H[z]=he);let Y=he[q.id];Y===void 0&&(Y={},he[q.id]=Y);let Q=Y[J];return Q===void 0&&(Q=u(c()),Y[J]=Q),Q}function u(O){let U=[],q=[],B=[];for(let J=0;J<t;J++)U[J]=0,q[J]=0,B[J]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:U,enabledAttributes:q,attributeDivisors:B,object:O,attributes:{},index:null}}function d(O,U,q,B){let J=r.attributes,H=U.attributes,z=0,he=q.getAttributes();for(let Y in he)if(he[Y].location>=0){let ce=J[Y],Ae=H[Y];if(Ae===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(Ae=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(Ae=O.instanceColor)),ce===void 0||ce.attribute!==Ae||Ae&&ce.data!==Ae.data)return!0;z++}return r.attributesNum!==z||r.index!==B}function m(O,U,q,B){let J={},H=U.attributes,z=0,he=q.getAttributes();for(let Y in he)if(he[Y].location>=0){let ce=H[Y];ce===void 0&&(Y==="instanceMatrix"&&O.instanceMatrix&&(ce=O.instanceMatrix),Y==="instanceColor"&&O.instanceColor&&(ce=O.instanceColor));let Ae={};Ae.attribute=ce,ce&&ce.data&&(Ae.data=ce.data),J[Y]=Ae,z++}r.attributes=J,r.attributesNum=z,r.index=B}function M(){let O=r.newAttributes;for(let U=0,q=O.length;U<q;U++)O[U]=0}function p(O){g(O,0)}function g(O,U){let q=r.newAttributes,B=r.enabledAttributes,J=r.attributeDivisors;q[O]=1,B[O]===0&&(i.enableVertexAttribArray(O),B[O]=1),J[O]!==U&&(i.vertexAttribDivisor(O,U),J[O]=U)}function y(){let O=r.newAttributes,U=r.enabledAttributes;for(let q=0,B=U.length;q<B;q++)U[q]!==O[q]&&(i.disableVertexAttribArray(q),U[q]=0)}function E(O,U,q,B,J,H,z){z===!0?i.vertexAttribIPointer(O,U,q,J,H):i.vertexAttribPointer(O,U,q,B,J,H)}function x(O,U,q,B){M();let J=B.attributes,H=q.getAttributes(),z=U.defaultAttributeValues;for(let he in H){let Y=H[he];if(Y.location>=0){let Q=J[he];if(Q===void 0&&(he==="instanceMatrix"&&O.instanceMatrix&&(Q=O.instanceMatrix),he==="instanceColor"&&O.instanceColor&&(Q=O.instanceColor)),Q!==void 0){let ce=Q.normalized,Ae=Q.itemSize,ke=e.get(Q);if(ke===void 0)continue;let P=ke.buffer,D=ke.type,X=ke.bytesPerElement,ue=D===i.INT||D===i.UNSIGNED_INT||Q.gpuType===Ho;if(Q.isInterleavedBufferAttribute){let ie=Q.data,_e=ie.isInterleavedBuffer===!0?ie.stride:ie.itemSize,Be=Q.offset;if(ie.isInstancedInterleavedBuffer||ie.isInstancedBufferAttribute){for(let pe=0;pe<Y.locationSize;pe++)g(Y.location+pe,ie.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let pe=0;pe<Y.locationSize;pe++)p(Y.location+pe);i.bindBuffer(i.ARRAY_BUFFER,P);for(let pe=0;pe<Y.locationSize;pe++)E(Y.location+pe,Ae/Y.locationSize,D,ce,_e*X,(Be+Ae/Y.locationSize*pe)*X,ue)}else{if(Q.isInstancedBufferAttribute){for(let ie=0;ie<Y.locationSize;ie++)g(Y.location+ie,Q.meshPerAttribute);O.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ie=0;ie<Y.locationSize;ie++)p(Y.location+ie);i.bindBuffer(i.ARRAY_BUFFER,P);for(let ie=0;ie<Y.locationSize;ie++)E(Y.location+ie,Ae/Y.locationSize,D,ce,Ae*X,Ae/Y.locationSize*ie*X,ue)}}else if(z!==void 0){let ce=z[he];if(ce!==void 0)switch(ce.length){case 2:i.vertexAttrib2fv(Y.location,ce);break;case 3:i.vertexAttrib3fv(Y.location,ce);break;case 4:i.vertexAttrib4fv(Y.location,ce);break;default:i.vertexAttrib1fv(Y.location,ce)}}}}y()}function T(){I();for(let O in n){let U=n[O];for(let q in U){let B=U[q];for(let J in B){let H=B[J];for(let z in H)h(H[z].object),delete H[z];delete B[J]}}delete n[O]}}function w(O){if(n[O.id]===void 0)return;let U=n[O.id];for(let q in U){let B=U[q];for(let J in B){let H=B[J];for(let z in H)h(H[z].object),delete H[z];delete B[J]}}delete n[O.id]}function _(O){for(let U in n){let q=n[U];for(let B in q){let J=q[B];if(J[O.id]===void 0)continue;let H=J[O.id];for(let z in H)h(H[z].object),delete H[z];delete J[O.id]}}}function S(O){for(let U in n){let q=n[U],B=O.isInstancedMesh===!0?O.id:0,J=q[B];if(J!==void 0){for(let H in J){let z=J[H];for(let he in z)h(z[he].object),delete z[he];delete J[H]}delete q[B],Object.keys(q).length===0&&delete n[U]}}}function I(){C(),o=!0,r!==s&&(r=s,l(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:I,resetDefaultState:C,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:M,enableAttribute:p,disableUnusedAttributes:y}}function zm(i,e,t){let n;function s(c){n=c}function r(c,l){i.drawArrays(n,c,l),t.update(l,n,1)}function o(c,l,h){h!==0&&(i.drawArraysInstanced(n,c,l,h),t.update(l,n,h))}function a(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,h);let u=0;for(let d=0;d<h;d++)u+=l[d];t.update(u,n,1)}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a}function km(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(_){return!(_!==Fn&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(_){let S=_===Un&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==dn&&_!==Nn&&!S&&n.convert(_)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(et("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=t.logarithmicDepthBuffer===!0&&f===!1;t.reversedDepthBuffer===!0&&f===!1&&et("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),t.logarithmicDepthBuffer===!0&&f===!0&&et("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),M=i.getParameter(i.MAX_TEXTURE_SIZE),p=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),y=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),T=i.getParameter(i.MAX_SAMPLES),w=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:M,maxCubemapSize:p,maxAttributes:g,maxVertexUniforms:y,maxVaryings:E,maxFragmentUniforms:x,maxSamples:T,samples:w}}function Hm(i){let e=this,t=null,n=0,s=!1,r=!1,o=new Rn,a=new st,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,u){let d=f.length!==0||u||n!==0||s;return s=u,n=f.length,d},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(f,u){t=h(f,u,0)},this.setState=function(f,u,d){let m=f.clippingPlanes,M=f.clipIntersection,p=f.clipShadows,g=i.get(f);if(!s||m===null||m.length===0||r&&!p)r?h(null):l();else{let y=r?0:n,E=y*4,x=g.clippingState||null;c.value=x,x=h(m,u,E,d);for(let T=0;T!==E;++T)x[T]=t[T];g.clippingState=x,this.numIntersection=M?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(f,u,d,m){let M=f!==null?f.length:0,p=null;if(M!==0){if(p=c.value,m!==!0||p===null){let g=d+M*4,y=u.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<g)&&(p=new Float32Array(g));for(let E=0,x=d;E!==M;++E,x+=4)o.copy(f[E]).applyMatrix4(y,a),o.normal.toArray(p,x),p[x+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=M,e.numIntersection=0,p}}var wr=class extends mn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Js(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new In(5,5,5),r=new Gn({name:"CubemapFromEquirect",uniforms:Yi(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:ln,blending:Gi});r.uniforms.tEquirect.value=t;let o=new Xe(s,r),a=t.minFilter;return t.minFilter===ri&&(t.minFilter=on),new Ss(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){let r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}},kh=256,Gm=3,Vm=20,cu=256,hu=16,Wm=3,Xm=new F,qm=new ht,Ta=class i{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Ss(1,10,null),this._boxMesh=new Xe(new In(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){let{size:o=256,position:a=Xm}=r,c=this._renderer;this._setSize(o);let l=this._allocateTarget(),h=this._getSourceTarget(!0);t>0&&(h.texture.mipmapsAutoUpdate=!1);let f=c.autoClear,u=c.autoClearColor,d=c.autoClearDepth,m=c.autoClearStencil,M=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,M===null&&(e.background=c.getClearColor(qm));let p=new Ss(n,s,h);return p.position.copy(a),p.update(c,e),c.autoClear=f,c.autoClearColor=u,c.autoClearDepth=d,c.autoClearStencil=m,e.background=M,t>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,t)),this._applyPMREM(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Vh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Gh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,t){return t>0?1-Math.sqrt(1-e/t):0}_setSize(e){this._cubeSize=Math.max(kh,Vl(e))}_fromTexture(e,t){e.mapping===Wi||e.mapping===ws?this._setSize(e.image.length===0?kh:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let n=t||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(n),n}_allocateTarget(){let e=this._cubeSize,t=Hh(e,!1,!1),n=Math.log2(e)-Gm;for(let s=0;s<=n;s++)t.texture.mipmaps.push({width:e>>s,height:e>>s});return t.texture.name="PMREM",t.texture.isPMREMTexture=!0,t}_getSourceTarget(e=!1){let t=this._cubeSize,n=this._sourceTarget;return(n===null||n.width!==t||e&&n.depthBuffer===!1)&&(n!==null&&n.dispose(),this._sourceTarget=Hh(t,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,t,n){let s=this._boxMesh,r=this._cubeCamera;s.material=n,r.renderTarget=e,r.activeMipmapLevel=t;let o=e.width>>t;e.viewport.set(0,0,o,o),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let t;e.mapping===Wi||e.mapping===ws?(this._cubemapMaterial===null&&(this._cubemapMaterial=Vh()),t=this._cubemapMaterial,t.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Gh()),t=this._equirectMaterial),t.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,t)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=Ym(),this._integrationMaterial=Zm());let t=this._cubeSize,n=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(t/hu);for(let o=0;o<=n;o++){let a=i.lodToRoughness(o,n);if(o>n-Wm)r.roughness.value=a,this._renderCube(e,o,this._integrationMaterial);else{let c=a>0?Math.log2(t)+.5*Math.log2(6/(cu*Math.pow(a,4)))+.5:0;s.roughness.value=a,s.lodBias.value=c,this._renderCube(e,o,this._ggxMaterial)}}}_blur(e,t){this._blurMaterial===null&&(this._blurMaterial=Jm());let n=this._blurMaterial,s=n.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(t,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,n),s.envMap.value=e.texture,this._renderCube(r,0,n)}};function Hh(i,e,t){return new wr(i,{minFilter:ri,generateMipmaps:e,type:Un,colorSpace:Hs,depthBuffer:t})}function Tr(i,e,t){return new Gn({name:i,uniforms:e,vertexShader:ut.cube_vert,fragmentShader:t,side:ln,blending:Gi,depthTest:!1,depthWrite:!1})}function Ym(){return Tr("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${cu}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Zm(){return Tr("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:hu}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function Jm(){return Tr("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Vm}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function Gh(){return Tr("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function Vh(){return Tr("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function $m(i){let e=new WeakMap,t=new WeakMap,n=null;function s(u,d=!1){return u==null?null:d?o(u):r(u)}function r(u){if(u&&u.isTexture){let d=u.mapping;if(d===Bo||d===zo)if(e.has(u)){let m=e.get(u).texture;return a(m,u.mapping)}else{let m=u.image;if(m&&m.height>0){let M=new wr(m.height);return M.fromEquirectangularTexture(i,u),e.set(u,M),u.addEventListener("dispose",l),a(M.texture,u.mapping)}else return null}}return u}function o(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let d=u.mapping,m=d===Bo||d===zo,M=d===Wi||d===ws;if(m||M){let p=t.get(u),g=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==g)return n===null&&(n=new Ta(i)),p=m?n.fromEquirectangular(u,p):n.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let y=u.image;return m&&y&&y.height>0||M&&y&&c(y)?(n===null&&(n=new Ta(i)),p=m?n.fromEquirectangular(u):n.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function a(u,d){return d===Bo?u.mapping=Wi:d===zo&&(u.mapping=ws),u}function c(u){let d=0,m=6;for(let M=0;M<m;M++)u[M]!==void 0&&d++;return d===m}function l(u){let d=u.target;d.removeEventListener("dispose",l);let m=e.get(d);m!==void 0&&(e.delete(d),m.dispose())}function h(u){let d=u.target;d.removeEventListener("dispose",h);let m=t.get(d);m!==void 0&&(t.delete(d),m.dispose())}function f(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:f}}function Km(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&Us("WebGLRenderer: "+n+" extension not supported."),s}}}function jm(i,e,t,n){let s={},r=new WeakMap,o=new FinalizationRegistry(m=>delete s[m]);function a(m){c(m.target)}function c(m){m.index!==null&&e.remove(m.index);for(let p in m.attributes)e.remove(m.attributes[p]);m.removeEventListener("dispose",a),delete s[m.id],o.unregister(m);let M=r.get(m);M&&(e.remove(M),r.delete(m)),n.releaseStatesOfGeometry(m),m.isInstancedBufferGeometry===!0&&delete m._maxInstanceCount,t.memory.geometries--}function l(m,M){return s[M.id]!==void 0||(M.addEventListener("dispose",a),s[M.id]=new WeakRef(M),o.register(M,M.id,M),t.memory.geometries++),M}function h(m){let M=m.attributes;for(let p in M)e.update(M[p],i.ARRAY_BUFFER)}function f(m){let M=m.index,p=m.attributes.position,g=0;if(p===void 0)return;let y=M!==null?M.array.length:p.array.length/3-1,E=p.count>=65535?Ys:qs,x=new E(Math.ceil(y/3)*6,1),T=x.array;if(M!==null){let _=M.array;g=M.version;for(let S=0,I=0;S<y;S+=3){let C=_[S+0],O=_[S+1],U=_[S+2];T[I++]=C,T[I++]=O,T[I++]=O,T[I++]=U,T[I++]=U,T[I++]=C}}else{g=p.version;for(let _=0,S=0;_<y;_+=3){let I=_+0,C=_+1,O=_+2;T[S++]=I,T[S++]=C,T[S++]=C,T[S++]=O,T[S++]=O,T[S++]=I}}x.version=g;let w=r.get(m);w&&e.remove(w),r.set(m,x)}function u(m){let M=r.get(m);if(M){let p=m.index;p!==null&&M.version<p.version&&f(m)}else f(m);return r.get(m)}function d(){for(let m in s){let M=s[m].deref();M!==void 0&&c(M)}}return{get:l,update:h,getWireframeAttribute:u,dispose:d}}function Qm(i,e,t){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function c(f,u){i.drawElements(n,u,r,f*o),t.update(u,n,1)}function l(f,u,d){d!==0&&(i.drawElementsInstanced(n,u,r,f*o,d),t.update(u,n,d))}function h(f,u,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,d);let M=0;for(let p=0;p<d;p++)M+=u[p];t.update(M,n,1)}this.setMode=s,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function eg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:nt("WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function tg(i,e,t){let n=new WeakMap,s=new Dt;function r(o,a,c){let l=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=h!==void 0?h.length:0,u=n.get(a);if(u===void 0||u.count!==f){let I=function(){_.dispose(),n.delete(a),a.removeEventListener("dispose",I)};u!==void 0&&u.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,M=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],E=0;d===!0&&(E=1),m===!0&&(E=2),M===!0&&(E=3);let x=a.attributes.position.count*E,T=1;x>e.maxTextureSize&&(T=Math.ceil(x/e.maxTextureSize),x=e.maxTextureSize);let w=new Float32Array(x*T*4*f),_=new Ws(w,x,T,f);_.type=Nn,_.needsUpdate=!0;let S=E*4;for(let C=0;C<f;C++){let O=p[C],U=g[C],q=y[C],B=x*T*4*C;for(let J=0;J<O.count;J++){let H=J*S;d===!0&&(s.fromBufferAttribute(O,J),w[B+H+0]=s.x,w[B+H+1]=s.y,w[B+H+2]=s.z,w[B+H+3]=0),m===!0&&(s.fromBufferAttribute(U,J),w[B+H+4]=s.x,w[B+H+5]=s.y,w[B+H+6]=s.z,w[B+H+7]=0),M===!0&&(s.fromBufferAttribute(q,J),w[B+H+8]=s.x,w[B+H+9]=s.y,w[B+H+10]=s.z,w[B+H+11]=q.itemSize===4?s.w:1)}}u={count:f,texture:_,size:new Le(x,T)},n.set(a,u),a.addEventListener("dispose",I)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let d=0;for(let M=0;M<l.length;M++)d+=l[M];let m=a.morphTargetsRelative?1:1-d;c.getUniforms().setValue(i,"morphTargetBaseInfluence",m),c.getUniforms().setValue(i,"morphTargetInfluences",l)}c.getUniforms().setValue(i,"morphTargetsTexture",u.texture,t),c.getUniforms().setValue(i,"morphTargetsTextureSize",u.size)}return{update:r}}function ng(i,e,t,n,s){let r=new WeakMap;function o(l){let h=s.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let d=l.skeleton;r.get(d)!==h&&(d.update(),r.set(d,h))}return u}function a(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:o,dispose:a}}var ig={[bl]:"LINEAR_TONE_MAPPING",[El]:"REINHARD_TONE_MAPPING",[wl]:"CINEON_TONE_MAPPING",[mr]:"ACES_FILMIC_TONE_MAPPING",[Al]:"AGX_TONE_MAPPING",[Rl]:"NEUTRAL_TONE_MAPPING",[Tl]:"CUSTOM_TONE_MAPPING"};function sg(i,e,t,n,s,r){let o=new mn(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),a=null,c=null,l=null,h=new Bt;h.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new lt([0,2,0,0,2,0],2));let f=new bo({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Xe(h,f),d=new fr(-1,1,1,-1,0,1),m=null,M=null,p=!1,g,y=null,E=[],x=!1;this.setSize=function(T,w){o.setSize(T,w),a!==null&&a.setSize(T,w),c!==null&&c.setSize(T,w);for(let _=0;_<E.length;_++){let S=E[_];S.setSize&&S.setSize(T,w)}},this.setEffects=function(T){E=T,x=E.length>0&&E[0].isRenderPass===!0;let w=o.width,_=o.height;E.length>0&&a===null&&(a=new mn(w,_,{type:Un,depthBuffer:!1,stencilBuffer:!1}),c=new mn(w,_,{type:Un,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&E.some(I=>I.needsDepthTexture===!0);S!==(o.depthTexture!==null)&&(S===!0&&l===null&&(l=new ii(w,_),r===!0&&(l.format=oi,l.type=Xi)),o.dispose(),o.depthTexture=S?l:null,o.resolveDepthBuffer=S,o.storeMultisampledDepthBuffer=S);for(let I=0;I<E.length;I++){let C=E[I];C.setSize&&C.setSize(w,_),S&&C.needsDepthTexture===!0&&C.setDepthTexture&&C.setDepthTexture(l)}},this.begin=function(T,w){if(p||T.toneMapping===Vn&&E.length===0)return!1;if(y=w,w!==null){let _=w.width,S=w.height;(o.width!==_||o.height!==S)&&this.setSize(_,S)}return x===!1&&T.setRenderTarget(o),g=T.toneMapping,T.toneMapping=Vn,!0},this.hasRenderPass=function(){return x},this.end=function(T,w){T.toneMapping=g,p=!0;let _=o,S=a;for(let I=0;I<E.length;I++){let C=E[I];C.enabled!==!1&&(C.render(T,S,_,w),C.needsSwap!==!1&&(_=S,S=S===a?c:a))}if(m!==T.outputColorSpace||M!==T.toneMapping){m=T.outputColorSpace,M=T.toneMapping,f.defines={},_t.getTransfer(m)===Et&&(f.defines.SRGB_TRANSFER="");let I=ig[M];I&&(f.defines[I]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=_.texture,T.setRenderTarget(y),T.render(u,d),y=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){o.dispose(),a!==null&&a.dispose(),c!==null&&c.dispose(),h.dispose(),f.dispose()}}var uu=new an,du=new ii(1,1),fu=new Ks(1),pu=new Ws,mu=new po,gu=new Js,Wh=[],Xh=[],qh=new Float32Array(16),Yh=new Float32Array(9),Zh=new Float32Array(4);function Rs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Wh[s];if(r===void 0&&(r=new Float32Array(s),Wh[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function Vt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Wt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ra(i,e){let t=Xh[e];t===void 0&&(t=new Int32Array(e),Xh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function rg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function og(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2fv(this.addr,e),Wt(t,e)}}function ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Vt(t,e))return;i.uniform3fv(this.addr,e),Wt(t,e)}}function lg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4fv(this.addr,e),Wt(t,e)}}function cg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Zh.set(n),i.uniformMatrix2fv(this.addr,!1,Zh),Wt(t,n)}}function hg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;Yh.set(n),i.uniformMatrix3fv(this.addr,!1,Yh),Wt(t,n)}}function ug(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Vt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Wt(t,e)}else{if(Vt(t,n))return;qh.set(n),i.uniformMatrix4fv(this.addr,!1,qh),Wt(t,n)}}function dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2iv(this.addr,e),Wt(t,e)}}function pg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3iv(this.addr,e),Wt(t,e)}}function mg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4iv(this.addr,e),Wt(t,e)}}function gg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function _g(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Vt(t,e))return;i.uniform2uiv(this.addr,e),Wt(t,e)}}function xg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Vt(t,e))return;i.uniform3uiv(this.addr,e),Wt(t,e)}}function yg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Vt(t,e))return;i.uniform4uiv(this.addr,e),Wt(t,e)}}function Ca(i){return i.version===0&&(i.compareFunction=zl,i.needsUpdate=!0),i}function vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?r=Ca(du):r=uu,t.setTexture2D(e||r,s)}function Mg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||mu,s)}function Sg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_CUBE_SHADOW?r=Ca(fu):r=gu,t.setTextureCube(e||r,s)}function bg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||pu,s)}function Eg(i){switch(i){case 5126:return rg;case 35664:return og;case 35665:return ag;case 35666:return lg;case 35674:return cg;case 35675:return hg;case 35676:return ug;case 5124:case 35670:return dg;case 35667:case 35671:return fg;case 35668:case 35672:return pg;case 35669:case 35673:return mg;case 5125:return gg;case 36294:return _g;case 36295:return xg;case 36296:return yg;case 35678:case 36198:case 36298:case 36306:case 35682:return vg;case 35679:case 36299:case 36307:return Mg;case 35680:case 36300:case 36308:case 36293:return Sg;case 36289:case 36303:case 36311:case 36292:return bg}}function wg(i,e){i.uniform1fv(this.addr,e)}function Tg(i,e){let t=Rs(e,this.size,2);i.uniform2fv(this.addr,t)}function Ag(i,e){let t=Rs(e,this.size,3);i.uniform3fv(this.addr,t)}function Rg(i,e){let t=Rs(e,this.size,4);i.uniform4fv(this.addr,t)}function Cg(i,e){let t=Rs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Ig(i,e){let t=Rs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Pg(i,e){let t=Rs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Lg(i,e){i.uniform1iv(this.addr,e)}function Dg(i,e){i.uniform2iv(this.addr,e)}function Ng(i,e){i.uniform3iv(this.addr,e)}function Ug(i,e){i.uniform4iv(this.addr,e)}function Fg(i,e){i.uniform1uiv(this.addr,e)}function Og(i,e){i.uniform2uiv(this.addr,e)}function Bg(i,e){i.uniform3uiv(this.addr,e)}function zg(i,e){i.uniform4uiv(this.addr,e)}function kg(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));let o;this.type===i.SAMPLER_2D_SHADOW?o=Ca(du):o=uu;for(let a=0;a!==s;++a)t.setTexture2D(e[a]||o,r[a])}function Hg(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||mu,r[o])}function Gg(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));let o;this.type===i.SAMPLER_CUBE_SHADOW?o=Ca(fu):o=gu;for(let a=0;a!==s;++a)t.setTextureCube(e[a]||o,r[a])}function Vg(i,e,t){let n=this.cache,s=e.length,r=Ra(t,s);Vt(n,r)||(i.uniform1iv(this.addr,r),Wt(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||pu,r[o])}function Wg(i){switch(i){case 5126:return wg;case 35664:return Tg;case 35665:return Ag;case 35666:return Rg;case 35674:return Cg;case 35675:return Ig;case 35676:return Pg;case 5124:case 35670:return Lg;case 35667:case 35671:return Dg;case 35668:case 35672:return Ng;case 35669:case 35673:return Ug;case 5125:return Fg;case 36294:return Og;case 36295:return Bg;case 36296:return zg;case 35678:case 36198:case 36298:case 36306:case 35682:return kg;case 35679:case 36299:case 36307:return Hg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Vg}}var ic=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Eg(t.type)}},sc=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Wg(t.type)}},rc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,o=s.length;r!==o;++r){let a=s[r];a.setValue(e,t[a.id],n)}}},tc=/(\w+)(\])?(\[|\.)?/g;function Jh(i,e){i.seq.push(e),i.map[e.id]=e}function Xg(i,e,t){let n=i.name,s=n.length;for(tc.lastIndex=0;;){let r=tc.exec(n),o=tc.lastIndex,a=r[1],c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===s){Jh(t,l===void 0?new ic(a,i,e):new sc(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new rc(a),Jh(t,f)),t=f}}}var As=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),c=e.getUniformLocation(t,a.name);Xg(a,c,this)}let s=[],r=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(o):r.push(o);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){let a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let o=e[s];o.id in t&&n.push(o)}return n}};function $h(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var qg=37297,Yg=0;function Zg(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Kh=new st;function Jg(i){_t._getMatrix(Kh,_t.workingColorSpace,i);let e=`mat3( ${Kh.elements.map(t=>t.toFixed(4))} )`;switch(_t.getTransfer(i)){case Gs:return[e,"LinearTransferOETF"];case Et:return[e,"sRGBTransferOETF"];default:return et("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function jh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";let o=/ERROR: 0:(\d+)/.exec(r);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+r+`

`+Zg(i.getShaderSource(e),a)}else return r}function $g(i,e){let t=Jg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( ${t[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}var Kg={[bl]:"Linear",[El]:"Reinhard",[wl]:"Cineon",[mr]:"ACESFilmic",[Al]:"AgX",[Rl]:"Neutral",[Tl]:"Custom"};function jg(i,e){let t=Kg[e];return t===void 0?(et("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var wa=new F;function Qg(){_t.getLuminanceCoefficients(wa);let i=wa.x.toFixed(4),e=wa.y.toFixed(4),t=wa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function e0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Er).join(`
`)}function t0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function n0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),o=r.name,a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function Er(i){return i!==""}function Qh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function eu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var i0=/^[ \t]*#include +<([\w\d./]+)>/gm;function oc(i){return i.replace(i0,s0)}function s0(i,e){let t=ut[e];if(t===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return oc(t)}var r0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function tu(i){return i.replace(r0,o0)}function o0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function nu(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var a0={[Hi]:"SHADOWMAP_TYPE_PCF",[bs]:"SHADOWMAP_TYPE_VSM"};function l0(i){return a0[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var c0={[ws]:"ENVMAP_MODE_REFRACTION"};function h0(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":c0[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}var u0={[Sl]:"ENVMAP_BLENDING_MULTIPLY",[ph]:"ENVMAP_BLENDING_MIX",[mh]:"ENVMAP_BLENDING_ADD"};function d0(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":u0[i.combine]||"ENVMAP_BLENDING_NONE"}function f0(i,e,t,n){let s=i.getContext(),r=t.defines,o=t.vertexShader,a=t.fragmentShader,c=l0(t),l=t.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=h0(t),f=d0(t),u=e0(t),d=t0(r),m=s.createProgram(),M,p,g=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(M=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Er).join(`
`),M.length>0&&(M+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d].filter(Er).join(`
`),p.length>0&&(p+=`
`)):(M=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+t.diffuseRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Er).join(`
`),p=[nu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,d,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+f:"",t.envMapPMREM?"#define ENVMAP_MAX_LOD "+t.envMapMaxLod+".0":"",t.envMapPMREM?"#define ENVMAP_SIZE "+t.envMapSize+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",t.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?ut.tonemapping_pars_fragment:"",t.toneMapping!==Vn?jg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ut.colorspace_pars_fragment,$g("linearToOutputTexel",t.outputColorSpace),Qg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Er).join(`
`)),o=oc(o),o=Qh(o,t),o=eu(o,t),a=oc(a),a=Qh(a,t),a=eu(a,t),o=tu(o),a=tu(a),t.isRawShaderMaterial!==!0&&(g=`#version 300 es
`,M=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+M,p=["#define varying in",t.glslVersion===kl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===kl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=g+M+o,E=g+p+a,x=$h(s,s.VERTEX_SHADER,y),T=$h(s,s.FRAGMENT_SHADER,E);s.attachShader(m,x),s.attachShader(m,T),t.index0AttributeName!==void 0?s.bindAttribLocation(m,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(m,0,"position"),s.linkProgram(m);function w(C){if(i.debug.checkShaderErrors){let O=s.getProgramInfoLog(m)||"",U=s.getShaderInfoLog(x)||"",q=s.getShaderInfoLog(T)||"",B=O.trim(),J=U.trim(),H=q.trim(),z=!0,he=!0;if(s.getProgramParameter(m,s.LINK_STATUS)===!1)if(z=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,m,x,T);else{let Y=jh(s,x,"vertex"),Q=jh(s,T,"fragment");nt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(m,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+B+`
`+Y+`
`+Q)}else B!==""?et("WebGLProgram: Program Info Log:",B):(J===""||H==="")&&(he=!1);he&&(C.diagnostics={runnable:z,programLog:B,vertexShader:{log:J,prefix:M},fragmentShader:{log:H,prefix:p}})}s.deleteShader(x),s.deleteShader(T),_=new As(s,m),S=n0(s,m)}let _;this.getUniforms=function(){return _===void 0&&w(this),_};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=s.getProgramParameter(m,qg)),I},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Yg++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=x,this.fragmentShader=T,this}var p0=0,ac=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){let s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new lc(e),t.set(e,n)),n}},lc=class{constructor(e){this.id=p0++,this.code=e,this.usedTimes=0}};function m0(i){return i===wi||i===Mr||i===Sr}function g0(i,e,t,n,s,r){let o=new fs,a=new ac,c=new Set,l=[],h=new Map,f=n.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function d(_){return c.add(_),_===0?"uv":`uv${_}`}function m(_,S,I,C,O,U){let q=C.fog,B=O.geometry,J=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?C.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,z=e.get(_.envMap||J,H),he=u[_.type],Y=n.precision;_.precision!==null&&(Y=n.getMaxPrecision(_.precision),Y!==_.precision&&et("WebGLProgram.getParameters:",_.precision,"not supported, using",Y,"instead."));let Q=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,ce=Q!==void 0?Q.length:0,Ae=0;B.morphAttributes.position!==void 0&&(Ae=1),B.morphAttributes.normal!==void 0&&(Ae=2),B.morphAttributes.color!==void 0&&(Ae=3);let ke,P,D,X;if(he){let xe=Xn[he];ke=xe.vertexShader,P=xe.fragmentShader}else{ke=_.vertexShader,P=_.fragmentShader;let xe=a.getVertexShaderStage(_),je=a.getFragmentShaderStage(_);a.update(_,xe,je),D=xe.id,X=je.id}let ue=i.getRenderTarget(),ie=i.state.buffers.depth.getReversed(),_e=O.isInstancedMesh===!0,Be=O.isBatchedMesh===!0,pe=!!_.map,ye=!!_.matcap,Ee=!!z,j=Ee&&z.isPMREMTexture===!0,be=!!_.aoMap,Se=!!_.lightMap,Ue=!!_.bumpMap&&_.wireframe===!1,Ce=!!_.normalMap,tt=!!_.displacementMap,Ve=!!_.emissiveMap,Qe=!!_.metalnessMap,it=!!_.roughnessMap,dt=_.anisotropy>0,G=_.clearcoat>0,ct=_.diffuseRoughness>0,ot=_.dispersion>0,at=_.retroreflectivity>0,Ie=_.iridescence>0,wt=_.sheen>0,We=_.transmission>0,Je=dt&&!!_.anisotropyMap,R=G&&!!_.clearcoatMap,v=G&&!!_.clearcoatNormalMap,Z=G&&!!_.clearcoatRoughnessMap,ve=ct&&!!_.diffuseRoughnessMap,fe=Ie&&!!_.iridescenceMap,Me=Ie&&!!_.iridescenceThicknessMap,Te=wt&&!!_.sheenColorMap,oe=wt&&!!_.sheenRoughnessMap,ae=!!_.specularMap,we=!!_.specularColorMap,L=!!_.specularIntensityMap,le=We&&!!_.transmissionMap,se=We&&!!_.thicknessMap,A=!!_.gradientMap,k=!!_.alphaMap,W=_.alphaTest>0,me=!!_.alphaHash,Ne=!!_.extensions,re=Vn;_.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(re=i.toneMapping);let Pe=j?z.isCompressedCubeTexture?z.image[0].mipmaps:z.mipmaps:null,ne={shaderID:he,shaderType:_.type,shaderName:_.name,vertexShader:ke,fragmentShader:P,defines:_.defines,customVertexShaderID:D,customFragmentShaderID:X,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:Y,batching:Be,batchingColor:Be&&O._colorsTexture!==null,instancing:_e,instancingColor:_e&&O.instanceColor!==null,instancingMorph:_e&&O.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:_t.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:pe,matcap:ye,envMap:Ee,envMapMode:Ee&&z.mapping,envMapPMREM:j,envMapMaxLod:j?Pe.length-1:null,envMapSize:j?Pe[0].width:null,aoMap:be,lightMap:Se,bumpMap:Ue,normalMap:Ce,displacementMap:tt,emissiveMap:Ve,normalMapObjectSpace:Ce&&_.normalMapType===xh,normalMapTangentSpace:Ce&&_.normalMapType===ba,packedNormalMap:Ce&&_.normalMapType===ba&&m0(_.normalMap.format),metalnessMap:Qe,roughnessMap:it,anisotropy:dt,anisotropyMap:Je,clearcoat:G,clearcoatMap:R,clearcoatNormalMap:v,clearcoatRoughnessMap:Z,diffuseRoughness:ct,diffuseRoughnessMap:ve,dispersion:ot,retroreflection:at,iridescence:Ie,iridescenceMap:fe,iridescenceThicknessMap:Me,sheen:wt,sheenColorMap:Te,sheenRoughnessMap:oe,specularMap:ae,specularColorMap:we,specularIntensityMap:L,transmission:We,transmissionMap:le,thicknessMap:se,gradientMap:A,opaque:_.transparent===!1&&_.blending===Es&&_.alphaToCoverage===!1,alphaMap:k,alphaTest:W,alphaHash:me,combine:_.combine,mapUv:pe&&d(_.map.channel),aoMapUv:be&&d(_.aoMap.channel),lightMapUv:Se&&d(_.lightMap.channel),bumpMapUv:Ue&&d(_.bumpMap.channel),normalMapUv:Ce&&d(_.normalMap.channel),displacementMapUv:tt&&d(_.displacementMap.channel),emissiveMapUv:Ve&&d(_.emissiveMap.channel),metalnessMapUv:Qe&&d(_.metalnessMap.channel),roughnessMapUv:it&&d(_.roughnessMap.channel),anisotropyMapUv:Je&&d(_.anisotropyMap.channel),clearcoatMapUv:R&&d(_.clearcoatMap.channel),clearcoatNormalMapUv:v&&d(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Z&&d(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ve&&d(_.diffuseRoughnessMap.channel),iridescenceMapUv:fe&&d(_.iridescenceMap.channel),iridescenceThicknessMapUv:Me&&d(_.iridescenceThicknessMap.channel),sheenColorMapUv:Te&&d(_.sheenColorMap.channel),sheenRoughnessMapUv:oe&&d(_.sheenRoughnessMap.channel),specularMapUv:ae&&d(_.specularMap.channel),specularColorMapUv:we&&d(_.specularColorMap.channel),specularIntensityMapUv:L&&d(_.specularIntensityMap.channel),transmissionMapUv:le&&d(_.transmissionMap.channel),thicknessMapUv:se&&d(_.thicknessMap.channel),alphaMapUv:k&&d(_.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(Ce||dt),vertexNormals:!!B.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!B.attributes.uv&&(pe||k),fog:!!q,useFog:_.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||B.attributes.normal===void 0&&Ce===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ie,skinning:O.isSkinnedMesh===!0,hasPositionAttribute:B.attributes.position!==void 0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:ce,morphTextureStride:Ae,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:U.filter(xe=>xe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:re,decodeVideoTexture:pe&&_.map.isVideoTexture===!0&&_t.getTransfer(_.map.colorSpace)===Et,decodeVideoTextureEmissive:Ve&&_.emissiveMap.isVideoTexture===!0&&_t.getTransfer(_.emissiveMap.colorSpace)===Et,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===un,flipSided:_.side===ln,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ne&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ne&&_.extensions.multiDraw===!0||Be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ne.vertexUv1s=c.has(1),ne.vertexUv2s=c.has(2),ne.vertexUv3s=c.has(3),c.clear(),ne}function M(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let I in _.defines)S.push(I),S.push(_.defines[I]);return _.isRawShaderMaterial===!1&&(p(S,_),g(S,_),S.push(i.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function p(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function g(_,S){o.disableAll(),S.instancing&&o.enable(0),S.instancingColor&&o.enable(1),S.instancingMorph&&o.enable(2),S.matcap&&o.enable(3),S.envMap&&o.enable(4),S.normalMapObjectSpace&&o.enable(5),S.normalMapTangentSpace&&o.enable(6),S.clearcoat&&o.enable(7),S.iridescence&&o.enable(8),S.alphaTest&&o.enable(9),S.vertexColors&&o.enable(10),S.vertexAlphas&&o.enable(11),S.vertexUv1s&&o.enable(12),S.vertexUv2s&&o.enable(13),S.vertexUv3s&&o.enable(14),S.vertexTangents&&o.enable(15),S.anisotropy&&o.enable(16),S.alphaHash&&o.enable(17),S.batching&&o.enable(18),S.dispersion&&o.enable(19),S.retroreflection&&o.enable(24),S.diffuseRoughness&&o.enable(25),S.batchingColor&&o.enable(20),S.gradientMap&&o.enable(21),S.packedNormalMap&&o.enable(22),S.vertexNormals&&o.enable(23),_.push(o.mask),o.disableAll(),S.fog&&o.enable(0),S.useFog&&o.enable(1),S.flatShading&&o.enable(2),S.logarithmicDepthBuffer&&o.enable(3),S.reversedDepthBuffer&&o.enable(4),S.skinning&&o.enable(5),S.morphTargets&&o.enable(6),S.morphNormals&&o.enable(7),S.morphColors&&o.enable(8),S.premultipliedAlpha&&o.enable(9),S.shadowMapEnabled&&o.enable(10),S.doubleSided&&o.enable(11),S.flipSided&&o.enable(12),S.useDepthPacking&&o.enable(13),S.dithering&&o.enable(14),S.transmission&&o.enable(15),S.sheen&&o.enable(16),S.opaque&&o.enable(17),S.pointsUvs&&o.enable(18),S.decodeVideoTexture&&o.enable(19),S.decodeVideoTextureEmissive&&o.enable(20),S.alphaToCoverage&&o.enable(21),S.numLightProbeGrids>0&&o.enable(22),S.hasPositionAttribute&&o.enable(23),_.push(o.mask)}function y(_){let S=u[_.type],I;if(S){let C=Xn[S];I=Oh.clone(C.uniforms)}else I=_.uniforms;return I}function E(_,S){let I=h.get(S);return I!==void 0?++I.usedTimes:(I=new f0(i,S,_,s),l.push(I),h.set(S,I)),I}function x(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function T(_){a.remove(_)}function w(){a.dispose()}return{getParameters:m,getProgramCacheKey:M,getUniforms:y,acquireProgram:E,releaseProgram:x,releaseShaderCache:T,programs:l,dispose:w}}function _0(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,c){i.get(o)[a]=c}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function x0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function iu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function su(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u){let d=0;return u.isInstancedMesh&&(d+=2),u.isSkinnedMesh&&(d+=1),d}function a(u,d,m,M,p,g){let y=i[e];return y===void 0?(y={id:u.id,object:u,geometry:d,material:m,materialVariant:o(u),groupOrder:M,renderOrder:u.renderOrder,z:p,group:g},i[e]=y):(y.id=u.id,y.object=u,y.geometry=d,y.material=m,y.materialVariant=o(u),y.groupOrder=M,y.renderOrder=u.renderOrder,y.z=p,y.group=g),e++,y}function c(u,d,m,M,p,g,y){y.reversedDepth===!0&&(p=-p);let E=a(u,d,m,M,p,g);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):t.push(E)}function l(u,d,m,M,p,g){let y=a(u,d,m,M,p,g);m.transmission>0?n.unshift(y):m.transparent===!0?s.unshift(y):t.unshift(y)}function h(u,d){t.length>1&&t.sort(u||x0),n.length>1&&n.sort(d||iu),s.length>1&&s.sort(d||iu)}function f(){for(let u=e,d=i.length;u<d;u++){let m=i[u];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:c,unshift:l,finish:f,sort:h}}function y0(){let i=new WeakMap;function e(n,s){let r=i.get(n),o;return r===void 0?(o=new su,i.set(n,[o])):s>=r.length?(o=new su,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function v0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new F,color:new ht};break;case"SpotLight":t={position:new F,direction:new F,color:new ht,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new ht,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new ht,groundColor:new ht};break;case"RectAreaLight":t={color:new ht,position:new F,halfWidth:new F,halfHeight:new F};break}return i[e.id]=t,t}}}function M0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var S0=0;function b0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function E0(i){let e=new v0,t=M0(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new F);let s=new F,r=new It,o=new It;function a(l){let h=0,f=0,u=0;for(let U=0;U<9;U++)n.probe[U].set(0,0,0);let d=0,m=0,M=0,p=0,g=0,y=0,E=0,x=0,T=0,w=0,_=0,S=0,I=0,C=0;l.sort(b0);for(let U=0,q=l.length;U<q;U++){let B=l[U],J=B.color,H=B.intensity,z=B.distance,he=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===wi?he=B.shadow.map.texture:he=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)h+=J.r*H,f+=J.g*H,u+=J.b*H;else if(B.isLightProbe){for(let Y=0;Y<9;Y++)n.probe[Y].addScaledVector(B.sh.coefficients[Y],H);C++}else if(B.isSunLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let Q=B.shadow,ce=t.get(B);ce.shadowIntensity=Q.intensity,ce.shadowBias=Q.bias,ce.shadowNormalBias=Q.normalBias,ce.shadowRadius=Q.radius,ce.shadowMapSize.copy(Q.mapSize).multiply(Q.getFrameExtents()),n.sunShadow[m]=ce,n.sunShadowMap[m]=he;let Ae=Q.getViewportCount();for(let ke=0;ke<Ae;ke++)n.sunShadowMatrix[M+ke]=Q.getMatrix(ke),n.sunShadowCascade[M+ke]=Q._cascadeData[ke];M+=Ae,m++}n.sun[d]=Y,d++}else if(B.isDirectionalLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){let Q=B.shadow,ce=t.get(B);ce.shadowIntensity=Q.intensity,ce.shadowBias=Q.bias,ce.shadowNormalBias=Q.normalBias,ce.shadowRadius=Q.radius,ce.shadowMapSize=Q.mapSize,n.directionalShadow[p]=ce,n.directionalShadowMap[p]=he,n.directionalShadowMatrix[p]=B.shadow.matrix,T++}n.directional[p]=Y,p++}else if(B.isSpotLight){let Y=e.get(B);Y.position.setFromMatrixPosition(B.matrixWorld),Y.color.copy(J).multiplyScalar(H),Y.distance=z,Y.coneCos=Math.cos(B.angle),Y.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),Y.decay=B.decay,n.spot[y]=Y;let Q=B.shadow;if(B.map&&(n.spotLightMap[S]=B.map,S++,Q.updateMatrices(B),B.castShadow&&I++),n.spotLightMatrix[y]=Q.matrix,B.castShadow){let ce=t.get(B);ce.shadowIntensity=Q.intensity,ce.shadowBias=Q.bias,ce.shadowNormalBias=Q.normalBias,ce.shadowRadius=Q.radius,ce.shadowMapSize=Q.mapSize,n.spotShadow[y]=ce,n.spotShadowMap[y]=he,_++}y++}else if(B.isRectAreaLight){let Y=e.get(B);Y.color.copy(J).multiplyScalar(H),Y.halfWidth.set(B.width*.5,0,0),Y.halfHeight.set(0,B.height*.5,0),n.rectArea[E]=Y,E++}else if(B.isPointLight){let Y=e.get(B);if(Y.color.copy(B.color).multiplyScalar(B.intensity),Y.distance=B.distance,Y.decay=B.decay,B.castShadow){let Q=B.shadow,ce=t.get(B);ce.shadowIntensity=Q.intensity,ce.shadowBias=Q.bias,ce.shadowNormalBias=Q.normalBias,ce.shadowRadius=Q.radius,ce.shadowMapSize=Q.mapSize,ce.shadowCameraNear=Q.camera.near,ce.shadowCameraFar=Q.camera.far,n.pointShadow[g]=ce,n.pointShadowMap[g]=he,n.pointShadowMatrix[g]=B.shadow.matrix,w++}n.point[g]=Y,g++}else if(B.isHemisphereLight){let Y=e.get(B);Y.skyColor.copy(B.color).multiplyScalar(H),Y.groundColor.copy(B.groundColor).multiplyScalar(H),n.hemi[x]=Y,x++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=f,n.ambient[2]=u;let O=n.hash;(O.sunLength!==d||O.directionalLength!==p||O.pointLength!==g||O.spotLength!==y||O.rectAreaLength!==E||O.hemiLength!==x||O.numSunShadows!==m||O.numDirectionalShadows!==T||O.numPointShadows!==w||O.numSpotShadows!==_||O.numSpotMaps!==S||O.numLightProbes!==C)&&(n.sun.length=d,n.directional.length=p,n.spot.length=y,n.rectArea.length=E,n.point.length=g,n.hemi.length=x,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=M,n.sunShadowCascade.length=M,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.directionalShadowMatrix.length=T,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=_,n.spotShadowMap.length=_,n.spotLightMatrix.length=_+S-I,n.spotLightMap.length=S,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=C,O.sunLength=d,O.directionalLength=p,O.pointLength=g,O.spotLength=y,O.rectAreaLength=E,O.hemiLength=x,O.numSunShadows=m,O.numDirectionalShadows=T,O.numPointShadows=w,O.numSpotShadows=_,O.numSpotMaps=S,O.numLightProbes=C,n.version=S0++)}function c(l,h){let f=0,u=0,d=0,m=0,M=0,p=0,g=h.matrixWorldInverse;for(let y=0,E=l.length;y<E;y++){let x=l[y];if(x.isSunLight){let T=n.sun[f];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),f++}else if(x.isDirectionalLight){let T=n.directional[u];T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),u++}else if(x.isSpotLight){let T=n.spot[m];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),T.direction.setFromMatrixPosition(x.matrixWorld),s.setFromMatrixPosition(x.target.matrixWorld),T.direction.sub(s),T.direction.transformDirection(g),m++}else if(x.isRectAreaLight){let T=n.rectArea[M];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),o.identity(),r.copy(x.matrixWorld),r.premultiply(g),o.extractRotation(r),T.halfWidth.set(x.width*.5,0,0),T.halfHeight.set(0,x.height*.5,0),T.halfWidth.applyMatrix4(o),T.halfHeight.applyMatrix4(o),M++}else if(x.isPointLight){let T=n.point[d];T.position.setFromMatrixPosition(x.matrixWorld),T.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){let T=n.hemi[p];T.direction.setFromMatrixPosition(x.matrixWorld),T.direction.transformDirection(g),p++}}}return{setup:a,setupView:c,state:n}}function ru(i){let e=new E0(i),t=[],n=[],s=[];function r(f){h.camera=f,t.length=0,n.length=0,s.length=0}function o(f){f.isLightProbeGrid?s.push(f):t.push(f)}function a(f){n.push(f)}function c(){e.setup(t),s.sort((f,u)=>f.priority-u.priority||f.id-u.id)}function l(f){e.setupView(t,f)}let h={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function w0(i){let e=new WeakMap;function t(s,r=0){let o=e.get(s),a;return o===void 0?(a=new ru(i),e.set(s,[a])):r>=o.length?(a=new ru(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var T0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,A0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,R0=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],C0=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],ou=new It,br=new F,nc=new F;function I0(i,e,t){let n=new _i,s=new Le,r=new Le,o=new Dt,a=new Eo,c=new wo,l={},h=t.maxTextureSize,f={[Ei]:ln,[ln]:Ei,[un]:un},u=new Gn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Le},radius:{value:4}},vertexShader:T0,fragmentShader:A0}),d=u.clone();d.defines.HORIZONTAL_PASS=1;let m=new Bt;m.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let M=new Xe(m,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Hi;let g=this.type;this.render=function(w,_,S){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||w.length===0)return;this.type===Jc&&(et("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Hi);let I=i.getRenderTarget(),C=i.getActiveCubeFace(),O=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Gi),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);let q=g!==this.type;q&&_.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(J=>J.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,J=w.length;B<J;B++){let H=w[B],z=H.shadow;if(z===void 0){et("WebGLShadowMap:",H,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);let he=z.getFrameExtents();s.multiply(he),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/he.x),s.x=r.x*he.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/he.y),s.y=r.y*he.y,z.mapSize.y=r.y));let Y=i.state.buffers.depth.getReversed();if(z.camera._reversedDepth=Y,z.map===null||q===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===bs){if(H.isPointLight){et("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new mn(s.x,s.y,{format:wi,type:Un,minFilter:on,magFilter:on,generateMipmaps:!1}),z.map.texture.name=H.name+".shadowMap",z.map.depthTexture=new ii(s.x,s.y,Nn),z.map.depthTexture.name=H.name+".shadowMapDepth",z.map.depthTexture.format=ei,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt}else H.isPointLight?(z.map=new wr(s.x),z.map.depthTexture=new Ks(s.x,Dn)):(z.map=new mn(s.x,s.y),z.map.depthTexture=new ii(s.x,s.y,Dn)),z.map.depthTexture.name=H.name+".shadowMap",z.map.depthTexture.format=ei,this.type===Hi?(z.map.depthTexture.compareFunction=Y?Bl:Ol,z.map.depthTexture.minFilter=on,z.map.depthTexture.magFilter=on):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=Yt,z.map.depthTexture.magFilter=Yt);z.camera.updateProjectionMatrix()}z.map.isWebGLCubeRenderTarget!==!0&&(z.map.width!==s.x||z.map.height!==s.y)&&z.map.setSize(s.x,s.y);let Q=z.map.isWebGLCubeRenderTarget?6:z.getViewportCount();H.isPointLight!==!0&&z.updateMatrices(H,S);let ce=(z.camera.layers.mask&4294967294)!==0?z.camera.layers:S.layers;for(let Ae=0;Ae<Q;Ae++){let ke=z.getCamera(Ae);if(H.isPointLight){let P=z.camera,D=z.matrix,X=H.distance||P.far;X!==P.far&&(P.far=X,P.updateProjectionMatrix()),br.setFromMatrixPosition(H.matrixWorld),P.position.copy(br),nc.copy(P.position),nc.add(R0[Ae]),P.up.copy(C0[Ae]),P.lookAt(nc),P.updateMatrixWorld(),D.makeTranslation(-br.x,-br.y,-br.z),ou.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),z._frustum.setFromProjectionMatrix(ou,P.coordinateSystem,P.reversedDepth)}if(z.map.isWebGLCubeRenderTarget)i.setRenderTarget(z.map,Ae),i.clear();else{Ae===0&&(i.setRenderTarget(z.map),i.clear());let P=z.getViewport(Ae);o.set(r.x*P.x,r.y*P.y,r.x*P.z,r.y*P.w),U.viewport(o)}n=z.getFrustum(Ae),x(_,S,ke,H,ce,this.type)}z.isPointLightShadow!==!0&&this.type===bs&&y(z,S),z.needsUpdate=!1}g=this.type,p.needsUpdate=!1,i.setRenderTarget(I,C,O)};function y(w,_){let S=e.update(M);u.defines.VSM_SAMPLES!==w.blurSamples&&(u.defines.VSM_SAMPLES=w.blurSamples,d.defines.VSM_SAMPLES=w.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),w.mapPass===null?w.mapPass=new mn(s.x,s.y,{format:wi,type:Un}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),u.uniforms.shadow_pass.value=w.map.depthTexture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,i.setRenderTarget(w.mapPass),i.clear(),i.renderBufferDirect(_,null,S,u,M,null),d.uniforms.shadow_pass.value=w.mapPass.texture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,i.setRenderTarget(w.map),i.clear(),i.renderBufferDirect(_,null,S,d,M,null)}function E(w,_,S,I){let C=null,O=S.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(O!==void 0)C=O;else if(C=S.isPointLight===!0?c:a,i.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let U=C.uuid,q=_.uuid,B=l[U];B===void 0&&(B={},l[U]=B);let J=B[q];J===void 0&&(J=C.clone(),B[q]=J,_.addEventListener("dispose",T)),C=J}if(C.visible=_.visible,C.wireframe=_.wireframe,I===bs?C.side=_.shadowSide!==null?_.shadowSide:_.side:C.side=_.shadowSide!==null?_.shadowSide:f[_.side],C.alphaMap=_.alphaMap,C.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,C.map=_.map,C.clipShadows=_.clipShadows,C.clippingPlanes=_.clippingPlanes,C.clipIntersection=_.clipIntersection,C.displacementMap=_.displacementMap,C.displacementScale=_.displacementScale,C.displacementBias=_.displacementBias,C.wireframeLinewidth=_.wireframeLinewidth,C.linewidth=_.linewidth,S.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let U=i.properties.get(C);U.light=S}return C}function x(w,_,S,I,C,O){if(w.visible===!1)return;if(w.layers.test(C)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&O===bs)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,w.matrixWorld);let B=e.update(w),J=w.material;if(Array.isArray(J)){let H=B.groups;for(let z=0,he=H.length;z<he;z++){let Y=H[z],Q=J[Y.materialIndex];if(Q&&Q.visible){let ce=E(w,Q,I,O);w.onBeforeShadow(i,w,_,S,B,ce,Y),i.renderBufferDirect(S,null,B,ce,w,Y),w.onAfterShadow(i,w,_,S,B,ce,Y)}}}else if(J.visible){let H=E(w,J,I,O);w.onBeforeShadow(i,w,_,S,B,H,null),i.renderBufferDirect(S,null,B,H,w,null),w.onAfterShadow(i,w,_,S,B,H,null)}}let q=w.children;for(let B=0,J=q.length;B<J;B++)x(q[B],_,S,I,C,O)}function T(w){w.target.removeEventListener("dispose",T);for(let S in l){let I=l[S],C=w.target.uuid;C in I&&(I[C].dispose(),delete I[C])}}}function P0(i,e){function t(){let L=!1,le=new Dt,se=null,A=new Dt(0,0,0,0);return{setMask:function(k){se!==k&&!L&&(i.colorMask(k,k,k,k),se=k)},setLocked:function(k){L=k},setClear:function(k,W,me,Ne,re){re===!0&&(k*=Ne,W*=Ne,me*=Ne),le.set(k,W,me,Ne),A.equals(le)===!1&&(i.clearColor(k,W,me,Ne),A.copy(le))},reset:function(){L=!1,se=null,A.set(-1,0,0,0)}}}function n(){let L=!1,le=!1,se=null,A=null,k=null;return{setReversed:function(W){if(le!==W){let me=e.get("EXT_clip_control");W?me.clipControlEXT(me.LOWER_LEFT_EXT,me.ZERO_TO_ONE_EXT):me.clipControlEXT(me.LOWER_LEFT_EXT,me.NEGATIVE_ONE_TO_ONE_EXT),le=W;let Ne=k;k=null,this.setClear(Ne)}},getReversed:function(){return le},setTest:function(W){W?ie(i.DEPTH_TEST):_e(i.DEPTH_TEST)},setMask:function(W){se!==W&&!L&&(i.depthMask(W),se=W)},setFunc:function(W){if(le&&(W=Ch[W]),A!==W){switch(W){case to:i.depthFunc(i.NEVER);break;case no:i.depthFunc(i.ALWAYS);break;case io:i.depthFunc(i.LESS);break;case ls:i.depthFunc(i.LEQUAL);break;case so:i.depthFunc(i.EQUAL);break;case ro:i.depthFunc(i.GEQUAL);break;case oo:i.depthFunc(i.GREATER);break;case ao:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}A=W}},setLocked:function(W){L=W},setClear:function(W){k!==W&&(k=W,le&&(W=1-W),i.clearDepth(W))},reset:function(){L=!1,se=null,A=null,k=null,le=!1}}}function s(){let L=!1,le=null,se=null,A=null,k=null,W=null,me=null,Ne=null,re=null;return{setTest:function(Pe){L||(Pe?ie(i.STENCIL_TEST):_e(i.STENCIL_TEST))},setMask:function(Pe){le!==Pe&&!L&&(i.stencilMask(Pe),le=Pe)},setFunc:function(Pe,ne,xe){(se!==Pe||A!==ne||k!==xe)&&(i.stencilFunc(Pe,ne,xe),se=Pe,A=ne,k=xe)},setOp:function(Pe,ne,xe){(W!==Pe||me!==ne||Ne!==xe)&&(i.stencilOp(Pe,ne,xe),W=Pe,me=ne,Ne=xe)},setLocked:function(Pe){L=Pe},setClear:function(Pe){re!==Pe&&(i.clearStencil(Pe),re=Pe)},reset:function(){L=!1,le=null,se=null,A=null,k=null,W=null,me=null,Ne=null,re=null}}}let r=new t,o=new n,a=new s,c={},l=new WeakMap,h={},f={},u={},d=new WeakMap,m=[],M=null,p=!1,g=null,y=null,E=null,x=null,T=null,w=null,_=null,S=new ht(0,0,0),I=0,C=!1,O=null,U=null,q=null,B=null,J=null,H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,he=0,Y=i.getParameter(i.VERSION);Y.indexOf("WebGL")!==-1?(he=parseFloat(/^WebGL (\d)/.exec(Y)[1]),z=he>=1):Y.indexOf("OpenGL ES")!==-1&&(he=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),z=he>=2);let Q=null,ce={},Ae=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),P=new Dt().fromArray(Ae),D=new Dt().fromArray(ke);function X(L,le,se,A){let k=new Uint8Array(4),W=i.createTexture();i.bindTexture(L,W),i.texParameteri(L,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(L,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let me=0;me<se;me++)L===i.TEXTURE_3D||L===i.TEXTURE_2D_ARRAY?i.texImage3D(le,0,i.RGBA,1,1,A,0,i.RGBA,i.UNSIGNED_BYTE,k):i.texImage2D(le+me,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,k);return W}let ue={};ue[i.TEXTURE_2D]=X(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=X(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=X(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=X(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(i.DEPTH_TEST),o.setFunc(ls),Ue(!1),Ce(gl),ie(i.CULL_FACE),be(Gi);function ie(L){h[L]!==!0&&(i.enable(L),h[L]=!0)}function _e(L){h[L]!==!1&&(i.disable(L),h[L]=!1)}function Be(L,le){return u[L]!==le?(i.bindFramebuffer(L,le),u[L]=le,L===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=le),L===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=le),!0):!1}function pe(L,le){let se=m,A=!1;if(L){se=d.get(le),se===void 0&&(se=[],d.set(le,se));let k=L.textures;if(se.length!==k.length||se[0]!==i.COLOR_ATTACHMENT0){for(let W=0,me=k.length;W<me;W++)se[W]=i.COLOR_ATTACHMENT0+W;se.length=k.length,A=!0}}else se[0]!==i.BACK&&(se[0]=i.BACK,A=!0);A&&i.drawBuffers(se)}function ye(L){return M!==L?(i.useProgram(L),M=L,!0):!1}let Ee={[Vi]:i.FUNC_ADD,[Kc]:i.FUNC_SUBTRACT,[jc]:i.FUNC_REVERSE_SUBTRACT};Ee[Qc]=i.MIN,Ee[eh]=i.MAX;let j={[th]:i.ZERO,[nh]:i.ONE,[ih]:i.SRC_COLOR,[vl]:i.SRC_ALPHA,[ch]:i.SRC_ALPHA_SATURATE,[ah]:i.DST_COLOR,[rh]:i.DST_ALPHA,[sh]:i.ONE_MINUS_SRC_COLOR,[Ml]:i.ONE_MINUS_SRC_ALPHA,[lh]:i.ONE_MINUS_DST_COLOR,[oh]:i.ONE_MINUS_DST_ALPHA,[hh]:i.CONSTANT_COLOR,[uh]:i.ONE_MINUS_CONSTANT_COLOR,[dh]:i.CONSTANT_ALPHA,[fh]:i.ONE_MINUS_CONSTANT_ALPHA};function be(L,le,se,A,k,W,me,Ne,re,Pe){if(L===Gi){p===!0&&(_e(i.BLEND),p=!1);return}if(p===!1&&(ie(i.BLEND),p=!0),L!==$c){if(L!==g||Pe!==C){if((y!==Vi||T!==Vi)&&(i.blendEquation(i.FUNC_ADD),y=Vi,T=Vi),Pe)switch(L){case Es:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFunc(i.ONE,i.ONE);break;case xl:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case yl:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:nt("WebGLState: Invalid blending: ",L);break}else switch(L){case Es:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case _l:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case xl:nt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yl:nt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:nt("WebGLState: Invalid blending: ",L);break}E=null,x=null,w=null,_=null,S.set(0,0,0),I=0,g=L,C=Pe}return}k=k||le,W=W||se,me=me||A,(le!==y||k!==T)&&(i.blendEquationSeparate(Ee[le],Ee[k]),y=le,T=k),(se!==E||A!==x||W!==w||me!==_)&&(i.blendFuncSeparate(j[se],j[A],j[W],j[me]),E=se,x=A,w=W,_=me),(Ne.equals(S)===!1||re!==I)&&(i.blendColor(Ne.r,Ne.g,Ne.b,re),S.copy(Ne),I=re),g=L,C=!1}function Se(L,le){L.side===un?_e(i.CULL_FACE):ie(i.CULL_FACE);let se=L.side===ln;le&&(se=!se),Ue(se),L.blending===Es&&L.transparent===!1?be(Gi):be(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);let A=L.stencilWrite;a.setTest(A),A&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),Ve(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?ie(i.SAMPLE_ALPHA_TO_COVERAGE):_e(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(L){O!==L&&(L?i.frontFace(i.CW):i.frontFace(i.CCW),O=L)}function Ce(L){L!==Yc?(ie(i.CULL_FACE),L!==U&&(L===gl?i.cullFace(i.BACK):L===Zc?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):_e(i.CULL_FACE),U=L}function tt(L){L!==q&&(z&&i.lineWidth(L),q=L)}function Ve(L,le,se){L?(ie(i.POLYGON_OFFSET_FILL),(B!==le||J!==se)&&(B=le,J=se,o.getReversed()&&(le=-le,se=-se),i.polygonOffset(le,se))):_e(i.POLYGON_OFFSET_FILL)}function Qe(L){L?ie(i.SCISSOR_TEST):_e(i.SCISSOR_TEST)}function it(L){L===void 0&&(L=i.TEXTURE0+H-1),Q!==L&&(i.activeTexture(L),Q=L)}function dt(L,le,se){se===void 0&&(Q===null?se=i.TEXTURE0+H-1:se=Q);let A=ce[se];A===void 0&&(A={type:void 0,texture:void 0},ce[se]=A),(A.type!==L||A.texture!==le)&&(Q!==se&&(i.activeTexture(se),Q=se),i.bindTexture(L,le||ue[L]),A.type=L,A.texture=le)}function G(){let L=ce[Q];L!==void 0&&L.type!==void 0&&(i.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function ct(){try{i.compressedTexImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function ot(){try{i.compressedTexImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function at(){try{i.texSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function Ie(){try{i.texSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function wt(){try{i.compressedTexSubImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function We(){try{i.compressedTexSubImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function Je(){try{i.texStorage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function R(){try{i.texStorage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function v(){try{i.texImage2D(...arguments)}catch(L){nt("WebGLState:",L)}}function Z(){try{i.texImage3D(...arguments)}catch(L){nt("WebGLState:",L)}}function ve(L){return f[L]!==void 0?f[L]:i.getParameter(L)}function fe(L,le){f[L]!==le&&(i.pixelStorei(L,le),f[L]=le)}function Me(L){P.equals(L)===!1&&(i.scissor(L.x,L.y,L.z,L.w),P.copy(L))}function Te(L){D.equals(L)===!1&&(i.viewport(L.x,L.y,L.z,L.w),D.copy(L))}function oe(L,le){let se=l.get(le);se===void 0&&(se=new WeakMap,l.set(le,se));let A=se.get(L);A===void 0&&(A=i.getUniformBlockIndex(le,L.name),i.uniformBlockBinding(le,A,A),se.set(L,A))}function ae(L,le,se){let k=l.get(le).get(L);c[k]!==se&&(i.bindBufferBase(i.UNIFORM_BUFFER,k,se),c[k]=se)}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},f={},Q=null,ce={},u={},c={},d=new WeakMap,m=[],M=null,p=!1,g=null,y=null,E=null,x=null,T=null,w=null,_=null,S=new ht(0,0,0),I=0,C=!1,O=null,U=null,q=null,B=null,J=null,P.set(0,0,i.canvas.width,i.canvas.height),D.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:ie,disable:_e,bindFramebuffer:Be,drawBuffers:pe,useProgram:ye,setBlending:be,setMaterial:Se,setFlipSided:Ue,setCullFace:Ce,setLineWidth:tt,setPolygonOffset:Ve,setScissorTest:Qe,activeTexture:it,bindTexture:dt,unbindTexture:G,compressedTexImage2D:ct,compressedTexImage3D:ot,texImage2D:v,texImage3D:Z,pixelStorei:fe,getParameter:ve,updateUBOMapping:oe,uniformBlockBinding:ae,texStorage2D:Je,texStorage3D:R,texSubImage2D:at,texSubImage3D:Ie,compressedTexSubImage2D:wt,compressedTexSubImage3D:We,scissor:Me,viewport:Te,reset:we}}function L0(i,e,t,n,s,r,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Le,h=new WeakMap,f=new Set,u,d=new WeakMap,m=new Set,M=new FinalizationRegistry(R=>m.delete(R)),p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,v){return p?new OffscreenCanvas(R,v):Vs("canvas")}function y(R,v,Z){let ve=1,fe=Je(R);if((fe.width>Z||fe.height>Z)&&(ve=Z/Math.max(fe.width,fe.height)),ve<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Me=Math.floor(ve*fe.width),Te=Math.floor(ve*fe.height);u===void 0&&(u=g(Me,Te));let oe=v?g(Me,Te):u;return oe.width=Me,oe.height=Te,oe.getContext("2d").drawImage(R,0,0,Me,Te),et("WebGLRenderer: Texture has been resized from ("+fe.width+"x"+fe.height+") to ("+Me+"x"+Te+")."),oe}else return"data"in R&&et("WebGLRenderer: Image in DataTexture is too big ("+fe.width+"x"+fe.height+")."),R;return R}function E(R){return R.generateMipmaps}function x(R){i.generateMipmap(R)}function T(R){return R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?i.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function w(R,v,Z,ve,fe,Me=!1){if(R!==null){if(i[R]!==void 0)return i[R];et("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Te;ve&&(Te=e.get("EXT_texture_norm16"),Te||et("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let oe=v;if(v===i.RED&&(Z===i.FLOAT&&(oe=i.R32F),Z===i.HALF_FLOAT&&(oe=i.R16F),Z===i.UNSIGNED_BYTE&&(oe=i.R8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.R16_EXT),Z===i.SHORT&&Te&&(oe=Te.R16_SNORM_EXT)),v===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.R8UI),Z===i.UNSIGNED_SHORT&&(oe=i.R16UI),Z===i.UNSIGNED_INT&&(oe=i.R32UI),Z===i.BYTE&&(oe=i.R8I),Z===i.SHORT&&(oe=i.R16I),Z===i.INT&&(oe=i.R32I)),v===i.RG&&(Z===i.FLOAT&&(oe=i.RG32F),Z===i.HALF_FLOAT&&(oe=i.RG16F),Z===i.UNSIGNED_BYTE&&(oe=i.RG8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RG16_EXT),Z===i.SHORT&&Te&&(oe=Te.RG16_SNORM_EXT)),v===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RG8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RG16UI),Z===i.UNSIGNED_INT&&(oe=i.RG32UI),Z===i.BYTE&&(oe=i.RG8I),Z===i.SHORT&&(oe=i.RG16I),Z===i.INT&&(oe=i.RG32I)),v===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGB16UI),Z===i.UNSIGNED_INT&&(oe=i.RGB32UI),Z===i.BYTE&&(oe=i.RGB8I),Z===i.SHORT&&(oe=i.RGB16I),Z===i.INT&&(oe=i.RGB32I)),v===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(oe=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(oe=i.RGBA16UI),Z===i.UNSIGNED_INT&&(oe=i.RGBA32UI),Z===i.BYTE&&(oe=i.RGBA8I),Z===i.SHORT&&(oe=i.RGBA16I),Z===i.INT&&(oe=i.RGBA32I)),v===i.RGB&&(Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RGB16_EXT),Z===i.SHORT&&Te&&(oe=Te.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(oe=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(oe=i.R11F_G11F_B10F)),v===i.RGBA){let ae=Me?Gs:_t.getTransfer(fe);Z===i.FLOAT&&(oe=i.RGBA32F),Z===i.HALF_FLOAT&&(oe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(oe=ae===Et?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&Te&&(oe=Te.RGBA16_EXT),Z===i.SHORT&&Te&&(oe=Te.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(oe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(oe=i.RGB5_A1)}return(oe===i.R16F||oe===i.R32F||oe===i.RG16F||oe===i.RG32F||oe===i.RGBA16F||oe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),oe}function _(R,v){let Z;return R?v===null||v===Dn||v===Xi?Z=i.DEPTH24_STENCIL8:v===Nn?Z=i.DEPTH32F_STENCIL8:v===Ts&&(Z=i.DEPTH24_STENCIL8,et("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Dn||v===Xi?Z=i.DEPTH_COMPONENT24:v===Nn?Z=i.DEPTH_COMPONENT32F:v===Ts&&(Z=i.DEPTH_COMPONENT16),Z}function S(R,v){return E(R)===!0||R.isFramebufferTexture&&R.minFilter!==Yt&&R.minFilter!==on?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function I(R){let v=new WeakRef(R);n.get(R).__ref=v,m.add(v),M.register(R,v,v)}function C(R){let v=n.get(R).__ref;v!==void 0&&(m.delete(v),M.unregister(v))}function O(R){q(R.target)}function U(R){B(R.target)}function q(R){R.removeEventListener("dispose",O),C(R),H(R),R.isVideoTexture&&h.delete(R),R.isHTMLTexture&&f.delete(R)}function B(R){R.removeEventListener("dispose",U),C(R),he(R)}function J(){for(let R of m){let v=R.deref();v!==void 0&&(v.isRenderTarget===!0?B(v):q(v))}m.clear(),f.clear()}function H(R){let v=n.get(R);if(v.__webglInit===void 0)return;let Z=R.source,ve=d.get(Z);if(ve){let fe=ve[v.__cacheKey];fe.usedTimes--,fe.usedTimes===0&&z(R),Object.keys(ve).length===0&&d.delete(Z)}n.remove(R)}function z(R){let v=n.get(R);i.deleteTexture(v.__webglTexture);let Z=R.source,ve=d.get(Z);delete ve[v.__cacheKey],o.memory.textures--}function he(R){let v=n.get(R);v.__depthDisposeCallback&&v.__depthDisposeCallback();let Z=R.depthTexture;if(Z&&Z.renderTarget===R&&q(Z),R.isWebGLCubeRenderTarget)for(let fe=0;fe<6;fe++){if(Array.isArray(v.__webglFramebuffer[fe]))for(let Me=0;Me<v.__webglFramebuffer[fe].length;Me++)i.deleteFramebuffer(v.__webglFramebuffer[fe][Me]);else i.deleteFramebuffer(v.__webglFramebuffer[fe]);v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer[fe])}else{if(Array.isArray(v.__webglFramebuffer))for(let fe=0;fe<v.__webglFramebuffer.length;fe++)i.deleteFramebuffer(v.__webglFramebuffer[fe]);else i.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&i.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&i.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let fe=0;fe<v.__webglColorRenderbuffer.length;fe++)v.__webglColorRenderbuffer[fe]&&i.deleteRenderbuffer(v.__webglColorRenderbuffer[fe]);v.__webglDepthRenderbuffer&&i.deleteRenderbuffer(v.__webglDepthRenderbuffer)}let ve=R.textures;for(let fe=0,Me=ve.length;fe<Me;fe++){let Te=n.get(ve[fe]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),o.memory.textures--),n.remove(ve[fe])}n.remove(R)}let Y=0;function Q(){Y=0}function ce(){return Y}function Ae(R){Y=R}function ke(){let R=Y;return R>=s.maxTextures&&et("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),Y+=1,R}function P(R){let v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.mipmapsAutoUpdate),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function D(R,v){let Z=n.get(R);if(R.isVideoTexture&&wt(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&Z.__version!==R.version){let ve=R.image;if(ve===null)et("WebGLRenderer: Texture marked for update but no image data found.");else if(ve.complete===!1)et("WebGLRenderer: Texture marked for update but image is incomplete");else{Se(Z,R,v);return}}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+v)}function X(R,v){let Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Se(Z,R,v);return}else R.isExternalTexture&&(Z.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+v)}function ue(R,v){let Z=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&Z.__version!==R.version){Se(Z,R,v);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+v)}function ie(R,v){let Z=n.get(R);if(R.version>0&&Z.__version!==R.version){Ue(Z,R,v);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+v)}let _e={[lo]:i.REPEAT,[Bn]:i.CLAMP_TO_EDGE,[co]:i.MIRRORED_REPEAT},Be={[Yt]:i.NEAREST,[gh]:i.NEAREST_MIPMAP_NEAREST,[gr]:i.NEAREST_MIPMAP_LINEAR,[on]:i.LINEAR,[ko]:i.LINEAR_MIPMAP_NEAREST,[ri]:i.LINEAR_MIPMAP_LINEAR},pe={[vh]:i.NEVER,[zl]:i.ALWAYS,[Mh]:i.LESS,[Ol]:i.LEQUAL,[Sh]:i.EQUAL,[Bl]:i.GEQUAL,[bh]:i.GREATER,[Eh]:i.NOTEQUAL};function ye(R,v){if(v.type===Nn&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===on||v.magFilter===ko||v.magFilter===gr||v.magFilter===ri||v.minFilter===on||v.minFilter===ko||v.minFilter===gr||v.minFilter===ri)&&et("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,_e[v.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,_e[v.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,_e[v.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,Be[v.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,Be[v.minFilter]),v.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,pe[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===Yt||v.minFilter!==gr&&v.minFilter!==ri||v.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){let Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,s.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ee(R,v){let Z=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",O),I(v));let ve=v.source,fe=d.get(ve);fe===void 0&&(fe={},d.set(ve,fe));let Me=P(v);if(Me!==R.__cacheKey){fe[Me]===void 0&&(fe[Me]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),fe[Me].usedTimes++;let Te=fe[R.__cacheKey];Te!==void 0&&(fe[R.__cacheKey].usedTimes--,Te.usedTimes===0&&z(v)),R.__cacheKey=Me,R.__webglTexture=fe[Me].texture}return Z}function j(R,v,Z){return Math.floor(Math.floor(R/Z)/v)}function be(R,v,Z,ve){let Me=R.updateRanges;if(Me.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,v.width,v.height,Z,ve,v.data);else{Me.sort((L,le)=>L.start-le.start);let Te=0;for(let L=1;L<Me.length;L++){let le=Me[Te],se=Me[L],A=le.start+le.count,k=j(se.start,v.width,4),W=j(le.start,v.width,4);se.start<=A+1&&k===W&&j(se.start+se.count-1,v.width,4)===k?le.count=Math.max(le.count,se.start+se.count-le.start):(++Te,Me[Te]=se)}Me.length=Te+1;let oe=t.getParameter(i.UNPACK_ROW_LENGTH),ae=t.getParameter(i.UNPACK_SKIP_PIXELS),we=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,v.width);for(let L=0,le=Me.length;L<le;L++){let se=Me[L],A=Math.floor(se.start/4),k=Math.ceil(se.count/4),W=A%v.width,me=Math.floor(A/v.width),Ne=k,re=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,W),t.pixelStorei(i.UNPACK_SKIP_ROWS,me),t.texSubImage2D(i.TEXTURE_2D,0,W,me,Ne,re,Z,ve,v.data)}R.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,oe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ae),t.pixelStorei(i.UNPACK_SKIP_ROWS,we)}}function Se(R,v,Z){let ve=i.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(ve=i.TEXTURE_2D_ARRAY),v.isData3DTexture&&(ve=i.TEXTURE_3D);let fe=Ee(R,v),Me=v.source;t.bindTexture(ve,R.__webglTexture,i.TEXTURE0+Z);let Te=n.get(Me);if(Me.version!==Te.__version||fe===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){let re=_t.getPrimaries(_t.workingColorSpace),Pe=v.colorSpace===ai?null:_t.getPrimaries(v.colorSpace),ne=v.colorSpace===ai||re===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ne)}t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment);let ae=y(v.image,!1,s.maxTextureSize);ae=We(v,ae);let we=r.convert(v.format,v.colorSpace),L=r.convert(v.type),le=w(v.internalFormat,we,L,v.normalized,v.colorSpace,v.isVideoTexture);ye(ve,v);let se,A=v.mipmaps,k=v.isVideoTexture!==!0,W=Te.__version===void 0||fe===!0,me=Me.dataReady,Ne=S(v,ae);if(v.isDepthTexture)le=_(v.format===oi,v.type),W&&(k?t.texStorage2D(i.TEXTURE_2D,1,le,ae.width,ae.height):t.texImage2D(i.TEXTURE_2D,0,le,ae.width,ae.height,0,we,L,null));else if(v.isDataTexture)if(A.length>0){k&&W&&t.texStorage2D(i.TEXTURE_2D,Ne,le,A[0].width,A[0].height);for(let re=0,Pe=A.length;re<Pe;re++)se=A[re],k?me&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,se.width,se.height,we,L,se.data):t.texImage2D(i.TEXTURE_2D,re,le,se.width,se.height,0,we,L,se.data);v.generateMipmaps=!1}else k?(W&&t.texStorage2D(i.TEXTURE_2D,Ne,le,ae.width,ae.height),me&&be(v,ae,we,L)):t.texImage2D(i.TEXTURE_2D,0,le,ae.width,ae.height,0,we,L,ae.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){k&&W&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,le,A[0].width,A[0].height,ae.depth);for(let re=0,Pe=A.length;re<Pe;re++)if(se=A[re],v.format!==Fn)if(we!==null)if(k){if(me)if(v.layerUpdates.size>0){let ne=Jl(se.width,se.height,v.format,v.type);for(let xe of v.layerUpdates){let je=se.data.subarray(xe*ne/se.data.BYTES_PER_ELEMENT,(xe+1)*ne/se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,xe,se.width,se.height,1,we,je)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,se.width,se.height,ae.depth,we,se.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,re,le,se.width,se.height,ae.depth,0,se.data,0,0);else et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?me&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,re,0,0,0,se.width,se.height,ae.depth,we,L,se.data):t.texImage3D(i.TEXTURE_2D_ARRAY,re,le,se.width,se.height,ae.depth,0,we,L,se.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{k&&W&&t.texStorage2D(i.TEXTURE_2D,Ne,le,A[0].width,A[0].height);for(let re=0,Pe=A.length;re<Pe;re++)se=A[re],v.format!==Fn?we!==null?k?me&&t.compressedTexSubImage2D(i.TEXTURE_2D,re,0,0,se.width,se.height,we,se.data):t.compressedTexImage2D(i.TEXTURE_2D,re,le,se.width,se.height,0,se.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?me&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,se.width,se.height,we,L,se.data):t.texImage2D(i.TEXTURE_2D,re,le,se.width,se.height,0,we,L,se.data)}else if(v.isDataArrayTexture)if(k){if(W&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,le,ae.width,ae.height,ae.depth),me)if(v.layerUpdates.size>0){let re=Jl(ae.width,ae.height,v.format,v.type);for(let Pe of v.layerUpdates){let ne=ae.data.subarray(Pe*re/ae.data.BYTES_PER_ELEMENT,(Pe+1)*re/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,ae.width,ae.height,1,we,L,ne)}v.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,we,L,ae.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,le,ae.width,ae.height,ae.depth,0,we,L,ae.data);else if(v.isData3DTexture)k?(W&&t.texStorage3D(i.TEXTURE_3D,Ne,le,ae.width,ae.height,ae.depth),me&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,we,L,ae.data)):t.texImage3D(i.TEXTURE_3D,0,le,ae.width,ae.height,ae.depth,0,we,L,ae.data);else if(v.isFramebufferTexture){if(W)if(k)t.texStorage2D(i.TEXTURE_2D,Ne,le,ae.width,ae.height);else{let re=ae.width,Pe=ae.height;for(let ne=0;ne<Ne;ne++)t.texImage2D(i.TEXTURE_2D,ne,le,re,Pe,0,we,L,null),re>>=1,Pe>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in i){let re=i.canvas;if(re.hasAttribute("layoutsubtree")||re.setAttribute("layoutsubtree","true"),ae.parentNode!==re){re.appendChild(ae),f.add(v),re.onpaint=Pe=>{let ne=Pe.changedElements;for(let xe of f)ne.includes(xe.image)&&(xe.needsUpdate=!0)},re.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ae);else{let ne=i.RGBA,xe=i.RGBA,je=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ne,xe,je,ae)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(A.length>0){if(k&&W){let re=Je(A[0]);t.texStorage2D(i.TEXTURE_2D,Ne,le,re.width,re.height)}for(let re=0,Pe=A.length;re<Pe;re++)se=A[re],k?me&&t.texSubImage2D(i.TEXTURE_2D,re,0,0,we,L,se):t.texImage2D(i.TEXTURE_2D,re,le,we,L,se);v.generateMipmaps=!1}else if(k){if(W){let re=Je(ae);t.texStorage2D(i.TEXTURE_2D,Ne,le,re.width,re.height)}me&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,we,L,ae)}else t.texImage2D(i.TEXTURE_2D,0,le,we,L,ae);E(v)&&v.mipmapsAutoUpdate===!0&&x(ve),Te.__version=Me.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ue(R,v,Z){if(v.image.length!==6)return;let ve=Ee(R,v),fe=v.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+Z);let Me=n.get(fe);if(fe.version!==Me.__version||ve===!0){t.activeTexture(i.TEXTURE0+Z);let Te=_t.getPrimaries(_t.workingColorSpace),oe=v.colorSpace===ai?null:_t.getPrimaries(v.colorSpace),ae=v.colorSpace===ai||Te===oe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ae);let we=v.isCompressedTexture||v.image[0].isCompressedTexture,L=v.image[0]&&v.image[0].isDataTexture,le=[];for(let xe=0;xe<6;xe++)!we&&!L?le[xe]=y(v.image[xe],!0,s.maxCubemapSize):le[xe]=L?v.image[xe].image:v.image[xe],le[xe]=We(v,le[xe]);let se=le[0],A=r.convert(v.format,v.colorSpace),k=r.convert(v.type),W=w(v.internalFormat,A,k,v.normalized,v.colorSpace),me=v.isVideoTexture!==!0,Ne=Me.__version===void 0||ve===!0,re=fe.dataReady,Pe=S(v,se);ye(i.TEXTURE_CUBE_MAP,v);let ne;if(v.isDepthTexture){if(W=_(v.format===oi,v.type),Ne)if(me)t.texStorage2D(i.TEXTURE_CUBE_MAP,1,W,se.width,se.height);else for(let xe=0;xe<6;xe++)t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,W,se.width,se.height,0,A,k,null)}else if(we){me&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,W,se.width,se.height);for(let xe=0;xe<6;xe++){ne=le[xe].mipmaps;for(let je=0;je<ne.length;je++){let yt=ne[je];v.format!==Fn?A!==null?me?re&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,0,0,yt.width,yt.height,A,yt.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,W,yt.width,yt.height,0,yt.data):et("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):me?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,0,0,yt.width,yt.height,A,k,yt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je,W,yt.width,yt.height,0,A,k,yt.data)}}}else{if(ne=v.mipmaps,me&&Ne){ne.length>0&&Pe++;let xe=Je(le[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,W,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(L){me?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,le[xe].width,le[xe].height,A,k,le[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,W,le[xe].width,le[xe].height,0,A,k,le[xe].data);for(let je=0;je<ne.length;je++){let N=ne[je].image[xe].image;me?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,0,0,N.width,N.height,A,k,N.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,W,N.width,N.height,0,A,k,N.data)}}else{me?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,A,k,le[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,W,A,k,le[xe]);for(let je=0;je<ne.length;je++){let yt=ne[je];me?re&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,0,0,A,k,yt.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,je+1,W,A,k,yt.image[xe])}}}E(v)&&v.mipmapsAutoUpdate===!0&&x(i.TEXTURE_CUBE_MAP),Me.__version=fe.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Ce(R,v,Z,ve,fe,Me){let Te=r.convert(Z.format,Z.colorSpace),oe=r.convert(Z.type),ae=w(Z.internalFormat,Te,oe,Z.normalized,Z.colorSpace),we=n.get(v),L=n.get(Z);if(L.__renderTarget=v,!we.__hasExternalTextures){let le=Math.max(1,v.width>>Me),se=Math.max(1,v.height>>Me);fe===i.TEXTURE_3D||fe===i.TEXTURE_2D_ARRAY?t.texImage3D(fe,Me,ae,le,se,v.depth,0,Te,oe,null):t.texImage2D(fe,Me,ae,le,se,0,Te,oe,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),Ie(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,fe,L.__webglTexture,0,at(v)):(fe===i.TEXTURE_2D||fe>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&fe<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ve,fe,L.__webglTexture,Me),t.bindFramebuffer(i.FRAMEBUFFER,null)}function tt(R,v,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,R),v.depthBuffer){let ve=v.depthTexture,fe=ve&&ve.isDepthTexture?ve.type:null,Me=_(v.stencilBuffer,fe),Te=v.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Ie(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(v),Me,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(v),Me,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,Me,v.width,v.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Te,i.RENDERBUFFER,R)}else{let ve=v.textures;for(let fe=0;fe<ve.length;fe++){let Me=ve[fe],Te=r.convert(Me.format,Me.colorSpace),oe=r.convert(Me.type),ae=w(Me.internalFormat,Te,oe,Me.normalized,Me.colorSpace);Ie(v)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,at(v),ae,v.width,v.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,at(v),ae,v.width,v.height):i.renderbufferStorage(i.RENDERBUFFER,ae,v.width,v.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ve(R,v,Z){let ve=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let fe=n.get(v.depthTexture);fe.__renderTarget=v;let Me=ve?v.depthTexture.image[0]:v.depthTexture.image;(!fe.__webglTexture||Me.width!==v.width||Me.height!==v.height)&&(Me.width=v.width,Me.height=v.height,v.depthTexture.needsUpdate=!0),ve?ie(v.depthTexture,0):D(v.depthTexture,0);let Te=fe.__webglTexture,oe=at(v),ae=ve?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,we=v.depthTexture.format===oi?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(v.depthTexture.format===ei)Ie(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,ae,Te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,we,ae,Te,0);else if(v.depthTexture.format===oi)Ie(v)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,we,ae,Te,0,oe):i.framebufferTexture2D(i.FRAMEBUFFER,we,ae,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Qe(R){let v=n.get(R),Z=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){let ve=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),ve){let fe=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,ve.removeEventListener("dispose",fe)};ve.addEventListener("dispose",fe),v.__depthDisposeCallback=fe}v.__boundDepthTexture=ve}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(Z)for(let ve=0;ve<6;ve++)Ve(v.__webglFramebuffer[ve],R,ve);else R.texture.mipmaps.length>0?Ve(v.__webglFramebuffer[0],R,0):Ve(v.__webglFramebuffer,R,0);else if(Z){v.__webglDepthbuffer=[];for(let ve=0;ve<6;ve++)if(t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[ve]),v.__webglDepthbuffer[ve]===void 0)v.__webglDepthbuffer[ve]=i.createRenderbuffer(),tt(v.__webglDepthbuffer[ve],R,!1);else{let fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=v.__webglDepthbuffer[ve];i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,Me)}}else if(R.texture.mipmaps.length>0?t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=i.createRenderbuffer(),tt(v.__webglDepthbuffer,R,!1);else{let fe=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Me=v.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Me),i.framebufferRenderbuffer(i.FRAMEBUFFER,fe,i.RENDERBUFFER,Me)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function it(R,v,Z){let ve=n.get(R);v!==void 0&&Ce(ve.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&Qe(R)}function dt(R){let v=R.texture,Z=n.get(R),ve=n.get(v);R.addEventListener("dispose",U),I(R);let fe=R.textures,Me=R.isWebGLCubeRenderTarget===!0,Te=fe.length>1;if(Te||(ve.__webglTexture===void 0&&(ve.__webglTexture=i.createTexture()),ve.__version=v.version,o.memory.textures++),Me){Z.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(v.mipmaps.length>0){Z.__webglFramebuffer[oe]=[];for(let ae=0;ae<v.mipmaps.length;ae++)Z.__webglFramebuffer[oe][ae]=i.createFramebuffer()}else Z.__webglFramebuffer[oe]=i.createFramebuffer()}else{if(v.mipmaps.length>0){Z.__webglFramebuffer=[];for(let oe=0;oe<v.mipmaps.length;oe++)Z.__webglFramebuffer[oe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Te)for(let oe=0,ae=fe.length;oe<ae;oe++){let we=n.get(fe[oe]);we.__webglTexture===void 0&&(we.__webglTexture=i.createTexture(),o.memory.textures++)}if(R.samples>0&&Ie(R)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let oe=0;oe<fe.length;oe++){let ae=fe[oe];Z.__webglColorRenderbuffer[oe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe]);let we=r.convert(ae.format,ae.colorSpace),L=r.convert(ae.type),le=w(ae.internalFormat,we,L,ae.normalized,ae.colorSpace,R.isXRRenderTarget===!0),se=at(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,se,le,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+oe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[oe])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),tt(Z.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Me){t.bindTexture(i.TEXTURE_CUBE_MAP,ve.__webglTexture),ye(i.TEXTURE_CUBE_MAP,v);for(let oe=0;oe<6;oe++)if(v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)Ce(Z.__webglFramebuffer[oe][ae],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,ae);else Ce(Z.__webglFramebuffer[oe],R,v,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);E(v)?x(i.TEXTURE_CUBE_MAP):v.mipmaps.length>0&&i.texParameteri(i.TEXTURE_CUBE_MAP,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}else if(Te){for(let oe=0,ae=fe.length;oe<ae;oe++){let we=fe[oe],L=n.get(we),le=i.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(le=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(le,L.__webglTexture),ye(le,we),Ce(Z.__webglFramebuffer,R,we,i.COLOR_ATTACHMENT0+oe,le,0),E(we)&&x(le)}t.unbindTexture()}else{let oe=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(oe,ve.__webglTexture),ye(oe,v),v.mipmaps.length>0)for(let ae=0;ae<v.mipmaps.length;ae++)Ce(Z.__webglFramebuffer[ae],R,v,i.COLOR_ATTACHMENT0,oe,ae);else Ce(Z.__webglFramebuffer,R,v,i.COLOR_ATTACHMENT0,oe,0);E(v)?x(oe):v.mipmaps.length>0&&i.texParameteri(oe,i.TEXTURE_MAX_LEVEL,v.mipmaps.length-1),t.unbindTexture()}R.depthBuffer&&Qe(R)}function G(R){let v=R.textures;for(let Z=0,ve=v.length;Z<ve;Z++){let fe=v[Z];if(E(fe)&&fe.mipmapsAutoUpdate===!0){let Me=T(R),Te=n.get(fe).__webglTexture;t.bindTexture(Me,Te),x(Me),t.unbindTexture()}}}let ct=[];function ot(R){if(R.samples>0){if(Ie(R)===!1){let v=R.textures,Z=R.width,ve=R.height,fe=i.COLOR_BUFFER_BIT,Me=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=n.get(R),oe=v.length>1;if(oe)for(let we=0;we<v.length;we++)t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),R.texture.mipmaps.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let we=0;we<v.length;we++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(fe|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(fe|=i.STENCIL_BUFFER_BIT)),oe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Te.__webglColorRenderbuffer[we]);let L=n.get(v[we]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,L,0)}i.blitFramebuffer(0,0,Z,ve,0,0,Z,ve,fe,i.NEAREST),c===!0&&(ct.length=0,ct.push(i.COLOR_ATTACHMENT0+we),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&ct.push(Me),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ct))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),oe)for(let we=0;we<v.length;we++){t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.RENDERBUFFER,Te.__webglColorRenderbuffer[we]);let L=n.get(v[we]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Te.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+we,i.TEXTURE_2D,L,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){let v=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[v])}}}function at(R){return Math.min(s.maxSamples,R.samples)}function Ie(R){let v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function wt(R){let v=o.render.frame;h.get(R)!==v&&(h.set(R,v),R.update())}function We(R,v){let Z=R.colorSpace,ve=R.format,fe=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||Z!==Hs&&Z!==ai&&(_t.getTransfer(Z)===Et?(ve!==Fn||fe!==dn)&&et("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):nt("WebGLTextures: Unsupported texture color space:",Z)),v}function Je(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=ke,this.resetTextureUnits=Q,this.getTextureUnits=ce,this.setTextureUnits=Ae,this.setTexture2D=D,this.setTexture2DArray=X,this.setTexture3D=ue,this.setTextureCube=ie,this.rebindTextures=it,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=G,this.updateMultisampleRenderTarget=ot,this.setupDepthRenderbuffer=Qe,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Ie,this.dispose=J}function D0(i,e){function t(n,s=ai){let r,o=_t.getTransfer(s);if(n===dn)return i.UNSIGNED_BYTE;if(n===Go)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Vo)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Ll)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Dl)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Il)return i.BYTE;if(n===Pl)return i.SHORT;if(n===Ts)return i.UNSIGNED_SHORT;if(n===Ho)return i.INT;if(n===Dn)return i.UNSIGNED_INT;if(n===Nn)return i.FLOAT;if(n===Un)return i.HALF_FLOAT;if(n===Nl)return i.ALPHA;if(n===Ul)return i.RGB;if(n===Fn)return i.RGBA;if(n===ei)return i.DEPTH_COMPONENT;if(n===oi)return i.DEPTH_STENCIL;if(n===Fl)return i.RED;if(n===Wo)return i.RED_INTEGER;if(n===wi)return i.RG;if(n===Xo)return i.RG_INTEGER;if(n===qo)return i.RGBA_INTEGER;if(n===_r||n===xr||n===yr||n===vr)if(o===Et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_r)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_r)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===yr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Yo||n===Zo||n===Jo||n===$o)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Yo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Zo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Jo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===$o)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Ko||n===jo||n===Qo||n===ea||n===ta||n===Mr||n===na)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Ko||n===jo)return o===Et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qo)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===ea)return r.COMPRESSED_R11_EAC;if(n===ta)return r.COMPRESSED_SIGNED_R11_EAC;if(n===Mr)return r.COMPRESSED_RG11_EAC;if(n===na)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ia||n===sa||n===ra||n===oa||n===aa||n===la||n===ca||n===ha||n===ua||n===da||n===fa||n===pa||n===ma||n===ga)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===ia)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===sa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ra)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===oa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===aa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===la)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ca)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ha)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ua)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===da)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===fa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===pa)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===ma)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ga)return o===Et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_a||n===xa||n===ya)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_a)return o===Et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===xa)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ya)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===va||n===Ma||n===Sr||n===Sa)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===va)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Ma)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Sr)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Sa)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Xi?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var N0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,U0=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,cc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new js(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Gn({vertexShader:N0,fragmentShader:U0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Xe(new Hn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},hc=class extends zn{constructor(e,t){super();let n=this,s=null,r=1,o=null,a="local-floor",c=1,l=null,h=null,f=null,u=null,d=null,m=null,M=typeof XRWebGLBinding<"u",p=new cc,g={},y=t.getContextAttributes(),E=null,x=null,T=[],w=[],_=new Le,S=null,I=null,C=new tn;C.viewport=new Dt;let O=new tn;O.viewport=new Dt;let U=[C,O],q=new Fo,B=null,J=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(P){let D=T[P];return D===void 0&&(D=new ps,T[P]=D),D.getTargetRaySpace()},this.getControllerGrip=function(P){let D=T[P];return D===void 0&&(D=new ps,T[P]=D),D.getGripSpace()},this.getHand=function(P){let D=T[P];return D===void 0&&(D=new ps,T[P]=D),D.getHandSpace()};function H(P){let D=w.indexOf(P.inputSource);if(D===-1)return;let X=T[D];X!==void 0&&(X.update(P.inputSource,P.frame,l||o),X.dispatchEvent({type:P.type,data:P.inputSource}))}function z(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",he);for(let P=0;P<T.length;P++){let D=w[P];D!==null&&(w[P]=null,T[P].disconnect(D))}B=null,J=null,p.reset();for(let P in g)delete g[P];if(e.setRenderTarget(E),d=null,u=null,f=null,s=null,x=null,ke.stop(),n.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),I!==null){let P=I.camera;P.fov=I.fov,P.zoom=I.zoom,P.updateProjectionMatrix(),I=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(P){r=P,n.isPresenting===!0&&et("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(P){a=P,n.isPresenting===!0&&et("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(P){l=P},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return f===null&&M&&(f=new XRWebGLBinding(s,t)),f},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(P){if(s=P,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",z),s.addEventListener("inputsourceschange",he),y.xrCompatible!==!0&&await t.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),M&&"createProjectionLayer"in XRWebGLBinding.prototype){let X=null,ue=null,ie=null;y.depth&&(ie=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,X=y.stencil?oi:ei,ue=y.stencil?Xi:Dn);let _e={colorFormat:t.RGBA8,depthFormat:ie,scaleFactor:r};f=this.getBinding(),u=f.createProjectionLayer(_e),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),x=new mn(u.textureWidth,u.textureHeight,{format:Fn,type:dn,depthTexture:new ii(u.textureWidth,u.textureHeight,ue,void 0,void 0,void 0,void 0,void 0,void 0,X),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let X={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,t,X),s.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),x=new mn(d.framebufferWidth,d.framebufferHeight,{format:Fn,type:dn,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await s.requestReferenceSpace(a),ke.setContext(s),ke.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function he(P){for(let D=0;D<P.removed.length;D++){let X=P.removed[D],ue=w.indexOf(X);ue>=0&&(w[ue]=null,T[ue].disconnect(X))}for(let D=0;D<P.added.length;D++){let X=P.added[D],ue=w.indexOf(X);if(ue===-1){for(let _e=0;_e<T.length;_e++)if(_e>=w.length){w.push(X),ue=_e;break}else if(w[_e]===null){w[_e]=X,ue=_e;break}if(ue===-1)break}let ie=T[ue];ie&&ie.connect(X)}}function Y(P,D){D===null?P.matrixWorld.copy(P.matrix):P.matrixWorld.multiplyMatrices(D.matrixWorld,P.matrix),P.matrixWorldInverse.copy(P.matrixWorld).invert()}this.updateCamera=function(P){if(s===null)return;let D=P.near,X=P.far;p.texture!==null&&(p.depthNear>0&&(D=p.depthNear),p.depthFar>0&&(X=p.depthFar)),q.near=O.near=C.near=D,q.far=O.far=C.far=X,(B!==q.near||J!==q.far)&&(s.updateRenderState({depthNear:q.near,depthFar:q.far}),B=q.near,J=q.far),q.layers.mask=P.layers.mask|6,C.layers.mask=q.layers.mask&-5,O.layers.mask=q.layers.mask&-3;let ue=P.parent,ie=q.cameras;Y(q,ue);for(let _e=0;_e<ie.length;_e++)Y(ie[_e],ue);q.projectionMatrix.copy(C.projectionMatrix),q.projectionMatrixInverse.copy(C.projectionMatrixInverse),I===null&&P.isPerspectiveCamera&&(I={camera:P,fov:P.fov,zoom:P.zoom}),Q(P,q,ue)};function Q(P,D,X){X===null?P.matrix.copy(D.matrixWorld):(P.matrix.copy(X.matrixWorld),P.matrix.invert(),P.matrix.multiply(D.matrixWorld)),P.matrix.decompose(P.position,P.quaternion,P.scale),P.updateMatrixWorld(!0),P.projectionMatrix.copy(D.projectionMatrix),P.projectionMatrixInverse.copy(D.projectionMatrixInverse),P.isPerspectiveCamera&&(P.fov=us*2*Math.atan(1/P.projectionMatrix.elements[5]),P.zoom=1)}this.getCamera=function(){return q},this.getFoveation=function(){if(!(u===null&&d===null))return c},this.setFoveation=function(P){c=P,u!==null&&(u.fixedFoveation=P),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=P)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(q)},this.getCameraTexture=function(P){return g[P]};let ce=null;function Ae(P,D){if(h=D.getViewerPose(l||o),m=D,h!==null){let X=h.views;d!==null&&(e.setRenderTargetFramebuffer(x,d.framebuffer),e.setRenderTarget(x));let ue=!1;X.length!==q.cameras.length&&(q.cameras.length=0,ue=!0);for(let pe=0;pe<X.length;pe++){let ye=X[pe],Ee=null;if(d!==null)Ee=d.getViewport(ye);else{let be=f.getViewSubImage(u,ye);Ee=be.viewport,pe===0&&(e.setRenderTargetTextures(x,be.colorTexture,be.depthStencilTexture),e.setRenderTarget(x))}let j=U[pe];j===void 0&&(j=new tn,j.layers.enable(pe),j.viewport=new Dt,U[pe]=j),j.matrix.fromArray(ye.transform.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale),j.projectionMatrix.fromArray(ye.projectionMatrix),j.projectionMatrixInverse.copy(j.projectionMatrix).invert(),j.viewport.set(Ee.x,Ee.y,Ee.width,Ee.height),pe===0&&(q.matrix.copy(j.matrix),q.matrix.decompose(q.position,q.quaternion,q.scale)),ue===!0&&q.cameras.push(j)}let ie=s.enabledFeatures;if(ie&&ie.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&M){f=n.getBinding();let pe=f.getDepthInformation(X[0]);pe&&pe.isValid&&pe.texture&&p.init(pe,s.renderState)}if(ie&&ie.includes("camera-access")&&M){e.state.unbindTexture(),f=n.getBinding();for(let pe=0;pe<X.length;pe++){let ye=X[pe].camera;if(ye){let Ee=g[ye];Ee||(Ee=new js,g[ye]=Ee);let j=f.getCameraImage(ye);Ee.sourceTexture=j}}}}for(let X=0;X<T.length;X++){let ue=w[X],ie=T[X];ue!==null&&ie!==void 0&&ie.update(ue,D,l||o)}ce&&ce(P,D),D.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:D}),m=null}let ke=new au;ke.setAnimationLoop(Ae),this.setAnimationLoop=function(P){ce=P},this.dispose=function(){}}},F0=new It,_u=new st;_u.set(-1,0,0,0,1,0,0,0,1);function O0(i,e){function t(p,g){p.matrixAutoUpdate===!0&&p.updateMatrix(),g.value.copy(p.matrix)}function n(p,g){g.color.getRGB(p.fogColor.value,ql(i)),g.isFog?(p.fogNear.value=g.near,p.fogFar.value=g.far):g.isFogExp2&&(p.fogDensity.value=g.density)}function s(p,g,y,E,x){g.isNodeMaterial?g.uniformsNeedUpdate=!1:g.isMeshBasicMaterial?r(p,g):g.isMeshLambertMaterial?(r(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshToonMaterial?(r(p,g),f(p,g)):g.isMeshPhongMaterial?(r(p,g),h(p,g),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)):g.isMeshStandardMaterial?(r(p,g),u(p,g),g.isMeshPhysicalMaterial&&d(p,g,x)):g.isMeshMatcapMaterial?(r(p,g),m(p,g)):g.isMeshDepthMaterial?r(p,g):g.isMeshDistanceMaterial?(r(p,g),M(p,g)):g.isMeshNormalMaterial?r(p,g):g.isLineBasicMaterial?(o(p,g),g.isLineDashedMaterial&&a(p,g)):g.isPointsMaterial?c(p,g,y,E):g.isSpriteMaterial?l(p,g):g.isShadowMaterial?(p.color.value.copy(g.color),p.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function r(p,g){p.opacity.value=g.opacity,g.color&&p.diffuse.value.copy(g.color),g.emissive&&p.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.bumpMap&&(p.bumpMap.value=g.bumpMap,t(g.bumpMap,p.bumpMapTransform),p.bumpScale.value=g.bumpScale,g.side===ln&&(p.bumpScale.value*=-1)),g.normalMap&&(p.normalMap.value=g.normalMap,t(g.normalMap,p.normalMapTransform),p.normalScale.value.copy(g.normalScale),g.side===ln&&p.normalScale.value.negate()),g.displacementMap&&(p.displacementMap.value=g.displacementMap,t(g.displacementMap,p.displacementMapTransform),p.displacementScale.value=g.displacementScale,p.displacementBias.value=g.displacementBias),g.emissiveMap&&(p.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,p.emissiveMapTransform)),g.specularMap&&(p.specularMap.value=g.specularMap,t(g.specularMap,p.specularMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest);let y=e.get(g),E=y.envMap,x=y.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(F0.makeRotationFromEuler(x)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply(_u),p.reflectivity.value=g.reflectivity,p.ior.value=g.ior,p.refractionRatio.value=g.refractionRatio),g.lightMap&&(p.lightMap.value=g.lightMap,p.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,p.lightMapTransform)),g.aoMap&&(p.aoMap.value=g.aoMap,p.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,p.aoMapTransform))}function o(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform))}function a(p,g){p.dashSize.value=g.dashSize,p.totalSize.value=g.dashSize+g.gapSize,p.scale.value=g.scale}function c(p,g,y,E){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.size.value=g.size*y,p.scale.value=E*.5,g.map&&(p.map.value=g.map,t(g.map,p.uvTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function l(p,g){p.diffuse.value.copy(g.color),p.opacity.value=g.opacity,p.rotation.value=g.rotation,g.map&&(p.map.value=g.map,t(g.map,p.mapTransform)),g.alphaMap&&(p.alphaMap.value=g.alphaMap,t(g.alphaMap,p.alphaMapTransform)),g.alphaTest>0&&(p.alphaTest.value=g.alphaTest)}function h(p,g){p.specular.value.copy(g.specular),p.shininess.value=Math.max(g.shininess,1e-4)}function f(p,g){g.gradientMap&&(p.gradientMap.value=g.gradientMap)}function u(p,g){p.metalness.value=g.metalness,g.metalnessMap&&(p.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,p.metalnessMapTransform)),p.roughness.value=g.roughness,g.roughnessMap&&(p.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,p.roughnessMapTransform)),g.envMap&&(p.envMapIntensity.value=g.envMapIntensity)}function d(p,g,y){p.ior.value=g.ior,g.diffuseRoughness>0&&(p.diffuseRoughness.value=g.diffuseRoughness,g.diffuseRoughnessMap&&(p.diffuseRoughnessMap.value=g.diffuseRoughnessMap,t(g.diffuseRoughnessMap,p.diffuseRoughnessMapTransform))),g.sheen>0&&(p.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),p.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(p.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,p.sheenColorMapTransform)),g.sheenRoughnessMap&&(p.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,p.sheenRoughnessMapTransform))),g.clearcoat>0&&(p.clearcoat.value=g.clearcoat,p.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(p.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,p.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(p.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===ln&&p.clearcoatNormalScale.value.negate())),g.dispersion>0&&(p.dispersion.value=g.dispersion),g.retroreflectivity>0&&(p.retroreflectivity.value=g.retroreflectivity),g.iridescence>0&&(p.iridescence.value=g.iridescence,p.iridescenceIOR.value=g.iridescenceIOR,p.iridescenceThicknessMinimum.value=g.iridescenceThicknessMinimum,p.iridescenceThicknessMaximum.value=g.iridescenceThicknessMaximum,g.iridescenceMap&&(p.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,p.iridescenceMapTransform)),g.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),g.transmission>0&&(p.transmission.value=g.transmission,p.transmissionSamplerMap.value=y.texture,p.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(p.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,p.transmissionMapTransform)),p.thickness.value=g.thickness,g.thicknessMap&&(p.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=g.attenuationDistance,p.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(p.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(p.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=g.specularIntensity,p.specularColor.value.copy(g.specularColor),g.specularColorMap&&(p.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,p.specularColorMapTransform)),g.specularIntensityMap&&(p.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,g){g.matcap&&(p.matcap.value=g.matcap)}function M(p,g){let y=e.get(g).light;p.referencePosition.value.setFromMatrixPosition(y.matrixWorld),p.nearDistance.value=y.shadow.camera.near,p.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function B0(i,e,t,n){let s={},r={};function o(y,E){let x=E.program;n.uniformBlockBinding(y,x,s[y.id])}function a(y,E){let x=s[y.id];x===void 0&&(m(y),x=c(y),s[y.id]=x,y.addEventListener("dispose",p));let T=E.program;n.updateUBOMapping(y,T);let w=e.render.frame;r[y.id]!==w&&(l(y),r[y.id]=w)}function c(y){let E=i.createBuffer(),x=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,E),i.bufferData(i.UNIFORM_BUFFER,x,T),i.bindBuffer(i.UNIFORM_BUFFER,null),E}function l(y){let E=s[y.id],x=y.uniforms,T=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,E);for(let w=0,_=x.length;w<_;w++){let S=x[w];if(Array.isArray(S))for(let I=0,C=S.length;I<C;I++)h(S[I],w,I,T);else h(S,w,0,T)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function h(y,E,x,T){if(u(y,E,x,T)===!0){let w=y.__offset,_=y.value;if(Array.isArray(_)){let S=0;for(let I=0;I<_.length;I++){let C=_[I],O=M(C,!0);f(C,y.__data,S),S+=O.storage/Float32Array.BYTES_PER_ELEMENT}}else f(_,y.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,y.__data)}}function f(y,E,x){typeof y=="number"||typeof y=="boolean"?E[x]=y:y.isMatrix3?(E[x]=y.elements[0],E[x+1]=y.elements[1],E[x+2]=y.elements[2],E[x+3]=0,E[x+4]=y.elements[3],E[x+5]=y.elements[4],E[x+6]=y.elements[5],E[x+7]=0,E[x+8]=y.elements[6],E[x+9]=y.elements[7],E[x+10]=y.elements[8],E[x+11]=0):ArrayBuffer.isView(y)?E.set(y.subarray(0,E.length-x),x):y.toArray(E,x)}function u(y,E,x,T){let w=y.value,_=E+"_"+x;if(Array.isArray(w)){T[_]===void 0&&(T[_]=[]);let S=T[_],I=!1;for(let C=0;C<w.length;C++)d(w[C],S,C)===!0&&(I=!0);return I}return d(w,T,_)}function d(y,E,x){if(E[x]===void 0)return typeof y=="number"||typeof y=="boolean"?E[x]=y:ArrayBuffer.isView(y)?E[x]=y.slice():E[x]=y.clone(),!0;{let T=E[x];if(typeof y=="number"||typeof y=="boolean"){if(T!==y)return E[x]=y,!0}else{if(ArrayBuffer.isView(y))return!0;if(T.equals(y)===!1)return T.copy(y),!0}}return!1}function m(y){let E=y.uniforms,x=0,T=16;for(let _=0,S=E.length;_<S;_++){let I=Array.isArray(E[_])?E[_]:[E[_]];for(let C=0,O=I.length;C<O;C++){let U=I[C],q=Array.isArray(U.value)?U.value:[U.value],B=Array.isArray(E[_])||Array.isArray(U.value),J=x;for(let z=0,he=q.length;z<he;z++){let Y=q[z],Q=M(Y,B),ce=x%T,Ae=ce%Q.boundary,ke=ce+Ae;x+=Ae,ke!==0&&T-ke<Q.storage&&(x+=T-ke),z===0&&(J=x),x+=Q.storage}let H=U.type==="int"?Int32Array:U.type==="uint"?Uint32Array:Float32Array;U.__data=new H((x-J)/Float32Array.BYTES_PER_ELEMENT),U.__offset=J}}let w=x%T;return w>0&&(x+=T-w),y.__size=x,y.__cache={},this}function M(y,E){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=16,x.storage=48):y.isMatrix4?(x.boundary=16,x.storage=64):y.isTexture?et("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(x.boundary=16,x.storage=y.byteLength):et("WebGLRenderer: Unsupported uniform value type.",y),E===!0&&(x.boundary=16,x.storage=Math.ceil(x.storage/16)*16),x}function p(y){let E=y.target;E.removeEventListener("dispose",p),i.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function g(){for(let y in s)i.deleteBuffer(s[y]);s={},r={}}return{bind:o,update:a,dispose:g}}var z0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wn=null;function k0(){return Wn===null&&(Wn=new mo(z0,16,16,wi,Un),Wn.name="DFG_LUT",Wn.minFilter=on,Wn.magFilter=on,Wn.wrapS=Bn,Wn.wrapT=Bn,Wn.generateMipmaps=!1,Wn.needsUpdate=!0),Wn}var Aa=class{constructor(e={}){let{canvas:t=Th(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:u=!1,outputBufferType:d=dn}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let M=d,p=new Set([qo,Xo,Wo]),g=new Set([dn,Dn,Ts,Xi,Go,Vo]),y=new Uint32Array(4),E=new Int32Array(4),x={textures:[],min:[],max:[],resolution:[]},T=null,w=null,_=[],S=[],I=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,O=!1,U=null,q=null,B=null,J=null;this._outputColorSpace=en;let H=0,z=0,he=null,Y=-1,Q=null,ce=new Dt,Ae=new Dt,ke=null,P=new ht(0),D=0,X=t.width,ue=t.height,ie=1,_e=null,Be=null,pe=new Dt(0,0,X,ue),ye=new Dt(0,0,X,ue),Ee=!1,j=new _i,be=new go,Se=!1,Ue=!1,Ce=new It,tt=new F,Ve=new Dt,Qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},it=!1;function dt(){return he===null?ie:1}let G=n;function ct(b,V){return t.getContext(b,V)}let ot,at,Ie,wt,We,Je,R,v,Z,ve,fe,Me,Te,oe,ae,we,L,le,se,A,k,W,me;try{let b={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:f};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"187"}`),t.addEventListener("webglcontextlost",Pe,!1),t.addEventListener("webglcontextrestored",ne,!1),t.addEventListener("webglcontextcreationerror",xe,!1),G===null){let V="webgl2";if(G=ct(V,b),G===null)throw ct(V)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ne()}catch(b){throw t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),nt("WebGLRenderer: "+b.message),b}function Ne(){ot=new Km(G),ot.init(),k=new D0(G,ot),at=new km(G,ot,e,k),Ie=new P0(G,ot),at.reversedDepthBuffer&&u&&Ie.buffers.depth.setReversed(!0),q=G.createFramebuffer(),B=G.createFramebuffer(),J=G.createFramebuffer(),wt=new eg(G),We=new _0,Je=new L0(G,ot,Ie,We,at,k,wt),R=new $m(C),v=new tf(G),W=new Bm(G,v),Z=new jm(G,v,wt,W),ve=new ng(G,Z,v,W,wt),le=new tg(G,at,Je),ae=new Hm(We),fe=new g0(C,R,ot,at,W,ae),Me=new O0(C,We),Te=new y0,oe=new w0(ot),L=new Om(C,R,Ie,ve,m,c),we=new I0(C,ve,at),me=new B0(G,wt,at,Ie),se=new zm(G,ot,wt),A=new Qm(G,ot,wt),wt.programs=fe.programs,C.capabilities=at,C.extensions=ot,C.properties=We,C.renderLists=Te,C.shadowMap=we,C.state=Ie,C.info=wt}M!==dn&&(I=new sg(M,t.width,t.height,a,s,r));let re=new hc(C,G);this.xr=re,this.getContext=function(){return G},this.getContextAttributes=function(){return G.getContextAttributes()},this.forceContextLoss=function(){let b=ot.get("WEBGL_lose_context");b&&b.loseContext()},this.forceContextRestore=function(){let b=ot.get("WEBGL_lose_context");b&&b.restoreContext()},this.getPixelRatio=function(){return ie},this.setPixelRatio=function(b){b!==void 0&&(ie=b,this.setSize(X,ue,!1))},this.getSize=function(b){return b.set(X,ue)},this.setSize=function(b,V,te=!0){if(re.isPresenting){et("WebGLRenderer: Can't change size while VR device is presenting.");return}X=b,ue=V,t.width=Math.floor(b*ie),t.height=Math.floor(V*ie),te===!0&&(t.style.width=b+"px",t.style.height=V+"px"),I!==null&&I.setSize(t.width,t.height),this.setViewport(0,0,b,V)},this.getDrawingBufferSize=function(b){return b.set(X*ie,ue*ie).floor()},this.setDrawingBufferSize=function(b,V,te){X=b,ue=V,ie=te,t.width=Math.floor(b*te),t.height=Math.floor(V*te),this.setViewport(0,0,b,V)},this.setEffects=function(b){if(M===dn){nt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(b){for(let V=0;V<b.length;V++)if(b[V].isOutputPass===!0){et("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}I.setEffects(b||[])},this.getCurrentViewport=function(b){return b.copy(ce)},this.getViewport=function(b){return b.copy(pe)},this.setViewport=function(b,V,te,$){b.isVector4?pe.set(b.x,b.y,b.z,b.w):pe.set(b,V,te,$),Ie.viewport(ce.copy(pe).multiplyScalar(dt()).round())},this.getScissor=function(b){return b.copy(ye)},this.setScissor=function(b,V,te,$){b.isVector4?ye.set(b.x,b.y,b.z,b.w):ye.set(b,V,te,$),Ie.scissor(Ae.copy(ye).multiplyScalar(dt()).round())},this.getScissorTest=function(){return Ee},this.setScissorTest=function(b){Ie.setScissorTest(Ee=b)},this.setOpaqueSort=function(b){_e=b},this.setTransparentSort=function(b){Be=b},this.getClearColor=function(b){return b.copy(L.getClearColor())},this.setClearColor=function(){L.setClearColor(...arguments)},this.getClearAlpha=function(){return L.getClearAlpha()},this.setClearAlpha=function(){L.setClearAlpha(...arguments)},this.clear=function(b=!0,V=!0,te=!0){let $=0;if(b){let K=!1;if(he!==null){let Oe=he.texture.format;K=p.has(Oe)}if(K){let Oe=he.texture.type,qe=g.has(Oe),Fe=L.getClearColor(),Ge=L.getClearAlpha(),$e=Fe.r,rt=Fe.g,mt=Fe.b;qe?(y[0]=$e,y[1]=rt,y[2]=mt,y[3]=Ge,G.clearBufferuiv(G.COLOR,0,y)):(E[0]=$e,E[1]=rt,E[2]=mt,E[3]=Ge,G.clearBufferiv(G.COLOR,0,E))}else $|=G.COLOR_BUFFER_BIT}V&&($|=G.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),te&&($|=G.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),$!==0&&G.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(b){b.setRenderer(this),U=b},this.dispose=function(){t.removeEventListener("webglcontextlost",Pe,!1),t.removeEventListener("webglcontextrestored",ne,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),L.dispose(),Te.dispose(),oe.dispose(),Je.dispose(),We.dispose(),R.dispose(),ve.dispose(),Z.dispose(),W.dispose(),me.dispose(),fe.dispose(),re.dispose(),re.removeEventListener("sessionstart",He),re.removeEventListener("sessionend",Mt),ge.stop()};function Pe(b){b.preventDefault(),Hl("WebGLRenderer: Context Lost."),O=!0}function ne(){Hl("WebGLRenderer: Context Restored."),O=!1;let b=wt.autoReset,V=we.enabled,te=we.autoUpdate,$=we.needsUpdate,K=we.type;Ne(),wt.autoReset=b,we.enabled=V,we.autoUpdate=te,we.needsUpdate=$,we.type=K}function xe(b){nt("WebGLRenderer: A WebGL context could not be created. Reason: ",b.statusMessage)}function je(b){let V=b.target;V.removeEventListener("dispose",je),yt(V)}function yt(b){N(b),We.remove(b)}function N(b){let V=We.get(b).programs;V!==void 0&&(V.forEach(function(te){fe.releaseProgram(te)}),b.isShaderMaterial&&fe.releaseShaderCache(b))}this.renderBufferDirect=function(b,V,te,$,K,Oe){V===null&&(V=Qe);let qe=K.isMesh&&K.matrixWorld.determinantAffine()<0,Fe=Sn(b,V,te,$,K);Ie.setMaterial($,qe);let Ge=te.index,$e=1;if($.wireframe===!0){if(Ge=Z.getWireframeAttribute(te),Ge===void 0)return;$e=2}let rt=te.drawRange,mt=te.attributes.position,Ye=rt.start*$e,gt=(rt.start+rt.count)*$e;Oe!==null&&(Ye=Math.max(Ye,Oe.start*$e),gt=Math.min(gt,(Oe.start+Oe.count)*$e)),Ge!==null?(Ye=Math.max(Ye,0),gt=Math.min(gt,Ge.count)):mt!=null&&(Ye=Math.max(Ye,0),gt=Math.min(gt,mt.count));let Ht=gt-Ye;if(Ht<0||Ht===1/0)return;W.setup(K,$,Fe,te,Ge);let Pt,Ct=se;if(Ge!==null&&(Pt=v.get(Ge),Ct=A,Ct.setIndex(Pt)),K.isMesh)$.wireframe===!0?(Ie.setLineWidth($.wireframeLinewidth*dt()),Ct.setMode(G.LINES)):Ct.setMode(G.TRIANGLES);else if(K.isLine){let $t=$.linewidth;$t===void 0&&($t=1),Ie.setLineWidth($t*dt()),K.isLineSegments?Ct.setMode(G.LINES):K.isLineLoop?Ct.setMode(G.LINE_LOOP):Ct.setMode(G.LINE_STRIP)}else K.isPoints?Ct.setMode(G.POINTS):K.isSprite&&Ct.setMode(G.TRIANGLES);if(K.isBatchedMesh)if(ot.get("WEBGL_multi_draw"))Ct.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let $t=K._multiDrawStarts,Ze=K._multiDrawCounts,rn=K._multiDrawCount,bt=Ge?v.get(Ge).bytesPerElement:1,Ri=We.get($).currentProgram.getUniforms();for(let Kt=0;Kt<rn;Kt++)Ri.setValue(G,"_gl_DrawID",Kt),Ct.render($t[Kt]/bt,Ze[Kt])}else if(K.isInstancedMesh)Ct.renderInstances(Ye,Ht,K.count);else if(te.isInstancedBufferGeometry){let $t=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Ze=Math.min(te.instanceCount,$t);Ct.renderInstances(Ye,Ht,Ze)}else Ct.render(Ye,Ht)};function ee(b,V,te,$){U!==null&&b.isNodeMaterial&&U.setObject($,b),Se===!0&&ae.setState(b,te,!1),b.transparent===!0&&b.side===un&&b.forceSinglePass===!1?(b.side=ln,b.needsUpdate=!0,Rt(b,V,$),b.side=Ei,b.needsUpdate=!0,Rt(b,V,$),b.side=un):Rt(b,V,$)}this.compile=function(b,V,te=null){te===null&&(te=b),U!==null&&U.renderStart(b,V,te),w=oe.get(te),w.init(V),S.push(w),te.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),b!==te&&b.traverseVisible(function(K){K.isLight&&K.layers.test(V.layers)&&(w.pushLight(K),K.castShadow&&w.pushShadow(K))}),w.setupLights(),U!==null&&U.updateLights(w.state.lightsArray),Ue=this.localClippingEnabled,Se=ae.init(this.clippingPlanes,Ue),Se===!0&&ae.setGlobalState(this.clippingPlanes,V),U!==null&&we.render(w.state.shadowsArray,te,V);let $=new Set;return b.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Oe=K.material;if(Oe)if(Array.isArray(Oe))for(let qe=0;qe<Oe.length;qe++){let Fe=Oe[qe];ee(Fe,te,V,K),$.add(Fe)}else ee(Oe,te,V,K),$.add(Oe)}),w=S.pop(),U!==null&&U.renderEnd(),$},this.compileAsync=function(b,V,te=null){let $=this.compile(b,V,te);return new Promise(K=>{function Oe(){if($.forEach(function(qe){let Ge=We.get(qe).currentProgram;(Ge===void 0||Ge.isReady())&&$.delete(qe)}),$.size===0){K(b);return}setTimeout(Oe,10)}ot.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let de=null;function Re(b){de&&de(b)}function He(){ge.stop()}function Mt(){ge.start()}let ge=new au;ge.setAnimationLoop(Re),typeof self<"u"&&ge.setContext(self),this.setAnimationLoop=function(b){de=b,re.setAnimationLoop(b),b===null?ge.stop():ge.start()},re.addEventListener("sessionstart",He),re.addEventListener("sessionend",Mt),this.render=function(b,V){if(V!==void 0&&V.isCamera!==!0){nt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(O===!0)return;U!==null&&U.renderStart(b,V);let te=re.enabled===!0&&re.isPresenting===!0,$=I!==null&&(he===null||te)&&I.begin(C,he);if(b.matrixWorldAutoUpdate===!0&&b.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),re.enabled===!0&&re.isPresenting===!0&&(I===null||I.isCompositing()===!1)&&(re.cameraAutoUpdate===!0&&re.updateCamera(V),V=re.getCamera()),b.isScene===!0&&b.onBeforeRender(C,b,V,he),w=oe.get(b,S.length),w.init(V),w.state.textureUnits=Je.getTextureUnits(),S.push(w),Ce.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),V.isArrayCamera?be.setFromArrayCamera(V):j.setFromProjectionMatrix(Ce,yn,V.reversedDepth),Ue=this.localClippingEnabled,Se=ae.init(this.clippingPlanes,Ue),T=Te.get(b,_.length),T.init(),_.push(T),this.info.render.frame++,re.enabled===!0&&re.isPresenting===!0){let qe=C.xr.getDepthSensingMesh();qe!==null&&Ke(qe,V,-1/0,C.sortObjects)}Ke(b,V,0,C.sortObjects),T.finish(),U!==null&&U.updateLights(w.state.lightsArray),C.sortObjects===!0&&T.sort(_e,Be),it=re.enabled===!1||re.isPresenting===!1||re.hasDepthSensing()===!1,it&&L.addToRenderList(T,b),this.info.autoReset===!0&&this.info.reset(),Se===!0&&ae.beginShadows();let K=w.state.shadowsArray;if(we.render(K,b,V),Se===!0&&ae.endShadows(),($&&I.hasRenderPass())===!1){let qe=T.opaque,Fe=T.transmissive;if(w.setupLights(),V.isArrayCamera){let Ge=V.cameras;if(Fe.length>0)for(let $e=0,rt=Ge.length;$e<rt;$e++){let mt=Ge[$e];Tt(qe,Fe,b,mt)}it&&L.render(b);for(let $e=0,rt=Ge.length;$e<rt;$e++){let mt=Ge[$e];vt(T,b,mt,mt.viewport)}}else Fe.length>0&&Tt(qe,Fe,b,V),it&&L.render(b),vt(T,b,V)}he!==null&&z===0&&(Je.updateMultisampleRenderTarget(he),Je.updateRenderTargetMipmap(he)),$&&I.end(C),b.isScene===!0&&b.onAfterRender(C,b,V),W.resetDefaultState(),Y=-1,Q=null,S.pop(),S.length>0?(w=S[S.length-1],Je.setTextureUnits(w.state.textureUnits),Se===!0&&ae.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,_.pop(),_.length>0?T=_[_.length-1]:T=null,U!==null&&U.renderEnd()};function Ke(b,V,te,$){if(b.visible===!1)return;if(b.layers.test(V.layers)){if(b.isGroup)te=b.renderOrder;else if(b.isLOD)b.autoUpdate===!0&&b.update(V);else if(b.isLight)w.pushLight(b),b.castShadow&&w.pushShadow(b);else if(b.isSprite){let qe=V.isArrayCamera?be:j;if(!b.frustumCulled||b.intersectsFrustum(qe)){$&&Ve.setFromMatrixPosition(b.matrixWorld).applyMatrix4(Ce);let Fe=ve.update(b),Ge=b.material;Ge.visible&&T.push(b,Fe,Ge,te,Ve.z,null,V)}}else if(b.isMesh||b.isLine||b.isPoints){let qe=V.isArrayCamera?be:j;if(!b.frustumCulled||b.intersectsFrustum(qe)){let Fe=ve.update(b),Ge=b.material;if($&&(b.boundingSphere!==void 0?(b.boundingSphere===null&&b.computeBoundingSphere(),Ve.copy(b.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Ve.copy(Fe.boundingSphere.center)),Ve.applyMatrix4(b.matrixWorld).applyMatrix4(Ce)),Array.isArray(Ge)){let $e=Fe.groups;for(let rt=0,mt=$e.length;rt<mt;rt++){let Ye=$e[rt],gt=Ge[Ye.materialIndex];gt&&gt.visible&&T.push(b,Fe,gt,te,Ve.z,Ye,V)}}else Ge.visible&&T.push(b,Fe,Ge,te,Ve.z,null,V)}}}let Oe=b.children;for(let qe=0,Fe=Oe.length;qe<Fe;qe++)Ke(Oe[qe],V,te,$)}function vt(b,V,te,$){let{opaque:K,transmissive:Oe,transparent:qe}=b;w.setupLightsView(te),Se===!0&&ae.setGlobalState(C.clippingPlanes,te),$&&Ie.viewport(ce.copy($)),K.length>0&&At(K,V,te),Oe.length>0&&At(Oe,V,te),qe.length>0&&At(qe,V,te),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function Tt(b,V,te,$){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[$.id]===void 0){let Ye=ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[$.id]=new mn(1,1,{generateMipmaps:!0,type:Ye?Un:dn,minFilter:ri,samples:Math.max(4,at.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:_t.workingColorSpace})}let Oe=w.state.transmissionRenderTarget[$.id],qe=$.viewport||ce;Oe.setSize(qe.z*C.transmissionResolutionScale,qe.w*C.transmissionResolutionScale);let Fe=C.getRenderTarget(),Ge=C.getActiveCubeFace(),$e=C.getActiveMipmapLevel();C.setRenderTarget(Oe),C.getClearColor(P),D=C.getClearAlpha(),D<1&&C.setClearColor(16777215,.5),C.clear(),it&&L.render(te);let rt=C.toneMapping;C.toneMapping=Vn;let mt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),w.setupLightsView($),Se===!0&&ae.setGlobalState(C.clippingPlanes,$),At(b,te,$),Je.updateMultisampleRenderTarget(Oe),Je.updateRenderTargetMipmap(Oe),ot.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let gt=0,Ht=V.length;gt<Ht;gt++){let Pt=V[gt],{object:Ct,geometry:$t,material:Ze,group:rn}=Pt;if(Ze.side===un&&Ct.layers.test($.layers)){let bt=Ze.side;Ze.side=ln,Ze.needsUpdate=!0,cn(Ct,te,$,$t,Ze,rn),Ze.side=bt,Ze.needsUpdate=!0,Ye=!0}}Ye===!0&&(Je.updateMultisampleRenderTarget(Oe),Je.updateRenderTargetMipmap(Oe))}C.setRenderTarget(Fe,Ge,$e),C.setClearColor(P,D),mt!==void 0&&($.viewport=mt),C.toneMapping=rt}function At(b,V,te){let $=V.isScene===!0?V.overrideMaterial:null;for(let K=0,Oe=b.length;K<Oe;K++){let qe=b[K],{object:Fe,geometry:Ge,group:$e}=qe,rt=qe.material;rt.allowOverride===!0&&$!==null&&(rt=$),Fe.layers.test(te.layers)&&cn(Fe,V,te,Ge,rt,$e)}}function cn(b,V,te,$,K,Oe){U!==null&&K.isNodeMaterial&&U.setObject(b,K),b.onBeforeRender(C,V,te,$,K,Oe),b.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,b.matrixWorld),b.normalMatrix.getNormalMatrix(b.modelViewMatrix),K.onBeforeRender(C,V,te,$,b,Oe),K.transparent===!0&&K.side===un&&K.forceSinglePass===!1?(K.side=ln,K.needsUpdate=!0,C.renderBufferDirect(te,V,$,K,b,Oe),K.side=Ei,K.needsUpdate=!0,C.renderBufferDirect(te,V,$,K,b,Oe),K.side=un):C.renderBufferDirect(te,V,$,K,b,Oe),b.onAfterRender(C,V,te,$,K,Oe)}function qn(b){let V=0;for(let te of b)te.texture!==null&&V++;return V}function Rt(b,V,te){V.isScene!==!0&&(V=Qe);let $=We.get(b),K=w.state.lights,Oe=w.state.shadowsArray,qe=K.state.version,Fe=fe.getParameters(b,K.state,Oe,V,te,w.state.lightProbeGridArray),Ge=fe.getProgramCacheKey(Fe),$e=$.programs;$.environment=b.isMeshStandardMaterial||b.isMeshLambertMaterial||b.isMeshPhongMaterial?V.environment:null,$.fog=V.fog;let rt=b.isMeshStandardMaterial||b.isMeshLambertMaterial&&!b.envMap||b.isMeshPhongMaterial&&!b.envMap;$.envMap=R.get(b.envMap||$.environment,rt),$.envMapRotation=$.environment!==null&&b.envMap===null?V.environmentRotation:b.envMapRotation,$e===void 0&&(b.addEventListener("dispose",je),$e=new Map,$.programs=$e,$.programVariants=new Map);let mt=$e.get(Ge);if(mt!==void 0){if($.currentProgram===mt&&$.lightsStateVersion===qe)return Cs(b,Fe),mt}else Fe.uniforms=fe.getUniforms(b),U!==null&&b.isNodeMaterial&&U.build(b,te,Fe),b.onBeforeCompile(Fe,C),mt=fe.acquireProgram(Fe,Ge),$e.set(Ge,mt),$.uniforms=Fe.uniforms;let Ye=$.uniforms;return(!b.isShaderMaterial&&!b.isRawShaderMaterial||b.clipping===!0)&&(Ye.clippingPlanes=ae.uniform),Cs(b,Fe),$.needsLights=Ai(b),$.lightsStateVersion=qe,$.needsLights&&(Ye.ambientLightColor.value=K.state.ambient,Ye.lightProbe.value=K.state.probe,Ye.sunLights.value=K.state.sun,Ye.sunLightShadows.value=K.state.sunShadow,Ye.directionalLights.value=K.state.directional,Ye.directionalLightShadows.value=K.state.directionalShadow,Ye.spotLights.value=K.state.spot,Ye.spotLightShadows.value=K.state.spotShadow,Ye.rectAreaLights.value=K.state.rectArea,Ye.ltc_1.value=K.state.rectAreaLTC1,Ye.ltc_2.value=K.state.rectAreaLTC2,Ye.pointLights.value=K.state.point,Ye.pointLightShadows.value=K.state.pointShadow,Ye.hemisphereLights.value=K.state.hemi,Ye.sunShadowMatrix.value=K.state.sunShadowMatrix,Ye.sunShadowCascade.value=K.state.sunShadowCascade,Ye.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Ye.spotLightMatrix.value=K.state.spotLightMatrix,Ye.spotLightMap.value=K.state.spotLightMap,Ye.pointShadowMatrix.value=K.state.pointShadowMatrix),$.numLightProbeGrids=qn(w.state.lightProbeGridArray),$.currentProgram=mt,$.uniformsList=null,mt}function sn(b,V,te,$,K){let Oe=We.get(b),qe=Oe.currentProgram.id+","+$+","+K,Fe=Oe.programVariants.get(qe);return Fe===void 0?(Fe=Rt(b,V,te),Oe.programVariants.set(qe,Fe)):(Oe.currentProgram=Fe,Oe.uniformsList=null,Oe.outputColorSpace=$,Oe.toneMapping=K),Fe}function ci(b){if(b.uniformsList===null){let V=b.currentProgram.getUniforms();b.uniformsList=As.seqWithValue(V.seq,b.uniforms)}return b.uniformsList}function Cs(b,V){let te=We.get(b);te.outputColorSpace=V.outputColorSpace,te.batching=V.batching,te.batchingColor=V.batchingColor,te.instancing=V.instancing,te.instancingColor=V.instancingColor,te.instancingMorph=V.instancingMorph,te.skinning=V.skinning,te.morphTargets=V.morphTargets,te.morphNormals=V.morphNormals,te.morphColors=V.morphColors,te.morphTargetsCount=V.morphTargetsCount,te.numClippingPlanes=V.numClippingPlanes,te.numIntersection=V.numClipIntersection,te.vertexAlphas=V.vertexAlphas,te.vertexTangents=V.vertexTangents,te.toneMapping=V.toneMapping}function Sn(b,V,te,$,K){V.isScene!==!0&&(V=Qe),Je.resetTextureUnits();let Oe=V.fog,qe=$.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial?V.environment:null,Fe=he===null?C.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:_t.workingColorSpace,Ge=$.isMeshStandardMaterial||$.isMeshLambertMaterial&&!$.envMap||$.isMeshPhongMaterial&&!$.envMap,$e=R.get($.envMap||qe,Ge),rt=$.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,mt=!!te.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Ye=!!te.morphAttributes.position,gt=!!te.morphAttributes.normal,Ht=!!te.morphAttributes.color,Pt=Vn;$.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(Pt=C.toneMapping);let Ct=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,$t=Ct!==void 0?Ct.length:0,Ze=We.get($),rn=w.state.lights;if(Se===!0&&(Ue===!0||b!==Q)){let Ft=b===Q&&$.id===Y;ae.setState($,b,Ft)}let bt=!1,Ri=!1;$.version===Ze.__version?Ze.needsLights&&Ze.lightsStateVersion!==rn.state.version||K.isBatchedMesh&&Ze.batching===!1||!K.isBatchedMesh&&Ze.batching===!0||K.isBatchedMesh&&Ze.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Ze.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Ze.instancing===!1||!K.isInstancedMesh&&Ze.instancing===!0||K.isSkinnedMesh&&Ze.skinning===!1||!K.isSkinnedMesh&&Ze.skinning===!0||K.isInstancedMesh&&Ze.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Ze.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Ze.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Ze.instancingMorph===!1&&K.morphTexture!==null||Ze.envMap!==$e||$.fog===!0&&Ze.fog!==Oe||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ae.numPlanes||Ze.numIntersection!==ae.numIntersection)||Ze.vertexAlphas!==rt||Ze.vertexTangents!==mt||Ze.morphTargets!==Ye||Ze.morphNormals!==gt||Ze.morphColors!==Ht||Ze.morphTargetsCount!==$t||Ze.numLightProbeGrids!==qn(w.state.lightProbeGridArray)?bt=!0:(Ze.outputColorSpace!==Fe||Ze.toneMapping!==Pt)&&(Ri=!0):(bt=!0,Ze.__version=$.version);let Kt=Ze.currentProgram;(bt===!0||Ri===!0)&&(Kt=Ri===!0?sn($,V,K,Fe,Pt):Rt($,V,K),U&&$.isNodeMaterial&&U.onUpdateProgram($,Kt,Ze));let Rr=!1,hi=!1,Ci=!1,St=Kt.getUniforms(),Zt=Ze.uniforms;if(Ie.useProgram(Kt.program)&&(Rr=!0,hi=!0,Ci=!0),$.id!==Y&&(Y=$.id,hi=!0),Rr||Q!==b){Ie.buffers.depth.getReversed()&&b.reversedDepth!==!0&&(b._reversedDepth=!0,b.updateProjectionMatrix()),St.setValue(G,"projectionMatrix",b.projectionMatrix),St.setValue(G,"viewMatrix",b.matrixWorldInverse);let Xt=St.map.cameraPosition;Xt!==void 0&&Xt.setValue(G,tt.setFromMatrixPosition(b.matrixWorld)),at.logarithmicDepthBuffer&&St.setValue(G,"logDepthBufFC",2/(Math.log(b.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&St.setValue(G,"isOrthographic",b.isOrthographicCamera===!0),Q!==b&&(Q=b,hi=!0,Ci=!0)}if(Ze.needsLights&&(rn.state.sunShadowMap.length>0&&St.setValue(G,"sunShadowMap",rn.state.sunShadowMap,Je),rn.state.directionalShadowMap.length>0&&St.setValue(G,"directionalShadowMap",rn.state.directionalShadowMap,Je),rn.state.spotShadowMap.length>0&&St.setValue(G,"spotShadowMap",rn.state.spotShadowMap,Je),rn.state.pointShadowMap.length>0&&St.setValue(G,"pointShadowMap",rn.state.pointShadowMap,Je)),K.isSkinnedMesh){St.setOptional(G,K,"bindMatrix"),St.setOptional(G,K,"bindMatrixInverse");let Ft=K.skeleton;Ft&&(Ft.boneTexture===null&&Ft.computeBoneTexture(),St.setValue(G,"boneTexture",Ft.boneTexture,Je))}K.isBatchedMesh&&(St.setOptional(G,K,"batchingTexture"),St.setValue(G,"batchingTexture",K._matricesTexture,Je),St.setOptional(G,K,"batchingIdTexture"),St.setValue(G,"batchingIdTexture",K._indirectTexture,Je),St.setOptional(G,K,"batchingColorTexture"),K._colorsTexture!==null&&St.setValue(G,"batchingColorTexture",K._colorsTexture,Je));let En=te.morphAttributes;if((En.position!==void 0||En.normal!==void 0||En.color!==void 0)&&le.update(K,te,Kt),(hi||Ze.receiveShadow!==K.receiveShadow)&&(Ze.receiveShadow=K.receiveShadow,St.setValue(G,"receiveShadow",K.receiveShadow)),($.isMeshStandardMaterial||$.isMeshLambertMaterial||$.isMeshPhongMaterial)&&$.envMap===null&&V.environment!==null&&(Zt.envMapIntensity.value=V.environmentIntensity),Zt.dfgLUT!==void 0&&(Zt.dfgLUT.value=k0()),hi){if(St.setValue(G,"toneMappingExposure",C.toneMappingExposure),Ze.needsLights&&bn(Zt,Ci),Oe&&$.fog===!0&&Me.refreshFogUniforms(Zt,Oe),Me.refreshMaterialUniforms(Zt,$,ie,ue,w.state.transmissionRenderTarget[b.id]),Ze.needsLights&&Ze.numLightProbeGrids>0){let Ft=x,Xt=0;for(let Yn of w.state.lightProbeGridArray)Yn.texture!==null&&(Ft.textures[Xt]=Yn.texture,Ft.min[Xt]=Yn.boundingBox.min,Ft.max[Xt]=Yn.boundingBox.max,Ft.resolution[Xt]=Yn.resolution,Xt++);for(let Yn in Ft)Ft[Yn].length=Xt;Zt.probesSH.value=Ft.textures,Zt.probesMin.value=Ft.min,Zt.probesMax.value=Ft.max,Zt.probesResolution.value=Ft.resolution}As.upload(G,ci(Ze),Zt,Je)}if($.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(As.upload(G,ci(Ze),Zt,Je),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&St.setValue(G,"center",K.center),St.setValue(G,"modelViewMatrix",K.modelViewMatrix),St.setValue(G,"normalMatrix",K.normalMatrix),St.setValue(G,"modelMatrix",K.matrixWorld),$.uniformsGroups!==void 0){let Ft=$.uniformsGroups;for(let Xt=0,Yn=Ft.length;Xt<Yn;Xt++){let dc=Ft[Xt];me.update(dc,Kt),me.bind(dc,Kt)}}return Kt}function bn(b,V){b.ambientLightColor.needsUpdate=V,b.lightProbe.needsUpdate=V,b.sunLights.needsUpdate=V,b.sunLightShadows.needsUpdate=V,b.directionalLights.needsUpdate=V,b.directionalLightShadows.needsUpdate=V,b.pointLights.needsUpdate=V,b.pointLightShadows.needsUpdate=V,b.spotLights.needsUpdate=V,b.spotLightShadows.needsUpdate=V,b.rectAreaLights.needsUpdate=V,b.hemisphereLights.needsUpdate=V}function Ai(b){return b.isMeshLambertMaterial||b.isMeshToonMaterial||b.isMeshPhongMaterial||b.isMeshStandardMaterial||b.isShadowMaterial||b.isShaderMaterial&&b.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return z},this.getRenderTarget=function(){return he},this.setRenderTargetTextures=function(b,V,te){let $=We.get(b);$.__autoAllocateDepthBuffer=b.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),We.get(b.texture).__webglTexture=V,We.get(b.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:te,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(b,V){let te=We.get(b);te.__webglFramebuffer=V,te.__useDefaultFramebuffer=V===void 0},this.setRenderTarget=function(b,V=0,te=0){he=b,H=V,z=te;let $=null,K=!1,Oe=!1;if(b){let Fe=We.get(b);if(Fe.__useDefaultFramebuffer!==void 0){Ie.bindFramebuffer(G.FRAMEBUFFER,Fe.__webglFramebuffer),ce.copy(b.viewport),Ae.copy(b.scissor),ke=b.scissorTest,Ie.viewport(ce),Ie.scissor(Ae),Ie.setScissorTest(ke),Y=-1;return}else if(Fe.__webglFramebuffer===void 0)Je.setupRenderTarget(b);else if(Fe.__hasExternalTextures)Je.rebindTextures(b,We.get(b.texture).__webglTexture,We.get(b.depthTexture).__webglTexture);else if(b.depthBuffer){let rt=b.depthTexture;if(Fe.__boundDepthTexture!==rt){if(rt!==null&&We.has(rt)&&(b.width!==rt.image.width||b.height!==rt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Je.setupDepthRenderbuffer(b)}}let Ge=b.texture;(Ge.isData3DTexture||Ge.isDataArrayTexture||Ge.isCompressedArrayTexture)&&(Oe=!0);let $e=We.get(b).__webglFramebuffer;b.isWebGLCubeRenderTarget?(Array.isArray($e[V])?$=$e[V][te]:$=$e[V],K=!0):b.samples>0&&Je.useMultisampledRTT(b)===!1?$=We.get(b).__webglMultisampledFramebuffer:Array.isArray($e)?$=$e[te]:$=$e,ce.copy(b.viewport),Ae.copy(b.scissor),ke=b.scissorTest}else ce.copy(pe).multiplyScalar(ie).floor(),Ae.copy(ye).multiplyScalar(ie).floor(),ke=Ee;if(te!==0&&($=q),Ie.bindFramebuffer(G.FRAMEBUFFER,$)&&Ie.drawBuffers(b,$),Ie.viewport(ce),Ie.scissor(Ae),Ie.setScissorTest(ke),K){let Fe=We.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_CUBE_MAP_POSITIVE_X+V,Fe.__webglTexture,te)}else if(Oe){let Fe=V;for(let Ge=0;Ge<b.textures.length;Ge++){let $e=We.get(b.textures[Ge]);G.framebufferTextureLayer(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0+Ge,$e.__webglTexture,te,Fe)}}else if(b!==null&&te!==0){let Fe=We.get(b.texture);G.framebufferTexture2D(G.FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Fe.__webglTexture,te)}Y=-1};function uc(b){let V=We.get(b);return(V.__readFormat!==b.format||V.__readType!==b.type)&&(V.__readFormat=b.format,V.__readType=b.type,V.__formatReadable=at.textureFormatReadable(b.format),V.__typeReadable=at.textureTypeReadable(b.type)),V}this.readRenderTargetPixels=function(b,V,te,$,K,Oe,qe,Fe=0){if(!(b&&b.isWebGLRenderTarget)){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ge=We.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qe!==void 0&&(Ge=Ge[qe],Array.isArray(Ge)&&(Ge=Ge[0])),Ge){Ie.bindFramebuffer(G.FRAMEBUFFER,Ge);try{let $e=b.textures[Fe],rt=$e.format,mt=$e.type;b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Fe);let Ye=uc($e);if(Ye.__formatReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){nt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=b.width-$&&te>=0&&te<=b.height-K&&G.readPixels(V,te,$,K,k.convert(rt),k.convert(mt),Oe)}finally{let $e=he!==null?We.get(he).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,$e)}}},this.readRenderTargetPixelsAsync=async function(b,V,te,$,K,Oe,qe,Fe=0){if(!(b&&b.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ge=We.get(b).__webglFramebuffer;if(b.isWebGLCubeRenderTarget&&qe!==void 0&&(Ge=Ge[qe],Array.isArray(Ge)&&(Ge=Ge[0])),Ge)if(V>=0&&V<=b.width-$&&te>=0&&te<=b.height-K){Ie.bindFramebuffer(G.FRAMEBUFFER,Ge);let $e=b.textures[Fe],rt=$e.format,mt=$e.type;b.textures.length>1&&G.readBuffer(G.COLOR_ATTACHMENT0+Fe);let Ye=uc($e);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let gt=G.createBuffer();G.bindBuffer(G.PIXEL_PACK_BUFFER,gt),G.bufferData(G.PIXEL_PACK_BUFFER,Oe.byteLength,G.STREAM_READ),G.readPixels(V,te,$,K,k.convert(rt),k.convert(mt),0),G.bindBuffer(G.PIXEL_PACK_BUFFER,null);let Ht=he!==null?We.get(he).__webglFramebuffer:null;Ie.bindFramebuffer(G.FRAMEBUFFER,Ht);let Pt=G.fenceSync(G.SYNC_GPU_COMMANDS_COMPLETE,0);return G.flush(),await Rh(G,Pt,4),G.bindBuffer(G.PIXEL_PACK_BUFFER,gt),G.getBufferSubData(G.PIXEL_PACK_BUFFER,0,Oe),G.bindBuffer(G.PIXEL_PACK_BUFFER,null),G.deleteBuffer(gt),G.deleteSync(Pt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(b,V=null,te=0){let $=Math.pow(2,-te),K=Math.floor(b.image.width*$),Oe=Math.floor(b.image.height*$),qe=V!==null?V.x:0,Fe=V!==null?V.y:0;Je.setTexture2D(b,0),G.copyTexSubImage2D(G.TEXTURE_2D,te,0,0,qe,Fe,K,Oe),Ie.unbindTexture()},this.copyTextureToTexture=function(b,V,te=null,$=null,K=0,Oe=0){let qe,Fe,Ge,$e,rt,mt,Ye,gt,Ht,Pt=b.isCompressedTexture?b.mipmaps[Oe]:b.image;if(te!==null)qe=te.max.x-te.min.x,Fe=te.max.y-te.min.y,Ge=te.isBox3?te.max.z-te.min.z:1,$e=te.min.x,rt=te.min.y,mt=te.isBox3?te.min.z:0;else{let St=Math.pow(2,-K);qe=Math.floor(Pt.width*St),Fe=Math.floor(Pt.height*St),b.isDataArrayTexture?Ge=Pt.depth:b.isData3DTexture?Ge=Math.floor(Pt.depth*St):Ge=1,$e=0,rt=0,mt=0}$!==null?(Ye=$.x,gt=$.y,Ht=$.z):(Ye=0,gt=0,Ht=0);let Ct=k.convert(V.format),$t=k.convert(V.type),Ze;V.isData3DTexture?(Je.setTexture3D(V,0),Ze=G.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(Je.setTexture2DArray(V,0),Ze=G.TEXTURE_2D_ARRAY):(Je.setTexture2D(V,0),Ze=G.TEXTURE_2D),Ie.activeTexture(G.TEXTURE0),Ie.pixelStorei(G.UNPACK_FLIP_Y_WEBGL,V.flipY),Ie.pixelStorei(G.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),Ie.pixelStorei(G.UNPACK_ALIGNMENT,V.unpackAlignment);let rn=Ie.getParameter(G.UNPACK_ROW_LENGTH),bt=Ie.getParameter(G.UNPACK_IMAGE_HEIGHT),Ri=Ie.getParameter(G.UNPACK_SKIP_PIXELS),Kt=Ie.getParameter(G.UNPACK_SKIP_ROWS),Rr=Ie.getParameter(G.UNPACK_SKIP_IMAGES);Ie.pixelStorei(G.UNPACK_ROW_LENGTH,Pt.width),Ie.pixelStorei(G.UNPACK_IMAGE_HEIGHT,Pt.height),Ie.pixelStorei(G.UNPACK_SKIP_PIXELS,$e),Ie.pixelStorei(G.UNPACK_SKIP_ROWS,rt),Ie.pixelStorei(G.UNPACK_SKIP_IMAGES,mt);let hi=b.isDataArrayTexture||b.isData3DTexture,Ci=V.isDataArrayTexture||V.isData3DTexture;if(b.isDepthTexture){let St=We.get(b),Zt=We.get(V),En=We.get(St.__renderTarget),Ft=We.get(Zt.__renderTarget);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,En.__webglFramebuffer),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,Ft.__webglFramebuffer);for(let Xt=0;Xt<Ge;Xt++)hi&&(G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(b).__webglTexture,K,mt+Xt),G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,We.get(V).__webglTexture,Oe,Ht+Xt)),G.blitFramebuffer($e,rt,$e+qe,rt+Fe,Ye,gt,Ye+qe,gt+Fe,G.DEPTH_BUFFER_BIT,G.NEAREST);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else if(K!==0||b.isRenderTargetTexture||We.has(b)){let St=We.get(b),Zt=We.get(V);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,B),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,J);for(let En=0;En<Ge;En++)hi?G.framebufferTextureLayer(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,St.__webglTexture,K,mt+En):G.framebufferTexture2D(G.READ_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,St.__webglTexture,K),Ci?G.framebufferTextureLayer(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,Zt.__webglTexture,Oe,Ht+En):G.framebufferTexture2D(G.DRAW_FRAMEBUFFER,G.COLOR_ATTACHMENT0,G.TEXTURE_2D,Zt.__webglTexture,Oe),K!==0?G.blitFramebuffer($e,rt,$e+qe,rt+Fe,Ye,gt,Ye+qe,gt+Fe,G.COLOR_BUFFER_BIT,G.NEAREST):Ci?G.copyTexSubImage3D(Ze,Oe,Ye,gt,Ht+En,$e,rt,qe,Fe):G.copyTexSubImage2D(Ze,Oe,Ye,gt,$e,rt,qe,Fe);Ie.bindFramebuffer(G.READ_FRAMEBUFFER,null),Ie.bindFramebuffer(G.DRAW_FRAMEBUFFER,null)}else Ci?b.isDataTexture||b.isData3DTexture?G.texSubImage3D(Ze,Oe,Ye,gt,Ht,qe,Fe,Ge,Ct,$t,Pt.data):V.isCompressedArrayTexture?G.compressedTexSubImage3D(Ze,Oe,Ye,gt,Ht,qe,Fe,Ge,Ct,Pt.data):G.texSubImage3D(Ze,Oe,Ye,gt,Ht,qe,Fe,Ge,Ct,$t,Pt):b.isDataTexture?G.texSubImage2D(G.TEXTURE_2D,Oe,Ye,gt,qe,Fe,Ct,$t,Pt.data):b.isCompressedTexture?G.compressedTexSubImage2D(G.TEXTURE_2D,Oe,Ye,gt,Pt.width,Pt.height,Ct,Pt.data):G.texSubImage2D(G.TEXTURE_2D,Oe,Ye,gt,qe,Fe,Ct,$t,Pt);Ie.pixelStorei(G.UNPACK_ROW_LENGTH,rn),Ie.pixelStorei(G.UNPACK_IMAGE_HEIGHT,bt),Ie.pixelStorei(G.UNPACK_SKIP_PIXELS,Ri),Ie.pixelStorei(G.UNPACK_SKIP_ROWS,Kt),Ie.pixelStorei(G.UNPACK_SKIP_IMAGES,Rr),Oe===0&&V.generateMipmaps===!0&&V.mipmapsAutoUpdate===!0&&G.generateMipmap(Ze),Ie.unbindTexture()},this.initRenderTarget=function(b){We.get(b).__webglFramebuffer===void 0&&Je.setupRenderTarget(b)},this.initTexture=function(b){b.isCubeTexture?Je.setTextureCube(b,0):b.isData3DTexture?Je.setTexture3D(b,0):b.isDataArrayTexture||b.isCompressedArrayTexture?Je.setTexture2DArray(b,0):Je.setTexture2D(b,0),Ie.unbindTexture()},this.resetState=function(){H=0,z=0,he=null,Ie.reset(),W.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=_t._getDrawingBufferColorSpace(e),t.unpackColorSpace=_t._getUnpackColorSpace()}};var xu=["assets/story-0.webp?v=2e50123d0102","assets/story-1.webp?v=597ebc7542c1","assets/story-2.webp?v=9023ca288eac","assets/story-3.webp?v=156d612bb44b","assets/story-4.webp?v=88060067cd93","assets/story-5.webp?v=36b3130f3a5f","assets/story-6.webp?v=492701fd8ff5","assets/story-7.webp?v=95a6b9db84f1","assets/story-8.webp?v=daf77c749cab"];var Ti=["solar","networks","capacity","movement","shade","access","reuse","retrofit","expand"],li={solar:{lens:"assets",eye:[-4,3.35,-3.15],at:[-2.9,2.65,-2],fov:62,focus:.55},networks:{lens:"assets",eye:[-.9,.44,.1],at:[-.25,.33,-.8],fov:68,focus:.55},capacity:{lens:"assets",eye:[.2,4.2,-.2],at:[1.8,1.7,-2.15],fov:56,focus:.57},movement:{lens:"people",eye:[-.55,.46,1.17],at:[.42,.32,.15],fov:64,focus:.56},shade:{lens:"people",eye:[2.65,.43,2.32],at:[2.3,.65,1.7],fov:84,focus:.56},access:{lens:"people",eye:[1.25,.38,1.65],at:[.88,.14,.92],fov:64,focus:.57},reuse:{lens:"decisions",eye:[-1.65,.65,2.9],at:[-1.4,.53,1.9],fov:70,focus:.56},retrofit:{lens:"decisions",eye:[2.7,.52,-.55],at:[1.8,1.45,-1.58],fov:76,focus:.57},expand:{lens:"decisions",eye:[5.45,2.7,-.1],at:[3.65,1,-.91],fov:62,focus:.57}};function yu({state:i,mount:e,wake:t}){let n=document.createElement("canvas");n.id="illustrated-story",n.setAttribute("role","button"),n.tabIndex=0,n.setAttribute("aria-label","Illustrated city \u2014 view the city model"),e.parentElement.insertBefore(n,e.nextSibling);let s=n.getContext("2d"),r=Ti.map(()=>new Image),o=(z,he,Y)=>{let Q=Math.max(0,Math.min(1,(Y-z)/(he-z)));return Q*Q*(3-2*Q)},a=z=>z*z*z*(z*(z*6-15)+10),c=3;document.documentElement.classList.add("illustration-loading");let l=!1,h=!1,f=0,u=1,d=0,m=0,M=-1,p=Ti.indexOf("movement"),g=p,y=1,E=!1,x=1,T=1,w=1,_=0,S=1.6,I=()=>Ti[p];i.storyScene=I(),i.cameraBlend=1;function C(z,{pin:he=!1,instant:Y=!1}={}){let Q=Ti.indexOf(z);return Q<0?!1:(g=p,p=Q,y=Y?1:0,m=0,E=he,i.storyScene=z,M=-1,t(),!0)}r.forEach((z,he)=>{z.onload=()=>{++f===r.length&&(l=!0,O(),document.documentElement.classList.remove("illustration-loading"),t())},z.onerror=()=>{h=!0,n.hidden=!0,e.style.opacity="1",i.presentation="model",i.cameraBlend=0,document.documentElement.classList.remove("illustration-loading","illustrated-idle"),t()},z.src=new URL(xu[he],document.baseURI).href});function O(){let z=Math.min(devicePixelRatio,1.5);n.width=Math.max(1,Math.round(e.clientWidth*z)),n.height=Math.max(1,Math.round(e.clientHeight*z)),q(!0)}function U(z,he=1){let Y=r[z],Q=Y.naturalWidth,ce=Y.naturalHeight,Ae=Math.max(n.width/Q,n.height/ce)*1.008,ke=Q*Ae,P=ce*Ae,D=innerWidth<=700?li[Ti[z]].focus:.5,X=i.still?0:Math.sin(Math.floor(d*6)/6*.18)*n.width*.0018;s.globalAlpha=he,s.drawImage(Y,(n.width-ke)*D+X,(n.height-P)*.48,ke,P)}function q(z=!1){if(!l)return;let he=i.still?0:Math.floor(d*6);!z&&he===M||(M=he,s.clearRect(0,0,n.width,n.height),y<1&&!i.still?(U(g),U(p,o(0,1,y))):U(p),s.globalAlpha=1)}function B(){document.documentElement.classList.toggle("illustrated-idle",i.presentation==="illustration"),document.documentElement.dataset.presentation=i.presentation,e.style.opacity=String(l?1-u:0),n.style.opacity=String(u),n.style.pointerEvents=i.presentation==="illustration"&&u>.65?"auto":"none",n.style.visibility=u>0?"visible":"hidden",n.tabIndex=u>.65?0:-1}function J(z){if(h)return;let he=+(i.presentation==="illustration"),Y=I()==="solar";he!==w&&(T=x,w=he,_=0,S=(Y?2.8:1.6)*Math.max(.3,Math.abs(w-T)),m=0),_+=z;let Q=Math.min(1,_/S);x=i.still?w:T+(w-T)*(Y?o(0,1,Q):a(Q)),i.cameraBlend=Y?x:o(0,.84,x),u=l?Y?o(.35,.8,x):o(.6,1,x):0,i.storyScene=I(),i.previewScene=i.cameraBlend>.3?I():null,i.previewWeight=o(.3,.75,i.cameraBlend),l&&!i.still&&x===1&&(d+=z,y=Math.min(1,y+z/.5),E||(m+=z,m>=c&&C(Ti[(p+1)%Ti.length]))),x===1&&(i.userZoom=1,i.lookYaw=0),B(),u>0&&q()}let H=()=>window.dispatchEvent(new Event("city-model-idle"));return n.addEventListener("click",H),n.addEventListener("keydown",z=>{(z.key==="Enter"||z.key===" ")&&(z.preventDefault(),H())}),window.addEventListener("city-scene-return",z=>{li[z.detail?.id]&&C(z.detail.id,{pin:!0,instant:!0})}),window.addEventListener("city-reset",()=>{d=0,C("movement",{instant:i.still}),q(!0)}),window.addEventListener("city-language",z=>n.setAttribute("aria-label",z.detail==="zh"?"\u57CE\u5E02\u63D2\u753B \xB7 \u67E5\u770B\u57CE\u5E02\u6A21\u578B":"Illustrated city \u2014 view the city model")),{update:J,resize:O,select:C,get unsettled(){return x!==w},get stats(){return{ready:l,failed:h,opacity:u,reveal:x,presentation:i.presentation,cycleSeconds:c,transitionSeconds:S,clock:d,frame:p,scene:I(),beat:li[I()].lens,pinned:E,loaded:f,holding:!1}}}}function vu({camera:i,state:e,root:t,city:n,mount:s}){let r={base:{eye:[13,14,18],at:[-.15,.65,0],zoom:1},assets:{eye:[13,14,18],at:[-.15,.65,0],zoom:1},people:{eye:[10,16,20],at:[.8,.45,.8],zoom:1.1},decisions:{eye:[16,13,18],at:[-.1,.8,-.2],zoom:1.04}},o=new F(...li.solar.eye),a=new F(...li.solar.at),c=new F(...r.base.at),l=new F(...r.base.eye).sub(c).normalize(),h=new F,f=new F,u=new F,d=new F,m=new F,M=new F,p=new F,g=new F,y=t.children.filter(I=>I!==n),E=[];for(let I of y)I.traverse(C=>{if(!C.material)return;let O=U=>{let q=U.clone();return E.push({material:q,opacity:U.opacity,transparent:U.transparent,depthWrite:U.depthWrite}),q};C.material=Array.isArray(C.material)?C.material.map(O):O(C.material)});let x=1,T=1,w=!1,_=()=>e.cameraBlend??1;function S(I,C=!1,O=!1){let U=C||O?1:1-Math.exp(-I*3.5);x=_();let q=r[e.lens]||r.base,B=li[e.storyScene]||li.solar;o.set(...B.eye),a.set(...B.at),p.set(...q.eye).sub(g.set(...q.at)).normalize(),l.lerp(p,U).normalize(),c.lerp(f.set(...q.at),U),T+=(Ut.lerp(q.zoom*e.userZoom,1,x)-T)*U;let J=innerWidth<=700?8.3:5.95,H=J/Math.tan(Ut.degToRad(2));d.copy(o).applyAxisAngle(kt.DEFAULT_UP,t.rotation.y),m.copy(a).sub(o).applyAxisAngle(kt.DEFAULT_UP,e.lookYaw||0).add(o).applyAxisAngle(kt.DEFAULT_UP,t.rotation.y);let z=d.distanceTo(m);M.copy(d).sub(m).normalize();let he=Math.atan2(l.x,l.z),Y=Math.atan2(M.x,M.z),Q=Math.atan2(Math.sin(Y-he),Math.cos(Y-he)),ce=he+Q*Ut.smoothstep(x,.35,.85),Ae=Ut.lerp(Math.asin(l.y),Math.asin(M.y),Ut.smoothstep(x,.65,1));u.set(Math.sin(ce)*Math.cos(Ae),Math.sin(Ae),Math.cos(ce)*Math.cos(Ae)),e.storyScene==="solar"&&u.copy(x>.9?M:l),f.copy(c).lerp(m,x);let ke=Math.exp(Ut.lerp(Math.log(H),Math.log(z),x)),P=z*Math.tan(Ut.degToRad(B.fov/2)),D=Math.exp(Ut.lerp(Math.log(J),Math.log(P),x));h.copy(u).multiplyScalar(ke).add(f),h.y+=Math.sin(Math.PI*x)*.9,i.position.copy(h),i.lookAt(f),i.fov=Ut.radToDeg(2*Math.atan(D/ke)),i.near=Math.max(.012,ke-32),i.far=Math.max(60,ke+45),i.zoom=T,i.aspect=s.clientWidth/s.clientHeight;let X=s.clientWidth,ue=s.clientHeight;i.setViewOffset(X,ue,innerWidth<=700?0:-X*.125*(1-x),0,X,ue),i.updateProjectionMatrix();let ie=Ut.smoothstep(1-x,.1,.6);for(let _e of y)_e.visible=ie>.001;for(let _e of E){let Be=_e.material,pe=_e.transparent||ie<.999;Be.transparent!==pe&&(Be.transparent=pe,Be.needsUpdate=!0),Be.opacity=_e.opacity*ie,Be.depthWrite=_e.depthWrite&&ie>.95}document.querySelector(".observatory").style.setProperty("--survey-reveal",String(Ut.smoothstep(1-x,.5,.92))),w=Math.abs(Ut.lerp(q.zoom*e.userZoom,1,x)-T)<.001&&l.distanceTo(p)<.001}return{update:S,resize(){S(0,e.still,!0)},get settled(){return w},get stats(){return{idle:x,zoom:i.zoom,eye:i.position.toArray(),heading:Math.atan2(u.x,u.z),scene:e.storyScene||"solar",fov:i.fov,settled:w,view:x===1?"park":x===0?"city":"travelling"}}}}var La=Ut.clamp,Pa=i=>1-Math.pow(1-La(i,0,1),3);function Mu(i){let{city:e,buildings:t,box:n,cylinder:s,mat:r,interactive:o,state:a,camera:c,mount:l,solarPanels:h}=i,f={assets:10340559,people:12045217,reuse:11059878,retrofit:10340559,expand:14269059},u={},d=[],m=[],M=[],p={base:0,assets:0,people:0,decisions:0},g={assets:0,people:0,decisions:0},y=a.lens,E=null,x=null,T=r("story-stone",14011578),w=r("story-glass",7246484,.25,.18,{transparent:!0,opacity:.68}),_=r("story-timber",10061671),S=r("story-leaf",7902578),I=r("story-iron",5466981,.5,.25),C=new zt({color:f.assets,transparent:!0,opacity:.7,depthWrite:!1});function O(A,k,W,me){let Ne=new xt;return Ne.userData.storyId=A,e.add(Ne),u[A]={id:A,lens:k,delay:W,group:Ne,anchor:new F(...me),duration:1,progress:0}}function U(A,k,{delay:W=0,span:me=1,lift:Ne=0,slide:re=null,hinge:Pe=0,grow:ne=null}={}){let xe=u[k];A.material=A.material.clone();let je={mesh:A,s:xe,delay:W,span:me,lift:Ne,slide:re,hinge:Pe,grow:ne,position:A.position.clone(),rotation:A.rotation.clone(),scale:A.scale.clone(),color:A.material.color.clone(),opacity:A.material.opacity,depthWrite:A.material.depthWrite};return A.material.transparent=!0,A.material.depthWrite=!1,A.visible=!1,d.push(je),xe.duration=Math.max(xe.duration,W+me),A}function q(A,k,W=.018,me=0,Ne=f[u[A].lens]){let re=new hn(k.map(ne=>new F(...ne)),!1,"catmullrom",0),Pe=new Xe(new Ln(re,40,W,5,!1),new zt({color:Ne,transparent:!0,opacity:.56,depthWrite:!1}));return u[A].group.add(Pe),U(Pe,A,{delay:me,span:1.3}),M.push({mesh:Pe,path:re,id:A,delay:me}),re}function B(A,k,W,me,Ne=.19){let re=new Xe(new ki(Ne,Ne+.018,28),C.clone());return re.rotation.x=-Math.PI/2,re.position.set(k,W,me),u[A].group.add(re),U(re,A,{delay:.5,span:.8}),m.push({mesh:re,id:A}),re}function J(A,k,W,me){let Ne=[[k.x-k.w*.54,W,k.z-k.d*.54],[k.x+k.w*.54,W,k.z-k.d*.54],[k.x+k.w*.54,W,k.z+k.d*.54],[k.x-k.w*.54,W,k.z+k.d*.54],[k.x-k.w*.54,W,k.z-k.d*.54]],re=new hn(Ne.map(ne=>new F(...ne)),!1,"catmullrom",0),Pe=new Xe(new Ln(re,24,.014,4,!1),C.clone());u[A].group.add(Pe),U(Pe,A,{delay:me,span:.85})}let H=t[1],z=t[3];O("solar","assets",0,[H.x,H.h+.5,H.z]),O("networks","assets",.45,[-.25,.38,-.8]),O("capacity","assets",.9,[z.x,z.h+.38,z.z]);let he=u.solar.group;for(let A=0;A<3;A++)U(n(.17,.24,.16,H.x+(A-1)*.25,H.h+.43,H.z-H.d*.34,T,he,.012),"solar",{delay:.25+A*.12,lift:.25}),U(n(.06,.025,.01,H.x+(A-1)*.25,H.h+.46,H.z-H.d*.34+.086,C,he,.002),"solar",{delay:.7+A*.12});let Y=u.networks.group;for(let[A,k]of[[-.25,-.8],[4.8,-.38]]){let W=new xt;W.userData.storyId="networks",e.add(W),o(n(.26,.28,.21,A,.24,k,I,W,.018),{action:"scene",id:"networks",key:"network-"+A});for(let me=0;me<3;me++)n(.15,.012,.012,A,.21+me*.055,k+.11,T,W,.002);B("networks",A,.12,k,.2)}q("networks",[[-2.9,2.7,-2],[-2.9,2.7,-1.35],[-2.9,.14,-1.35],[-.25,.14,-.8],[.42,.14,-.8]],.023,.1),q("networks",[[.42,.14,.15],[3.4,.14,.15],[4.8,.14,-.38]],.023,.3);let Q=[];for(let A=0;A<4;A++){let k=new Xe(new Nt(.048,8,6),new zt({color:14741227}));Y.add(k),U(k,"networks",{delay:.7,span:.5}),Q.push({mesh:k,route:A%2,offset:A*.25})}for(let A=0;A<4;A++)J("capacity",z,.37+A*.7,.15+A*.2);let ce=U(n(z.w+.2,.018,z.d+.2,z.x,.4,z.z,new zt({color:f.assets,transparent:!0,opacity:.1,depthWrite:!1}),u.capacity.group,.005),"capacity",{delay:.7,span:1});ce.castShadow=!1;for(let A of[-z.d*.54,z.d*.54]){let k=[z.x+z.w*.54,.37,z.z+A],W=[k[0],z.h+.3,k[2]];q("capacity",[k,W],.012,.5)}O("movement","people",0,[-.61,.74,.67]),O("shade","people",.55,[2.45,1.48,1.8]),O("access","people",1.05,[1.13,.26,.92]);let Ae=u.movement.group,ke=q("movement",[[-2.5,.16,-.5],[-.3,.16,-.5],[-.3,.16,.92],[.42,.16,.92],[1.13,.16,.92],[1.2,.16,1.48],[2.35,.16,1.48]],.03,0,f.people),P=[];for(let A=0;A<3;A++){let k=new Xe(new Nt(.04,8,6),new zt({color:14411459}));Ae.add(k),U(k,"movement",{delay:.5,span:.6}),P.push({mesh:k,offset:A/3})}U(s(.022,.025,.53,-.61,.4,.67,I,Ae,8),"movement",{delay:.4,lift:.24}),U(n(.085,.13,.045,-.61,.69,.67,I,Ae,.01),"movement",{delay:.65,lift:.15});let D=U(n(.035,.06,.012,-.61,.7,.7,new zt({color:12113315}),Ae,.004),"movement",{delay:.8});B("movement",-.3,.125,.71,.18);let X=u.shade.group,ue=[];for(let A of[1.9,2.95])for(let k of[1.55,2.13])U(s(.022,.022,1.04,A,.69,k,I,X,8),"shade",{delay:(A-1.9)*.12,lift:.4});for(let A of[1.55,2.13])U(n(1.18,.045,.045,2.425,1.21,A,_,X,.006),"shade",{delay:.35,lift:.35});for(let A=0;A<8;A++){let k=U(n(.105,.027,.69,1.95+A*.135,1.25,1.84,_,X,.006),"shade",{delay:.6+A*.07,hinge:-Math.PI/2,span:1.15});ue.push(k)}for(let[A,k]of[[1.88,2.12],[2.99,2.12]]){U(n(.2,.16,.21,A,.23,k,T,X,.015),"shade",{delay:.6,lift:.2});let W=new Xe(new Pn(.16,1),S);W.position.set(A,.42,k),X.add(W),U(W,"shade",{delay:.9,span:1.1,grow:"all"})}let ie=u.access.group;for(let A of[-.04,.88]){let k=n(.27,.035,.43,A,.125,.92,T,ie,.006);k.rotation.z=A<0?-.1:.1,U(k,"access",{delay:A<0?0:.2,span:1});for(let W=0;W<4;W++)for(let me=0;me<3;me++){let Ne=s(.012,.012,.008,A+(me-1)*.05,.15,.77+W*.1,_,ie,8);U(Ne,"access",{delay:.5+W*.06,span:.6})}}U(n(.22,.025,.65,1.2,.17,1.24,T,ie,.008),"access",{delay:.5,span:1});let _e=new hn([[1.13,.17,.92],[1.2,.17,1.25],[1.25,.17,1.48],[2.35,.17,1.48]].map(A=>new F(...A)),!1,"catmullrom",0),Be=new xt;ie.add(Be);for(let A of[-.065,.065])for(let k of[-.085,.085]){let W=s(.034,.034,.015,A,.04,k,I,Be,8);W.rotation.z=Math.PI/2,U(W,"access",{delay:.9})}U(n(.13,.11,.18,0,.15,0,r("stroller-cloth",10136200),Be,.025),"access",{delay:.95}),U(n(.13,.035,.12,0,.235,-.04,T,Be,.02),"access",{delay:1}),U(n(.025,.2,.025,0,.18,-.16,I,Be,.004),"access",{delay:1});let pe=t[8],ye=t[3];O("reuse","decisions",0,[pe.x,pe.h+.55,pe.z]),O("retrofit","decisions",.5,[ye.x,ye.h+.65,ye.z]),O("expand","decisions",1.1,[3.65,2.08,-.91]);for(let[A,k]of[[pe,"reuse"],[ye,"retrofit"]])A.group.traverse(W=>{W.userData.cityAction&&(W.userData.adaptId=k)});let Ee=u.reuse.group,j=r("reuse-paint",f.reuse);U(n(pe.w+.28,.06,pe.d+.45,pe.x,.15,pe.z+.12,j,Ee,.025),"reuse",{grow:"xz",span:1.2});let be=U(n(pe.w*.84,.37,.025,pe.x,.38,pe.z+pe.d/2+.022,w,Ee,.005),"reuse",{delay:.1,span:.8});o(be,{action:"adapt",id:"reuse",key:"adapt-reuse",lens:"decisions"});let Se=[];for(let A of[-1,1]){let k=U(n(.29,.36,.04,pe.x+A*.17,.38,pe.z+pe.d/2+.05,_,Ee,.008),"reuse",{delay:.2,span:.5});Se.push({mesh:k,s:A})}for(let A of[pe.x-.48,pe.x+.48])U(s(.018,.018,.63,A,.49,pe.z+pe.d/2+.39,I,Ee,6),"reuse",{delay:.45,lift:.25});for(let A=0;A<6;A++)U(n(.13,.025,.43,pe.x-.43+A*.17,.86,pe.z+pe.d/2+.19,_,Ee,.006),"reuse",{delay:.7+A*.09,hinge:Math.PI/2,span:1});for(let A of[-1,1]){U(n(.16,.16,.26,pe.x+A*.6,.27,pe.z+pe.d/2+.27,T,Ee,.015),"reuse",{delay:1,lift:.15});let k=new Xe(new Pn(.13,1),S);k.position.set(pe.x+A*.6,.43,pe.z+pe.d/2+.27),Ee.add(k),U(k,"reuse",{delay:1.15,grow:"all"}),U(n(.23,.08,.18,pe.x+A*.34,.27,pe.z+pe.d/2+.65,_,Ee,.018),"reuse",{delay:1.1,lift:.2})}U(n(.24,.06,.24,pe.x,.34,pe.z+pe.d/2+.63,T,Ee,.025),"reuse",{delay:1.35,lift:.15});let Ue=u.retrofit.group,Ce=r("retrofit-frame",f.retrofit),tt=r("retrofit-pv",3234672,.25,.35);for(let A=0;A<6;A++)U(n(.035,ye.h+.1,.14,ye.x-ye.w*.48+A*ye.w*.192,ye.h/2+.2,ye.z+ye.d/2+.06,Ce,Ue,.008),"retrofit",{delay:A*.13,slide:[0,0,.35],span:1.15});for(let A=.64;A<ye.h;A+=.47)U(n(ye.w+.18,.04,.27,ye.x,A,ye.z+ye.d/2+.1,T,Ue,.008),"retrofit",{delay:.35+A*.16,lift:.4,span:1.2});for(let A of[-ye.w/2-.05,ye.w/2+.05])for(let k of[-ye.d/2-.05,ye.d/2+.05])U(n(.045,ye.h+.12,.045,ye.x+A,ye.h/2+.2,ye.z+k,Ce,Ue,.006),"retrofit",{delay:.15,span:1.4});for(let A=0;A<6;A++){let k=n(.27,.035,.37,ye.x+(A%3-1)*.34,ye.h+.58,ye.z+(Math.floor(A/3)-.5)*.48,tt,Ue,.006);k.rotation.x=-.3,U(k,"retrofit",{delay:1+A*.08,hinge:-1.1,span:1.25});for(let W of[-1,1])U(n(.018,.21,.018,ye.x+(A%3-1)*.34+W*.08,ye.h+.42,ye.z+(Math.floor(A/3)-.5)*.48,I,Ue,.002),"retrofit",{delay:.9+A*.08,span:.8})}U(s(.12,.12,.38,ye.x+ye.w/2+.16,.4,ye.z-.3,Ce,Ue,12),"retrofit",{delay:1.4,lift:.25}),U(s(.018,.018,ye.h+.1,ye.x+ye.w/2+.16,ye.h/2+.4,ye.z-.3,I,Ue,6),"retrofit",{delay:1.2,span:1.4});let Ve=new xt;Ve.userData.storyId="expand",e.add(Ve),o(n(1.3,.018,.98,3.65,.113,-.91,T,Ve,.008),{action:"scene",id:"expand",key:"expansion-plot"});let Qe=u.expand.group,it=[];U(n(1.36,.07,1.02,3.65,.14,-.91,r("expand-ground",11050110),Qe,.02),"expand",{grow:"xz",span:.8});for(let A=0;A<4;A++){let k=.2+A*.39,W=A*.42;U(n(1.15,.06,.88,3.65,k,-.91,T,Qe,.015),"expand",{delay:W,lift:.5,span:.95});for(let me of[-.52,.52])for(let Ne of[-.37,.37])U(n(.055,.36,.055,3.65+me,k+.19,-.91+Ne,r("expand-frame",f.expand),Qe,.006),"expand",{delay:W+.15,lift:.35,span:.9});U(n(.98,.28,.025,3.65,k+.19,-.53,w,Qe,.004),"expand",{delay:W+.5,slide:[0,0,.3],span:.85}),U(n(.025,.28,.67,4.18,k+.19,-.91,w,Qe,.004),"expand",{delay:W+.6,slide:[.3,0,0],span:.85});for(let me of[-.3,0,.3])U(n(.018,.3,.03,3.65+me,k+.19,-.51,T,Qe,.002),"expand",{delay:W+.65,span:.85});it.push(k)}let dt=U(n(1.2,.06,.94,3.65,1.78,-.91,r("expansion-roof",f.expand),Qe,.015),"expand",{delay:2.15,lift:.7,span:1.1});o(dt,{action:"adapt",id:"expand",key:"adapt-expand",lens:"decisions"}),U(n(.42,.25,.56,3.65,.82,-1.61,w,Qe,.012),"expand",{delay:1.5,slide:[0,0,.3],span:1}),U(n(.55,.045,.3,3.65,.66,-1.61,T,Qe,.008),"expand",{delay:1.5,span:1});let G=new xt;G.position.set(4.52,.14,-1.2),Qe.add(G);for(let A of[-.055,.055])for(let k of[-.055,.055])U(n(.025,2.2,.025,A,1.1,k,r("crane-gold",13349495,.5,.25),G,.002),"expand",{delay:0,span:.6});let ct=new xt;ct.position.y=2.16,G.add(ct),U(n(1.9,.055,.06,-.43,0,0,r("crane-gold",13349495,.5,.25),ct,.005),"expand",{delay:.25,span:.65});let ot=U(n(.018,.6,.018,-1.3,-.3,0,I,ct,.002),"expand",{delay:.5,span:.6});U(n(.21,.14,.2,.43,-.08,0,T,ct,.015),"expand",{delay:.4,span:.6});let at=Object.fromEntries(Object.keys(u).map(A=>[A,0])),Ie=[],wt={solar:[[H.x,H.h+.43,H.z,H.w+.2,.35,H.d+.2]],networks:[[-.25,.3,-.8,.4,.45,.36],[4.8,.3,-.38,.4,.45,.36]],capacity:[[z.x,z.h/2+.25,z.z,z.w+.18,z.h+.2,z.d+.18]],movement:[[-.61,.46,.67,.18,.6,.2],[.42,.24,.92,1.4,.3,.6]],shade:[[2.43,.75,1.84,1.3,1.22,.85]],access:[[1.05,.23,.95,.65,.3,.7]],reuse:[[pe.x,.62,pe.z+.25,1.4,1.05,1.85]],retrofit:[[ye.x,1.76,ye.z,1.5,3.25,1.45]],expand:[[3.65,1,-.91,1.35,1.9,1.15]]};for(let[A,k]of Object.entries(wt)){let W=new zt({color:f[A]||f[u[A].lens],transparent:!0,opacity:0,depthWrite:!1}),me=new xt;u[A].group.add(me);for(let[Ne,re,Pe,ne,xe,je]of k){let yt=Array.from({length:8},(N,ee)=>new F(Ne+(ee&1?ne/2:-ne/2),re+(ee&2?xe/2:-xe/2),Pe+(ee&4?je/2:-je/2)));for(let N=0;N<8;N++)for(let[ee,de,Re]of[["x",1,ne],["y",2,xe],["z",4,je]]){let He=yt[N].clone();He[ee]+=(N&de?-1:1)*Math.min(Re*.18,.25);let Mt=He.clone().sub(yt[N]),ge=new Xe(new xi(.011,.011,Mt.length(),6),W);ge.position.copy(yt[N]).add(He).multiplyScalar(.5),ge.quaternion.setFromUnitVectors(new F(0,1,0),Mt.normalize()),me.add(ge)}}me.visible=!1,Ie.push({id:A,group:me,material:W})}let We=new ht(15200223);function Je(A){x=A,i.wake?.()}let R=document.createElement("div");R.className="lens-annotations",R.setAttribute("aria-label","Research perspective annotations");let v="http://www.w3.org/2000/svg",Z=document.createElementNS(v,"svg");Z.classList.add("lens-leaders"),Z.setAttribute("aria-hidden","true"),R.append(Z);let ve=0,fe=Array.from({length:3},()=>{let A=document.createElement("button");A.type="button",A.className="lens-label",A.addEventListener("pointerenter",re=>{re.pointerType!=="touch"&&Je(A.dataset.story)}),A.addEventListener("pointerleave",()=>{A.matches(":focus-visible")||Je(null)}),A.addEventListener("focus",()=>{A.matches(":focus-visible")&&Je(A.dataset.story)}),A.addEventListener("blur",()=>Je(null)),A.addEventListener("click",re=>{clearTimeout(ve);let Pe=A.dataset.story;re.detail===0?(ae(Pe),i.wake?.()):re.detail===1&&(ve=setTimeout(()=>{ae(Pe),i.wake?.()},275))}),A.addEventListener("dblclick",re=>{re.preventDefault(),re.stopPropagation(),clearTimeout(ve),window.dispatchEvent(new CustomEvent("city-scene-return",{detail:{id:A.dataset.story}}))}),A.addEventListener("keydown",re=>{re.key==="Enter"&&re.shiftKey&&(re.preventDefault(),window.dispatchEvent(new CustomEvent("city-scene-return",{detail:{id:A.dataset.story}})))}),R.append(A);let k=document.createElementNS(v,"path");k.classList.add("leader-halo");let W=document.createElementNS(v,"path"),me=document.createElementNS(v,"circle");me.classList.add("leader-ring"),me.setAttribute("r","6.5");let Ne=document.createElementNS(v,"circle");return Ne.classList.add("leader-pin"),Ne.setAttribute("r","3.8"),Z.append(k,W,me,Ne),{node:A,halo:k,line:W,ring:me,pin:Ne}});l.parentElement.append(R);let Me={base:[],assets:["solar","networks","capacity"],people:["movement","shade","access"],decisions:["reuse","retrofit","expand"]},Te={solar:"Solar",networks:"Networks",capacity:"Capacity",movement:"Movement",shade:"Shade",access:"Access",reuse:"Reuse",retrofit:"Retrofit",expand:"Expand"};function oe(A){clearTimeout(ve),Me[A]&&(y=A,p[A]=0,E=null,x=null,Me[A].forEach(k=>{u[k].progress=0,delete u[k].replay}),R.dataset.lens=A,R.hidden=A==="base",Me[A].forEach((k,W)=>{fe[W].id=k,fe[W].node.textContent=Te[k],fe[W].node.dataset.story=k,fe[W].node.setAttribute("aria-label",Te[k])}))}function ae(A){if(!u[A])return;E=A;let k=u[A];k.replay=p[k.lens]}window.addEventListener("city-lens",A=>oe(A.detail)),window.addEventListener("city-adapt",A=>ae(A.detail)),window.addEventListener("city-story-replay",A=>{ae(A.detail.id),i.wake?.()}),oe(y),t[1].group.userData.storyByLens={base:"solar",assets:"solar"},t[3].group.userData.storyByLens={assets:"capacity",decisions:"retrofit"},t[8].group.userData.storyByLens={base:"reuse",decisions:"reuse"};let we=A=>a.previewScene===A.id;function L(A){return p[A.lens]-(A.replay??0)-A.delay}function le(A,k,W){(W||a.surveyReady)&&(p[y]+=A);for(let ne of Object.keys(at))at[ne]+=(+(x===ne)-at[ne])*(W?1:1-Math.exp(-A*10));let me=Math.max(...Object.values(at));for(let ne of Object.keys(g))g[ne]+=(+(a.previewScene?u[a.previewScene].lens===ne:y===ne)-g[ne])*(W?1:1-Math.exp(-A*7));for(let ne of Object.values(u))ne.group.visible=g[ne.lens]>.005&&(!a.previewScene||we(ne)),ne.progress=we(ne)||W&&y===ne.lens?1:La(L(ne)/ne.duration,0,1);for(let ne of d){let xe=at[ne.s.id],je=we(ne.s)||W&&y===ne.s.lens?1:Pa((L(ne.s)-ne.delay)/ne.span),yt=ne.opacity*je*g[ne.s.lens]*(a.previewScene?a.previewWeight??1:1)*(1-(me-xe)*.45);ne.mesh.visible=yt>.004&&(!a.previewScene||we(ne.s)),ne.mesh.material.opacity=yt,ne.mesh.material.depthWrite=ne.depthWrite&&yt>.98,ne.mesh.material.color.copy(ne.color).lerp(We,xe*.25),ne.mesh.material.emissive&&(ne.mesh.material.emissive.copy(We),ne.mesh.material.emissiveIntensity=xe*.2),ne.mesh.position.copy(ne.position),ne.mesh.rotation.copy(ne.rotation),ne.mesh.scale.copy(ne.scale),ne.mesh.position.y+=(1-je)*ne.lift,ne.slide&&ne.mesh.position.addScaledVector(new F(...ne.slide),1-je),ne.mesh.rotation.x+=(1-je)*ne.hinge,ne.grow==="all"&&ne.mesh.scale.multiplyScalar(Math.max(.01,je)),ne.grow==="xz"&&(ne.mesh.scale.x*=Math.max(.01,je),ne.mesh.scale.z*=Math.max(.01,je))}for(let ne of M){let xe=we(u[ne.id])||W?1:Pa((L(u[ne.id])-ne.delay)/1.3),je=ne.mesh.geometry.index.count;ne.mesh.geometry.setDrawRange(0,Math.floor(je*xe/3)*3)}y==="assets"&&h.forEach((ne,xe)=>{let je=W?1:Pa((L(u.solar)-xe%6*.08)/1.4);ne.rotation.x=1.15*(1-je)-.25*je}),ce.position.y=.38+(W?.5:Math.sin(k*.9)*.5+.5)*(z.h-.1);for(let ne of Se){let xe=we(u.reuse)||W?1:Pa((L(u.reuse)-.55)/1.4);ne.mesh.position.x=pe.x+ne.s*(.17+xe*.25)}for(let ne of m){let xe=W?1:1+Math.sin(k*1.8)*.12;ne.mesh.scale.setScalar(xe)}let Ne=M.filter(ne=>ne.id==="networks");Q.forEach(ne=>ne.mesh.position.copy(Ne[ne.route].path.getPoint((ne.offset+(W?.2:k*.13))%1))),P.forEach(ne=>ne.mesh.position.copy(ke.getPoint((ne.offset+(W?0:k*.04))%1)));let re=W?.5:k*.055%1;Be.position.copy(_e.getPoint(re)),Be.position.y-=.14;let Pe=_e.getTangent(re);Be.rotation.y=Math.atan2(Pe.x,Pe.z),ct.rotation.y=W?-.12:Math.sin(k*.5)*.18,ot.position.y=-.3+(W?0:Math.sin(k*1.5)*.14),G.visible=u.expand.progress<1||E==="expand",D.material.color.setHex(!W&&Math.sin(k*.5)<-.6?14859390:12113315);for(let ne of Ie){let xe=at[ne.id]*g[u[ne.id].lens];ne.group.visible=xe>.01,ne.material.opacity=xe*.72}for(let[ne,xe]of[["solar",1],["capacity",3],["reuse",8],["retrofit",3]]){let je=at[ne];if(je<.002)continue;let yt=i.hoverRecords.find(N=>N.key==="building-"+xe);for(let N of yt?.facades||[])N.emissive.copy(We),N.emissiveIntensity=Math.max(N.emissiveIntensity,je*.12)}}function se(){if(y==="base")return;let A=l.clientWidth,k=l.clientHeight,W=l.offsetTop;if(!A||!k)return;Z.setAttribute("viewBox",`0 0 ${A} ${l.parentElement.clientHeight}`);let me=innerWidth<=700,Ne=me?52:64,re=Ne+(me?0:A*.25),Pe=A-Ne,ne=Math.min(me?100:120,(Pe-re)/2),xe=fe.map(N=>{let ee=e.localToWorld(u[N.id].anchor.clone()).project(c);return{...N,ax:(ee.x*.5+.5)*A,ay:W+(-ee.y*.5+.5)*k}}).sort((N,ee)=>N.ax-ee.ax);for(let N=0;N<3;N++)xe[N].x=Math.max(La(xe[N].ax,re,Pe),N?xe[N-1].x+ne:re);let je=xe[2].x-(A-Ne);je>0&&xe.forEach(N=>N.x-=je);let yt=me?4:64;for(let N of xe){let ee=u[N.id],de=a.still?1:La(L(ee)*2.5,0,1),Re=at[N.id];N.node.classList.toggle("is-emphasized",Re>.2),N.node.style.transform=`translate(${Math.round(N.x-48)}px,${yt}px)`,N.node.style.opacity=String(de*(.9+Re*.1));let He=N.ax+(N.x-N.ax)*Re,Mt=N.ay-16+(yt+22-(N.ay-16))*Re;N.line.setAttribute("d",`M${He},${Mt}C${He},${Mt+6+Re*18} ${N.ax},${N.ay-16-Re*12} ${N.ax},${N.ay-6}`),N.halo.setAttribute("d",N.line.getAttribute("d")),N.halo.style.opacity=String(de*(.04+Re*.22)),N.line.style.opacity=String(de*(.36+Re*.3));for(let ge of[N.pin,N.ring])ge.setAttribute("cx",String(N.ax)),ge.setAttribute("cy",String(N.ay-3));N.pin.setAttribute("r",String(2.4+Re*.7)),N.pin.style.opacity=String(de*(.72+Re*.2)),N.ring.style.opacity=String(de*Re*.65),N.ring.setAttribute("r",String(4.6+Re*1.1))}}return{update:le,renderLabels:se,solarAudit(){e.updateWorldMatrix(!0,!0);let A=d.filter(W=>W.s.id==="solar"&&W.position.y===H.h+.43).map(W=>new Cn().setFromObject(W.mesh)),k=h.filter(W=>W.parent===H.group).map(W=>new Cn().setFromObject(W));return{solarCabinetIntersections:A.reduce((W,me)=>W+k.filter(Ne=>Ne.intersectsBox(me)).length,0),solarServiceGap:Math.min(...k.map(W=>W.min.z))-Math.max(...A.map(W=>W.max.z))}},anchor(A){let k={capacity:[z.x,z.h+.28,z.z],retrofit:[z.x,1.5,z.z+z.d/2],expand:[3.65,.13,-.91],movement:[.42,.13,.92],shade:[2.35,.13,1.7],access:[.88,.13,.92]};return a.lens==="base"&&k[A]?new F(...k[A]):u[A]?.anchor.clone()},pickStory(A){let W=A.intersectObject(e,!0).find(re=>{if(re.object.material?.opacity<.12)return!1;let Pe=re.object;for(;Pe;){if(!Pe.visible)return!1;Pe=Pe.parent}return!0});if(!W)return null;let me=e.worldToLocal(W.point.clone()),Ne=W.object;for(;Ne;){if(a.lens==="base"&&Ne===t[3].group)return me.y>z.h*.82?"capacity":"retrofit";if(Ne.userData.storyId)return Ne.userData.storyId;let re=Ne.userData.storyByLens?.[a.lens];if(re)return re;Ne=Ne.parent}if(W.object.userData.cityAction?.action==="traffic")return null;if(a.lens==="base"){if(me.x>.65&&me.x<1.4&&me.z>.65&&me.z<1.65&&me.y<.3)return"access";if(me.x>1.2&&me.x<3.5&&me.z>.7&&me.z<2.3)return"shade";if(me.x>-.6&&me.x<1.5&&me.z>-.8&&me.z<1.25&&me.y<.3)return"movement"}return W.object.userData.cityAction?.id==="heat-fire"&&a.lens==="people"?"shade":null},get stats(){return{mode:y,elapsed:p[y],focused:E,highlighted:x,emphasis:{...at},highlightedOutlines:Ie.filter(A=>A.group.visible).map(A=>A.id),progress:Object.fromEntries(Me[y].map(A=>[A,u[A].progress])),visible:Object.values(u).filter(A=>A.group.visible).map(A=>A.id),labels:Me[y].map(A=>Te[A]),weights:{...g},routes:Object.fromEntries(["movement","access"].map(A=>[A,M.filter(k=>k.id===A).length]))}},get adaptations(){return{selected:E||"all",progress:Object.fromEntries(Me.decisions.map(A=>[A,u[A].progress])),visible:Me.decisions.filter(A=>u[A].group.visible)}}}}function Su({root:i,box:e,cylinder:t,mat:n,wood:s,edgewood:r,texture:o}){let a=n("antique-brass",11176016,.32,.72),c=n("oxblood-leather",4209716,.9);c.map=o((l,h,f)=>{l.fillStyle="#484139",l.fillRect(0,0,h,f);for(let u=0;u<11e3;u++){let d=u*83.23%h,m=u*53.91%f;l.fillStyle=u%2?"#ffffff08":"#0000000b",l.fillRect(d,m,1,1)}}),e(17.1,.3,10.8,0,-.56,.2,s,i,.16),e(17.22,.065,10.92,0,-.72,.2,a,i,.12),e(16.96,.13,10.7,0,-.81,.2,r,i,.08),e(15.4,.012,9.05,0,-.403,.2,c,i,.08);for(let l of[0,.09]){for(let h of[-4.4+l,4.8-l])e(15.35-l*2,.008,.014,0,-.389,h,a,i,.003);for(let h of[-7.68+l,7.68-l])e(.014,.008,9.2-l*2,h,-.389,.2,a,i,.003)}for(let l of[-4.45,4.65]){let h=new yi;h.moveTo(-7.3,0),h.lineTo(7.3,0),h.lineTo(7.3,-.58),h.bezierCurveTo(4.5,-.72,3.8,-.25,1.8,-.27),h.lineTo(-1.8,-.27),h.bezierCurveTo(-3.8,-.25,-4.5,-.72,-7.3,-.58),h.closePath();let f=new Xe(new zi(h,{depth:.14,bevelEnabled:!0,bevelSize:.03,bevelThickness:.025,bevelSegments:2,steps:1}),r);if(f.position.set(0,-.88,l),f.castShadow=!0,i.add(f),l>0)for(let u of[-4.55,0,4.55]){e(2.7,.28,.04,u,-1.02,l+.17,s,i,.04);let d=new Xe(new si(.12,.022,6,20,Math.PI),a);d.position.set(u,-1.04,l+.215),d.rotation.z=Math.PI,i.add(d),t(.042,.042,.045,u-.12,-1.04,l+.21,a,i,8).rotation.x=Math.PI/2,t(.042,.042,.045,u+.12,-1.04,l+.21,a,i,8).rotation.x=Math.PI/2}}for(let l of[-7.05,7.05])for(let h of[-4.1,4.35]){let f=Math.sign(l),u=Math.sign(h),d=new hn([new F(l,-.85,h),new F(l+f*.17,-1.35,h+u*.1),new F(l+f*.12,-2.05,h+u*.08),new F(l-f*.17,-2.8,h-u*.08),new F(l-f*.1,-3.05,h+u*.02)]),m=new Xe(new Ln(d,20,.11,10,!1),s);m.castShadow=!0,i.add(m);let M=new Xe(new Nt(.15,12,8),a);M.scale.set(.85,.55,1.35),M.position.copy(d.getPoint(1)),i.add(M);let p=new Xe(new Nt(.16,12,8),a);p.scale.set(.55,1.3,.8),p.position.copy(d.getPoint(.14)),i.add(p)}}function bu(i){let{city:e,root:t,box:n,cylinder:s,mat:r,texture:o,interactive:a,buildings:c,hemi:l,key:h,fill:f,state:u}=i,d=r("street-metal",3754825,.45,.5),m=r("street-ivory",14997686),M=r("vehicle-glass",3231061,.26,.28),p=new zt({color:16764551,transparent:!0,opacity:0}),g=[],y=o((P,D,X)=>{let ue=P.createRadialGradient(D/2,X/2,0,D/2,X/2,D/2);ue.addColorStop(0,"rgba(255,220,152,.8)"),ue.addColorStop(.35,"rgba(255,220,152,.28)"),ue.addColorStop(1,"rgba(255,220,152,0)"),P.fillStyle=ue,P.fillRect(0,0,D,X)},64,64),E=new zt({map:y,transparent:!0,opacity:0,depthWrite:!1});c.forEach((P,D)=>{let X=[5798512,9266507,7636876,9931365];if(P.h<1.8){n(P.w*.76,.27,.025,0,.36,P.d/2+.015,M,P.group,.005);for(let Be of[-P.w*.32,0,P.w*.32])n(.022,.28,.04,Be,.36,P.d/2+.025,m,P.group,.004);let _e=n(P.w*.85,.035,.24,0,.55,P.d/2+.12,r("awning-"+D,X[D%4]),P.group,.008);_e.rotation.x=.12,n(P.w*.85,.065,.018,0,.5,P.d/2+.23,r("awning-"+D,X[D%4]),P.group,.004)}let ue=Math.max(2,Math.floor(P.w*3)),ie=Math.max(2,Math.floor(P.h*3.5));for(let _e=0;_e<ie;_e++)for(let Be=0;Be<ue;Be++)if((_e*13+Be*7+D)%3===0){let pe=-P.w/2+(Be+.84)*P.w/(ue+.7),ye=.2+P.h-(_e+.785)*P.h/(ie+.65);for(let Ee of[-1,1]){let j=new Xe(new Hn(P.w/(ue+.7)*.44,P.h/(ie+.65)*.43),p);j.position.set(pe,ye,Ee*(P.d/2+.006)),Ee<0&&(j.rotation.y=Math.PI),P.group.add(j),g.push(j)}}s(.012,.012,Math.max(.3,P.h-.1),P.w/2+.022,P.h/2+.22,-P.d*.35,d,P.group,5),D%3===0&&!P.clearRoof&&n(.25,.11,.2,-P.w*.2,P.h+.39,-P.d*.22,r("roof-hvac",10659998),P.group,.015)});let x=[];for(let[P,D]of[[-4.8,-.45],[-2.3,-.45],[.95,-2.9],[.95,-1.15],[3,-.45],[5,-.45],[-3.7,2.35],[1.1,2.35],[3.6,2.35]]){s(.035,.045,.77,P,.48,D,d,e,8),n(.19,.025,.05,P+.065,.88,D,d,e,.008);let X=n(.14,.018,.065,P+.08,.86,D,p,e,.008);X.castShadow=!1,x.push(X),s(.065,.085,.06,P,.14,D,m,e,8);let ue=new Xe(new Hn(.75,.75),E);ue.rotation.x=-Math.PI/2,ue.position.set(P+.1,.101,D+.08),e.add(ue)}for(let P of[-3.55,-2.65])n(.025,.5,.025,P,.38,-.48,d);n(.98,.04,.36,-3.1,.65,-.52,r("shelter-roof",6521210)),n(.92,.36,.012,-3.1,.4,-.65,r("shelter-glass",9548204,.2,.1,{transparent:!0,opacity:.42})),n(.7,.045,.15,-3.1,.29,-.5,m),n(.14,.26,.025,-2.6,.47,-.46,m);for(let P of[-4.1,-3.9,-3.7]){let D=new Xe(new si(.08,.012,5,12,Math.PI),d);D.rotation.y=Math.PI/2,D.position.set(P,.2,2.22),e.add(D)}for(let P of[-4.9,-.3,3.8])s(.055,.055,.16,P,.2,.7,d,e,8);for(let P=0;P<18;P++){let D=new Xe(new Pn(.1,1),r("hedge",6652266));D.scale.set(1.25,.7,1),D.position.set(1.3+P%9*.25,.23,Math.floor(P/9)?2.16:.8),e.add(D)}let T=[];function w(P,D=!1){let X=new xt;e.add(X);let ue=r("car-body-"+P,[7376533,12955005,9719618,12568246,3754839,7568485][P%6]),ie=D?.79:.4,_e=D?.22:.19,Be=n(_e,.1,ie,0,.17,0,ue,X,.035);n(_e*.87,D?.14:.085,ie*.66,0,D?.28:.255,-ie*.04,M,X,.022),n(_e*.9,.025,ie*.51,0,D?.36:.31,-ie*.04,ue,X,.012);for(let pe of[-_e*.52,_e*.52])for(let ye of[-ie*.31,ie*.31]){let Ee=s(.043,.043,.025,pe,.12,ye,r("tyre",2830382),X,10);Ee.rotation.z=Math.PI/2}for(let pe of[-.06,.06])n(.045,.023,.012,pe,.19,ie*.51,r("headlight",16113073),X,.004),n(.04,.018,.012,pe,.18,-ie*.51,r("tail-light",9651513),X,.004);a(Be,{action:"traffic",id:String(P),key:"vehicle-"+P}),T.push({object:X,i:P,speed:D?.24:.32+P%3*.07,t:P/8,vertical:P>5,paused:!1})}for(let P=0;P<8;P++)w(P,P===2);let _=[];for(let P=0;P<6;P++){let D=new xt;e.add(D);let X=r("everyday-coat-"+P,[5008240,11836018,9599085,7439468][P%4]);n(.065,.12,.055,0,.22,0,X,D,.02);let ue=new Xe(new Nt(.038,8,6),m);ue.position.y=.32,D.add(ue);let ie=[];for(let Be of[-.023,.023])ie.push(n(.023,.13,.025,Be,.105,0,d,D,.004));for(let Be of[-.053,.053])n(.022,.11,.027,Be,.22,0,X,D,.008);let _e=[];for(let Be of[-1,1]){let pe=new xt;pe.position.set(Be*.052,.27,0),D.add(pe),n(.023,.105,.027,0,-.045,0,X,pe,.008);let ye=new Xe(new Nt(.016,8,6),m);ye.position.y=-.102,pe.add(ye),_e.push(pe)}_.push({object:D,legs:ie,arms:_e,i:P})}let S=[],I=new Bt;I.setAttribute("position",new lt([0,0,0,.25,.035,-.025,.09,0,.085],3)),I.computeVertexNormals();let C=r("bird-feather",14604745,.8,0,{side:un});for(let P=0;P<6;P++){let D=new xt,X=[];for(let ie of[-1,1]){let _e=new Xe(I,C);_e.scale.x=ie,D.add(_e),X.push(_e)}let ue=new Xe(new Fi(.022,.12,2,6),C);ue.rotation.x=Math.PI/2,D.add(ue),e.add(D),S.push({object:D,wings:X,i:P})}let O=[],U=r("cloud-vapour",14081494,.95);for(let P=0;P<3;P++){let D=new xt;for(let X=0;X<5;X++){let ue=new Xe(new Nt(.19+X%2*.09,12,8),U);ue.scale.set(1.2,.8,.8),ue.position.set((X-2)*.23,X%2*.08,0),D.add(ue)}e.add(D),O.push(D)}let q=new Xe(new Nt(.24,24,16),new zt({color:16045710}));e.add(q);let B=new Xe(new ki(.31,.325,48),new zt({color:14530940,transparent:!0,opacity:.4,side:un}));q.add(B);let J=new Xe(new Nt(.19,20,12),r("moon-surface",12832718,.95,0,{emissive:10272201,emissiveIntensity:.6}));e.add(J);for(let P=0;P<5;P++){let D=new Xe(new _s(.022+P%2*.01,10),r("moon-crater",9215905));D.position.set(Math.cos(P*2)*.1,Math.sin(P*2)*.1,.17),J.add(D)}let H=new Bt,z=[];for(let P=0;P<36;P++)z.push(Math.sin(P*17.7)*5,3.1+P%9*.21,-3.6+Math.cos(P*4.1)*1.1);H.setAttribute("position",new lt(z,3));let he=new Zs(H,new gs({color:13359060,size:.035,transparent:!0,opacity:0,depthWrite:!1}));e.add(he);let Y=10/24,Q="auto",ce=0,Ae=["auto","night","day"];function ke(P){Q=P;let D=document.getElementById("time-button");D&&(D.dataset.time=P)}return document.getElementById("time-button")?.addEventListener("click",()=>ke(Ae[(Ae.indexOf(Q)+1)%3])),window.addEventListener("city-time",P=>ke(P.detail)),{handle(P){if(P.action!=="traffic")return!1;let D=T[Number(P.id)];return D&&(D.paused=!D.paused),!0},update(P,D,X){if(Q==="auto")X||(Y=(Y+P/150)%1);else{let j=(Q==="night"?.87:.43)-Y;j>.5&&(j-=1),j<-.5&&(j+=1),Y=(Y+j*(X?1:1-Math.exp(-P*1.6))+1)%1}let ue=Math.sin((Y-.25)*Math.PI*2),ie=Ut.smoothstep(ue,-.3,.42);ce=1-ie,l.intensity=.85+ie*1.15,h.intensity=.55+ie*3.05,f.intensity=.8+ie*.4,h.color.setHex(ie>.55?16770756:9547464),h.position.set(Math.cos(Y*Math.PI*2)*9,5+ie*8,5),p.opacity=ce*.88,E.opacity=ce*.5,he.material.opacity=ce*.72;let _e=(Y-.25)*Math.PI*2;q.position.set(-Math.cos(_e)*4.8,3+Math.sin(_e)*1.45,-1.6),J.position.set(Math.cos(_e)*4.4,3-Math.sin(_e)*1.45,-1.6),q.visible=ue>-.08,J.visible=ue<.08,B.quaternion.copy(i.camera.quaternion),J.quaternion.copy(i.camera.quaternion);let Be=Math.floor(Y*1440),pe=document.getElementById("city-clock");pe&&(pe.textContent=String(Math.floor(Be/60)).padStart(2,"0")+":"+String(Be%60).padStart(2,"0"));let ye=document.getElementById("time-icon");ye&&(ye.textContent=ce>.5?"\u263E":"\u263C"),document.documentElement.dataset.cityTime=ce>.5?"night":"day";for(let Ee of T){!X&&!Ee.paused&&(Ee.t=(Ee.t+P*Ee.speed/(Ee.vertical?6:10.8))%1);let j=Ee.i%2===0,be=j?1-Ee.t:Ee.t;Ee.vertical?(Ee.object.position.set(.42+(j?.19:-.19),0,-3.1+be*6.2),Ee.object.rotation.y=j?Math.PI:0,Ee.object.position.y=.087*Ut.clamp((Ee.object.position.z-1.7)/.5,0,1)):(Ee.object.position.set(-5.3+be*10.6,0,.15+(j?-.19:.19)),Ee.object.rotation.y=j?-Math.PI/2:Math.PI/2)}for(let Ee of _){let j=(Ee.i/_.length+(X?0:D*.018))%1,be=Ee.i%2===0;Ee.object.position.set(-5+j*10,.04,be?-.43:.71),Ee.object.rotation.y=be?-Math.PI/2:Math.PI/2,Ee.legs.forEach((Se,Ue)=>Se.rotation.x=X?0:Math.sin(D*7+Ee.i+Ue*Math.PI)*.32),Ee.arms.forEach((Se,Ue)=>Se.rotation.x=X?0:-Math.sin(D*7+Ee.i+Ue*Math.PI)*.26)}for(let Ee of S){let j=(X?.3:D*.17)+Ee.i*.5;Ee.object.position.set(Math.cos(j)*3.8,3.3+Math.sin(j*1.4+Ee.i)*.35,-.8+Math.sin(j)*2),Ee.object.rotation.y=-j,Ee.object.rotation.z=Math.sin(j)*.12,Ee.wings.forEach((be,Se)=>be.rotation.z=X?.16:Math.sin(D*5.5+Ee.i*.7)*.55*(Se?1:-1))}O.forEach((Ee,j)=>Ee.position.set(Math.sin((X?0:D*.018)+j*2.4)*4.5,3.25+j*.15,-1.4-j*.25))},get stats(){return{clockMode:Q,clock:Y,night:ce,vehicles:T.map(P=>({id:P.i,paused:P.paused,position:P.object.position.toArray()})),birds:S.map(P=>({position:P.object.position.toArray(),wing:P.wings[0].rotation.z})),pedestrianArms:_.reduce((P,D)=>P+D.arms.length,0)+i.people.reduce((P,D)=>P+D.userData.arms.length,0),pedestrians:_.length+i.people.length}}}}function Eu({root:i,box:e,cylinder:t,mat:n,texture:s,interactive:r,hoverRecords:o,capture:a}){let c=n("antique-brass",11176016,.32,.72),l=n("desk-paper",14735556),h=n("desk-ink",3491144),f={};function u(D,X,ue,ie){let _e=new xt;return _e.position.set(X,ue,ie),i.add(_e),f[D]=_e,o.push({key:"desk-"+D,type:"prop",object:_e,value:0,rest:_e.position.clone()}),_e}function d(D,X){return r(D,{action:"desk",id:X,key:"desk-"+X}),D}let m=u("globe",6.65,-.37,-2.4);t(.4,.46,.09,0,0,0,c,m,24),t(.055,.08,.42,0,.24,0,c,m,12);let M=s((D,X,ue)=>{D.fillStyle="#526f72",D.fillRect(0,0,X,ue),D.strokeStyle="#abc3ad55",D.lineWidth=1;for(let ie=0;ie<X;ie+=X/12)D.beginPath(),D.moveTo(ie,0),D.lineTo(ie,ue),D.stroke();for(let ie=0;ie<ue;ie+=ue/6)D.beginPath(),D.moveTo(0,ie),D.lineTo(X,ie),D.stroke();D.fillStyle="#b7b99b";for(let ie of[[[.07,.22],[.15,.1],[.28,.16],[.33,.31],[.24,.4],[.19,.51],[.13,.37]],[[.25,.49],[.35,.53],[.39,.68],[.32,.88],[.28,.68]],[[.49,.24],[.63,.16],[.85,.2],[.92,.36],[.79,.49],[.66,.39],[.59,.48]],[[.48,.43],[.61,.43],[.65,.58],[.57,.8],[.51,.65]],[[.8,.68],[.89,.64],[.94,.76],[.84,.83]]])D.beginPath(),ie.forEach(([_e,Be],pe)=>pe?D.lineTo(_e*X,Be*ue):D.moveTo(_e*X,Be*ue)),D.closePath(),D.fill()},512,256),p=new xt;p.position.y=.9,p.rotation.z=-.3,m.add(p);let g=d(new Xe(new Nt(.53,32,20),n("globe-ocean",16777215,.65,.12,{map:M})),"globe");p.add(g);let y=new Xe(new si(.59,.018,8,48),c);y.rotation.y=Math.PI/2,p.add(y);let E=u("map",-6.5,-.35,-.15),x=s((D,X,ue)=>{D.fillStyle="#d7d1b9",D.fillRect(0,0,X,ue),D.strokeStyle="#687e7360",D.lineWidth=3;for(let ie=0;ie<8;ie++)D.beginPath(),D.moveTo(0,ie*50+20),D.bezierCurveTo(X*.3,ie*36+30,X*.6,ie*65+5,X,ie*48),D.stroke();D.strokeStyle="#a2987e",D.lineWidth=6,D.beginPath(),D.moveTo(X*.3,0),D.lineTo(X*.5,ue),D.stroke(),D.fillStyle="#63888570",D.fillRect(X*.15,ue*.35,X*.27,ue*.22)}),T=d(e(1.3,.015,1.1,0,0,0,n("map-print",16777215,.85,0,{map:x}),E,.006),"map");T.rotation.y=.16;for(let D of[-.6,.6]){let X=d(t(.065,.065,1.25,D,.045,0,l,E,12),"map");X.rotation.x=Math.PI/2}let w=u("coffee",-1.9,-.34,4.28);t(.38,.34,.035,0,0,0,l,w,24),d(t(.22,.17,.34,0,.19,0,n("cup-glaze",13160383,.23),w,24),"coffee"),t(.19,.19,.008,0,.365,0,n("coffee-surface",4799020,.18),w,24);let _=d(new Xe(new si(.11,.032,8,20),l),"coffee");_.position.set(.23,.22,0),w.add(_);let S=[];for(let D=0;D<3;D++){let X=new hn([new F(0,0,0),new F(.04,.15,0),new F(-.025,.28,0),new F(.015,.4,0)]),ue=new Xe(new Ln(X,12,.008,4,!1),n("coffee-steam-"+D,13158581,.9,0,{transparent:!0,opacity:.2,depthWrite:!1}));ue.position.set((D-1)*.08,.4,0),w.add(ue),S.push(ue)}let I=u("camera",-4.25,-.33,4.16);I.rotation.y=-.18,d(e(.92,.43,.32,0,.25,0,h,I,.05),"camera"),e(.84,.08,.33,0,.47,0,c,I,.025),e(.3,.12,.29,.03,.54,0,h,I,.025);let C=d(t(.18,.2,.22,0,.27,.24,c,I,24),"camera");C.rotation.x=Math.PI/2,t(.14,.14,.025,0,.27,.37,n("camera-lens",2443344,.12,.5),I,24).rotation.x=Math.PI/2,t(.06,.06,.04,-.3,.53,0,c,I,12);let O=u("aquarium",6.7,-.35,.1),U=[],q=[];d(e(1.35,.09,.94,0,.04,0,c,O,.035),"aquarium");let B=n("aquarium-glass",10602947,.12,.1,{transparent:!0,opacity:.18,depthWrite:!1});for(let D of[-.43,.43])d(e(1.28,.74,.018,0,.46,D,B,O,.006),"aquarium");for(let D of[-.63,.63])d(e(.018,.74,.86,D,.46,0,B,O,.006),"aquarium");let J=e(1.23,.63,.82,0,.41,0,n("aquarium-water",5278601,.22,.05,{transparent:!0,opacity:.13,depthWrite:!1}),O,.015);J.castShadow=!1,e(1.22,.065,.81,0,.13,0,n("aquarium-sand",12826263),O,.01);for(let D of[-.63,.63])for(let X of[-.43,.43])e(.018,.76,.018,D,.47,X,c,O,.003);for(let D of[-.43,.43])e(1.3,.025,.023,0,.85,D,c,O,.004);for(let D=0;D<9;D++){let X=new Xe(new Pn(.055,1),D%2?l:h);X.position.set(-.5+D*.12,.18,Math.sin(D*2)*.29),X.scale.y=.5,O.add(X)}for(let D of[-.43,.42])for(let X=0;X<3;X++){let ue=e(.025,.24+X*.07,.014,D+(X-1)*.035,.29+X*.035,-.26,n("aquarium-plant",6456941),O,.007);ue.rotation.z=(X-1)*.2}for(let D=0;D<3;D++){let X=new xt;O.add(X);let ue=n("fish-"+D,[13209699,7183259,13874295][D]),ie=d(new Xe(new Nt(.09,16,10),ue),"aquarium");ie.scale.set(1.45,.68,.54),X.add(ie);let _e=new Xe(new Oi(.075,.12,3),ue);_e.rotation.z=-Math.PI/2,_e.position.x=-.15,X.add(_e);for(let Be of[-1,1]){let pe=new Xe(new Nt(.012,8,6),h);pe.position.set(.085,.015,Be*.038),X.add(pe)}U.push({object:X,tail:_e,i:D})}let H=n("fish-bubble",13034972,.12,.2,{transparent:!0,opacity:.65,depthWrite:!1});for(let D=0;D<16;D++){let X=new Xe(new Nt(.024+D%3*.007,10,7),H);O.add(X),X.visible=!1,q.push(X)}let z=u("books",6.55,-.32,2.3);for(let D=0;D<3;D++){let X=d(e(1.25,.13,.82,0,.08+D*.16,0,n("desk-book-"+D,[6909787,10190949,4741985][D]),z,.025),"books");X.rotation.y=(D-1)*.12,e(1.12,.075,.77,0,.1+D*.16,.015,l,z,.01)}let he=u("loupe",1,-.35,4.3),Y=d(new Xe(new si(.26,.025,8,32),c),"loupe");Y.rotation.x=Math.PI/2,he.add(Y);let Q=d(new Xe(new _s(.235,32),n("loupe-glass",10666939,.12,.15,{transparent:!0,opacity:.25,side:un})),"loupe");Q.rotation.x=-Math.PI/2,Q.position.y=.008,he.add(Q),d(e(.09,.07,.58,0,0,.48,h,he,.03),"loupe");let ce=0,Ae=!0,ke=0,P=0;return{handle(D){return D.action!=="desk"?!1:(D.id==="globe"&&(ce+=Math.PI*3),D.id==="coffee"&&(Ae=!Ae,P=.14),D.id==="aquarium"&&(ke=3.2),D.id==="camera"&&a(),D.id==="loupe"&&window.dispatchEvent(new CustomEvent("city-zoom",{detail:"in"})),!0)},update(D,X,ue){let ie=ce*(ue?1:1-Math.exp(-D*1.7));ce-=ie,g.rotation.y+=ie+(ue?0:D*.035),ke=Math.max(0,ke-D),U.forEach(({object:_e,tail:Be,i:pe})=>{let ye=(ue?0:X*.45)+pe*2.1;_e.position.set(Math.sin(ye)*.38,.38+pe*.07,Math.cos(ye)*.2),_e.rotation.y=Math.cos(ye)>0?0:Math.PI,Be.rotation.y=ue?0:Math.sin(X*6+pe)*.24}),q.forEach((_e,Be)=>{let pe=((3.2-ke)*.75+Be/16)%1;_e.visible=ke>0;let ye=U[Be%3].object,Ee=ye.position.x+.14*Math.cos(ye.rotation.y),j=ye.position.z-.14*Math.sin(ye.rotation.y);_e.position.set(Ee+Math.sin(Be+pe*5)*.025,ye.position.y+pe*(.81-ye.position.y),j),_e.scale.setScalar(.5+pe*.6)}),P*=Math.exp(-D*4),w.rotation.z=P,S.forEach((_e,Be)=>{_e.visible=Ae,_e.position.y=.4+(ue?0:(Math.sin(X*.8+Be)*.5+.5)*.08),_e.rotation.y=Be*1.4+(ue?0:X*.2),_e.material.opacity=Ae?ue?.2:.15+.08*Math.sin(X*1.3+Be):0})},get stats(){return{globeAngle:g.rotation.y,steamOn:Ae,bubbleTime:ke,fish:U.length,bubbles:q.filter(D=>D.visible).length,items:Object.keys(f)}}}}function Tu(i,e=!1){let t=i[0].index!==null,n=new Set(Object.keys(i[0].attributes)),s=new Set(Object.keys(i[0].morphAttributes)),r={},o={},a=i[0].morphTargetsRelative,c=new Bt;c.morphTargetsRelative=a;let l=0;for(let h=0;h<i.length;++h){let f=i[h],u=0,d=0;if(t!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let m in f.attributes){if(!n.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+m+'" attribute exists among all geometries, or in none of them.'),null;r[m]===void 0&&(r[m]=[]),r[m].push(f.attributes[m]),u++}if(u!==n.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let m in f.morphAttributes){if(!s.has(m))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;if(f.morphAttributes[m].length!==i[0].morphAttributes[m].length)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have the same number of morph targets for the "'+m+'" morph attribute.'),null;o[m]===void 0&&(o[m]=[]),o[m].push(f.morphAttributes[m]),d++}if(d!==s.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of morph attributes."),null;if(e){let m;if(t)m=f.index.count;else if(f.attributes.position!==void 0)m=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,m,h),l+=m}}if(t){let h=0,f=[];for(let u=0;u<i.length;++u){let d=i[u].index;for(let m=0;m<d.count;++m)f.push(d.getX(m)+h);h+=i[u].attributes.position.count}c.setIndex(f)}for(let h in r){let f=wu(r[h]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,f)}for(let h in o){let f=o[h][0].length;if(f!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let u=0;u<f;++u){let d=[];for(let M=0;M<o[h].length;++M)d.push(o[h][M][u]);let m=wu(d);if(!m)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(m)}}}return c}function wu(i){let e,t,n,s=-1,r=0;for(let l=0;l<i.length;++l){let h=i[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(n===void 0&&(n=h.normalized),n!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let o=new e(r),a=new vn(o,t,n),c=0;for(let l=0;l<i.length;++l){let h=i[l];if(h.isInterleavedBufferAttribute){let f=c/t;for(let u=0,d=h.count;u<d;u++)for(let m=0;m<t;m++){let M=h.getComponent(u,m);a.setComponent(u+f,m,M)}}else o.set(h.array,c);c+=h.count*t}return s!==void 0&&(a.gpuType=s),a}var Ar=new F;function Mn(i,e,t,n,s,r){let o=2*Math.PI*s/4,a=Math.max(r-2*s,0),c=Math.PI/4;Ar.copy(e),Ar[n]=0,Ar.normalize();let l=.5*o/(o+a),h=1-Ar.angleTo(i)/c;return Math.sign(Ar[t])===1?h*l:a/(o+a)+l+l*(1-h)}var Da=class i extends In{constructor(e=1,t=1,n=1,s=2,r=.1){let o=s*2+1;if(r=Math.min(e/2,t/2,n/2,r),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:s,radius:r},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let c=new F,l=new F,h=new F(e,t,n).divideScalar(2).subScalar(r),f=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,m=f.length/6,M=new F,p=.5/o;for(let g=0,y=0;g<f.length;g+=3,y+=2)switch(c.fromArray(f,g),l.copy(c),l.x-=Math.sign(l.x)*p,l.y-=Math.sign(l.y)*p,l.z-=Math.sign(l.z)*p,l.normalize(),f[g+0]=h.x*Math.sign(c.x)+l.x*r,f[g+1]=h.y*Math.sign(c.y)+l.y*r,f[g+2]=h.z*Math.sign(c.z)+l.z*r,u[g+0]=l.x,u[g+1]=l.y,u[g+2]=l.z,Math.floor(g/m)){case 0:M.set(1,0,0),d[y+0]=Mn(M,l,"z","y",r,n),d[y+1]=1-Mn(M,l,"y","z",r,t);break;case 1:M.set(-1,0,0),d[y+0]=1-Mn(M,l,"z","y",r,n),d[y+1]=1-Mn(M,l,"y","z",r,t);break;case 2:M.set(0,1,0),d[y+0]=1-Mn(M,l,"x","z",r,e),d[y+1]=Mn(M,l,"z","x",r,n);break;case 3:M.set(0,-1,0),d[y+0]=1-Mn(M,l,"x","z",r,e),d[y+1]=1-Mn(M,l,"z","x",r,n);break;case 4:M.set(0,0,1),d[y+0]=1-Mn(M,l,"x","y",r,e),d[y+1]=1-Mn(M,l,"y","x",r,t);break;case 5:M.set(0,0,-1),d[y+0]=Mn(M,l,"x","y",r,e),d[y+1]=1-Mn(M,l,"y","x",r,t);break}}static fromJSON(e){return new i(e.width,e.height,e.depth,e.segments,e.radius)}};var pt=document.getElementById("city-canvas"),De={lens:"base",presentation:"illustration",cameraBlend:1,storyScene:"movement",previewScene:"movement",light:!0,rotation:0,lookYaw:0,visible:!0,paused:!1,hoverKey:null,selectedKey:null,phase:2,userZoom:1,still:matchMedia("(prefers-reduced-motion: reduce)").matches},Jt;try{Jt=new Aa({canvas:pt,antialias:!0,alpha:!0,powerPreference:"low-power"})}catch{document.documentElement.classList.add("no-webgl"),window.dispatchEvent(new Event("city-fallback"))}Jt&&H0();function H0(){Jt.setPixelRatio(Math.min(devicePixelRatio,1.5)),Jt.shadowMap.enabled=!0,Jt.shadowMap.type=Hi,Jt.outputColorSpace=en,Jt.toneMapping=mr,Jt.toneMappingExposure=1.2;let i=new Xs,e=new tn(62,1,.012,1e3),t=new xt;i.add(t);let n=new xt;t.add(n);let s=[],r=[];function o(N,ee){return N.userData.cityAction=ee,s.push(N),N}let a=new xt,c=new xt,l=new xt;a.visible=c.visible=l.visible=!1,n.add(a,c,l);let h=new F(0,.65,0);e.position.set(13,14,18),e.lookAt(h);let f=new cr(13227749,7754807,2);i.add(f);let u=new Ms(16769723,3.6);u.position.set(-5,13,6),u.castShadow=!0,u.shadow.mapSize.set(1024,1024),u.shadow.camera.left=-12,u.shadow.camera.right=12,u.shadow.camera.top=12,u.shadow.camera.bottom=-12,u.shadow.normalBias=.035,u.shadow.bias=-2e-4,u.shadow.radius=4,i.add(u);let d=new Ms(9811137,1.2);d.position.set(9,5,-6),i.add(d);let m=new dr(16759402,32,18,2);m.position.set(-4.8,4.8,-1.3),i.add(m);let M={};function p(N,ee,de=.65,Re=0,He={}){return M[N]||(M[N]=new vi({color:ee,roughness:de,metalness:Re,...He}))}let g=p("wood",7295550),y=p("edgewood",4667179),E=p("paper",14011578),x=p("concrete",12960953),T=p("asphalt",6252127),w=p("curb",13026997),_=p("roof",6843232),S=p("metal",3291704,.4,.65),I=p("cream",14735295),C=p("water",3891814,.25,.2),O=p("grass",6714459),U=p("bark",6771783),q=new zt({color:8314856}),B=new zt({color:11593121}),J=new zt({color:15975550});function H(N,ee,de,Re,He,Mt,ge,Ke=n,vt=.025){let Tt=vt?new Da(N,ee,de,2,Math.min(vt,N/4,ee/4,de/4)):new In(N,ee,de),At=new Xe(Tt,ge);return At.position.set(Re,He,Mt),At.castShadow=!0,At.receiveShadow=!0,Ke.add(At),At}function z(N,ee,de,Re,He,Mt,ge,Ke=n,vt=16){let Tt=new Xe(new xi(N,ee,de,vt),ge);return Tt.position.set(Re,He,Mt),Tt.castShadow=!0,Tt.receiveShadow=!0,Ke.add(Tt),Tt}function he(N,ee=512,de=512){let Re=document.createElement("canvas");Re.width=ee,Re.height=de,N(Re.getContext("2d"),ee,de);let He=new $s(Re);return He.colorSpace=en,He.anisotropy=Math.min(4,Jt.capabilities.getMaxAnisotropy()),He}let Y=27,Q=()=>(Y=Y*16807%2147483647,(Y-1)/2147483646),ce=he((N,ee,de)=>{N.fillStyle="#80654d",N.fillRect(0,0,ee,de);for(let Re=0;Re<500;Re++){let He=Q()*de;N.strokeStyle=`rgba(31,27,20,${.025+Q()*.065})`,N.lineWidth=.4+Q()*.7,N.beginPath(),N.moveTo(0,He),N.bezierCurveTo(ee*.3,He-2,ee*.7,He+2,ee,He),N.stroke()}});g.map=ce,g.needsUpdate=!0,Su({root:t,box:H,cylinder:z,mat:p,wood:g,edgewood:y,texture:he}),H(11.7,.22,7.5,0,-.2,0,p("ply",9336664),n,.08),H(11.5,.1,7.3,0,-.04,0,E,n,.025);for(let N of[-5.1,5.1])for(let ee of[-3,3])z(.09,.09,.14,N,-.36,ee,S);H(10.95,.035,6.7,0,.025,0,p("pavement",11843240),n,.015),H(10.95,.025,.78,0,.065,.15,T),H(.72,.026,6.7,.42,.065,0,T);for(let N=-5;N<=5;N++)Math.abs(N)>.7&&H(.29,.012,.025,N,.085,.15,I,n,0);for(let N=-3;N<=3;N++)Math.abs(N-.15)>.4&&H(.025,.012,.28,.42,.085,N,I,n,0);let Ae=[];for(let N of[-.6,.92]){Ae.push({axis:"x",x:.42,z:N});for(let ee=0;ee<6;ee++)H(.075,.012,.42,.12+ee*.12,.095,N,I,n,0)}for(let N of[-.3,1.13]){Ae.push({axis:"z",x:N,z:.15});for(let ee=0;ee<6;ee++)H(.42,.012,.075,N,.095,-.15+ee*.12,I,n,0)}H(10.8,.025,.62,0,.075,2.79,C),H(10.8,.045,.12,0,.095,2.43,w),H(10.8,.045,.12,0,.095,3.15,w),H(.92,.09,1.2,.42,.12,2.8,p("bridge",11053210));let ke=H(.74,.04,.5,.42,.102,1.95,p("bridge",11053210));ke.rotation.x=-.172;for(let N of[-.07,.91]){H(.035,.12,1.17,N,.23,2.8,S);for(let ee of[2.3,2.8,3.3])H(.025,.16,.025,N,.2,ee,S)}for(let N=0;N<12;N++)H(.24,.003,.013,-5+N*.89,.095,2.81,p("ripple",7443859),n,0);function P(N,ee,de,Re=!1){let He=Math.max(2,Math.floor(N*3)),Mt=Math.max(2,Math.floor(ee*3.5));return he((ge,Ke,vt)=>{ge.fillStyle=de,ge.fillRect(0,0,Ke,vt);let Tt=Ke/(He+.7),At=vt/(Mt+.65);for(let cn=0;cn<Mt;cn++)for(let qn=0;qn<He;qn++){let Rt=Q()>.6;ge.fillStyle=Rt?"#b7a17c":"#5e6b69";let sn=(qn+.6)*Tt,ci=(cn+.55)*At;ge.fillRect(sn,ci,Tt*.48,At*.47),ge.fillStyle=Rt?"#e2c590":"#7c8c84",ge.fillRect(sn+Tt*.04,ci+At*.04,Tt*.37,At*.08)}ge.strokeStyle="rgba(66,66,50,.18)",ge.lineWidth=2;for(let cn=1;cn<Mt;cn++)ge.beginPath(),ge.moveTo(0,cn*At),ge.lineTo(Ke,cn*At),ge.stroke()},256,512)}let D=[],X=[];function ue(N,ee,de,Re,He,Mt,ge=!1){let Ke=new xt;n.add(Ke),Ke.position.set(N,0,ee),H(de+.12,.09,Re+.12,0,.14,0,w,Ke,.02);let vt=new vi({map:P(de,He,Mt),roughness:.8}),Tt=new vi({map:P(Re,He,Mt,!0),roughness:.8}),At=new Xe(new In(de,He,Re),[Tt,Tt,I,I,vt,vt]);At.position.y=.2+He/2,At.castShadow=!0,At.receiveShadow=!0,Ke.add(At);let cn="building-"+D.length;if(o(At,{action:"project",lens:"assets",id:ge?"solar-morphology":"urban-assets",key:cn}),At.userData.anchorOffset=He/2+.45,r.push({key:cn,type:"building",object:Ke,value:0,facades:[vt,Tt]}),H(de+.04,.08,Re+.04,0,He+.23,0,I,Ke,.02),H(de-.08,.025,Re-.08,0,He+.28,0,_,Ke,.01),!(He<1&&!ge)){for(let Rt of[-de/2,de/2])H(.035,.075,Re,Rt,He+.31,0,x,Ke,.01);for(let Rt of[-Re/2,Re/2])H(de,.075,.035,0,He+.31,Rt,x,Ke,.01)}let qn=ge||D.length===3;if(qn||H(.22,.12,.2,de*.2,He+.37,-Re*.2,x,Ke,.025),z(.035,.035,.14,-de*.41,He+.39,-Re*.41,S,Ke,8),He>2)for(let Rt=.64;Rt<He;Rt+=.47){H(de+.1,.035,.11,0,Rt,Re/2+.03,I,Ke,.012);for(let sn of[-de*.4,de*.4])H(.025,.18,.02,sn,Rt+.1,Re/2+.07,S,Ke,.004)}if(He<1&&!ge){let Rt=new yi;Rt.moveTo(-de/2-.08,0),Rt.lineTo(0,.36),Rt.lineTo(de/2+.08,0),Rt.closePath();let sn=new Xe(new zi(Rt,{depth:Re+.16,bevelEnabled:!1}),[I,p("slate",6713197)]);sn.position.set(0,He+.28,-Re/2-.08),sn.castShadow=!0,sn.receiveShadow=!0,Ke.add(sn)}if(ge)for(let Rt=0;Rt<2;Rt++)for(let sn=0;sn<3;sn++){let ci=(sn-1)*de*.27,Cs=(-.015+Rt*.285)*Re,Sn=Re*.23,bn=new xt;bn.position.set(ci,He+.43,Cs+Sn/2),Ke.add(bn),H(de*.22,.025,Sn,0,0,-Sn/2,p("solar",3167332,.25,.3),bn,.008);for(let Ai of[-de*.105,0,de*.105])H(.008,.006,Sn*.94,Ai,.016,-Sn/2,S,bn,0);for(let Ai of[-Sn*.96,-Sn*.5,-Sn*.04])H(de*.21,.006,.008,0,.016,Ai,S,bn,0);for(let Ai of[-de*.075,de*.075])H(.015,.12,.015,ci+Ai,He+.37,Cs+Sn*.35,S,Ke,.002);bn.userData.roofHeight=He+.3,bn.userData.building=Ke,bn.rotation.x=-.15,X.push(bn)}return D.push({group:Ke,h:He,x:N,z:ee,w:de,d:Re,solar:ge,clearRoof:qn}),Ke}ue(-4.55,-2.1,1.13,1.12,.88,"#c6c5b7",!0),ue(-2.9,-2,1.18,1.15,2.24,"#c3c4b9",!0),ue(-1.24,-2.12,1.1,1.05,1.46,"#babdaf"),ue(1.8,-2.15,1.14,1.12,2.8,"#b9c1b9"),ue(3.38,-2.3,1.1,.9,1.64,"#c3c4b8"),ue(4.8,-1.6,.75,1.65,.94,"#cbc6b1"),ue(-4.55,1.37,1.07,1.13,.69,"#c9c2a9",!0),ue(-3,1.34,1.1,1.18,1.21,"#c3c3b1"),ue(-1.4,1.38,1,1.05,.82,"#cec6ac"),ue(4.55,1.23,.9,1.16,1.4,"#b5c0b5"),o(H(2.3,.035,1.58,2.35,.12,1.48,O),{action:"project",lens:"people",id:"heat-fire",key:"square"}),H(.22,.04,1.55,2.35,.15,1.48,E),H(2.25,.04,.2,2.35,.15,1.48,E);function ie(N,ee,de=.22){z(.15,.17,.12,N,.19,ee,w),z(.035,.055,.55,N,.49,ee,U);let Re=new Xe(new Pn(de,1),p("leaf",7242851));Re.position.set(N,.92,ee),Re.scale.set(1,1.35,1),Re.castShadow=!0,n.add(Re)}for(let[N,ee,de]of[[1.56,1.1,.24],[3.1,1.1,.24],[1.56,1.93,.2],[3.1,1.93,.2],[-5.12,.78,.18],[-3.72,2.15,.18],[-2.15,2.15,.17],[-.7,2.16,.19],[4.9,2.1,.18]])ie(N,ee,de);for(let N of[1.5,3.05]){H(.43,.07,.14,N,.24,1.5,y);for(let ee of[-.16,.16])H(.025,.13,.12,N+ee,.16,1.5,S)}z(.62,.66,.12,-6.65,-.3,-2.1,S,t,32),z(.055,.07,3.4,-6.65,1.42,-2.1,S,t,12);let _e=H(1.15,.07,.07,-6.1,3.1,-2.1,S,t);_e.rotation.z=.12;let Be=new Xe(new Oi(.52,.65,32,1,!0),p("lampShade",7630420,.45,.4));Be.position.set(-5.55,2.9,-2.1),Be.castShadow=!0,t.add(Be),o(Be,{action:"light",key:"lamp"}),r.push({key:"lamp",type:"lamp",object:Be,value:0});let pe=new Xe(new Nt(.14,12,8),new zt({color:16767126}));pe.position.set(-5.55,2.72,-2.1),t.add(pe);let ye=new xt;ye.position.set(3.8,-.26,4.2),ye.rotation.y=-.14,t.add(ye);let Ee=H(2.2,.08,1.45,1.1,0,0,p("notebook",5135697),ye,.04);o(Ee,{action:"research",key:"notebook"}),r.push({key:"notebook",type:"notebook",object:ye,value:0});let j=H(2.1,.045,1.35,4.9,-.34,4.2,E,t,.02);j.rotation.y=-.14;let be=he((N,ee,de)=>{N.fillStyle="#4e5d51",N.fillRect(0,0,ee,de),N.fillStyle="#d4d3b6",N.font="500 34px sans-serif",N.fillText("URBAN",40,90),N.fillText("FIELD NOTES",40,138),N.font="18px sans-serif",N.fillText("assets / people / decisions",40,205)},512,320),Se=new Xe(new Hn(2.05,1.3),new vi({map:be,roughness:.85}));Se.rotation.x=-Math.PI/2,Se.position.set(1.1,.05,0),ye.add(Se),o(Se,{action:"research",key:"notebook"});let Ue=H(1.2,.72,1.05,-6.35,-.02,1.9,p("cabinet",7365711),t,.035);o(Ue,{action:"about",key:"cabinet"});for(let N=0;N<3;N++){H(1.08,.18,.025,-6.35,-.22+N*.21,2.44,p("drawer-cavity",2698280),t,.005);let ee=new xt;ee.position.set(-6.35,-.22+N*.21,2.45),t.add(ee);let de=H(1.08,.18,.055,0,0,0,p("drawer",10652520),ee,.015),Re=H(.25,.04,.065,0,0,.06,S,ee,.01);H(.99,.025,.76,0,-.075,-.34,p("drawer-base",9271383),ee,.008);for(let He of[-.49,.49])H(.025,.13,.74,He,-.02,-.35,p("drawer-side",9271383),ee,.005);H(.84,.04,.56,0,-.036,-.35,E,ee,.005),o(de,{action:"about",key:"cabinet",drawerIndex:N}),o(Re,{action:"about",key:"cabinet",drawerIndex:N}),r.push({key:"cabinet",type:"drawer",object:ee,value:0,index:N,rest:ee.position.clone()})}function Ce(N,ee,de,Re=.022){let He=new hn(N.map(ge=>new F(...ge)),!1,"catmullrom",0),Mt=new Xe(new Ln(He,48,Re,6,!1),ee);return Mt.userData.curve=He,de.add(Mt),Mt}let tt=[Ce([[-4.7,.14,.15],[.42,.14,.15],[4.8,.14,.15]],q,a,.045),Ce([[.42,.14,-3],[.42,.14,.15],[.42,.22,3.28]],q,a,.045),Ce([[-2.9,2.68,-1.37],[-2.9,1.5,-1.37],[-2.9,.14,-1.37],[-2.9,.14,.15]],q,a,.032)],Ve=[];for(let N=0;N<tt.length;N++)for(let ee=0;ee<3;ee++){let de=new Xe(new Nt(.095,12,8),new zt({color:15204351}));a.add(de),Ve.push({object:de,route:N,n:ee})}for(let N of[-4,-2,.42,2.7,4.8]){let ee=new Xe(new Nt(.06,10,8),q);ee.position.set(N,.14,.15),a.add(ee)}let Qe=new hn([[-2.5,.16,-.5],[-.3,.16,-.5],[-.3,.16,.92],[.42,.16,.92],[1.13,.16,.92],[1.2,.16,1.48],[2.35,.16,1.48]].map(N=>new F(...N)),!1,"catmullrom",0),it=[];for(let N=0;N<4;N++){let ee=new xt,de=new Xe(new Fi(.045,.13,2,6),p("walker-coat-"+N%4,[8688524,11182475,6782339,10259837][N%4]));de.position.y=.18,ee.add(de);let Re=new Xe(new Nt(.045,8,6),I);Re.position.y=.34,ee.add(Re);let He=[];for(let ge of[-1,1]){let Ke=H(.025,.13,.025,ge*.027,.055,0,S,ee,.005);He.push(Ke)}let Mt=[];for(let ge of[-1,1]){let Ke=new xt;Ke.position.set(ge*.063,.24,0),ee.add(Ke),H(.024,.12,.026,0,-.05,0,de.material,Ke,.008);let vt=new Xe(new Nt(.018,8,6),I);vt.position.y=-.115,Ke.add(vt),Mt.push(Ke)}ee.userData.arms=Mt,ee.userData.legs=He,n.add(ee),it.push(ee)}let dt={city:n,root:t,box:H,cylinder:z,mat:p,texture:he,interactive:o,buildings:D,hoverRecords:r,hemi:f,key:u,fill:d,camera:e,state:De,mount:pt,solarPanels:X,people:it,wake:L},G=bu(dt),ct=Mu(dt);function ot(){Jt.render(i,e);let N=document.createElement("canvas");N.width=pt.width,N.height=pt.height;let ee=N.getContext("2d");ee.fillStyle="#181818",ee.fillRect(0,0,N.width,N.height),ee.drawImage(pt,0,0);let de=document.createElement("a");de.download="ChenYang-city.png",de.href=N.toDataURL("image/png"),de.click(),pt.parentElement.classList.remove("shutter"),pt.parentElement.offsetWidth,pt.parentElement.classList.add("shutter"),setTimeout(()=>pt.parentElement.classList.remove("shutter"),500)}let at=Eu({...dt,capture:ot}),Ie=new Set(X);for(let N of[n,t,...D.map(ee=>ee.group)]){let ee=new Map;for(let de of[...N.children]){if(!de.isMesh||de.children.length||Array.isArray(de.material)||s.includes(de)||Ie.has(de)||de===Be||de===pe||!de.geometry.isBufferGeometry||N===n&&!["BoxGeometry","RoundedBoxGeometry","CylinderGeometry","IcosahedronGeometry"].includes(de.geometry.type))continue;let Re=de.material.uuid,He=ee.get(Re)||[];He.push(de),ee.set(Re,He)}for(let de of ee.values())if(de.length>2){let Re=de.map(ge=>{ge.updateMatrix();let Ke=ge.geometry.clone(),vt=Ke.index?Ke.toNonIndexed():Ke;return vt!==Ke&&Ke.dispose(),vt.applyMatrix4(ge.matrix),vt}),He=Tu(Re);if(!He){Re.forEach(ge=>ge.dispose());continue}let Mt=new Xe(He,de[0].material);Mt.castShadow=de.some(ge=>ge.castShadow),Mt.receiveShadow=de.some(ge=>ge.receiveShadow),N.add(Mt),de.forEach(ge=>N.remove(ge)),Re.forEach(ge=>ge.dispose())}}let wt={};for(let[N,ee]of Object.entries({assets:a,people:c,decisions:l}))wt[N]=[],ee.traverse(de=>{de.material&&(de.material=de.material.clone(),de.material.userData.baseOpacity=de.material.opacity,de.material.transparent=!0,wt[N].push(de.material))});let We={assets:0,people:0,decisions:0},Je=vu({camera:e,state:De,root:t,city:n,mount:pt}),R=yu({state:De,mount:pt,wake:L});function v(){let N=pt.clientWidth,ee=pt.clientHeight;if(!N||!ee)return;Jt.setSize(N,ee,!1),Je.resize(),R.resize();let de=pt.getBoundingClientRect(),Re=document.querySelector(".welcome").getBoundingClientRect();pt.style.setProperty("--scene-gutter",(innerWidth<=700?0:N*.25)+"px"),pt.style.setProperty("--scene-text-cut",Math.max(0,Re.bottom+24-de.top)+"px"),Z(),L()}function Z(){Jt.render(i,e),ct.renderLabels()}new ResizeObserver(v).observe(pt.parentElement);let fe=0,Me=0,Te=0,oe=0;Jt.shadowMap.autoUpdate=!1,Jt.shadowMap.needsUpdate=!0;function ae(N){if(N-fe<(innerWidth<=700?40:1e3/45)){Te=requestAnimationFrame(ae);return}let ee=Math.min((N-fe)/1e3||.016,.08);fe=N,Me+=ee,De.phase=Math.min(3,De.phase+ee);let de=De.still?1:1-Math.exp(-ee*5);t.rotation.y+=(De.rotation-t.rotation.y)*de,R.update(ee,Je),Je.update(ee,De.still),De.surveyReady=Je.stats.idle<.1;for(let ge of["assets","people","decisions"])We[ge]+=(+(ge===De.lens)*(1-Ut.smoothstep(De.cameraBlend,0,.3))-We[ge])*de;a.visible=We.assets>.02,c.visible=We.people>.02,l.visible=We.decisions>.02;for(let ge of["assets","people","decisions"])for(let Ke of wt[ge])Ke.opacity=Ke.userData.baseOpacity*We[ge];let Re=De.still?1:Math.min(1,De.phase/1.25);for(let ge of tt){let Ke=ge.geometry.index.count;ge.geometry.setDrawRange(0,Math.floor((De.lens==="assets"?Re:1)*Ke/3)*3)}for(let ge of Ve){let Ke=(ge.n/3+(De.still?.12:Me*.17))%1;ge.object.position.copy(tt[ge.route].userData.curve.getPoint(Ke)),ge.object.scale.setScalar(.35+.65*Math.sin(Ke*Math.PI))}for(let ge=0;ge<X.length;ge++)X[ge].rotation.x=-.15-(De.lens==="assets"?.08*(De.still?1:Re):0);for(let ge=0;ge<it.length;ge++){let Ke=(ge/it.length+(De.still?0:Me*.034))%1;it[ge].position.copy(Qe.getPoint(Ke));let vt=Qe.getTangent(Ke);it[ge].rotation.y=Math.atan2(vt.x,vt.z),it[ge].userData.legs.forEach((Tt,At)=>Tt.rotation.x=De.still?0:Math.sin(Me*8+ge+At*Math.PI)*.4),it[ge].userData.arms.forEach((Tt,At)=>Tt.rotation.x=De.still?0:-Math.sin(Me*8+ge+At*Math.PI)*.32)}for(let ge of r){let Ke=ge.key===De.hoverKey||ge.key===De.selectedKey;ge.value+=(Number(Ke)-ge.value)*(De.still?1:1-Math.exp(-ee*9));let vt=ge.value;if(ge.type==="building"){ge.object.position.y=vt*.035;for(let Tt of ge.facades)Tt.emissive.setHex(7317162),Tt.emissiveIntensity=vt*.24}else if(ge.type==="drawer"){let Tt=De.hoverKey==="cabinet"?De.hoverIndex??2:De.selectedIndex??2;ge.object.position.z=ge.rest.z+vt*(ge.index===Tt?.62:.04)}else ge.type==="prop"?ge.object.position.y=ge.rest.y+vt*.09:ge.type==="notebook"?ge.object.rotation.z=vt*.48:ge.type==="lamp"?ge.object.rotation.z=vt*.13:ge.type==="square"?ge.object.scale.multiplyScalar(1+vt*.18):ge.type==="proposal"&&(ge.object.position.y=ge.rest.y+vt*.12,ge.object.scale.x=ge.object.scale.z=1+vt*.05)}m.intensity+=(Number(De.light)*32-m.intensity)*de,G.update(ee,Me,De.still),ct.update(ee,Me,De.still),at.update(ee,Me,De.still),pe.material.color.setHex(De.light?16767126:5130300),R.stats.ready&&R.stats.opacity>=1||((De.still||N-oe>100)&&(Jt.shadowMap.needsUpdate=!0,oe=N),Jt.render(i,e)),ct.renderLabels(),(!De.still||De.phase<2.5||r.some(ge=>Math.abs(ge.value-+(ge.key===De.hoverKey||ge.key===De.selectedKey))>.002)||Math.abs(t.rotation.y-De.rotation)>1e-4||!Je.settled||R.unsettled||at.stats.bubbleTime>0||we()||Math.abs(m.intensity-Number(De.light)*32)>.01)&&De.visible&&!De.paused&&!document.hidden&&!document.documentElement.classList.contains("framework-mode")?Te=requestAnimationFrame(ae):Te=0}function we(){return["assets","people","decisions"].some(N=>Math.abs(We[N]-+(N===De.lens))>.002)}function L(){Te||(fe=0,Te=requestAnimationFrame(ae))}let le=new pr,se=new Le;function A(N){let ee=pt.getBoundingClientRect();return se.set((N.clientX-ee.left)/ee.width*2-1,-(N.clientY-ee.top)/ee.height*2+1),le.setFromCamera(se,e),le.intersectObjects(s,!1).find(de=>{let Re=de.object;for(;Re;){if(!Re.visible)return!1;Re=Re.parent}return!0})?.object}let k=document.createElement("span");k.id="idle-scene-hint",k.hidden=!0,pt.parentElement.append(k);let W=!1,me=0,Ne=0,re=0;pt.addEventListener("pointerdown",N=>{N.button===0&&(W=!0,me=N.clientX,Ne=N.clientY,re=De.rotation,pt.setPointerCapture(N.pointerId),pt.classList.add("dragging"))}),pt.addEventListener("pointermove",N=>{if(!W){let ee=A(N);De.hoverKey=ee?.userData.cityAction.key||null,De.hoverIndex=ee?.userData.cityAction.drawerIndex??2;let de=De.presentation==="model"?ct.pickStory(le):null;pt.style.cursor=de?"zoom-in":ee?"pointer":"grab",k.textContent=de?de[0].toUpperCase()+de.slice(1):"",k.hidden=!de||De.lens!=="base",L();return}Math.abs(N.clientX-me)>5&&(De.hoverKey=null,De.selectedKey=null,window.dispatchEvent(new Event("city-clear"))),De.rotation=Ut.clamp(re+(N.clientX-me)*.003,-.7,.7),L()}),pt.addEventListener("pointerleave",()=>{De.hoverKey=null,k.hidden=!0,L()});let Pe=0,ne=null;function xe(N){clearTimeout(Pe),ne=null,window.dispatchEvent(new CustomEvent("city-scene-return",{detail:{id:N}}))}function je(N){if(W&&Math.abs(N.clientX-me)<5&&Math.abs(N.clientY-Ne)<5){let ee=A(N),de=De.presentation==="model"?ct.pickStory(le):null;if(de){let Re=performance.now(),He=ne;He&&Re-He.time<400&&Math.hypot(N.clientX-He.x,N.clientY-He.y)<12?xe(He.id):(clearTimeout(Pe),ne={id:de,x:N.clientX,y:N.clientY,time:Re},Pe=setTimeout(()=>{xe(de)},300))}else ee?(De.selectedKey=ee.userData.cityAction.key,De.selectedIndex=ee.userData.cityAction.drawerIndex??2,window.dispatchEvent(new CustomEvent("city-object",{detail:De.lens==="decisions"&&ee.userData.adaptId?{action:"adapt",id:ee.userData.adaptId,key:"adapt-"+ee.userData.adaptId,lens:"decisions"}:ee.userData.cityAction}))):(De.selectedKey=null,window.dispatchEvent(new Event("city-clear")));L()}W=!1,pt.classList.remove("dragging")}pt.addEventListener("dblclick",N=>{if(N.preventDefault(),clearTimeout(Pe),De.presentation!=="model")return;A(N);let ee=ne?.id||ct.pickStory(le);ee&&xe(ee)}),pt.addEventListener("pointerup",je),pt.addEventListener("pointercancel",()=>{W=!1,pt.classList.remove("dragging")}),window.addEventListener("city-lens",N=>{clearTimeout(Pe),ne=null,De.phase=0,De.lens=N.detail,L()}),window.addEventListener("city-presentation",N=>{De.presentation=N.detail,k.hidden=!0,L()}),window.addEventListener("city-language",()=>queueMicrotask(v)),window.addEventListener("city-light",N=>{De.light=N.detail,L()}),window.addEventListener("city-reset",()=>{De.rotation=0,De.lookYaw=0,De.userZoom=1,L()});function yt(N){De.userZoom=Ut.clamp(De.userZoom*(N==="in"?1.15:1/1.15),.8,1.6),L()}document.getElementById("zoom-in").addEventListener("click",()=>yt("in")),document.getElementById("zoom-out").addEventListener("click",()=>yt("out")),window.addEventListener("city-zoom",N=>yt(N.detail)),window.addEventListener("city-time",()=>{De.phase=0,L()}),document.getElementById("time-button").addEventListener("click",()=>{De.phase=0,L()}),window.addEventListener("city-adapt",()=>{De.phase=0,L()}),window.addEventListener("city-prop",N=>{G.handle(N.detail),at.handle(N.detail),De.phase=0,L()}),window.addEventListener("city-mode",()=>{document.documentElement.classList.contains("framework-mode")||L()}),window.addEventListener("city-clear-selection",()=>{De.selectedKey=null,De.hoverKey=null,L()}),window.addEventListener("city-pause",N=>{De.paused=N.detail,De.paused||L()}),document.addEventListener("visibilitychange",()=>{document.hidden||L()}),matchMedia("(prefers-reduced-motion: reduce)").addEventListener("change",N=>{De.still=N.matches,L()}),new IntersectionObserver(N=>{De.visible=N[0].isIntersecting,De.visible&&L()}).observe(pt),window.CITY_MODEL={ready:!0,returnScene:xe,previewScene(N){De.storyScene=N,De.previewScene=N,Je.resize(),ct.update(0,0,!0),Z(),L()},get lens(){return De.lens},get light(){return De.light},get rotation(){return De.rotation},get renderer(){return Jt.info.render},get world(){return{...G.stats,crossings:Ae,illustration:R.stats,desk:at.stats,adaptation:ct.adaptations,stories:ct.stats,framing:Je.stats,zoom:De.userZoom}},get motion(){return{phase:De.phase,hover:De.hoverKey,selected:De.selectedKey,records:r.map(N=>({key:N.key,type:N.type,value:N.value,z:N.object.position.z,rotation:N.object.rotation.z})),packets:Ve.map(N=>N.object.position.toArray())}},inspectGeometry(){return{...ct.solarAudit(),pvClearance:X.map(N=>{let ee=N.children[0];ee.updateWorldMatrix(!0,!1),ee.geometry.computeBoundingBox();let de=ee.geometry.boundingBox,Re=1/0;for(let He of[de.min.x,de.max.x])for(let Mt of[de.min.y,de.max.y])for(let ge of[de.min.z,de.max.z])Re=Math.min(Re,ee.localToWorld(new F(He,Mt,ge)).y);return Re-(N.userData.roofHeight+N.userData.building.position.y)})}},scenePosition(N){let ee=ct.anchor(N);if(!ee)return null;let de=n.localToWorld(ee).project(e);return{x:(de.x*.5+.5)*pt.clientWidth,y:(-de.y*.5+.5)*pt.clientHeight}},scenePick(N,ee){return se.set(N/pt.clientWidth*2-1,-ee/pt.clientHeight*2+1),le.setFromCamera(se,e),ct.pickStory(le)},objectPosition(N,ee){let de=s.find(He=>He.userData.cityAction.action===N&&(!ee||He.userData.cityAction.id===ee));if(!de)return null;let Re=de.getWorldPosition(new F).project(e);return{x:(Re.x*.5+.5)*pt.clientWidth,y:(-Re.y*.5+.5)*pt.clientHeight}},resize:v},document.documentElement.classList.add("scene-ready"),v(),L(),window.dispatchEvent(new Event("city-ready"))}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
