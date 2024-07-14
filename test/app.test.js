import { describe, it, expect } from 'vitest';
import { arrSum } from '../app.js';

describe("arrSum", () => {
    it("Should return the sum of the values ​​of arrays", () => {
        const arr1 = [1, 2, 3];  
        const arr2 = [4, 5, 6];
        expect(arrSum(arr1 , arr2)).toBe(21);
    });

    it("Should return the sum of the values ​​of arrays", () => {
        const arr1 = [-1, -2, -3];
        const arr2 = [-4, -5, -6];
        expect(arrSum(arr1 , arr2)).toBe(-21);
    });

    it("Should return the sum of the values ​​of arrays", () => {
        const arr1 = [0, 0, 0];
        const arr2 = [4, 5, 6];
        expect(arrSum(arr1 , arr2)).toBe(15);
    });

    it("Should return the sum of the values ​​of arrays", () => {
        const arr1 = [100, 200, 300];
        const arr2 = [400, 500, 600];
        expect(arrSum(arr1 , arr2)).toBe(2100);
    });
}

)