// var a = [50,60,40,20,10]

// const { rejects } = require("assert");
// const { resolve } = require("path");

// for(index in a){
//     console.log(a[index]);
// }

// for(value of a){
//     console.log(value)
// }

// 11:15: //variations in for loop are : for-in and for-of
//        for(index in a){
//         console.log("array a:",a[index])
//        }

//        //this for-in can be used on an object as well :
//        var Person={
//             //pair of key : value
//             name:"Gauri", //key=name and value="gauri" string type
//             age:60,
//             address:"abc Apts, Mumbai",
//             designations:["Junior executive","Senior executive","Trainer"]
//         }

//         for(key in Person){
//             console.log(key)
//             console.log(Person[key])
//         }



//        for (value of a){
//         console.log("array a for-of",value)
//        }


// function validate(){
//     console.log("validate function is invoked!!")
//     var name=document.forms['myForm']['name'].value;
//      if(name=='')
//      {
//        document.getElementById("error").innerHTML="Name cant be empty"
//      }

//      var phone=document.forms['myForm']['phone'].value;
//      console.log(phone)
//      console.log(typeof phone)
//      var no=parseInt(phone)
//      console.log(typeof no)
//      if(isNaN(no)){
//         document.getElementById("error").innerHTML="phone no  should be a no"
//      }


//      var dob=document.forms['myForm']['dob'].value
//      var date=new Date(dob)
//      console.log(date)

//      var today=new Date();

//      var diff=today-date  //result in milliseconds 

//      var age=diff/(1000*3600*24*365.25)

//      if(age<18){
//         alert("you are too small to submit the form!!")
//      } 
// }

// const family_member = [[4, 3, 3, 4, 9], [5, 6, 3, 1, 7]]

// for (let i in family_member) {

//    for(let j in family_member){
//       console.log("*");
//    }
//    console.log("\n");
// }

//const family_member = [4, 3, 3, 4, 9]

// const arr = {
//    name : "sohail",
//    roll : 203003,
//    university : "aliah university",
// }
// for(k in arr){
//    console.log(k+" :"+arr[k]);
// }
// for(let value of family_member){
//    console.log(value);
// }

// for(index in arr){
//    console.log(arr[index]);
// }

// for(let a of family_member){
//    console.log(family_member[a]);
// }

// var arr = [3, 5, 7];
// arr.foo = "hello";


// for (var i in arr) {
//   console.log(i); // logs "0", "1", "2", "foo"
// }

// for (var i of arr) {
//   console.log(i); // logs "3", "5", "7"
//   // it doesn't log "3", "5", "7", "hello"
// }

// let c = function abc(){
//     console.log("Hello I am inside a function");
// }


//############### Generator Function ####################

// function* generatorFunction(){
//     let i =0,k=2;
//     for(i;i<5;i++){
//         yield i;
//         k = k+1;
//         yield k;
//     }
// }
// const returnValue = generatorFunction();

// for(let i = 0; i<5;i++){
//     console.log(returnValue.next().value);
// }

//############## Class and Object ##########################

// class practiceClass {
//     constructor(type, sub){
//         this.firstType = type;
//         this.firstSub = sub;
//     }
// }

// obj1 = new practiceClass("Array","Java")
// console.log(obj1.firstSub);
// console.log(obj1.firstType);


//################ Cookies #####################

// document.cookie = "userID = asm; password = sohail1999@"

// let ck1 = document.cookie;
// console.log(ck1);

//############# Destructuring  ##################

// const person={
//     name:"Sohail",
//     roll:203003,
//     hobbies:["batminton","cricket","football","hockey"],
//     address:{
//         Vill:"madhabpur",
//         PO:"jamalpur",
//         PIN:712402
//     }
// }

// let{name,roll,hobbies,address}=person
// console.log(roll);

//############ Constractor ##############

// function Myconstructor(name, roll){
//     this.myName = name;
//     this.myRoll = roll;
// }
// let{name,roll}=Myconstructor
// const myConstructor = new Myconstructor("sohail",203003)
// console.log(myName);

//############# back tick ##############

// const myName = "sohail"

// console.log(`hello everyone
// How are you bro
// keise hoo saab log
// this is ${2+5}`);     


//############## arrow function #################

// const ages = [60,9,8,50,45,3]
// let agesAbove18=ages.map(above18 => above18%2)
// console.log(agesAbove18);

//########## immidiate invoked function ##############

// (function(a){ 
//      var checkVar = 90
// })(30);
// console.log(checkVar);



//################ var, let, const ################

// var s = 40;
// var s = 50;
// console.log(s);

//################ this keyword ####################

// (function hello(){
//     "use strict"
//     console.log(this);
// })();

