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

    
}


