function darkModeSwitch() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var bigCards = document.getElementsByClassName("item_bottom-half");
  for (var i = 0; i < bigCards.length; i++) {
    bigCards[i].classList.toggle("dark-mode_cards");
  }

  var smallCards = document.getElementsByClassName("card_bottom-half");
  for (var i = 0; i < smallCards.length; i++) {
    smallCards[i].classList.toggle("dark-mode_cards");
  }

  var dates = document.getElementsByClassName("item-date");
  for (var i = 0; i < dates.length; i++) {
    dates[i].classList.toggle("dark-mode_cards");
  }

  var toggle = document.getElementsByClassName("switch");
  for (var i = 0; i < toggle.length; i++) {
    toggle[i].classList.toggle("dark-mode_switch");
  }
}

function checkTime() {
  var date = new Date();
  var hour = date.getHours();
  var isDarkModeActive = document.body.classList.contains("dark-mode");
  
  if ((hour >= 18 || hour <= 6) && !isDarkModeActive) {
    darkModeSwitch();
  }
}

checkTime();

// JavaScript for the carousel
const carousel = document.querySelector("#carousel");
const cards = document.querySelectorAll(".card");
const prev = document.querySelector("#prev");
const next = document.querySelector("#next");
const dots = document.querySelectorAll(".dot");

let currentCard = 0;

const showCard = (card) => {
  carousel.scrollLeft = card.offsetLeft;
  updateDots(card);
};

const updateDots = (card) => {
  dots.forEach((dot) => dot.classList.remove("active"));
  dots[Array.from(cards).indexOf(card)].classList.add("active");
};

prev.addEventListener("click", () => {
  currentCard = currentCard > 0 ? currentCard - 1 : cards.length - 1;
  showCard(cards[currentCard]);
});

next.addEventListener("click", () => {
  currentCard = currentCard < cards.length - 1 ? currentCard + 1 : 0;
  showCard(cards[currentCard]);
});

dots.forEach((dot) => {
  dot.addEventListener("click", () => {
    showCard(cards[Array.from(dots).indexOf(dot)]);
  });
});
