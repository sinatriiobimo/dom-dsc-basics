// console.log(document.domain)
// console.log(document.URL)
// console.log(document.title)
// console.log(document.doctype)

// console.log(document.head)
// console.log(document.body)
// console.log(document.all)
// console.log(document.all[10])
// console.log(document.forms[0])
// console.log(document.links)


// GETELEMENTBYID
// console.log(document.getElementById('header-title'))
// let headerTitle = document.getElementById('header-title')
// let header = document.getElementById('main-header')

// console.log(headerTitle)
// headerTitle.textContent = 'Hello'
// headerTitle.innerText = 'Goodbye'
// console.log(headerTitle.innerText)
// console.log(headerTitle.textContent)
// console.log(headerTitle.innerText)
// headerTitle.innerHTML = '<h3>Hello</h3>'
// header.style.borderBottom = 'solid 3px #000'

// GETELEMENTBYCLASSNAME
// let items = document.getElementsByClassName('list-group-item')
// console.log(items)
// console.log(items[1])
// items[1].textContent = 'Hello 2'
// items[1].style.fontWeight = 'bold'
// items[1].style.backgroundColor = 'yellow'

// items.style.backgroundColor = '#f4f4f4'

// for(let i = 0; i < items.length; i++) {
//     items[i].style.backgroundColor = '#f4f4f4'
// }

// GETELEMENTSBYTAGNAME
// let li = document.getElementsByTagName('li')
// console.log(li);
// console.log(li[1])
// li[1].textContent = 'Hello 2'
// li[1].style.fontWeight = 'bold'
// li[1].style.backgroundColor = 'yellow'

// for(var i = 0; i < li.length; i++) {
//     li[i].style.backgroundColor = '#f4f4f4'
// }

// QUERYSELECTOR
// const header = document.querySelector('#main-header')
// header.style.borderBottom = 'solid 4px #ccc'

// const input = document.querySelector('input')
// input.value = 'Hello World'

// const submit = document.querySelector('input[type="submit"]')
// submit.value = "SEND"

// const item = document.querySelector('.list-group-item')
// item.style.color = 'red'

// const lastItem = document.querySelector('.list-group-item:last-child')
// lastItem.style.color = 'red'

// const secondItem = document.querySelector('.list-group-item:nth-child(2)')
// secondItem.style.color = 'red'

//QUERYSELECTORALL
// const title = document.querySelectorAll('.title');
// console.log(title)
// title[0].textContent = 'Hello'

// const odd = document.querySelectorAll('li:nth-child(odd)')
// const even = document.querySelectorAll('li:nth-child(even)')
// for(i = 0; i < odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4'
//     even[i].style.backgroundColor = '#ccc'
// }
