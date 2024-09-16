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
console.log("date: ", today);
console.log("year: ", today.getFullYear());
console.log("month: ", today.getMonth());
console.log("day: ", today.getDate());
console.log("hours: ", today.getHours());
console.log("minutes: ", today.getMinutes());
console.log("day: ", today.getTime());

// ### Exercise: Level 2

/* let base = prompt("Enter base", "base goes here");
console.log("base: ", base);
let height = prompt("Enter height", "height goes here");
console.log("height: ", height);
console.log("The area of the triangle is ", 0.5 * base * height);

let a = prompt("Enter side a", "a goes here");
let b = prompt("Enter side b", "b goes here");
let c = prompt("Enter side c", "c goes here");
console.log("The perimeter of the triangle is ", a + b + c);

let length = prompt("Enter length", "length goes here");
let width = prompt("Enter width", "width goes here");
console.log("The area of rectangle is ", length * width);
console.log("The perimeter of rectangle is ", 2 * (length + width)); 

let radius = prompt("Enter radius", "radius goes here");
console.log("circle area: ", Math.PI * radius**2)
console.log("circle circumference: ", 2 * Math.PI * radius); 

// 5.-8.

let hours = prompt("Enter hours", "hours goes here");
let rate = prompt("Enter rate", "rate goes here");
console.log("Your weekly earning is ", hours * rate); */

let name = "minimeeeeeeee";

name.length > 7
  ? console.log("Your name is long!")
  : console.log("Your name is short!");

let firstName1 = "Donald";
let lastName1 = "Duck";

firstName1.length > lastName1.length
  ? console.log(
      "Your first name, " +
        firstName1 +
        " is longer than your family name, " +
        lastName1
    )
  : console.log(
      "Your first name, " +
        firstName1 +
        " is shorter than your family name, " +
        lastName1
    );

let myAge = 33;
let yourAge = 43;
let myAgeGreaterThanYourAge = myAge - yourAge;
let yourAgeGreaterThanMyAge = yourAge - myAge;

myAge > yourAge
  ? console.log("I am " + myAgeGreaterThanYourAge + " years older than you.")
  : console.log("You are " + yourAgeGreaterThanMyAge + " years older than me.");

/* let yearOfBirth = prompt("Enter year of your birth", "birth year goes here");
let userAge = today.getFullYear() - yearOfBirth;
let yearToYoung = 18 - userAge;

yearOfBirth < 2006
  ? console.log("You are " + userAge + ". You are old enough to drive")
  : console.log(
      "You are " +
        userAge +
        ". You will be allowed to drive after " +
        yearToYoung +
        " years"
    );

let yearsOfLiving =
  0 <=
  prompt(
    "Enter number of years you live",
    "lived years (0-100 years) goes here"
  ) >=
  100;
let secondsOfLiving = yearsOfLiving * 31536000;

console.log("You lived " + secondsOfLiving + " seconds."); */

const now = new Date();
console.log(now);

const options = {
  year: "numeric",
  month: "2-digit",
  day: "2-digit",
  hour: "2-digit",
  minute: "2-digit",
};

let month = now.getMonth() + 1;

let yearMonthDay =
  now.getFullYear() +
  "-" +
  month +
  "-" +
  now.getDate() +
  " " +
  now.getHours() +
  ":" +
  now.getMinutes();

console.log("YYYY-MM-DD HH:mm ", yearMonthDay);

let dayMonthYear =
  now.getDate() +
  "-" +
  month +
  "-" +
  now.getFullYear() +
  " " +
  now.getHours() +
  ":" +
  now.getMinutes();

console.log("DD-MM-YYYY HH:mm ", dayMonthYear);
console.log("DD/MM/YYYY HH:mm ", now.toLocaleString("en-GB", options));

// ### Exercises: Level 3

console.log(
  "YYYY-MM-DD HH:mm with 2 digits ",
  now.toLocaleString("sv-SE", options)
);
