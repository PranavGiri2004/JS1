// 1. Area of Circle
function circleArea() {
    let r = Number(document.getElementById("radius").value);

    if (r <= 0) {
        document.getElementById("circleResult").innerHTML = "Enter a valid radius";
        return;
    }

    let area = Math.PI * r * r;
    document.getElementById("circleResult").innerHTML = "Area = " + area.toFixed(2);
}

// 2. Area of Triangle (Heron's Formula)
function triangleArea() {
    let a = Number(document.getElementById("side1").value);
    let b = Number(document.getElementById("side2").value);
    let c = Number(document.getElementById("side3").value);

    if (a + b <= c || a + c <= b || b + c <= a) {
        document.getElementById("triangleResult").innerHTML = "Invalid triangle sides";
        return;
    }

    let s = (a + b + c) / 2;
    let area = Math.sqrt(s * (s - a) * (s - b) * (s - c));

    document.getElementById("triangleResult").innerHTML = "Area = " + area.toFixed(2);
}

// 3. Area of Rectangle
function rectangleArea() {
    let l = Number(document.getElementById("length").value);
    let b = Number(document.getElementById("breadth").value);

    if (l <= 0 || b <= 0) {
        document.getElementById("rectangleResult").innerHTML = "Enter valid values";
        return;
    }

    let area = l * b;
    document.getElementById("rectangleResult").innerHTML = "Area = " + area.toFixed(2);
}
