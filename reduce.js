// write a function to find even in the array with use redude methos

// function find_even(array) {
//   return array.reduce((prev, curr) => {
//     if (curr % 2 == 0) {
//       prev.push(curr);
//     }
//     return prev;
//   }, []);
// }

// console.log(find_even([1, 2, 3, 4, 5]));

// Ek array di gayi hai jo numbers ko contain karta hai. Tumhe ek function likhna hai jo is array ka sum calculate kare, lekin sirf un numbers ka jo 2 se divisible hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [5, 10, 15, 20, 25, 30];

// function calculateSumOfEvenDivisibleBy2(arr) {
//   return arr.reduce((prev, curr) => {
//     if (curr % 2 == 0) {
//       return prev + curr;
//     } else {
//       return prev;
//     }
//   }, 0);
// }

// const result = calculateSumOfEvenDivisibleBy2(numbers);
// console.log(result); // Expected output: 60

// Ek array di gayi hai jismein har element ek string hai, aur har string ek number ko represent karta hai. Tumhe ek function likhna hai jo ye numbers ko add kare, lekin unko string form mein concatenate kare bina. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbersAsStrings = ["5", "10", "15", "20", "25"];

// function addNumbers(arr) {
//   return arr.reduce((prev, curr) => {
//     const convertIt = Number(curr);
//     return (prev += convertIt);
//   }, 0);
// }

// const result = addNumbers(numbersAsStrings);
// console.log(result); // Expected output: 75

// Ek array di gayi hai jismein har element ek object hai, aur har object ek product ko represent karta hai jismein name aur price properties hain. Tumhe ek function likhna hai jo in products ka total price calculate kare. Tumhe isko reduce method ka istemal karke solve karna hai.

// const products = [
//   { name: "Laptop", price: 800 },
//   { name: "Phone", price: 400 },
//   { name: "Tablet", price: 200 },
//   { name: "Headphones", price: 100 },
// ];

// function calculateTotalPrice(arr) {
//   return arr.reduce((prev, curr) => {
//     const items = curr.price;
//     return (prev += items);
//   }, 0);
// }

// const result = calculateTotalPrice(products);
// console.log(result); // Expected output: 1500

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare aur unke beech mein " " (ek space) daale bina. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["Hello", "world", "this", "is", "a", "sentence"];

// function createSentence(arr) {
//   return arr.reduce((prev, curr) => prev + curr, "");
// }

// const result = createSentence(words);
// console.log(result); // Expected output: "Helloworldthisisasentence"

// Ek array di gayi hai jo har element ko represent karta hai, jisme har element ek object hai aur usmein ek category property hoti hai. Tumhe ek function likhna hai jo ye categories ko count kare aur ek naye object mein unki counts ko store kare. Tumhe isko reduce method ka istemal karke solve karna hai.

// const items = [
//   { name: "Item1", category: "Electronics" },
//   { name: "Item2", category: "Clothing" },
//   { name: "Item3", category: "Electronics" },
//   { name: "Item4", category: "Books" },
//   { name: "Item5", category: "Clothing" },
//   { name: "Item6", category: "Books" },
// ];

// function countCategories(arr) {
//   return arr.reduce((obj, curr) => {
//     const categoriesIn = curr.category;
//     if (obj.hasOwnProperty(categoriesIn)) {
//       obj[categoriesIn]++;
//     } else {
//       obj[categoriesIn] = 1;
//     }
//     return obj;
//   }, {});
// }

// const result = countCategories(items);
// console.log(result);
// Expected output: { Electronics: 2, Clothing: 2, Books: 2 }

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek acronym (kuch words ke pehle letters ka combination) banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko use karte hue ek acronym generate kare. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["World", "Health", "Organization"];

// function createAcronym(arr) {
//   return arr.reduce((prev, curr) => {
//     const firstletter = curr.charAt(0);
//     return (prev += firstletter);
//   }, "");
// }

// const result = createAcronym(words);
// console.log(result); // Expected output: "WHO"

