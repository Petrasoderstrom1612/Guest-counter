
let countEl = document.getElementById("count-el") //grabbing the html for h2
let incrementBtn = document.getElementById("increment-btn") //grabbing the html for button
let decrementBtn = document.getElementById("decrement-btn") //grabbing the html for button

let count = 0
countEl.innerText = count 

incrementBtn.addEventListener("click",function(){ //click on button makes changes
    count++
    console.log(count)
    countEl.innerText = count 
})

decrementBtn.addEventListener("click",function(){ //click on button makes changes
    if (count > 0){
    count--
    console.log(count)
    countEl.innerText = count 
    }
})

function reset() {
    count = 0
    countEl.innerText = count 
}


