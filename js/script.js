console.log('JS OK');

//mostro in console i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
    console.log(i);

    //controllo se il numero è diverso da 3 e mi da resto 0 se diviso per 3
    if (i != 3 && i % 3 == 0) { 
        console.log(i = 'Fizz');  
    }
    //controllo se il numero è diverso da 5 e mi da resto 0 se diviso per 5
    if (i != 5 && i % 5 == 0) {
        console.log(i = 'Buzz');  
    }
}