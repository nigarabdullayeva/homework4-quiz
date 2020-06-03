// global variables 
var start = document.getElementById ("start");
var quiz = document.getElementById ("quiz");
var question = document.getElementById ("question");
var choiceA = document.getElementById ("btn-a");
var choiceB = document.getElementById ("btn-b");
var choiceC = document.getElementById ("btn-c");
var highscore = document.getElementById ("highscore");
var timerId;



//creating array of questions, answers, correct answer

var questions = [ {
    question:"How select element in CSS with id name?",
     choiceA:"A) .name", 
     choiceB:"B) #name",
     choiceC:"C) name",
     answer: "B"
   },

   { question :"What is a HTML element for line break?",
      choiceA:"A) <br>", 
      choiceB:"B) <break>",
      choiceC:"C) <lb>",
      answer: "A"
   },

   { question :"What punctuation is using for NOT statements?",
      choiceA:"A) ?", 
      choiceB:"B) .",
      choiceC:"C) !",
      answer: "C" 
   },

   { question :"Where is the correct place to link external CSS file?",
      choiceA:"A) inside head tag", 
      choiceB:"B) inside body tag",
      choiceC:"C) inside div tag",
      answer: "A" 
   },  

   { question : "How to declare a variable name in JS??",
      choiceA:"A) variable=NameOne", 
      choiceB:"B) var Name one",
      choiceC:"C) var nameOne",
      answer: "C" 
   },  
]

var lastQuestion = questions.length - 1;
var runningQuestion = 0;

var timer = document.getElementById("time");
var time = questions.length * 15;


function renderQuestion(){
    var q = questions[runningQuestion];

    question.innerHTML = "<p>" + q.question + "</p>";
    choiceA.innerHTML = q.choiceA
    choiceB.innerHTML = q.choiceB
    choiceC.innerHTML = q.choiceC
}

    start.addEventListener("click", startQuiz); 

    function startQuiz() {
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
 }

