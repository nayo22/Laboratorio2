class LatestPosts extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
      <section class="latest-section">
        <h2 class="latest-title">Latest</h2>
        <div class="latest-container">
          ${this.renderPosts()}
        </div>
      </section>
    `;
  }

  renderPosts() {
  const posts = [
    {
      title: 'Post 1',
      content: 'Post content goes here...'
    },
    {
      title: 'Post 2',
      content: 'Post content goes here...'
    },
    {
      title: 'Post 3',
      content: 'Post content goes here...'
    }
  ];
}
}
customElements.define('latest-posts', LatestPosts);