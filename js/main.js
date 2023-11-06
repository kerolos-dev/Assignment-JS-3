let idsignName=document.getElementById('signName');
let idsignEmail=document.getElementById('signEmail');
let idsignPassword=document.getElementById('signPassword');
let addbuttonid=document.getElementById('addbutton')
let user=[];

function add(){
    if(idsignName.value== '' || idsignEmail.value ==''|| idsignPassword.value == ''){
     document.getElementById('message').innerHTML = `<p class = 'text-center  alert-danger'>All inputs is required</p>`

    }
    else{
        let obj={
            name :idsignName.values,
            email :idsignEmail.values,
            password :idsignPassword.values
        }
        user.push(obj)
        // location.href = '../../Login/index.html';
        localStorage.setItem('user', JSON.stringify(user));

    }

    ragelsing()
    console.log("hello");

}
let ragelname=/^[A-Za-z]{1,}$/
let ragelemail=/^[a-z][1-9](@)[a-z].[a-z]$/
let ragelpass=/^[0-9]{1,9}$/
function ragelsing(){
    if(ragelname.test(idsignName.value)== true || ragelemail.test(idsignEmail.value) == true || ragelpass.test(idsignPassword.value)  == true){
        document.getElementById('message').innerHTML = `<p class = 'text-center  alert-info'>saacses</p>`
        return true
        }
        else if(ragelname.test(idsignName.value) == false)
        {
            document.getElementById('messagename').innerHTML = `<p class = 'text-center  alert-danger'> input  is required</p>`
        }
        else if(ragelemail.test(idsignEmail.value)== false)
        {
            document.getElementById('messageemail').innerHTML = `<p class = 'text-center  alert-danger'>input is required</p>`

        }
        else if(ragelpass.test(idsignPassword.value)  == false)
        {
            document.getElementById('messagepass').innerHTML = `<p class = 'text-center  alert-danger'> input is required</p>`

        }
     
}

idsignName.onkeyup= function(){
    if(ragelsing && add){
        addbuttonid.removeAttribute("disabled")
    }
    else{
        console.log("fasfsasa");
    }
}
idsignEmail.onkeyup= function(){
    if(ragelsing && add){
        addbuttonid.removeAttribute("disabled")

    }
    else{
        console.log("fasfsasa");
    }
}
idsignPassword.onkeyup= function(){
    if(ragelsing && add){
        addbuttonid.removeAttribute("disabled")
    }
    else{
        console.log("fasfsasa");
    }
}