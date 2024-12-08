/// navabr
var navbar = document.getElementById("navbar");
var scroll = window.scrollY;
var navHeight = navbar.offsetHeight;

// footer
var footer = document.getElementById("footer");
var footHeight = footer.offsetHeight;
var deskFoot = document.getElementById("deskFoot");

// Function to handle intersection changes
function handleIntersection(entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            // "deskFoot" is on the screen, hide the footer
            footer.style.display = "none";
        } else {
            // "deskFoot" is not on the screen, show the footer
            footer.style.display = "flex";
        }
    });
}

// Create an Intersection Observer
var observer2 = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.5, // Trigger the callback when "deskFoot" is 50% visible
});

// Observe the "deskFoot" section
observer2.observe(deskFoot);

window.addEventListener("scroll", function () {
    var scrolled = window.scrollY;
    if (scrolled > scroll) {
        footer.classList.add("animate");
        footer.classList.add("sticked");
    } else {
        footer.classList.remove("animate");
        footer.classList.remove("sticked");
    }

    if (scrolled > navHeight) {
        navbar.classList.add("animate");
    } else {
        navbar.classList.remove("animate");
    }

    if (scrolled > scroll) {
        navbar.classList.remove("sticked");
    } else {
        navbar.classList.add("sticked");
    }

    scroll = window.scrollY;
});

// lenis
const lenis = new Lenis();

lenis.on("scroll", (e) => { });

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// swiper
const swiper = new Swiper(".mySwiper", {
    // Optional parameters
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + "</span>";
        },
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 40000,
        disableOnInteraction: false,
    },
    speed: 1500,
});

