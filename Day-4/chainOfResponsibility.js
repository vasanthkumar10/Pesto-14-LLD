// class PurchaseRequest {
//   constructor(amount) {
//     this.amount = amount;
//     this.details = "OIL COMPANY DEAL";
//   }
// }

// class Manager {
//   constructor() {
//     this.approvalLimit = 5000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request for the amount - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have the permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class VP {
//   constructor() {
//     this.approvalLimit = 50000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request for the amount - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have the permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class CEO {
//   constructor() {
//     this.approvalLimit = 500000;
//   }

//   processRequest(request) {
//     if (request.amount <= this.approvalLimit) {
//       console.log(
//         `${this.constructor.name} approved the purchase request for the amount - ${request.amount}`
//       );
//     } else {
//       console.log(
//         `${this.constructor.name} doesn't have the permission to approve - ${request.amount}`
//       );
//     }
//   }
// }

// class Director {
//   processRequest(request) {
//     console.log(
//       `${this.constructor.name} approved the purchase request for the amount - ${request.amount}`
//     );
//   }
// }

// const request = new PurchaseRequest(3000);

// // people
// const manager = new Manager();
// const vp = new VP();
// const ceo = new CEO();
// const director = new Director();

// // employee
// manager.processRequest(request);
// vp.processRequest(request);
// ceo.processRequest(request);
// director.processRequest(request);

// CHAIN OF RESPONSIBILITY
class PurchaseRequest {
  constructor(amount) {
    this.amount = amount;
    this.details = "OIL COMPANY DEAL";
  }
}

class Approver {
  constructor(approvalLimit) {
    this.approvalLimit = approvalLimit;
    this.boss = null;
    this.availability = true;
  }

  setBoss(boss) {
    this.boss = boss;
  }

  setAvailability(isAvailable) {
    if (this.constructor === Director) return;
    this.availability = isAvailable;
  }

  processRequest(request) {
    if (this.availability && request.amount <= this.approvalLimit) {
      console.log(
        `${this.constructor.name} approved the purchase request for the amount - ${request.amount}`
      );
    } else if (this.boss) {
      this.boss.processRequest(request);
    } else {
      console.log(
        `${this.constructor.name} doesn't have the permission to approve - ${request.amount}`
      );
    }
  }
}

class Manager extends Approver {
  constructor() {
    super(5000); // manager approval limit - 5000 rs
  }
}

class VP extends Approver {
  constructor() {
    super(50000); // VP approval limit - 50,000 rs
  }
}

class CEO extends Approver {
  constructor() {
    super(500000); // CEO approval limit - 5,00,000 rs
  }
}

class Director extends Approver {
  constructor() {
    super(Number.MAX_SAFE_INTEGER); // max no of approval limit
  }
}

// request
const request = new PurchaseRequest(400000);

// people
const manager = new Manager();
const vp = new VP();
const ceo = new CEO();
const director = new Director();

// build organisation
manager.setBoss(vp);
vp.setBoss(ceo);
ceo.setBoss(director);

// availability
ceo.setAvailability(false);
director.setAvailability(false);

// process
manager.processRequest(request);
