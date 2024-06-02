const { http, https } = require('follow-redirects');

module.exports = function(reqOpts) {
    const isSecure = url.toString().startsWith('https:');
    const proto = isSecure ? https : http;
    return proto.request(reqOpts);
}
