function checkAnswers(){
    var answer1 = document.timeQuiz.question1.value
    var answer2 = document.timeQuiz.question2.value
    var answer3 = document.timeQuiz.question3.value
    var correctAnswers = 0
    if(answer1 == 'Thomas Jefferson' || answer1 == 'thomas jefferson'){
        console.log('hell yeah');
        correctAnswers++;
    }
    if(answer2 == 'Planck Time'){
        console.log('yup')
        correctAnswers++    
    }
    if(answer3 == 'Colorado'){
        console.log('yes') 
        correctAnswers++
    }
    document.getElementById('resultbox').innerHTML= 'You got '+ correctAnswers + ' correct!'
    document.getElementById('timebox').style.visibility='hidden'

}

document.getElementById('submitButton').addEventListener('click',checkAnswers)

var timeLeft= 20
function countDown() {
    timeLeft--;
    document.getElementById('timebox').innerHTML= 'You have ' + timeLeft + ' seconds left'
    if(timeLeft < 0){
        checkAnswers();
        document.getElementById('timebox').style.visibility='hidden'
    }

}


function run(){
    clearInterval(timer);
   var timer = setInterval(countDown,1000)

}
run();
