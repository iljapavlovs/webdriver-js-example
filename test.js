//npm install --save--dev selenium-webdriver
const {Builder, By, Key, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');


//npm install --save--dev chromedriver
// The idea here is that you do not need to build a service. The trick here is that require('chromedriver');
// will add chromedriver path to the process.env.PATH
// const chromedriver = require('chromedriver');
require('chromedriver');
require('geckodriver');


// promise.USE_PROMISE_MANAGER = false;

// let service = new chrome.ServiceBuilder(chromedriver.path).build();
// chrome.setDefaultService(service);

// path to binary

let options = new firefox.Options().setBinary('C:\\tools\\Firefox');

//it`s possible to add all kinds of desired capapbilites for different browsers
const driver = new Builder()
    .forBrowser('chrome')
    .setFirefoxOptions(options)
    .build();

driver.get('http://www.google.com/ncr');
driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
driver.wait(until.titleIs('webdriver - Google Search'), 1000);
driver.quit();