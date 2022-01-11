const Product = (props) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={props.image} alt="cyberpower supreme x pc" className="product-image"/>
      </div>
      <div className="card-detail-container">
        <h4 className="product-company">{props.company}</h4>
        <p className="product-name">{props.name}</p>
        <div>
          <span className="product-price"><span>$</span>{props.price}</span>
          <input name={props.id} type="number" min="0" onChange={props.handleChange} />
          <button name={props.id} onClick={props.sendToCart}>add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
