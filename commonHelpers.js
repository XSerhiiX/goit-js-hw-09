import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as l}from"./assets/vendor-10cb7c31.js";console.log(l);const i=images.map(({preview:e,original:t,description:r})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${t}">
        <img
          class="gallery-image"
          src="${e}"
          data-source="${t}"
          alt="${r}"
        /></a></li>`).join(""),o=e=>{e.preventDefault(),e.target.nodeName==="IMG"&&basicLightbox.create(`<img src="${e.target.getAttribute("data-source")}" alt="${e.target.getAttribute("alt")}"/>`).show()},a=document.querySelector(".gallery");a.insertAdjacentHTML("beforeend",i);a.addEventListener("click",o);
//# sourceMappingURL=commonHelpers.js.map
