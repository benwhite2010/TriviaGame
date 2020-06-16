// link button with event listener so that when the button is pressed it runs the countdown function

// Initialize the countdown timer
var buttonEl = document.querySelector(".button");
var timeEl = document.querySelector(".timer");
var secondsLeft = 60;
function countDown() {
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.textContent = secondsLeft;
    console.log(secondsLeft);

    if (secondsLeft <= 0) {
      // clearInterval clears the interval to stop the timer at 0 seconds left
      clearInterval(timerInterval);
      // takes in one argument timerInterval
    }
  }, 1000);
  makeQuestion(question1, answers1);
}
// button for starting the countdown
buttonEl.addEventListener("click", countDown);

// create subsections that display answers with event listeners for clicks
var questionEl = document.querySelector(".question");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");
var promptEl = document.querySelector(".prompt");
// store questions and answers in variables
var question1 = "What is the windows equivalent for Terminal?";
var answers1 = ["GitBash", "Firefox", "Node.js", "Spotify"];
var question2 = "What language is used to dynamically interact with html?";
var answers2 = ["C++", "JavaScript", "Spanish", "Sign Language"];
var question3 = "What is your favorite color";
var answers3 = ["Green", "Red", "Yellow", "Blue"];
var trueAnswers = [0, 1, 0];

// create functions for incorrect or correct answers
function buttonPress(buttonIndex) {
  // we need to match the value of the trueAnsers idex with the corresponding button press, if that is untrue, then BETTER STUDY MORE and decrement secondsLeft by 10

  if (questionsAnswered === 0) {
    makeQuestion(question2, answers2);
  } else if (questionsAnswered === 1) {
    makeQuestion(question3, answers3);
  }
  if (trueanswers[questionsAnswered] === buttonIndex) {
    promptEl.textContent = "WELL DONE YA SMARTASS";
  } else {
    promptEl.textContent = "BETTER STUDY MORE";
    secondsLeft -= 10;
  }
}

questionsAnswered++;

console.log("questionsAnswered" + questionsAnswered);

var questionsAnswered = 0;

// here we define the makeQuestion function
// we feed it the parameters for each question and answer
function makeQuestion(question, answers) {
  questionEl.textContent = question;
  answer1El.textContent = answers[0];
  answer2El.textContent = answers[1];
  answer3El.textContent = answers[2];
  answer4El.textContent = answers[3];
}
answer1El.addEventListener("click", () => buttonPress(0));
answer2El.addEventListener("click", () => buttonPress(1));
answer3El.addEventListener("click", () => buttonPress(2));
answer4El.addEventListener("click", () => buttonPress(3));
