function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(98, 20);

function sayHello(otherPersonName) {
  console.log("hello! " + otherPersonName + "nice to meet you!");
}

const player = {
  name: "nico",
  sayHello,
};

console.log(player.name);
player.sayHello("lynn");
