function darkModeSwitch() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

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
