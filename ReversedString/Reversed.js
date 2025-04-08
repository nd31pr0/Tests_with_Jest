
// The function takes a string and returns it reversed.
function reversed(str) {
    if (typeof str !== 'string') {
        throw new TypeError('Expected a string');
    }
    return str.split("").reverse().join("");
}

module.exports = reversed;