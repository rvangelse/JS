array1 = [10, 1, "texto 1"];
array2 = [5, 2, "texto 2", 3];

console.log(`¿El número 10 es mayor que el número 5? ${array1[0] > array2[0]}`);
console.log(`¿El número 10 es menor que el número 5? ${array1[0] < array2[0]}`);
console.log(`¿El número 1 es igual al número2? ${array1[1] == array2[1]}`);
console.log(`¿El texto 1 es igual al texto 2? ${array1[2] == array2[2]}`);
console.log(`¿Los objetos son iguales? ${array1 == array2}`);
console.log(`AND lógico: ${(array1[0]>array2[0]) && (array1[0]<array2[0])}`);
console.log(`OR lógico: ${(array1[0]>array2[0]) || (array1[0]<array2[0])}`);
console.log(`La suma de 10 + 3: ${array1[0] + array2[3]}`);
console.log(`La resta de 10 - 3: ${array1[0] - array2[3]}`);
console.log(`La multiplicación de 10 * 3: ${array1[0] * array2[3]}`);
console.log(`La división de 10 / 3: ${array1[0] / array2[3]}`);
console.log(`10 módulo 3: ${array1[0] % array2[3]}`);
