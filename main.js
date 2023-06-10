let id = (id) => document.getElementById(id); //Getting ids of all html elements
let flag=0;
let classes = (classes) => document.getElementsByClassName(classes);
var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; //regex for email validation
let username = id("username"),
  email = id("email"),
  phoneNo = id("PhoneNo")
  password = id("password"),
  cpassword = id("cpassword");            //Rendering the html elements to perform validation
  form = id("form"),
  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

form.addEventListener("submit", (e) => {   //Event listener to perform validation upon submitting the form
  e.preventDefault();

  engine(username, 0, "Username cannot be blank");
  engine(email, 1, "Email cannot be blank");
  engine(phoneNo,2,"PhoneNo cannot be blank and of 10 digits")  //accessing elements with serial number and default messages
  engine(password, 3, "Password cannot be blank");
  engine(cpassword, 4, "Password not matching");
});

let engine = (id, serial, message) => {
  if (id.value.trim() === "") {    //checking for blank commonly for all from internet help
    errorMsg[serial].innerHTML = message;
    id.style.border = "2px solid red";    //box style for incorrect input

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }
   else if(id==username && id.value.length<5){  //username validation
    errorMsg[serial].innerHTML = "Minimum username length is 5";
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";
  }
   else if(id==email && !id.value.match(validRegex)){ //email validation

    errorMsg[serial].innerHTML = "Invalid email please put a @";
    id.style.border = "2px solid red";

    // icons
    failureIcon[serial].style.opacity = "1";
    successIcon[serial].style.opacity = "0";

  }
   else if(id==phoneNo && (id.value.length<10||id.value=="123456789")){ //phone number validation

     errorMsg[serial].innerHTML = "Phone number should be of 10 digits and not be 123456789";
     id.style.border = "2px solid red";
 
     // icons
     failureIcon[serial].style.opacity = "1";
     successIcon[serial].style.opacity = "0";
 
   }
    else if(id==password && (id.value=="password"||id.value.length<8)){ //password validation

     errorMsg[serial].innerHTML = "Invalid password ,minimum 8 characters and should not match username or be `password`";
     id.style.border = "2px solid red";
 
     // icons
     failureIcon[serial].style.opacity = "1";
     successIcon[serial].style.opacity = "0";
 
   }
   else if(id==cpassword && password.value!=cpassword.value){
    errorMsg[serial].innerHTML = "Passwords are not matching";
     id.style.border = "2px solid red";
 
     // icons
     failureIcon[serial].style.opacity = "1";
     successIcon[serial].style.opacity = "0";
   }
  else {
    errorMsg[serial].innerHTML = "";
    id.style.border = "2px solid green"; //style for correct input in box
    flag=1;
    // icons
    failureIcon[serial].style.opacity = "0";
    successIcon[serial].style.opacity = "1";
  }
  if(flag==1)
  alert("You are a human!");

};





