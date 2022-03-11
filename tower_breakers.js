/*
Two players are playing a game of Tower Breakers! Player 1 always moves first, and both players always play optimally. The rules of the game are as follows:

    Initially there are n towers.
    Each tower is of height m.
    The players move in alternating turns.
    In each turn, a player can choose a tower of height x and reduce its height to y, where 1 <= y < x and y evenly divides x.
    If the current player is unable to make a move, they lose the game.

Given the values of n and m, determine which player will win. If the first player wins, return 1. Otherwise, return 2.

Example. 
n = 2
m = 6

There are 2 towers, each 6 units tall. Player 1 has a choice of two moves:
- remove 3 pieces from a tower to leave 3 as 6 modulo 3 = 0
- remove 5 pieces to leave 1

Let Player 1 remove 3. Now the towers are 3 and 6 units tall.

Player 2 matches the move. Now the towers are both 3 units tall.

Now Player 1 has only one move.

Player 1 removes 2 pieces leaving 1. Towers are 1 and 3 units tall.
Player 2 matches again. Towers are both 1 unit tall.

Player 1 has no move and loses. Return 2.


Function Description

Complete the towerBreakers function in the editor below.

towerBreakers has the following paramter(s):

    int n: the number of towers
    int m: the height of each tower

Returns

    int: the winner of the game

Input Format

The first line contains a single integer t, the number of test cases.
Each of the next t lines describes a test case in the form of 2 space-separated integers, n and m.

Constraints
1 <= t <= 100
1 <= n,m <= 10^6

Sample Input

STDIN   Function
-----   --------
2       t = 2
2 2     n = 2, m = 2
1 4     n = 1, m = 4

Sample Output

2
1

Explanation

We'll refer to player 1 as P1 and player 2 as P2

In the first test case, P1 chooses one of the two towers and reduces it to 1. Then P2 reduces the remaining tower to a height of 1. As both towers now have height 1, P1 cannot make a move so P2 is the winner.

In the second test case, there is only one tower of height 4. P1 can reduce it to a height of either 1 or 2. P1 chooses 1 as both players always choose optimally. Because P2 has no possible move, P1 wins.
*/

/*

For towers of length 6

6 is divisible by 3, 2 or 1, which means we can reduce a tower to 3, 2 or 1
5 is divisible by 1, which means we can reduce a tower to 1
4 is divisible by 2, 1, which means we can reduce a tower to 2 or 1
3 is divisible by 1, which means we can reduce a tower to 1
2 is divisible by 1, which means we can reduce a tower to 1

you can get from 6 to 1:
3 1 - 2 moves
2 1 - 2 moves
1 - 1 move

Logic:

The towers are always the same length, which means the order of the players and the number of towers are the most important factors. 

If the length of the towers is 1, player 2 wins by default, because player 1 has no moves.

If the number of towers is even, player 2 wins by just copying moves from player 1 until player 1 is out of moves.

If the number of towers is odd, player 1 wins by reducing every tower to 1, eventually locking player 2 out of any moves. Even if player 2 tries to offset things and does NOT use their move to reduce a tower to 1: BECAUSE there is an odd number of towers OF THE SAME LENGTH, player 1 can always just copy whatever move player 2 tried to play until eventually player 2 still loses. See example below.

e.g. 3 towers of 6

phase 1: p1 reduces t1 to 1 => 1 6 6
p2 reduces t2 to 3 => 1 3 6

phase 2: p1 reduces t3 to 3 => 1 3 3
p2 reduces t2 to 1 => 1 1 3

phase 3: p1 reduces t3 to 1 => 1 1 1
p2 loses


*/

function towerBreakers(n, m) {
    // Write your code here
    if (m == 1 || (n % 2) == 0) {
        return 2;
    } else {return 1}
}

towerBreakers(3, 6);