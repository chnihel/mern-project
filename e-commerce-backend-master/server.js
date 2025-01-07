// server.js
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path"); // to work with file paths
const port = 3000;
const app = express();
const cors = require("cors");

app.use(cors({
  origin:'https://mern-project-front-xi.vercel.app/',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
app.use(express.json()); // Middleware to parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

const categoryRoute = require("./routes/categoryRoute");
const subCategoryRoute = require("./routes/subCategoryRoute");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const adminRoute = require("./routes/adminRoute");
const providerRoute = require("./routes/providerRoute");
const customerRoute = require("./routes/customerRoute");
const commandeRoute = require("./routes/commandeRoute");
const factureRoute = require("./routes/factureRoute");
const orderRoute = require("./routes/orderRoute");

const connectDB = require("./database"); // Make sure database.js is properly set up
connectDB(); // Connect to the database

// Serve static files from the root directory (where correct-email.html and error-email.html are located)
app.use("/verification", express.static(path.join(__dirname, "verification")));
// Serve the 'storage' folder as a static folder
app.use("/storage", express.static(path.join(__dirname, "storage")));

// Set up routes
app.use("/api/categories", categoryRoute); // Route for categories
app.use("/api/subCategories", subCategoryRoute); // Route for subcategories
app.use("/api/product", productRoute);
app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/provider", providerRoute);
app.use("/api/customer", customerRoute);
app.use("/api/commande", commandeRoute);
app.use("/api/facture", factureRoute);
app.use("/api/order", orderRoute);

/* app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
}); */
module.exports = app;