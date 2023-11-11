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
