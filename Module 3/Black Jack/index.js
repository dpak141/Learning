let player = {
  name: "Deepak",
  chips: 200,
};
let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard];
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $ " + player.chips;

function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber === 1) {
    return 11;
  } else if (randomNumber > 10) {
    return 10;
  } else {
    return randomNumber;
  }
}

function startGame() {
  renderGame();
}

function renderGame() {
  cardEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    cardEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum < 21) {
    message = "Do you want to draw a new Card?";
  } else if (sum === 21) {
    message = "Wohoo! You've got Black Jack 🥳";
    hasBlackJack = true;
  } else {
    message = "You're out of the Game 🥲";
    isAlive = false;
  }
  messageEl.textContent = message;
  console.log(message);
}

function newCard() {
  if (isAlive == true && hasBlackJack == false) {
    console.log("Draw a new Card");
    let newCard = getRandomCard();
    sum += newCard;
    cards.push(newCard);
    console.log(cards);
    renderGame();
  }
}
