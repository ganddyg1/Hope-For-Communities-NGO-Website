// ===============================
// Donate Button
// ===============================

function donate() {
    alert(
        "❤️ Thank you for supporting Hope for Communities NGO!\n\nYour generosity helps provide education, healthcare and community development across Nigeria."
    );
}

// ===============================
// Sticky Navbar Shadow
// ===============================

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 40) {
        header.style.boxShadow = "0 4px 20px rgba(0,0,0,.15)";
    } else {
        header.style.boxShadow = "0 2px 10px rgba(0,0,0,.1)";
    }

});

// ===============================
// Fade In Animation
// ===============================

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.classList.add("hidden");

    observer.observe(section);

});

// ===============================
// Animated Counters
// ===============================

const counters = document.querySelectorAll(".impact-card h3");

let counterStarted = false;

window.addEventListener("scroll", () => {

    const impact = document.querySelector("#impact");

    if (!impact || counterStarted) return;

    const position = impact.getBoundingClientRect().top;

    if (position < window.innerHeight - 100) {

        counterStarted = true;

        counters.forEach(counter => {

            const target = parseInt(counter.innerText.replace(/\D/g, ""));

            let count = 0;

            const increment = Math.ceil(target / 100);

            const update = () => {

                count += increment;

                if (count >= target) {

                    counter.innerText = counter.innerText.includes("+")
                        ? target + "+"
                        : target;

                } else {

                    counter.innerText = counter.innerText.includes("+")
                        ? count + "+"
                        : count;

                    requestAnimationFrame(update);

                }

            };

            update();

        });

    }

});

// ===============================
// Back To Top Button
// ===============================

const topButton = document.createElement("button");

topButton.innerHTML = "⬆";

topButton.id = "topBtn";

document.body.appendChild(topButton);

topButton.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});