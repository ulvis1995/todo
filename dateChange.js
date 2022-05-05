export function getLocalDate (str) {
    return new Date(str).toLocaleDateString()
}

export function getLocalTime (str) {
    return new Date(str).toLocaleTimeString('ru-arab', 
        {hour: '2-digit', minute: '2-digit'})
}

export function inputTest (date) {
    let min = new Date ()
    let inputtest = new Date (date.value).valueOf()
    let max = new Date ('2030-12-31').valueOf()
    if ((inputtest < min) || (inputtest > max)) {
        return new Date(min).toLocaleDateString()
    } else {
        return new Date (date.value).toLocaleDateString()
    }
}

export function dateEdit (id, timeInput) {
    const ind = TODOS.findIndex( item => item.id === id)
    TODOS[ind].timePlane = inputTest(timeInput)
    localStorage.setItem('todo', JSON.stringify(TODOS))
    render()
}