let button = document.getElementById('button');
let result = document.getElementById('result');
let start = document.getElementById('start');
let min = 1;
let max = 10;
let counter = 3;
let number;

let checkNumber = () => {
    number = document.getElementById('number').value;
    counter--;
    
    if (number > min && number < max) {
        result.innerHTML = `You guess successfuly the number between min an max`;
        document.getElementById('number').value = '';
        button.removeEventListener('click', checkNumber);
    } else if (document.getElementById('number').value === '') {
        counter++;
    } else {
        result.innerHTML = `You miss the number between min an max and you left ${counter} tries`;
        document.getElementById('number').value = '';
    }

    if (counter < 1) {
        result.innerHTML = `You don't have any tries left`;
        document.getElementById('number').value = '';
        button.removeEventListener('click', checkNumber);
    }
}

button.addEventListener('click', checkNumber);

start.addEventListener('click', () => {
    counter = 3;

    if (!(button.addEventListener('click', checkNumber))) {
        button.addEventListener('click', checkNumber);
    }

    result.innerHTML = '';
    document.getElementById('number').value = '';
});