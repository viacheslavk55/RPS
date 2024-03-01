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
let resultsArray = [
    'Computer won!',
    `${userName} won!`,
    "It's a tie",
    'Wow 5-0 is insane'
]

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
    if ((pc.src.endsWith('rp.png')) && (randomNumber === 1)) {
        let tieChange = document.getElementById('message');
        tieChange.innerHTML = 'its working'
    }
        
}
