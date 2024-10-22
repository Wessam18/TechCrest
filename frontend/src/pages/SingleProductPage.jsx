import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography, Card, CardMedia, CardContent, Grid } from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import axios from "axios";
import { cartContext } from "../context/cartContext";
import { wishlistContext } from "../context/wishlistContext";

const SingleProductPage = () => {
  const { productId } = useParams();

  // Debugging: Check the productId
  console.log("Product ID:", productId);

  // Check if productId is valid
  if (!productId) {
    return <Typography>Product ID is not defined.</Typography>;
  }

  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    const fetchProductById = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/products/${productId}`);
        setSelectedProduct(response.data);
      } catch (error) {
        console.error("Failed to fetch product", error);
      }
    };

    fetchProductById();
    return () => {
      setSelectedProduct(null);
    };
  }, [productId]);

  const { addToWishlist } = useContext(wishlistContext);

  if (!selectedProduct) {
    return <Typography>Loading...</Typography>;
  }

  const productImages = [selectedProduct.image1, selectedProduct.image2, selectedProduct.image3];

  return (
    <Box sx={{ padding: "20px" }}>
      <Card sx={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "65px 20px 20px 180px" }}>
        <Grid container spacing={2} sx={{ justifyContent: "center", mb: 2 }}>
          {productImages.map((image, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <CardMedia
                sx={{ height: 300, width: 300, objectFit: "contain" }}
                image={image}
                title={`${selectedProduct.title} - Image ${index + 1}`}
                component="img"
              />
            </Grid>
          ))}
        </Grid>

        <CardContent sx={{ textAlign: "center" }}>
          <Typography variant="h5" gutterBottom>
            {selectedProduct.title}
          </Typography>
          <Typography variant="body1" color="text.secondary">
            {selectedProduct.description}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ marginTop: "10px" }}>
            <strong>Details:</strong> {selectedProduct.details}
          </Typography>
          <Typography variant="h6" sx={{ marginTop: "10px" }}>
            Price: {selectedProduct.price} EGP
          </Typography>
        </CardContent>

        {/* Add to Cart button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(2, 58, 2)",
            "&:hover": { backgroundColor: "green" },
            margin: "10px",  // Set the same margin on all sides
            padding: "10px 20px", // Set uniform padding
          }}
          startIcon={<ShoppingCartIcon />}
          onClick={() =>
            addToCart(
              selectedProduct._id,
              selectedProduct.title,
              selectedProduct.price,
              selectedProduct.image1
            )
          }
        >
          Add to Cart
        </Button>

        {/* Add to Wishlist button */}
        <Button
          variant="contained"
          sx={{
            backgroundColor: "rgb(2, 58, 2)",
            "&:hover": { backgroundColor: "green" },
            margin: "10px",  // Set the same margin on all sides
            padding: "10px 20px", // Set uniform padding
          }}
          startIcon={<FavoriteBorderIcon />}
          onClick={() => addToWishlist(selectedProduct._id, selectedProduct.title, selectedProduct.price, selectedProduct.image1)}
        >
          Add to Wishlist
        </Button>
      </Card>
    </Box>
  );
};

export default SingleProductPage;
