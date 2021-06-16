function calculation(value1, value2, op) {
    return value1 + value2;
}

const input1 = document.querySelector("#input1");
const input2 = document.querySelector("#input2");
const calculateButton = document.querySelector("#calculateButton");
const inputResult = document.querySelector("#inputResult");

calculateButton.addEventListener("click", function() {
    const value1 = Number(input1.value);
    const value2 = Number(input2.value);

    inputResult.value = calculation(value1, value2, "sum");
});