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

// In each input array, every number repeats at least once, except for two. Write a function that returns the two unique numbers.

// function returnUnique(array) {
//   const store = [];

//   for (let i = 0; i < array.length; i++) {
//     let currentvalue = true;

//     for (let j = 0; j < array.length; j++) {
//       if (i != j && array[i] == array[j]) {
//         currentvalue = false;
//         break;
//       }
//     }
//     if (currentvalue) {
//       store.push(array[i]);
//     }
//   }
//   return store;
// }

// console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]));
// console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]));
// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

// SECOND APPROCH

// function returnUnique(array) {
//   var counts = {};
//   array.forEach(function (element) {
//     counts[element] = (counts[element] || 0) + 1;
//   });

//   return array.filter((element) => {
//     return counts[element] === 1;
//   });
// }

// console.log(returnUnique([1, 9, 8, 8, 7, 6, 1, 6]));
// console.log(returnUnique([5, 5, 2, 4, 4, 4, 9, 9, 9, 1]));
// console.log(returnUnique([9, 5, 6, 8, 7, 7, 1, 1, 1, 1, 1, 9, 8]));

// You are given two arrays. The elements in arr1 threw a party and started to mix around. However, one of the elements got lost! Your task is to return the element which was lost.

// function missing(arr1, arr2) {
//   const store = [];
//   for (let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//       store.push(arr1[i]);
//     }
//   }
//   return store;
// }

// console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]));
// console.log(
//   missing([true, true, false, false, true], [false, true, false, true])
// );
// console.log(
//   missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])
// );

// SECOND APPROCH

// function missing(arr1, arr2) {
//   return arr1.filter((element) => !arr2.includes(element));
// }

// console.log(missing([1, 2, 3, 4, 5, 6, 7, 8], [1, 3, 4, 5, 6, 7, 8]));
// console.log(
//   missing([true, true, false, false, true], [false, true, false, true])
// );
// console.log(
//   missing(["Jane", "is", "pretty", "ugly"], ["Jane", "is", "pretty"])
// );

// / di gyi hui string ko reverse aur upper ko lower me lower ko upper me

// function invert(string) {
//   const breakStr = string.split("");
//   let newstring = "";
//   for (let i = breakStr.length - 1; i >= 0; i--) {
//     if (breakStr[i].toUpperCase() == breakStr[i]) {
//       newstring += breakStr[i].toLowerCase();
//     } else if (breakStr[i].toLowerCase() === breakStr[i]) {
//       newstring += breakStr[i].toUpperCase();
//     }
//   }
//   return newstring;
// }

// console.log(invert("dLROW YM sI HsEt"));
// console.log(invert("ytInIUgAsnOc"));
// console.log(invert("step on NO PETS"));
// console.log(invert("XeLPMoC YTiReTXeD"));

// SECOND APPROCH

// function invert(string) {
//   return string
//     .split("")
//     .map((element) =>
//       element.toUpperCase() == element
//         ? element.toLowerCase()
//         : element.toUpperCase()
//     )
//     .reverse()
//     .join("");
// }

// console.log(invert("dLROW YM sI HsEt"));
// console.log(invert("ytInIUgAsnOc"));
// console.log(invert("step on NO PETS"));
// console.log(invert("XeLPMoC YTiReTXeD"));

// In this challenge, you have to obtain a sentence from the elements of a given matrix. In the matrix, each word of the sentence follows a columnar order from the top to the bottom, instead of the usual left-to-right order: it's time for transposition!

