const { v4 } = require("uuid");

class InMemoryCache {
  constructor(id) {
    this.cache = {
      id: v4(),
    };
  }

  get(key) {
    return this.cache[key];
  }

  set(key, value) {
    this.cache[key] = value;
  }

  has(key) {
    return key in this.cache;
  }

  remove(key) {
    if (this.has(key)) delete this.cache[key];
  }

  clear() {
    this.cache = {};
  }

  // singleton
  static getInstance(id) {
    if (!InMemoryCache.instance) {
      InMemoryCache.instance = new InMemoryCache(id);
    }
    return InMemoryCache.instance;
  }
}

// singleton
// const cache = new InMemoryCache(v4()); // common object -> creating only one object

// module.exports = {
//   cache,
// };

module.exports = {
  InMemoryCache,
};
