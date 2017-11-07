var mocha = require('mocha')
var describe = mocha.describe
var it = mocha.it
var assert = require('chai').assert;
var webdriver = require('selenium-webdriver');
require('firefoxdriver');


describe('checking', function() {
    this.timeout(15000);

    var driver;

    before(function () {
        driver = new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.firefox()).
        build();
    });

    after(function() {
        driver.quit();
    });

    it('navigate to planets page', function() {
        driver.get("https://decohere.herokuapp.com/planets");
    });

    it('calculates a weight', function() {
        driver.findElement({id: "wt"}).sendKeys('200');
        driver.findElement({id: "calculate"}).click();
        driver.findElement({id: "outputmrc"}).getAttribute('value').then(function(mercury) {
            assert.equal(mercury, '75.6');
        });
    });
});