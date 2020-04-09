// calling variables

var h4Tag = document.getElementById("timeInSeconds");

var buttonTag = document.getElementById("startButton");


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



  
  

}


// activating start button

buttonTag.addEventListener("click", startingQuiz)


