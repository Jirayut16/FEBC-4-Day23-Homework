import { Link } from "react-router-dom";
function ZFold() {
  return (
    <>
      <div className="container-fold6">
        <div className="image-product">
          <div className="imgContainer">
            <img src="https://dtaconline.dtac.co.th/pub/media/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/s/i/silver_003_4.png" />
          </div>
        </div>
        <div className="image-detail">
          <div className="name">
            <h1>Samsung Galaxy Z Fold 6</h1>
          </div>
          <div className="price">
            <p>59,000.-</p>
          </div>
          <div className="detail">
            <div>
              <p>
                <b>Color:</b> Vanilla Mint
              </p>
              <p>
                <b>Size:</b> 132.6 x 153.5 x 5.6 mm 239g
              </p>
              <p>
                <b>Capacity:</b> 256GB และ 512GB
              </p>
              <p>
                <b>Display:</b> หน้าจอด้านใน (จอหลัก): 7.6", QXGA+ (2160 x
                1856), 374ppi, Dynamic AMOLED 2X <br />
                หน้าจอด้านนอก: 6.3" 22.1:9 (2376 x 968), 412ppi, Dynamic AMOLED
                2X
              </p>
              <p>
                <b>Water Resistance:</b> IP48
              </p>
              <p>
                <b>Ram:</b> 12GB
              </p>
              <p>
                <b>Camera:</b> Front Camera : กล้องหน้า 4 MP, กล้องฝาปิด 10MP
                Back Camera : UW 12 MP + W 50 MP + Tele 10 MP(3X)
              </p>
              <p>
                <b>Battery:</b> 4,400 mAh
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

export default ZFold;
