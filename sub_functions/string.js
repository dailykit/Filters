const {
    isEqual,
    filter,
    isUndefined,
    isEmpty,
    isNull
} = require('lodash');

const {
    deepSearch
} = require('./utils/util');

// matchedObjs consists of an array of objects in which the key has been found.

const eq = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (isEqual(matchedObjs[i][input.key], input.value))
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return isEqual(obj[input.key], input.value);
        } else
            return false;
    });
}

const contain_exactly = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (((matchedObjs[i][input.key].indexOf(input.value)) > -1))
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return ((obj[input.key].indexOf(input.value)) > -1);
        } else
            return false;
    });
}

const not_contain_exactly = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (!((matchedObjs[i][input.key].indexOf(input.value)) > -1))
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return !((obj[input.key].indexOf(input.value)) > -1);
        } else
            return false;
    });
}

const is_any_of = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (input.value.includes(matchedObjs[i][input.key]))
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return input.value.includes(obj[input.key]);
        } else
            return false;
    });
}

const is_none_of = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (!input.value.includes(matchedObjs[i][input.key]))
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return !input.value.includes(obj[input.key]);
        } else
            return false;
    });
}

module.exports = {
    eq,
    contain_exactly,
    not_contain_exactly,
    is_any_of,
    is_none_of
}