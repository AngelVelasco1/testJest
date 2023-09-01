import { exercise1 } from "./exercises";

describe("test1", () => {
    test("Must be a number", () => {
        expect(typeof exercise1(1, 1, 5)).toBe("number")
    })
})