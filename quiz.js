const data = [
  {
    id: 1,
    question: "What is the capital of France?",
    answers: [
      { answer: "New York", isCorrect: false },
      { answer: "London", isCorrect: false },
      { answer: "Paris", isCorrect: true },
      { answer: "Dublin", isCorrect: false },
    ],
  },

  {
    id: 2,
    question: "What is the capital of Ireland?",
    answers: [
      { answer: "NewYork", isCorrect: false },
      { answer: "London", isCorrect: false },
      { answer: "Paris", isCorrect: false },
      { answer: "Dublin", isCorrect: true },
    ],
  },

  {
    id: 3, 
    question: "A Flutter is a group of?",
    answers: [
      { answer: "bees", isCorrect: false },
      { answer: "penguins", isCorrect: false },
      { answer: "butterflies", isCorrect: true },
      { answer: "camels", isCorrect: false },
    ],
  },

  {
    id: 4,
    question: "A group which of animals is referred to as wake?",
    answers: [
      { answer: "bats", isCorrect: false },
      { answer: "vultures", isCorrect: true },
      { answer: "ants", isCorrect: false },
      ],
  },
];

const gameScreen = document.querySelector(".game")
const resultScreen = document.querySelector(".result")
const question = document.querySelector(".question")
const  answersContainer = document.querySelector(".answers")
const submit = document.querySelector(".submit")
const play = document.querySelector(".play")

let qIndex = 0; //Question index
let correctCount = 0; // to store the number of correct answers
let wrongCount = 0; // to store the number of wrong answers 
let total = 0; //Total no of question
let selectedAnswer;

const playAgain = () => {
  qIndex = 0; //Question index
  correctCount = 0; // to store the number of correct answers
  wrongCount = 0; // to store the number of wrong answers
  total = 0; //Total no of question
  selectedAnswer;
}

play.addEventListener("click", () => {
  playAgain();
  showQuestion(qIndex);
  resultScreen.style.display = "none";
  gameScreen.style.display = "block";
});


//function to show my result-page(css-style display by default:none)
const showResult = () =>{
  resultScreen.style.display = "block";
  gameScreen.style.display = "none";

  resultScreen.querySelector(".correct").textContent = `Correct Answers: ${correctCount}`

  resultScreen.querySelector(".wrong").textContent = `Wrong Answers: ${wrongCount}`

  resultScreen.querySelector(".score").textContent = `Score: ${correctCount*2}`
}

// function to show my questions 
const showQuestion = (qNumber) => {
  if (qIndex == data.length) return showResult();
  selectedAnswer = null;
  question.textContent = data[qNumber].question;
  answersContainer.innerHTML = data[qNumber].answers
    .map(
      (item, index) =>
        `
    <div class="answer">
        <input type="radio" name="answer" id=${index} value="${item.isCorrect}"/> 
        <label for="${index}">${item.answer}</label>
    </div> 
    `
    )
    .join("");

  selectAnswer();
};


// function to store the selected answer
const selectAnswer = () =>{
  answersContainer.querySelectorAll("input").forEach(el =>{
    el.addEventListener("click", (e) =>{
    selectedAnswer = e.target.value;
    });
  });
};

  // function to increase the correctAns, wrongAns & the questionIndex.
  const submitAnswer = () =>{
    submit.addEventListener("click", ()=>{
    if (selectedAnswer !== null){

      if (selectedAnswer === "true")  {
        correctCount++ 
      } else {
      wrongCount++;}
      qIndex++;
      showQuestion(qIndex);
    }
      else alert("Select the right option") 
    });
  }


showQuestion(qIndex); 
submitAnswer(); 
