const clr = ["red", "blue", "coral", "yellow"];
const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
    let x = Math.floor(Math.random() * clr.length)
    document.body.style.backgroundColor = clr[x];
     
    document.querySelector(".color").innerHTML = clr[x];
     
})
