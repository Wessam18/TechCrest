import React, { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import { SingleProductContext } from "../context/SingleProductContext";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Button from '@mui/material/Button';
import { cartContext } from "../context/cartContext";

const SingleProductPage = () => {
  const { productId } = useParams(); // Get the product ID from the URL
  const { selectedProduct, fetchProductById } = useContext(SingleProductContext);
  const { addToCart } = useContext(cartContext); // Use cart context to add product to cart

  useEffect(() => {
    fetchProductById(productId); // Fetch the product when the component mounts
  }, [productId]);

  if (!selectedProduct) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <Box sx={{ padding: "20px" }}>
      <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "20px" }}>
        <CardMedia
          sx={{ height: 300, width: 300, objectFit: "contain" }}
          image={selectedProduct.image1}
          title={selectedProduct.title}
          component="img"
        />
        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            {selectedProduct.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {selectedProduct.description}
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Price: {selectedProduct.price} EGP
          </Typography>
        </CardContent>
        <Button
          variant="contained"
          color="primary"
          sx={{ marginTop: "20px" }}
          startIcon={<ShoppingCartIcon />}
          onClick={() => addToCart(selectedProduct._id, selectedProduct.title, selectedProduct.price, selectedProduct.image1)}
        >
          Add to Cart
        </Button>
      </Card>
    </Box>
  );
};

export default SingleProductPage;
