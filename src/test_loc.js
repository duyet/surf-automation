var webdriverio = require('webdriverio');

function random_ua() {
    var ua = [
        'Mozilla/5.0 (Linux; U; Android 4.0.3; ko-kr; LG-L160L Build/IML74K) AppleWebkit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        'Mozilla/5.0 (Linux; U; Android 4.0.3; de-ch; HTC Sensation Build/IML74K) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30',
        'Mozilla/5.0 (Linux; U; Android 2.3; en-us) AppleWebKit/999+ (KHTML, like Gecko) Safari/999.9',
        'Mozilla/5.0 (Linux; U; Android 2.3.5; zh-cn; HTC_IncredibleS_S710e Build/GRJ90) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        'Mozilla/5.0 (Linux; U; Android 2.3.5; en-us; HTC Vision Build/GRI40) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
        'Mozilla/5.0 (Linux; U; Android 2.3.4; fr-fr; HTC Desire Build/GRJ22) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1',
    ];
    return ua[Math.floor(Math.random() * ua.length)]
}

var options = {
    desiredCapabilities: {
        browserName: 'phantomjs',
        proxy: {
            proxyType: 'manual',
            httpProxy: '127.0.0.1:8123'
        },
        'phantomjs.page.settings.userAgent': random_ua()
    },
    host: '127.0.0.1',
};

webdriverio
    .remote(options)
    .init()
    .url('https://mylocation.org/')
    .getTitle().then(function(title) {
        console.log('Title was: ' + title);
    })
    .getText('.info td').then(function(s) {
        console.log(s)
    })
    .end()
    .catch(function(err) {
        console.log(err);
    });
