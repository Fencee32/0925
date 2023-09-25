const container = document.getElementById('container')

document.getElementById('dobas').onclick = function () {
  generateDice()
}

function generateDice() {
  let dice = document.createElement('div')
  dice.classList.add('dice')

  const dotCharacters = ['⚀', '⚁', '⚂', '⚃', '⚄', '⚅']

  const randomIndex = Math.floor(Math.random() * dotCharacters.length)

  const dotText = dotCharacters[randomIndex]

  dice.textContent = dotText
  container.appendChild(dice)
}
