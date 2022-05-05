import { TODOS } from "./script-next.js"
import { render } from "./render.js"

export function completeToDo (id) {
    const ind = TODOS.findIndex( item => item.id === id)
    if (TODOS[ind].done ===  true) {
        TODOS[ind].done = false
    } else {
        TODOS[ind].done = true
    }
    localStorage.setItem('todo', JSON.stringify(TODOS))
    render ()
}

export function completeAll () {
    TODOS.forEach(item => item.done = true)
    localStorage.setItem('todo', JSON.stringify(TODOS))    
    render ()
}

export function deleteToDo (id) {
    const ind = TODOS.findIndex(item => item.id === id)
    TODOS.splice(ind, 1)
    localStorage.setItem('todo', JSON.stringify(TODOS))
    render()
}

export function deleteAll () {
    TODOS.length = 0
    localStorage.setItem('todo', JSON.stringify(TODOS))
    render()
}

