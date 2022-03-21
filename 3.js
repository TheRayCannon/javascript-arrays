/*
Given an array containing the alphanumeric alphabet, write code that returns an array that:

* Removes the numbers 0-9 from the beginning of the alphabet
* Removes the ampersand (&) from the end of the alphabet
* Adds a "ch" between "c" and "d"
* Adds an "ñ" between "n" and "o"
* Adds an "ll" between "l" and "m"

*/

function getSpanishAlphabet(){
  const alphaNumericAlphabet = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "&"]
  let spanishAlphabet =

  const letsRemoveNumbers = alphaNumericAlphabet.shift[0, 1, 2, 3, 4, 5, 6, 7, 8, 9,]
  const letsRemoveAnd = letsRemoveNumbers.pop["&"]
  const AddCh = letsRemoveAnd.slice[0,2]
  const AddCh = AddCh.push("ch")
  const addTheñ = letsRemoveAnd.slice[14, 25]
  const addTheñ = addTheñ.unshift("ñ")
  const almostThere = AddCh.splice(0, 12, 'll')
  const spanishAlphabet = almostThere.concat(addTheñ)
  

  return spanishAlphabet
}

module.exports = getSpanishAlphabet

/*
You can run tests for this code to check your answers by running `npm run test-3`
*/
