const { I } = inject();

module.exports = {
  // Label
  color: {
    green: "green",
  },
  colorLabel: { xpath: '//label[text()="Color"]' },


  async checkColorExists() {
    //I.click(this.color.green);
    return await I.checkElementExists(this.colorLabel);
    return await tryTo(() => I.seeElement(this.colorLabel));
  },

  async checkSizeExists() {
    return await tryTo(() => I.seeElement(this.sizeLabel));
  },


  async selectColorOption() {
    if (await checkColorExists()) {
      I.click();
    }
  },

  async getColorPrice() {
    const priceAsString = await I.grabTextFrom(locatorOfPrice);
    return I.parsePrice(priceAsString);
  }
}
