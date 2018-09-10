// let arrLike = {
//     "a":"1",
//     "b":"2",
//     "c":"3",
//     length:3
// }

// var arr1 = [].slice.call(arrLike)
// let arr2 = Array.from(arrLike)
// let arr3 = Array.from("hello")

// console.log(arr1)
// console.log(arr2)
// console.log(arr3)
// console.log(Array.from(arrLike,value => value))

// function typeOf() {
//     return Array.from(arguments,value=>value.b)
// }

// console.log(typeOf(arrLike))

// let arr4 = Array.from("好的").length
// console.log(arr4)


// let  arr5 = Array.of(1,3,3)
// console.log(arr5)

// let arr6 = ["a","b","c"].fill(7,1,3)
// console.log(arr6)


// function Point(x=1,y=0){
//     this.x = x;
//     this.y = y;
// }

// let point = new Point()
// console.log(point.x)

// function a () {
// 	var num = 1;
// 	function b () {
// 		return num++
// 	}
// 	return b;
// }
// var x = a();

// console.log(x())
// console.log(x())

// function log (x,y="a") {
//     console.log(x,y)
// }

// log("hello","")

// function Point(x=0,y=1){
//     this.x = x;
//     this.y = y; 
// }

// var p = new Point()
// // console.log(p)

// let oa = {length:3,"0":"1","1":"2","2":"3"},
//     ob = {"b":"2"};

// // console.log(Object.values(oa).length)

// let test = Array.prototype.slice.call(oa,0,3)
// // console.log(test)

// let arr7 = [1,2,4,5],
//     arr8 = [5,6,7,8];

// console.log(arr7.concat(arr8))
// console.log([...arr7,...arr8])

// var f = i => ++i;
// console.log(f(3))

// var arr9 = [3,2,3,4];

// arr9["shift"](2);
// console.log(arr9)

// console.log(document.documentElement.clientWidth)

// function add(...values){
// 	let sum = 0;
// 	for(var val of values){
// 		sum += val;
// 	}
// 	return sum;
// }

// console.log(add(2,3,4,5))

// function push(arr,...items){
// 	for(var item of items){
// 		arr.push(item)
// 	}
// }

// var a = [];
// push(a,2,3,4);
// console.log(a)

// // function push(array, ...items) {
// //   array.push(...items);
// // }

// function add(x, y,z) {
//   return x + y+z;
// }

// var numbers = [1,2,3];
// console.log(add(...numbers))// 42

// var arrr=[1,2,3]
// var arrrr = [46,3,4,5,6]
// Array.prototype.push.apply(arrr,arrrr)
// console.log(arrr)

// Array.prototype.myFunction = function () {
// 	alert(this)
// };


// [1,2,3].myFunction();

// var arr11 = ['a','b'];
// var arr22 = ['c','d'];
// var arr33 = ['e','f'];

// var arr44 = arr11.concat(arr22,arr33)

// console.log(arr44)

// console.log([...arr11,...arr22,...arr33])

// var arr55 = [2,3,4,5]

// console.log(Math.max.call(null,2,3,4,5,6))

// var test = id => ({id:id,name:"name"})
// console.log(test(1))

// const square = n => n % 3 == 2;
// console.log(square(2));

// var a = [2,4,6].map(x => x * x)
// console.log(a)

// const [first,...last] = ['a','b','c','d']
// console.log(last)

// function abc () {

// }

// console.log(abc.name)

// var f = x => {console.log(x)}

// f(3)

// var btn = document.getElementById('btn');
// btn.onclick = function(){
// 	alert()
// }

var arr1 = {min:1,max:5};
var arr2 = [12,2,33,44,51,6,17,83,9];
var result = arr2.map(function (value) {
	return value * this.max;
},arr1);
console.log(result);

var arr3 = ["ab","cd","fd","ab"];
console.log(arr3.join(""));

console.log(arr2.sort(function (a,b) {
	if(a>b){
		return 1;
	}else if(a < b){
		return -1;
	}else{
		return 0;
	}
}));

var scope = "gobal";
function a () {
	function f () {
		return scope;
	}
	return f;
}
console.log(a()());




