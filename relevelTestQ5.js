// Fill array
// Question Name: Fill array

// Problem Statement

// Antonio is given an array A consisting of N positive integers.

// Now consider another array B. Initially array B has N elements and all these elements are equal to zero. Antonio wants to fill array B. For this he can perform the below operations on it several times:

// Choose a prefix of array B and increase all the elements in this prefix by 1.
// More formally choose a 1<=P<=N, and make Bi = Bi+1 for all 1<=i<=P.
// Antonio wants elements of array B to be less or equal to elements of array A, and hence he performs the operation such that after all the operations are done, Bi<=Ai holds for all 1<=i<=N.

// Among all the arrays B that Antonio can form using the given operations, find the maximum possible sum of elements of array B.

// Input Format

// First line contains a single integer denoting N.
// Next line contains N space separated integers denoting the elements of array A.
// Output Format

// Among all the arrays B that Antonio can form using the given operations, print the maximum possible sum of elements of array B.
// Constraints

// 1<=N<=105
// 1<=Ai<=109
// Sample Input 1

// 3

// 2 3 1

// Sample Output 1

// 5

// Explanation of Sample 1

// Antonio can perform the operations as :

// Operation 1 :
// Select P = 2, B becomes [1 1 0]
// Operation 2 :
// Select P=3, B becomes [2 2 1]
// Now B1<=A1, B2<=A2 and B3<=A3 holds, and the sum of all elements of array B = 2+2+1 = 5.



// Things to Note for the Candidate

// You can use your own IDE like Visual Studio Code, Eclipse, or any other IDE that you are comfortable with to build your solution code.
// The IDE provided on the platform is purely for submission. Avoid using the IDE for coding out the solution.
// Test against any custom input in your own IDE. In the IDE provided on the platform, you cannot pass custom test cases and see the output. 
// Use standard input and standard output in your program for the IDE to run the test cases smoothly against your code. We are giving a sample problem statement along with a solution that will pass the test cases in the IDE. - Sample Problem Statement  (Right Click and Open in New Tab to view.)


function getMaxSum(arr,n) {
    let ans = new Array(n).fill(0);
    let bool = n-1;
    let min = Math.min(...arr);
    let output = 0;

    if(min == 0){
        return 0;
    }
    
    while( bool >= 0){
        let i = bool;

        for(i;i>=0;i--){
        ans[i] += 1;
        if(arr[i] == ans[i]){
            bool = i-1;
            break;
        }
        }
    }
    for(let i=0;i<n;i++){
        output += ans[i];
    }
    return output;
  }
  

console.log(getMaxSum([2, 3, 1], 3));
  


