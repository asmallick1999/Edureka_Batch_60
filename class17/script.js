function writingExams (cb){
    console.log("writing exams and may take some time.......")
    setTimeout(()=>{
        console.log("done writing paper");
        //execute next seq function :
        cb();
    },3000)
  }

  function dispatchCertificate(){
    console.log("Hurray!! you passed...")
  }

  writingExams(dispatchCertificate);
 // dispatchCertificate();



 ///////////////////////////////////////////////////////////////////////////

 <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
   <script>
       let p1=new Promise((resolve,reject)=>{
            //do some task 
            let b=0;
            b=9+9;
            if(b==14)
              resolve("everything is working fine!!!")
            else
              reject("someting went wrong!!")  
        })
        //way 2: consume promise using async and await 
        async function consumeP1(){
            let p1_output;
            try{
                p1_output =await p1;
            }catch(error){
                console.error("hey error occured!!!",error);
            }finally{
                console.log("i will get executed!!!")
            }
           
            console.log("after consumption of p1",p1_output)
         }
             consumeP1();
   </script> 
</body>
</html>