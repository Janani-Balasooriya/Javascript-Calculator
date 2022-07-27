
var smallDisplayValue = "";
var displayValue;

function updateAllDisplays(dis, small_dis) {
    small_dis = small_dis.replace("/", "÷");
    small_dis = small_dis.replace("*", "×");
    document.getElementById("display_bar_p").innerHTML = dis;
    document.getElementById("small_display_bar_p").innerHTML = small_dis;
}

function updateDisplay(inputNumber) {

    displayValue = document.getElementById("display_bar_p").innerHTML;

    //creating numbers
    if ((displayValue == 0) && (!displayValue.includes("."))) {
        if (inputNumber == '.') {
            displayValue = displayValue + inputNumber;
        } else if (displayValue == '0.') {
            displayValue = displayValue + inputNumber;
        } else {
            displayValue = inputNumber;
        }
    } else if (inputNumber == ".") {
        if (!(displayValue.includes('.'))) {
            displayValue = displayValue + "" + inputNumber;
        }
    } else {
        displayValue = displayValue + "" + inputNumber;
    }
    updateAllDisplays(displayValue, smallDisplayValue);

    //checking last character of small display and reseting the display
    if (smallDisplayValue != "") {
        var last_character = smallDisplayValue.slice(smallDisplayValue.length - 1);
        if (last_character == "=") {
            smallDisplayValue = "";
            displayValue = inputNumber;
        } else if (isNaN(last_character)) {
            displayValue = inputNumber;
            displayValue = inputNumber;
        }
    }
    updateAllDisplays(displayValue, smallDisplayValue);
}

function doOperations(sign1) {
    var last_character = smallDisplayValue.slice(smallDisplayValue.length - 1);

    if (last_character == "=") {
        smallDisplayValue = displayValue + sign1;
        updateAllDisplays(displayValue, smallDisplayValue);
    } else if (smallDisplayValue == "") {
        smallDisplayValue = displayValue + sign1;
    } else if (isNaN(smallDisplayValue)) {
        doCalculation(sign1);
    }
    updateAllDisplays(displayValue, smallDisplayValue);
}

function clearDisplay() {
    displayValue = 0;
    smallDisplayValue = "";
    updateAllDisplays(displayValue, smallDisplayValue);
}

function doCalculation(sign2) {
    var outpute_value = eval(smallDisplayValue + displayValue);

    if (sign2 == "=") {
        smallDisplayValue += displayValue + "=";
        displayValue = outpute_value;
    } else if (sign2 != "=") {
        smallDisplayValue = outpute_value + sign2;
        displayValue = outpute_value;
    }
    updateAllDisplays(displayValue, smallDisplayValue);
}