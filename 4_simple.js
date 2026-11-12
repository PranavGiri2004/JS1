function compareStrings() {
    let str1 = document.getElementById("str1").value;
    let str2 = document.getElementById("str2").value;

    // 1. Compare length
    let lengthResult;
    if (str1.length > str2.length) {
        lengthResult = str1 + " is Longer";
    } else if (str1.length < str2.length) {
        lengthResult = str2 + " is Longer";
    } else {
        lengthResult = "Both Strings have Equal Length";
    }

    // 2. Loose equality
    let looseEquality;
    if (str1 == str2) {
        looseEquality = "Equal (== compares only values)";
    } else {
        looseEquality = "Not Equal";
    }

    // 3. Strict equality
    let strictEquality;
    if (str1 === str2) {
        strictEquality = "Strictly Equal (Value & Type)";
    } else {
        strictEquality = "Not Strictly Equal";
    }

    // 4. localeCompare()
    let compare = str1.localeCompare(str2);
    let locale;
    if (compare == 0) {
        locale = "Both Strings are Equal";
    } else if (compare < 0) {
        locale = str1 + " comes Before " + str2;
    } else {
        locale = str1 + " comes After " + str2;
    }

    // 5. Compare without case sensitivity
    let developerLogic;
    if (str1.toLowerCase() === str2.toLowerCase()) {
        developerLogic = "Same Word (Case Ignored)";
    } else {
        developerLogic = "Different Words";
    }

    // Display all results
    let output =
        "<tr><td>1. Length Comparison</td><td>" + lengthResult + "</td></tr>" +
        "<tr><td>2. Loose Equality (==)</td><td>" + looseEquality + "</td></tr>" +
        "<tr><td>3. Strict Equality (===)</td><td>" + strictEquality + "</td></tr>" +
        "<tr><td>4. localeCompare()</td><td>" + locale + "</td></tr>" +
        "<tr><td>5. Developer's Logic Comparison</td><td>" + developerLogic + "</td></tr>";

    document.getElementById("result").innerHTML = output;
}
