// document.getElementById("count-el").innerText = 5



// initialize the passenger count as 0
// listen for clicks on the increment button, executes the js on click
// increment the count variable when the increment button is clicked
// change the count-el in HTML to reflect the new count

let countEl = document.getElementById("count-el")

console.log(countEl)

let count = 0

function increment() {
    count = count + 1
    countEl.innerText = count
    console.log(count)
    
}

function save() {
    console.log(count)
}

