
let countEl = document.getElementById("count-el")
let incrementBtn = document.getElementById("increment-btn")

let count = 0
countEl.innerText = count

incrementBtn.addEventListener("click",function(){
    count++
    console.log(count)
})
