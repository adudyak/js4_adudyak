const { I } = inject();

module.exports = {
  firstNameField: { xpath: '//*[@id="input-firstname"]' },
  lastNameField: { xpath: '//*[@id="input-lastname"]' },

  verifyRegisterPage() {
    I.see('Register Account');
  },

  fillNewUserForm(user) {
    I.fillField(this.firstNameField, user.firstName);
    I.fillField(this.lastNameField, user.lastName);
  }
}
