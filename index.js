function move(event){
    let btnDOM = event.target
    let ILikeToMoveItDOM = document.getElementsByClassName("ILikeToMoveIt")
    ILikeToMoveItDOM[0].style.height = "30vh"
    ILikeToMoveItDOM[0].style.width = "50vw"
    let x = Math.floor(Math.random()*80)
    let y = Math.floor(Math.random()*80)
    btnDOM.style.top = `${y}%`
    btnDOM.style.left = `${x}%`
}

async function ah(){
    let inputDOM = document.querySelector("input[name='SaySomeThing']")
    let saySomeThing = document.getElementById("SaySomeThing")
    saySomeThing.innerText = inputDOM.value
    try{
        let text = JSON.stringify({text:inputDOM.value})
        await fetch("/api",{
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json"
            },
            body: text
        })
    }catch{
        console.log(":(")
    }
}