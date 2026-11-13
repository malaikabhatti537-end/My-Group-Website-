
// ==========================================
// GRAND EVENTS WEBSITE - JAVASCRIPT
// ==========================================


// 1. JAVASCRIPT OBJECT

let website = {
    name: "Grand Events",
    location: "Pakistan",
    phone: "03001234567",
    email: "grandevents@gmail.com"
};


// 2. JAVASCRIPT ARRAYS

let events = [
    "Wedding",
    "Birthday",
    "Aqiqah",
    "Engagement",
    "Bridal Shower",
    "Corporate",
    "Baby Shower",
    "Other Celebration"
];

let packages = [
    "Basic Package",
    "Standard Package",
    "Premium Package",
    "Luxury Package"
];


// 3. EVENT DETAILS OBJECTS

let eventDetails = {
    Wedding: {
        title: "Wedding Events",
        description: "We organize beautiful weddings with elegant decoration and complete planning."
    },

    Birthday: {
        title: "Birthday Parties",
        description: "We arrange creative themes and joyful birthday celebrations."
    },

    Aqiqah: {
        title: "Aqiqah Ceremonies",
        description: "We arrange beautiful Aqiqah ceremonies for your special day."
    },

    Engagement: {
        title: "Engagement Events",
        description: "We create romantic engagement decorations and arrangements."
    },

    "Bridal Shower": {
        title: "Bridal Showers",
        description: "We organize beautiful bridal shower celebrations."
    },

    Corporate: {
        title: "Corporate Events",
        description: "We manage professional corporate events."
    },

    "Baby Shower": {
        title: "Baby Showers",
        description: "We arrange beautiful baby shower celebrations."
    },

    "Other Celebration": {
        title: "Other Celebrations",
        description: "We organize customized events for every occasion."
    }
};


// 4. LOCAL STORAGE

let bookings = JSON.parse(localStorage.getItem("bookings")) || [];


// 5. SAVE BOOKING FUNCTION

function saveBooking(eventName) {

    let booking = {
        event: eventName,
        date: new Date().toLocaleDateString()
    };

    bookings.push(booking);

    // Keep only the latest 5 bookings
    if (bookings.length > 5) {
        bookings.splice(0, 1);
    }

    localStorage.setItem("bookings", JSON.stringify(bookings));

    alert(eventName + " booking saved successfully!");
}


// 6. EVENT SEARCH FUNCTION

function searchEvent() {

    let search = document.getElementById("eventSearch").value;
    let message = document.getElementById("searchMessage");

    search = search.toLowerCase().trim();

    if (search == "") {
        message.innerHTML = "Please enter an event name.";
    }
    else {

        let found = false;

        for (let i = 0; i < events.length; i++) {

            if (events[i].toLowerCase().includes(search)) {
                message.innerHTML = "We provide " + events[i] + " Events.";
                found = true;
                break;
            }

        }

        if (found == false) {
            message.innerHTML = "Sorry! Event not found.";
        }

    }

}


// DOM FOR EVENT SEARCH

let searchForm = document.getElementById("eventSearchForm");

if (searchForm) {

    searchForm.addEventListener("submit", function(e) {

        e.preventDefault();
        searchEvent();

    });

}


// 7. SHOW EVENT DETAILS FUNCTION

function showEvent(name) {

    let title = document.getElementById("detailTitle");
    let description = document.getElementById("detailDescription");

    if (eventDetails[name]) {

        title.innerHTML = eventDetails[name].title;
        description.innerHTML = eventDetails[name].description;

    }
    else {

        title.innerHTML = "Event Not Found";
        description.innerHTML = "Please select a valid event.";

    }

}


// DOM FOR EVENT DETAILS

let detailButtons = document.querySelectorAll(".event-detail-link");

detailButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let eventName = button.getAttribute("data-event");

        showEvent(eventName);

    });

});


// 8. BOOK EVENT FUNCTION

let bookingButtons = document.querySelectorAll(".small-btn");

bookingButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let eventName = button.getAttribute("data-event");

        saveBooking(eventName);

    });

});


// 9. PACKAGE SELECTION FUNCTION

let packageButtons = document.querySelectorAll(".package-btn");

packageButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        let packageName = button.getAttribute("data-package");

        localStorage.setItem("selectedPackage", packageName);

        alert("You selected " + packageName);

    });

});


// 10. PLANNER SEARCH FUNCTION

function searchPlanner() {

    let search = document.getElementById("plannerSearch").value;

    let planners = document.querySelectorAll(".planner-card");

    search = search.toLowerCase();

    planners.forEach(function(planner) {

        let name = planner.innerText.toLowerCase();

        if (name.includes(search)) {

            planner.style.display = "block";

        }
        else {

            planner.style.display = "none";

        }

    });

}


// DOM FOR PLANNER SEARCH

let plannerSearch = document.getElementById("plannerSearch");

if (plannerSearch) {

    plannerSearch.addEventListener("input", searchPlanner);

}


// 11. PLANNER SPECIALTY SEARCH

let specialty = document.getElementById("plannerSpecialty");

if (specialty) {

    specialty.addEventListener("change", function() {

        let selected = specialty.value;
        let planners = document.querySelectorAll(".planner-card");

        planners.forEach(function(planner) {

            if (selected == "" || planner.innerText.includes(selected)) {

                planner.style.display = "block";

            }
            else {

                planner.style.display = "none";

            }

        });

    });

}


// 12. MOBILE MENU FUNCTION

let menuButton = document.getElementById("menuToggle");
let navLinks = document.getElementById("navLinks");

if (menuButton && navLinks) {

    menuButton.addEventListener("click", function() {

        if (navLinks.style.display == "flex") {

            navLinks.style.display = "none";

        }
        else {

            navLinks.style.display = "flex";

        }

    });

}


// 13. SLICE METHOD

function showRecentBookings() {

    let recentBookings = bookings.slice(-3);

    console.log("Recent Bookings:");

    console.log(recentBookings);

}

showRecentBookings();


// 14. SPLICE METHOD

function removeLastBooking() {

    if (bookings.length > 0) {

        bookings.splice(bookings.length - 1, 1);

        localStorage.setItem("bookings", JSON.stringify(bookings));

        alert("Last booking removed.");

    }
    else {

        alert("No booking available.");

    }

}


// 15. JAVASCRIPT NUMBERS

let totalEvents = events.length;
let totalPackages = packages.length;
let totalBookings = bookings.length;

console.log("Total Events: " + totalEvents);
console.log("Total Packages: " + totalPackages);
console.log("Total Bookings: " + totalBookings);


// 16. WEBSITE INFORMATION

console.log(website.name);
console.log(website.location);
console.log(website.phone);
console.log(website.email);
