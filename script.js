let cardsNumber = prompt("Com quantas cartas você quer jogar?");

while ((cardsNumber % 2 !== 0) || (cardsNumber < 4) || (cardsNumber > 14)) {
    cardsNumber = prompt("Com quantas cartas você quer jogar?");
}

