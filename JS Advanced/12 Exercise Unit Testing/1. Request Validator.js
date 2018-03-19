function requestValidator(obj) {
    let methodRgx = /^(GET|POST|CONNECT|DELETE)$/g;
    let uriRgx = /^([\w\.\*]+)$/g;
    let versionRgx = /(HTTP\/0.9|HTTP\/1.0|HTTP\/1.1|HTTP\/2.0)/g;
    let messageRgx = /^([^<>\\&'"])+$|^\s*$/g;

    let request = {
        method: function () {
            return isValid(methodRgx, 'method', obj);
        },
        uri: function () {
            return isValid(uriRgx, 'uri', obj);
        },
        version: function () {
            return isValid(versionRgx, 'version', obj);
        },
        message: function () {
            return isValid(messageRgx, 'message', obj);
        }
    };

    function isValid(regex, property, obj) {
        if (!obj.hasOwnProperty(property)) {
            return false;
        }
        if (!regex.test(obj[`${property}`])) {
            return false;
        }
        return true;
    }

    for (let prop in request) {
        if (!request[prop]()) {
            if (prop === 'uri') {
                throw new Error(`Invalid request header: Invalid ${prop.toUpperCase()}`);
            }
            let warning = Array.from(prop)[0].toUpperCase() + prop.slice(1);
            throw new Error(`Invalid request header: Invalid ${warning}`);
        }
    }
    return obj;
}

requestValidator({
    method: 'GET',
    uri: 'svn.public.catalog',
    version: 'HTTP/1.1',
    message: ''
});

requestValidator({
    method: 'OPTIONS',
    uri: 'git.master',
    version: 'HTTP/1.1',
    message: '-recursive'
});