const readline = require('readline');

// Configuration for data entry in the terminal

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

// Function to check if a number is even

function ehPar(numero) {
    return numero % 2 === 0;
}

// Function to check if a number is odd

function ehImpar(numero) {
    return numero % 2 !== 0;
}

// Ask for both numbers and do the checks

rl.question("Enter the first number: ", (input1) => {
    const num1 = parseInt(input1);

    rl.question("Enter the second number: ", (input2) => {
        const num2 = parseInt(input2);

        // Boolean checks
        let firstGreater = num1 > num2;
        let firstPair = ehPar(num1);
        let secondOdd = ehImpar(num2);

        // Display the results of the checks
        console.log("Is the first number greater than the second?", firstGreater);
        console.log("Is the first number even?", firstPar);
        console.log("Is the second number odd?", secondOdd);

        // Logical operators
        console.log("Is the first number greater than the second and is it even?", firstGreater && firstPair);
        console.log("Is the first or second number even?", firstPair || ehPar(num2));

        rl.close();
    });
});