// function transposeMatrix(array) {
//   let newstring = [];
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 0; j < array[i].length; j++) {
//       newstring += array[j] + " ";
//     }
//   }
//   return newstring;
// }

// console.log(transposeMatrix([["Enter"], ["the"], ["Matrix!"]]));
// console.log(
//   transposeMatrix([
//     ["The", "are"],
//     ["columns", "rows."],
//   ])
// );
// console.log(
//   transposeMatrix([
//     ["You", "the"],
//     ["must", "table"],
//     ["transpose", "order."],
//   ])
// );

// SECOND APPROCH

// function transposeMatrix(array) {
//   return array.flat().join(" ");
// }

// console.log(transposeMatrix([["Enter"], ["the"], ["Matrix!"]]));
// console.log(
//   transposeMatrix([
//     ["The", "are"],
//     ["columns", "rows."],
//   ])
// );
// console.log(
//   transposeMatrix([
//     ["You", "the"],
//     ["must", "table"],
//     ["transpose", "order."],
//   ])
// );

// Create a function that moves all capital letters to the front of a word.

// function apToFront(string) {
//   let upperletter = "";
//   let smallletter = "";

//   for (let i = 0; i < string.length; i++) {
//     if (string[i].toUpperCase() == string[i]) {
//       upperletter += string[i];
//     } else {
//       smallletter += string[i];
//     }
//   }
//   return `${upperletter}${smallletter}`;
// }

// console.log(apToFront("hApPy"));
// console.log(apToFront("moveMENT"));
// console.log(apToFront("shOrtCAKE"));

// SECOND APPROCH

// function apToFront(string) {
//   const upperCase = string
//     .split("")
//     .filter((element) => element.toUpperCase() === element);
//   const lowerCase = string
//     .split("")
//     .filter((element) => element.toLowerCase() == element);

//   return upperCase.join("") + lowerCase.join("");
// }

// console.log(apToFront("hApPy"));
// console.log(apToFront("moveMENT"));
// console.log(apToFront("shOrtCAKE"));

// Write a function that reverses all the words in a sentence that start with a particular letter.

// function specialReverse(string, letter) {
//   const breakStr = string.split(" ");
//   let newstring = "";

//   for (let i = 0; i < breakStr.length; i++) {
//     const firstletter = breakStr[i].charAt(0);
//     if (firstletter === letter) {
//       newstring += `${breakStr[i].split("").reverse().join("")} `;
//     } else {
//       newstring += `${breakStr[i]} `;
//     }
//   }
//   return newstring;
// }

// console.log(specialReverse("word searches are super fun", "s"));
// console.log(specialReverse("first man to walk on the moon", "m"));
// console.log(specialReverse("peter piper picked pickled peppers", "p"));

// SECOND APPRCOH

// function specialReverse(string, letter) {
//   return string
//     .split(" ")
//     .map((element) =>
//       element === letter ? element.split("").reverse().join("") : element
//     )
//     .join(" ");
// }

// console.log(specialReverse("word searches are super fun", "s"));
// console.log(specialReverse("first man to walk on the moon", "m"));
// console.log(specialReverse("peter piper picked pickled peppers", "p"));

// Create a function that will remove the letters "a", "b" and "c" from the given string and return the modified version. If the given string does not contain "a", "b", or "c", return null.

// function removeABC(string) {
//   const removeletter = "abc";
//   const breakstring = string.split("");
//   let newstring = "";
//   for (let i = 0; i < breakstring.length; i++) {
//     if (!removeletter.includes(breakstring[i])) {
//       newstring += breakstring[i];
//     }
//   }
//   return newstring;
// }

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));
// console.log(removeABC(""));

// SECOND APPROCH

// function removeABC(string) {
//   const removeletter = "abc";
//   const breakStr = string
//     .split("")
//     .filter((element) => !removeletter.includes(element)).join("");
//   return breakStr;
// }

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));
// console.log(removeABC(""));

// THRID APPROCH

// function removeABC(string) {
//   if (!/["abc"]/i.test(string)) {
//     return -1;
//   }
//   return string.replaceAll("abc", "");
// }

// console.log(removeABC("This might be a bit hard"));
// console.log(removeABC("hello world!"));
// console.log(removeABC(""));

// An isogram is a word that has no duplicate letters. Create a function that takes a string and returns either true or false depending on whether or not it's an "isogram".

// function isIsogram(string) {
//   const changeCase = string.toLowerCase();
//   const breakStr = changeCase.split("");
//   for (let i = 0; i < breakStr.length; i++) {
//     for (let j = i + 1; j < breakStr.length; j++) {
//       if (breakStr[i] == breakStr[j]) {
//         return false;
//       }
//     }
//   }
//   return true;
// }

// console.log(isIsogram("Algorism"));
// console.log(isIsogram("PasSword"));
// console.log(isIsogram("Consecutive"));

// / Create a function that takes a word and returns true if the word has two consecutive identical letters.\

// function doubleLetters(string) {
//   const breakstring = string.split("");
//   for (let i = 0; i < breakstring.length; i++) {
//     if (breakstring[i] == breakstring[i + 1]) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(doubleLetters("loop"));
// console.log(doubleLetters("yummy"));
// console.log(doubleLetters("orange"));
// console.log(doubleLetters("munchkin"));

// Your task is to create a function that takes a string, transforms all but the last four characters into "#" and returns the new masked string.

// function maskify(string, n = 4) {
//   let newString = "";

//   for (let i = 0; i < string.length; i++) {
//     const value = string.length - n;
//     if (i < value) {
//       newString += "#";
//     } else {
//       newString += string[i];
//     }
//   }

//   return newString;
// }

// console.log(maskify("4556364607935616")); // Output: "############5616"
// console.log(maskify("64607935616")); // Output: "#######5616"
// console.log(maskify("1")); // Output: "1"
// console.log(maskify("453534")); // Output: "####34"

// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// function reverse(string) {
//   const words = string.split(" ");
//   let newstring = "";

//   for (let i = 0; i < words.length; i++) {
//     const wordslength = words[i].length;

//     if (wordslength > 5) {
//       newstring += words[i].split("").reverse().join("");
//     } else {
//       newstring += words[i] + " ";
//     }
//   }
//   return newstring;
// }

// console.log(reverse("Reverse"));
// console.log(reverse("This is a typical sentence."));
// console.log(reverse("The dog is big."));

// Write a function that takes a string of one or more words as an argument and returns the same string, but with all five or more letter words reversed. Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

// function reverse(string) {
//   let result = "";
//   let fiveLetter = string.split(" ");

//   for (let i = 0; i < fiveLetter.length; i++){
//     let words = fiveLetter[i].length;
//     if (words > 5) {
//       result += fiveLetter[i].split("").reverse().join("")
//     } else {
//       result += fiveLetter[i] + " "
//     }
//   }
//   return result;
// }

// console.log(reverse("Reverse"));
// console.log(reverse("This is a typical sentence."));
// console.log(reverse("The dog is big."));

// SECOND APPROCH

// function reverse(string) {
//   return string
//     .split(" ")
//     .map((element) =>
//       element.length > 5 ? element.split("").reverse().join("") : element
//     ).join(" ");
// }

// console.log(reverse("Reverse"));
// console.log(reverse("This is a typical sentence."));
// console.log(reverse("The dog is big."));

// Create a function that takes two strings and returns either true or false depending on whether they're anagrams or not.]

// function isAnagram(str1, str2) {
//   const breakstr1 = str1.split("").sort().join("").toLowerCase();
//   const breakstr2 = str2.split("").sort().join("").toLowerCase();
//   return breakstr1 == breakstr2;
// }

// console.log(isAnagram("rcistian", "Cristina"));
// console.log(isAnagram("Dave Barry", "Ray Adverb"));
// console.log(isAnagram("Nope", "Note"));

// reverse which array whos first element are even

// function reverse_Even(array) {
//   const firstletter = array[0];
//   for (let i = 0; i < array.length; i++) {
//     if (firstletter % 2 == 0) {
//       return array.reverse();
//     } else {
//       return array;
//     }
//   }
// }

// console.log(reverse_Even([2, 5, 6, 3]));
// console.log(reverse_Even([3, 7, 6, 3]));

// write a function and check which word first letter has vowel and return uppercase this word

// function vowel_Case(string) {
//   const breakstring = string.split(" ");
//   const vowel = "aeiou";
//   let newstring = "";
//   for (let i = 0; i < breakstring.length; i++) {
//     const firstletter = breakstring[i].charAt(0);
//     if (vowel.includes(firstletter)) {
//       newstring += `${breakstring[i].toUpperCase()} `;
//     } else {
//       newstring += `${breakstring[i]} `;
//     }
//   }
//   return newstring;
// }

// console.log(vowel_Case("my name is nash"));

// SECOND APPROCH

// function vowel_case(string) {
//   const vowel = "aeiou";
//   const breakstring = string.split(" ");
//   return breakstring
//     .map((element) => {
//       const firstletter = element.charAt(0);
//       return vowel.includes(firstletter) ? element.toUpperCase() : element;
//     })
//     .join(" ");
// }

// console.log(vowel_case("my name is anash"));

// Ek array di gayi hai jismein har element ek object hai, aur har object ek student ko represent karta hai jismein name aur marks properties hain. Tumhe ek function likhna hai jo in students ke marks ka average calculate kare. Tumhe isko reduce method ka istemal karke solve karna hai.

// const students = [
//   { name: "Alice", marks: 85 },
//   { name: "Bob", marks: 90 },
//   { name: "Charlie", marks: 75 },
//   { name: "David", marks: 95 },
// ];

// function calculateAverageMarks(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i].marks;
//   }
//   return sum / arr.length;
// }

// const result = calculateAverageMarks(students);
// console.log(result); // Expected output: 86.25

// SECOND APPROCH

// const students = [
//   { name: "Alice", marks: 85 },
//   { name: "Bob", marks: 90 },
//   { name: "Charlie", marks: 75 },
//   { name: "David", marks: 95 },
// ];

// function calculateAverageMarks(arr) {
//   const sum = 0;
//   const findAverage = arr.map((element) => element.marks);
//   return (sum += findAverage) / 4;
// }

// const result = calculateAverageMarks(students);
// console.log(result); // Expected output: 86.25

// Ek array di gayi hai jismein har element ek number hai. Tumhe ek function likhna hai jo ye numbers ko multiply kare, lekin sirf un numbers ko jo greater than 5 hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const numbers = [2, 6, 8, 4, 10, 3];

