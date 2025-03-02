const add = function(n , m) {
	return n + m;
};

const subtract = function(n, m) {
	return n - m;
};

const sum = function(array) {
  let solution = 0;
	array.forEach(element => {
    solution +=element;
  });
  return solution;
};

const multiply = function(array) {
	let solution = 1;
	array.forEach(element => {
    solution *=element;
  });
  return solution;
};

const power = function(n, m) {
	return Math.pow(n, m);
};

const factorial = function(n) {
  if(n === 0) {
    return 1;
  }
  let solution = 1;
	for(let i = 1; i <=n; ++i){
    solution *=i;
  }
  return solution;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
