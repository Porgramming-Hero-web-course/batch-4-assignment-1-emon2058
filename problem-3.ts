// Create a TypeScript function called countWordOccurrences that accepts a sentence (string) and a word (string). The function should return the number of times the word appears in the sentence, ignoring case. Use the simple sentence without punctuation as input.

// Example:

// Input: "I love typescript", "typescript"
// Output: 1
// // Sample Input:
// countWordOccurrences("I love typescript", "typescript");

// // Sample Output:
// 1;
{
function wordCount(word:string,s:string):number[]{
    let c:number = 0;
    let wordArray:string[] = word.toLowerCase().split(" ");
    return wordArray.map(d=>{
        if(d===s.toLowerCase()){c=c+1;}
        return c;
    });
}

const result = wordCount("I love typescript love","Love");
const len:number = result.length;
console.log(result[len-1]);
}
