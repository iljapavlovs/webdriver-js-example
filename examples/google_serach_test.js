/**
 * @fileoverview An example test that may be run using Mocha.
 *
 * This example uses the `selenium-webdriver/testing.suite` function, which will
 * automatically run tests against every available WebDriver browser on the
 * current system. Alternatively, you may use the `SELENIUM_BROWSER`
 * environment variable to narrow the scope at runtime.
 *
 * Usage:
 *
 *     # Automatically determine which browsers to run against.
 *     mocha -t 10000 selenium-webdriver/example/google_search_test.js
 *
 *     # Configure tests to only run against Google Chrome.
 *     SELENIUM_BROWSER=chrome \
 *         mocha -t 10000 selenium-webdriver/example/google_search_test.js
 */

const assert = require('assert');

require('chromedriver');
const {Builder, By, Key, until, promise} = require('selenium-webdriver');
const chrome = require('selenium-webdriver/chrome');
const firefox = require('selenium-webdriver/firefox');

suite(function (env) {
    describe('Google Search', function () {
        let driver;

        before(async function () {
            // env.builder() returns a Builder instance preconfigured for the
            // envrionment's target browser (you may still define browser specific
            // options if necessary (i.e. firefox.Options or chrome.Options)).
            driver = await env.builder().build();
        });

        it('demo', async function () {
            await driver.get('https://www.google.com/ncr');
            await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
            await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
        });

        // The ignore function returns wrappers around describe & it that will
        // suppress tests if the provided predicate returns true. You may provide
        // any synchronous predicate. The env.browsers(...) function generates a
        // predicate that will suppress tests if the  env targets one of the
        // specified browsers.
        //
        // This example is always configured to skip Chrome.
        ignore(env.browsers(Browser.CHROME)).it('demo 2', async function () {
            await driver.get('http://www.google.com/ncr');
            let url = await driver.getCurrentUrl();
            assert.equal(url, 'https://www.google.com/');
        });

        after(() => driver && driver.quit());
    });
});