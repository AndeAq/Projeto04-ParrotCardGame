
let cardsNumber = prompt("Com quantas cartas você quer jogar?");
let shuffledDeck = [];
const cardsPairs = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"];

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

        cards += `<div class="card" onclick="compare(this)">
                    <div class="face">
                        <img src = "media/front.png" alt="Front Card Parrot">
                    </div>
                    <div class="face hide-back">
                        <img src = "media/${shuffledDeck[i]}parrot.gif" class="parrot" alt="Parrot Gif">
                    </div>
                    </div>`
    }

    game.innerHTML = cards;

}

function shuffleCards () {
    for (let i = 0; i < cardsNumber; i ++) {
        shuffledDeck[i] = cardsPairs[i];
    }
    shuffledDeck.sort(comparador);
}

function comparador() { 
	return Math.random() - 0.5; 
}


let firstCard;
let secondCard;
let counter = 0;
let turns = 0;
let pairsFound = 0;


function compare (card) {



    virar(card)

    if (firstCard === undefined) {
        firstCard = card;
        counter ++;
    } else {
        secondCard = card;
        counter ++;
    }

    if (counter === 2) {
        if (firstCard.innerHTML !== secondCard.innerHTML) {
            setTimeout(virar, 1000, firstCard);
            setTimeout(virar, 1000, secondCard);
            firstCard = undefined;
            secondCard = undefined;
            counter = 0;
        } else {
            firstCard = undefined;
            secondCard = undefined;
            counter = 0;
            pairsFound ++;
        }
    }

    turns ++;

    if (pairsFound === cardsNumber/2) {
        setTimeout(alert, 600, `Você ganhou em ${turns} jogadas!`);
    }
}


function virar (card) {
    const front = card.querySelector(".face");
    const back = card.querySelector(".hide-back");

    front.classList.toggle("hide-front");
    back.classList.toggle("show-back");

}


