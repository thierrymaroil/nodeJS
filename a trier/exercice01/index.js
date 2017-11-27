//console.log('Hello world');
//var a = 34;
//var b = '45' ;
//console.log(a+b);
//console.log(0.1 + 0.2);
//var c=15;
//console.log(c%3);
//if (a > 43){
//    console.log('hello');
//} else {
//    console.log('you can not enter this room');
//}
//console.log(false);
//if (!0){
//    console.log(false);
//}
//if (!undefined){
//    console.log(false);
//}
//if (!NaN){
//    console.log(false);
//}
//if (!null){
//    console.log(false);
//}
//
//var a = 3;
//if (a==3){
//    console.log('c\'est ok');
//}
//var mesCourses = new Array ();
//mesCourses.push('bannanes','oranges',' viande');
//console.log(mesCourses);
//
//var a = 'Thierry';
//function test(){
//
//}
// var obj = {
// 
//     name:'thierry',
//     age: 46,
//     toString:function(){
//         return this.name + ' ' + this.age;
//     }
// }
// 
// console.log(obj.age);
// console.log(obj['age']);
// console.log(obj.toString());
// 
// let somme3 =(p1,p2) => {
//     return p1 + p2;
// }
// console.log(somme3(1,3));
// 
// 
// const name =' gilles';
// const address = 'rue des galibiers, 54 8500 ailleurs';
// const phone ="0032485687452";
// console.log (`user is ${name}
// user address is ${address}
// user phone is  ${phone}`);

const numbers = [1,2,3,4,5,6];
// const doubleNumbersMap = function (arr){
//     return arr.map((item)=>{return item*2});
// }
// console.log(doubleNumbersMap(numbers));
console.log (numbers.filter((item)=>{return item%2===0}));
console.log (numbers.reduce((prev, current )=> {return prev+current },0));
