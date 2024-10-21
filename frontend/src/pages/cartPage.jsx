// cartPage.jsx
import React, { useContext } from "react";
import { cartContext } from "../context/cartContext"; // Make sure the path is correct
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cartItems, removeFromCart, clearCart } = useContext(cartContext);
  console.log("Cart Items: ", cartItems);

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" gutterBottom>
        Shopping Cart
      </Typography>
      {cartItems.length === 0 ? (
        <Typography variant="body1">
          Your cart is empty. <Link to="/">Go back to shop</Link>
        </Typography>
      ) : (
        <Box>
          {cartItems.map((item) => (
            <Box
              key={item._id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "10px",
              }}
            >
              <Box>
                <Typography variant="body1">{item.title}</Typography>
                <Typography variant="body2">
                  {item.price} EGP x {item.quantity}
                </Typography>
              </Box>
              <Button
                variant="outlined"
                color="secondary"
                onClick={() => removeFromCart(item._id)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Typography variant="h6" sx={{ marginTop: "20px" }}>
            Total: {totalAmount} EGP
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px" }}>
            <Button variant="contained" color="primary" onClick={clearCart}>
              Clear Cart
            </Button>
            <Button variant="contained" color="secondary">
              Proceed to Checkout
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CartPage;
