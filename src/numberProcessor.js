const fs = require ("fs");
const path = require ("path");

const numbersPath = path.join(__dirname, "..", "data", "sample-numbers.txt");
const numbers = fs.readFileSync(numbersPath, "utf-8");



function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    return sum;
}


function findHighLow(numbers) {
    let highest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > highest) {
            highest = numbers[i];
        }
    }

    let lowest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] < lowest) {
            lowest = numbers[i];
        }
    }
    return [highest, lowest];
}


function calculateAverage(numbers) {
    let sum = sumNumbers(numbers);
    return sum / numbers.length;
}




// console.log(sumNumbers(numbers));
// console.log(findHighLow(numbers));
// console.log(calculateAverage(numbers));



module.exports = {
    sumNumbers,
    findHighLow,
    calculateAverage
}
