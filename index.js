// 1. Reverse a String
function reverseStr(input) {
  let reverseStr = '';
  for (let index in input) {
    reverseStr += input[input.length - 1 - index];
  }
  return reverseStr.toLowerCase();
  // return input.toLowerCase().split('').reverse().join('');
}

console.log(`1. Reverse a String: ${reverseStr('Hi hello')}`);
// 2. Check if a String is a Palindrome
function palindrome(input) {
  const reverseString = reverseStr(input);
  return reverseString === input.toLowerCase();
}
let str = 'Hiih';
console.log(`2. Check if a ${str} is a Palindrome: ${palindrome(str)}`);

// 3. Remove Duplicates from a String
function revmoveDuplicates(input) {
  let array = input;
  if (typeof input === 'string') {
    array = input.toLowerCase().split('');
  }
  return array.reduce((acc, val, index) => {
    if (array.lastIndexOf(val) === index && acc.indexOf(val) === -1) {
      acc.push(val);
    }
    return acc;
  }, []);
}
// str = 'Jeyabalan'
str = [1, 1, 2, 3, 5, 5, 5];
console.log(`3. Remove Duplicates from ${str}: ${revmoveDuplicates(str)}`);

// 4. Find the First Non-Repeating Character
function firstNonRepeatChar(input) {
  const array = input.toLowerCase().split('');
  for (let index in array) {
    let value = array[index];
    if (array.indexOf(value) === array.lastIndexOf(value)) {
      return value;
    }
  }
  return null;
}
str = 'aabc';
console.log(
  `4. Find the First Non-Repeating Character  ${str}: ${firstNonRepeatChar(
    str
  )}`
);

//5. Count the Occurrences of Each Character
function charOccurrences(input) {
  const arry = input.toLowerCase().split('');
  return arry.reduce((acc, value) => {
    if (!acc[value]) acc[value] = 1;
    else acc[value] = acc[value] += 1;

    return acc;
  }, {});
}
str = 'aasee';
console.log(
  `5. Count the Occurrences of Each Character ${str}:`,
  charOccurrences(str)
);

// 6. Reverse Words in a Sentence
str = 'Edit in StackBlitz next generation editor';
console.log(`6. Reverse Words in a Sentence ${str}:`, reverseStr(str));

// 7. Check if Two Strings are Anagrams
function checkAnagrams(str1, str2) {
  const fStr = str1.split('');
  const sStr = str2.split('');
  if (fStr.length !== sStr.length) return false;
  return sStr.every((a) => fStr.indexOf(a) >= 0);
}
str1 = 'STOP';
str2 = 'POST';
console.log(
  `7. if Two Strings are Anagrams ${str1} and  ${str2}:`,
  checkAnagrams(str1, str2)
);

// 8. Find the Longest Substring Without Repeating Characters
function longestStrWithoutRepeat(input) {
  const array = input
    .split(' ')
    .map((a) => a.toLowerCase())
    .sort((a, b) => b.length - a.length);
  for (let word of array) {
    if (firstNonRepeatChar(word)) return word;
  }
}

str = 'jeyabalan Hii more test with';
console.log(
  `8. Find the Longest Substring Without Repeating Characters ${str}:`,
  longestStrWithoutRepeat(str)
);

// 9. Convert a String to Title Case
function titleCase(str) {
  const firstLetter = str.at(0);
  return firstLetter.toUpperCase() + str.substring(1, str.length);
}

str = 'jeyabalan';
console.log(`9. Convert a String to Title Case  ${str}:`, titleCase(str));
