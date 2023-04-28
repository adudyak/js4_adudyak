Feature('register');

const NEW_USER = {
    firstName: "Oleg",
    lastName: "9",
    email: Date.now() + '@test.com',
};

Scenario('register new user', ({ I, basePage, registerPage }) => {
    I.openStore();
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage();
    registerPage.fillNewUserForm(NEW_USER);
});

xScenario('grab price', async ({ I }) => {
    I.openStore();
    const price = await I.grabTextFrom({ xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]' });
    console.log(+price.slice(1));
});