let resultsArray = ['Computer won!', 'You won!', "It's a tie!", 'Wow 5-0 is insane!']
let playerScore = 0;
let computerScore = 0;

function goToGame() {
    window.location.href = "game.html"
}

function enterName() {
   document.getElementById('replacee').classList.add('d-none')
   document.getElementById('replacee2').classList.remove('d-none')
   let userName = prompt('Enter your first name:')
   let treplace = document.getElementById('choiceText')
   treplace.innerHTML = `${userName}s choice:`
   let mreplace = document.getElementById('message')
   mreplace.innerHTML = `Welcome ${userName}! Choose rock, paper, or scissors.`
}


function computerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) + 1
    if (randomNumber === 1) {
        document.getElementById('cc').removeAttribute('src')
        document.getElementById('cc').src = 'images/rb.png'
    } else if (randomNumber === 2) {
        document.getElementById('cc').removeAttribute('src')
        document.getElementById('cc').src = 'images/pb.png'
    } else if (randomNumber === 3) {
        document.getElementById('cc').removeAttribute('src')
        document.getElementById('cc').src = 'images/sb.png'
    }
}

function rock() {
    document.getElementById('pc').removeAttribute('src')
    document.getElementById('pc').src = 'images/rp.png'
}
function paper() {
    document.getElementById('pc').removeAttribute('src')
    document.getElementById('pc').src = 'images/pp.png'
}
function scissors() {
    document.getElementById('pc').removeAttribute('src')
    document.getElementById('pc').src = 'images/sp.png'
}

function score() {
    let pc = document.getElementById('pc')
    let cc = document.getElementById('cc')
    if ((pc.src.endsWith('rp.png') && cc.src.endsWith('rb.png')) || (pc.src.endsWith('pp.png') && cc.src.endsWith('pb.png')) || (pc.src.endsWith('sp.png') && cc.src.endsWith('sb.png'))) {
        let tieChange = document.getElementById('message')
        tieChange.innerHTML = resultsArray[2]
    } else if ((playerScore < 5) && ((pc.src.endsWith('rp.png') && cc.src.endsWith('sb.png')) || (pc.src.endsWith('pp.png') && cc.src.endsWith('rb.png')) || (pc.src.endsWith('sp.png') && cc.src.endsWith('pb.png')))) {
        let tieChange = document.getElementById('message')
        tieChange.innerHTML = resultsArray[1]
        playerScore++
    } else if ((computerScore < 5) && ((pc.src.endsWith('rp.png') && cc.src.endsWith('pb.png')) || (pc.src.endsWith('pp.png') && cc.src.endsWith('sb.png')) || (pc.src.endsWith('sp.png') && cc.src.endsWith('rb.png')))) {
        let tieChange = document.getElementById('message')
        tieChange.innerHTML = resultsArray[0]
        computerScore++
    }
    document.getElementById('player').textContent = playerScore
    document.getElementById('comp').textContent = computerScore
    if (((playerScore === 5) && (computerScore === 0)) || ((playerScore === 0) && (computerScore === 5))) {
        document.getElementById('message').textContent = resultsArray[3]
        var onClickEle = document.getElementById('bute')
        onClickEle.removeAttribute('onclick')
        var onClickEle2 = document.getElementById('bute2')
        onClickEle2.removeAttribute('onclick')
        var onClickEle3 = document.getElementById('bute3')
        onClickEle3.removeAttribute('onclick')
      } else if (playerScore === 5) {
        document.getElementById('message').textContent = 'Player wins! Game over.'
        var onClickEle = document.getElementById('bute')
        onClickEle.removeAttribute('onclick')
        var onClickEle2 = document.getElementById('bute2')
        onClickEle2.removeAttribute('onclick')
        var onClickEle3 = document.getElementById('bute3')
        onClickEle3.removeAttribute('onclick')
      } else if (computerScore === 5) {
        document.getElementById('message').textContent = 'Computer wins! Game over.'
        var onClickEle = document.getElementById('bute')
        onClickEle.removeAttribute('onclick')
        var onClickEle2 = document.getElementById('bute2')
        onClickEle2.removeAttribute('onclick')
        var onClickEle3 = document.getElementById('bute3')
        onClickEle3.removeAttribute('onclick')
      } 
}

function reset() {
    playerScore = 0
    computerScore = 0
    document.getElementById('pc').src = 'images/start.png'
    document.getElementById('cc').src = 'images/start.png'
    document.getElementById('bute').setAttribute('onclick', 'computerChoice(), rock(), score()')
    document.getElementById('bute2').setAttribute('onclick', 'computerChoice(), paper(), score()')
    document.getElementById('bute3').setAttribute('onclick', 'computerChoice(), scissors(), score()')
    document.getElementById('message').textContent = "Let's play again!"
    document.getElementById('player').textContent = playerScore
    document.getElementById('comp').textContent = computerScore
}