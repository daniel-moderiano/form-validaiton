// Add the nonvalidate attribute when the JS loads to avoid loss of validation if JS fails to load
const form = document.querySelector('form');
const formInputs = document.querySelectorAll('input');
const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

const country = document.querySelector('#country');
const countryError = document.querySelector('.country-error');

const zip = document.querySelector('#zip');
const zipError = document.querySelector('.zip-error');

const password = document.querySelector('#password');
const passwordError = document.querySelector('.pass-error');

const passwordConf = document.querySelector('#password-conf');
const passConfError = document.querySelector('.pass-conf-error');

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

function showCountryError() {
  if(country.validity.valueMissing) {
    countryError.textContent = 'You need to enter a country name';
  } else if(country.validity.patternMismatch) {
    countryError.textContent  = 'Entered value cannot contain numbers';
  } else if(country.validity.tooShort) {
    countryError.textContent  = `Country should be at least ${ country.minLength } characters; you entered ${ country.value.length }.`;
  }

  countryError.classList.add('active');
}

function showZipError() {
  if(zip.validity.valueMissing) {
    zipError.textContent = 'You need to enter a zip code';
  } else if(zip.validity.patternMismatch) {
    zipError.textContent = "Zip code must 4 numerical digits only";
  }
  zipError.classList.add('active');
}

function showPasswordError() {
  if(password.validity.valueMissing) {
    passwordError.textContent = 'You need to enter a password';
  } else if(password.validity.patternMismatch) {
    passwordError.textContent = "Password must be 8-15 characters in length";
  }
  passwordError.classList.add('active');
} 

function showPassConfError() {
  if(passwordConf.validity.valueMissing) {
    passConfError.textContent = 'You must re-enter your password';
  }
  passConfError.classList.add('active');
} 

function comparePasswords() {
  return password.value === passwordConf.value;
}


// Listens for a user clicking out of an input field in the form
form.addEventListener('focusout', (e) => {
  if (!e.target.nodeName === 'INPUT') {
    return;  }

  if (e.target.id === 'email') {
    // Execute validation check here
    if (e.target.validity.valid) {
      // Code to execute for valid input
      emailError.textContent = "";
      emailError.classList.remove('active');
    } else {
      // show error
      showEmailError();
    }
  }
  if (e.target.id === 'country') {
    if (e.target.validity.valid) {
      countryError.textContent = "";
      countryError.classList.remove('active');
    } else {
      showCountryError();
    }
  }
  if (e.target.id === 'zip') {
    if (e.target.validity.valid) {
      zipError.textContent = "";
      zipError.classList.remove('active');
    } else {
      showZipError();
    }
  }
  if (e.target.id === 'password') {
    // Execute validation check here
    if (e.target.validity.valid) {
      passwordError.textContent = "";
      passwordError.classList.remove('active');
    } else {
      showPasswordError();
    }
  }
  if (e.target.id === 'password-conf') {
    // Execute validation check here
    if (!e.target.validity.valid) {
      showPassConfError();
    } else if (!comparePasswords()) {
      passConfError.textContent = "Passwords do not match!";
      passConfError.classList.add('active');
    } else {
      passConfError.textContent = "";
      passConfError.classList.remove('active');
    }
  }
});


form.addEventListener('submit', function(e) {
  // Check for validity of all input fields
  formInputs.forEach(input => {
    if (!input.validity.valid) {
      // Show error message for each failed input

      e.preventDefault();
    }
  });
  
});
