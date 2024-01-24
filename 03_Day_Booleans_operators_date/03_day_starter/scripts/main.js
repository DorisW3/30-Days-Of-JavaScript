// this is your main.js script

// ### Exercise: Level 1

let firstName = "James";
let lastName = "Bond";
let country = "Great Britain";
let city = "London";
let age = 43;
let isMarried = false;
let date = new Date();
let year = date.getFullYear();

console.log(
  typeof firstName,
  typeof lastName,
  typeof country,
  typeof city,
  typeof age,
  typeof isMarried,
  typeof year
);

console.log(typeof "10" === 10);
console.log(parseInt("9,8") === 10);

let isLightOff = true;
let isFed = false;
let isHungry = false;
let isHappy = true;
let trueValue = 7 > 3;
let falseValue = 12 < 8;

console.log(isLightOff, isFed, isHungry, isHappy, trueValue, falseValue);

let greaterThan = 4 > 3;
let greaterOrEqual = 4 >= 3;
let lessThan = 4 < 3;
let lessOrEqual = 4 <= 3;
let equalNum = 4 == 4;
let strictlyEqualNum = 4 === 4;
let unequalNum = 4 != 4;
let strictlyUnequalNum = 4 !== 4;
let unequalValue = 4 != "4";
let equalValue = 4 == "4";
let strictlyEqualValue = 4 === "4";

console.log(
  greaterThan,
  greaterOrEqual,
  lessThan,
  lessOrEqual,
  equalNum,
  strictlyEqualNum,
  unequalNum,
  strictlyUnequalNum,
  unequalValue,
  equalValue,
  strictlyEqualValue
);

let python = "python";
let lengthOfPython = python.length;
let jargon = "jargon";
let lengthOfJargon = jargon.length;
console.log("wordlength unequal:", lengthOfPython !== lengthOfJargon);

let expression1 = 4 > 3 && 10 < 12;
console.log("exp 1", expression1);

let expression2 = 4 > 3 && 10 > 12;
console.log("epx2 ", expression2);

let expression3 = 4 > 3 || 10 < 12;
console.log("epx3 ", expression3);

let expression4 = 4 > 3 || 10 > 12;
console.log("epx4 ", expression4);

let expression5 = !(4 > 3);
console.log("epx5 ", expression5);

let expression6 = !(4 < 3);
console.log("epx6 ", expression6);

let expression7 = !false;
console.log("epx7 ", expression7);

let expression8 = !(4 > 3 && 10 < 12);
console.log("epx8 ", expression8);

let expression9 = !(4 > 3 && 10 > 12);
console.log("epx9 ", expression9);

let expression10 = !(4 === "4");
console.log("epx10 ", expression10);

let dragonAndPython = "dragon & python";

let noOnIncluded = !dragonAndPython.includes("on");
console.log("no 'on' included", noOnIncluded);

let today = new Date();
console.log(today);
