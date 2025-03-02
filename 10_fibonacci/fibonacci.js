const fibonacci = function(num) {
	if(typeof num !== "number")
		count = parseInt(num);
	else
		count = num;
	let array = [count];
	array[0] = 0;
	array[1] = 1;

	if(count < 0){
		return "OOPS";
	}

	for(let i = 2; i <= count; ++i){
		array[i] = array[i-2] + array[i-1];
	}
	return array[count];
};

// Do not edit below this line
module.exports = fibonacci;
