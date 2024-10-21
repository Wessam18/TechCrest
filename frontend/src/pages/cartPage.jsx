import React, { useContext } from "react";
import { cartContext } from "../context/cartContext"; // Make sure the path is correct
import { Box, Button, Typography, Card, CardContent, CardActions, CardMedia } from "@mui/material";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart, increaseQuantity, decreaseQuantity } = useContext(cartContext);
  console.log("Cart Items: ", cartItems);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">
          Your cart is empty. <Link to="/">Go back to shop</Link>
        </Typography>
      ) : (
        <Box>
          {cartItems.map((item) => (
            <Card key={item._id} sx={{ display: "flex", marginBottom: "10px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" }}>
              <CardMedia
                sx={{ width: 150, height: 150, objectFit: "contain" }}
                image={item.image1} // Display the image fetched from the database
                title={item.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6">{item.title}</Typography>
                <Typography variant="body2">
                  {item.price} EGP x {item.quantity} = {item.price * item.quantity} EGP
                </Typography>
              </CardContent>
              <CardActions sx={{ display: "flex", alignItems: "center" }}>
                <Button variant="contained" size="small"
                sx={{
                  backgroundColor: "rgb(2, 58, 2)",
                  fontWeight: "bold",
                  borderRadius: "5px",
                  width: "100%",
                  "&:hover": { backgroundColor: "green" },
                }}
                
                onClick={() => decreaseQuantity(item._id)}>
                  -
                </Button>
                <Button 
                  variant="contained" 
                  size="small" 
                  sx={{
                    backgroundColor: "rgb(2, 58, 2)",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    width: "100%",
                    "&:hover": { backgroundColor: "green" },
                  }}
                  onClick={() => increaseQuantity(item._id)}>
                  +
                </Button>
                <Button
                  variant="contained"
                  size="small"
                  sx={{
                    backgroundColor: "#D10024",
                    fontWeight: "bold",
                    borderRadius: "5px",
                    width: "100%",
                    "&:hover": { backgroundColor: "#a8001b" },
                  }}
                  onClick={() => removeFromCart(item._id)}
                >
                  Remove
                </Button>
              </CardActions>
            </Card>
          ))}
          <Typography variant="h6" sx={{ marginTop: "20px", fontWeight:"bold", fontSize: "35px" }}>
            Total: {totalAmount} EGP
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <Button 
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#D10024",
                fontWeight: "bold",
                borderRadius: "5px",
                width: "30%",
                "&:hover": { backgroundColor: "#a8001b" },
              }}
              onClick={clearCart}>
              Clear Cart
            </Button>
            <Button 
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "rgb(2, 58, 2)",
                fontWeight: "bold",
                borderRadius: "5px",
                width: "30%",
                "&:hover": { backgroundColor: "green" },
              }}>
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
