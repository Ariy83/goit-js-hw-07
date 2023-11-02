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
function renderGallery(galleryItems) {
  const markup = makeGallery(galleryItems);
  galleryListEl.insertAdjacentHTML("afterbegin", markup);
}
renderGallery(galleryItems);

let instance;

galleryListEl.addEventListener("click", onGalleryItemClick);

function onGalleryItemClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== "IMG") {
    return;
  }
  instance = basicLightbox.create(
    `
    <img src="${event.target.dataset.source}">
    `,
    {
      onShow: (instance) => {
        document.addEventListener("keydown", onDocumentKeyEsc);
      },
      onClose: (instance) => {
        document.removeEventListener("keydown", onDocumentKeyEsc);
      },
    }
  );
  instance.show();
}

function onDocumentKeyEsc(event) {
  if (event.code === "Escape") {
    instance.close();
  }
}
