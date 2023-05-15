
// // // let a = 20
// // // {   
// // //     function fun(){
// // //         var b = 10;
// // //         var a
    
// // //     console.log(d);
// // // }
    
// // //      let c = 20;
// // //      const d = 40;
// // //  a
// // //      console.log(a)
// // // }

// // // console.log(a)
// // // fun();

// // var name = "Akram"
// // var age = 23
// // var obj = {
// //     [name]:"What is your name",
// //     [age] : "is my age"
// // }
// // console.log(obj)

// var obj = {
//     name : "Akram",
//     age : 23, 
//     school : "JMI",
//     size : {
//         height : 12,
//         width: 10
//     }
// }
// var clone ={}

// for (let key in obj){
//     var x = typeof(obj[key])
//     if(x=="object"){
//        clone[key]=obj[key];

//     }
//     else{
//         clone[key] = obj[key]
//     }
//     obj.size.height = 111
// }
// console.log(clone)

// function outer(){
//     var a= 10;
//     return function inner(){
//         console.log(a);
//     }
// }
// var a = outer()
// a();

// Object.assign(clone,obj, {isMale:"true"})
// obj.user = "Bhai"
// obj.size.height = 111
// console.log(clone)

// var obj ={
//     name : "Akram",
//     age : 45
// }
// var newObj = obj;
// console.log(newObj.age)

// var obj ={
//     name:"Akram"
// }
// var nobj ={
//     name:"Akram"
// }
// console.log(obj==nobj)

var a = [1,4,2,5,3]
a.sort()
console.log(a)