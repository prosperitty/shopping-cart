const Cart = (props) => {
  const cartItems = props.cart.map((item) => (
    <div className="cart-card" key={item.id}>
      <div className="cart-image-container">
        <img
          src={item.src}
          alt="cyberpower supreme x pc"
          className="product-image"
        />
      </div>
      <div className="cart-detail-container">
        <h4 className="product-company">{item.company}</h4>
        <p className="product-name">{item.name}</p>
        <div className="cart-detail">
          <p className="product-price">
            <span>$</span>
            {parseFloat(item.price)}
          </p>
          <p>
            <span>Quantity:</span>
            <span>{item.quantity}</span>
          </p>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="cart">
      {cartItems}
      <div>
        <h3>subtotal:{props.subtotal}</h3>
        <h3>total:{props.subtotal}</h3>
      </div>
    </div>
  );
};

export default Cart;
