parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"LQWD":[function(require,module,exports) {
var t=document.querySelectorAll(".section"),e=document.querySelectorAll(".controls"),i=document.querySelectorAll(".control"),n=document.querySelector(".main-content"),s=document.querySelector(".cta-btn"),c=document.getElementById("contact"),a=document.querySelector(".control-5");function o(){for(var e=0;e<i.length;e++)i[e].addEventListener("click",function(){var t=document.querySelectorAll(".active-btn");t[0].className=t[0].className.replace("active-btn",""),this.className+=" active-btn"});n.addEventListener("click",function(e){var n=e.target.dataset.id;n&&(i.forEach(function(t){t.classList.remove("active")}),t.forEach(function(t){t.classList.remove("active")}),document.getElementById(n).classList.add("active"))}),s.addEventListener("click",function(e){t.forEach(function(t){t.classList.remove("active")}),c.classList.add("active");var i=document.querySelectorAll(".active-btn");i[0].className=i[0].className.replace("active-btn",""),a.classList+=" active-btn"})}o();var r=function(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:3e3;this.txtElement=t,this.words=e,this.txt="",this.wordIndex=0,this.wait=parseInt(i,10),this.type(),this.isDeleting=!1};function l(){var t=document.querySelector(".txt-type"),e=JSON.parse(t.getAttribute("data-words")),i=t.getAttribute("data-wait");new r(t,e,i)}r.prototype.type=function(){var t=this,e=this.wordIndex%this.words.length,i=this.words[e];this.isDeleting?this.txt=i.substring(0,this.txt.length-1):this.txt=i.substring(0,this.txt.length+1),this.txtElement.innerHTML='<span class="txt">'.concat(this.txt,"</span>");var n=200;this.isDeleting&&(n/=2),this.isDeleting||this.txt!==i?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.wordIndex++,n=300):(n=this.wait,this.isDeleting=!0),setTimeout(function(){return t.type()},n)},document.addEventListener("DOMContentLoaded",l);
},{}]},{},["LQWD"], null)
//# sourceMappingURL=/script.3614ccdb.js.map