// SECOND APPROCH
//
// const words = ["World", "Health", "Organization"];

// function createAcronym(arr) {
// return arr.reduce((acronym, words) => acronym + words.charAt(0), "");
// }

// const result = createAcronym(words);
// console.log(result); // Expected output: "WHO"

// Ek array di gayi hai jismein har element ek number hai. Tumhe ek function likhna hai jo ye numbers ko multiply kare, lekin sirf un numbers ko jo odd hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [2, 3, 5, 7, 10];

// function multiplyOddNumbers(arr) {
//   return arr.reduce((prev, curr) => (curr % 2 != 0 ? prev * curr : prev), 1);
// }

// const result = multiplyOddNumbers(numbers);
// console.log(result); // Expected output: 105

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare, lekin har string ko uppercase mein convert kare bina. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["Hello", "world", "this", "is", "a", "sentence"];

// function createSentence(arr) {
//   return arr.reduce((prev, curr) => (prev += curr), "");
// }

// const result = createSentence(words);
// console.log(result); // Expected output: "Helloworldthisisasentence"

// // Ek array di gayi hai jismein har element ek object hai, aur har object ek student ko represent karta hai jismein name aur marks properties hain. Tumhe ek function likhna hai jo in students ke marks ka average calculate kare. Tumhe isko reduce method ka istemal karke solve karna hai.

// const students = [
//   { name: "Alice", marks: 85 },
//   { name: "Bob", marks: 90 },
//   { name: "Charlie", marks: 75 },
//   { name: "David", marks: 95 },
// ];

// function calculateAverageMarks(arr) {
//   const sum = arr.reduce((prev, curr) => prev + curr.marks, 0);
//   return sum / arr.length;
// }

// const result = calculateAverageMarks(students);
// console.log(result); // Expected output: 86.25

// Ek array di gayi hai jismein har element ek number hai. Tumhe ek function likhna hai jo ye numbers ko multiply kare, lekin sirf un numbers ko jo greater than 5 hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [2, 6, 8, 4, 10, 3];

// function multiplyGreaterThan5(arr) {
//   return arr.reduce((prev, curr) => {
//     if (curr > 5) {
//       return prev * curr;
//     } else {
//       return prev;
//     }
//   }, 1);
// }

// const result = multiplyGreaterThan5(numbers);
// console.log(result); // Expected output: 480

// SECOND APPROCH

// const numbers = [2, 6, 8, 4, 10, 3];

// function multiplyGreaterThan5(arr) {
//   return arr.reduce((prev, curr) => (curr > 5 ? (prev *= curr) : prev), 1);
// }

// const result = multiplyGreaterThan5(numbers);
// console.log(result); // Expected output: 480

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare, lekin sirf un strings ko shaamil kare jo 3 se zyada alphabets ke hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["Hello", "world", "this", "is", "a", "sentence"];

// function createSentence(arr) {
//   return arr.reduce((prev, curr) => (curr.length > 4 ? prev + curr : prev), "");
// }

// const result = createSentence(words);
// console.log(result); // Expected output: "Helloworldsentence"

// Ek array di gayi hai jismein har element ek object hai, aur har object ek product ko represent karta hai jismein name aur price properties hain. Tumhe ek function likhna hai jo in products ka total price calculate kare, lekin sirf un products ka jo price property 1000 se zyada hai. Tumhe isko reduce method ka istemal karke solve karna hai.

// const products = [
//   { name: "Laptop", price: 1200 },
//   { name: "Phone", price: 800 },
//   { name: "Tablet", price: 1500 },
//   { name: "Headphones", price: 500 },
// ];

// function calculateTotalPrice(arr) {
//   return arr.reduce(
//     (prev, curr) => (curr.price > 1000 ? (prev += curr.price) : prev),
//     0
//   );
// }

// const result = calculateTotalPrice(products);
// console.log(result); // Expected output: 2700

