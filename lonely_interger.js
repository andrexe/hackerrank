/* 
Given an array of integers, where all elements but one occur twice, find the unique element.

Example

a = [1, 2, 3, 4, 3, 2, 1]

The unique element is 4.

Function Description

Complete the lonelyinteger function in the editor below.

lonelyinteger has the following parameter(s):
int a[n]: an array of integers

Returns
int: the element that occurs only once

Input Format
The first line contains a single integer, n, the number of integers in the array.
The second line contains n space-separated integers that describe the values in a.

Constraints

1 <= n < 100
It is guaranteed that n is an odd number and that there is one unique element.
0 <= a[i] <= 100, where 0 <= i <= n.

*/

function lonelyinteger(a) {
    //  There is no way to stop or break a forEach() loop other than by throwing an exception. If you need such behavior, the forEach() method is the wrong tool.
    // a.forEach(elem => {
    //     if (a.indexOf(elem) == a.lastIndexOf(elem)) {
    //         console.log(elem);
    //         return elem;
    //     }
    // });

    /* Early termination may be accomplished with:

    A simple for loop
    A for...of / for...in loops
    Array.prototype.every()
    Array.prototype.some()
    Array.prototype.find()
    Array.prototype.findIndex()
    Array methods: every(), some(), find(), and findIndex() test the array elements with a predicate returning a truthy value to determine if further iteration is required.

    */

    return a.find(elem => a.indexOf(elem) == a.lastIndexOf(elem));
};

console.log(lonelyinteger([1, 2, 3, 4, 3, 2, 1]));