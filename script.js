const cardsPairs = ["bobross", "bobross", "explody", "explody", "fiesta", "fiesta", "metal", "metal", "revertit", "revertit", "triplets", "triplets", "unicorn", "unicorn"];
let cardsNumber;
let shuffledDeck = [];
let firstCard;
let secondCard;
let seconds = 0;
let cardsSelected = 0;
let turns = 0;
let pairsFound = 0;

function comparador() { 
	return Math.random() - 0.5; 
}

function shuffleCards () {
    for (let i = 0; i < cardsNumber; i ++) {
        shuffledDeck[i] = cardsPairs[i];
    }
    shuffledDeck.sort(comparador);
}

function clock () {
    seconds ++;
    const clock = document.querySelector(".clock");
    clock.innerHTML = `${seconds}s`;
}

function startGame() {
    const game = document.querySelector(".game");
    let cards = "";
    shuffleCards();
    idClock = setInterval(clock, 1000);
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

function getCardsNumber() {
    cardsNumber = prompt("Com quantas cartas você quer jogar?");
    while ((cardsNumber % 2 !== 0) || (cardsNumber < 4) || (cardsNumber > 14)) {
        cardsNumber = prompt("Com quantas cartas você quer jogar?");
    }
    startGame();
}

function turnCard (card) {
    const front = card.querySelector(".face");
    const back = card.querySelector(".hide-back");
    front.classList.toggle("hide-front");
    back.classList.toggle("show-back");
}

function replayGame () {
    replay = prompt("De novo?");
    if (replay === "sim") {
        seconds = 0;
        turns = 0;
        pairsFound = 0;
        shuffledDeck = [];
        getCardsNumber();
    }
}

function compare (card) {
    const isTurned = card.querySelector(".show-back")
    if ( isTurned === null) {
        turnCard(card)
        if (firstCard === undefined) {
            firstCard = card;
            cardsSelected ++;
        } else {
            secondCard = card;
            cardsSelected ++;
        }
        turns ++;
    }
    if (cardsSelected === 2) {
        if (firstCard.innerHTML !== secondCard.innerHTML) {
            setTimeout(turnCard, 1000, firstCard);
            setTimeout(turnCard, 1000, secondCard);
            firstCard = undefined;
            secondCard = undefined;
            cardsSelected = 0;
        } else {
            firstCard = undefined;
            secondCard = undefined;
            cardsSelected = 0;
            pairsFound ++;
        }
    }
    if (pairsFound === cardsNumber/2) {
        clearInterval(idClock);
        setTimeout(alert, 600, `Você ganhou em ${turns} jogadas e em ${seconds} segundos!`);
        setTimeout(replayGame, 601);
    }
}

getCardsNumber();