const swiper2 = new Swiper(".architectureSwipper", {
    // Optional parameters
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".arrow-left",
        prevEl: ".arrow-right",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

const swiper3 = new Swiper(".amenitiesSwipper", {
    // Optional parameters
    speed: 1000,
    loop: true,
    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".arrow-left",
        prevEl: ".arrow-right",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

const swiper5 = new Swiper(".homeSwiper", {
    // Optional parameters
    speed: 1000,
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: ".arrow-left",
        prevEl: ".arrow-right",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

const swiper4 = new Swiper(".servicesSwiper", {
    // Optional parameters
    speed: 1000,
    slidesPerView: "auto",
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".arrow-left",
        prevEl: ".arrow-right",
    },

    // And if we need scrollbar
    scrollbar: {
        el: ".swiper-scrollbar",
    },
});

// aos
AOS.init();

// Select the image element
const image = document.getElementsByClassName("img-zooming");
const controller = new ScrollMagic.Controller();

Array.from(image).forEach((img) => {
    new ScrollMagic.Scene({
        triggerElement: img, // The element that triggers the animation
        triggerHook: "onEnter", // Trigger when the trigger element enters the viewport
    })
        .setTween(img, { scale: 1, duration: 5 }) // GSAP animation
        .addTo(controller);
});
// Create a GSAP timeline

// Create a scene that triggers when the trigger element enters the viewport

// ukiyo parallax
const images = document.getElementsByClassName("ukiyo");
new Ukiyo(images);

// lazy load
const el = document.querySelectorAll("img");
const observer = lozad(el); // passing a `NodeList` (e.g. `document.querySelectorAll()`) is also valid
observer.observe();

// mobile nav
var mobileNavToggle = document.getElementById("mobileNavToggle");
var mobileNav = document.getElementById("mobileNav");
var xmarkMobileNav = document.getElementById("xmarkMobileNav");

mobileNavToggle.addEventListener("click", () => {
    mobileNav.style.left = "0px";
});

xmarkMobileNav.addEventListener("click", () => {
    mobileNav.style.left = "-100vw";
});

// borchoure form
var formType = "brochure";
var brochureBtn = document.getElementById("brochureBtn");
var brochureForm = document.getElementById("brochureForm");
var xmark = document.getElementById("xmark");
var formTitle = document.getElementById("formTitle");

xmark.addEventListener("click", () => {
    brochureForm.style.right = "-100%";
});

const openForm = (form) => {
    if (form === "brochure") {
        formType = "brochure";
        formTitle.innerHTML = `DOWNLOAD ORLA INFINITY BROCHURE`;
    }

    if (form === "contact") {
        formType = "privateMeeting";
        formTitle.innerHTML = `CONTACT US`;
    }

    if (form === "privateMeeting") {
        formType = "privateMeeting";
        formTitle.innerHTML = `BOOK YOUR PRIVATE MEETING`;
    }
    brochureForm.style.right = "0px";
};

const input = document.querySelector("#dialCode");
const iti = window.intlTelInput(input, {
    utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    separateDialCode: true,
    customPlaceholder: function (
        selectedCountryPlaceholder,
        selectedCountryData
    ) {
        return "Your Phone Number";
    },
    initialCountry: "ae",
});

const input1 = document.querySelector("#dialCode1");
const iti1 = window.intlTelInput(input1, {
    utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@18.2.1/build/js/utils.js",
    separateDialCode: true,
    customPlaceholder: function (
        selectedCountryPlaceholder,
        selectedCountryData
    ) {
        return "Your Phone Number";
    },
    initialCountry: "ae",
});

brochureForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var fname = document.getElementById("first_name").value;
    var lname = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var country_code = document.getElementsByClassName(
        "iti__selected-dial-code"
    )[0].innerText;
    var phone = document.getElementById("phone").value;
    var prefered_lang = document.getElementById("prefered_lang").value;
    var nationality = document.getElementById("nationality").value;
    // var budget = document.getElementById("budget").value;
    var budget = 0;
    var preferred_method_contact =
        document.getElementById("preferred_method").value;

    var today_date = new Date();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
    const parsedPhoneNumber = phoneNumberUtil.parse(country_code + phone, null); // The second argument can be null or an empty string
    if (!phoneNumberUtil.isValidNumber(parsedPhoneNumber)) {
        alert("Enter a valid phone number");
        return;
    }

    var utm_source = urlParams.get("utm_source");
    var utm_medium = urlParams.get("utm_medium");
    var utm_campaign = urlParams.get("utm_campaign");
    var utm_content = urlParams.get("utm_content");
    var utm_term = urlParams.get("utm_term");
    var utm_adgroup = urlParams.get("utm_adgroup");
    var gclid = urlParams.get("gclid");
    var msclkid = urlParams.get("msclkid");
    var fbclid = urlParams.get("fbclid");
    var li_fat_id = urlParams.get("li_fat_id");
    var twclid = urlParams.get("twclid");
    var gad = urlParams.get("gad");

    var apiUrl = `?Created Date=${today_date}&First Name=${fname}&Last Name=${lname}&Email=${email}&Country Code=${country_code}&Phone Number=${phone}&Preferred Language=${prefered_lang}&Nationality=${nationality}&Budget=${budget}&Preferred Contact Number=${preferred_method_contact}&UTM Source=${utm_source}&UTM Medium=${utm_medium}&UTM Campaign=${utm_campaign}&UTM content=${utm_content}&UTM Term=${utm_term}&UTM Adgroup=${utm_adgroup}&gclid=${gclid}&msclkid=${msclkid}&fbclid=${fbclid}&li_fat_id=${li_fat_id}&twclid=${twclid}&gad=${gad}`;

    fetch(`https://hooks.zapier.com/hooks/catch/8540544/3stvia7/${apiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then(function (response) {
            if (response.status === 200) {
                if (formType === "brochure") {
                    const downloadLink = document.createElement("a");
                    downloadLink.href = "/assets/Orla_Infinity_E_brochure.pdf";
                    downloadLink.download = "Orla_Infinity_E_brochure.pdf";
                    downloadLink.target = "_blank";
                    downloadLink.click();
                    window.location.href = "./thankyou.html";
                } else if (formType === "privateMeeting") {
                    window.location.href = "./thankyou.html";
                } else if (formType === "contact") {
                    window.location.href = "./thankyou.html";
                }
            } else {
                // Handle error here
                console.error("Error: Unable to submit the form.");
            }
        })
        .catch(function (error) {
            // Handle network or other errors here
            console.error("Error: " + error);
        });
});

var privateBookingForm = document.getElementById("privateBookingForm");
privateBookingForm.addEventListener("submit", function (e) {
    e.preventDefault();

    var fname = document.getElementById("first_name1").value;
    var lname = document.getElementById("last_name1").value;
    var email = document.getElementById("email1").value;
    var country_code = document.getElementsByClassName(
        "iti__selected-dial-code"
    )[1].innerText;
    var phone = document.getElementById("phone1").value;
    var prefered_lang = document.getElementById("prefered_lang1").value;
    var nationality = document.getElementById("nationality1").value;
    // var budget = document.getElementById("budget").value;
    var budget = 0;
    var preferred_method_contact =
        document.getElementById("preferred_method1").value;

    var today_date = new Date();
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);

    const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
    const parsedPhoneNumber = phoneNumberUtil.parse(country_code + phone, null); // The second argument can be null or an empty string
    if (!phoneNumberUtil.isValidNumber(parsedPhoneNumber)) {
        alert("Enter a valid phone number");
        return;
    }

    var utm_source = urlParams.get("utm_source");
    var utm_medium = urlParams.get("utm_medium");
    var utm_campaign = urlParams.get("utm_campaign");
    var utm_content = urlParams.get("utm_content");
    var utm_term = urlParams.get("utm_term");
    var utm_adgroup = urlParams.get("utm_adgroup");
    var gclid = urlParams.get("gclid");
    var msclkid = urlParams.get("msclkid");
    var fbclid = urlParams.get("fbclid");
    var li_fat_id = urlParams.get("li_fat_id");
    var twclid = urlParams.get("twclid");
    var gad = urlParams.get("gad");

    var apiUrl = `?Created Date=${today_date}&First Name=${fname}&Last Name=${lname}&Email=${email}&Country Code=${country_code}&Phone Number=${phone}&Preferred Language=${prefered_lang}&Nationality=${nationality}&Budget=${budget}&Preferred Contact Number=${preferred_method_contact}&UTM Source=${utm_source}&UTM Medium=${utm_medium}&UTM Campaign=${utm_campaign}&UTM content=${utm_content}&UTM Term=${utm_term}&UTM Adgroup=${utm_adgroup}&gclid=${gclid}&msclkid=${msclkid}&fbclid=${fbclid}&li_fat_id=${li_fat_id}&twclid=${twclid}&gad=${gad}`;

    fetch(`https://hooks.zapier.com/hooks/catch/8540544/3stvia7/${apiUrl}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
    })
        .then(function (response) {
            if (response.status === 200) {
                window.location.href = "./thankyou.html";
            } else {
                // Handle error here
                console.error("Error: Unable to submit the form.");
            }
        })
        .catch(function (error) {
            // Handle network or other errors here
            console.error("Error: " + error);
        });
});

let cursor = document.querySelector('.custom-cursor');

window.addEventListener('mousemove', (e) => {
    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;
});