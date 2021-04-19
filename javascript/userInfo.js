export default class UserInfo{
  constructor(data) {
    this._data = data
  }

  getUserInfo(){
    return{
      name: this._data.name.textContent,
      about: this._data.about.textContent
    }
  }

  setUserInfo(newData){
    this._data.name.textContent = newData.name
    this._data.about.textContent = newData.about
  }
}