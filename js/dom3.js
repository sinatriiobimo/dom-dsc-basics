// let button = document.getElementById('button').addEventListener('click', () => {
//     console.log('123')
// })

// let button = document.getElementById('button').addEventListener('click', buttonClick)

// function buttonClick() {
//     console.log('123')
// }

// function buttonClick() {
//     document.getElementById('header-title').textContent = 'Changed';
//     document.querySelector('#main').style.color = 'blue'
// }

// function buttonClick(e) {
    // console.log(e)
    // console.log(e.target)
    // console.log(e.target.id)
    // console.log(e.target.className)
    // console.log(e.target.classList)

    const output = document.getElementById('output');
    // output.innerHTML = `<h3>${e.target.id}</h3>`

    // console.log(e.type)

    // SEPANJANG BROWSER
    // console.log(e.clientX)
    // console.log(e.clientY)

    // SEPANJANG ELEMENT
    // console.log(e.offsetX)
    // console.log(e.offsetY)

    // Menggunakan Support Button
    // console.log(e.altKey)
    // console.log(e.ctrlKey)
    // console.log(e.shiftKey)
// }

const button = document.getElementById('button');
const box = document.getElementById('box');
const itemInput = document.querySelector('input[type="text"]')
const form = document.querySelector('form')
const select = document.querySelector('select')

// button.addEventListener('click', runEvent);
// button.addEventListener('dblclick', runEvent);
// button.addEventListener('mousedown', runEvent);
// button.addEventListener('mouseup', runEvent);

// box.addEventListener('mouseenter', runEvent)
// box.addEventListener('mouseleave', runEvent)

// box.addEventListener('mouseover', runEvent)
// box.addEventListener('mouseout', runEvent)
// box.addEventListener('mousemove', runEvent)


// itemInput.addEventListener('keydown', runEvent)
// itemInput.addEventListener('keyup', runEvent)
// itemInput.addEventListener('keypress', runEvent)
// itemInput.addEventListener('focus', runEvent)
// itemInput.addEventListener('blur', runEvent)
// itemInput.addEventListener('cut', runEvent)
// itemInput.addEventListener('paste', runEvent)

// select.addEventListener('change', runEvent)
// select.addEventListener('input', runEvent)

// form.addEventListener('submit', runEvent)



function runEvent(e) {
    e.preventDefault()
    console.log(`Event Type: ${e.type}`)
    // console.log(e.target.value)

    // output.innerHTML = '<h3>MouseX : ' + e.offsetX + '</h3><h3>MouseY: ' + e.offsetY + '</h3>';
    // box.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"
    document.body.style.backgroundColor = "rgb("+e.offsetX+", "+e.offsetY+", 40)"

}