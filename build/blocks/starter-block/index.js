!function(e){function t(t){for(var n,u,l=t[0],i=t[1],p=t[2],f=0,s=[];f<l.length;f++)u=l[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&s.push(o[u][0]),o[u]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);for(a&&a(t);s.length;)s.shift()();return c.push.apply(c,p||[]),r()}function r(){for(var e,t=0;t<c.length;t++){for(var r=c[t],n=!0,l=1;l<r.length;l++){var i=r[l];0!==o[i]&&(n=!1)}n&&(c.splice(t--,1),e=u(u.s=r[0]))}return e}var n={},o={2:0},c=[];function u(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,u),r.l=!0,r.exports}u.m=e,u.c=n,u.d=function(e,t,r){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},u.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(u.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)u.d(r,n,function(t){return e[t]}.bind(null,n));return r},u.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="";var l=window.webpackJsonp=window.webpackJsonp||[],i=l.push.bind(l);l.push=t,l=l.slice();for(var p=0;p<l.length;p++)t(l[p]);var a=i;c.push([7,0]),r()}([function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.blockEditor},,function(e,t){e.exports=window.wp.blocks},function(e){e.exports=JSON.parse("{}")},,function(e,t,r){"use strict";r.r(t);var n=r(4),o=(r(3),r(5),r(0)),c=r(1),u=r(2);Object(n.registerBlockType)("create-block/starter-block",{edit:function(){return Object(o.createElement)("p",Object(u.useBlockProps)(),Object(c.__)("Starter Block – hello from the editor!","starter-block"))},save:function(){return Object(o.createElement)("p",u.useBlockProps.save(),Object(c.__)("Starter Block – hello from the saved content!","starter-block"))}})}]);