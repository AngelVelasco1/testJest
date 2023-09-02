import { ohmLaw } from "../functions/exercise3";

describe("test3", () => {
    test("Correct voltage", () => {
        const result = ohmLaw(5, 10);
        expect(result).toBe(50)
    });
    test("Is NaN message", () => {
        const result = ohmLaw(5, "ten");
        expect(result).toBe("Insert valid numbers")
    });
    test("Float numbers", () => {
        const result = ohmLaw(5, 10.5);
        expect(result).toBe(52.5)
    });
})