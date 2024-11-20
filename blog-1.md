Union is a type in typescript. If we have two type, type a and type b. Union's symbol is |, it can be placed between two or more type or values like a|b, means we can choose a or b or both types or values. Here we can see example of union.
 type a = {
    name:string;
    age:number
    }
type b = {
    profession:string;
    married:boolean
    }

const unionType:a|b = {name:'rahim', age:16, married: false}
unionType returns {name:'rahim', age:16, married: false} without any error because of using union type. We can only set the value of type a or type b, or both type a and b, or type a or some property of type b vice versa. 

Intersection is a type in typescript. It's symbol is &, it can be uses two or more type or values like a&b. It means we can get all keys of a and b. Here we can see example of intersection.
 type a = {
    name:string;
    age:number
    }
type b = {
    profession:string;
    married:boolean
    }

const intersectionType:a&b = {name:'karim', age:33, profession:'manager', married:true}
intersectionType returns {name:'karim', age:33, profession:'manager', married:true}. If we miss any properties of a or b like name or married then it gives us error. So we should use all properties in intersection type.