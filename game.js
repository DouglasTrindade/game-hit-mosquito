let height = 0;
let width = 0;
let life = 1;
let time = 10;

let makeTimeMosca = 1500;

let nivel = window.location.search;
nivel = nivel.replace("?", "");

if (nivel === "normal") {
  makeTimeMosca = 1500;
} else if (nivel === "dificil") {
  makeTimeMosca = 1000;
} else if (nivel === "chucknorris") {
  makeTimeMosca = 750;
}

const sizeAdjustment = () => {
  height = window.innerHeight;
  width = window.innerWidth;
  console.log(height, width);
};
sizeAdjustment();

let stopwatch = setInterval(() => {
  time -= 1;
  if (time < 0) {
    clearInterval(stopwatch);
    clearInterval(makeMosca);
    window.location.href = "vitoria.html";
    alert("Vitória");
  } else {
    document.getElementById("stopwatch").innerHTML = time;
  }
}, 1000);

const randomPosition = () => {
  if (document.getElementById("mosca")) {
    document.getElementById("mosca").remove();

    // console.log("elemento selecionado foi: v" + life);
    if (life > 3) {
      window.location.href = "fim-de-jogo.html";
    } else {
      document.getElementById("v" + life).src = "images/coracao_vazio.png";
      life++;
    }
  }

  let positionX = Math.floor(Math.random() * width) - 90;
  let positionY = Math.floor(Math.random() * height) - 90;

  positionX = positionX < 0 ? 0 : positionX;
  positionY = positionY < 0 ? 0 : positionY;

  console.log(positionX, positionY);

  let mosquito = document.createElement("img");
  mosquito.src = "./images//mosca.png";
  mosquito.className = randomSize() + " " + randomSide();
  mosquito.style.left = positionX + "px";
  mosquito.style.top = positionY + "px";
  mosquito.style.position = "absolute";
  mosquito.id = "mosca";
  mosquito.onclick = () => {
    mosquito.remove();
  };
  document.body.appendChild(mosquito);

  console.log(randomSize());
  console.log(randomSide());
};

const randomSize = () => {
  let classPR = Math.floor(Math.random() * 3);
  console.log(classPR);

  switch (classPR) {
    case 0:
      return "mosca1";
    case 1:
      return "mosca2";
    case 2:
      return "mosca3";
  }
};

const randomSide = () => {
  let classPS = Math.floor(Math.random() * 2);
  console.log(classPS);

  switch (classPS) {
    case 0:
      return "sideA";
    case 1:
      return "sideB";
  }
};
