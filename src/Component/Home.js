import React from 'react';
import '../Style/Home.css'; // Optional: create this file to style your home page
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <header className="home-hero">
        <h1>Welcome to DGP Fashion</h1>
        <p>Your style, your identity.</p>
        <a href="#shop" className="btn-primary">Shop Now</a>
      </header>

      <section className="home-about" id="about">
        <h2>About Us</h2>
        <p>
          DGP Fashion is dedicated to bringing you high-quality fashion pieces
          that reflect modern trends and timeless elegance.
        </p>
        <button><Link to="/about"> Learn More</Link></button>
      </section>

      <section className="home-services" id="services">
        <h2>Our Services</h2>
        <ul>
          <li>Custom Tailoring</li>
          <li>Ready-to-Wear Collections</li>
          <li>Fashion Consultancy</li>
        </ul>
      </section>

      <section className="home-gallery" id="shop">
        <h2>Featured Collection</h2>
        <div className="gallery-grid">
          <div className="gallery-item">Outfit 1</div>
          <div className="gallery-item">Outfit 2</div>
          <div className="gallery-item">Outfit 3</div>
        </div>
      </section>
    </div>
  );
};

export default Home;
