import express from "express";
import productsModel from '../models/productsModel.js';


import {
  getAllProducts,
  getAllProductsById,
} from "../services/productsService.js";

const router = express.Router();

// Fetch products by type (e.g., wearable, accessory, etc.)
router.get("/category/:type", async (req, res) => {
  const productType = req.params.type; // Extract the category type from the URL parameter
  try {
    const products = await productsModel.find({ type: productType }); // Query by type
    if (products.length === 0) {
      return res.status(404).json({ message: `No products found for type: ${productType}` });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error fetching products for type ${productType}:`, error);
    res.status(500).json({ message: "Server error" });
  }
});




router.get("/", async (req, res) => {
  try {
    const products = await getAllProducts();
    res.status(200).send(products);
  } catch {
    res.status(500).send("Something went wrong!");
  }
});



router.get("/:id", getAllProductsById);


export default router;
