
const show = document.querySelector(".header-small");
const toggle = document.querySelector(".fa-bars");


toggle.addEventListener("click", () => {
    let width = "969px"
    toggle.classList.toggle("fa-xmark");
    show.classList.toggle("header-small-active");
})


function active() {
    show.classList.remove("header-small-active");
    toggle.classList.remove("fa-xmark");
}
function active_2() {
    show.classList.remove("header-small-active");
    toggle.classList.remove("fa-xmark");
}