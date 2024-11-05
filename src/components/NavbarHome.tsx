// import "./Home.css";
function NavbarHome() {
  return (
    <>
      <div className="container">
        <div className="header-band">
          <p>
            <i
              className="bi bi-envelope-fill"
              style={{ marginRight: "5px" }}
            ></i>
            abc.shop@gmail.com
          </p>
          <p>
            <i
              className="bi bi-telephone-fill"
              style={{ marginRight: "5px" }}
            ></i>
            +66 1234 5678
          </p>
          <div className="social-icon">
            <i className="bi bi-facebook"></i>
            <i className="bi bi-line"></i>
            <i className="bi bi-youtube"></i>
            <i className="bi bi-instagram"></i>
          </div>
        </div>

        <div className="navbar">
          <div>
            <img
              src="https://img2.pic.in.th/pic/jsshop.md.png"
              style={{ width: "100px" }}
            />
          </div>
          <div>
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <i className="bi bi-bag-check-fill cart-icon"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default NavbarHome;
