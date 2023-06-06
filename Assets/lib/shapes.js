class Shape {
    //INITIALIZE color property
    constructor() {
      this.color = '';
    }
    //SET color property
    setColor(color) {
      this.color = color;
    }
    //// THROW error to indicate render should be implemented in child classes
    render() {
      throw new Error('Method not implemented.');
    }
  }
  
  // RENDER triangle SVG element with current color
    class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
  }
  
  //// RENDER circle SVG element with current color
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
  }
  
  // RENDER square SVG element with current color
  class Square extends Shape {
    render() {
      return `<rect x="50" y="50" width="200" height="200" fill="${this.color}" />`;
    }
  }
   // EXPORT Triangle, Circle, and Square classes
  module.exports = { Triangle, Circle, Square };
  