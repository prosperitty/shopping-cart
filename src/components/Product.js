const Product = (props) => {
  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={props.image} alt="cyberpower supreme x pc" className="product-image"/>
      </div>
      <div className="card-detail-container">
        <h4 className="product-company">{props.company}</h4>
        <p className="product-name">{props.name}</p>
        <p className="product-price"><span>$</span>{props.price}</p>
      </div>
    </div>
  );
};

export default Product;
