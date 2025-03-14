class BlogFooter extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement('template');
    template.innerHTML = `
 <footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <img src="./images/logo.png" alt="Yo me llamo">
    </div>
    <div class="footer-columns">
      <div class="footer-column">
        <h4>Product</h4>
        <ul>
          <li><a href="#">Features</a></li>
          <li><a href="#">Testimonials</a></li>
          <li><a href="#">Highlights</a></li>
          <li><a href="#">Pricing</a></li>
          <li><a href="#">FAQs</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#">About us</a></li>
          <li><a href="#">Careers</a></li>
          <li><a href="#">Press</a></li>
        </ul>
      </div>
      <div class="footer-column">
        <h4>Legal</h4>
        <ul>
          <li><a href="#">Terms</a></li>
          <li><a href="#">Privacy</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-column newsletter">
        <h4>Join the chisme</h4>
        <p>Subscribe for weekly updates. No spams ever!</p>
        <form>
          <input type="email" placeholder="Your email address" required>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  </div>
</footer>
    `;
    this.appendChild(template.content.cloneNode(true));
  }
}
customElements.define('blog-footer', BlogFooter);