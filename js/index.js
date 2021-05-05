const inputs = document.querySelectorAll(".input");
function focusFunc(){
    let parent = this.parentNode.parentNode;
    parent.classList.add("focus");
}
function blurFunc(){
    let parent = this.parentNode.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus");
    }  
}
inputs.forEach(input =>{
    input.addEventListener("focus",focusFunc);
    input.addEventListener("blur",blurFunc);
})

/*.............inputs.............
window.onload = () =>{
    this.sessionStorage.setItem("username","anita wangila");
    this.sessionStorage.setItem("password","anitawangilaa0a0");
}

var input = document.getElementsByTagName("input");
var login = document.getElementById("log-in");
var form =document.querySelector("form");

form.onsubmit = ()=>{return false}

onclick = ()=>{
   if ((input[0].value != "") && (input[1].value !="")){
        if ((input[0].value == sessionStorage.getItem("username")) &&
         (input[1].value == sessionStorage.getItem("password"))){
         form.onsubmit = ()=>{return 1}
          // document.cookie ="username" + input[0].value;
           // document.cookie ="password" + input[1].value;
        }

        else{
            if ((input[0].value != sessionStorage.getItem("username"))){
            input[0].nextSibling.textContent ="incorrect username/email";
           
            setTimeout(()=>{
                input[0].nextSibling.textContent =""; 
            },2000);
        }
    
        if ((input[1].value != sessionStorage.getItem("password"))){
            input[1].nextSibling.textContent ="incorrect password!";
            setTimeout(()=>{
                input[1].nextSibling.textContent =""; 
            },2000);
    }
   
}
   }

    else{
        if (input[0].value == "") {
           input[0].nextSibling.textContent = "username is empty" ;
            setTimeout(()=>{
                input[0].nextSibling.textContent = ""; 
            }, 2000);
        }
     
        if (input[1].value == "") {
            input[1].nextSibling.textContent ="password is empty";
            setTimeout(()=>{
                input[1].nextSibling.textContent =""; 
            },2000);
        }
        
       
    }
   
}*/

let fullname= document.getElementById("fullname");
let pwd = document.getElementById("password");



function validateInput(){
  //fullname
if(fullname.value.trim() ===""){
   onError(fullname,"Username error!");
    }
else{
        onSuccess(fullname);
    }

//password
if(pwd.value.trim()===""){
    onError(pwd,"Password error!");
     }
   
else{
         onSuccess(pwd);
     }
     

}

document.querySelector("button").addEventListener("click",(event)=>{
event.preventDefault();
validateInput();
});

function onSuccess(input){
let parent=input.parentElement;
let messageEle=parent.querySelector("small");
messageEle.style.visibility="hidden";
messageEle.innerHTML="";
};
function onError(input,message){
let parent=input.parentElement;
let messageEle=parent.querySelector("small");
messageEle.style.visibility="visible";
messageEle.innerHTML=message; 
};



  



