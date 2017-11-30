var webdriverio = require('webdriverio');

function pick(a) {
    return a[Math.floor(Math.random() * a.length)]
}

function random_ua() {
    return pick([
        'Mozilla/5.0 (Linux; U; Android 4.0.3; vi-vn; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        'Mozilla/5.0 (Linux; U; Android 4.0.3; vi-vn; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        'Mozilla/5.0 (Linux; Android 7.0; LG-H910 Build/NRD90C) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.90 Mobile Safari/537.36',
        'Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/601.1.16 (KHTML, like Gecko) Version/8.0 Mobile/13A171a Safari/600.1.4',
        'Mozilla/5.0 (iPad; CPU OS 9_0 like Mac OS X) AppleWebKit/601.1.17 (KHTML, like Gecko) Version/8.0 Mobile/13A175 Safari/600.1.4',
        'Mozilla/5.0 (iPhone; CPU iPhone OS 9_2 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13C75 Safari/601.1'
    ])
}

function random_keyword() {
    return pick([
        'số điện thoại taxi mai linh quang nam',
        'so dien thoai hang vietnam airline',
        'grab nha trang',
        'số taxi hà nội',
        'đăng ký taxi uber tại đà năng'
    ])
}

var options = {
    desiredCapabilities: {
        browserName: 'phantomjs',
        proxy: {
            proxyType: 'manual',
            httpProxy: '127.0.0.1:8124'
        },
        'phantomjs.page.settings.userAgent': random_ua()
    }
};

var KEYWORD = random_keyword();
var MATCH_KEYWORD = "tongdaicongnghe";

var browser = webdriverio
    .remote(options)
    .init()

browser
    .url('http://www.google.com/search?q=' + KEYWORD)
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    // .getSource().then(function(s) {
    //     console.log(s)
    // })
    // .getHTML("=" + MATCH_KEYWORD).then(function(s) {
    //     console.log(s)
    // })
    .getText("a").then(function(s) {
        console.log(s)
    })
    .getText("a*=" + MATCH_KEYWORD).then(function(s) {
        console.log("Link matched: ", s)
    })
    .click("a*=" + MATCH_KEYWORD)
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .scroll(100, 100)
    .pause(3000).then(function() {
        console.log('Pause 3s')
    })
    .scroll(9999, 9999)
    .pause(3000).then(function() {
        console.log('Pause 3s')
    })
    .getText("a").then(function(s) {
        console.log(s)
    })

    // Click an random link
    .getHTML('a[href*="http"]')
    .then(function(s) {
        console.log("Click to link", s)
    })
    .click('a[href*="http"]')
    .pause(3000)
    .then(function() {
        console.log("Pause 3s")
    })
    .scroll(100, 100)
    .pause(1000).then(function() {
        console.log('Scroll, pause 1s')
    })
    .scroll(400, 100)
    .pause(1000).then(function() {
        console.log('Scroll, pause 1s')
    })
    .scroll(800, 100)
    .pause(1000).then(function() {
        console.log('Scroll, pause 1s')
    })
    .scroll(0, 0)
    .pause(1000).then(function() {
        console.log('Scroll top, pause 1s')
    })

    // Back
    .back()
    .pause(1000).then(function() {
        console.log('go to back, pause 1s')
    })

    // Reload
    .reload()
    .pause(1000).then(function() {
        console.log('reload, pause 1s')
    })

    .end()
    .catch(function(err) {
        console.error("====>", err);
        browser.end();
    });
