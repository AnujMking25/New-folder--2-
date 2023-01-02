console.log("It is working");
document.getElementById("btn").addEventListener('click',axiosWithJson);

// *****************  Promise *********************** 
// function axiosWithJson(){
//     axios.get('data.json')
//     .then((res)=>{
//         document.getElementById("divdata").innerHTML=res.data[0].name;
//         document.getElementById("divdata1").innerHTML=res.data[1].name;
//         console.log(res)
//         console.log(res.data[0].name);
    
//     }).catch((erro)=>console.log(error))
// }

// ************ Async and Await(try and catch)******************
async function axiosWithJson(){
   const res=await axios.get('data.json')
   try{
    document.getElementById("divdata").innerHTML=res.data[0].name;
    document.getElementById("divdata1").innerHTML=res.data[1].name;
    console.log(res)
    console.log(res.data[0].name);
   }catch(err){
    console.log(err);
   }
       
    
}