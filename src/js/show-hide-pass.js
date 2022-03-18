const form = document.querySelector('form');
const eyeIcon = document.querySelector('.eye-icon');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  return false
});

eyeIcon.addEventListener('click', (e) => {
  // "jpr" is stand for "jquery"
  const jqrEyeIcon = $(eyeIcon);

  if (eyeIcon.classList.contains('fa-eye')) {
    jqrEyeIcon.removeClass('fa-eye');
    jqrEyeIcon.addClass('fa-eye-slash');
    jqrEyeIcon.css('right', '1.4rem');
    document.getElementById('password').type = 'text';
  } else {
    jqrEyeIcon.removeClass('fa-eye-slash');
    jqrEyeIcon.addClass('fa-eye');
    jqrEyeIcon.css('right', '1.5rem');
    document.getElementById('password').type = 'password';
  }
});