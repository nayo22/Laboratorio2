class BlogFooter extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
    <footer class="footer">
     <div class="footer-top>
      <img src="../public/images/logo.png alt="logo Sitemark" class="footer-logo" />
      <div class="newsletter">
      <h3>Join the chisme</h3>
      <p>Subscribe for weekly updates. No spams ever!</p>
      <input type="email" placeholder="Your email address" />
      <button>Subscribe bitch</button>
    </div>
    </div>

     <div class="footer-links">
          <div class="product">
            <h4>Product</h4>
            <ul>
              <li>Features</li>
              <li>Testimonials</li>
              <li>Highlights</li>
              <li>Pricing</li>
              <li>FAQs</li>
               </ul>
    `;
  }
}