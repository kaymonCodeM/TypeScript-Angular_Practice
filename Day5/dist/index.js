"use strict";
function brackets(expr) {
    const startingBrackets = ["{", "(", "["];
    const closingBrackets = ["}", ")", "]"];
    const copyArray = Array.from(expr.split(""));
    while (startingBrackets.concat(closingBrackets).some(e => copyArray.includes(e))) {
        if (!startingBrackets.some(e => copyArray.includes(e))) {
            return false;
        }
        for (let i = copyArray.length - 1; i >= 0; i--) {
            for (let j = 0; j < startingBrackets.length; j++) {
                let b = -1;
                if (copyArray[i] === startingBrackets[j]) {
                    b = j;
                }
                if (b !== -1) {
                    let count = i;
                    while (copyArray[count] !== closingBrackets[b]) {
                        if (closingBrackets.some(e => e === copyArray[count])) {
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
//# sourceMappingURL=index.js.map