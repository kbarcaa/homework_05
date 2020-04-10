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
// starting time
var timeInvertal;
var timeLeft;
// starting score
var score = 0;



// function to catch "blank" as a name. & activate message IF left blank.
function displayMessage(type, message){
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}
// NAME sign up part
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



// function to start timer. & It will activate function to show question 1
function startingQuiz (){
  resetScore();
  timeLeft = 50;
  timeInvertal = setInterval(function(){
    h4Tag.textContent = "Time remaining: " + timeLeft;
    timeLeft--;

    if (timeLeft <= 0){
      reset();
      messages.textContent = "Game Over!";
      clearInterval(timeInvertal);
      h4Tag.textContent = "";
    }
  }, 1000)
  showQuestion1()
}



// activating start button
startButton.addEventListener("click", startingQuiz);

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






// function to display 1st question
function showQuestion1 () {

  questionTag.textContent = "Question 1: What is DOM?";
// answer buttons
  // answer choice button 1
  var answer1Button = document.createElement("button");
  answer1Button.textContent = "Dominos' Order Menu";
  answerTag.appendChild(answer1Button);
  // creating event listener "click" to display wrong message and cut time.
  answer1Button.addEventListener("click", function(){
  messages.textContent = "Incorrect! Please try again.";
  cutTime();
  })

  // answer choice button 2
  var answer2Button = document.createElement("button");
  answer2Button.textContent = "Doctrine of Monarch";
  answerTag.appendChild(answer2Button);
  // creating event listener "click" to display wrong message and cut time.
  answer2Button.addEventListener("click", function(){
  messages.textContent = "Incorrect! Please try again.";
  cutTime();
  })

  // answer choice button 3
  var answer3Button = document.createElement("button");
  answer3Button.textContent = "Doughnut on Milk";
  answerTag.appendChild(answer3Button);
  // creating event listener "click" to display wrong message and cut time.
  answer3Button.addEventListener("click", function(){
  messages.textContent = "Incorrect! Please try again.";
  cutTime();
  })

  // answer choice button 4
  var answer4Button = document.createElement("button");
  answer4Button.textContent = "Document Object Model";
  answerTag.appendChild(answer4Button);
  // creating event listener "click" to display wrong message and cut time.
  answer4Button.addEventListener("click", function(event){
    event.preventDefault();
    messages.textContent = "Correct!";
    addScore();
    showQuestion2()
  })

}
// function to display 2nd question
function showQuestion2 () {
  // running a reset function to clear out previous stuff
  reset();

    questionTag.textContent = "Question 2: Which of the following represents an Array?";
  // answer buttons
    // answer choice button 1
    var answer1Button = document.createElement("button");
    answer1Button.textContent = "ET, phone , home";
    answerTag.appendChild(answer1Button);
  
    // creating event listener "click" to display wrong message and cut time.
    answer1Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
    })
  
    // answer choice button 2
    var answer2Button = document.createElement("button");
    answer2Button.textContent = "{ET, phone, home}";
    answerTag.appendChild(answer2Button);
    
    // creating event listener "click" to display wrong message and cut time.
    answer2Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
    })
  
    // answer choice button 3
    var answer3Button = document.createElement("button");
    answer3Button.textContent = "[ET, phone, home]";
    answerTag.appendChild(answer3Button);
    
    // creating event listener "click" to display wrong message and cut time.
    answer3Button.addEventListener("click", function(){
    messages.textContent = "Corret!";
    showQuestion3();
    addScore();
    })
  
    // answer choice button 4
    var answer4Button = document.createElement("button");
    answer4Button.textContent = "(ET, phone, home)";
    answerTag.appendChild(answer4Button);
  
    // creating event listener "click" to display wrong message and cut time.
    answer4Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
    }) 
}
// function to display 3rd question
function showQuestion3 () {
  // running a reset function to clear out previous stuff
  reset();

    questionTag.textContent = "Question 3: What does 'var' stand for?";
  // answer buttons
    // answer choice button 1
    var answer1Button = document.createElement("button");
    answer1Button.textContent = "variable";
    answerTag.appendChild(answer1Button);
  
    // creating event listener "click" to display wrong message and cut time.
    answer1Button.addEventListener("click", function(){
    messages.textContent = "Correct!";
    showFinalMsg();
    addScore();
    })
  
    // answer choice button 2
    var answer2Button = document.createElement("button");
    answer2Button.textContent = "various";
    answerTag.appendChild(answer2Button);
    
    // creating event listener "click" to display wrong message and cut time.
    answer2Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
    })

    // answer choice button 3
    var answer3Button = document.createElement("button");
    answer3Button.textContent = "Von Arthur Ramsey";
    answerTag.appendChild(answer3Button);
    
    // creating event listener "click" to display wrong message and cut time.
    answer3Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    cutTime();
    })
  
    // answer choice button 4
    var answer4Button = document.createElement("button");
    answer4Button.textContent = "Video Assistant Refree";
    answerTag.appendChild(answer4Button);
  
    // creating event listener "click" to display wrong message and cut time.
    answer4Button.addEventListener("click", function(){
    messages.textContent = "Soccer <3. No Cut time for this selection.Try again";
    }) 
};









// calling nextButton and activating it

// var nextButton = document.getElementById("nextButton");
// nextButton.addEventListener("click", function(event));

// gonna make a function showQuestions to show up questions

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





