// Ek array di gayi hai jismein har element ek object hai, aur har object ek student ko represent karta hai jismein name aur marks properties hain. Tumhe ek function likhna hai jo in students ke marks ka sum calculate kare, lekin sirf un students ka jo marks property 60 se zyada hai. Tumhe isko reduce method ka istemal karke solve karna hai. /

// const students = [
//   { name: "Alice", marks: 75 },
//   { name: "Bob", marks: 45 },
//   { name: "Charlie", marks: 90 },
//   { name: "David", marks: 55 },
// ];

// function calculateTotalMarks(arr) {
//   return arr.reduce(
//     (prev, curr) => (curr.marks > 60 ? (prev += curr.marks) : prev),
//     0
//   );
// }

// const result = calculateTotalMarks(students);
// console.log(result); // Expected output: 165

// Ek array di gayi hai jismein har element ek string hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare, lekin sirf un strings ko jo length 3 se badi hai aur jo 'a' se shuru hoti hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const strings = ["apple", "banana", "avocado", "kiwi", "orange"];

// function concatenateStrings(arr) {
//   return arr.reduce((prev, curr) => {
//     const letter = "a";
//     const firstletter = curr.charAt(0);

//     if (firstletter === letter && curr.length > 3) {
//       prev += curr;
//     }
//     return prev;
//   }, "");
// }

// const result = concatenateStrings(strings);
// console.log(result); // Expected output: "appleavocadoorange"

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare, lekin sirf un strings ko shaamil kare jo uppercase (sabhi alphabets capital) hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["Hello", "WORLD", "this", "IS", "a", "sentence"];

// function createUpperCaseSentence(arr) {
//   return arr.reduce(
//     (prev, curr) => (curr.toUpperCase() === curr ? (prev += curr) : prev),
//     ""
//   );
// }

// const result = createUpperCaseSentence(words);
// console.log(result); // Expected output: "HELLOWORLDIS"

// Ek array di gayi hai jismein har element ek number hai. Tumhe ek function likhna hai jo ye numbers ko add kare, lekin sirf un numbers ko jo odd hain aur 5 se bade hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [2, 7, 10, 15, 3, 8];

// function addOddNumbersGreaterThan5(arr) {
//   return arr.reduce((prev, curr) => {
//     if (curr % 2 != 0 && curr > 5) {
//       prev += curr;
//     }
//     return prev;
//   }, 0);
// }

// const result = addOddNumbersGreaterThan5(numbers);
// console.log(result); // Expected output: 25

// Ek array di gayi hai jismein har element ek object hai, aur har object ek student ko represent karta hai jismein name, marks, aur subject properties hain. Tumhe ek function likhna hai jo in students ke marks ka average calculate kare, lekin sirf un students ka jo subject property "Math" hai. Tumhe isko reduce method ka istemal karke solve karna hai.

// const students = [
//   { name: "Alice", marks: 75, subject: "Math" },
//   { name: "Bob", marks: 90, subject: "English" },
//   { name: "Charlie", marks: 85, subject: "Math" },
//   { name: "David", marks: 95, subject: "Math" },
// ];

// function calculateMathAverage(arr) {
//   const totatMarks = arr.reduce((prev, curr) => {
//     if (curr.subject === "Math") {
//       prev += curr.marks;
//     }
//     return prev;
//   }, 0);
//   return (
//     totatMarks / arr.filter((element) => element.subject === "Math").length
//   );
// }

// const result = calculateMathAverage(students);
// console.log(result); // Expected output: 85

// Ek array di gayi hai jismein har element ek object hai, aur har object ek product ko represent karta hai jismein name, quantity, aur price properties hain. Tumhe ek function likhna hai jo in products ke total cost ko calculate kare, lekin sirf un products ka jo quantity property 2 se zyada hai. Tumhe isko reduce method ka istemal karke solve karna hai.

// const products = [
//   { name: "Laptop", quantity: 1, price: 800 },
//   { name: "Phone", quantity: 3, price: 400 },
//   { name: "Tablet", quantity: 2, price: 200 },
//   { name: "Headphones", quantity: 4, price: 100 },
// ];

