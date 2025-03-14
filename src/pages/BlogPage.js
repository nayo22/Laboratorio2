import "../Components/BlogHeader.js";
import "../Components/BlogMain.js";
import "../Components/BlogFooter.js";

class BlogPage extends HTMLElement{
    constructor() {
        super();
    }

    connectedCallback (){
        this.render();
    }

    render() {
        this.innerHTML = `
          <blog-header></blog-header>
          <blog-main></blog-main>
          <blog-footer></blog-footer>
        `;
      }
    }
    
    


