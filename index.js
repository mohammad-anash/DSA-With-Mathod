// write  a function to count string without space

// function count_String(string) {
//   return string.replaceAll(" ", "").length;
// }

// console.log(count_String("this is the string"));

// SECOND APPROCH

// function count_String(string) {
//   let newstring = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] != " ") {
//       newstring += string[i];
//     }
//   }
//   return newstring.length;
// }

// console.log(count_String("this is the string"));

// write a function to count wor in the string

// function count_word(string) {
//   let count = 1;
//   for (let i = 0; i < string.length; i++) {
//     if (string[i] == " ") {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(count_word("this is the string"));

// SECOND APPROCH

// function count_Word(string) {
//   return string.split(" ").length;
// }

// console.log(count_Word("this is the string"));

// write a function to find even in the array

// function find_even(array) {
//   return array.filter((element) => element % 2 == 0);
// }

// console.log(find_even([1, 2, 3, 4, 5]));

// write a function to find odd in the array

// function find_even(array) {
//   return array.filter((element) => element % 2 !== 0);
// }

// console.log(find_even([1, 2, 3, 4, 5]));

// write a function to remove duplicate elementin the array

// function remove_Dup(array) {
//   return array.filter((element, index, array) => {
//     return array.indexOf(element) === index;
//   });
// }

// console.log(remove_Dup([1, 2, 3, 1, 4, 5, 6, 4]));

// SECOND APPROCH

// function remove_Dup(array) {
//   const removeRepeated = new Set(array);
//   const convertIt = [...removeRepeated];
//   return convertIt;
// }

// console.log(remove_Dup([1, 2, 3, 4, 5, 3, 4]));

// write a function to check the given string is palimdrom or not

// function check_String(string) {
//   let newstring = "";
//   for (let i = string.length - 1; i >= 0; i--) {
//     newstring += string[i];
//   }
//   return newstring === string;
// }

// console.log(check_String("madam"));

// SECOND APPROCH

// function check_String(string) {
//   return string === string.split("").reverse().join("");
// }
//
// console.log(check_String("civic"));

// write function to remove space and add - between space like "hello-world"

// function add_Dash(string) {
//   let newstring = "";
//   for (let i = 0; i < string.length; i++) {
// if (string[i] == " ") {
//   newstring += "-";
// } else {
//   newstring += string[i];
// }
//   }
//   return newstring;
// }
//
// console.log(add_Dash("this is the string"));

// SECOND APPROCH

// function add_Dash(string) {
//     return string.split(" ").join("-")
// }

// console.log(add_Dash("this is the string"));

// THIRD APPROCH

// function add_Dash(string) {
//   return string.replaceAll(" ", "-")
// }

// console.log(add_Dash("this is the string"));

// write a function to count vowel and consonant in the given string

// function vowel_VSconsoannt(string) {
//   const removeSpace = string.replaceAll(" ", "");
//   let vowel = "aeiou";
//   let vowelcount = 0;
//   let consCount = 0;
//   for (let i = 0; i < removeSpace.length; i++) {
//     if (vowel.includes(removeSpace[i])) {
//       vowelcount++;
//     } else {
//       consCount++;
//     }
//   }
//   return [vowelcount, consCount];
// }

// console.log(vowel_VSconsoannt("this is the string"));

// SECOND APPROCH

// function vowel_VSconsoannt(string) {
//   let vowelCount = 0;
//   let consCount = 0;
//   const vowel = "aeiou";
//   string
//     .replaceAll(" ", "")
//     .split("")
//     .filter((element) => {
//       if (vowel.includes(element)) {
//         vowelCount++;
//       } else {
//         consCount++;
//       }
//     });
//   return [vowelCount, consCount];
// }

// console.log(vowel_VSconsoannt("this is the string"));

// write a function to capitalize each first letter of word

// function first_letter(string) {
//   const breakStr = string.split(" ");
//   for (let i = 0; i < breakStr.length; i++) {
//     const firstletter = breakStr[i].charAt(0);
//     const InUpperCase = firstletter.toUpperCase() + breakStr[i].slice(1);
//     breakStr[i] = InUpperCase;
//   }
//   return breakStr.join(" ")
// }

// console.log(first_letter("the quick brown fox"));

// SECOND APPROCH

// function first_letter(string) {
//   const breakStr = string.split(" ");
//  return breakStr
//     .map((element) => {
//       const firstChar = element.charAt(0);
//       const InUpperCase = firstChar.toUpperCase() + element.slice(1);
//       return InUpperCase;
//     })
//     .join(" ");
// }

// console.log(first_letter("the quich brown fox"));

// THIRD APPROCH

// function first_letter(string) {
//   return string
//     .split(" ")
//     .map((element) => element.charAt(0).toUpperCase() + element.slice(1)).join(" ");
// }

// console.log(first_letter("the quick brown fox"));

// write a function to change string case lowercase to uppercase uppercase to lowercase

// function change_Case(string) {
//   let newstring = "";
//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toUpperCase() == string[i]) {
//       newstring += string[i].toLowerCase();
//     } else if (string[i].toLowerCase() == string[i]) {
//       newstring += string[i].toUpperCase();
//     }
//   }
//   return newstring;
// }

// console.log(change_Case("The Quick Brown Fox"));

// SECOND APPROCH

// function change_Case(string) {
//     return string.split("").map(element => element.toUpperCase() === element ? element.toLowerCase() : element.toUpperCase()).join("")
// }

// console.log(change_Case("The Quick Brown Fox"));

// Create a function that takes an array of strings and returns an array with only the strings that have numbers in them. If there are no strings containing numbers, return an empty array.

