// calling variables
var h4Tag = document.getElementById("timeInSeconds");
var startButton = document.getElementById("startButton");
var questionTag = document.getElementById("questions");
var answerTag = document.getElementById("answers");
var messages = document.getElementById("messages");

// creating a count down timer function
function startingQuiz (){
  var timeLeft = 100;
  var timeInvertal = setInterval(function(){
    h4Tag.textContent = "Time remaining: " + timeLeft;
    timeLeft--;

    if (timeLeft === -2){
      h4Tag.textContent = "Game Over!";
      clearInterval(timeInvertal);
    }
  }, 1000)
  showQuestion1()
}
// activating start button
startButton.addEventListener("click", startingQuiz);


function reset (){

  questionTag.textContent = "";
  answerTag.textContent = "";
  messages.textContent = "";
};


//creating showQuestion1 function

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
  })

  // answer choice button 2
  var answer2Button = document.createElement("button");
  answer2Button.textContent = "Doctrine of Monarch";
  answerTag.appendChild(answer2Button);
  
  // creating event listener "click" to display wrong message and cut time.
  answer2Button.addEventListener("click", function(){
  messages.textContent = "Incorrect! Please try again.";
  })


  // answer choice button 3
  var answer3Button = document.createElement("button");
  answer3Button.textContent = "Doughnut on Milk";
  answerTag.appendChild(answer3Button);
  
  // creating event listener "click" to display wrong message and cut time.
  answer3Button.addEventListener("click", function(){
  messages.textContent = "Incorrect! Please try again.";
  })

  // answer choice button 4
  var answer4Button = document.createElement("button");
  answer4Button.textContent = "Document Object Model";
  answerTag.appendChild(answer4Button);

  // creating event listener "click" to display wrong message and cut time.
  answer4Button.addEventListener("click", function(){
    messages.textContent = "Correct!";
    showQuestion2()
  })

}
// Question 2
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
    })
  
    // answer choice button 2
    var answer2Button = document.createElement("button");
    answer2Button.textContent = "{ET, phone, home}";
    answerTag.appendChild(answer2Button);
    
    // creating event listener "click" to display wrong message and cut time.
    answer2Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    })
  
  
    // answer choice button 3
    var answer3Button = document.createElement("button");
    answer3Button.textContent = "[ET, phone, home]";
    answerTag.appendChild(answer3Button);
    
    // creating event listener "click" to display wrong message and cut time.
    answer3Button.addEventListener("click", function(){
    messages.textContent = "Corret!";
    showQuestion3()
    })
  
    // answer choice button 4
    var answer4Button = document.createElement("button");
    answer4Button.textContent = "(ET, phone, home)";
    answerTag.appendChild(answer4Button);
  
    // creating event listener "click" to display wrong message and cut time.
    answer4Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    }) 
}
// Question 3
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
    showQuestion4()
    })
  
    // answer choice button 2
    var answer2Button = document.createElement("button");
    answer2Button.textContent = "various";
    answerTag.appendChild(answer2Button);
    
    // creating event listener "click" to display wrong message and cut time.
    answer2Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    })
  
  
    // answer choice button 3
    var answer3Button = document.createElement("button");
    answer3Button.textContent = "Von Arthur Ramsey";
    answerTag.appendChild(answer3Button);
    
    // creating event listener "click" to display wrong message and cut time.
    answer3Button.addEventListener("click", function(){
    messages.textContent = "Incorrect! Please try again.";
    })
  
    // answer choice button 4
    var answer4Button = document.createElement("button");
    answer4Button.textContent = "Video Assistant Refree";
    answerTag.appendChild(answer4Button);
  
    // creating event listener "click" to display wrong message and cut time.
    answer4Button.addEventListener("click", function(){
    messages.textContent = "Soccer <3. But No. Sorry try again";
    }) 
}







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





































