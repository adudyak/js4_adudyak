const {
  setHeadlessWhen,
  setCommonPlugins
} = require('@codeceptjs/configure');
// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

/** @type {CodeceptJS.MainConfig} */
exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    Playwright: {
      url: 'http://opencart.qatestlab.net/index.php',
      waitForNavigation: 'networkidle',
      waitForTimeout: 5000,
      show: true,
      browser: 'chromium'
    },
    "ChaiWrapper": {
      "require": "codeceptjs-chai"
    },
    PageHelper: {
      require: './helpers/pageHelper_helper.js',
    },
    REST: {
      defaultHeaders: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
    },
    JSONResponse: {},
  },
  include: {
    I: './steps_file.js',
    basePage: "./pages/base.js",
    registerPage: "./pages/register.js",
    productPage: "./pages/product.js",
    helper: "./helpers/helper.js",
  },
  tryTo: {
    enabled: true,
    pauseOnFail: {},
  },
  "mocha": {
    "reporterOptions": {
        "reportDir": "output"
    }
  },
  name: 'js4_adudyak'
}