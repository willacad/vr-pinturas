const modal = document.querySelector(".modal");
const img = document.querySelector(".modal__img");


function closeGallery() {
  modal.style.visibility = "hidden"
  img.style.transform = "scale(0)";
}

function openGalery(src) {
  modal.style.visibility = "visible";
  img.style.transform = "scale(1)";
  img.src = src;
}