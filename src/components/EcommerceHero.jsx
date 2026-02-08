import "../styles/ecommerceHero.css";

export default function EcommerceHero() {
  return (
    <div className="ecommerce-hero">

      {/* PRODUCT CARDS */}
      <div className="product-card electronics">
        <span>Electronics Store</span>
      </div>

      <div className="product-card footwear">
        <span>Footwear Store</span>
      </div>

      {/* UI ACTIONS */}
      <div className="ui-badge cart">Add to Cart</div>
      <div className="ui-badge checkout">Checkout</div>
      <div className="ui-badge login">Login</div>

    </div>
  );
}