import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, Card, CardContent } from "@mui/material";
import axios from "axios";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:5000/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ padding: "20px" }}>
      {products.map((product) => (
        <Card key={product._id} sx={{ marginBottom: "10px" }}>
          <CardContent>
            <Link to={`/products/${product._id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <Typography variant="h6">{product.title}</Typography>
            </Link>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
};

export default ProductList;
