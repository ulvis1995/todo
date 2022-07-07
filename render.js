import { list, TODOS, renderButtons } from "./script-next.js";
import {getLocalDate, getLocalTime, dateEdit} from './dateChange.js';
import {completeToDo, deleteToDo} from './function.todo.js'

export function render () {
    while (list.firstChild) {
        list.removeChild(list.firstChild);
    }
    const content = TODOS    
    content.forEach(item => {
        const li = document.createElement('li')
        li.classList.add('todo-item')

        const timePlaneBlock = document.createElement('div')
        timePlaneBlock.classList.add('time-create')
        const timePar = document.createElement('p')
        timePar.style.cursor = 'pointer'
        timePar.innerText = 'Завершить до:'
        let timeInput

        function timePlaneEx () {
            if (item.timePlane !== "Invalid Date") {
                timeInput = document.createElement('p')
                return timeInput.innerText = `${item.timePlane}`
            } else {
                timeInput = document.createElement('input')
                timeInput.type = 'date'
                return timeInput
            }
        }

        timePlaneBlock.append(timePar, timePlaneEx(item))

        timePlaneBlock.addEventListener('click', (e) => {
            e.stopPropagation()
        })

        timePar.addEventListener('click', () => {
            dateEdit (item.id, timeInput)
        })
        
        const spanTime = document.createElement('div')
        spanTime.classList.add('time-create')
        spanTime.innerText = 
            `Дата создания: ${getLocalDate(item.dateCreate)} ${getLocalTime (item.dateCreate)}`
        
        const span = document.createElement('span')
        span.innerText = `${item.text}`
        span.classList.add('todo-text')

        const deleteBtn = document.createElement('button')
        deleteBtn.classList.add('button-delete')
        const spanBtn = document.createElement ('p')
        spanBtn.classList.add('material-symbols-outlined')
        spanBtn.innerText= `delete`
        deleteBtn.append(spanBtn)

        if (item.done === true) {
            li.classList.add('todo-item-complete')
        }
        list.appendChild(li).append(timePlaneBlock, 
            spanTime, span, deleteBtn)
        
        deleteBtn.addEventListener ('click', (e) => {
            e.stopPropagation()
            deleteToDo(item.id)})

        li.addEventListener('click', () => completeToDo(item.id))
    })
    renderButtons ()
}