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
  "img10.jpg",
];

const chosenImage = images[Math.floor(Math.random() * images.length)];
const url = `url(img/backgrounds/${chosenImage})`;

body.style.backgroundImage = url;
