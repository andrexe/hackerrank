/* Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.

rot13("SERR PBQR PNZC") should decode to the string FREE CODE CAMP

rot13("SERR CVMMN!") should decode to the string FREE PIZZA!

rot13("SERR YBIR?") should decode to the string FREE LOVE?

rot13("GUR DHVPX OEBJA SBK WHZCF BIRE GUR YNML QBT.") should decode to the string THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG.

*/

// Find the character code range for letters to do the conversion
// Split the string into an array and transform each element into its character code equivalent
// Since we're decoding, if the char code is one of the LAST 13, we will be subtracting 13 from each code
// If the character code is one of the FIRST 13, we are adding 13 (because there are 26 letters)
// If needed, do the same for lowercase character code range
// Convert the character codes back into their corresponding letters
// Join the array back into a string and return the result

function rot13(str) {
    // Create the result array by
    let result = str
    // Splitting up the string into invidual elements
        .split('')
        // Translating each character into its equivalent code
        .map(l => l.charCodeAt(0))
        // Decoding each character using the function defined below
        .map(decode);

    function decode(elem) {
        // If the character is between A -> M, add 13 and turn it into N -> Z
        if (elem >= 65 && elem <= 77) {
            elem += 13;
        } else
        // ELSE if the character is between N -> Z, subtract 13 and turn it into A -> M
            if (elem >= 78 && elem <= 90) {
                elem -= 13;
            }
        // Return the decoded character
        return elem;
    };
    // Return the string equivalent of the array with decoded characters
    return String.fromCharCode(...result);
}

console.log(rot13("AM SERR PBQR PNZC NZ"));