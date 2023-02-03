let currentPhotoDiv = document.querySelector(".mainDiv #currentPhoto");
let modalDiv = document.querySelector("div.modal")

function showThisPic(p) {
    console.log(watchesPhotos[p].src);
    currentPhotoDiv.innerHTML = `<img onclick="modalTrigger()" src="${watchesPhotos[p].src}" alt="${watchesPhotos[p].alt}">`;
    modalDiv.innerHTML = `<img onclick="modalTrigger()" src="${watchesPhotos[p].src}" alt="${watchesPhotos[p].alt}">`;
}

showThisPic(0);

function modalTrigger() {
    console.log("triggered")
    let modalTriggerDiv = document.querySelector("div.containerModal");
    modalTriggerDiv.classList.toggle("active");
}