export const managmentSchool = (name, genre, finalRating) => {
    const size = name.length;
    if(genre.length !== size || finalRating.length !== size) return "You're missing data";

    if(!finalRating.every((value) => typeof value === "number")) return "finalRating should be a number"

    const bestRating = name[finalRating.indexOf(Math.max(...finalRating))];
    const lowestRating = name[finalRating.indexOf(Math.min(...finalRating))];
    
    let { men, woman } = genre.reduce((count, val) => {
        if(val === "M") count.men++; else if (val === "W") count.woman++;
        return count;
    }, {men: 0, woman: 0}) 

    if(genre.length !== men + woman) return "Only 'M' or 'W' as values of genres"

    const result = `The best rating is ${bestRating} and the lowest rating is ${lowestRating}. There are ${men} men and ${woman} woman`;
    return result;
}