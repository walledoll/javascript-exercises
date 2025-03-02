const palindromes = function (str) {
	const allowedSymbols = "abcdefghijklmopqrstuvwxyz1234567890";
	const cleanedString = str.toLowerCase().split("").filter((element) => (allowedSymbols.includes(element))).join("");
	const reversedString = cleanedString.split("").reverse().join("");
	return cleanedString === reversedString;
};
// Do not edit below this line
module.exports = palindromes;
