const button = document.querySelector("#button")
const hijo = document.querySelector("#hijo")
const padre = document.querySelector("#padre")

button.addEventListener("click", (event) => {
    event.stopPropagation()
    event.preventDefault()
    alert("clicked!")
})

hijo.addEventListener("click", (event) => {

    alert("soy tú hijo")
})

padre.addEventListener("click", () => {
    alert("soy tu padre")
})