let h, s, l;

const helloInDifLanguage = [
  "Ahlan",
  "Zdrasti",
  "Hey",
  "Salut",
  "Hallo",
  "Salam!",
  "Ciao",
  "Oi",
  "Hei",
  "Selam",
  "Helo",
  "Yasou",
];
let sayHello;
let helloStyle = document.querySelector("#hello-container");
function getRandomHello() {
  sayHello = helloInDifLanguage[Math.floor(Math.random() * 12)];
}

function displayHello() {
  getRandomHello();
  helloStyle.innerHTML = sayHello;
  helloStyle.style.color = `hsl(${h + 180}, ${s}%, ${l}%)`;
}
function randomHSLValues() {
  h = Math.floor(Math.random() * 360);
  s = Math.floor(Math.random() * 21 + 80);
  l = Math.floor(Math.random() * 11 + 55);
}
// const timerID = [];
let timeID;
function executeHello() {
  timeID = setTimeout(function () {
    changeColor();
    displayHello();
    console.log(sayHello);
    executeHello();
  }, 3000);
  // timerID.push(timeID);
}
executeHello();
let selectBody = document.querySelector("body");
function changeColor() {
  randomHSLValues();

  helloStyle.style.background = `hsl(${h}, ${s}%, ${l}%)`;
  helloStyle.style.borderColor = `hsl(${h}, ${s - 10}%, ${l - 20}%)`;
}

function handleClick() {
  if (timeID) {
    clearTimeout(timeID);
    timeID = 0;
  } else console.log(`Stop: timeout id is ${timeID}`);
}

var btn = document.querySelector("#first-btn");
btn.addEventListener("click", handleClick);

function conflictsAreUgly() {
  console.log("🙏");
}
