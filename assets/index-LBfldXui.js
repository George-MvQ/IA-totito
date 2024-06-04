(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))r(t);new MutationObserver(t=>{for(const n of t)if(n.type==="childList")for(const y of n.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&r(y)}).observe(document,{childList:!0,subtree:!0});function i(t){const n={};return t.integrity&&(n.integrity=t.integrity),t.referrerPolicy&&(n.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?n.credentials="include":t.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(t){if(t.ep)return;t.ep=!0;const n=i(t);fetch(t.href,n)}})();const p=Array(9).fill(null);let c=[...p],f=Math.random()<.5,d=!0,a=0,m=0;const s=document.querySelectorAll(".square"),u=document.getElementById("status"),v=document.getElementById("resetButton"),B=document.getElementById("continueButton"),h=document.getElementById("playerScore"),x=document.getElementById("computerScore");s.forEach(e=>{e.addEventListener("click",M)});v.addEventListener("click",C);B.addEventListener("click",I);function M(e){const i=e.target.dataset.index;!i||c[+i]||!d||(c[+i]="X",l(),!E(c)&&c.includes(null)&&setTimeout(()=>{const r=O(c);c[r]="O",l()},500))}function l(){c.forEach((o,i)=>{s[i].textContent=o,s[i].classList.remove("winning")});const e=E(c);if(e){const[o,i]=e;i.forEach(r=>{s[r].classList.add("winning")}),u.textContent=`Ganador: ${o}`,d=!1,o==="X"?(a++,h.textContent=`Jugador (X): ${a}`):o==="O"&&(m++,x.textContent=`Máquina (O): ${m}`)}else c.includes(null)?u.textContent="Tu turno (X)":u.textContent="Empate"}function E(e){const o=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];for(let i=0;i<o.length;i++){const[r,t,n]=o[i];if(e[r]&&e[r]===e[t]&&e[r]===e[n])return[e[r],o[i]]}return null}function O(e){let o=-1/0,i=-1;for(let r=0;r<9;r++)if(!e[r]){e[r]="O";let t=g(e,0,!1);e[r]=null,t>o&&(i=r,o=t)}return i}function g(e,o,i){const r=E(e);if(r){const[t]=r;if(t==="X")return-10+o;if(t==="O")return 10-o}if(!e.includes(null))return 0;if(i){let t=-1/0;for(let n=0;n<9;n++)e[n]||(e[n]="O",t=Math.max(t,g(e,o+1,!1)),e[n]=null);return t}else{let t=1/0;for(let n=0;n<9;n++)e[n]||(e[n]="X",t=Math.min(t,g(e,o+1,!0)),e[n]=null);return t}}function C(){c=[...p],f=Math.random()<.5,d=!0,l(),u.textContent="Tu turno (X)",a=0,m=0,h.textContent=`Jugador (X): ${a}`,x.textContent=`Máquina (O): ${m}`}function I(){c=[...p],f=Math.random()<.5,d=!0,l(),u.textContent="Tu turno (X)"}f||setTimeout(()=>{const e=O(c);c[e]="O",f=!0,l()},500);l();
