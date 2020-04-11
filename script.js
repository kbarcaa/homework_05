// calling variables
var h4Tag = document.getElementById("timeInSeconds");
var startButton = document.getElementById("startButton");
var questionTag = document.getElementById("questions");
var answerTag = document.getElementById("answers");
var messages = document.getElementById("messages");
var firstNameInput = document.getElementById("first-name");
var signUpButton = document.getElementById("sign-up");
var msgDiv = document.getElementById("msg");
var userFirstNameSpan = document.getElementById("user-first-name");
var scoreTag = document.getElementById("scoreTag");
var timeInvertal;
var timeLeft;
var score = 0;

// function that cuts time by 10 sec. Activated when wrong answer button is chosen.
function cutTime (){
  timeLeft -= 10;
}
// function to add score by 10. Activated when correct answer button is chosen.
function addScore (){
  score += 10;
  scoreTag.textContent = score
}
// function to reset score to 0
function resetScore (){
  score = 0;
  scoreTag.textContent = score
}
// function to clear our quetions, answers, and messages for next questions to appear.
function reset (){
  questionTag.textContent = "";
  answerTag.textContent = "";
  messages.textContent = "";
};
// function to display final message & alert message & and it will stop time
function showFinalMsg(){
  reset();
  questionTag.textContent = "Good Job! You pass the quiz!";
  clearInterval(timeInvertal);
}


// name sign up section of the page
// function to catch "blank" as a name. Activate message IF left blank.
function displayMessage(type, message){
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

signUpButton.addEventListener("click", function(event){
  event.preventDefault();
  var user = {
    firstName: firstNameInput.value.trim(),
  };

  if(user.firstName === ""){
    displayMessage("error", "Name cannot be blank");
  } else {
    displayMessage("Success", "Registered!")
  }
  console.log(user);
  localStorage.setItem("user", JSON.stringify(user));
  var lastUser = JSON.parse(localStorage.getItem("user"));
  userFirstNameSpan.textContent = lastUser.firstName;
})

// function to start timer and activate function to show Question 1
function startingQuiz (event){
  event.preventDefault();
  reset();
  resetScore();
  
  timeLeft = 100;
  timeInvertal = setInterval(function(){
    h4Tag.textContent = "Time remaining: " + timeLeft;
    timeLeft--;

    if (timeLeft <= 0){
      reset();
      messages.textContent = "Game Over!";
      clearInterval(timeInvertal);
      h4Tag.textContent = "";
    }
  }, 1000);
  showQuestion1();
}

// activating start button
startButton.addEventListener("click", startingQuiz);

// function to display Question 1
function showQuestion1 () {
  questionTag.textContent = "Question 1: What is DOM?";

  // answer button 1
  var answer1Button = document.createElement("button");
  answer1Button.textContent = "Dominos' Order Menu";
  answerTag.appendChild(answer1Button);
  // function to show incorrect message
  answer1Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
  })
  // answer button 2
  var answer2Button = document.createElement("button");
  answer2Button.textContent = "Doctrine of Monarch";
  answerTag.appendChild(answer2Button);
  // function to show incorrect message
  answer2Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
  })
  // answer button 3
  var answer3Button = document.createElement("button");
  answer3Button.textContent = "Doughnut on Milk";
  answerTag.appendChild(answer3Button);
  // function to show incorrect message
  answer3Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
  })
  // answer button 4
  var answer4Button = document.createElement("button");
  answer4Button.textContent = "Document Object Model";
  answerTag.appendChild(answer4Button);
  // function to show correct message and show Question 2
  answer4Button.addEventListener("click", function(){
    messages.textContent = "Correct!";
    addScore();
    showQuestion2();
  })
}

// function to display Question 2
function showQuestion2 () {
  // running a reset function to clear out previous q & a
  reset();
  questionTag.textContent = "Question 2: Which of the following represents an Array?";

  // answer button 1
  var answer1Button = document.createElement("button");
  answer1Button.textContent = "ET, phone , home";
  answerTag.appendChild(answer1Button);
  // function to show incorrect message
  answer1Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
  })
  // answer button 2
  var answer2Button = document.createElement("button");
  answer2Button.textContent = "{ET, phone, home}";
  answerTag.appendChild(answer2Button);
  // function to show incorrect message
    answer2Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
  })
  // answer button 3
  var answer3Button = document.createElement("button");
  answer3Button.textContent = "[ET, phone, home]";
  answerTag.appendChild(answer3Button); 
  // function to show correct message and show Question 3
  answer3Button.addEventListener("click", function(){
    messages.textContent = "Corret!";
    showQuestion3();
    addScore();
  })
  // answer button 4
  var answer4Button = document.createElement("button");
  answer4Button.textContent = "(ET, phone, home)";
  answerTag.appendChild(answer4Button);
  // function to show incorrect message
  answer4Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
  }) 
}

// function to display Question 3
function showQuestion3 () {
  // running a reset function to clear out previous q & a
  reset();
  questionTag.textContent = "Question 3: What does 'var' stand for?";
  
  // answer button 1
  var answer1Button = document.createElement("button");
  answer1Button.textContent = "variable";
  answerTag.appendChild(answer1Button);
  // function to show correct message and show Final message
  answer1Button.addEventListener("click", function(){
    messages.textContent = "Correct!";
    showFinalMsg();
    addScore();
  })
  // answer button 2
  var answer2Button = document.createElement("button");
  answer2Button.textContent = "various";
  answerTag.appendChild(answer2Button);
  // function to show incorrect message
  answer2Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
  })
  // answer button 3
  var answer3Button = document.createElement("button");
  answer3Button.textContent = "Von Arthur Ramsey";
  answerTag.appendChild(answer3Button);
  // function to show incorrect message
  answer3Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
  })
  // answer button 4
  var answer4Button = document.createElement("button");
  answer4Button.textContent = "Video Assistant Refree";
  answerTag.appendChild(answer4Button);
  // function to show incorrect message
  answer4Button.addEventListener("click", function(){
    messages.textContent = "Soccer <3. No Cut time for this selection.Try again";
  }) 
};


// attemt at object.Array looping

// creating questionArray


// function showQuestion1 () {
//   var problemSet = [
//       {question: "What is the DOM?", answers: [
//       {text: "A puppy", isCorrect: false },
//       {text: "A cat?", isCorrect: false },
//       {text: "A bird?", isCorrect: false},
//       {text: "The answer?", isCorrect: true}
//     ]},

//   ];
  
//   for (i = 0; i < problemSet.length; i++){

//     var currentQuestionObj = problemSet[i].question;
//     console.log(currentQuestionObj);

//     var theQuestion = currentQuestionObj.question;
//     var allAnswers = currentQuestionObj.answers;
    
//     console.log(allAnswers);
//     //loop through the answers

//     for (j = 0; j < problemSet.length; j++){
      
//       var currentAnswers = JSON.stringify(problemSet[j].answers);
//       console.log(currentAnswers);


//       questionTag.textContent = currentQuestionObj ;
//       answerTag.textContent = currentAnswers;
//      }
//   }

// }





































