const form = document.querySelector('form');
const inputText = document.getElementById('input-text');
const displayResult = document.getElementById('result');

/**
 * Check if a word is a palindrome
 * @param {string} word the word to be tested
 * @returns {boolean} the result of the test (true if palindrome)
 */
function checkPalindrome(word) {
    let reverseWord = '';
    for (let i = word.length - 1; i >= 0; i--) {
        reverseWord += word[i];
    }
    return word.toLowerCase() === reverseWord.toLowerCase();
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    let message = 'La parola non è palindroma';
    const word = inputText.value;
    if (!word) {
        alert('Devi inserire una parola!');
        return;
    }
    displayResult.classList.remove('d-none');
    if (checkPalindrome(word)) message = 'La parola è palindroma';
    displayResult.innerText = message;
})