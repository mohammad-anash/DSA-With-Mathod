// Sawaal: Array mein se sirf even (sam) numbers ko filter karke ek naya array banao.

// Aap is sawaal ko solve karne ke liye JavaScript ke filter method ka istemal kar sakte hain. Yahan ek shuruat hai:

// function filterEvenNumbers(arr) {
//   return arr.filter((element) => element % 2 == 0);
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = filterEvenNumbers(numbers);
// console.log(evenNumbers); // Output should be [2, 4, 6, 8, 10]

// Sawaal: Ek array di gayi hai jisme positive integers hain. Aapko ek naya array banaana hai jo har element ko double (multiply by 2) kare.

// function doublePositiveNumbers(arr) {
//   return arr.filter((element) => element > 0).map((element) => element * 2);
// }

// // Example usage:
// const positiveNumbers = [3, 7, 1, 8, 4, 6];
// const doubledNumbers = doublePositiveNumbers(positiveNumbers);
// console.log(doubledNumbers); // Output should be [6, 14, 2, 16, 8, 12]

// Sawaal: Ek array di gayi hai jo strings ko contain karta hai. Aapko ek naya array banaana hai jismein sirf woh strings shamil hoon jo 5 ya usse zyada characters ke hain.

// function filterStringsByLength(arr) {
//   const greaterthenfive = arr.filter((element) => element.length > 5);
//   return greaterthenfive;
// }

// // Example usage:
// const words = ["apple", "banana", "orange", "kiwi", "grape"];
// const filteredWords = filterStringsByLength(words);
// console.log(filteredWords); // Output should be ["banana", "orange", "grape"]

// Sawaal: Ek array di gayi hai jo numbers ko contain karta hai. Aapko ek naya array banaana hai jismein sirf woh numbers shamil hoon jo odd (visham) hain.

// function filterOddNumbers(arr) {
//   return arr.filter((element) => element % 2 != 0);
// }

// // Example usage:
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const oddNumbers = filterOddNumbers(numbers);
// console.log(oddNumbers); // Output should be [1, 3, 5, 7, 9]

// Sawaal: Ek array di gayi hai jo strings ko contain karta hai. Aapko ek naya array banaana hai jismein sirf woh strings shamil hoon jo 'a' har ek string mein shamil hai.

// function filterStringsWithA(arr) {
//   const letter = "a";
//   const findletter = arr.filter((element) => {
//     return element.includes(letter);
//   });
//   return findletter;
// }

// // Example usage:
// const words = ["apple", "banana", "orange", "kiwi", "grape"];
// const filteredWords = filterStringsWithA(words);
// console.log(filteredWords); // Output should be ["apple", "banana", "grape"]

// Sawaal: Ek array di gayi hai jo objects ko contain karta hai. Har object ek student ko represent karta hai, jismein 'name' aur 'marks' properties hain. Aapko ek naya array banaana hai jismein sirf woh students shamil hoon jo marks mein 70 se zyada laaye hain.

// const students = [
//   { name: "Alice", marks: 80 },
//   { name: "Bob", marks: 45 },
//   { name: "Charlie", marks: 95 },
//   { name: "David", marks: 60 },
//   // ... more students
// ];

// function filterStudentsByMarks(arr) {
//   return arr.filter((element) => element.marks > 70);
// }

// // Example usage:
// const highScorers = filterStudentsByMarks(students);
// console.log(highScorers);
// // Output should be an array containing objects of students with marks greater than 70.

// Sawaal: Ek array di gayi hai jo objects ko contain karta hai. Har object ek book ko represent karta hai, jismein 'title', 'author', aur 'publishedYear' properties hain. Aapko ek naya array banaana hai jismein sirf woh books shamil hoon jo 2000 ke baad publish hui hain.

// const books = [
//   { title: "Book1", author: "Author1", publishedYear: 1998 },
//   { title: "Book2", author: "Author2", publishedYear: 2005 },
//   { title: "Book3", author: "Author3", publishedYear: 1995 },
//   { title: "Book4", author: "Author4", publishedYear: 2008 },
//   // ... more books
// ];

// function filterBooksByYear(arr) {
//   return arr.filter((element) => element.publishedYear > 2000);
// }

