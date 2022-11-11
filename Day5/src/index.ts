// function getRand<T>(items:T[]):T {
//     return items[Math.random()*items.length];
// }

// function merge<U,V>(obj1:U,obj2:V){

// }

class genericnumber<T>{
    num: T|undefined;
    add: ((x:T,y:T) => T) | undefined;
}

let letgenricnumber = new genericnumber<number>();
letgenricnumber.num =0;
letgenricnumber.add = function(x,y){
    return x + y;
};

console.log(letgenricnumber.add(45,32));