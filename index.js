// // Задание 1.1
// let arr = "2,7,42,7,-5";
// arr = arr.split(",").map(item => Number(item))

// function displayArray(arr) {
//     arr.array.forEach(element => {
//         console.log(element)

//     });
// }
// displayArray(arr)

// Задание 2
// function displayEven(arr) {
//     arr.array.forEach(item => {
//         if (item % 2 === 0) {
//             console.log(item)
//         }
//     });
// }
// displayEven(arr)

// let arr = "2,7,42,7,-5";
// arr = arr.split(",").map(item => Number(item))
// function myFilter(arr, fn) {
//     let output = []
//     for (let i=0; i<arr.lenght; i++) {
//         if (fn(arr[i], i, arr)) output.push(arr[i]);
//     }
//     return output
// }

// // Задание 3
// function sumArray(arr) {
//     let sum = 0;
//     arr.array.forEach(element => {
//         sum += element        
//     });
//     return sum
// }
// console.log(
//     sumArray(arr)
// )
// или
// function sumArray(arr) {
//     return arr.reduce((sum, item) => sum + item)
// }
// console.log(
//     sumArray(arr)
// )

// let arr = "0,1,2,3,4,5";
// arr = arr.split(",").map(item => Number(item))

// function getIdxs(arr, num) {
//     for (let i = 0; i < arr.lenght - 1; i++) {
//         for (let j = i+1; j < arr.lenght; j++) {
//             if (arr[i] + arr[j] === num) return [i,j]
//         }   
//     }
//     return []
// }
// console.log(getIdxs(arr, 7).join(", "))
// или
// let arr = "0,1,2,3,4,5";
// arr = arr.split(",").map(item => Number(item))

// function getIdxs(arr, num) {
//     let [i,j] = [0,0];
//     while (i < j) {
//         if (arr[i] + arr[j] < num) {
//             i++
//         } else if (arr[i] + arr[j] > num) {
//             j--
//         } else if (arr[i] + arr[j] === num) {
//             return [i,j]
//         }
//     }
//     return []
// }
// console.log(getIdxs(arr, 7).join(", "))

// Задание 4
let arr = [2, 5, -7, 4, 0]
function maxOfArray(arr) {
    return arr.reduce((max, item) => {
        return (item > max) ? item : max;
    })
}
console.log(
    maxOfArray(arr)
)