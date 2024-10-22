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


// Fetch products by brand
router.get("/brand/:brand", async (req, res) => {
  const brandName = req.params.brand; // Extract the brand name from the URL parameter
  try {
    const products = await productsModel.find({ brand: brandName }); // Query by brand
    if (products.length === 0) {
      return res.status(404).json({ message: `No products found for brand: ${brandName}` });
    }
    res.status(200).json(products);
  } catch (error) {
    console.error(`Error fetching products for brand ${brandName}:`, error);
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
