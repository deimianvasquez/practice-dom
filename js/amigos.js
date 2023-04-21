window.onload = () => {
    let body = document.body

    let arrColors = ["red", "green", "purple","blue","yellow"]

    let app = document.querySelector("#app")
    app.style.border = "1px solid red"
    app.style.width = "500px"
    app.style.height = "500px"
    app.style.margin = "0 auto"
    app.style.position = "relative"


    let h1 = document.createElement("h1")
    h1.textContent = "Quieres ser mi amigo?"


    let buttonNo = document.createElement("button")
    buttonNo.textContent = "Nop"
    buttonNo.style.position = "absolute"
    buttonNo.style.bottom = "50px"
    buttonNo.style.right = "50px"



    let buttonSip = document.createElement("button")
    buttonSip.textContent = "Yes"
    buttonSip.style.position = "absolute"
    buttonSip.style.bottom = "50px"
    buttonSip.style.left = "50px"


    buttonNo.addEventListener("mouseover", () => {
        buttonNo.style.left = `${Math.floor(Math.random() * 490)}px`
        buttonNo.style.bottom = `${Math.floor(Math.random() * 490)}px`
    })

    buttonSip.addEventListener("click", () => {
        alert("Eeeeee!!!!")
    })

   

    setInterval(()=>{
        app.style.backgroundColor = arrColors[Math.floor(Math.random()*arrColors.length)]
    }, 2000)

    app.appendChild(buttonNo)
    app.appendChild(buttonSip)
}