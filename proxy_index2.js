//change the default request from your ip to proxy
const request = require('request-promise').defaults({
    proxy: 'http://user:password@ip:port'
    //example... proxy: 'http://191.37.227.128:8080'
});

(async () => {

    let response = await request('https://httpbin.org/ip');

    debugger;
    //debugger response for origin
})();