const USER = {
    email: "",
    password: "",
}

Feature('purchase');

Scenario('buy product', ({ I, basePage }) => {
    I.login(USER);
    I.amOnPage("http://opencart.qatestlab.net/index.php?route=product/product&product_id=43");
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
    I.assertEqual(totalPrice + shippingRate, checkoutPrice, "Prices are not in match");
    //verify final text "Your order has been placed!";
    //
}).tag("buy");