// function calculateTotalCost(arr) {
//   const totalCost = arr.reduce((sum, product) => {
//     if (product.quantity > 2) {
//       return sum + product.quantity * product.price;
//     } else {
//       return sum;
//     }
//   }, 0);
//   return totalCost;
// }

// const result = calculateTotalCost(products);
// console.log(result); // Expected output: 2400

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare, lekin sirf un strings ko shaamil kare jo 4 se zyada alphabets ke hain aur palindrome hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["level", "Hello", "world", "radar", "is", "a", "sentence"];

// function createPalindromeSentence(arr) {
//   const getAnswer = arr.reduce((prev, curr) => {
//     const reverseWords = curr.split("").reverse().join("");

//     if (reverseWords === curr && curr.length > 4) {
//       prev += curr;
//     }
//     return prev;
//   }, "");
//   return getAnswer;
// }

// const result = createPalindromeSentence(words);
// console.log(result); // Expected output: "levelradar"

// Ek array di gayi hai jismein har element ek number hai. Tumhe ek function likhna hai jo ye numbers ko multiply kare, lekin sirf un numbers ko jo even hain aur 10 se chhote hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [2, 5, 8, 10, 3, 6];

// function multiplyEvenNumbersLessThan10(arr) {
//   const Even_Numbers = arr.reduce((prev, curr) => {
//     if (curr % 2 == 0 && curr < 10) {
//       prev *= curr;
//     }
//     return prev;
//   }, 1);
//   return Even_Numbers;
// }

// const result = multiplyEvenNumbersLessThan10(numbers);
// console.log(result); // Expected output: 96

// Ek array di gayi hai jismein har element ek number hai. Tumhe ek function likhna hai jo ye numbers ko scan kare aur sabse bade aur sabse chhote number ko ek object mein store kare, jismein max aur min properties hongi. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [10, 5, 8, 20, 15];

// function findMinMax(arr) {
//   let max = arr[0];
//   let min = arr[0];
//   return arr.reduce((prev, curr) => {
//     if (curr > max) {
//       max = curr;
//     }
//     if (curr < min) {
//       min = curr;
//     }
//     return { max, min };
//   }, {});
// }

// const result = findMinMax(numbers);
// console.log(result); // Expected output: { max: 20, min: 5 }

// Ek array di gayi hai jismein har element ek string hai. Tumhe ek function likhna hai jo ye strings ko scan kare aur sabse lambi aur sabse chhoti string ko ek object mein store kare, jismein longest aur shortest properties hongi. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["apple", "banana", "kiwi", "grape", "orange"];

// function findLongestShortest(arr) {
//   let longestWord = "";
//   let shortest = arr[0];
//   return arr.reduce((prev, curr) => {
//     if (curr.length > longestWord.length) {
//       longestWord = curr;
//     }
//     if (curr.length < shortest.length) {
//       shortest = curr;
//     }
//     return { longest: `${longestWord}`, shortest: `${shortest}` };
//   });
// }

// const result = findLongestShortest(words);
// console.log(result); // Expected output: { longest: "banana", shortest: "kiwi" }

// Ek array di gayi hai jismein har element ek string hai, aur har string ek sentence ko represent karta hai. Tumhe ek function likhna hai jo ye sentences ko scan kare aur sabse zyada baar aane wale word ko ek object mein store kare, jismein word aur count properties hongi. Tumhe isko reduce method ka istemal karke solve karna hai.

// const sentences = [
//   "This is a test.",
//   "Test the function.",
//   "Function test is successful.",
// ];

// function findMostFrequentWord(arr) {
//   const wordCount = arr.reduce((acc, sentence) => {
//     const words = sentence.split(" ");
//     words.forEach((word) => {
//       acc[word] = (acc[word] || 0) + 1;
//     });
//     return acc;
//   }, {});

//   let mostFrequentWord = "";
//   let maxCount = 0;

//   // Find the word with the highest count
//   for (const word in wordCount) {
//     if (wordCount[word] > maxCount) {
//       mostFrequentWord = word;
//       maxCount = wordCount[word];
//     }
//   }

