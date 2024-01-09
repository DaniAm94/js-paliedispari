const word = prompt('Inserisci una parola per verificare che sia palindroma: ').trim();

function checkPalindrome(word) {
    let reverseWord = '';
    let result = 'La parola inserita non è un palindromo';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    if (word === reverseWord) {

        result = 'La parola inserita è un palindromo';
    }
    console.log('Parola inserita: ', word);
    console.log('Parola invertita: ', reverseWord);
    console.log(result)
}

checkPalindrome(word);