// Open Closed Principle -> Open for extension but closed for modification

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

// abstract class -> object cannot be created
class PaymentProcessor {
  constructor() {
    if (this.constructor === PaymentProcessor) {
      throw new Error("PaymentProcessor is an abstract class");
    }
  }

  pay(cardNumber, order) {
    throw new Error("Pay method is not implemented");
  }
}

// child should implement pay method
class CreditPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(
      `Processing the credit payment using card number ${cardNumber}`
    );
    // assume succeeded
    const orderStatus = true;
    if (orderStatus) order.status = "paid";
    else order.status = "failed";
  }
}

class DebitPaymentProcessor extends PaymentProcessor {
  pay(cardNumber, order) {
    console.log(`Processing the debit payment using card number ${cardNumber}`);
    // assume succeeded
    const orderStatus = true;
    if (orderStatus) order.status = "paid";
    else order.status = "failed";
  }
}

class GpayPaymentProcessor extends PaymentProcessor {
  pay(mobileNumber, order) {
    console.log(
      `Processing the Gpay payment using mobile number ${mobileNumber}`
    );
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
// const paymentProcessor = new CreditPaymentProcessor();
const paymentProcessor = new DebitPaymentProcessor();
paymentProcessor.pay("1234 5678 9012", order);
console.log("=".repeat(50));
console.log(order);
