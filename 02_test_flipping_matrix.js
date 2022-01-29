/* flippingMatrix maximum sum possible in a quadrant by REVERSING rows or columns
https://stackoverflow.com/questions/68898389/hackerrank-flipping-the-matrix
*/

// array.reverse() - destructive

// function flippingMatrix(matrix) {
//     // Write your code here

//     // Flip column x
//     let n = matrix.length;
//     console.log(matrix);
//     let max = 0;
//     let arr = matrix.flat(Infinity);
//     for (let i = 0; i < n / 2; i++) {
//         newMax += arr[i];
//     }
//     // let max = matrix.flat(Infinity).sort((a,b) => b - a)[0];
//     console.log(max);
//     return result;
// }

/*
1   2   3   4
5   6   7   8
9   10  11  12
13  14  15  16
*/

/*
1   2   3   4   5   6

7   8   9   10  11  12

13  14  15  16  17  18

19  20  21  22  23  24

25  26  27  28  29  30

31  32  33  34  35  36
*/

// 10 = a[1,3] -> a[1,2] -> a[4,2] -> a[4,3]
//      i,j   i,n-j-1   n-i-1,n-j-1   n-i-1,j

// No matter the size of the matrix, an element can only end up in one of four positions

// Solution 1.
// Make a new subarray for each of these position groups, in total arr.length / 4 arrays
// Find the max from each subarray - those elements will form the best quadrant
// Add up all the maxes and that will be the max value of a quadrant after flipping the rows/cols

// Solution 2. More effective
// Make sure the array is not flat i.e. contains n x n subarrays
// Go through the first quadrant and compare each element with its alternates
// Find each position max by comparing each element with its 3 other alternates
// Add up all the maxes and that is the max value of a quadrant after flipping rows/cols



// Note: this algorithm returns the maximum possible sum by figuring out the maximum value quadrant WITHOUT altering the initial array and WITHOUT actually flipping any row or columns
function flippinMatrix(matrix) {
    // Properly format the array
    // First flatten
    let newArr = matrix.flat(Infinity);
    // Find the n x n size
    let n = Math.sqrt(newArr.length);
    // Define empty utility subarray to be used in the loop
    let subarr = [];
    // Loop through n x n 
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            // Take the first element from the array and add it at the end of the subarray
            subarr.push(newArr.shift());
        }
        // Push completed subarray to the new array
        newArr.push(subarr);
        // Reset subarray for next loop
        subarr = [];
    }

    // Start with 0 sum
    let quadSum = 0;
    // Go through first quadrant and compare to alternates
    for (let i = 0; i < n / 2; i++) {
        for (let j = 0; j < n / 2; j++) {
            let max = Math.max(newArr[i][j], newArr[i][n - j - 1], newArr[n - i - 1][n - j - 1], newArr[n - i - 1][j]);
            quadSum += max;
        }

    }

    return quadSum;
}


// for (let i = 0; i <= arr.length/4; i++) {

// };

// console.log(newArr);

// Test generator
function matrixGenerator(n) {
    let arr = [];
    let count = 1;
    for (let i = 0; i < n; i++) {
        let subarr = [];
        for (let j = 0; j < n; j++) {
            subarr[j] = count;
            count++;
        }
        arr.push(subarr);
    }
    return arr;
};

// console.log(matrixGenerator(2));

// console.log(flippinMatrix([[1, 2, 3, 3, 6, 6], [4, 5, 6, 6, 6, 6], [7, 8, 6, 6, 9, 8], [7, 6, 6, 8, 9, 8], [7, 8, 6, 6, 9, 8], [7, 6, 6, 8, 9, 8]]));;

console.log(flippinMatrix([[112, 42, 83, 119], [56, 125, 56, 49], [15, 78, 101, 43], [62, 98, 114, 108]]));