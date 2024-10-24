let word = 'TEST'
const wordSplit = word.split("")
console.log(wordSplit)
const reversedArray = wordSplit.reverse()
console.log(reversedArray)
const reverseString = reversedArray.join("")
console.log(reverseString.toLowerCase())
if(reverseString.toLowerCase() === word.toLowerCase()){
    console.log('Yes, it is a palindrome')
} else {
    console.log("It is not a palindrome")
}