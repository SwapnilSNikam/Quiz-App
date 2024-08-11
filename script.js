const questions = [
    {
        question: "A sum of money is to be distributed among A, B, C, D in the proportion of 5 : 2 : 4 : 3. If C gets Rs. 1000 more than D, what is B's share?",
        answers: [
            {text:"Rs. 500", correct:false},
            {text:"Rs. 1500", correct:false},
            {text:"Rs. 2000", correct:true},
            {text:"None of these", correct:false},
    
        ]
    },
    {
        question: "A and B invest in a business in the ratio 3 : 2. If 5% of the total profit goes to charity and A's share is Rs. 855, the total profit is:?",
        answers: [
            {text:"Rs. 1425", correct:false},
            {text:"Rs. 1500", correct:true},
            {text:"Rs. 1537.50", correct:false},
            {text:"Rs. 1576", correct:false},
    
        ]
    },
    {
        question: "A fruit seller had some apples. He sells 40% apples and still has 420 apples. Originally, he had:?",
        answers: [
            {text:"588 apples", correct:false},
            {text:"600 apples", correct:false},
            {text:"672 apples", correct:false},
            {text:"700 apples", correct:true},
    
        ]
    },
    {
        question: "The cost price of 20 articles is the same as the selling price of x articles. If the profit is 25%, then the value of x is:?",
        answers: [
            {text:"15", correct:false},
            {text:"16", correct:true},
            {text:"18", correct:false},
            {text:"25", correct:false},
    
        ]
    },{
        question: "If a person walks at 14 km/hr instead of 10 km/hr, he would have walked 20 km more. The actual distance travelled by him is:?",
        answers: [
            {text:"50", correct:true},
            {text:"56", correct:false},
            {text:"80", correct:false},
            {text:"70", correct:false},
    
        ]
    },
    
    { 
        question: "Materials with lots of free electrons are called?",
        answers: [
            {text:"conductors", correct:true},
            {text:"insulators", correct:false},
            {text:"semiconductors", correct:false},
            {text:"filters", correct:false},
    
        ]
    },
    {
        question: "An electric heater draws 3.5 A from a 110 V source. The resistance of the heating element is approximately?",
        answers: [
            {text:"385", correct:false},
            {text:"38.5", correct:false},
            {text:"3.1", correct:false},
            {text:"31", correct:true},
    
        ]
    },
    {
        question: "A certain appliance uses 350 W. If it is allowed to run continuously for 24 days, how many kilowatt-hours of energy does it consume?",
        answers: [
            {text:"2016", correct:false},
            {text:"201.6", correct:true},
            {text:"2.01", correct:false},
            {text:"8.4", correct:false},
    
        ]
    },
    {question: "A series circuit consists of three resistors with values of 120 ohm, 270 ohm, and 330 ohm. The total resistance is?",
        answers: [
            {text:"less than 120 ohm", correct:false},
            {text:"the average of the values", correct:false},
            {text:"720 ohm", correct:true},
            {text:"120", correct:false},
    
        ]
    }, 
    {
        question: "A 470 ohm  resistor, a 220 ohm resistor, and a 100 ohm resistor are all in parallel. The total resistance is approximately?",
        answers: [
            {text:"790", correct:false},
            {text:"470", correct:false},
            {text:"60", correct:true},
            {text:"30", correct:false},
    
        ]
    } 
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const chosenav = document.getElementById("chose");

let currentQuestionIndex =0;
let score =0;

function startQuiz(){
    currentQuestionIndex =0;
    score =0;
    nextButton.innerHTML="Next";
    showQuestion();
}
function showQuestion(){
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",selectAnswer);
        chosenav.style.display = "block";
        
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }
    else{
        selectedBtn.classList.add("incorrect");
    }

    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display= "block";
    // chosenav.style.display = "block";

}

function showScore(){
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display ="block";
    chosenav.style.display = "none";
}
function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
        
    }else{
        showScore();
    }
}
nextButton.addEventListener("click",()=> {
    if (currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});
startQuiz();
