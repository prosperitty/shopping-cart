import React from 'react';
import Product from './Product.js';

const Shop = (props) => {

  const shopList = props.products.map((image) => (
    <Product
      image={image.src}
      name={image.name}
      company={image.company}
      price={image.price}
      key={image.id}
      sendToCart={props.addToCart}
      handleChange={props.handleChange}
      id={image.id}
    />
  ));

  return (
    <div className="shop">
      <h1>Discover</h1>
      <div className="products">{shopList}</div>
    </div>
  );
};

export default Shop;
