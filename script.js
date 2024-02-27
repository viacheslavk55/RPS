function goToGame() {
    window.location.href = "game.html";
}

function enterName() {
   let userName = prompt('Enter your first name:')
   let choice = `${userName}s choice:`
   let messages = `Welcome ${userName}!`
   let madLibOutputChoice = document.getElementById('choiceText')
   madLibOutputChoice.innerHTML = `<p class='madlib'>${story}</p>`
}