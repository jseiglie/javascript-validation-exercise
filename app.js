const Name = document.querySelector('#Name');
const email = document.querySelector('#email');
const age = document.querySelector('#age');
const myBtn = document.querySelector('#myBtn');
const form = document.querySelector('#form')
const formInner = { Name, email, age };

//regExp
const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const numbers = /^[0-9]+$/;
const letras = /^[a-zA-Z ]+$/;


window.onload = function () { }

const check_Name = (obj) => {
  if (obj.Name != null && obj.Name.length >= 2) {
    Name.classList.add('.OK')
  } else {
    Name.classList.add(".checkValue")
  }
};

const check_email = (obj) => {
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (String(obj.email).match(mailformat)) {
    console.log('valid email')
  }
  else {
    console.log('check email value')
  }
};


const check_age = (obj) => {
  const numbers = /^[0-9]+$/;
  if (String(obj.age).match(numbers)) {
    if (obj.age != null && obj.age.length >= 1) {
      console.log("valid age");
    }
  }
  else {
    console.log('check age value');
  }
};

Name.addEventListener('focusout', (event) => {
  if (Name.value.match(letras) && String(Name.value).length > 2) {
    Name.classList.remove('checkValue')
    Name.classList.add('OK');
  } else {
    Name.classList.remove('OK');
    Name.classList.add('checkValue');
  }
});

age.addEventListener('focusout', (event) => {
  if (age.value.match(numbers) && age.value.length <= 2 && age.value>=18)  {
    age.classList.remove('checkValue')
    age.classList.add('OK');
  } else {
    age.classList.remove('OK');
    age.classList.add('checkValue');
  }
});
email.addEventListener('focusout', (event) => {
  if (email.value.match(mailformat)) {
    email.classList.remove('checkValue')
    email.classList.add('OK');
  } else {
    email.classList.remove('OK');
    email.classList.add('checkValue');
  }
});

const Validate = (obj) => {
  for (let value in obj) {

    if (obj[value] == 'Name') {
      check_Name(obj);
      console.log('aqui')
    };
    if (obj[value] == 'email') {
      check_email(obj);
    };
    if (obj[value] == 'age') {
      check_age(obj);
    };
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  if (
    Name.classList.contains('OK') &&
    age.classList.contains('OK') &&
    email.classList.contains('OK')
  ) {
    console.log('All looks good');
    alert('Form away');
  } else {
    console.log('Check values');
    alert('Something seems fishy');

  }
});
  //  Validate(formInner);});

//   Name.addEventListener("keyup", check_Name(formInner));
//   email.addEventListener("keyup", check_email(formInner));
//   age.addEventListener("keyup", check_age(formInner));