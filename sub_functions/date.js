const {
    filter,
    isUndefined,
    isNull,
    isEmpty
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
                let keyDate = new Date(matchedObjs[i][input.key]).getTime();
                let valueDate = new Date(input.value).getTime();
                if (keyDate === valueDate)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            let keyDate = new Date(obj[input.key]).getTime();
            let valueDate = new Date(input.value).getTime();
            return keyDate === valueDate ? true : false;
        } else
            return false;
    });
}

const before = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                let keyDate = new Date(matchedObjs[i][input.key]).getTime();
                let valueDate = new Date(input.value).getTime();
                if (keyDate < valueDate)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            let keyDate = new Date(obj[input.key]).getTime();
            let valueDate = new Date(input.value).getTime();
            return keyDate < valueDate ? true : false;
        } else
            return false;
    });
}

const after = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        let obj = deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                let keyDate = new Date(matchedObjs[i][input.key]).getTime();
                let valueDate = new Date(input.value).getTime();
                if (keyDate > valueDate)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            let keyDate = new Date(obj[input.key]).getTime();
            let valueDate = new Date(input.value).getTime();
            return keyDate > valueDate ? true : false;
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
                let keyDate = new Date(matchedObjs[i][input.key]).getTime();
                let minValueDate = new Date(input.min).getTime();
                let maxValueDate = new Date(input.max).getTime();
                if (keyDate > minValueDate && keyDate < maxValueDate)
                    return true;
                else
                    false;
            }
        } else if (!isUndefined(obj)) {
            let keyDate = new Date(obj[input.key]).getTime();
            let minValueDate = new Date(input.min).getTime();
            let maxValueDate = new Date(input.max).getTime();
            return keyDate > minValueDate && keyDate < maxValueDate ? true : false;
        } else
            return false;
    });
}

module.exports = {
    eq,
    before,
    after,
    between
}