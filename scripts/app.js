let playerScore1 = 0;
let playerScore2 = 0;
let brojReda = 0;

let igrac1 = document.getElementById("igrac1");
let igrac2 = document.getElementById("igrac2");

let polje11 = document.getElementById("11");
let polje12 = document.getElementById("12");
let polje13 = document.getElementById("13");
let polje21 = document.getElementById("21");
let polje22 = document.getElementById("22");
let polje23 = document.getElementById("23");
let polje31 = document.getElementById("31");
let polje32 = document.getElementById("32");
let polje33 = document.getElementById("33");
let polja = [
    [polje11, polje12, polje13],
    [polje21, polje22, polje23],
    [polje31, polje32, polje33]
];

for (const niz of polja) {
    for (const dugme of niz) {
        dugme.addEventListener("click", odigraj);
    }
}

function odigraj() {
    let simbol = (brojReda % 2 == 0) ? "X" : "O";
    if (this.textContent != 'X' && this.textContent != 'O') {
        this.textContent = simbol;
        brojReda++;
        provjeriIgru(simbol);
    }
}


function provjeriIgru(simbol) {
    let uzastopnoIsti = 0;
    //Provjera redova
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (polja[i][j].textContent == simbol)
                uzastopnoIsti++;
        }
        if (uzastopnoIsti == 3) {
            gameOver(simbol);
            return;
        } else
            uzastopnoIsti = 0;
    }

    //Provjera kolona
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (polja[j][i].textContent == simbol)
                uzastopnoIsti++;
        }
        if (uzastopnoIsti == 3) {
            gameOver(simbol);
            return;
        } else
            uzastopnoIsti = 0;
    }

    //Provjera dijagonale    
    for (let i = 0; i < 3; i++)
        if (polja[i][i].textContent == simbol)
            uzastopnoIsti++;

    if (uzastopnoIsti == 3) {
        gameOver(simbol);
        return;
    } else
        uzastopnoIsti = 0;

    //Provjera druge dijagonale
    for (let i = 2; i >= 0; i--)
        if (polja[i][2 - i].textContent == simbol) {
            uzastopnoIsti++;
            console.log(uzastopnoIsti);
        }

    if (uzastopnoIsti == 3) {
        gameOver(simbol);
        return;
    } else
        uzastopnoIsti = 0;

    //Nerijeseno    
    if (brojReda == 9)
        gameOver();
}

function gameOver(simbol) {
    if (simbol == 'X') {
        playerScore1++;
        igrac1.textContent = playerScore1;
        alert("Pobjedio je igrac 1");
    } else if (simbol == 'O') {
        playerScore2++;
        igrac2.textContent = playerScore2;
        alert("Pobjedio je igrac 2");
    } else
        alert("Nerijeseno");

    restartuj();
}

function restartuj() {
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            polja[i][j].textContent = '';
    brojReda = 0;
}