/* Scrivi un programma che stampi in console i numeri da 1 a 100,
ma che per i multipli di 3 stampi “Fizz” al posto del numero e 
per i multipli di 5 stampi “Buzz”.
Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.*/



/*
    <div class="square">
        <div class="squarecontent">

        </div>
    </div>
*/

const numCells = 100;
const chessboard = document.getElementById('chessboard');

// for (let i = 1; i <= numCaselle; i++) {
    
//     chessboard.innerHTML += `<div class="square">
//         <div class="squarecontent d-flex justify-content-center align-items-center ${lightBox}">
//         ${i}
//         </div>
//     </div>`;
// }

for (i = 1; i <= numCells; i++) {
    let sText = i;
    let changeColor = 'squarecontent';

    if ((i % 3 === 0) && (i % 5 === 0)) {
        sText = 'FizzBuzz';
        changeColor = 'fizzbuzz';
    } else if (i % 3 === 0){
        sText = 'Fizz';
        changeColor = 'fizz';
    } else if (i % 5 === 0) {
        sText = 'Buzz';
        changeColor = 'buzz';
    }

    document.getElementById('chessboard').innerHTML += 
    `
    <div class="square ad-bg p-1">
        <div class="ad-fs d-flex align-items-center justify-content-center int-square rounded ${changeColor}">${sText}
        </div>
    </div>
    `

}






