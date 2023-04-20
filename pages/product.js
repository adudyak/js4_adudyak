const { I } = inject();

module.exports = {
  colorLabel: { xpath: '//label[text()="Color"]' },

  async checkColorExists() {
    return await tryTo(() => I.seeElement(this.colorLabel));
  },

  async selectColorOption() {
    if (await checkColorExists()) {
      I.click();
    }
  }
}
