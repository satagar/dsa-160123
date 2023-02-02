// BOOTCAMP

// Problem Statement

// You are given N students and an array of size N. The knowledge of the i-th student is a[i]. You are also given an integer X. You want to create some boot camps to teach them about coding. Since you want to make the maximum profit, you have to create the maximum number of boot camps possible. To create a bootcamp the product of the number of students in the bootcamp and the student with the least knowledge should be greater than twice of X. Also a student can be a member of only one bootcamp and a few students might not be a part of any bootcamp.

// Count the maximum number of boot camps possible.

// Constraints

// All the input values are integers
// 1<=t<=100
// 1<=N<=10^5
// 1<=X<=10^9
// 1<=a[i]<=10^8
// Input :

// The first contains the integer t the number of test cases.

// The first line of each test case contains N and X where N is the number of students and X is an integer

// The second line of each test case contains the N elements of the array



// Output :

// Print the maximum number of boot camps you can make.

// Sample Input :

// 2

// 10 6

// 7 1 8 2 7 6 4 1 9 1

// 4 7

// 9 7 4 7

// Sample Output :

// 2

// 1

// Sample Explanation :

// In the first test case you can make first boot camp with 1st student and 3rd student and the second boot camp with the 5th and 9th student

// In the second test case you can make a bootcamp with all the four students


// ﻿Things to Note for the Candidate
// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)

function getMaxBootCamps(arr, len, x) {
    arr.sort((a, b) => {
        return a - b;
    })
    let output = 0;
    let num = 1;
    for (let i = len; i >= 0; i--) {
        if (arr[i] * num > 2 * x) {
            num = 1;
            output++;
        } else {
            num++;
        }
    }
    return output;
}

(function () {
    let arr1 = [7, 1, 8, 2, 7, 6, 4, 1, 9, 1];
    let arr2 = [9, 7, 4, 7];
    let len1 = arr1.length - 1, len2 = arr2.length - 1;
    let x1 = 6, x2 = 7;
    let res1 = getMaxBootCamps(arr1, len1, x1);
    let res2 = getMaxBootCamps(arr2, len2, x2);
    console.log(res1, res2);

})()