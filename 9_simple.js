// Show an error message
function showError(id, message) {
    document.getElementById(id + "Error").innerText = message;
}

// Clear one error message
function clearError(id) {
    document.getElementById(id + "Error").innerText = "";
}

// Clear all error messages
function clearAllErrors() {
    clearError("name");
    clearError("address");
    clearError("city");
    clearError("state");
    clearError("gender");
    clearError("mobile");
    clearError("email");
}

// Check name: only letters and spaces, minimum 3 characters
function checkName(name) {
    if (name === "") {
        return "Name cannot be left blank.";
    }

    if (name.length < 3) {
        return "Name must have at least 3 characters.";
    }

    for (let i = 0; i < name.length; i++) {
        let ch = name[i];
        let isLetter = (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");

        if (isLetter === false && ch !== " ") {
            return "Name can contain only letters and spaces.";
        }
    }

    return "";
}

// Check mobile: exactly 10 digits and starts from 6 to 9
function checkMobile(mobile) {
    if (mobile === "") {
        return "Mobile number cannot be left blank.";
    }

    if (mobile.length !== 10) {
        return "Mobile number must be exactly 10 digits.";
    }

    for (let i = 0; i < mobile.length; i++) {
        if (mobile[i] < "0" || mobile[i] > "9") {
            return "Mobile number can contain only digits.";
        }
    }

    if (mobile[0] < "6") {
        return "Mobile number must start with 6, 7, 8 or 9.";
    }

    return "";
}

// Check email address
function checkEmail(email) {
    if (email === "") {
        return "Email id cannot be left blank.";
    }

    // \\x25 represents the percent character allowed in an email address.
    let pattern = /^[a-zA-Z0-9._\x25+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (pattern.test(email) === false) {
        return "Please enter a valid email id, for example name@example.com";
    }

    return "";
}

// Check city: only letters and spaces
function checkCity(city) {
    if (city === "") {
        return "City cannot be left blank.";
    }

    for (let i = 0; i < city.length; i++) {
        let ch = city[i];
        let isLetter = (ch >= "a" && ch <= "z") || (ch >= "A" && ch <= "Z");

        if (isLetter === false && ch !== " ") {
            return "City name can contain only letters and spaces.";
        }
    }

    return "";
}

// Get the selected gender
function getGender() {
    let buttons = document.getElementsByName("gender");

    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].checked === true) {
            return buttons[i].value;
        }
    }

    return "";
}

// Validate all form fields
function validateForm() {
    clearAllErrors();

    let name = document.getElementById("name").value.trim();
    let address = document.getElementById("address").value.trim();
    let city = document.getElementById("city").value.trim();
    let state = document.getElementById("state").value;
    let gender = getGender();
    let mobile = document.getElementById("mobile").value.trim();
    let email = document.getElementById("email").value.trim();

    let valid = true;
    let firstWrongField = null;

    let error = checkName(name);
    if (error !== "") {
        showError("name", error);
        valid = false;
        firstWrongField = "name";
    }

    if (address === "") {
        showError("address", "Address cannot be left blank.");
        valid = false;
        if (firstWrongField === null) {
            firstWrongField = "address";
        }
    }

    error = checkCity(city);
    if (error !== "") {
        showError("city", error);
        valid = false;
        if (firstWrongField === null) {
            firstWrongField = "city";
        }
    }

    if (state === "") {
        showError("state", "Please select your state.");
        valid = false;
        if (firstWrongField === null) {
            firstWrongField = "state";
        }
    }

    if (gender === "") {
        showError("gender", "Please select your gender.");
        valid = false;
    }

    error = checkMobile(mobile);
    if (error !== "") {
        showError("mobile", error);
        valid = false;
        if (firstWrongField === null) {
            firstWrongField = "mobile";
        }
    }

    error = checkEmail(email);
    if (error !== "") {
        showError("email", error);
        valid = false;
        if (firstWrongField === null) {
            firstWrongField = "email";
        }
    }

    if (valid === false) {
        alert("Some entries are wrong or missing. Please correct the fields.");

        if (firstWrongField !== null) {
            document.getElementById(firstWrongField).focus();
        }

        return false;
    }

    showWelcome(name, address, city, state, gender, mobile, email);
    return false;
}

// Display the submitted information
function showWelcome(name, address, city, state, gender, mobile, email) {
    let details = "<table>";
    details += "<tr><td>Name</td><td>" + name + "</td></tr>";
    details += "<tr><td>Address</td><td>" + address + "</td></tr>";
    details += "<tr><td>City</td><td>" + city + "</td></tr>";
    details += "<tr><td>State</td><td>" + state + "</td></tr>";
    details += "<tr><td>Gender</td><td>" + gender + "</td></tr>";
    details += "<tr><td>Mobile Number</td><td>" + mobile + "</td></tr>";
    details += "<tr><td>Email Id</td><td>" + email + "</td></tr>";
    details += "</table>";

    document.getElementById("submittedData").innerHTML = details;
    document.getElementById("formCard").hidden = true;
    document.getElementById("welcomeCard").hidden = false;
}

// Return to the form
function backToForm() {
    document.getElementById("welcomeCard").hidden = true;
    document.getElementById("formCard").hidden = false;
    resetForm();
}

// Reset all form fields
function resetForm() {
    document.getElementById("studentForm").reset();
    clearAllErrors();
}

// Fill some fields using prompt boxes
function fillUsingPrompt() {
    let name = prompt("Enter your full name:", "");
    if (name === null) return;

    let address = prompt("Enter your address:", "");
    if (address === null) return;

    let city = prompt("Enter your city:", "");
    if (city === null) return;

    let mobile = prompt("Enter your 10 digit mobile number:", "");
    if (mobile === null) return;

    let email = prompt("Enter your email id:", "");
    if (email === null) return;

    document.getElementById("name").value = name;
    document.getElementById("address").value = address;
    document.getElementById("city").value = city;
    document.getElementById("mobile").value = mobile;
    document.getElementById("email").value = email;

    alert("The values are filled in the form. Select the state and gender, then press Submit.");
}
