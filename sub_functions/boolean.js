const {
    filter,
    isNull,
    isUndefined
} = require('lodash');

const {
    deepSearch
} = require('./utils/util');

const eq = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (matchedObjs[i][input.key] == input.value)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return obj[input.key] == input.value;
        } else
            return false;
    });
}

module.exports = {
    eq
}