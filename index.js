// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

// Find the largest palindrome made from the product of two 3-digit numbers.
const startTime = new Date();
const minRange = 100;
const maxRange = 999;
let record = 0;

function max(a, b) {
  return a > b ? a : b;
}

function isPalindrome(num) {
  let str = num.toString();

  let halfLength = Math.floor(str.length / 2);

  for (let i = 0; i < halfLength; i ++) {
    if (str[i] != str[str.length - i - 1]) return false;
  }  

  return true;
}

for (let i = minRange; i <= maxRange; i++) {
  for (let j = i; j <= maxRange; j++) {
    const product = i * j;
    if (isPalindrome(product)) {
      record = max(record, product);
    }  
  }
}


console.log("Palindrome: " + record);
const endTime = new Date();
const span = endTime.getTime() - startTime.getTime();
console.log("Took " + span + " ms");