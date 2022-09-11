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
 
function vowelRotator(string){
 
 let vowels = ['a', 'e', 'i', 'o', 'u']
 
 let vowelIndex = vowels.find(x)  //find index

function isVowel(x) {
      for (let i = 0; i < vowels.length - 1; i++) {
        if (vowels[i] == x) {
          return true;
        } else {
          return false;
        }
      }
  }
    
 let allVowels = string.filter(isVowel)

 
 }


