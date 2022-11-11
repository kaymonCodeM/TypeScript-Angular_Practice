// function getRand<T>(items:T[]):T {
//     return items[Math.random()*items.length];
// }

// function merge<U,V>(obj1:U,obj2:V){

// }

// class genericnumber<T>{
//     num: T|undefined;
//     add: ((x:T,y:T) => T) | undefined;
// }

// let letgenricnumber = new genericnumber<number>();
// letgenricnumber.num =0;
// letgenricnumber.add = function(x,y){
//     return x + y;
// };

// console.log(letgenricnumber.add(45,32));

// //Explicit
//const car:string="volts wagon";

// //Implicit
// const car = "volts wagon";

// Tuple type variable 
//var employee: [number, string] = [1, "Steve"];

//Type Alias for a string, called carType
// type carType = string;
// let myCar:carType="MyCar";
// console.log(myCar);

//https://www.typescriptlang.org/docs/handbook/utility-types.html


function brackets(expr: string): boolean {
    // your code here
    const startingBrackets = ["{", "(", "["];
    const closingBrackets = ["}", ")", "]"]
    const copyArray = Array.from(expr.split(""));

    while (startingBrackets.concat(closingBrackets).some(e => copyArray.includes(e))) {
        if (!startingBrackets.some(e => copyArray.includes(e))) {
            return false;
        }
        for (let i = copyArray.length - 1; i >= 0; i--) {
            for (let j = 0; j < startingBrackets.length; j++) {
                let b: number = -1;
                if (copyArray[i] === startingBrackets[j]) {
                    b = j;
                }
                if (b !== -1) {
                    let count = i;
                    while (copyArray[count] !== closingBrackets[b]) {
                        if(closingBrackets.some(e=>e===copyArray[count])){
                            return false;
                        }
                        if (count === copyArray.length) {
                            return false;
                        }
                        count++;
                    }
                    copyArray.splice(i, 1);
                    copyArray.splice(count - 1, 1);
                    break;
                }
            }
        }
    }

    return true;
}

console.log(brackets("[1+1]+(2*2)-{3/3}"));