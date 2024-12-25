
// dom element

const counter = document.getElementById("counter") 
const incrementEl = document.getElementById("increment");
const decrementEl = document.getElementById("decrement");

// initial state

let count = 0;

incrementEl.addEventListener("click",()=>{
    count++,
    counter.innerText = count;
});

decrementEl.addEventListener("click",()=>{
    count--;
    counter.innerText = count;
})