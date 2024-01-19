import{i as a}from"./assets/vendor-32231325.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const f="41875605-6b47be3c8e074a549a6d5f149",h="https://pixabay.com/api",g=document.querySelector("form"),c=document.querySelector(".images-container");g.addEventListener("submit",p);function p(i){i.preventDefault();const t=i.currentTarget,s=t.querySelector("input").value.trim();s?y(s).then(d).catch(w).finally(()=>t.reset()):a.show({message:"Sorry, there are no images matching your search query. Please try again!"})}function y(i){const t=new URLSearchParams({key:f,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${h}/?${t}`).then(s=>{if(!s.ok)throw new Error(s.statusText);return s.json().then(o=>(o.hits.length===0&&a.show({message:"Sorry, there are no images matching your search query. Please try again!"}),o.hits))})}function d(i){c.innerHTML="";const t=({webformatURL:o,largeImageURL:e,tags:r,likes:n,views:l,comments:u,downloads:m})=>`
  <ul class="images-list">
    <li class="image-item">
      <a class="large-image-link" href="${e}">
        <img class="image-preview" src="${o}" alt="${r}">
      </a>
      <p class="image-item-description">Likes ${n}</p>
      <p class="image-item-description">Views ${l}</p>
      <p class="image-item-description">Comments ${u}</p>
      <p class="image-item-description">Downloads ${m}</p>
    </li>
  </ul>
  `,s=i.map(t).join("");c.innerHTML=s}function w(){a.show({message:"Sorry, there are no images matching your search query. Please try again!"})}
//# sourceMappingURL=commonHelpers.js.map
