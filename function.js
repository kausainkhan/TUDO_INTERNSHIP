// function login() {
//     //...code
//     console.log('logged in successfully');
// }

// login();

// function login(username, passsword) {
//    console.log(password);
//    // console.log('${useranme}, logged in successfullly');
// }

// login('john','secret');
// login('kausain');

// function upperCase(str) {
//     console.log(str.toUpperCase())
// }

// upperCase('javascript');


// function upperCase(str) {
//     return str.toUpperCase();
// }

// const result=upperCase('javascript');
 
// console.log(result)

// function calculateArea(width,height){
//     const area= width*height;
//     return area;
// }

// const area=calculateArea(30,40);

// console.log(area);

// function formatText(text){
//     return text.toUpperCase();
// }

// const result=formatText('hello');

// console.log(result);
// call back

// function formatText(text,formatcb){
//     return typeof formatcb ==='function'? formatcb(text): text.toUpperCase();
// }

// const result = formatText('hello', function(text) {
//    return text.charAt(0).toUpperCase() + text.slice(1);
// });

// console.log(result);

//IIFE(Immediately.invoked.fuction.expression)

// (function setup(){
//  console.log('Setup done');
// })();

//arrow fuction 

// const login =() => {
//     console.log('logged in');
// }
// login();

// const sum =(num1, num2) => {
//         return num1+num2;
//      }
//     const result = sum (4,5);
//     console.log(result);

// asynchronous javascript -->

// console.log('hello')
// console.log('javascript')
// setTimeout(function() {
//     console.log('good')
//    }, 3000);
    
// console.log('start')
// setTimeout(()=>{
//     console.log('im from timeout')
// },2000)

// console.log('end')
