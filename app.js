export function arrSum(arr1, arr2) {

    let sumArr1 = 0;
    let sumArr2 = 0;

    for (let i = 0; i < arr1.length; i++) {
        sumArr1 += arr1[i];
    }

    for (let j = 0; j < arr2.length; j++) {
        sumArr2 += arr2[j];
    }

    return sumArr1 + sumArr2;
}



console.log(arrSum([1, 2, 3], [4, 5, 6]));       // Output: 21
console.log(arrSum([-1, -2, -3], [-4, -5, -6])); // Output: -21
console.log(arrSum([0, 0, 0], [4, 5, 6]));       // Output: 15
console.log(arrSum([100, 200, 300], [400, 500, 600])); // Output: 2100
