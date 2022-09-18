// var a = [50,60,40,20,10]

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

