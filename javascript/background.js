const bgImage = document.createElement("img");

const images = ["img11.jpg", "img12.jpg", "img13.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

bgImage.src = `/img/${chosenImage}`;
document.body.appendChild(bgImage);
