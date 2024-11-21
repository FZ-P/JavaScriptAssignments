document.getElementById("calculateButton").addEventListener("click", () => {
    const calculation = document.getElementById("calculation").value;
    const operators = ["+", "-", "*", "/"];
    let result;

    operators.forEach(operator => {
        if (calculation.includes(operator)) {
            const [num1, num2] = calculation.split(operator).map(Number);
            switch (operator) {
                case "+":
                    result = num1 + num2;
                    break;
                case "-":
                    result = num1 - num2;
                    break;
                case "*":
                    result = num1 * num2;
                    break;
                case "/":
                    result = num1 / num2;
                    break;
            }
        }
    });

    document.getElementById("result").textContent = `Result: ${result || "Invalid input"}`;
});
