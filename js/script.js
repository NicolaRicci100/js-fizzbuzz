console.log('JS OK');

//mostro in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {

    //controllo se il numero è multiplo sia di 3 che di 5
    if (i % 3 == 0 && i % 5 == 0){ 
        console.log('FizzBuzz');  //quindi mostro FizzBuzz
    }
    //controllo se il numero è solo multiplo di 3
    else if (i % 3 == 0) { 
        console.log('Fizz');  //quindi mostro Fizz
    }
    //controllo se il numero è solo multiplo di 5
    else if (i % 5 == 0) {
        console.log('Buzz');  //quindi mostro Buzz
    }
    
    else {
        console.log(i);  //altrimenti mostro solo il numero
    }
}