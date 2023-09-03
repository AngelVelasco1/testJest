import { bill } from "../functions/exercise7";

describe("test7", () => {
    test("Params must be defined", () => {
        const result = bill("Mario", 5);
        expect(result).toBe("You must provide all information")
    });
    test("Price an amount must be numbers", () => {
        const result = bill("Mario", 5, "one");
        expect(result).toBe("price and amount must be numbers")
    });
    test("Amount is equal or minor to 0", () => {
        const result = bill("Mario", 5, 0);
        expect(result).toBe("Didn't take any product")
    });
    test("Succesfully result", () => {
        const result = bill("Mario", 5, 10);
        expect(result).toBe(`Hi Mario. You must pay 50`)
    });

})