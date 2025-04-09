
const analyzeArray = {
    length : function(arr){
        if (!Array.isArray(arr)) {
            throw new TypeError('Expected an array');
        }
        return arr.length;
    },
    min: function(arr){
        if (!Array.isArray(arr)) {
            throw new TypeError('an array is expected')
        }
        return Math.min(...arr);

    },
    max: function(arr){
        if (!Array.isArray(arr)) {
            throw new TypeError('an array is expected')
        }
        return Math.max(...arr);
    },
    average: function(arr){
        if (!Array.isArray(arr)) {
            throw new TypeError('an array is expected')
        }
        return arr.reduce((acc, curr) => acc + curr, 0) / arr.length;
    }
}

module.exports = analyzeArray;