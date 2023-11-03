const questions = [
    {
        question : "which is the largest animal in the world",
        answers: [
            {text:'Shark', correct: false},
            {text:'Elephant', correct: false},
            {text:'Blue Whale', correct: true},
            {text:'Python', correct: false}
        ]
    },
    {
        question : "which is the largest continent in the world",
        answers: [
            {text:'Asia', correct: true},
            {text:'Africa', correct: false},
            {text:'Australia', correct: true},
            {text:'N America', correct: false}
        ]
    },{
        question : "which is the snallest continent in the world",
        answers: [
            {text:'Asia', correct: false},
            {text:'Africa', correct: false},
            {text:'Australia', correct: true},
            {text:'N America', correct: false}
        ]
    },
    {
        question : "What is the capital of India? ",
        answers: [
            {text:'Patna', correct: false},
            {text:'Mumbai', correct: false},
            {text:'Kolkata', correct: true},
            {text:'New Delhi', correct: true}
        ]
    }
   
];
const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = 'Next';
    showQuestions();

}
function showQuestions(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex+1;
    questionElement.innerHTML = questionNo  + '. ' +currentQuestion.question;

    currentQuestion.answers.forEach(answer =>{
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click' , selectAnswer);
    });

}

function resetState(){
 nextButton.style.display = 'none'
 while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild)
 }
}

function selectAnswer(e){
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === 'true';
    if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
    }
    else{
        selectBtn.classList.add('incorrect');
    }
    Array.from(answerButtons.children).forEach(button =>{
        if(button.dataset.correct === 'true'){
            button.classList.add('correct')

        }
        button.disabled = true;
    });
    nextButton.style.display = 'block'
}

function showScore(){
    resetState();
    questionElement.innerHTML = `You have scored ${score} out of ${questions.length}`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = 'block' 
}
function handlenextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex<questions.length){
        showQuestions();
    }else{
        showScore();
    }
}

nextButton.addEventListener('click' ,()=>{
    if(currentQuestionIndex<questions.length){
        handlenextButton();
    }else{
        startQuiz();
    }
})

startQuiz();




