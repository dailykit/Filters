const {
    isUndefined,
    isNull,
    filter
} = require('lodash');

const {
    deepSearch
} = require('./utils/util');

const known = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);

        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (!isUndefined(matchedObjs[i][input.key]) && !isNull(matchedObjs[i][input.key]))
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return !isNull(obj[input.key]);
        } else
            return false;
    });
}

const unknown = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (isUndefined(matchedObjs[i][input.key]) || isNull(matchedObjs[i][input.key]))
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return false;
        } else
            return true;
    });
}

module.exports = {
    known,
    unknown
}