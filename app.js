export function arrSum(arr1, arr2) {
    // Inicializar las sumas a 0
    var sumArr1 = 0;
    var sumArr2 = 0;

    // Sumar todos los elementos de la primera matriz
    for (var i = 0; i < arr1.length; i++) {
        sumArr1 += arr1[i];
    }

    // Sumar todos los elementos de la segunda matriz
    for (var j = 0; j < arr2.length; j++) {
        sumArr2 += arr2[j];
    }

    // Devolver la suma de ambas sumas
    return sumArr1 + sumArr2;
}


console.log(arrSum([1, 2, 3], [4, 5, 6]));       // Output: 21
console.log(arrSum([-1, -2, -3], [-4, -5, -6])); // Output: -21
console.log(arrSum([0, 0, 0], [4, 5, 6]));       // Output: 15
console.log(arrSum([100, 200, 300], [400, 500, 600])); // Output: 2100
