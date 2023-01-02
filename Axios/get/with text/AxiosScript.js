document.getElementById("btn").addEventListener("click",MakeRequest);
// ***************way one********************
// function MakeRequest(){
//     console.log("working");
//     config ={
//         method:'get',
//         url: 'data.txt',
//     }
//     const promiseObj=axios(config)
//     promiseObj.then((res)=>{
//         // console.log(res);
//         console.log(res.data);
//     })
// }

// ***************way two********************
// function MakeRequest(){
//     console.log("working");
//     config ={
//         method:'get',
//         url: 'data.txt',
//     }
//     axios(config).then((res)=>{
//         // console.log(res);
//         console.log(res.data);
//     })
// }

// ***************way three********************
// function MakeRequest(){
//     console.log("working");

//     axios({
//         method:'get',
//         url: 'data.txt',
//         }).then((res)=>{
//         // console.log(res);
//         console.log(res.data);
//     })
// }

// ******************shorthand request Method*******************8
        // ************** get 1 ***************
            // function MakeRequest(){
            //     console.log("working");

            //     axios.get( 'data.txt').then((res)=>{
            //          console.log(res);
            //         console.log(res.data);
            //     })
            // }

             // ************** get 2 ***************
         //get is added by default so no need to write ".get" with axios
            
         // function MakeRequest(){
        //     console.log("working");
       
        //     axios( 'data.txt').then((res)=>{
        //         console.log(res);
        //         console.log(res.data);
        //     })
        // }

        // ****************** get 3 ********************

        //   function MakeRequest(){
        //     console.log("working");
       
        //     axios( 'data.txt',{method:'get'}).then((res)=>{
        //         console.log(res);
        //         console.log(res.data);
        //     })
        // }

        // *********Promise then | Error Handling
        // function MakeRequest(){
        //     console.log("working");
       
        //     axios.get('data.txt').then((res)=>{
        //         // console.log(res);
        //         console.log(res.data);
        //     })
        //     .catch((error)=>{console.log(error)})
        //     .then(()=>{console.log("Always run this 'then'");})
        // }

          // *********Promise then | Showing Data in Browser
        //   function MakeRequest(){
        //     console.log("working");
       
        //     axios.get('data.txt').then((res)=>{
        //         // console.log(res);
        //         console.log(res.data);
        //         document.getElementById("divdata").innerHTML=res.data;
        //     })
        //     .catch((error)=>{console.log(error)})
        //      }

        
          // *********Async & Await*******************
          async function MakeRequest(){
            try{
                console.log("working");
                const res=await axios.get('data.txt')
                 console.log(res.data);
                 document.getElementById("divdata").innerHTML=res.data;    
            }
            catch(err){
                console.log(err);
            }
            }