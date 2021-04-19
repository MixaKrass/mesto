import Popup from "./popup.js";
export default class PopupWithForm extends Popup {
  constructor (popupSelector, callbackSubmitForm) {
    super(popupSelector);
    this._callbackSubmitForm = callbackSubmitForm;
    this._form = this._popupSelector.querySelector('.popup__form');
  }
  
  _getInputValues() {
    this._inputList = this._form.querySelectorAll('.popup__input');
    this._formValues = {};
    this._inputList.forEach(input => this._formValues[input.name] = input.value);
    return this._formValues;
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener('submit', (this._callbackSubmitForm))
  }

  close = () => {
    super.close()
    this._form.reset()
  }
}