const objects = {
  formSelector: '.popup__form',
  inputSelector: '.popup__input',
  submitButtonSelector: '.popup__button',
  inactiveButtonClass: 'popup__button_disabled',
  inputErrorClass: 'popup__input_type_error',
  errorClass: 'popup__error_visible'
}  


const hasInvalidInput = (inputlist) => {
  return inputlist.some((inputElement) => {
    return !inputElement.validity.valid
  });
};

const toggleButtonState=(inputlist, buttonElement) => {
  if (hasInvalidInput(inputlist)) {
    buttonElement.classList.add(inactiveButtonClass);
    buttonElement.setAttribute('disabled', true);
  } else {
    buttonElement.classList.remove(inactiveButtonClass);
    buttonElement.removeAttribute('disabled');
  }
};

const showInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector('#${inputElement.id}-error');
  inputElement.classList.add(inputErrorClass);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(errorClass);
};


const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector('#${inputElement.id}-error');
  inputElement.classList.remove(inputErrorClass);
  errorElement.textContent = '';
  errorElement.classList.remove(errorClass);
};

const checkInput = (formElement, inputElement) => {
  if (inputElement.validity.valid) {
    hideInputError (formElement, inputElement);
  } else {
    showInputError (formElement, inputElement);
  }
}

const setInputListeners=(formElement) => {
  const inputlist = Array.from(formElement.querySelectorAll(inputSelector));
  const buttonElement = formElement.querySelector(submitButtonSelector);

  inputlist.forEach((inputElement) => {
    inputElement.addEventListener('input', () => {
      checkInput(formElement, inputElement);
      toggleButtonState(inputlist, buttonElement);
    });
    toggleButtonState(inputlist, buttonElement);
  }
  );
};


const enableValidation = () => {
  const formList=Array.from(document.querySelectorAll(formSelector));

formList.forEach((formElement) => {
  formElement.addEventListener('submit', (event) => {
    event.preventDefault();
  });
  setInputListeners(formElement);
}
);
};

enableValidation (objects);