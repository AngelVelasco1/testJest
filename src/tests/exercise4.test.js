import { olderPerson } from "../functions/exercise4";

describe("test4", () => {
    test("People required", () => {
        const result = olderPerson(["Juan", "Pedro"], [15, 20]);
        expect(result).toBe("Three people are required")
    })
    test("Ages must be a number", () => {
        const result = olderPerson(["Juan", "Pedro", "Maria"], [15, 20, "forty"]);
        expect(result).toBe("Ages must be a int number")
    })
    test("Older person", () => {
        const result = olderPerson(["Juan", "Pedro", "Maria"], [15, 20, 25]);
        expect(result).toBe(`The older person is Maria and have ${25} years`)
    })
})
