document.addEventListener('DOMContentLoaded', () => {
    const keys = [
        '1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', '⌫',
'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '?',

];
const keyboardContainer = document.getElementById('keyboard');
const inputField = document.getElementById('inputField');

keys.forEach(key => {
const keyElement = document.createElement('div');
keyElement.classList.add('key');
keyElement.textContent = key;

keyElement.addEventListener('click', () => {
    if (key === '⌫') {
        inputField.value = inputField.value.slice(0, -1);
    } else if (key === 'Space') {
        inputField.value += ' ';
    } else {
        inputField.value += key;
    }
});
keyboardContainer.appendChild(keyElement);
});
});
