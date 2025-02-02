const text = "Please switch off the WIFI before you leave."
const userInput = "wifi"

const regex = new RegExp(userInput, 'g')

const doesMatch = regex.test(text) //boolean

console.log(doesMatch)