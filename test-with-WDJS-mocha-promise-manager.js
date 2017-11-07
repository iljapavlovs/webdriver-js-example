// selenium-webdriver/testing - promise manager that is wrapped around Mocha and provided by Selenium
const assert = require('assert');
// const chrome = require('selenium-webdriver/chrome');
const {Builder, By, until} = require('selenium-webdriver');
const test = require('selenium-webdriver/testing');

require('chromedriver');

const timeOut = 15000;

test.beforeEach(function() {
    const driver = new Builder()
        .forBrowser('chrome')
        .build();
    driver.get("https://decohere.herokuapp.com/planets");
});

test.afterEach(function() {
    driver.quit();
});

test.describe('calculating weights', function() {
    test.it('calculates weights', function() {
        var element = driver.wait(until(webdriver.By.id('wt')), 3000);







            assert.equal(element.getText(), true, "Weight entry not possible");
        });
    });

    test.it('provides no default weight', function() {
        driver.findElement(webdriver.By.id('wt')).getText().then(function(weight) {
            assert.equal(weight, '', "Weight started with values");
        });

});