function isPalindrome(word) {
  // Write your algorithm here
// Initialize pointers
let left = 0;
let right = word.length - 1;

// Loop while left is less than or equal to right
while (left <= right) {
  if (word[left] !== word[right]) {
    return false; // Characters at left and right are different, not a palindrome
  }
  left++;
  right--;
}

return true; // All characters match, it's a palindrome
}

/* 
  Add your pseudocode here
 Initialize two pointers, 'left' and 'right', both starting at the beginning and end of the 'word'.
 Loop while 'left' is less than or equal to 'right'.
 If the characters at 'left' and 'right' are different, return false 
 Move 'left' one step to the right, and 'right' one step to the left.
 If the loop completes without returning false, return true 

*/

/*
  Add written explanation of your solution here

  Initialize two pointers, one at the beginning and one at the end of the word.
  Then iterate through the characters of the word from both ends simultaneously.
  If ever there is a pair of characters that are different, it should return false 
  If it successfully iterates through the word without finding any differences, it should return true, indicating that the word is a palindrome

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("");

  
  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hello"));
}

module.exports = isPalindrome;
