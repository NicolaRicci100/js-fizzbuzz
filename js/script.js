console.log('JS OK');

//mostro in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    
    if (i % 3 == 0 && i % 5 == 0){ 
        console.log('FizzBuzz');
    }
    //controllo se il numero mi da resto 0 se diviso per 3
    else if (i % 3 == 0) { 
        console.log('Fizz');
    }
    //controllo se il numero mi da resto 0 se diviso per 5
    else if (i % 5 == 0) {
        console.log('Buzz');  
    }

    else {
        console.log(i);
    }
}