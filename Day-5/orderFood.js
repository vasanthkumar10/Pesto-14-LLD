class FoodOrder {
  constructor(menuItems, deliveryAddress, msg, phoneNo, cutlery = false) {
    this.menuItems = menuItems;
    this.deliveryAddress = deliveryAddress;
    this.msg = msg;
    this.phoneNo = phoneNo;
    this.cutlery = cutlery;
  }

  display() {
    console.log("Menu Item: ", this.menuItems);
    console.log("Delivery Address: ", this.deliveryAddress);
    console.log("Message: ", this.msg);
    console.log("Phone no: ", this.phoneNo);
    console.log("Cutlery: ", this.cutlery);
  }
}

// order
const order = new FoodOrder(
  ["Briyani", "Curd Rice"],
  "chennai",
  "",
  "9876543210",
  false
);

console.log(order);
