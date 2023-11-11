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
