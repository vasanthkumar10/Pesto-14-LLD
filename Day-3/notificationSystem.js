// Observer -> Object is subscribed to the store. Whenever store is changing, object has to be notified.
// Object act like an observer

class NotificationObserver {
  notifyUploadedVideo(channelName, videoTitle) {
    console.log(
      `${this.name}: ${channelName} uploaded a new video ${videoTitle}`
    );
  }

  notifyUpcomingVideo(channelName, videoTitle) {
    console.log(`${this.name}: ${channelName} next video ${videoTitle}`);
  }
}

// class Google extends NotificationObserver {

// }

class User extends NotificationObserver {
  constructor(name) {
    super();
    this.name = name;
  }
}

class NotificationSystem {
  notifyUploadedVideo(channelName, subscribers, videoTitle) {
    subscribers.forEach((subscriber) =>
      subscriber.notifyUploadedVideo(channelName, videoTitle)
    );
  }

  notifyUpcomingVideo(channelName, subscribers, videoTitle) {
    subscribers.forEach((subscriber) =>
      subscriber.notifyUpcomingVideo(channelName, videoTitle)
    );
  }
}

class YoutubeChannel {
  constructor(channelName, notifier) {
    this.channelName = channelName;
    this.subscribers = [];
    this.notifier = notifier;
  }

  subscribe(user) {
    console.log(`${user.name} subscribed to ${this.channelName}`);
    this.subscribers.push(user);
  }

  unsubscribe(user) {
    console.log(`${user.name} unsubscribed to ${this.channelName}`);
    this.subscribers = this.subscribers.filter(
      (subscriber) => subscriber !== user
    );
  }

  uploadVideo(videoTitle) {
    console.log("=".repeat(50));
    console.log(`New Video is uploaded by ${this.channelName}: ${videoTitle}`);
    console.log("=".repeat(50));
    this.notifier.notifyUploadedVideo(
      this.channelName,
      this.subscribers,
      videoTitle
    );
  }

  upcomingVideo(videoTitle) {
    console.log("=".repeat(50));
    console.log(`Upcoming video by ${this.channelName}: ${videoTitle}`);
    console.log("=".repeat(50));
    this.notifier.notifyUpcomingVideo(
      this.channelName,
      this.subscribers,
      videoTitle
    );
  }
}

// Users
const mayur = new User("Mayur");
const suresh = new User("Suresh");
const simha = new User("Simha");

// Notification System
const notifier = new NotificationSystem();

// Youtube Channel
const pesto = new YoutubeChannel("Pesto", notifier);
const vasi = new YoutubeChannel("Vasizebron", notifier);

pesto.subscribe(mayur);
pesto.subscribe(suresh);

pesto.uploadVideo("React class");

pesto.unsubscribe(suresh);

pesto.uploadVideo("Node class");

pesto.upcomingVideo("LLD class");
