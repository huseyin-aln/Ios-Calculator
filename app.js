const keys = document.querySelector(".keys");

const screenUpSide = document.getElementById("screen-up");

const screenDownSide = document.getElementById("screen-down");

keys.addEventListener("click", (e) => {
    
    if (e.target.classList.contains("AC")) {
        screenDownSide.innerText = "";
        screenUpSide.innerText = "";

    } else if (e.target.classList.contains("plus-minus")) {
        if (!screenDownSide.innerText) {
            screenDownSide.innerText = "";
        } else {
            screenDownSide.innerText = -screenDownSide.innerText;
        }
        

    } else if (e.target.classList.contains("modulus")) {
        if (!screenDownSide.innerText) {
            screenDownSide.innerText = "";  
        } else {
            screenDownSide.innerText = screenDownSide.innerText / 100;
        }
        
    } else if (e.target.classList.contains("num")) {
        
        screenDownSide.innerText += e.target.innerHTML;
        console.log(e.target.innerText);

    } else if (e.target.classList.contains("operations")) {
        if (!screenDownSide.innerText) {
            screenDownSide.innerText = "";
        }  else {
            equal();
            screenUpSide.innerText = screenDownSide.innerText + " " + e.target.innerText;
            screenDownSide.innerText = "";
        }
        
    }  else if (e.target.classList.contains("equal")) {
        equal();
    }
})

const equal = function () {

    if (screenUpSide.innerText.slice(-1) == "÷") {
        screenDownSide.innerText = (screenUpSide.innerText.slice(0, -1) / screenDownSide.innerText).toFixed(2);

    } else if (screenUpSide.innerText.slice(-1) == "x") {
        screenDownSide.innerText = (screenUpSide.innerText.slice(0, -1) * screenDownSide.innerText).toFixed(2);

    } else if (screenUpSide.innerText.slice(-1) == "+") {
        screenDownSide.innerText = Number(screenUpSide.innerText.slice(0, -1)) + Number(screenDownSide.innerText);

    } else if (screenUpSide.innerText.slice(-1) == "-") {
        screenDownSide.innerText = screenUpSide.innerText.slice(0, -1) - screenDownSide.innerText;
    }
}