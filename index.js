const addMoney = document.getElementsByClassName("addMoney");
const black = document.getElementById("black");
const red = document.getElementById("red");
const spin = document.getElementById("spin");
let totalMoney = 100;
let totalBet = 0;
let result;
let selectedColor;

document.getElementById("oneDollar").onclick = function () {
  totalBet += 1;
  totalMoney -= 1;
  document.getElementById("totalBet").textContent = "$" + totalBet;
  document.getElementById("totalMoney").textContent = "$" + totalMoney;
  if (totalMoney < 0) {
    totalBet -= 1;
    totalMoney += 1;
    document.getElementById("totalBet").textContent = "$" + totalBet;
    document.getElementById("totalMoney").textContent = "$" + totalMoney;
    alert("You have insufficient funds!");
  }
};

document.getElementById("red").addEventListener("input", function () {
  selectedColor = "red"; // Update the global variable when red is selected
  console.log(selectedColor); // Log the updated value
});

document.getElementById("black").addEventListener("input", function () {
  selectedColor = "black"; // Update the global variable when black is selected
  console.log(selectedColor); // Log the updated value
});
document.getElementById("tenDollars").onclick = function () {
  totalBet += 10;
  totalMoney -= 10;
  document.getElementById("totalBet").textContent = "$" + totalBet;
  document.getElementById("totalMoney").textContent = "$" + totalMoney;
  if (totalMoney < 0) {
    totalBet -= 10;
    totalMoney += 10;
    document.getElementById("totalBet").textContent = "$" + totalBet;
    document.getElementById("totalMoney").textContent = "$" + totalMoney;
    alert("You have insufficient funds!");
  }
};
document.getElementById("onehundredDollars").onclick = function () {
  totalBet += 100;
  totalMoney -= 100;
  document.getElementById("totalBet").textContent = "$" + totalBet;
  document.getElementById("totalMoney").textContent = "$" + totalMoney;
  if (totalMoney < 0) {
    totalBet -= 100;
    totalMoney += 100;
    document.getElementById("totalBet").textContent = "$" + totalBet;
    document.getElementById("totalMoney").textContent = "$" + totalMoney;
    alert("You have insufficient funds!");
  }
};

document.getElementById("spin").onclick = function () {
  if (totalBet > 0) {
    if (selectedColor == "red" || selectedColor == "black") {
      let result = Math.random() < 0.5 ? 1 : 2;
      if (result == 1) {
        document.getElementById("result").textContent =
          "It landed on Red! You Won!";
      }
      if (result == 2) {
        document.getElementById("result").textContent =
          "It landed on Black! You Won!";
      }
      console.log(result);
    } else {
      alert("Please choose a color to bet on!");
    }
  } else {
    alert("You have to bet money before you play.");
  }
};
