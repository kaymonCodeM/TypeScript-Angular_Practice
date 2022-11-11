// array
//let arrayName: type[];

// let skills: string[] = [];
// skills[0] = "Typescript";
// skills[1] = "Javascript";

// let ser = [1,2,3];
// let doubleit = ser.map(e=> e*2);
// console.log(doubleit);

//? means it is not mandatory
// let skill: [string,number,boolean?];
// skill = ["JavaScript",10];

//enum

//enum name {cons1, cons2........}

// enum Month{
//     Jan,
//     Feb,
//     March,
//     Apr,
//     May,
//     Jun,
//     July,
// }

// function isItSummer (month:Month){
//     let isSummer: boolean;
//     switch(month){
//         case Month.Jun:
//         case Month.July:
//             isSummer = true;
//             break;
//         default:
//             isSummer = false;
//     }
//     return isSummer;
// }

// console.log(isItSummer(5));


// let emp:{
//     firstName: string;
//     lastName: string;
//     age: number;
//     jobdes: string;
// }

// emp = {
//     firstName: "Kaymon",
//     lastName: "McCain",
//     age:33,
//     jobdes:"Full Stack Developer"
// }

// console.log(emp);

// function sum(a:number,b:number) : number{
//     console.log(a+b);
//     return a+b;
// }

//never

// function raiseError(message:string):never {
//     throw new Error(message);
// }

// function reject(){
//     return raiseError("Rejected !!!");
// }

// //Union

// function add(a: any, b: any){
//     if(typeof a === 'number' && typeof b==='number'){
//         return a+b;
//     }
//     if(typeof a === 'string' && typeof b==='string'){
//         return a.concat(b);
//     }
//     throw new Error("Parameters must be number or string")
// }


// add(true,false);

function sortByExt(files: string[]): string[] {
    let myMap :{[key: string]: string}={};
    
    for(let s of files){
        let str = s.split(".");
        myMap[s]=str[str.length-1];
    }

    let result:string[]=[];

    for(let key of files){

        let start:string[]=[];
        let end:string[] =[];
        for(let s of result){
            if(myMap[key]>myMap[s]){
                start.push(key);
            }else if(myMap[key]<myMap[s]){
                end.push(key);
            }else if(myMap[key]===myMap[s]){
                if(key>s){
                    
                }
            }
        }
        start.push(key);
        result = start.concat(end);
    }
    return result;
}


console.log(sortByExt(["1.cad", "1.bat", "1.aa", ".bat"]));
