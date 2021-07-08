const form = document.getElementById('form');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const comments = document.getElementById('comments');
let errors = [];

const setErrorFor = (input, err) => {
  const formControl = input.parentElement;
  const small = formControl.querySelector('small');
  small.innerText = err;
  formControl.className = 'form-control error';
  errors.push(err);
};
const setSuccessFor = input => {
  const formControl = input.parentElement;
  formControl.className = 'form-control success';
};

const isEmail = email => {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
};

const formValidation = () => {
  const fullnameValue = fullname.value.trim();
  const emailValue = email.value.trim();
  const commentsValue = comments.value.trim();

  if (!fullnameValue) {
    setErrorFor(fullname, 'Please! fullname is required ');
  } else {
    setSuccessFor(fullname);
  }
  if (!emailValue) {
    setErrorFor(email, 'Please! Email is required ');
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, 'Oops! Please enter a valid email');
  } else {
    setSuccessFor(email);
  }
  if (!commentsValue) {
    setErrorFor(comments, 'Please! Comments are required ');
  } else {
    setSuccessFor(comments);
  }
  
};

form.addEventListener('submit', e => {
  e.preventDefault();
  formValidation();
});
