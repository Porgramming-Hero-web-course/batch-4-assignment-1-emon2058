// Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.

// // Sample Input:
// const person = { name: "Alice", age: 25, email: "alice@example.com" };
// console.log(validateKeys(person, ["name", "age"]));

// // Sample Output:
// true;
{
const validateKeys=<T, U extends keyof T> (obj:T, keys:U[]):boolean=>{
    let k:boolean=false;
    for(let i:number=0;i<keys.length;i++){
        if(keys[i] in obj)
            k = true;
        else{
            k = false;
            break;
        }

    }
return k;
};
const person = { name: "Alice", age: 25,email:'hghgh'};
console.log(validateKeys(person, ["name","age"]));

}