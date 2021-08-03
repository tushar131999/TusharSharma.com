var requirement = require("readline-sync");
currentScore = 0;

console.log(
  `---HI THIS IS QUIZ ABOUT ME  !!LET' SEE HOW MUCH YOU KNOW ABOUT ME`
);
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
  question: `Who am I?\n`,
  answer: "tushar sharma",
};
var object2 = {
  question: `Where do I live?
  a:Hyderabad
  b:UP
  c:Delhi\n`,
  answer: "b",
};
var object3 = {
  question: `Where do I work?
  a:UP
  b:Hyderabd\n`,
  answer: "b",
};
var object4 = {
  question: `On which day my birthday fall?
  a: 1st March
  b:13 juLY
  c:12 NOV\n`,
  answer: "A",
};
var object5 = {
  question: `Which of these is my passion?
  a: Gaming
  b:Stories 
  c:Poems\n`,
  answer: "c",
};
var object6 = {
  question: `Which of these I prefer to eat in snacks?
  a: PASTA
  b:PIZZA\n `,
  answer: "a",
};
var object7 = {
  question: `You Like this quiz?
  a:yes
  b:so much
  c:it is the best\n`,
  answer: "c",
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
