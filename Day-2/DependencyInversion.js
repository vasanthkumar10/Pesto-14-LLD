// Dependency Inversion -> Service -> abstract -> Service

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

  pay(order) {
    throw new Error("Pay method is not implemented");
  }
}

class Authorization {
  verified = false;

  constructor() {
    if (this.constructor === Authorization) {
      throw new Error("Authorization is an abstract class");
    }
  }

  authorizePayment(otp) {
    throw new Error("authorizePayment method is not implemented");
  }
}

class SMSAuthorization extends Authorization {
  authorizePayment(otp) {
    console.log(`Authorizing the payment using SMS otp ${otp}`);
    this.verified = true;
  }
}

class EmailAuthorization extends Authorization {
  authorizePayment(otp) {
    console.log(`Authorizing the payment using Email otp ${otp}`);
    this.verified = true;
  }
}

// child should implement pay method
class CreditPaymentProcessor extends PaymentProcessor {
  constructor(cardNumber, auth) {
    super();
    this.cardNumber = cardNumber;
    this.auth = auth;
  }

  pay(order) {
    if (!this.auth.verified) throw new Error("Not authorized");
    console.log(
      `Processing the credit payment using card number ${this.cardNumber}`
    );
    // assume succeeded
    const orderStatus = true;
    if (orderStatus) order.status = "paid";
    else order.status = "failed";
  }
}

class DebitPaymentProcessor extends PaymentProcessor {
  constructor(cardNumber, auth) {
    super();
    this.cardNumber = cardNumber;
    this.auth = auth;
  }

  pay(order) {
    if (!this.auth.verified) throw new Error("Not authorized");
    console.log(
      `Processing the debit payment using card number ${this.cardNumber}`
    );
    // assume succeeded
    const orderStatus = true;
    if (orderStatus) order.status = "paid";
    else order.status = "failed";
  }
}

class GpayPaymentProcessor extends PaymentProcessor {
  constructor(mobileNumber) {
    super();
    this.mobileNumber = mobileNumber;
  }

  pay(order) {
    console.log(
      `Processing the Gpay payment using mobile number ${this.mobileNumber}`
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

// authorization
// const auth = new SMSAuthorization();
const auth = new EmailAuthorization();
auth.authorizePayment("1234");

const paymentProcessor = new CreditPaymentProcessor("1234 5678 9012", auth);
// const paymentProcessor = new DebitPaymentProcessor("1234 5678 9012", auth);
// const paymentProcessor = new GpayPaymentProcessor("1234567890");

paymentProcessor.pay(order);
console.log("=".repeat(50));
console.log(order);
