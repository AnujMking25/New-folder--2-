
document.getElementById("btn").addEventListener('click',axiosWithRemoteJson);

// *******************Promise |single data ******************

// function axiosWithRemoteJson(){
    // console.log("It is working");
//     confing={
//         url:'https://jsonplaceholder.typicode.com/posts/1'
        
//     }
//     axios(confing).then((res)=>{
//         console.log(res);
//         console.log("Data", res.data);
//         console.log("Data ID: ",res.data.id);
//         console.log("Data Title: ",res.data.title);
//     }).catch((err)=>{console.log(err)})
// }


// *************here i am using params *****************
// function axiosWithRemoteJson(){
    // console.log("It is working");
//     confing={
//         params: { id: 1},
//         url:'https://jsonplaceholder.typicode.com/posts/'
        
//     }
//     axios(confing).then((res)=>{
//         console.log(res);
//         console.log("Data[0]", res.data[0]);
//         console.log("Data ID[0]: ",res.data[0].id);
//         console.log("Data Title[0]: ",res.data[0].title);
//     }).catch((err)=>{console.log(err)})
// }

// ***************** Promise Then | Multuipal Data (showing in browser)************
// function axiosWithRemoteJson(){
    // console.log("It is working");

//     axios('https://jsonplaceholder.typicode.com/posts').then((res)=>{
//         console.log(res);
//         // console.log("Data[0]", res.data[0]);
//         let output =document.getElementById("allpost");
//         res.data.forEach(element => {
//             // console.log(element);
//             // console.log(element.id);
//             // console.log(element.title);

//             output.innerHTML+=`
//             <div>ID: ${element.id}</div>
//             <div>Title: ${element.title}</div>
//             <div>Body: ${element.body}</div>
//             `
            
//         });      
//     }).catch((err)=>{console.log(err)})
// }

// ***************Async & Await | Single Data**********************

// async function axiosWithRemoteJson(){

//     try {
//         console.log("It's working");
//         const res=await axios('https://jsonplaceholder.typicode.com/posts/1')
//         console.log(res.data);
//         // console.log(res.data.id);
//         // console.log(res.data.title);
//         document.getElementById("pid").innerText=res.data.id;
//         document.getElementById('title').innerText=res.data.title;
//         document.getElementById('body').innerText=res.data.body;

//     } catch (error) {
//         console.log(error);
//     }
// }

// ***********************Async & Await | Multiple Data*****************************



async function axiosWithRemoteJson(){

    try {
        console.log("It's working");
        const res=await axios('https://jsonplaceholder.typicode.com/posts')
        console.log(res.data);
        let output=document.getElementById("allpost");
       res.data.forEach(element => {
        console.log(element.id);
        console.log(element.title);
        output.innerHTML+=`<div>ID: ${element.id}</div>
        <div>Title: ${element.title}</div>
        <div>Body: ${element.body}</div><hr>`
       });

    } catch (error) {
        console.log(error);
    }
}