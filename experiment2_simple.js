// FOR LOOP
function generateForTable() {
    let num = Number(document.getElementById("forNum").value);
    let limit = Number(document.getElementById("forLimit").value);
    let error = document.getElementById("forError");
    let output = document.getElementById("forOutput");

    error.innerText = "";
    output.innerText = "";

    if (!Number.isInteger(num) || num == 0) {
        error.innerText = "Enter a positive or negative integer.";
        return;
    }

    if (!Number.isInteger(limit) || limit <= 0) {
        error.innerText = "Table limit must be a positive integer.";
        return;
    }

    let result = "";
    for (let i = 1; i <= limit; i++) {
        result = result + num + " x " + i + " = " + (num * i) + "\n";
    }

    output.innerText = result;
}


// WHILE LOOP
function generateWhileTable() {
    let num = Number(document.getElementById("whileNum").value);
    let limit = Number(document.getElementById("whileLimit").value);
    let error = document.getElementById("whileError");
    let output = document.getElementById("whileOutput");

    error.innerText = "";
    output.innerText = "";

    if (!Number.isInteger(num) || num == 0) {
        error.innerText = "Enter a positive or negative integer.";
        return;
    }

    if (!Number.isInteger(limit) || limit <= 0) {
        error.innerText = "Table limit must be a positive integer.";
        return;
    }

    let result = "";
    let i = 1;

    while (i <= limit) {
        result = result + num + " x " + i + " = " + (num * i) + "\n";
        i++;
    }

    output.innerText = result;
}


// DO WHILE LOOP
function generateDoWhileTable() {
    let num = Number(document.getElementById("doNum").value);
    let limit = Number(document.getElementById("doLimit").value);
    let error = document.getElementById("doError");
    let output = document.getElementById("doOutput");

    error.innerText = "";
    output.innerText = "";

    if (!Number.isInteger(num) || num == 0) {
        error.innerText = "Enter a positive or negative integer.";
        return;
    }

    if (!Number.isInteger(limit) || limit <= 0) {
        error.innerText = "Table limit must be a positive integer.";
        return;
    }

    let result = "";
    let i = 1;

    do {
        result = result + num + " x " + i + " = " + (num * i) + "\n";
        i++;
    } while (i <= limit);

    output.innerText = result;
}
