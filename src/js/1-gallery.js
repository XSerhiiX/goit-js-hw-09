// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox);



const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `
    <li class="gallery-item">
      <a class="gallery-link" href="${original}">
        <img
          class="gallery-image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        /></a></li>`;
  }) 
  .join("");

let modal;

const openLightBox = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  modal = basicLightbox
    .create(
      `<img src="${event.target.getAttribute(
        "data-source"
      )}" alt="${event.target.getAttribute("alt")}"/>`
    )
  modal.show();
};

const openLightBoxClose = (event) => {
  if (event.code === 'Escape') modal.close();
}


galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", openLightBox);
document.addEventListener("keydown", openLightBoxClose);