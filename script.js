function yoyoBrain() {
  const button = document.createElement("svg");
  button.innerHTML = "Click Me";
  document.body.appendChild(button);
}

function createYoyo() {
  const h1 = document.createElement("h1");
  h1.innerHTML = "Read Me";
  document.body.appendChild(h1);
}

function createSVG() {
  const svgns = "http://www.w3.org/2000/svg";
  const svg = document.querySelector("svg");
  let newRect = document.createElementNS(svgns, "rect");
  newRect.setAttribute("x", "150");
  newRect.setAttribute("y", "150");
  newRect.setAttribute("width", "100");
  newRect.setAttribute("height", "100");
  newRect.setAttribute("fill", "blue");
  svg.appendChild(newRect);
}

function yoyoMA() {
  document.body.style.backgroundColor = "yellow";
  document.getElementById("title").style.color = "red";
  document.getElementById("btn").innerHTML = "Reset";
  document.getElementById("svg").style.display = "none";
  for (let i = 0; i < 10; i++) {
    speak("Me Read");
    createYoyo(i);
    setTimeout(() => {
      createYoyo(i);
    }, 500);
    setTimeout(() => {
      createYoyo(i);
    }, 1000);
    setTimeout(() => {
      createYoyo(i);
    }, 1500);
    setTimeout(() => {
      createYoyo(i);
    }, 2500);
    setTimeout(() => {
      createYoyo(i);
    }, 3000);
    setTimeout(() => {
      createYoyo(i);
    }, 3500);
    setTimeout(() => {
      createYoyo(i);
    }, 4000);
    setTimeout(() => {
      createYoyo(i);
    }, 4500);
    setTimeout(() => {
      createYoyo(i);
    }, 5000);
    setTimeout(() => {
      createYoyo(i);
    }, 5500);
    setTimeout(() => {
      createYoyo(i);
    }, 6000);
    setTimeout(() => {
      createYoyo(i);
    }, 6500);
  }
  document.getElementById("btn").onclick = reset;
}

function reset() {
  window.location.reload(false);
  document.getElementById("btn").onclick = yoyoMA;
}

function triggerSVG() {
  const btn = document.querySelector("#svg");
  btn.children[0].classList.add("myAnim2");
  setTimeout(function () {
    btn.children[0].classList.remove("myAnim2");
  }, 5000);
}

function speak(msg) {
  const sp = new SpeechSynthesisUtterance(msg);
  [sp.voice] = speechSynthesis.getVoices();
  speechSynthesis.speak(sp);
}
