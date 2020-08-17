const arr = [0,1,2,3,4,5,6,7,7,8,9,10,11,12,13,14,15,16,17] //Input array of numbers
let repeatedNumber = null;
arr.forEach((number,index) => {
    if (index > 0 && number === arr[index-1]) {
        repeatedNumber = number;
    }
});
if (repeatedNumber !== null) {
    console.log(repeatedNumber);
} else {
    console.log('No repetation');
}