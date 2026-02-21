import React from "react";
import "./ECommerce.css";

function ECommerce() {
  const products = [
    { name: "Golden Handbag", price: "$120" },
    { name: "Luxury Watch", price: "$250" },
    { name: "Trendy Sneakers", price: "$150" },
    { name: "Kids Fashion Set", price: "$80" },
  ];

  return (
    <div className="app">

      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">BLACK & GOLD</div>
        <ul className="nav-links">
          <li>Home</li>
          <li>Shop</li>
          <li>Blog</li>
          <li>Pages</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <h1>Luxury Collection 2026</h1>
        <p>Experience Premium Fashion in Black & Gold</p>
        <button>Shop Now</button>
      </section>

      {/* Women Collection */}
      <section className="section">
        <h2>Women Collection</h2>
        <div className="products">
          {products.map((item, index) => (
            <div key={index} className="card">
              <div className="image"></div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Kids Collection */}
      <section className="section">
        <h2>Kids Collection</h2>
        <div className="products">
          {products.map((item, index) => (
            <div key={index} className="card">
              <div className="image"></div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Trendy Products */}
      <section className="section">
        <h2>Trendy Products</h2>
        <div className="products">
          {products.map((item, index) => (
            <div key={index} className="card">
              <div className="image"></div>
              <h3>{item.name}</h3>
              <p>{item.price}</p>
              <button>Add to Cart</button>
            </div>
          ))}
        </div>
      </section>

      {/* Gift Cards */}
      <section className="section">
        <h2>Gift Cards</h2>
        <div className="special-box">
          🎁 Buy Exclusive Black & Gold Gift Cards
        </div>
      </section>

      {/* Deal of the Week */}
      <section className="section">
        <h2>Deal of the Week</h2>
        <div className="deal-box">
          🔥 50% OFF on Selected Luxury Items
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        © 2026 Black & Gold Store | All Rights Reserved
      </footer>

    </div>
  );
}

export default ECommerce;