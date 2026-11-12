
// 1. Reverse String
function reverseString() {
    let str = document.getElementById("reverseInput").value;
    let result = str.split("").reverse().join("");
    document.getElementById("reverseResult").innerHTML = result;
}

// 2. Replace Character
function replaceCharacter() {
    let str = document.getElementById("replaceString").value;
    let oldChar = document.getElementById("oldChar").value;
    let newChar = document.getElementById("newChar").value;

    if (oldChar === "") {
        alert("Enter character to replace");
        return;
    }

    if (str.includes(oldChar)) {
        let result = str.split(oldChar).join(newChar);
        document.getElementById("replaceResult").innerHTML = result;
    } else {
        document.getElementById("replaceResult").innerHTML = "Character not found";
    }
}

// 3. Check Palindrome
function checkPalindrome() {
    let str = document.getElementById("palindromeInput").value;

    if (str.trim() === "") {
        document.getElementById("palindromeResult").innerHTML = "Please enter a string";
        return;
    }

    let original = str.toLowerCase();
    let reversed = original.split("").reverse().join("");

    if (original === reversed) {
        document.getElementById("palindromeResult").innerHTML = "It is a Palindrome";
    } else {
        document.getElementById("palindromeResult").innerHTML = "Not a Palindrome";
    }
}
