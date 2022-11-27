const plus = document.querySelector(".plus"),
minus = document.querySelector(".minus"),
num = document.querySelector(".num");

let a = 50000;

plus.addEventListener("click", ()=> {
    a = (a < 200000) ? a + 5000 : a;
    num.innerText = a;
});

minus.addEventListener("click", ()=> {
    if(a > 1000){
        a = (a <= 200000) ? a - 5000 : a;
        num.innerText = a;
    }
});