// // Example usage:
// const recentBooks = filterBooksByYear(books);
// console.log(recentBooks);
// Output should be an array containing objects of books published in or after 2000.

// Sawaal: Ek array di gayi hai jo objects ko contain karta hai. Har object ek product ko represent karta hai, jismein 'name', 'price', aur 'stock' properties hain. Aapko ek naya array banaana hai jismein sirf woh products shamil hoon jo stock mein hain (stock > 0) aur jinki price 1000 se kam hai.

// const products = [
//   { name: "Product1", price: 750, stock: 5 },
//   { name: "Product2", price: 1200, stock: 0 },
//   { name: "Product3", price: 900, stock: 8 },
//   { name: "Product4", price: 1100, stock: 3 },
//   // ... more products
// ];

// function filterAvailableProducts(arr) {
//   return arr.filter((element) => element.price < 1000 && element.stock > 0);
// }

// // Example usage:
// const availableProducts = filterAvailableProducts(products);
// console.log(availableProducts);
// // Output should be an array containing objects of products with stock > 0 and price < 1000.

// Sawaal: Ek array di gayi hai jo objects ko contain karta hai. Har object ek employee ko represent karta hai, jismein 'name', 'department', aur 'salary' properties hain. Aapko ek naya array banaana hai jismein sirf woh employees shamil hoon jo 'IT' department mein hain aur unki salary 50000 se zyada hai.

// const employees = [
//   { name: "Alice", department: "IT", salary: 55000 },
//   { name: "Bob", department: "HR", salary: 48000 },
//   { name: "Charlie", department: "IT", salary: 60000 },
//   { name: "David", department: "Finance", salary: 52000 },
//   // ... more employees
// ];

// function filterITEmployeesWithHighSalary(arr) {
//   return arr.filter(
//     (element) => element.department === "IT" && element.salary > 5000
//   );
// }

// // Example usage:
// const highPaidITEmployees = filterITEmployeesWithHighSalary(employees);
// console.log(highPaidITEmployees);
// // Output should be an array containing objects of IT department employees with salary > 50000.

// Sawaal: Ek array di gayi hai jo objects ko contain karta hai. Har object ek order ko represent karta hai, jismein 'id', 'totalAmount', aur 'items' properties hain. 'items' ek array hai jismein har ek item ko ek object ke roop mein represent kiya gaya hai jismein 'name' aur 'price' properties hain. Aapko ek naya array banaana hai jismein sirf woh orders shamil hoon jinke totalAmount 5000 se zyada hai aur jo ek specific item (jaise 'Laptop') ko shamil karte hain.

// const orders = [
//   {
//     id: 1,
//     totalAmount: 6000,
//     items: [
//       { name: "Laptop", price: 4000 },
//       { name: "Mouse", price: 500 },
//     ],
//   },
//   {
//     id: 2,
//     totalAmount: 4500,
//     items: [
//       { name: "Desktop", price: 3000 },
//       { name: "Keyboard", price: 500 },
//     ],
//   },
//   {
//     id: 3,
//     totalAmount: 7000,
//     items: [
//       { name: "Laptop", price: 4500 },
//       { name: "Monitor", price: 1000 },
//     ],
//   },
//   // ... more orders
// ];

// function filterOrdersWithHighTotalAndItem(arr, itemName) {
//   return arr.filter(
//     (element) => element.totalAmount > 5000 && itemName === "Laptop"
//   );
// }

// // Example usage:
// const highTotalOrdersWithLaptop = filterOrdersWithHighTotalAndItem(
//   orders,
//   "Laptop"
// );
// console.log(highTotalOrdersWithLaptop);
// // Output should be an array containing objects of orders with totalAmount > 5000 and including the specified item.

// write a function to find the missing number in the array

// function missingNumber(array) {
//   let missingNumbers = [];

//   array.forEach((element, index, arr) => {
//     if (element + 1 !== arr[index + 1]) {
//       missingNumbers.push(element + 1);
//     }
//   });

//   return missingNumbers;
// }

// console.log(missingNumber([1, 2, 3, 5]));

// Ek array hai jisme har element ek string hai: const colors = ['Red', 'green', 'Blue', 'YELLOW']. Use filter to create a new array containing only colors that are not in all uppercase.

// const colors = ["Red", "green", "Blue", "YELLOW"];

