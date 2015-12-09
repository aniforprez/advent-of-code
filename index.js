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

var day2Data = require('./advent-day2-data').data;
// day2Data = '1x1x10';

var packingNeeded = 0;
var ribbonNeeded = 0;
day2Data.split(' ').forEach(function(dimensions, index) {
	var sides = dimensions.split('x');

	sides.forEach(function(side, index) {
		sides[index] = parseInt(side);
	});
	smallestSides = [];
	sides = sides.sort(function(a, b) {
		if(a < b) {
			return -1;
		}
		if(a > b) {
			return 1;
		}
		if(a == b) {
			return 0;
		}
	});
	pseudoSides = sides;
	smallestSides = sides.slice(0, 2);

	var face1 = sides[0] * sides[1];
	var face2 = sides[2] * sides[1];
	var face3 = sides[0] * sides[2];
	var smallestFace = face1;

	packingNeeded += 2 * (face1 + face2 + face3);
	packingNeeded += smallestFace;

	ribbonNeeded += (smallestSides[0] * 2) + (smallestSides[1] * 2) + (sides[0] * sides[1] * sides[2]);
});

console.log(packingNeeded, ribbonNeeded);
