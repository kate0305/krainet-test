const form = document.querySelector('.contacts__form');
const name = document.querySelector('#name');
const nameError = document.querySelector('#name + .contacts__input_err');
const email = document.querySelector('#mail');
const emailError = document.querySelector('#mail + .contacts__input_err');
const message = document.querySelector('#message');
const messageError = document.querySelector('#message + .contacts__input_err');
const policy = document.querySelector('#policy');

const showError = (input, err, textError = 'Поле не может быть пустым.') => {
  if (input.validity.valueMissing) {
    err.textContent = textError;
    err.classList.add('contacts__input_err-show');
    input.classList.add('contacts__input_invalid');
  }
};

const showEmailError = () => {
  showError(email, emailError);
  if (email.validity.typeMismatch) {
    emailError.textContent = 'E-mail адрес введен неверно.';
    emailError.classList.add('contacts__input_err-show');
    email.classList.add('contacts__input_invalid');
  }
};

const showPolicyError = () => {
  if (policy.validity.valueMissing) {
    policy.classList.add('contacts__checkbox_err');
  }
};

export const handleInput = (input, err) => {
  input.addEventListener('focus', () => {
    err.innerHTML = '';
    err.classList.remove('contacts__input_err-show');
    input.classList.remove('contacts__input_invalid');
  });
};

export const handleCheckbox = () => {
  policy.addEventListener('focus', () => {
    policy.classList.remove('contacts__checkbox_err');
  });
};

const handleSubmit = async () => {
  const formData = Object.fromEntries(new FormData(form));

  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({
        ...formData,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.error(e);
  }
};

export const handleForm = () => {
  handleInput(name, nameError);
  handleInput(email, emailError);
  handleInput(message, messageError);
  handleCheckbox();

  form.addEventListener('submit', async (e) => {
    if (!name.validity.valid) {
      showError(name, nameError);
      e.preventDefault();
    }
    if (!email.validity.valid) {
      showEmailError();
      e.preventDefault();
    }
    if (!message.validity.valid) {
      showError(message, messageError);
      e.preventDefault();
    }
    if (!policy.validity.valid) {
      showPolicyError();
      e.preventDefault();
    }
    if (form.checkValidity()) {
      e.preventDefault();
      await handleSubmit();
      form.reset();
    }
  });
};
