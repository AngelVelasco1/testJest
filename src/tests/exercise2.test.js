import { evenOrOdd } from "../functions/exercise2";

describe("test2", () => {
    test("Even number result", () => {
        const result = evenOrOdd(4);
        expect(result).toBe("Even number")
    });
    test("Odd number result", () => {
        const result = evenOrOdd(5);
        expect(result).toBe("Odd number")
    });
    test("Is NaN msg", () => {
        const result = evenOrOdd("angel")
        expect(result).toBe("Isn't a valid number")
    });
    test("Is NaN msg", () => {
        const result = evenOrOdd("one")
        expect(result).toBe("Isn't a valid number")
    });
})