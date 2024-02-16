import { useSelector } from "react-redux";
import { CartItem } from "../components";
import { Link } from "react-router-dom";
import { roundToTwoDecimals } from "../utils";
const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const total = useSelector((state) => state.cartReducer.total);
  const TAX_RATE = 0.25;
  const totalWithoutTax = roundToTwoDecimals(total / (1 + TAX_RATE));
  const totalTax = roundToTwoDecimals(total - totalWithoutTax);
  const totalWDelivery = roundToTwoDecimals(total + 5);
  const cartQuantity = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <section className="cart-page">
      {cartQuantity ? (
        <>
          <h1 className="cart__title">
            Cart <span className="cart__amount">({cartQuantity})</span>
          </h1>
          <div className="cart">
            <div className="cart__content">
              <div className="cart__items">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} />
                ))}
              </div>
            </div>
            <div className="cart__total">
              <h1>Total in cart</h1>
              <div className="cart__total-calc">
                <span>Total w/o tax:</span><span>{totalWithoutTax}€</span>
                <span>Total tax({TAX_RATE * 100}%):</span><span>{totalTax}€</span>
                <span>Total w/o delivery:</span><span>{total}€</span>
                <span>Delivery:</span><span>5.00€</span>
                <span><strong>Total w/ delivery:</strong></span><span><strong>{totalWDelivery}€</strong></span>
              </div>
              <div className="cart__total-actions">
                <Link className="cart__total-action-btn btn-checkout" to="/checkout">Checkout</Link>
              </div>
            </div>
          </div>

        </>
      ) : (
        <p className="cart__empty">Your cart is empty</p>
      )}
    </section>
  );
};

export default Cart;
