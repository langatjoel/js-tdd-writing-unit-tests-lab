// utils.test.js

const isPalindrome = require('../utils');

test('checks if racecar is a palindrome', () => {
  expect(isPalindrome('racecar')).toBe(true);
});

test('checks if car is not a palindrome', () => {
  expect(isPalindrome('car')).toBe(false);
});

test('checks if Aibohphobia is a palindrome (mixed case)', () => {
  expect(isPalindrome('Aibohphobia')).toBe(true);
});

test('checks if an empty string is not a palindrome', () => {
    expect(isPalindrome('')).toBe(false);
  });
  

test('throws an error for a string with non-alphabetic characters', () => {
  expect(() => {
    isPalindrome('hello123');
  }).toThrow('Input must contain only alphabetic characters');
});

test('throws an error for non-string input', () => {
  expect(() => {
    isPalindrome(123);
  }).toThrow('Input must be a string');
});
