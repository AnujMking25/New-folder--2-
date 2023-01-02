document.getElementById("btn").addEventListener('click',Dogimage);

function Dogimage(){
    console.log("Working right");
    axios.get('https://dog.ceo/api/breeds/image/random')
    .then((res)=>{
        console.log(res.data.message);
        document.getElementById('DogPic').setAttribute('src',res.data.message)

    }).catch((err)=>console.log(err))
}
