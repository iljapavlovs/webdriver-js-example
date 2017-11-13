const {By} = require('selenium-webdriver');

const USER_NAME_INPUT_LOCATOR = By.id("username");
const PASSWORD_INPUT_LOCATOR = By.id("password");
const LOGIN_BUTTON_LOCATOR = By.css("button[type='submit']");

LoginPage = function LoginPage(driver) {
    this.driver = driver;
};

LoginPage.prototype.login = async function (username, password) {
    await this.driver.findElement(USER_NAME_INPUT_LOCATOR).clear();
    await this.driver.findElement(USER_NAME_INPUT_LOCATOR).sendKeys(username);
    await this.driver.findElement(PASSWORD_INPUT_LOCATOR).clear();
    await this.driver.findElement(PASSWORD_INPUT_LOCATOR).sendKeys(password);
    await this.driver.findElement(LOGIN_BUTTON_LOCATOR).click(password);
};


module.exports = LoginPage;
