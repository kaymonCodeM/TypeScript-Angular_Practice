"use strict";
function countDigits(text) {
    let count = 0;
    for (let i = 0; i < text.length; i++) {
        let num = parseInt(text.charAt(i));
        if (num || num === 0) {
            count++;
        }
    }
    return count;
}
console.log(countDigits('This picture is an oil on canvas '
    + 'painting by Danish artist Anna '
    + 'Petersen between 1845 and 1910 year'));
//# sourceMappingURL=index.js.map