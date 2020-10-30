let form = document.getElementById('addForm')
let itemList = document.getElementById('items')
// Instantiate PART3
let filter = document.getElementById('filter')

//Form submit event
form.addEventListener('submit', addItem)

// Delete event PART2
itemList.addEventListener('click', removeItem)

// Filter event PART3
filter.addEventListener('keyup', filterItems)

//Add Item
function addItem(e) {
    e.preventDefault();
    
    //Get input value
    let newItem = document.getElementById('item').value
    //Create new li element
    let li = document.createElement('li')
    //Add class
    li.className = 'list-group-item'
    //Add text node with input value
    li.appendChild(document.createTextNode(newItem))

    //Create delete button element
    let deleteBtn = document.createElement('button')
    //Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete'
    //Append text node
    deleteBtn.appendChild(document.createTextNode('X'))
    //Add deleteBtn to li
    li.appendChild(deleteBtn)

    //Add li to ul
    itemList.appendChild(li)
}

//Remove Item PART2
function removeItem(e) {
    if(e.target.classList.contains('delete')) {
        if(confirm('Are you sure ?')) {
            let parentLi = e.target.parentElement;
            itemList.removeChild(parentLi)
        }
    }
}

//Filter Item PART3
function filterItems(e) {
    //convert to lowercase
    let text = e.target.value.toLowerCase();

    //Get list
    let items= itemList.getElementsByTagName('li')
    // console.log(itemSearch)

    //convert to array
    Array.from(items).forEach(function(item) {
        let itemName = item.firstChild.textContent;
        // console.log(itemName)
        if(itemName.toLowerCase().indexOf(text) != -1) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    })
}