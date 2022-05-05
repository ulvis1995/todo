export function dateNow () {
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
    const timeD =number.appendChild(pDate).append(timeNow)
    return timeD
}