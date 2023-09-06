export const olimpicGames = (names, scores) => {
    if(names.length === 0 || scores.length !== names.length) return "You must provide all information";
    const maxScore = Math.max(...scores);
    const indexMaxScore = scores.findIndex(score => score === maxScore);

    if(!scores.every((value) => typeof value === "number")) return "Scores must be a number";
    if (maxScore <= 0 ) return "Score isn't valid"

    if(maxScore >= 15.5) return `The winner is ${names[indexMaxScore]} with ${maxScore} points. And broke the world record with a reward of 1000$`

    const mainResult = `The winner is ${names[indexMaxScore]} with ${maxScore} points`;
    return mainResult;

}