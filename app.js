const keys = document.querySelector(".keys");
// console.log(keys);
// const number = document.querySelectorAll(".num");
// const operation = document.querySelectorAll(".operation");
const screenUpSide = document.getElementById("screen-up");
// console.log(screenUpSide);

const screenDownSide = document.getElementById("screen-down");
// console.log(screenDownSide);

keys.addEventListener("click", (e) => {
    

    if (e.target.classList.contains("AC")) {
        // console.log("clicked");
        screenDownSide.innerText = "";
        screenUpSide.innerText = "";

    } else if (e.target.classList.contains("plus-minus")) {
        screenDownSide.innerText = -screenDownSide.innerText;

    } else if (e.target.classList.contains("modulus")) {
        screenDownSide.innerText = screenDownSide.innerText / 100;

    } else if (e.target.classList.contains("num")) {
        screenDownSide.innerText += e.target.innerHTML;
        console.log(e.target.innerText);

    } else if (e.target.classList.contains("operations")) {
        screenUpSide.innerText = screenDownSide.innerText + " " + e.target.innerText;

    }  else if (e.target.classList.contains("equal")) {
        equal();
    }
})

