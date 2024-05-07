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

const google = new GoogleAuthProvider();
const github = new GithubAuthProvider();

google.authenticate("mayur");
github.authenticate("mayur");
