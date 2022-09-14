/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  //two strings as input s, t
  //assuming no null arguments
  //assuming letters only, no special characters or numbers

  //check for anagram
  // if s and t are anagrams return true, else return false
  //anagram is defined by a string that has all the characters of the original word
  //original letters are used only once,
  //i.e.dessert and stressed are anagrams (s appears twice in each word, but each word has two s's)

  //method 1: use a hashmap to track key value pairs. k==letter value ==counter of letters
  //split one string into an array, store the letters in a hashmap
  //iterate through second string and check to see if it exists in the hashmap
  //how to handle multiples of a letter

  //method 2: split one string (s)  into an array
  //then iterate through the array and seach for each letter in the other string (t)
  //use the find(method) to check if that letter exists
  //that would be a problem with multiple letters

  let sArr = s.split("");
  const sMap = new Map();

  //map is immutable, forEach is mutable
};
