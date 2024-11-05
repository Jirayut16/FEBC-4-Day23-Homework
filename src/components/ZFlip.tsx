import { Link } from "react-router-dom";
function ZFlip() {
  return (
    <>
      <div className="container-flip6">
        <div className="image-product">
          <div className="imgContainer">
            <img src="https://dtaconline.dtac.co.th/pub/media/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/m/i/mint_004_5_4.png" />
          </div>
        </div>
        <div className="image-detail">
          <div className="name">
            <h1>Samsung Galaxy Z Flip 6</h1>
          </div>
          <div className="price">
            <p>39,900.-</p>
          </div>
          <div className="detail">
            <div>
              <p>
                <b>Color:</b> Vanilla Mint
              </p>
              <p>
                <b>Size:</b> 165.1 x 71.9 x 6.9 mm 187g
              </p>
              <p>
                <b>Capacity:</b> 256GB และ 512GB
              </p>
              <p>
                <b>Display:</b> หน้าจอด้านใน (จอหลัก): 6.7", FHD+ (2640 x 1080),
                425ppi, Dynamic AMOLED 2X หน้าจอด้านนอก: 3.4", (748 x 720),
                306ppi, Super AMOLED
              </p>
              <p>
                <b>Water Resistance:</b> IP48
              </p>
              <p>
                <b>Ram:</b> 12GB
              </p>
              <p>
                <b>Camera:</b> Front Camera : 10MP Back Camera : UW 12 MP + W
                50MP
              </p>
              <p>
                <b>Battery:</b> 4,000 mAh
              </p>
            </div>
          </div>
          <Link to="/PaymentDetail">
            <button className="buy-button">Buy</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ZFlip;
