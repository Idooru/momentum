const h1 = document.querySelector(".hello h1");

h1.addEventListener("click", () => {
  const clickedClass = "clicked";
  h1.className = h1.className === clickedClass ? "" : clickedClass;
});
