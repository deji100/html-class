const text = document.querySelector("#color")
const orange_but = document.querySelector("#but1")
const red_but = document.querySelector("#but2")
const green_but = document.querySelector("#but3")
const yellow_but = document.querySelector("#but4")

orange_but.addEventListener('click', () => {
    text.style.color = 'orange'
})

red_but.addEventListener('click', () => {
    text.style.color = 'red'
})

green_but.addEventListener('click', () => {
    text.style.color = 'green'
})

yellow_but.addEventListener('click', () => {
    text.style.color = 'yellow'
})