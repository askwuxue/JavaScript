function fizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'fizzbuzz';
    }
    if (num % 3 === 0) {
        return 'fizz';
    }
    if (num % 5 === 0) {
        return 'buzz';
    }
    if (num == 'null' || typeof num != 'number' ) {
        return false;
    }
    return num;
} 