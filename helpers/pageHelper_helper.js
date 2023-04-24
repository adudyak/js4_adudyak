const Helper = require('@codeceptjs/helper');

class PageHelper extends Helper {

  async parsePrice(string) {
    return parseFloat(string.replaceAll(/[^0-9\.]/g, ""));
  }

  async checkElementExists(locator) {
    return await tryTo(() => this.helpers['Playwright'].seeElement(locator));
  }
  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']

}

module.exports = PageHelper;
