const repeatString = function(word, times) {
	if(times < 0)
		return "ERROR";
	let solution = "";
	for(let i = 0; i < times; ++i){
		solution += word;
	}
	return solution;
};

// Do not edit below this line
module.exports = repeatString;