// function multiplyGreaterThan5(arr) {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 5) {
//       product *= arr[i];
//     }
//   }
//   return product;
// }

// const result = multiplyGreaterThan5(numbers);
// console.log(result); // Expected output: 480

// SECOND APPROCH

// const numbers = [2, 6, 8, 4, 10, 3];

// function multiplyGreaterThan5(arr) {
//   let product = 1;
//   return arr.filter((element) =>
//     element > 5 ? (product *= element) : product
//   );
// }

// const result = multiplyGreaterThan5(numbers);
// console.log(result); // Expected output: 480

// Ek array di gayi hai jismein har element ek string hai, lekin kuch strings ko milake ek sentence banaya jaana hai. Tumhe ek function likhna hai jo ye strings ko concatenate kare, lekin sirf un strings ko shaamil kare jo 3 se zyada alphabets ke hain. Tumhe isko reduce method ka istemal karke solve karna hai.

// const words = ["Hello", "world", "this", "is", "a", "sentence"];

// function createSentence(arr) {
//   let newstring = "";

//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > 4) {
//       newstring += arr[i];
//     }
//   }
//   return newstring;
// }

// const result = createSentence(words);
// console.log(result); // Expected output: "Helloworldsentence"

// SECOND APPROCH

// const words = ["Hello", "world", "this", "is", "a", "sentence"];

// function createSentence(arr) {
//   const greaterthenFour = arr.filter((element) => element.length > 4);
//   return greaterthenFour.join("");
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
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const items = arr[i].price;
//     if (items > 1000) {
//       sum += items;
//     }
//   }
//   return sum;
// }

// const result = calculateTotalPrice(products);
// console.log(result); // Expected output: 2700

// Ek array di gayi hai jismein har element ek object hai, aur har object ek student ko represent karta hai jismein name aur marks properties hain. Tumhe ek function likhna hai jo in students ke marks ka sum calculate kare, lekin sirf un students ka jo marks property 60 se zyada hai. Tumhe isko reduce method ka istemal karke solve karna hai.

// const students = [
//   { name: "Alice", marks: 75 },
//   { name: "Bob", marks: 45 },
//   { name: "Charlie", marks: 90 },
//   { name: "David", marks: 55 },
// ];

// function calculateTotalMarks(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     const items = arr[i].marks;
//     if (items > 60) {
//       sum += items;
//     }
//   }
//   return sum;
// }

// const result = calculateTotalMarks(students);
// console.log(result); // Expected output: 165

// Write a function that takes an array of arrays and merges them into a single array, removing any duplicate elements.

// function mergeAndRemoveDuplicates(arrays) {
//   const mergeArray = arrays.flat();
//   const removeRepeated = Array.from(new Set(mergeArray));
//   return removeRepeated;
// }

// let data = [
//   [1, 2, 3, 4, 5],
//   [2, 3, 5, 7, 9],
//   [3, 4, 5, 8, 10],
//   // ... more arrays
// ];

// let mergedAndUnique = mergeAndRemoveDuplicates(data);
// console.log(mergedAndUnique);

// output like this [1, 2, 3, 4, 5, 7, 9, 8, 10]

// SECOND APPROCH

// function mergeAndRemoveDuplicates(arrays) {
//   const normalArray = arrays.flat();
//   const store = [];

//   for (let i = 0; i < normalArray.length; i++) {
//     if (!store.includes(normalArray[i])) {
//       store.push(normalArray[i]);
//     }
//   }
//   return store;
// }

// let data = [
//   [1, 2, 3, 4, 5],
//   [2, 3, 5, 7, 9],
//   [3, 4, 5, 8, 10],
//   // ... more arrays
// ];

// let mergedAndUnique = mergeAndRemoveDuplicates(data);
// console.log(mergedAndUnique);

// Write a function that generates the Fibonacci series up to a specified number of terms. The Fibonacci series is a sequence of numbers where each number is the sum of the two preceding ones, usually starting with 0 and 1.

// function generateFibonacciSeries(numTerms) {
//   let arr = [0, 1];
//   for (let i = 2; i < numTerms; i++) {
//     arr.push(arr[i - 1] + arr[i - 2]);
//   }
//   return arr;
// }

// let terms = 8;
// let fibonacciSeries = generateFibonacciSeries(terms);
// console.log(fibonacciSeries);

// Write a function that takes an array of integers and a target sum. The function should return an array containing the indices of the two numbers in the array that add up to the target sum.

// function twoSum(nums, target) {
//   return nums.reduce((prev, element, index, arr) => {
//     if (element + arr[index + 1] == target) {
//       prev.push(index, index + 1);
//     }
//     return prev;
//   }, []);
// }
// let numbers = [2, 7, 11, 15];
// let targetSum = 9;
// let result = twoSum(numbers, targetSum);
// console.log(result); // Output should be [0, 1] because numbers[0] + numbers[1] equals 9

