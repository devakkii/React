// // var obj = {}

// // obj = {
// //     fName : "Akram",
// //     lName : "Coder",
// //     age : 23,
// //     school : "AMU",
// //     isMale : true,
// //     marks : function() {
// //         console.log(`I Got ${25+24+50} out of 100 Marks`)
// //     },

// //     address : {
// //         country : "Ind",
// //         State : "Delhi",
// //         City : "New Delhi"
// //     }
// // };
// // console.log(obj.fName);
// // obj.marks();
// // console.log(obj.address.City)
// // for (let key in obj) {
// //     console.log(key)
// //     console.log(obj[key])
// // }

// // var area = (radius) => {
// //     console.log(2*Math.PI*radius)

// // }
// // area(2)

// // delete obj.age;

// // console.log(obj)

// // var fruit = prompt("Which Fruit You want to buy?")
// // var obj = {
// //     [fruit] : 5
// // }

// // console.log(obj[fruit])

// var brand = "Apple"
// var ram = 16 + "GB"
// var proces = "M2 Silicon"

// var specification = {
//  brand,
//  ram,
//  proces,
//  age : undefined ,

// }
// specification.name = "akram"
// console.log(specification)
// if ("age" in specification){
//     alert(true)
// }
// else{
//     alert(false)
// }

// let fruit = prompt("What is your Favourite Fruit?")
// var obj = {
//     fruit : 5,
// }
// console.log(obj["fruit"])

// var obj ={
//     name : "john",
//     surname : "smith",
// }
// obj.name = "pete"
// console.log(obj.name)
// delete obj.name;
// console.log(obj)

// function isEmpty(obj){
//     for (let key in obj){
//         return false;
//     }
//     return true;
// }



// var obj = {}
// console.log(isEmpty(obj))


var sum = 0
let salaries = {
    john: 100,
    Ann: 160,
    Pete: 130,
}

for(let key in salaries){
    sum+=salaries[key]
}
console.log(sum)















































