// Write a function to replace all instances of character c1 with character c2 and vice versa.

// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"

// Write a function that returns the minimum number of swaps to convert the first binary string into the second.
//
// Examples
// minSwaps("1100", "1001") ➞ 1
//
// minSwaps("110011", "010111") ➞ 1
//
// minSwaps("10011001", "01100110") ➞ 4

// A number is said to be Disarium if the sum of its digits raised to their respective positions is the number itself.

// Create a function that determines whether a number is a Disarium or not.

// Examples
// isDisarium(75) ➞ false
// // 7^1 + 5^2 = 7 + 25 = 32

// isDisarium(135) ➞ true
// // 1^1 + 3^2 + 5^3 = 1 + 9 + 125 = 135

// isDisarium(544) ➞ false

// isDisarium(518) ➞ true

// isDisarium(8) ➞ true

// isDisarium(466) ➞ false

// Write a function to replace all instances of character c1 with character c2 and vice versa.

// Examples
// doubleSwap( "aabbccc", "a", "b") ➞ "bbaaccc"

// doubleSwap("random w#rds writt&n h&r&", "#", "&")
// ➞ "random w&rds writt#n h#r#"

// doubleSwap("128 895 556 788 999", "8", "9")
// ➞ "129 985 556 799 888"

// Someone has attempted to censor my strings by replacing every vowel with a *, l*k* th*s. Luckily, I've been able to find the vowels that were removed.

// Given a censored string and a string of the censored vowels, return the original uncensored string.

// Example
// uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo") ➞ "Where did my vowels go?"

// uncensor("abcd", "") ➞ "abcd"

// uncensor("*PP*RC*S*", "UEAE") ➞ "UPPERCASE"

// Create a function that outputs the result of a math expression in words.

// Examples
// wordedMath("One plus one") ➞ "Two"

// wordedMath("zero Plus one") ➞ "One"

// wordedMath("one minus one") ➞ "Zero"

// Given a word, create an object that stores the indexes of each letter in an array.
//
// Make sure the letters are the keys.
// Make sure the letters are symbols.
// Make sure the indexes are stored in an array and those arrays are values.
// Examples
// mapLetters("dodo") ➞ { d: [0, 2], o: [1, 3] }
//
// mapLetters("froggy") ➞ { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
//
// mapLetters("grapes") ➞ { g: [0], r: [1], a: [2], p: [3], e: [4], s:

// Create a function that takes an array of items and checks if the last item matches the rest of the array concatenated together.

// PENDING

// function matchLastItem(array) {
//   let lastElement = array[array.length - 1];
//   let seperateArray = [];
//   for (let i = 0; i < array.length - 1; i++) {
//       seperateArray.push(array[i]);
//   }
//   let joinString = `${seperateArray.join("")}`;
//     return lastElement == joinString
// }

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));
// console.log(matchLastItem([1, 1, 1, "11"]));
// console.log(matchLastItem([8, "thunder", true, "8thundertrue"]));

// Ek matrix di gayi hai jismein har row aur column mein elements sorted hain. Tumhe ek function likhna hai jo ek diye gaye target number ko matrix mein search kare aur uske position (row, column) ko return kare agar number mojood hai, agar nahi toh -1 return kare.

// const matrix = [
//     [1, 4, 7, 11],
//     [2, 5, 8, 12],
//     [3, 6, 9, 16],
//     [10, 13, 14, 17],
//   ];

//   const target = 9;

//   function searchInMatrix(matrix, target) {
//     let store = [];
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = i + 1; j < matrix.length; j++) {
//         if (matrix[i] + matrix[j] == target) {
//           store.push(matrix[i], matrix[j]);
//         }
//       }
//     }
//     return store;
//   }

//   const result = searchInMatrix(matrix, target);
//   console.log(result); // Expected output: { row: 2, column: 2 }

// Ek array hai jisme numbers hain. Use filter to create a new array containing only prime numbers.

// Ek array hai jisme numbers hain. Use filter to create a new array containing only Fibonacci numbers.

// Ek array hai, aur ek chunk size di gayi hai. Use filter to create an array of arrays where each sub-array represents a chunk of the original array with the specified size.

// Write a function that takes a matrix (a 2D array) and returns its transpose. The transpose of a matrix is obtained by swapping the rows and columns. Assume that the input matrix is a square matrix (number of rows = number of columns).

// function transposeMatrix(matrix) {
//     for (let i = 0; i < matrix.length; i++) {
//       for (let j = i + 1; j < matrix[0]; j++) {
//         let temp = matrix[i];
//         matrix[j] = matrix[i];
//         matrix[i] = temp;
//       }
//     }
//     return matrix;
//   }

//   let matrix = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];

//   let transposedMatrix = transposeMatrix(matrix);
//   console.log(transposedMatrix);

// Write a function that takes an array of integers and finds the contiguous subarray with the largest sum. The function should return the sum of this subarray.

// function findLargestSumSubarray(arr) {
//     // Your code here to find the largest sum subarray
// }

// let numbers = [1, -2, 3, 10, -4, 7, 2, -5];
// let largestSum = findLargestSumSubarray(numbers);
// console.log(largestSum);

// Write a function that transposes a given two-dimensional array (rows become columns and vice versa).

// const originalArray = [
//     [1, 2, 3],
//     [4, 5, 6],
//     [7, 8, 9],
//   ];
//   console.log(transposeArray(originalArray));
/* Output:
     [
       [1, 4, 7],
       [2, 5, 8],
       [3, 6, 9],
     ]
  */