// SECOND APPROCH

// function twoSum(nums, target) {
//   return nums.reduce(
//     (prev, element, index, arr) =>
//       element + arr[index + 1] == target ? prev.concat(index, index + 1) : prev,
//     []
//   );
// }

// let numbers = [2, 7, 11, 15];
// let targetSum = 9;
// let result = twoSum(numbers, targetSum);
// console.log(result); // Output should be [0, 1] because numbers[0] + numbers[1] equals 9

// THIRD APPROCH

// function twoSum(nums, target) {
//   const store = [];
//   for (let i = 0; i < nums.length; i++) {
//     if (nums[i] + nums[i + 1] == target) {
//       store.push(i, i + 1);
//     }
//   }
//   return store;
// }

// let numbers = [2, 7, 11, 15];
// let targetSum = 9;
// let result = twoSum(numbers, targetSum);
// console.log(result); // Output should be [0, 1] because numbers[0] + numbers[1] equals 9

// Write a function that rotates an array to the right by a given number of steps. The rotation should be in-place, meaning the original array is modified.

// function rotateArray(nums, k) {
//   for (let i = 0; i <= k; i++) {
//     const getvalue = nums.shift();
//     nums.push(getvalue);
//   }
//   return nums;
// }

// let arrayToRotate = [1, 2, 3, 4, 5, 6, 7];
// let steps = 3;
// rotateArray(arrayToRotate, steps);
// console.log(arrayToRotate); // Output should be [5, 6, 7, 1, 2, 3, 4]

// SECOND APPRCOCH

// function rotateArray(nums, k) {
//   const getvalue = nums.slice(0, k);
//   const value = nums.slice(k).concat(getvalue);
//   console.log(value);
// }

// let arrayToRotate = [1, 2, 3, 4, 5, 6, 7];
// let steps = 3;
// let value = rotateArray(arrayToRotate, steps);
// console.log(value); // Output should be [5, 6, 7, 1, 2, 3, 4]

// Write a function that checks if two strings are anagrams. Anagrams are words or phrases that contain the same characters, but possibly in a different order.

// function areAnagrams(str1, str2) {
//   const modifyStr = str1.split("").sort().join("");
//   const modifyStr2 = str2.split("").sort().join("");

//   return modifyStr == modifyStr2;
// }
// let string1 = "listen";
// let string2 = "silent";
// let result = areAnagrams(string1, string2);
// console.log(result); // Output should be true

// Write a function to find the maximum number in an array using reduce.

// function findmaximum(arr) {
//   return arr.reduce((prev, curr) => {
//     return prev < curr ? curr : prev;
//   }, arr[0]);
// }

// console.log(findmaximum([1, 2, 3, 4, 5]));

// Implement a function to generate the first n numbers of the Fibonacci sequence using the reduce method.

// Function to generate Fibonacci sequence using reduce
// function generateFibonacci(n) {
//   const initialValues = [0, 1];

//   const fibonacciSequence = Array.from({ length: n - 1 }).reduce(
//     (acc, _, index) => {
//       acc.push(acc[index] + acc[index + 1]);
//       return acc;
//     },
//     initialValues
//   );

//   return fibonacciSequence;
// }
// const nTerms = 10;
// const fibonacciSequence = generateFibonacci(nTerms);
// console.log(`Fibonacci Sequence (first ${nTerms} terms): ${fibonacciSequence}`);

// write a function to find missing number in the array

// function missing_Number(array) {
//   const findNumber = array.forEach((element, index, arr) => {
//     if (element + 1 != arr[index + 1]) {
//       return element + 1;
//     }
//   });
//   return findNumber;
// }

// console.log(missing_Number([1, 2, 3, 5]));

// Given an array of numbers, use the map method to create a new array where each number is squared.

// function Element_Sqaured(array) {
//   return array.map((element) => element ** element);
// }

// console.log(Element_Sqaured([1, 2, 3, 4, 5]));

// Given an array of strings, use the map method to capitalize the first letter of each word.

// function tittle_Case(string) {
//   return string
//     .split(" ")
//     .map((element) => element.charAt(0).toUpperCase() + element.slice(1))
//     .join(" ");
// }

// console.log(tittle_Case("the quick born fox"));

// Likhein ek function jo ek string mein kitne unique characters hain, yeh return kare.

// function countUniqueCharacters(string) {
//   const breakStr = string.split("");
//   const removeRepeated = Array.from(new Set(breakStr)).join("");
//   return removeRepeated.length;
// }
// console.log(countUniqueCharacters("progarmming"));

