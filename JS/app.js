let brojac = 1;
function pogodiBroj() {
    const min = 1;
    const max = 10;

    let unos = document.getElementById('broj').value;
    console.log(unos);

    if (unos) {
        if (unos >= min && unos <= max) {
            //alert('Bravo, correct number!');
            document.getElementById('newElement').innerHTML = 'Bravo, correct number!';
        } else if (brojac < 3 && (unos < min || unos > max)) {
            // alert('wrong number, you have ' + (3 - brojac) + ' more attempts');
            document.getElementById('newElement').innerHTML = 'wrong number, you have ' + (3 - brojac) + ' more attempts';
            brojac++;

        } else if (brojac >= 3) {
            document.getElementById('broj').disabled = true;
            document.getElementById('dugme').disabled = true;
            //alert('GAME OVER');
            document.getElementById('newElement').innerHTML = 'GAME OVER';
            if (document.getElementById('dugme').disabled = true) {
                document.getElementById('newElement2').innerHTML = '<button id="try">try again</button>';
            }
        }
    }
}
