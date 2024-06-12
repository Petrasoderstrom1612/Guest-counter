
let countEl = document.getElementById("count-el") //grabbing the html for h2
let incrementBtn = document.getElementById("increment-btn") //grabbing the html for button


let count = 0
countEl.innerText = count 

incrementBtn.addEventListener("click",function(){ //click on button makes changes
    count++
    console.log(count)
    countEl.innerText = count 
})

function decrement(){ //you can declare the function here and trigger it in html onclick, hence skipping creating decrementBtn DOM and to it connected addEventListener
    if (count > 0){
    count--
    console.log(count)
    countEl.innerText = count 
    }
}

function reset() { //you trigger the function on the reset button, but the change change happens on CountEl, that is why you do not need to create resetBtn DOM
    count = 0
    countEl.innerText = count 
}


