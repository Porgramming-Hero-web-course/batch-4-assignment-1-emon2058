// Write a TypeScript function sumArray that takes an array of numbers and returns the sum of all elements in the array.

// // Sample Input:
// sumArray([1, 2, 3, 4, 5]);

// // Sample Output:
// 15;
function sumArray(nums: number[]) : number{
    let sum=0;
    nums.map((num : number) => sum = num+sum)
    return sum;
}
let total = sumArray([1,2,3,4,5]);
console.log(total);