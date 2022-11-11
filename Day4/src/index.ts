// import {pi,squaretwo} from "./helloWorld";

// // helloWorld();

// console.log(pi);
// console.log(squaretwo);

//Rest Array function
// function Hello (...names:string[]){
//     return names.join(" ")+ "!";
// }

// let s = Hello("Hello","Bill","Join","Steve");
// console.log(s);

// s = Hello("Hello");

// console.log(s);

// function sortByExt(files: string[]): string[] {
//     let noNames:string[]=[];
//     let withNames:{[key:string]:string}={};
//     let fileNames:string[]=[];
    
//     for(let s of files){
//         let i =s.length-1;
//         while(s.charAt(i)!=='.'){
//             i--;
//         }
        
//         if(s.charAt(i-1)===''){
//             noNames.push(s);
//         }else if(s.charAt(i)){
//             fileNames.push(s);
//             withNames[s]=s.substring(i,s.length);
//         }
//     }
    
//     noNames.sort();
//     let tail:string[]=[];
//     for(let f of fileNames){
//         let start = tail.filter(a=> withNames[a]<=withNames[f]);
//         let end = tail.filter(a=> withNames[a]>withNames[f]);
//         if(start[start.length-1]>f && withNames[start[start.length-1]]===withNames[f]){
//             let temp = start[start.length-1];
//             start[start.length-1] = f;
//             start.push(temp);
//         }else{
//             start.push(f);
//         }
//         tail = start.concat(end);
//     }
//     return noNames.concat(tail);
// }

// console.log(sortByExt(["1.cad", "1.bat", "1.aa", "1.aa.doc"]));

//Day 5

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

