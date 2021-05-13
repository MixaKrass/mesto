export default class FormValidator {
  constructor(validationConfig, formElement) {
    this._validationConfig = validationConfig;
    this._formElement = formElement;
    this._buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
  }
  

  _hasInvalidInput(inputlist)  {
    return inputlist.some((inputElement) => {
      return !inputElement.validity.valid
    });
  };
  


  _toggleButtonState(inputlist, buttonElement)  {
    if (this._hasInvalidInput(inputlist)) {
      buttonElement.classList.add(this._validationConfig.inactiveButtonClass);
      buttonElement.setAttribute('disabled', true);
    } else {
      buttonElement.classList.remove(this._validationConfig.inactiveButtonClass);
      buttonElement.removeAttribute('disabled');
    }
  };
  
  _showInputError(inputElement)  {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.add(this._validationConfig.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._validationConfig.errorClass);
  };
  
  
  
  _hideInputError(inputElement)  {
    const errorElement = this._formElement.querySelector(`#${inputElement.id}-error`);
    inputElement.classList.remove( this._validationConfig.inputErrorClass);
    errorElement.classList.remove( this._validationConfig.errorClass);
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
    const inputlist = Array.from(this._formElement.querySelectorAll(this._validationConfig.inputSelector));
    const buttonElement = this._formElement.querySelector(this._validationConfig.submitButtonSelector);
  
    inputlist.forEach((inputElement) => {
      inputElement.addEventListener('input', () => {
        this._checkInput(inputElement);
        this._toggleButtonState(inputlist, buttonElement);
      });
      this._toggleButtonState(inputlist, buttonElement);
    }
    );
  };
  
  //удаление ошибок
deleteErrors() {
  this._inputList.forEach((input) => this._hideInputError(input));
}

disableSubmitButton() {
  this._buttonElement.classList.add( this._validationConfig.inactiveButtonClass);
  this._buttonElement.setAttribute('disabled', 'disabled');
} 

  enableValidation () {
    this._setInputListeners();
  }
}