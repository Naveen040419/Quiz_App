const quesJSON = [
  {
    correctAnswer: 'Three',
    answers : ['Two', 'Three ', 'Four', 'Five'],
    question:
      "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: 'L. Frank Baum',
    answers : [
      'Suzanne Collins',
      'James Fenimore Cooper',
      'L. Frank Baum',
      'Donna Leon',
    ],
    question:
      "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: 'Atlanta United',
    answers : [
      'Atlanta United',
      'Atlanta Impact',
      'Atlanta Bulls',
      'Atlanta Stars',
    ],
    question:
      'Which of these is a soccer team based in Atlanta?',
  },
  {
    correctAnswer: 'A Nanny',
    answers : [
      'A Sow',
      'A Lioness',
      'A Hen',
      'A Nanny',
    ],
    question: 'A female goat is known as what?',
  },
  {
    correctAnswer: 'P. L. Travers',
    answers : [
      'J. R. R. Tolkien',
      'P. L. Travers',
      'Lewis Carroll',
      'Enid Blyton',
    ],
    question:
      "Which author wrote 'Mary Poppins'?",
  },
];

// Desturturing the Object...

let currentQuestion = 0;

let score = 0;

// Question Div.
const questionEl = document.getElementById("question");

// Option Div..
const optionEl = document.getElementById("options");

const scoreEl = document.getElementById("score");

// Next button -->

const nextEl = document.getElementById("next");

showQuestion();

nextEl.addEventListener("click", ()=>{
  scoreEl.textContent = `Score : ${score}`;
  nextQuestion();
});

function showQuestion(){
  const {correctAnswer, answers, question } = quesJSON[currentQuestion];

  questionEl.textContent = question;

  let ShuffleOptions = shuffleOptions(answers);

  ShuffleOptions.forEach((answer)=> {

  const buttonEl = document.createElement("button");
  buttonEl.textContent = answer;
  optionEl.appendChild(buttonEl);

  buttonEl.addEventListener("click", ()=>{
    if( answer === correctAnswer ){
      score++;
    }
    else{
      score = score - 0.25;
    }
    console.log(score);
    scoreEl.textContent = `Score : ${score}/5`;
    nextQuestion();
 });

});
}


// For update Question...

function nextQuestion(){
  currentQuestion++;

  optionEl.textContent = '';

  if( currentQuestion >= quesJSON.length ){

    questionEl.textContent = 'Quiz Completed';

    nextEl.remove();

    scoreEl.textContent = `Total Score : ${score} / 5`;
  }
  else{
    showQuestion();
  }
}


// Shuffling the Options ...( We can use array destructuring - for swap)...

function shuffleOptions( answers ){

  let i;
  let j;
  for( i= answers.length-1; i>=0; i-- ){
    j = Math.floor( Math.random() * (i+1) );

  [answers[i], answers[j]] = [answers[j], answers[i]];
  } 

  return answers;   // return the object.
};







  

