import React from "react";
import { Grid, Card, CardContent, Typography, Button } from '@mui/material';

const ProductComparison = () => {
  const products = [
    {
      name: "Sugar Free Gold Low Calorie",
      description: "Aspartame Sweetener",
      details: "bottle of 500 pellets",
      ratings: "Ratings: 4.5 * 3219",
      price: "Price: €282",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Sugar Free Green Stevia Sweetener",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Sugar Free Green Stevia Sweetener",
      description: "Syrup",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Acetylcycteine",
      description: "Tablets",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Bacitracin and Bentyl Drug",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Budesonide and formoterol",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Buprenorphine and Naloxone",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Dextroamphetamine",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Gabapentin enacarbil",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Mycophenolate mofetil",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Nirmatrelvir and ritonavir",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    {
      name: "Polyethylene glycol 3350",
      description: "Powder",
      details: "Jar of 200 gm Powder",
      ratings: "Ratings: 4.5 * 247",
      price: "Price: €200",
      sale: "Sale ends in 2 days",
    },
    
    // Add details for other products similarly
  ];

  const handleButtonClick = (productName) => {
    // Handle button click, you can perform actions here
    console.log(`Button clicked for: ${productName}`);
  };

  return (
    <Grid container spacing={3}>
      {products.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
          <Button onClick={() => handleButtonClick(product.name)} style={{ width: '100%', textDecoration: 'none' }}>
            <Card style={{ width: '100%' }}>
              <CardContent>
                <Typography variant="h6">{product.name}</Typography>
                <Typography variant="body2" color="textSecondary">{product.description}</Typography>
                {product.details && <Typography variant="body2" color="textSecondary">{product.details}</Typography>}
                <Typography variant="body2" color="textSecondary">{product.ratings}</Typography>
                <Typography variant="body2" color="textSecondary">{product.price}</Typography>
                <Typography variant="body2" color="textSecondary">{product.sale}</Typography>
              </CardContent>
            </Card>
          </Button>
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductComparison;