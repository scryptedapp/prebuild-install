const { http, https } = require('follow-redirects');

module.exports = function (reqOpts, cb) {
    const { url } = reqOpts;
    const isSecure = url.toString().startsWith('https:');
    const proto = isSecure ? https : http;
    const ret = proto.get(url, reqOpts, (res) => cb(null, res));
    ret.on('error', cb);
    return ret;
}
