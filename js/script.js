console.log('JS OK');

const number = document.querySelector('.my-number');

//mostro in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    //controllo se il numero è multiplo sia di 3 che di 5
    if (i % 3 == 0 && i % 5 == 0){ 
        console.log('FizzBuzz');  //quindi mostro FizzBuzz
        number.innerHTML += `<div class="col bg-warning">${'FizzBuzz'}</div>`;
    }
    //controllo se il numero è solo multiplo di 3
    else if (i % 3 == 0) { 
        console.log('Fizz');  //quindi mostro Fizz
        number.innerHTML += `<div class="col bg-primary">${'Fizz'}</div>`;
    }
    //controllo se il numero è solo multiplo di 5
    else if (i % 5 == 0) {
        console.log('Buzz');  //quindi mostro Buzz
        number.innerHTML += `<div class="col bg-secondary">${'Buzz'}</div>`;
    }

    else {
        console.log(i);  //altrimenti mostro solo il numero
        number.innerHTML += `<div class="col">${i}</div>`;
    }
    
}