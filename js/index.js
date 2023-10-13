const fetchImages = document.querySelector(".fetch");
const resetImages = document.querySelector(".reset");
const imagesCard = document.querySelector("#images__card");

fetchImages.addEventListener("click", () => {
  async function getImages() {
    let response = await fetch(
      "https://jsonplaceholder.typicode.com/albums/1/photos"
    );
    let data = await response.json();

    renderImages(data);
  }

  function renderImages(images = []) {
    for (let image of images) {
      const imgEl = document.createElement("img");
      imgEl.classList.add("card__image");
      imgEl.src = image.thumbnailUrl;
      imgEl.alt = image.title;
      imagesCard.appendChild(imgEl);
    }
  }
  getImages();
});

resetImages.addEventListener("click", () => {
  imagesCard.innerHTML = "";
});
