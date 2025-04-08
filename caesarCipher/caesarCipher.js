function caesarCipher(str, shift){
    // Ensure the shift is within 0 to 25
    shift = shift % 26;
    return str.split('').map(char => {
        if (/[a-z]/i.test(char)) {  // Check if the character is a letter
            const base = char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 90 ? 65 : 97; // ASCII for A=65, a=97
            const newChar = String.fromCharCode(((char.charCodeAt(0) - base + shift + 26) % 26) + base);
            return newChar;
        }
        return char; // Return non-letter characters unchanged
    }).join('');

}

module.exports = caesarCipher;