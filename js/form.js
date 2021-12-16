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
    email,
  );
};

const resetInputs = () => {
  form.reset();
  setTimeout(() => {
    const formControl = form.querySelectorAll('.form-control');
    formControl.forEach(item => (item.className = 'form-control'));
    window.location = 'index.html';
  }, 5000);
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

  if (errors.length > 0) {
    alert(errors);
  } else {
    Email.send({
      SecureToken: 'C973D7AD-F097-4B95-91F4-40ABC5567812',
      To: 'hcmwebs@hcmwebs.com',
      From: email.value,
      Subject: 'New contact from Web',
      Body:
        'Name: ' +
        fullname.value.trim() +
        '<br /> Email: ' +
        email.value.trim() +
        '<br /> Comments: ' +
        comments.value.trim(),
    }).then(message => alert('Thank you very much for contacting us.'));
  }
};

form.addEventListener('submit', e => {
  e.preventDefault();
  formValidation();
  resetInputs();
});
