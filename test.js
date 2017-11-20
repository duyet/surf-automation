var webdriverio = require('webdriverio');

var NUM_INSTANCE = 4;

var options = {};
for (var i = 0; i < NUM_INSTANCE; i ++) {
    options['firefox_' + i] = {
        browserName: 'appium'
    };
}

console.auto_log = function(text) {
    console.info("====> "+ text)
}

var KEYWORD = 'blog.duyet.net';
var KEYWORD_LINK_CHECK = "Duyệt";

var browser = webdriverio
    .multiremote(options)
    .init()
    .url('http://www.google.com')
    .getTitle().then(function(title) {
        console.auto_log('===== Opened: ' + title);
    })
    .setValue('#lst-ib', KEYWORD)
    .then(function(result) {
        console.auto_log("Input keyword: " + KEYWORD)
    })
    .click('input[name="btnK"]')
    .then(function(result) {
        console.auto_log("Click seach.", result)    
    })
    .getText('.g h3 a').then(function(text) {
        console.auto_log("LIST RESULT")
        console.log(text)  
    })
    .click('h3 a[href="http://blog.duyet.net/"]')
    .getTitle().then(function(title) {
        console.auto_log("Opened: " + title)
    })
    .scroll(0, 10000).then(function(result) {
        console.auto_log(JSON.stringify(result))
    })
    .pause(5000).then(function(result) {
        console.auto_log("pause 5s")
    })
    .scroll(0, 0).then(function(result) {
        console.auto_log(JSON.stringify(result))
    })
    .pause(6000).then(function(result) {
        console.auto_log("pause 6s")
    })
    // .click('a').then(function(result) {
    //     console.auto_log("Click on some link")  
    // })
    .back().then(function(result) {
      console.auto_log("Press back!")    
    })
    .pause(4000).then(function(result) {
        console.auto_log("pause")
    })
    .end()
    .catch(function(err) {
        console.auto_log(err);
        browser.end();
    });
