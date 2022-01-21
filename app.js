const Name = document.querySelector('#name');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const myBtn = document.querySelector('#myBtn');

const formInner = {Name, email, age};


const check_Name = (obj) => {
    if(obj.Name != null && obj.Name.length >= 2){
        console.log("valid Name");
      }else {
    console.log('check Name value');
  } };

const check_email = (obj) => {
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if (obj.email.match(mailformat)){
  console.log('valid email')
}
else {
  console.log('check email value')
}
};


const check_age = (obj) => {
  const numbers = /^[0-9]+$/;
  if(obj.age.match(numbers)){
    if(obj.age != null && obj.age.length >= 1){
        console.log("valid age");
      } }
      else {
    console.log('check age value');
  }
  };
