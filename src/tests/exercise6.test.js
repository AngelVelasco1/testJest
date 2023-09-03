import { managmentSchool } from "../functions/exercise6.js";

describe("test6", () => {
    test("If missed data", () => {
        const result = managmentSchool(["Juan"], ["M", "F"], [10, 15]);
        expect(result).toBe("You're missing data")
    });
    test("finalRating must be numbers", () => {
        const result = managmentSchool(["Juan", "Maria"], ["M", "W"], [10, "twenty"]);
        expect(result).toBe("finalRating should be a number")
    });
    test("Only 'M' or 'W' as values of genres", () => {
        const result = managmentSchool(["Juan", "Maria"], ["M", "Woman"], [10, 15]);
        expect(result).toBe("Only 'M' or 'W' as values of genres")
    });
    test("Result message", () => {
        const result = managmentSchool(["Juan", "Maria", "Angel"], ["M", "W", "M"], [10, 15, 12]);
        expect(result).toBe(`The best rating is Maria and the lowest rating is Juan. There are 2 men and 1 woman`)
    })
})