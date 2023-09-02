export const operation = (n1, n2) => {
    if(isNaN(parseFloat(n1 && n2))) return "Must be numbers";

    const mathOp = {
        "add": n1 + n2,
        "substract": n1 - n2,
        "multiply": n1 * n2,
        "divide": n1 / n2
    }

    const result = (n1 > n2) 
        ? `The sum is ${mathOp.add} and the substract is ${mathOp.substract}`
        : `The product is ${mathOp.multiply} and the quotient is ${mathOp.divide}`
    
    return result;
}