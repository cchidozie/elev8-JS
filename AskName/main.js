

let button = document.querySelector('.submit')
let display = document.querySelector('.showName')

button.addEventListener('click', function () {
  let firstName = document.querySelector('#fName').value
  let lastName = document.querySelector('#lName').value
  let listItem = document.createElement('li')
  listItem.innerHTML = `<li>Your name is ${firstName} ${lastName}</li>`
  display.appendChild(listItem)
  document.getElementById('lName').value = ''
  document.getElementById('fName').value = ''
})
