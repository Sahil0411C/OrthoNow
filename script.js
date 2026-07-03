// ===============================
// GMT WEBSITE JAVASCRIPT
// ===============================

// ===================================
// Sticky Navbar
// ===================================

window.addEventListener("scroll", function() {
    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {
        header.style.background = "#ffffff";
        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
        header.style.background = "#ffffff";
        header.style.boxShadow = "none";
    }
});

// ======================================
// ORTHONOW WEBSITE JAVASCRIPT
// ======================================

// Create dataLayer if GTM is not loaded
window.dataLayer = window.dataLayer || [];

// Sticky Navbar
window.addEventListener("scroll", function() {

    const header = document.querySelector("header");

    if (!header) return;

    if (window.scrollY > 50) {

        header.classList.add("sticky");

    } else {

        header.classList.remove("sticky");

    }

});

// ===================================
// Smooth Scroll
// ===================================

document.querySelectorAll("nav a").forEach(anchor => {

    anchor.addEventListener("click", function(e) {

        const href = this.getAttribute("href");

        if (!href.startsWith("#")) return;

        e.preventDefault();

        const target = document.querySelector(href);

        if (target) {

            window.scrollTo({
                top: target.offsetTop - 70,
                behavior: "smooth"
            });

        }

    });

});

// ===================================
// Active Navigation
// ===================================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

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

// ===================================
// Counter Animation
// ===================================

const counters = document.querySelectorAll(".stats h2");

let counterStarted = false;

function runCounter() {

    if (counterStarted) return;

    const stats = document.querySelector(".stats");

    if (!stats) return;

    const trigger = stats.offsetTop - window.innerHeight + 100;

    if (window.pageYOffset > trigger) {

        counterStarted = true;

        counters.forEach(counter => {

            const original = counter.innerText;

            const number = parseInt(original.replace(/\D/g, ""));

            let count = 0;

            const speed = Math.max(20, Math.floor(2000 / number));

            const update = () => {

                count += Math.ceil(number / 100);

                if (count >= number) {

                    counter.innerText = original;

                } else {

                    if (original.includes("%")) {

                        counter.innerText = count + "%";

                    } else if (original.includes("+")) {

                        counter.innerText = count + "+";

                    } else if (original.includes("M")) {

                        counter.innerText = count + "M+";

                    } else {

                        counter.innerText = count;

                    }

                    setTimeout(update, speed);

                }

            };

            update();

        });

    }

}

window.addEventListener("scroll", runCounter);

// ===================================
// Scroll Reveal Animation
// ===================================

const revealElements = document.querySelectorAll(
    ".service-card,.price-card,.project,.about-grid div,.testimonial-box"
);

function reveal() {

    revealElements.forEach(item => {

        const windowHeight = window.innerHeight;

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            item.style.opacity = "1";
            item.style.transform = "translateY(0px)";

        }

    });

}

revealElements.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "0.8s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// ===================================
// Contact Form Validation
// ===================================

const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function(e) {

        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea, select");

        let valid = true;

        inputs.forEach(input => {

            if (input.hasAttribute("required") && input.value.trim() === "") {

                input.style.border = "2px solid red";

                valid = false;

            } else {

                input.style.border = "1px solid #ddd";

            }

        });

        if (!valid) {

            alert("Please fill all fields.");

            return;

        }

        alert("Thank you! Your message has been submitted.");

        form.reset();

    });

}

// ===================================
// Back To Top Button
// ===================================

const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";
topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.bottom = "25px";
topBtn.style.right = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#2563eb";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.boxShadow = "0 10px 20px rgba(0,0,0,.2)";
topBtn.style.zIndex = "999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});

// ===================================
// Hero Animation
// ===================================

window.addEventListener("load", () => {

    const heroLeft = document.querySelector(".hero-left");
    const heroRight = document.querySelector(".hero-right");

    if (heroLeft) {

        heroLeft.style.opacity = "0";
        heroLeft.style.transform = "translateX(-50px)";
        heroLeft.style.transition = "1s";

        setTimeout(() => {

            heroLeft.style.opacity = "1";
            heroLeft.style.transform = "translateX(0)";

        }, 200);

    }

    if (heroRight) {

        heroRight.style.opacity = "0";
        heroRight.style.transform = "translateX(50px)";
        heroRight.style.transition = "1s";

        setTimeout(() => {

            heroRight.style.opacity = "1";
            heroRight.style.transform = "translateX(0)";

        }, 400);

    }

});

