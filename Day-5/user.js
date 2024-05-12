const axios = require("axios");
const { InMemoryCache } = require("./InMemoryCache");

const cache = InMemoryCache.getInstance();

async function getUserData(id) {
  if (cache.has(`User-${id}`)) {
    console.log("Getting the data from cache");
    return cache.get(`User-${id}`);
  }
  console.log("Getting data from server");
  const response = await axios.get(`https://reqres.in/api/Users/${id}`);
  console.log("Setting the data in cache");
  cache.set(`User-${id}`, response.data.data);
  console.log("After setting the cache", cache);
  return response.data.data;
}

module.exports = {
  getUserData,
};
