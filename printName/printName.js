
const prompt = require('prompt-sync')()
var givenName
givenName = prompt('Enter your name: ')

let splitName = givenName.split('')

// splitName.forEach((letter)=>{
//  console.log(letter);
// })

for (let i = 0; i < splitName.length; i++) {
  console.log(splitName[i])
}
