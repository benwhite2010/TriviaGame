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
}

buttonEl.addEventListener("click", countDown);
// create a section that displays a question
// create subsections that display answers with event listeners for clicks
// on correct guess, increment score by 1
// on incorrect guess, decrement secondsLeft by 5
var questionEl = document.querySelector(".question");
var answer1El = document.querySelector(".answer1");
var answer2El = document.querySelector(".answer2");
var answer3El = document.querySelector(".answer3");
var answer4El = document.querySelector(".answer4");
var promptEl = document.querySelector(".prompt");

var question1 = "What is the windows equivalent for Terminal?";
var answers1 = ["GitBash", "Firefox", "Node.js", "Spotify"];
var question2 = "What language is used to dynamically interact with html?";
var answers2 = ["C++", "JavaScript", "Spanish", "Sign Language"];
var question3 = "What is your favorite color";
var answers3 = ["Green", "Red", "Yellow", "Blue"];

function correct() {
  promptEl.textContent = "You're sooooooooooo smart";
}
function incorrect() {
  promptEl.textContent = "WRONG LOSER";
}
function makeQuestion1() {
  questionEl.textContent = question1;
  answer1El.textContent = answers1[0];
  answer2El.textContent = answers1[1];
  answer3El.textContent = answers1[2];
  answer4El.textContent = answers1[3];

  answer1El.addEventListener("click", correct);
  answer2El.addEventListener("click", incorrect);
  answer3El.addEventListener("click", incorrect);
  answer4El.addEventListener("click", incorrect);
}
