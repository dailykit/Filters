function deepSearch(object, key, matchedObjs) {
    if (object.hasOwnProperty(key)) {
        return object;
    }
    // returns the object in which the key has been found 
    for (var i = 0; i < Object.keys(object).length; i++) {
        if (typeof object[Object.keys(object)[i]] == "object") {
            // recurse on the value of the key if it is of type 'object'
            var o = deepSearch(object[Object.keys(object)[i]], key, matchedObjs);
            if (o != null && o != undefined && matchedObjs != undefined)
                matchedObjs.push(o); //push the object in the array in which the key has been found.
        } else if (Object.keys(object)[i] == "content") {
            // if the key is 'content' recurse through the json file after parsing it.
            let arr = JSON.parse(object[Object.keys(object)[i]]);
            for (let i = 0; i < arr.length; i++) {
                let o = deepSearch(arr[i], key, matchedObjs);
                if (o != null && o != undefined && matchedObjs != undefined) {
                    matchedObjs.push(o);
                }
            }
        }
    }

    return; // final return after searching. 
}

module.exports = {
    deepSearch
}