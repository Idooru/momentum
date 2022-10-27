const body = document.querySelector("body");

const images = [
  "img1.jpg",
  "img2.jpg",
  "img3.jpg",
  "img4.jpg",
  "img5.jpg",
  "img6.jpg",
  "img7.jpg",
  "img8.jpg",
  "img9.jpg",
];
const chosenImage = images[Math.floor(Math.random() * images.length)];

body.style.backgroundImage = `url(../img/backgrounds/${chosenImage})`;
