const nameWelcome = document.getElementById('name_UI')

//  welcome text 
const welcomeName = function () {
  let nameWelcomeUi = localStorage.getItem('userName');
  let nameWelcomeUser = JSON.parse(nameWelcomeUi)
  nameWelcome.innerText = `${nameWelcomeUser}`

}

welcomeName()



const answer1 = document.getElementById('question_1_correct')
const answer2 = document.getElementById('quesion_2_correct')
const answer3 = document.getElementById('quesion_3_correct')
const answer4 = document.getElementById('question_4_correct')
const answer5 = document.getElementById('questio_5_correct')
const answer6 = document.getElementById('question_6_correct')
const answer7 = document.getElementById('question_7_correct')
const answer8 = document.getElementById('question_8_correct')
const answer9 = document.getElementById('question_9_correct')
const answer10 = document.getElementById('answer_10_correct')

const submitButtonAnswer = document.getElementById('submit_answer')

//  creating the answers
let score = [];
let mark = 10

let sum = 0

const markFunction = function () {
  return score.push(mark)
}

submitButtonAnswer.addEventListener('click', function () {

  if (answer1.checked) {
    markFunction()
  }
  if (answer2.checked) {
    markFunction()
  }
  if (answer3.checked) {
    markFunction()
  }
  if (answer4.checked) {
    markFunction()
  }
  if (answer5.checked) {
    markFunction()
  }
  if (answer6.checked) {
    markFunction()
  }
  if (answer7.checked) {
    markFunction()
  }
  if (answer8.checked) {
    markFunction()
  }
  if (answer9.checked) {
    markFunction()
  }
  if (answer10.checked) {
    markFunction()
  }

  for (let i = 0; i < score.length; i++) {
    sum += score[i]
  }
  localStorage.setItem('userScore', JSON.stringify(sum))

  document.getElementById('check_score').setAttribute('href', 'scores.html')
})



// const sumScores = function () {

//   console.log(sum);
// }

// sumScores()