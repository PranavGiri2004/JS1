let arr = [];
let maxSize = 0;
let initialized = false;

// Display the current array
function updateArray() {
    document.getElementById("currentArray").textContent =
        "[" + arr.join(", ") + "]";
}

// Create a new array
function initializeArray() {
    let size = document.getElementById("size").value.trim();

    if (!/^[1-9]\d*$/.test(size)) {
        showMessage("createOutput", "Please enter a positive integer for the array size.");
        return;
    }

    maxSize = Number(size);
    arr = [];
    initialized = true;

    document.getElementById("element").value = "";
    showMessage("createOutput", "Array initialized. Add elements one by one.");
    updateArray();
}

// Add an element
function addElement() {
    if (!initialized) {
        showMessage("createOutput", "Initialize the array first.");
        return;
    }

    let value = document.getElementById("element").value.trim();

    if (value === "") {
        showMessage("createOutput", "Please enter an element.");
        return;
    }

    if (arr.length >= maxSize) {
        showMessage("createOutput", "Array Overflow! Maximum size reached.");
        return;
    }

    arr.push(value);
    document.getElementById("element").value = "";

    showMessage("createOutput", "Element added successfully.");
    updateArray();
}

// Remove an element by value or index
function removeElement() {
    if (arr.length === 0) {
        showMessage("removeOutput", "Array is Empty.");
        return;
    }

    let type = document.querySelector('input[name="removeType"]:checked').value;
    let input = document.getElementById("removeInput").value.trim();
    let index;

    if (type === "value") {
        index = arr.indexOf(input);

        if (index === -1) {
            showMessage("removeOutput", "Element is not present within Array.");
            return;
        }
    } else {
        if (!/^\d+$/.test(input)) {
            showMessage("removeOutput", "Invalid Index.");
            return;
        }

        index = Number(input);

        if (index >= arr.length) {
            showMessage("removeOutput", "Invalid Index.");
            return;
        }
    }

    let removedElement = arr[index];
    arr.splice(index, 1);

    showMessage("removeOutput",
        "Element " + removedElement + " removed from index " + index + ".");

    document.getElementById("removeInput").value = "";
    updateArray();
}

// Search for an element by value or index
function searchElement() {
    if (arr.length === 0) {
        showMessage("searchOutput", "Array is Empty.");
        return;
    }

    let type = document.querySelector('input[name="searchType"]:checked').value;
    let input = document.getElementById("searchValue").value.trim();
    let index;

    if (type === "value") {
        index = arr.indexOf(input);

        if (index === -1) {
            showMessage("searchOutput", "Element Not Found.");
            return;
        }

        showMessage("searchOutput", "First occurrence found at index " + index + ".");
    } else {
        if (!/^\d+$/.test(input)) {
            showMessage("searchOutput", "Invalid Index.");
            return;
        }

        index = Number(input);

        if (index >= arr.length) {
            showMessage("searchOutput", "Invalid Index.");
            return;
        }

        showMessage("searchOutput",
            "Element " + arr[index] + " found at index " + index + ".");
    }
}

// Empty the array
function flushArray() {
    arr = [];
    maxSize = 0;
    initialized = false;

    document.getElementById("element").value = "";
    document.getElementById("size").value = "";
    document.getElementById("removeInput").value = "";
    document.getElementById("searchValue").value = "";

    showMessage("createOutput", "");
    showMessage("removeOutput", "");
    showMessage("searchOutput", "");
    showMessage("flushOutput", "Array has been emptied successfully.");

    updateArray();
}

// Show a message on the page
function showMessage(id, message) {
    document.getElementById(id).textContent = message;
}
