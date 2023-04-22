//programa que sume dos números

window.onload = () => {
    let numOne = document.getElementById("numOne")
    let numTwo = document.getElementById("numTwo")
    let resultSum = document.querySelector("#result")
    let error = document.querySelector("#error")

    let btnSum = document.querySelector("#btnSum")

    function isNumber(n) {
        return !isNaN(parseFloat(n)) && isFinite(n)
    }

    function sum(numOne, numTwo) {
        return Number(numOne) + Number(numTwo)
    }



    numOne.addEventListener("input", () => {
        if (!isNumber(numOne.value)) {
            //cuando no es número entra aquí
            numOne.value = numOne.value.slice(0, -1)
        }
    })

    numTwo.addEventListener("input", () => {
        if (!isNumber(numTwo.value)) {
            //cuando no es número entra aquí
            numTwo.value = numTwo.value.slice(0, -1)
        }
    })

    btnSum.addEventListener("click", function () {

        let result = Number(numOne.value) + Number(numTwo.value)
        if (!isNaN(result)) {

            resultSum.textContent = result
            //resetear los inputs numOne, numTwo
            numOne.value = ""
            numTwo.value = ""
            error.textContent = ""
        } else {
            error.textContent = "debe colocar datos validos"

        }

    })

    let ul = document.createElement("ul")

    for (let i = 0; i < 10; i++) {
        let li = document.createElement("li")
        li.textContent = i
        li.style.border = "1px solid red"

        li.addEventListener("click", ({target}) => {
            console.log(event)
        })

        ul.appendChild(li)
        console.log("")
    }

    document.body.appendChild(ul)

    let paragraph = document.createElement("p")
    paragraph.textContent = 0

    let buttonCounter = document.createElement("button")
    buttonCounter.textContent="Incrementar"

    function increment(event){
        paragraph.textContent = Number(paragraph.textContent) + 1
        console.log(event)
        if(paragraph.textContent == 10){
            buttonCounter.removeEventListener("click", increment)    
        }
    }

    buttonCounter.addEventListener("click", increment)

    document.body.appendChild(paragraph)
    document.body.appendChild(buttonCounter)

}