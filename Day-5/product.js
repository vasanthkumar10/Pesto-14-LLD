const axios = require("axios");
const { InMemoryCache } = require("./InMemoryCache");

const cache = InMemoryCache.getInstance();

async function getProductData(id) {
  if (cache.has(`product-${id}`)) {
    console.log("Getting the data from cache");
    return cache.get(`product-${id}`);
  }
  console.log("Getting data from server");
  const response = await axios.get(`https://reqres.in/api/products/${id}`);
  console.log("Setting the data in cache");
  cache.set(`product-${id}`, response.data.data);
  console.log("After setting the cache", cache);
  return response.data.data;
}

module.exports = {
  getProductData,
};
