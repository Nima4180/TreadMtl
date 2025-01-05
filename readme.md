# TreadMtl - Tire Shop Website

Welcome to TreadMtl! This is a simple tire shop website created to showcase our tire collection and provide customers with important information about our services and products. The website is built using HTML and CSS, and it is hosted using GitHub Pages.

## Features

- **Home Page**: Introduction to TreadMtl and our promotions.
- **Tires Page**: Featured tires, including product descriptions, pricing, and a special discount offer.
- **Contact Page**: How to reach us via email or phone.

## How to View the Site

The website is hosted on GitHub Pages and can be accessed at the following URL:

[https://Nima4180.github.io/TreadMtl/](https://Nima4180.github.io/TreadMtl/)

## Setup Instructions

1. Clone the repository to your local machine:
    ```bash
    git clone https://github.com/Nima4180/TreadMtl.git
    ```

2. Navigate to the project folder:
    ```bash
    cd TreadMtl
    ```

3. Open `index.html` in your preferred browser to view the site locally.

## Files Included

### 1. `index.html` (Main HTML file)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>TreadMtl - Your Tire Shop</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <!-- Navigation Bar -->
  <nav>
    <div class="container">
      <img src="toyo-tires.png" alt="TreadMtl Logo" class="logo">
      <div class="nav-links">
        <a href="#home">Home</a>
        <a href="#tires">Tires</a>
        <a href="#contact">Contact</a>
      </div>
    </div>
  </nav>

  <!-- Hero Section -->
  <section id="home" class="hero">
    <div class="hero-content">
      <h1>Welcome to TreadMtl</h1>
      <p>Your one-stop shop for tires in Laval</p>
      <p><strong>Get 12% off on purchases over $500!</strong></p>
    </div>
  </section>

  <!-- Tire Section -->
  <section id="tires" class="tires">
    <div class="container">
      <h2>Featured Tire: Toyo Tires</h2>
      <div class="tire-item">
        <img src="tire1.jpg" alt="Toyo Tire" class="tire-img">
        <div class="tire-info">
          <h3>Toyo Tires Gsi-6 LS</h3>
          <p>Size: 205/55R16</p>
          <p>Price: $120 each</p>
          <p><strong>Discount:</strong> 12% off for orders over $500 before tax (on 4 tires)</p>
        </div>
      </div>
    </div>
  </section>

  <!-- Contact Section -->
  <section id="contact" class="contact">
    <div class="container">
      <h2>Contact Us</h2>
      <p>If you have any questions or want to place an order, feel free to reach out!</p>
      <p>Email: <a href="mailto:info@TreadMtl.com">info@TreadMtl.com</a></p>
      <p>Phone: <a href="tel:+14388388480">(438)-838-8480</a></p>
    </div>
  </section>

  <footer>
    <p>&copy; 2025 TreadMtl | All Rights Reserved</p>
  </footer>
</body>
</html>
