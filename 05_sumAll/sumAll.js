const sumAll = function(start, end) {
	if(start < 0 || end < 0 || !Number.isInteger(start) || !Number.isInteger(end)){
		return "ERROR";
	}
	let solution = 0;
	if(end > start){
		for(let i = start;  i <= end; ++i){
			solution += i;
		}
	}
	else{
		for(let i = end;  i <= start; ++i){
			solution += i;
		}
	}

	
	
	return solution;
};

// Do not edit below this line
module.exports = sumAll;
