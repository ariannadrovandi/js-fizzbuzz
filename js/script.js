/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e 
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/

const numCaselle = 64;

/*
    <div class="square">
        <div class="squarecontent">

        </div>
    </div>
*/

const chessboard = document.getElementById('chessboard')

for (let i = 1; i <= numCaselle; i++) {
    
    chessboard.innerHTML += `<div class="square">
        <div class="squarecontent d-flex justify-content-center align-items-center ${lightBox}">
        ${i}
        </div>
    </div>`;
}






