module.exports = class OrderID {
  _orderID;
  _customerID;
  _orderStatus;
  _orderPlacedDate;
  _orderCompletedDate;

  constructor(customerID, orderStatus, orderPlacedDate, orderCompletedDate) {
    this._customerID = customerID;
    this._orderCompletedDate = orderCompletedDate;
    this._orderPlacedDate = orderPlacedDate;
    this.orderStatus = orderStatus;
  }

  get orderID() {
    return this._orderID;
  }

  get customerID() {
    return this._customerID;
  }

  get orderStatus() {
    return this._orderStatus;
  }

  get orderCompletedDate() {
    return this._orderCompletedDate;
  }

  get orderPlacedDate() {
    return this._orderPlacedDate;
  }

  set orderID(orderID) {
    this._orderID = orderID;
  }

  set customerID(customerID) {
    this._customerID = customerID;
  }

  set orderStatus(orderStatus) {
    this._orderStatus = orderStatus;
  }

  set orderCompletedDate(orderCompletedDate) {
    this._orderCompletedDate = orderCompletedDate;
  }

  set orderPlacedDate(orderPlacedDate) {
    this._orderPlacedDate = orderPlacedDate;
  }
};
