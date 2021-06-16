function calculation(value1, value2, op) {
    if (op === "sum") {
        return value1 + value2;
    } else if (op === "sub") {
        return value1 - value2;
    } else if (op === "mult") {
        return value1 * value2;
    } else if (op === "divi") {
        return value1 / value2;
    } else {
        return NaN;
    }

    // switch(op) {
    //     case "sum":
    //         return value1 + value2;
    //     case "sub":
    //         return value1 - value2;
    //     case "mult":
    //         return value1 * value2;
    //     case "divi":
    //         return value1 / value2;
    //     default:
    //         return NaN;
    // }
}

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const calculateButton = document.querySelector("#calculateButton");
const inputResult = document.querySelector("#inputResult");
const selectOperation = document.querySelector("#selectOperation");


calculateButton.addEventListener("click", function() {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);
    const operation = selectOperation.value;

    if (isNaN(value1) || isNaN(value2)) {
        alert("That's wrong...");
        inputResult.value = "?";
        return;
    }

    if (value2 === 0 && operation === "divi") {
        alert("Yeah... that's wrong too... you cannot divide by 0!");
        return;
    }
    
    // alert(operation);
    inputResult.value = calculation(value1, value2, operation);

});