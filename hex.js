const code = ["1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]
const btn = document.getElementById("btn");
 
btn.addEventListener("click", function () {
    let x = "#";
    let y;
    for (let index = 0; index < 6; index++) {
        y = Math.floor(Math.random()*code.length);
        x += code[y];
        
    }
    document.body.style.backgroundColor = x;
    document.querySelector(".color").innerHTML = x;
})
 