let interval;

let timer = document.getElementById("timer");
let message = document.getElementById("message");

// Add 0 before single-digit numbers
function pad(num) {
    if (num < 10) {
        return "0" + num;
    }
    return num;
}

// Convert seconds, minutes, hours or days into milliseconds
function parseDuration(text) {
    text = text.trim().toLowerCase();

    let match = text.match(/^(\d+)\s*(s|m|h|d)$/);

    if (match === null) {
        return null;
    }

    let value = Number(match[1]);
    let unit = match[2];

    if (unit === "s") {
        return value * 1000;
    } else if (unit === "m") {
        return value * 60 * 1000;
    } else if (unit === "h") {
        return value * 60 * 60 * 1000;
    } else {
        return value * 24 * 60 * 60 * 1000;
    }
}

function startTimer() {
    clearInterval(interval);
    message.textContent = "";

    let dateValue = document.getElementById("futureDate").value;
    let durationValue = document.getElementById("duration").value;
    let targetTime;

    // Use the selected date if it is entered
    if (dateValue !== "") {
        targetTime = new Date(dateValue).getTime();

        if (targetTime <= Date.now()) {
            message.textContent = "Please enter future time.";
            return;
        }
    }
    // Otherwise, use the entered duration
    else if (durationValue.trim() !== "") {
        let milliseconds = parseDuration(durationValue);

        if (milliseconds === null) {
            message.textContent = "Invalid duration.";
            return;
        }

        targetTime = Date.now() + milliseconds;
    } else {
        message.textContent = "Enter a future date or duration.";
        return;
    }

    interval = setInterval(function () {
        let diff = targetTime - Date.now();

        if (diff <= 0) {
            clearInterval(interval);
            timer.textContent = "00:00:00:00:00:00";
            message.textContent = "Time's Up!";
            return;
        }

        let totalSeconds = Math.floor(diff / 1000);

        let years = Math.floor(totalSeconds / (365 * 24 * 60 * 60));
        totalSeconds = totalSeconds - (years * 365 * 24 * 60 * 60);

        let months = 0;

        let days = Math.floor(totalSeconds / (24 * 60 * 60));
        totalSeconds = totalSeconds - (days * 24 * 60 * 60);

        let hours = Math.floor(totalSeconds / 3600);
        totalSeconds = totalSeconds - (hours * 3600);

        let minutes = Math.floor(totalSeconds / 60);
        totalSeconds = totalSeconds - (minutes * 60);

        let seconds = totalSeconds;

        timer.textContent = pad(years) + ":" + pad(months) + ":" + pad(days) + ":" +
                            pad(hours) + ":" + pad(minutes) + ":" + pad(seconds);
    }, 1000);
}

function resetTimer() {
    clearInterval(interval);

    document.getElementById("futureDate").value = "";
    document.getElementById("duration").value = "";

    timer.textContent = "00:00:00:00:00:00";
    message.textContent = "";
}
