let cardsNumber = prompt("Com quantas cartas você quer jogar?");
let shuffledDeck = [];
const pairs = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"];

getCardsNumber();

function getCardsNumber() {
    while ((cardsNumber % 2 !== 0) || (cardsNumber < 4) || (cardsNumber > 14)) {
        cardsNumber = prompt("Com quantas cartas você quer jogar?");
    }
    startGame();
}

function startGame() {
    const game = document.querySelector(".game");
    let cards = "";
    shuffleCards();


    for (let i = 0; i < cardsNumber; i ++) {

        cards += `<div class="card">
                    <div class="front-face face">
                        <img src = "media/front.png" alt="Front Card Parrot">
                    </div>
                    <div class="back-face face">
                        <img src = "media/${shuffledDeck[i]}parrot.gif" alt="Parrot Gif">
                    </div>
                    </div>`
    }

    game.innerHTML = cards;

}

function shuffleCards () {
    for (let i = 0; i < cardsNumber; i ++) {
        shuffledDeck[i] = pairs[i];
    }
    shuffledDeck.sort(comparador);
}

function comparador() { 
	return Math.random() - 0.5; 
}