// =====================================================
// GOOGLE TAG MANAGER EVENT TRACKING
// =====================================================

window.dataLayer = window.dataLayer || [];

function pushEvent(eventName, details = {}) {

    window.dataLayer.push({

        event: eventName,
        ...details

    });

    console.log("GTM Event:", eventName, details);

}

// ===================================
// Hero Book Consultation Button
// ===================================

const heroBookBtn = document.getElementById("heroBookBtn");

if (heroBookBtn) {

    heroBookBtn.addEventListener("click", function() {

        pushEvent("book_consultation_click", {

            location: "hero"

        });

    });

}

// ===============================
// BOOKING STEP 1 TRACKING
// ===============================

const clinic = document.getElementById("clinic");
const specialty = document.getElementById("specialty");

if (clinic && specialty) {

    function trackBookingStep1() {

        if (clinic.value !== "" && specialty.value !== "") {

            dataLayer.push({

                event: "booking_step_complete",

                step_number: 1,

                step_name: "location_specialty_selected",

                clinic_location: clinic.value,

                specialty: specialty.value

            });

            console.log("Step 1 Event Fired");

        }

    }

    clinic.addEventListener("change", trackBookingStep1);

    specialty.addEventListener("change", trackBookingStep1);

}

// ===============================
// BOOKING STEP 2 TRACKING
// ===============================

const nextBtn = document.getElementById("nextBtn");

if (nextBtn) {

    nextBtn.addEventListener("click", function() {

        const patientName = document.getElementById("name").value;

        const phone = document.getElementById("phone").value;

        const preferredDate = document.getElementById("date").value;

        dataLayer.push({

            event: "booking_step_complete",

            step_number: 2,

            step_name: "patient_details_entered",

            patient_name: patientName,

            phone: phone,

            preferred_date: preferredDate

        });

        console.log("Step 2 Event Fired");

    });

}

// ===================================
// Header Book Button
// ===================================

const headerBookBtn = document.getElementById("headerBookBtn");

if (headerBookBtn) {

    headerBookBtn.addEventListener("click", function() {

        pushEvent("book_consultation_click", {

            location: "header"

        });

    });

}

// ===================================
// Call Now Button
// ===================================

const callNowBtn = document.getElementById("callNowBtn");

if (callNowBtn) {

    callNowBtn.addEventListener("click", function() {

        pushEvent("call_now_click");

    });

}

// ===================================
// Appointment Form Tracking
// ===================================

const appointmentForm = document.getElementById("appointmentForm");

if (appointmentForm) {

    appointmentForm.addEventListener("submit", function(e) {

        e.preventDefault();

        const clinic = document.getElementById("clinic");

        pushEvent("appointment_submit", {

            clinic: clinic ? clinic.value : ""

        });

        alert("Appointment Booked Successfully!");

        appointmentForm.reset();

    });

}

/* ===========================
   Call Now Tracking
=========================== */

const callBtn = document.getElementById("contactCallBtn");

if (callBtn) {

    callBtn.addEventListener("click", function() {

        window.dataLayer = window.dataLayer || [];

        dataLayer.push({

            event: "call_now_click",

            page_location: "homepage",

            button_text: "Call Now",

            clinic_location: "Bengaluru"

        });

        console.log("Call Now Event Fired");

    });

}

/* ===========================
   WhatsApp Button Tracking
=========================== */

const whatsappBtn = document.getElementById("whatsappBtn");

if (whatsappBtn) {

    whatsappBtn.addEventListener("click", function() {

        window.dataLayer = window.dataLayer || [];

        dataLayer.push({

            event: "whatsapp_click",

            page_name: "Landing",

            link_type: "Floating Widget",

            destination: "wa.me"

        });

        console.log("WhatsApp Event Fired");

    });

}

/* ===========================
   Patient Guide Download Tracking
=========================== */

const downloadBtn = document.getElementById("downloadGuide");