//   return { word: mostFrequentWord, count: maxCount };
// }

// const result = findMostFrequentWord(sentences);
// console.log(result); // Expected output: { word: "test", count: 3 }

// Ek array di gayi hai jismein har element ek number hai. Tumhe ek function likhna hai jo ye numbers ko scan kare aur ek object mein store kare, jismein even aur odd properties hongi. even property mein even numbers ka sum aur odd property mein odd numbers ka sum hona chahiye. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [2, 5, 8, 10, 3, 6];

// function separateEvenOddSums(arr) {
//   let even = 0;
//   let odd = 0;
//   return arr.reduce((prev, curr) => {
//     if (curr % 2 == 0) {
//       even += curr;
//     } else {
//       odd += curr;
//     }
//     return { Even: `${even}`, Odd: `${odd}` };
//   }, {});
// }

// const result = separateEvenOddSums(numbers);
// console.log(result); // Expected output: { even: 26, odd: 8 }

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare aur sentence banaye, lekin sirf un words ko shaamil kare jo palindrome hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["level", "Hello", "world", "radar", "is", "a", "sentence"];

// function createPalindromeSentence(arr) {
//   const reverseWords = arr.reduce((prev, curr) => {
//     const words = curr.split("").reverse().join("");
//     if (curr == words) {
//       prev += curr;
//     }
//     return prev;
//   }, "");
//   return reverseWords;
// }

// const result = createPalindromeSentence(words);
// console.log(result); // Expected output: "level radar"

// // SECOND APPROCH

// const words = ["level", "Hello", "world", "radar", "is", "a", "sentence"];

// function createPalindromeSentence(arr) {
//   const reverseWords = arr.reduce(
//     (prev, curr) =>
//       curr.split("").reverse().join("") == curr ? (prev += curr) : prev,
//     ""
//   );
//   return reverseWords;
// }

// const result = createPalindromeSentence(words);
// console.log(result); // Expected output: "level radar"

// Ek array di gayi hai jismein har element ek number hai. Tumhe ek function likhna hai jo ye numbers ko scan kare aur ek object mein store kare, jismein positive aur negative properties hongi. positive property mein positive numbers ka sum aur negative property mein negative numbers ka sum hona chahiye. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [2, -5, 8, -10, 3, 6];

// function separatePositiveNegativeSums(arr) {
//   let negative = 0;
//   let positive = 0;
//   return arr.reduce((prev, curr) => {
//     if (curr > 0) {
//       positive += curr;
//     } else {
//       negative += curr;
//     }
//     return { positiveSum: `${positive}`, NegativeSum: `${negative}` };
//   }, {});
// }

// const result = separatePositiveNegativeSums(numbers);
// console.log(result); // Expected output: { positive: 19, negative: -15 }

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare aur sentence banaye, lekin sirf un words ko shaamil kare jo "a" se shuru ho rahe hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["apple", "banana", "kiwi", "grape", "orange"];

// function createSentenceStartingWithA(arr) {
//   const letter = "a";
//   return arr.reduce((prev, curr) => {
//     const firstletter = curr.charAt(0);
//     if (firstletter == letter) {
//       prev += curr;
//     }
//     return prev;
//   }, "");
// }

// const result = createSentenceStartingWithA(words);
// console.log(result); // Expected output: "apple and and a"

// SECOND APPROCH

// const words = ["apple", "banana", "kiwi", "grape", "orange"];

// function createSentenceStartingWithA(arr) {
//   const letter = "a";
//   return arr.reduce(
//     (prev, curr) => (curr.charAt(0) == letter ? (prev += curr) : prev),
//     ""
//   );
// }

// const result = createSentenceStartingWithA(words);
// console.log(result); // Expected output: "apple and and a"

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare aur sentence banaye, lekin sirf un words ko shaamil kare jo 3 alphabets se zyada hain aur even length ke hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["dog", "cat", "elephant", "lion", "tiger"];

