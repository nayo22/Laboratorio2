class LatestPosts extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section class="latest-section">
      <h2 class="latest-titel>Latest Posts</h2>
      <div class="latest-container">
      ${this.renderPosts}
      </div>
      </section>
    `;
  }
  renderPosts() {
    return `
      <article class="post">
        <h3>Post Title</h3>
        <p>Post description goes here...</p>
      </article>
    `;
  }
}
customElements.define('latest-posts', LatestPosts);