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

// 10. Remove a Given Character from a String
function remveCharFromSentence(str, removeChar) {
  const array = str.split('');
  return array.reduce((acc, val) => {
    if (val !== removeChar) acc += val;
    return acc;
  }, '');
}

str = 'jeyabalan';
const removeChar = 'a';
console.log(
  `10. Remove a Given Character from a String ${str}:`,
  remveCharFromSentence(str, removeChar)
);

function separateCharNum(str) {
  const regEx = /^(\d+(\.\d+)?)([a-zA-z]+)$/;
  const matchArr = str.match(regEx);
  return { number: +matchArr[1], symbol: matchArr[matchArr.length - 1] };
}

str = '12CR';
console.log(`11. Separate Number from String ${str}:`, separateCharNum(str));

function factorial(number) {
  if (number === 1) return number;
  return number * factorial(number - 1);
}
let number = 4;
console.log(
  `11. Javascript program to Find the factorial of ${number} ?`,
  factorial(number)
);

function consecutiveNumber(number) {
  return array.filter((val) => val === number).length;
}
number = 1;
let array = [1, 1, 9, 1, 9, 9, 19, 7, 1, 1, 1, 3, 2, 5, 1];
console.log(
  `12. Javascript program to Find the max count of consecutive ${number}’s in an array [${array}] ?`,
  consecutiveNumber(number)
);

function countCharacter(str) {
  const array = str.split('');
  const uniqueArr = array
    .reduce((acc, cur, index) => {
      if (array.lastIndexOf(cur) === index && acc.indexOf(cur) === -1)
        acc.push(cur);
      return acc;
    }, [])
    .sort();

  return uniqueArr.reduce((acc, cur) => {
    acc += array.filter((val) => val === cur).length + cur;
    return acc;
  }, '');
}
str = 'abbcccddddeea';
console.log(
  `13. Write a program to get below output from given input ? I/P: ${str} ?`,
  countCharacter(str)
);
//1a2b3c4d2e1a

function flat(arr) {
  let flatArray = [];
  for (let val of arr) {
    if (Array.isArray(val)) {
      flatArray.push(...flat(val));
    } else if (typeof val === 'object' && Object.keys(val).length > 0) {
      flatArray.push(...flat(Object.values(val)))
    } else {
      flatArray.push(val);
    }
  }
  return flatArray;
}

const unFlatArray = [1, [2], [3, [4, 5, { a: 6 }], { b: 7 }, [8, [9, 10]]]]
console.log(`14. Flattern Array without using any in build method, ${String(unFlatArray)}`, flat(unFlatArray))

function notes(amount) {
  let currentAmount = amount;
  return currencyArray.reduce((acc, cur) => {
    if (!acc[cur]) acc[cur] = 0;
    acc[cur] = Math.floor(currentAmount / cur);
    currentAmount -= acc[cur] * cur;
    return acc;
  }, {});
}
const currencyArray = [500, 200, 100, 50, 20, 10, 5, 2, 1];
const amount = 1358
console.log(`16. Find out how many notes are there in the amount: Rs. ${amount}`, notes(amount));