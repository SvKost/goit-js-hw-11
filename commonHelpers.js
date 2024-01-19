import{i as a,S as d}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const h="41875605-6b47be3c8e074a549a6d5f149",m="https://pixabay.com/api",f=document.querySelector("form"),c=document.querySelector(".gallery-container");f.addEventListener("submit",p);function p(n){n.preventDefault();const r=n.currentTarget,o=r.querySelector("input").value.trim();o?(q(),y(o).then(i=>{i.length===0?a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",color:"red"}):S(i)}).catch(w).finally(()=>{b(),r.reset()})):(a.show({message:"Please enter a search query!",messageColor:"white",position:"topRight",color:"red"}),c.innerHTML="")}function y(n){const r=new URLSearchParams({key:h,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}/?${r}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json().then(i=>i.hits)})}function S(n){c.innerHTML="";const r=({webformatURL:i,largeImageURL:e,tags:t,likes:s,views:l,comments:u,downloads:g})=>`
  
    <li class="gallery">
      <a href="${e}">
        <img class="image-preview" src="${i}" alt="${t}">
      </a>
      <div class="image-description">
      <p>Likes ${s}</p>
      <p>Views ${l}</p>
      <p>Comments ${u}</p>
      <p>Downloads ${g}</p>
      </div>
    </li>
  
  `,o=n.map(r).join("");c.innerHTML=o,L.refresh()}const L=new d(".gallery a",{captionsData:"alt",captionDelay:250});function w(){a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",color:"red"})}function q(){document.querySelector(".loading-string").classList.remove("hidden")}function b(){document.querySelector(".loading-string").classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
