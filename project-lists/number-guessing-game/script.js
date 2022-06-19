let inputField = document.querySelector("input");
const button = document.querySelector("button");
const display = document.querySelector("p");

let number = Math.floor(Math.random() * 100);



button.addEventListener("click", () => {
    if (inputField.value == "") {
        alert("Input field is empty!");
    }
    else if (inputField.value > 100 || inputField.value < 0) {
        display.textContent = "You are out of the range!";
    }
    else if (inputField.value == number) {
        display.textContent = `You guess it right, the number is ${number}`;
    }
    else if (inputField.value > number) {
        display.textContent = "You guess is too high!";
    }
    else if (inputField.value < number) {
        display.textContent = "You guess is too low!";
    }
    else {
        display.textContent = "Input field value is not a number!";
    }
    console.log(number)
})

