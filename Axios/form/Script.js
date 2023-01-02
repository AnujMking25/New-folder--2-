document.getElementById("btn").addEventListener('click',MakeRequest);
 // ************************ form(Promise) ************************

//  function MakeRequest(e){
//     e.preventDefault();
//     let Name=document.getElementById("name").value;
//     let Job=document.getElementById("job").value;
//    config={
//        url:'https://reqres.in/api/users',
//        method:'POST',
//        headres:{
//            'Content-Type':'application/json'
//        },
//        data: JSON.stringify({
//            name:Name,
//            job:Job
//        })
//    }
//     axios(config).then((res)=>{
//        console.log(res.data);
//     }).catch((err)=>{console.log(err)})
//  }



async function MakeRequest(e){
    e.preventDefault();
    let Name=document.getElementById("name").value;
    let Job=document.getElementById("job").value;

    try {
        config={
            url:'https://reqres.in/api/users',
            method:'POST',
            headres:{
                'Content-Type':'application/json'
            },
            data: JSON.stringify({
                name:Name,
                job:Job
            })
        }
      const res=await axios(config)
      console.log(res.data);
    } catch (err) {
        console.log(err)
    }
  
 }
 