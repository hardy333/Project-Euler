/**
 * Problem 1
 * 
 * Sum of multiples of three and five
 * 
 * 
 */



 // Solution 1;
 function sumOfThreeAndFiveOne(n){
    let sum = 0;
    let i = 1;

    while(i < n){
        if(i % 3 === 0 || i % 5 === 0) sum += i;
        i++;
    }
    
    return  sum; 
 }
 
 // Solution 2;
 function sumOfThreeAndFiveTwo(n){
    let sum = 0;
    for(let i = 1; i < n; i++){
        if(i % 3 === 0 || i % 5 === 0) sum += i;
    }

    return sum;
 }


 



/**
 * 
 * Problem 2
 * 
 * Sum of even fibonacci numbers 
 * 
 * 
 */

 function sumOfEvenFibonacci(n){
     let sum = 0;
     let a = 1;
     let b = 1;

     while(b < n){
         if(b % 2 === 0) sum += b;
         let temp = a;
         a = b;
         b = temp + a;

     }

     return sum;
 }


 /**
  * 
  * Largest Prime Factor
  * 
  */

//   Solution 1;
  function largestPrimeFactorOne(n){
      if(n < 2) return n + " does not have prime factors";

      let largestPrimeFactor;

      for(let i = 2; i <= n / 2; i++){
          if(n % i === 0 && isPrime(i)) largestPrimeFactor = i;
      }

      function isPrime(number){
        for(let i = 2; i <= Math.sqrt(number); i++){
            if(number % i === 0) return false;
        }
        return number > 1;
      }

      return largestPrimeFactor || n;
  }

  // Solution 2;

  function largestPrimeFactorTwo(n){
    if(n < 2)  return -1;

    let i = 2;
    while(i <= n){
        if(n % i === 0){
            n /= i;
        }else{
            i++;
        }
    }

    return i;
  }

//   console.log(largestPrimeFactorOne(9380398));
// console.log(largestPrimeFactorTwo(600851475143));

function findPrimeFactorization(n){
    if(n < 1){
        console.log("Please Enter NATURAL number");
        return -1;
    } 
    let divisorsArr = [];
    

    let i = 2;
    while(i <= n){
        if(n % i === 0){
            n /= i;
            divisorsArr.push(i);
            
        }else{
            i++;
        }
    }

    // console.log(divisorsArr); // array with prime factors 
    // console.log(divisorsArr.reduce((sum, num) => sum + num, 0)); // same array but sorted 

    let primeFactorization = {};

    divisorsArr.forEach(num => {
        if(primeFactorization[num]){
            primeFactorization[num]++;
        }else{
            primeFactorization[num] = 1;
        }
    })

    console.log(primeFactorization);
}

findPrimeFactorization(10);

function getFactors(num) {
    const isEven = num % 2 === 0;
    let inc = isEven ? 1 : 2;
    let factors = [1, num];
  
    for (let curFactor = isEven ? 2 : 3; Math.pow(curFactor, 2) <= num; curFactor += inc) {
      if (num % curFactor !== 0) continue;
      factors.push(curFactor);
      let compliment = num / curFactor;
      if (compliment !== curFactor) factors.push(compliment);
    }
  
    console.log(factors.sort((a,b) => a - b));
}


getFactors(100);