const AC = document.querySelector(".row1-1");
const plusMinus = document.querySelector(".row1-2");
const modulus = document.querySelector(".row1-3");
const division = document.querySelector(".row1-4");
const seven = document.querySelector(".row2-1");
const eight = document.querySelector(".row2-2");
const nine = document.querySelector(".row2-3");
const multiplication = document.querySelector(".row2-4");
const four = document.querySelector(".row3-1");
const five = document.querySelector(".row3-2");
const six = document.querySelector(".row3-3");
const minus = document.querySelector(".row3-4");
const one = document.querySelector(".row4-1");
const two = document.querySelector(".row4-2");
const three = document.querySelector(".row4-3");
const plus = document.querySelector(".row4-4");
const zero = document.querySelector(".row5-1");
const dot = document.querySelector(".row5-2");
const equal = document.querySelector(".row5-3");

AC.addEventListener("click", () => {
    // document.getElementById("result").innerText = "";
    document.getElementById("operation").innerText = "";
});

plusMinus.addEventListener("click", () => {
    document.getElementById("operation").innerText *= -1;
});

modulus.addEventListener("click", () => {
    document.getElementById("operation").innerText /= 100;
});

division.addEventListener("click", () => {
    document.getElementById("operation").innerText += "/"
});

seven.addEventListener("click", () => {
    document.getElementById("operation").innerText += "7"
});

eight.addEventListener("click", () => {
    document.getElementById("operation").innerHTML += "8"
});

nine.addEventListener("click", () => {
    document.getElementById("operation").innerText += "9"
});

multiplication.addEventListener("click", () => {
    document.getElementById("operation").innerText += "*"
});

four.addEventListener("click", () => {
    document.getElementById("operation").innerText += "4"
});

five.addEventListener("click", () => {
    document.getElementById("operation").innerText += "5"
});

six.addEventListener("click", () => {
    document.getElementById("operation").innerText += "6"
});

minus.addEventListener("click", () => {
    document.getElementById("operation").innerText += "-"
});

one.addEventListener("click", () => {
    document.getElementById("operation").innerText += "1"
});

two.addEventListener("click", () => {
    document.getElementById("operation").innerText += "2"
});

three.addEventListener("click", () => {
    document.getElementById("operation").innerText += "3"
});

plus.addEventListener("click", () => {
    document.getElementById("operation").innerText += "+"
});

zero.addEventListener("click", () => {
    document.getElementById("operation").innerText += "0"
});

dot.addEventListener("click", () => {
    document.getElementById("operation").innerText += "."
});

equal.addEventListener("click", () => {
    let process = eval(document.getElementById("operation").innerText);

    document.getElementById("operation").innerText = process.toFixed(2);
});




