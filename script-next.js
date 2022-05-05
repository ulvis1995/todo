import { completeAll, deleteAll } from './function.todo.js'
import { dateNow } from './dateNow.js'
import { inputTest } from './dateChange.js'
import { render } from './render.js'

dateNow ()

export let TODOS = []
const input = document.querySelector('input[type="text"]')
const inputDate = document.querySelector('input[type="date"]')

const buttonAdd = document.getElementById('buttonAdd')
export const list = document.querySelector('ul')
const buttonComplete = document.querySelector('.button-complete')
const buttonDelete = document.querySelector('.button-remove')

export function renderButtons () {
    if (TODOS.length == 0) {
        buttonComplete.classList.add('passive')
        buttonDelete.classList.add('passive')
    } else {
        buttonComplete.classList.remove('passive')
        buttonDelete.classList.remove('passive')
    }
}

function init () {
    let storage = localStorage.getItem('todo')
    if (storage) {
        TODOS.push(...JSON.parse(storage))
    }
    render ()
}

function createToDO () {
    let todo = {
        text: input.value,
        id: new Date().getTime(),
        done: false,
        dateCreate: new Date (),
        timePlane: `${inputTest(inputDate)}`,
    }
    TODOS.push(todo)
    localStorage.setItem('todo', JSON.stringify (TODOS))
    render ()
}

buttonAdd.addEventListener('click', function () {
    if (input.value.trim() !== '') {
        createToDO()
    }
    input.value = ''
    inputDate.value = ''
})

buttonDelete.addEventListener('click', () => deleteAll())

buttonComplete.addEventListener('click', () => completeAll())

document.addEventListener("DOMContentLoaded", init);