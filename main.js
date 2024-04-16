const inputEmail = document.querySelector('#email');

function validate(inputId, inputType){
  let n = inputId; // get input id
  let nInvalidMessage = inputId.parentNode.querySelector('.invalid-message');

  function addError (errorText){
    nInvalidMessage.innerText = `${errorText}`;
    nInvalidMessage.classList.add('activeMessage');
    inputId.classList.add('input-invalid');
  }
  function removeError (){
    nInvalidMessage.classList.remove('activeMessage');
    inputId.classList.remove('input-invalid');
  }

  // Email validation
  if (inputType == "email"){
    var rea = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*\.\w+$/;
    var Email = inputEmail.value;
    var x = rea.test(Email);

    if (inputId.value == "") {
      addError("Oops! Please add your email");
      return false;
    } else if(!x){
      addError("Oops! That doesn't look like an email address");
      return false;
    }
    else{
      removeError();
      return true;
    }
  }
  
}

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission

    let isValidEmail = validate(inputEmail, 'email');
  
    // If all the fiealds are valid - show success message
    if(isValidEmail){
      //showSuccessMessage();
    }
  
  });