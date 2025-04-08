 const Calculator = require('./Calculator');

 test("adds 1 and 2 to equal 3", () => {
    expect(Calculator.add(1, 2)).toBe(3);
 })

 test("subtracts 5 from 10 to equal 5", () => {
    expect(Calculator.subtract(10, 5)).toBe(5);
 })

 test("multiplies 2 and 3 to equal 6", () => {
    expect(Calculator.multiply(2,3)).toBe(6);
 })

 test("divide 4 by 2 to equal 2", () => {
    expect(Calculator.divide(4,2)).toBe(2);
 })