import"./assets/modulepreload-polyfill-3cfb730f.js";import{S as o}from"./assets/vendor-10cb7c31.js";console.log(o);const r=document.querySelector(".gallery"),s=images.map(({preview:e,original:a,description:l})=>`
    <li class="gallery-item">
      <a class="gallery-link" href="${a}">
        <img
          class="gallery-image"
          src="${e}"
          data-source="${a}"
          alt="${l}"
        /></a></li>`).join("");let t;const i=e=>{e.preventDefault(),e.target.nodeName==="IMG"&&(t=basicLightbox.create(`<img src="${e.target.getAttribute("data-source")}" alt="${e.target.getAttribute("alt")}"/>`),t.show())},c=e=>{e.code==="Escape"&&t.close()};r.insertAdjacentHTML("beforeend",s);r.addEventListener("click",i);document.addEventListener("keydown",c);
//# sourceMappingURL=commonHelpers.js.map
