export const bill = (name, price, amount) => {
    const total = parseFloat(price * amount);

    if(name === undefined || price === undefined || amount === undefined) return "You must provide all information";
    if(isNaN(total)) return "price and amount must be numbers"
    if(amount <= 0) return "Didn't take any product"

    const result = `Hi ${name}. You must pay ${total}`;
    return result;
}