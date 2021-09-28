var timeEl = document.querySelector("#time");
var secondsLeft = 60;
var mainEl = document.querySelector('#main');
var startButton = document.querySelector('#start');
//Each question is an object consisting of a question, 4 answers and a correct answer value.
var question1 = { question: "placeholder 1", options:["A", "B", "C", "D"], answer: "A" }
var question2 = { question: "placeholder 2", options:["A", "B", "C", "D"], answer: "A" }
var question3 = { question: "placeholder 3", options:["A", "B", "C", "D"], answer: "A" }
var question4 = { question: "placeholder 4", options:["A", "B", "C", "D"], answer: "A" }
var question5 = { question: "placeholder 5", options:["A", "B", "C", "D"], answer: "A" }
//Questions are randomly selected using the following array and function
var questionSet = [question1, question2, question3, question4, question5]
var userChoice = '';
//This function selects a random question from the set, then saves it as a variable and removes that question from the array to prevent questions from repeating
function getCurrentQuestion(){ 
    var randomNum = Math.floor(Math.random() * questionSet.length)
    var selectedQuestion = questionSet[randomNum];
    questionSet.splice(randomNum, 1);
    return selectedQuestion;
     }


// Creates a new p element and assigns the content of the current question to it before appending it to make it visible
function setQuestion(currentQuestion) {
    var onScreenQuestion = document.createElement('p');
    onScreenQuestion.textContent = currentQuestion.question;
    document.getElementById('options').appendChild(onScreenQuestion);
    console.log(onScreenQuestion)
       
    }
    //This for loop generates a button for each option within the current question
function setOptions(currentQuestion) {
    for(var i=0; i<currentQuestion.options.length; i++) {
        optionButton = document.createElement('button');
        document.querySelector("#options").appendChild(optionButton);
        optionButton.setAttribute("id",currentQuestion.options[i]);
        optionButton.textContent = currentQuestion.options[i];
        console.log(optionButton);
    };

   //These functions send messages to user and are called based on game results
function sendLoserMessage(){
    mainEl.innerHTML = '';
    var loserMessage = document.createElement("h1");
    loserMessage.textContent = "LOSER!!!"
    mainEl.appendChild(loserMessage);
 }
 function sendWinnerMessage(){
     mainEl.innerHTML = '';
     var winnerMessage = document.createElement('h1');
     winnerMessage.textContent = "You win!"
     mainEl.appendChild(winnerMessage);
 }
 
 function sendCorrectAnswerMessage(){
     var correctAnswerMessage = document.createElement('h1');
     correctAnswerMessage.textContent = "Correct Answer!"
     mainEl.appendChild(correctAnswerMessage);
 }
 
 function sendIncorrectAnswerMessage(){
     var incorrectAnswerMessage = document.createElement('h1');
     incorrectAnswerMessage.textContent = "Incorrect Answer!"
     mainEl.appendChild(incorrectAnswerMessage);
 }


    function checkAnswer(currentQuestion) {
        if (userChoice == currentQuestion.answer) {
            console.log('correct');
            document.getElementById('options').innerHTML = '';
            var newQuestion = getCurrentQuestion();
            sendCorrectAnswerMessage();
            setQuestion(newQuestion);
            setOptions(newQuestion);
        }
        else {
            sendIncorrectAnswerMessage();
            secondsLeft = secondsLeft - 5;
        }
    }

    

    var optionA = document.getElementById("A");
    var optionB = document.getElementById("B");
    var optionC = document.getElementById("C");
    var optionD = document.getElementById("D");
//These event listeners will set userChoice equal to the value of the option button clicked and run the checkAnswer function, which will compare to the correct answer stored in the question object.
    optionA.addEventListener("click", function(){
        userChoice='A';
        checkAnswer(currentQuestion);
    });
    optionB.addEventListener("click", function(){
        userChoice='B';
        checkAnswer(currentQuestion);
    });
    optionC.addEventListener("click", function(){
        userChoice='C';
        checkAnswer(currentQuestion);
    });
    optionD.addEventListener("click", function(){
        userChoice='D';
        checkAnswer(currentQuestion);
    });
}





function startGame() {
    var question = getCurrentQuestion();
    setTime();
    console.log("game start");
    setQuestion(question);
    startButton.remove();
    setOptions(question);
  
}

startButton.addEventListener("click", startGame)

    


function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining";

        
    }, 1000); //timer interval in ms
}


