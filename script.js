// ========================================
// GRANDEVENTS EVENT PLANNING WEBSITE
// ========================================


// 1. WELCOME MESSAGE

let websiteName = "Grandevents";

alert("Welcome to " + websiteName + "! Plan your special moments with us.");


// 2. MOBILE MENU

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", function() {

    navLinks.classList.toggle("active");

});


// Close menu after clicking any link

let menuItems = navLinks.querySelectorAll("a");

menuItems.forEach(function(item) {

    item.addEventListener("click", function() {

        navLinks.classList.remove("active");

    });

});


// 3. DISPLAY MESSAGES

function showMessage(form, message) {

    let oldMessage = form.querySelector(".js-message");

    if (oldMessage) {
        oldMessage.remove();
    }

    let msg = document.createElement("p");

    msg.className = "js-message";
    msg.textContent = message;

    form.appendChild(msg);

}


// 4. LOCAL STORAGE FUNCTIONS

function getData(key) {

    let data = localStorage.getItem(key);

    if (data === null) {
        return [];
    }

    return JSON.parse(data);

}


function saveData(key, data) {

    localStorage.setItem(key, JSON.stringify(data));

}


// 5. EVENT BOOKING FORM

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let booking = {

        name: bookingForm.elements["name"].value,
        phone: bookingForm.elements["phone"].value,
        email: bookingForm.elements["email"].value,
        event: bookingForm.elements["event"].value,
        date: bookingForm.elements["date"].value,
        guests: bookingForm.elements["guests"].value,
        theme: bookingForm.elements["theme"].value,
        package: bookingForm.elements["package"].value,
        venue: bookingForm.elements["venue"].value,
        budget: bookingForm.elements["budget"].value,
        details: bookingForm.elements["details"].value

    };

    let bookings = getData("bookings");

    bookings.push(booking);

    saveData("bookings", bookings);

    showMessage(
        bookingForm,
        "Thank you, " + booking.name +
        "! Your event booking request has been received successfully."
    );

    bookingForm.reset();

});


// 6. CUSTOMER SIGNUP FORM

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let name = signupForm.elements["signupName"].value.trim();
    let email = signupForm.elements["signupEmail"].value.trim().toLowerCase();
    let phone = signupForm.elements["signupPhone"].value.trim();
    let password = signupForm.elements["signupPassword"].value;

    let users = getData("users");

    let existingUser = users.find(function(user) {

        return user.email === email;

    });

    if (existingUser) {

        showMessage(signupForm, "This email is already registered. Please login.");

    } else {

        let user = {

            name: name,
            email: email,
            phone: phone,
            password: password

        };

        users.push(user);

        saveData("users", users);

        showMessage(
            signupForm,
            "Welcome to Grandevents, " + name +
            "! Your account has been created successfully."
        );

        signupForm.reset();

    }

});


// 7. CUSTOMER LOGIN FORM

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let email = loginForm.elements["loginEmail"].value.trim().toLowerCase();
    let password = loginForm.elements["loginPassword"].value;

    let users = getData("users");

    let user = users.find(function(item) {

        return item.email === email && item.password === password;

    });

    if (user) {

        showMessage(
            loginForm,
            "Welcome back, " + user.name + "! Happy to see you again."
        );

        loginForm.reset();

    } else {

        showMessage(
            loginForm,
            "Invalid email or password. Please try again."
        );

    }

});


// 8. CONTACT FORM

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    let contact = {

        name: contactForm.elements["contactName"].value,
        email: contactForm.elements["contactEmail"].value,
        message: contactForm.elements["message"].value

    };

    let messages = getData("messages");

    messages.push(contact);

    saveData("messages", messages);

    showMessage(
        contactForm,
        "Thank you, " + contact.name +
        "! Your message has been received. We will contact you soon."
    );

    contactForm.reset();

});


// ========================================
// END OF GRANDEVENTS JAVASCRIPT
// ========================================