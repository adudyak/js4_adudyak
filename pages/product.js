const { I } = inject();

module.exports = {
  colorLabel: { xpath: '//label[text()="Color"]' },

  async checkColorExists() {
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
    const priceAsString =  await I.grabTextFrom(locatorOfPrice);
    return I.parsePrice(priceAsString);
  }
}
