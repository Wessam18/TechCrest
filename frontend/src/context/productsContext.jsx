import React from 'react';
import { useWishlist } from './wishlistContext';

function ProductCard({ _id, image1, title, price }) {
  const { addToWishlist } = useWishlist();

  return (
    <div className="product-card">
      <img src={image1} alt={title} />
      <h3>{title}</h3>
      <p>{price}</p>
      <button onClick={() => addToWishlist({ _id, image1, title, price })}>
        Add to Wishlist
      </button>
    </div>
  );
}

export default ProductCard;
