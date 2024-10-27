const inputBox = document.getElementById('inputBox');
const listContainer = document.querySelector('.list-Container');
const button = document.querySelector('button');

// add to list 
function addTodoList () {
    if (inputBox.value === '') {
        alert('Please Enter TodoList')
    } else {
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // delete icon generated dynamically 
        let img = document.createElement('img');
        img.src = `./delete.png`
        li.appendChild(img);
        saveData()
    }

    inputBox.value = ""
}

// tricker adding todo function 
button.addEventListener('click', addTodoList)

//ticking and unticking Todos
listContainer.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked")
        saveData()
    } else if (e.target.tagName === 'IMG') {
        e.target.parentElement.remove()
        saveData()
    }
}, false)

// Save To localStorage 
function saveData() {
    localStorage.setItem("todos", listContainer.innerHTML)
}

// Get from the localStorage 
function ShowTodos() {
    listContainer.innerHTML = localStorage.getItem("todos")
}

ShowTodos();

// make todlist with Enterkey 
function Enterkey() {
    if (event.key === "Enter") {
        addTodoList ()
    } else if (event.key === "Delete") {
        addTodoList ()
    }
}
  
