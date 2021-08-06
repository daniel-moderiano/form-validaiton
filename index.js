// Add the nonvalidate attribute when the JS loads to avoid loss of validation if JS fails to load
const form = document.querySelector('form');

form.setAttribute('novalidate', "");

// Listens for a user clicking out of an input field in the form
form.addEventListener('focusout', (e) => {
  if (e.target.id === 'email') {
    // Execute validation check here
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