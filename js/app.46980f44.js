(function(e){function t(t){for(var i,s,r=t[0],l=t[1],p=t[2],m=0,d=[];m<r.length;m++)s=r[m],Object.prototype.hasOwnProperty.call(n,s)&&n[s]&&d.push(n[s][0]),n[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);c&&c(t);while(d.length)d.shift()();return o.push.apply(o,p||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],i=!0,s=1;s<a.length;s++){var r=a[s];0!==n[r]&&(i=!1)}i&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var i={},s={app:0},n={app:0},o=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-2d0c4639":"4790a3d3","chunk-76e94462":"30e7b526"}[e]+".js"}function l(t){if(i[t])return i[t].exports;var a=i[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-76e94462":1};s[e]?t.push(s[e]):0!==s[e]&&a[e]&&t.push(s[e]=new Promise((function(t,a){for(var i="css/"+({}[e]||e)+"."+{"chunk-2d0c4639":"31d6cfe0","chunk-76e94462":"0616178c"}[e]+".css",n=l.p+i,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var p=o[r],m=p.getAttribute("data-href")||p.getAttribute("href");if("stylesheet"===p.rel&&(m===i||m===n))return t()}var d=document.getElementsByTagName("style");for(r=0;r<d.length;r++){p=d[r],m=p.getAttribute("data-href");if(m===i||m===n)return t()}var c=document.createElement("link");c.rel="stylesheet",c.type="text/css",c.onload=t,c.onerror=function(t){var i=t&&t.target&&t.target.src||n,o=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=i,delete s[e],c.parentNode.removeChild(c),a(o)},c.href=n;var u=document.getElementsByTagName("head")[0];u.appendChild(c)})).then((function(){s[e]=0})));var i=n[e];if(0!==i)if(i)t.push(i[2]);else{var o=new Promise((function(t,a){i=n[e]=[t,a]}));t.push(i[2]=o);var p,m=document.createElement("script");m.charset="utf-8",m.timeout=120,l.nc&&m.setAttribute("nonce",l.nc),m.src=r(e);var d=new Error;p=function(t){m.onerror=m.onload=null,clearTimeout(c);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+i+": "+s+")",d.name="ChunkLoadError",d.type=i,d.request=s,a[1](d)}n[e]=void 0}};var c=setTimeout((function(){p({type:"timeout",target:m})}),12e4);m.onerror=m.onload=p,document.head.appendChild(m)}return Promise.all(t)},l.m=e,l.c=i,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)l.d(a,i,function(t){return e[t]}.bind(null,i));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="",l.oe=function(e){throw console.error(e),e};var p=window["webpackJsonp"]=window["webpackJsonp"]||[],m=p.push.bind(p);p.push=t,p=p.slice();for(var d=0;d<p.length;d++)t(p[d]);var c=m;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";a("85ec")},"2dd7":function(e,t,a){e.exports=a.p+"img/ForcedVib.0b14af25.png"},"56d7":function(e,t,a){"use strict";a.r(t);var i=a("2b0e"),s=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",[i("iv-visualisation",{attrs:{title:e.projectName},scopedSlots:e._u([{key:"hotspots",fn:function(){return[i("iv-pane",{attrs:{position:"left"},on:{paneResize:e.update,paneToggle:e.update}},[i("iv-sidebar-content",{staticStyle:{"font-size":"12px"},attrs:{nextText:"Vib. Iso.",previousText:"SDOF"}},[i("iv-sidebar-section",{attrs:{title:"Forced Vibrations"}},[i("img",{staticClass:"centre",staticStyle:{width:"7vw"},attrs:{src:a("2dd7")}}),i("p",{staticClass:"small",staticStyle:{"font-size":"14px"}},[e._v("By applying an excitation force, F(t), to a SDOF system, the system will experience forced vibrations.")]),i("p",{staticClass:"small",staticStyle:{"font-size":"14px"}},[e._v("Observe the system response to forced vibration by inputting the desired forcing amplitude, as well as the other input parameters of the system. You may adjust the slider to observe how the motion of the system varies with excitation frequency.")]),i("p",{staticClass:"small",staticStyle:{"font-size":"14px"}},[e._v("Assuming a sinusoidal harmonic excitation force at a frequency ω, the following equation of motion applies.")]),i("img",{staticStyle:{width:"12vw"},attrs:{src:a("e9f4")}}),i("p",{staticClass:"small",staticStyle:{"font-size":"14px"}},[e._v("The Frequency Response Function (FRF) is a representation of the response of a system to a given excitation force, consisting of magnitude and phase information at a range of excitation frequencies.")]),i("img",{staticStyle:{width:"12vw"},attrs:{src:a("e4d9")}})])],1)],1),i("iv-pane",{attrs:{position:"right",allowResize:!1}},[i("div",{staticStyle:{"margin-top":"0px",padding:"20px"}},[i("h5",[e._v("Desired Plots")]),i("form",[i("p",{staticClass:"small",staticStyle:{"font-size":"15px"}},[i("input",{directives:[{name:"model",rawName:"v-model",value:e.displaysplot,expression:"displaysplot"}],attrs:{type:"radio",id:"plot1",value:"1",checked:""},domProps:{checked:e._q(e.displaysplot,"1")},on:{change:[function(t){e.displaysplot="1"},e.update]}}),i("label",{attrs:{for:"plot1"}},[e._v("Displacement (Receptance)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.displaysplot,expression:"displaysplot"}],attrs:{type:"radio",id:"plot2",value:"2"},domProps:{checked:e._q(e.displaysplot,"2")},on:{change:[function(t){e.displaysplot="2"},e.update]}}),i("label",{attrs:{for:"plot2"}},[e._v("Velocity (Mobility)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.displaysplot,expression:"displaysplot"}],attrs:{type:"radio",id:"plot3",value:"3"},domProps:{checked:e._q(e.displaysplot,"3")},on:{change:[function(t){e.displaysplot="3"},e.update]}}),i("label",{attrs:{for:"plot3"}},[e._v("Acceleration (Accelerance)")])])]),i("h5",[e._v("System Parameters")]),i("p",{staticClass:"small",staticStyle:{"font-size":"15px"}},[i("label",[e._v("Mass, m (kg)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.mass,expression:"mass"}],domProps:{value:e.mass},on:{change:e.update,input:function(t){t.target.composing||(e.mass=t.target.value)}}}),i("br"),i("label",[e._v("Spring Constant, k (N/m)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.springConst,expression:"springConst"}],domProps:{value:e.springConst},on:{change:e.update,input:function(t){t.target.composing||(e.springConst=t.target.value)}}}),i("br"),i("label",[e._v("Use Damping Coefficient")]),i("br"),i("iv-toggle-basic",{on:{input:e.dampToggle}}),i("label",{directives:[{name:"show",rawName:"v-show",value:!e.showCoeff,expression:"!showCoeff"}]},[e._v("Damping Ratio, ζ")]),i("label",{directives:[{name:"show",rawName:"v-show",value:e.showCoeff,expression:"showCoeff"}]},[e._v("Damping Coefficient, c (Ns/m)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.dampRatio,expression:"dampRatio"},{name:"show",rawName:"v-show",value:!e.showCoeff,expression:"!showCoeff"}],domProps:{value:e.dampRatio},on:{change:e.updateDampRatio,input:function(t){t.target.composing||(e.dampRatio=t.target.value)}}}),i("input",{directives:[{name:"model",rawName:"v-model",value:e.dampCoeff,expression:"dampCoeff"},{name:"show",rawName:"v-show",value:e.showCoeff,expression:"showCoeff"}],domProps:{value:e.dampCoeff},on:{change:e.updateDampCoeff,input:function(t){t.target.composing||(e.dampCoeff=t.target.value)}}})],1),i("h5",[e._v("Initial Conditions")]),i("p",{staticClass:"small",staticStyle:{"font-size":"15px"}},[i("label",[e._v("Initial Displacement, X0 (m)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.initDisp,expression:"initDisp"}],domProps:{value:e.initDisp},on:{change:e.update,input:function(t){t.target.composing||(e.initDisp=t.target.value)}}}),i("br"),i("label",[e._v("Forcing Amplitude, F"),i("sub",[e._v("0")]),e._v(" (N)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.forceAmp,expression:"forceAmp"}],domProps:{value:e.forceAmp},on:{change:e.update,input:function(t){t.target.composing||(e.forceAmp=t.target.value)}}})]),i("h5",[e._v("Computational Parameters")]),i("p",{staticClass:"small",staticStyle:{"font-size":"15px"}},[i("label",[e._v("ω Axis Limit, ω (Hz)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.wlim,expression:"wlim"}],domProps:{value:e.wlim},on:{change:e.update,input:function(t){t.target.composing||(e.wlim=t.target.value)}}}),i("br"),i("label",[e._v("Time Scale, t (s)")]),i("br"),i("input",{directives:[{name:"model",rawName:"v-model",value:e.timeSpan,expression:"timeSpan"}],domProps:{value:e.timeSpan},on:{change:e.update,input:function(t){t.target.composing||(e.timeSpan=t.target.value)}}}),i("br")]),i("br")])])]},proxy:!0}])},[i("h3",{staticStyle:{"margin-left":"5vh"}},[e._v("FRF and Time history plot of your desired forcing frequency")]),i("h4",{staticStyle:{"margin-left":"5vh"}},[e._v("Please choose an excitation frequency using the slider below")]),i("div",{staticStyle:{margin:"5vh"},attrs:{id:"flexContainer"}},[i("div",{attrs:{id:"innerFlex1"}},[i("iv-slider",{ref:"wSlider",attrs:{name:"Excitation Frequency (Hz):",min:"0",max:e.wlim,init_val:"1",value:e.wSlider},on:{sliderChanged:e.updateSlider}}),i("div",{attrs:{id:"graph"}})],1),i("div",{attrs:{id:"innerFlex2"}},[i("br"),i("br"),i("br"),i("br"),i("div",{attrs:{id:"graph2"}})])]),i("div",{staticStyle:{margin:"5vh"}},[i("div",{directives:[{name:"show",rawName:"v-show",value:e.wdHz,expression:"wdHz"}],staticStyle:{margin:"20px"}},[i("h5",[e._v("System Parameters:")]),i("p",{staticClass:"small",staticStyle:{"font-size":"15px"}},[e._v(" Natural Frequency, ω"),i("sub",[e._v("n")]),e._v(" (rad/s): "+e._s(e.wn)+" rad/s "),i("br"),e._v(" Natural Frequency, ω"),i("sub",[e._v("n")]),e._v(" (Hz): "+e._s(e.wnHz)+" Hz "),i("br"),e._v(" Damped Natural Frequency, ω"),i("sub",[e._v("d")]),e._v(" (rad/s): "+e._s(e.wd)+" rad/s "),i("br"),e._v(" Damped Natural Frequency, ω"),i("sub",[e._v("d")]),e._v(" (Hz): "+e._s(e.wdHz)+" Hz ")])]),i("div",{directives:[{name:"show",rawName:"v-show",value:!e.wdHz,expression:"!wdHz"}],staticStyle:{margin:"20px"}},[i("h5",[e._v("System Parameters:")]),i("p",{staticClass:"small",staticStyle:{"font-size":"15px"}},[e._v(" Natural Frequency, ω"),i("sub",[e._v("n")]),e._v(" (rad/s): "+e._s(e.wn)+" rad/s "),i("br"),e._v(" Natural Frequency, ω"),i("sub",[e._v("n")]),e._v(" (Hz): "+e._s(e.wnHz)+" Hz ")])])])])],1)},n=[],o=a("a226"),r=a.n(o),l={name:"App",data(){return{projectName:"Vibrations App - Forced Vibrations",mass:1,dampRatio:.1,initDisp:.1,timeSpan:2,springConst:1e3,dampCoeff:6.325,numPoints:1e3,wlim:20,wSlider:1,updatePlot:!0,wn:32,wnHz:5,wd:31,wdHz:5,forceAmp:5,maxAmp:.1,showText:!0,showCoeff:!1,displaysplot:"1",displaysplot2:"1"}},methods:{update(){this.mass<=0&&(window.alert("Mass must be greater than 0."),this.mass=1),this.springConst<=0&&(window.alert("Spring constant must be greater than 0."),this.springConst=1e3),this.timeSpan<=0&&(window.alert("Time span must be greater than 0."),this.springConst=1e3),this.numPoints<=2*this.wnHz*this.timeSpan&&(window.alert(`Please ensure your sampling frequency (Number of Points/Time Span), ${this.numPoints/this.timeSpan} Hz, is well above double the natural frequency of the system, ${this.wnHz} Hz. This is to prevent aliasing from occuring. We recommend increasing the number of points beyond ${4*this.wnHz*this.timeSpan} points.`),this.numPoints=4*this.wnHz*this.timeSpan),this.wSlider>this.wlim&&this.$refs.wSlider.reset(),this.wlim<.1&&(window.alert("Omega limit must be greater 0.1 Hz."),this.wlim=.1),console.log("update"),this.updatePlot=!0},updateSlider(e){this.wSlider=e,this.updatePlot=!0},updateDampCoeff(){this.dampCoeff<0&&(window.alert("Damping coefficient must be greater than 0."),this.dampCoeff=6.325),this.dampRatio=Math.round(this.dampCoeff/(2*Math.sqrt(this.springConst*this.mass))*1e3)/1e3,this.updatePlot=!0},updateDampRatio(){(this.dampRatio<0||this.dampRatio>2)&&(window.alert("Damping ratio must be greater than 0 and less than or equal to 2."),this.dampRatio=.1),this.dampCoeff=Math.round(2*this.dampRatio*Math.sqrt(this.springConst*this.mass)*1e3)/1e3,this.updatePlot=!0},dampToggle(){this.showCoeff=!this.showCoeff}},mounted(){let e=this,t={xaxis:{title:"Time (sec)"},yaxis:{title:"Displacement Response (m)"},yaxis2:{title:"Force Amplitude (m)",overlaying:"y",side:"right"},font:{color:"#003E74",weight:900}},a={responsive:!0};function i(){let t=e.mass,a=e.springConst,i=Number(e.dampRatio),s=e.dampCoeff,n=e.wlim,o=[],r=[],l=[],p=[],m=[],d=[],c=[];s=2*i*Math.sqrt(a*t);for(let e=0;e<n;e+=n/1e3)o.push(e),r.push(1/Math.sqrt((a-t*(2*Math.PI*e)**2)**2+(2*s*Math.PI*e)**2)),p.push(e/Math.sqrt((a-t*(2*Math.PI*e)**2)**2+(2*s*Math.PI*e)**2)),d.push(e**2/Math.sqrt((a-t*(2*Math.PI*e)**2)**2+(2*s*Math.PI*e)**2)),l.push(180*Math.atan2(-s*(2*Math.PI*e),a-t*(2*Math.PI*e)**2)/Math.PI),m.push(180*Math.atan2(-s*(2*Math.PI*e),a-t*(2*Math.PI*e)**2)/Math.PI+90),c.push(180*Math.atan2(-s*(2*Math.PI*e),a-t*(2*Math.PI*e)**2)/Math.PI+180);return[o,r,l,p,m,d,c]}function s(){let t,a,i=e.mass,s=e.springConst,n=Number(e.dampRatio),o=e.initDisp,r=e.forceAmp,l=e.wSlider,p=e.dampCoeff,m=2*Math.PI*l,d=[],c=[],u=[],h=e.displaysplot,f=e.displaysplot2,g=Math.sqrt(s/i),v=g/(2*Math.PI);0<n&&n<1?(t=g*Math.sqrt(1-n**2),a=t/(2*Math.PI)):(t=0,a=0);let y,w=e.timeSpan,x=r/Math.sqrt((s-i*m**2)**2+(p*m)**2),b=Math.atan(p*m/(s-i*m**2)),P=o-x*Math.sin(-b);y=0<n&&n<1?(n*g*P-x*m*Math.cos(-b))/t:0;let M=[];for(let e=0;e<w;e+=w/1e4)c.push(e),d.push(Math.exp(-n*g*e)*(P*Math.cos(t*e)+y*Math.sin(t*e))),M.push(Math.exp(-n*g*(e+Math.PI/(2*g)))*(P*Math.cos(t*(e+Math.PI/(2*g)))+y*Math.sin(t*(e+Math.PI/(2*g))))),u.push(r*Math.sin(m*e));let S=[];for(let e=0;e<c.length;e++)M[e]=M[e]*t,S[e]=-d[e]*t**2;let _=d.reduce((function(e,t){return Math.max(e,t)}));return e.maxAmp=Math.round(100*_)/100,e.wn=Math.round(100*g)/100,e.wnHz=Math.round(100*v)/100,e.wd=Math.round(100*t)/100,e.wdHz=Math.round(100*a)/100,[d,c,u,S,M,h,f]}function n(){if(requestAnimationFrame(n),e.updatePlot){e.updatePlot=!1;let n=s(),o=i(),l=o[1].reduce((function(e,t){return Math.max(e,t)})),p=o[1].reduce((function(e,t){return Math.min(e,t)})),m=o[3].reduce((function(e,t){return Math.max(e,t)})),d=o[3].reduce((function(e,t){return Math.min(e,t)})),c=o[5].reduce((function(e,t){return Math.max(e,t)})),u=o[5].reduce((function(e,t){return Math.min(e,t)})),h=[],f=[],g=[];for(let e=0;e<n[1].length;e++)h.push(Math.abs(n[0][e])),f.push(Math.abs(n[4][e])),g.push(Math.abs(n[3][e]));let v=f.reduce((function(e,t){return Math.max(e,t)}),-1/0),y=g.reduce((function(e,t){return Math.max(e,t)}),-1/0);t={xaxis:{title:"Time (sec)"},yaxis:{title:"Displacement Response (m)",range:[-1.1*e.maxAmp,1.1*e.maxAmp]},yaxis2:{title:"Force Amplitude (m)",overlaying:"y",side:"right",range:[-1.1*e.forceAmp,1.1*e.forceAmp],showgrid:!1},font:{color:"#003E74",weight:900},legend:{bgcolor:"rgba(0,0,0,0.2)",x:1,xanchor:"right",y:1.2}};let w={xaxis:{title:"Time (sec)"},yaxis:{title:"Velocity Response (m/s)",range:[-1.1*v,1.1*v]},yaxis2:{title:"Force Amplitude (m)",overlaying:"y",side:"right",range:[-1.1*e.forceAmp,1.1*e.forceAmp],showgrid:!1},font:{color:"#003E74",weight:900},legend:{bgcolor:"rgba(0,0,0,0.2)",x:1,xanchor:"right",y:1.2}},x={xaxis:{title:"Time (sec)"},yaxis:{title:"Acceleration Response (m/s<sup>2</sup>)",range:[-1.1*y,1.1*y]},yaxis2:{title:"Force Amplitude (m)",overlaying:"y",side:"right",range:[-1.1*e.forceAmp,1.1*e.forceAmp],showgrid:!1},font:{color:"#003E74",weight:900},legend:{bgcolor:"rgba(0,0,0,0.2)",x:1,xanchor:"right",y:1.2}},b={xaxis:{title:"Excitation frequency (Hz)"},yaxis:{title:"Receptance, x/F (m/N)",type:"log"},yaxis2:{title:"Phase (Degrees)",overlaying:"y",side:"right",showgrid:!1},font:{color:"#003E74",weight:900},legend:{bgcolor:"rgba(0,0,0,0.2)",x:1,xanchor:"right",y:1.2}},P={xaxis:{title:"Excitation frequency (Hz)"},yaxis:{title:"Mobility, x&#775;/F (m/Ns)",type:"log"},yaxis2:{title:"Phase (Degrees)",overlaying:"y",side:"right",showgrid:!1},font:{color:"#003E74",weight:900},legend:{bgcolor:"rgba(0,0,0,0.2)",x:1,xanchor:"right",y:1.2}},M={xaxis:{title:"Excitation frequency (Hz)"},yaxis:{title:"Accelerance, &#7821;/F (m/Ns<sup>2</sup>)",type:"log"},yaxis2:{title:"Phase (Degrees)",overlaying:"y",side:"right",showgrid:!1},font:{color:"#003E74",weight:900},legend:{bgcolor:"rgba(0,0,0,0.2)",x:1,xanchor:"right",y:1.2}};"1"==n[5]&&r.a.newPlot("graph",[{x:o[0],y:o[1],line:{simplify:!1},mode:"lines",name:"FRF Amplitude"},{x:o[0],y:o[2],line:{simplify:!1},mode:"lines",name:"FRF Phase",yaxis:"y2"},{x:[e.wSlider,e.wSlider],y:[p,l],mode:"lines",showlegend:!1,line:{dash:"dashdot",color:"red"}}],b,a),"2"==n[5]&&r.a.newPlot("graph",[{x:o[0],y:o[3],line:{simplify:!1,color:"rgb(152,66,245)"},mode:"lines",name:"FRF Amplitude"},{x:o[0],y:o[4],line:{simplify:!1},mode:"lines",name:"FRF Phase",yaxis:"y2"},{x:[e.wSlider,e.wSlider],y:[d,m],mode:"lines",showlegend:!1,line:{dash:"dashdot",color:"red"}}],P,a),"3"==n[5]&&r.a.newPlot("graph",[{x:o[0],y:o[5],line:{simplify:!1,color:"rgb(101,201,104)"},mode:"lines",name:"FRF Amplitude"},{x:o[0],y:o[6],line:{simplify:!1},mode:"lines",name:"FRF Phase",yaxis:"y2"},{x:[e.wSlider,e.wSlider],y:[u,c],mode:"lines",showlegend:!1,line:{dash:"dashdot",color:"red"}}],M,a),"1"==n[5]&&r.a.newPlot("graph2",[{x:n[1],y:n[0],line:{simplify:!1},mode:"lines",name:"Displacement Response, x"},{x:n[1],y:n[2],line:{simplify:!1},mode:"lines",name:"Force, F",yaxis:"y2"}],t,a),"2"==n[5]&&r.a.newPlot("graph2",[{x:n[1],y:n[4],line:{simplify:!1,color:"rgb(152,66,245)"},mode:"lines",name:"Velocity Response, v"},{x:n[1],y:n[2],line:{simplify:!1},mode:"lines",name:"Force, F",yaxis:"y2"}],w,a),"3"==n[5]&&r.a.newPlot("graph2",[{x:n[1],y:n[3],line:{simplify:!1,color:"rgb(101,201,104)"},mode:"lines",name:"Acceleration Response, a"},{x:n[1],y:n[2],line:{simplify:!1},mode:"lines",name:"Force, F",yaxis:"y2"}],x,a)}}n()}},p=l,m=(a("034f"),a("2877")),d=Object(m["a"])(p,s,n,!1,null,null,null),c=d.exports,u=a("fff8"),h=(a("f3ff"),a("5dea"));i["a"].config.productionTip=!1,i["a"].use(u["a"]),i["a"].use(h["a"]),new i["a"]({render:e=>e(c)}).$mount("#app")},"85ec":function(e,t,a){},e4d9:function(e,t,a){e.exports=a.p+"img/EoMFRF.1d76a27f.png"},e9f4:function(e,t,a){e.exports=a.p+"img/EoMHistory.e6b8ea95.png"}});
//# sourceMappingURL=app.46980f44.js.map