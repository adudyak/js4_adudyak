Feature('register');

const NEW_USER = {
    firstName: "Oleg",
    lastName: "9",
    email: Date.now() + '@test.com',
};

xScenario('register new user', ({ I, basePage, registerPage }) => {
    I.openStore();
    basePage.clickMyAccountSpoiler();
    basePage.clickMyRegisterLink();
    registerPage.verifyRegisterPage();
    registerPage.fillNewUserForm(NEW_USER);
    pause();
});

xScenario('grab price', async ({ I }) => {
    I.openStore();
    const price = await I.grabTextFrom({ xpath: '//*[@id="content"]/div[1]/div[2]/div/div[1]/span[1]' });
    console.log(+price.slice(1));
});