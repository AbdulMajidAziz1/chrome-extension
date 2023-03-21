let inputB = document.getElementById("btn2")

const inputEL = document.getElementById("input-el");
let myleads = [];
inputB.addEventListener("click", function(){
    myleads.push(inputEL.value)
    inputEL.value = ""
    renderLead()
})
const ulEL = document.getElementById("unL")
let listI = ""
function renderLead(){
    for(let i=0; i<myleads.length; i++){
        listI += `<li>
                <a href = '#' target=' _blank'>
                     ${ myleads[i] }
            </a>
        </li>`
        console.log(listI)
       // const li = document.createElement("li")
       // li.innerText = myleads[i]
       // ulEL.append(li)
        myleads = []
   }
   
   ulEL.innerHTML = listI
}

document.getElementById("contai").innerHTML = "<button onclick = 'buy()'>Buy!</button>"

function buy(){
    document.getElementById("contai").innerHTML += "<p>Thank you for buying"
}

const rec = "Majid"

const email =  `Hey ${ rec}! How is it going? cheers peer `

console.log(email)