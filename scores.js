const userName = document.querySelector('.userName')
const score = document.querySelector('.score')
const typer = document.querySelector('.content')



let text2 = `with your score we believe that you need to know more about crypto and blockchain within your reach
and we recommend you join Muna community`

let text1 = 'with your score we believe you have deep knowledge about crypto and blockchain and we will also love to recommend a blockchain community for you Muna'


let index = 0;
let speedContent = 50;

const displayScore = function () {
  let userScoreDisplay = localStorage.getItem('userScore')
  let userNameDisplay = localStorage.getItem('userName')

  userNameDisplay = JSON.parse(userNameDisplay);
  userScoreDisplay = JSON.parse(userScoreDisplay)

  userName.textContent = `${userNameDisplay}`
  score.textContent = `${userScoreDisplay}`

  const higherScore = function () {
    if (index < text1.length && userScoreDisplay >= 50) {
      typer.innerHTML += text1.charAt(index)
      index++

      setTimeout(higherScore, speedContent)
    } else if (index < text2.length && userScoreDisplay < 50) {
      typer.innerHTML += text2.charAt(index)
      index++

      setTimeout(higherScore, speedContent)
    }
  }

  higherScore()
}

displayScore()