const number = parseInt(prompt('Enter the number of terms: '));
let x = 0, y = 1, nextTerm;
console.log('Fibonacci Series:');
for (let i = 0; i < number; i++) {
    if(i==0){
        console.log(x);
        continue;
    }
    else if(i==1){
        console.log(y);
        continue;
    }
    nextTerm = x + y;
    x = y;
    y = nextTerm;
    console.log(nextTerm);
}