// Second Approch

// function countUniqueCharacters(string) {
//   let count = 0;
//   const breakStr = string.split("");
//   Array.from(new Set(breakStr)).filter((element, index, arr) => {
//     if (element != arr[index + 1]) {
//       count++;
//     }
//   });
//   return count;
// }
// console.log(countUniqueCharacters("anash"));

// Likhein ek function jo ek array ko diye gaye steps ke hisab se right ya left rotate kare.

// const rotateArray = (array, n) => array.slice(n).concat(array.slice(0, n));

// console.log(rotateArray([1, 2, 3, 4, 5], 2));
// // Output: [3, 4, 5, 1, 2]

// Given an array containing n distinct numbers taken from the range 0 to n, find the one that is missing from the array.

// function missingNumber(array) {
//   return array.find((element, index) => element + 1 !== array[index + 1]) + 1;
// }

// console.log(missingNumber([1, 2, 3, 5]));

// write  a function and find the sum of two number complete this sum go to the next two number and ind the sum

// function NextTwoNumber(array) {
//   const store = [];
//   for (let i = 0; i < array.length; i += 2) {
//     store.push(array[i] + array[i + 1]);
//   }
//   let maxNumber = array[0];
//   for (let j = 0; j < store.length; j++) {
//     if ((maxNumber = store[j])) {
//       maxNumber = store[j];
//     }
//   }
//   return maxNumber;
// }
// console.log(NextTwoNumber([1, 2, 3, 4, 5, 6]));

// write a function to generate fab serires of even number

// function FabSeriesEven(n) {
//   const arr = [0, 1];

//   for (let i = 2; i < n; i++) {
//     arr.push(arr[i - 2] + arr[i - 1]);
//   }
//   let clutter = [];
//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] % 2 == 0) {
//       clutter.push(arr[j]);
//     }
//   }
//   return clutter;
// }

// console.log(FabSeriesEven(8));
// if string in uppercase then chaneg this case in lower case if string in lower case then chnage string case in uppercase

// function changeCase(inputstring) {
//   return inputstring
//     .split("")
//     .map(
//       (curr) =>
//         curr.toUpperCase() == curr ? curr.toLowerCase() : curr.toUpperCase(),
//       ""
//     )
//     .join("");
// }

// console.log(changeCase("tHE qIUCH bORWN fOX"));

// Write a function that calculates the average of an array of numbers using the reduce method.

// function findAverage(arr) {
//   return arr.reduce((prev, curr) => (prev += curr), 0) / arr.length;
// }

// console.log(findAverage([1, 2, 3, 4, 5]));

// Given an array of elements, find the element with the maximum occurrence. Use reduce to achieve this.

// function maxOccurence(array) {
//   let obj = {};

//   array.forEach(function (element) {
//     if (obj.hasOwnProperty(element)) {
//       obj[element]++;
//     } else {
//       obj[element] = 1;
//     }
//   });
//   return obj;
// }

// console.log(maxOccurence([1, 2, 3, 4, 5, 4, 3, 6, 7, 8, 3, 2]));

// write  afunction to find vowel in the string

// function vowelfind(string) {
//   const vowel = "aeiou";
//   return string
//     .split("")
//     .reduce((prev, curr) => (vowel.includes(curr) ? prev + curr : prev));
// }

// console.log(vowelfind("this is the string"));

// write a function to count vowel and consonant in the given string

// function findvowel_Consonant(string) {
//   const replaceSpace = string.replaceAll(" ", "");
//   const vowel = "aeiou";
//   let ConsCount = 0;
//   let vowelCount = 0;
//   replaceSpace.split("").filter((element) => {
//     if (vowel.includes(element)) {
//       vowelCount++;
//     } else {
//       ConsCount++;
//     }
//   });
//   return {
//     vowel: `${vowelCount}`,
//     Consonant: `${ConsCount}`,
//   };
// }

// console.log(findvowel_Consonant("this is the string"));

// Write a program to print a pattern of asterisks in the shape of a right-angled triangle. The number of rows should be taken as input from the user.

// for (let i = 0; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write("*");
//   }
//   document.write("<br>");
// }

// Given a string, write a program to reverse the order of words in the string.

// function reverseString(string) {
//   return string.split(" ").reverse().join(" ");
// }

// console.log(reverseString("Coding Is Fun"));

// with loop

// function reverseString(string) {
//   const breakString = string.split(" ");
//   let newstring = "";
//   for (let i = breakString.length - 1; i >= 0; i--) {
//     newstring += breakString[i] + " ";
//   }
//   return newstring;
// }

// console.log(reverseString("Coding Is Fun"));

// Given an object, write a function that returns an array of all the values in the object that are numbers.

