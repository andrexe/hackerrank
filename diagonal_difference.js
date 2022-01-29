/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.

For example, the square matrix arr is shown below:

1 2 3
4 5 6
9 8 9  
The left-to-right diagonal = 1+5+9 = 15. The right to left diagonal = 3+5+9 = 17. Their absolute difference is |15 - 17| = 2.

Function description
Complete the diagonalDifference function in the editor below.

diagonalDifference takes the following parameter:
int arr[n][m]: an array of integers

Return
int: the absolute diagonal difference

Input Format
The first line contains a single integer, n, the number of rows and columns in the square matrix arr.
Each of the next  lines describes a row, , and consists of  space-separated integers .

Constraints
-100 <= arr[i][j] <= 100

Output Format
Return the absolute difference between the sums of the matrix's two diagonals as a single integer.

Sample Input

3
11 2 4
4 5 6
10 8 -12

Sample Output
15

Explanation
The primary diagonal is:
11
   5
     -12
Sum across the primary diagonal: 11 + 5 - 12 = 4

The secondary diagonal is:
     4
   5
10
Sum across the secondary diagonal: 4 + 5 + 10 = 19

Difference: |4 - 19| = 15

Note: |x| is the absolute value of x
*/

/*  1   2   3   4
    5   6   7   8
    9   10  11  12
    13  14  15  16
*/

// iteration & sqrt
// + [sqrt * iteration + iteration + 1] => 0 + 0 + 1 = 1, 3 + 1 + 1 = 5, 6 + 2 + 1 = 9
// - [sqrt * (iteration + 1) - iteration] => 3 * 1 - 0 = 3, 3 * 2 - 1 = 5, 3 * 3 - 2 = 7
// 3 by 3 -> [1] - [3] + [5] - [5] - [7] + [9]
// 4 by 4 -> [1] - [4] + [6] - [7] - [10] + [11] - [13] + [16]


// Solution for single array
function diagonalDifference(arr) {
    // Optional flattening for nested arrays
    arr = arr.flat(Infinity);
    // Find the square root of the array length aka number of rows or columns
    let m = Math.sqrt(arr.length);
    // Declare result to use later
    let result = 0;
    // Formula for the first diagonal left to right
    let plusDiag = (m, i) => m * i + i;
    // Formula for the second diagonal right to left
    // let minusDiag = (m, i) => m * (i + 1) - i - 1;
    let minusDiag = (m, i) => (m - 1) * (i + 1);
    for (let i = 0; i < m; i++) {
        console.log(`+ ${arr[plusDiag(m,i)]}`);        
        console.log(`- ${arr[minusDiag(m,i)]}`);
        // Add first diagonal values
        result += arr[plusDiag(m, i)];
        // Subtract second diagonal values
        result -= arr[minusDiag(m, i)];
        console.log(`= ${result}`);
    }
    // Find absolute value of the final result
    result = Math.abs(result);
    console.log(result);
    return result;
};

diagonalDifference([ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]);
// diagonalDifference([11, 2, 4, 4, 5, 6, 10, 9, -12]);