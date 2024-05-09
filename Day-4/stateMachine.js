// define states

const states = {
  INITIALIZED: "initialized",
  PENDING: "pending",
  PROCESSING: "processing",
  COMPLETED: "completed",
  FAILED: "failed",
  REVERSED: "reversed",
};

// state machine
const transitions = {
  [states.INITIALIZED]: {
    initiate: states.PENDING,
  },
  [states.PENDING]: {
    process: states.PROCESSING,
    fail: states.FAILED,
  },
  [states.PROCESSING]: {
    complete: states.COMPLETED,
    fail: states.FAILED,
    reverse: states.REVERSED,
  },
  [states.COMPLETED]: {
    refund: states.PROCESSING,
  },
  [states.FAILED]: {
    retry_customer: states.PENDING,
    retry_bank: states.PROCESSING,
  },
};

// initialize the state
let currentState = states.INITIALIZED;

// to handle the transitions
function transition(event) {
  const nextState = transitions[currentState][event];
  //   console.log(nextState);
  if (nextState) {
    console.log(`Transitioning from ${currentState} to ${nextState}`);
    currentState = nextState;
  } else {
    console.log(`Invalid transition from ${currentState} to ${event}`);
  }
}

function simulatePayment() {
  transition("initiate");
  transition("process");
  //   transition("complete");
  transition("refund");
  transition("reverse");
}

simulatePayment();
