//1
let week = {
    fisrt: "Monday",
    second: "Tuesday",
    third: "Wednesday",
    fourth: "Thursday",
    fifth: "Friday",
    sixth: "Saturday",
    seventh: "Sunday"
}
console.log(week.sixth)

//2
let obj = 'key value'
let arr = c =>{
    return c.split("")
}
console.log(arr(obj)) //???:(

//3
let obj1 = {name: 'masha',age: "5"}
let isPlainObject = d =>{
 return (typeof d === 'object' && d !== null && d!== Array)
}
console.log(isPlainObject(obj1))

//4
let obj2 = {
    quantity: 35,
    quality: 'good'
}
let emptyObj = e =>{
    return delete e.quantity && delete e.quality
}
emptyObj(obj2)
console.log(obj2)

//5
let firstObj = {name: 'masha',age: "5"}
let secondObj = {name: 'masha',age: "5"}
let isEqual = d =>{
    return JSON.stringify(firstObj)===JSON.stringify(secondObj)
}
console.log(isEqual(firstObj,secondObj))

//6
//let firstObject = {name: 'masha', number: "5", hair: "blond"}
//let secondObject = {name: 'kate',age: "5", body:"slim"}
//let findOut = z =>{
//}