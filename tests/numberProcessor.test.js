const {sumNumbers, findHighLow, calculateAverage} = require("../src/numberProcessor");

test("Caclulate the sum of all numbers", () => {
    const result = sumNumbers([1, 2, 3, 4, 5]);
    expect(result).toBe(15);
});

test("Find the highest and lowest numbers", () => {
    const result = findHighLow([5, 8, 1, 4, 9, 2, 3]);
    expect(result).toEqual([9, 1]);
}); 

test("Calculate the average", () => {
    const result = calculateAverage([2, 4, 6, 8, 10]);
    expect(result).toBe(6);
}); 