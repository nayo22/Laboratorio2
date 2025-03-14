class BlogHeader extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <section class="blog-header">
        <h1>Blog</h1>
        <p>Stay in the loop with the latest about our products</p>
      </section>
    `;
  }

}

customElements.define('blog-header', BlogHeader);