export const olderPerson = (names, ages) => {
    if (names.length != 3 && ages.length != 3) return "Three people are required";
    if (ages.some(age => isNaN(age))) return "Ages must be a int number"

    const olderName = names[ages.indexOf(Math.max(...ages))];
    const olderAge = Math.max(...ages);

    return `The older person is ${olderName} and have ${olderAge} years`;
}