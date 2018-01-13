'use strict';

module.exports = (req, res, next) => {
    const self = this;
    const original_send = res.send;

    res.send = (body) => {
        const message = `Yeah, that's gonna be a ${res.statusCode} from me dawg`;

        res.statusMessage = 'FROM ME DAWG';

        if(res._headers && res._headers['content-type'] && res._headers['content-type'].indexOf('application/json') !== -1) {
            return original_send.call(res, `{"message": "${message}"}`);
        } else {
            return original_send.call(res, `Yeah, that's gonna be a ${res.statusCode} from me dawg`);
        }
    }

    return next();
}
