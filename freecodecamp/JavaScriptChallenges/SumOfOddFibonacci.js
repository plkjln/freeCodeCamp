
function sumFibs(num) {
  
    var fib = []; // Initialize array!
    fib[0] = 0;
    fib[1] = 1;
    var sum =1;
    
    for(var i=2; i<=num; i++){
      // Next fibonacci number = previous + one before previous
       fib[i] = fib[i-2] + fib[i-1];
      //sum of the odd numbers in the series, each added number from the series < num
       if((fib[i] <= num) && ((fib[i] % 2) != 0)){ 
          sum += fib[i];
       }
    }
    
    return sum;
  }
  
  sumFibs(10);
  //OUTPUT: 10
  