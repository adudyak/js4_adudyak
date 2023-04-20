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
    I.login(USER);
});

Data(urlArray).Scenario('buy product', async ({ I, current, productPage }) => {
    console.log(await productPage.checkColorExists());
    if (checkoutPage.chekProductIsAvailable()) {
        //buy product
    } else {
        console.log(`Product ${current} is not available.`);
    }
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
}).tag("buy");

After(({ I }) => {
    //I.logout();
});
