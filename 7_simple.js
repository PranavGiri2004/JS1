let arr = [];
let maxSize = 0;
let initialized = false;

function showMessage(id, message) {
    document.getElementById(id).textContent = message;
}

function updateCurrentArray() {
    showMessage("currentArray", JSON.stringify(arr));
}

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
    updateCurrentArray();
}

function addElement() {
    if (!initialized) {
        showMessage("createOutput", "Initialize the array first.");
        return;
    }

    if (arr.length >= maxSize) {
        showMessage("createOutput", "Array Overflow! Maximum size reached.");
        return;
    }

    let input = document.getElementById("element").value.trim();

    if (input === "") {
        showMessage("createOutput", "Please enter an element.");
        return;
    }

    let value;

    if (input.startsWith("[") && input.endsWith("]")) {
        try {
            value = JSON.parse(input);

            if (!Array.isArray(value)) {
                throw new Error();
            }
        } catch (error) {
            showMessage("createOutput", "Invalid array format. Example: [1,2,3]");
            return;
        }
    } else if (!isNaN(input)) {
        value = Number(input);
    } else {
        value = input;
    }

    arr.push(value);
    document.getElementById("element").value = "";

    showMessage("createOutput", "Element added successfully.");
    updateCurrentArray();
}

function checkArray() {
    if (!initialized) {
        showMessage("indexOutput", "Initialize the array first.");
        return;
    }

    if (arr.length === 0) {
        showMessage("indexOutput", "Array is Empty.");
        return;
    }

    let indexInput = document.getElementById("indexInput").value.trim();

    if (!/^\d+$/.test(indexInput)) {
        showMessage("indexOutput", "Please enter a valid index.");
        return;
    }

    let index = Number(indexInput);

    if (index >= arr.length) {
        showMessage("indexOutput", "Invalid Index.");
        return;
    }

    let object = arr[index];

    if (Array.isArray(object)) {
        showMessage(
            "indexOutput",
            "The object at index " + index + " is an Array. Value: " + JSON.stringify(object)
        );
    } else {
        showMessage(
            "indexOutput",
            "The object at index " + index + " is NOT an Array. Value: " + object
        );
    }
}
