const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById("next-btn")
let questionContainerEl = document.getElementById("question-holder")

const questionEl = document.getElementById("question");
const answerButtonEl = document.getElementById("answers")

// questions that should show up once code is up and running
const questions = [
    {
        question: 'Commonly used data types DO Not include:',
        answers: [
            {text: 'alerts', correct: true},
            {text: 'Booleans', correct: false},
            {text: 'numbers', correct: false},
            {text: 'strings', correct: false}
        ]
    }
]

// adds a hide id to to the start button and removes other hide id's so questions and answers can populate
function addingRemoving() {
    var questionEl = document.getElementById("question-holder")
    questionEl.classList.remove("hide")
    startButton.classList.add("hide")
    nextButton.classList.remove("hide")
}

//  starts quiz
function startQuiz() {
    console.log("quiz start")
    addingRemoving()

    sendNextQuestion()
    showNextQuestion()
    // countdown()

    timer();
}

function sendNextQuestion() {
    showNextQuestion()
}

function showNextQuestion() {
    questionEl.innerHTML = questions.question;
}

function chooseAnswer() {

}

// var countdown = function() {
//     console.log(counter);
//     counter--;
//     if(counter === 0) {
//         console.log('end of quizz')
//         clearInterval(beginCountdown)
//     }
    
// }

// function beginCountdown() {
//     setInterval(countdown, 1000);
    
// }
// timer that shows up on html and change html to highscore html when timer is done
function timer() {
    var counter = 4;
    var currentTimer = setInterval(function() {
      document.getElementById("testTest").innerHTML = counter;
      counter--;
      if (counter < 0) {
        //   once timer hits 0 clearinterval will stop the timer so it doesnt go into the negative
        clearInterval(currentTimer);
        document.getElementById("testTest").style.color = "red";
        // after timer hits 0 then the page will change to highscores html
        window.location.href="hightscores.html"
      }
    }, 1000);
  }


startButton.addEventListener("click", startQuiz)