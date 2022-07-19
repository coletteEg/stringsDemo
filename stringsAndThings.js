//SOME AWESOME METHODS FOR STRINGS
let practice_with_some_strings = "Hello, world"
//obtaining portions of a string
//substring and return "ell" -----> 
practice_with_some_strings.substring(1,4) 
console.log(practice_with_some_strings.substring(1,4))
//slice and return "worl" -----> 
console.log(practice_with_some_strings.slice(7,11))
//split and return an array of both words -----> 
let newVar = practice_with_some_strings.split(", ")
//Bonus: what method can take an array of words and put them back together
console.log(newVar.join(", "))

//searching a string
//indexOf "H" ---->
console.log(practice_with_some_strings.indexOf("l"))
//lastIndexOf "l" ----> 
console.log(practice_with_some_strings.lastIndexOf("l"))

//boolean searching funtions
//startsWith "Hello" gives us?---> 
console.log(practice_with_some_strings.startsWith("Hello"))
//endsWith "!" ---> 
console.log(practice_with_some_strings.endsWith("!"))


//creating modified version of a string
//replace "llo" with "ya" ---> "Heya, world"
console.log(practice_with_some_strings.replace("llo","ya"))
//toLowerCase ---> take a guess lol
console.log(practice_with_some_strings.toLowerCase())
//toUpperCase ---> take another guess
console.log(practice_with_some_strings.toUpperCase())

//inspecting individual characters of a string
//charAt 0 ---> 
console.log(practice_with_some_strings.charAt(0))
//charCodeAt 0  --->
console.log(practice_with_some_strings.charCodeAt())
//Bonus: find the range of lower and uppercase letters
/ 65-90 97-122
//space trim funtctions
//bonus mess with these methods
let test = "   test "
//trim test --->
//Bonus: mess with the other trims
//trimStart and trimEnd

let regex.text = "blast off in 3, 2, 1"
let pattern = /\
