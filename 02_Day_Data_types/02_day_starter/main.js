// this is your main.js script

// ### Exercise: Level 1

let challenge = "30 Days Of JavaScript";

console.log(challenge);
console.log(challenge.length);

console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());

console.log(challenge.substring(0, 2));
console.log(challenge.substr(3, 4));
console.log(challenge.substr(3, 18));

console.log(challenge.includes("Script"));

console.log(challenge.split());
console.log(challenge.split(" "));

let testString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(testString.split(", "));

console.log(challenge.replace("JavaScript", "Python"));

console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));

console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));

let because =
  "You cannot end a sentence with because because because is a conjunction";
console.log(because.indexOf("because"));
console.log(because.lastIndexOf("because"));
console.log(because.search("because"));

let removeWhitespace = "\t30 Days Of JavaScript\t";
console.log(removeWhitespace);
console.log(removeWhitespace.trim());

console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));

const regex = /a/g;
const search = challenge.match(regex);
console.log(search);

const firstPart = "30 Days of";
const secondPart = "JavaScript";
console.log(firstPart.concat(secondPart));

console.log(challenge.repeat(2));

// ### Exercise: Level 2

console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another."
);

console.log(
  " \"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.\" - Mother Teresa"
);

console.log(typeof "10" === 10);
console.log(parseInt("10") === 10);

console.log(parseFloat("9.81") === 10);
console.log(Math.round("9.81") === 10);

const language = "python";
const slang = "jargon";
console.log("include on: ", language.includes("on"), slang.includes("on"));

const sentence = "I hope this course is not full of jargon.";
console.log("jargon: ", sentence.includes("jargon"));

console.log(Math.random() * 101);
console.log(Math.random() * 101 + 50);
console.log(Math.random() * 101 + 155);

const stringCharacter = "Javascript";
console.log(
  "random charakter ",
  stringCharacter[Math.floor(Math.random() * stringCharacter.length)]
);

const row1 = "1\t1\t1\t1\t1";
const row2 = "2\t1\t2\t4\t8";
const row3 = "3\t1\t3\t9\t27";
const row4 = "4\t1\t4\t16\t64";
const row5 = "5\t1\t5\t25\t125";

console.log(row1);
console.log(row2);
console.log(row3);
console.log(row4);
console.log(row5);

const sliceOut =
  "You cannot end a sentence with because because because is a conjunction.";
console.log(sliceOut.indexOf("because"));
console.log(sliceOut.lastIndexOf("because") + 7);
console.log(sliceOut.substring(31, 54));

// ### Exercise: Level 3

const aboutLove =
  "Love is the best thing in this world. Some found their love and some are still looking for their love.";
let pattern = /love/gi;
console.log(aboutLove.match(pattern));

let repetitionOf = /because/g;
console.log("repetition of: ", sliceOut.match(repetitionOf));

const cleanSentence =
  " %I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching";

const clearSentence = cleanSentence.replaceAll(
  /[+\-/\\(){}\[\]<>!§$%&=?*#€¿&_\",.:;0-9@]/gi,
  ""
);
const trim = clearSentence.toLowerCase();
console.log("lowercase ", trim);

let regExp = / \w+/gi;
const words = trim.match(regExp);
console.log("all words ", words);
const sort = words.sort();
const uniqueList = [...new Set(sort)];
console.log("unique ", uniqueList);

let maxCount = 0;
let maxWord = "";
for (let i = 0; i <= uniqueList.length - 1; i++) {
  console.log(
    "anzahl wörter ",
    trim.match(new RegExp(uniqueList[i], "gi")).length
  );
  const word = uniqueList[i];
  const count = trim.match(new RegExp(uniqueList[i], "gi")).length;

  if (count > maxCount) {
    maxCount = count;
    maxWord = word;
  }
}
console.log(maxCount, maxWord);

const income =
  "He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.";

let regEx = /\d+/g;
const incomeScoures = income.match(regEx);
console.log(incomeScoures);

const salary = incomeScoures[0] * 12;
const bonus = incomeScoures[1] * 1;
const courses = incomeScoures[2] * 12;
console.log(salary, bonus, courses);
const totalIncome = salary + bonus + courses;
console.log(totalIncome);
