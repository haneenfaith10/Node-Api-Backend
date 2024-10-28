const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");

const productRoutes = require("./routes/product.route.js");


// MIDDLEWARE
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ROUTES
app.use("/api/products", productRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Node Api");
});

mongoose
  .connect(
    "mongodb+srv://admin:vlxkE78oBlluzZSI@backenddb.ftubi.mongodb.net/Node-Api?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Error connecting to MongoDB");
  });