"use strict";
function sortByExt(files) {
    let myMap = {};
    for (let s of files) {
        let str = s.split(".");
        myMap[s] = str[str.length - 1];
    }
    let result = [];
    for (let key of files) {
        let start = [];
        let end = [];
        for (let s of result) {
            if (myMap[key] > myMap[s]) {
                start.push(key);
            }
            else if (myMap[key] < myMap[s]) {
                end.push(key);
            }
            else if (myMap[key] === myMap[s]) {
                if (key > s) {
                }
            }
        }
        start.push(key);
        result = start.concat(end);
    }
    return result;
}
console.log(sortByExt(["1.cad", "1.bat", "1.aa", ".bat"]));
//# sourceMappingURL=index.js.map