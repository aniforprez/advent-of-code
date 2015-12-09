var day1Data = require('./advent-day1-data').data;

var santasFloor = 0;
var santaEntersBasement = null;
var santaHasGoneUnder = false;
day1Data.split('').forEach(function(instruction, index) {
	if(instruction == '(') {
		santasFloor++;
	}
	else {
		santasFloor--;
	}

	if(santasFloor < 0 && !santaHasGoneUnder) {
		santaEntersBasement = index + 1;
		santaHasGoneUnder = true;
	}
});

console.log(santasFloor, santaEntersBasement);
