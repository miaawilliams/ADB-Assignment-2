const fs = require("fs");
const path = require("path");

const quotesPath = path.join(__dirname, "..", "data", "quotes.txt");
const sampletextPath = path.join(__dirname, "..", "data", "sample-text.txt");

const quotes = fs.readFileSync(quotesPath, "utf-8");
const sampletext = fs.readFileSync(sampletextPath, "utf-8");


function countWords(text) {
    if (text.trim() === "") return 0;
    return text.trim().split(/\s+/).length;
}


function longestWord(text) {
    let words = text.split(/\s+/); 
    let longest = "";
    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longest.length) {
            longest = words[i];
        }
    }
    return longest;
}


function fileLines(text) {
    if (text === "") return 0;
    return text.split("\n").length;
}


console.log(countWords(quotes));
console.log(longestWord(quotes));
console.log(fileLines(quotes));

console.log(countWords(sampletext));
console.log(longestWord(sampletext));
console.log(fileLines(sampletext));

module.exports = {
    countWords,
    longestWord,
    fileLines
}
 
