/* eslint-disable no-unused-vars */

function doesInclude(str, letter) {
  if(str.includes(letter)) return true 
  else return false
  
}

function isPalindrome(str) {
  var original = str
  var reversed = str.split('').reverse().join('')
  if( original == reversed ) return true
  else return false
}

function cap(str, letter) {
    if(str.search(letter) == -1 )
    {
      return 'sorry not found'
    }
    else 
    {
      let num = str.indexOf(letter)
      let firstLetter = str.charAt(num)
      let nextLetter = str.charAt(num + 1)

      let newStr = String(nextLetter.toUpperCase())
      return newStr
    }  
}

function firstCharacter(str1, str2) 
{
  if(str1.toLowerCase().charAt(0) === str2.toLowerCase().charAt(0)) return true
  else return false
}

//firstCharacter('today', 'yesterday');

module.exports = {
  cap, firstCharacter, doesInclude, isPalindrome,
};
