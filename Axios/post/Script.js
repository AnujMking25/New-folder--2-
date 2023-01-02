document.getElementById("btn").addEventListener('click',MakeRequest);

// // *****************way 1 ***********************
// // Promise Then 
// function MakeRequest(){
// console.log('Its working');

// const config={
// method:'POST',
// url:'https://reqres.in/api/users',
// headers:{
//     'Content-Type':'application/json'
// },
// data: {
//   "name":"Anuj Mishra",
//   "job":"Software Engineer"  
// }
// }
// axios(config).then((res)=>{
//     console.log(res.data);
// }).catch((error)=>{console.log(error);})
// }

// *****************way 2 (shorthand)***********************
// Promise Then 
// function MakeRequest(){
//     console.log('Its working');
    
//     const config={
//     headers:{
//         'Content-Type':'application/json'
//     }
//     }
//     axios.post('https://reqres.in/api/users',{
//         "name":"Ram",
//         "job":"Software Engineer"  
//       },config).then((res)=>{
//         console.log(res.data);
//     }).catch((error)=>{console.log(error);})
//     }

// ********************way 3************************
// ******************async & await*********************

// async function MakeRequest(){
// console.log('Its working');
// try {
//    const config={
//     method:'POST',
//         url:'https://reqres.in/api/users',
//         headers:{
//            'Content-Type':'application/json'
//         }, 
//         data:{
//             "name":"Shubham Mishra",
//             "job":"Software engineer"
//         }
        
//     }
//     const res=await axios(config);
//     console.log(res.data);
//     }
//      catch (error) {
//         console.log(error);
//             }
// }

        // shorthand
        // async function MakeRequest(){
        // console.log('Its working');
        // try {
        //    const config={
           
        //         headers:{
        //            'Content-Type':'application/json'
        //         }
        //     }
        //     const res=await axios.post('https://reqres.in/api/users',{
        //         "name":"Shubham Mishra",
        //         "work":"Software engineer"
        //     },config);
        //     console.log(res.data);
        //     }
        //      catch (error) {
        //         console.log(error);
        //             }
        // }

        // *****************Axios instance***********************

        function MakeRequest(){
           console.log('Its working');
    
           const ai=axios.create({
            baseURL:'https://reqres.in/api'
           })
            const config={
            headers:{
                'Content-Type':'application/json'
            }
            }
            ai.post('/users',{
                "name":"Ram",
                "job":"Software Engineer"  
            },config).then((res)=>{
                console.log(res.data);
            }).catch((error)=>{console.log(error);})
            }