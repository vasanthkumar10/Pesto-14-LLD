// Strategy Pattern  -> behaviour patterns which helps to decide the operation during runtime

const { generateId } = require("./utils");
const { LIFO, FIFO, RANDOM } = require("./Strategy");

class SupportTicket {
  constructor(customer, issue) {
    this.id = generateId();
    this.customer = customer;
    this.issue = issue;
  }
}

class CustomerSupport {
  constructor() {
    this.tickets = [];
  }

  create(customer, issue) {
    const ticket = new SupportTicket(customer, issue);
    this.tickets.push(ticket);
  }

  process(ticket) {
    console.log(
      `Processing the ticket ${ticket.id} from ${ticket.customer} for the issue ${ticket.issue}`
    );
  }

  ticketProcessor(strategy) {
    const tickets = strategy.orderTickets(this.tickets);
    tickets.forEach((ticket) => this.process(ticket));

    //     if (strategy === "FIFO") {
    //       this.tickets.forEach((ticket) => this.process(ticket));
    //     } else if (strategy === "LIFO") {
    //       this.tickets.reverse().forEach((ticket) => this.process(ticket));
    //     } else if (strategy === "RANDOM") {
    //       const shuffledTickets = this.tickets.sort(() => Math.random() - 0.5);
    //       shuffledTickets.forEach((ticket) => this.process(ticket));
    //     }
  }
}

// customer support
const crm = new CustomerSupport();

crm.create("vasi", "Where is my mutton briyani?");
crm.create("mohd", "When Ill get my order?");
crm.create("prathamesh", "One of the worst service");

// console.log(crm);
crm.ticketProcessor(FIFO);
console.log("=".repeat(150));
crm.ticketProcessor(LIFO);
console.log("=".repeat(150));
crm.ticketProcessor(RANDOM);