// function findcolors(arr) {
//   return arr.filter((element) => element.toUpperCase() !== element);
// }

// const result = findcolors(colors);
// console.log(result);

// Ek array hai jisme kuch duplicate values hain: const numbers = [1, 2, 3, 4, 2, 5, 1, 6]. Use filter to create a new array containing only unique values

// const numbers = [1, 2, 3, 4, 2, 5, 1, 6];

// function remove_Dup(arr) {
//   return arr.filter((element, index, arr) => {
//     console.log(arr.indexOf(element), index);
//   });
// }

// console.log(remove_Dup(numbers));

// next question

// Ek array hai jisme strings hain. Use filter to create a new array containing only palindromic strings. (Palindromic strings are the same when read backward, e.g., "level" or "madam")

// const words = ["level", "anash", "words", "radar"];

// function palimdromWords(arr) {
//   return arr.filter(
//     (element) => element == element.split("").reverse().join("")
//   );
// }
// console.log(palimdromWords(words));

// Ek array hai jisme har element ek object hai jiska structure ye hai: { name: 'John', age: 25, score: 80 }. Use filter to create a new array containing only objects where age is greater than 20 and score is greater than 70.

// const about = [{ name: "John", age: 25, score: 80 }];

// function structuring(arr) {
//   return arr.filter((element) => element.age > 20 && element.score > 70);
// }

// console.log(structuring(about));

// Ek array hai jisme strings hain. Use filter to create a new array containing only strings with all unique characters. with new set

// function uniqueElement(string) {
//   const removeRepeated = new Set(string);
//   const convertArray = [...removeRepeated];
//   return convertArray.join("");
// }

// console.log(uniqueElement("my name is anash"));

// SECOND APPROCH WITHOUT NEW SET

// function uniqueElement(string) {
//   const charCode = string.split("").map((element) => {
//     return element.charCodeAt();
//   });

//   const UniqueArray = charCode.filter((element, index, arr) => {
//     return arr.indexOf(element) === index;
//   });

//   const convertInString = UniqueArray.map((element) => {
//     return String.fromCharCode(element);
//   });
//   return convertInString.join("");
// }

// console.log(uniqueElement("my name is anash"));

// Do arrays hain: const array1 = [1, 2, 3, 4, 5] aur const array2 = [3, 4, 5, 6, 7]. Use filter to create a new array containing only common elements between the two arrays.

// function newArray(arr, arr2) {
//   return arr.filter((element) => arr2.includes(element));
// }

// console.log(newArray([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

// Ek array hai jisme har element ek object hai jiska structure ye hai: { name: 'John', age: 25, country: 'USA' }. Use filter to create a new array containing objects with a modified structure, for example, { label: 'Name: John', info: 'Age: 25, Country: USA' }.

// function modifyObject(array) {
//   return array.map((element) => {
//     const label = `Name: ${element.name} Age: ${element.age}`;
//     const info = `Country: ${element.country}`;
//     return { label, info };
//   });
// }

// const obj = [{ name: "John", age: 25, country: "USA" }];
// console.log(modifyObject(obj));

// outPut: { label: 'Name: John', info: 'Age: 25, Country: USA' }

// Create a function that takes an array of words and a specified length as parameters. Use the filter method to return a new array containing only the words that have a length greater than or equal to the specified length.

// function filterWordsByLength(arr, length) {
//   return arr.filter((element) => element.length > length);
// }

// const words = ["apple", "banana", "grape", "kiwi", "orange"];
// const longWords = filterWordsByLength(words, 5);
// console.log(longWords); // Output should be ['banana', 'orange']

// Given an array of student objects (each containing a name and a grade), write a function that uses the filter method to return an array of students who have a grade greater than or equal to a certain value.

// function filterStudentsByGrade(students, grade) {
//   return students.filter((element) => element.grade >= grade);
// }

// let studentData = [
//   { name: "Alice", grade: 85 },
//   { name: "Bob", grade: 92 },
//   { name: "Charlie", grade: 78 },
//   // ... more student data
// ];
// let highGrades = filterStudentsByGrade(studentData, 90);
// console.log(highGrades); // Output should be [{ name: 'Bob', grade: 92 }]

