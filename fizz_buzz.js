function fizzBuzz(n) {
    // Write your code here
    for (let i = 1; i <= n; i++) {
        switch (0) {
            case i % 15:
                console.log('FizzBuzz');
                break;
            case i % 5:
                console.log('Buzz');
                break;
            case i % 3:
                console.log('Fizz');
                break;
            default:
                console.log(i);
                break;
        }
    }
}

console.log(fizzBuzz(15));