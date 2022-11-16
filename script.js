//***********************localStorage***********************************
localStorage.setItem('name','Anuj')
console.log(localStorage.getItem('name')); 
localStorage.setItem('name','Saksham')//this name is override in previous name because key is some
console.log(localStorage.getItem('name')); 
// localStorage.removeItem('name')

//***********************sessionStorage***********************************       
sessionStorage.setItem('name','Saksham')
console.log(sessionStorage.getItem('name'))
sessionStorage.setItem('name','Anuj')//this name is override in previous name because key is some

//******************************cookies****************************
document.cookie ='name = King'
console.log(document.cookie); 