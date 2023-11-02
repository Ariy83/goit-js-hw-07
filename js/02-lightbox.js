import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector("ul.gallery");

function makeGallery(galleryItems) {
  return galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
  });
}

function renderGallery(galleryItems) {
  const markup = makeGallery(galleryItems).join("");
  galleryListEl.insertAdjacentHTML("afterbegin", markup);
}
renderGallery(galleryItems);

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
});
