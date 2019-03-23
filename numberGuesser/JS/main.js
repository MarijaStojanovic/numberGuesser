let counter = 3;
let targetNum = Math.floor(Math.random() * 11);

const numGuess = () => {
    let pickedNum = document.querySelector('#pickedNum').value;
    counter--;
    console.log(targetNum)
    pickedNum = Number(pickedNum)
    if (pickedNum === targetNum) {
        alert('Good job!')
        document.write('Game is finished. Next game will start in 3 seconds.')
        setTimeout(cb => {
            again()
        }, 3000)
    } else {
        alert(`Try again. ${counter} nums of guesses left.`)
        if(counter === 0) {
            alert(`Game over. Correct answer was ${targetNum}`)
            document.write(`Better luck next time. Game will restart in 3 seconds.`)
            setTimeout(cb => {
                again()
            }, 3000)
        }
        return;
    }
}

const again = () => {
    window.location.reload()
}
