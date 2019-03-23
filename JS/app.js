
let min = 1,
    max = 10,
    winningNum = getRandomNum(1, 10),
    guessesLeft = 3;

const game = document.getElementById('game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.getElementById('guess-btn'),
      guessInput = document.getElementById('guess-input');
      message = document.querySelector('.message'),

minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener('mousedown', function (e) {
    if (e.target.className === 'play-again') {
        window.location.reload();
    }
});

guessBtn.addEventListener('click', function() {
    let guess = parseInt(guessInput.value);

    if (isNaN(guess) || guess < min || guess > max) {
        setMessage(`Please enter a number between ${min} and ${max}`, 'red');   
    }

    if (guess === winningNum) {
        gameOver(true,`${winningNum} is correct, YOU WIN`)
        
    } else {
        guessesLeft--;

        if (guessesLeft === 0) {
            gameOver(false, `GAME OVER, you lost. 
            The correct number was ${winningNum}.`)
           
        } else {
            guessInput.style.borderColor = 'red';

            guessInput.value = '';
            
            setMessage(`${guess} is not correct,
            ${guessesLeft} guesses left`, 'red');


        }

    }
});

function gameOver(won, msg) {
    let color;
    won === true ? color = 'green' : color = 'red';
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    message.style.color = color;
    setMessage(msg);

    guessBtn.value = 'Play again';
    guessBtn.className += 'play-again';
}

function setMessage(msg, color) {
   message.style.color = color;
   message.textContent = msg; 
}

function getRandomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

