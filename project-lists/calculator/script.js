const display = document.getElementById("display");
const calcBtn = document.querySelectorAll(".btn");
const equalBtn = document.querySelector("#btn-equal");
const clearBtn = document.querySelector("#btn-clear");

for (let i = 0; i < calcBtn.length; i++) {
    calcBtn[i].addEventListener("click", () => {
        let num = calcBtn[i].getAttribute("data-num");
        display.value += num;

    })

}



equalBtn.addEventListener("click", () => {
    let value = eval(display.value);
    display.value = value;
})

clearBtn.addEventListener("click", () => {
    display.value = '';
})