/*

Vowel Rotator:
Given a string "Mariners" rotate all the vowels one space right
and bring the last vowel into the first vowel's place -> "Meranirs"

Some More Examples:
"cats like dogs" => "cots lake digs"
"bombastic" => "bimbostac"

*/
//string - assume letters only , no special characters
//always lowercase
//null

//return a string
//"today is a sunny day"
// vowels - oaiaua
//aoaiau
// tadoy as i sanny duy

//vowels - object - key:value vowel:index string

//define an array for what the vowels
//iterate through the string
//find the index where there was a vowel and plug in the next vowel.

//option 2
//define array of vowels
//loop through string and extract vowels in new string - immutable
//use a string or array method to take last character in string and shift by 1, taking last character 
//map back to original string


//Approach taken - create a program that mirrors the actions I worked through in my example of "today is a sunny day"
//declare array of vowels to define vowels, initialize empty string vowelStr, declare new array, strArr, by splitting given argument
//1.create a function that extracts vowels in the given argument into vowelStr
//2.initialize a new str, strSwap, that takes the vowelStr and moves the last character to the first position in the string
//3.create a function that swaps the vowels in strArr with the vowels in strSwap
//4. create a function that returns a concatenated string with the vowles rotated
 
 
function vowelRotator(string){
  let vowels = ["a", "e", "i", "o", "u"];

  let vowelStr = "";
  let strArr = string.split("");

  // function isVowel tests which letters in the given argument are vowels and concatenate the letters that pass the vowel test into VowelStr
  function isVowel(x) {
    for (let i = 0; i < x.length - 1; i++) {
      if (vowels.includes(x[i])) {
        vowelStr += x[i];
      }
    }
  }

  isVowel(strArr);

  let strSwap = vowelStr.slice(-1) + vowelStr.slice(0, -1); // declaring variable for new string that takes the last character in the string and moves it to position 0, will yield 'aoaiau' in test case
  console.log(vowelStr, strSwap); //returns ('oaiaua', 'aoaiau')

  function swapVowel(x) {
    let counter = 0;
    for (let i = 0; i < x.length - 1; i++) {
      if (vowels.includes(x[i])) {
        x[i] = strSwap[counter];
        counter++;
      }
    }
    console.log(strArr);
  }

  //function arrToString concatenates strArr into a string with the rotated order of the vowels.
  function arrToString(x) {
    let rotatedStr = "";
    for (let i = 0; i < x.length; i++) {
      rotatedStr += strArr[i];
    }
    console.log(rotatedStr);
    return rotatedStr;
  }

  swapVowel(strArr);
  arrToString(strArr);
}


 vowelRotator('Today is a sunny day')

