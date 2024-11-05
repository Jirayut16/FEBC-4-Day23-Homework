import { Link } from "react-router-dom";
function GalaxyS() {
  return (
    <>
      <div className="container-s24">
        <div className="image-product">
          <div className="imgContainer">
            <img src="https://dtaconline.dtac.co.th/pub/media/catalog/product/cache/e96373d1c57081d0b326a3dfa1f55e67/p/a/packshot-s24ultra-all_0_8.png" />
          </div>
        </div>
        <div className="image-detail">
          <div className="name">
            <h1>Samsung Galaxy S24 Ultra</h1>
          </div>
          <div className="price">
            <p>44,900.-</p>
          </div>
          <div className="detail">
            <div>
              <p>
                <b>Color:</b> Vanilla Mint
              </p>
              <p>
                <b>Size:</b> 162.3*79.0*8.6 232g
              </p>
              <p>
                <b>Capacity:</b> 256GB / 512GB / 1TB
              </p>
              <p>
                <b>Display:</b> 3120 x 1440 หน้าจอ: 6.8"
              </p>
              <p>
                <b>Water Resistance:</b> IP68 ทนน้ำ 1.5 เมตร นาน 30นาที
              </p>
              <p>
                <b>Ram:</b> 12GB
              </p>
              <p>
                <b>Camera:</b> กล้องหลัง : UW 12 MP 1.14um, FF (F2.2) + W 200 MP
                0.6um, 4PD (F1.7) + Tele 3x 10 MP, 1.12um, 2PD AF (F2.4) + Tele
                5x 50 MP 0.7um, 4PD AF (F43.4) กล้องหน้า : 12MP 2PD AF (F2.2),
                1.12um
              </p>
              <p>
                <b>Battery:</b> 5,000 mAh USB Type-C Wireless PowerShare,
                SuperFast Charging 45W
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

export default GalaxyS;
