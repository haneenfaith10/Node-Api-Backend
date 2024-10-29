const express = require("express");
const productRoutes = require("./product.route.js");
const adminRoutes = require("./admin.route.js");
const customerRoutes = require("./customer.route.js");
const serviceRoutes = require("./service.route.js");

const router = express.Router();

// ROUTES
router.use("/products", productRoutes);
router.use("/admins", adminRoutes);
router.use("/customers", customerRoutes);
router.use("/services", serviceRoutes);

module.exports = router;
