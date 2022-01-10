let prmt = prompt("1'den 10'a kadar bir sayı girin 1 ve 10 dahil")

const shapes = {
    1: "circle",
    2: "semi-circle",
    3: "triangle",
    4: "square",
    5: "pentagon",
    6: "hexagon",
    8: "octagon",
    9: "nonagon",
    10: "decagon",

}

shapeFunc = n => shapes[`${n}`];

console.log(shapeFunc(1))
console.log(shapeFunc(2))
console.log(shapeFunc(3))
console.log(shapeFunc(4))
console.log(shapeFunc(5))
console.log(shapeFunc(6))
console.log(shapeFunc(7))
console.log(shapeFunc(8))
console.log(shapeFunc(9))
console.log(shapeFunc(10))
// console.log(shape(prmt))

