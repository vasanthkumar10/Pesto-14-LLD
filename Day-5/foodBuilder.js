class FoodOrderBuilder {
  constructor() {
    this.menuItems = [];
    this.deliveryAddress = null;
    this.phoneNo = null;
    this.cutlery = false;
  }

  addMenuItem(item) {
    this.menuItems.push(item);
    return this;
  }

  addDeliveryAddress(address) {
    this.deliveryAddress = address;
    return this;
  }

  addPhoneNumber(number) {
    this.phoneNo = number;
    return this;
  }

  addCutlery(isRequired) {
    this.cutlery = isRequired;
    return this;
  }

  build() {
    return new FoodOrder(this);
  }
}

class FoodOrder {
  constructor(builderObj) {
    this.menuItems = builderObj.menuItems;
    this.deliveryAddress = builderObj.deliveryAddress;
    this.phoneNo = builderObj.phoneNo;
    this.cutlery = builderObj.cutlery;
  }

  display() {
    console.log("Menu Item: ", this.menuItems);
    console.log("Delivery Address: ", this.deliveryAddress);
    console.log("Phone no: ", this.phoneNo);
    console.log("Cutlery: ", this.cutlery);
  }
}

const order = new FoodOrderBuilder()
  .addCutlery(true)
  .addMenuItem("briyani")
  .addDeliveryAddress("Chennai")
  .addMenuItem("curd rice")
  .build();

// console.log(order);
order.display();
