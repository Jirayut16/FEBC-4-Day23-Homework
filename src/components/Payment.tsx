// import "./Payment.css";
function Payment() {
  return (
    <div className="container-payment">
      <div className="header-payment">
        <h1>Payment Detail</h1>
        <p>Please fill form below</p>
      </div>
      <div className="formContainer">
        <div className="form">
          <form>
            <fieldset>
              <legend>Payment form</legend>
              <label>Fullname:</label>
              <input type="text" className="payment-input" />
              <label>Email:</label>
              <input type="text" className="payment-input" />
              <label>Address:</label>
              <input type="text" className="payment-input" />
              <label>Phone:</label>
              <input type="text" className="payment-input" />
              <label>More information:</label>
              <textarea></textarea>
            </fieldset>
          </form>
        </div>
        <div className="detail">
          <fieldset>
            <legend>Your cart</legend>
            <div className="productname">
              <p>(Product name):</p>
              <p>(Price)</p>
            </div>
            <hr />
            <div className="vat">
              <p>VAT:</p>
              <p>7%</p>
            </div>
            <hr />
            <div className="total">
              <p>Total:</p>
              <p>Price</p>
            </div>
            <hr />
            <div className="coupon">
              <input
                type="text"
                placeholder="Coupon code"
                className="coupon-input"
              />
              <button>Apply</button>
            </div>
          </fieldset>
        </div>

        <div className="payment">
          <h1>Choose your payment method</h1>
          <div className="card">
            <input type="radio" name="payment" className="radio" />
            <label htmlFor="">Card</label>
          </div>
          <div className="cardDetail">
            <label>Cardholder Name</label>
            <input
              type="text"
              id="cardholder-name"
              name="cardholder-name"
              required
              className="payment-input"
            />
            <label>Card Number</label>
            <input
              type="text"
              id="card-number"
              name="card-number"
              maxLength={16}
              required
              className="payment-input"
            />
            <label>Expiry Date</label>
            <input
              type="text"
              id="expiry-date"
              name="expiry-date"
              placeholder="MM/YY"
              maxLength={5}
              required
              className="payment-input"
            />
            <label>CVV</label>
            <input
              type="password"
              id="cvv"
              name="cvv"
              maxLength={3}
              required
              className="payment-input"
            />
          </div>
          <br />
          <br />
          <hr />
          <div className="qrPayment">
            <input type="radio" name="payment" className="radio" />
            <label htmlFor="">QR Payment</label>
          </div>
          <button>Buy</button>
        </div>
      </div>
    </div>
  );
}

export default Payment;
