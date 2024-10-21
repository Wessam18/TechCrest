import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";
import { cartContext } from "../context/cartContext"; // Import cart context
import { wishlistContext } from "../context/wishlistContext"; // Import wishlist context
import { Link } from "react-router-dom"; // Import Link from react-router-dom

export default function ProductCard({ _id, title, image1, price, type }) {
  const { addToCart } = useContext(cartContext); // Use cart context to add to cart
  const { addToWishlist } = useContext(wishlistContext); // Use wishlist context to add to wishlist

  return (
    <Box
      sx={{
        margin: "20px",
        maxWidth: "320px",
        display: "flex",
        flexDirection: "column",
      }}
    >
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
        <Box className="product-img" sx={{ position: "relative" }}>
          <CardMedia
            sx={{ height: 250, objectFit: "contain" }}
            image={image1}
            title={title}
            component="img"
          />
        </Box>

        <CardContent
          sx={{
            padding: "15px",
            flexGrow: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ fontSize: "12px", marginBottom: "10px" }}
          >
            {type}
          </Typography>

          {/* Wrap the title in Link to navigate to the single product page */}
          <Typography
            gutterBottom
            variant="h6"
            component={Link}
            to={`/product/${_id}`} // Add Link to the product details page
            sx={{
              textDecoration: "none",
              color: "#333",
              fontWeight: "bold",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              "&:hover": { color: "#D10024" }, // Add hover effect to change title color
            }}
          >
            {title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            <Box component="span" sx={{ fontSize: "18px", fontWeight: "bold" }}>
              {price} EGP
            </Box>
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            {/* Icon buttons */}
            {[{ icon: <FavoriteBorderIcon fontSize="large" />, text: "Add to wishlist", action: () => addToWishlist(_id, title, price, image1) }, { icon: <CompareArrowsIcon fontSize="large" />, text: "Add to compare" }, { icon: <VisibilityIcon fontSize="large" />, text: "view" }].map(({ icon, text, action }, idx) => (
              <Box
                key={idx}
                sx={{
                  textAlign: "center",
                  position: "relative",
                  "&:hover .icon-text": {
                    opacity: 1,
                    transform: "translateY(0)",
                  },
                  "&:hover .icon-button": { color: "#D10024" },
                }}
              >
                <Typography
                  className="icon-text"
                  variant="caption"
                  component="div"
                  sx={{
                    fontSize: "14px",
                    transition: "opacity 0.3s, transform 0.3s",
                    opacity: 0,
                    position: "absolute",
                    bottom: "100%",
                    left: "50%",
                    transform: "translate(-50%, -8px)",
                    whiteSpace: "nowrap",
                    zIndex: 1,
                    backgroundColor: "black",
                    color: "white",
                    padding: "2px 5px",
                    borderRadius: "4px",
                  }}
                >
                  {text}
                </Typography>
                <IconButton 
                  className="icon-button" 
                  sx={{ fontSize: "large" }} 
                  onClick={action} // Call the action when the icon button is clicked
                >
                  {icon}
                </IconButton>
              </Box>
            ))}
          </Box>
        </CardContent>

        <CardActions
          sx={{
            padding: "10px",
            backgroundColor: "#f8f8f8",
            display: "flex",
            justifyContent: "center",
          }}
        >
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
            onClick={() => {
                console.log("Add to Cart clicked for product:", _id);
                addToCart(_id, title, price, image1);
            }}
            startIcon={<ShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
