import React, { useState, useEffect } from 'react';
import ProductCard from './productCard'; // Use the same ProductCard component

const Compare = () => {
  const [compareList, setCompareList] = useState([]);

  // Load compare list from localStorage on initial load
  useEffect(() => {
    const storedCompareList = JSON.parse(localStorage.getItem('compareList')) || [];
    setCompareList(storedCompareList);
  }, []);

  // Add product to compare list (can be triggered from other components)
  const addProductToCompare = (product) => {
    const existingCompare = [...compareList];

    // Check if the product is already in the list
    if (!existingCompare.some(item => item._id === product._id)) {
      const updatedCompare = [...existingCompare, product];
      setCompareList(updatedCompare);
      localStorage.setItem('compareList', JSON.stringify(updatedCompare));
      alert(`${product.title} added to compare list`);
    } else {
      alert(`${product.title} is already in the compare list`);
    }
  };

  // Remove product from compare list
  const removeProductFromCompare = (productId) => {
    const updatedCompareList = compareList.filter(product => product._id !== productId);
    setCompareList(updatedCompareList);
    localStorage.setItem('compareList', JSON.stringify(updatedCompareList));
  };

  return (
    <div>
      <h1>Compare Products</h1>

      {/* Display compared products */}
      <h2>Compared Products:</h2>
      {compareList.length === 0 ? (
        <p>No products to compare yet. Add products to the compare list from other pages.</p>
      ) : (
        <div style={{ display: 'flex', flexWrap: 'wrap' }}>
          {compareList.map(product => (
            <div key={product._id}>
              <ProductCard
                _id={product._id}
                title={product.title}
                image1={product.image1}
                price={product.price}
                type={product.type}
                addProductToCompare={addProductToCompare} // Pass the addProductToCompare function
              />
              <button onClick={() => removeProductFromCompare(product._id)}>Remove from Compare</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Compare;
