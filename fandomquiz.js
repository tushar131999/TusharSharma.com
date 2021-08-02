var requirement = require("readline-sync");
currentScore = 0;
function checkAnswer(myquestion, myanswer) {
  var newName = requirement.question(myquestion.UpperCase);
  console.log(newName);
  if (newName === myanswer.UpperCase) {
    console.log("You are right");
    currentScore = currentScore + 1;
  } else {
    console.log("You are wrong");
    currentScore = currentScore - 1;
  }
  console.log("Current Score", +currentScore);
}
var object1 = {
  question: "Your Name Please?",
  answer: "Tushar Sharma",
};
var object2 = {
  question: "You like Superheroes?",
  answer: "yes",
};
var object3 = {
  question: "Marvel OR DC?",
  answer: "Marvel",
};
var object4 = {
  question: "Your Favorite superhero?",
  answer: "Thor",
};
var object5 = {
  question: "His Weapon?",
  answer: "Mjonir",
};
var object6 = {
  question: "His Empire",
  answer: "Asguard",
};
var object7 = {
  question: "Better than Thanos?",
  answer: "No",
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
    highscore: "6",
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
