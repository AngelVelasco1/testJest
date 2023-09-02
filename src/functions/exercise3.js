export const ohmLaw = (r, i) => {
    if(isNaN(parseFloat(r && i))) return "Insert valid numbers";

    const voltage = (parseFloat(r) * parseFloat(i));
    return voltage
}