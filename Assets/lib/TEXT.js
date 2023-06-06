class Text {
    constructor(content = '') {
      this.content = content;  // INITIALIZE text value
    }
  
    setContent(content) { 
      this.content = content; // SET text value
    }
  
    render() {
      return this.content; // GET text value
    }
  }
  // EXPORT text class
  module.exports = Text;
  
