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
      category: 'Tech',
      title: 'Post 1',
      description:
      author:
      avatar:
      date:

    },
    {
      category: 'Tech',
      title: 'Post 1',
      description:
      author:
      avatar:
      date:
    },
    {
      category: 'Tech',
      title: 'Post 1',
      description:
      author:
      avatar:
      date:
    }
    {

      category: 'Tech',
      title: 'Post 1',
      description:
      author:
      avatar:
      date:
    }
  ];
}
}
customElements.define('latest-posts', LatestPosts);