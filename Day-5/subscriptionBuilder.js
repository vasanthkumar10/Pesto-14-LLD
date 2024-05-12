class Subscription {
  constructor(builder) {
    this.plan = builder.plan;
    this.duration = builder.duration;
    this.autoRenew = builder.autoRenew;
    this.gst = builder.gst;
  }

  display() {
    console.log("Plan: ", this.plan);
    console.log("duration: ", this.duration);
    console.log("autoRenew: ", this.autoRenew);
    console.log("GST: ", this.gst);
  }
}

class SubscriptionBuilder {
  constructor() {
    this.plan = "Basic";
    this.duration = "3 months";
    this.autoRenew = false;
    this.gst = false;
  }

  setPlan(plan) {
    this.plan = plan;
    return this;
  }

  setDuration(duration) {
    this.duration = duration;
    return this;
  }

  enableGST() {
    this.gst = true;
    return this;
  }

  enableAutoRenew() {
    this.autoRenew = true;
    return this;
  }

  disableAutoRenew() {
    this.autoRenew = false;
    return this;
  }

  build() {
    return new Subscription(this);
  }
}

const basicPlan = new SubscriptionBuilder().build();
// console.log(basicPlan);

// const premiumPlan = new SubscriptionBuilder()
//   .setPlan("premium")
//   .enableAutoRenew()
//   .build();
// console.log(premiumPlan);

const enterprisePlan = new SubscriptionBuilder()
  .setPlan("enterprise")
  .setDuration("6 months")
  .enableAutoRenew()
  .enableGST()
  .build();
console.log(enterprisePlan);
