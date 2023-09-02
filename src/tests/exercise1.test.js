import { qualifications } from "../functions/exercise1.js";

describe("test1", () => {
    test("message must be a string", () => {
        const result = qualifications()
        expect(typeof result).toBe("string")
    });
    test("Becado msg", () => {
        const result = qualifications(5, 4, 8)
        expect(result).toBe("Becado")
    });
    test("Estudie msg", () => {
        const result = qualifications(0, 1, 3)
        expect(result).toBe("Estudie")
    });
})