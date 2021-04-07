//1 
let arr1 = ['a','b','c']
let arr2 = [1,2,3]
arr = arr1.concat(arr2)
console.log(arr)

//2 
let arr3 = ['a','b','c']
arr3.push(1,2,3)
console.log (arr3)

//3
 rev = arr2.reverse()
console.log (rev)

//4
let arr4 = [1,2,3,4,5]
let newarr4 = arr4.slice(0,3)
console.log(newarr4)

//5
let newarr5 = arr4.slice (3)
console.log(newarr5)

//6
let obj = {
    js: 'test',
    jq: 'hello',
    css: 'world'
}
    console.log(Object.keys(obj));

//7
let array = [1,2,3,4,5]
let a = []
for (i=0; i<array.length; i++){
    a[i] = array [(array.length - 1)-i]
}
console.log(a)

//8
let arr6 = [[1,2,3],[4,5],[6]]
let newarr6 = arr6.flat ()
let result = newarr6.reduce((sum,current) => sum+current)
console.log(result)

//9
let arr7 = [[1,2],[3,4],[5,6],[7,8]]
let newarr7 = arr7.flat()
let result2 = newarr7.reduce((sum,current)=> sum+current)
console.log(result2)

//10
let arr9 = [1,2,3]
let arr10 = [1,2,3]
let new91 = arr9.join()==arr10.join()
console.log(new91)

//11
let arr111 = [2,4,6]
let newarr11 = arr111.map(function (elem){
    return elem*elem;
})
console.log(newarr11)
//12
let arr12 = [1,-2,3,-4]
let newarr122 = arr12.filter(function(number){
    return number < 0
});
console.log(newarr122)
//13
let arr13 = [4,59,6,49,2,6,89,4]
let newarr13 = arr13.reduce ((sum,current) =>sum+current)
console.log(newarr13)