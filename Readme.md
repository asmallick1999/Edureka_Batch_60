# Home Task

1) study about array.forEach loop on MDN website ( https://developer.mozilla.org )

# Class Notes 
----------------------------------------------------------------------------------

# for in and for of loop
<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <script>
      //for -loop
    //    for(count=10;count <=15  ; count++   ){
    //     //body of for 
    //     console.log("count=",count)
    //     console.log("abc")
    //    }

       for(count=10;count >=5 ; count--  ){
        //body of for 
        console.log("count=",count)
        console.log("abc")
       }

       var a=[10,20,30,40,50]

       for(count=0;count<a.length;count++){
           console.log(a[count])
       }


       //variations in for loop are : for-in and for-of
       for(index in a){
        console.log("array a:",a[index])
       }

       //this for-in can be used on an object as well :
       var Person={
            //pair of key : value
            name:"Gauri", //key=name and value="gauri" string type
            age:60,
            address:"abc Apts, Mumbai",
            designations:["Junior executive","Senior executive","Trainer"]
        }

        for(key in Person){
            console.log(key)
            console.log(Person[key])
        }



       for (value of a){
        console.log("array a for-of",value)
       }

       //while loop
       var c=0;
        while(c<=3){
           console.log("counting....",c)
           c++;
        }

       
        do{
            console.log("counting in do while...",c)
        }while(c<3)

        //homework:
      //  array.forEach : MDN 
   </script> 
</body>
</html> -->

# DATA TYPES

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <script>
        var firstName="Gauri"
        console.log("firstName:",firstName);

        var secondName="Arpit";
        console.log("secondName:",secondName);

        secondName=firstName;
        console.log("firstName:",firstName);
        console.log("secondName:",secondName);

        firstName="Amir"
        console.log("firstName:",firstName);
        console.log("secondName:",secondName);


        //referenced data type:
        var Person={
            //pair of key : value
            name:"Gauri", //key=name and value="gauri" string type
            age:60,
            address:"abc Apts, Mumbai",
            designations:["Junior executive","Senior executive","Trainer"]
        }

        console.log('person',Person)

        var secondPerson=Person
        console.log('secondPerson',secondPerson)

        Person.age=90;
        console.log('person',Person)
        console.log('secondPerson',secondPerson)
    </script>
</body> -->

# String

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


# Math

# Date Objects

# form validation

<!-- <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <span id="error" style="color:red"></span>
    <form action="" name="myForm" onSubmit="validate();return false;">
        <label>Name:
            <input type="text" name="name"/>
            <span id="nameerror" style="color:red"></span>
        </label>
        <br/>
        <label>Phone No:
            <input type="text" name="phone"/>
        </label>
        <br/>
        <label>Date of Birth:
            <input type="date" name="dob"/>
        </label>
        <br/>
        <input type="submit" value="submit"/>
    </form>
    <script>
        function validate(){
            console.log("validate function is invoked!!")
            var name=document.forms['myForm']['name'].value;
             if(name=='')
             {
               document.getElementById("error").innerHTML="Name cant be empty"
             }

             var phone=document.forms['myForm']['phone'].value;
             console.log(phone)
             console.log(typeof phone)
             var no=parseInt(phone)
             console.log(typeof no)
             if(isNaN(no)){
                document.getElementById("error").innerHTML="phone no  should be a no"
             }


             var dob=document.forms['myForm']['dob'].value
             var date=new Date(dob)
             console.log(date)

             var today=new Date();

             var diff=today-date  //result in milliseconds 

             var age=diff/(1000*3600*24*365.25)

             if(age<18){
                alert("you are too small to submit the form!!")
             }


           
        }
    </script>
</body>
</html> -->