if (downloadBtn) {

    downloadBtn.addEventListener("click", function() {

        window.dataLayer = window.dataLayer || [];

        dataLayer.push({

            event: "patient_guide_download",

            guide_name: "Knee Care Guide",

            user_name: document.getElementById("name") ?
                document.getElementById("name").value : "",

            phone: document.getElementById("phone") ?
                document.getElementById("phone").value : ""

        });

        console.log("Patient Guide Download Event Fired");

    });

}

/* ===========================
   Clinic Page Tracking
=========================== */

const currentPage = window.location.pathname.toLowerCase();

if (currentPage.includes("bengaluru.html")) {

    dataLayer.push({

        event: "clinic_page_view",

        clinic_name: "Bengaluru",

        city: "Bengaluru",

        doctor_count: 15

    });

    console.log("Bengaluru Clinic Viewed");
} else if (currentPage.includes("hyderabad.html")) {

    dataLayer.push({

        event: "clinic_page_view",

        clinic_name: "Hyderabad",

        city: "Hyderabad",

        doctor_count: 12

    });

    console.log("Hyderabad Clinic Viewed");
} else if (currentPage.includes("chennai.html")) {

    dataLayer.push({

        event: "clinic_page_view",

        clinic_name: "Chennai",

        city: "Chennai",

        doctor_count: 10

    });

    console.log("Chennai Clinic Viewed");
}

// ===============================
// BOOKING COMPLETED EVENT
// ===============================

const bookingId = "ORTH" + Date.now();

dataLayer.push({

    event: "booking_completed",

    step_number: 3,

    step_name: "booking_confirmed",

    booking_id: bookingId,

    clinic_location: document.getElementById("clinic").value,

    specialty: document.getElementById("specialty").value

});

console.log("Booking Completed Event Fired");

// ===================================
// Scroll Depth Tracking
// ===================================

let scroll25 = false;
let scroll50 = false;
let scroll75 = false;
let scroll100 = false;

window.addEventListener("scroll", function() {

    const scrollPercent = Math.round(

        ((window.scrollY + window.innerHeight) /
            document.documentElement.scrollHeight) * 100

    );

    if (scrollPercent >= 25 && !scroll25) {

        scroll25 = true;
        pushEvent("scroll_depth", { percent: 25 });

    }

    if (scrollPercent >= 50 && !scroll50) {

        scroll50 = true;
        pushEvent("scroll_depth", { percent: 50 });

    }

    if (scrollPercent >= 75 && !scroll75) {

        scroll75 = true;
        pushEvent("scroll_depth", { percent: 75 });

    }

    if (scrollPercent >= 100 && !scroll100) {

        scroll100 = true;
        pushEvent("scroll_depth", { percent: 100 });

    }

});

// ===================================
// Service Card Click Tracking
// ===================================

document.querySelectorAll(".service-card").forEach(card => {

    card.addEventListener("click", function() {

        pushEvent("service_click", {

            service: this.innerText.trim()

        });

    });

});

// ===================================
// Phone Link Tracking
// ===================================

document.querySelectorAll('a[href^="tel:"]').forEach(link => {

    link.addEventListener("click", function() {

        pushEvent("phone_click", {

            phone: this.getAttribute("href")

        });

    });

});

// ===================================
// Email Link Tracking
// ===================================

document.querySelectorAll('a[href^="mailto:"]').forEach(link => {

    link.addEventListener("click", function() {

        pushEvent("email_click", {

            email: this.getAttribute("href")

        });

    });

});

// ===================================
// WhatsApp Tracking
// ===================================

document.querySelectorAll('a[href*="wa.me"]').forEach(link => {

    link.addEventListener("click", function() {

        pushEvent("whatsapp_click");

    });

});
// ================blog=====================//
let fired = [];

window.addEventListener("scroll", function() {

    let scrollTop = window.scrollY;
    let docHeight = document.documentElement.scrollHeight - window.innerHeight;
    let percent = Math.round((scrollTop / docHeight) * 100);

    [25, 50, 75, 100].forEach(level => {

        if (percent >= level && !fired.includes(level)) {

            fired.push(level);

            dataLayer.push({
                event: "blog_scroll",
                scroll_depth: level,
                article_name: "ACL Surgery"
            });

            console.log("blog_scroll", level);

        }

    });

});

// ===================================
// Page Loaded
// ===================================

pushEvent("page_loaded", {

    page: window.location.pathname

});

// ===================================
// Console Message
// ===================================

console.log("GMT Website Loaded Successfully 🚀");