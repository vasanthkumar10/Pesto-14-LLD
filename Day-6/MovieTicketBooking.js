class Seat {
  constructor(name) {
    this.name = name;
    this.price = 100;
    this.isBooked = false;
  }

  book() {
    this.isBooked = true;
  }

  unbook() {
    this.isBooked = false;
  }
}

class Screen {
  constructor(screenNumber, rows, cols) {
    this.screenNumber = screenNumber;
    this.seats = this.generateSeats(rows, cols);
  }

  generateSeats(rows, cols) {
    const seats = [];
    for (let i = 1; i <= rows; i++) {
      for (let j = 1; j <= cols; j++) {
        const seat = new Seat(`${String.fromCharCode(64 + i)}${j}`);
        seats.push(seat);
      }
    }
    return seats;
  }

  getOverlappingSeats(seatNames) {
    const overLappingSeats = [];
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat && seat.isBooked) overLappingSeats.push(seat);
    }
    return overLappingSeats;
  }

  getAvailableSeats() {
    return this.seats.filter((seat) => !seat.isBooked);
  }

  bookSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.book();
      else {
        console.log(`Selected seat - ${seatName} is not available`);
      }
    }
  }

  releaseSeats(seatNames) {
    for (let seatName of seatNames) {
      const seat = this.seats.find((seat) => seat.name === seatName);
      if (seat) seat.unbook();
      else {
        console.log(`Selected seat - ${seatName} is not available`);
      }
    }
  }
}

class Show {
  constructor(movie, duration, startTime, screen) {
    this.movie = movie;
    this.duration = duration;
    this.startTime = startTime;
    this.screen = screen;
  }
}

class Theatre {
  constructor(name, location) {
    this.name = name;
    this.location = location;
    this.shows = [];
    this.screens = [];
  }

  addScreen(screen) {
    this.screens.push(screen);
  }

  addShow(show) {
    this.shows.push(show);
  }

  getAvailableShows() {
    const currentTime = new Date();
    const availableShows = this.shows.filter(
      (show) => new Date(show.startTime) > currentTime
    );
    return availableShows;
  }
}

class UserSession {
  constructor(name, screen) {
    this.user = name;
    this.screen = screen;
    this.selectedSeats = [];
    this.paymentAttempt = 0;
    this.MAX_PAYMENT_ATTEMPT = 3;
  }

  selectSeats(seatNames) {
    const overLappingSeats = this.screen.getOverlappingSeats(seatNames);
    if (overLappingSeats.length) {
      const overLappingSeatNames = overLappingSeats.map((seat) => seat.name);
      console.log(
        `Hey ${this.user}, Some of your seats are already booked. Conflicting seats: ${overLappingSeatNames}`
      );
      return;
    }
    this.selectedSeats = seatNames;
    this.screen.bookSeats(seatNames);
  }

  makePayment() {
    if (!this.selectedSeats.length) {
      console.log(`No seats selected by ${this.user}.`);
      return;
    }
    // assuming
    const paymentSuccess = true;
    if (paymentSuccess) {
      console.log(
        `Payment succeeded for ${this.user}. Alloted seats:  ${this.selectedSeats}`
      );
    } else {
      this.paymentAttempt++;
      console.log(
        `Payment failed for ${this.user}. Remaining attempts: ${
          this.MAX_PAYMENT_ATTEMPT - this.paymentAttempt
        }`
      );

      if (this.paymentAttempt >= this.MAX_PAYMENT_ATTEMPT) {
        console.log(
          `Maximum retries are completed. Releasing the seats: ${this.selectedSeats}`
        );
        this.screen.releaseSeats(this.selectedSeats);
      }
    }
  }
}

// theatre
const pvr = new Theatre("PVR cinemas", "Koramangala");

// // screen
const screen1 = new Screen(1, 4, 2);
const screen2 = new Screen(2, 4, 3);

pvr.addScreen(screen1);
pvr.addScreen(screen2);

// show
const morningShow = new Show(
  "KGF",
  180,
  new Date("2024-05-14T10:00"),
  pvr.screens[0]
);
const afternoonShow = new Show(
  "KGF",
  180,
  new Date("2024-05-14T14:00"),
  pvr.screens[1]
);
const midnightShow = new Show(
  "KGF",
  180,
  new Date("2024-05-14T23:30"),
  pvr.screens[1]
);

pvr.addShow(morningShow);
pvr.addShow(afternoonShow);
pvr.addShow(midnightShow);

// console.log(pvr.getAvailableShows());

// user
// const rahul = new UserSession("Rahul", pvr.shows[2].screen);
// rahul.selectSeats(["A1", "A2"]);
// rahul.makePayment();
// rahul.makePayment();
// rahul.makePayment();

// console.log(pvr.shows[2].screen.getAvailableSeats());

// 2 users are logging in and booking different seats
// const aniket = new UserSession("Aniket", pvr.shows[2].screen);
// const vaibhav = new UserSession("Vaibhav", pvr.shows[2].screen);

// aniket.selectSeats(["A1", "A2"]);
// console.log(`Seat selected by ${aniket.user}: ${aniket.selectedSeats}`);

// vaibhav.selectSeats(["B1", "B2"]);
// console.log(`Seat selected by ${vaibhav.user}: ${vaibhav.selectedSeats}`);
// // console.log(pvr.shows[2].screen.getAvailableSeats());

// aniket.makePayment();
// vaibhav.makePayment();

// 2 users are logging in and booking same seats
const aniket = new UserSession("Aniket", pvr.shows[2].screen);
const vaibhav = new UserSession("Vaibhav", pvr.shows[2].screen);

aniket.selectSeats(["A1", "A2"]);
console.log(`Seat selected by ${aniket.user}: ${aniket.selectedSeats}`);

vaibhav.selectSeats(["A1", "A2"]);
console.log(`Seat selected by ${vaibhav.user}: ${vaibhav.selectedSeats}`);
// console.log(pvr.shows[2].screen.getAvailableSeats());

aniket.makePayment();
vaibhav.makePayment();
