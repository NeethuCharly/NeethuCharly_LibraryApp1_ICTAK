let email=document.getElementById("inputEmail");
let pwd=document.getElementById("inputPassword");
let phone=document.getElementById("inputPhone");
let rpwd=document.getElementById("inputrpassword");
let emailerror=document.getElementById("emailerror");
let pwderror=document.getElementById("pwderror");
let phoneerror=document.getElementById("phoneerror");
let rpwderror=document.getElementById("rpwderror");
let flag=0;    
function validate(){

    
    
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;
    let pwdexp= /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;   
    let phoneexp1=/^\d{10}$/ ;
    let phoneexp2=/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/ ;

    if(email.value.match(regexp)){
        emailerror.innerHTML="Valid";
        emailerror.style.color="green";
        flag=flag+1;
       
    }
    else{
        emailerror.innerHTML="Invalid!..Should be in the format: adcd@gmail.com";
        emailerror.style.color="red";
        flag=0;
    }


    if(pwd.value.match(pwdexp)){
        pwderror.innerHTML="Valid";
        pwderror.style.color="green";
        flag=flag+1;
       
    }
    else{
        pwderror.innerHTML="Invalid!...minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number";
        pwderror.style.color="red";
        flag=0;
    }   
    
    if((phone.value.match(phoneexp1))&&(phone.value.match(phoneexp2))){
        phoneerror.innerHTML="Valid";
        phoneerror.style.color="green";
        flag=flag+1;
        
    }
    else{
        phoneerror.innerHTML="Invalid!...Accept numbers only.. Should contain 10 numbers only.. Should accept additional 3 formats: XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX";
        phoneerror.style.color="red";
        flag=0;
    } 
    if((rpwd.value.match(pwdexp))&&(pwd.value==rpwd.value)) 
    {
        rpwderror.innerHTML="Confirm";
        rpwderror.style.color="green";
        flag=flag+1;
          
    } 
    else{
        rpwderror.innerHTML="Error!!!..Not Matching..";
        rpwderror.style.color="red";
        flag=0;
    }
 if (flag==4){
       return true;
        }
 else{
       return false;
 }

    }



