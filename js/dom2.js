// TRAVERSING THE DOM
const itemList = document.querySelector('#items')

//parentNode
// console.log(itemList.parentNode)
// console.log(itemList.parentNode.parentNode)

//parentElement
// console.log(itemList.parentElement)
// itemList.parentElement.style.backgroundColor = '#f4f4f4'
// console.log(itemList.parentElement.parentElement)

//childnode
// console.log(itemList.childNodes);
// console.log(itemList.children)
// itemList.children[1].style.backgroundColor = 'yellow'

//firstChild
// console.log(items.firstChild)
// console.log(items.firstElementChild)

// lastChild
// console.log(itemList.lastChild)
// console.log(itemList.lastElementChild)
// itemList.lastElementChild.textContent = 'Hello 4'

// nextSibling
// console.log(itemList.nextSibling)
// console.log(itemList.nextElementSibling)

// previousSibling
// console.log(itemList.previousSibling)
// console.log(itemList.previousElementSibling)
// itemList.previousElementSibling.style.color = 'blue'

// createElement
let newDiv = document.createElement('div')
// Add Class
newDiv.className = 'hello';
// Add Id
newDiv.id = 'hello1'
// Add Attribute
newDiv.setAttribute('title', 'Hello Div');
// Create text node 
let newDivText = document.createTextNode('Hello World')
// Add text to div
newDiv.appendChild(newDivText)
let container = document.querySelector('header .container');
let h1 = document.querySelector('header h1')

container.insertBefore(newDiv, h1)

newDiv.style.fontStyle = '30px'
// console.log(newDiv)