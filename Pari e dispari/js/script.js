//  Recupero gli elementi dal DOM
const form = document.getElementById('form');
const menu = document.getElementById('menu');
const number = document.getElementById('user-number');
const displayInfo = document.getElementById('info');
const displayResult = document.getElementById('result');

// TODO Funzioni
/**
 * Calculate a random number in a specific range (max can be excluded)
 * @param {number} min lower bound 
 * @param {number} max upper bound
 * @param {boolean} isMaxIncluded whether the upper bound has to be included
 * @returns {number} the randomized number
 */
function getRandomNumber(min = 1, max = 100, isMaxIncluded = true) {

    if (isNaN(min) || isNaN(max)) {
        console.error('Il minimo e il massimo devono essere dei numeri!');
        return NaN;
    }

    if (min >= max) {
        console.error('Il massimo deve essere strettamente maggiore del minimo!');
        return null;
    }

    let randomNumber;
    if (isMaxIncluded) max++;
    randomNumber = Math.floor(Math.random() * (max - min)) + min;
    return randomNumber;
}

/**
 * Check whether a number is even
 * @param {number} number number to be tested
 * @returns {string} the result of the test
 */
function isEven(number) {
    let result = 'pari';
    if (number % 2) result = 'dispari';
    return result;
}


// TODO Esecuzione
form.addEventListener('submit', function (event) {
    event.preventDefault();

    const userChoice = menu.value;
    const userNumber = parseInt(number.value);

    // ! Validazione
    if (userChoice !== 'pari' && userChoice !== 'dispari') {
        displayResult.innerText = 'Devi scegliere tra pari o dispari!';
        displayInfo.classList.add('d-none');
        return;
    }
    if (isNaN(userNumber) || userNumber < 1 || userNumber > 5) {
        displayResult.innerText = 'Devi scegliere un numero compreso tra 1 e 5!';
        displayInfo.classList.add('d-none');
        return;
    }
    // !----------------


    displayInfo.classList.remove('d-none');
    displayResult.classList.remove('d-none');

    // Richiamo la funzione da me creata per generare un numero casuale da 1 a 5
    const randomNumber = getRandomNumber(1, 5);


    // Calcolo la somma del numero scelto dall'utente e il numero casuale
    const sum = userNumber + randomNumber;
    let messaggio = 'Hai perso!';

    // Verifico che la somma sia pari o dispari e stampo il risultato
    if (isEven(sum) === userChoice) {
        messaggio = 'Hai vinto!';
    }
    displayInfo.innerText = `Il mio numero: ${randomNumber}
    Somma: ${sum}`;
    displayResult.innerText = messaggio;
})       