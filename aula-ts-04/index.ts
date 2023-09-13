function multiply(num1: number, num2: number): number {
    return num1 * num2;
}

function sum(num1: number, num2: number): number {
    return num1 * num2;
}

function isEven(num: number): boolean {
    return num % 2 === 0;
}

function showResult(result): void {
    if (!isNaN(result)) {
        if (isEven(result)) {
            console.log(`The result is ${result} and it's even!`);
        } else {
            console.log(`The result is ${result} and it's odd!`);
        }
    }else {
        console.log("Input is not a valid number");
    }
}

(() => {
    const input1: string | null = prompt("First Number");
    const input2: string | null = prompt("Second Number");
    if (input1 !== null && input2 !== null) {
        const num1 = parseInt(input1);
        const num2 = parseInt(input2);

        if (!isNaN(num1) && !isNaN(num2)) {
            let result = sum(num1, num2);
            result += multiply(1, 2);
            showResult(result);
        } else {
            console.log("One or both inputs are not valid numbers");
        }
    }
})();