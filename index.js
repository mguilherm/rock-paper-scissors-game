var optionChoosed = "";
var playerScore = 0;
var pcScore = 0;
var gamer = "";

while (gamer == "") {
  gamer = prompt("Digite seu nome: ").trim();
}

function toColorImage(image) {
  document.getElementById("rock").style.filter = "grayscale(100%)";
  document.getElementById("paper").style.filter = "grayscale(100%)";
  document.getElementById("scissors").style.filter = "grayscale(100%)";
  image.style.filter = "none";
  optionChoosed = image.id;
}

function play() {
  if (optionChoosed === "") {
    return "";
  }

  var randomNumber = Math.floor(Math.random() * 3) + 1;

  var selectedImage = "";

  switch (randomNumber) {
    case 1:
      selectedImage = "pc-rock";
      break;
    case 2:
      selectedImage = "pc-paper";
      break;
    case 3:
      selectedImage = "pc-scissors";
      break;
    default:
      selectedImage = "pc";
  }

  selectedImage = "./img/" + selectedImage + ".png";

  document.getElementById("pc").src = selectedImage;

  selectedImageForCompare = selectedImage.replace("./img/", "");
  selectedImageForCompare = selectedImageForCompare.replace(".png", "");
  selectedImageForCompare = selectedImageForCompare.replace("pc-", "");

  var score = document.getElementById("score");

  var finalResult = "";

  if (optionChoosed == selectedImageForCompare) {
    finalResult = "Empate";
  } else if (
    (optionChoosed == "paper" && selectedImageForCompare == "rock") ||
    (optionChoosed == "rock" && selectedImageForCompare == "scissors") ||
    (optionChoosed == "scissors" && selectedImageForCompare == "paper")
  ) {
    finalResult = "Vitória";
    playerScore++;
  } else {
    finalResult = "Derrota";
    pcScore++;
  }

  score.innerHTML =
    "👨🏽‍🚀 " + playerScore + " " + finalResult + " " + pcScore + " 💻 ";

  if (playerScore == 5 || pcScore == 5) {
    if (playerScore == 5) {
      alert("FIM de JOGO: " + gamer + " ganhou! 🏆🎮");
    } else {
      alert("FIM de JOGO: o PC ganhou! 🕹🖥");
    }

    score.innerHTML = "";
    playerScore = 0;
    pcScore = 0;
  }
}
