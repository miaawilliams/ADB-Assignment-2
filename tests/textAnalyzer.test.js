const {countWords, longestWord, fileLines } = require("../src/textAnalyzer");

test ("Count total number of words", () => { 
    const result = countWords("To be, or not to be, that is the question.");
    expect(result).toBe(10);
});

test ("Find the longest word", () => {
    const result = longestWord("The quick brown fox jumps over the lazy dog");
    expect(result).toBe("quick");
});

test ("Count total number of lines", () => {
    const result = fileLines("First line.\nSecond line.\nThird line.");
    expect(result).toBe(3);
});