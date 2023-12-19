module.exports = class OrderedItem {
  _orderedItemID;
  _orderID;
  _menuItemID;
  _price;
  _quantity;

  constructor(orderID, menuItemID, price, quantity) {
    this._orderID = orderID;
    this._menuItemID = menuItemID;
    this._price = price;
    this._quantity = quantity;
  }

  get OrderedItem() {
    return this._orderedItemId;
  }

  get orderID() {
    return this._orderID;
  }

  get menuItemID() {
    return this.menuItemID;
  }

  get price() {
    return this._price;
  }

  get quantity() {
    return this._quantity;
  }

  set orderedItemID(orderedItemID) {
    this._orderedItemID = orderedItemID;
  }

  set orderID(orderID) {
    this._orderID = orderID;
  }

  set menuItemID(menuItemID) {
    this.menuItemID = menuItemID;
  }

  set price(price) {
    this._price = price;
  }

  set quantity(quantity) {
    this._quantity = quantity;
  }
};
