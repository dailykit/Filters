const dataJson = require('./data.json');
const data1Json = require('./data1.json');

const stringDataJson = JSON.stringify(dataJson);
const stringData1Json = JSON.stringify(data1Json);

// 'data' is the main array of objects.
// content key contains the stringified json files for each object respectively.

const data = [{
        "name": "abc.json",
        "path": "appname/data/entityname/folder1/folder1.1/file.json",
        "createdAt": "2020-07-17T07:45:44.661+00:00",
        "content": stringDataJson
    },
    {
        "name": "def.json",
        "path": "appname/data/entityname/folder1/def.json",
        "createdAt": "2020-05-17T07:45:44.661+00:00",
        "content": stringData1Json
    }
];

module.exports = {
    data
}