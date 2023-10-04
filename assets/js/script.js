/**
 * element toggle function
 */

const elemToggleFunc = function (elem) {
    elem.classList.toggle("active");
};

/**
 * header sticky & go to top
 */

const header = document.querySelector("[data-header]");
const goTopBtn = document.querySelector("[data-go-top]");

window.addEventListener("scroll", function () {
    if (window.scrollY >= 10) {
        header.classList.add("active");
        goTopBtn.classList.add("active");
    } else {
        header.classList.remove("active");
        goTopBtn.classList.remove("active");
    }
});

/**
 * navbar toggle
 */

const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
const navbar = document.querySelector("[data-navbar]");

navToggleBtn.addEventListener("click", function () {
    elemToggleFunc(navToggleBtn);
    elemToggleFunc(navbar);
    elemToggleFunc(document.body);
});

/**
 * skills toggle
 */

const toggleBtnBox = document.querySelector("[data-toggle-box]");
const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
const skillsBox = document.querySelector("[data-skills-box]");

for (let i = 0; i < toggleBtns.length; i++) {
    toggleBtns[i].addEventListener("click", function () {
        elemToggleFunc(toggleBtnBox);
        for (let i = 0; i < toggleBtns.length; i++) {
            elemToggleFunc(toggleBtns[i]);
        }
        elemToggleFunc(skillsBox);
    });
}

/**
 * dark & light theme toggle
 */

const themeToggleBtn = document.querySelector("[data-theme-btn]");

themeToggleBtn.addEventListener("click", function () {
    elemToggleFunc(themeToggleBtn);

    if (themeToggleBtn.classList.contains("active")) {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");

        localStorage.setItem("theme", "light_theme");
    } else {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");

        localStorage.setItem("theme", "dark_theme");
    }
});

/**
 * check & apply last time selected theme from localStorage
 */

if (localStorage.getItem("theme") === "light_theme") {
    themeToggleBtn.classList.add("active");
    document.body.classList.remove("dark_theme");
    document.body.classList.add("light_theme");
} else {
    themeToggleBtn.classList.remove("active");
    document.body.classList.remove("light_theme");
    document.body.classList.add("dark_theme");
}

function sendMessage(text) {
    const url = `https://api.telegram.org/bot6324531130:AAEEbKEdPmGmzOkpw2mKI_aVpqXeajTgmO0/sendMessage?chat_id=5766558074&text=${encodeURIComponent(
        text
    )}`; // The url to request
    const xht = new XMLHttpRequest();
    xht.open("GET", url);
    xht.send();
}

function SendMsg() {
    let UsrName = document.getElementById("name").value;
    let UsrEmail = document.getElementById("email").value;
    let UsrPhone = document.getElementById("phone").value;
    let UsrMsg = document.getElementById("message").value;

    if (UsrName == "" || UsrEmail == "" || UsrPhone == "" || UsrMsg == "") {
        alert("Enter all the details!");
        return;
    }

    let messagebe = `
Name :  ${UsrName}
Email :  ${UsrEmail}
Phone No :  ${UsrPhone}
Message :  ${UsrMsg}
    `;
    try {
        sendMessage(messagebe); // sending to telegram
        alert("Message sent Successfully."); // on error sending message
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("phone").value = "";
        document.getElementById("message").value = "";
    } catch (error) {
        alert("Message sending failed. Please try again."); // on error sending message
    }
}
