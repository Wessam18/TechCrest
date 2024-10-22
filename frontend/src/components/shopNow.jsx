import { useEffect, useState, useContext } from 'react';
import { useLocation, Link } from 'react-router-dom'; // Import Link
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CompareArrowsIcon from '@mui/icons-material/CompareArrows';
import VisibilityIcon from '@mui/icons-material/Visibility';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Box from '@mui/material/Box';
import { cartContext } from '../context/cartContext'; // Import cart context
import { wishlistContext } from '../context/wishlistContext'; // Import wishlist context

const ShopNow = () => {
  const location = useLocation();
  const deal = location.state?.deal || null;
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state

  // Access cart and wishlist contexts
  const { addToCart } = useContext(cartContext);
  const { addToWishlist } = useContext(wishlistContext);

  // Fetch products from an API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products'); // Replace with your API
        const data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      } finally {
        setLoading(false); // Set loading to false after fetching
      }
    };

    fetchProducts();
  }, []);

  // Function to calculate the discounted price
  const applyDiscount = (price, discount) => {
    const discountPercentage = parseInt(discount);
    return price - (price * discountPercentage) / 100;
  };

  if (loading) {
    return <div>Loading products...</div>; // Loading message
  }

  if (error) {
    return <div>Something went wrong, please try again!</div>;
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Shop Now
      </Typography>
      {deal && (
        <Typography variant="h5" color="primary" gutterBottom>
          Today's Hot Deal: {deal.title}
        </Typography>
      )}

      <Grid container spacing={4}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product._id}>
            <Box
              sx={{
                margin: '20px',
                maxWidth: '320px',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Card
                sx={{
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  border: '1px solid transparent',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  transition: 'border 0.3s ease',
                  '&:hover': {
                    border: '2px solid #D10024',
                  },
                }}
              >
                <Box className="product-img" sx={{ position: 'relative' }}>
                  <CardMedia
                    sx={{ height: 250, objectFit: 'contain' }}
                    image={product.image1}
                    title={product.title}
                    component="img"
                  />
                </Box>

                <CardContent
                  sx={{
                    padding: '15px',
                    flexGrow: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Link to={`/product/${product._id}`} style={{ textDecoration: 'none' }}> {/* Link for product title */}
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="div"
                      sx={{
                        color: '#333',
                        fontWeight: 'bold',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical',
                        overflow: 'hidden',
                      }}
                    >
                      {product.title}
                    </Typography>
                  </Link>

                  <Typography color="textSecondary">
                    Original Price: {product.price.toFixed(2)} EGP
                    {deal && (
                      <span style={{ color: 'red' }}>
                        (After Discount: {applyDiscount(product.price, deal.discount).toFixed(2)} EGP)
                      </span>
                    )}
                  </Typography>

                  {deal && (
                    <Typography color="primary">
                      Discount: {deal.discount} off
                    </Typography>
                  )}

                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      marginTop: "10px",
                    }}
                  >
                    {[
                      { icon: <FavoriteBorderIcon fontSize="large" />, text: "add to wishlist", onClick: () => addToWishlist(product._id, product.title, product.price, product.image1) },
                      { icon: <CompareArrowsIcon fontSize="large" />, text: "add to compare" }, // Add comparison logic if needed
                      { icon: <Link to={`/product/${product._id}`}><VisibilityIcon fontSize="large" /></Link>, text: "view" }, // Link for quick view
                    ].map(({ icon, text, onClick }, idx) => (
                      <Box
                        key={idx}
                        sx={{
                          textAlign: "center",
                          position: "relative",
                          "&:hover .icon-text": { opacity: 1, transform: "translateY(0)" },
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
                        <IconButton className="icon-button" sx={{ fontSize: "large" }} onClick={onClick}>
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
                    startIcon={<ShoppingCartIcon />}
                    onClick={() => {
                      console.log("Add to Cart clicked for product:", product._id); // Changed to product._id
                      addToCart(product._id, product.title, product.price, product.image1); // Changed to product._id
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardActions>
              </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ShopNow;
