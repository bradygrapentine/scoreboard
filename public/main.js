let adjustScore = 1

function plusButtonClickTeam1(event) {
  const team1Score = document.querySelector('.team1 .score')
  const team2Score = document.querySelector('.team2 .score')
  const team1Name = document.querySelector('.team1 h2')
  const team2Name = document.querySelector('.team2 h2')

  if (Number(team2Score.textContent) >= 21) {
    window.alert(`Game Over. ${team2Name.textContent} won. You lost`)
    return
  }
  if (Number(team1Score.textContent) >= 21) {
    window.alert(`Game Over. You, ${team1Name.textContent}, won.`)
    return
  }

  const current = Number(Number(team1Score.textContent) + adjustScore)
  team1Score.textContent = current

  if (Number(team1Score.textContent) === 21) {
    window.alert(`You, ${team1Name.textContent}, won!`)
  }
  console.log(event.target.value)
  console.log(event)
}
function plusButtonClickTeam2(event) {
  const team2Score = document.querySelector('.team2 .score')
  const team1Score = document.querySelector('.team1 .score')
  const team2Name = document.querySelector('.team2 h2')
  const team1Name = document.querySelector('.team1 h2')

  if (Number(team1Score.textContent) >= 21) {
    window.alert(`Game Over. ${team1Name.textContent} won. You lost`)
    return
  }
  if (Number(team2Score.textContent) >= 21) {
    window.alert(`Game Over. You, ${team2Name.textContent}, won.`)
    return
  }

  const current = Number(Number(team2Score.textContent) + adjustScore)
  team2Score.textContent = current
  if (Number(team2Score.textContent) === 21) {
    window.alert(`You, ${team2Name.textContent}, won!`)
  }

  console.log(event.target.value)
  console.log(event)
}
function minusButtonClickTeam1(event) {
  const team1Score = document.querySelector('.team1 .score')
  const team2Score = document.querySelector('.team2 .score')
  const team2Name = document.querySelector('.team2 h2')
  const team1Name = document.querySelector('.team1 h2')

  if (Number(team2Score.textContent) >= 21) {
    window.alert(`Game Over. ${team2Name.textContent} won. You lost`)
    return
  }
  if (Number(team1Score.textContent) >= 21) {
    window.alert(`Game Over. You, ${team1Name.textContent}, won.`)
    return
  }

  if (Number(team1Score.textContent) <= 0) {
    window.alert('Invalid request')
    return
  }
  const current = Number(Number(team1Score.textContent) - adjustScore)
  team1Score.textContent = current

  console.log(event.target.value)
  console.log(event)
}
function minusButtonClickTeam2(event) {
  const team2Score = document.querySelector('.team2 .score')
  const team1Score = document.querySelector('.team1 .score')
  const team2Name = document.querySelector('.team2 h2')
  const team1Name = document.querySelector('.team1 h2')

  if (Number(team1Score.textContent) >= 21) {
    window.alert(`Game Over. ${team1Name.textContent} won. You lost`)
    return
  }
  if (Number(team2Score.textContent) >= 21) {
    window.alert(`Game Over. You, ${team2Name.textContent}, won.`)
    return
  }
  if (Number(team2Score.textContent) <= 0) {
    window.alert('Invalid request')
    return
  }
  const current = Number(Number(team2Score.textContent) - adjustScore)
  team2Score.textContent = current

  console.log(event.target.value)
  console.log(event)
}
function updateTeam1Name(event) {
  const teamName = document.querySelector('.team1 h2')
  teamName.textContent = event.target.value
  if (teamName.textContent === '') {
    teamName.textContent = 'Team 1'
  }
  console.log(event.target.value)
  console.log(event)
}

function updateTeam2Name(event) {
  const teamName = document.querySelector('.team2 h2')
  teamName.textContent = event.target.value
  if (teamName.textContent === '') {
    teamName.textContent = 'Team 2'
  }
  console.log(event.target.value)
  console.log(event)
}

function clickToResetScoreboard(event) {
  const team1Score = document.querySelector('.team1 .score')
  const team2Score = document.querySelector('.team2 .score')
  team1Score.textContent = 0
  team2Score.textContent = 0
  console.log(event.target.value)
  console.log(event)
}

function main() {
  document
    .querySelector('.team1 input')
    .addEventListener('input', updateTeam1Name)
  document
    .querySelector('.team2 input')
    .addEventListener('input', updateTeam2Name)
  document
    .querySelector('.team1 i.add')
    .addEventListener('click', plusButtonClickTeam1)
  document
    .querySelector('.team1 i.subtract')
    .addEventListener('click', minusButtonClickTeam1)
  document
    .querySelector('.team2 i.add')
    .addEventListener('click', plusButtonClickTeam2)
  document
    .querySelector('.team2 i.subtract')
    .addEventListener('click', minusButtonClickTeam2)
  document
    .querySelector('fieldset i.reset')
    .addEventListener('click', clickToResetScoreboard)
}

document.addEventListener('DOMContentLoaded', main)

// Assign an event to the input fields
// to automatically change the team's name as the user types.

// Assign click events to the buttons to update the corresponding
// values on the page. The score buttons should adjust the current
// score by a "hard-coded" value.
