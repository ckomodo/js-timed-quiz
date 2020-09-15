//TODO:have buttons - start, 
//TODO: have a timer and display it somewhere on screen
//TODO: have questions display one at a time
//TODO: show multiple choices 
//TODO: validate user responses whether right or wrong and display appropriate result
//TODO: if answer is wrong, reduce timer by 10 secs
//TODO: end game when all questions are answered or timer reaches zero (clearInterval(timerInterval))
//TODO: display user's total score
//TODO: user saves initials and score when game ends


// var question1 = ["Javascript and Java are the same"]
// var question2 = ["Can Javascript run on a mobile device?"]
// console.log(question1);

var questions = [
    {
        question: "Is Javascript the same as Java?",
        answer1: "They are not real",
        answer2: "Yes",
        answer3: "No",
        answer4: "They can be the same if you want",
        correctAnswer: "No",
    },
    {
        question: "Which one of these devices can Javascript not run on?",
        answer1: "Web-enabled mobile devices",
        answer2: "iMac computers",
        answer3: "HP desktop computer",
        answer4: "Beats by Dre Headphones",
        correctAnswer: "Beats by Dre Headphones",
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
    },
    {
        question: "",
        answer1: "",
        answer2: "",
        answer3: "",
        answer4: "",
        correctAnswer: "",
    }
]
console.log(questions)


var submitButton = document.querySelector("#startTime");
var question = document.querySelector(".question");
var questionTitle = document.querySelector("#question-title");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var counter = 100;
var timerInterval;
var wrongAnswer = document.querySelector(".wrongAns");
var correctAnswer = document.querySelector(".correctAns");
var points = document.querySelector("#score");
var questionNum = [0];

submitButton.addEventListener("click", function(){
    // Hide the start button
    submitButton.className = "hide";

    // Starts the timer
    timerInterval = setInterval(function() {
        document.querySelector("#seconds").textContent = counter + "s";
        counter--;
    
        // Ends the timer if the user runs out of time
        if(counter === 0) {
          clearInterval(timerInterval);
          //sendMessage();
        }
    
      }, 1000);
    
    // First question displays
    question.classList.remove("hide");
    nextQuestion();
})


function nextQuestion() {
    // TODO: find a way to make the 0 dynamic so that the first time it is 0, second time is 1, third time is 2, so on and so forth
    questionNum++;
    
    
    
    questionTitle.textContent = questions[questionNum].question;
    answer1.textContent = questions[questionNum].answer1;
    answer2.textContent = questions[questionNum].answer2;
    answer3.textContent = questions[questionNum].answer3;
    answer4.textContent = questions[questionNum].answer4;


    // document.querySelector("#answer3").addEventListener("click"){
    //             alert("right!");
    // }

 

    // TODO: add event listeners to your answer buttons
    // When clicked, will validate user responses whether right or wrong and display appropriate result
    // And show next question

    // TODO: when you get to the last one, clearInterval


}

// incorrectAns();
function incorrectAns (){
    wrongAnswer.textContent = "Wrong Answer!"
}
wrongAnswer.addEventListener("click", incorrectAns);
//correctAns ();
function rightAnswer (){
    correctAnswer = document.querySelector(".correctAns").textContent = "Correct Answer!"
}
correctAnswer.addEventListener("click", rightAnswer);


// function scoreTab (){
//     points.textContent = count;
// }

