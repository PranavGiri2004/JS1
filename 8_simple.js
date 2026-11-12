let textBoxFocused = false;

// Mouse over the text
function hoverTextOver() {
    if (!textBoxFocused) {
        document.body.style.backgroundColor = "lightblue";
    }
}

// Mouse leaves the text
function hoverTextOut() {
    if (!textBoxFocused) {
        document.body.style.backgroundColor = "white";
    }
}

// Text box gets focus
function fieldFocus() {
    textBoxFocused = true;
    document.body.style.backgroundColor = "lightgreen";
}

// Text box loses focus
function fieldBlur() {
    textBoxFocused = false;
    document.body.style.backgroundColor = "white";
}

// Click anywhere outside the text and input box
function backgroundClick(event) {
    if (event.target.id !== "hoverText" && event.target.id !== "focusBox") {
        document.getElementById("focusBox").blur();
        textBoxFocused = false;
        document.body.style.backgroundColor = "white";
    }
}
