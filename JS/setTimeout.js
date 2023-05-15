// // // // let arr =[2,5,7,12]
// // // // let area = (num)=>{
// // // //    return num*num;
// // // // }
// // // // let perimeter = () =>{
// // // //    return 2*(num+num);
// // // // }

// // // // function calculate(arr,logic)
// // // // {
// // // //    var res =[];
// // // //   for(var i =0;i<arr.length;i++){
// // // //    res.push(logic(arr[i]))
// // // // }
// // // //  return res;
// // // // }

// // // // console.log(calculate(arr,area))

// // // // console.log(arr.map((num)=>{
// // // // return num*num;}))

// // // // Array.prototype.mypush= function(num){
// // // //    let length = this.length;
// // // //    this[length]=num;
// // // //    return this;
// // // // }
// // // // arr.mypush(123)
// // // // console.log(arr);


// // // // function isgreaterThan4(num){
// // // //    if(num>4){
// // // //       return num;
// // // //    }
// // // // }
// // // // var ans;
// // // // console.log(ans.push(4))








// // // let arr = [10,-5,6,1128,56,12,456]

// // // function largestValue(acc,num) {

// // //    if(num>acc)
// // //    {
// // //       acc=num
// // //    }
// // //    return acc
// // // }
// // // let ans = arr.reduce(largestValue,);
// // // console.log(ans);





// // const worldCapital =[
// //    {
// //       country: "India",
// //       capital: "New Delhi",
// //       population: "2cr",
// //    },
// //    {
// //       country: "America",
// //       capital: "Washington DC",
// //       population: "6cr",
// //    },
// //    {
// //       country: "France",
// //       capital: "New Delhi",
// //       population: "2cr",
// //    },
// //    {
// //       country: "England",
// //       capital: "London",
// //       population: "4cr",

// //    },
// //    {
// //       country: "Germany",
// //       capital: "Berlin",
// //       population: "2cr",
// //    }
// // ];

// // function countryCapital(obj, num){
  
// //    if (obj[num.population]) {
     
// //       obj[num.population] = obj[num.population] + 1;
// //   }
// //   else{
// //    obj[num.population] = 1;
// //   }
// //   return obj;
   
// // }



// // let ans = worldCapital.reduce(countryCapital,{})
// // console.log(ans)



// // let cP = worldCapital.filter((obj)=>{

// //    if(obj.population<="5cr"){
// //         return true;  
// //    }
// // }).map((obj) => {
// //    return obj.country;
// // })
// // console.log(cP);

// // // console.log(cP.map((obj)=>{
// // //     return obj.country
// // // }));





// // function nd(obj,num){

// // if(num.capital === "New Delhi"){
// //    obj[num.country] = num.capital;
// // }
// //   return obj;
// // }
// // let red = worldCapital.reduce(nd,{})

// // console.log(red);

// // function reddd(arrr,num) {
// //    if(num.population<="5cr"){
// //       arrr.push(num.country)
// //    }
// //    return arrr
// // }


// // let redd = worldCapital.reduce(reddd,[])
// // console.log(redd);



// // let arr = [1,4,2,3,2,4,1,5,6,1,1]

// // function repeatedNumber(obj,num){
// //    if(obj[num]){
// //       obj[num]=obj[num]+1
// //    }
// //    else{
// //       obj[num]=1;
// //    }
// //    return obj;
// // }




// // let ans = arr.reduce(repeatedNumber,{})
// // console.log(ans);


// // function type1(){
   
// //    // var name ="Akram"
// //    console.log(name)
// // }

// // // var name = "Javascript"
// // let obj ={
// //    name:"Akram",
// //    type1
// // }
// // obj.type1()

// // var food ="Pizza"
// // var obj1 = {
// //    food:"Pizza",
// //    eat(){
// //       console.log("I love to eat "+ this.food);
// //    }
// // }

// // var foo = obj1.eat();
// // console.log(foo);



// // var length = 1
// // function square(){
// //    let cb =function(){
// //       console.log(this.length)
// //    }
// //    setTimeout(cb,2000)
// // }
// // var obj3 ={
// //  length:3,
// //  square
// // }
// // obj3.square()


// // let cricket = {
// //    fNmae:"Akram",
// //    lName:"Coder",
// //     welcome(mail){
// //       console.log(`${this.fNmae} ${this.lName} is best ${mail}`);
// //       }
// // }


// // let fn =cricket.welcome.bind(cricket,"ABC@gmail.com")
// // cricket ={
// //    lName:"aaa"
// // }
// // fn()


// function Name(fname,lname){
//    this.firstName = fname
//    this.lastName = lname
//    this.age = 45
// }

// var obj = new Name("Sunil","Gavaskar")
// console.log(obj);

var obj ={
   Brand :"Thar",
   Company:"Mahindra"
}
function description(){
   console.log(`${this.Brand} is best product From ${this.Company}`);
}
var binded =description.bind(obj)
binded()

//polyfill is best to use but I will use this after some time.

var obj ={
   name :"Akram",
   age:122,
   address :{
      city:"New Delhi",
      State:"Delhi"
   }
}

var details = obj.address?.city?.Brand;
console.log(details);