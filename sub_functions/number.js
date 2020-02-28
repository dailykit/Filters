const {
    filter,
    isUndefined,
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

const lt = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (matchedObjs[i][input.key] < input.value)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return obj[input.key] < input.value;
        } else
            return false;
    });
}

const lte = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (matchedObjs[i][input.key] <= input.value)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return obj[input.key] <= input.value;;
        } else
            return false;
    });
}

const gt = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (matchedObjs[i][input.key] > input.value)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return obj[input.key] > input.value;;
        } else
            return false;
    });
}

const gte = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (matchedObjs[i][input.key] >= input.value)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return obj[input.key] >= input.value;;
        } else
            return false;
    });
}

const between = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (matchedObjs[i][input.key] > input.min && matchedObjs[i][input.key] < input.max)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            return (obj[input.key] > input.min && obj[input.key] < input.max);
        } else
            return false;
    });
}

module.exports = {
    eq,
    lt,
    lte,
    gt,
    gte,
    between
}