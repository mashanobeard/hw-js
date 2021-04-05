//hw1
// 1
let str = 'Hello'
console.log (typeof str)
let num = 123
console.log (typeof num)
let flag = true 
console.log (typeof flag)
let txt = 'true'
console.log (typeof txt )

//2
let a1 = 5+3
console.log (a1)
let a2 = 5-3
console.log (a2)
let a3 = 5*3
console.log (a3)
let a4 = 5/3
console.log (a4)

//3
let a6 = 5%3
console.log (a6)
let a7 = 3%5
console.log (a7)
let a8 = 5 + '3'
console.log (a8)
let a9 = '5'-3
console.log (a9)
let a10 = 75 +'кг'
console.log (a10)

//4
let height = 23
let width = 10 
let s = height*width
console.log (s)

//5
let heightC = 10
let dC = 4 
let v = (3.14/4)* Math.pow(dC,2) *10
console.log (v)

//6
let n = 3
let m = 4
let k = Math.sqrt (Math.pow(3,2)+Math.pow (4,2))
console.log (k)


//hw2
//1
let a = true + false
console.log (a) // при суммировании логических типов true и false преобразуются в 1 и 0: 1

let b1 = 12/'6'
console.log (b1) // строчное значение преобразуется в численное: 2

let b2 = "number" + 15 + 3
console.log (b2) // при суммировании если есть хотя бы один строчный элемент, все выражение складывается как строка: numer153

let b3 = [1]> null
console.log (b3) // логическое выражение: true

let b4 = "foo" + + "bar"
console.log (b4) // "bar" это не число: fooNaN 

let b5 = 'true' == true
console.log (b5) // операнды разных типов преобразуются оператором ==: false 

let b6 = false == 'false'
console.log (b6) // операнды разных типов преобразуются оператором ==: false 

let b7 = null == ''
console.log (b7) // null ни к чему не приводится: false

let b8 = !!"false" == !!"true"
console.log (b8) // :true

let b9 = ['x'] == 'x'
console.log (b9) // :true

let b10 = [] + null + 1 
console.log (b10) // преобразование в строку

let b11 = 0 || "0" && {}
console.log (b11) // :{}

let b12 = [1,2,3] == [1,2,3]
console.log (b12) // : false

//2
let i = 3;
while (i) {
    alert (i--);
    console.log (i);
}  //  цикл начнется в 3 и сразу выведет 2, так как в цикле присутсвует декремент, и так далее от до 0 : 2, 1, 0

//3
let r = 40
while (r<92) {
    console.log (r);
    r++;
}

//4  
let z = 11
while (z<340) {
    if (z%4 == 0)
    console.log (z);
    z++;
}

//5
for (f=100; f>-6; f--) {
    console.log (f);
}

//6
let arr = [1,6,8,14,0,4]
for (let i=0; arr.length>3; i++){
    if (arr[i]>3 && arr[i] < 10)  
    console.log (arr[i]);
}   

//7
let array = [1,2,3,4,5,6,7,8,9]
let str = ''
for (i=0; i<array.length; i++ ){
  str += '-' + array[i]; 
}
  console.log (str+'-')

//8
let arr1 = ['Понедельник', 'Вторник','Среда' ,'Четверг' ,'Пятница' ,'Суббота', 'Воскресенье']
for (i=0; i<arr1.length; i++)
{
    console.log (arr1[i])
}