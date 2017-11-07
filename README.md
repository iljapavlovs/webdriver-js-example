# webdriver-js-example
Simple project showing how to use Selenium WebDriver in JS ES6

### Prerequisites
* NodeJS >=7.6 (support for **async/await** without a flag)

### Setup
```
npm install
```

### Running 
```
node test.js
```


#### Commands for starting Selenium Webdriver JS project from scratch

* Installing Selenium Webdriver client library
    ```
    npm install --save--dev webdriver-webdriver
    ```
* Installing Browser`s Drivers
    ```
    npm install --save--dev chromedriver
    npm install --save--dev geckodriver
    ...   
    ```
* Adding browser driver executable to PATH
    * just `require('chromedriver')` in the top of the test and it will automatically will add chromedriver path to the process.env.PATH
    
* Running Mocha Tests
```
node_modules/mocha/bin/mocha test-with-WDJS-mocha-promise-manager.js
```

Or install mocha globally