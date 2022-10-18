const clock = document.querySelector("h2#clock");

function callSayHello() {
  console.log("hello");
}

setInterval(callSayHello, 2000);
