import React, { useContext } from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import '../styles/wishlist.css'; // assuming your styles are in the same folder
import { wishlistContext } from "../context/wishlistContext"; // Make sure the path is correct
import { cartContext } from "../context/cartContext"; // Import cart context
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const WishlistPage = () => {
  const { wishlistItems, removeFromWishlist, clearWishlist } = useContext(wishlistContext);
  const { addToCart } = useContext(cartContext); // Use cart context to add to cart

  return (
    <Box sx={{ padding: "20px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold" }} gutterBottom>
        Wishlist
      </Typography>
      {wishlistItems.length === 0 ? (
        <Typography variant="body1">
          Your wishlist is empty. <Link to="/">Go back to shop</Link>
        </Typography>
      ) : (
        <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "flex-start" }}>
          {wishlistItems.map((item) => (
            <Box key={item._id} className="wishlist-item">
              <Card
                sx={{
                  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  border: "1px solid transparent",
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                  transition: "border 0.3s ease",
                  "&:hover": {
                    border: "2px solid #D10024",
                  },
                }}
              >
                <CardMedia
                  sx={{ height: 250, objectFit: "contain" }}
                  image={item.image1}
                  title={item.title}
                  component="img"
                />
                <CardContent sx={{ padding: "15px", flexGrow: 1 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ fontSize: "12px", marginBottom: "10px" }} />
                  <Typography
                    gutterBottom
                    variant="h6"
                    sx={{
                      textDecoration: "none",
                      color: "#333",
                      fontWeight: "bold",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    <Box component="span" sx={{ fontSize: "18px", fontWeight: "bold" }}>
                      {item.price} EGP
                    </Box>
                  </Typography>
                </CardContent>
                <CardActions
                  sx={{
                    padding: "10px",
                    backgroundColor: "#f8f8f8",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
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
                    onClick={() => {
                      addToCart(item._id, item.title, item.price, item.image1);
                    }}
                    startIcon={<ShoppingCartIcon />}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    variant="contained"
                    size="small"
                    sx={{
                      backgroundColor: "#D10024",
                      fontWeight: "bold",
                      width: "50%",
                      borderRadius: "5px",
                      "&:hover": { backgroundColor: "#a8001b" },
                    }}
                    onClick={() => removeFromWishlist(item._id)}
                  >
                    Remove
                  </Button>
                </CardActions>
              </Card>
            </Box>
          ))}
          <Box sx={{ display: "flex", justifyContent: "space-between", marginTop: "20px", width: "100%" }}>
            <Button
              variant="contained"
              size="small"
              sx={{
                backgroundColor: "#D10024",
                fontWeight: "bold",
                borderRadius: "5px",
                "&:hover": { backgroundColor: "#a8001b" },
              }}
              onClick={clearWishlist}
            >
              Clear Wishlist
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default WishlistPage;
