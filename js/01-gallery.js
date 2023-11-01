import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryListEl = document.querySelector("ul.gallery");

function makeGallery(galleryItems) {
  let itemsArr = [];
  for (let i = 0; i < galleryItems.length; i++) {
    const { preview, original, description } = galleryItems[i];
    let markupItem = `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
    itemsArr.push(markupItem);
  }
  return itemsArr.join("");
}
const markup = makeGallery(galleryItems);
galleryListEl.insertAdjacentHTML("afterbegin", markup);

galleryListEl.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}">
    `);
  instance.show();

  document.addEventListener("keydown", onDocumentKeyEsc);
  function onDocumentKeyEsc(event) {
    if (event.code === "Escape") {
      instance.close();
    }
  }

  const visible = basicLightbox.visible();
  if (!visible) {
    document.removeEventListener("keydown", onDocumentKeyEsc);
  }
}
