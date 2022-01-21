const Name = document.querySelector('#Name');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const myBtn = document.querySelector('#myBtn');
const form = document.querySelector('form')
const formInner = {Name, email, age};

const check_Name = (obj) => {
    if(obj.Name != null && obj.Name.length >= 2){
        Name.classList.add('.OK')
      }else {
        Name.classList.add(".checkValue")
  } };

const check_email = (obj) => {
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (String(obj.email).match(mailformat)){
  console.log('valid email')
}
else {
  console.log('check email value')
}
};


const check_age = (obj) => {
  const numbers = /^[0-9]+$/;
  if(String(obj.age).match(numbers)){
    if(obj.age != null && obj.age.length >= 1){
        console.log("valid age");
      } }
      else {
    console.log('check age value');
  }
  };

  Name.addEventListener('focusout', (event) => {
      if (Name.value.length <=2 || Name.value=='' ) {
        // event.target.style.background = 'pink';
    Name.classList.replace('OK', 'checkValue');
}   else {
    event.target.style.background = 'seagreen';
    Name.classList.replace('checkValue', 'OK');
}
  });


window.onload=function(){


  const Validate = (obj) => {
    for (let value in obj) {
 
  if (obj[value] == 'Name') {
    check_Name(obj);
  }; 
  if (obj[value] == 'email') {
    check_email(obj);
  };
  if (obj[value] == 'age') {
    check_age(obj);
  };
} 
  }

  
  


  form.addEventListener('submit', e=> {
      e.preventDefault();
   Validate(formInner)});
}

//   Name.addEventListener("keyup", check_Name(formInner));
//   email.addEventListener("keyup", check_email(formInner));
//   age.addEventListener("keyup", check_age(formInner));
  

 
