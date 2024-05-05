"use strict";
// QUESTION 85:
function findPositionOfCode(str) {
    return str.indexOf("code");
}
let result = findPositionOfCode("Enter your security code to access the computer");
console.log(result);
// QUESTION 86:
function checkTextPresence(text) {
    return text.includes("javascript");
}
let res = checkTextPresence("I like to learn javascript!!");
console.log(res);
// QUESTION 87:
function extractSubstring(text) {
    return text.substring(0, 10);
}
let answer = extractSubstring("Hello, world!!");
console.log(answer);
