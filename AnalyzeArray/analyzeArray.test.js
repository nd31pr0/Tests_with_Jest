const analyzeArray = require('./analyzeArray'); 

test("Takes an array and returns length", () => {
    expect(analyzeArray.length([1, 2, 3, 4, 5])).toBe(5);
    })

test("Takes an array and returns min", ()=>{
    expect(analyzeArray.min([1, 2, 3, 4, 5])).toBe(1);
    })

test("Takes an array and returns max", ()=>{
    expect(analyzeArray.max([1, 2, 3, 4, 5])).toBe(5);
    })

test("Takes an array and returns average", ()=>{
    expect(analyzeArray.average([1, 2, 3, 4, 5])).toBe(3);
    })


