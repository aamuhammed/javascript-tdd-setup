// The derivative of a function y = f(x) is denoted as df(x)/d(x). For functions ax^n, the derivate is nax^(n-1). Write a function that calculates the coefficient and power of the derivate of a function ax^n where a and n are given.
'use strict'

function SumofPrime(num) {
  var allprimes=[];
  for(i=2;i<=num;i++){
       var notPrime = true;
        for(j=2 ;j<=i;j++){
            if(i%j===0 && i!==j){
                notPrime = false;
            }
          }

    if(notPrime === true){
        allprimes.push(i);
    }
  }

  var addPrimes = allprimes.reduce(function(a,b){
     return a+b;
  });

  console.log(addPrimes);
}

SumofPrime(100);