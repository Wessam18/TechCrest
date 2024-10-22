import React from 'react';
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ProductCard from "../components/productCard.jsx";
import { useEffect, useState } from "react";
import { Box } from "@mui/material";


const AccessoriesPage = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/products/category/accessory');
        const data = await response.json();
        setProducts(data);
      } catch {
        setError(true);
      }
    };

    fetchData();
  }, []);

  if (error) {
    return <Box>Something went wrong, please try again!</Box>;
  }

  return (
    <Container sx={{ mt: 2 }}>
      <Grid container spacing={8}>
        {products.map((p) => (
          <Grid item md={4} key={p._id}>
            <ProductCard {...p} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AccessoriesPage;
