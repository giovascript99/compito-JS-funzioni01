function giocoDadi(){
    let numTiri = prompt("Quanti tiri vuoi effettuare?");
    
    let player1 = 0;
    let player2 = 0;
    
    for (let i = 0; i <= numTiri; i++){
        let dado1 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        let dado2 = Math.floor(Math.random() * (6 - 1 + 1) + 1);
        
        player1 += dado1;
        player2 += dado2;
        
        console.log(`Tiro ${i + 1}: Giocatore 1 = ${dado1}, Giocatore 2 = ${dado2}`);
        
    } if (player1 > player2) {
        console.log("Ha vinto il Giocatore 1!");
    } else if (player2 > player1) {
        console.log("Ha vinto il Giocatore 2!");
    } else {
        console.log("Pareggio!");
    }
    
    console.log(`Punteggio finale: Giocatore 1 = ${player1}, Giocatore 2 = ${player2}`);
}

giocoDadi();