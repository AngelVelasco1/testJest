export const evenOrOdd = (number) => {
    if (isNaN(parseInt(number))) return "Isn't a valid number"
    const result = (number % 2 === 0) ? "Even number" : "Odd number"
    return result;
}