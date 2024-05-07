class BaseAuthSystem {
  constructor() {
    if (this.constructor === BaseAuthSystem) {
      throw new Error("BaseAuthSystem is an abstract class");
    }
  }

  authenticate(username) {
    throw new Error("Authenticate method is not implemented");
  }
}

class GoogleAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using Google`);
  }
}

class GithubAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using Github`);
  }
}

class FacebookAuthProvider extends BaseAuthSystem {
  authenticate(username) {
    console.log(`Authenticating the user - ${username} using Facebook`);
  }
}

// facade layer
class Auth {
  constructor() {
    this.googleAuth = new GoogleAuthProvider();
    this.githubAuth = new GithubAuthProvider();
    this.fbAuth = new FacebookAuthProvider();
  }

  google(username) {
    this.googleAuth.authenticate(username);
  }

  github(username) {
    this.githubAuth.authenticate(username);
  }

  facebook(username) {
    this.fbAuth.authenticate(username);
  }
}

const auth = new Auth(); // only once -> singleton
auth.google("vasi");
auth.github("Nishtha");
auth.facebook("Mandeep");
