// Add the nonvalidate attribute when the JS loads to avoid loss of validation if JS fails to load
const form = document.querySelector('form');
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

form.setAttribute('novalidate', "");

// Use individualised functions for each form input
function showEmailError() {
  // Check for different types of validity failure, and customise error textcontent based on this
  if(email.validity.valueMissing) {
    // If the field is empty,
    // display the following error message.
    emailError.textContent = 'You need to enter an e-mail address.';
  } else if(email.validity.typeMismatch) {
    // If the field doesn't contain an email address,
    // display the following error message.
    emailError.textContent  = 'Entered value needs to be an e-mail address.';
  } else if(email.validity.tooShort) {
    // If the data is too short,
    // display the following error message.
    emailError.textContent  = `Email should be at least ${ email.minLength } characters; you entered ${ email.value.length }.`;
  }

  emailError.classList.add('active');
}

// Listens for a user clicking out of an input field in the form
form.addEventListener('focusout', (e) => {
  if (!e.target.nodeName === 'INPUT') {
    return;  }

  if (e.target.id === 'email') {
    // Execute validation check here
    if (e.target.validity.valid) {
      // Code to execute for valid input
      console.log("valid");
      emailError.textContent = "";
      emailError.classList.remove('active');
    } else {
      // show error
      console.log("Invalid");
      showEmailError();
    }
  }
  if (e.target.id === 'country') {
    // Execute validation check here
  }
  if (e.target.id === 'zip') {
    // Execute validation check here
  }
  if (e.target.id === 'password') {
    // Execute validation check here
  }
  if (e.target.id === 'password-conf') {
    // Execute validation check here
  }
});

