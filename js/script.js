/*==================================================
            PRELOADER
==================================================*/

window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    if (preloader) {
        preloader.style.opacity = "0";
        preloader.style.visibility = "hidden";

        setTimeout(() => {
            preloader.remove();
        }, 600);
    }
});

/*==================================================
            STICKY HEADER
==================================================*/

const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

});

/*==================================================
            SCROLL PROGRESS BAR
==================================================*/

const progressBar = document.getElementById("progressBar");

window.addEventListener("scroll", () => {

    const scroll =
        document.documentElement.scrollTop;

    const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

    progressBar.style.width =
        (scroll / height) * 100 + "%";

});

/*==================================================
            SCROLL TO TOP
==================================================*/

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        scrollBtn.classList.add("active");

    } else {

        scrollBtn.classList.remove("active");

    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

/*==================================================
            MOBILE MENU
==================================================*/



const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector("nav");

menuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
});

document.querySelectorAll("nav a").forEach(function(link){

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior:"smooth"
            });
        }

        nav.classList.remove("active");

    });

});





// const menuBtn = document.querySelector(".menu-btn");
// const nav = document.querySelector("nav");

// menuBtn.addEventListener("click", () => {

//     nav.classList.toggle("active");

// });

/*==================================================
            COUNTER ANIMATION
==================================================*/

const counters = document.querySelectorAll(".counter, .count");

const counterObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (!entry.isIntersecting) return;

        const counter = entry.target;

        const target =
            +counter.dataset.target;

        let count = 0;

        const speed = target / 120;

        function updateCounter() {

            count += speed;

            if (count < target) {

                counter.innerText =
                    Math.ceil(count);

                requestAnimationFrame(updateCounter);

            } else {

                counter.innerText = target + "+";

            }

        }

        updateCounter();

        counterObserver.unobserve(counter);

    });

}, {

    threshold: .5

});

counters.forEach(counter => {

    counterObserver.observe(counter);

});

/*==================================================
            TYPING EFFECT
==================================================*/

const typing = document.getElementById("typing");

const words = [

    "Assistant Professor – III",

    "Finance Expert",

    "Research Scholar",

    "Accounting Specialist",

    "Academic Mentor"

];

let wordIndex = 0;

let letterIndex = 0;

let deleting = false;

function type() {

    const current = words[wordIndex];

    if (!deleting) {

        typing.innerHTML =
            current.substring(0, letterIndex++);

        if (letterIndex > current.length) {

            deleting = true;

            setTimeout(type, 1500);

            return;

        }

    } else {

        typing.innerHTML =
            current.substring(0, letterIndex--);

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(type, deleting ? 40 : 90);

}

if (typing) {

    type();

}

/*==================================================
            SCROLL REVEAL
==================================================*/

const reveals =
    document.querySelectorAll(
        ".practice-card,.glass-box,.timeline-item,.tech-box,.gallery-item,.testimonial-card,.info-card"
    );

const revealObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {

    threshold: .15

});

reveals.forEach(item => {

    item.classList.add("hidden");

    revealObserver.observe(item);

});

/*==================================================
            DARK MODE
==================================================*/

const darkToggle =
    document.getElementById("darkMode");

if (darkToggle) {

    darkToggle.addEventListener("click", () => {

        document.body.classList.toggle("dark");

        localStorage.setItem(

            "theme",

            document.body.classList.contains("dark")

                ? "dark"

                : "light"

        );

    });

}

window.addEventListener("DOMContentLoaded", () => {

    if (localStorage.getItem("theme") === "dark") {

        document.body.classList.add("dark");

    }

});

/*==================================================
            SMOOTH ACTIVE MENU
==================================================*/

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

/*==================================================
            CONTACT FORM
==================================================*/

// const form = document.querySelector("form");

// if (form) {

//     form.addEventListener("submit", function (e) {

//         e.preventDefault();

//         alert("Thank you! Your message has been submitted.");

//         form.reset();

//     });

// }












const form = document.getElementById("contactForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let name=document.getElementById("name").value;

    let email=document.getElementById("email").value;

    let subject=document.getElementById("subject").value;

    let message=document.getElementById("message").value;

    let phone="919415066310"; // Replace with your WhatsApp number

    let text=
`Hello Dr. Shashwat Bajpai,

Name : ${name}

Email : ${email}

Subject : ${subject}

Message :
${message}`;

    let url="https://wa.me/"+phone+"?text="+encodeURIComponent(text);

    window.open(url,"_blank");

});

