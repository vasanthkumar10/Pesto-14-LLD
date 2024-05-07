class TicketProcessingStrategy {
  constructor() {
    if (this.constructor === TicketProcessingStrategy) {
      throw new Error("TicketProcessingStrategy is an abstract class");
    }
  }

  orderTickets(username) {
    throw new Error("orderTickets method is not implemented");
  }
}

class FIFOStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets;
  }
}

class LIFOStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets.reverse();
  }
}

class RANDOMStrategy extends TicketProcessingStrategy {
  orderTickets(tickets) {
    return tickets.sort(() => Math.random() - 0.5);
  }
}

const FIFO = new FIFOStrategy();
const LIFO = new LIFOStrategy();
const RANDOM = new RANDOMStrategy();

module.exports = {
  FIFO,
  LIFO,
  RANDOM,
};
