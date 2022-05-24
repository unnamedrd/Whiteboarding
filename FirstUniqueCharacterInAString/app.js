/*Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

 

Example 1:

Input: s = "leetcode"
Output: 0
Example 2:

Input: s = "loveleetcode"
Output: 2
Example 3:

Input: s = "aabb"
Output: -1


1. Understand the problem 
 - take in a string s 
 - check string for first non-repeating char and return the index if exists 
 - else return -1 
 
 2.Devise a plan
 - loop over the string and track in hashmap how many times char exists 
 - loop over string and check hashmap for each char, if the value is > 1 we know it is repeating
 - if the value is 1 return the index
 - if all repeating char in s return -1 
 
 3. Carry out the plan 
 4. Look back*/