/* 
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example

s = '12:01:00PM'
Return '12:01:00'.

s = '12:01:00AM'
Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in 12 hour format

Returns
string: the time in 24 hour format

Input Format
A single string s that represents a time in 12-hour clock format (i.e.: hh:mm:ssAM or hh:mm:ssPM).

Constraints
All input times are valid

Sample Input
07:05:45PM

Sample Output
19:05:45
*/

// AM / PM gets used and removed
// minutes and seconds stay the same
// hh can only be 1-12
// if PM hh+12
// unless hh = 12, in which case hh stays same

// if AM hh stays same
// unless hh = 12, in which case hh - 12

function timeConversion(s) {
    // Write your code here
    // Check if AM
    let am = s.indexOf('A') > 0;
    // Check if PM - unnecessary, if it's not AM, it MUST be PM
    // let pm = s.indexOf('P') > 0;
    // Define result as the string split into an array of each character, stripped of the AM/PM
    let result = s.replace(/[AMP]/ig, '');
    if (result.substring(0, 2) > 11 && am) {
        result = result.replace(/12/, `0${result.substring(0, 2) - 12}`);
    } else if (result.substring(0, 2) < 12 && !am) {
        result = result.replace(/\d{2}/, Number(result.substring(0, 2)) + 12);
    };
    return result;
};

console.log(timeConversion('01:01:00AM'));