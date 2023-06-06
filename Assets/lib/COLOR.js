class Color {
    constructor(value = '') {
      this.value = value; // INITIALIZE the color value
    }
  
    setValue(value) {
      this.value = value; // SET the color value
    }
  
    getColorValue() {
      return this.value; // GET the color value
    }
  }
  
  module.exports = Color;
