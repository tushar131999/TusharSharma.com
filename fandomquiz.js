var requirement = require("readline-sync");
currentScore = 0;

console.log(`---HI THIS IS FANDOM QUIZ !!TRY YOUR LUCK`);
function checkAnswer(myquestion, myanswer) {
  var newName = requirement.question(myquestion);
  if (newName.toLowerCase === myanswer.toLowerCase) {
    console.log("You are right");
    currentScore = currentScore + 1;
  } else {
    console.log("You are wrong");
    currentScore = currentScore - 1;
  }
  console.log("Current Score", +currentScore);
}
var object1 = {
  question: `Which of them you watch most often?
  a: Netflix
  b:Amazon Prime
  c:ZEE5\n`,
  answer: "a",
};
var object2 = {
  question: `Which of them is best in thrill and suspense?
  a:Money Hiest
  b:Peaky Blenders
  c:GOT\n`,
  answer: "b",
};
var object3 = {
  question: `What is name of character in PEAKY BLENDERS?
  a:Tom
  b:Thomas\n`,
  answer: "b",
};
var object4 = {
  question: `What is name of character of MANOJ VAJPAYEE in THE FAMILY MAN webseries?
  a: Shubham
  b:Arvind
  c:Srikant\n`,
  answer: "c",
};
var object5 = {
  question: `On which platform THE SPECIAL OPS webseries streamed?
  a: Netflix
  b:Amazon Prime 
  c:Hotstar\n`,
  answer: "c",
};
var object6 = {
  question: `Which role does Robert Downey Jr. play in MARVEL movies?
  a: Thor 
  b:Iron Man 
  c:SpiderMan\n `,
  answer: "b",
};
var object7 = {
  question: `Which is the best platform to enjoy watching webseries?
  a:Netflix
  b:Amzon Prime
  c:Hotstar
  d Popcorn\n`,
  answer: "a",
};
var listOfObjects = [];
listOfObjects.push(object1);
listOfObjects.push(object2);
listOfObjects.push(object3);
listOfObjects.push(object4);
listOfObjects.push(object5);
listOfObjects.push(object6);
listOfObjects.push(object7);

for (var i = 0; i < listOfObjects.length; i++) {
  checkAnswer(listOfObjects[i].question, listOfObjects[i].answer);
}
var high = [
  {
    name: "hitesh",
    highscore: "7",
  },
];
for (i = 0; i < high.length; i++) {
  console.log("high scores is " + high[i].highscore);
  if (currentScore >= high[i].highscore) {
    console.log("congrats!!!!!");
    console.log("Your current score is high score " + currentScore);
  } else {
    console.log("try hard");
  }
}
console.log("Your current score is " + currentScore);
