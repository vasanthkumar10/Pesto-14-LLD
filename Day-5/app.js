const express = require("express");
const { getProductData } = require("./product");
const { getUserData } = require("./user");

const app = express();

app.get("/", (req, res) => res.send("<h1>Home Page</h1>"));

app.get("/product/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getProductData(id);
  return res.send(data);
});

app.get("/user/:id", async (req, res) => {
  const { id } = req.params;
  const data = await getUserData(id);
  return res.send(data);
});

app.listen(3000, () => console.log("Listening to 3000...."));
