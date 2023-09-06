import { perimeter, area } from "../functions/exercise8";

describe("test perimeter", () => {
    test("IsNaN message", () => {
        const result = perimeter("five")
        expect(result).toBe("Side must be a number")
    }),
    test("Nice result", () => {
        const result = perimeter(5)
        expect(result).toBe(20)
    })
})

describe("test area", () => {
    test("IsNaN message", () => {
        const result = area("five", "ten")
        expect(result).toBe("Base and height must be numbers")
    }),
    test("nice result", () => {
        const result = area(5, 10)
        expect(result).toBe(25)
    })
})