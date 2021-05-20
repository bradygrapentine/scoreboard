let teamOneName = 'Team 1'
let teamOneScore = 0
let teamTwoName = 'Team 2'
let teamTwoScore = 0

function renderTeam(team) {
  const html = `
  <section class="team${team.id}">
  <h2>${team.name}</h2>
  <h3>${team.score}</h3>
  <fieldset>
  <input type="text" placeholder="Name" value="${team.name}" />
  </fieldset>
  <fieldset>
  <i class="add fas fa-2x fa-plus-circle"></i>
  <i class="subtract fas fa-2x fa-minus-circle"></i>
  </fieldset>
 </section>
  `
  return html
}

function setupListeners(team) {
  document
    .querySelector(`.team${team.id} .add`)
    .addEventListener('click', function (event) {
      team.score++
      render()
    })
  document
    .querySelector(`.team${team.id} .subtract`)
    .addEventListener('click', function (event) {
      team.score--
      render()
    })
  document
    .querySelector(`.team${team.id} input`)
    .addEventListener('input', function (event) {
      team.name = event.target.value
      render()
    })
}
let teams = [
  {
    id: 1,
    name: 'Team 1',
    score: 0,
  },
  {
    id: 2,
    name: 'Team 2',
    score: 0,
  },
  {
    id: 3,
    name: 'Team 3',
    score: 10,
  },
]

function render() {
  const html = `
<header>
 <h1>My Score Board</h1>
</header>
<main>
${teams
  .map(function (team) {
    return renderTeam(team)
  })
  .join('')}
</main> 
<footer>
 <button>reset</button>
</footer>`
  document.body.innerHTML = html
  teams.forEach(function (team) {
    setupListeners(team)
  })
  document.querySelector('button').addEventListener('click', function (event) {
    // Reset the teams
    render()
    teams = [
      { id: 1, name: 'Team 1', score: 0 },
      { id: 2, name: 'Team 2', score: 0 },
      { id: 3, name: 'Team 3', score: 0 },
    ]
  })
}

function main() {
  render()
}
document.addEventListener('DOMContentLoaded', main)
