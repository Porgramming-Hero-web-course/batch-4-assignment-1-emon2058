{
//     Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

// // Sample Input 1:
// const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });

// // Sample Output 1:
// 78.54;

// // Sample Input 2:
// const rectangleArea = calculateShapeArea({
//   shape: "rectangle",
//   width: 4,
//   height: 6,
// });

// // Sample Output 2:
// 24;

type Circle = {
    shape:string;
    radius:number;
};

type Rectangle = {
    shape:string;
    width:number;
    height:number;
};

type CircleOrRectangle = Circle|Rectangle; // union type

function calculateShapeArea(area:CircleOrRectangle):number{
    let calcArea:number;
    if('radius' in area){  //type guard
        calcArea = Math.PI * area.radius * area.radius;
    }
    else{
        calcArea = area.width * area.height;
    }
    return calcArea;
}

const circleArea = calculateShapeArea({
    shape:"circle",
    radius:5,
})
console.log(parseFloat(circleArea.toFixed(2)));

const rectangleArea = calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
console.log(rectangleArea);
}