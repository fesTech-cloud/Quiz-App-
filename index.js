const typing = document.querySelector('.container_quiz_home h1')
const paragraphTyping = document.querySelector('.content_2')
const userName = document.querySelector('#name')
const buttonSubmitName = document.querySelector('#button_submit')

const navigationToQuiz = document.querySelector('#link_navigation')

let i = 0;
let speed = 50;

let text = 'Brain Test Quiz';

const typeWriter = function () {
  if (i < text.length) {
    typing.innerHTML += text.charAt(i);
    i++;

    setTimeout(typeWriter, speed)
  }
}
typeWriter()

let index = 0;
let speedContent = 50;

let paragraph = 'Each question is 10 marks and a total question of 10mark which gotten correct earns you 100mark'

const contentTyping = function () {
  if (index < paragraph.length) {
    paragraphTyping.innerHTML += paragraph.charAt(index);
    index++;

    setTimeout(contentTyping, speedContent)
  }
}
contentTyping()

buttonSubmitName.addEventListener('click', function (e) {

  if (userName.value !== '') {
    navigationToQuiz.setAttribute('href', 'quiz.html')
    let nameUperCase = userName.value;
    let userNameLength = nameUperCase.length

    let firstLetterName = nameUperCase.slice(0, 1)
    let others = nameUperCase.slice(1, userNameLength);
    firstLetterName = firstLetterName.toUpperCase()
    userNameSignIn = firstLetterName + others

    localStorage.setItem('userName', JSON.stringify(userNameSignIn))

  } else {
    alert('Please input your name')
  }

  userName.value = ''
})