// function numInStr(array) {
//   const store = [];
//   const counting = "12345678910";

//   for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     for (let j = 0; j < counting.length; j++) {
//       const digit = counting[j];

//       if (element.includes(digit)) {
//         store.push(element);
//         break;
//       }
//     }
//   }
//   return store;
// }

// console.log(numInStr(["1a", "a", "2b", "b"]));
// console.log(numInStr(["abc", "abc10"]));
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
// console.log(numInStr(["this is a test", "test1"]));

// SECOND APPROCH

// function numInStr(array) {
//   const counting = "12345678910";
//   for (let i = 0; i < counting.length; i++) {
//     return array.filter((element) => {
//       if (element.includes(counting[i])) {
//         return element;
//       }
//     });
//   }
// }

// console.log(numInStr(["1a", "a", "2b", "b"]));
// console.log(numInStr(["abc", "abc10"]));
// console.log(numInStr(["abc", "ab10c", "a10bc", "bcd"]));
// console.log(numInStr(["this is a test", "test1"]));

// write a function to reverse odd length

// function reverseOdd(string) {
//   const breakString = string.split(" ");
//   const store = [];
//   for (let i = 0; i < breakString.length; i++) {
//     const lengths = breakString[i].length;

//     if (lengths % 2 != 0) {
//       store.push(breakString[i].split("").reverse().join(""));
//     } else {
//       store.push(breakString[i]);
//     }
//   }
//   return store;
// }

// console.log(reverseOdd("Bananas"));
// console.log(reverseOdd("One two three four"));
// console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));

// SECOND AOPPROCH

// function reverseOdd(string) {
//   return string
//     .split(" ")
//     .map((element) =>
//       element.length % 2 != 0 ? element.split("").reverse().join("") : element
//     );
// }

// console.log(reverseOdd("Bananas"));
// console.log(reverseOdd("One two three four"));
// console.log(reverseOdd("Make sure uoy only esrever sdrow of ddo length"));

// Build a function that creates histograms. Every bar needs to be on a new line and its length corresponds to the numbers in the array passed as an argument. The second argument of the function represents the character to be used for the bar.

// function histogram(array, his) {
//   let newstring = "";
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i]; j++) {
//       newstring += his;
//     }
//     newstring += "\n";
//   }
//   return newstring;
// }

// console.log(histogram([1, 3, 4], "#"));
// console.log(histogram([6, 2, 15, 3], "="));
// console.log(histogram([1, 10], "+"));

// SECOND APPROCH

// function histogram(array, his) {
//   return array
//     .map((element) => {
//       return his.repeat(element);
//     })
//     .join("\n");
// }

// console.log(histogram([1, 3, 4], "#"));
// console.log(histogram([6, 2, 15, 3], "="));
// console.log(histogram([1, 10], "+"));

// Write a function that inserts a white space between every instance of a lower character followed immediately by an upper character.

// function insertWhitespace(string) {
//   let newstring = "";
//   const breakStr = string.split("");
//   for (let i = 0; i < breakStr.length; i++) {
//     if (breakStr[i].toUpperCase() == breakStr[i]) {
//       newstring += ` ${breakStr[i]}`;
//     } else {
//       newstring += breakStr[i];
//     }
//   }
//   return newstring.trim("");
// }

// console.log(insertWhitespace("SheWalksToTheBeach"));
// console.log(insertWhitespace("MarvinTalksTooMuch"));
// console.log(insertWhitespace("TheGreatestUpsetInHistory"));

// SECIOND APROOCH

// function insertWhitespace(string) {
//   return string
//     .split("")
//     .map((element) =>
//       element.toUpperCase() === element ? ` ${element}` : element
//     )
//     .join("")
//     .trim();
// }

// console.log(insertWhitespace("SheWalksToTheBeach"));
// console.log(insertWhitespace("MarvinTalksTooMuch"));
// console.log(insertWhitespace("TheGreatestUpsetInHistory"));

// Given what is supposed to be typed and what is actually typed, write a function that returns the broken key(s). The function looks like:

// function findBrokenKeys(str1, str2) {
//   const breakStr1 = str1.split("");

//   let newstring = [];

//   for (let i = 0; i < breakStr1.length; i++) {
//     const element = breakStr1[i];
//     if (!str2.includes(element)) {
//       newstring.push(element);
//     }
//   }
//   return newstring;
// }

// console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
// console.log(findBrokenKeys("starry night", "starrq light"));
// console.log(findBrokenKeys("beethoven", "affthoif5"));

// SECOND APPROCH

// function findBrokenKeys(str1, str2) {
//   const breakStr = str1.split("");
//   const brokenKeys = breakStr.filter((element) => !str2.includes(element));
//   return brokenKeys;
// }

// console.log(findBrokenKeys("happy birthday", "hawwy birthday"));
// console.log(findBrokenKeys("starry night", "starrq light"));
// console.log(findBrokenKeys("beethoven", "affthoif5"));

// Create a function that takes a string and returns the first character that repeats. If there is no repeat of a character, return "-1".

// function firstRepeat(string) {
//   const breakStr = string.split("");
//   let newstring = "";
//   for (let i = 0; i < breakStr.length; i++) {
//     for (let j = i + 1; j < breakStr.length; j++) {
//       if (breakStr[i] == breakStr[j]) {
//         newstring += breakStr[i];
//       }
//     }
//   }
//   return `first letter that repeat: ${newstring}`;
// }

// console.log(firstRepeat("legolas"));
// console.log(firstRepeat("Gandalf"));
// console.log(firstRepeat("Balrog"));
// console.log(firstRepeat("Isildur"));
