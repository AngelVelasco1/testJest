import { olimpicGames } from "../functions/exercise9";

describe("test9", () => {
    test("Inssuficient data", () => {
        const result = olimpicGames("Mario", [5, 10]);
        expect(result).toBe("You must provide all information")
    });
    test("Scores must be numbers", () => {
        const result = olimpicGames(["Juan", "Maria"],  [5, "ten"]);
        expect(result).toBe("Scores must be a number")
    });
    test("Max score must be greather than 0", () => {
        const result = olimpicGames(["Juan", "Maria"],  [0, 0]);
        expect(result).toBe("Score isn't valid")
    });
    test("Scores must be numbers", () => {
        const result = olimpicGames(["Juan", "Maria"],  [0, 0]);
        expect(result).toBe("Score isn't valid")
    });
    test("Broker of record", () => {
        const result = olimpicGames(["Juan", "Maria"],  [0, 16]);
        expect(result).toBe(`The winner is Maria with 16 points. And broke the world record with a reward of 1000$`)
    });
    test("Normal winner", () => {
        const result = olimpicGames(["Juan", "Maria"],  [8, 14]);
        expect(result).toBe(`The winner is Maria with 14 points`)
    });
})