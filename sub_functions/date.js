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
        deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                let keyDate = new Date(matchedObjs[i][input.key]).getTime();
                let valueDate = new Date(input.value).getTime();
                if (keyDate === valueDate)
                    return true;
                else
                    false;
            }
        } else
            return false;
    });
}

const before = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                let keyDate = new Date(matchedObjs[i][input.key]).getTime();
                let valueDate = new Date(input.value).getTime();
                if (keyDate < valueDate)
                    return true;
                else
                    false;
            }
        } else
            return false;
    });
}

const after = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                let keyDate = new Date(matchedObjs[i][input.key]).getTime();
                let valueDate = new Date(input.value).getTime();
                if (keyDate > valueDate)
                    return true;
                else
                    false;
            }
        } else
            return false;
    });
}

const between = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        deepSearch(o, input.key, matchedObjs);
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
        } else
            return false;
    });
}

const known = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (!isUndefined(matchedObjs[i][input.key]) && !isNull(matchedObjs[i][input.key]) && !isEmpty(matchedObjs[i][input.key]))
                    return true;
                else
                    false;
            }
        } else
            return false;
    });
}

const unknown = (input, arr) => {

    return filter(arr, function (o) {
        let matchedObjs = [];
        deepSearch(o, input.key, matchedObjs);
        if (matchedObjs.length != 0) {
            for (let i = 0; i < matchedObjs.length; i++) {
                if (isUndefined(matchedObjs[i][input.key]) || isNull(matchedObjs[i][input.key]) || isEmpty(matchedObjs[i][input.key]))
                    return true;
                else
                    false;
            }
        } else
            return true;
    });
}


module.exports = {
    eq,
    before,
    after,
    between,
    known,
    unknown
}