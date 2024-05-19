// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";
console.log(SimpleLightbox);



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

const openLightBox = (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") return;

  basicLightbox
    .create(
      `<img src="${event.target.getAttribute(
        "data-source"
      )}" alt="${event.target.getAttribute("alt")}"/>`
    )
    .show();
};

const galleryContainer = document.querySelector(".gallery");

galleryContainer.insertAdjacentHTML("beforeend", galleryMarkup);
galleryContainer.addEventListener("click", openLightBox);