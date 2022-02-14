/* Julius Caesar protected his confidential information by encrypting it using a cipher. Caesar's cipher shifts each letter by a number of letters. If the shift takes you past the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation by 3, w, x, y and z would map to z, a, b and c.

Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

Example
s = There's-a-starman-waiting-in-the-sky
k = 3

The alphabet is rotated by 3, matching the mapping above. The encrypted string is
Wkhuh'v-d-vwdupdq-zdlwlqj-lq-wkh-vnb.

Note: The cipher only encrypts letters; symbols, such as -, remain unencrypted.

Function Description
Complete the caesarCipher function in the editor below.

caesarCipher has the following parameter(s):
    string s: cleartext
    int k: the alphabet rotation factor

Returns
    string: the encrypted string

Input Format
The first line contains the integer, n, the length of the unencrypted string.
The second line contains the unencrypted string, s.
The third line contains k, the number of letters to rotate the alphabet by.

Constraints
1 <= n <= 100
0 <= k <= 100
s is a valid ASCII string without any spaces.

Sample Input
11
middle-Outz
2

Sample Output
okffng-Qwvb

Explanation
Original alphabet:      abcdefghijklmnopqrstuvwxyz
Alphabet rotated +2:    cdefghijklmnopqrstuvwxyzab

m -> o
i -> k
d -> f
d -> f
l -> n
e -> g
-    -
O -> Q
u -> w
t -> v
z -> b


Input (stdin)

    10
    159357lcfd
    98

Expected Output

    159357fwzx

*/

// a-z 97-122
// A-Z 65-90

function caesarCipher(s, k) {
    let j = k % 26;
    function encode(elem) {
        // Check if the character code represents a letter
        if ((elem <= 90 && elem >= 65) || (elem <= 122 && elem >= 97)) {
            // Add k as long as it won't exceed length of alphabet
            if ((65 <= elem && elem <= 90 - j) || (97 <= elem && elem <= 122 - j)) {
                elem += j;
                // Otherwise add k from the start
            } else { elem += j - 26 }
        }
        // Return the letter corresponding to the code
        return String.fromCharCode(elem);
    }

    // Create result
    let result = s
    // By splitting the string into array
        .split('')
        // Converting each letter to its char code
        .map(l => l.charCodeAt(0))
        // Encoding each char code using the function above
        .map(encode)
        // Joining back all the letters into one string
        .join('');

    return result;
}

console.log('Z'.charCodeAt(0));
console.log(caesarCipher('159357lcfd', 98));