!function(){var e=window.__fuse=window.__fuse||{},t=e.modules=e.modules||{};e.dt=function(e){return e&&e.__esModule?e:{default:e}},e.bundle=function(e,r){for(var o in e)t[o]=e[o];r&&r()},e.c={},e.r=function(r){var o=e.c[r];if(o)return o.m.exports;var n=t[r];if(!n)throw new Error("Module "+r+" was not found");return(o=e.c[r]={}).exports={},o.m={exports:o.exports},n(e.r,o.exports,o.m),o.m.exports}}(),__fuse.bundle({1:function(e,t,r){t.__esModule=!0;var o=e(2),n=e(3);const i=document.getElementById("exam-cnt"),s=document.getElementById("exam"),l=document.getElementById("timer-cnt"),a=document.getElementById("timer-para"),d=document.getElementById("timer"),c=document.getElementById("exam-timer-cnt"),m=document.getElementById("exam-timer"),u=(new Date).getHours(),g=(new Date).getDate(),f=(new Date).getFullYear(),h=(new Date).getMonth();if(n.exams[g]){const e=n.exams[g];if(u>=21+e.duration+0)l.style.display="none",i.style.display="block",s.setAttribute("src",e.src.corr),c.innerHTML="correction";else{const t=new o.Colddown(new Date(f,h,g,21,0),d);a.innerText=`Next exam in ${e.module}`,t.start((()=>{l.style.display="none",i.style.display="block",s.setAttribute("src",e.src.exam);new o.Colddown(new Date(f,h,g,21+e.duration,0+parseInt((60*(e.duration-Math.floor(e.duration))).toString())),m).start((()=>{s.setAttribute("src",e.src.corr),m.innerHTML="correction"}))}))}}else l.innerText="sorry there is no exam today...\n check tommorow"},2:function(e,t,r){t.Colddown=class{constructor(e,t){this.target=t,this.date=e,this.callBack=()=>{},this.interval=null,this.setTime()}setTime(e=this.date){var t=new Date,r=Math.floor((e.getTime()-t.getTime())/1e3),o=Math.floor(r/60),n=Math.floor(o/60);const i=1===(r%60).toString().length?"0"+r%60:r%60,s=1===(o%60).toString().length?"0"+o%60:o%60,l=1===(n%24).toString().length?"0"+n%24:n%24;this.target.innerText=r>=0?`${l}:${s}:${i}`:"00:00:00",r<=0&&(this.callBack(),window.clearInterval(this.interval))}start(e){this.callBack=e,this.interval=window.setInterval((()=>{this.setTime()}),1e3)}}},3:function(e,t,r){t.__esModule=!0,t.exams={6:{src:{exam:"https://drive.google.com/file/d/1g_LXN9jtbzXbUwTPzi03F9lyDvsSA6t5/preview",corr:"https://drive.google.com/file/d/1xuFUuNQgX6rX2KIo-k0jksYMNwL7lZP-/preview"},duration:1,module:"Analyse III"},7:{src:{exam:"https://drive.google.com/file/d/1UkcrFJ37sW3AXsOVNPbJe8JUTY8eUF_N/preview",corr:"https://drive.google.com/file/d/1hFva_9HdHiK4kdGsm4DxizAcQrL5LfjL/preview"},duration:1.5,module:"Analyse II"},8:{src:{exam:"https://drive.google.com/file/d/1yemMAdogMBtgz05cKyQWenis-ah45Bdu/preview",corr:"https://drive.google.com/file/d/1XAKW5C2lC8uCy5Az-zPBTKtnnX8Gif7y/preview"},duration:1,module:"Algébre III"},9:{src:{exams:"https://drive.google.com/file/d/1L8O0Pjql1fChNSt5TeGEFVE6MGMQ9vxq/preview",corr:"https://drive.google.com/file/d/1L8O0Pjql1fChNSt5TeGEFVE6MGMQ9vxq/preview"},duration:1,module:"Analyse III"}}}},(function(){__fuse.r(1)}));