// Write a function that takes an array of numbers and uses the filter method to return a new array containing only the unique elements (remove duplicates).

// function filterUniqueElements(arr) {
//   return arr.filter((element, index, array) => {
//     return array.indexOf(element) === index;
//   });
// }

// let numbers = [1, 2, 3, 2, 4, 5, 4, 6];
// let uniqueNumbers = filterUniqueElements(numbers);
// console.log(uniqueNumbers); // Output should be [1, 2, 3, 4, 5, 6]

//
// Yahan aapko diye gaye question ke liye ek function declaration hai. Yeh function, filterObjectsByProperty, ek array of objects aur ek property name aur value lekar aapko woh objects deta hai jinmein specified property given value ke equal hai.

// function filterObjectsByProperty(arr, propertyName, value) {
//   return arr.filter((item) => item[propertyName] === value);
// }

// let data = [
//   { id: 1, name: "Alice", age: 25 },
//   { id: 2, name: "Bob", age: 30 },
//   { id: 3, name: "Charlie", age: 25 },
//   // ... more data
// ];

// let result = filterObjectsByProperty(data, "age", 25);
// console.log(result);

// Write a function that takes an array of objects and a property name. The function should group the objects based on the values of the specified property. The output should be an object where the keys are unique property values, and the values are arrays of objects that have the same property value.

// function groupObjectsByProperty(arr, propertyName) {
//   const groupedObject = {};

//   arr.forEach((element) => {
//     const propertyValue = element[propertyName];
//     if (groupedObject[propertyValue]) {
//       groupedObject[propertyValue].push(element);
//     } else {
//       groupedObject[propertyValue] = [element];
//     }
//   });

//   return groupedObject;
// }

// let students = [
//   { id: 1, name: "Alice", grade: "A" },
//   { id: 2, name: "Bob", grade: "B" },
//   { id: 3, name: "Charlie", grade: "A" },
//   { id: 4, name: "David", grade: "B" },
//   { id: 5, name: "Eva", grade: "A" },
// ];

// const groupedByGrade = groupObjectsByProperty(students, "grade");
// console.log(groupedByGrade);

// Write a function that takes an array of student objects, where each student has multiple subjects with corresponding grades. The function should calculate the average grade for each subject across all students. The output should be an object where the keys are subject names, and the values are the average grades for that subject.

//  NOT PERFECT ANSWER

// function calculateAverageGradesBySubject(students) {
//   let Mathsum = 0;
//   students.map((element) => {
//     const mathMarks = element.grades.math;
//     Mathsum += mathMarks;
//   });
//   const Mathresult = Mathsum;

//   let sciencesum = 0;
//   students.map((element) => {
//     const mathMarks = element.grades.science;
//     sciencesum += mathMarks;
//   });
//   const scienceResult = sciencesum;

//   let historysum = 0;
//   students.map((element) => {
//     const mathMarks = element.grades.history;
//     historysum += mathMarks;
//   });
//   const historyResult = historysum;

//   return {
//     Math: `${Mathresult / 3}`,
//     Science: `${scienceResult / 3}`,
//     historyRes: `${historyResult / 3}`,
//   };
// }

// let students = [
//   { id: 1, name: "Alice", grades: { math: 90, science: 85, history: 78 } },
//   { id: 2, name: "Bob", grades: { math: 92, science: 88, history: 90 } },
//   { id: 3, name: "Charlie", grades: { math: 85, science: 80, history: 92 } },
//   // ... more student data
// ];

// let averageGradesBySubject = calculateAverageGradesBySubject(students);
// console.log(averageGradesBySubject);

// // output like this {
// //     'math': 89,
// //     'science': 84.33,
// //     'history': 86.67
// // }

// Write a function that takes an array of arrays and returns an array containing the common elements present in all subarrays. Assume that all elements are of primitive data types (numbers, strings, etc.).

// function findCommonElements(arrays) {
//   return arrays.reduce((prev, curr) => {
//     return prev.filter((element) => curr.includes(element));
//   }, arrays[0]);
// }

// let data = [
//   [1, 2, 3, 4, 5],
//   [2, 3, 5, 7, 9],
//   [3, 4, 5, 8, 10],
//   // ... more arrays
// ];

// let commonElements = findCommonElements(data);
// console.log(commonElements);
