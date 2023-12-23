(()=>{"use strict";var n={28:(n,e,t)=>{t.d(e,{Z:()=>l});var o=t(81),i=t.n(o),r=t(645),a=t.n(r)()(i());a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap);"]),a.push([n.id,"@import url(https://fonts.googleapis.com/css2?family=Inconsolata:wght@400;700&display=swap);"]),a.push([n.id,":root {\n    background-color: #212121;\n    font-family: \"Inconsolata\", monospace;\n    color: white;\n    font-weight: 400;\n}\n\n*:focus {\n    outline: none;\n}\n\nbody {\n    padding: 0;\n    margin: 0;\n}\n\n.wrapper {\n    width: 100%;\n    height: 100vh;\n}\n\n#sidebar {\n    height: 100vh;\n    width: 350px;\n\n    position: fixed;\n    display: grid;\n    grid-template-rows: 360px 1fr;\n    transition: ease-in-out 0.15s;\n}\n\n#sidebar .bottom-half {\n    background-color: rgb(85, 85, 85);\n}\n\n.top-half {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-between;\n\n    width: 100%;\n}\n\n.top-half h1 {\n    font-size: 2.5rem;\n    padding: 0;\n    margin: 0;\n    margin-top: 25px;\n}\n\n.tabs {\n    display: grid;\n    grid-template-rows: repeat(3, 80px);\n\n    width: 100%;\n    padding: 0;\n    gap: 5px;\n}\n\n.tabs li {\n    display: grid;\n    grid-template-columns: 80px 80px;\n    justify-content: center;\n    align-items: center;\n    cursor: pointer;\n\n    transition: ease-out 0.05s;\n}\n\n.tabs li:hover {\n    background-color: rgba(114, 114, 114, 0.295);\n}\n\n.tabs li:active {\n    background-color: rgba(68, 68, 68, 0.582);\n}\n\n.tabs li h3 {\n    font-size: 25px;\n    font-weight: 400;\n}\n\n.tabs li img {\n    width: 50px;\n    filter: brightness(0) invert(1);\n}\n\n#today img {\n    width: 45px;\n}\n\n#week img {\n    width: 60px;\n    position: relative;\n    left: -7px;\n}\n\n#bottom-half {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n\n    background-size: cover;\n    background-repeat: no-repeat;\n    transition: ease-in-out 0.15s;\n}\n\n.projects {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n\n    width: 100%;\n}\n\n#project-form {\n    display: none;\n    flex-direction: column;\n    gap: 5px;\n}\n\n#project-form div {\n    display: flex;\n    justify-content: space-around;\n    align-items: center;\n}\n\n.save-project-btn,\n.cancel-project-btn {\n    width: 40%;\n    height: 40px;\n    font-size: 1rem;\n    border-radius: 10px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: white;\n    color: white;\n    cursor: pointer;\n\n    background-color: transparent;\n    transition: ease-in 0.15s;\n\n    font-size: 1rem;\n}\n\n.save-project-btn:hover,\n.cancel-project-btn:hover {\n\n    filter: drop-shadow(6px 10px 10px rgb(0, 0, 0));\n    width: 50%;\n    height: 50px;\n}\n\n.project-title {\n    height: 20px;\n    border-radius: 10px;\n    border-width: 0;\n    padding: 10px;\n    font-size: 1rem;\n}\n\n.background-filter {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n\n    width: 100%;\n    height: 100%;\n\n    background-color: rgba(0, 0, 0, 0.651);\n}\n\n.projects h1 {\n    font-size: 2.5rem;\n    padding: 0;\n    margin: 0;\n    margin-top: 25px;\n    margin-bottom: 20px;\n}\n\n.custom-projects {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(auto-fill, 40px);\n    grid-auto-rows: 40px;\n\n    width: 100%;\n    gap: 15px;\n    padding: 0;\n\n    overflow-y: auto;\n    height: 250px;\n}\n\n.custom-projects li {\n    display: grid;\n    justify-content: center;\n\n    font-size: 2rem;\n    cursor: pointer;\n    transition: ease-in-out 0.15s;\n\n    border-bottom-width: 1px;\n    border-bottom-style: solid;\n    border-bottom-color: transparent;\n\n    border-top-width: 1px;\n    border-top-style: solid;\n    border-top-color: transparent;\n}\n\n.custom-projects li:hover {\n    border-bottom-color: white;\n    border-top-color: white;\n}\n\n.add-project-btn {\n    border-radius: 100px;\n    padding: 10px;\n    padding-left: 20px;\n    padding-right: 20px;\n    font-size: 30px;\n\n    transition: ease-out 0.05s;\n    cursor: pointer;\n}\n\n.add-project-btn:hover {\n    color: black;\n    background-color: rgba(255, 255, 255, 0.445);\n}\n\n.add-project-btn:active {\n    background-color: rgba(255, 255, 255, 0.61);\n}\n\n.switch-background-btn {\n    width: 50%;\n    height: 30px;\n    margin-bottom: 50px;\n    background-color: transparent;\n    color: white;\n\n    font-family: \"Inconsolata\", monospace;\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n#main {\n    height: 100%;\n    margin-left: 350px;\n    display: grid;\n    grid-template-rows: 50px 1fr;\n\n}\n\n#main header {\n    background-color: black;\n    filter: drop-shadow(6px 10px 10px rgb(17, 17, 17));\n}\n\n#content {\n    width: 100%;\n    height: 100%;\n\n    display: flex;\n    justify-content: center;\n\n    box-shadow: inset 6px 6px 10px 0 rgb(17, 17, 17), inset -6px -6px 10px 0 rgb(17, 17, 17);\n}\n\n.content-container {\n    width: 85%;\n\n    display: none;\n    grid-template-rows: 200px 1fr;\n    grid-template-columns: 1fr;\n\n    justify-content: start;\n\n}\n\n.default-list-head {\n    display: flex;\n    width: 100%;\n    height: 67px;\n    align-self: center;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.default-list-head img{\n    width: 50px;\n    filter: brightness(0) invert(1);\n    cursor: pointer;\n}\n\n.visible{\n    display: flex;\n    align-items: center;\n}\n\n#content h1 {\n    font-size: 4rem;\n    margin-left: 100px;\n    align-self: center;\n\n    padding: 0;\n    margin: 0;\n}\n\n.default-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: repeat(auto-fill, 80px);\n    grid-auto-rows: 80px;\n\n    width: 100%;\n    gap: 20px;\n    margin-bottom: 100px;\n}\n\n.default-list-item {\n    display: flex;\n    width: 100%;\n    height: 80px;\n\n    justify-content: space-between;\n    align-items: center;\n\n    border-top-width: 1px;\n    border-top-color: white;\n\n    font-size: 1.6rem;\n\n    border-radius: 25px;\n    border-width: 1px;\n    border-style: solid;\n    border-color: white;\n}\n\n.default-list-item:hover {\n    background-color: #212121;\n    filter: drop-shadow(6px 10px 10px rgb(0, 0, 0));\n}\n\n.default-list-item div {\n    align-items: center;\n    height: 100%;\n}\n\n.default-list-item-left-side {\n    display: flex;\n    justify-content: start;\n    margin-left: 20px;\n    width: 50%;\n    gap: 30px;\n}\n\n.default-list-item-right-side {\n    display: flex;\n    justify-content: space-between;\n    margin-right: 20px;\n    width: 400px;\n    gap: 10px;\n}\n\n.default-list-item-left-side input {\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n}\n\n#completed {\n    opacity: 1;\n    width: 25px;\n    height: 25px;\n    background-color: aliceblue;\n}\n\n.priority {\n    width: 5px;\n    height: 20px;\n\n    background-color: green;\n}\n\n.details-button {\n    color: white;\n    background-color: #969696;\n\n    border-width: 0;\n    border-radius: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n\n    font-size: 1rem;\n    cursor: pointer;\n}\n\n.details-button:hover {\n    background-color: #7e7d7d;\n}\n\n.details-button:active {\n    background-color: #646464;\n}\n\n.details-section {\n    display: none;\n    grid-template-rows: 100px 1fr;\n    width: 600px;\n    height: 300px;\n\n    background-color: #ffffff;\n    color: black;\n    filter: drop-shadow(6px 10px 10px rgb(0, 0, 0));\n\n    position: fixed;\n    top: 35vh;\n    left: 35vw;\n    z-index: 3;\n}\n\n.details-section-header {\n    display: grid;\n    grid-template-columns: 540px 60px;\n    width: 100%;\n    height: 30%;\n    align-items: center;\n    justify-content: space-between;\n}\n\n.details-section div div {\n    width: 35px;\n    height: 35px;\n    cursor: pointer;\n}\n\n.details-section-exit img {\n    width: 35px;\n    position: absolute;\n    right: 20px;\n    top: 15px;\n}\n\n.details-section-header h2 {\n    margin: 20px;\n    margin-top: 25px;\n    padding: 0;\n}\n\n.details-section p {\n    height: 60%;\n    margin-left: 20px;\n    text-align: left;\n    word-wrap: break-word;\n    width: 55%;\n}\n\n.edit-icon,\n.trash-icon {\n\n    width: 30px;\n    filter: brightness(0) invert(1);\n    cursor: pointer;\n\n    transition: ease-in 0.15s;\n}\n\n.edit-icon:hover,\n.trash-icon:hover {\n    width: 35px;\n}\n\n.add-task-button-container {\n    display: flex;\n    align-items: center;\n}\n\n.add-task-button {\n    margin-left: 20px;\n    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;\n    font-size: 1rem;\n    width: 100px;\n    height: 50%;\n\n    background-color: #212121;\n    color: white;\n    border-style: solid;\n    border-radius: 10px;\n    cursor: pointer;\n\n    transition: ease-in 0.15s;\n}\n\n.add-task-button:hover {\n    filter: drop-shadow(6px 10px 10px rgb(0, 0, 0));\n    width: 110px;\n    height: 52%;\n}\n\n.add-task-button:active {\n    filter: none;\n}\n\n.dialog,\n.edit-dialog {\n    border-width: 0;\n    background-color: white;\n    filter: drop-shadow(6px 10px 10px rgb(0, 0, 0));\n    display: flex;\n    align-items: center;\n    position: fixed;\n\n    width: max(30%, 600px);\n    height: 300px;\n\n    top: 35vh;\n    left: 0;\n}\n\n.edit-dialog {\n    display: none;\n}\n\n.dialog form,\n.edit-dialog form {\n    display: flex;\n    align-items: center;\n\n    width: 100%;\n    height: 100%;\n}\n\n.dialog form .left-side,\n.edit-dialog .left-side {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    width: 100%;\n    height: 100%;\n}\n\n.dialog form input,\n.edit-dialog form input {\n    border-radius: 20px;\n    border-width: 0;\n    padding: 15px;\n    font-size: 1.2em;\n\n    background-color: #D9D9D9;\n}\n\n.title {\n    width: 70%;\n}\n\n.details {\n    width: 85%;\n    height: 100px;\n    text-align: left;\n    line-break: 150px;\n    font-size: 1.2rem;\n\n    border-radius: 20px;\n    border-width: 0;\n    padding: 15px;\n    font-size: 1.2em;\n\n    resize: none;\n    background-color: #D9D9D9;\n}\n\n.input-field {\n    display: flex;\n    flex-direction: column;\n}\n\n.input-field label {\n    font-family: 'Roboto', sans-serif;\n    font-size: 1.3rem;\n\n    margin-left: 20px;\n    margin-bottom: 10px;\n}\n\n.dialog form .right-side,\n.edit-dialog .right-side {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n\n    width: 50%;\n    height: 90%;\n}\n\n.radio-buttons input {\n    display: none;\n}\n\n.radio-buttons label:before {\n    content: \" \";\n    display: inline-block;\n    width: 20px;\n    height: 20px;\n    border-radius: 20px;\n    border: 2px solid black;\n    background-color: transparent;\n    cursor: pointer;\n\n}\n\n#low:checked+span,\n#edit-low:checked+span {\n    background-color: blue;\n}\n\n#medium:checked+span,\n#edit-medium:checked+span {\n    background-color: rgb(240, 240, 3);\n}\n\n#high:checked+span,\n#edit-high:checked+span {\n    background-color: red;\n}\n\n.radio-buttons label {\n    position: relative;\n}\n\n.radio-buttons label input:checked+span {\n    border-radius: 11px;\n    width: 12px;\n    height: 12px;\n    position: absolute;\n    top: 1px;\n    left: 6px;\n    display: block;\n    /*background-color: rgb(70, 70, 70);*/\n    cursor: pointer;\n}\n\n.submit-close-container {\n    display: flex;\n    justify-content: space-between;\n    width: 90%;\n}\n\n.submit-close-container button {\n    font-size: 1rem;\n    padding: 10px 20px 10px 20px;\n    border-radius: 50px;\n    border-width: 0px;\n    cursor: pointer;\n}\n\n.save-btn {\n    background-color: rgb(100, 247, 71);\n}\n\n.save-btn:active {\n    background-color: rgb(62, 240, 27);\n}\n\n.exit-btn {\n    background-color: rgb(250, 45, 45);\n}\n\n.exit-btn:active {\n    background-color: rgb(248, 6, 6);\n}",""]);const l=a},645:n=>{n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",o=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),o&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),o&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,o,i,r){"string"==typeof n&&(n=[[null,n,void 0]]);var a={};if(o)for(var l=0;l<this.length;l++){var d=this[l][0];null!=d&&(a[d]=!0)}for(var s=0;s<n.length;s++){var c=[].concat(n[s]);o&&a[c[0]]||(void 0!==r&&(void 0===c[5]||(c[1]="@layer".concat(c[5].length>0?" ".concat(c[5]):""," {").concat(c[1],"}")),c[5]=r),t&&(c[2]?(c[1]="@media ".concat(c[2]," {").concat(c[1],"}"),c[2]=t):c[2]=t),i&&(c[4]?(c[1]="@supports (".concat(c[4],") {").concat(c[1],"}"),c[4]=i):c[4]="".concat(i)),e.push(c))}},e}},81:n=>{n.exports=function(n){return n[1]}},379:n=>{var e=[];function t(n){for(var t=-1,o=0;o<e.length;o++)if(e[o].identifier===n){t=o;break}return t}function o(n,o){for(var r={},a=[],l=0;l<n.length;l++){var d=n[l],s=o.base?d[0]+o.base:d[0],c=r[s]||0,p="".concat(s," ").concat(c);r[s]=c+1;var u=t(p),m={css:d[1],media:d[2],sourceMap:d[3],supports:d[4],layer:d[5]};if(-1!==u)e[u].references++,e[u].updater(m);else{var g=i(m,o);o.byIndex=l,e.splice(l,0,{identifier:p,updater:g,references:1})}a.push(p)}return a}function i(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,i){var r=o(n=n||[],i=i||{});return function(n){n=n||[];for(var a=0;a<r.length;a++){var l=t(r[a]);e[l].references--}for(var d=o(n,i),s=0;s<r.length;s++){var c=t(r[s]);0===e[c].references&&(e[c].updater(),e.splice(c,1))}r=d}}},569:n=>{var e={};n.exports=function(n,t){var o=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(t)}},216:n=>{n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:(n,e,t)=>{n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:n=>{n.exports=function(n){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var o="";t.supports&&(o+="@supports (".concat(t.supports,") {")),t.media&&(o+="@media ".concat(t.media," {"));var i=void 0!==t.layer;i&&(o+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),o+=t.css,i&&(o+="}"),t.media&&(o+="}"),t.supports&&(o+="}");var r=t.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(o,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:n=>{n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(o){var i=e[o];if(void 0!==i)return i.exports;var r=e[o]={id:o,exports:{}};return n[o](r,r.exports,t),r.exports}t.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return t.d(e,{a:e}),e},t.d=(n,e)=>{for(var o in e)t.o(e,o)&&!t.o(n,o)&&Object.defineProperty(n,o,{enumerable:!0,get:e[o]})},t.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),t.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),(()=>{var n;t.g.importScripts&&(n=t.g.location+"");var e=t.g.document;if(!n&&e&&(e.currentScript&&(n=e.currentScript.src),!n)){var o=e.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&!n;)n=o[i--].src}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),t.p=n})(),t.nc=void 0,(()=>{var n=t(379),e=t.n(n),o=t(795),i=t.n(o),r=t(569),a=t.n(r),l=t(565),d=t.n(l),s=t(216),c=t.n(s),p=t(589),u=t.n(p),m=t(28),g={};g.styleTagTransform=u(),g.setAttributes=d(),g.insert=a().bind(null,"head"),g.domAPI=i(),g.insertStyleElement=c(),e()(m.Z,g),m.Z&&m.Z.locals&&m.Z.locals;const h=t.p+"5cca96bbf4bff6375bc6.svg",f=t.p+"7675351598dd5cd39311.svg",b=t.p+"31c7c1257c580114c006.png";function x(n,e,t,o,i,r){const a=document.createElement("div");a.className="default-list-item";const l=document.createElement("div");l.className="default-list-item-left-side";const d=document.createElement("div");d.className="priority",d.style.backgroundColor="low"==o||"edit-low"==o?"blue":"medium"==o||"edit-medium"==o?"yellow":"red";const s=document.createElement("input");s.setAttribute("type","checkbox"),s.id="completed";const c=document.createElement("p");c.textContent=e;const p=document.createElement("div");p.className="default-list-item-right-side";const u=document.createElement("p");u.className="date",u.textContent=i;const m=document.createElement("section");m.className="details-section";const g=document.createElement("div");g.className="details-section-header";const x=document.createElement("h2");x.textContent=e;const y=document.createElement("div");y.className="details-section-exit";const v=new Image;v.src=b,v.style.width="35px",y.addEventListener("click",(function(){m.style.display="none"}));const w=document.createElement("p");w.textContent=t;const k=document.createElement("button");k.className="details-button",k.textContent="DETAILS",k.addEventListener("click",(()=>{m.style.display="grid"}));const j=new Image;j.src=h,j.className="edit-icon",j.style.width="30px",j.addEventListener("mouseover",(()=>{j.style.width="35px"})),j.addEventListener("mouseout",(()=>{j.style.width="30px"}));const C=new Image;function E(n){n?(c.style.textDecoration="line-through",c.style.color="#ffffff5e",u.style.textDecoration="line-through",u.style.color="#ffffff5e",k.style.textDecoration="line-through",k.style.color="#ffffff5e",k.style.backgroundColor="#9696968e",j.style.filter="brightness(0) invert(0.5)",C.style.filter="brightness(0) invert(0.5)",a.style.borderColor="rgba(255, 255, 255, 0.274)",s.checked=!0):(c.style.textDecoration="none",c.style.color="white",u.style.textDecoration="none",u.style.color="white",k.style.textDecoration="none",k.style.color="white",k.style.backgroundColor="#969696",j.style.filter="brightness(0) invert(1)",C.style.filter="brightness(0) invert(1)",a.style.borderColor="white",s.checked=!1)}return C.src=f,C.className="trash-icon",C.style.width="30px",C.addEventListener("mouseover",(()=>{C.style.width="35px"})),C.addEventListener("mouseout",(()=>{C.style.width="30px"})),C.addEventListener("click",(function(){a.parentElement.removeChild(a)})),j.onclick=function(){const o=document.getElementById("edit-dialog");o.style.display="flex",document.getElementById("edit-title").value=e,document.getElementById("edit-details").value=t,document.getElementById("edit-date").value=i,document.getElementById("edit-form").addEventListener("submit",(function(r){r.preventDefault();const a=document.getElementById("edit-form");let l=new FormData(a);const s=document.querySelectorAll('input[name="edit-priority"]');let p;for(const n of s)if(n.checked){p=n.id;break}c.textContent=l.get("edit-title"),e=l.get("edit-title"),x.textContent=l.get("edit-title"),w.textContent=l.get("edit-details"),t=l.get("edit-details"),u.textContent=l.get("edit-date"),i=l.get("edit-date"),d.style.backgroundColor="edit-low"==p?"blue":"edit-medium"==p?"yellow":"red",o.style.display="none",localStorage.removeItem("projects");let m=Object.values(localStorage),g=localStorage.getItem("projects");localStorage.setItem("projects",g),m.forEach((o=>{const i=JSON.parse(o);i.id==n&&(i.title=e,i.details=t,i.priority=p,i.date=l.get("edit-date"),localStorage.removeItem(n),localStorage.setItem(n,JSON.stringify(i)))}))}))},s.addEventListener("change",(function(){if(this.checked){E(r=!0),localStorage.removeItem("projects");let e=Object.values(localStorage),t=localStorage.getItem("projects");localStorage.setItem("projects",t),e.forEach((e=>{const t=JSON.parse(e);t.id==n&&(t.is_completed=r,localStorage.removeItem(n),localStorage.setItem(n,JSON.stringify(t)))}))}else{E(r=!1),localStorage.removeItem("projects");let e=Object.values(localStorage),t=localStorage.getItem("projects");localStorage.setItem("projects",t),e.forEach((e=>{const t=JSON.parse(e);t.id==n&&(t.is_completed=r,localStorage.removeItem(n),localStorage.setItem(n,JSON.stringify(t)))}))}})),E(r),y.appendChild(v),g.appendChild(x),g.appendChild(y),m.appendChild(g),m.appendChild(w),l.appendChild(d),l.appendChild(s),l.appendChild(c),p.appendChild(u),p.appendChild(k),p.appendChild(j),p.appendChild(C),a.appendChild(l),a.appendChild(p),a.id=n,[a,m]}const y="url('../src/images/mountain-landscape-2031539_1920.jpg')",v="linear-gradient(to right, rgb(82, 81, 81), #5c0350)",w=document.getElementById("sidebar"),k=document.getElementById("bottom-half");w.style.backgroundImage=v,k.style.backgroundImage=y;let j="";document.querySelector(".switch-background-btn").addEventListener("click",(function(){"waves"==j?(w.style.backgroundImage=v,k.style.backgroundImage=y,j="mountains"):"mountains"==j?(w.style.backgroundImage="linear-gradient(to right, rgb(82, 81, 81), #753501)",k.style.backgroundImage="url('../src/images/morocco-2349647_1920.jpg')",j="desert"):"galaxy"==j?(w.style.backgroundImage="linear-gradient(to right, rgb(82, 81, 81), #030c5c)",k.style.backgroundImage="url('../src/images/wave-1913559_1920.jpg')",j="waves"):(w.style.backgroundImage="linear-gradient(to right, rgb(82, 81, 81), #015049)",k.style.backgroundImage="url('../src/images/polar-lights-5858656_1920.jpg')",j="galaxy")}));const C=document.getElementById("dialog");function E(){const n=document.createElement("div");n.className="add-task-button-container";const e=document.createElement("button");return e.className="add-task-button",e.textContent="+ Add Task",e.onclick=function(){C.style.removeProperty("display")},n.appendChild(e),n}const I=t.p+"2c9dc66378263e1a994b.svg",S=document.getElementById("dialog"),N=document.getElementById("edit-dialog"),_=function(){const n=document.getElementById("content");let e=document.querySelectorAll(".project");const t=document.querySelector(".custom-projects"),o=document.querySelector(".add-project-btn"),i=document.getElementById("project-form"),r=document.querySelector(".save-project-btn"),a=document.querySelector(".cancel-project-btn"),l=document.querySelector(".project-title");let d=[],s=[];const c=function(e){const o=document.createElement("div");o.className="default-list",o.appendChild(E());const i=document.createElement("div");i.className="content-container",i.id=e.id;const r=document.createElement("h1");if(r.textContent=e.id.toUpperCase(),"HOME"!=e.id.toUpperCase()&&"TODAY"!=e.id.toUpperCase()&&"WEEK"!=e.id.toUpperCase()){const o=document.createElement("div");o.className="default-list-head";const a=new Image;a.src=I,a.width="50px";const l=document.createElement("div");l.className="visible",l.title="delete project",l.appendChild(a),o.appendChild(r),o.appendChild(l),i.appendChild(o),a.onclick=function(){n.removeChild(i),t.removeChild(e)}}else i.appendChild(r);i.appendChild(o),n.appendChild(i),d.push(i)};return o.onclick=function(){o.style.display="none",i.style.display="flex";const n=document.createElement("li");n.className="project",r.onclick=function(){""==l.value?alert("Project needs a title!"):s.includes(l.value)?alert("This Project already exists!"):(n.textContent=l.value,n.id=n.textContent,t.appendChild(n),e=document.querySelectorAll(".project"),s.push(n.id),c(n),O(n),i.style.display="none",o.style.display="inline")},a.onclick=function(){i.style.display="none",o.style.display="inline"}},e.forEach((n=>{c(n)})),{default_projects:e,project_contents:d,stored_projects:s,custom_projects:t,addProjectContents:c}}();function z(n,e,t,o,i,r,a){this.id=n,this.title=e,this.details=t,this.priority=o,this.date=i,this.project=r,this.is_completed=a}function O(n){let e=0;n.onclick=function(){let t,o;document.querySelectorAll(".add-task-button").forEach((n=>{n.onclick=null})),_.project_contents.forEach((i=>{function r(r){if(e>0)return void(e=0);console.log(e),e++,r.preventDefault();let a=new FormData(form);const l=document.querySelectorAll('input[name="priority"]');let d;for(const n of l)if(n.checked){d=n.value;break}let s=Object.keys(localStorage).length++;const c=new z(s,a.get("title"),a.get("details"),d,a.get("date"),n.id,!1),p=x(c.id,c.title,c.details,c.priority,c.date,c.is_completed);console.log(p),t.lastChild.appendChild(p[0]),t.lastChild.appendChild(p[1]),localStorage.setItem(s,JSON.stringify(c)),localStorage.removeItem("projects"),Object.values(localStorage);let u=localStorage.getItem("projects");localStorage.setItem("projects",u),o.hasChildNodes()&&o.childNodes.forEach((n=>{"add-task-button-container"==n.className&&(o.removeChild(n),i.removeChild(i.lastChild),i.appendChild(o))})),t.lastChild.appendChild(E())}i.id==n.id?(i.style.display="grid",o=i.lastChild,t=i,document.querySelectorAll(".add-task-button").forEach((n=>{n.onclick=function(){S.style.removeProperty("display"),e=0,document.getElementById("form").addEventListener("submit",r)}}))):i.style.display="none"}))}}window.onbeforeunload=function(){!function(){for(localStorage.setItem("projects",_.stored_projects);_.custom_projects.firstChild;)_.custom_projects.removeChild(parent.firstChild)}()},window.onload=function(){!function(){let n=localStorage.getItem("projects");n=n.split(","),1==n.length&&n.shift(),n.forEach((n=>{const e=document.createElement("li");e.className="project",e.textContent=n,e.id=n,_.stored_projects.push(n),_.custom_projects.appendChild(e),_.addProjectContents(e),O(e)}))}(),function(){localStorage.removeItem("projects");let n=Object.values(localStorage);localStorage.setItem("projects",_.stored_projects),n.forEach((n=>{if(""!=n){const e=JSON.parse(n);_.project_contents.forEach((n=>{let t=n.lastChild;if(e.project==n.id){const o=x(e.id,e.title,e.details,e.priority,e.date,e.is_completed);n.lastChild.appendChild(o[0]),n.lastChild.appendChild(o[1]),t.hasChildNodes()&&t.childNodes.forEach((e=>{"add-task-button-container"==e.className&&(t.removeChild(e),n.removeChild(n.lastChild),n.appendChild(t))})),n.lastChild.appendChild(E())}}))}}))}()},_.default_projects.forEach((n=>{O(n)})),document.querySelector(".exit-btn").addEventListener("click",(function(n){S.style.display="none"})),document.getElementById("edit-exit-btn").addEventListener("click",(function(n){N.style.display="none"}))})()})();