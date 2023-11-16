//? question no : 1

//!print odd number in anonymous function.
var result = [];
var a = function(arr){
    for(var i=0;i<arr.length;i=i+1){
        if(arr[i]%2!==0){
            result.push(arr[i])
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6]));


//!print odd number in IIFE function.
var result = [];
(function(arr) {
    for(var i=0;i<arr.length;i=i+1){
         if(arr[i]%2!==0){
          result.push(arr[i])
         }
}

    console.log(result);
})([1,2,3,4,5,6,7,8])


//!Convert all the strings to title caps in a string array using anonymous function.
var result = [];
var a = function(arr) {
    for (var i = 0; i < arr.length; i = i + 1) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    return result.map(function (str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    });
}
console.log(a(["black", "red", "blue", "pink"]));


//!Convert all the strings to title caps in a string array using IIFE function.
var result = [];
(function(arr) {
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 !== 0) {
            result.push(arr[i]);
        }
    }
    result = result.map(function(element) {
        if (typeof element === 'string') {
            return element.charAt(0).toUpperCase() + element.slice(1);
        } else {
            return element;
        }
    });
    console.log(result);
   })([ 'apple', 'banana', 'orange']);


//!Sum of all numbers in an array using anonymous function.
var sum = 0;
var a = function(arr) {
  for (var i = 0; i < arr.length; i = i + 1) {
    sum += arr[i];
  }
  return sum;
}
console.log(a([1, 2, 3, 4, 5,]));


//!Sum of all numbers in an array using IIFE function.
var result = (function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
   console.log(sum);
})([1, 2, 3, 4]);


//!Return all the prime numbers in an array using anonymous function.
var result = [];
var a = function(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (isPrime(arr[i])) {
            result.push(arr[i]);
        }
    }
    return result;
}
function isPrime(num) {
    if (num <= 1) return false;
    for (var i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
console.log(a(["prime numbers:",1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11,12,13]));


//!Return all the prime numbers in an array using IIFE function.
var result = (function(arr) {
    var isPrime = function(num) {
        if (num <= 1) return false;
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    };
    return arr.filter(function(num) {
        return isPrime(num);
        
    });
})([1, 2, 3, 4, 5, 6, 7, 8,9,11,12,13,14,15]);
console.log("prime numbers:",result);


//!Return all the palindromes in an array using anonymous function.
var result = [];
var a = function(arr) {
  for (var i = 0; i < arr.length; i = i + 1) {
    var numStr = arr[i].toString();
    var reversedStr = numStr.split('').reverse().join('');
    
    if (numStr === reversedStr) {
      result.push(arr[i]);
    }
  }
  return result;
};
console.log(a(["palindromes:",121, 123, 1331, 454, 567, 12121,1231]));


//!Return all the palindromes in an array using IIFE function.
(function(arr) {
    var result = [];
  
    for (var i = 0; i < arr.length; i++) {
      var str = arr[i].toString(); 
      var reversedStr = str.split('').reverse().join('');
      if (str === reversedStr) {
        result.push(arr[i]);
      }
    }
    console.log("palindromes:",result);
  })([131,1771,345,1224,11,22,121]);


//!Return median of two sorted arrays of the same size using anonymous function.
var Median = function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2);
    var sortedArray = mergedArray.sort((a, b) => a - b);
  
    var length = sortedArray.length;
    var mid = Math.floor(length / 2);
  
    if (length % 2 === 0) {
      return (sortedArray[mid - 1] + sortedArray[mid]) / 2;
    } else {
      return sortedArray[mid];
    }
  };
  var arr1 = [1, 2, 3, 4, 5];
  var arr2 = [6, 7, 8, 9, 10];
  var median =Median(arr1, arr2);
  console.log(median);
  

//!Return median of two sorted arrays of the same size using IIFE function.
var result = (function(arr1, arr2) {
    var mergedArray = arr1.concat(arr2).sort((a, b) => a - b);
    var length = mergedArray.length;
    
    if (length % 2 === 0) {
        var mid1 = mergedArray[length / 2 - 1];
        var mid2 = mergedArray[length / 2];
        return (mid1 + mid2) / 2;
    } else {
        return mergedArray[Math.floor(length / 2)];
    }
})([1, 2, 3, 4, 5], [6, 7, 8, 9, 10,]);
console.log(result);

//!Remove duplicates from an array using anonymous function.
var result = [];
var a = function(arr) {
    for (var i = 0; i < arr.length; i = i + 1) {
        if (arr.indexOf(arr[i]) === i) {
            result.push(arr[i]);
        }
    }
    return result;
}
console.log(a([1,2,3,4,5,6,7,8,9,11,12,2,5,13,14,15,11]));


//!Remove duplicates from an array using IIFE function.
var result = [];
(function(arr) {
    for (var i = 0; i < arr.length; i = i + 1) {
        if (arr.indexOf(arr[i]) === i) {
            result.push(arr[i]);
        }
    }    
console.log(result);
})([1,2,3,4,5,6,7,8,1,5,8,9,12,13,3,7]);


//!Rotate an array by k times using anonymous function.
var result = [];
var rotateArray = function(arr, k) {
    k = k % arr.length; 
    for (var i = 0; i < arr.length; i++) {
        var newIndex = (i + k) % arr.length;
        result[newIndex] = arr[i];
    }
    return result;
}
console.log(rotateArray([1, 2, 3, 4, 5, 6], 3));

//!Rotate an array by k times using IIFE function.
var result = [];
(function(arr, k) {
    k = k % arr.length; 
    for (var i = 0; i < arr.length; i++) {
        var newIndex = (i + k) % arr.length;
        result[newIndex] = arr[i];
    }
    console.log(result);
})([1, 2, 3, 4, 5, 6], 2);



//?question no : 2

//!Print odd numbers in an array using arrow functions.
var a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var oddNumbers = a.filter(number => number % 2 !== 0);
console.log(oddNumbers);


//!Convert all the strings to title caps in a string array using arrow function.
var stringArray = ["mango", "cherry", "blueberry"];
var titleCaseArray = stringArray.map((str) =>{
  return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
});
console.log(titleCaseArray);


//!Sum of all numbers in an array using arrow function.
var numbers = [5,10,15,20];
var  sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum);


//!Return all the prime numbers in an array using arrow function.
const Prime = num => {
    for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num > 1;
  };
  const primes = arr => arr.filter(Prime);
  const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,17,18,19,20];
  const primeNumbers = primes(num);
  console.log("Prime Numbers:", primeNumbers);
  

//!Return all the palindromes in an array using arrow function.
var Palindrome = (str) => {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
  };
  var palindromes = (arr) => arr.filter((word) => Palindrome(word));
  var wordsArray = ["wow", "car", "mom", "world", "level"];
  var palindromesArray = palindromes(wordsArray);
  console.log("palindromes:",palindromesArray);
  