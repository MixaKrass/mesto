export default class FormValidator {
  constructor(object, formElement) {
    this._object = object;
    this._formElement = formElement;
  }
  

  _hasInvalidInput(inputlist)  {
    return inputlist.some((inputElement) => {
      return !inputElement.validity.valid
    });
  };
  
  _toggleButtonState(inputlist, buttonElement)  {
    if (this._hasInvalidInput(inputlist)) {
      buttonElement.classList.add(this._object.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._object.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };
  
  _showInputError(inputElement)  {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._object.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._object.errorClass);
    console.log(showInputError)
  };
  
  
  
  _hideInputError(inputElement)  {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove( this._object.inputErrorClass);
    errorElement.classList.remove( this._object.errorClass);
    errorElement.textContent = "";
  };
  
  _checkInput(inputElement)  {
    if (inputElement.validity.valid) {
      this._hideInputError (inputElement);
    } else {
      this._showInputError (inputElement, inputElement.validationMessage);
    }
  }
  
  _setInputListeners()  {
    const inputlist = Array.from(this._formElement.querySelectorAll(this._object.inputSelector));
    const buttonElement = this._formElement.querySelector(this._object.submitButtonSelector);
  
    inputlist.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInput(inputElement);
        this._toggleButtonState(inputlist, buttonElement);
      });
      this._toggleButtonState(inputlist, buttonElement);
    }
    );
  };
  
  
  enableValidation () {
    this._setInputListeners();
  }
}