// function createSentenceWithEvenLength(arr) {
//   return arr.reduce((prev, curr) => {
//     if (curr.length > 3 && curr.length % 2 == 0) {
//       prev += curr;
//     }
//     return prev;
//   }, "");
// }

// const result = createSentenceWithEvenLength(words);
// console.log(result); // Expected output: "elephant"

// Ek string di gayi hai, jismein words space ke saath separate hain. Tumhe ek function likhna hai jo ye string ko scan kare aur reduce method ka istemal karke har word ka total length calculate kare.

// const inputString = "This is a sample string";
// // console.log(inputString.length)
// function calculateTotalWordLength(str) {
//   const breakStr = str.split("").reduce((prev, curr) => {
//     const wordslength = curr.length;
//     prev += wordslength;
//     return prev;
//   }, 0);
//   return breakStr;
// }

// const result = calculateTotalWordLength(inputString);
// console.log(result); // Expected output: 20

// // SECOND APPROCH

// const inputString = "This is a sample string";

// function calculateTotalWordLength(str) {
//   return str.split(" ").reduce((prev, curr) => (prev += curr.length), 0);
// }

// const result = calculateTotalWordLength(inputString);
// console.log(result); // Expected output: 20

// Ek array di gayi hai jismein har element ek number hai, lekin har number ka saath ek weight bhi diya gaya hai. Tumhe ek function likhna hai jo ye weights ka sum calculate kare, lekin har element ka weight utna hi barabar hoga jitna uska index. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [3, 7, 5, 2, 8];

// function calculateWeightedSum(arr) {
//   const weightedSum = arr.reduce((acc, curr, index) => acc + curr * index, 0);

//   return weightedSum;
// }

// const result = calculateWeightedSum(numbers);
// console.log(result); // Expected output: 64 (3*0 + 7*1 + 5*2 + 2*3 + 8*4)

// write a function to uppercase the first word of string

// function capitalize_String(string) {
//   return string.split(" ").reduce((prev, curr) => {
//     const getfirst = curr.charAt(0).toUpperCase() + curr.slice(1);
//     prev += `${getfirst} `;
//     return prev;
//   }, "");
// }

// console.log(capitalize_String("this is the string"));

// write a function to find uppercase letter in the string and fornt of atring
// function apToFront(string) {
//   const upperCaseLetter = string
//     .split("")
//     .reduce(
//       (prev, curr) => (curr.toUpperCase() === curr ? prev + curr : prev),
//       ""
//     );
//   const lowerCaseLetter = string
//     .split("")
//     .reduce(
//       (prev, curr) => (curr.toLowerCase() === curr ? prev + curr : prev),
//       ""
//     );
//   return `${upperCaseLetter}${lowerCaseLetter}`;
// }

// console.log(apToFront("HeLLo"));

// Write a function that takes an array of arrays and returns an array containing the common elements present in all subarrays. Assume that all elements are of primitive data types (numbers, strings, etc.).

// function findCommonElements(arrays) {
//     return arrays.reduce((prev, curr) => {
//       return prev.filter((element) => curr.includes(element));
//     }, arrays[0]);
//   }

//   let data = [
//     [1, 2, 3, 4, 5],
//     [2, 3, 5, 7, 9],
//     [3, 4, 5, 8, 10],
//     // ... more arrays
//   ];

//   let commonElements = findCommonElements(data);
//   console.log(commonElements);

// Write a function that takes an array of integers and a target sum. The function should return an array containing the indices of the two numbers in the array that add up to the target sum.

// function twoSum(nums, target) {
//   return nums.reduce((prev, element, index, arr) => {
//     if (element + arr[index + 1] == target) {
//       prev.push(element, arr[index + 1]);
//     }
//     return prev;
//   }, []);
// }

// let numbers = [2, 7, 11, 15];
// let targetSum = 9;
// let result = twoSum(numbers, targetSum);
// console.log(result); // Output should be [0, 1] because numbers[0] + numbers[1] equals 9
