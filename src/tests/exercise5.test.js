import { operation } from "../functions/exercise5";

describe("test5", () => {
    test("Must be numbers", () => {
        const result = operation(5, "ten")
        expect(result).toBe("Must be numbers")
    });
    test("n1 is greather than n2", () => {
        const result = operation(5, 4)
        expect(result).toBe(`The sum is 9 and the substract is 1`)
    });
    test("n1 is less than n2", () => {
        const result = operation(4, 10)
        expect(result).toBe(`The product is 40 and the quotient is 0.4`)
    });
})