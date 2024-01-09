// L'utente sceglie tra pari e dispari
const userChoice = prompt('Scegli tra pari e dispari: ').trim() || 'pari';
console.log('Hai scelto:', userChoice);


// L'utente sceglie un numero da 1 a 5
const userNumber = parseInt(prompt('Scegli un numero da uno a 5')) || 5;
console.log('Il tuo numero: ', userNumber);


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

// Richiamo la funzione da me creata per generare un numero casuale da 1 a 5
const randomNumber = getRandomNumber(1, 5);
console.log('Numero casuale generato (tra 1 e 5):', randomNumber);


// Calcolo la somma del numero scelto dall'utente e il numero casuale
const sum = userNumber + randomNumber;
console.log('Somma: ', sum);

// Verifico che la somma sia pari o dispari e stampo il risultato
if (isEven(sum) === userChoice) {
    console.log('Hai vinto!');
} else {
    console.log('Hai perso!');
} 