const arr = [1,0,1,1,1,1,1,1,0,0,0,0,1,1,0,0,0,1] //Input array of numbers
let max1s = 0;
const maxArrays = [];
arr.forEach(number => {
    if (number === 1) {
        max1s +=1;
    } else {
        if (max1s > 0) {
            maxArrays.push(max1s);
        }
        max1s = 0
    }
});
max1s = maxInArray(maxArrays);
console.log(max1s);

/* Find the max sum of the consucitive ones */
function maxInArray(maxArrays) {
    max1s = maxArrays[0];
    maxArrays.forEach(max => {
        if (max1s < max) {
            max1s = max;
        }
    });
    return max1s;
}