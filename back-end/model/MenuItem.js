module.exports = class MenuItem {
  _menuItemID;
  _name;
  _description;
  _picture;
  _price;

  constructor(name, description, picture, price) {
    this._name = name;
    this._description = description;
    this._picture = picture;
    this._price = price;
  }

  get menuItemID() {
    return this._menuItemID;
  }

  get name() {
    return this._name;
  }

  get description() {
    return this._description;
  }

  get picture() {
    return this._picture;
  }

  get price() {
    return this._price;
  }

  set menuItemID(menuItemID) {
    this._menuItemIDc = menuItemID;
  }

  set name(name) {
    this._name = name;
  }

  set description(description) {
    this._description = description;
  }

  set picture(picture) {
    this._picture = this.picture;
  }

  set price(price) {
    this._price = price;
  }
};
