//I collaborated on this project with my study group: John Coakley, Jessica Guico and Jason Xie. There will be similarities between our code.
var timeEl = document.querySelector("#time");
var secondsLeft = 60;
var mainEl = document.querySelector('#main');
var startButton = document.querySelector('#start');
//Each question is an object consisting of a question, 4 answers and a correct answer value.
var question1 = { question: "placeholder 1", choices:["A: placeholder", "B: placeholder", "C: placeholder", "D: placeholder"], answer: "A" }
var question2 = { question: "placeholder 2", choices:["A: placeholder", "B: placeholder", "C: placeholder", "D: placeholder"], answer: "A" }
var question3 = { question: "placeholder 3", choices:["A: placeholder", "B: placeholder", "C: placeholder", "D: placeholder"], answer: "A" }
var question4 = { question: "placeholder 4", choices:["A: placeholder", "B: placeholder", "C: placeholder", "D: placeholder"], answer: "A" }
var question5 = { question: "placeholder 5", choices:["A: placeholder", "B: placeholder", "C: placeholder", "D: placeholder"], answer: "A" }
//Questions are randomly selected using the following array and function
var questionSet = [question1, question2, question3, question4, question5]
var currentQuestion = questionSet[Math.floor(Math.random() * questionSet.length)];
console.log (currentQuestion.choices)

function setQuestion() {
    title.textContent = currentQuestion.question;
    document.querySelector('p').textContent = '';
    setChoices();
   
}




function startGame() {
    setTime();
    console.log("game start");
    setQuestion();
    startButton.remove;
  
}

startButton.addEventListener("click", startGame)

    


function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining";

        if(secondsLeft < 1) {
            clearInterval(timerInterval);
            sendMessage(); //This function will end game and display results
        }
    }, 1000); //timer interval in ms
}

// setTime()
// console.log(secondsLeft)

function sendMessage(){
   var loserMessage = document.createElement("h1");
   loserMessage.textContent = "LOSER!!!"
   mainEl.appendChild(loserMessage);
}