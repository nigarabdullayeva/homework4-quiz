

var questions = [ {

   quest: "How select element in CSS with id name?",
   choices: [".name", "#name", "name"],
   answer: "First"
},
{
   quest: "What is a HTML element for line break?",
   choices: ["<br>", "<break>", "<lb>"],
   answer: "<br>"
},
{
   quest: "What punctuation is using for NOT statements?",
   choices: ["?", "!", "."],
   answer: "!"
},
{
   quest: "Where is the correct place to link external CSS file?",
   choices: ["inside head tag", "inside body tag", "inside div tag"],
   answer: "inside head tag"
},
{
   quest: "How to declare a variable name in JS??",
   choices: ["variable=NameOne"," var Name one", "var nameOne"],
   answer: "var nameOne"
}
];

// button variables 
startBtn = document.getElementById("start-button");
highscoreBtn = document.getElementById("highscore");
timerSpan = document.getElementById("timerSpan");
goBackBtn = document.getElementById("goBackBtn");
clearBtn = document.getElementById("clearBtn");
quizDiv = document.getElementById("question");
answerCheckDiv = document.getElementById("answerChoice");
questionBtns = document.getElementById("choice");




// addInitialsId = document.getElementById("addInitialsId");
// highScoresDiv = document.getElementById("highScoreWrapper");
// scoreWrapper = document.getElementById("scoreWrapper");

// highScoreItemsDiv = document.querySelector(".listOfScores");
// listOfScoresDiv = document.querySelector(".listOfScores");


var highScores = [];
questionIndex = 0;
correctAnswers = 0;
timerTotal = 75;
timeElapsed = 0;
var time;



startBtn.addEventListener("click", function (event) {
   event.preventDefault()
   start.style.display = "none";
   quiz.style.display = "block";
   createBtns();
   startTimer();
});

   questionBtns.addEventListener("click", function (event) {
     // event.stopPropagation();
      checkAnswer(event);

      if (questionIndex == questions.length) {
         displayScore();
      } else {
         createBtns(event);
      }
      return
   });

function startTimer() {
   time = setInterval(function () {
       var totalSecondsLeft = timerTotal - timeElapsed;
       var minutesLeft = Math.floor(totalSecondsLeft / 60);
       var secondsLeft = totalSecondsLeft % 60;
       var formattedSeconds;
       var formattedMinutes;

       if (timeElapsed > timerTotal) {
           clearInterval(time);
           timerSpan.innerHTML = "No more time left!"
           displayScore();
           return
       }
       timeElapsed++;
       if (secondsLeft < 10) {
           formattedSeconds = "0" + secondsLeft;
       } else {
           formattedSeconds = secondsLeft;
       }

       if (minutesLeft < 10) {
           formattedMinutes = "0" + minutesLeft;
       } else {
           formattedMinutes = minutesLeft;
       }

       timerSpan.innerHTML = formattedMinutes + ":" + formattedSeconds;
   }, 1000) 
}
    
 function createBtns(event) { 
   questionBtns.innerHTML = "";
    quizDiv.innerHTML = "";

    quizDiv.innerHTML = "<p>" + questions[questionIndex].quest + "<p>";

    for (var i = 0; i < questions[questionIndex].choices.length; i++) {
        var listItem = document.createElement('span');
        listItem.innerHTML = "<button >" + questions[questionIndex].choices[i] + "</button>";
        questionBtns.appendChild(listItem);
    }
    questionIndex++;
    return
    };

   function checkAnswer(event) {
   answerCheckDiv.innerHTML = "";
      
      var listItem = "";
      var listItem = document.createElement('div');
      var result;
  
      if (event.target.innerHTML === questions[questionIndex - 1].answer) {
          result = "Correct";
          correctAnswers++;
          console.log(correctAnswers, "checkanswer");
      } else {
          result = "Wrong!";
      }
   }
  
   function displayScore() {
      quiz.style.display = "none";
      lastpage.style.display = "block";
      document.getElementById("answerTotal").innerHTML = " " + correctAnswers + " ";
      clearInterval(time);
  
  }