//############### cookie ################


// function cookieCheck() {
//     document.cookie = "pwd=12345@"
//     const showCookie = document.cookie.split(';')
//     console.log(showCookie);

// }
// cookieCheck();

//############### Local Storage #####################

// localStorage.setItem("college","aliah")

// sessionStorage.setItem

//##################### SetTime & SetInterval #####################

// const emp = [
//     {   
//         name:"sohail",  
//         age:50
//     },
//     {   
//         name:"kaju",  
//         age:50    
//     },
//     {   
//         name:"gauree",  
//         age:25     
//     },
//     {   
//         name:"jay",  
//         age:25    
//     },
//     {   
//         name:"rahul",  
//         age:55    
//     },
// ]




// const matchingAgeCount = emp.reduce(function(acc, curr){

//     //console.log(acc[curr], curr);
//     if(acc[curr.age]){
//         acc[curr.age] = ++acc[curr.age]
//     }
//     else{
//         acc[curr.age] = 1;
//     }
//     return acc

// },{})
// console.log(matchingAgeCount);
// console.log();

//###############################################################

// const above30 = emp.filter(val=>val.age>30)
// for(let index of above30){
//     console.log(index.name);
// }

//###################### Set Time Out ###############################

// console.log("hello");

// function exam(cb){
//     setTimeout(()=>{
//         console.log("writing on exam")
//         cb();
//     }, 100);


// }
// const examFinish = ()=>{
//     console.log("Exam Done");
// }
// exam(examFinish);


// ################ Promises ########################


// let p1 = new Promise((resolve, reject) => {
//     const a = 21;
//     if (a == 20) {
//         resolve(`everything is working fine`);
//     }
//     else {
//         reject(`something went wrong ${a}`);
//     }
// })


// async function exam(){
//     try{
//         await p1;
//     }
//     catch(error){
//         console.error(`this is an error`, error);
//     }
//     finally{
//         console.log(`i will execute`);
//     }
// }
// exam();
// console.log(`hello this is after promise`);


// ############################# API ############################

//1

// function getApiCall(){
//     fetch('https://jsonplaceholder.typicode.com/users',{method:'GET'})
//     .then(responce=>responce.json())
//     .then(data=>console.log(data))
// }
// getApiCall();
//2

// function getApiCall(){
//     fetch('https://randomuser.me/api/',{method:'GET'})
//     .then(Response=>Response.json())
//     .then(data=>console.log(data.results[0].name.first))
//     .catch("server has a problem")
// }


// ################### Asychronous #######################

// console.log("i am writing exam");

// function examDone(){
//     setTimeout(()=>console.log("exam is done"), 3000)
// }
// examDone();

// console.log("let me go to home");
// console.log("let me go to home");
// console.log("let me go to home");
// console.log("let me go to home");
// console.log("let me go to home");
// console.log("let me go to home");
// console.log("let me go to home");


// ################## API ########################
//const url = 'https://api.nasa.gov/planetary/apod?api_key=EGMHCZ3kXaNy2jjRo1dzILcR0VT7iYaLB2jBXJvx'


// (function () {
//     let jsonData = [];
//     fetch('https://dummyjson.com/users')
//         .then(Response => Response.json())
//         .then(data => {
//             jsonData = data;
//             console.log(jsonData.users[0].firstName);
//             for (let i = 0; i < jsonData.users.length; i++) {
//                 createElement(i)
//                 createImg(i)
//             }
//         })
//     function createElement(i) {
//         let h2 = document.createElement("h2");
//         h2.innerHTML = `${jsonData.users[i].firstName}  ${jsonData.users[i].lastName} ${i}`;
//         document.getElementById('parentH2').appendChild(h2);

//         console.log(`hi`);
//     }
//     function createImg(i) {
//         let img = document.createElement("img");
//         img.src = `${jsonData.users[i].image}`;
//         document.getElementById('parentImg').appendChild(img)
//     }
// })();


(function(){
    let result = []
    fetch('https://randomuser.me/api/')
    .then(Response=>Response.json())
    .then(data=>{
        result=data;
        showData(result);
    })
    .catch(`Server is not responding`)
 
})();
function showData(result){

    // profile picture 

    let img = document.createElement('img');
    img.src = result.results[0].picture.large;
    document.getElementById('random').appendChild(img)

    // name 

    let name = document.createElement('p');
    name.innerHTML = ` Name : ${result.results[0].name.first} ${result.results[0].name.last}`;
    document.getElementById('random').appendChild(name)

    // gender 

    let gender = document.createElement('p')
    gender.innerHTML = `Gender : ${result.results[0].gender}`
    document.getElementById('random').appendChild(gender)

}





