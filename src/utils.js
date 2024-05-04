function isPalindrome(word) {
    if (typeof word !== 'string') {
      throw new Error('Input must be a string');
    }
  
    if (!/^[A-Za-z]+$/.test(word)) {
      throw new Error('Input must contain only alphabetic characters');
    }
  
    if (word.length === 0) {
      return false; // Return false for an empty string
    }
  
    const reversed = word.split('').reverse().join('');
    return word.toLowerCase() === reversed.toLowerCase();
  }
  
  module.exports = isPalindrome;
  