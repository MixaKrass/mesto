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
  
  /* на прошлом ревью перепутал и удалил не там метод close. из-за этого и получилась новая ошибка) */
}