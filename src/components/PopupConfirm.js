import Popup from "./Popup.js";
export default class PopupConfirm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popupSelector.querySelector('.popup__container');
  }

  setSubmitAction(action) {
    this._submitHandler = action
  }

  setEventListeners() {
    super.setEventListeners()
    this._form.addEventListener('submit', evt => {
      evt.preventDefault()
      this._submitHandler()
    })
  }
  
  close() {
    super.close()
    this._form.removeEventListener('submit', this._submitHandler)
  }
}