function findMedian(arr) {
    // Write your code here
    return arr.sort((a,b) => {return a - b})[(arr.length - 1) / 2];
}

console.log(findMedian([1,3,2,-1,6,2,1,53,206,144,365]));