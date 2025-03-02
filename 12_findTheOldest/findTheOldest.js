const findTheOldest = function(persons) {
	let currentYear = new Date().getFullYear();
	const yearsOfLife = persons.map((person) => (person.yearOfDeath - person.yearOfBirth)).sort();
	return 
};

// Do not edit below this line
module.exports = findTheOldest;
