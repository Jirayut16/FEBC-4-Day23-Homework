import { Link } from "react-router-dom";
function ContentHome() {
  return (
    <>
      <div className="container">
        <div className="content">
          <div className="item">
            <div className="product-img">
              <img
                src="https://dtaconline.dtac.co.th/pub/media/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/p/a/packshot-s24ultra-all_0_8.png"
                width={"250px"}
              />
            </div>
            <div className="product-name">
              <p>Samsung Galaxy S24 Ultra</p>
            </div>
            <div className="button">
              <Link to="/GalaxySProduct">
                <button className="view-button">View</button>
              </Link>
              <Link to="/PaymentDetail">
                <button className="cart-button">Buy</button>
              </Link>
            </div>
          </div>

          <div className="item">
            <div className="product-img">
              <img
                src="https://dtaconline.dtac.co.th/pub/media/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/s/i/silver_003_4.png"
                width={"250px"}
              />
            </div>
            <div className="product-name">
              <p>Samsung Galaxy Z Fold 6</p>
            </div>
            <div className="button">
              <Link to="/ZFoldProduct">
                <button className="view-button">View</button>
              </Link>
              <Link to="/PaymentDetail">
                <button className="cart-button">Buy</button>
              </Link>
            </div>
          </div>

          <div className="item">
            <div className="product-img">
              <img
                src="https://dtaconline.dtac.co.th/pub/media/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/m/i/mint_004_5_4.png"
                width={"250px"}
              />
            </div>
            <div className="product-name">
              <p>Samsung Galaxy Z Flip 6</p>
            </div>
            <div className="button">
              <Link to="/ZFlipProduct">
                <button className="view-button">View</button>
              </Link>
              <Link to="/PaymentDetail">
                <button className="cart-button">Buy</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContentHome;
