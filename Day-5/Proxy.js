// proxy pattern

const shivam = {
  name: "shivam",
  age: 50,
};

const handler = {
  get(target, property) {
    // console.log("target", target);
    // console.log("property", property);
    if (property !== "age") return target[property];
  },

  set(target, property, newValue) {
    // console.log("target", target);
    // console.log("property", property);
    // console.log("newValue", newValue);
    if (property !== "age") target[property] = newValue;
  },
};

// vasanth is a proxy of shivam with limited access
const vasanth = new Proxy(shivam, handler);
// console.log(shivam.age, shivam.name);

console.log("name", vasanth.name);
console.log("age", vasanth.age);

vasanth.name = "Vasanth";
console.log("name", vasanth.name);

vasanth.age = 10;
console.log("age", vasanth.age);

console.log(shivam.age, shivam.name);