// const data = {
//   name: "John",
//   age: 25,
//   city: "New York",
//   score: 90,
// };

// function getNumberValues(obj) {
//   const storeKeys = [];
//   for (const key in obj) {
//     if (typeof obj[key] == "number") {
//       storeKeys.push(obj[key]);
//     }
//   }
//   return storeKeys;
// }

// console.log(getNumberValues(data)); // Output: [25, 90]

// Write a function to generate the following number pattern.

// function generateNumberPattern(number) {
//   for (let i = 1; i <= number; i++) {
//     for (let j = 1; j < 5; j++) {
//       document.write(j);
//     }
//     document.write("<br>");
//   }
// }

// console.log(generateNumberPattern(4));

// Write a function that takes an array of strings and returns a new array that only contains strings with more than three characters.

// function filterWords(array) {
//   const store = [];

//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 3) {
//       store.push(array[i]);
//     }
//   }
//   return store;
// }

// const words = ["cat", "dog", "elephant", "lion", "tiger"];
// console.log(filterWords(words));

// write a function to convert normal array to chunkarray

// function chunkArray(array, chunkSize) {
//   const store = [];

//   for (let i = 0; i < array.length; i += chunkSize) {
//     store.push(array.slice(i, i + chunkSize));
//   }
//   return store;
// }

// console.log(chunkArray([1, 2, 3, 4, 5, 6], 2));

// Given a square matrix, rotate it 90 degrees clockwise in place.
// const matrix = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9],
// ];

// function rotateMatrix(matrix) {
//   const size = matrix.length;
//   // Transpose the matrix
//   for (let i = 0; i < size; i++) {
//     for (let j = i; j < size; j++) {
//       // Swap matrix[i][j] with matrix[j][i]
//       const temp = matrix[i][j];
//       matrix[i][j] = matrix[j][i];
//       matrix[j][i] = temp;
//     }
//   }

//   // Reverse each row
//   for (let i = 0; i < size; i++) {
//     matrix[i].reverse();
//   }
// }

// rotateMatrix(matrix);
// console.log(matrix);

// Write a recursive function to calculate the sum of digits of a given number.

// function sumOfDigits(number) {
//   const convertIt = number.toString().split("");
//   let sum = 0;
//   for (let i = 0; i < convertIt.length; i++) {
//     const convertInNumber = Number(convertIt[i]);
//     sum += convertInNumber;
//   }
//   return sum;
// }

// console.log(sumOfDigits(123));

// Implement a function that performs the union of two arrays (removing duplicates).

// const array1 = [1, 2, 3];
// const array2 = [3, 4, 5];

// function unionArrays(arr1, arr2) {
//   const result = [];
//   const combine = arr1.concat(arr2);
//   for (let i = 0; i < combine.length; i++) {
//     if (!result.includes(combine[i])) {
//       result.push(combine[i]);
//     }
//   }
//   return result;
// }
// console.log(unionArrays(array1, array2)); // Output: [1, 2, 3, 4, 5]

// Write a function that checks if a given number is a palindromic number.

// function isPalindromicNumber(number) {
//   const convertIt = number.toString().split("");
//   const store = [];
//   for (let i = convertIt.length - 1; i >= 0; i--) {
//     const convertInNumber = Number(convertIt[i]);
//     store.push(convertInNumber);
//   }
//   return Number(store.join("")) === number;
// }

// console.log(isPalindromicNumber(121)); // Output: true
// console.log(isPalindromicNumber(123)); // Output: false

// SECOND APPROCH

// function isPalindromicNumber(number) {
//   return number === Number(number.toString().split("").reverse().join(""));
// }

// console.log(isPalindromicNumber(121)); // Output: true
// console.log(isPalindromicNumber(123)); // Output: false

// property "status" with the value "active" if the object has a property "isActive" set to true.

// const inputArray = [
//   { id: 1, isActive: true, name: "John" },
//   { id: 2, isActive: false, name: "Jane" },
//   { id: 3, isActive: true, name: "Doe" },
// ];

// function transformObjects(array) {
//   const transfornedArray = [];

//   for (const item of array) {
//     const newitem = { ...item };

//     if (newitem.isActive) {
//       newitem.status = "active";
//     }
//     transfornedArray.push(newitem);
//   }
//   return transfornedArray;
// }

// console.log(transformObjects(inputArray));

// SECOND APPOCH

// const inputArray = [
//   { id: 1, isActive: true, name: "John" },
//   { id: 2, isActive: false, name: "Jane" },
//   { id: 3, isActive: true, name: "Doe" },
// ];

// function transformObjects(array) {
//   return array.reduce((prev, curr) => {
//     if (curr.isActive) {
//       curr.Status = "active";
//     }
//     prev.push(curr);
//     return prev;
//   }, []);
// }

