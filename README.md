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

### Typescript
#### Setup

1. Install TypeScript globally via 
```
npm install -g typescript
```
2. write typescript code in _.ts_ file
3. compile TypeScript to JavaScript via
```
tsc <filename.ts> (tsc greeter.ts)
```
this will create new file - the same code transpilled into JavaScript.

Or enable automatical compilation to JS in your IDE



#### Resources
* webdriver-mocha-async-await-example
    * https://github.com/airware/webdriver-mocha-async-await-example 
    * slides -  https://www.slideshare.net/MekSrunyuStittri/endtoend-test-automation-with-nodejs-one-year-later
* Protractor
    * async/await - https://github.com/angular/protractor/tree/5.2.0/exampleTypescript/asyncAwait
    * TypeScript - https://github.com/angular/protractor/tree/5.2.0/exampleTypescript
* Selenium official
    * https://github.com/SeleniumHQ/selenium/tree/master/javascript/node/selenium-webdriver/example
* JS page object
    * https://github.com/jamesottaway/js-page-object
    * https://github.com/Matt-B/mocha-webdriver-page-objects-example
* http://testerstories.com/category/test-solutions/javascript-test-solutions/ 
    

