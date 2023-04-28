/**
 * !reporter
 * !pause in browser f8
 * !alt + shift + f
 * Github Actions https://docs.github.com/en/actions
 *
 * !1) цікавить як перевірити чи правильно працює валідація полів форми регістрації наприклад. 
 * !2) І як перевірити коректність роботи фільтрів товарів. Наприклад при виборі голубого кольору, показуються не тільки голубі товари:
 */


let accounts = new DataTable(['login', 'password']); //
accounts.add(['davert', '123456']); // adding records to a table
accounts.add(['admin', '123456']);

let urls = new DataTable(['url']); //
urls.add(["http://opencart.qatestlab.net/index.php?route=product/product&product_id=43"]); // adding records to a table
urls.add(["http://opencart.qatestlab.net/index.php?route=product/product&product_id=45"]);
urls.add(["http://opencart.qatestlab.net/index.php?route=product/product&product_id=73"]);

const urlArray = ["http://opencart.qatestlab.net/index.php?route=product/product&product_id=43"/*,
"http://opencart.qatestlab.net/index.php?route=product/product&product_id=45",
"http://opencart.qatestlab.net/index.php?route=product/product&product_id=73"*/];

const USER = {
    email: '192404122022@test.com',
    password: 'Temp1234%',
}

const FilerReader = require("../helpers/fileReader");
console.log("*************", FilerReader.readFileContent());

Feature('purchase');

Before(({ I }) => {
    //I.login(USER);
});

/*Data(urlArray).Scenario('buy product', async ({ I, helper, current, productPage }) => {
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=43");
    I.click({xpath: "//input[@temp]"});
    //console.log(await helper.checkElementIsVisible({xpath: "//button[text() = 'Search']"}));
    /*console.log(await productPage.checkColorExists());
    if (checkoutPage.chekProductIsAvailable()) {
        //buy product
    } else {
        console.log(`Product ${current} is not available.`);
    }*/
    //console.log(current);
    //add method to clear cart - .grabNumberOfVisibleElements();
    //select size, color. Try to select with .selectOption()
    //get product price, get size price?, get color price?, return sum of prices for single product - totalPrice
    //add product to cart
    //click Cart icon(add method to base page)
    //click CHECKOUT
    //complete all steps to purchase product
    //get "Flat Shipping Rate" price - shippingRate
    //get total checkout price - checkoutPrice
    //npm i codeceptjs-chai - install chai, https://www.npmjs.com/package/codeceptjs-chai
    //I.assertEqual(totalPrice + shippingRate, checkoutPrice, "Prices are not in match");
    //verify final text "Your order has been placed!";
//}).tag("buy");

Scenario('rest api', async ({ I }) => {
    const response = await I.sendGetRequest("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?valcode=USD&json");
    I.seeResponseCodeIs(200);
    const usdRate = response.data[0].rate;
    console.log("Price in UAH is: " + 80.00 * usdRate);
    const postResponse = await I.sendPostRequest("https://jsonplaceholder.typicode.com/posts", `{
        "title": "foo",
        "body": "bar",
        "userId": 1
    }`);

    console.log(postResponse.data);
});

Scenario.only('verify error field', async ({ I }) => {
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=account/register");
    I.click({ xpath: '//*[@id="content"]/form/fieldset[3]/div/div/label[1]'});
    I.click({ xpath: '//input[@type="submit"]'});
    const actualErrors = await I.grabTextFromAll({ xpath: "//input[@id]/following-sibling::div"});
    console.log(actualErrors);
    const expectedErrors = [
        '',
        "This field is required.",
        "This field is required.",
        "This field is required.",
        "This field is required.",
        "This field is required.",
    ];
    I.assertDeepEqual(actualErrors, expectedErrors);
    //const actualEmailEmptyError = await I.grabTextFrom({ xpath: '//input[@id="input-email"]/following-sibling::div'});
    //const expectedEmailEptyError = "This field is required";
    //I.assertEqual(actualEmailEmptyError, expectedEmailEptyError, "Error message for email field does not match expected one.");
    //input[@id="input-email"]/following-sibling::div
});

Scenario.only('color', async ({ I }) => {
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/category&path=31&filter=39");
    const amountOfProducts = await I.grabNumberOfVisibleElements({xpath: "//h4/a"});
    console.log("amountOfProducts ", amountOfProducts);
    let products = [];
    for (let index = 1; index <= amountOfProducts; index++) {
        const colors = await I.grabTextFromAll({ xpath: `(//label[contains(text(), 'Color')]/following-sibling::select)[${index}]/option`});
        console.log("colors ", colors);
        products.push(colors.forEach((e) => e.trim()));
    }
    console.log(products);
});


After(({ I }) => {
    //I.logout();
});
