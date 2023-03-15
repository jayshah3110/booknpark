// const form = document.querySelector('form');
// form.addEventListener('submit', (event) => {
//   event.preventDefault(); // prevent form submission
  
//   // get form input values
//   const name = document.querySelector('.field.Name input').value;
//   const email = document.querySelector('.field.email input').value;
//   const password = document.querySelector('.field.password input').value;
//   const confirm = document.querySelector('.field.confirm input').value;
  
//   // check if input values are not empty
//   if (name.trim() === '') {
//     showError('.field.Name');
//   } else {
//     showSuccess('.field.Name');
//   }
//   if (email.trim() === '') {
//     showError('.field.email');
//   } else {
//     showSuccess('.field.email');
//   }
//   if (password.trim() === '') {
//     showError('.field.password');
//   } else {
//     showSuccess('.field.password');
//   }
//   if (confirm.trim() === '') {
//     showError('.field.confirm');
//   } else {
//     showSuccess('.field.confirm');
//   }
  
//   // check if password and confirm password match
//   if (password !== confirm) {
//     showError('.field.confirm', 'Passwords do not match');
//   } else {
//     showSuccess('.field.confirm');
//   }
  
//   // if all input values are valid, submit the form
//   if (name && email && password && confirm && password === confirm) {
//     form.submit();
//   }
// });

// // function to show error message
// function showError(selector, message = 'This field is required') {
//   const field = document.querySelector(selector);
//   const errorTxt = field.querySelector('.error-txt');
//   const errorIcon = field.querySelector('.error-icon');
//   field.classList.remove('success');
//   field.classList.add('error');
//   errorTxt.textContent = message;
//   errorIcon.style.display = 'block';
// }

// // function to show success feedback
// function showSuccess(selector) {
//   const field = document.querySelector(selector);
//   const errorTxt = field.querySelector('.error-txt');
//   const errorIcon = field.querySelector('.error-icon');
//   field.classList.remove('error');
//   field.classList.add('success');
//   errorTxt.textContent = '';
//   errorIcon.style.display = 'none';
// }


const form = document.querySelector("form");
nField = form.querySelector(".name"),
nInput = pField.querySelector("input"),
cField = form.querySelector(".confirm"),
cInput = pField.querySelector("input"),

eField = form.querySelector(".email"),
eInput = eField.querySelector("input"),
pField = form.querySelector(".password"),
pInput = pField.querySelector("input");


form.onsubmit = (e)=>{
  e.preventDefault(); //preventing from form submitting
  //if email and password is blank then add shake class in it else call specified function
  (nInput.value == "") ? nField.classList.add("shake", "error") : checkname();
  (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
  (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();
  (cInput.value == "") ? cField.classList.add("shake", "error") : checkconfirm();

  


  setTimeout(()=>{ //remove shake class after 500ms
    nField.classList.remove("shake");
    eField.classList.remove("shake");
    pField.classList.remove("shake");
    cField.classList.remove("shake");

  }, 500);
  nInput.onkeyup = ()=>{checkname();} //calling checkPassword function on pass input keyup
  eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
  pInput.onkeyup = ()=>{checkPass();}
  cInput.onkeyup = ()=>{checkconfirm();} //calling checkPassword function on pass input keyup
  

  function checkname(){
    if(nInput.value == ""){ //if pass is empty then add error and remove valid class
        nField.classList.add("error");
        nfield.classList.remove("valid");
      }else{ //if pass is empty then remove error and add valid class
        nField.classList.remove("error");
        nField.classList.add("valid");
      }
  }
  function checkEmail(){ //checkEmail function
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
    if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
      eField.classList.add("error");
      eField.classList.remove("valid");
      let errorTxt = eField.querySelector(".error-txt");
      //if email value is not empty then show please enter valid email else show Email can't be blank
      (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
    }else{ //if pattern matched then remove error and add valid class
      eField.classList.remove("error");
      eField.classList.add("valid");
    }
  }

  function checkPass(){ //checkPass function
    if(pInput.value == ""){ //if pass is empty then add error and remove valid class
      pField.classList.add("error");
      pField.classList.remove("valid");
    }else{ //if pass is empty then remove error and add valid class
      pField.classList.remove("error");
      pField.classList.add("valid");
    }
  }



  function checkconfirm(){
    const password = pInput.value;
    const confirm = cInput.value;
    if (password !== confirm) {
      showError('.field.confirm', 'Passwords do not match');
    } else {
      showSuccess('.field.confirm');
    }
  }
  
  //if eField and pField doesn't contains error class that mean user filled details properly
  if(!eField.classList.contains("error") && !pField.classList.contains("error")){
    window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
  }
}