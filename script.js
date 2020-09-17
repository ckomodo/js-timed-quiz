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
        question: "Who can learn Javascript?",
        answer1: "College graduates only",
        answer2: "People who are good at math",
        answer3: "Millenials only",
        answer4: "Anyone",
        correctAnswer: "Anyone",
    },
    {
        question: "Where does Javascript run?",
        answer1: "In the browser",
        answer2: "In the keyboard",
        answer3: "In the mouse",
        answer4: "In the tracks",
        correctAnswer: "In the browser",
    },
    {
        question: "Which one is a library of Javascript?",
        answer1: "React",
        answer2: "Google Chrome",
        answer3: "Opera Mini",
        answer4: "HTTPS",
        correctAnswer: "React",
    }
]


var submitButton = document.querySelector("#startTime");
var question = document.querySelector(".question");
var questionTitle = document.querySelector("#question-title");
var answer1 = document.querySelector("#answer1");
var answer2 = document.querySelector("#answer2");
var answer3 = document.querySelector("#answer3");
var answer4 = document.querySelector("#answer4");
var counter = 100;
var timeHolder = document.querySelector("#seconds");
var questionNumIndex = 0;
var scoreHolder = document.querySelector("#score");
var score = 0;
var userInitials = document.querySelector("#userInfo");
var userInfoSave = document.querySelector("#userButton");
var hidePrompt = document.querySelector(".hideInitials")

//hides input at the start of program
hidePrompt.className = "hide";

submitButton.addEventListener("click", function () {
    // Hide the start button
    submitButton.className = "hide";

    // Starts the timer
    timeHolder.textContent = counter + "s";
    timerInterval = setInterval(function () {
        counter--;
        timeHolder.textContent = counter + "s";

        // Ends the timer if the user runs out of time
        if (counter === 0) {
            clearInterval(timerInterval);
        }

    }, 1000);

    // First question displays
    question.classList.remove("hide");
    nextQuestion();
})


function nextQuestion() {
    // TODO: find a way to make the 0 dynamic so that the first time it is 0, second time is 1, third time is 2, so on and so forth




    questionTitle.textContent = questions[questionNumIndex].question;
    answer1.textContent = questions[questionNumIndex].answer1;
    answer2.textContent = questions[questionNumIndex].answer2;
    answer3.textContent = questions[questionNumIndex].answer3;
    answer4.textContent = questions[questionNumIndex].answer4;


    // document.querySelector("#answer3").addEventListener("click"){
    //             alert("right!");
    // }



    // TODO: add event listeners to your answer buttons
    // When clicked, will validate user responses whether right or wrong and display appropriate result
    // And show next question

    // TODO: when you get to the last one, clearInterval


}

question.addEventListener("click", function (event) {
    if (event.target.matches("button")) {
        if (event.target.textContent === questions[questionNumIndex].correctAnswer) {
            alert("Correct");
            score++;
            scoreHolder.textContent = score;
        } else {
            alert("Wrong");
            counter = counter - 10;
        }
        questionNumIndex++;
        if (questionNumIndex === 5) {
            clearInterval(timerInterval);
            question.className = "hide";
            alert("game over!")

        //displays tehe input at the end 
            hidePrompt.className = "display";
        } else {
            nextQuestion()
        }
    }

})

userInfoSave.addEventListener("click", function (event) {
    event.preventDefault();

    var initials = userInitials.value;
    var userScores = [
        {
            initials: initials,
            score: score
        }
    ]
    localStorage.setItem("userScores", JSON.stringify(userScores));

})
