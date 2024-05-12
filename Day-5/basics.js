class Myclass {
  data = 100;
  #privateData = 200; // private property

  demo() {
    console.log("demo");
  }

  // getters
  getPrivateData(auth) {
    // if(!auth.user.valid) return "Unauthorized"
    return this.#privateData;
  }

  // private method
  #privateMethod() {
    return "this is my private method";
  }

  callPrivateMethod(age = 1) {
    // conditions
    if (age < 18) return "Not eligible";
    return this.#privateMethod();
  }

  // setters
  setPrivateData(newData) {
    if (newData < 0) return;
    this.#privateData = newData;
  }

  static computeFee() {
    return `the fee is Rs.100`;
  }
}

// const lld = new Myclass();
// // console.log(lld.data);
// console.log(lld.getPrivateData());
// lld.setPrivateData(-300);
// console.log(lld.getPrivateData());
// console.log(Myclass.computeFee());
// // console.log(Myclass.#privateData); // cannot access outside the class
// console.log(lld.callPrivateMethod(20));

class Rectangle {
  constructor(width, height) {
    this._width = width;
    this._height = height;
  }

  // getters
  get width() {
    return this._width;
  }

  // setters
  set width(newWidth) {
    if (newWidth < 0) {
      console.log("Invalid width");
      return;
    }
    this._width = newWidth;
  }
}

const rectangle = new Rectangle(10, 20);
console.log(rectangle.width);
rectangle.width = 30;
console.log(rectangle.width);
