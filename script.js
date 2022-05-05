
function dateNow () {
    const number = document.getElementById('date')
    const pDate = document.createElement('p')
    number.classList.add('date-item')
    let time = new Date ()
    let day = new Array("Воскресенье","Понедельник","Вторник",
        "Среда","Четверг","Пятница","Суббота")
    let month = new Array("января","февраля","марта","апреля","мая","июня",
        "июля","августа","сентября","октября","ноября","декабря")
    let timeNow = day[time.getDay()]+" " + time.getDate()+ " " + month[time.getMonth()]
    + " " + time.getFullYear() + " г."
    return number.appendChild(pDate).append(timeNow)
}
dateNow ()
let TODOS = []

const input = document.querySelector('input[type="text"]')
const buttonAdd = document.getElementById('buttonAdd')
const list = document.querySelector('ul')

 function init () {
        let storageT = localStorage.getItem('todo')
        if (storageT) {
            TODOS.push(...JSON.parse(storageT))
        } 
        console.log(TODOS);
        render()
    }
    
function listToDO () {    
    // const input = document.querySelector('input[type="text"]')
    // const buttonAdd = document.getElementById('buttonAdd')
    // const list = document.querySelector('ul')
    const todos_in_storage = localStorage.getItem('todo') 


    function liClass (li) {
        // console.log(todos);
        if (li.classList.contains('todo-item-complete')) {
            return true
        } else {
            return false
        }
    }
    function storage () {
        let storage = []
    
        let loc_storage = localStorage.getItem('todo')
        if (loc_storage){
            storage.push(...JSON.parse(loc_storage))
            storage.push({text: input.value, done: false})
            localStorage.setItem('todo', JSON.stringify(storage))
        } else {
            storage.push({text: input.value, done: false})
            localStorage.setItem('todo', JSON.stringify(storage))
        }
    }

    // if(todos_in_storage){
    //     const temp = JSON.parse(todos_in_storage)       
    //     temp.map(obj => createToDO(obj.text, obj.done))
    // }
    // console.log(todos_in_storage)
   

    function createToDO (value, done = false) {

        // const span = document.createElement('span')
        // const li = document.createElement('li')
        // li.classList.add('todo-item')
        // if (done) {
        //     li.classList.add('todo-item-complete')
        // }
        // const deleteBtn = document.createElement('button')
        // deleteBtn.classList.add('button-delete')
        // const spanBtn = document.createElement ('span')
        // spanBtn.classList.add('material-symbols-outlined')
        // spanBtn.innerText= `delete`
        // deleteBtn.append(spanBtn)

        // span.innerText = `${value}`
        // list.appendChild(li).append(span, deleteBtn)

        // li.addEventListener('click', () => {
        //     completeToDo(li, value)
        // })

        // deleteBtn.addEventListener('click', () => { deleteTodo(li, value) })
        
        let todo = {
            text: input.value,
            id: new Date().getTime(),
            done: false
        }
        console.log(todo)
        TODOS.push(todo)
        localStorage.setItem('todo', JSON.stringify (TODOS))
        console.log(TODOS)
        render()
    }
    
    function deleteTodo (li, value) {
        list.removeChild(li)
        let mass = []
        mass.push(...JSON.parse(localStorage.getItem('todo')))
        mass.splice(mass.indexOf(value), 1)
        localStorage.setItem('todo', JSON.stringify(mass))
    }

    function completeToDo (li, value) {
        li.classList.toggle('todo-item-complete')
        let doneTodo = []
        todos.push('1')
        doneTodo.push(...JSON.parse(localStorage.getItem('todo')))
        let liIndex = doneTodo.indexOf (doneTodo.find( item => item.text === value))
        doneTodo[liIndex].done = liClass(li)
        console.log(doneTodo)
        localStorage.setItem('todo', JSON.stringify(doneTodo))
    }

    buttonAdd.addEventListener('click', function () {
        if (input.value.trim() !== '') {
            createToDO(input.value)
            storage()
        }
        input.value = ''
    })
}
function render (){
    const DOMTodos = TODOS.map(item => {
        const span = document.createElement('span')
        const li = document.createElement('li')
        li.classList.add('todo-item')
        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('button-delete')
        const spanBtn = document.createElement ('span')
        spanBtn.classList.add('material-symbols-outlined')
        spanBtn.innerText= `delete`
        deleteBtn.append(spanBtn)
        span.innerText = `${item.text}`
    })
    list.append(DOMTodos)
}
// console.log(todos)
document.addEventListener("DOMContentLoaded", init);

