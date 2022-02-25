function fibonacciGenerator(n){
    var number=[0];
    for (let i = 1; i <n; i++) {
        if(i==1){
            number.push(1);
        }
        else{
        var a = number[i-2];
        var b = number[i-1];
        var c = a+b;
        number.push(c);
        }
        }
    return number;
}
