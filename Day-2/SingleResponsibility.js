// Single Responsibility Principle -> each class or fn must have only one reason to change or one operation to perform

class Item {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  calculateTotalPrice() {
    return this.price * this.quantity;
  }
}

class Order {
  constructor() {
    this.items = [];
    this.status = "pending";
  }

  addItem(item) {
    this.items.push(item);
  }

  removeItem(itemId) {
    this.items.pop();
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.items.forEach((item) => {
      totalPrice += item.calculateTotalPrice();
    });
    return totalPrice;
  }
}

class PaymentProcessor {
  payCredit(cardNumber, order) {
    console.log(
      `Processing the credit payment using card number ${cardNumber}`
    );
    // assume succeeded
    const orderStatus = true;
    if (orderStatus) order.status = "paid";
    else order.status = "failed";
  }

  payDebit(cardNumber, order) {
    console.log(`Processing the debit payment using card number ${cardNumber}`);
    // assume succeeded
    const orderStatus = true;
    if (orderStatus) order.status = "paid";
    else order.status = "failed";
  }
}

const tomato = new Item("tomato", 50, 2);
const onion = new Item("onion", 20, 3);

const order = new Order();
order.addItem(tomato);
order.addItem(onion);
// console.log(order.getTotalPrice());

console.log(order);
console.log("=".repeat(50));
const paymentProcessor = new PaymentProcessor();
paymentProcessor.payDebit("1234 5678 9012", order);
console.log("=".repeat(50));
console.log(order);
