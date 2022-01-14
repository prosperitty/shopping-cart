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
      <div className="cart-detail">
        <h4 className="product-company">{item.company}</h4>
        <p className="product-name">{item.name}</p>
        <p>Quantity: {item.quantity}
        </p>
      </div>
          <p className="product-price">${parseFloat(item.price)}</p>
    </div>
  ));

  return (
    <div className="cart">
      <h1>cart</h1>
      <div className="cart-items">
        <div>
          {cartItems}
        </div>
        <div className="checkout">
          <h3>
            <span>
              subtotal:
            </span>
            <span>
              ${props.subtotal}
            </span>
          </h3>
          <h3>            
            <span>
              total:
            </span>
            <span>
              ${props.subtotal}
            </span>
          </h3>
        </div>
        <button className="checkout-btn">checkout</button>
      </div>
    </div>
  );
};

export default Cart;
