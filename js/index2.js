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



  let fullname= document.getElementById("fullname");
    let email = document.getElementById("email");
    let pwd = document.getElementById("password");
    let pwd2 = document.getElementById("password2");
   

    function validateInput(){
      //fullname
    if(fullname.value.trim() ===""){
       onError(fullname,"Username error!");
        }
   else{
            onSuccess(fullname);
        }
        //email
    if(email.value.trim()===""){
        onError(email,"Email error!");

    }
    else{
        if(!isValidEmail(email.value.trim())){
            onError(email,"Invalid Email");
        }
        else{
            onSuccess(email);
        }
    }
    //password
    if(pwd.value.trim()===""){
        onError(pwd,"Password error!");
         }
       
    else{
             onSuccess(pwd);
         }
         //CONFIRM PASSWORD
    if(pwd2.value.trim()===""){
            onError(pwd2,"Password error!");
             }
    else{
        if(pwd.value.trim()!==pwd2.value.trim()){
            onError(pwd2,"Password confirmation error!");
        }
     else
        onSuccess(pwd2);
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

function isValidEmail(email){
return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
    
