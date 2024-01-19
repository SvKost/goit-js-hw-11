import{i as a,S as h}from"./assets/vendor-46aac873.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();const m="41875605-6b47be3c8e074a549a6d5f149",g="https://pixabay.com/api",f=document.querySelector("form"),c=document.querySelector(".gallery-container");f.addEventListener("submit",p);function p(n){n.preventDefault();const t=n.currentTarget,o=t.querySelector("input").value.trim();o?(q(),y(o).then(i=>{i.length===0?a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",color:"red"}):L(i)}).catch(w).finally(()=>{b(),t.reset()})):(a.show({message:"Please enter a search query!",messageColor:"white",position:"topRight",color:"red"}),c.innerHTML="")}function y(n){const t=new URLSearchParams({key:m,q:n,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${g}/?${t}`).then(o=>{if(!o.ok)throw new Error(o.statusText);return o.json().then(i=>i.hits)})}function L(n){c.innerHTML="";const t=({webformatURL:i,largeImageURL:e,tags:r,likes:s,views:l,comments:u,downloads:d})=>`
  
    <li class="gallery">
      <a href="${e}">
        <img class="image-preview" src="${i}" alt="${r}">
      </a>
      <div class="image-description">
      <p>Likes ${s}</p>
      <p>Views ${l}</p>
      <p>Comments ${u}</p>
      <p>Downloads ${d}</p>
      </div>
    </li>
  
  `,o=n.map(t).join("");c.innerHTML=o,S.refresh()}const S=new h(".gallery a",{captionsData:"alt",captionDelay:250});function w(){a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",position:"topRight",color:"red"})}function q(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}
//# sourceMappingURL=commonHelpers.js.map
