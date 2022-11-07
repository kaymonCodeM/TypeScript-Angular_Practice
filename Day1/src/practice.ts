function reverseString(myString: string){
    let cur = Array.from(myString);
    let res = "";

    for (let i = cur.length-1; i>= 0; i--) {
        res = res + cur[i];
    }

    return res;
}

function fibanacciSeries(num:number){
    let fib = [0, 1];
    if(num<=1){
        return [0];
    }
    if(num==2){
        return fib;
    }
    for(let i=2; i<=num;i++){
        fib[i] = fib[i - 2] + fib[i - 1];
    }

    return fib;

}

function isLeapYear(year:number) {

    if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
        return true;
    } else {
        return false;
    }
}

function isPrime(num:number){
    for(let i = 2; i < num;i++){
      if(num % i === 0){
        return false;
      }
    }
    return true;
  }

console.log("Reverse a String: ")
let test1 = "Let us Reverse this string"
console.log("test: " + test1);
let res1 = reverseString(test1);
console.log("result: " + res1);

console.log("\nFibanacci Series: ")
let test2 = 10;
console.log("test: " + test2);
let res2 = fibanacciSeries(test2);
console.log("result: " + res2);

console.log("\nPalindrome of String Test 1: ")
let test3 = "palindrome";
console.log("test: " + test3);
let res3 = reverseString(test3);
console.log("result: "+ (test3==res3));

console.log("\nPalindrome of String Test 2: ")
let test4 = "redder";
console.log("test: " + test4);
let res4 = reverseString(test4);
console.log("result: "+ (test4==res4));


console.log("\nPalindrome of Number Test 1: ")
let test5 = 1215124;
console.log("test: " + test5);
let res5 = Number(reverseString(test5.toString()));
console.log("result: "+ (test5==res5));

console.log("\nPalindrome of Number Test 2: ")
let test6 = 121;
console.log("test: " + test6);
let res6 = Number(reverseString(test6.toString()));
console.log("result: "+ (test6==res6));

console.log("\nLeap Year Test 1: ")
let test7 = 2020;
console.log("test: " + test7);
let res7 = isLeapYear(test7);
console.log("result: "+ res7);

console.log("\nLeap Year Test 2: ")
let test8 = 2022;
console.log("test: " + test8);
let res8 = isLeapYear(test8);
console.log("result: "+ res8);

console.log("\nPrime Number Test 1: ")
let test9 = 41;
console.log("test: " + test9);
let res9 = isPrime(test9);
console.log("result: "+ res9);

console.log("\nPrime Number Test 2: ")
let test10 = 34;
console.log("test: " + test10);
let res10 = isPrime(test10);
console.log("result: "+ res10);
