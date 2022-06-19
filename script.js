
const email = document.getElementById("email-1");
const chatBtn = document.getElementById("btn-1");
const emailSubmit = document.getElementById("email-2");
const submitBtn = document.getElementById("btn-2");

chatBtn.addEventListener("click", (e) => {
    if (email.value == "") {
        alert("Email input field is empty!!!")
    }

    const regX = /^([a-z A - Z 0 -9]+)@([a-z A - Z]+).([a-z A-Z]+)$/;
    if (regX.test(email.value)) {
        alert("valid user email")
    }
    else {
        alert("Invalid user email")
    }
    e.preventDefault;
})

submitBtn.addEventListener("click", (e) => {
    if (emailSubmit.value == "") {
        alert("Email input field is empty!!!")
    }

    const regX2 = /^([a-z A - Z 0 -9]+)@([a-z A - Z]+).([a-zA-Z]+)$/;
    if (regX2.test(emailSubmit.value)) {
        alert("valid user email")
    }
    else {
        alert("Invalid user email")
    }
    e.preventDefault;
})

const quotes = [
    {
        quote: "Nothing is impossible. The word itself says 'I'm possible!'",
        author: "Audrey Hepburn"
    },
    {
        quote: "The bad news is time flies. The good news is you're the pilot.",
        author: "Michael Altshuler"
    },
    {
        quote: "There is nothing impossible to they who will try.",
        author: "Alexander the Great"
    },
    {
        quote: "Life has got all those twists and turns. You've got to hold on tight and off you go.",
        author: "Nicole Kidman"
    },
    {
        quote: "When you have a dream, you've got to grab it and never let go.",
        author: "Carol Burnett"
    },
    {
        quote: "Anger is the ultimate destroyer of your own peace of mind.",
        author: "Dalai Lama"
    },
    {
        quote: "Don't be afraid. Be focused Be determined. Be hopeful. Be empowered.",
        author: "Michelle Obama"
    },
    {
        quote: "We grow fearless when do the things we fear.",
        author: "Robin Sharma"
    },
    {
        quote: "When one door of happiness closes, another opens, but often we look so long at the closed door that we do not the one which has been opened for us.",
        author: "Helen Keller"
    },
    {
        quote: "If you hear a voice within you say 'you cannot paint', paint and the voice will be silenced.",
        author: "Vincent Van Gogh"
    },
    {
        quote: "The secret of getting ahead is getting started.",
        author: "Mark Twain"
    },
    {
        quote: "Waiting is painful, forgetting is painful, but not knowing the one to do is the worst kind of pain",
        author: "Paulo Coelho"
    },
    {
        quote: "All our dreams can come true if we have the courage to pursue them.",
        author: "Walt Disney"
    },
    {
        quote: "I am so clever that sometimes I don't understand a single word of what I am saying",
        author: "Oscar Wilde"
    }
]

const message = document.querySelector(".message");
const author = document.querySelector(".author");

window.addEventListener("load", newQuote);

function newQuote() {

    let number = Math.floor(Math.random() * quotes.length);
    message.textContent = quotes[number].quote;
    console.log(message.textContent);
    author.textContent = quotes[number].author;
    console.log(author.textContent);
    setTimeout(newQuote, 4000);
}

const icon = document.querySelector(".fa-bars");
const new_header = document.querySelector(".nav-header");
icon.addEventListener("click", () => {
    icon.classList.toggle("fa-xmark");
    new_header.classList.toggle("nav-header-active");
})

function active() {
    new_header.classList.remove("nav-header-active");
    icon.classList.remove("fa-xmark");
}
function active_2() {
    new_header.classList.remove("nav-header-active");
    icon.classList.remove("fa-xmark");
}

const newsletter = document.querySelector(".newsletter");
const thankYou = document.querySelector(".thank-you");
let timeoutId;
let initialTime = 0;

function timeSpent() {
    initialTime++;
    console.log(initialTime);
    if (initialTime > 2) {
        newsletter.style.visibility = "visible";
    }
    timeoutId = setTimeout(timeSpent, 1000)
}
timeSpent()

function stopTimeout() {
    clearTimeout(timeoutId);
}

const newsBtn = document.querySelector(".newsletter-btn");
const thankYouBtn = document.querySelector(".thank-you-btn");
const newsEmail = document.getElementById("newsletter-email");
const newsPass = document.getElementById("newsletter-password");

function validate() {
    if (newsEmail.value == "" && newsPass.value == "") {
        return false;
    }
    
}

function activate() {
    stopTimeout()
    newsletter.style.visibility = "hidden";
    thankYou.style.visibility = "visible";
}
function activate_2() {
    thankYou.style.visibility = "hidden";
}

function activate_3() {
    stopTimeout()
    newsletter.style.visibility = "hidden";
}
