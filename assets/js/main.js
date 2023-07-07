document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    const fullNameInput = document.querySelector('input[type="text"]');
    const emailInput = document.querySelector('input[type="email"]');
    const passwordInput = document.querySelector('input[type="password"]');
    
    form.addEventListener('submit', function(event) {
      event.preventDefault();
      
      const fullName = fullNameInput.value;
      const email = emailInput.value;
      const password = passwordInput.value;
      
      // Perform validation and further processing of the form data here
      
      console.log('Full Name:', fullName);
      console.log('Email:', email);
      console.log('Password:', password);
      
      // Reset the form after submission
      form.reset();
    });
  });
  
function showLoginForm() {
  document.getElementById('registration-form').style.display = 'none';
  document.getElementById('login-form').style.display = 'block';
}

function showRegistrationForm() {
  document.getElementById('login-form').style.display = 'none';
  document.getElementById('registration-form').style.display = 'block';
}

document.addEventListener('DOMContentLoaded', function() {
  const loginForm = document.getElementById('login-form');
  loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    
    const email = emailInput.value;
    const password = passwordInput.value;
    
    // Perform login logic here
    
    console.log('Email:', email);
    console.log('Password:', password);
    
    // Reset the form after submission
    loginForm.reset();
  });
});