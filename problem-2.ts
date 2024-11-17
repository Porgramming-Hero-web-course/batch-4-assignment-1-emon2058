// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.
// // Sample Input:
// removeDuplicates([1, 2, 2, 3, 4, 4, 5])

// // Sample Output:
// [1, 2, 3, 4, 5]

function removeDuplicates(nums:number[]):number[]{
    let distinct:number[]=[];
    let comp = nums[0];
    let p:boolean = true;
    for(let i:number = 0; i<nums.length; i++){
        for(let j:number=i; j<=nums.length; j++){
            if(i===j){
                continue;
            }
            else if(nums[i] !== nums[j]){
                comp=nums[i];
                p=true;
            }
            else{
                p=false;
                break;
            }
        }
        if(p){
        distinct.push(comp);}
    }
    return distinct;
}
let remove=removeDuplicates([1,2,2,3,4,4,5]);
console.log(remove);
