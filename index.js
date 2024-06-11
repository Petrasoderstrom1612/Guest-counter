
let countEl = document.getElementById("count-el") //keeps track of the count
let incrementBtn = document.getElementById("increment-btn") //utilized to trigger the increase

let count = 0
countEl.innerText = count //displays count in html

incrementBtn.addEventListener("click",function(){ //modifies count on trigger
    count++
    console.log(count)
})
