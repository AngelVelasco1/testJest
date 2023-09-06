export const perimeter = (side) => {
    if(isNaN(side)) return "Side must be a number"
    const result = parseFloat(side * 4);
    return result
}

export const area = (base, height) => {
    if(isNaN(base || isNaN(height))) return "Base and height must be numbers"
    const result = parseFloat((base * height) / 2);
    return result
}