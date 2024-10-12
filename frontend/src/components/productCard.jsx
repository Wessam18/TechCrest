import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
//import { useCart } from "../context/cart/cartContext.jsx";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Box } from "@mui/material";
import React from 'react';


export default function ProductCard({ _id, title, image1, price, type }) {
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
          border: "1px solid transparent", // Default border transparent
          display: "flex",
          flexDirection: "column",
          height: "100%",
          transition: "border 0.3s ease", // Transition for border on hover
          "&:hover": {
            border: "2px solid #D10024", // Change to your desired color on hover
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

          <Typography
            gutterBottom
            variant="h6"
            component="a"
            href="#"
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
            {[
              {
                icon: <FavoriteBorderIcon fontSize="large" />,
                text: "add to wishlist",
              },
              {
                icon: <CompareArrowsIcon fontSize="large" />,
                text: "add to compare",
              },
              {
                icon: <VisibilityIcon fontSize="large" />,
                text: "quick view",
              },
            ].map(({ icon, text }, idx) => (
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
                    fontSize: "14px", // Increased font size for text
                    transition: "opacity 0.3s, transform 0.3s",
                    opacity: 0,
                    position: "absolute",
                    bottom: "100%", // Position text above the icon
                    left: "50%",
                    transform: "translate(-50%, -8px)", // Adjust the vertical position above the icon
                    whiteSpace: "nowrap", // Prevents text from wrapping
                    zIndex: 1, // Ensure text appears above other elements
                    backgroundColor: "black", // Black background
                    color: "white", // White text color
                    padding: "2px 5px", // Padding around the text
                    borderRadius: "4px", // Rounded corners for the background
                  }}
                >
                  {text}
                </Typography>
                <IconButton className="icon-button" sx={{ fontSize: "large" }}>
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
            onClick={() => addItemToCart(_id)}
            startIcon={<ShoppingCartIcon />}
          >
            Add to Cart
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