// console.log(transformObjects(inputArray));

// THIRD APPAOCH

// const inputArray = [
//   { id: 1, isActive: true, name: "John" },
//   { id: 2, isActive: false, name: "Jane" },
//   { id: 3, isActive: true, name: "Doe" },
// ];

// function transformObjects(array) {
//   return array.map((element) => {
//     if (element.isActive) {
//       element.Status = "active";
//     }
//     return element;
//   });
// }

// console.log(transformObjects(inputArray));

// write a function to print this type of traingle
// 1
// 22
// 333
// 4444
// 55555

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= i; j++) {
//     document.write(i);
//   }
//   document.write("<br>");
// }

// Question: Write a function to check if one string is a rotation of another. For example, "waterbottle" is a rotation of "erbottlewat."

// function stringRotation(string, n) {
//   const breakstring = string.split("");
//   for (let i = 0; i < n; i++) {
//     const getvalue = breakstring.shift();
//     breakstring.push(getvalue);
//   }
//   return breakstring.join("");
// }

// console.log(stringRotation("application", 4));

// SECOND APPROCH

// function stringRotation(string, n) {
//   return string.slice(n) + string.slice(0, n);
// }

// console.log(stringRotation("application", 4));

// write a function to find the even number sum

// function Even_Sum(array) {
//   let sum = 0;
//   array.filter((element) => (element % 2 == 0 ? (sum += element) : element));
//   return sum;
// }
// console.log(Even_Sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// with reduce method

// function Even_Sum(array) {
//   return array.reduce((prev, curr) => (curr % 2 == 0 ? (prev += curr) : prev), 0);
// }

// console.log(Even_Sum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Array ke elements ka product nikalein jinme 'a' shabd shuru hota hai:

// const words = ["apple", "banana", "avocado", "orange", "kiwi"];

// function findproduct(arr) {
//   const checkletter = arr
//     .filter((element) => element.startsWith("a"))
//     .reduce((prev, curr) => {
//       prev += curr.length;
//       return prev;
//     }, 0);

//   return checkletter;
// }

// console.log(findproduct(words));

// write a function to find product with odd number

// const numbers = [1, 2, 3, 4, 5];

// function findProduct(arr) {
//   let product = 1;
//   arr.filter((element) => (element % 2 != 0 ? (product *= element) : product));
//   return product;
// }

// console.log(findProduct(numbers));

// SECOND APPROCH

// function findproduct(array) {
//   return array.reduce(
//     (prev, curr) => (curr % 2 != 0 ? (prev *= curr) : prev),
//     1
//   );
// }

// console.log(findproduct([1, 2, 3, 4, 5]));

// write a function to find product of positve number

// function positiveProduct(array) {
//   let product = 1;
//   array.filter((element) => (element > 0 ? (product *= element) : element));
//   return product;
// }

// console.log(positiveProduct([1, 2, 3, -4, -2, -6]));

// function positiveProduct(array) {
//   let product = 1;
//   array.filter((element) => (element > 0 ? (product *= element) : element));
//   return product;
// }

// console.log(positiveProduct([1, 2, 3, -4, -2, -6]));

// SECOND APPROCH

// function positiveProduct(array) {
//   return array.reduce(
//     (product, element) => element > 0 ? (product *= element) : element,
//     1
//   );
// }

// console.log(positiveProduct([1, 2, 3, -4, -2, -6]));

// Array ke words ka length calculate karein, lekin only odd length wale words ka:

// const words = ["apple", "banana", "kiwi", "orange"];
// function oddlength(words) {
//   return words
//     .filter((element) => element.length % 2 !== 0)
//     .map((element) => element.length);
// }

// console.log(oddlength(words));

// Question: Create an algorithm to find the index of a specific element in an array.
// Example: In the array [10, 4, 6, 8, 15], find the index of the element 6. The answer should be 2.

// function findIndex(array, findelement) {
//   return array.indexOf(findelement);
// }

// console.log(findIndex([10, 4, 6, 8, 15], 6));

// Question: Develop an algorithm to calculate the factorial of a non-negative integer.
// Example: Calculate the factorial of 5 (5!) using your algorithm. The result should be 120.

// pending

// function factorial(n) {
//   return Array.from({ length: n }).map((element) => console.log(n));
// }

// console.log(factorial(5));

// Question: Create an algorithm to reverse a linked list.
// Example: Given a linked list: 1 -> 2 -> 3 -> 4, reverse it to become 4 -> 3 -> 2 -> 1.

// function reverseLinkdinLiest(string) {
//   return string.toString().split("").reverse().join("");
// }

// console.log(reverseLinkdinLiest("1->2->3->4"));
