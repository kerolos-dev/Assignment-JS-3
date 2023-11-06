let user =[]
user = JSON.parse(localStorage.getItem('user'))
console.log(user);

let signEmailid =document.getElementById("signEmail")
let signPasswordid =document.getElementById("signPassword")
document.getElementById("login").addEventListener("click",()=>{
    if(signEmailid.value == "" && signPasswordid.value ==""){
        document.getElementById('message').innerHTML = `<p class = 'text-center  alert-danger'>All inputs is required</p>`
    }else{
        chenkUser();
    }

})
function  chenkUser(){
    for( let i = 0 ; i<user.length ; i++ ){
        if(signEmailid.value == user[i].email && signPasswordid.value== user[i].password ){
            let y=user[i].name
            localStorage.setItem('nameuesr' , y)
        // location.href = '../../Login/index.html';

            break;

        }
    }
}