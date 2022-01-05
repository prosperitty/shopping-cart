import cpSupremeX from '../images/cyberpower-supreme-2.jpg'

const Shop = () => {
  return (
    <div className="shop">
      <h1>Discover</h1>
      <div className="products">
        <div className="product-card">
          <div className="product-image-container">
            <img src={cpSupremeX} alt="cyberpower supreme x pc" className="product-image"/>
          </div>
          <div className="card-detail-container">
            <h4 className="product-company">CyberpowerPC</h4>
            <p className="product-name">supremeX</p>
            <p className="product-price">$999</p>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image-container">
            <img src={cpSupremeX} alt="cyberpower supreme x pc" className="product-image"/>
          </div>
          <div className="card-detail-container">
            <h4 className="product-company">CyberpowerPC</h4>
            <p className="product-name">supremeX</p>
            <p className="product-price">$999</p>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image-container">
            <img src={cpSupremeX} alt="cyberpower supreme x pc" className="product-image"/>
          </div>
          <div className="card-detail-container">
            <h4 className="product-company">CyberpowerPC</h4>
            <p className="product-name">supremeX</p>
            <p className="product-price">$999</p>
          </div>
        </div>
        <div className="product-card">
          <div className="product-image-container">
            <img src={cpSupremeX} alt="cyberpower supreme x pc" className="product-image"/>
          </div>
          <div className="card-detail-container">
            <h4 className="product-company">CyberpowerPC</h4>
            <p className="product-name">supremeX</p>
            <p className="product-price">$999</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Shop;