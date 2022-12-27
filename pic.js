let duck = document.getElementById("duck1")
let fish = document.getElementById("fish1")
let wolf = document.getElementById("wolf1")

document.getElementById("duck").addEventListener("click", duck1)
document.getElementById("fish").addEventListener("click", fish1)
document.getElementById("wolf").addEventListener("click", wolfs)

function duck1(){
fish.classList.add("hidden")
wolf.classList.add("hidden")
duck.classList.toggle("hidden")

}

function fish1(){
duck.classList.add("hidden")
wolf.classList.add("hidden")
fish.classList.toggle("hidden")

}

function wolfs(){
duck.classList.add("hidden")
fish.classList.add("hidden")
wolf.classList.toggle("hidden")


}