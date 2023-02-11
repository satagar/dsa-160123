// Char One
// Question Name: Char One

// Problem Statement

// Antonio and his girlfriend decided to move their relationship to the next level and bought a binary string S(string consisting only of characters ‘0’ and ‘1’) from a nearby string shop(name of the shop). As you may have already guessed, both of them are programmers.

// A nice string is a binary string which contains at least one character ‘1’. For example ‘101100’, ‘0100’, ‘10001’ etc. are nice strings.

// A substring of a string is a contiguous subsequence of that string.

// To impress his girlfriend Antonio wants to find the number of nice substrings of string S but is facing difficulties.

// Given string S, help Antonio by telling him the number of nice substrings of string S.

// Input Format

// First line contains a single binary string denoting S.
// Output Format

// Print the number of nice substrings of string S.
// Constraints

// 1<=length of S<=105
// Sample Input 1

// 0100

// Sample Output 1

// 6

// Explanation of Sample 1

// Possible nice substrings are : 0100, 0100, 0100, 0100, 0100, 0100



// Things to Note for the Candidate

// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

//First Case there should be no 1
//Second Case there should be no 1


function findNiceString(str,n) {
    let res = 0,count=0;
    for(let i=0;i<str.length;i++){
        if(str[i] == '1'){
            res += (count+1) * (n-i);
            count=0;
        }else{
            count++;
        }
    }
    return res;
}
console.log(findNiceString('0100',4));
console.log(findNiceString('010010',6));