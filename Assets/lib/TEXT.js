class Text {
    constructor(content = '') {
      this.content = content;
    }
  
    setContent(content) {
      this.content = content;
    }
  
    render() {
      return this.content;
    }
  }
  
  module.exports = Text;
  
